
$(() => {
   checkUserId();

   // EVENT DELEGATION
   $(document)

   .on("pagecontainerbeforeshow", function(event, ui){
      console.log(ui.toPage[0].id)

      // PAGE ROUTING. ada di pages.js
      switch(ui.toPage[0].id) {
         case "nav-page": NavPage(); break;
         case "map-page": MapPage(); break;
         case "edit-profile": UserEditPage(); break;
         case "bagel-page": BagelPage(); break;
         case "profile-page": ProfPage(); break;
         case "edit-bagel": BagelEditPage(); break;
         case "add-new": BagelAddPage(); break;
      }
   })

   // FORM SUBMISSIONS
   .on("submit", "#login-form", function(e) {
      e.preventDefault();
      checkLoginForm();
   })


   // FORM CLICKS
   .on("click", ".js-submit-bagel-add", function() {
     submitBagelAdd();
   })



   // CLICKS
   .on("click", ".js-logout", function() {
      sessionStorage.removeItem("userId");
      checkUserId();
   })



   .on("click", ".js-bagel-jump", function(e) {
      try {
         e.preventDefault();
         sessionStorage.bagelId = $(this).data('id');
         $.mobile.navigate("#bagel-page");
      } catch(e) {
         throw("No id detected");
      }

   })   


   // ACTIVATE TOOLS
   .on("click", "[data-activate]", function() {
      let target = $(this).data("activate");
      $(target).addClass("active")
   })
   .on("click", "[data-deactivate]", function() {
      let target = $(this).data("deactivate");
      $(target).removeClass("active")
   })
   .on("click", "[data-toggle]", function() {
      let target = $(this).data("toggle");
      $(target).toggleClass("active")
   })
   .on("click", "[data-activateone]", function() {
      let target = $(this).data("activateone");
      $(target).addClass("active")
         .siblings().removeClass("active")
   })

})




//TOGGLE LIGHT DARK//

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
};

