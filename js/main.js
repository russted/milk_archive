
	var ul = $("#thumbnails ul");
	var width = ul.width();
	var ulChildren = $("#thumbnails ul li");
	var thumbWidth = ulChildren.width(); 
	var thumbCount = ulChildren.length;
	var thumbPadding = thumbCount * 2;
	var newWidth = thumbWidth * thumbCount;
/* 	var scrollbar = 15; */
	var finalWidth = newWidth + thumbPadding;


 function changeWidth() {
 
 /* do some magic */
 

 	$(ul).css({'width' : finalWidth + 'px'});
 	
	console.log(finalWidth);
	
};


(function($) {
    $(window).load(function() {
        changeWidth();
    }),
    
$(function() {
    ul.jScrollPane();
	console.log('hello');
});    
})(jQuery);