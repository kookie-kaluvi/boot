(function ($) {
    "use strict";

    /*=============================================
    =       Menu sticky & Scroll to top          =
    =============================================*/
    const URL = '"https://isobar-1.smoxz.com/personal/';
    var windows = $(window);
    var screenSize = windows.width();
    var sticky = $(".header-area");
    var mobilebg = $(".mobile-menu-overlay");
    var $html = $("html");
    var $body = $("body");

    windows.on("scroll", function () {
        var scroll = windows.scrollTop();
        var headerHeight = sticky.height();
        var mobilebg = sticky.height();

        if (screenSize >= 320) {
            if (scroll < headerHeight) {
                sticky.removeClass("is-sticky");
                // mobilebg.removeClass('is-top');
            } else {
                sticky.addClass("is-sticky");
                // mobilebg.addClass('is-top');
            }
        }
    });

    /*----------  Scroll to top  ----------*/
    function scrollToTop() {
        var $mainWrapper = $(".mainwrapper");
        var $scrollUp = $("#scroll-top"),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on("scroll", function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass("show");
                $mainWrapper.removeClass("scrolling");
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass("show");
                    $mainWrapper.addClass("scrolling");
                } else {
                    $scrollUp.removeClass("show");
                    $mainWrapper.removeClass("scrolling");
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on("click", function (evt) {
            $("html, body").animate({ scrollTop: 0 }, 600);
            evt.preventDefault();
        });
    }

    scrollToTop();

    function scrollToTopMenu() {
        var $scrollUp = $(".header-top-bar-info"),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on("scroll", function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass("show");
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass("show");
                } else {
                    $scrollUp.removeClass("show");
                }
            }
            $lastScrollTop = st;
        });
    }

    scrollToTopMenu();

    /*===========================================
    =            Submenu viewport position      =
    =============================================*/

    if ($(".has-children--multilevel-submenu").find(".submenu").length) {
        var elm = $(".has-children--multilevel-submenu").find(".submenu");

        elm.each(function () {
            var off = $(this).offset();
            var l = off.left;
            var w = $(this).width();
            var docH = windows.height();
            var docW = windows.width() - 10;
            var isEntirelyVisible = l + w <= docW;

            if (!isEntirelyVisible) {
                $(this).addClass("left");
            }
        });
    }
    /*==========================================
    =            mobile menu active            =
    ============================================*/

    $("#mobile-menu-trigger").on("click", function () {
        $("#mobile-menu-overlay").addClass("active");
        $body.addClass("no-overflow");
    });

    $("#mobile-menu-close-trigger").on("click", function () {
        $("#mobile-menu-overlay").removeClass("active");
        $body.removeClass("no-overflow");
    });

    $(".offcanvas-navigation--onepage ul li a").on("click", function () {
        $("#mobile-menu-overlay").removeClass("active");
        $body.removeClass("no-overflow");
    });

    /*Close When Click Outside*/
    $body.on("click", function (e) {
        var $target = e.target;
        if (
            !$($target).is(".mobile-menu-overlay__inner") &&
            !$($target).parents().is(".mobile-menu-overlay__inner") &&
            !$($target).is("#mobile-menu-trigger") &&
            !$($target).is("#mobile-menu-trigger i")
        ) {
            $("#mobile-menu-overlay").removeClass("active");
            $body.removeClass("no-overflow");
        }
        if (
            !$($target).is(".search-overlay__inner") &&
            !$($target).parents().is(".search-overlay__inner") &&
            !$($target).is("#search-overlay-trigger") &&
            !$($target).is("#search-overlay-trigger i")
        ) {
            $("#search-overlay").removeClass("active");
            $body.removeClass("no-overflow");
        }
    });

    $(".navigation-menu li")
        .find(".current")
        .parent()
        .parent()
        .addClass("current");

    /*===================================
    =           Menu Activeion          =
    ===================================*/
    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf("/") + 1);
    var hash = window.location.hash.substr(1);
    if ((curpage == "" || curpage == "/" || curpage == "admin") && hash == "") {
        //$("nav .navbar-nav > li:first-child").addClass("active");
    } else {
        $(".navigation-menu li").each(function () {
            $(this).removeClass("active");
        });
        if (hash != "") {
            //$(".navigation-menu li a[href*='" + hash + "']").parents("li").addClass("active");
        } else {
            ///$(".navigation-menu li a[href*='" + curpage + "']").parents("li").addClass("active");
        }
    }

    /*=========================================
    =             open menu Active            =
    ===========================================*/
    $(".openmenu-trigger").on("click", function (e) {
        e.preventDefault();
        $(".open-menuberger-wrapper").addClass("is-visiable");
    });

    $(".page-close").on("click", function (e) {
        e.preventDefault();
        $(".open-menuberger-wrapper").removeClass("is-visiable");
    });

    /*=========================================
    =             open menu Active            =
    ===========================================*/
    $("#open-off-sidebar-trigger").on("click", function () {
        $("#page-oppen-off-sidebar-overlay").addClass("active");
        $body.addClass("no-overflow");
    });

    $("#menu-close-trigger").on("click", function () {
        $("#page-oppen-off-sidebar-overlay").removeClass("active");
        $body.removeClass("no-overflow");
    });

    /*=============================================
    =            search overlay active            =
    =============================================*/

    $(".search-icon").on("click", function () {
        $(".search-overlay").addClass("active");
        $body.addClass("no-overflow");
    });

    // $("#search-overlay-trigger2").on('click', function() {
    //     $(".search-overlay2").addClass("active");
    //     $body.addClass('no-overflow');
    // });

    // $("search-close-trigger").on('click', function() {
    //     $(".search-overlay").removeClass("active");
    //     $body.removeClass('no-overflow');
    // });
    $(".mobile-navigation-close-icon").on("click", function () {
        $(".search-overlay").removeClass("active");
        $body.removeClass("no-overflow");
    });

    /*=========================================
    =             open menu Active            =
    ===========================================*/
    $(".share-icon").on("click", function (e) {
        e.preventDefault();
        $(".entry-post-share").toggleClass("opened");
    });

    $body.on("click", function () {
        $(".entry-post-share").removeClass("opened");
    });
    // Prevent closing dropdown upon clicking inside the dropdown
    $(".entry-post-share").on("click", function (e) {
        e.stopPropagation();
    });

    /*=============================================
    =            offcanvas mobile menu            =
    =============================================*/
    var $offCanvasNav = $(".offcanvas-navigation"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu
        .parent()
        .prepend('<span class="menu-expand"><i></i></span>');

    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();

    /*Category Sub Menu Toggle*/
    $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
        var $this = $(this);
        if (
            $this
                .parent()
                .attr("class")
                .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
            ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.parent("li").removeClass("active");
                $this.siblings("ul").slideUp();
            } else {
                $this.parent("li").addClass("active");
                $this
                    .closest("li")
                    .siblings("li")
                    .removeClass("active")
                    .find("li")
                    .removeClass("active");
                $this.closest("li").siblings("li").find("ul:visible").slideUp();
                $this.siblings("ul").slideDown();
            }
        }
    });

    //Youtube background
    /*
    This script is based on the iframeResize-Pen (https://codepen.io/Codepalm/pen/XLzbrO) and adds the align-Plugin for jQuery
    */

    jQuery("#career_search_btn").click(function () {
        let career_search_txt = jQuery("#career_search_txt").val();
        let parent_id = jQuery("#parent_id").val();

        jQuery.ajax({
            url: apiurl + "/includes/api/getcareer.php",
            type: "POST",
            data: {
                career_search_txt: career_search_txt,
                parent_id: parent_id,
            },
            success: function (msg) {
                jQuery("#shops_details").html(msg);
            },
        });
    });
    jQuery("#career_search_form").submit(function () {
        let career_search_txt = jQuery("#career_search_txt").val();
        let parent_id = jQuery("#parent_id").val();

        jQuery.ajax({
            url: apiurl + "/includes/api/getcareer.php",
            type: "POST",
            data: {
                career_search_txt: career_search_txt,
                parent_id: parent_id,
            },
            success: function (msg) {
                jQuery("#shops_details").html(msg);
            },
        });
    });

    jQuery("#career_search_txt").keyup(function () {
        let career_search_txt = jQuery("#career_search_txt").val();
        let parent_id = jQuery("#parent_id").val();

        if (career_search_txt.trim() !== "") {
            jQuery.ajax({
                url: apiurl + "/includes/api/getcareer.php",
                type: "POST",
                data: {
                    career_search_txt: career_search_txt,
                    parent_id: parent_id,
                },
                success: function (msg) {
                    jQuery("#shops_details").html(msg);
                },
            });
        } else {
            jQuery("#shops_details").html("");
        }
    });


    (function ($) {
        $(document).ready(function () {
            $(window).resize(function () {
                iframeResize();
            });
            iframeResize();

            setTimeout(function () {
                $("#tuinuane").modal({ backdrop: "static", keyboard: false });
            }, 1000);
        });

        function iframeResize() {
            var iframes = $('iframe[data-scaling="true"]');
            if (iframes.exists()) {
                iframes.each(function () {
                    let iframe = $(this);
                    let videoFormat = "16:9";
                    if (
                        typeof iframe.attr("data-format") !== "undefined" &&
                        iframe.attr("data-format").includes(":")
                    )
                        videoFormat = iframe.attr("data-format");
                    iframe.rescale(videoFormat);
                    iframe.iframeCenterAlign();
                });
            }
        }

        $.fn.iframeCenterAlign = function () {
            var wrapperWidth = this.parent().width();
            var iframeWidth = this.width();
            var leftMargin = (wrapperWidth - iframeWidth) / 2;

            var wrapperHeight = this.parent().height();
            var iframeHeight = this.height();
            var topMargin = (wrapperHeight - iframeHeight) / 2;

            this.parent().css({ left: leftMargin + "px", top: topMargin + "px" });
        };
        $.fn.rescale = function (format) {
            let formatWidth = parseInt(format.split(":")[0]);
            let formatHeight = parseInt(format.split(":")[1]);
            let formatRatio = formatHeight / formatWidth;

            let currentWidth = this.width();
            let newHeight = formatRatio * currentWidth;

            this.height(Math.round(newHeight));
        };
        $.fn.exists = function () {
            return this.length > 0;
        };
    })(jQuery);

    //About grey slider
    $(".defaultslide").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });

    $(".full-banner-animation").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: false,
        autoplay: true,
        margin: 15,
        mouseDrag: false,
        smartSpeed: 800,
        animateOut: "fadeOut",
        responsive: {
            0: {
                items: 1,
            },
        },
    });

    //three cards slider
    $(".three-cards").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 15,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            576: {
                items: 2,
                nav: false,
                dots: true,
            },
            768: {
                items: 2,
                nav: false,
                dots: true,
            },
            992: {
                items: 3,
                nav: true,
                dots: false,
            },
            1200: {
                items: 3,
                nav: false,
                dots: true,
            },
        },
    });

    //POP-UP slider
    $("#images-slider").owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });

    $('.four-cards').owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 15,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true,
                dots: true,
            },
            576: {
                items: 2,
                loop: true,
                autoplay: true,
            },
            768: {
                items: 2,
                loop: true,
                autoplay: true,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    }); $('.four-cards-spark').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 15,
        responsive: {
            0: {
                items: 1,
                loop: false,
                autoplay: true,
                dots: true,
            },
            576: {
                items: 2,
                loop: false,
                autoplay: true,
            },
            768: {
                items: 2,
                loop: false,
                autoplay: true,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    $('.partners').owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 6,
            }
        }
    });

    //Home banner
    $(".home-banner-holder").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        animateOut: "fadeOut",
        responsive: {
            0: {
                items: 1,
                rtl: false,
            },
            1200: {
                items: 1,
            },
        },
    });

    $('.ourHistory').owlCarousel({
        loop: false, // Enable loop for continuous sliding
        nav: false,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 600,
        margin: 10,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: false,

            },
            576: {
                items: 2,
                nav: false,

            },
            768: {
                items: 2,
                nav: false,

            },
            992: {
                items: 3,
                nav: false,

            },
            1200: {
                items: 4,

            }
        }
    });

    //LightBox / Fancybox
    $(".lightbox-image").fancybox({
        openEffect: "fade",
        closeEffect: "fade",
        helpers: {
            media: {},
        },
    });

    //get started
    $(".slidesthree").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    //About grey slider
    $("#timelineslider").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });

    //About grey slider
    $("#timelineslidermpesa").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    //About grey slider
    $("#childprotection").owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        autoplay: false,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });

    $("#tabs2").owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 0,
        responsive: {
            0: {
                autoWidth: true,
                dots: true,
                nav: false,
            },
            576: {
                autoWidth: true,
                dots: false,
                nav: false,
            },
            768: {
                autoWidth: true,
                dots: false,
                nav: false,
            },
            1200: {
                autoWidth: true,
                dots: false,
                nav: true,
            },
        },
    });

    //funfactslider
    $("#funfactslider").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            576: {
                items: 2,
                dots: true,
            },
            768: {
                items: 2,
                nav: true,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });

    //quick Links
    $(".quicklinks").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 2,
                autoplay: true,
                loop: true,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        },
    });

    //auto width

    $(".autowidth").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 15,
        responsive: {
            0: {
                autoWidth: false,
                items: 1,
            },
            601: {
                autoWidth: false,
                items: 2,
            },
            962: {
                autoWidth: false,
                items: 2,
            },
            1000: {
                autoWidth: false,
                items: 2,
            },
            1100: {
                autoWidth: true,
                items: 2,
                dots: false,
                nav: false,
            },
        },
    });

    // Portfolio Slides
    $(".card-slides").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 5,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });

    $(".card-slides-two").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 5,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            },
        },
    });
    $(".card-slide").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });
    //Promo Inside
    $("#promoinside").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });

    //Promo Inside
    $("#homefibre").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });
    $("#datapostpay").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });
    $("#voicepostpay").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });
    $("#homepostpay").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });
    //Promo Inside
    $("#promoinside-1").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 2,
                nav: false,
            },
            768: {
                items: 3,
                nav: true,
            },
            992: {
                items: 4,
                nav: true,
            },
            1200: {
                items: 5,
                nav: true,
            },
        },
    });
    //Promo Inside
    $("#promoinside-2").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 2,
                nav: false,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });
    //Promo Inside
    $("#promoinside-3").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 2,
                nav: false,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });
    //Promo Inside
    $("#promoinside-4").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 2,
                nav: false,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });
    //Promo Inside
    $("#promoinside-5").owlCarousel({
        loop: false,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 2,
                nav: false,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });
    //About grey slider
    $(".ad-items").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 0,
        slideSpeed: 300,
        paginationSpeed: 500,
        singleItem: true,
        navigation: true,
        scrollPerPage: true,
        responsive: {
            0: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });
    $("#tabs1").owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 0,
        // autoWidth: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
            },
            576: {
                items: 3,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 5,
            },
        },
    });
    $("#tabs2").owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 0,
        responsive: {
            0: {
                items: 4,
                autoWidth: false,
                dots: true,
                nav: false,
            },
            576: {
                autoWidth: true,
            },
            768: {
                autoWidth: true,
            },
            1200: {
                autoWidth: true,
            },
        },
    });
    $("#promoinside2").owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
        },
    });

    $(".hero-slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        animateOut: "fadeOut",
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-next'></i>",
        ],
    });

    $('.full-banner').owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 3000,
        animateOut: 'fadeOut',
        margin: 5,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

    /*---------------------------
         case studies carousel
    ---------------------------*/
    $(".employees-slider").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        margin: 30,
        center: false,
        dots: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
        ],
    });

    $("#ratesbtn").click(function () {
        $("#network-toggle").slideToggle();
    });

    //Rates Button
    $("#ratesbtn-2").click(function () {
        $("#network-toggle-2").slideToggle();
    });

    $("#helpfull").modal("hide");
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
})(window.jQuery);

$(document).ready(function () {
    $("#st1").click(function () {
        $(".fa-star").css("color", "black");
        $(".very-poor").css("display", "block");
        $(".good, .poor, .fair, .excellent").css("display", "none");
        $("#st1").css("color", "#2cb34a");
    });
    $("#st2").click(function () {
        $(".fa-star").css("color", "black");
        $(".poor").css("display", "block");
        $(".very-poor, .good, .fair, .excellent").css("display", "none");
        $("#st1, #st2").css("color", "#2cb34a");
    });
    $("#st3").click(function () {
        $(".fa-star").css("color", "black");
        $(".fair").css("display", "block");
        $(".very-poor, .poor, .good, .excellent").css("display", "none");
        $("#st1, #st2, #st3").css("color", "#2cb34a");
    });
    $("#st4").click(function () {
        $(".fa-star").css("color", "black");
        $(".good").css("display", "block");
        $(".very-poor, .poor, .fair, .excellent").css("display", "none");
        $("#st1, #st2, #st3, #st4").css("color", "#2cb34a");
    });
    $("#st5").click(function () {
        $(".fa-star").css("color", "black");
        $(".excellent").css("display", "block");
        $(".very-poor, .poor, .fair, .good").css("display", "none");
        $("#st1, #st2, #st3, #st4, #st5").css("color", "#2cb34a");
    });

    $("#zuri-btn").on("click", function (e) {
        $(".say-hello").addClass("hidden");
    });

    // $("#search-overlay-trigger").on('click', function(e) {
    //     $('#search-overlay').addClass('active');
    // });
    // $("#rapid_contact").submit(function (event) {

    //     event.preventDefault();

    //     var arr = [];
    //     $('input[type="radio"]:checked').each(function () {
    //         arr.push($(this).val());
    //     });
    //     var check = [];
    //     $('input[type="checkbox"]:checked').each(function () {
    //         check.push($(this).val());
    //     });

    //     var formData = {
    //         comment: $("#comment").val(),
    //         pageid: pageid,
    //         rating: JSON.stringify(arr),
    //         issue: JSON.stringify(check),
    //     };

    //     $.ajax({
    //         type: "POST",
    //         url: apiurl + '/includes/api/comments.php',
    //         data: formData,
    //         success: function (msg) {
    //             if (msg == "inserted") {
    //                 swal({
    //                     // icon: "success",
    //                     title: "",
    //                     text: "Thank you for your feedback.",

    //                 }).then(function () {

    //                     jQuery('.rapid_message').val("");
    //                     //window.location.href = `${URL}/#app-section`;

    //                     jQuery('#feedbackmodal').modal('hide');
    //                     location.reload();
    //                 });
    //             }
    //         },
    //         error: function (msg) {

    //             // Some error in ajax call
    //             alert(msg);
    //         }
    //     });

    // });
});

jQuery(window).on("load", function () {
});

jQuery(document).ready(function ($) {
    var pathArray = window.location.pathname.split("/");
    var secondLevelLocation = pathArray[1];
    var thirdLevelLocation = pathArray[2];
    var fourthLevelLocation = pathArray[3];

    if (pathArray.length == 3) {
        // if ($ .cookie("home_page") == null) {
        //     setTimeout(function(){
        //         jQuery('#adModal').modal('show');
        //         jQuery('.modal-backdrop').removeClass("modal-backdrop");

        //     }, 3000);
        //     $ .cookie("home_page", "2");
        // }
        //without cookie, for testing purposes
        setTimeout(function () {
            //jQuery('#adModal').modal('show');
            jQuery(".modal-backdrop").removeClass("modal-backdrop");
        }, 3000);

        var html =
            "<section class='zuri whatsnew'><a title='modal' href='#adModal' rel='lightbox' data-toggle='modal' data-target='#adModal' data-backdrop='false'><img src='/images/whatsnew.png' alt='Safaricom Neo' /></a></section>";
        jQuery("#whats_new_overlay").empty().append(html);
    } //endif

    if ((thirdLevelLocation == "voice") & (fourthLevelLocation == "tariffs")) {
        // if ($ .cookie("voice_page") == null) {
        //     setTimeout(function(){
        //         jQuery('#adModal2').modal('show');
        //         jQuery('.modal-backdrop').removeClass("modal-backdrop");

        //     }, 3000);
        //     $ .cookie("voice_page", "2");
        // }

        //without cookie, for testing purposes
        var html =
            "<section class='zuri whatsnew'><a title='modal' href='#adModal2' rel='lightbox' data-toggle='modal' data-target='#adModal2' data-backdrop='false'><img src='../images/whatsnew.png' alt='Safaricom Neo' /></a></section>";
        jQuery("#whats_new_overlay").empty().append(html);
        setTimeout(function () {
            //jQuery('#adModal2').modal('show');
            jQuery(".modal-backdrop").removeClass("modal-backdrop");
        }, 3000);
    } //endif

    if (
        (thirdLevelLocation == "voice") &
        (fourthLevelLocation == "promotions-offers")
    ) {
        // if ($ .cookie("voice_page") == null) {
        //     setTimeout(function(){
        //         jQuery('#adModal2').modal('show');
        //         jQuery('.modal-backdrop').removeClass("modal-backdrop");

        //     }, 3000);
        //     $ .cookie("voice_page", "2");
        // }

        //without cookie, for testing purposes

        var html =
            "<section class='zuri whatsnew'><a title='modal' href='#adModal6' rel='lightbox' data-toggle='modal' data-target='#adModal6' data-backdrop='false'><img src='../images/whatsnew.png' alt='Safaricom Neo' /></a></section>";
        jQuery("#whats_new_overlay").empty().append(html);
        setTimeout(function () {
            //jQuery('#adModal6').modal('show');
            jQuery(".modal-backdrop").removeClass("modal-backdrop");
        }, 3000);
    } //endif

    if ((thirdLevelLocation == "data") & (fourthLevelLocation == "tariffs")) {
        //set cookie
        //cookie is working

        // if ($ .cookie("data_page") == null) {
        //     setTimeout(function(){
        //         jQuery('#adModal3').modal('show');
        //         jQuery('.modal-backdrop').removeClass("modal-backdrop");

        //     }, 3000);
        //     $ .cookie("data_page", "2");
        // }

        //without cookie, for testing purposes
        var html =
            "<section class='zuri whatsnew'><a title='modal' href='#adModal3' rel='lightbox' data-toggle='modal' data-target='#adModal3' data-backdrop='false'><img src='../images/whatsnew.png' alt='Safaricom Neo' /></a></section>";
        jQuery("#whats_new_overlay").empty().append(html);
        setTimeout(function () {
            //jQuery('#adModal3').modal('show');
            jQuery(".modal-backdrop").removeClass("modal-backdrop");
        }, 3000);
    } //close if

    if (
        (thirdLevelLocation == "data") &
        (fourthLevelLocation == "promotions-offers")
    ) {
        //set cookie
        //cookie is working

        // if ($ .cookie("data_page") == null) {
        //     setTimeout(function(){
        //         jQuery('#adModal3').modal('show');
        //         jQuery('.modal-backdrop').removeClass("modal-backdrop");

        //     }, 3000);
        //     $ .cookie("data_page", "2");
        // }

        //without cookie, for testing purposes
        var html =
            "<section class='zuri whatsnew'><a title='modal' href='#adModal7' rel='lightbox' data-toggle='modal' data-target='#adModal7' data-backdrop='false'><img src='../images/whatsnew.png' alt='Safaricom Neo' /></a></section>";
        jQuery("#whats_new_overlay").empty().append(html);
        setTimeout(function () {
            //jQuery('#adModal7').modal('show');
            jQuery(".modal-backdrop").removeClass("modal-backdrop");
        }, 3000);
    } //close if

    if (
        (thirdLevelLocation == "data") &
        (fourthLevelLocation == "internet-tools")
    ) {
        //set cookie
        //cookie is working

        // if ($ .cookie("data_page") == null) {
        //     setTimeout(function(){
        //         jQuery('#adModal3').modal('show');
        //         jQuery('.modal-backdrop').removeClass("modal-backdrop");

        //     }, 3000);
        //     $ .cookie("data_page", "2");
        // }

        //without cookie, for testing purposes
        var html =
            "<section class='zuri whatsnew'><a title='modal' href='#adModal5' rel='lightbox' data-toggle='modal' data-target='#adModal5' data-backdrop='false'><img src='../images/whatsnew.png' alt='Safaricom Neo' /></a></section>";
        jQuery("#whats_new_overlay").empty().append(html);
        setTimeout(function () {
            //jQuery('#adModal5').modal('show');
            jQuery(".modal-backdrop").removeClass("modal-backdrop");
        }, 3000);
    } //close if

    //set the index counter
    var i = 0;

    //convert all .nav-tabs, except those with the class .keep-tabs
    $(".nav-tabs")
        .not(".keep-tabs")
        .each(function () {
            //init variables
            var $select,
                c = 0,
                $select = $(
                    '<select class="mobile-nav-tabs-' +
                    i +
                    ' mobile-tab-headings "></select>'
                );

            //add unique class to nav-tabs, so each select works independently
            $(this).addClass("nav-tabs-index-" + i);

            //loop though each <li>, building each into an <option>, getting the text from the a href
            $(this)
                .children("li")
                .each(function () {
                    $select.append(
                        '<option value="' + c + '">' + $(this).text() + "</option>"
                    );
                    c++;
                });

            //insert new <select> above <ul nav-tabs>
            $(this).before($select);

            //increase index counter
            i++;
        });

    //on changing <select> element
    $("[class^=mobile-nav-tabs]").on("change", function (e) {
        //get index from selected option
        classArray = $(this).attr("class").split(" ");
        tabIndexArray = classArray[0].split("mobile-nav-tabs-");
        tabIndex = tabIndexArray[1];

        //using boostrap tabs, show the selected option tab
        $(".nav-tabs-index-" + tabIndex + " li a")
            .eq($(this).val())
            .tab("show");
    });

    $("#country").change(function () {
        let country = jQuery("#country option:selected").text();
        // jQuery("#overlay").show();
        let id = jQuery("#country").val();

        //set country flag and image
        //set the continent
        var select_box = jQuery("#continent");
        select_box.empty();
        jQuery.ajax({
            url: apiurl + "/includes/api/continent.php",
            type: "POST",
            data: {
                id: id,
            },
            success: function (msg) {
                let data = JSON.parse(msg);

                for (var i = 0; i < data.length; i++) {
                    // Iterate over numeric indexes from 0 to 5, as everyone expects.
                    let val = data[i].continent_id;
                    if (val == 1) {
                        select_box.append(jQuery("<option />").val(val).text("Africa"));
                    } else if (val == 2) {
                        select_box.append(jQuery("<option />").val(val).text("Antarctis"));
                    } else if (val == 3) {
                        select_box.append(jQuery("<option />").val(val).text("Asia"));
                    } else if (val == 4) {
                        select_box.append(
                            jQuery("<option />").val(val).text("Australia and Oceania")
                        );
                    } else if (val == 5) {
                        select_box.append(jQuery("<option />").val(val).text("Europe"));
                    } else if (val == 6) {
                        select_box.append(
                            jQuery("<option />").val(val).text("North America")
                        );
                    } else if (val == 7) {
                        select_box.append(
                            jQuery("<option />").val(val).text("South America")
                        );
                    } else {
                        select_box.append(
                            jQuery("<option />").val("").text("Select (Optional)")
                        );
                    }
                }
            },
        });

        //get rates
        getrates(id, country);
    });

    function getrates(id, country) {
        jQuery("#pref-tabs").empty();
        jQuery.ajax({
            url: apiurl + "/includes/api/getrates.php",
            type: "POST",
            data: {
                id: id,
            },
            success: function (msg) {
                let data = JSON.parse(msg);
                //   console.log(data);
                for (var i = 0; i < data.length; i++) {
                    // Iterate over numeric indexes from 0 to 5, as everyone expects.
                    let html =
                        '<table class="col-md-12 table table-condensed cf"><tbody><tr><td data-title="Action">Calls made within' +
                        " " +
                        country +
                        '</td><td class="numeric" data-title="Charges" id="callsto">Ksh<strong>' +
                        data[i].calls_made_within +
                        '/min</strong></td></tr><tr><td data-title="Action">Calls to Kenya</td><td class="numeric" data-title="Charges" id="callstokenya">Ksh<strong>' +
                        data[i].calls_to_kenya +
                        '/min</strong></td></tr><tr><td data-title="Action">Calls to other countries</td><td class="numeric" data-title="Charges" id="callstoother">Ksh<strong>' +
                        data[i].calls_to_others +
                        '/min</strong></td></tr><tr><td data-title="Action">Calls to satelite networks</td><td class="numeric" data-title="Charges" id="callstosatelite">Ksh<strong>' +
                        data[i].calls_to_satellite +
                        '/min</strong></td></tr><tr><td data-title="Action">Recieving voice calls</td><td class="numeric" data-title="Charges" id="receivevoice">Ksh<strong>' +
                        data[i].recieving_voice_call +
                        '/min</strong></td></tr><tr><td data-title="Action">SMS to all destinations</td><td class="numeric" data-title="Charges" id="sms">Ksh<strong>' +
                        data[i].sms_rate_others +
                        '/min</strong></td></tr><tr><td data-title="Action">Data charges</td><td class="numeric" data-title="Charges" >Ksh<strong>' +
                        data[i].gprs_pref +
                        "/min</strong></td></tr> </tbody></table>";
                    jQuery("#pref-tabs").append(
                        `<li class="nav-item"><a class="nav-link active" href="#tabs-1" data-toggle="tab">Other Network</a></li>`
                    );

                    jQuery("#rates-title").empty();
                    jQuery("#rates-title").append(
                        "<h2>Life Charges in" + " " + country + "</h2>"
                    );
                    jQuery("#no-more-tables").empty();
                    jQuery("#no-more-tables").append(html);

                    getpref(id, country);
                }
                if ($("#network-toggle").is(":visible")) {
                    // toggled down
                }
                if ($("#network-toggle").is(":hidden")) {
                    $("#network-toggle").slideToggle("open");
                }
            },
        });
    }

    function getpref(id, country) {
        jQuery.ajax({
            url: apiurl + "/includes/api/getpref.php",
            type: "POST",
            data: {
                id: id,
            },
            success: function (msg) {
                // console.log(JSON.parse(msg));
                let data = JSON.parse(msg);
                // console.log("message");

                for (var i = 0; i < data.length; i++) {
                    // console.log(data[i]);
                    let id = i + 2;
                    jQuery("#pref-tabs").append(
                        `<li class="nav-item"><a class="nav-link" href="#tabs-${id}" data-toggle="tab">${data[i].pref_network}</a></li>`
                    );
                    jQuery("#tab-content").append(
                        `<div id="tabs-${id}" class="tab-pane"><div class="text-center data-tab-area"><div class="row mb-1 align-items-center justify-content-center"><div class="col-lg-12"><div class="text-left"><div class="title-network color-black"><h2>${data[i].pref_network} Charges in ${country}</h2></div><div id="no-more-tables"><table class="col-md-12 table table-condensed cf"><tbody><tr><td data-title="Action">Calls made within ${country}</td><td class="numeric" data-title="Charges">Ksh<strong>${data[i].local_calls}/min</strong></td></tr><tr><td data-title="Action">Calls to Kenya</td><td class="numeric" data-title="Charges">Ksh<strong>${data[i].calls_to_kenya}/min</strong></td></tr><tr><td data-title="Action">Calls to other countries</td><td class="numeric" data-title="Charges">Ksh<strong>${data[i].calls_to_others}/min</strong></td></tr><tr><td data-title="Action">Calls to satelite networks</td><td class="numeric" data-title="Charges">Ksh<strong>${data[i].calls_to_satellite}/min</strong></td></tr><tr><td data-title="Action">Recieving voice calls</td><td class="numeric" data-title="Charges">Ksh<strong>${data[i].receiving_roaming_calls}/min</strong></td></tr><tr><td data-title="Action">SMS to all destinations</td><td class="numeric" data-title="Charges">Ksh<strong>${data[i].sms_rate}/min</strong></td></tr><tr><td data-title="Action">Data charges</td><td class="numeric" data-title="Charges">Ksh<strong>${data[i].gprs_per_mb}/min</strong></td></tr></tbody></table></div></div></div></div></div></div>`
                    );
                }
            },
        });
    }

    //country selection code
    $("#continent").change(function () {
        let id = jQuery("#continent").val();

        var select_box = jQuery("#country");
        select_box.empty();
        select_box.append(
            jQuery("<option selected='selected'/>").val("").text("Select Country")
        );

        jQuery.ajax({
            url: apiurl + "/includes/api/country.php",
            type: "POST",
            data: {
                id: id,
            },
            success: function (msg) {
                let data = JSON.parse(msg);

                for (var i = 0; i < data.length; i++) {
                    // Iterate over numeric indexes from 0 to 5, as everyone expects.

                    select_box.append(
                        jQuery("<option />").val(data[i].id).text(data[i].country_name)
                    );
                }
            },
        });
    });

    jQuery("#country2").change(function () {
        let id = jQuery("#country2").val();
        jQuery.ajax({
            url: apiurl + "/includes/api/getrates.php",
            type: "POST",
            data: {
                id: id,
            },
            success: function (msg) {
                let data = JSON.parse(msg);
                //  console.log(data);
                for (var i = 0; i < data.length; i++) {
                    // Iterate over numeric indexes from 0 to 5, as everyone expects.
                    //   jQuery("#quickratespickercountryarea").text("Calls to "+jQuery("#quickratespicker option:selected").text());
                    let contryname = jQuery("#country option:selected").text();
                    let contryname2 = jQuery("#country2 option:selected").text();

                    let h2 = `<h3>Calling ${contryname2} from Kenya will cost you Kshs. ${data[i].calls_made_within}/min</h3>`;
                    jQuery("#rates-header").empty();
                    jQuery("#rates-header").append(h2);
                    /* let html ='<table class="col-md-12 table table-condensed cf"><tbody><tr><td data-title="Action">Calls made within '+contryname2+'</td><td class="numeric" data-title="Charges">Ksh<strong>'+ data[i].calls_made_within +'/min</strong></td></tr><tr><td data-title="Action">Calls to Kenya</td><td class="numeric" data-title="Charges">Ksh<strong>'+ data[i].calls_to_kenya +'/min</strong></td></tr></tbody></table>';
                     jQuery("#no-more-tables-rates").empty();
                     jQuery("#no-more-tables-rates").append(html); */

                    if ($("#network-toggle-2").is(":visible")) {
                        // toggled down
                    }
                    if ($("#network-toggle-2").is(":hidden")) {
                        $("#network-toggle-2").slideToggle("open");
                    }
                }
            },
        });
    });
    jQuery("#modal_country").change(function () {
        let id2 = jQuery("#modal_country").val();
        jQuery.ajax({
            url: apiurl + "/includes/api/getrates.php",
            type: "POST",
            data: {
                id: id2,
            },
            success: function (msg) {
                let data = JSON.parse(msg);
                // console.log(data);
                for (var i = 0; i < data.length; i++) {
                    // Iterate over numeric indexes from 0 to 5, as everyone expects.
                    //   jQuery("#quickratespickercountryarea").text("Calls to "+jQuery("#quickratespicker option:selected").text());

                    let contryname3 = jQuery("#modal_country option:selected").text();
                    jQuery("#modal_placeholder").empty();
                    jQuery("#modal_placeholder").attr(
                        "placeholder",
                        "" +
                        contryname3 +
                        ":Ksh." +
                        " " +
                        data[i].calls_made_within +
                        "/- per minute"
                    );
                    //   append("<strong>"+ data[i].calls_made_within +" per minute</strong>");
                }
            },
        });
    });

    // get paybill
    jQuery("#paybill-btn").click(function () {
        let id2 = jQuery("#paybill").val();

        jQuery.ajax({
            url: apiurl + "/includes/api/getpaybill.php",
            type: "POST",
            data: {
                search: id2,
            },
            success: function (msg) {
                jQuery("#paybill-modal").html(msg);
            },
        });
    });

    // get shop
    jQuery("#shop-btn").click(function () {
        let id2 = jQuery("#shop_location").val();
        let parent_id = jQuery("#parent_id").val();

        jQuery.ajax({
            url: apiurl + "/includes/api/getshop.php",
            type: "POST",
            data: {
                parent_id: 318,
                search: id2,
            },
            success: function (msg) {
                jQuery("#shops-details").html(msg);
            },
        });
    });
    // get USSD
    jQuery("#ussd-btn").click(function () {
        let id2 = jQuery("#ussd").val();

        jQuery.ajax({
            url: apiurl + "/includes/api/getussd.php",
            type: "POST",
            data: {
                search: id2,
            },
            success: function (msg) {
                // jQuery("#ussd-modal").html(msg);
                jQuery("#ussd-modal")
                    .css("padding-left", "")
                    .get(0).style.setProperty("padding-left", "1rem", "important");
                jQuery("#ussd-modal").html(msg);
            },
        });
    });
    //get SMS

    jQuery("#sms_select").keyup(function () {
        $("#buy-now").removeClass("disabled");
        let amount = jQuery("#sms_select").val();

        jQuery("#buy-now").show();

        if (amount < 0) {
            jQuery("#sms_select").val() == "";
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Negative numbers not allowed",
            }).then(function () {
                jQuery("#sms_select").val() == "";
                jQuery("#minutes_area").empty();
            });
        } else {
            $("#buy-now").removeClass("disabled");
            let minutes = minutescalculator(amount);
            jQuery("#minutes_area").empty();
            jQuery("#minutes_area").attr(
                "placeholder",
                `Your Minutes: ${minutes} Minutes`
            );
        }
    });
    jQuery("#minutes_select_tarrifs_page").keyup(function () {
        let amount = jQuery("#minutes_select_tarrifs_page").val();

        jQuery(".read-more").removeClass("disabled");
        if (amount < 0) {
            jQuery("#minutes_select_tarrifs_page").val() == "";
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Negative numbers not allowed",
            }).then(function () {
                jQuery("#minutes_select_tarrifs_page").val() == "";
                jQuery("#minutes_select_tarrifs_page_placeholder").empty();
            });
        } else {
            let minutes = minutescalculator(amount);
            jQuery("#minutes_select_tarrifs_page_placeholder").empty();
            jQuery("#minutes_select_tarrifs_page_placeholder").attr(
                "placeholder",
                `Your Minutes: ${minutes} Minutes`
            );
        }
    });

    jQuery("#minutes_select_tarrifs_page2").keyup(function () {
        let amount = jQuery("#minutes_select_tarrifs_page2").val();

        jQuery(".read-more").removeClass("disabled");
        //new
        if (amount < 0) {
            jQuery("#minutes_select_tarrifs_page2").val() == "";
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Negative numbers not allowed",
            }).then(function () {
                jQuery("#minutes_select_tarrifs_page2").val() == "";
                jQuery("#minutes_select_tarrifs_page_placeholder2").empty();
            });
        } else {
            let minutes = minutescalculator(amount);
            jQuery("#minutes_select_tarrifs_page_placeholder2").empty();
            jQuery("#minutes_select_tarrifs_page_placeholder2").attr(
                "placeholder",
                `Your Minutes: ${minutes} Minutes`
            );
        }
    });
    jQuery("#minutes_calculator_promotion").keyup(function () {
        let amount = jQuery("#minutes_calculator_promotion").val();
        jQuery(".btn-read-more").show();

        //new

        if (amount < 0) {
            jQuery("#minutes_calculator_promotion").val() == "";
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Negative numbers not allowed",
            }).then(function () {
                jQuery("#minutes_calculator_promotion").val() == "";
                jQuery("#minutes_select_tarrifs_page_placeholder2").empty();
            });
        } else {
            let minutes = minutescalculator(amount);
            jQuery("#minutes_calculator_promotion_placeholder").empty();
            jQuery("#minutes_calculator_promotion_placeholder").attr(
                "placeholder",
                `${minutes} Minutes`
            );
        }
    });

    jQuery("#data_select").change(function () {
        let id2 = jQuery("#data_select").val();
        jQuery.ajax({
            url: apiurl + "/includes/api/getbundles.php",
            type: "POST",
            data: {
                id: id2,
            },
            success: function (msg) {
                let data = JSON.parse(msg);
                //  console.log(data);
                for (var i = 0; i < data.length; i++) {
                    jQuery("#attach_bundles").empty();
                    jQuery("#attach_bundles").attr(
                        "placeholder",
                        "Your Data: " + data[i].onpeak
                    );
                }
            },
        });
    });
    jQuery("#validity_period").change(function () {
        let id2 = jQuery("#validity_period").val();
        jQuery.ajax({
            url: apiurl + "/includes/api/getbundles.php",
            type: "POST",
            data: {
                id: id2,
            },
            success: function (msg) {
                let data = JSON.parse(msg);
                //  console.log(data);
                for (var i = 0; i < data.length; i++) {
                    jQuery("#validity_period_placeholder").empty();
                    jQuery("#validity_period_placeholder").attr(
                        "placeholder",
                        "Your Data: " + data[i].onpeak
                    );
                }
            },
        });
    });
    jQuery("#data_smart_tools").change(function () {
        let id2 = jQuery("#data_smart_tools").val();
        jQuery.ajax({
            url: apiurl + "/includes/api/getbundles.php",
            type: "POST",
            data: {
                id: id2,
            },
            success: function (msg) {
                let data = JSON.parse(msg);
                //  console.log(data);
                for (var i = 0; i < data.length; i++) {
                    jQuery("#data_smart_tools_placeholder").empty();
                    jQuery("#data_smart_tools_placeholder").attr(
                        "placeholder",
                        "Your Data: " + data[i].onpeak
                    );
                }
            },
        });
    });

    jQuery("#mpesa_rates_select").change(function ($event) {
        let min_amount = jQuery("#mpesa_rates_select").val();
        let mpesa_rates_type = jQuery("#mpesa_rates_type").val();

        if (min_amount == 0) {
            jQuery("#bundle_append_area").empty();
            jQuery("#bundle_append_area").append("Ksh ");
        } else {
            jQuery.ajax({
                url: apiurl + "/includes/api/mpesacalculator.php",
                type: "POST",
                data: {
                    amount: min_amount,
                    mpesa_rates_type: mpesa_rates_type,
                },
                beforeSend: function () {
                    // Setting a timeout
                    $("#loading").show();
                },
                success: function (msg) {
                    $("#loading").hide();
                    let data = JSON.parse(msg);
                    var propertyNames = Object.entries(data);
                    var amt = propertyNames[0][1][0];
                    jQuery("#bundle_append_area").empty();
                    if ($("#mpesa_rates_select option:selected").text() == "Ksh 1-49") {
                        jQuery("#bundle_append_area").append("Minimum Amount: Ksh " + 50.00);
                    } else {
                        jQuery("#bundle_append_area").append("Ksh " + amt);
                    }
                },
            });
        }

    });

    jQuery("#mpesa_rates_atm_select").change(function () {
        let min_amount = jQuery("#mpesa_rates_atm_select").val();

        if (min_amount == 0) {
            jQuery("#bundle_append_area").empty();
            jQuery("#bundle_append_area").append("Ksh ");
        } else {
            jQuery.ajax({
                url: apiurl + "/includes/api/getatmmpesarates.php",
                type: "POST",
                data: {
                    amount: min_amount,
                },
                beforeSend: function () {
                    // Setting a timeout
                    $("#loading").show();
                },
                success: function (msg) {
                    $("#loading").hide();
                    let res = JSON.parse(msg);
                    if (res.length > 0) {
                        var amt = res[0].charges;
                        jQuery("#bundle_append_area").empty();
                        jQuery("#bundle_append_area").append("Ksh " + amt);
                    } else {
                        // Handle the case when res is empty, if needed
                    }
                },
            });
        }
    });


    jQuery("#mpesa_rates_type").change(function () {
        $val = jQuery("#mpesa_rates_type").val();
        jQuery("#bundle_append_area").empty();
        jQuery("#bundle_append_area").append("Ksh");
        jQuery('#mpesa_rates_select').prop('selectedIndex', 0);
        jQuery('#mpesa_rates_atm_select').prop('selectedIndex', 0);

        if ($val == 2) {
            jQuery("#mpesa_rates_select").hide();
            jQuery("#mpesa_rates_atm_select").show();
        } else {
            jQuery("#mpesa_rates_atm_select").css("display", "none");
            jQuery("#mpesa_rates_select").css("display", "block");
        }
    });

    let id;
    var select_box = jQuery("#country");
    var select_box2 = jQuery("#country2");
    var select_box3 = jQuery("#sms_select");
    var select_box4 = jQuery("#data_select");
    var select_box5 = jQuery("#mpesa_rates_select");
    var select_box6 = jQuery("#mpesa_rates_atm_select");
    var select_box7 = jQuery("#validity_period");
    var select_box8 = jQuery("#data_smart_tools");
    select_box.append(
        jQuery("<option selected='selected'/>").val("").text("Select Country")
    );
    select_box2.append(
        jQuery("<option selected='selected'/>").val("").text("Select Country")
    );
    select_box3.append(
        jQuery("<option selected='selected'/>").val("0").text("Select Amount")
    );
    select_box4.append(
        jQuery("<option selected='selected'/>").val("0").text("Select Amount")
    );
    select_box5.append(
        jQuery("<option selected='selected'/>").val("0").text("Select Amount Range")
    );
    select_box6.append(
        jQuery("<option selected='selected'/>").val("0").text("Select Amount Range")
    );
    //    select_box7.append(jQuery("<option selected='selected'/>").val("0").text("Validity period"));
    //    select_box8.append(jQuery("<option selected='selected'/>").val("0").text("Select amount you wish to spend"));

    jQuery.ajax({
        url: apiurl + "/includes/api/country.php",
        type: "POST",
        data: {
            id: id,
        },
        success: function (msg) {
            let data = JSON.parse(msg);
            for (var i = 0; i < data.length; i++) {
                // Iterate over numeric indexes from 0 to 5, as everyone expects.

                select_box.append(
                    jQuery("<option />").val(data[i].id).text(data[i].country_name)
                );
                select_box2.append(
                    jQuery("<option />")
                        .val(data[i].id)
                        .text(data[i].country_name + " (+" + data[i].phone_code + ")")
                );
            }
        },
    });
    //    $('#country').select2();

    // $('#modal_country').select2();

    let timezone = jQuery("#timezone");
    jQuery.ajax({
        url: "https://worldtimeapi.org/api/timezone",
        type: "Get",
        success: function (data) {
            //   console.log(data);
            for (var i = 0; i < data.length; i++) {
                //  console.log(data[i]);
                timezone.append(jQuery("<option />").val(data[i]).text(data[i]));
            }
        },
    });

    //set data options

    jQuery.ajax({
        url: apiurl + "/includes/api/getsms.php",
        type: "POST",
        success: function (msg) {
            let data = JSON.parse(msg);
            //   console.log(data);
            for (var i = 0; i < data.length; i++) {
                // Iterate over numeric indexes from 0 to 5, as everyone expects.

                select_box3.append(
                    jQuery("<option />")
                        .val(data[i].price)
                        .text("Ksh " + data[i].price)
                );
            }
        },
    });

    jQuery.ajax({
        url: apiurl + "/includes/api/getbundles.php",
        type: "POST",
        success: function (msg) {
            let data = JSON.parse(msg);
            //   console.log(data);
            for (var i = 0; i < data.length; i++) {
                // Iterate over numeric indexes from 0 to 5, as everyone expects.

                select_box4.append(
                    jQuery("<option />")
                        .val(data[i].price)
                        .text("Ksh" + data[i].price)
                );
                select_box8.append(
                    jQuery("<option />")
                        .val(data[i].price)
                        .text("Ksh" + data[i].price)
                );
                select_box7.append(
                    jQuery("<option />")
                        .val(data[i].price)
                        .text(data[i].validityperiod + " " + "at Ksh " + data[i].price)
                );
            }
        },
    });

    jQuery.ajax({
        url: apiurl + "/includes/api/mpesacalculator.php",
        type: "POST",
        success: function (msg) {
            let data = JSON.parse(msg);
            //   console.log(data);
            for (var i = 0; i < data.length; i++) {
                // Iterate over numeric indexes from 0 to 5, as everyone expects.

                select_box5.append(
                    jQuery("<option />")
                        .val(data[i].min)
                        .text("Ksh" + " " + data[i].min + "-" + data[i].max)
                );
            }
        },
    });

    jQuery.ajax({
        url: apiurl + "/includes/api/getatmmpesarates.php",
        type: "POST",
        success: function (msg) {
            let data = JSON.parse(msg);
            //   console.log(data);
            for (var i = 0; i < data.length; i++) {
                // Iterate over numeric indexes from 0 to 5, as everyone expects.

                select_box6.append(
                    jQuery("<option />")
                        .val(data[i].min)
                        .text("Ksh" + " " + data[i].min + "-" + data[i].max)
                );
            }
        },
    });

    // AJAX call for autocomplete
    $(document).bind("keyup", "#mpesa_timeline_autocomplete_input", function (e) {
        // $('input').bind('change keydown keyup',function (){
        var search_term = jQuery(".mpesa_timeline_autocomplete_input").val();
        // var search_term = jQuery(this).val();
        var cat_id = jQuery(".nav-link.active").attr("data-cat");

        jQuery("#mpesa_timeline_autocomplete").autocomplete({
            source: function (request, response) {
                // Fetch data;
                //  console.log(request);

                jQuery.ajax({
                    url: apiurl + "/includes/api/mpesajourney.php",
                    type: "POST",
                    // dataType: "json",
                    data: {
                        search: search_term,
                        cat_id: cat_id,
                    },
                    success: function (data) {
                        $("div.mpesa_timeline_autocomplete_container").html(data);

                        var owltab = $("#tabs2");
                        if (typeof owltab.data("owlCarousel") != "undefined") {
                            owltab.data("owlCarousel").destroy();
                            owltab.removeClass("owl-carousel");
                        }
                        // $("#tabs2").data('owlCarousel').destroy();
                        $("#tabs2").owlCarousel({
                            loop: false,
                            nav: true,
                            dots: false,
                            autoplayHoverPause: true,
                            autoplay: false,
                            margin: 0,
                            responsive: {
                                0: {
                                    items: 4,
                                    autoWidth: false,
                                    dots: true,
                                    nav: false,
                                },
                                576: {
                                    autoWidth: true,
                                },
                                768: {
                                    autoWidth: true,
                                },
                                1200: {
                                    autoWidth: true,
                                },
                            },
                        });
                        /*
                        $('#tabs2').owlCarousel({
                            loop: false,
                            nav: true,
                            dots: false,
                            autoplayHoverPause: true,
                            autoplay: false,
                            margin: 0,
                            responsive: {
                                0: {
                                    items: 4,
                                    autoWidth: false,
                                    dots: true,
                                    nav: false,
                                },
                                576: {
                                    autoWidth: true,
                                },
                                768: {
                                    autoWidth: true,
                                },
                                1200: {
                                    autoWidth: true,
                                }
                            }
                        });
                        */

                        // alert('Success');
                        // console.log(data);
                        // $(".mpesa-timeline").css({"width": "108%", "position": "absolute", "left": "-3.2%", "top": "7px"})
                    },
                });
            },
            select: function (event, ui) {
                // Set selection
                $("#mpesa_timeline_autocomplete").val(ui.item.label); // display the selected text
                //$('#selectuser_id').val(ui.item.value); // save selected id to input
                return false;
            },
            focus: function (event, ui) {
                $("#mpesa_timeline_autocomplete").val(ui.item.label);
                //$( "#selectuser_id" ).val( ui.item.value );
                return false;
            },
        });
    });

    $("#get_minutes").click(function () {
        let amount = jQuery("#minutes_input").val();
        jQuery("#minutes_area").empty();
        jQuery("#minutes_area").attr("placeholder", "Your Data: 300Mbs");
    });

    $(".event_date").flatpickr({
        mode: "range",
        dateFormat: "Y-m-d",
    });
    $("#minutes_input_homepage").keyup(function () {
        let amount = jQuery("#minutes_input_homepage").val();
        $("#buy-data-now").removeClass("disabled");
        jQuery("#buy-data-now").show();

        if (amount < 0) {
            jQuery("#minutes_input_homepage").val() == "";
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Negative numbers not allowed",
            }).then(function () {
                jQuery("#minutes_input_homepage").val() == "";
                jQuery("#minutes_area2").empty();
            });
        } else {
            let data = datacalculator(amount);
            $("#buy-data-now").removeClass("disabled");
            jQuery("#minutes_area2").empty();
            jQuery("#minutes_area2").attr("placeholder", `Your Data: ${data} Mbs`);
        }
    });
    $("#data_calc").keyup(function () {
        let amount = jQuery("#data_calc").val();
        jQuery(".read-more").removeClass("disabled");

        let data = datacalculator(amount);
        jQuery("#data_calc_placeholder").empty();
        jQuery("#data_calc_placeholder").attr(
            "placeholder",
            `Your Data: ${data} Mbs`
        );
    });

    $("#data_calc2").keyup(function () {
        let amount = jQuery("#data_calc2").val();

        let data = datacalculator(amount);
        jQuery("#data_calc2_placeholder").empty();
        jQuery("#data_calc2_placeholder").attr(
            "placeholder",
            `Your Data: ${data} Mbs`
        );
    });

    $("#data_calc_promo").keyup(function () {
        let amount = jQuery("#data_calc_promo").val();

        let data = datacalculator(amount);
        //jQuery(".btn-read-more").show();
        jQuery("#data_calc_promo_placeholder").empty();
        jQuery("#data_calc_promo_placeholder").attr(
            "placeholder",
            `Your Data: ${data} Mbs`
        );
    });

    function datacalculator(amount) {
        //algo
        //if its less than 10

        let data;

        if (amount <= 10) {
            data = Math.floor(amount / 0.5);
        } else if ((amount <= 50) & (amount > 10)) {
            data = Math.floor(amount / 0.29);
        } else if (amount > 51) {
            data = Math.floor(amount / 0.2);
        }

        return data;
    }

    function minutescalculator(amount) {
        //algo
        //if its less than 10

        let minutes = (amount * 150) / 100;

        return minutes;
    }

    //contact form email validation

    jQuery(".rapid_email").change(function () {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var str = jQuery(".rapid_email").val();

        //console.log(regex.test(str));
        //isNumeric("-10")
        if (regex.test(str) == false) {
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Please a valid email address to continue.",
            }).then(function () {
                jQuery(".rapid_email").val("");
            });
        } else {
            jQuery(".rapid_subject").prop("disabled", false);
        }
    });

    jQuery(".rapid_subject").keyup(function () {
        //value.replace(/[^A-Z0-9]+/i, '')
        var hasNumber = /\d/;
        var str = jQuery(".rapid_subject").val();
        //console.log(hasNumber.test(str));
        if (/^[a-zA-Z0-9- ]*$/.test(str) == false || hasNumber.test(str) == true) {
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Please only enter letters of the alphabet.",
            }).then(function () {
                jQuery(".rapid_subject").val("");
            });
        } else {
            jQuery(".rapid_message").prop("disabled", false);
        }
    });

    jQuery(".rapid_message").keyup(function () {
        var str = jQuery(".rapid_message").val();
        //console.log(hasNumber.test(str));
        if (str == "") {
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Message cannot be empty.",
            }).then(function () {
                jQuery(".rapid_message").val("");
            });
        } else {
            jQuery(".rapid_submit").prop("disabled", false);
        }
    });

    jQuery(".rapid_submit").click(function () {
        var comment = jQuery(".rapid_message").val();
        var pageid = jQuery(".pageid").val();
        // console.log(pageid);
        if (comment == "") {
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Message cannot be empty.",
            }).then(function () {
                jQuery(".rapid_message").val("");
            });
        } else {
            jQuery.ajax({
                url: apiurl + "/includes/api/comments.php",
                type: "POST",
                data: {
                    comment: comment,
                    pageid: pageid,
                },
                success: function (msg) {
                    if (msg == "inserted") {
                        swal({
                            // icon: "success",
                            title: "",
                            text: "Thank you for your feedback.",
                        }).then(function () {
                            jQuery(".rapid_message").val("");
                            //window.location.href = `${URL}/#app-section`;
                            location.reload();
                        });
                    }
                },
            });
        }
    });

    jQuery("#image_good").click(function () {
        jQuery.ajax({
            url: apiurl + "/includes/api/likes.php",
            type: "POST",
            success: function (msg) {
                if (msg == "inserted") {
                    swal({
                        title: "",
                        text: "Your Feedback has been Received.",
                    });

                    // jQuery("#image_good").attr("disabled","disabled");
                    jQuery("#image_good").prop("disabled", true);
                }
            },
        });
    });
    jQuery("#sponsorship_form").submit(function (e) {
        e.preventDefault();

        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

        var first_name = jQuery("#first_name").val();
        var last_name = jQuery("#last_name").val();
        var email = jQuery("#email").val();
        var organization_name = jQuery("#organization_name").val();
        var phone = jQuery("#phone").val();

        if (first_name == "") {
            swal({
                icon: "error",
                title: "Validation Error",
                text: "First Name cannot be empty.",
            }).then(function () {
                jQuery("#first_name").val("");
            });
        } else if (last_name == "") {
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Last Name cannot be empty.",
            }).then(function () {
                jQuery("#last_name").val("");
            });
        } else if (email == "") {
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Email cannot be empty.",
            }).then(function () {
                jQuery("#email").val("");
            });
        } else if (!reg.test(email)) {
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Email is invalid.",
            }).then(function () {
                jQuery("phone").val("");
            });
        } else if (organization_name == "") {
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Organization name cannot be empty.",
            }).then(function () {
                jQuery("#organization_name").val("");
            });
        } else if (phone == "") {
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Phone number cannot be empty.",
            }).then(function () {
                jQuery("phone").val("");
            });
        } else if (!phoneno.test(phone)) {
            swal({
                icon: "error",
                title: "Validation Error",
                text: "Phone number is invalid.",
            }).then(function () {
                jQuery("phone").val("");
            });
        } else {
            jQuery.ajax({
                url: apiurl + "/includes/api/saveSponsorshipForm.php",
                type: "POST",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                beforeSend: function () {
                },
                success: function (msg) {
                    if (msg == "inserted") {
                        swal({
                            title: "",
                            text: "We have received your request",
                        });

                        // jQuery("#image_good").attr("disabled","disabled");
                        jQuery("#image_good").prop("disabled", true);
                        jQuery("#sponsorship_form").trigger("reset");
                    } else if (msg != "") {
                        swal({
                            icon: "error",
                            title: "Validation Error",
                            text: msg,
                        });
                    } else {
                        swal({
                            icon: "error",
                            title: "Validation Error",
                            text: "There was a problem saving your file",
                        });
                    }
                },
            });
        }
    });

    //     $("#sparkfund_form").submit(function (e) {
    //     e.preventDefault();

    //     var youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]+$/;

    //     var formData = new FormData(document.getElementById("sparkfund_form"));
    //     formData.append("company_description", $("#company_description").val());
    //     formData.append("company_link", $("#company_link").val());
    //     formData.append("youtube_link", $("#youtube_link").val());
    //     formData.append("team_profile", $("#team_profile").val());
    //     formData.append("brief_background", $("#brief_background").val());
    //     formData.append("employee_number", $("#employee_number").val());
    //     formData.append("women_number", $("#women_number").val());
    //     formData.append("company_problem", $("#company_problem").val());
    //     formData.append("industryVertical", $("#industryVertical").val());
    //     formData.append("business_model", $("#business_model").val());
    //     formData.append("competitors", $("#competitors").val());
    //     formData.append("scalability", $("#scalability").val());
    //     formData.append("priority", $("#priority").val());
    //     formData.append("funds_raised", $("#funds_raised").val());
    //     formData.append("postrevenue", $("#postrevenue").val());
    //     formData.append("monthly_revenue", $("#monthly_revenue").val());
    //     formData.append("fund_forecast", $("#fund_forecast").val());
    //     formData.append("fund_use", $("#fund_use").val());

    //     // Validation
    //     var errorMessages = [];

    //     if ($("#venture_name").val() === "") {
    //         errorMessages.push("Venture Name cannot be empty!");
    //         $("#ventureNameError").text("Venture Name cannot be empty!");
    //     } else {
    //         $("#ventureNameError").text("");
    //     }

    //     if ($("#foundation_date").val() === "") {
    //         errorMessages.push("Company foundation date cannot be empty!");
    //         $("#foundationDateError").text("Company foundation date cannot be empty!");
    //     } else {
    //         $("#foundationDateError").text("");
    //     }

    //     if ($("#company_website").val() === "") {
    //       errorMessages.push("The Company Website Cannot Be mepty!");
    //       $("#companyWebsiteError").text("The Company Website Cannot Be mepty!");
    //     } else {

    //     try {
    //         new URL($("#company_website").val());

    //         $("#companyWebsiteError").text("");
    //     } catch (error) {
    //         errorMessages.push("The Company Website is Not a Valid URL!");
    //         $("#companyWebsiteError").text("The Company Website is Not a Valid URL!");
    //     }
    // }


    //     if ($("#company_description").val() === "") {
    //         errorMessages.push("Company description cannot be empty!");
    //         $("#companyDescriptionError").text("Company description cannot be empty!");
    //     } else {
    //         $("#companyDescriptionError").text("");
    //     }

    //     if ($("#company_link").val() === "") {
    //     errorMessages.push("The Pitch Deck cannot be empty");
    //     $("#companyLinkError").text("The Pitch Deck cannot be empty");
    //   } else {
    //     try {
    //         new URL($("#company_link").val());
    //         $("#companyLinkError").text("");
    //     } catch (error) {
    //         errorMessages.push("The Pitch Deck is not a valid URL!");
    //         $("#companyLinkError").text("The Pitch Deck is Not a Valid URL!");
    //     }
    // }


    //     if ($("#youtube_link").val() === "") {
    //         errorMessages.push("Youtube link cannot be empty!");
    //         $("#youtubeLinkError").text("Youtube link cannot be empty!");
    //     } else if (!youtubeRegex.test($("#youtube_link").val())) {
    //         errorMessages.push("Please enter a valid YouTube link!");
    //         $("#youtubeLinkError").text("Please enter a valid YouTube link!");
    //     } else {
    //         $("#youtubeLinkError").text("");
    //     }

    //     if ($("#team_profile").val() === "") {
    //         errorMessages.push("Team profile cannot be empty!");
    //         $("#teamProfileError").text("Team profile cannot be empty!");
    //     } else {
    //         $("#teamProfileError").text("");
    //     }

    //     if ($("#brief_background").val() === "") {
    //         errorMessages.push("Brief Background on each Founder cannot be empty!");
    //         $("#briefBackgroundError").text("Brief Background on each Founder cannot be empty!");
    //     } else {
    //         $("#teamProfileError").text("");
    //     }

    //     if ($("#employee_number").val() === "") {
    //         errorMessages.push("Employee number cannot be be empty!");
    //         $("#employeeNumberError").text("Employee number cannot be be empty!");
    //     } else {
    //         $("#employeeNumberError").text("");
    //     }

    //     if ($("#women_number").val() === "") {
    //         errorMessages.push("Women number cannot be empty!");
    //         $("#womenNumberError").text("Women number cannot be empty!");
    //     } else {
    //         $("#womenNumberError").text("");
    //     }

    //     if ($("#company_problem").val() === "") {
    //         errorMessages.push("Company problem cannot be empty!");
    //         $("#companyProblemError").text("Company problem cannot be empty!");
    //     } else {
    //         $("#companyProblemError").text("");
    //     }

    //     if ($("#industryVertical").val() === "") {
    //         errorMessages.push("Please select an industry vertical!");
    //         $("#industryVerticalError").text("Please select an industry vertical!");
    //     } else {
    //         $("#industryVerticalError").text("");
    //     }

    //     if ($("#business_model").val() === "") {
    //         errorMessages.push("Please select a business model!");
    //         $("#businessModelError").text("Please select a business model!");
    //     } else {
    //         $("#businessModelError").text("");
    //     }

    //     if ($("#competitors").val() === "") {
    //         errorMessages.push("Competitors cannot be empty!");
    //         $("#competitorsError").text("Competitors cannot be empty!");
    //     } else {
    //         $("#competitorsError").text("");
    //     }

    //     if ($("#scalability").val() === "") {
    //         errorMessages.push("Scalability cannot be empty!");
    //         $("#scalabilityError").text("Scalability cannot be empty!");
    //     } else {
    //         $("#scalabilityError").text("");
    //     }

    //     if ($("#priority").val() === "") {
    //         errorMessages.push("Priority cannot be empty!");
    //         $("#priorityError").text("Priority cannot be empty!");
    //     } else {
    //         $("#priorityError").text("");
    //     }

    //     if ($("#funds_raised").val() === "") {
    //         errorMessages.push("Funds raised cannot be empty!");
    //         $("#fundsRaisedError").text("Funds raised cannot be empty!");
    //     } else {
    //         $("#fundsRaisedError").text("");
    //     }

    //     if ($("#postrevenue").val() === "") {
    //         errorMessages.push("Please select an option for post-revenue!");
    //         $("#postrevenueError").text("Please select an option for post-revenue!");
    //     } else {
    //         $("#postrevenueError").text("");
    //     }

    //     if ($("#monthly_revenue").val() === "") {
    //         errorMessages.push("Monthly revenue cannot be empty!");
    //         $("#monthlyRevenueError").text("Monthly revenue cannot be empty!");
    //     } else {
    //         $("#monthlyRevenueError").text("");
    //     }

    //     if ($("#fund_forecast").val() === "") {
    //         errorMessages.push("Fund forecast cannot be empty!");
    //         $("#fundForecastError").text("Fund forecast cannot be empty!");
    //     } else {
    //         $("#fundForecastError").text("");
    //     }

    //     if ($("#fund_use").val() === "") {
    //         errorMessages.push("Fund use cannot be empty!");
    //         $("#fundUseError").text("Fund use cannot be empty!");
    //     } else {
    //         $("#fundUseError").text("");
    //     }




    //     if (errorMessages.length === 0) {
    //     $.ajax({
    //         type: "POST",
    //         url: apiurl + "/includes/api/savesparkaccelerator.php",
    //         data: formData,
    //         processData: false,
    //         contentType: false,
    //         cache: false,
    //         success: function () {
    //             $("#myModal").modal("show");
    //             $("#image_good").prop("disabled", true);
    //             $("#sparkfund_form").trigger("reset");
    //         },
    //         error: function () {
    //         },
    //     });
    // }

    // });


    jQuery("#callback-request").submit(function (e) {
        e.preventDefault();

        var cta_name = jQuery("#cta_name").val();
        var cta_business_name = jQuery("#cta_business_name").val();
        var cta_email = jQuery("#cta_email").val();
        var cta_phone = jQuery("#cta_phone").val();
        var cta_region = jQuery("#cta_region").val();
        var cta_product = jQuery("#cta_product").val();

        jQuery.ajax({
            url: apiurl + "/includes/api/postrequestcallback.php",
            type: "POST",
            data: {
                contactName: cta_name,
                businessName: cta_business_name,
                businessEmail: cta_email,
                businessLocationId: cta_region,
                businessSize: "SoHo",
                productId: cta_product,
                contactNumber: cta_phone,
            },
            success: function (msg) {
                if (msg == "201") {
                    jQuery("#callback-request")[0].reset();
                    jQuery("#callback-request").hide();
                    jQuery("#callback-response").html(
                        "Thank you. Your service request has been received. A sales representative will contact you within 24 hours to facilitate your request."
                    );
                } else {
                    jQuery("#callback-response").html(
                        "Error occured, Kindly contact Safaricom for assistance"
                    );
                }
            },
        });
    });
});

jQuery("#tabs1 .owl-next").on("click", function () {
    jQuery(".owl-stage .owl-item").each(function (i, e) {
        jQuery(e).find(".active").removeClass("active");
    });
});

jQuery("#tabs1 .owl-prev").on("click", function () {
    jQuery(".owl-stage .owl-item").each(function (i, e) {
        jQuery(e).find(".active").removeClass("active");
    });
});

jQuery("#tabs1 .nav-link").on("click", function () {
    jQuery(".owl-stage .owl-item .nav-item").each(function (i, e) {
        jQuery(e).find(".active").removeClass("active");
    });
});

// Persist the selected active tab
jQuery("#tabs2 .owl-next").on("click", function () {
    // jQuery(".owl-stage .owl-item").each(function (i, e) {
    //     jQuery(e).find(".active").removeClass("active");
    // });
});

jQuery("#tabs2 .owl-prev").on("click", function () {
    // jQuery(".owl-stage .owl-item").each(function (i, e) {
    //     jQuery(e).find(".active").removeClass("active");
    // });
});

jQuery("#tabs2 .nav-link").on("click", function () {
    jQuery(".owl-stage .owl-item .nav-item").each(function (i, e) {
        jQuery(e).find(".active").removeClass("active");
    });
});

var sync1 = $("#sync1");
var sync2 = $("#sync2");
var slidesPerPage = 3; //globaly define number of elements per page
var syncedSecondary = true;

sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
});

sync2
    .on("initialized.owl.carousel", function () {
        sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
        items: slidesPerPage,
        dots: true,
        nav: true,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate: 100,
    })
    .on("changed.owl.carousel", syncPosition2);

function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
        current = count;
    }
    if (current > count) {
        current = 0;
    }

    //end block

    sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2.find(".owl-item.active").first().index();
    var end = sync2.find(".owl-item.active").last().index();

    if (current > end) {
        sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
        sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
}

function syncPosition2(el) {
    if (syncedSecondary) {
        var number = el.item.index;
        sync1.data("owl.carousel").to(number, 100, true);
    }
}

sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
});

/**
 * day check and time conversion functions
 */
function checkSaturday(d) {
    return d === 6;
}

function checkSunday(d) {
    return d === 0;
}

function checkWeekend(d) {
    return d === 0 || d === 6;
}

function convertTime(time) {
    /**
     * convert string to datetime
     */
    time = time.split(":");
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
}

// function setCookies() {
//     document.getElementById("cookiesblock").style.display = "none";
//     document.cookie = "cookiePolicy=1,max-age=2592000;";
// };

function bundlePrices() {
    var id = $("#bundle_plan").val();

    if (id == "") {
        return false;
    } else {
        $.ajax({
            url: apiurl + "/includes/api/getbundleplans.php",
            type: "POST",
            data: { id: id },
        }).done(function (html) {
            $("#bundle_price").html(html).fadeIn();
            $("#bundles_price").html("").fadeIn();
            // $(".widget-bundles__box").fadeIn();
        });
    }
}

function bundlePrice() {
    var id = $("#bundle_price").val();

    if (id == "") {
        return false;
    } else {
        $.ajax({
            url: apiurl + "/includes/api/getbundlesexpiry.php",
            type: "POST",
            data: { id: id },
        }).done(function (data) {
            console.log(data);
            $("#bundles_price").html(data).fadeIn();
            // $(".widget-bundles__box").fadeIn();
        });
    }


}


let mybutton = document.getElementById("applyFundBtn");

if (mybutton) {
    window.onscroll = function () {
        scrollFunction();
    };
}

function scrollFunction() {
    if (mybutton) {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

$(document).ready(function () {
    const dateInput = document.getElementById("foundation_date");


    if (dateInput) {
        const currentDate = new Date().toISOString().split("T")[0];
        dateInput.setAttribute("max", currentDate);
    }
});



//Insert user Feedback


$("#saveUserFeedback").click(function (event) {
    event.preventDefault();

    var nameRegex = /^[A-Za-z\s'-]{0,255}$/;
    var commentRegex = /^[A-Za-z0-9\s'-.?:()@!]{1,300}$/;
    var isExperienceOneChecked = $("#check1").is(":checked") || $("#check5").is(":checked") || $("#check9").is(":checked") || $("#check13").is(":checked") || $("#check17").is(":checked");
    var isExperienceTwoChecked = $("#check2").is(":checked") || $("#check6").is(":checked") || $("#check10").is(":checked") || $("#check14").is(":checked") || $("#check18").is(":checked");
    var isExperienceThreeChecked = $("#check3").is(":checked") || $("#check7").is(":checked") || $("#check11").is(":checked") || $("#check15").is(":checked") || $("#check19").is(":checked");
    var isExperienceFourChecked = $("#check4").is(":checked") || $("#check8").is(":checked") || $("#check12").is(":checked") || $("#check16").is(":checked") || $("#check20").is(":checked");

    var formData = new FormData(document.getElementById("rapid_contact"));

    formData.append("comment", $("#comment").val());
    formData.append("pageUrl", $("#pageUrl").val());
    formData.append("pageTitle", $("#pageTitle").val());
    formData.append("pagePath", $("#pagePath").val());
    formData.append("starRating", $('input[name=rating]:checked').val());
    if ($("#userName").val() == "") {
        formData.append("name", "Anonymous");
    } else {
        formData.append("name", $("#userName").val());
    }

    if (isExperienceOneChecked) {
        console.log("Hit");

        formData.append("experienceOne", $("#check1").val());
    } else if (isExperienceTwoChecked) {
        formData.append("experienceTwo", $("#check2").val());
    } else if (isExperienceThreeChecked) {
        formData.append("experienceThree", $("#check3").val());
    } else if (isExperienceFourChecked) {
        formData.append("experienceFour", $("#check4").val());
    } else if (isExperienceOneChecked && isExperienceTwoChecked) {
        formData.append("experienceOne", $("#check1").val());
        formData.append("experienceTwo", $("#check2").val());
    } else if (isExperienceOneChecked && isExperienceTwoChecked && isExperienceThreeChecked) {
        formData.append("experienceOne", $("#check1").val());
        formData.append("experienceTwo", $("#check2").val());
        formData.append("experienceThree", $("#check3").val());
    } else if (isExperienceOneChecked && isExperienceTwoChecked && isExperienceThreeChecked && isExperienceFourChecked) {
        formData.append("experienceOne", $("#check1").val());
        formData.append("experienceTwo", $("#check2").val());
        formData.append("experienceThree", $("#check3").val());
        formData.append("experienceFour", $("#check4").val());
    } else if (isExperienceOneChecked && isExperienceThreeChecked) {
        formData.append("experienceOne", $("#check1").val());
        formData.append("experienceThree", $("#check3").val());
    } else if (isExperienceOneChecked && isExperienceFourChecked) {
        formData.append("experienceOne", $("#check1").val());
        formData.append("experienceFour", $("#check4").val());
    } else if (isExperienceTwoChecked && isExperienceThreeChecked) {
        formData.append("experienceTwo", $("#check2").val());
        formData.append("experienceThree", $("#check3").val());
    } else if (isExperienceTwoChecked && isExperienceFourChecked) {
        formData.append("experienceTwo", $("#check2").val());
        formData.append("experienceFour", $("#check4").val());
    } else if (isExperienceThreeChecked && isExperienceFourChecked) {
        formData.append("experienceThree", $("#check3").val());
        formData.append("experienceFour", $("#check4").val());
    } else if (isExperienceOneChecked && isExperienceThreeChecked && isExperienceFourChecked) {
        formData.append("experienceOne", $("#check1").val());
        formData.append("experienceThree", $("#check3").val());
        formData.append("experienceFour", $("#check4").val());
    } else if (isExperienceTwoChecked && isExperienceThreeChecked && isExperienceFourChecked) {
        formData.append("experienceTwo", $("#check2").val());
        formData.append("experienceThree", $("#check3").val());
        formData.append("experienceFour", $("#check4").val());
    } else if (isExperienceOneChecked && isExperienceTwoChecked && isExperienceFourChecked) {
        formData.append("experienceOne", $("#check1").val());
        formData.append("experienceTwo", $("#check2").val());
        formData.append("experienceFour", $("#check4").val());
    }
    // Validation
    var errorMessages = [];

    if (!nameRegex.test(formData.name)) {
        errorMessages.push("Please enter a valid Name!");
        $("#userNameError").text("Please enter a valid Name!");
    } else {
        $("#userNameError").text("");
    }
    if (!commentRegex.test(formData.comment)) {
        errorMessages.push(
            "Sorry. Certain special characters allowed in a comment and only 300 characters allowed!"
        );
        $("#commentError").text(
            "Sorry. Certain special characters allowed in a comment and only 300 characters allowed!"
        );
    } else {
        $("#commentError").text("");
    }

    if (errorMessages.length === 0) {
        $.ajax({
            type: "POST",
            url: apiurl + "includes/api/insertUserFeedback.php",
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            success: function (msg) {
                if (msg == "inserted") {
                    swal({
                        // icon: "success",
                        title: "",
                        text: "Thank you for your feedback.",

                    }).then(function () {
                        jQuery('.rapid_message').val("");
                        jQuery('#feedbackmodal').modal('hide');
                    });
                }
            },
            error: function (msg) {
                // Some error in ajax call
                alert(msg);
            }
        });
    }
});



//save bill manager form

$("#billManagerForm").submit(function (e) {
    e.preventDefault();

    var nameRegex = /^[A-Za-z\s'-]{1,50}$/;
    var lengthRegex = /^\d{10}$/;
    var formatRegex = /^(07|01)/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to match email format

    var formData = new FormData(document.getElementById("billManagerForm"));
    formData.append("name", $("#name").val());
    formData.append("business", $("#business_type").val());
    formData.append("town", $("#town").val());
    formData.append("phone", $("#phone").val());
    formData.append("email", $("#email").val());

    // Validation
    var errorMessages = [];
    if ($("#name").val() === "") {
        errorMessages.push("Please fill in the Name field!");
        $("#nameError").text("Please fill in the Name field!");
    } else if (!nameRegex.test($("#name").val())) {
        errorMessages.push("Please enter a valid Name!");
        $("#nameError").text("Please enter a valid Name!");
    } else {
        $("#nameError").text("");
    }

    if ($("#phone").val() === "") {
        errorMessages.push("Please fill in the Phone Number field!");
        $("#phoneError").text("Please fill in the Phone Number field!");
    } else if (!lengthRegex.test($("#phone").val())) {
        errorMessages.push("Please enter a Phone Number with 10 digits!");
        $("#phoneError").text("Please enter a Phone Number with 10 digits!");
    } else if (!formatRegex.test($("#phone").val())) {
        errorMessages.push(
            "Please enter a Phone Number starting with '07' or '01'!"
        );
        $("#phoneError").text(
            "Please enter a Phone Number starting with '07' or '01'!"
        );
    } else {
        $("#phoneError").text("");
    }

    if ($("#email").val() === "") {
        errorMessages.push("Please fill in the E-mail field!");
        $("#emailError").text("Please fill in the E-mail field!");
    } else if (!emailRegex.test($("#email").val())) {
        errorMessages.push("Please enter a valid E-mail Address!");
        $("#emailError").text("Please enter a valid E-mail Address!");
    } else {
        $("#emailError").text("");
    }

    if ($("#town").val() === "") {
        errorMessages.push("Please select a Town!");
        $("#townError").text("Please select a Town!");
    } else {
        $("#townError").text("");
    }

    if ($("#business_type").val() === "") {
        errorMessages.push("Please select a Business Type!");
        $("#businesstypeerror").text("Please select a Business Type!");
    } else {
        $("#businesstypeerror").text("");
    }

    if (errorMessages.length === 0) {
        $.ajax({
            type: "POST",
            url: apiurl + "/includes/api/savebillmanager.php",
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            success: function (msg) {
                if (msg == "inserted") {
                    jQuery("#myModal").modal("show");
                    $("#image_good").prop("disabled", true);
                    $("#billManagerForm").trigger("reset");

                }
            },
        });
    }
});




$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: apiurl + "/includes/api/getnewsroom.php",
        dataType: "json",
        success: function (data) {
            // console.log("Fetched data:", data);
            generateHTML(data);
        },
        error: function (xhr, status, error) {
            console.error("Error fetching data: " + error);
        }
    });

    function stripTags(html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    function generateHTML(apiData) {
        var articleContainer = $('#articleContainer');

        $.each(apiData, function (index, articleitem) {
            var strippedIntro = stripTags(articleitem.intro);

            var html = `
                <div class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="slider-box">
                        <div class="image-holder">
                            <img src="${articleitem.featured_image_url}" alt="${articleitem.post_title}" style="width: 100%; height: 233px; object-fit: cover;" />

                        </div>
                        <div class="card-body">
                            <h2 class="card-title">${articleitem.post_title}</h2>
                            <p>${strippedIntro}</p>
                            <a class="read-more" href="${articleitem.url}" target="_blank">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            `;

            articleContainer.append(html);
        });
    }
});



function navigateToLink() {
    const select = document.getElementById("mySelect");
    const selectedValue = select.options[select.selectedIndex].value;

    if (selectedValue !== "#") {
        const targetSection = document.querySelector(selectedValue);
        targetSection.scrollIntoView(true);
    }
}


// Cookie Policy Js

(function () {
    // HTML template for the cookie consent modal
    const modalHTML = `
        <div class="cookie_modal" id="cookieModal">
            <div class="cookie_modal_backdrop"></div>
            <div class="saf_cookie">
                <div class="saf_cookie_intro">
                    <h4 class="saf_cookie_title">Your Cookies</h4>
                    <div class="saf_cookie_excerpt">
                        We use cookies, including from our partners, to enhance and personalise your experience. Accept all cookies below, or select "Manage Cookies" to choose which cookies we can use. Reject all means you are rejecting all non-essential cookies. Please see our
                        <a href="https://www.safaricom.co.ke/cookie-policy">Cookie Policy</a> for more information.
                    </div>
                    <div class="saf_cookie_footer">
                        <div class="saf_cookie_footer_left">
                            <button class="manage_cookie" aria-label="Manage Cookies">Manage Cookies</button>
                        </div>
                        <div class="saf_cookie_footer_right">
                            <button class="reject_cookie" aria-label="Reject all cookies">Reject all cookies</button>
                            <button class="accept_cookie" aria-label="Accept all cookies">Accept all cookies</button>
                        </div>
                    </div>
                </div>
                <div class="saf_cookie_options">
                   <h3 class="saf_cookie_options_header">
                                Manage Consent Preferences
                    <div class="saf_cookie_options_header_close" aria-label="Close manage cookies" >
                    </div>
                      </h3>
                    <div class="saf_cookie_options_list">
                        <div class="saf_cookie_options_list_item">
                            <div class="saf_cookie_options_list_item_header">
                                <h4 class="saf_cookie_options_list_item_header_left">Strictly Necessary Cookies</h4>
                                <div class="saf_cookie_options_list_item_header_right">Always Active</div>
                            </div>
                            <div class="saf_cookie_options_list_item_excerpt">
                                These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
                            </div>
                        </div>
                        <div class="saf_cookie_options_list_item">
                            <div class="saf_cookie_options_list_item_header">
                                <h4 class="saf_cookie_options_list_item_header_left">Performance Cookies</h4>
                                <div class="saf_cookie_options_list_item_header_right">
                                    <label class="form-switch" for="performanceCookies" aria-label="Toggle On/Off Performance Cookies" tabindex="0">
                                        <input type="checkbox" id="performanceCookies" checked>
                                        <i></i>
                                    </label>
                                </div>
                            </div>
                            <div class="saf_cookie_options_list_item_excerpt">
                                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
                            </div>
                        </div>
                        <div class="saf_cookie_options_list_item">
                            <div class="saf_cookie_options_list_item_header">
                                <h4 class="saf_cookie_options_list_item_header_left">Targeting Cookies</h4>
                                <div class="saf_cookie_options_list_item_header_right">
                                    <label class="form-switch" for="targetingCookies" aria-label="Toggle On/Off Targeting Cookies" tabindex="0">
                                        <input type="checkbox" id="targetingCookies">
                                        <i></i>
                                    </label>
                                </div>
                            </div>
                            <div class="saf_cookie_options_list_item_excerpt">
                                These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
                            </div>
                        </div>
                        <div class="saf_cookie_options_list_item">
                            <div class="saf_cookie_options_list_item_header">
                                <h4 class="saf_cookie_options_list_item_header_left">Functional Cookies</h4>
                                <div class="saf_cookie_options_list_item_header_right">
                                    <label class="form-switch" for="functionalCookies" aria-label="Toggle On/Off Functional Cookies"  tabindex="0">
                                        <input type="checkbox" id="functionalCookies">
                                        <i></i>
                                    </label>
                                </div>
                            </div>
                            <div class="saf_cookie_options_list_item_excerpt">
                                These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
                            </div>
                        </div>
                    </div>
                    <div class="saf_cookie_options_footer">
                        <button class="accept_all_cookies" aria-label="Accept all cookies">Accept all cookies</button>
                        <button class="save_changes" aria-label="Save changes">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Function to set cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie =
            name + "=" + (value || "") + expires + "; path=/; SameSite=Strict";
    }

    // Function to get cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Function to delete cookie
    function deleteCookie(name) {
        document.cookie =
            name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
    // Function to show cookie modal
    function showCookieModal() {
        document.getElementById("cookieModal").style.display = "block";
    }

    // Function to hide cookie modal
    function hideCookieModal() {
        document.getElementById("cookieModal").style.display = "none";
    }

    // Function to manage cookies
    function manageCookiesFunction() {
        document.body.classList.add("manage_cookies_open");
    }

    function closeManageCookiesFunction() {
        console.log("closeManageCookiesFunction");
        document.body.classList.remove("manage_cookies_open");
    }

    // Function to accept all cookies
    function acceptCookiesFunction() {
        setCookie("cookieConsent", "accepted", 365);
        setCookie("performanceCookies", "true", 365);
        setCookie("targetingCookies", "true", 365);
        setCookie("functionalCookies", "true", 365);
        hideCookieModal();
        document.body.classList.add("cookies_accepted");
    }

    // Function to reject all cookies
    function rejectCookiesFunction() {
        setCookie("cookieConsent", "rejected", 365);
        setCookie("performanceCookies", "false", 365);
        setCookie("targetingCookies", "false", 365);
        setCookie("functionalCookies", "false", 365);
        hideCookieModal();
        document.body.classList.add("cookies_accepted");
    }

    // Function to save changes
    function saveChanges() {
        setCookie("cookieConsent", "accepted", 365);
        setCookie(
            "performanceCookies",
            document.getElementById("performanceCookies").checked,
            365
        );
        setCookie(
            "targetingCookies",
            document.getElementById("targetingCookies").checked,
            365
        );
        setCookie(
            "functionalCookies",
            document.getElementById("functionalCookies").checked,
            365
        );
        hideCookieModal();
        document.body.classList.add("cookies_accepted");
    }

    // Function to update UI based on cookie preferences
    function updateUI() {
        document.getElementById("performanceCookies").checked =
            getCookie("performanceCookies") === "true";
        document.getElementById("targetingCookies").checked =
            getCookie("targetingCookies") === "true";
        document.getElementById("functionalCookies").checked =
            getCookie("functionalCookies") === "true";
    }

    // Initialize cookie consent
    function initCookieConsent() {
        // Insert modal HTML into the document
        document.body.insertAdjacentHTML("beforeend", modalHTML);

        var cookieConsent = getCookie("cookieConsent");
        if (!cookieConsent) {
            showCookieModal();
        } else {
            document.body.classList.add("cookies_accepted");
        }
        updateUI();

        // Add event listeners
        document
            .querySelector(".manage_cookie")
            .addEventListener("click", manageCookiesFunction);
        document
            .querySelector(".reject_cookie")
            .addEventListener("click", rejectCookiesFunction);
        document
            .querySelector(".accept_cookie")
            .addEventListener("click", acceptCookiesFunction);
        document
            .querySelector(".accept_all_cookies")
            .addEventListener("click", acceptCookiesFunction);
        document
            .querySelector(".saf_cookie_options_header_close")
            .addEventListener("click", closeManageCookiesFunction);
        document
            .querySelector(".save_changes")
            .addEventListener("click", saveChanges);
    }

    // Run initialization when the DOM is fully loaded
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initCookieConsent);
    } else {
        initCookieConsent();
    }
})();


$(document).ready(function () {
    var mySelectCustom = document.getElementById("mySelect");

    if (mySelectCustom != null) {
        var sticky = mySelectCustom.offsetTop;

        function myFunction() {
            if (window.pageYOffset >= sticky) {
                mySelectCustom.classList.add("sticky");
                mySelectCustom.classList.add("sticky-after");
            } else {
                mySelectCustom.classList.remove("sticky");
                mySelectCustom.classList.remove("sticky-after");
            }
        }

        // Attach the event listener to the scroll event
        window.addEventListener("scroll", myFunction);
        const navigationHeight = document.querySelector('.header-area').offsetHeight;
        document.documentElement.style.setProperty('--scroll-margin', navigationHeight + 150 + "px");
    }

});

const myDots = document.querySelectorAll(".owl-theme .owl-dots").forEach(dot => dot.classList.add("container"));