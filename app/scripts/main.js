jQuery(document).ready(function() {

  jQuery('.search__field').on('input', function (){

    if(jQuery(this).val != '') {

      jQuery('.search__results').css('display', 'block');

    } else {

      jQuery('.search__results').css('display', 'none');

    }

  });

  jQuery('#myModal').appendTo('body');

  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('rixos-location'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  jQuery('.resort').hover(
    function(){
      jQuery(this).css('overflow','visible');
    },
    function() {
      jQuery(this).css('overflow','hidden');
    }
  );

  jQuery('.resort__booking-btn').each(function(index, element) {
    jQuery(element).on('click', function(event) {
      event.preventDefault();
      var resort = jQuery('.resort__name a').text();
      var img = jQuery('.resort__img');
      var description = jQuery()
      jQuery('#quickBookingModal').modal();
    });
  });

});

//# sourceMappingURL=main.js.map
