$(document).ready(function() {
	$('input.search-btn').bind('click', function() {
		url = 'index.php?m=Index&a=search';
		var search = $('#keyword').val();
		if (search) {
			url += '&keyword=' + encodeURIComponent(search);
		}
		location = url;
	});
	$('input.keyword').bind('keydown', function(e) {
		if (e.keyCode == 13) {
			url = 'index.php?m=Index&a=search';
			var search = $('#keyword').val();
			if (search) {
				url += '&keyword=' + encodeURIComponent(search);
			}
			location = url;
		}
	});
});


$(function(){
    $('#carousel-example-generic').carousel({
      interval: false
    });
});

window.onload = function () {
    if (screen.width < 580) {
    var mvp = document.getElementById('myViewport');
    mvp.setAttribute('content','width=580');
    }

}


$(document).ready(function(){
    var height = $(window).height() - 50;
    $('.navbar-collapse').css('max-height', height);
});
$(window).resize(function(){
    var height = $(window).height() - 50;
    $('.navbar-collapse').css('max-height', height);
});




  $(function() {

  $('.side-toggle').on('click', function(event) {
    event.preventDefault();
     
     $(this).next('.side-content').slideToggle('fast');
    $(this).toggleClass("active");

  });

  $('.btn-side-more').on('click', function(event) {
    event.preventDefault();
     
     $('.side-news-more').slideToggle('fast');

     $('.btn-side-more').toggleClass('less');


  });

  
  //$('.navbar-toggle').on('click', function(event) {
  $(document).on('click','.navbar-toggle',function(event) {
    event.preventDefault();
    
    var expanded = $('.navbar-toggle').attr('aria-expanded');
    var winHeight = $(document).height();

    if(expanded == 'true') {
      $('#header').css({ 'height': winHeight, 'background-color': 'rgba(0,76,124, 0.95)' });
      $('.icon-bar').eq(0).css({ 'transform': 'translateY(-7px) rotateZ(-45deg)', 'position': 'relative', 'top': '16px' });
      $('.icon-bar').eq(1).css({ 'display': 'none'});
      $('.icon-bar').eq(2).css({ 'transform': 'translateY(10px) rotateZ(45deg)', 'position': 'relative', 'top': '-9px' });

      $('.navbar-header .col-xs-4').eq(1).css('opacity', '0.1');
      $('.navbar-header .col-xs-4').eq(2).css('opacity', '0.1');
         
    } 

    if(expanded == 'false') {
      $('#header').css({ 'height': 'auto', 'background-color': 'rgba(0,76,124, 0.95)' });
      $('.icon-bar').eq(0).css({ 'transform': 'none', 'position': 'static' });
      $('.icon-bar').eq(1).css({ 'display': 'block'});
      $('.icon-bar').eq(2).css({ 'transform': 'none', 'position': 'static' });

      $('.navbar-header .col-xs-4').eq(1).css('opacity', '1');
      $('.navbar-header .col-xs-4').eq(2).css('opacity', '1');
    }

  });

  var $win = $(window),
              resizeTimer;

  function navMob() {
    var child = $('.nav li.haschild');
    var icon = child.find('span').val();

    if( icon == undefined ) {
      child.prepend('<span class="mobile-nav icon-nav-down"></span>');
    }

     child.removeClass('mo');
    
    $('.nav li.haschild .mobile-nav').unbind('click').bind('click', function(event) {
      event.preventDefault();   

      $(this).nextAll('.sub-nav').slideToggle('fast');

      if( $(this).hasClass('icon-nav-down') ) {
        
        $(this).removeClass('icon-nav-down').addClass('icon-nav-up');
        
      }
      else {
        $(this).removeClass('icon-nav-up').addClass('icon-nav-down');
      }     

      if( $(this).next('a').hasClass('clicked') ) {
        
        $(this).next('a').removeClass('clicked');
        
      }
      else {
        $(this).next('a').addClass('clicked');
      }

    });

  }

if ($win.width() <= 1023) { 
  navMob();
}

  function doneResizing(){

    if ($win.width() <= 1023) { 
      navMob();  
    }                                        
    else {
      $('.mobile-nav').remove();
      $('#header').css({ 'height': 'auto', 'background-color': 'rgba(0,76,124, 0.95)' });

      $('.navbar-header .col-xs-4').eq(1).css('opacity', '1');
      $('.navbar-header .col-xs-4').eq(2).css('opacity', '1');
      $(".navbar-collapse").collapse('hide');

      $('.icon-bar').eq(0).css({ 'transform': 'none', 'position': 'static' });
      $('.icon-bar').eq(1).css({ 'display': 'block'});
      $('.icon-bar').eq(2).css({ 'transform': 'none', 'position': 'static' });

       $('.nav li.haschild').addClass('mo');
        $('.nav li .sub-nav').css('display', 'none');
      
    }

  }

  
  $(window).on('resize', function(){
    clearTimeout(resizeTimer);
    resizeId = setTimeout(doneResizing, 250);

  });
  

  

  

  });





$(document).ready(function() {

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

});



!(function ($) {
    $.fn.RedirectConfirm = function(options) {
        var defaults = {
            selector: 'a',
            excluding: 'data-rc-exclude', // excluding attribute
            title: 'Exiting our website',
            message: 'You are now leaving our website. We are not responsible for any external Web sites or their content.',
            continuelbl: 'Continue',
            returnlbl: 'Return',
            targetUrl: '_blank'
        };

        var options = $.extend(defaults, options);
        var confirmed = false;
        var getDomain = function(hostname) {
            var s = hostname.split(',');
            return s.slice(-2).join('.');
        };

        var currentDomain = getDomain(location.hostname);
        var link = new Array();
        $(options.selector).each(function() {

            var $modal = $('<div id="redirectconfirm-modal" class="modal fade">\
                <div class="modal-dialog">\
                    <div class="modal-content">\
                        <div class="modal-header">\
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                            <h3>' + options.title + '</h3>\
                        </div>\
                        <div class="modal-body">\
                            <p>' + options.message + '</p>\
                        </div>\
                        <div class="modal-footer">\
                            <a href="#" class="btn btn-default" data-dismiss="modal">' + options.returnlbl + '</a>\
                            <a href="' + $(this).attr("href") + '" target="' + options.targetUrl + '" class="btn btn-primary btn-continue">' + options.continuelbl + '</a>\
                        </div>\
                    </div>\
                </div>\
            </div>').appendTo('body');

            var $a = jQuery(this);
            var $exclude = $a.attr(options.excluding);

            if ($exclude == 'true' && $exclude != 'undefined') {
                $a.attr(options.excluding, true);
            }

            if ($a.get(0).hostname && getDomain($a.get(0).hostname) != currentDomain && !$exclude) {
                $a.click(function(event) {
                    if (!confirmed) {
                        link.push($(this).attr("href"));
                        event.preventDefault();
                        event.stopPropagation();

                        $modal.on('show', function() {
                            $modal.find('.btn-continue').click(function() {
                                confirmed = true;
                                $a.get(0).click();
                                $modal.modal('hide');
                                location.reload();
                            });
                        });

                        $modal.on('hide', function() {
                            confirmed = false;
                        });

                        $modal.find('.btn-continue').click(function() {
                            $modal.modal('hide');
                        });

                        $modal.find('.modal-body > p').html(options.message.replace('{url}', $a.attr('href')));
                        $modal.modal('show');
                    }
                });
            }
        });
    }
})(jQuery);