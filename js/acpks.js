(function () {
    var me = this;

    function serialize(obj) {
        var str = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }

    function parseQuery(queryString) {
        if (!queryString) {
            return {}
        }

        var query = {};
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    }

    function onEtag(etag) {
        console.log(etag);

        var referer = document.referrer,
            s = document.createElement("script"),
            currentScript = document.getElementById('__acpix_7c36f3c0df0a479480fea977d3a767e7');

        var params = {
            uid: etag,
            rnd: Math.random().toString()
        };

        if (currentScript) {
            var currentSrc = currentScript.getAttribute('src');
            var query = currentSrc.split('?')[1];
            if (query) {
                var query_params = query ? parseQuery(query) : {};
                if (query_params) {
                    for (var key in query_params) {
                        params[key] = query_params[key];
                    }
                }
            }
        }

        s.type = "text/javascript";

        if (params.hasOwnProperty('success')) {
            s.src = "//actrk.me/success.js?"
        } else {
            params['referer'] = referer;
            params['u'] = window.adc_px['u'];
            params['r'] = window.adc_px['r'];

            s.src = "//actrk.me/count.js?"
        }

        s.src += serialize(params);
        document.getElementsByTagName('head')[0].appendChild(s);
        delete window.adc_px;
    }

    function addPixScript() {
        var pxScript = document.createElement("script");
        pxScript.type = 'text/javascript';
        pxScript.src = "//actrk.me/pixel.js";

        pxScript.onerror = function () {
            window.adc_px['uid'] = 'error';
            clearInterval(interval);

        };

        document.getElementsByTagName('head')[0].appendChild(pxScript);

        var interval = setInterval(function () {
            if (window.adc_px && window.adc_px['uid']) {
                clearInterval(interval);
                onEtag(window.adc_px['uid']);
            }
        }, 100);
    }

    addPixScript();
})();
