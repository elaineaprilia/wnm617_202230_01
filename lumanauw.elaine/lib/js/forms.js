



const submitBagelAdd = async () => {
   let type = $("#bagel-add-form-type").val();
   let spread = $("#bagel-add-form-spread").val();
   let price = $("#bagel-add-form-price").val();
   let description = $("#bagel-add-form-description").val();


   console.log({type,spread,price,description})


   if(type!="" && spread!="" && price!="" && description!="") {
      let {id,error} = await query({
         type: 'insert_bagel',
         params: [sessionStorage.userId,type,spread,price,description]
      });

      if(error) throw(error);

      sessionStorage.bagelId = id;
      history.go(-2);
   } else {
      throw("Not all data present");
   }


}


const submitBagelEdit = async () => {
   let type = $("#bagel-edit-form-type").val();
   let spread = $("#bagel-edit-form-spread").val();
   let price = $("#bagel-edit-form-price").val();
   let description = $("#bagel-edit-form-description").val();

   console.log({type,spread,price,description})


   let {result,error} = await query({
      type: 'update_bagel',
      params: [type,spread,price,description,sessionStorage.bagelId]
   });

   if(error) throw(error);


}

const submitDeleteBagel = async () => {
   let {result,error} = await query({
      type: 'delete_bagel',
      params: [sessionStorage.bagelId]
   });

   if(error) throw(error);
   history.go(-1);
}





const submitUserSignup = async () => {
   let username = $("#signup-username").val();
   let email = $("#signup-name").val();
   let password = $("#signup-password").val();
   let password2 = $("#signup-password2").val();

   console.log({username,email,password,password2})


   if(password2!=password) {
("Passwords don't match");
   document.getElementById("pw-dont-match").innerHTML = "<p style='color:red' id='subheading'>Passwords don't match.</p>";
   } else
   if(username!="" && email!="" && password!="") {
      let {id,error} = await query({
         type: 'insert_user',
         params: [username,email,password]
      });

      if(error) throw(error);

      sessionStorage.userId = id;
      $.mobile.navigate("#nav-page-empty-state");
   } else {
      throw("Not all data present");
   }
}





const submitUserEdit = async () => {
   let name = $("#user-edit-form-Name").val();
   let username = $("#user-edit-form-username").val();
   let email = $("#user-edit-form-email").val();

   console.log({name,username,email})

   let {result,error} = await query({
      type: 'update_user',
      params: [name,username,email,sessionStorage.userId]
   });

   if(error) throw(error);

   history.go(-2);
}








const submitPasswordEdit = async () => {
   let password = $("#edit-password").val();

   console.log({password})

   let {result,error} = await query({
      type: 'update_password',
      params: [password,sessionStorage.userId]
   });

   // if(error) throw(error);

   // history.go(-1);

}



const submitLocationAdd = async (address) => {
   let bagel = $(".location-bagel").val();
   let lat = $("#location-lat").val();
   let lng = $("#location-lng").val();
   let description = $("#location-description").val();

   console.log({bagel,lat,lng,description,address})


   let {result,error} = await query({
      type: 'insert_location',
      params: [bagel,lat,lng,description,address]
   });

   if(error) console.log(error);
}




const getReverseGeocodingData = async() => {

  var lat = document.getElementById('location-lat').value;
  var lng = document.getElementById('location-lng').value;
  let description = $("#Address").val();

  console.log({lat,lng,description})

    var latlng = new google.maps.LatLng(lat, lng);

    // This is making the Geocode request
    var geocoder = new google.maps.Geocoder();
     let response = await geocoder.geocode({ 'latLng': latlng },
      // (results, status) =>{
    );

     // if (status !== google.maps.GeocoderStatus.OK) {
     //        alert(status);
     //    }
        // This is checking to see if the Geoeode Status is OK before proceeding
        // if (status == google.maps.GeocoderStatus.OK) {
        //     var address = (results[1].formatted_address);
      let address = response.results[0].formatted_address;

      document.getElementById("Address").innerHTML = value= address;
        // }


      console.log(address)

      return address;


}




const checkSearchForm = async (s) => {
   let {result:bagels,error} = await query({
      type: 'search_bagels',
      params: [s, sessionStorage.userId]
   });

   if(error) throw(error);

   makeBagelListSet(bagels);
}





const checkFilter = async (f,v) => {
   let {result:bagels,error} = await query({
      type: 'filter_bagels',
      params: [f, v, sessionStorage.userId]
   });

   if(error) throw(error);

   makeBagelListSet(bagels);
}