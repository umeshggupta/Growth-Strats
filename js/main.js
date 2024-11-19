

$(".m-menu-btn").click(function() {
    $(".site-menu").slideToggle(600);
    $(this).toggleClass("m-menu-btn-ext");
});
$('.meet-our-teams-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:true
});
$('.our-clients-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots:true
});
$('.client-testimonials-slider').slick({
    dots: true,
    slidesToShow: 1,
    autoplay: true
});
$('.about-our-team-slider').slick({
    dots: true,
    slidesToShow: 1,
    autoplay: true
});
$('.number-box .count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
// On Scroll Section Animation JS
function counter(){   
    $('.section-animation-main').each(function(){
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        if(elementBottom > viewportTop && elementTop < viewportBottom){                               
            $(this).addClass('section-animate');
        }
    });
}
$(document).on('ready', counter);
$(window).on('scroll', counter);

//services Tab JS strt
$(document).ready(function () {
    $('.services-tab .services-tab-nav ul > li').click(function() {
            let distance = 0;
            $(this).prevAll().each(function() {
                distance += $(this).outerWidth(true);
            });
            let itemWidth = $(this).outerWidth();
            let animDiv = $(this).closest('.services-tab-nav').find('.anim-div');
            moveAnimDiv(animDiv, distance, itemWidth);
        });
   
 });
 function moveAnimDiv(animDiv, distance , itemWidth) {
        animDiv.css({
            'transition': 'transform 0.3s ease, width 0.3s ease',
            'transform': 'translateX(' + distance + 'px)',
            'width': itemWidth + 'px'
        });
 }
 window.onload = () => {
        const headTabs = $('.services-tab .services-tab-nav');
        headTabs.each(function() {
            const $this = $(this);
            const targetDiv = $this.children( '.anim-div' );
            const activeItem = $this.find( 'ul li' ).first();
            let width = activeItem.outerWidth();

   targetDiv.css( 'width', width );
    });
};

/////////
$('.our-services-section .services-tab-nav a').on('click', function(e) {
    e.preventDefault();
    var tabMenuLink = $(this);
    var href = $(this).attr('href');
    tabMenuLink.parents('.our-services-section').find('.tab-menu-link').removeClass('active');
    tabMenuLink.parents('.tab-menu-link').addClass('active');
    tabMenuLink.parents('.our-services-section').find('.services-tab-content .services-tab-content-inner').hide().removeClass('active');
    tabMenuLink.parents('.our-services-section').find(`.services-tab-content .services-tab-content-inner${href}`).fadeIn(600);
    setTimeout(function () {
        tabMenuLink.parents(`.our-services-section').find('.services-tab-content .services-tab-content-inner${href}`).addClass('active')
            $(`.our-services-section .services-tab-content .services-tab-content-inner${href}`).addClass('active');
    }, 600);
});