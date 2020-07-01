function(response) {
  console.log(response);
  var stations = [];
  for (var i =0; i < Object.keys(response.Feature[0].Property.Station).length; i++) {
      stations.push(response.Feature[0].Property.Station[i].Name);
  }
var geometry = response.Feature[0].Geometry.Coordinates.split(',');
$('.addressTable td').eq(0).text(response.Feature[0].Property.Address);
$('.addressTable td').eq(1).text(geometry[0]);
$('.addressTable td').eq(2).text(geometry[1]);
$('.addressTable td').eq(3).text(stations);
}