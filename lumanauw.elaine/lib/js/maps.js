
const makeMap = async (target, center) => {
   await checkData(()=>window.google);

   new google.maps.Map($("#recent-page .map")[0], {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
   });
}