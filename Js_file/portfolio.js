let menu = document.querySelector('#menu');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

$(document).ready(function(){


    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('active');

        if($(window).scrollTop() > 0) {
            $('.top').show();
        }
        else{
            $('.top').hide();
        }

    });

    // smooth scrolling

    $('a[href*="#"]').on('click', function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );

    });
});