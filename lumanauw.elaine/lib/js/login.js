const checkLoginForm = async() => {
   let user = $("#welcomeback-login-username").val();
   let pass = $("#welcomeback-login-password").val();

   console.log(user,pass)


   let founduser = await query({
      type:'check_signin',
      params: [user,pass]
   })

   if (founduser.result.length > 0) {
      // logged in
      console.log('success');
      sessionStorage.userId = founduser.result[0].id;
      $("#login-form")[0].reset();
   } else {
      // not logged in
      console.log('failure');
      sessionStorage.removeItem('userId');
   document.getElementById("wrongCredentials").innerHTML = "<p style='color:red' id='subheading'>Whoops, it looks like your username or password is wrong. Try again.</p>";
   }

   checkUserId();
}





const checkUserId = () => {
   let p = ["#login-page","#signup-page",""];

   if (sessionStorage.userId === undefined) {
      // not logged in
      if(!p.some(o => o === window.location.hash))
         $.mobile.navigate("#");
   } else {
      // logged in
      if(p.some(o => o === window.location.hash))
         $.mobile.navigate("#nav-page");
   }
}

function dontGo(event) {
    event.preventDefault();
}