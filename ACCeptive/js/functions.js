$(window).on('resize', function(){
    var win = $(this);

    if (win.width() <= 900) {
      $('nav').removeAttr('id');
      $('nav').removeAttr('class');
    } else {
      location.reload();
    }
});
