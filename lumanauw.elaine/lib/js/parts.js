



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
    <h1>${o.type}</h1>
     <br>
    <h3>Rating</h3>
    <p>${o.rating}</p>
    <h3>Price</h3>
    <p>$4.25</p>
    <h3>Description</h3>
    <p>${o.description}</p>
    <div class="map-details"> 
  <div data-role="main" class="map-placeholder" style="height:100px !important; border-radius:10px;">
<img src="lib/icon/location-pin.png" class="pin" style="transform:translate(0,120px);">
</div>
</div>
</div>
</div>
</div>

`;