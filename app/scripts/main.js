'use strict';

$('#resort, #room').selectpicker({
  width: '100%',
  liveSearch: true
});

$('#adults, #children').selectpicker({
  width: '100%'
});

$('.input-daterange').datepicker({
  startDate: 'today',
  language: $('html').attr('lang'),
  templates: {
    leftArrow: '&#8249;',
    rightArrow: '&#8250;'
  },
  todayBtn: true
});

$('.search__field').on('input', function (){

  if($(this).val != '') {

    $('.search__results').css('display', 'block');

  } else {

    $('.search__results').css('display', 'none');

  }

});

$('#myModal').appendTo("body");

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('rixos-location'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
//# sourceMappingURL=main.js.map
