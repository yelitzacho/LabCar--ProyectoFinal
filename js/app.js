function initMap() {
    var laboratoria = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: laboratoria
    });
    var marker = new google.maps.Marker({
      position: laboratoria,
      map: map
    });
}