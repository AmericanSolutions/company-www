/*!
 * forbetterweb.com - Cover Business Template
 */

// Preloader
jQuery(window).load(function() {
    // will first fade out the loading animation
    jQuery("#status").fadeOut();
    // will fade out the whole DIV that covers the website.
    jQuery("#preloader").delay(1000).fadeOut("slow");
})

// HTML5 Placeholder
$(function() {
    $('input, textarea').placeholder();
});

// Video
(function($) {
    $(document).ready(function() {
        $(".player").mb_YTPlayer();
        $(document).ready(function() {
            if (!device.tablet() && !device.mobile()) {
                $('.video-controls').addClass(
                    'video-controls-visible');
            }
        });

        $('#video-play').click(function(event) {
            event.preventDefault();
            if ($(this).hasClass('ion-ios-play')) {
                $('.player').playYTP();
            } else {
                $('.player').pauseYTP();
            }
            $(this).toggleClass('ion-ios-play ion-ios-pause');
            return false;
        });

        $('#video-volume').click(function(event) {
            event.preventDefault();
            $('.player').toggleVolume();
            $(this).toggleClass('ion-android-volume-mute ion-volume-high');
            return false;
        });

    });
})(jQuery);

// Countdown
$('#clock').countdown('2016/10/31').on('update.countdown', function(event) {
       var $this = $(this).html(event.strftime(''
         + '<div><span>%-w</span>week%!w</div>'
         + '<div><span>%-d</span>day%!d</div>'
         + '<div><span>%H</span>hr</div>'
         + '<div><span>%M</span>min</div>'
         + '<div><span>%S</span>sec</div>'));
     });

// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
    if (isPhoneDevice) {
        //mobile
    } else {
        //desktop
        // Initialize WOW.js
        wow = new WOW({
            offset: 50
        })
        wow.init();
    }
});

// Parallax
$(document).ready(function(){
    if (!device.tablet() && !device.mobile()) {
        $(".parallax").addClass("fixed");
        $window = $(window);
        $('section[data-type="background"]').each(function(){
            var $scroll = $(this);
            $(window).scroll(function() {
                var yPos = -(($window.scrollTop() - $scroll.offset().top) / $scroll.data('speed'));
                var coords = '50% '+ yPos + 'px';
                $scroll.css({ backgroundPosition: coords });
            });
        });
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            $('.site-wrapper-inner').css({'opacity':(( 200-scroll )/400)+0.4});
        });

        /* Create HTML5 element for IE */
        document.createElement("section");
    }
});

/**
 * jQuery Animate Number
 * Developers: Arun David, Boobalan
 */

$(document).ready(function () {
//(function($){

    $(window).on("load",function(){
        $(document).scrollzipInit();
        $(document).rollerInit();
    });
    $(window).on("load scroll resize", function(){
        $('.numscroller').scrollzip({
            showFunction    :   function() {
                numberRoller($(this).attr('data-slno'));
            },
            wholeVisible    :     false,
        });
    });
    $.fn.scrollzipInit=function(){
        $('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>" );
    };
    $.fn.rollerInit=function(){
        var i=0;
        $('.numscroller').each(function() {
            i++;
            $(this).attr('data-slno',i);
            $(this).addClass("roller-title-number-"+i);
        });
    };
    $.fn.scrollzip = function(options){
        var settings = $.extend({
            showFunction    : null,
            hideFunction    : null,
            showShift       : 0,
            wholeVisible    : false,
            hideShift       : 0,
        }, options);
        return this.each(function(i,obj){
            $(this).addClass('scrollzip');
            if ( $.isFunction( settings.showFunction ) ){
                if(
                    !$(this).hasClass('isShown')&&
                    ($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.showShift)>($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))&&
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))<($(this).outerHeight()+$(this).offset().top-settings.showShift)
                ){
                    $(this).addClass('isShown');
                    settings.showFunction.call( this );
                }
            }
            if ( $.isFunction( settings.hideFunction ) ){
                if(
                    $(this).hasClass('isShown')&&
                    (($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.hideShift)<($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))||
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))>($(this).outerHeight()+$(this).offset().top-settings.hideShift))
                ){
                    $(this).removeClass('isShown');
                    settings.hideFunction.call( this );
                }
            }
            return this;
        });
    };
    function numberRoller(slno){
        var min=$('.roller-title-number-'+slno).attr('data-min');
        var max=$('.roller-title-number-'+slno).attr('data-max');
        var timediff=$('.roller-title-number-'+slno).attr('data-delay');
        var increment=$('.roller-title-number-'+slno).attr('data-increment');
        var numdiff=max-min;
        var timeout=(timediff*1000)/numdiff;
        //if(numinc<10){
        //increment=Math.floor((timediff*1000)/10);
        //}//alert(increment);
        numberRoll(slno,min,max,increment,timeout);

    }
    function numberRoll(slno,min,max,increment,timeout){//alert(slno+"="+min+"="+max+"="+increment+"="+timeout);
        if(min<=max){
            $('.roller-title-number-'+slno).html(min);
            min=parseInt(min)+parseInt(increment);
            setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout);
        }else{
            $('.roller-title-number-'+slno).html(max);
        }
    }
});