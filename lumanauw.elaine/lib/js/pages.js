
//nav-page
const NavPage = async() => {
  let {result:bagels} = await query({
  	type:'bagels_by_user_id',
  	params:[sessionStorage.userId]
  })

  // .then(d=>{
  // 	console.log(d)
  // })

	console.log(bagels)
	$("#nav-page .gallery-control").html(makeBagelList(bagels));
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

}

const MapPage = async() => {

}