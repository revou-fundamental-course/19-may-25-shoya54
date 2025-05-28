
$('#formKonversi').on('submit', function (ev) {
  ev.preventDefault();
  var regexInput = /^(\+|\-)?\d+(\,\d+)?$/
  var inputSuhu = this.inputKonversi.value;
  customReset();
  if (regexInput.test(inputSuhu)) {
    $('#notifikasi').addClass('alert-success');
    $('#notifikasi i').prop('class', 'bi bi-people');
    $('#notifikasi span').html(inputSuhu);
  } else {
    $('#notifikasi').addClass((inputSuhu.length > 0) ? 'alert-danger' : 'alert-warning');
    $('#notifikasi i').prop('class', (inputSuhu.length > 0) ? 'bi bi-x-octagon-fill' : 'bi bi-exclamation-diamond-fill');
    $('#notifikasi span').html((inputSuhu.length > 0) ? 'Input salah.' : 'Input suhu belum diisi.');
    $('#notifikasi').show();
    $(this).find('input[name="inputKonversi"]').addClass('is-invalid').focus();
  }
});

$('#formKonversi').bind('reset', customReset);

function customReset() {
  $('#notifikasi').hide();
  $('#notifikasi').prop('class', 'alert');
  $('#notifikasi i').prop('class', '');
  $('#notifikasi span').html('');
  $('#inputKonversi').removeClass('is-invalid');
}

function doKonversi(f) {
  f.preventDefault();
  console.log(f);
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
