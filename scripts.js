$(document).ready(function () {

  // формат даты для дейтпикера
  $('.datepicker').datepicker({
    autoclose: true,
    format: 'M dd, yyyy',
    todayHighlight: true,
    orientation: "auto",
    toggleActive: true
  });

  // подставка сегодняшней даты
  $('.datepicker').each(function () {
    $(this).datepicker('setDate', 'local');
  });

  // меняем инпут для 2-й строки на enabled, если чекбокс кликнут
  $('.complain').click(function () {
    if ($(this).is(':checked'))
      $(".complain-text").prop('disabled', false);
  });

  // меняем инпут для 3-й строки на enabled, если чекбокс кликнут
  $('.stopped-treatment').click(function () {
    if ($(this).is(':checked'))
      $(".stopped-treatment-text").prop('disabled', false);
  });

  //выводить среднее значение в 3-м столбце
  $('.table-min').keyup(function () {

    var total = 0,
      valid_labels = 0,
      average;

    $('.table-min').each(function () {
      var val = parseInt($(this).val(), 10);
      if (!isNaN(val)) {
        valid_labels += 1;
        total += val;
      }
    });

    $('.average-table').val(total / valid_labels);
  });

  //выводить среднее значение в 4-м столбце
  $('.chair-min').keyup(function () {

    var total = 0,
      valid_labels = 0,
      average;

    $('.chair-min').each(function () {
      var val = parseInt($(this).val(), 10);
      if (!isNaN(val)) {
        valid_labels += 1;
        total += val;
      }
    });

    $('.average-chair').val(total / valid_labels);
  });

  //добавление строки в таблицу при клике на кнопку
  $('.append-a-row').click(function () {
    $('tr').eq(-2).after('<tr><td class="col-xs-2"><input class="form-control input-sm datepicker" type="text"></td><td class="col-xs-2"><input class="form-control input-sm" type="text"></td><td class="col-xs-1"><input class="form-control input-sm table-min" type="text" onblur="validate()"></td><td class="col-xs-1"><input class="form-control input-sm chair-min" type="text"></td><td class="col-xs-6"><label><input type="checkbox"> Pt. tolerated treatment well</label><br><label><input class="complain" type="checkbox"> Pt. c/o after use of</label><label><input type="radio" name="inlineRadioOptions"> Scoliosis Table</label><label><input type="radio" name="inlineRadioOptions"> Chair</label><input class="input-sm complain-text" type="text" disabled><br><label><input class="stopped-treatment" type="checkbox"> Stopped treatment prematurely due to</label><input class="input-sm stopped-treatment-text" type="text" disabled></td></tr>');
  });

});