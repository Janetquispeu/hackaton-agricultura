var template="<div class='contenedor-resultados'><div class='col-md-6'><div>{{latiude}}</div><div>{{longitude}}</div><div>{{nombre}}</div></div><div class='col-md-6'><img src='{{url}}' class='img-url'></div></div>"
var contenedor=$("#contenedor");
var map;

function hideLoader(){
  document.getElementById('floatingBarsG').style.display="none";
}
(function() {
  var navLinks = $('nav ul li a'),
  navH = $('nav').height(),
  section = $('section'),
  documentEl = $(document);
  documentEl.on('scroll', function() {
    var currentScrollPos = documentEl.scrollTop();
    section.each(function() {
      var self = $(this);
      if ( self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight())) {
        var targetClass = '.' + self.attr('class') + '-marker';
        navLinks.removeClass('active');
        $(targetClass).addClass('active');
      }
    });  
  });
})();


function initMap(){
  var mapProp = {
      center: new google.maps.LatLng(-12.117917 ,-77.037708),
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map'), mapProp);

  function leeJson(){
    var html=" ";
    $.getJSON("https://janetquispeu.github.io/practicando/lugares.json",function(datos){

      var val1=$("#palta").val();
      var val2=$("#esparragos").val();

      $("#btn-buscar").click(function(){
        if(val1=="1"){

          $.each(datos["palta"], function(idx,primo) {

            html+="<br>"+ template.replace("{{latiude}}","latitud:"+primo.latitud)
                          .replace("{{longitude}}","longitud:"+primo.longitud)
                          .replace("{{nombre}}","Nombre:"+primo.nombre)
                          .replace("{{url}}",primo.url);
                          console.log(primo.url);
                          console.log(primo.nombre);

            var lat=parseFloat(primo.latitud);
            var lon=parseFloat(primo.longitud);
            console.log(lat);
            console.log(lon);

            function createMarker(lat,lon) {
              var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lon),
                // map: map,
                clickable: true,
                content: 'Map Marker',
                markerOffset: new google.maps.Point(0,4),
                title: "latitud:"+lat+ "  longitud:"+lon

              });
              marker.setMap(map);

            };    
            createMarker(lat,lon);
            contenedor.html(html);    
            
          });
            
        } 
      });
    

    });
  }
  leeJson();
};