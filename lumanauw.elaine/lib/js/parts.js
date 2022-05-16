const makeBagelList = templater(o=>`   
      <a href="#bagel-page" data-id="${o.id}" class="js-bagel-jump">
         <div class="image-nav-1" style="background-image: url(${o.img});">
         </div>
      <div class="display-flex">
         <p class="gallery-darkmode">${o.type}</p>
      </div>
`);


const displayProfileIcon = o =>`
    <h1>${o.username}</h1>
    
      <div class="display-flex flex-row">

          <div class="image-icon" id="moon-icon" onclick="myFunction()"></div>

          
         <a href="#profile-page">
          <div class="image-icon" id="profile-icon" style="background-image: url('${o.img}');"  onclick="window.location='#profile-page';"></div>
         <a href="#" data-activate="#edit-profilepic">
        </a>

`;


const makeBagelPopupBody = o =>`
   <div class="display-flex space-between js-bagel-jump noclick-children" data-id="${o.bagel_id}" style="display:flex;justify-content:space-evenly;">
      <img src="${o.img}" alt="" style="width:30%">
   <div>
   <h2>${o.type}</h2>
   <p>${o.spread}</p>
   <p>$ ${o.price}</p>
   </div>
</div>
`;





const makeUserProfilePage = o =>`
      <div="display-flex flex-row">
         <img src="${o.img}" id="edit-profilepic-img" />
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
      <div class="image-bagel" style="background-image: url(${o.img});"></div>


`;

const makeBagelProfilePage = o => `
<div style="transform: translate(0, -50px); !important">
 <div class="card" style="width:auto !important;margin:0 !important;padding-bottom: 20px; !important;">
  <div class="display-flex flex-column">
   <div class="display-flex space-between">
    <h1>${o.type}</h1>
    <div class="display-flex flex-row">
    <a href="#edit-bagel"><div id="edit-bagelpic"></div></a>
    <a href="#delete-bagel" data-activate="#delete-modal"><div class="js-bagel-delete" id="delete-bagelpic"></div></a>
    </div>
    </div>
     <br>
    <h3>Spread</h3>
    <p>${o.spread}</p>
    <h3>Price</h3>
    <p>${o.price}</p>
    <h3>Description</h3>
    <p>${o.description}</p>
    <div class="map-details"> 
  <div data-role="main" class="map-placeholder" style="height:100px !important; position: relative !important;border-radius:10px;">
</div>
</div>
</div>
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


