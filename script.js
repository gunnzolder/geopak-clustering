var rectangle;
var originalBounds;
var map;

function initialize() {
    center = new google.maps.LatLng(50.460220588157405, 30.54536819458009);
	var mapOptions = {
	    center: center,
		zoom: 5
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var markers = [];
	for (var i = 0; i < 200; i++) {
	    for (var j = 0; j < 200; j++) {
	        var latLng = new google.maps.LatLng(center.lat() + i/100*Math.random(), center.lng() + j/100*Math.random());
	        var marker = new google.maps.Marker({position: latLng });
	        marker.setMap(map);
	        markers.push(marker);
	    }
	}
	//var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'images/m' });
	var markerCluster = new MarkerClusterer(map, markers, {
		imagePath: 'custom/m',
		//styles: [{
		//	'textColor': 'white',
		//	'textSize': 13
		//}
		//
		//]
		styles:
			[{
			height: 53,
			url: "custom/m1.png",
			width: 53,
			'textColor': 'white',
			'textSize': 13
		},
		{
			height: 56,
			url: "custom/m2.png",
			width: 56,
			'textColor': 'white',
			'textSize': 13
		},
		{
			height: 66,
			url: "custom/m3.png",
			width: 66,
			'textColor': 'white',
			'textSize': 13
		},
		{
			height: 78,
			url: "custom/m4.png",
			width: 78,
			'textColor': 'white',
			'textSize': 13
		},
		{
			height: 90,
			url: "custom/m5.png",
			width: 90,
			'textColor': 'white',
			'textSize': 13
		}]
	});
}

google.maps.event.addDomListener(window, 'load', initialize);