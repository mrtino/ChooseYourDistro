$('.btn-infosi').click(function() {
    $('#infosi').hide();
    $('#ootb').show();
});
$('.btn-ootb').click(function() {
    $('#ootb').hide();
    $('#old').show();
});

$('.btn-olds').click(function() {
    $('#old').hide();
    $('#rolling').show();
});
$('.btn-oldd').click(function() {
    $('#old').hide();
    $('#vold').show();
});
$('.btn-vold').click(function() {
    $('#vold').hide();
    $('#rolling').show();
});
$('.btn-rolling').click(function() {
    $('#rolling').hide();
    $('#inssi').show();
});
$('.btn-inssi').click(function() {
    $('#inssi').hide();
    $('#Result').show();
});
$('.btn-restart').click(function() {
    $('#infosi').show();
    $('#ootb').hide();
    $('#old').hide();
    $('#rolling').hide();
    $('#inssi').hide();
    $('#Result').hide();
});
