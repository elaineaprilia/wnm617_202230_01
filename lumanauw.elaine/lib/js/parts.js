const makeBagelList = templater(o=>`   
      <a href="#bagel-page" data-id="${o.id}" class="js-bagel-jump">
         <div class="image-nav-1" style="background-image: url('${o.img}');">
         </div>
      <div class="display-flex">
         <p class="gallery-darkmode">${o.type}</p>
      </div>
`);




const makeLocationList = templater( o=>`   
<div class="js-bagel-jump card display-flex flex-row" style="margin:0; margin-bottom:10px; !important">
  <img src="${o.img}" style="width:40px;height:40px;">
    <div class="display-flex flex-column" style="padding-left:10px;">
      <h1 id='location-lat'>${o.type}</h1>
      <p id='location-lng'>${o.address}</p>
  </div>
</div>
</div>
</div>
`);





const displayProfileIcon = o =>`
    <h1>Hello, ${o.username}! 🥯</h1>
    
      <div class="display-flex flex-row">

          <div class="image-icon" id="moon-icon" onclick="myFunction()"></div>

          
         <a href="#profile-page">
          <div class="image-icon" id="profile-icon" style="background-image: url('${o.img}');"  onclick="window.location='#profile-page';"></div>
         <a href="#" data-activate="#edit-profilepic">
        </a>

`;


const makeBagelPopupBody = o =>`
   <div class="display-flex space-between js-bagel-jump noclick-children" data-id="${o.bagel_id}" style="display:flex;justify-content:space-evenly;">
      <img src="${o.img}" alt="" style="width:100px;height:100px;margin-right:10px;">
   <div>
   <h2>${o.type}</h2>
   <p>${o.spread}</p>
   <button style="padding:5px;">View details</button>
   </div>
</div>
`;





const makeUserProfilePage = o =>`
      <div="display-flex flex-row">
         <img src="${o.img}" id="edit-profilepic-img" 

      style="-webkit-box-shadow: 11px 16px 23px 4px rgba(0,0,0,0.08); 
box-shadow: 11px 16px 23px 4px rgba(0,0,0,0.08);"

         />
      </div>
      <div class="display-flex flex-column align-items-center">
         <h2 style="a">@${o.username}</h2>
         <p style="a">${o.email}</p>
         <br>
         <p style="color:orange;"><a href="#user-edit-photo-page">Edit profile picture</a></p>
      </div>




     <div class="modal" id="edit-profilepic">
         <div class="modal-back" data-deactivate="#edit-profilepic"></div>
         <div class="modal-popup">
          <div class="modal-head text-align-center">
        <div class="modal-head text-align-center" data-activate="edit-profilepic">Edit profile image
           <div class="display-flex flex-column" style="padding-top:10px;">
         <a href="#profile-page" data-deactivate="#logout-modal">

      <div>



         <button style="padding:10px;width:100%;"><a href="#bagel-edit-photo-page">Upload from gallery</a></button>
         <button><a href="#"><button style="padding:10px;width:100%;" class="button-outline">Cancel</button></a>
         </div>
        </div>
        </div>

<style>
input[type="file"] {
    display: none;
}
.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    border-radius:40px;
}
</style>
`;


const makeBagelImage = o =>`
      <div class="image-bagel">
      <img src="${o.img}">
      -webkit-box-shadow: 11px 16px 23px 4px rgba(0,0,0,0.08); 
box-shadow: 11px 16px 23px 4px rgba(0,0,0,0.08);

      "></div>


`;

const makeBagelProfilePage = o => `
<div style="transform: translate(0, -50px); !important">

   <a href="#bagel-edit-photo-page">
    <button style="padding:10px;margin-bottom:10px;

-webkit-box-shadow: 11px 16px 23px 4px rgba(0,0,0,0.02); 
box-shadow: 11px 16px 23px 4px rgba(0,0,0,0.02);

    ">Change Image</button>
   </a>


 <div class="card" style="width:auto !important;margin:0 !important;padding-bottom: 20px; !important;

-webkit-box-shadow: 11px 16px 23px 4px rgba(0,0,0,0.07); 
box-shadow: 11px 16px 23px 4px rgba(0,0,0,0.07);



 ">
  <div class="display-flex flex-column">
   <div class="display-flex space-between">
    <h1>${o.type}</h1>
    </div>
     <br>
    <h3>Spread</h3>
    <p>${o.spread}</p>
    <h3>Price</h3>
    <p>${o.price}</p>
    <h3>Description</h3>
    <p>${o.description}</p>
    <div class="map-details"> 
  <div data-role="main" class="map-placeholder" style="height:150px !important; position: relative !important;border-radius:10px;">
   </div>
</div>
</div>
</div>

<div class="display-flex flex-row space-between">

   <a href="#edit-bagel">
    <button class="button-outline edit-sm display-flex  align-items-center justify-content">
      <div id="edit-bagelpic"></div>
      <p style="padding-bottom:0; !important">Edit Details</p>
   </button>
   </a>

    <button class="js-bagel-delete button-outline edit-sm display-flex align-items-center justify-content"
    onclick="history.go(-2);">
      <div id="delete-bagelpic"></div>
      <p style="padding-bottom:0; !important">Delete</p>
   </button>


</div>
</div>

`;






const FormControlInput = ({namespace,name,displayname,type,placeholder,value=""}) => {
   return `<div class="form-control">
      <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
      <input data-role="none" class="form-input" type="${type}" placeholder="${placeholder}" id="${namespace}-${name}" value="${value}">
   </div>`;
}
const FormControlTextarea = ({namespace,name,displayname,placeholder,value=""}) => {
   return `<div class="form-control">
      <label class="form-label" for="#${namespace}-${name}">${displayname}</label>
      <textarea data-role="none" class="form-input" placeholder="${placeholder}" id="${namespace}-${name}">${value}</textarea>
   </div>`;
}




const makeBagelForm = (bagel,namespace = "bagel-add") => {
return `
${FormControlInput({
   namespace,
   name:"type",
   displayname:"Bagel type",
   type:"text",
   placeholder:"Kind of bagel...",
   value:bagel.type,
})}
${FormControlInput({
   namespace,
   name:"spread",
   displayname:"Spread",
   type:"text",
   placeholder:"what spread?",
   value:bagel.spread,
})}
${FormControlInput({
   namespace,
   name:"price",
   displayname:"Price",
   type:"text",
   placeholder:"how much?",
   value:bagel.price,
})}
${FormControlTextarea({
   namespace,
   name:"description",
   displayname:"Description",
   placeholder:"let your heart out...",
   value:bagel.description,
})}
`;
}


const makeUserForm = (user,namespace = "user-edit") => {
return `
${FormControlInput({
   namespace,
   name:"username",
   displayname:"Username (@)",
   type:"text",
   placeholder:"Your @",
   value:user.username,
})}
${FormControlInput({
   namespace,
   name:"Name",
   displayname:"Name",
   type:"text",
   placeholder:"Your name",
   value:user.name,
})}
${FormControlInput({
   namespace,
   name:"email",
   displayname:"Email",
   type:"text",
   placeholder:"Type an Email",
   value:user.email,
})}
`;
}


