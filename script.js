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

	function generateMarkers() {
		var markers = [];
		for (var i = 0; i < 100; i++) {
			for (var j = 0; j < 100; j++) {
				var latLng = new google.maps.LatLng(center.lat() + i/25*Math.random(), center.lng() + j/25*Math.random());
				var marker = new google.maps.Marker({position: latLng });
				marker.setMap(map);
				markers.push(marker);
			}
		}
		return markers
	}

	var clusterOptions = function(path){
		return {
			styles:
				[{
					height: 53,
					url: path+"1.png",
					width: 53,
					'textColor': 'white',
					'textSize': 13
				},
				{
					height: 56,
					url: path+"2.png",
					width: 56,
					'textColor': 'white',
					'textSize': 13
				},
				{
					height: 66,
					url: path+"3.png",
					width: 66,
					'textColor': 'white',
					'textSize': 13
				},
				{
					height: 78,
					url: path+"4.png",
					width: 78,
					'textColor': 'white',
					'textSize': 13
				},
				{
					height: 90,
					url: path+"5.png",
					width: 90,
					'textColor': 'white',
					'textSize': 13
				}]
		}
	}

	var markerCluster = new MarkerClusterer(map, generateMarkers(), clusterOptions('custom/m'));
	var journalCluster = new MarkerClusterer(map, generateMarkers(), clusterOptions('custom/j'));
}

google.maps.event.addDomListener(window, 'load', initialize);