
$(() => {
   checkUserId();

   // EVENT DELEGATION
   $(document)

   .on("pagecontainerbeforeshow", function(event, ui){
      console.log(ui.toPage[0].id)

      // PAGE ROUTING. ada di pages.js
      switch(ui.toPage[0].id) {
         case "nav-page": NavPage(); break;
         case "map-page": ChooseLocationPage(); break;

         case "user-edit-photo-page": UserEditPhotoPage(); break;
         case "bagel-edit-photo-page": BagelEditPhotoPage(); break;
 
         case "edit-password": submitPasswordEdit(); break;

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

   .on("submit", "#signup-form", function(e) {
      e.preventDefault();
      submitUserSignup();
   })



   // FORM SUBMISSION CLICKS

   .on("click", ".js-submit-bagel-edit", function() {
      submitBagelEdit();
   })

   .on("click", ".js-submit-user-edit", function() {
      submitUserEdit();
   })

   .on("click", ".js-submit-location-add", function() {
      getReverseGeocodingData().then ((address) => {
        
   console.log(address)

      submitLocationAdd(address);
   })})


   .on("click", ".js-submit-password-edit", function() {
      submitPasswordEdit();
   })




   // .on("change",".imagepicker input", function(e){
   //    console.log(e)
   // })



   .on("change",".imagepicker input", function(e){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d)
         let filename = `uploads/${d.result}`;
         $(this).parent().prev().val(filename)
         $(this).parent().html({
            "background-image":`url('${filename}');
            `
         })
      })
   })

//IMAGE

   .on("click", ".js-submit-user-upload", function(e) {
      let image = $("#user-edit-photo-image").val();
      query({
         type: "update_user_image",
         params: [image, sessionStorage.userId]
      }).then(d=>{
         if(d.error) throw(d.error);
         history.go(-1);
      })
})




   .on("click", ".js-submit-bagel-upload", function(e) {
      let image = $("#bagel-edit-photo-image").val();
      query({
         type: "update_bagel_image",
         params: [image, sessionStorage.bagelId]
      }).then(d=>{
         if(d.error) throw(d.error);
         history.go(-1);
      })
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


   .on("click",".js-bagel-delete", function(e) {
      submitDeleteBagel();
   })

   .on("click",".js-location-choose-bagel", function(e) {
      $(".location-bagel").val(sessionStorage.bagelId)
      console.log()
   })  






   .on("submit", "#list-search-form", function(e) {
      e.preventDefault();
      let s = $(this).find("input").val();
      checkSearchForm(s);
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

