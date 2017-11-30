(function () {
    // copied from underscorejs
    function isObject(obj) {
        let type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    }

    function updateObject(obj) {
        let sources = [].slice.call(arguments, 1);
        sources.forEach(function (source) {
            Object.getOwnPropertyNames(source).forEach(function (propName) {
                Object.defineProperty(obj, propName,
                    Object.getOwnPropertyDescriptor(source, propName));
            });
        });
        return obj;
    }

    function getURLParams() {
        let params = decodeURIComponent(window.location.search.substr(1)).split('&');
        let parsed = {};
        for (let i = 0, length = params.length; i < length; i++) {
            let el = params[i], kv = el.split('=');
            if (!kv[0])
                continue;
            if (kv.length === 1) {
                if (parsed.hasOwnProperty(el)) {
                    if (isObject(parsed[el])) {
                        parsed[el][parsed[el].length] = '';
                    } else {
                        parsed[el] = [parsed[el], ''];
                    }
                } else {
                    parsed[kv[0]] = '';
                }
            } else {
                let k = kv[0];
                let v = kv.slice(1).join('=');
                if (parsed.hasOwnProperty(k)) {
                    if (isObject(parsed[k])) {
                        parsed[k][parsed[k].length] = v;
                    } else {
                        parsed[k] = [parsed[k], v];
                    }
                } else {
                    parsed[k] = v;
                }
            }
        }
        return parsed;
    }

    window.get_params = function () {
        return updateObject(getURLParams(), {
            'offer_id': parseInt('796'),
            'safe_uid': 'b111257ce5ebbaacc2f152e90c1a2b33',
            'preland_id': parseInt('27794'),
            'slave_prefix_id': 'nl1',
            'country_code': 'vn',
            'browser_locale': 'en',
            'order_placed': parseInt('0'),
            'etag': window['__sc_int_uid'],
        });

    };
})();