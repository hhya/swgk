$(function(){

	var nav = $('#header'),
		doc = $(document),
		win = $(window);

	win.scroll(function() {

		if (doc.scrollTop() > 80) {
			nav.addClass('scrolled');
		} else {
			nav.removeClass('scrolled');
		}

	});
	
	win.scroll();
});


/*----*/

/*----**/
$(function(){  
  $('a.golink').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top - 90;
        $('html,body').animate({
          scrollTop: targetOffset
        },
        500);
        return false;
      }
    }
  });
})



/*-----*/


$('#myCarousel').carousel({
			interval: 2000
		});

		
		$('[id^=carousel-selector-]').click( function(){
		  var id_selector = $(this).attr("id");
		  var id = id_selector.substr(id_selector.length -1);
		  id = parseInt(id);
		  $('#myCarousel').carousel(id);
		  $('[id^=carousel-selector-]').removeClass('selected');
		  $(this).addClass('selected');
		});

		
		$('#myCarousel').on('slid', function (e) {
		  var id = $('.item.active').data('slide-number');
		  id = parseInt(id);
		  $('[id^=carousel-selector-]').removeClass('selected');
		  $('[id=carousel-selector-'+id+']').addClass('selected');
		});


