/*! blossom-spa 1.3.5 2024-03-22 9:38:19 AM */
jQuery(document).ready(function(t){var e,i;t(".site-header .main-navigation ul li.menu-item-has-children").find("> a").after('<span class="submenu-toggle"><i class="fas fa-chevron-down"></i></span>'),t(".responsive-nav .main-navigation ul li.menu-item-has-children").find("> a").after('<button class="submenu-toggle"><i class="fas fa-chevron-down"></i></button>'),t(".nav-wrap .main-navigation button.toggle-btn").on("click",function(){t(".responsive-nav").animate({width:"toggle"})}),t(".responsive-nav .main-navigation .close").on("click",function(){t(".responsive-nav").animate({width:"toggle"})}),t(".responsive-nav .main-navigation ul li button.submenu-toggle").on("click",function(){t(this).toggleClass("active"),t(this).siblings(".responsive-nav .main-navigation .sub-menu").slideToggle()}),t(".responsive-nav .header-social, .responsive-nav .header-contact").insertAfter(".responsive-nav .main-navigation .nav-menu > li:last-child"),t(".header-six .header-t .nav-right").clone().appendTo(".header-six .header-main .nav-wrap"),t(".header-seven .header-t .nav-right").clone().appendTo(".header-seven .header-main .nav-wrap"),t(".main-navigation ul li a, .main-navigation ul li button").on("focus",function(){t(this).parents("li").addClass("focused")}).on("blur",function(){t(this).parents("li").removeClass("focused")}),t(".header-search").on("click",function(){t(".search-form-wrap").slideDown()}),t(".search-form-wrap .close").on("click",function(){t(".search-form-wrap").slideUp()}),t(window).on("keyup",function(e){"Escape"==e.key&&t(".search-form-wrap").slideUp()}),e="1"==blossom_spa_data.rtl,t(".service-section.style-1 .widget_bttk_icon_text_widget").each(function(){t(this).find(".icon-holder").insertAfter(t(this).find(".widget-title"))}),t(window).on("resize load",function(){i=t(".site").width();var e=t(".site-header .container").width(),e=(parseInt(i)-parseInt(e))/2;t("body:not(.rtl) .about-section .widget_blossomtheme_featured_page_widget .widget-featured-holder.left").css("padding-right",e),t(".rtl .about-section .widget_blossomtheme_featured_page_widget .widget-featured-holder.left").css("padding-left",e),t("body:not(.rtl) .about-section .widget_blossomtheme_featured_page_widget .widget-featured-holder.right").css("padding-left",e),t(".rtl .about-section .widget_blossomtheme_featured_page_widget .widget-featured-holder.right").css("padding-right",e),t("body:not(.rtl) .contact-section .form-block").css("padding-right",e),t(".rtl .contact-section .form-block").css("padding-left",e)}),1024<t(window).width()&&(n=t(".header-seven .header-main .main-navigation .nav-menu > li").size(),n=Math.round(n/2)-1,t(".header-main .site-branding").insertAfter(t(".header-seven .header-main .main-navigation .nav-menu > li:nth("+n+")"))),t(".widget.woocommerce ul li.cat-parent").append('<span class="cat-toggle"><i class="fas fa-chevron-right"></i></span>'),t(".widget.woocommerce ul li.cat-parent .cat-toggle").on("click",function(){t(this).siblings("ul.children").stop(!0,!1,!0).slideToggle(),t(this).toggleClass("active")}),t(window).on("scroll",function(){300<t(window).scrollTop()?t(".back-to-top").addClass("show"):t(".back-to-top").removeClass("show")}),t(".back-to-top").on("click",function(){t("html, body").animate({scrollTop:0},600)}),t(".tab-content:not(.active)").hide(),t(".tab-btn-wrap .tab-btn").on("click",function(){var e=t(this).attr("class").split(" ")[0];t(".tab-btn").removeClass("active"),t(this).addClass("active"),t(".tab-content").fadeOut(),t(".tab-content").removeClass("active"),t("."+e+"-content").fadeIn().addClass("active")});var n=!(t(".team-section .grid").children(".widget").length<=4);function a(){t(window).width()<768&&t(".instagram-section .popup-gallery").removeClass("photos-10 photos-9 photos-8 photos-7 photos-6 photos-5 photos-4").addClass("photos-3")}t(".team-section .grid").owlCarousel({items:4,nav:!0,dots:!0,dotsEach:!0,autoplay:!1,loop:n,autoplayHoverPause:!0,margin:30,rtl:e,responsive:{0:{items:1},768:{items:2},1025:{items:3},1200:{items:4}}}),n=1!=t(".testimonial-section .grid").children(".widget").length,t(".testimonial-section .grid").owlCarousel({items:1,nav:!0,dots:!0,autoplay:!0,autoplayHoverPause:!0,loop:n,margin:0,rtl:e,responsive:{0:{nav:!1},768:{nav:!0}}}),t(".widget_bttk_description_widget").length&&t(".description").each(function(){new PerfectScrollbar(t(this)[0])}),t(".widget_bttk_testimonial_widget").each(function(){t(this).find(".img-holder").insertBefore(t(this).find(".testimonial-meta"))}),t(window).load(a),t(window).resize(a)});