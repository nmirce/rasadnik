// Initialize and add the map
function initMap() {
    // The location of Sofora
    var sofora = {lat: 45.327587, lng: 20.440412};
    // The map, centered at Sofora
    var map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 15, 
        center: sofora
    });
    // The marker, positioned at Sofora
    var marker = new google.maps.Marker({position: sofora, map: map});
  }

