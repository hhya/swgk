$(function(){
    var index_about = $(".index-about").offset().top;

    $(window).scroll(function(){
        var this_scrollTop = $(document).scrollTop();
		var gun= $(".index-about").offset().top - $(window).height()+50
		
        if(this_scrollTop>gun){
            $(".index-about .cont").addClass('fadein');
//		alert(gun);
        }
		else{
			  $(".index-about .cont").removeClass('fadein');
			}
			
			var xuan=$(".index-hx-bg").offset().top - $(window).height()+100
			var xuan2=$(".index-jg-bg").offset().top - $(window).height()+100
			
			
        if(this_scrollTop>xuan){
            $(".index-hx-bg .index-p-list ul li").addClass('xuan');
			
//alert(xuan);
        }
		else{
			  $(".index-hx-bg .index-p-list ul li").removeClass('xuan');
			 
			}
				
        if(this_scrollTop>xuan2){
            $(".index-jg-bg .index-p-list ul li").addClass('xuan');
			
//alert(xuan);
        }
		else{
			$(".index-jg-bg .index-p-list ul li").removeClass('xuan');
			 
			}
			
    });
});