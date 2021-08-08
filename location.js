//
//
// let button = document.getElementById("get-location");
// let latText = document.getElementById("latitude");
// let longText = document.getElementById("longitude");
//
// button.addEventListener("click", function() {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;
//
//     latText.innerText = lat.toFixed(2);
//     longText.innerText = long.toFixed(2);
//   });
// });



// Grab UI Elements
let button = document.getElementById('button')
let long = document.getElementById('long')
let lat = document.getElementById('lat')



button.addEventListener('click',()=>{
  console.log('getting current position ')
  navigator.geolocation.getCurrentPosition((position)=>{
      let _lat = position.coords.latitude
      let _long = position.coords.longitude
      // display result
      long.innerText =   _long.toFixed(2)
      lat.innerText = _lat.toFixed(2)

      console.log(position.coords) 

  })
})
