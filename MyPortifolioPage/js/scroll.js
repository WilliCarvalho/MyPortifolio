let documento = $('html, body');
  $('li a').click(function(){
    documento.animate({
      scrolltop: $($.attr(this,'href')).offset().top
    }, 500);
    return false;
  });
