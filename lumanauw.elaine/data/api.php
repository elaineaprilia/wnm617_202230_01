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



function makeUpload($file,$folder) {
   $filename = microtime(true) . "_" . $_FILES[$file]['name'];

   if(@move_uploaded_file(
      $_FILES[$file]['tmp_name'],
      $folder.$filename
   )) return ["result"=>$filename];
   else return [
      "error"=>"File Upload Failed",
      "filename"=>$filename
   ];
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


     case "recent_bagel_locations":
         return makeQuery($c,"SELECT *
            FROM `bagel_data` a
            JOIN (
               SELECT lg.*
               FROM `location_data` lg
               WHERE lg.id = (
                  SELECT lt.id
                  FROM `location_data` lt
                  WHERE lt.bagel_id = lg.bagel_id
                  ORDER BY lt.date_create DESC
                  LIMIT 1
               )
            ) l
            ON a.id = l.bagel_id
            WHERE a.user_id = ?
            ORDER BY l.bagel_id, l.date_create DESC
         ", $p);

















      /* INSERT */


      case "insert_user":
         $r = makeQuery($c,"SELECT id FROM `user_data` WHERE `username`=? OR `email` = ?", [ $p[0], $p[1] ]);
         if(count($r['result']))
            return ["error"=>"Username or Email already exists"
         // ,document.getElementById("id-pw-exist").innerHTML = "<p style='color:red' id='subheading'>Whoops, it looks like your username or password is wrong. Try again.</p>"
         ];

         makeQuery($c,"INSERT INTO
            `user_data`
            (`username`,`email`,`password`,`img`,`date_create`)
            VALUES
            (?, ?, md5(?), 'https://via.placeholder.com/400/?text=USER', NOW())
            ", $p, false);
         return ["id"=>$c->lastInsertId()];

      case "insert_bagel":
         makeQuery($c,"INSERT INTO
            `bagel_data`
            (`user_id`,`type`,`spread`,`price`,`description`,`img`,`date_create`)
            VALUES
            (?, ?, ?, ?, ?, 'https://via.placeholder.com/400/?text=new-bagel!', NOW())
            ", $p, false);
         return ["id"=>$c->lastInsertId()];

      case "insert_location":
         makeQuery($c,"INSERT INTO
            `location_data`
            (`bagel_id`,`lat`,`lng`,`description`,`img`,`icon`,`date_create`)
            VALUES
            (?, ?, ?, ?, 'https://lumanauw.xyz/aau/wnm617/lumanauw.elaine/lib/icon/bagel-icon.png', 'https://lumanauw.xyz/aau/wnm617/lumanauw.elaine/lib/icon/bagel-icon.png', NOW())
            ", $p, false);
         return ["id"=>$c->lastInsertId()];



      /* UPDATE */

      case "update_user":
         $r = makeQuery($c,"UPDATE
            `user_data`
            SET
               `name` = ?,
               `username` = ?,
               `email` = ?
            WHERE `id` = ?
            ",$p,false);
         if(isset($r['error'])) return $r;
         return ["result"=>"Success"];

      case "update_password":
         $r = makeQuery($c,"UPDATE
            `user_data`
            SET
               `password` = md5(?)
            WHERE `id` = ?
            ",$p,false);
         if(isset($r['error'])) return $r;
         return ["result"=>"Success"];

      case "update_bagel":
         $r = makeQuery($c,"UPDATE
            `bagel_data`
            SET
               `type` = ?,
               `spread` = ?,
               `price` = ?,
               `description` = ?
            WHERE `id` = ?
            ",$p,false);
         if(isset($r['error'])) return $r;
         return ["result"=>"Success"];

      case "location_data":
         $r = makeQuery($c,"UPDATE
            `location_data`
            SET
               `description` = ?
            WHERE `id` = ?
            ",$p,false);
         if(isset($r['error'])) return $r;
         return ["result"=>"Success"];



      /* UPLOAD */

      case "update_user_image":
         $r = makeQuery($c,"UPDATE
            `user_data`
            SET `img` = ?
            WHERE `id` = ?
            ",$p,false);
         if(isset($r['error'])) return $r;
         return ["result"=>"Success"];

      case "update_bagel_image":
         $r = makeQuery($c,"UPDATE
            `bagel_data`
            SET `img` = ?
            WHERE `id` = ?
            ",$p,false);
         if(isset($r['error'])) return $r;
         return ["result"=>"Success"];





      /* DELETE */

      case "delete_bagel":
         $r = makeQuery($c,"DELETE FROM
            `bagel_data`
            WHERE `id` = ?
            ",$p,false);
         if(isset($r['error'])) return $r;
         return ["result"=>"Success"];



















      case "check_signin":
         return makeQuery($c, "SELECT id from `user_data` WHERE `username` = ? AND `password` = md5(?)", $p);


      default:
         return ["error"=>"No Matched Type"];
   }
}



if(!empty($_FILES)) {
   $r = makeUpload("image","../uploads/");
   die(json_encode($r));
}


$data = json_decode(file_get_contents("php://input"));

echo json_encode(
   makeStatement($data),
   JSON_NUMERIC_CHECK
);
