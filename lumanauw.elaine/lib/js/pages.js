
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

const ProfPage = async() => {

}

const BagelPage = async() => {

}

const MapPage = async() => {

}