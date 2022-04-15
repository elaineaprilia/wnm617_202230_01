



const makeBagelList = templater(o=>`
      <a href="#bagel-page" data-id="${o.id}">
         <div class="image-nav-1" style="background-image: url(${o.img});">
         </div>
`);




const makeUserProfilePage = o =>`
      <img src="${o.img}" id="edit-profilepic-img" /></a>
      <div class="display-flex flex-column">
         <h2>@${o.username}</h2>
      </div>
`;
