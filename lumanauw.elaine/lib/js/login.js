
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
   }

   checkUserId();
}

const checkUserId = () => {
   let p = ["#login-page","#signup-page",""];

   if (sessionStorage.userId === undefined) {
      // not logged in
      if(!p.some(o => o === window.location.hash))
         $.mobile.navigate("#signup-page");
   } else {
      // logged in
      if(p.some(o => o === window.location.hash))
         $.mobile.navigate("#nav-page");
   }
}