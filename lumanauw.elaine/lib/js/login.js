const checkLoginForm = () => {
   let user = $("#welcomeback-login-username").val();
   let pass = $("#welcomeback-login-password").val();

   console.log(user,pass)

   if (user === 'elaine' && pass === 'pass') {
      // logged in
      console.log('success');
      sessionStorage.userId = 3;
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

