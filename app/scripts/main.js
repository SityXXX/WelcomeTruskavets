$('#resort, #room').selectpicker({
  width: '100%',
  liveSearch: true
});

$('#adults, #children').selectpicker({
  width: '100%',
});


$('.input-daterange').datepicker({

  startDate: 'today',
  language: $('html').attr('lang')

});
