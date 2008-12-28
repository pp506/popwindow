/*
 * jQuery PopWindow v0.1
 * Author: Daniel Lopes => danielvlopes AT gmail DOT com
 * Company: www.areacriacoes.com.br
 *
 * Copyright (c) 2008, Daniel Lopes
 * licensed under the MIT-LICENCSE
 *
 * http://github.com/danielvlopes/popwindow/
 *
 * Depends:
 * jquery.bgiframe.js => http://plugins.jquery.com/project/bgiframe
 */
(function ($) {

$.fn.popwindow = function (popWindow,options) {		

	  var defaults = { position: "bottom", offsetTop:10 , offsetSides:0, transitionSpeed:"fast" };
	  var opts = $.extend(defaults, options);
	
		this.click(function(event){	
			var element  = $(event.target);
			var elementPosition = element.position();
			var newTop, newLeft;
			
			switch(opts.position){
			case "bottom" :
				newTop  = elementPosition.top  + element.height() + opts.offsetTop;
				newLeft = (elementPosition.left + (element.width()/2 ) ) - ( $(popWindow).width()/2 )  + opts.offsetSides ;				
			  break;    
			case "top" :
				newTop  = elementPosition.top - element.height() - $(popWindow).height() - opts.offsetTop;
				newLeft = (elementPosition.left + (element.width()/2 ) ) - ( $(popWindow).width()/2 )  + opts.offsetSides ;
			  break;
			case "right" :
				newTop  = elementPosition.top  + opts.offsetTop;
				newLeft = elementPosition.left + element.width() + opts.offsetSides ;				
			  break;
			case "left" :
				newTop  = elementPosition.top  + opts.offsetTop;
				newLeft = elementPosition.left - $(popWindow).width() - opts.offsetSides ;				
			  break;						
			default:
				newTop  = elementPosition.top  + element.height() + opts.offsetTop;
				newLeft = (elementPosition.left + (element.width()/2 ) ) - ( $(popWindow).width()/2 )  + opts.offsetSides ;				
			}						
			
			$(popWindow).bgiframe();
		  $(popWindow).css({
				"left"		: newLeft,
				"top" 		: newTop,
			  "position":	"absolute",
			  "z-index"	:	"10"
			});
			
			// custom effect 
			$(popWindow).fadeToggle(opts.transitionSpeed);
			
		});
				
};

})(jQuery);

// custom effect
jQuery.fn.fadeToggle = function(speed, easing, callback) {
  return this.animate({opacity: 'toggle'}, speed, easing, callback); 
};