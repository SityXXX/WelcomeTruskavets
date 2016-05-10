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

});

//# sourceMappingURL=main.js.map
