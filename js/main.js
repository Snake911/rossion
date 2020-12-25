$(document).ready(function() {
    //Подключение маски
    $(".phone").mask("+7 (999) 999-9999");

    //Открытие бургера
    $(".header_burger").click(function(e) {
        if (e.currentTarget == e.target) {
            $(this).toggleClass('active');
        }
    });

    //открытие вложенного меню
    $('.submenu_burger').click(function() {
        $(this).off('hover');
        if ($(document).width() <= 1300) {
            const check = $(this).hasClass('active');
            $('.submenu_burger').removeClass('active');
            if (!check) {
                $(this).addClass('active');
            }
        }
    });

    // открытие меню в футере
    $('.footer_menu>li').click(function() {
        if ($(document).width() <= 1300) {
            const check = $(this).hasClass('active');
            $('.footer_menu>li').removeClass('active');
            if (!check) {
                $(this).addClass('active');
            }
        }
    });
    //складывание меню при скролле
    $(document).scroll(function() {
        if ($('header').offset().top > 1 && !$('header').hasClass('header_sticky')) {
            $('header').addClass('header_sticky');
        }
        if ($('header').offset().top < 1) {
            $('header').removeClass('header_sticky');
        }
    });

    if ($('header').offset().top > 1 && !$('header').hasClass('header_sticky')) {
        $('header').addClass('header_sticky');
    }

    // Инициализация карусели главных баннеров
    $('.mainBanner_images').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        navText: ['', ''],
        items: 1,
        navContainer: ".mainBanner_nav"
    });

    // Инициализация карусели направлений на главной странице
    $('.directions_slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        navText: ['', ''],
        items: 1,
        navContainer: ".directions_slider-nav"
    });

    // Инициализация карусели продукции на главной странице
    $('.catalog_slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        navText: ['', ''],
        items: 4,
        navContainer: ".catalog_slider-nav",
        responsive: {
            0: {
                items: 1
            },
            650: {
                items: 2
            },
            950: {
                items: 3
            },
            1300: {
                items: 4
            }
        }
    });

    // Инициализация карусели О компании на главной странице
    $('.about_slider-wrapper').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        navText: ['', ''],
        items: 1,
        navContainer: ".about_slider-nav"
    });

    // Инициализация карусели Наши клиенты на главной странице
    $('.clients_slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        navText: ['', ''],
        items: 5,
        navContainer: ".clients_slider-nav",
        responsive: {
            0: {
                items: 1
            },
            650: {
                items: 2
            },
            950: {
                items: 4
            },
            1300: {
                items: 5
            }
        }
    });

    // Инициалицазия карусели Этапы на странице О компании
    function stagesInit() {
        const cover = $('.active .stages_production-slider_cover');
        const text = $('.active .stages_production-slider_text');

        cover.owlCarousel({
            loop: true,
            items: 1,
            navText: ['', ''],
            dots: false,
            navContainer: ".stages_production-slider_nav"
        }).on('dragged.owl.carousel', function(e) {
            if (e.relatedTarget._drag.direction == 'left') {
                text.trigger('next.owl.carousel')
            } else {
                text.trigger('prev.owl.carousel')
            }
        });


        text.owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            items: 1
        }).on('dragged.owl.carousel', function(e) {
            if (e.relatedTarget._drag.direction == 'left') {
                cover.trigger('next.owl.carousel')
            } else {
                cover.trigger('prev.owl.carousel')
            }
        });

        // Sync nav
        $('.stages_production-slider_nav').on('click', '.owl-next', function() {
            text.trigger('next.owl.carousel')
        });
        $('.stages_production-slider_nav').on('click', '.owl-prev', function() {
            text.trigger('prev.owl.carousel')
        });
    };
    stagesInit();

    //Переключение табов в этапах производства на странице О компании
    $(document).on("click", ".stages_tabs>li", function() {
        const tab = $(this).data('tab');
        $('.stages_tabs>li').removeClass('active');
        $(this).addClass('active');
        $('.stages_container>div').removeClass('active');
        $(`.stages_container>div[data-tab="${tab}"]`).addClass('active');
        $('.stages_production-slider_cover').trigger('destroy.owl.carousel');
        $('.stages_production-slider_text').trigger('destroy.owl.carousel');
        stagesInit();
    });


    //Инициализация карусели Наши клиенты на странице О компании
    $('.review_clients').owlCarousel({
        loop: true,
        rtl: true,
        nav: false,
        dots: false,
        navText: ['', ''],
        items: 1,
        startPosition: '1',
        navContainer: ".review_clients-nav"
    }).on('changed.owl.carousel', function(e) {
        setTimeout(() => {
            const hash = $('.review_clients .owl-item.active .review_clients-item').data('hash');
            $('.logo_clients img').removeClass('active');
            $(`.logo_clients img[data-hash="${hash}"]`).addClass('active');
        }, 100);
    });
    const hash = $('.review_clients .owl-item.active .review_clients-item').data('hash');
    $('.logo_clients img').removeClass('active');
    $(`.logo_clients img[data-hash="${hash}"]`).addClass('active');

    //Открытие вакансий на странице вакансий
    $(document).on("click", ".vacancies_item .section_heading span", function(e) {
        $(this).closest(".vacancies_item").toggleClass('active');
    });
    //иниализация слайдера услуг на детальной странице направления
    $('.services_slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        navText: ['', ''],
        items: 4,
        navContainer: ".services_slider-nav",
        responsive: {
            0: {
                items: 1
            },
            950: {
                items: 2
            },
            1300: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    });

    //Ининцализация карусели на детальной странице каталога
    const big = $('.catalog_detail-bigSlider .catalog_detail-slides');
    const small = $('.catalog_detail-smallSlider .catalog_detail-slides');

    big.owlCarousel({
        loop: true,
        items: 1,
        navText: ['', ''],
        dots: false,
        navContainer: ".catalog_detail-bigSlider_nav"
    }).on('dragged.owl.carousel', function(e) {
        if (e.relatedTarget._drag.direction == 'left') {
            small.trigger('next.owl.carousel')
        } else {
            small.trigger('prev.owl.carousel')
        }
    });

    small.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 4,
        margin: 20,
    });

    // Sync nav
    $('.catalog_detail-bigSlider_nav').on('click', '.owl-next', function() {
        small.trigger('next.owl.carousel')
    });
    $('.catalog_detail-bigSlider_nav').on('click', '.owl-prev', function() {
        small.trigger('prev.owl.carousel')
    });
    $(small).find('.slide').click(function() {
        $(big).trigger('to.owl.carousel', $(this).data('slide'));
    });

    //Переключение меню на детальной странице каталога
    $('.catalog_detail-menu li').click(function() {
        $('.catalog_detail-menu li').removeClass('active');
        $(this).addClass('active');
    });

    //Переключение меню на детальной странице каталога во время скролла
    $(window).scroll(function(e) {
        $(".catalog_detail-section").each(function(index, element) {
            if ($(element).offset().top - $(window).scrollTop() <= 100 && ($(element).offset().top + $(element).height()) - $(window).scrollTop() > 0) {
                $('.catalog_detail-menu li').removeClass('active');
                const hash = $(element).attr('id');
                $(`a[href="#${hash}"]`).parent('li').addClass('active');
            }
        });
    });
    if ("onhashchange" in window) {
        $(".catalog_detail-section").each(function(index, element) {
            if ($(element).offset().top - $(window).scrollTop() <= 100 && ($(element).offset().top + $(element).height()) - $(window).scrollTop() > 0) {
                $('.catalog_detail-menu li').removeClass('active');
                const hash = $(element).attr('id');
                $(`a[href="#${hash}"]`).parent('li').addClass('active');
            }
        });
    }

    //Контролирование количества тегов открытых изначально
    function hideTags() {
        const buttonWidth = $('.tags button').outerWidth(true) + 40;
        const firstTagWidth = $('.tags li:first-child').outerWidth(true);
        let containerWidth = $('.tags').outerWidth(true) - buttonWidth;

        if (firstTagWidth >= containerWidth) {
            containerWidth = firstTagWidth;
            $('.tags').css('flex-wrap', 'wrap');
        } else {
            containerWidth = $('.tags').outerWidth(true) - buttonWidth;
        }
        $('.tags ul').width(containerWidth);
    }
    $('.tags button').click(function() {
        $(this).toggleClass('active');
        $('.tags ul').toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).text('Скрыть');
        } else {
            $(this).text('Показать все');
        }
    });

    hideTags();

    $(window).resize(hideTags);

    //переключение табов на странице опросов
    $('.surveys_tabs li').click(function() {
        const tab = $(this).data('tab');
        $('.surveys_tabs li').removeClass('active');
        $(this).addClass('active');
        $('.surveys_tab').removeClass('active');
        $(`.surveys_tab[data-tab="${tab}"]`).addClass('active');
    });

});