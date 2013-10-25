'use strict';

/* Directives */


angular.module('GuestBookApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('mapHolder', function() {
    return {
      restrict: 'C',
      link: function(scope, elem, attrs) {
        var directionsDisplay = new google.maps.DirectionsRenderer({ draggable: true });
        var directionsService = new google.maps.DirectionsService();
        var map;

        var routeClear = elem.find('#routeClear');
        var routeGo = elem.find('#routeGo');
        var routeMode = elem.find('#routeMode');
        var routeTo = elem.find('#routeTo');
        var routeFrom = elem.find('#routeFrom');

        var myOptions = {
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: new google.maps.LatLng(34.06337000000001, -118.170510),
            disableDefaultUI: true,
            scaleControl: true,
            zoomControl: true,

             };
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById("directions"));

        routeMode.on("change", function() { calcRoute(); });
        routeGo.on("click", function() { calcRoute(); });
        routeClear.on("click", function() { directionsDisplay.setDirections({ routes: [] }); });
/*
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(34.0653700000001, -118.165010),
          map: map
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, this);
        });

        var marker2 = new google.maps.Marker({
          position: new google.maps.LatLng(34.0699944005297, -118.16820734443665),
          map: map
        });

        google.maps.event.addListener(marker2, 'click', function() {
          infowindow2.open(map, this);
        });

        var marker3 = new google.maps.Marker({
          position: new google.maps.LatLng(34.0658195014605, -118.17142599525452),
          map: map
        });

        google.maps.event.addListener(marker3, 'click', function() {
          infowindow3.open(map, this);
        });

        

        var content = '<strong>Parking Lot 1</strong>';

        var infowindow = new google.maps.InfoWindow({
          content: content
        });

        var content2 = '<strong>Parking Lot 2</strong>';

        var infowindow2 = new google.maps.InfoWindow({
          content: content2
        });

        var content3 = '<strong>Parking Lot 3</strong>';

        var infowindow3 = new google.maps.InfoWindow({
          content: content3
        });

*/

        // navigator.geolocation.getCurrentPosition(
        //   function( position ){

        //     // Check to see if there is already a location.
        //     // There is a bug in FireFox where this gets
        //     // invoked more than once with a cahced result.

        //     // Log that this is the initial position.
        //     console.log( "Initial Position Found" );

        //     // Add a marker to the map using the position.
        //     var myOptions = {
        //         zoom: 14,
        //         mapTypeId: google.maps.MapTypeId.ROADMAP,
        //         center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        //     };

        //     map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        //   },
        //   function( error ){
        //     console.log( "Something went wrong: ", error );
        //     },
        //     {
        //         timeout: (5 * 1000),
        //         maximumAge: (1000 * 60 * 15),
        //         enableHighAccuracy: true
        //     }
        // );

        function calcRoute() {
            var request = {
                origin: routeFrom.val(),
                destination: new google.maps.LatLng(34.0658195014605, -118.17142599525452),
                travelMode: google.maps.TravelMode[routeMode.val()]
            };
            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        }
      }
    };
  });