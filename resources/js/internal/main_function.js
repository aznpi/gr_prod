// jquery.escape 1.0 - escape strings for use in jQuery selectors
// http://ianloic.com/tag/jquery.escape
// Copyright 2009 Ian McKellar <http://ian.mckellar.org/>
// Just like jQuery you can use it under either the MIT license or the GPL
// (see: http://docs.jquery.com/License)
(function() {
escape_re = /[#;&,\.\+\*~':"!\^\$\[\]\(\)=>|\/\\]/;
jQuery.escape = function jQuery$escape(s) {
  if (s === undefined) return '';
  var left = s.split(escape_re, 1)[0];
  if (left == s) return s;
  return left + '\\' + 
    s.substr(left.length, 1) + 
    jQuery.escape(s.substr(left.length+1));
}
})();

/**
 * Jquery Plugin to put an initial field value in form fields.
 * 
 * Fields that should get an initial value should have a fieldClass (default: initVal)
 * added as a class attribute. This indicates the field has an initial value to display.
 * The initial value should be specified in the title attribute.
 * 
 * The plugin will take care of adding the focus and blur handlers to the field to
 * add/remove the initial value. As well as a submit handler so the form values
 * are cleared before submission if they are the initial values.
 * 
 * Usage:
 * $('#myForm').initFieldVal();
 * 
 * To specify an alternative fieldClass you can pass a different name in options.
 * 
 * $('#myForm').initFieldVal({fieldClass: 'myFieldToInit'});
 * 
 * 
 * Before you submit a for you maybe want to clear initalValues, for validation
 * for example.
 * 
 * $('#myForm').initFieldVal('init);
 * 
 * @author Alan Morey <morey.alan@gmail.com>
 */
(function($) {
    var options;
    var fieldSelector
    
    var methods = {
        init: function(opts) {
            options = $.extend({}, $.fn.initFieldVal.defaultOptions, opts);

            return this.each(function () {
                var $this = $(this),
                    data = $this.data('initFieldVal');
                
                if (!data) {
                    $this.data('initFieldVal', {
                        options: options
                    })
                }
                
                fieldSelector = '.' + options.fieldClass;
                
                $(this)
                    .find(fieldSelector)
                        .each(initFieldValue)
                        .focus(clearFieldValue)
                        .blur(initFieldValue);
            });
        },
        clear: function() {
            return this.each(function () {
                var $this = $(this),
                    data = $this.data('initFieldVal');
                
                $this.find('.' + data.options.fieldClass).each(clearFieldValue);
            })
        }
    }

    $.fn.initFieldVal = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exists on jQuery.initFieldVal');
        }
    }
    
    $.fn.initFieldVal.defaultOptions = {
        fieldClass: 'initVal' // Marks a field as having an initial value in its title attribute
    };
    
    function initFieldValue() {
        var $field = $(this);
        var val = $.trim($field.val());
        if (val == '' || val == $field.attr('title')) {
            $field
                .addClass(options.fieldClass)
                .val($field.attr('title'));
        }
    }

    function clearFieldValue() {
        var $field = $(this);
        var val = $field.val() 
        if (val != '' && val == $field.attr('title') ) {
            $field
                .filter(fieldSelector)
                .val('');
        }
        
        $field.removeClass(options.fieldClass);
    }
})(jQuery);

$(document).on('click', '.mega-dropdown', function(e) {
  e.stopPropagation()
})

$(document).ready(function(){
	
	$("#main-logo-container").click(function(){
		
		window.location.href="/";
		
	});
	
	//home page behavior functions
	$(".navbar-nav li").click(function(){
	
		$(this).addClass('active-red');
		
	});
	
	$('.carousel-control.left').click(function() {
	  $('#main-carousel').carousel('prev');
	});

	$('.carousel-control.right').click(function() {
	  $('#main-carousel').carousel('next');
	});
	$('#middle-container .caption-container').click(function(){
		var url = $(this).attr('rel');
		
		if(url){
			
			window.location = url;
			
		}
	});
	$('.btn-player,button#btn-company-player').click(function () {
        var src = 'https://www.youtube.com/embed/4YaO-PFBRas?autoplay=1';
        $('#company-profile-video').modal('show');
        $('#company-profile-video iframe').attr('src', src);
    });

    $('#company-profile-video button').click(function () {
        $('#company-profile-video iframe').removeAttr('src');
    });

    $('#contact-us-form button').click(function () {
        $('#contact-us-form iframe').removeAttr('src');
    });
    
    $('#social-widget-container >div,#social-media-container div div').click(function () {
        var url = $(this).attr('rel');
        var id = $(this).attr('id');
        var tar = $(this).attr('tar');
        
        if(id == 'phone-container'){
        	
        	var src = url;
            $('#contact-us-form').modal('show');
            $('#contact-us-form iframe').attr('src', src);
        	
        }else{
        	
        	if(tar == 'social'){
            	
            	 window.open(url,'_blank');
            	 
    		}else{
    			
    			window.location = url;
    			
    		}
        	
        }
       
    });
    
  
    
    //home page product links
    $('#box-2,#box-3,#box-4').click(function(){
    	var prodCat = $(this).attr('rel');
    	window.location = "/products/"+prodCat;
    });
    
    //open specific tabs
    var url = window.location.hash.replace('-tab','');
	
	if (url.match('#')) {
	    $('.nav-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
	} 
	
	// Change hash for page-reload
    $('.nav-tabs a').on('shown', function (e) {
        window.location.hash = e.target.hash;
    });
    
      //open tabs with link
    $("a[data-tab-destination]").on('click', function() {
        var tab = $(this).attr('data-tab-destination');
        var type = $(this).attr('href');
        $("#"+tab).click();
        setTimeout(function(){window.scrollTo(window.scrollX, window.scrollY - 100);},300);
        
        
    });
    
    //login menu
    
    $( "#btn-login-container" ).click(function(){
    
    	$( "#menu" ).fadeToggle( "fast" );
    
    });
    
    $("#btn-login-container #menu .link").click(function(){
    	
    	var url = $(this).attr('rel');
    	
    	window.location = url;
    	
    });
    
    //icon links
    
    $("i.target").click(function(){
    	
    	var url = $(this).attr('rel');
    	
    	window.location = url;
    	
    });
    $("div.target").click(function(){
    	
    	var url = $(this).attr('rel');
    	
    	window.location = url;
    	
    });
    
    //footer links
    
    $('.footer-links-container ul li, .list ul li').click(function(){
    	
    	var url = $(this).attr('rel');
    	
    	if(url){
    		window.location = url;
    	}
    });
    
    //role container links
    
    $('.role-container  >div div,.services-container >div div').click(function(){
    	
    	var url = $(this).attr('rel');
    	
    	if(url){
    		window.location = url;
    	}
    });
    
    //product-icon
    
    $('.product-nav-container >div').click(function(){
    	
    	var url = $(this).attr('rel');
    	
    	if(url){
    		window.location = url;
    	}
    });
    
    $('#product-icon-container >div').click(function(){
    	
    	var url = $(this).attr('rel');
    	
    	if(url){
    		window.location = url;
    	}
    });
    
    //partner and contact us form validation
    
    $('#partner-contact-us-form,#contact-us-form').validate({
        rules: {
        	inputFirstName: {
                minlength: 2,
                required: true
            },
            inputLastName: {
                minlength: 2,
                required: true
            },
            inputCompany: {
                minlength: 2,
                required: true
            },
            inputJobTitle: {
                minlength: 2,
                required: true
            },
            inputTelephone: {
                required: true,
                phoneUS: true
            },
            inputCountry: {
                minlength: 1,
                required: true
            },
            inputEmail: {
                required: true,
                email: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        }
    });
    
    
    //request quote for validation
    
    $('#quote-contact-us-form').validate({
        rules: {
        	inputFirstName: {
                minlength: 2,
                required: true
            },
            inputLastName: {
                minlength: 2,
                required: true
            },
            inputCompany: {
                minlength: 2,
                required: true
            },
            inputTelephone: {
                required: true,
                phoneUS: true
            },
            inputCountry: {
                minlength: 1,
                required: true
            },
            inputStateProv: {
                minlength: 1,
                required: true
            },
            inputEmail: {
                required: true,
                email: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        }
    });
    //demo form vaildation
    
    $('#demo-contact-us-form').validate({
        rules: {
        	inputFirstName: {
                minlength: 2,
                required: true
            },
            inputLastName: {
                minlength: 2,
                required: true
            },
            inputTelephone: {
            	required: true,
                phoneUS: true
            },
            inputEmail: {
                required: true,
                email: true
            }
        },
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        }
    });
    
    //skrink nav
    $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $('.main-header-inner-container').addClass('shrink');
      } else {
        $('.main-header-inner-container').removeClass('shrink');
      }
    });
    
    $('#back-top').click(function(e){
		  
		  e.preventDefault();
		  
		  $('body,html').animate({
		    'scrollTop': 0
		  }, 700);
		  
	});

    
    //video support player
 
    
    if(GetQueryStringParams('tabId')){
    
        var tabId = GetQueryStringParams('tabId');
        $('.nav-tabs a[href=#'+tabId+']').tab('show') ;   

    }
    
    $('.support-video-play').click(function () {
        var src = $(this).attr('rel');
        $('#tutorial-video').modal('show');
        $('#tutorial-video iframe').attr('src', src);
    });

    $('#tutorial-video button').click(function () {
        $('#tutorial-video iframe').removeAttr('src');
    });
    
    //faq
    $('#faq-menu-container ul li').click(function(){
    	$("html, body").animate({ scrollTop: 0 }, 600);
    });
    
    
    //resources download button
    
    $('.btn-download').click(function () {
        var url = $(this).attr('rel');
        var tar = $(this).attr('target');
        
        if(tar){
			if(tar=='new'){
				
				window.open(url);
				
			}else{
				window.location.href = url;	
			}
			
		}else{
			window.location.href = url;
		}
        
    });
    
    //search product containers
    
    $('.search-product .btn-container').click(function () {
        var url = $(this).attr('rel');
        window.location.href = url;
    });
    //about us product icon containers
    
    $('#services-icon-container div div').click(function () {
        var url = $(this).attr('rel');
        window.location.href = url;
    });
    
    //global button url
    
    $('button').click(function () {
        var url = $(this).attr('rel');
        var id = $(this).attr('id');
        var tar = $(this).attr('target');
    	
    	if(url){
    		
    		if(id == 'contact-specialist'){
    			
    			var src = url;
    	        $('#contact-us-form').modal('show');
    	        $('#contact-us-form iframe').attr('src', src);
    			
    		}else{
    		
    			if(tar){
    				if(tar=='new'){
    					
    					window.open(url);
    					
    				}else{
    					window.location.href = url;	
    				}
    				
    			}else{
    				window.location.href = url;
    			}
    		}
    	}
 
    });
    
    //dropdown slider function
    
    $('.dropdown-container .open-info').click(function(){
    	
    	$('.dropdown-container .open-info').not(this).parent().parent().parent().next(".more-info").slideUp().prev().find(".open-info").show();
    	
    	$(this).hide().parent().parent().parent().next(".more-info").slideDown();
    });
    
    $('.dropdown-container .close-info').click(function(){
    	$(this).parent().slideUp().prev().find(".open-info").show();
    });
    
    //leadership injection 
    
    $('dl.caption-container .arrow-anchor').click(function(){
    	
    	var globalTarInfo = $('.more-info-container');
    	var infoContent = $(this).parent().children('dd.more-info').html();
    	var infoContainer = $(this).parent().parent().parent().parent().next('.more-info-container');
    	var redPointerClass = '.red-pointer';
    	var redPointer = $(this).parent().parent().next(redPointerClass);
    	var targetInfoContainer = infoContainer.children('.col-md-12').html;
    	var relVal = $(this).parent().attr('rel');
    	var targetRelVal = infoContainer.children('.col-md-12').attr('rel');
    	
    	if(infoContainer.is(':visible')){
    		
    		
    		
    		
    		if(relVal != targetRelVal){
    			
    			$(redPointerClass).hide();
    			redPointer.show();
    			infoContainer.children('.col-md-12').empty().append(infoContent).attr('rel',relVal);
    			
    		}else{
    			
    			$(redPointerClass).hide();
    			infoContainer.slideUp();
    		}
    		
    	}else{
    		
    		infoContainer.children('.col-md-12').empty().append(infoContent).attr('rel',relVal);
    		$(redPointerClass).hide();
    		redPointer.show();
        	infoContainer.slideDown();
    		
    	}
    	
    	
    });
    
    $('.more-info-container a.close-target-info').click(function(){
    	
    	if($('.red-pointer').is(':visible')){
    		$('.red-pointer').hide();
    	}
    	
    	$(this).parent().parent().hide();
    	$(this).parent().parent().children('.col-md-12').empty();
    });
    
    //HR category links
    $('#hr-category .category').click(function () {
        var url = $(this).attr('rel');
        window.location.href = url;
    });
    $('#horizontal-nav li').click(function () {
        var url = $(this).attr('rel');
        if(url){
        	window.location.href = url;
        }
    });
    
    //initialize popover.js
    $(function () {
    	$('[data-toggle="popover"]').popover({
    		
    		html:true,
    		container: 'body'
    		
    	});
    	
    	$('#btn-demo').popover({
    		
    		trigger:'hover'
    		
    	});
    });
    
    
    
    //update year on awards page
    
    $('ul#year-drop li a').click(function(){
    	
    	var yearVar = $(this).html();
    	
    	$('#year-tab li a span#year').html(yearVar);
    	
    });
    
    //cookie disclaimer
    function createCookie(name, value, days) {
		if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
		} else var expires = "";
		document.cookie = name + "=" + value + expires + "; path=/";
		}
		
		function readCookie(name) {
				var nameEQ = name + "=";
				var ca = document.cookie.split(';');
				for (var i = 0; i < ca.length; i++) {
						var c = ca[i];
						while (c.charAt(0) == ' ') c = c.substring(1, c.length);
						if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
				}
				return null;
		}
		
		function eraseCookie(name) {
				createCookie(name, "", -1);
		}
		
		var $body = $("body"),
				sCookieName = "cookie-warning",
				$cookiewarning = $("div." + sCookieName + " .btn");
		
		function setCookieWarning(active) {
				(!!active) ? $body.addClass(sCookieName): $body.removeClass(sCookieName)
		}
		
		$cookiewarning.on("click", function() {
				createCookie(sCookieName, 1, 0)
				setCookieWarning(false);
		});
		
		// cookie warning
		if (readCookie(sCookieName) != 1) {
				setCookieWarning(true);
		}
		
		$(".remove-cookie").on("click", function() {
				eraseCookie(sCookieName);
				setCookieWarning(false);
		})
   
});


//Product Page BreadCrumbs
var path = "";
var href = document.location.pathname;
var host = document.location.hostname;
var s = href.split("/");

for (var i=2;i<(s.length-1);i++) {
	
	if(i != s.length){
		path+=s[i]+" / ";
	}
}

path = path.substring(0,path.length - 2);
path = path.replace('-','&nbsp;');
var breadcrumbs = "<a href='http://"+host+"'>Home</a> / " + path;

//end Product Page BreadCrumbs

//read query strings
var GetQueryStringParams = function (sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
};

var flip = function(id){
	
	$('img#'+id).siblings().removeClass('show-image');
	$('img#'+id).addClass('show-image');
	
}
 //country/state population


var changeStateProv = function(){
	
	var stateArray = ['AK|Alaska','AL|Alabama','AR|Arkansas','AZ|Arizona','CA|California','CO|Colorado','CT|Connecticut','DC|District of Columbia','DE|Delaware','FL|Florida','GA|Georgia','HI|Hawaii','IA|Iowa','ID|Idaho','IL|Illinois','IN|Indiana','KS|Kansas','KY|Kentucky','LA|Louisiana','MA|Massachusetts','MD|Maryland','ME|Maine','MI|Michigan','MN|Minnesota','MO|Missouri','MT|Montana','NC|North Carolina','ND|North Dakota','NE|Nebraska','NH|New Hampshire','NJ|New Jersey','NM|New Mexico','NV|Nevada','NY|New York','OH|Ohio','OK|Oklahoma','OR|Oregon','PA|Pennsylvania','RI|Rhode Island','SC|South Carolina','SD|South Dakota','TN|Tennessee','TX|Texas','UT|Utah','VA|Virginia','VT|Vermont','WA|Washington','WI|Wisconsin','WV|West Virginia','WY|Wyoming'];
	
	var provinceArray = ['AB|Alberta','BC|British Columbia','MB|Manitoba','NB|New Brunswick','NL|Newfoundland and Labrador','NT|Northwest Territories','NS|Nova Scotia','NU|Nunavut','ON|Ontario','PE|Prince Edward Island','QC|Quebec','SK|Saskatchewan','YT|Yukon'];
	
	var selectedCountry = $('select.select-country option:selected').val();
	$('select.select-state').append().empty();
	
	if(selectedCountry == 'usa'){
		
		for(var i = 0; i < stateArray.length; i++){
			
			var stateList = stateArray[i].split('|'); 
			var optionString = "<option value='"+stateList[0]+"'>"+stateList[1]+"<\/option>";
			
			$('select.select-state').append(optionString);
			
		}
		
	}else if(selectedCountry == 'can'){
		
		for(var i = 0; i < provinceArray.length; i++){
			
			var provinceList = provinceArray[i].split('|'); 
			var optionString = "<option value='"+provinceList[0]+"'>"+provinceList[1]+"<\/option>";
			
			$('select.select-state').append(optionString);
			
		}
		
	}else{
		
		var optionString = "<option value='intl'>International<\/option>";
		
		$('select.select-state').append(optionString);
		
	}
}