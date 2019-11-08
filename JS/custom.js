$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(".nav-register > ul").slideToggle();
    });
});

$('.slider2').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    nav:true,
     navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        },
        1400:{
        	items:4
        }
    }
});



