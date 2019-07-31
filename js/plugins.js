function mapaStart()  
{  
   var centerPoint = new google.maps.LatLng(52.384788, 16.924173);
   var mapSettings = {
     zoom: 11,
     center: centerPoint,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   };

   var map = new google.maps.Map(document.getElementById("map"), mapSettings);
   
   var info = new google.maps.InfoWindow();
   var markerPoint = new google.maps.LatLng(52.384788, 16.924173);
   var markerIcon = new google.maps.MarkerImage("img/cake.svg", 
                                                   new google.maps.Size(32,37), 
                                                   new google.maps.Point(0,0), 
                                                   new google.maps.Point(15,34));
   var markerSettings = {
      position: markerPoint,
      map: map,
      draggable: false,
      icon: markerIcon
   };

   var marker = new google.maps.Marker(markerSettings);
   google.maps.event.addListener(marker,'click',function(event){
        info.setContent('<div class="mapinfo"><strong>Parafia pw. św. Stanisława Biskupa i Męczennika</strong> <br />Bukowska 4<br />62-080 Ceradz Kościelny <br /> \
            <a href="https://www.google.pl/maps/dir//Parafia+pw.+%C5%9Bw.+Stanis%C5%82awa+Biskupa+i+M%C4%99czennika,+Bukowska+4,+62-080+Ceradz+Ko%C5%9Bcielny/@52.422455,16.5313341,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x470439072608909b:0x32f18ddfaffb89c8!2m2!1d16.591931!2d52.43837!3e0?hl=pl" onclick="window.open(this.href); return false;">Wyznacz trasę</a> \
            </div>'); 
        info.open(map, churchMarker);
    });
}