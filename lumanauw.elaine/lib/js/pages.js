
//nav-page
const NavPage = async() => {

   let {result} = await query({
      type:'recent_bagel_locations',
      params:[sessionStorage.userId]
   });
   console.log(result);

   let valid_bagels = result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[]);


   let map_el = await makeMap("#nav-page .map-placeholder");
   makeMarkers(map_el,valid_bagels)

   map_el.data("markers").forEach((m,i)=>{
      console.log(m)
      m.addListener("click",function(e){
         let bagel = valid_bagels[i];

         console.log(bagel)

         // Just Navigate
         // sessionStorage.animalId = animal.animal_id;
         // $.mobile.navigate("#animal-profile-page");


         // Open Google InfoWindow
         // map_el.data("infoWindow")
         //    .open(map_el.data("map"),m);
         // map_el.data("infoWindow")
         //    .setContent(valid_bagels[i].name);


         $("#map-drawer")
            .addClass("active")
            .find(".modal-body")
            .html(makeBagelPopupBody({...bagel, id:bagel.bagel_id}))
      })
   })

  let {result:bagels} = await query({
  	type:'bagels_by_user_id',
  	params:[sessionStorage.userId]
  })

	console.log(bagels)
	$("#nav-page .gallery-control").html(makeBagelList(bagels));

  console.log()

  let {result:locations} = await query({
    type:'locations_by_bagel_id',
    params:[sessionStorage.bagelId]
  })
}



//profile-page
const ProfPage = async() => {
  let{result:users} = await query({
    type:'user_by_id',
    params:[sessionStorage.userId]
  })
  let [user] = users;

  console.log(user)
  $("#profile-page .page-control").html(makeUserProfilePage(user));

}





const BagelPage = async() => {
  let{result:bagels} = await query({
    type:'bagel_by_id',
    params:[sessionStorage.bagelId]
  })
  let [bagel] = bagels;
  $("#bagel-page .image-bagel").css({"background-image":`url(${bagel.img})`})
  $("#bagel-page .page-control").html(makeBagelProfilePage(bagel));

  let {result:locations} = await query({
    type:'locations_by_bagel_id',
    params:[sessionStorage.bagelId]
  })
  console.log(locations)


  let map_el = await makeMap("#bagel-page .map-placeholder")
  makeMarkers(map_el,locations)

  // $("#bagel-page .page-control").html(makeBagelProfilePage(location));

}

const UserEditPage = async() => {
  let{result:users} = await query({
    type:'user_by_id',
    params:[sessionStorage.userId]
  })
  let [user] = users;

  $("#user-edit-form").html(makeUserForm(user,"user-edit-form"))
}



const BagelEditPage = async() => {
  let{result:bagels} = await query({
    type:'bagel_by_id',
    params:[sessionStorage.bagelId]
  })
  let [bagel] = bagels;

  $("#bagel-edit-form").html(makeBagelForm(bagel,"bagel-edit-form"))
}


const BagelAddPage = async() => {
  let{result:bagels} = await query({
    type:'bagel_by_id',
    params:[sessionStorage.bagelId]
  })
  let [bagel] = bagels;

  $("#bagel-add-form").html(makeBagelForm({},"bagel-add-form"))
}



const MapPage = async() => {

   let map_el = await makeMap("#map-page .map-placeholder");
   makeMarkers(map_el,valid_bagels)

}