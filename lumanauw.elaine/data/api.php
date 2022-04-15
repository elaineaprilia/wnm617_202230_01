<?php

function makeConn() {
   include_once "auth.php";
   try {
      $conn = new PDO(...Auth());
      $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
      return $conn;
   } catch(PDOException $e) {
      die('{"error":"'.$e->getMessage().'"}');
   }
}


// $r = PDO result
function fetchAll($r) {
   $a = [];
   while($row = $r->fetch(\PDO::FETCH_OBJ)) $a[] = $row;
   return $a;
}


/*
$c = connection
$ps = prepared statement
$p = parameters
*/

function makeQuery($c,$ps,$p,$makeResults=true) {
   try {
      if(count($p)) {
         $stmt = $c->prepare($ps);
         $stmt->execute($p);
      } else {
         $stmt = $c->query($ps);
      }

      $r = $makeResults ? fetchAll($stmt) : [];

      return [
         // "statement"=>$ps,
         // "params"=>$p,
         "result"=>$r
      ];
   } catch(PDOException $e) {
      return ["error"=>"Query Failed: ".$e->getMessage()];
   }
}


function makeStatement($data) {
   $c = makeConn();
   $t = $data->type;
   $p = $data->params;
//USERS, ANIMALS, LOCATIONS

   switch($t) {

      case "users_all":
         return makeQuery($c, "SELECT * FROM `user_data`", $p);

      case "bagels_all":
         return makeQuery($c, "SELECT * FROM `bagel_data`", $p);

      case "locations_all":
         return makeQuery($c, "SELECT * FROM `location_data`", $p);

      case "user_by_id":
         //return makeQuery($c, "SELECT * FROM `track_202230_users` WHERE `id` = ?", $p);
         return makeQuery($c, "SELECT `id`,`name`,`email`,`img`,`username` FROM `user_data` WHERE `id` = ?", $p);
      case "bagel_by_id":
         return makeQuery($c, "SELECT * FROM `bagel_data` WHERE `id` = ?", $p);
      case "location_by_id":
         return makeQuery($c, "SELECT * FROM `location_data` WHERE `id` = ?", $p);

      case "bagels_by_user_id":
         return makeQuery($c, "SELECT * FROM `bagel_data` WHERE `user_id` = ?", $p);
      case "locations_by_bagel_id":
         return makeQuery($c, "SELECT * FROM `location_data` WHERE `bagel_id` = ?", $p);







      case "check_signin":
         return makeQuery($c, "SELECT id from `user_data` WHERE `username` = ? AND `password` = md5(?)", $p);


      default:
         return ["error"=>"No Matched Type"];
   }
}


$data = json_decode(file_get_contents("php://input"));

echo json_encode(
   makeStatement($data),
   JSON_NUMERIC_CHECK
);
