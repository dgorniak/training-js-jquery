    var center = new google.maps.LatLng(51.1073, 17.0320);
    var options = {
       zoom: 12,
       center: center,
       mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var markers;
        
    var map =new google.maps.Map(document.getElementById("map"), options);

    function initMarkers(map, markerData) {
        var newMarkers = [],
            marker;
            
        for(var i=0; i<markerData.length; i++) {
            marker = new google.maps.Marker({
                map: map,
                draggable: true,
                position: markerData[i].latLng,
                visible: true
            }),
            boxText = document.createElement("div"),

            infoboxOptions = {
                 content: boxText,
                disableAutoPan: false,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-140, 0),
                zIndex: null,                
                closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
                closeBoxMargin: "12px 4px 2px 2px",
                infoBoxClearance: new google.maps.Size(1, 1),
                isHidden: false,
                pane: "floatPane",
                enableEventPropagation: false
            };
            
            newMarkers.push(marker);
            
            boxText.className = "text-box";
            
            boxText.innerHTML = markerData[i].city + "<br>" + markerData[i].street;

            newMarkers[i].infobox = new InfoBox(infoboxOptions);
            
            //Domknięcie
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    newMarkers[i].infobox.open(map, this);
                    map.panTo(markerData[i].latLng);
                }
            })(marker, i));
        }
        
        return newMarkers;
    }
    
    markers = initMarkers(map, [
     { latLng: new google.maps.LatLng(51.0859, 17.0128), city: "Wrocław", street: "Hallera"},
     { latLng: new google.maps.LatLng(51.1065, 17.0324), city: "Wrocław", street: "Kazimierza Wielkiego"},
     { latLng: new google.maps.LatLng(51.1164, 17.0508), city: "Wrocław", street: "Kościuszki" }
    ]);
