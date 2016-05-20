jQuery(document).ready(function() {

  jQuery('.search__field').on('input', function (){

    if(jQuery(this).val != '') {

      jQuery('.search__results').css('display', 'block');

    } else {

      jQuery('.search__results').css('display', 'none');

    }

  });

  jQuery('.modal').appendTo('body');

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

      var modal = jQuery('#quickBookingModal');
      var resort = jQuery(jQuery(this).closest('.resort'));
      var resortName = resort.find('.resort__name a').text();
      var resortLocation = resort.find('.location').text();
      var imgSrc = resort.find('.resort__img').attr('src');
      var resortImg = jQuery(document.createElement('img')).attr('src', imgSrc);
      var resortDescription = jQuery(resort).find('.resort__description').clone();
      var resortPrice = resort.find('.price').clone();
      var resortStars = resort.find('.stars').clone();

      modal.find('.quick-booking__stars-wrap').empty().append(resortStars);
      modal.find('.quick-booking__resort').text(resortName);
      modal.find('#qresort').val(resortName);
      modal.find('.location').text(resortLocation);
      modal.find('.quick-booking__img-wrap').empty().append(resortImg);
      modal.find('.quick-booking__description').empty().append(resortDescription);
      modal.find('.quick-booking__price').empty().append(resortPrice);

      modal.modal();
    });
  });

});

//# sourceMappingURL=main.js.map
