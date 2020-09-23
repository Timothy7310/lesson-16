ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [7.8381452, 98.29717508],
    zoom: 15,
    behaviors: ["drag"],
  });
  var myPlacemark = new ymaps.Placemark(
    [7.83814381, 98.29881076],
    {},
    {
      preset: "islands#redHomeIcon",
    }
  );
  myMap.geoObjects.add(myPlacemark);
}
// 7.83824199890253,98.2987783468867
// 7.83814381, 98.29881076
// 'islands#blueHotelIcon'
