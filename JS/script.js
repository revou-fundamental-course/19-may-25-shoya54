
$('#formKonversi').on('submit', function (ev) {
  ev.preventDefault();
  var regexInput = /^(\+|\-)?\d+(\.\d+)?$/
  var inputSuhu = this.inputKonversi.value;
  customReset();
  if (regexInput.test(inputSuhu)) {
    var hasilSuhu = ($('#inputKonversi').data('degree') === 'C') ?
      (inputSuhu * (9 / 5) + 32).toFixed(2) :
      ((inputSuhu - 32) * 5 / 9).toFixed(2);
    var penjelasan = ($('#inputKonversi').data('degree') === 'C') ?
      (inputSuhu + ' &deg;C * (9/5) + 32 = ' + hasilSuhu + ' &deg;F') :
      ('(' + inputSuhu + ' &deg;F - 32) * 5/9 = ' + hasilSuhu + ' &deg;C');
    $('#hasilKonversi').val(hasilSuhu);
    $('#perhitungan').html(penjelasan).show();

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
  $('div[role=alert]').hide();
  $('#notifikasi').prop('class', 'alert');
  $('#notifikasi i').prop('class', '');
  $('#notifikasi span').html('');
  $('#perhitungan').html('');
  $('#inputKonversi').removeClass('is-invalid');
}

function doReverse() {
  var ketKonv = $('#ketKonversi').html();
  var ketRslt = $('#ketHasil').html();
  $('#ketKonversi').html(ketRslt);
  $('#ketHasil').html(ketKonv);
  $('#inputKonversi').data('degree', $('#inputKonversi').data('degree') === 'C' ? 'F' : 'C');
  $('#inputKonversi').siblings('label').children('span').html(ketRslt);
  $('#hasilKonversi').siblings('label').children('span').html(ketKonv);
  $('#inputKonversi').val($('#hasilKonversi').val());
  $('#hasilKonversi').val('');
}
