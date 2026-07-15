jQuery(function($) {
    'use strict';

    $(window).scroll(function(event) {
        Scroll();
    });

    $('.navbar-collapse ul li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });

    function Scroll() {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $('.navbar-collapse').find('.scroll a.nav-link').each(function() {
        //$('#navbarSupportedContent ').find('ul > li.scroll.nav-item > a').each(function() {            
            
            contentTop.push($($(this).attr('href')).offset().top);
            contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
        })
        $.each(contentTop, function(i) {
            if (winTop > contentTop[i] - rangeTop) {
                //$('.navbar-collapse .scroll .nav-link')     
                $('.navbar-collapse li.scroll')           
                    .removeClass('active')
                    .eq(i).addClass('active');
            }
        })
    };

    $('#tohash').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });


    new WOW().init();

    smoothScroll.init();


    $(document).ready(function() {

        $.fn.animateNumbers = function(stop, commas, duration, ease) {
            return this.each(function() {
                var $this = $(this);
                var start = parseInt($this.text().replace(/,/g, ""));
                commas = (commas === undefined) ? true : commas;
                $({
                    value: start
                }).animate({
                    value: stop
                }, {
                    duration: duration == undefined ? 1000 : duration,
                    easing: ease == undefined ? "swing" : ease,
                    step: function() {
                        $this.text(Math.floor(this.value));
                        if (commas) {
                            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        }
                    },
                    complete: function() {
                        if (parseInt($this.text()) !== stop) {
                            $this.text(stop);
                            if (commas) {
                                $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                            }
                        }
                    }
                });
            });
        };

        if ('IntersectionObserver' in window) {
            var statsObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var $this = $(entry.target);
                        $this.animateNumbers($this.data('digit'), false, $this.data('duration'));
                        statsObserver.unobserve(entry.target);
                    }
                });
            });
            $('.business-stats').each(function() {
                statsObserver.observe(this);
            });
        } else {
            $('.business-stats').each(function() {
                var $this = $(this);
                $this.animateNumbers($this.data('digit'), false, $this.data('duration'));
            });
        }

    });




});




function initPortfolio() {
    'use strict';
    var $portfolio_selectors = jQuery('.portfolio-filter >li>a');
    var $portfolio = jQuery('.portfolio-items');
    if (!$portfolio.length) return;

    $portfolio.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $portfolio_selectors.on('click', function() {
        $portfolio_selectors.removeClass('active');
        jQuery(this).addClass('active');
        var selector = jQuery(this).attr('data-filter');
        $portfolio.isotope({
            filter: selector
        });
        return false;
    });
}

function sendEmail(){
    var email = document.getElementById('to'),
        to = 'threeInquisitive' + 'kids'+'@'+'gmail.com',
        subject = encodeURIComponent(document.getElementById('subject').value),
        body = encodeURIComponent(document.getElementById('msgBody').value),
        message = ''
    if (to){
      //email.className = 'not'
      message = 'mailto:'+to
      subject||body?message+='?':false
      subject?message+='subject='+subject:false
      subject&&body?message+='&body='+body:false
      !subject&&body?message+='body='+body:false;      
      window.location.href = message;
      //window.open(message);
    } else {
      email.className='error'
      notification('Please enter a recipient email address','error',5)
      email.focus()
    }

  };