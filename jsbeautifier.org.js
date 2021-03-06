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
            a.set(af, c.B)
        },
        cf = function(a) {
            a = $e(a);
            a = new ec(a);
            for (var b = Ne.B.slice(), c = 0; c < a.B.length; c++) b[c] = b[c] || a.B[c];
            return (new ec(b)).encode()
        },
        $e = function(a) {
            a = a.get(af);
            ga(a) || (a = []);
            return a
        };
    var t = function(a) {
            return "function" == typeof a
        },
        ga = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        G = function(a) {
            return void 0 != a && -1 < (a.constructor + "").indexOf("String")
        },
        H = function(a, b) {
            return 0 == a.indexOf(b)
        },
        xa = function(a) {
            return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
        },
        za = function(a) {
            var b = I.createElement("img");
            b.width = 1;
            b.height = 1;
            b.src = a;
            return b
        },
        Aa = function() {},
        P = function(a) {
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
        },
        Ca = function(a, b, c, d) {
            try {
                a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
            } catch (e) {
                F(27)
            }
        },
        g = /^[\w\-:/.?=&%!]+$/,
        Ea = function(a, b, c) {
            a && (N("Loading script: %s", a), c ? (c = "", b && (g.test(b) ? c = ' id="' + b + '"' : J("Dropping invalid script ID: %s", b)), g.test(a) ? I.write("<script" + c + ' src="' + a + '">\x3c/script>') : J("URL uses invalid characters. Dropping request for: %s",
                a)) : (c = I.createElement("script"), c.type = "text/javascript", c.async = !0, c.src = a, b && (c.id = b), a = I.getElementsByTagName("script")[0], a.parentNode.insertBefore(c, a)))
        },
        df = function() {
            return "https:" == I.location.protocol
        },
        Wb = function() {
            var a = "" + I.location.hostname;
            return 0 == a.indexOf("www.") ? a.substring(4) : a
        },
        Xb = function(a) {
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
                } else e < a.length ? c[a[e]] = b[e] : J("Unrecognized positional argument: " + b[e]);
            return c
        },
        Zb = function(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b == a[c]) return !0;
            return !1
        };
    var ef = function() {
        this.keys = [];
        this.values = {};
        this.u = {};
        this.debug = !1
    };
    ef.prototype.set = function(a, b, c) {
        this.debug && L("  " + a + "=" + Fa(b) + (c ? " (temp)" : ""));
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
                if (G(c)) {
                    if (c == a) return d
                } else if (c = a.match(c)) return c[0] =
                    d, Ha.apply(void 0, c)
            }
            return ""
        };

    function Ga(a, b) {
        var c = [].slice.call(arguments);
        c.unshift("log");
        M.log.apply(M, c)
    }

    function N(a, b) {
        var c = [].slice.call(arguments);
        c.unshift("info");
        M.log.apply(M, c)
    }

    function J(a, b) {
        var c = [].slice.call(arguments);
        c.unshift("warn");
        M.log.apply(M, c)
    }

    function O(a, b) {
        var c = [].slice.call(arguments);
        c.unshift("error");
        M.log.apply(M, c)
    }

    function L(a, b) {
        var c = Q.ga_debug;
        c && c.trace && (c = [].slice.call(arguments), c.unshift("log"), M.log.apply(M, c))
    }

    function dd(a, b) {
        var c = [].slice.call(arguments);
        c.unshift("group");
        M.log.apply(M, c)
    }

    function ge() {
        M.log.apply(M, ["groupEnd"])
    }
    var M = new function() {
        var a = window.console,
            b = a && "Firebug Lite" == a.provider;
        this.log = function(c, d, e) {
            if (a) {
                var f = Ha.apply(window, [].slice.call(arguments, 1));
                if (b)
                    for (var f = f.split("\n"), ea = 0; ea < f.length; ea++) a[c](f[ea]);
                else if (a[c]) a[c](f);
                else "group" == c && a.log(f)
            }
        }
    };

    function Ia(a) {
        N("\nSent beacon:\n" + a + "\n\n");
        var b = [];
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("="),
                e = d[0],
                d = d[1];
            if ("_" != e.charAt(0)) {
                var f = kd(e);
                f && 0 == f.indexOf("&") && (f = Sd(f) || f);
                f && ("&" + e == f && (f = "<unknown>"), b.push([f, "(&" + e + ")", Ba(d)]))
            }
        }
        b.sort();
        Xd(b)
    }

    function Xd(a) {
        for (var b = [], c = 0; c < a.length; c++)
            for (var d = 0; d < a[c].length - 1; d++) a[c][d] && (b[d] = b[d] || 0, b[d] = a[c][d].length > b[d] ? a[c][d].length : b[d]);
        for (c = 0; c < a.length; c++) {
            for (var e = [], d = 0; d < a[c].length; d++) {
                var f = he(0) + a[c][d];
                e.push(f + he((b[d] || 0) - f.length))
            }
            N(e.join(" "))
        }
    }

    function Ja(a) {
        var b = [];
        Ka.map(function(c, d) {
            var ea = a.get(c);
            void 0 != ea && "_" != c[0] && b.push(c + (d.i ? " (" + d.i + ")" : "") + " = " + Fa(ea))
        });
        for (var c = b.sort(), d = 0; d < c.length; d++) N("  " + c[d])
    }

    function Td(a) {
        for (var b in a) a.hasOwnProperty(b) && (Zb(ac, b) || (yc(b) ? J('This field cannot be set in a create method. Please use ga("set", %s, %s);', b, a[b]) : J("Create config had an unknown parameter: %s", b)), La(b, a[b]))
    }

    function Fa(a, b) {
        var c = b || 0;
        if (void 0 == a) return "" + a;
        if (G(a)) return '"' + a + '"';
        if (t(a)) return "[function]";
        if (ga(a)) {
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
        if (!G(a)) return "";
        for (var c = a.split("%s"), d = 1; d < arguments.length; d++) c.splice(2 * d - 1, 0, Fa(arguments[d]));
        return c.join("")
    }

    function he(a) {
        return 0 < a ? Array(a + 1).join(" ") : ""
    }

    function La(a, b) {
        if (void 0 == b) switch (a) {
            case U:
            case Ma:
            case Gc:
                J("Expected a value for required field: %s", a)
        } else {
            switch (a) {
                case Ma:
                case Na:
                case Oa:
                case Pa:
                case Qa:
                case Ra:
                case Sa:
                case Ta:
                case Ua:
                case Va:
                case Wa:
                case Xa:
                case Ya:
                case Za:
                case R:
                case $a:
                case ab:
                case bb:
                case cb:
                case db:
                case eb:
                case fb:
                case gb:
                case hb:
                case ib:
                case jb:
                case kb:
                case lb:
                case mb:
                case nb:
                case pb:
                case qb:
                case rb:
                case sb:
                case tb:
                case ub:
                case S:
                case vb:
                case wb:
                case xb:
                case Pd:
                    G(b) || J("Expected a string value for field: %s. but found: %s.",
                        a, typeof b);
                    break;
                case yb:
                case zb:
                case Ab:
                case Bb:
                case Cb:
                case Db:
                case Eb:
                    !isNaN(parseFloat(b)) && isFinite(b) || J("Expected a number value for the field: %s. but found: %s.", a, typeof b);
                    break;
                case Fb:
                case Gb:
                case Hb:
                case Ib:
                case Jb:
                case "forceSSL":
                case Kb:
                case Lb:
                case Mb:
                    !0 !== b && !1 !== b && 1 !== b && 0 !== b && J("Expected a boolean value for the field: %s. but found: %s.", a, typeof b);
                    break;
                case Nb:
                case Ob:
                case Pb:
                case Qb:
                case Rb:
                case Tb:
                case Ub:
                case Vb:
                    t(b) || J("Expected a function for the field value: %s. but found: %s.",
                        a, typeof b);
                    break;
                case T:
                    /^[a-zA-Z0-9_]+$/.test(b) || O("Tracker name should only consist of alphanumeric characters.");
                    break;
                case U:
                    va.test(b) || J("The tracking Id should only be of the format UA-NNNNNN-N.")
            }!/^contentGroup[0-9]+$/.test(a) && !/^dimension[0-9]+$/.test(a) || G(b) || J("Expected a string value for field: %s. but found: %s.", a, typeof b);
            !/^metric[0-9]+$/.test(a) || !isNaN(parseFloat(b)) && isFinite(b) || J("Expected a number value for field: %s. but found: %s.", a, typeof b)
        }
    }

    function Ec(a) {
        function b(b) {
            G(a.get(b)) || O("Missing required field '%s' for hit of type '%s'", b, c)
        }
        var c = V(a, Ma);
        switch (c) {
            case "pageview":
                b(Pa);
                break;
            case "event":
                b(fb);
                b(gb);
                break;
            case "social":
                b(ib);
                b(jb);
                b(kb);
                break;
            case "exception":
                b(tb);
                break;
            case "timing":
                if (a.get(Ic)) break;
                b(lb);
                b(mb);
                break;
            case "appview":
                b(pb)
        }
    }

    function od(a, b) {
        N("\nSent beacon:\n" + b + "\n\n");
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
    var Md = function(a) {
            var b = [],
                c = I.cookie.split(";");
            a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
            for (var d = 0; d < c.length; d++) {
                var e = c[d].match(a);
                e && b.push(e[1])
            }
            return b
        },
        pe = function(a, b, c, d, e, f) {
            ld(e) ? (N("Aborting cookie write: User has opted out of tracking."), e = !1) : Wd.test(I.location.hostname) || "/" == c && fe.test(d) ? (N("Aborting cookie write: Prohibited domain."), e = !1) : e = !0;
            if (!e) return !1;
            b && 1200 < b.length && (b = b.substring(0, 1200), F(24));
            c = a + "=" + b + "; path=" + c + "; ";
            f && (c += "expires=" + (new Date((new Date).getTime() +
                f)).toGMTString() + "; ");
            d && "none" != d && (c += "domain=" + d + ";");
            d = I.cookie;
            I.cookie = c;
            return d != I.cookie || Zb(Md(a), b)
        },
        Ae = function(a) {
            return P(a).replace(/\(/g, "%28").replace(/\)/g, "%29")
        },
        fe = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Wd = /(^|\.)doubleclick\.net$/i;
    var hd = function() {
            return ($b || df() ? "https:" : "http:") + "//www.google-analytics.com"
        },
        bc = function(a) {
            this.name = "len";
            this.message = a + "-8192"
        },
        da = function(a, b, c) {
            c = c || Aa;
            if (2036 >= b.length) id(a, b, c), Ia(b);
            else if (8192 >= b.length) u(a, b, c) || te(a, b, c) || id(a, b, c), Ia(b);
            else throw O("Payload size is too large (%s).  Max allowed is %s.", b.length, 8192), fc("len", b.length), new bc(b.length);
        },
        id = function(a, b, c) {
            var d = za(a + "?" + b);
            d.onload = d.onerror = function() {
                d.onload = null;
                d.onerror = null;
                c()
            }
        },
        te = function(a, b, c) {
            var d =
                Q.XMLHttpRequest;
            if (!d) return !1;
            var e = new d;
            if (!("withCredentials" in e)) return !1;
            e.open("POST", a, !0);
            e.withCredentials = !0;
            e.setRequestHeader("Content-Type", "text/plain");
            e.onreadystatechange = function() {
                4 == e.readyState && (c(), e = null)
            };
            e.send(b);
            return !0
        },
        u = function(a, b, c) {
            return Q.navigator.sendBeacon ? Q.navigator.sendBeacon(a, b) ? (c(), !0) : !1 : !1
        },
        fc = function(a, b, c) {
            O("Error: type=%s method=%s message=%s account=%s", arguments);
            if (!(1 <= 100 * Math.random() || ld("?"))) {
                var d = ["t=error", "_e=" + a, "_v=j43d", "sr=1"];
                b && d.push("_f=" + b);
                c && d.push("_m=" + P(c.substring(0, 100)));
                d.push("aip=1");
                d.push("z=" + ae());
                id(hd() + "/collect", d.join("&"), Aa)
            }
        };
    var h = function(a) {
        var b = Q.gaData = Q.gaData || {};
        return b[a] = b[a] || {}
    };
    var gc = function() {
        this.m = []
    };
    gc.prototype.add = function(a) {
        this.m.push(a)
    };
    gc.prototype.H = function(a) {
        L("\nExecuting " + this.m.length + " filters:");
        try {
            for (var b = 0; b < this.m.length; b++) {
                L("  filter[" + b + "]: " + this.m[b]);
                var c = a.get(this.m[b]);
                c && t(c) ? c.call(Q, a) : L("  Skipping (no function found.)")
            }
        } catch (d) {
            L("Aborted execution due to exception: " + d)
        }
        b = a.get(Nb);
        b != Aa && t(b) && (L("Manually firing callback"), a.set(Nb, Aa, !0), setTimeout(b, 10))
    };

    function hc(a) {
        if (100 != a.get(Db) && ic(V(a, R)) % 1E4 >= 100 * jc(a, Db)) throw N("User has been sampled out. Aborting hit."), "abort";
    }

    function kc(a) {
        if (ld(V(a, U))) throw N("User has opted out of tracking. Aborting hit."), "abort";
    }

    function lc() {
        var a = I.location.protocol;
        if ("http:" != a && "https:" != a) throw N("Unallowed document protocol. Aborting hit."), "abort";
    }

    function mc(a) {
        try {
            Q.navigator.sendBeacon ? F(42) : Q.XMLHttpRequest && "withCredentials" in new Q.XMLHttpRequest && F(40)
        } catch (c) {}
        a.set(oc, cf(a), !0);
        a.set(md, jc(a, md) + 1);
        var b = [];
        Ka.map(function(c, d) {
            if (d.i) {
                var e = a.get(c);
                void 0 != e && e != d.defaultValue && ("boolean" == typeof e && (e *= 1), b.push(d.i + "=" + P("" + e)))
            }
        });
        b.push("z=" + be());
        a.set(Na, b.join("&"), !0)
    }

    function pc(a) {
        var b = V(a, ob) || hd() + "/collect",
            c = V(a, ha);
        !c && a.get(Oe) && (c = "beacon");
        if (c) {
            var d = V(a, Na),
                e = a.get(Nb);
            8192 < d.length && O("Payload size is too large (%s).  Max allowed is %s.", d.length, 8192);
            e = e || Aa;
            N("Sending hit with transport method %s", c);
            "image" == c ? (id(b, d, e), Ia(d)) : "xhr" == c && te(b, d, e) ? Ia(d) : "beacon" == c && u(b, d, e) ? Ia(d) : (N("Transport Method, %s, is not supported, falling back to default method.", c), da(b, d, e))
        } else da(b, V(a, Na), a.get(Nb));
        b = a.get(U);
        b = h(b);
        c = b.hitcount;
        b.hitcount = c ?
            c + 1 : 1;
        b = a.get(U);
        delete h(b).pending_experiments;
        a.set(Nb, Aa, !0)
    }

    function td(a) {
        (Q.gaData = Q.gaData || {}).expId && a.set(zd, (Q.gaData = Q.gaData || {}).expId);
        (Q.gaData = Q.gaData || {}).expVar && a.set(Ad, (Q.gaData = Q.gaData || {}).expVar);
        var b;
        var c = a.get(U);
        if (c = h(c).pending_experiments) {
            var d = [];
            for (b in c) c.hasOwnProperty(b) && c[b] && d.push(encodeURIComponent(b) + "." + encodeURIComponent(c[b]));
            b = d.join("!")
        } else b = void 0;
        b && a.set(m, b, !0)
    }

    function nc(a) {
        Ec(a)
    }

    function Ud() {
        if (Q.navigator && "preview" == Q.navigator.loadPurpose) throw N("Navigator in preview mode. Aborting hit."), "abort";
    }

    function ve(a) {
        var b = Q.gaDevIds;
        ga(b) && 0 != b.length && a.set("&did", b.join(","), !0)
    }

    function ya(a) {
        if (!a.get(U)) throw O("Tracking ID not set. Aborting hit."), "abort";
    };
    var ae = function() {
            return Math.round(2147483647 * Math.random())
        },
        be = function() {
            try {
                var a = new Uint32Array(1);
                Q.crypto.getRandomValues(a);
                return a[0] & 2147483647
            } catch (b) {
                return ae()
            }
        };

    function qc(a) {
        var b = jc(a, rc);
        500 <= b && (F(15), N("Exceeded maximum number of hits for this page. Try reducing the number of hits being sent."));
        var c = V(a, Ma);
        if ("transaction" != c && "item" != c) {
            var c = jc(a, uc),
                d = (new Date).getTime(),
                e = jc(a, vc);
            0 == e && a.set(vc, d);
            e = Math.round(2 * (d - e) / 1E3);
            0 < e && (c = Math.min(c + e, 20), a.set(vc, d));
            if (0 >= c) throw N("Exceeded rate limit for sending hits. Aborting hit."), "abort";
            a.set(uc, --c)
        }
        a.set(rc, ++b)
    };
    var wc = function() {
            this.data = new ef;
            this.data.debug = !0
        },
        Ka = new ef,
        xc = [];
    wc.prototype.get = function(a) {
        var b = yc(a),
            c = this.data.get(a);
        b && void 0 == c && (c = t(b.defaultValue) ? b.defaultValue() : b.defaultValue);
        return b && b.v ? b.v(this, a, c) : c
    };
    var V = function(a, b) {
            var c = a.get(b);
            return void 0 == c ? "" : "" + c
        },
        jc = function(a, b) {
            var c = a.get(b);
            return void 0 == c || "" === c ? 0 : 1 * c
        };
    wc.prototype.set = function(a, b, c) {
        if (a)
            if ("object" == typeof a)
                for (var d in a) a.hasOwnProperty(d) && zc(this, d, a[d], c);
            else zc(this, a, b, c)
    };
    var zc = function(a, b, c, d) {
            La(b, c);
            var e = yc(b);
            e && e.w ? e.w(a, b, c, d) : a.data.set(b, c, d);
            e || N("Set called on unknown field: %s.", b)
        },
        Ac = function(a, b, c, d, e) {
            this.name = a;
            this.i = b;
            this.v = d;
            this.w = e;
            this.defaultValue = c
        },
        yc = function(a) {
            var b = Ka.get(a);
            if (!b)
                for (var c = 0; c < xc.length; c++) {
                    var d = xc[c],
                        e = d[0].exec(a);
                    if (e) {
                        L("Generating new model field for name: " + a);
                        b = d[1](e);
                        Ka.set(b.name, b);
                        break
                    }
                }
            return b
        },
        kd = function(a) {
            var b;
            Ka.map(function(c, d) {
                d.i == a && (b = d)
            });
            return b && b.name
        },
        W = function(a, b, c, d, e) {
            a = new Ac(a,
                b, c, d, e);
            Ka.set(a.name, a);
            return a.name
        },
        Bc = function(a, b) {
            xc.push([new RegExp("^" + a + "$"), b])
        },
        X = function(a, b, c) {
            return W(a, b, c, void 0, Cc)
        },
        Cc = function(a, b) {
            O("Ignored attempt to update read-only property: " + b)
        };
    var Fc = G(window.GoogleAnalyticsObject) && xa(window.GoogleAnalyticsObject) || "ga",
        $b = !1,
        Gc = X("apiVersion", "v"),
        Hc = X("clientVersion", "_v"),
        Fb = W("anonymizeIp", "aip"),
        yb = W("adSenseId", "a"),
        Ma = W("hitType", "t"),
        Nb = W("hitCallback"),
        Na = W("hitPayload"),
        Gb = W("nonInteraction", "ni"),
        Pd = W("currencyCode", "cu");
    W("dataSource", "ds");
    var Oe = W("useBeacon", void 0, !1),
        ha = W("transport"),
        Hb = W("sessionControl", "sc", "");
    W("sessionGroup", "sg");
    var zb = W("queueTime", "qt"),
        md = W("_s", "_s"),
        Oa = W("screenName", "cd"),
        Pa = W("location", "dl", ""),
        Qa = W("referrer", "dr"),
        Ra = W("page", "dp", ""),
        Sa = W("hostname", "dh"),
        Ta = W("language", "ul"),
        Ua = W("encoding", "de"),
        Va = W("title", "dt", function() {
            return I.title || void 0
        });
    Bc("contentGroup([0-9]+)", function(a) {
        return new Ac(a[0], "cg" + a[1])
    });
    var Wa = W("screenColors", "sd"),
        Xa = W("screenResolution", "sr"),
        Ya = W("viewportSize", "vp"),
        Ib = W("javaEnabled", "je"),
        Za = W("flashVersion", "fl"),
        $a = W("campaignId", "ci"),
        ab = W("campaignName", "cn"),
        bb = W("campaignSource", "cs"),
        cb = W("campaignMedium", "cm"),
        db = W("campaignKeyword", "ck"),
        eb = W("campaignContent", "cc"),
        fb = W("eventCategory", "ec"),
        gb = W("eventAction", "ea"),
        hb = W("eventLabel", "el"),
        Ab = W("eventValue", "ev"),
        ib = W("socialNetwork", "sn"),
        jb = W("socialAction", "sa"),
        kb = W("socialTarget", "st"),
        Ic = W("l1", "plt"),
        Jc = W("l2",
            "pdt"),
        Kc = W("l3", "dns"),
        Lc = W("l4", "rrt"),
        Mc = W("l5", "srt"),
        Nc = W("l6", "tcp"),
        Oc = W("l7", "dit"),
        Pc = W("l8", "clt"),
        lb = W("timingCategory", "utc"),
        mb = W("timingVar", "utv"),
        nb = W("timingLabel", "utl"),
        Bb = W("timingValue", "utt"),
        pb = W("appName", "an"),
        qb = W("appVersion", "av", ""),
        rb = W("appId", "aid", ""),
        sb = W("appInstallerId", "aiid", ""),
        tb = W("exDescription", "exd"),
        Jb = W("exFatal", "exf"),
        zd = W("expId", "xid"),
        Ad = W("expVar", "xvar"),
        m = W("exp", "exp"),
        Dd = W("_utma", "_utma"),
        Ed = W("_utmz", "_utmz"),
        Fd = W("_utmht", "_utmht"),
        rc = W("_hc",
            void 0, 0),
        vc = W("_ti", void 0, 0),
        uc = W("_to", void 0, 20);
    Bc("dimension([0-9]+)", function(a) {
        return new Ac(a[0], "cd" + a[1])
    });
    Bc("metric([0-9]+)", function(a) {
        return new Ac(a[0], "cm" + a[1])
    });
    W("linkerParam", void 0, void 0, nd, Cc);
    var oc = W("usage", "_u"),
        af = W("_um");
    W("forceSSL", void 0, void 0, function() {
        return $b
    }, function(a, b, c) {
        F(34);
        $b = !!c
    });
    var Zd = W("_j1", "jid");
    Bc("\\&(.*)", function(a) {
        var b = new Ac(a[0], a[1]),
            c = kd(a[0].substring(1));
        c && (L("Alias created: " + a[0] + " -> " + c), b.v = function(a) {
            return a.get(c)
        }, b.w = function(a, b, f, ea) {
            a.set(c, f, ea)
        }, b.i = void 0);
        return b
    });
    var Ob = X("_oot"),
        Vd = W("previewTask"),
        Pb = W("checkProtocolTask"),
        xd = W("validationTask"),
        Qb = W("checkStorageTask"),
        Gd = W("historyImportTask"),
        Rb = W("samplerTask"),
        Tb = W("_rlt"),
        Ub = W("buildHitTask"),
        Vb = W("sendHitTask"),
        Hd = W("ceTask"),
        we = W("devIdTask"),
        oe = W("timingTask"),
        Ce = W("displayFeaturesTask"),
        T = X("name"),
        R = X("clientId", "cid"),
        n = X("clientIdTime"),
        xe = W("userId", "uid"),
        U = X("trackingId", "tid"),
        ub = X("cookieName", void 0, "_ga"),
        S = X("cookieDomain"),
        vb = X("cookiePath", void 0, "/"),
        Cb = X("cookieExpires", void 0, 63072E3),
        wb = X("legacyCookieDomain"),
        Id = X("legacyHistoryImport", void 0, !0),
        xb = X("storage", void 0, "cookie"),
        Kb = X("allowLinker", void 0, !1),
        Lb = X("allowAnchor", void 0, !0),
        Db = X("sampleRate", "sf", 100),
        Eb = X("siteSpeedSampleRate", void 0, 1),
        Mb = X("alwaysSendReferrer", void 0, !1),
        ac = [T, U, R, n, xe, ub, S, vb, Cb, wb, Id, Kb, Lb, Db, Eb, Mb, xb],
        ob = W("transportUrl"),
        De = W("_r", "_r");

    function Y(a, b, c, d) {
        b[a] = function() {
            try {
                return d && F(d), c.apply(this, arguments)
            } catch (b) {
                throw fc("exc", a, b && b.name), b;
            }
        }
    };
    var Ie = function() {
            this.Z = 1E4;
            this.ja = void 0;
            this.fa = !1;
            this.ia = 1
        },
        ye = function() {
            var a = new Ie,
                b;
            if (a.ja && a.fa) return 0;
            a.fa = !0;
            if (0 == a.Z) return 0;
            void 0 === b && (b = be());
            return 0 == b % a.Z ? Math.floor(b / a.Z) % a.ia + 1 : 0
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
            var c = Math.min(jc(a, Eb), 100);
            if (ic(V(a, R)) % 100 >= c) L("Site speed data not sent - visitor sampled out");
            else if (c = {}, qd(c) || rd(c)) {
                var d = c[Ic];
                void 0 == d || Infinity == d || isNaN(d) ? L("Site speed data not sent - unsupported browser") : 0 < d ? (Rc(c, Kc), Rc(c, Nc), Rc(c, Mc), Rc(c, Jc), Rc(c, Lc), Rc(c, Oc), Rc(c, Pc), b(c)) : (L("Site speed data not available - waiting for onload"), Ca(Q, "load", function() {
                    Sc(a, b)
                }, !1))
            } else L("Site speed data not sent - unsupported browser")
        },
        qd = function(a) {
            var b = Q.performance ||
                Q.webkitPerformance,
                b = b && b.timing;
            if (!b) return !1;
            var c = b.navigationStart;
            if (0 == c) return !1;
            a[Ic] = b.loadEventStart - c;
            a[Kc] = b.domainLookupEnd - b.domainLookupStart;
            a[Nc] = b.connectEnd - b.connectStart;
            a[Mc] = b.responseStart - b.requestStart;
            a[Jc] = b.responseEnd - b.responseStart;
            a[Lc] = b.fetchStart - c;
            a[Oc] = b.domInteractive - c;
            a[Pc] = b.domContentLoadedEventStart - c;
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
            a[Ic] = c;
            return !0
        },
        Rc = function(a, b) {
            var c = a[b];
            if (isNaN(c) || Infinity == c || 0 > c) a[b] = void 0
        },
        ze = function(a) {
            return function(b) {
                "pageview" != b.get(Ma) || a.L || (a.L = !0, Sc(b, function(b) {
                    a.send("timing", b)
                }))
            }
        };
    var Tc = !1,
        Yc = function(a) {
            if ("cookie" == V(a, xb)) {
                var b = V(a, ub),
                    c = ie(a),
                    d = Wc(V(a, vb)),
                    e = Xc(V(a, S)),
                    f = 1E3 * jc(a, Cb),
                    ea = V(a, U);
                if ("auto" != e) pe(b, c, d, e, ea, f) && (Tc = !0);
                else {
                    F(32);
                    for (var l = fd(), k = 0; k < l.length; k++)
                        if (e = l[k], a.data.set(S, e), c = ie(a), pe(b, c, d, e, ea, f)) {
                            N("Auto cookieDomain found: %s", e);
                            Tc = !0;
                            return
                        }
                    O("Cookie write failed.");
                    a.data.set(S, "auto")
                }
            }
        },
        Zc = function(a) {
            if ("cookie" == V(a, xb) && !Tc && (Yc(a), !Tc)) throw N("Storage not available. Aborting hit."), "abort";
        },
        Kd = function(a) {
            if (a.get(Id)) {
                var b =
                    V(a, S),
                    c = V(a, wb) || Wb(),
                    d = Jd("__utma", c, b);
                d && (F(19), a.set(Fd, (new Date).getTime(), !0), a.set(Dd, d.T), (b = Jd("__utmz", c, b)) && d.hash == b.hash && a.set(Ed, b.T))
            }
        },
        ie = function(a) {
            var b = Ae(V(a, R)),
                c = Xc(V(a, S)).split(".").length;
            a = Vc(V(a, vb));
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
            return 0 == a.indexOf(".") ? a.substr(1) :
                a
        },
        fd = function() {
            var a = [],
                b = Wb().split(".");
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
        null == a ? c = d = 1 : (c = ic(a), d = ic(H(a, ".") ? a.substring(1) : "." + a));
        for (var e = 0; e < b.length; e++)
            if (b[e].hash == c || b[e].hash == d) return b[e]
    };
    var je = new RegExp(/^https?:\/\/([^\/:]+)/),
        ke = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;

    function nd(a) {
        a = a.get(R);
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
    pd.prototype.S = function(a, b) {
        if (a.tagName) {
            if ("a" == a.tagName.toLowerCase()) {
                a.href && (a.href = le(this, a.href, b));
                return
            }
            if ("form" == a.tagName.toLowerCase()) return me(this, a)
        }
        if ("string" == typeof a) return le(this, a, b);
        O("Unknown Object passed to linker:decorate %s", a)
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
                    N("Linker decorating form: %s", b);
                    var c = a.target.get("linkerParam").split("=")[1];
                    if ("get" == b.method.toLowerCase()) {
                        for (var d = b.childNodes || [], e = 0; e < d.length; e++)
                            if ("_ga" == d[e].name) {
                                d[e].setAttribute("value",
                                    c);
                                return
                            }
                        d = I.createElement("input");
                        d.setAttribute("type", "hidden");
                        d.setAttribute("name", "_ga");
                        d.setAttribute("value", c);
                        b.appendChild(d)
                    } else "post" == b.method.toLowerCase() ? b.action = le(a, b.action) : O("Unknown form method %s on %s", b.method, b)
                } else O("An action is required for the linker to work.")
        };
    pd.prototype.U = function(a, b, c) {
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
                "http:" != d.protocol && "https:" != d.protocol || !ne(a, d.hostname || "") || (d.href && (d.href = le(e, d.href, b)), N("Link decorated: " + d.href))
            } catch (v) {
                F(26)
            }
        }
        var e = this;
        this.X || (this.X = !0, Ca(I, "mousedown", d, !1), Ca(I, "keyup", d, !1));
        if (c) {
            c = function(b) {
                b = b || Q.event;
                if ((b = b.target || b.srcElement) && b.action) {
                    var c = b.action.match(je);
                    c && ne(a, c[1]) && me(e, b)
                }
            };
            for (var f = 0; f < I.forms.length; f++) Ca(I.forms[f], "submit", c)
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
            this.Y = Zd;
            this.ca = b;
            (b = c) || (b = (b = V(a, T)) && "t0" != b ? Pe.test(b) ? "_gat_" + Ae(V(a, U)) : "_gat_" + Ae(b) : "_gat");
            this.aa = b
        },
        Le = function(a, b) {
            var c = b.get(Ub);
            b.set(Ub, function(b) {
                Je(a, b);
                var d = c(b);
                Ke(a, b);
                return d
            });
            var d = b.get(Vb);
            b.set(Vb, function(b) {
                var c = d(b);
                Ee(a, b);
                return c
            })
        },
        Je = function(a, b) {
            b.get(a.Y) ? J("Join id already set") : "1" == Md(a.aa)[0] ? b.set(a.Y, "", !0) : b.set(a.Y, "" + ae(), !0)
        },
        Ke = function(a, b) {
            b.get(a.Y) && (N("Setting throttling cookie: %s", a.aa), pe(a.aa, "1", b.get(vb), b.get(S),
                b.get(U), 6E5))
        },
        Ee = function(a, b) {
            if (b.get(a.Y)) {
                var c = new ef,
                    d = function(a) {
                        yc(a).i && c.set(yc(a).i, b.get(a))
                    };
                d(Gc);
                d(Hc);
                d(U);
                d(R);
                d(xe);
                d(a.Y);
                c.set(yc(oc).i, cf(b));
                var e = a.ca;
                c.map(function(a, b) {
                    e += P(a) + "=";
                    e += P("" + b) + "&"
                });
                e += "z=" + ae();
                od(c, e);
                za(e);
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
            b[ub] && (d = Ae(b[ub]));
            d = new Fe(c, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", d);
            Le(d, c);
            c.set("dcLoaded", !0)
        }
    };
    var Me = function(a) {
        if (!a.get("dcLoaded") && "cookie" == a.get(xb)) {
            bf(a, 51);
            var b = new Fe(a);
            Je(b, a);
            Ke(b, a);
            a.get(b.Y) && (a.set(De, 1, !0), a.set(ob, hd() + "/r/collect", !0))
        }
    };
    var He = function() {
        var a = Q.gaGlobal = Q.gaGlobal || {};
        return a.hid = a.hid || ae()
    };
    var Nd, Od = function(a, b, c) {
        if (!Nd) {
            var d;
            d = I.location.hash;
            var e = Q.name,
                f = /^#?gaso=([^&]*)/;
            if (e = (d = (d = d && d.match(f) || e && e.match(f)) ? d[1] : Md("GASO")[0] || "") && d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) pe("GASO", "" + d, c, b, a, 0), window._udo || (window._udo = b), window._utcp || (window._utcp = c), a = e[1], Ea("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + ae(), "_gasojs");
            Nd = !0
        }
    };
    var va = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
        ad = function(a) {
            function b(a, b) {
                d.a.data.set(a, b)
            }

            function c(a, c) {
                b(a, c);
                d.filters.add(a)
            }
            var d = this;
            this.a = new wc;
            this.filters = new gc;
            L("Initializing tracker");
            b(T, a[T]);
            b(U, xa(a[U]));
            b(ub, a[ub]);
            b(S, a[S] || Wb());
            b(vb, a[vb]);
            b(Cb, a[Cb]);
            b(wb, a[wb]);
            b(Id, a[Id]);
            b(Kb, a[Kb]);
            b(Lb, a[Lb]);
            b(Db, a[Db]);
            b(Eb, a[Eb]);
            b(Mb, a[Mb]);
            b(xb, a[xb]);
            b(xe, a[xe]);
            b(n, a[n]);
            b(Gc, 1);
            b(Hc, "j43d");
            c(Ob, kc);
            c(Vd, Ud);
            c(Pb, lc);
            c(xd, ya);
            c(Qb, Zc);
            c(Gd, Kd);
            c(Rb, hc);
            c(Tb, qc);
            c(Hd, td);
            c(we, ve);
            c(Ce, Me);
            c(Ub, mc);
            c("_dt", nc);
            c(Vb, pc);
            c(oe, ze(this));
            vd(this.a, a[R]);
            wd(this.a);
            this.a.set(yb, He());
            Od(this.a.get(U), this.a.get(S), this.a.get(vb));
            Td(a);
            L("Initialization complete\n\n")
        },
        vd = function(a, b) {
            if ("cookie" == V(a, xb)) {
                Tc = !1;
                var c;
                b: {
                    var d = Md(V(a, ub));
                    if (d && !(1 > d.length)) {
                        c = [];
                        for (var e = 0; e < d.length; e++) {
                            var f;
                            f = d[e].split(".");
                            var ea = f.shift();
                            ("GA1" == ea || "1" == ea) && 1 < f.length ? (ea = f.shift().split("-"), 1 == ea.length && (ea[1] = "1"), ea[0] *= 1, ea[1] *= 1, f = {
                                K: ea,
                                M: f.join(".")
                            }) : (J("Unknown cookie version: " +
                                ea), f = void 0);
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
                            d = Xc(V(a, S)).split(".").length;
                            c = sd(c, d, 0);
                            if (1 == c.length) {
                                c = c[0].M;
                                break b
                            }
                            d = Vc(V(a, vb));
                            c = sd(c, d, 1);
                            c = c[0] && c[0].M;
                            break b
                        }
                    }
                    c = void 0
                }
                c || (c = V(a, S), d = V(a, wb) || Wb(), c = Jd("__utma", d, c), void 0 != c ? (F(10), d = c.ea[1] + "." + c.ea[2], Ga("Loaded legacy client id from utma cookie: %s (hash=%s)", d, c.hash), c = d) : c = void 0);
                c && (a.data.set(R, c), Tc = !0)
            }
            c = a.get(Lb);
            if (c = (c = I.location[c ? "href" : "search"].match("(?:&|#|\\?)" +
                    P("_ga").replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == c.length ? c[1] : "") a.get(Kb) ? (e = c.indexOf("."), -1 == e ? (J("Invalid linker parameter format: " + c), F(22)) : (f = c.substring(e + 1), "1" != c.substring(0, e) ? (J("Unrecognized linker parameter version: " + c), F(22)) : (e = f.indexOf("."), -1 == e ? (J("Invalid linker parameter v1 payload: " + c), F(22)) : (d = f.substring(0, e), e = f.substring(e + 1), d != ud(e, 0) && d != ud(e, -1) && d != ud(e, -2) ? (J("Bad or expired linker parameter hash: " + c), F(23)) : (Ga("Loaded linker parameter: " +
                c), F(11), a.data.set(R, e)))))) : (J("Linker disabled. Ignoring linker parameter: " + c), F(21));
            b && (Ga("Used client Id from constructor."), F(9), a.data.set(R, P(b)));
            if (!a.get(R))
                if (c = (c = Q.gaGlobal && Q.gaGlobal.vid) && -1 != c.search(/^(?:utma\.)?\d+\.\d+$/) ? c : void 0) Ga("New visitor. Copying new clientId"), F(17), a.data.set(R, c);
                else {
                    Ga("New visitor. Generating new clientId");
                    F(8);
                    c = Q.navigator.userAgent + (I.cookie ? I.cookie : "") + (I.referrer ? I.referrer : "");
                    d = c.length;
                    for (e = Q.history.length; 0 < e;) c += e-- ^ d++;
                    a.data.set(R, [ae() ^ ic(c) & 2147483647, Math.round((new Date).getTime() / 1E3)].join("."))
                }
            Yc(a)
        },
        wd = function(a) {
            var b = Q.navigator,
                c = Q.screen,
                d = I.location;
            a.set(Qa, Xb(a.get(Mb)));
            if (d) {
                var e = d.pathname || "";
                "/" != e.charAt(0) && (F(31), e = "/" + e);
                a.set(Pa, d.protocol + "//" + d.hostname + e + d.search)
            }
            c && a.set(Xa, c.width + "x" + c.height);
            c && a.set(Wa, c.colorDepth + "-bit");
            var c = I.documentElement,
                f = (e = I.body) && e.clientWidth && e.clientHeight,
                ea = [];
            c && c.clientWidth && c.clientHeight && ("CSS1Compat" === I.compatMode || !f) ? ea = [c.clientWidth, c.clientHeight] :
                f && (ea = [e.clientWidth, e.clientHeight]);
            c = 0 >= ea[0] || 0 >= ea[1] ? "" : ea.join("x");
            a.set(Ya, c);
            a.set(Za, Qc());
            a.set(Ua, I.characterSet || I.charset);
            a.set(Ib, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1);
            a.set(Ta, (b && (b.language || b.browserLanguage) || "").toLowerCase());
            if (d && a.get(Lb) && (b = I.location.hash)) {
                b = b.split(/[?&#]+/);
                d = [];
                for (c = 0; c < b.length; ++c)(H(b[c], "utm_id") || H(b[c], "utm_campaign") || H(b[c], "utm_source") || H(b[c], "utm_medium") || H(b[c], "utm_term") || H(b[c], "utm_content") || H(b[c], "gclid") ||
                    H(b[c], "dclid") || H(b[c], "gclsrc")) && d.push(b[c]);
                0 < d.length && (b = "#" + d.join("&"), a.set(Pa, a.get(Pa) + b))
            }
        };
    ad.prototype.get = function(a) {
        G(a) || O("Please specify a field name to get it's value.");
        return this.a.get(a)
    };
    ad.prototype.set = function(a, b) {
        this.a.set(a, b)
    };
    var bd = {
        pageview: [Ra],
        event: [fb, gb, hb, Ab],
        social: [ib, jb, kb],
        timing: [lb, mb, Bb, nb]
    };
    ad.prototype.send = function(a) {
        L("Send start: " + (0 == Z.h ? -1 : (new Date).getTime() - Z.h));
        if (1 > arguments.length) O("No hit type specified. Aborting hit.");
        else {
            var b, c;
            "string" === typeof arguments[0] ? (b = arguments[0], c = [].slice.call(arguments, 1)) : (b = arguments[0] && arguments[0][Ma], c = arguments);
            b ? (c = Yb(bd[b] || [], c), c[Ma] = b, this.a.set(c, void 0, !0), this.filters.H(this.a), L("Send finished: " + (0 == Z.h ? -1 : (new Date).getTime() - Z.h)), this.a.data.u = {}) : O("No hit type specified. Aborting hit.")
        }
    };
    ad.prototype.pa = function(a, b) {
        var c = this;
        x(a, c, b) || (y(a, function() {
            x(a, c, b)
        }), z(String(c.get(T)), a, void 0, b, !0))
    };
    var cd = function(a) {
            if ("prerender" == I.visibilityState) return !1;
            a();
            return !0
        },
        A = function(a) {
            if (!cd(a)) {
                F(16);
                var b = !1,
                    c = function() {
                        if (!b && cd(a)) {
                            b = !0;
                            var d = c,
                                e = I;
                            e.removeEventListener ? e.removeEventListener("visibilitychange", d, !1) : e.detachEvent && e.detachEvent("onvisibilitychange", d)
                        }
                    };
                Ca(I, "visibilitychange", c)
            }
        };
    var qe = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
        se = function(a) {
            this.G = a;
            if (t(a[0])) this.s = a[0];
            else {
                var b = qe.exec(a[0]);
                null != b && 4 == b.length && (this.c = b[1] || "t0", this.I = b[2] || "", this.A = b[3], this.b = [].slice.call(a, 1), this.I || (this.D = "create" == this.A, this.g = "require" == this.A, this.f = "provide" == this.A, this.$ = "remove" == this.A), this.g && (3 <= this.b.length ? (this.da = this.b[1], this.ba = this.b[2]) : this.b[1] && (G(this.b[1]) ? this.da = this.b[1] : this.ba = this.b[1])));
                var b = a[1],
                    c = a[2];
                if (!this.A) throw O("Invalid command: " + a),
                    "abort";
                if (this.g && (!G(b) || "" == b)) throw O("Invalid require command.", a), "abort";
                if (this.f && (!G(b) || "" == b || !t(c))) throw O("Invalid provide command.", a), "abort";
                if (re(this.c) || re(this.I)) throw O('Target name and plugin names should not contain "." or ":"'), "abort";
                if (this.f && "t0" != this.c) throw O("Provide command should not be preceeded by a tracker name."), "abort";
            }
        };

    function re(a) {
        return 0 <= a.indexOf(".") || 0 <= a.indexOf(":")
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
            var d = b == Z ? Fc : b.get(T),
                e = Re.get(a);
            if (!t(e)) return N("Waiting on require of %s to be fulfilled.", a), !1;
            b.plugins_ = b.plugins_ || new ef;
            if (b.plugins_.get(a)) return O("Command ignored. Plugin %s has already been required on tracker %s.", a, d), !0;
            b.plugins_.set(a, new e(b, c || {}));
            N("Plugin %s intialized on tracker %s.", a, d);
            return !0
        },
        z = function(a, b, c, d, e) {
            if (!t(Re.get(b)) && !Te.get(b)) {
                Se.hasOwnProperty(b) && F(Se[b]);
                if (p.test(b)) {
                    F(52);
                    a = Z.O(a);
                    if (!a) return !0;
                    c = d || {};
                    d = {
                        id: b,
                        F: c.dataLayer ||
                            "dataLayer",
                        la: !!a.get("anonymizeIp"),
                        qa: e,
                        J: !1
                    };
                    a.get("&gtm") == b && (d.J = !0, O("Infinite loop detected. Tracker trying to load the container (%s) that created it. Ignoring require statement.", b));
                    var f = String(a.get("name"));
                    "t0" != f && (d.target = f);
                    ld(String(a.get("trackingId"))) || (d.ma = String(a.get(R)), d.na = Number(a.get(n)), a = c.palindrome ? r : q, a = (a = I.cookie.replace(/^|(; +)/g, ";").match(a)) ? a.sort().join("").substring(1) : void 0, d.oa = a);
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
                c ? (c && 0 <= c.indexOf("/") || (c = ($b || df() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + c), d = Ue(c), a = d.protocol, c = I.location.protocol, ("https:" == a || a == c || ("http:" != a ? 0 : "http:" == c)) && C(d) ? (N("Loading resource for plugin: " + b), Ea(d.url, void 0, e), Te.set(b, !0)) : O("Error loading resource for plugin %s: Refusing to load url: %s", b, d.url)) : N("No plugin url set for %s.", b)
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
            if (H(a.url, "https://www.google-analytics.com/gtm/js?id=")) return !0;
            if (a.query || 0 <= a.url.indexOf("?") || 0 <= a.path.indexOf("://")) return !1;
            if (a.host == b.host && a.port == b.port) return !0;
            b = "http:" == a.protocol ? 80 : 443;
            return "www.google-analytics.com" == a.host && (a.port || b) == b && H(a.path, "/plugins/") ? !0 : !1
        },
        Ue = function(a) {
            function b(a) {
                var b = (a.hostname || "").split(":")[0].toLowerCase(),
                    c = (a.protocol || "").toLowerCase(),
                    c = 1 * a.port || ("http:" == c ? 80 : "https:" == c ? 443 : "");
                a = a.pathname || "";
                H(a, "/") || (a = "/" + a);
                return [b, "" + c, a]
            }
            var c = I.createElement("a");
            c.href = I.location.href;
            var d = (c.protocol || "").toLowerCase(),
                e = b(c),
                f = c.search || "",
                ea = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
            H(a, "//") ? a = d + a : H(a, "/") ? a = ea + a : !a || H(a, "?") ? a = ea + e[2] + (a || f) : 0 > a.split("/")[0].indexOf(":") && (a = ea + e[2].substring(0, e[2].lastIndexOf("/")) + "/" + a);
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
    var jf = {
        ka: function() {
            jf.j = []
        }
    };
    jf.ka();
    jf.H = function(a) {
        var b = jf.N.apply(jf, arguments),
            b = jf.j.concat(b);
        for (jf.j = []; 0 < b.length;) {
            var c;
            c = b[0];
            if (c.s) c = "ga(Function)";
            else {
                for (var d = [], e = 0; c.G && e < c.G.length; e++) d.push(Fa(c.G[e]));
                c = "ga(" + d.join(", ") + ")"
            }
            dd("Running command: " + c);
            c = jf.R(b[0]);
            ge();
            if (c) break;
            b.shift();
            if (0 < jf.j.length) break
        }
        jf.j = jf.j.concat(b)
    };
    jf.N = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) try {
            var d = new se(arguments[c]);
            d.f ? (D(d.b[0], d.b[1]), N("Registered new plugin: ga(provide, %s, Function)", d.b[0])) : (d.g && (d.ha = z(d.c, d.b[0], d.da, d.ba)), b.push(d))
        } catch (l) {
            var e = arguments[c],
                f = d,
                ea = l;
            ga(e) || t(e) ? ga(e) && !G(e[0]) ? O("First element of command array is not a string: %s", e) : f && f.g ? O("Invalid require command: %s", e) : O("Command failure: %s", ea) : O("Command is not an array or function: %s", ea)
        }
        return b
    };
    jf.R = function(a) {
        try {
            if (a.s) a.s.call(Q, Z.O("t0"));
            else {
                var b = a.c == Fc ? Z : Z.O(a.c);
                if (a.D) "t0" != a.c ? J('Command ignored. Use "create" instead of "%s.create"', a.c) : Z.create.apply(Z, a.b);
                else if (a.$) Z.remove(a.c);
                else if (b)
                    if (a.g) {
                        if (a.ha && (a.ha = z(a.c, a.b[0], a.da, a.ba)), !x(a.b[0], b, a.ba)) return !0
                    } else if (a.I) {
                    var c = a.I,
                        d = a.A,
                        e = a.b,
                        f;
                    b.plugins_ || O("Tracker does not have any plugins.");
                    b.plugins_.get(c) || O("Tracker does not have %s plugin required.", c);
                    f = b.plugins_.get(c);
                    f[d] || O("Plugin %s does not have method %s.",
                        c, d);
                    f[d].apply(f, e)
                } else b[a.A].apply(b, a.b);
                else N("Command ignored. Unknown target: " + b)
            }
        } catch (ea) {
            a.s ? O("Exception thrown from pushed function: %s", ea) : a.g ? O("Error creating a plugin instance: %s", a.G) : a.f ? O("Error registering a plugin: %s", a.G) : a.$ ? O("Error removing tracker: %s", a.G) : a.I ? O("Error calling a plugin method: %s", a.G) : O('Called method "%s" threw exception: %s', a.A, ea)
        }
    };
    var Z = function(a) {
        dd("Executing Google Analytics commands.");
        F(1);
        jf.H.apply(jf, [arguments]);
        ge()
    };
    Z.o = {};
    Z.C = [];
    Z.h = 0;
    Z.answer = 42;
    var gd = [U, S, T];
    Z.create = function(a) {
        var b = Yb(gd, [].slice.call(arguments));
        b[T] || (b[T] = "t0");
        var c = "" + b[T];
        if (Z.o[c]) return J("Ignoring create request for duplicate tracking name."), Z.o[c];
        N("Creating new tracker: " + c);
        b = new ad(b);
        Z.o[c] = b;
        Z.C.push(b);
        return b
    };
    Z.remove = function(a) {
        for (var b = 0; b < Z.C.length; b++)
            if (Z.C[b].get(T) == a) {
                N("Removing tracker: " + a);
                Z.C.splice(b, 1);
                Z.o[a] = null;
                return
            }
        O("Tracker does not exist.")
    };
    Z.O = function(a) {
        return Z.o[a]
    };
    Z.getAll = function() {
        return Z.C.slice(0)
    };
    Z.P = function() {
        dd("Initializing Google Analytics.");
        "ga" != Fc && F(49);
        var a = Q[Fc];
        if (a && 42 == a.answer) J("Tracking script already loaded. Abandoning initialization.");
        else {
            a && 42 != a.answer && !a.q && J("An existing object with the name '%s' found. Unexpected results can occur because of this.", Fc);
            Z.h = a && a.l;
            Z.loaded = !0;
            var b = Q[Fc] = Z;
            Y("create", b, b.create);
            Y("remove", b, b.remove);
            Y("getByName", b, b.O, 5);
            Y("getAll", b, b.getAll, 6);
            Y("dump", b, b.dump);
            b = ad.prototype;
            Y("get", b, b.get, 7);
            Y("set", b, b.set, 4);
            Y("send",
                b, b.send);
            Y("requireSync", b, b.pa);
            b = wc.prototype;
            Y("get", b, b.get);
            Y("set", b, b.set);
            if (!df() && !$b) {
                a: {
                    for (var b = I.getElementsByTagName("script"), c = 0; c < b.length && 100 > c; c++) {
                        var d = b[c].src;
                        if (d && 0 == d.indexOf("https://www.google-analytics.com/analytics")) {
                            F(33);
                            b = !0;
                            break a
                        }
                    }
                    b = !1
                }
                b && (L("Analytics.js is secure, forcing SSL for all hits."), $b = !0)
            }
            df() || $b || !ye() || (L("Sending all Hits by SSL"), F(36), $b = !0);
            (Q.gaplugins = Q.gaplugins || {}).Linker = pd;
            b = pd.prototype;
            D("linker", pd);
            Y("decorate", b, b.S, 20);
            Y("autoLink",
                b, b.U, 25);
            D("displayfeatures", $d);
            D("adfeatures", $d);
            a = a && a.q;
            ga(a) ? jf.H.apply(Z, a) : F(50)
        }
        ge()
    };
    Z.ga = function() {
        for (var a = Z.getAll(), b = 0; b < a.length; b++) dd("Tracker: " + a[b].get(T)), Ja(a[b].a), ge();
        a = I.cookie;
        dd("Cookie Information");
        for (var a = a.split("; "), b = [
                ["Name", "Domain", "Path", "Value"]
            ], c = 0; c < a.length; c++) {
            var d = a[c].split("="),
                e = d[0],
                d = d[1] || "";
            if (Zb(tc, e)) b.push(Dc(e, d));
            else if ("_ga" == e) {
                var f = "",
                    ea = "/",
                    l = d.split(".")[1];
                l && (l = l.split("-"), f = I.location.hostname.split("."), f = f.slice(f.length - l[0]).join("."), ea += I.location.pathname.split("/").slice(1, l[1] || 1).join("/"));
                b.push([e, f, ea,
                    d
                ])
            } else /^((__utmt)|(_gat))/.test(e) && b.push([e, "", "", d])
        }
        Xd(b);
        ge()
    };
    Z.dump = Z.ga;
    Ga("\n                         _                          _       _   _\n                        | |                        | |     | | (_)\n  __ _  ___   ___   __ _| | ___    __ _ _ __   __ _| |_   _| |_ _  ___ ___\n / _` |/ _ \\ / _ \\ / _` | |/ _ \\  / _` | '_ \\ / _` | | | | | __| |/ __/ __|\n| (_| | (_) | (_) | (_| | |  __/ | (_| | | | | (_| | | |_| | |_| | (__\\__ \\\n \\__, |\\___/ \\___/ \\__, |_|\\___|  \\__,_|_| |_|\\__,_|_|\\__, |\\__|_|\\___|___/\n  __/ |             __/ |                              __/ |\n |___/             |___/                              |___/\n");
    J("Running analytics_debug.js. This script is intended for testing and debugging only.");
    var E = Z.P,
        K = Q[Fc];
    K && K.r ? E() : A(E);
    A(function() {
        jf.H(["provide", "render", Aa])
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