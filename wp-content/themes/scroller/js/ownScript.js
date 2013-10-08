jQuery(document).ready(function () {
    "use strict";

    function i() {
        jQuery("a[rel^='prettyPhoto']").prettyPhoto({
            animationSpeed: "fast",
            slideshow: 5e3,
            theme: "pp_default",
            show_title: false,
            overlay_gallery: false,
            social_tools: false
        })
    }
    jQuery(function () {
        if (jQuery.browser.webkit) {
            jQuery(".slider_full img").css("position", "relative");
            jQuery(".slider_full img").css("top", "auto")
        }
        if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1) {
            jQuery(".section").css("background-attachment", "scroll");
            jQuery(".section").css("background-position", "50% 0px")
        }
    });
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 700) {
            jQuery("#header h1").addClass("showme");
            jQuery("#nav").addClass("nav_classic")
        } else {
            jQuery("#header h1").removeClass("showme");
            jQuery("#nav").removeClass("nav_classic")
        }
    });
    jQuery(function () {
        var e = jQuery("body").offset().top;
        var t = function () {
            var t = jQuery(window).scrollTop() > 701;
            if (t > e) {
                jQuery("#nav").addClass("nav_classic");
                jQuery("#header img").fadeIn()
            }
        };
        t();
        jQuery(window).scroll(function () {
            t()
        })
    });
    jQuery(function () {
        jQuery("#nav li:first").addClass("current")
    });
    jQuery(".scroll").onePageNav({
        begin: function () {
            console.log("start")
        },
        end: function () {
            console.log("stop")
        },
        filter: ":not(.external a)"
    });
    jQuery("ul.sub-menu,ul.children").parents().addClass("scrollparent");
    jQuery(".section").parallax("50%", .05);
    jQuery(".section_template").parallax("50%", .6);
    jQuery(window).resize(function () {
        if (jQuery(window).width() < 639) {
            jQuery("#navigation").addClass("hidenav");
            jQuery("a#navtrigger").addClass("showtrig")
        } else {
            jQuery("#navigation").removeClass("hidenav");
            jQuery("a#navtrigger").removeClass("showtrig")
        }
    });
    jQuery("a#navtrigger").click(function () {
        jQuery("#navigation").toggleClass("shownav");
        jQuery("#sec-nav").toggleClass("shownav");
        jQuery(this).toggleClass("active");
        return false
    });
    var e = 100,
        t = 500,
        n = jQuery(".stuff,#header_bottom,.section_template h2");
    jQuery(window).bind("scroll", function () {
        var r = jQuery(document).scrollTop(),
            i = 0;
        if (r <= e) {
            i = 1
        } else if (r <= t) {
            i = 1 - r / t
        }
        n.css("opacity", i)
    });
    jQuery(".item_full,.item_carousel,.item_slider").hover(function () {
        jQuery(this).find("a.hoverstuff-link,a.hoverstuff-zoom").animate({
            opacity: "1"
        }, 100)
    }, function () {
        jQuery(this).find("a.hoverstuff-link,a.hoverstuff-zoom").animate({
            opacity: "0"
        }, 400)
    });
    jQuery(".item_full,.item_carousel,.format-image").hover(function () {
        jQuery(this).find("img").animate({
            opacity: ".1"
        }, 100)
    }, function () {
        jQuery(this).find("img").animate({
            opacity: "1"
        }, 400)
    });
    jQuery("body").prepend('<div class="tooltip rad"><p></p></div>');
    var r = jQuery("div.tooltip");
    jQuery(".flickr_badge_image a img,ul.social-menu li a,.nav_item i").hover(function () {
        var e = jQuery(this);
        r.children("p").text(e.attr("title"));
        var t = Math.floor(r.outerWidth(true) / 2),
            n = Math.floor(e.outerWidth(true) / 2),
            i = e.offset().top - 30,
            s = e.offset().left - (t - n);
        r.css({
            top: i + "px",
            left: s + "px",
            display: "block"
        })
    }, function () {
        r.hide()
    });
    if (jQuery().prettyPhoto) {
        i()
    }
})