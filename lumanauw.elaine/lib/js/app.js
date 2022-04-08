
$(() => {
   checkUserId();

   // EVENT DELEGATION
   $(document)

   // FORM SUBMISSIONS
   .on("submit", "#login-form", function(e) {
      e.preventDefault();
      checkLoginForm();
   })


   // CLICKS
   .on("click", ".js-logout", function() {
      sessionStorage.removeItem("userId");
      checkUserId();
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

