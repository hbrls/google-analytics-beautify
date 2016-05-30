(function() {
    var ec = function(a) {
        this.B = a || []
    };
    ec.prototype.set = function(a) {
        this.B[a] = !0
    };
    ec.prototype.encode = function() {
        for (var a = [], b = 0; b < this.B.length; b++) this.B[b] && (a[Math.floor(b / 6)] ^= 1 << b % 6);
        for (b = 0; b < a.length; b++) a[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b] || 0);
        return a.join("") + "~"
    };
    var Ne = new ec;

    function F(a) {
        Ne.set(a)
    }
    var bf = function(a, b) {
            var c = new ec($e(a));
            c.set(b);
            a.set(KEY$_um, c.B)
        },
        cf = function(a) {
            a = $e(a);
            a = new ec(a);
            for (var b = Ne.B.slice(), c = 0; c < a.B.length; c++) b[c] = b[c] || a.B[c];
            return (new ec(b)).encode()
        },
        $e = function(a) {
            a = a.get(KEY$_um);
            isArray(a) || (a = []);
            return a
        };
    var isFunction = function (a) {
        return "function" == typeof a;
    };
    var isArray = function (a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a));
    };
    var isString = function (a) {
        return undefined != a && -1 < (a.constructor + "").indexOf("String");
    };
    var startsWith = function(a, b) {
        return 0 == a.indexOf(b);
    };
    var trim = function (a) {
        return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
    };
    var createImg = function(a) {
        var img = document.createElement("img");
        img.width = 1;
        img.height = 1;
        img.src = a;
        return img;
    };
    var noop = function () {};
    var P = function(a) {
            if (encodeURIComponent instanceof Function) return encodeURIComponent(a);
            F(28);
            return a
        },
        Ba = function(a) {
            a = a.split("+").join(" ");
            if (decodeURIComponent instanceof Function) try {
                return decodeURIComponent(a)
            } catch (b) {
                F(18)
            }
            F(28);
            return a
        };
    var $on = function(el, event, listener, useCapture) {
        try {
            if (el.addEventListener) {
                el.addEventListener(event, listener, !!useCapture);
            } else if (el.attachEvent) {
                el.attachEvent("on" + event, listener);
            }
        } catch () {
            F(27);
        }
    };
    var g = /^[\w\-:/.?=&%!]+$/,
        Ea = function(a, b, c) {
            a && (MInfo("Loading script: %s", a), c ? (c = "", b && (g.test(b) ? c = ' id="' + b + '"' : MWarn("Dropping invalid script ID: %s", b)), g.test(a) ? I.write("<script" + c + ' src="' + a + '">\x3c/script>') : MWarn("URL uses invalid characters. Dropping request for: %s",
                a)) : (c = I.createElement("script"), c.type = "text/javascript", c.async = !0, c.src = a, b && (c.id = b), a = I.getElementsByTagName("script")[0], a.parentNode.insertBefore(c, a)))
        };
    var isHttps = function() {
        return "https:" == document.location.protocol;
    };
    var getRootDomain = function () {
        var domain = "" + document.location.hostname;
        return 0 == domain.indexOf("www.") ? domain.substring(4) : domain;
    };
    var Xb = function(a) {
            var b = I.referrer;
            if (/^https?:\/\//i.test(b)) {
                if (a) return b;
                a = "//" + I.location.hostname;
                var c = b.indexOf(a);
                if (5 == c || 6 == c)
                    if (a = b.charAt(c + a.length), "/" == a || "?" == a || "" == a || ":" == a) return;
                return b
            }
        },
        Yb = function(a, b) {
            if (1 == b.length && null != b[0] && "object" === typeof b[0]) return b[0];
            for (var c = {}, d = Math.min(a.length + 1, b.length), e = 0; e < d; e++)
                if ("object" === typeof b[e]) {
                    for (var f in b[e]) b[e].hasOwnProperty(f) && (c[f] = b[e][f]);
                    break
                } else e < a.length ? c[a[e]] = b[e] : MWarn("Unrecognized positional argument: " + b[e]);
            return c
        };
    var _contains = function(arr, target) {
        for (var i = 0; i < arr.length; i++) {
            if (target == arr[i]) {
                return true;
            }
        }

        return false;
    };
    var ef = function() {
        this.keys = [];
        this.values = {};
        this.u = {};
        this.debug = !1
    };
    ef.prototype.set = function(a, b, c) {
        this.debug && MTrace("  " + a + "=" + Fa(b) + (c ? " (temp)" : ""));
        this.keys.push(a);
        c ? this.u[":" + a] = b : this.values[":" + a] = b
    };
    ef.prototype.get = function(a) {
        return this.u.hasOwnProperty(":" + a) ? this.u[":" + a] : this.values[":" + a]
    };
    ef.prototype.map = function(a) {
        for (var b = 0; b < this.keys.length; b++) {
            var c = this.keys[b],
                d = this.get(c);
            d && a(c, d)
        }
    };
    var Rd = [{
            V: "pa",
            W: "ec:action"
        }, {
            V: "ti",
            W: "ec:id"
        }, {
            V: "ta",
            W: "ec:affiliation"
        }, {
            V: "tr",
            W: "ec:revenue"
        }, {
            V: "tt",
            W: "ec:tax"
        }, {
            V: "ts",
            W: "ec:shipping"
        }, {
            V: "tcc",
            W: "ec:coupon"
        }, {
            V: "cos",
            W: "ec:step"
        }, {
            V: "col",
            W: "ec:label"
        }, {
            V: "pal",
            W: "ec:product action list"
        }, {
            V: "promoa",
            W: "ec:promo action"
        }, {
            V: /^pr(\d+)id$/,
            W: "ec:product %s id"
        }, {
            V: /^pr(\d+)nm$/,
            W: "ec:product %s name"
        }, {
            V: /^pr(\d+)br$/,
            W: "ec:product %s brand"
        }, {
            V: /^pr(\d+)ca$/,
            W: "ec:product %s category"
        }, {
            V: /^pr(\d+)va$/,
            W: "ec:product %s variant"
        }, {
            V: /^pr(\d+)ps$/,
            W: "ec:product %s position"
        }, {
            V: /^pr(\d+)pr$/,
            W: "ec:product %s price"
        }, {
            V: /^pr(\d+)qt$/,
            W: "ec:product %s quantity"
        }, {
            V: /^pr(\d+)cc$/,
            W: "ec:product %s coupon"
        }, {
            V: /^pr(\d+)cd(\d+)$/,
            W: "ec:product %s dimension %s"
        }, {
            V: /^pr(\d+)cm(\d+)$/,
            W: "ec:product %s metric %s"
        }, {
            V: /^promo(\d+)id$/,
            W: "ec:promo %s id"
        }, {
            V: /^promo(\d+)nm$/,
            W: "ec:promo %s name"
        }, {
            V: /^promo(\d+)cr$/,
            W: "ec:promo %s creative"
        }, {
            V: /^promo(\d+)ps$/,
            W: "ec:promo %s position"
        }, {
            V: /^il(\d+)nm$/,
            W: "ec:impression list %s name"
        }, {
            V: /^il(\d+)ls$/,
            W: "ec:impression list %s source"
        }, {
            V: /^il(\d+)pi(\d+)id$/,
            W: "ec:impression list %s product %s id"
        }, {
            V: /^il(\d+)pi(\d+)nm$/,
            W: "ec:impression list %s product %s name"
        }, {
            V: /^il(\d+)pi(\d+)br$/,
            W: "ec:impression list %s product %s brand"
        }, {
            V: /^il(\d+)pi(\d+)ca$/,
            W: "ec:impression list %s product %s category"
        }, {
            V: /^il(\d+)pi(\d+)va$/,
            W: "ec:impression list %s product %s variant"
        }, {
            V: /^il(\d+)pi(\d+)ps$/,
            W: "ec:impression list %s product %s position"
        }, {
            V: /^il(\d+)pi(\d+)pr$/,
            W: "ec:impression list %s product %s price"
        }, {
            V: /^il(\d+)pi(\d+)cd(\d+)$/,
            W: "ec:impression list %s product %s dimension %s"
        }, {
            V: /^il(\d+)pi(\d+)cm(\d+)$/,
            W: "ec:impression list %s product %s metric %s"
        }, {
            V: "linkid",
            W: "linkid:linkId"
        }, {
            V: "ic",
            W: "ec:item code"
        }, {
            V: "in",
            W: "ec:item name"
        }, {
            V: "iv",
            W: "ec:item variation"
        }, {
            V: "ip",
            W: "ec:item price"
        }, {
            V: "iq",
            W: "ec:item quantity"
        }, {
            V: "cu",
            W: "ec:item currency"
        }],
        Sd = function(a) {
            "&" == a.charAt(0) && (a = a.substring(1));
            for (var b = 0; b < Rd.length; b++) {
                var c = Rd[b].V,
                    d = Rd[b].W;
                if (isString(c)) {
                    if (c == a) return d
                } else if (c = a.match(c)) return c[0] =
                    d, Ha.apply(void 0, c)
            }
            return ""
        };

    function MLog(...args) {
        args.unshift("log");
        M.log.apply(M, args);
    }

    function MInfo(...args) {
        args.unshift("info");
        M.log.apply(M, args)
    }

    function MWarn(...args) {
        args.unshift("warn");
        M.log.apply(M, args)
    }

    function MError(...args) {
        args.unshift("error");
        M.log.apply(M, args)
    }

    function MTrace(...args) {
        if (window.ga_debug && window.ga_debug.trace) {
            args.unshift("log");
            M.log.apply(M, args);
        }
    }

    function MGroup(...args) {
        args.unshift("group");
        M.log.apply(M, args)
    }

    function MGroupEnd() {
        M.log.apply(M, ["groupEnd"])
    }
    var M = new function() {
        var console = window.console;
        var b = console && "Firebug Lite" == console.provider;
        this.log = function(level, ...args) {
            if (console) {
                var f = Ha.apply(window, args);
                if (b) {
                    for (var f = f.split("\n"), ea = 0; ea < f.length; ea++) {
                        console[level](f[ea]);
                    }
                } else if (console[level]) {
                    console[level](f);
                } else if ("group" == c) {
                    console.log(f);
                }
            }
        }
    };

    function Ia(query) {
        MInfo("\nSent beacon:\n" + query + "\n\n");
        var b = [];
        var params = query.split("&");
        for (var i = 0; i < params.length; i++) {
            var [e, d] = params[i].split("=");
            if ("_" != e.charAt(0)) {
                var f = kd(e);
                f && 0 == f.indexOf("&") && (f = Sd(f) || f);
                f && ("&" + e == f && (f = "<unknown>"), b.push([f, "(&" + e + ")", Ba(d)]))
            }
        }
        b.sort();
        Xd(b);
    }

    function Xd(a) {
        var b = []
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a[i].length - 1; j++) {
                if (a[i][j]) {
                    b[j] = b[j] || 0;
                    b[j] = a[i][j].length > b[j] ? a[i][j].length : b[j];
                }
            }
        }

        var e = [];
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a[i].length; j++) {
                var f = he(0) + a[i][j];
                e.push(f + he((b[j] || 0) - f.length));
            }
            MInfo(e.join(" "));
        }
    }

    function Ja(a) {
        var b = [];
        Ka.map(function(c, d) {
            var ea = a.get(c);
            void 0 != ea && "_" != c[0] && b.push(c + (d.i ? " (" + d.i + ")" : "") + " = " + Fa(ea))
        });
        for (var c = b.sort(), d = 0; d < c.length; d++) MInfo("  " + c[d])
    }

    function Td(a) {
        for (var key in a) {
            if (a.hasOwnProperty(key)) {
                if (!_contains(ac, key)) {
                    if (yc(key)) {
                        MWarn('This field cannot be set in a create method. Please use ga("set", %s, %s);', key, a[key]);
                    } else {
                        MWarn("Create config had an unknown parameter: %s", key);
                    }
                    La(key, a[key]);
                }
            }
        }
    }

    function Fa(a, b) {
        var c = b || 0;
        if (void 0 == a) return "" + a;
        if (isString(a)) return '"' + a + '"';
        if (isFunction(a)) return "[function]";
        if (isArray(a)) {
            if (3 < b) return "[...]";
            for (var d = [], e = 0; e < a.length; e++) d.push(Fa(a[e], c + 1));
            return "[" + d.join(", ") + "]"
        }
        if (a.constructor == Object) {
            if (3 < b) return "{...}";
            d = [];
            for (e in a) d.push(e + ": " + Fa(a[e], c + 1));
            return "{" + d.join(", ") + "}"
        }
        return "" + a
    }

    function Ha(a, b) {
        if (!isString(a)) return "";
        for (var c = a.split("%s"), d = 1; d < arguments.length; d++) c.splice(2 * d - 1, 0, Fa(arguments[d]));
        return c.join("")
    }

    function he(a) {
        return 0 < a ? Array(a + 1).join(" ") : ""
    }

    function La(a, b) {
        if (void 0 == b) switch (a) {
            case KEY$trackingId:
            case KEY$hitType:
            case KEY$apiVersion:
                MWarn("Expected a value for required field: %s", a)
        } else {
            switch (a) {
                case KEY$hitType:
                case KEY$hitPayload:
                case KEY$screenName:
                case KEY$location:
                case KEY$referrer:
                case KEY$page:
                case KEY$hostname:
                case KEY$language:
                case KEY$encoding:
                case KEY$title:
                case KEY$screenColors:
                case KEY$screenResolution:
                case KEY$viewportSize:
                case KEY$flashVersion:
                case KEY$clientId:
                case KEY$campaignId:
                case KEY$campaignName:
                case KEY$campaignSource:
                case KEY$campaignMedium:
                case KEY$campaignKeyword:
                case KEY$campaignContent:
                case KEY$eventCategory:
                case KEY$eventAction:
                case KEY$eventLabel:
                case KEY$socialNetwork:
                case KEY$socialAction:
                case KEY$socialTarget:
                case KEY$timingCategory:
                case KEY$timingVar:
                case KEY$timingLabel:
                case KEY$appName:
                case KEY$appVersion:
                case KEY$appId:
                case KEY$appInstallerId:
                case KEY$exDescription:
                case KEY$cookieName:
                case KEY$cookieDomain:
                case KEY$cookiePath:
                case KEY$legacyCookieDomain:
                case KEY$storage:
                case KEY$currencyCode:
                    isString(b) || MWarn("Expected a string value for field: %s. but found: %s.", a, typeof b);
                    break;
                case KEY$adSenseId:
                case KEY$queueTime:
                case KEY$eventValue:
                case KEY$timingValue:
                case KEY$cookieExpires:
                case KEY$sampleRate:
                case KEY$siteSpeedSampleRate:
                    !isNaN(parseFloat(b)) && isFinite(b) || MWarn("Expected a number value for the field: %s. but found: %s.", a, typeof b);
                    break;
                case KEY$anonymizeIp:
                case KEY$nonInteraction:
                case KEY$sessionControl:
                case KEY$javaEnabled:
                case KEY$exFatal:
                case KEY$forceSSL:
                case KEY$allowLinker:
                case KEY$allowAnchor:
                case KEY$alwaysSendReferrer:
                    !0 !== b && !1 !== b && 1 !== b && 0 !== b && MWarn("Expected a boolean value for the field: %s. but found: %s.", a, typeof b);
                    break;
                case KEY$hitCallback:
                case KEY$_oot:
                case KEY$checkProtocolTask:
                case KEY$checkStorageTask:
                case KEY$samplerTask:
                case KEY$_rlt:
                case KEY$buildHitTask:
                case KEY$sendHitTask:
                    isFunction(b) || MWarn("Expected a function for the field value: %s. but found: %s.", a, typeof b);
                    break;
                case KEY$name:
                    /^[a-zA-Z0-9_]+$/.test(b) || MError("Tracker name should only consist of alphanumeric characters.");
                    break;
                case KEY$trackingId:
                    va.test(b) || MWarn("The tracking Id should only be of the format UA-NNNNNN-N.")
            }!/^contentGroup[0-9]+$/.test(a) && !/^dimension[0-9]+$/.test(a) || isString(b) || MWarn("Expected a string value for field: %s. but found: %s.", a, typeof b);
            !/^metric[0-9]+$/.test(a) || !isNaN(parseFloat(b)) && isFinite(b) || MWarn("Expected a number value for field: %s. but found: %s.", a, typeof b)
        }
    }

    function Ec(a) {
        function b(b) {
            isString(a.get(b)) || MError("Missing required field '%s' for hit of type '%s'", b, c)
        }
        var c = getString(a, KEY$hitType);
        switch (c) {
            case "pageview":
                b(KEY$location);
                break;
            case "event":
                b(KEY$eventCategory);
                b(KEY$eventAction);
                break;
            case "social":
                b(KEY$socialNetwork);
                b(KEY$socialAction);
                b(KEY$socialTarget);
                break;
            case "exception":
                b(KEY$exDescription);
                break;
            case "timing":
                if (a.get(KEY$l1)) break;
                b(KEY$timingCategory);
                b(KEY$timingVar);
                break;
            case "appview":
                b(KEY$appName)
        }
    }

    function od(a, b) {
        MInfo("\nSent beacon:\n" + b + "\n\n");
        var c = [];
        a.map(function(a, b) {
            if ("_" != a.charAt(0)) {
                var f = [],
                    ea = kd(a);
                ea && (f.push(ea), f.push("(&" + a + ")"), f.push(b), c.push(f))
            }
        });
        Xd(c)
    }
    var tc = ["__utma", "__utmb", "__utmz", "__utmv"];

    function Dc(a, b) {
        for (var c = "", d = b.split(".")[0], e = fd(), f = 0; f < e.length; f++) {
            if (d == ic(e[f])) {
                c = e[f];
                break
            }
            if (d == ic("." + e[f])) {
                c = e[f];
                break
            }
        }
        return [a, c, "/", b]
    };
    var Q = window,
        I = document;
    var ld = function(a) {
        var b = Q._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === Q["ga-disable-" + a]) return !0;
        try {
            var c = Q.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
        } catch (d) {}
        return !1
    };
    var Md = function(key) {
            var b = [],
                c = I.cookie.split(";");
            var REG = new RegExp("^\\s*" + key + "=\\s*(.*?)\\s*$");
            for (var d = 0; d < c.length; d++) {
                var e = c[d].match(REG);
                e && b.push(e[1])
            }
            return b
        },
        pe = function(a, b, c, d, e, f) {
            ld(e) ? (MInfo("Aborting cookie write: User has opted out of tracking."), e = !1) : Wd.test(I.location.hostname) || "/" == c && fe.test(d) ? (MInfo("Aborting cookie write: Prohibited domain."), e = !1) : e = !0;
            if (!e) return !1;
            b && 1200 < b.length && (b = b.substring(0, 1200), F(24));
            c = a + "=" + b + "; path=" + c + "; ";
            f && (c += "expires=" + (new Date((new Date).getTime() +
                f)).toGMTString() + "; ");
            d && "none" != d && (c += "domain=" + d + ";");
            d = I.cookie;
            I.cookie = c;
            return d != I.cookie || _contains(Md(a), b)
        },
        Ae = function(a) {
            return P(a).replace(/\(/g, "%28").replace(/\)/g, "%29")
        },
        fe = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Wd = /(^|\.)doubleclick\.net$/i;
    var hd = function() {
        return (forceSSL || isHttps() ? "https:" : "http:") + "//www.google-analytics.com"
    };
    var PayloadTooLargeException = function (dataLength) {
        this.name = "len";
        this.message = dataLength + "-8192";
    };
    var send = function(url, data, callback) {
        callback = callback || noop;
        if (2036 >= data.length) {
            sendImage(url, data, callback);
            Ia(data);
        } else if (8192 >= data.length) {
            if (!sendBeacon(url, data, callback)) {
                if (!sendXHR(url, data, callback)) {
                    sendImage(url, data, callback);
                    Ia(data);
                }
            }
        } else {
            MError("Payload size is too large (%s).  Max allowed is %s.", data.length, 8192);
            sendError("len", data.length);
            throw new PayloadTooLargeException(data.length);
        }
    };
    var sendImage = function(url, data, callback) {
        var img = createImg(url + "?" + data);
        img.onload = img.onerror = function () {
            img.onload = null;
            img.onerror = null;
            callback();
        };
    };
    var sendXHR = function(url, data, callback) {
        if (!window.XMLHttpRequest)  {
            return false;
        }

        var xhr = new window.XMLHttpRequest();
        if (!("withCredentials" in xhr)) {
            return false
        };

        xhr.open("POST", url, true);
        xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "text/plain");
        xhr.onreadystatechange = function () {
            if (4 == xhr.readyState) {
                callback();
                xhr = null;
            }
        };
        xhr.send(data);
        return true;
    };
    var sendBeacon = function(url, data, callback) {
        // ** It's useless at this moment. 2016.May.23.
        //    http://caniuse.com/#feat=beacon
        if (Q.navigator.sendBeacon) {
            if (Q.navigator.sendBeacon(url, data)) {
                callback();
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };
    var sendError = function(type, method, message, account) {
        MError("Error: type=%s method=%s message=%s account=%s", [type, method, message, account]);
        // ** It seems like a 1% sampling
        if (!(1 <= 100 * Math.random() || ld("?"))) {
            var d = ["t=error", "_e=" + type, "_v=j43d", "sr=1"];
            if (method) {
                d.push("_f=" + method);
            }
            if (message) {
                d.push("_m=" + P(message.substring(0, 100)));
            }
            d.push("aip=1");
            d.push("z=" + random());
            sendImage(hd() + "/collect", d.join("&"), noop)
        }
    };
    /**
     * @param gaId [String], e.g. "UA-xxxxxxx-xx"
     */
    var getDataByGAId = function(gaId) {
        window.gaData = window.gaData || {};
        window.gaData[gaId] = window.gaData[gaId] || {};
        return window.gaData[gaId];
    };
    var TrackerFilters = function() {
        this.m = []
    };
    TrackerFilters.prototype.add = function(a) {
        this.m.push(a)
    };
    TrackerFilters.prototype.H = function(a) {
        MVerbose("\nExecuting " + this.m.length + " filters:");
        try {
            for (var i = 0; i < this.m.length; i++) {
                MTrace("  filter[" + i + "]: " + this.m[i]);
                var c = a.get(this.m[i]);
                if (c && isFunction(c)) {
                    c.call(window, a);
                } else {
                    MTrace("  Skipping (no function found.)");
                }
            }
        } catch (error) {
            MTrace("Aborted execution due to exception: " + error);
        }

        var b = a.get(KEY$hitCallback);
        if (b != noop && isFunction(b)) {
            MTrace("Manually firing callback");
            a.set(KEY$hitCallback, noop, true);
            setTimeout(b, 10);
        }
    };

    function hc(a) {
        if (100 != a.get(KEY$sampleRate) && ic(getString(a, KEY$clientId)) % 1E4 >= 100 * jc(a, KEY$sampleRate)) throw MInfo("User has been sampled out. Aborting hit."), "abort";
    }

    function kc(a) {
        if (ld(getString(a, KEY$trackingId))) throw MInfo("User has opted out of tracking. Aborting hit."), "abort";
    }

    function lc() {
        var a = I.location.protocol;
        if ("http:" != a && "https:" != a) throw MInfo("Unallowed document protocol. Aborting hit."), "abort";
    }

    function mc(a) {
        try {
            Q.navigator.sendBeacon ? F(42) : Q.XMLHttpRequest && "withCredentials" in new Q.XMLHttpRequest && F(40)
        } catch (c) {}
        a.set(KEY$usage, cf(a), !0);
        a.set(KEY$_s, jc(a, KEY$_s) + 1);
        var b = [];
        Ka.map(function(c, d) {
            if (d.i) {
                var e = a.get(c);
                void 0 != e && e != d.defaultValue && ("boolean" == typeof e && (e *= 1), b.push(d.i + "=" + P("" + e)))
            }
        });
        b.push("z=" + getRandom());
        a.set(KEY$hitPayload, b.join("&"), !0)
    }

    function pc(a) {
        var b = getString(a, KEY$transportUrl) || hd() + "/collect",
            c = getString(a, KEY$transport);
        !c && a.get(KEY$useBeacon) && (c = "beacon");
        if (c) {
            var d = getString(a, KEY$hitPayload),
                e = a.get(KEY$hitCallback);
            8192 < d.length && MError("Payload size is too large (%s).  Max allowed is %s.", d.length, 8192);
            e = e || noop;
            MInfo("Sending hit with transport method %s", c);
            "image" == c ? (sendImage(b, d, e), Ia(d)) : "xhr" == c && sendXHR(b, d, e) ? Ia(d) : "beacon" == c && sendBeacon(b, d, e) ? Ia(d) : (MInfo("Transport Method, %s, is not supported, falling back to default method.", c), send(b, d, e))
        } else send(b, getString(a, KEY$hitPayload), a.get(KEY$hitCallback));
        b = a.get(KEY$trackingId);
        b = getDataByGAId(b);
        c = b.hitcount;
        b.hitcount = c ? c + 1 : 1;
        b = a.get(KEY$trackingId);
        delete getDataByGAId(b).pending_experiments;
        a.set(KEY$hitCallback, noop, !0)
    }

    function td(a) {
        (Q.gaData = Q.gaData || {}).expId && a.set(KEY$expId, (Q.gaData = Q.gaData || {}).expId);
        (Q.gaData = Q.gaData || {}).expVar && a.set(KEY$expVar, (Q.gaData = Q.gaData || {}).expVar);
        var b;
        var c = a.get(KEY$trackingId);
        if (c = getDataByGAId(c).pending_experiments) {
            var d = [];
            for (b in c) c.hasOwnProperty(b) && c[b] && d.push(encodeURIComponent(b) + "." + encodeURIComponent(c[b]));
            b = d.join("!")
        } else b = void 0;
        b && a.set(KEY$exp, b, !0)
    }

    function nc(a) {
        Ec(a)
    }

    function Ud() {
        if (Q.navigator && "preview" == Q.navigator.loadPurpose) throw MInfo("Navigator in preview mode. Aborting hit."), "abort";
    }

    function ve(a) {
        var b = Q.gaDevIds;
        isArray(b) && 0 != b.length && a.set("&did", b.join(","), !0)
    }

    function validationTask(a) {
        if (!a.get(KEY$trackingId)) {
            MError("Tracking ID not set. Aborting hit.");
            throw "abort";
        }
    };
    var random = function () {
        return Math.round(2147483647 * Math.random());
    };
    var getRandom = function () {
        try {
            var a = new Uint32Array(1);
            window.crypto.getRandomValues(a);
            return a[0] & 2147483647;
        } catch () {
            return random();
        }
    };

    function qc(a) {
        var b = jc(a, KEY$_hc);
        500 <= b && (F(15), MInfo("Exceeded maximum number of hits for this page. Try reducing the number of hits being sent."));
        var c = getString(a, KEY$hitType);
        if ("transaction" != c && "item" != c) {
            var c = jc(a, KEY$_to),
                d = (new Date).getTime(),
                e = jc(a, KEY$_ti);
            0 == e && a.set(KEY$_ti, d);
            e = Math.round(2 * (d - e) / 1E3);
            0 < e && (c = Math.min(c + e, 20), a.set(KEY$_ti, d));
            if (0 >= c) throw MInfo("Exceeded rate limit for sending hits. Aborting hit."), "abort";
            a.set(KEY$_to, --c)
        }
        a.set(KEY$_hc, ++b)
    };
    var TrackerStore = function() {
        this.data = new ef;
        this.data.debug = true;
    };
    var Ka = new ef,
        xc = [];
    TrackerStore.prototype.get = function(a) {
        var b = yc(a);
        var c = this.data.get(a);

        if (b && undefined == c) {
            if (isFunction(b.defaultValue)) {
                c = b.defaultValue();
            } else {
                c = b.defaultValue;
            }
        }

        if (b && b.v) {
            return b.v(this, a, c);
        } else {
            return c;
        }
    };
    var getString = function(store, key) {
        var value = store.get(key);
        if (undefined == value) {
            return "";
        } else {
            return "" + value;
        }
    };
    var jc = function(a, b) {
            var c = a.get(b);
            return void 0 == c || "" === c ? 0 : 1 * c
        };
    TrackerStore.prototype.set = function(a, b, c) {
        if (a) {
            if ("object" == typeof a) {
                for (var k in a) {
                    if (a.hasOwnProperty(k)) {
                        zc(this, k, a[k], c);
                    }
                }
            } else {
                zc(this, a, b, c);
            }
        }
    };
    var zc = function(a, b, c, d) {
        La(b, c);
        var e = yc(b);
        e && e.w ? e.w(a, b, c, d) : a.data.set(b, c, d);
        e || MInfo("Set called on unknown field: %s.", b)
    };
    var Ac = function(name, shortName, defaultValue, d, e) {
            this.name = name;
            this.i = shortName;
            this.defaultValue = defaultValue;
            this.v = d;
            this.w = e;
        };
    var yc = function (key) {
        var b = Ka.get(key);
        if (!b)
            for (var c = 0; c < xc.length; c++) {
                var d = xc[c];
                var e = d[0].exec(key);
                if (e) {
                    MTrace("Generating new model field for name: " + key);
                    b = d[1](e);
                    Ka.set(b.name, b);
                    break;
                }
            }
        return b;
    };
    var kd = function(a) {
            var b;
            Ka.map(function(c, d) {
                d.i == a && (b = d)
            });
            return b && b.name
        },
        W = function(name, shortName, c, d, e) {
            var aa = new Ac(name, shortName, c, d, e);
            Ka.set(aa.name, aa);
            return aa.name;
        },
        Bc = function(a, b) {
            xc.push([new RegExp("^" + a + "$"), b])
        },
        X = function(name, shortName, c) {
            return W(name, shortName, c, undefined, Cc)
        },
        Cc = function(a, b) {
            MError("Ignored attempt to update read-only property: " + b)
        };
    var libName = isString(window.GoogleAnalyticsObject) && trim(window.GoogleAnalyticsObject) || "ga";
    var forceSSL = !1;
    var KEY$apiVersion = X("apiVersion", "v");
    var KEY$clientVersion = X("clientVersion", "_v");
    var KEY$anonymizeIp = W("anonymizeIp", "aip");
    var KEY$adSenseId = W("adSenseId", "a");
    var KEY$hitType = W("hitType", "t");
    var KEY$hitCallback = W("hitCallback");
    var KEY$hitPayload = W("hitPayload");
    var KEY$nonInteraction = W("nonInteraction", "ni");
    var KEY$currencyCode = W("currencyCode", "cu");
    var KEY$dataSource = W("dataSource", "ds"); // ** not used
    var KEY$useBeacon = W("useBeacon", undefined, false);
    var KEY$transport = W("transport");
    var KEY$sessionControl = W("sessionControl", "sc", "");
    var KEY$sessionGroup = W("sessionGroup", "sg"); // ** not used
    var KEY$queueTime = W("queueTime", "qt");
    var KEY$_s = W("_s", "_s");
    var KEY$screenName = W("screenName", "cd");
    var KEY$location = W("location", "dl", "");
    var KEY$referrer = W("referrer", "dr");
    var KEY$page = W("page", "dp", "");
    var KEY$hostname = W("hostname", "dh");
    var KEY$language = W("language", "ul");
    var KEY$encoding = W("encoding", "de");
    var KEY$title = W("title", "dt", () => document.title || undefined);
    Bc("contentGroup([0-9]+)", function(a) {
        return new Ac(a[0], "cg" + a[1])
    });
    var KEY$screenColors = W("screenColors", "sd");
    var KEY$screenResolution = W("screenResolution", "sr");
    var KEY$viewportSize = W("viewportSize", "vp");
    var KEY$javaEnabled = W("javaEnabled", "je");
    var KEY$flashVersion = W("flashVersion", "fl");
    var KEY$campaignId = W("campaignId", "ci");
    var KEY$campaignName = W("campaignName", "cn");
    var KEY$campaignSource = W("campaignSource", "cs");
    var KEY$campaignMedium = W("campaignMedium", "cm");
    var KEY$campaignKeyword = W("campaignKeyword", "ck");
    var KEY$campaignContent = W("campaignContent", "cc");
    var KEY$eventCategory = W("eventCategory", "ec");
    var KEY$eventAction = W("eventAction", "ea");
    var KEY$eventLabel = W("eventLabel", "el");
    var KEY$eventValue = W("eventValue", "ev");
    var KEY$socialNetwork = W("socialNetwork", "sn");
    var KEY$socialAction = W("socialAction", "sa");
    var KEY$socialTarget = W("socialTarget", "st");
    var KEY$l1 = W("l1", "plt");
    var KEY$l2 = W("l2", "pdt");
    var KEY$l3 = W("l3", "dns");
    var KEY$l4 = W("l4", "rrt");
    var KEY$l5 = W("l5", "srt");
    var KEY$l6 = W("l6", "tcp");
    var KEY$l7 = W("l7", "dit");
    var KEY$l8 = W("l8", "clt");
    var KEY$timingCategory = W("timingCategory", "utc");
    var KEY$timingVar = W("timingVar", "utv");
    var KEY$timingLabel = W("timingLabel", "utl");
    var KEY$timingValue = W("timingValue", "utt");
    var KEY$appName = W("appName", "an");
    var KEY$appVersion = W("appVersion", "av", "");
    var KEY$appId = W("appId", "aid", "");
    var KEY$appInstallerId = W("appInstallerId", "aiid", "");
    var KEY$exDescription = W("exDescription", "exd");
    var KEY$exFatal = W("exFatal", "exf");
    var KEY$expId = W("expId", "xid");
    var KEY$expVar = W("expVar", "xvar");
    var KEY$exp = W("exp", "exp");
    var KEY$_utma = W("_utma", "_utma");
    var KEY$_utmz = W("_utmz", "_utmz");
    var KEY$_utmht = W("_utmht", "_utmht");
    var KEY$_hc = W("_hc", undefined, 0);
    var KEY$_ti = W("_ti", undefined, 0);
    var KEY$_to = W("_to", undefined, 20);
    Bc("dimension([0-9]+)", function(a) {
        return new Ac(a[0], "cd" + a[1])
    });
    Bc("metric([0-9]+)", function(a) {
        return new Ac(a[0], "cm" + a[1])
    });
    var KEY$linkerParam = W("linkerParam", undefined, undefined, nd, Cc); // ** not used
    var KEY$usage = W("usage", "_u");
    var KEY$_um = W("_um");
    var KEY$forceSSL = W("forceSSL", undefined, undefined, function () {
        return forceSSL
    }, function(a, b, c) {
        F(34);
        forceSSL = !!c
    }); // ** not used
    var KEY$_j1 = W("_j1", "jid");
    Bc("\\&(.*)", function(a) {
        var b = new Ac(a[0], a[1]),
            c = kd(a[0].substring(1));
        c && (MTrace("Alias created: " + a[0] + " -> " + c), b.v = function(a) {
            return a.get(c)
        }, b.w = function(a, b, f, ea) {
            a.set(c, f, ea)
        }, b.i = undefined);
        return b
    });
    var KEY$_oot = X("_oot");
    var KEY$previewTask = W("previewTask");
    var KEY$checkProtocolTask = W("checkProtocolTask");
    var KEY$validationTask = W("validationTask");
    var KEY$checkStorageTask = W("checkStorageTask");
    var KEY$historyImportTask = W("historyImportTask");
    var KEY$samplerTask = W("samplerTask");
    var KEY$_rlt = W("_rlt");
    var KEY$buildHitTask = W("buildHitTask");
    var KEY$sendHitTask = W("sendHitTask");
    var KEY$ceTask = W("ceTask");
    var KEY$devIdTask = W("devIdTask");
    var KEY$timingTask = W("timingTask");
    var KEY$displayFeaturesTask = W("displayFeaturesTask");
    var KEY$name = X("name");
    var KEY$clientId = X("clientId", "cid");
    var KEY$clientIdTime = X("clientIdTime");
    var KEY$userId = W("userId", "uid");
    var KEY$trackingId = X("trackingId", "tid");
    var KEY$cookieName = X("cookieName", undefined, "_ga");
    var KEY$cookieDomain = X("cookieDomain");
    var KEY$cookiePath = X("cookiePath", undefined, "/");
    var KEY$cookieExpires = X("cookieExpires", undefined, 63072E3);
    var KEY$legacyCookieDomain = X("legacyCookieDomain");
    var KEY$legacyHistoryImport = X("legacyHistoryImport", undefined, true);
    var KEY$storage = X("storage", undefined, "cookie");
    var KEY$allowLinker = X("allowLinker", undefined, false);
    var KEY$allowAnchor = X("allowAnchor", undefined, true);
    var KEY$sampleRate = X("sampleRate", "sf", 100);
    var KEY$siteSpeedSampleRate = X("siteSpeedSampleRate", undefined, 1);
    var KEY$alwaysSendReferrer = X("alwaysSendReferrer", undefined, false);
    var ac = [KEY$name, KEY$trackingId, KEY$clientId, KEY$clientIdTime, KEY$userId, KEY$cookieName, KEY$cookieDomain, KEY$cookiePath, KEY$cookieExpires, KEY$legacyCookieDomain, KEY$legacyHistoryImport, KEY$allowLinker, KEY$allowAnchor, KEY$sampleRate, KEY$siteSpeedSampleRate, KEY$alwaysSendReferrer, KEY$storage];
    var KEY$transportUrl = W("transportUrl");
    var KEY$_r = W("_r", "_r");

    function extend(method, target, func, num) {
        target[method] = function () {
            try {
                if (num) {
                    F(num);
                }
                return func.apply(this, arguments);
            } catch (error) {
                sendError("exc", method, error && error.name)
                throw error;
            }
        }
    };
    var luckySSL = function () {
        return 0 == getRandom() % 10000;
    };

    function Qc() {
        var a, b, c;
        if ((c = (c = Q.navigator) ? c.plugins : null) && c.length)
            for (var d = 0; d < c.length && !b; d++) {
                var e = c[d]; - 1 < e.name.indexOf("Shockwave Flash") && (b = e.description)
            }
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = a.GetVariable("$version")
        } catch (f) {}
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = "WIN 6,0,21,0", a.AllowScriptAccess = "always", b = a.GetVariable("$version")
        } catch (f) {}
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = a.GetVariable("$version")
        } catch (f) {}
        b &&
            (a = b.match(/[\d]+/g)) && 3 <= a.length && (b = a[0] + "." + a[1] + " r" + a[2]);
        return b || void 0
    };
    var Sc = function(a, b) {
            var c = Math.min(jc(a, KEY$siteSpeedSampleRate), 100);
            if (ic(getString(a, KEY$clientId)) % 100 >= c) MTrace("Site speed data not sent - visitor sampled out");
            else if (c = {}, qd(c) || rd(c)) {
                var d = c[KEY$l1];
                void 0 == d || Infinity == d || isNaN(d) ? MTrace("Site speed data not sent - unsupported browser") : 0 < d ? (Rc(c, KEY$l3), Rc(c, KEY$l6), Rc(c, KEY$l5), Rc(c, KEY$l2), Rc(c, KEY$l4), Rc(c, KEY$l7), Rc(c, KEY$l8), b(c)) : (MTrace("Site speed data not available - waiting for onload"), $on(Q, "load", function() {
                    Sc(a, b)
                }, !1))
            } else MTrace("Site speed data not sent - unsupported browser")
        },
        qd = function(a) {
            var b = Q.performance ||
                Q.webkitPerformance,
                b = b && b.timing;
            if (!b) return !1;
            var c = b.navigationStart;
            if (0 == c) return !1;
            a[KEY$l1] = b.loadEventStart - c;
            a[KEY$l3] = b.domainLookupEnd - b.domainLookupStart;
            a[KEY$l6] = b.connectEnd - b.connectStart;
            a[KEY$l5] = b.responseStart - b.requestStart;
            a[KEY$l2] = b.responseEnd - b.responseStart;
            a[KEY$l4] = b.fetchStart - c;
            a[KEY$l7] = b.domInteractive - c;
            a[KEY$l8] = b.domContentLoadedEventStart - c;
            return !0
        },
        rd = function(a) {
            if (Q.top != Q) return !1;
            var b = Q.external,
                c = b && b.onloadT;
            b && !b.isValidLoadTime && (c = void 0);
            2147483648 < c && (c = void 0);
            0 < c && b.setPageReadyTime();
            if (void 0 == c) return !1;
            a[KEY$l1] = c;
            return !0
        },
        Rc = function(a, b) {
            var c = a[b];
            if (isNaN(c) || Infinity == c || 0 > c) a[b] = void 0
        },
        ze = function(a) {
            return function(b) {
                "pageview" != b.get(KEY$hitType) || a.L || (a.L = !0, Sc(b, function(b) {
                    a.send("timing", b)
                }))
            }
        };
    var Tc = !1,
        Yc = function(a) {
            if ("cookie" == getString(a, KEY$storage)) {
                var b = getString(a, KEY$cookieName),
                    c = ie(a),
                    d = Wc(getString(a, KEY$cookiePath)),
                    e = Xc(getString(a, KEY$cookieDomain)),
                    f = 1E3 * jc(a, KEY$cookieExpires),
                    ea = getString(a, KEY$trackingId);
                if ("auto" != e) pe(b, c, d, e, ea, f) && (Tc = !0);
                else {
                    F(32);
                    for (var l = fd(), k = 0; k < l.length; k++)
                        if (e = l[k], a.data.set(KEY$cookieDomain, e), c = ie(a), pe(b, c, d, e, ea, f)) {
                            MInfo("Auto cookieDomain found: %s", e);
                            Tc = !0;
                            return
                        }
                    MError("Cookie write failed.");
                    a.data.set(KEY$cookieDomain, "auto")
                }
            }
        },
        Zc = function(a) {
            if ("cookie" == getString(a, KEY$storage) && !Tc && (Yc(a), !Tc)) throw MInfo("Storage not available. Aborting hit."), "abort";
        },
        Kd = function(a) {
            if (a.get(KEY$legacyHistoryImport)) {
                var b =
                    getString(a, KEY$cookieDomain),
                    c = getString(a, KEY$legacyCookieDomain) || getRootDomain(),
                    d = Jd("__utma", c, b);
                d && (F(19), a.set(KEY$_utmht, (new Date).getTime(), !0), a.set(KEY$_utma, d.T), (b = Jd("__utmz", c, b)) && d.hash == b.hash && a.set(KEY$_utmz, b.T))
            }
        },
        ie = function(a) {
            var b = Ae(getString(a, KEY$clientId)),
                c = Xc(getString(a, KEY$cookieDomain)).split(".").length;
            a = Vc(getString(a, KEY$cookiePath));
            1 < a && (c += "-" + a);
            return ["GA1", c, b].join(".")
        },
        sd = function(a, b, c) {
            for (var d = [], e = [], f, ea = 0; ea < a.length; ea++) {
                var l = a[ea];
                l.K[c] == b ? d.push(l) : void 0 == f || l.K[c] < f ? (e = [l], f = l.K[c]) : l.K[c] == f && e.push(l)
            }
            return 0 < d.length ? d : e
        },
        Xc = function(a) {
            return 0 == a.indexOf(".") ? a.substr(1) : a
        },
        fd = function() {
            var a = [],
                b = getRootDomain().split(".");
            if (4 == b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10) == c) return ["none"]
            }
            for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
            a.push("none");
            return a
        },
        Wc = function(a) {
            if (!a) return "/";
            1 < a.length && a.lastIndexOf("/") == a.length - 1 && (a = a.substr(0, a.length - 1));
            0 != a.indexOf("/") && (a = "/" + a);
            return a
        },
        Vc = function(a) {
            a = Wc(a);
            return "/" == a ? 1 : a.split("/").length
        };

    function Jd(a, b, c) {
        "none" == b && (b = "");
        var d = [],
            e = Md(a);
        a = "__utma" == a ? 6 : 2;
        for (var f = 0; f < e.length; f++) {
            var ea = ("" + e[f]).split(".");
            ea.length >= a && d.push({
                hash: ea[0],
                T: e[f],
                ea: ea
            })
        }
        return 0 == d.length ? void 0 : 1 == d.length ? d[0] : Ld(b, d) || Ld(c, d) || Ld(null, d) || d[0]
    }

    function Ld(a, b) {
        var c, d;
        null == a ? c = d = 1 : (c = ic(a), d = ic(startsWith(a, ".") ? a.substring(1) : "." + a));
        for (var e = 0; e < b.length; e++)
            if (b[e].hash == c || b[e].hash == d) return b[e]
    };
    var je = new RegExp(/^https?:\/\/([^\/:]+)/),
        ke = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;

    function nd(a) {
        a = a.get(KEY$clientId);
        var b = ud(a, 0);
        return "_ga=1." + P(b + "." + a)
    }

    function ud(a, b) {
        for (var c = new Date, d = Q.navigator, e = d.plugins || [], c = [a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < e.length; ++d) c.push(e[d].description);
        return ic(c.join("."))
    }
    var pd = function(a) {
        F(48);
        this.target = a;
        this.X = !1
    };
    pd.prototype.decorate = function(a, b) {
        if (a.tagName) {
            if ("a" == a.tagName.toLowerCase()) {
                a.href && (a.href = le(this, a.href, b));
                return
            }
            if ("form" == a.tagName.toLowerCase()) return me(this, a)
        }
        if ("string" == typeof a) return le(this, a, b);
        MError("Unknown Object passed to linker:decorate %s", a)
    };
    var le = function(a, b, c) {
            var d = ke.exec(b);
            d && 3 <= d.length && (b = d[1] + (d[3] ? d[2] + d[3] : ""));
            a = a.target.get("linkerParam");
            var e = b.indexOf("?"),
                d = b.indexOf("#");
            c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b.substring(0, d) + c + a + b.substring(d));
            return b = b.replace(/&+_ga=/, "&_ga=")
        },
        me = function(a, b) {
            if (b)
                if (b.action) {
                    MInfo("Linker decorating form: %s", b);
                    var c = a.target.get("linkerParam").split("=")[1];
                    if ("get" == b.method.toLowerCase()) {
                        for (var d = b.childNodes || [], e = 0; e < d.length; e++)
                            if ("_ga" == d[e].name) {
                                d[e].setAttribute("value", c);
                                return
                            }
                        d = I.createElement("input");
                        d.setAttribute("type", "hidden");
                        d.setAttribute("name", "_ga");
                        d.setAttribute("value", c);
                        b.appendChild(d)
                    } else "post" == b.method.toLowerCase() ? b.action = le(a, b.action) : MError("Unknown form method %s on %s", b.method, b)
                } else MError("An action is required for the linker to work.")
        };
    pd.prototype.autoLink = function(a, b, c) {
        function d(c) {
            try {
                c = c || Q.event;
                var d;
                a: {
                    var f = c.target || c.srcElement;
                    for (c = 100; f && 0 < c;) {
                        if (f.href && f.nodeName.match(/^a(?:rea)?$/i)) {
                            d = f;
                            break a
                        }
                        f = f.parentNode;
                        c--
                    }
                    d = {}
                }
                "http:" != d.protocol && "https:" != d.protocol || !ne(a, d.hostname || "") || (d.href && (d.href = le(e, d.href, b)), MInfo("Link decorated: " + d.href))
            } catch (v) {
                F(26)
            }
        }
        var e = this;
        this.X || (this.X = !0, $on(I, "mousedown", d, !1), $on(I, "keyup", d, !1));
        if (c) {
            c = function(b) {
                b = b || Q.event;
                if ((b = b.target || b.srcElement) && b.action) {
                    var c = b.action.match(je);
                    c && ne(a, c[1]) && me(e, b)
                }
            };
            for (var f = 0; f < I.forms.length; f++) $on(I.forms[f], "submit", c)
        }
    };

    function ne(a, b) {
        if (b == I.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) {
                if (a[c].test(b)) return !0
            } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    };
    var p = /^GTM-[A-Z0-9]+$/,
        q = /;_gaexp=[^;]*/g,
        r = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
        w = function(a) {
            function b(a, b) {
                b && (c += "&" + a + "=" + P(b))
            }
            var c = "https://www.google-analytics.com/gtm/js?id=" + P(a.id);
            "dataLayer" != a.F && b("l", a.F);
            b("t", a.target);
            b("cid", a.ma);
            b("cidt", a.na);
            b("gac", a.oa);
            b("aip", a.la);
            a.qa && b("m", "sync");
            b("cycle", a.J);
            return c
        };
    var Fe = function(a, b, c) {
            this.Y = KEY$_j1;
            this.ca = b;
            (b = c) || (b = (b = getString(a, KEY$name)) && "t0" != b ? Pe.test(b) ? "_gat_" + Ae(getString(a, KEY$trackingId)) : "_gat_" + Ae(b) : "_gat");
            this.aa = b
        },
        Le = function(a, b) {
            var c = b.get(KEY$buildHitTask);
            b.set(KEY$buildHitTask, function(b) {
                Je(a, b);
                var d = c(b);
                Ke(a, b);
                return d
            });
            var d = b.get(KEY$sendHitTask);
            b.set(KEY$sendHitTask, function(b) {
                var c = d(b);
                Ee(a, b);
                return c
            })
        },
        Je = function(a, b) {
            b.get(a.Y) ? MWarn("Join id already set") : "1" == Md(a.aa)[0] ? b.set(a.Y, "", !0) : b.set(a.Y, "" + random(), !0)
        },
        Ke = function(a, b) {
            b.get(a.Y) && (MInfo("Setting throttling cookie: %s", a.aa), pe(a.aa, "1", b.get(KEY$cookiePath), b.get(KEY$cookieDomain), b.get(KEY$trackingId), 6E5))
        },
        Ee = function(a, b) {
            if (b.get(a.Y)) {
                var c = new ef,
                    d = function(a) {
                        yc(a).i && c.set(yc(a).i, b.get(a))
                    };
                d(KEY$apiVersion);
                d(KEY$clientVersion);
                d(KEY$trackingId);
                d(KEY$clientId);
                d(KEY$userId);
                d(a.Y);
                c.set(yc(KEY$usage).i, cf(b));
                var e = a.ca;
                c.map(function(a, b) {
                    e += P(a) + "=";
                    e += P("" + b) + "&"
                });
                e += "z=" + random();
                od(c, e);
                createImg(e);
                b.set(a.Y, "", !0)
            }
        },
        Pe = /^gtm\d+$/;
    var $d = function(a, b) {
        var c = a.a;
        if (!c.get("dcLoaded")) {
            bf(c, 29);
            b = b || {};
            var d;
            b[KEY$cookieName] && (d = Ae(b[KEY$cookieName]));
            d = new Fe(c, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", d);
            Le(d, c);
            c.set("dcLoaded", !0)
        }
    };
    var Me = function(a) {
        if (!a.get("dcLoaded") && "cookie" == a.get(KEY$storage)) {
            bf(a, 51);
            var b = new Fe(a);
            Je(b, a);
            Ke(b, a);
            a.get(b.Y) && (a.set(KEY$_r, 1, !0), a.set(KEY$transportUrl, hd() + "/r/collect", !0))
        }
    };
    var He = function() {
        var a = Q.gaGlobal = Q.gaGlobal || {};
        return a.hid = a.hid || random()
    };
    var Nd, Od = function(a, b, c) {
        if (!Nd) {
            var d;
            d = I.location.hash;
            var e = Q.name,
                f = /^#?gaso=([^&]*)/;
            if (e = (d = (d = d && d.match(f) || e && e.match(f)) ? d[1] : Md("GASO")[0] || "") && d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) pe("GASO", "" + d, c, b, a, 0), window._udo || (window._udo = b), window._utcp || (window._utcp = c), a = e[1], Ea("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + random(), "_gasojs");
            Nd = !0
        }
    };
    var va = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/;
    var Tracker = function(fieldsObject) {
        var that = this;
        this.a = new TrackerStore();
        this.filters = new TrackerFilters();

        function _set(key, value) {
            that.a.data.set(key, value);
        }

        function _setFilter(key, value) {
            _set(key, value);
            that.filters.add(key);
        }

        MVerbose("Initializing tracker");

        _set(KEY$name, fieldsObject[KEY$name]);
        _set(KEY$trackingId, trim(fieldsObject[KEY$trackingId]));
        _set(KEY$cookieName, fieldsObject[KEY$cookieName]);
        _set(KEY$cookieDomain, fieldsObject[KEY$cookieDomain] || getRootDomain());
        _set(KEY$cookiePath, fieldsObject[KEY$cookiePath]);
        _set(KEY$cookieExpires, fieldsObject[KEY$cookieExpires]);
        _set(KEY$legacyCookieDomain, fieldsObject[KEY$legacyCookieDomain]);
        _set(KEY$legacyHistoryImport, fieldsObject[KEY$legacyHistoryImport]);
        _set(KEY$allowLinker, fieldsObject[KEY$allowLinker]);
        _set(KEY$allowAnchor, fieldsObject[KEY$allowAnchor]);
        _set(KEY$sampleRate, fieldsObject[KEY$sampleRate]);
        _set(KEY$siteSpeedSampleRate, fieldsObject[KEY$siteSpeedSampleRate]);
        _set(KEY$alwaysSendReferrer, fieldsObject[KEY$alwaysSendReferrer]);
        _set(KEY$storage, fieldsObject[KEY$storage]);
        _set(KEY$userId, fieldsObject[KEY$userId]);
        _set(KEY$clientIdTime, fieldsObject[KEY$clientIdTime]);
        _set(KEY$apiVersion, 1);
        _set(KEY$clientVersion, "j43d");

        _setFilter(KEY$_oot, kc);
        _setFilter(KEY$previewTask, Ud);
        _setFilter(KEY$checkProtocolTask, lc);
        _setFilter(KEY$validationTask, validationTask);
        _setFilter(KEY$checkStorageTask, Zc);
        _setFilter(KEY$historyImportTask, Kd);
        _setFilter(KEY$samplerTask, hc);
        _setFilter(KEY$_rlt, qc);
        _setFilter(KEY$ceTask, td);
        _setFilter(KEY$devIdTask, ve);
        _setFilter(KEY$displayFeaturesTask, Me);
        _setFilter(KEY$buildHitTask, mc);
        _setFilter("_dt", nc);
        _setFilter(KEY$sendHitTask, pc);
        _setFilter(KEY$timingTask, ze(this));

        vd(this.a, fieldsObject[KEY$clientId]);
        wd(this.a);
        this.a.set(KEY$adSenseId, He());
        Od(this.a.get(KEY$trackingId), this.a.get(KEY$cookieDomain), this.a.get(KEY$cookiePath));
        Td(fieldsObject);

        MTrace("Initialization complete\n\n");
    };
    var vd = function(a, b) {
            if ("cookie" == getString(a, KEY$storage)) {
                Tc = !1;
                var c;
                b: {
                    var d = Md(getString(a, KEY$cookieName));
                    if (d && !(1 > d.length)) {
                        c = [];
                        for (var e = 0; e < d.length; e++) {
                            var f;
                            f = d[e].split(".");
                            var ea = f.shift();
                            ("GA1" == ea || "1" == ea) && 1 < f.length ? (ea = f.shift().split("-"), 1 == ea.length && (ea[1] = "1"), ea[0] *= 1, ea[1] *= 1, f = {
                                K: ea,
                                M: f.join(".")
                            }) : (MWarn("Unknown cookie version: " + ea), f = void 0);
                            f && c.push(f)
                        }
                        if (1 == c.length) {
                            F(13);
                            c = c[0].M;
                            break b
                        }
                        if (0 == c.length) F(12);
                        else {
                            F(14);
                            d = Xc(getString(a, KEY$cookieDomain)).split(".").length;
                            c = sd(c, d, 0);
                            if (1 == c.length) {
                                c = c[0].M;
                                break b
                            }
                            d = Vc(getString(a, KEY$cookiePath));
                            c = sd(c, d, 1);
                            c = c[0] && c[0].M;
                            break b
                        }
                    }
                    c = void 0
                }
                c || (c = getString(a, KEY$cookieDomain), d = getString(a, KEY$legacyCookieDomain) || getRootDomain(), c = Jd("__utma", d, c), void 0 != c ? (F(10), d = c.ea[1] + "." + c.ea[2], MLog("Loaded legacy client id from utma cookie: %s (hash=%s)", d, c.hash), c = d) : c = void 0);
                c && (a.data.set(KEY$clientId, c), Tc = !0)
            }
            c = a.get(KEY$allowAnchor);
            if (c = (c = I.location[c ? "href" : "search"].match("(?:&|#|\\?)" +
                    P("_ga").replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == c.length ? c[1] : "") a.get(KEY$allowLinker) ? (e = c.indexOf("."), -1 == e ? (MWarn("Invalid linker parameter format: " + c), F(22)) : (f = c.substring(e + 1), "1" != c.substring(0, e) ? (MWarn("Unrecognized linker parameter version: " + c), F(22)) : (e = f.indexOf("."), -1 == e ? (MWarn("Invalid linker parameter v1 payload: " + c), F(22)) : (d = f.substring(0, e), e = f.substring(e + 1), d != ud(e, 0) && d != ud(e, -1) && d != ud(e, -2) ? (MWarn("Bad or expired linker parameter hash: " + c), F(23)) : (MLog("Loaded linker parameter: " +
                c), F(11), a.data.set(KEY$clientId, e)))))) : (MWarn("Linker disabled. Ignoring linker parameter: " + c), F(21));
            b && (MLog("Used client Id from constructor."), F(9), a.data.set(KEY$clientId, P(b)));
            if (!a.get(KEY$clientId))
                if (c = (c = Q.gaGlobal && Q.gaGlobal.vid) && -1 != c.search(/^(?:utma\.)?\d+\.\d+$/) ? c : void 0) MLog("New visitor. Copying new clientId"), F(17), a.data.set(KEY$clientId, c);
                else {
                    MLog("New visitor. Generating new clientId");
                    F(8);
                    c = Q.navigator.userAgent + (I.cookie ? I.cookie : "") + (I.referrer ? I.referrer : "");
                    d = c.length;
                    for (e = Q.history.length; 0 < e;) c += e-- ^ d++;
                    a.data.set(KEY$clientId, [random() ^ ic(c) & 2147483647, Math.round((new Date).getTime() / 1E3)].join("."))
                }
            Yc(a)
        },
        wd = function(a) {
            var b = Q.navigator,
                c = Q.screen,
                d = I.location;
            a.set(KEY$referrer, Xb(a.get(KEY$alwaysSendReferrer)));
            if (d) {
                var e = d.pathname || "";
                "/" != e.charAt(0) && (F(31), e = "/" + e);
                a.set(KEY$location, d.protocol + "//" + d.hostname + e + d.search)
            }
            c && a.set(KEY$screenResolution, c.width + "x" + c.height);
            c && a.set(KEY$screenColors, c.colorDepth + "-bit");
            var c = I.documentElement,
                f = (e = I.body) && e.clientWidth && e.clientHeight,
                ea = [];
            c && c.clientWidth && c.clientHeight && ("CSS1Compat" === I.compatMode || !f) ? ea = [c.clientWidth, c.clientHeight] :
                f && (ea = [e.clientWidth, e.clientHeight]);
            c = 0 >= ea[0] || 0 >= ea[1] ? "" : ea.join("x");
            a.set(KEY$viewportSize, c);
            a.set(KEY$flashVersion, Qc());
            a.set(KEY$encoding, I.characterSet || I.charset);
            a.set(KEY$javaEnabled, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1);
            a.set(KEY$language, (b && (b.language || b.browserLanguage) || "").toLowerCase());
            if (d && a.get(KEY$allowAnchor) && (b = I.location.hash)) {
                b = b.split(/[?&#]+/);
                d = [];
                for (c = 0; c < b.length; ++c)(startsWith(b[c], "utm_id") || startsWith(b[c], "utm_campaign") || startsWith(b[c], "utm_source") || startsWith(b[c], "utm_medium") || startsWith(b[c], "utm_term") || startsWith(b[c], "utm_content") || startsWith(b[c], "gclid") ||
                    startsWith(b[c], "dclid") || startsWith(b[c], "gclsrc")) && d.push(b[c]);
                0 < d.length && (b = "#" + d.join("&"), a.set(KEY$location, a.get(Pa) + b))
            }
        };
    ad.prototype.get = function(a) {
        isString(a) || MError("Please specify a field name to get it's value.");
        return this.a.get(a)
    };
    ad.prototype.set = function(a, b) {
        this.a.set(a, b)
    };
    var bd = {
        pageview: [KEY$page],
        event: [KEY$eventCategory, KEY$eventAction, KEY$eventLabel, KEY$eventValue],
        social: [KEY$socialNetwork, KEY$socialAction, KEY$socialTarget],
        timing: [KEY$timingCategory, KEY$timingVar, KEY$timingValue, KEY$timingLabel]
    };
    ad.prototype.send = function(a) {
        MTrace("Send start: " + (0 == Z.h ? -1 : (new Date).getTime() - Z.h));
        if (1 > arguments.length) MError("No hit type specified. Aborting hit.");
        else {
            var b, c;
            "string" === typeof arguments[0] ? (b = arguments[0], c = [].slice.call(arguments, 1)) : (b = arguments[0] && arguments[0][KEY$hitType], c = arguments);
            b ? (c = Yb(bd[b] || [], c), c[KEY$hitType] = b, this.a.set(c, void 0, !0), this.filters.H(this.a), MTrace("Send finished: " + (0 == Z.h ? -1 : (new Date).getTime() - Z.h)), this.a.data.u = {}) : MError("No hit type specified. Aborting hit.")
        }
    };
    ad.prototype.pa = function(a, b) {
        var c = this;
        x(a, c, b) || (y(a, function() {
            x(a, c, b)
        }), z(String(c.get(KEY$name)), a, void 0, b, !0))
    };
    var onVisible = function (f) {
        if ("prerender" == I.visibilityState) {
            return false;
        }
        f();
        return true;
    };
    var ready = function (f) {
        if (!onVisible(f)) {
            F(16);
            var hasBeenVisible = false;
            var onVisibilityChange = function() {
                if (!hasBeenVisible && onVisible(f)) {
                    hasBeenVisible = true;
                    var self = onVisibilityChange;
                    if (document.removeEventListener) {
                        document.removeEventListener("visibilitychange", self, false);
                    } else {
                        document.detachEvent && e.detachEvent("onvisibilitychange", self);
                    }
                }
            };
            $on(document, "visibilitychange", onVisibilityChange)
        }
    };
    var REG_COMMAND = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/; // [trackerName.][pluginName:]methodName
    var parseQ = function (a) {
        this.G = a;
        var command = a[0];
        if (isFunction(command)) {
            this.s = command;
        } else {
            var b = REG_COMMAND.exec(command);
            if (null != b && 4 == b.length) {
                this.c = b[1] || "t0"; // trackerName
                this.I = b[2] || "";   // pluginName
                this.A = b[3];         // methodName
                this.b = [].slice.call(a, 1);

                if (!this.I) {
                    this.D = "create" == this.A;
                    this.g = "require" == this.A;
                    this.f = "provide" == this.A;
                    this.$ = "remove" == this.A;
                }

                if (this.g) {
                    if (3 <= this.b.length) {
                        this.da = this.b[1];
                        this.ba = this.b[2];
                    } else if (this.b[1]) {
                        if (isString(this.b[1])) {
                            this.da = this.b[1];
                        } else {
                            this.ba = this.b[1];
                        }
                    }
                }
            }

            var b = a[1];
            var c = a[2];
            if (!this.A) {
                MError("Invalid command: " + a);
                throw "abort";
            }
            if (this.g && (!isString(b) || "" == b)) {
                MError("Invalid require command.", a);
                throw "abort";
            }
            if (this.f && (!isString(b) || "" == b || !isFunction(c))) {
                MError("Invalid provide command.", a);
                throw "abort";
            }
            if (isInvalidTargetNamePluginName(this.c) || isInvalidTargetNamePluginName(this.I)) {
                MError('Target name and plugin names should not contain "." or ":"');
                throw "abort";
            }
            if (this.f && "t0" != this.c) {
                MError("Provide command should not be preceeded by a tracker name.");
                throw "abort";
            }
        }
    };

    function isInvalidTargetNamePluginName(name) {
        return 0 <= name.indexOf(".") || 0 <= name.indexOf(":");
    };

    var Re, Se, Te, B;
    Re = new ef;
    Te = new ef;
    B = new ef;
    Se = {
        ec: 45,
        ecommerce: 46,
        linkid: 47
    };
    var x = function(a, b, c) {
            var d = b == Z ? libName : b.get(KEY$name),
                e = Re.get(a);
            if (!isFunction(e)) return MInfo("Waiting on require of %s to be fulfilled.", a), !1;
            b.plugins_ = b.plugins_ || new ef;
            if (b.plugins_.get(a)) return MError("Command ignored. Plugin %s has already been required on tracker %s.", a, d), !0;
            b.plugins_.set(a, new e(b, c || {}));
            MInfo("Plugin %s intialized on tracker %s.", a, d);
            return !0
        },
        z = function(a, b, c, d, e) {
            if (!isFunction(Re.get(b)) && !Te.get(b)) {
                Se.hasOwnProperty(b) && F(Se[b]);
                if (p.test(b)) {
                    F(52);
                    a = Z.getByName(a);
                    if (!a) return !0;
                    c = d || {};
                    d = {
                        id: b,
                        F: c.dataLayer || "dataLayer",
                        la: !!a.get("anonymizeIp"),
                        qa: e,
                        J: !1
                    };
                    a.get("&gtm") == b && (d.J = !0, MError("Infinite loop detected. Tracker trying to load the container (%s) that created it. Ignoring require statement.", b));
                    var f = String(a.get("name"));
                    "t0" != f && (d.target = f);
                    ld(String(a.get("trackingId"))) || (d.ma = String(a.get(KEY$clientId)), d.na = Number(a.get(KEY$clientIdTime)), a = c.palindrome ? r : q, a = (a = I.cookie.replace(/^|(; +)/g, ";").match(a)) ? a.sort().join("").substring(1) : void 0, d.oa = a);
                    a = d.F;
                    c = (new Date).getTime();
                    Q[a] = Q[a] || [];
                    c = {
                        "gtm.start": c
                    };
                    e || (c.event =
                        "gtm.js");
                    Q[a].push(c);
                    c = w(d)
                }!c && Se.hasOwnProperty(b) ? (F(39), c = b + ".js") : F(43);
                c ? (c && 0 <= c.indexOf("/") || (c = (forceSSL || isHttps() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + c), d = Ue(c), a = d.protocol, c = I.location.protocol, ("https:" == a || a == c || ("http:" != a ? 0 : "http:" == c)) && C(d) ? (MInfo("Loading resource for plugin: " + b), Ea(d.url, void 0, e), Te.set(b, !0)) : MError("Error loading resource for plugin %s: Refusing to load url: %s", b, d.url)) : MInfo("No plugin url set for %s.", b)
            }
        },
        y = function(a, b) {
            var c = B.get(a) || [];
            c.push(b);
            B.set(a, c)
        },
        D = function(a, b) {
            Re.set(a, b);
            for (var c = B.get(a) || [], d = 0; d < c.length; d++) c[d]();
            B.set(a, [])
        },
        C = function(a) {
            var b = Ue(I.location.href);
            if (startsWith(a.url, "https://www.google-analytics.com/gtm/js?id=")) return !0;
            if (a.query || 0 <= a.url.indexOf("?") || 0 <= a.path.indexOf("://")) return !1;
            if (a.host == b.host && a.port == b.port) return !0;
            b = "http:" == a.protocol ? 80 : 443;
            return "www.google-analytics.com" == a.host && (a.port || b) == b && startsWith(a.path, "/plugins/") ? !0 : !1
        },
        Ue = function(a) {
            function b(a) {
                var b = (a.hostname || "").split(":")[0].toLowerCase(),
                    c = (a.protocol || "").toLowerCase(),
                    c = 1 * a.port || ("http:" == c ? 80 : "https:" == c ? 443 : "");
                a = a.pathname || "";
                startsWith(a, "/") || (a = "/" + a);
                return [b, "" + c, a]
            }
            var c = I.createElement("a");
            c.href = I.location.href;
            var d = (c.protocol || "").toLowerCase(),
                e = b(c),
                f = c.search || "",
                ea = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
            startsWith(a, "//") ? a = d + a : startsWith(a, "/") ? a = ea + a : !a || startsWith(a, "?") ? a = ea + e[2] + (a || f) : 0 > a.split("/")[0].indexOf(":") && (a = ea + e[2].substring(0, e[2].lastIndexOf("/")) + "/" + a);
            c.href = a;
            d = b(c);
            return {
                protocol: (c.protocol || "").toLowerCase(),
                host: d[0],
                port: d[1],
                path: d[2],
                query: c.search || "",
                url: a || ""
            }
        };
    var jf = {};
    jf.j = [];
    jf.H = function(a) {
        var b = jf.N.apply(jf, arguments),
            b = jf.j.concat(b);
        for (jf.j = []; 0 < b.length;) {
            var c = b[0];
            var command;
            if (c.s) {
                command = "ga(Function)";
            } else {
                var d = [];
                if (c.G) {
                    for (var e = 0; e < c.G.length; e++) {
                        d.push(Fa(c.G[e]));
                    }
                }
                command = "ga(" + d.join(", ") + ")";
            }
            MGroup("Running command: " + command);

            var ccc = jf.R(b[0]);
            MGroupEnd();
            if (ccc) break;
            b.shift();
            if (0 < jf.j.length) break
        }
        jf.j = jf.j.concat(b)
    };
    jf.N = function(...args) {
        var b = []
        for (var i = 0; i < args.length; i++) {
            try {
                var d = new parseQ(args[i]);
                if (d.f) {
                    D(d.b[0], d.b[1]);
                    MInfo("Registered new plugin: ga(provide, %s, Function)", d.b[0]);
                } else if (d.g) {
                    d.ha = z(d.c, d.b[0], d.da, d.ba);
                    b.push(d);
                }
            } catch (error) {
                var e = args[i];
                var f = d;
                if (isArray(e) || isFunction(e)) {
                    if (isArray(e) && !isString(e[0])) {
                        MError("First element of command array is not a string: %s", e);
                    } else {
                        if (f && f.g) {
                            MError("Invalid require command: %s", e);
                        } else {
                            MError("Command failure: %s", error);
                        }
                    }
                } else {
                    MError("Command is not an array or function: %s", error);
                }
            }
        }
        return b;
    };
    jf.R = function(a) {
        try {
            if (a.s) a.s.call(Q, Z.getByName("t0"));
            else {
                var b = a.c == libName ? Z : Z.getByName(a.c);
                if (a.D) "t0" != a.c ? MWarn('Command ignored. Use "create" instead of "%s.create"', a.c) : Z.create.apply(Z, a.b);
                else if (a.$) Z.remove(a.c);
                else if (b)
                    if (a.g) {
                        if (a.ha && (a.ha = z(a.c, a.b[0], a.da, a.ba)), !x(a.b[0], b, a.ba)) return !0
                    } else if (a.I) {
                    var c = a.I,
                        d = a.A,
                        e = a.b,
                        f;
                    b.plugins_ || MError("Tracker does not have any plugins.");
                    b.plugins_.get(c) || MError("Tracker does not have %s plugin required.", c);
                    f = b.plugins_.get(c);
                    f[d] || MError("Plugin %s does not have method %s.",
                        c, d);
                    f[d].apply(f, e)
                } else b[a.A].apply(b, a.b);
                else MInfo("Command ignored. Unknown target: " + b)
            }
        } catch (ea) {
            a.s ? MError("Exception thrown from pushed function: %s", ea) : a.g ? MError("Error creating a plugin instance: %s", a.G) : a.f ? MError("Error registering a plugin: %s", a.G) : a.$ ? MError("Error removing tracker: %s", a.G) : a.I ? MError("Error calling a plugin method: %s", a.G) : MError('Called method "%s" threw exception: %s', a.A, ea)
        }
    };
    var Z = function(...args) {
        MGroup("Executing Google Analytics commands.");
        F(1);
        jf.H.apply(jf, [args]);
        MGroupEnd()
    };
    Z.trackers = {};
    Z.trackerArr = [];
    Z.h = 0;
    Z.answer = 42;
    var gd = [KEY$trackingId, KEY$cookieDomain, KEY$name];
    Z.create = function(...args) {
        var b = Yb(gd, args);
        b[KEY$name] || (b[KEY$name] = "t0");
        var trackerName = "" + b[KEY$name];
        if (Z.trackers[trackerName]) {
            MWarn("Ignoring create request for duplicate tracking name.");
            return Z.trackers[trackerName];
        }
        MInfo("Creating new tracker: " + trackerName);
        var tracker = new Tracker(b);
        Z.trackers[trackerName] = tracker;
        Z.trackerArr.push(tracker);
        return tracker;
    };
    Z.remove = function(a) {
        for (var b = 0; b < Z.trackerArr.length; b++)
            if (Z.trackerArr[b].get(KEY$name) == a) {
                MInfo("Removing tracker: " + a);
                Z.trackerArr.splice(b, 1);
                Z.trackers[a] = null;
                return
            }
        MError("Tracker does not exist.")
    };
    Z.getByName = function(name) {
        return Z.trackers[name];
    };
    Z.getAll = function() {
        return Z.trackerArr.slice(0)
    };
    Z.P = function() {
        MGroup("Initializing Google Analytics.");
        "ga" != libName && F(49);
        var lib = window[libName];
        if (lib && 42 == lib.answer) {
            MWarn("Tracking script already loaded. Abandoning initialization.");
        } else {
            if (lib && 42 != lib.answer && !lib.q) {
                MWarn("An existing object with the name '%s' found. Unexpected results can occur because of this.", libName);
            }
            Z.h = lib && lib.l;
            Z.loaded = true;

            var b = window[libName] = Z;
            extend("create", b, b.create);
            extend("remove", b, b.remove);
            extend("getByName", b, b.getByName, 5);
            extend("getAll", b, b.getAll, 6);
            extend("dump", b, b.dump);

            var b1 = ad.prototype;
            extend("get", b1, b1.get, 7);
            extend("set", b1, b1.set, 4);
            extend("send", b1, b1.send);
            extend("requireSync", b1, b1.pa);

            var b2 = wc.prototype;
            extend("get", b2, b2.get);
            extend("set", b2, b2.set);

            var scripts = document.getElementsByTagName("script");
            var bFlag;
            if (!isHttps() && !forceSSL) {
                loopLabel: {
                    for (var i = 0; i < scripts.length && 100 > i; i++) {
                        var d = scripts[i].src;
                        if (d && 0 == d.indexOf("https://www.google-analytics.com/analytics")) {
                            F(33);
                            bFlag = true;
                            break loopLabel;
                        }
                    }
                    bFlag = false;
                }
                if (bFlag) {
                    MTrace("Analytics.js is secure, forcing SSL for all hits.");
                    forceSSL = true;
                }
            }
            if (!isHttps && !forceSSL) {
                if (luckySSL()) {
                    MTrace("Sending all Hits by SSL");
                    F(36);
                    forceSSL = true;
                }
            }
            (window.gaplugins = window.gaplugins || {}).Linker = pd;

            var b3 = pd.prototype;
            D("linker", pd);
            extend("decorate", b3, b3.decorate, 20);
            extend("autoLink", b3, b3.autoLink, 25);
            D("displayfeatures", $d);
            D("adfeatures", $d);

            var q = lib && lib.q;
            isArray(q) ? jf.H.apply(Z, q) : F(50);
        }
        MGroupEnd();
    };
    Z.ga = function() {
        for (var a = Z.getAll(), b = 0; b < a.length; b++) MGroup("Tracker: " + a[b].get(KEY$name)), Ja(a[b].a), MGroupEnd();
        a = I.cookie;
        MGroup("Cookie Information");
        for (var a = a.split("; "), b = [
                ["Name", "Domain", "Path", "Value"]
            ], c = 0; c < a.length; c++) {
            var d = a[c].split("="),
                e = d[0],
                d = d[1] || "";
            if (_contains(tc, e)) b.push(Dc(e, d));
            else if ("_ga" == e) {
                var f = "",
                    ea = "/",
                    l = d.split(".")[1];
                l && (l = l.split("-"), f = I.location.hostname.split("."), f = f.slice(f.length - l[0]).join("."), ea += I.location.pathname.split("/").slice(1, l[1] || 1).join("/"));
                b.push([e, f, ea, d])
            } else /^((__utmt)|(_gat))/.test(e) && b.push([e, "", "", d])
        }
        Xd(b);
        MGroupEnd()
    };
    Z.dump = Z.ga;
    MLog("<ascii art> google analytics");
    MWarn("Running analytics_debug.js. This script is intended for testing and debugging only.");
    var E = Z.P,
        K = Q[libName];
    K && K.r ? E() : ready(E);
    ready(function() {
        jf.H(["provide", "render", noop])
    });

    function ic(a) {
        var b = 1,
            c = 0,
            d;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
})(window);
