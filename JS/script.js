function doKonversi() {

}

function doReset() {
  $('form#konversi').trigger('reset');
  $('#ketKonversi').html('Celsius (&deg;C)');
  $('#ketHasil').html('Fahrenheit (&deg;F)');
  $('#inputKonversi').data('degree', 'C');
  $('#inputKonversi').siblings('label').children('span').html('Celsius (&deg;C)');
  $('#hasilKonversi').siblings('label').children('span').html('Fahrenheit (&deg;F)');
}

function doReverse() {
  let ketKonv = $('#ketKonversi').html();
  let ketRslt = $('#ketHasil').html();
  $('#ketKonversi').html(ketRslt);
  $('#ketHasil').html(ketKonv);
  $('#inputKonversi').data('degree', $('#inputKonversi').data('degree') === 'C' ? 'F' : 'C');
  $('#inputKonversi').siblings('label').children('span').html(ketRslt);
  $('#hasilKonversi').siblings('label').children('span').html(ketKonv);
  $('#inputKonversi').val($('#hasilKonversi').val());
}