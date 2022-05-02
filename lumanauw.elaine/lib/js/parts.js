const makeBagelList = templater(o=>`   
      <a href="#bagel-page" data-id="${o.id}" class="js-bagel-jump">
         <div class="image-nav-1" style="background-image: url(${o.img});">
         </div>
`);


const displayProfileIcon = o =>`

`;



const makeUserProfilePage = o =>`
      <img src="${o.img}" id="edit-profilepic-img" /></a>
      <div class="display-flex flex-column align-items-center">
         <h2 style="a">@${o.username}</h2>
      </div>
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
    <a href="#edit-bagel"><div id="edit-bagelpic"></div></a>
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


