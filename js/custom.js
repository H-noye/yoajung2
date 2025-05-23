$(function () {
    $('.mbtn').on('click', function () {
        $('.hd_wrap>*').toggleClass('on')
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
        }
    })


    const main_menu_slide = new Swiper('.main_menu_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 120,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            540: {
                slidesPerView: 2,
            },
            1600: {
                slidesPerView: 3,
                centeredSlides: true,
            },
        },
    });

    const main_story_slide = new Swiper('.main_story_slide', {
        loop: true,
    });

    $('.main_story .f_inner .center .arrow .prev').on('click', function () {
        main_story_slide.slidePrev();
        sub_story_slide.slidePrev();
    });

    $('.main_story .f_inner .center .arrow .next').on('click', function () {
        main_story_slide.slideNext();
        sub_story_slide.slideNext();
    });

    const sub_story_slide = new Swiper('.sub_story_slide', {
        direction: "vertical",
        slidesPerView: 2,
        loop: true,
    });

    const main_community_slide = new Swiper('.main_community_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            540: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    $('.main_community .inner .down .community_wrap .arrow .prev').on('click', function () {
        main_community_slide.slidePrev();
    });

    $('.main_community .inner .down .community_wrap .arrow .next').on('click', function () {
        main_community_slide.slideNext();
    });
})