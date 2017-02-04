var $TABLE = $('#table');


$('.valores').click(function(){
  $(this).val(5);
});

$('.table-add').click(function () {
  var columna="<tr><td contenteditable='true' class='valores'>-------</td><td contenteditable='true' class='valores'>-------</td><td contenteditable='true' class='valores'>-------</td><td><span class='table-remove glyphicon glyphicon-remove'></span></td><td><span class='table-up glyphicon glyphicon-arrow-up'></span><span class='table-down glyphicon glyphicon-arrow-down'></span></td></tr>";
  $(columna).appendTo($(".table"));
});

$('.table-remove').click(function () {
  $(this).parent().parent().remove();
  console.log($(this).parent().parent);
});

$('.table-up').click(function () {
  var $row = $(this).parents('tr');
  if ($row.index() === 1) return; // Don't go above the header
  $row.prev().before($row.get(0));
});

$('.table-down').click(function () {
  var $row = $(this).parents('tr');
  $row.next().after($row.get(0));
});

$('.btnGuardar').click(function () {
  alert("Tus datos se han guardado satisfactoriamente")
});





