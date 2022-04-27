
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

  console.log(bagel)
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



const MapPage = async() => {

   let map_el = await makeMap("#map-page .map-placeholder");
   makeMarkers(map_el,valid_bagels)

}