/* Copyright 2011 Google */
window.jstiming.load.tick('jbl');
'use strict';
var aa = " does not look like an IPv4 address.",
    ba = " is not a valid IPv6 address.",
    ca = ' style="direction: ',
    ea = "%1$s",
    ha = "-caption",
    ia = "-content",
    ja = "-disabled",
    ka = "-dropdown",
    la = "//translate.google.com/toolkit/upload?",
    ma = "/translate/uc?ua=dcp&uav=",
    na = "/translate_a/sg?client=t&",
    oa = "/translate_a/single",
    pa = "</div>",
    qa = "</div></div>",
    ra = "</span>",
    sa = '<div class="',
    ta = '<div class="gt-card-expand-wrapper gt-card-collapsed">',
    ua = '<div class="gt-pb-lbl">',
    va = "Android",
    wa = "BUTTON",
    xa = "CSSStyleDeclaration",
    ya = "Clobbering detected",
    za = "Component already rendered",
    k = "DIV",
    Aa = "Edge",
    Ba = "Element",
    Ca = "IFRAME",
    Da = "IMG",
    Ea = "INPUT",
    Fa = "Inconsistent use of percent/permill characters",
    Ga = "Noto Naskh Arabic",
    Ha = "Opera",
    Ia = "POST",
    Ja = "SCRIPT",
    Ka = "SELECT",
    La = "SPAN",
    Ma = "STYLE",
    Na = "StartToEnd",
    Oa = "TEXTAREA",
    Pa = "Too many percent/permill",
    Qa = "Unable to set parent component",
    Ra = "Undefined parameter - ",
    Sa = "Uneven number of arguments",
    Ta = "about:invalid#zClosurez",
    Ua = "absolute",
    Va = "accumulate",
    n = "action",
    Wa = "activedescendant",
    Xa = "all",
    Ya = "all|all",
    Za = "alt-edited",
    $a = "application/x-www-form-urlencoded",
    ab = "aria-activedescendant",
    bb = "array",
    cb = "attributes",
    db = "authuser",
    eb = "auto",
    fb = "beforehide",
    gb = "beforeshow",
    hb = "beforeunload",
    ib = "blur",
    jb = "border-box",
    kb = "business",
    lb = "button",
    mb = "cc-ctr",
    nb = "cc-msg",
    ob = "change",
    pb = "character",
    qb = "checked",
    rb = "clear-outline",
    r = "click",
    sb = "client",
    tb = "collapse",
    ub = "community-promo",
    vb = "complete",
    wb = "compositionend",
    xb = "compositionstart",
    yb = "contextmenu",
    zb = "copy",
    Ab = "data-tooltip",
    Cb = "data-tooltip-align",
    Db = "data-tooltip-contained",
    Eb = "data-tooltip-suspended",
    Fb = "dblclick",
    Gb = "deactivate",
    Hb = "default",
    Ib = "detectSrcUpdated",
    Jb = "direction",
    Kb = "display:none",
    Mb = "earlycancel",
    Nb = "en",
    Ob = "en-us-t-k0-intl",
    Pb = "end",
    Qb = "error",
    Rb = "finish",
    Sb = "focus",
    Tb = "focusin",
    Ub = "focusout",
    Vb = "fr-t-k0-und",
    Wb = "function",
    Xb = "getAttribute",
    Yb = "getElementsByTagName",
    Zb = "getPropertyValue",
    $b = "goog-buttonset-default",
    ac = "goog-flat-button",
    bc = "goog-flat-menu-button",
    cc = "goog-groupmenu-separator",
    dc = "goog-inline-block",
    ec = "goog-inline-block ",
    fc = "goog-menu",
    gc = "goog-menu-button",
    hc = "goog-menuheader",
    ic = "goog-menuitem-emphasize-highlight",
    jc = "goog-menuitem-group",
    kc = "goog-menuseparator",
    lc = "goog-option",
    mc = "goog-option-selected",
    nc = "gt-baf-back",
    oc = "gt-baf-cell",
    pc = "gt-baf-entry-clickable",
    qc = "gt-baf-hl",
    rc = "gt-baf-word-clickable",
    sc = "gt-br-logo-hidden",
    tc = "gt-br-logo-ltr",
    uc = "gt-br-logo-rtl",
    vc = "gt-br-logo-visible",
    wc = "gt-card-collapsed",
    xc = "gt-card-expand-wrapper",
    yc = "gt-card-expanded",
    zc = "gt-card-fadein-wrapper",
    Ac = "gt-card-widen-wrapper",
    Bc = "gt-cd-cl",
    Cc = "gt-input-tool",
    Dc = "gt-is-ld",
    Ec = "gt-related-suggest-message",
    Fc = "gt-res-edit",
    Gc = "gt-res-undo",
    Hc = "gt-rw-div",
    Ic = "gt-spell-correct-message",
    Jc = "gt-src-tools",
    Kc = "gt-src-tools-l",
    Lc = "gt-syn-row",
    Mc = "gt-syn-summary-row",
    Nc = "hasAttribute",
    Oc = "haspopup",
    Pc = "height",
    Qc = "hi-t-k0-qwerty",
    Rc = "hidden",
    Sc = "hide",
    Tc = "highlight",
    Uc = "history",
    Vc = "horizontal",
    Wc = "https://chekhov.withgoogle.com/?utm_source=other&utm_medium=gtranslate&utm_campaign=",
    Xc = "init",
    Yc = "input",
    $c = "inputm",
    ad = 'javascript:""',
    bd = "javascript:void(0)",
    cd = "jfk-bubble-arrow-id",
    dd = "jfk-bubble-closebtn-id",
    ed = "jfk-bubble-content-id",
    fd = "jfk-butterBar-shown",
    gd = "jfk-button-action",
    hd = "jfk-button-img",
    id = "jfk-button-label",
    jd = "jfk-button-narrow",
    kd = "jfk-button-standard",
    ld = "jfk-checkbox-checkmark",
    md = "jfk-tooltip-hide",
    nd = "key",
    od = "keydown",
    pd = "keypress",
    qd = "keyup",
    rd = "label",
    sd = "labelledby",
    td = "languageSelected",
    ud = "latn-002-t-k0-und",
    vd = "left",
    wd = "listbox",
    xd = "ltr",
    yd = "margin",
    zd = "menuitem",
    Ad = "mousedown",
    Bd = "mousemove",
    Cd = "mouseout",
    Dd = "mouseover",
    Ed = "mouseup",
    Fd = "move_offscreen",
    Gd = "msMatchesSelector",
    Hd = "navigate",
    Id = "nodeName",
    Jd = "nodeType",
    Kd = "nonce",
    Ld = "none",
    Md = "number",
    Nd = "object",
    Od = "opacity 1s linear",
    Pd = "option",
    Qd = "orientationchange",
    Rd = "ovfl-xlt-arrow",
    Sd = "paddingLeft",
    Td = "paddingRight",
    Ud = "paste",
    Vd = "pbmUpdated",
    Wd = "play",
    Xd = "position",
    Yd = "px",
    Zd = "radix out of range: ",
    $d = "readystatechange",
    ae = "removeAttribute",
    be = "res-translit",
    ce = "resize",
    de = "result_box",
    ee = "right",
    fe = "role",
    ge = "rtl",
    t = "ru",
    he = "scroll",
    ie = "select",
    je = "select_document",
    ke = "selected",
    le = "selectionchange",
    me = "separator",
    ne = "set",
    oe = "setAttribute",
    pe = "share",
    qe = "short_text",
    re = "shortcut",
    se = "show",
    te = "show-tooltip",
    ue = "sl-sugg-button-container",
    ve = "sound_error",
    we = "sound_finished",
    xe = "sound_interrupted",
    ye = "sound_play_start",
    ze = "source",
    Ae = "source_changed",
    Be = "spelling-correction",
    Ce = "src-translit",
    De = "srcEmphasizeUpdated",
    Ee = "srcLanguageUpdated",
    Fe = "srcSuggestionUpdated",
    Ge = "start",
    He = "staticSrcSuggestionUpdated",
    Ie = "staticTgtSuggestionUpdated",
    Je = "stop_playlist",
    Ke = "string",
    Le = "style",
    Me = "target",
    Ne = "text",
    Oe = "textarea",
    Pe = "textarea-placeholder-input",
    Qe = "tgtEmphasizeUpdated",
    Re = "tgtLanguageUpdated",
    Se = "tick",
    Te = "tlid-frequency-help-icon",
    Ue = "toggle_display",
    Ve = "touchcancel",
    We = "touchend",
    Xe = "touchmove",
    Ye = "touchstart",
    Ze = "trans-listen-button",
    $e = "trans-pb-button-saved",
    af = "trans-target-empty",
    bf = "trans-target-highlight",
    cf = "trans-verified-button-large",
    df = "trans-verified-button-small",
    ef = "transition",
    ff = "translate",
    gf = "translation_changed",
    hf = "true",
    jf = "unhighlight",
    kf = "unload",
    lf = "userInteractionWhileDisabled",
    mf = "vertical",
    nf = "visibility",
    of = "visibilitychange",
    pf = "visible",
    qf = "webapp",
    rf = "webkit",
    sf = "yue-hant-t-i0-und",
    tf = "zh-CN",
    uf = "zh-TW",
    vf = "zh-hant-t-i0-cangjie-1982",
    wf = "zh-hant-t-i0-pinyin",
    xf = "zh-hant-t-i0-und";

function yf() {
    return function (a) {
        return a
    }
}

function u() {
    return function () {}
}

function zf(a) {
    return function (b) {
        this[a] = b
    }
}

function v(a) {
    return function () {
        return this[a]
    }
}

function w(a) {
    return function () {
        return a
    }
}
var x, Af = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    },
    Bf = function (a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: Af(a)
        }
    },
    Cf = function (a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    },
    Df = typeof Object.create == Wb ? Object.create : function (a) {
        var b = u();
        b.prototype = a;
        return new b
    },
    Ef;
if (typeof Object.setPrototypeOf == Wb) Ef = Object.setPrototypeOf;
else {
    var Ff;
    a: {
        var Gf = {
                bk: !0
            },
            Hf = {};
        try {
            Hf.__proto__ = Gf;
            Ff = Hf.bk;
            break a
        } catch (a) {}
        Ff = !1
    }
    Ef = Ff ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a
    } : null
}
var If = Ef,
    Jf = typeof Object.defineProperties == Wb ? Object.defineProperty : function (a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    Kf = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
    Lf = function (a, b) {
        if (b) {
            var c = Kf;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && Jf(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    },
    Mf = function (a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." +
            c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
Lf("String.prototype.endsWith", function (a) {
    return a ? a : function (a, c) {
        var b = Mf(this, a, "endsWith");
        a += "";
        void 0 === c && (c = b.length);
        c = Math.max(0, Math.min(c | 0, b.length));
        for (var e = a.length; 0 < e && 0 < c;)
            if (b[--c] != a[--e]) return !1;
        return 0 >= e
    }
});
Lf("String.prototype.startsWith", function (a) {
    return a ? a : function (a, c) {
        var b = Mf(this, a, "startsWith");
        a += "";
        var e = b.length,
            f = a.length;
        c = Math.max(0, Math.min(c | 0, b.length));
        for (var g = 0; g < f && c < e;)
            if (b[c++] != a[g++]) return !1;
        return g >= f
    }
});
Lf("Math.log10", function (a) {
    return a ? a : function (a) {
        return Math.log(a) / Math.LN10
    }
});
Lf("Array.from", function (a) {
    return a ? a : function (a, c, d) {
        c = null != c ? c : yf();
        var b = [],
            f = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (typeof f == Wb) {
            a = f.call(a);
            for (var g = 0; !(f = a.next()).done;) b.push(c.call(d, f.value, g++))
        } else
            for (f = a.length, g = 0; g < f; g++) b.push(c.call(d, a[g], g));
        return b
    }
});
var Nf = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
Lf("WeakMap", function (a) {
    function b() {}

    function c(a) {
        Nf(a, e) || Jf(a, e, {
            value: new b
        })
    }

    function d(a) {
        var d = Object[a];
        d && (Object[a] = function (a) {
            if (a instanceof b) return a;
            c(a);
            return d(a)
        })
    }
    if (function () {
        if (!a || !Object.seal) return !1;
        try {
            var b = Object.seal({}),
                c = Object.seal({}),
                d = new a([
                    [b, 2],
                    [c, 3]
                ]);
            if (2 != d.get(b) || 3 != d.get(c)) return !1;
            d.delete(b);
            d.set(c, 4);
            return !d.has(b) && 4 == d.get(c)
        } catch (q) {
            return !1
        }
    }()) return a;
    var e = "$jscomp_hidden_" + Math.random();
    d("freeze");
    d("preventExtensions");
    d("seal");
    var f =
            0,
        g = function (a) {
            this.La = (f += Math.random() + 1).toString();
            if (a) {
                a = Bf(a);
                for (var b; !(b = a.next()).done;) b = b.value, this.set(b[0], b[1])
            }
        };
    g.prototype.set = function (a, b) {
        c(a);
        if (!Nf(a, e)) throw Error("WeakMap key fail: " + a);
        a[e][this.La] = b;
        return this
    };
    g.prototype.get = function (a) {
        return Nf(a, e) ? a[e][this.La] : void 0
    };
    g.prototype.has = function (a) {
        return Nf(a, e) && Nf(a[e], this.La)
    };
    g.prototype.delete = function (a) {
        return Nf(a, e) && Nf(a[e], this.La) ? delete a[e][this.La] : !1
    };
    return g
});
var Of = Of || {},
    y = this,
    z = function (a) {
        return void 0 !== a
    },
    Pf = function (a) {
        return typeof a == Ke
    },
    Qf = function (a) {
        return typeof a == Md
    },
    Rf = function (a, b) {
        a = a.split(".");
        var c = y;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)!a.length && z(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    },
    Sf = /^[\w+/_-]+[=]{0,2}$/,
    Tf = null,
    Uf = function (a, b) {
        a = a.split(".");
        b = b || y;
        for (var c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    },
    Vf = u(),
    Wf = function (a) {
        a.Kg =
            void 0;
        a.M = function () {
            return a.Kg ? a.Kg : a.Kg = new a
        }
    },
    Xf = function (a) {
        var b = typeof a;
        if (b == Nd)
            if (a) {
                if (a instanceof Array) return bb;
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return Nd;
                if ("[object Array]" == c || typeof a.length == Md && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return bb;
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return Wb
            } else return "null";
        else if (b == Wb && "undefined" == typeof a.call) return Nd;
        return b
    },
    Yf = function (a) {
        return Xf(a) == bb
    },
    Zf = function (a) {
        var b = Xf(a);
        return b == bb || b == Nd && typeof a.length == Md
    },
    $f = function (a) {
        return Xf(a) == Wb
    },
    ag = function (a) {
        var b = typeof a;
        return b == Nd && null != a || b == Wb
    },
    dg = function (a) {
        return a[bg] || (a[bg] = ++cg)
    },
    bg = "closure_uid_" + (1E9 * Math.random() >>> 0),
    cg = 0,
    eg = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    fg = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments,
                2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    },
    A = function (a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? A = eg : A = fg;
        return A.apply(null, arguments)
    },
    gg = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    },
    hg = Date.now || function () {
        return +new Date
    },
    C = function (a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.w = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Bq = function (a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };
var ig = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, ig);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
C(ig, Error);
ig.prototype.name = "CustomError";
var jg;
var kg = function (a) {
        return a[a.length - 1]
    },
    lg = Array.prototype.indexOf ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
        if (Pf(a)) return Pf(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    D = Array.prototype.forEach ? function (a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = Pf(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    mg = Array.prototype.filter ? function (a, b) {
        return Array.prototype.filter.call(a,
            b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = [], e = 0, f = Pf(a) ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var l = f[g];
                b.call(void 0, l, g, a) && (d[e++] = l)
            }
        return d
    },
    ng = Array.prototype.map ? function (a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = Array(d), f = Pf(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    },
    og = Array.prototype.reduce ? function (a, b, c) {
        return Array.prototype.reduce.call(a, b, c)
    } : function (a, b, c) {
        var d = c;
        D(a, function (c, f) {
            d = b.call(void 0, d, c,
                f, a)
        });
        return d
    },
    pg = Array.prototype.some ? function (a, b) {
        return Array.prototype.some.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = Pf(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    },
    qg = Array.prototype.every ? function (a, b) {
        return Array.prototype.every.call(a, b, void 0)
    } : function (a, b) {
        for (var c = a.length, d = Pf(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a)) return !1;
        return !0
    },
    rg = function (a, b) {
        var c = 0;
        D(a, function (a, e, f) {
                b.call(void 0, a, e, f) && ++c
            },
            void 0);
        return c
    },
    sg = function (a, b) {
        a: {
            for (var c = a.length, d = Pf(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : Pf(a) ? a.charAt(b) : a[b]
    },
    tg = function (a, b) {
        return 0 <= lg(a, b)
    },
    ug = function (a, b) {
        tg(a, b) || a.push(b)
    },
    wg = function (a, b) {
        b = lg(a, b);
        var c;
        (c = 0 <= b) && vg(a, b);
        return c
    },
    vg = function (a, b) {
        Array.prototype.splice.call(a, b, 1)
    },
    xg = function (a) {
        return Array.prototype.concat.apply([], arguments)
    },
    yg = function (a) {
        return Array.prototype.concat.apply([], arguments)
    },
    zg = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    },
    Ag = function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (Zf(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    },
    Dg = function (a, b, c, d) {
        Array.prototype.splice.apply(a, Cg(arguments, 1))
    },
    Cg = function (a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    },
    Eg = function (a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e =
                a[d++];
            var f = e;
            f = ag(f) ? "o" + dg(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
        }
        a.length = c
    },
    Fg = function (a, b) {
        return xg.apply([], ng(a, b, void 0))
    };
var Gg = function (a, b) {
        return 0 == a.lastIndexOf(b, 0)
    },
    Hg = function (a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    },
    Ig = function (a) {
        return /^[\s\xa0]*$/.test(a)
    },
    Jg = function (a) {
        return a.replace(/(\r\n|\r|\n)/g, "\n")
    },
    Kg = function (a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    },
    Lg = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    Mg = function (a) {
        return encodeURIComponent(String(a))
    },
    Ng = function (a) {
        return decodeURIComponent(a.replace(/\+/g,
            " "))
    },
    Og = function (a) {
        return a.replace(/(\r\n|\r|\n)/g, "<br>")
    },
    Wg = function (a) {
        if (!Pg.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Qg, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Rg, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Sg, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Tg, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ug, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Vg, "&#0;"));
        return a
    },
    Qg = /&/g,
    Rg = /</g,
    Sg = />/g,
    Tg = /"/g,
    Ug = /'/g,
    Vg = /\x00/g,
    Pg = /[\x00&<>"']/,
    $g = function (a) {
        return Xg(a, "&") ? "document" in
        y ? Yg(a) : Zg(a) : a
    },
    Yg = function (a) {
        var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        var c = y.document.createElement("div");
        return a.replace(ah, function (a, e) {
            var d = b[a];
            if (d) return d;
            "#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (d = String.fromCharCode(e)));
            d || (c.innerHTML = a + " ", d = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = d
        })
    },
    Zg = function (a) {
        return a.replace(/&([^;]+);/g, function (a, c) {
            switch (c) {
                case "amp":
                    return "&";
                case "lt":
                    return "<";
                case "gt":
                    return ">";
                case "quot":
                    return '"';
                default:
                    return "#" !=
                    c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? a : String.fromCharCode(c)
            }
        })
    },
    ah = /&([^;\s<&]+);?/g,
    Xg = function (a, b) {
        return -1 != a.indexOf(b)
    },
    bh = function (a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    },
    ch = String.prototype.repeat ? function (a, b) {
        return a.repeat(b)
    } : function (a, b) {
        return Array(b + 1).join(a)
    },
    dh = function (a) {
        return null == a ? "" : String(a)
    },
    eh = function (a) {
        return Array.prototype.join.call(arguments, "")
    },
    gh = function (a, b) {
        var c = 0;
        a = Lg(String(a)).split(".");
        b = Lg(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = fh(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || fh(0 == f[2].length, 0 == g[2].length) || fh(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    },
    fh = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    },
    hh = function (a) {
        return String(a).replace(/\-([a-z])/g, function (a,
                                                         c) {
            return c.toUpperCase()
        })
    },
    ih = function (a) {
        var b = Pf(void 0) ? bh(void 0) : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
            return b + e.toUpperCase()
        })
    };
var jh;
a: {
    var kh = y.navigator;
    if (kh) {
        var lh = kh.userAgent;
        if (lh) {
            jh = lh;
            break a
        }
    }
    jh = ""
}
var E = function (a) {
        return Xg(jh, a)
    },
    mh = function (a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
var nh = function (a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    },
    oh = function (a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    },
    ph = function (a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    },
    qh = function (a, b) {
        return null !== a && b in a
    },
    sh = function () {
        var a = rh,
            b;
        for (b in a) return !1;
        return !0
    },
    th = function (a, b, c) {
        if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    },
    uh = function (a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    },
    vh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    wh = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < vh.length; f++) c = vh[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    },
    xh = function (a) {
        var b = arguments.length;
        if (1 == b && Yf(arguments[0])) return xh.apply(null, arguments[0]);
        if (b % 2) throw Error(Sa);
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    },
    yh = function (a) {
        var b = arguments.length;
        if (1 == b && Yf(arguments[0])) return yh.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };
var zh = function () {
        return E("Trident") || E("MSIE")
    },
    Ah = function () {
        return (E("Chrome") || E("CriOS")) && !E(Aa)
    },
    Bh = function () {
        function a(a) {
            a = sg(a, d);
            return c[a] || ""
        }
        var b = jh;
        if (!zh()) {
            b = mh(b);
            var c = {};
            D(b, function (a) {
                c[a[0]] = a[1]
            });
            var d = gg(qh, c);
            E(Ha) ? a(["Version", Ha]) : E(Aa) ? a([Aa]) : Ah() && a(["Chrome", "CriOS"])
        }
    };
var Ch = function () {
        return E("iPhone") && !E("iPod") && !E("iPad")
    },
    Dh = function () {
        return Ch() || E("iPad") || E("iPod")
    };
var Eh = function (a) {
    Eh[" "](a);
    return a
};
Eh[" "] = Vf;
var Fh = function (a, b) {
        try {
            return Eh(a[b]), !0
        } catch (c) {}
        return !1
    },
    Hh = function (a, b) {
        var c = Gh;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
var Ih = E(Ha),
    G = zh(),
    Jh = E(Aa),
    Kh = Jh || G,
    Lh = E("Gecko") && !(Xg(jh.toLowerCase(), rf) && !E(Aa)) && !(E("Trident") || E("MSIE")) && !E(Aa),
    Mh = Xg(jh.toLowerCase(), rf) && !E(Aa),
    Nh = Mh && E("Mobile"),
    Oh = E("Macintosh"),
    Ph = E("Windows"),
    Qh = E(va),
    Rh = Ch(),
    Sh = E("iPad"),
    Th = E("iPod"),
    Uh = Dh(),
    Vh = function () {
        var a = y.document;
        return a ? a.documentMode : void 0
    },
    Wh;
a: {
    var Xh = "",
        Yh = function () {
            var a = jh;
            if (Lh) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Jh) return /Edge\/([\d\.]+)/.exec(a);
            if (G) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Mh) return /WebKit\/(\S+)/.exec(a);
            if (Ih) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
    Yh && (Xh = Yh ? Yh[1] : "");
    if (G) {
        var Zh = Vh();
        if (null != Zh && Zh > parseFloat(Xh)) {
            Wh = String(Zh);
            break a
        }
    }
    Wh = Xh
}
var $h = Wh,
    Gh = {},
    ai = function (a) {
        return Hh(a, function () {
            return 0 <= gh($h, a)
        })
    },
    ci = function (a) {
        return Number(bi) >= a
    },
    di;
var ei = y.document;
di = ei && G ? Vh() || ("CSS1Compat" == ei.compatMode ? parseInt($h, 10) : 5) : void 0;
var bi = di;
var fi = E("Firefox"),
    gi = Ch() || E("iPod"),
    hi = E("iPad"),
    ii = E(va) && !(Ah() || E("Firefox") || E(Ha) || E("Silk")),
    ji = Ah(),
    ki = E("Safari") && !(Ah() || E("Coast") || E(Ha) || E(Aa) || E("Silk") || E(va)) && !Dh();
var li = null,
    mi = null,
    ni = function (a, b) {
        Zf(a);
        if (!li) {
            li = {};
            mi = {};
            for (var c = 0; 65 > c; c++) li[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c), mi[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)
        }
        b = b ? mi : li;
        c = [];
        for (var d = 0; d < a.length; d += 3) {
            var e = a[d],
                f = d + 1 < a.length,
                g = f ? a[d + 1] : 0,
                l = d + 2 < a.length,
                m = l ? a[d + 2] : 0,
                p = e >> 2;
            e = (e & 3) << 4 | g >> 4;
            g = (g & 15) << 2 | m >> 6;
            m &= 63;
            l || (m = 64, f || (g = 64));
            c.push(b[p], b[e], b[g], b[m])
        }
        return c.join("")
    };
var oi = u(),
    pi = typeof Uint8Array == Wb,
    si = function (a, b, c, d) {
        a.a = null;
        b || (b = []);
        a.m = void 0;
        a.g = -1;
        a.b = b;
        a: {
            var e = a.b.length;
            b = -1;
            if (e && (b = e - 1, e = a.b[b], !(null === e || typeof e != Nd || Yf(e) || pi && e instanceof Uint8Array))) {
                a.j = b - a.g;
                a.c = e;
                break a
            } - 1 < c ? (a.j = Math.max(c, b + 1 - a.g), a.c = null) : a.j = Number.MAX_VALUE
        }
        a.o = {};
        if (d)
            for (c = 0; c < d.length; c++) b = d[c], b < a.j ? (b += a.g, a.b[b] = a.b[b] || qi) : (ri(a), a.c[b] = a.c[b] || qi)
    },
    qi = [],
    ri = function (a) {
        var b = a.j + a.g;
        a.b[b] || (a.c = a.b[b] = {})
    },
    ti = function (a, b) {
        if (b < a.j) {
            b += a.g;
            var c = a.b[b];
            return c === qi ? a.b[b] = [] : c
        }
        if (a.c) return c = a.c[b], c === qi ? a.c[b] = [] : c
    },
    ui = function (a, b) {
        if (b < a.j) {
            b += a.g;
            var c = a.b[b];
            return c === qi ? a.b[b] = [] : c
        }
        c = a.c[b];
        return c === qi ? a.c[b] = [] : c
    },
    vi = function (a, b) {
        a = ti(a, 1);
        return null == a ? b : a
    },
    H = function (a, b, c) {
        b < a.j ? a.b[b + a.g] = c : (ri(a), a.c[b] = c)
    },
    wi = function (a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            for (var d = ui(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.a[c] = e
        }
    },
    xi = function (a, b, c) {
        a.a || (a.a = {});
        var d = c ? c.zb() : c;
        a.a[b] = c;
        H(a, b, d)
    },
    yi = function (a, b, c) {
        a.a || (a.a = {});
        c = c || [];
        for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].zb();
        a.a[b] = c;
        H(a, b, d)
    },
    zi = function (a, b, c) {
        wi(a, c, b);
        var d = a.a[b];
        d || (d = a.a[b] = []);
        c = new c;
        a = ui(a, b);
        d.push(c);
        a.push(c.zb());
        return c
    },
    Ai = function (a) {
        if (a.a)
            for (var b in a.a) {
                var c = a.a[b];
                if (Yf(c))
                    for (var d = 0; d < c.length; d++) c[d] && c[d].zb();
                else c && c.zb()
            }
    };
oi.prototype.zb = function () {
    Ai(this);
    return this.b
};
oi.prototype.Tc = pi ? function () {
    var a = Uint8Array.prototype.toJSON;
    Uint8Array.prototype.toJSON = function () {
        return ni(this)
    };
    try {
        return JSON.stringify(this.b && this.zb(), Bi)
    } finally {
        Uint8Array.prototype.toJSON = a
    }
} : function () {
    return JSON.stringify(this.b && this.zb(), Bi)
};
var Bi = function (a, b) {
    return Qf(b) && (isNaN(b) || Infinity === b || -Infinity === b) ? String(b) : b
};
oi.prototype.toString = function () {
    Ai(this);
    return this.b.toString()
};
var Di = function (a) {
        var b = Ci;
        if (a.c) {
            a.a || (a.a = {});
            var c = b.b;
            if (b.c) {
                if (b.a) return a.a[c] || (a.a[c] = ng(a.c[c] || [], function (a) {
                    return new b.a(a)
                })), a.a[c]
            } else if (b.a) return !a.a[c] && a.c[c] && (a.a[c] = new b.a(a.c[c])), a.a[c];
            return a.c[c]
        }
    },
    Fi = function (a) {
        return new a.constructor(Ei(a.zb()))
    },
    Ei = function (a) {
        if (Yf(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = typeof d == Nd ? Ei(d) : d)
            }
            return b
        }
        if (pi && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null !=
        d && (b[c] = typeof d == Nd ? Ei(d) : d);
        return b
    };
var Hi = function (a) {
    si(this, a, -1, Gi)
};
C(Hi, oi);
var Gi = [1, 2, 3, 4];
var Ii = function (a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    a = a.substring(0, a.indexOf("://"));
    if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a) throw Error("Invalid URI scheme in origin: " + a);
    c = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e =
            b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
    }
    return a + "://" + b + c
};
var Ji = {
    ascii_tlds: ["aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "active", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "aigo", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics",
        "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", eb, "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva",
        "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blanco", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnl", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti",
        "build", "builders", kb, "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "cartier", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cc", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "charity", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "chrysler",
        "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", r, "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cr", "credit", "creditcard", "creditunion",
        "cricket", "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dodge", "dog", "doha", "domains", "dot", "download", "drive", "dtv",
        "dubai", "duck", "dunlop", "duns", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epost", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "esurance", "et", "etisalat", "eu", "eurovision", "eus", "events", "everbank", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari",
        "ferrero", "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden",
        "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank",
        "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "honeywell", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "inc", "industries", "infiniti", "info", "ing", "ink",
        "institute", "insurance", "insure", "int", "intel", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "iselect", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln",
        "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "ladbrokes", "lamborghini", "lamer", "lancaster", "lancia", "lancome", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "liaison", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "llc", "loan", "loans",
        "locker", "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "merckmsd", "metlife", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi",
        "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "mobily", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mopar", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "movistar", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nadex", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo",
        "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf",
        "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "piaget", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", Wd, "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "qvc",
        "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "rightathome", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", t, "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik",
        "sandvikcoromant", "sanofi", "sap", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scor", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", ie, "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", se, "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype",
        "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "spiegel", "sport", "spot", "spreadbetting", "sr", "srl", "srt", "st", "stada", "staples", "star", "starhub", "statebank", "statefarm", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", Le, "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "symantec", "systems", "sz", "tab", "taipei",
        "talk", "taobao", Me, "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "telefonica", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel", "travelers", "travelersinsurance", "trust",
        "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "uconnect", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "vistaprint", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou",
        "warman", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "xn--11b4c3d", "xn--1ck2e1b", "xn--1qqw23a", "xn--2scrj9c", "xn--30rr7y", "xn--3bst00m", "xn--3ds443g", "xn--3e0b707e", "xn--3hcrj9c", "xn--3oq18vl8pn36a", "xn--3pxu8k", "xn--42c2d9a", "xn--45br5cyl", "xn--45brj9c",
        "xn--45q11c", "xn--4gbrim", "xn--54b7fta0cc", "xn--55qw42g", "xn--55qx5d", "xn--5su34j936bgsg", "xn--5tzm5g", "xn--6frz82g", "xn--6qq986b3xl", "xn--80adxhks", "xn--80ao21a", "xn--80aqecdr1a", "xn--80asehdb", "xn--80aswg", "xn--8y0a063a", "xn--90a3ac", "xn--90ae", "xn--90ais", "xn--9dbq2a", "xn--9et52u", "xn--9krt00a", "xn--b4w605ferd", "xn--bck1b9a5dre4c", "xn--c1avg", "xn--c2br7g", "xn--cck2b3b", "xn--cg4bki", "xn--clchc0ea0b2g2a9gcd", "xn--czr694b", "xn--czrs0t", "xn--czru2d", "xn--d1acj3b", "xn--d1alf", "xn--e1a4c", "xn--eckvdtc9d",
        "xn--efvy88h", "xn--estv75g", "xn--fct429k", "xn--fhbei", "xn--fiq228c5hs", "xn--fiq64b", "xn--fiqs8s", "xn--fiqz9s", "xn--fjq720a", "xn--flw351e", "xn--fpcrj9c3d", "xn--fzc2c9e2c", "xn--fzys8d69uvgm", "xn--g2xx48c", "xn--gckr3f0f", "xn--gecrj9c", "xn--gk3at1e", "xn--h2breg3eve", "xn--h2brj9c", "xn--h2brj9c8c", "xn--hxt814e", "xn--i1b6b1a6a2e", "xn--imr513n", "xn--io0a7i", "xn--j1aef", "xn--j1amh", "xn--j6w193g", "xn--jlq61u9w7b", "xn--jvr189m", "xn--kcrx77d1x4a", "xn--kprw13d", "xn--kpry57d", "xn--kpu716f", "xn--kput3i", "xn--l1acc",
        "xn--lgbbat1ad8j", "xn--mgb9awbf", "xn--mgba3a3ejt", "xn--mgba3a4f16a", "xn--mgba7c0bbn0a", "xn--mgbaakc7dvf", "xn--mgbaam7a8h", "xn--mgbab2bd", "xn--mgbai9azgqp6j", "xn--mgbayh7gpa", "xn--mgbb9fbpob", "xn--mgbbh1a", "xn--mgbbh1a71e", "xn--mgbc0a9azcg", "xn--mgbca7dzdo", "xn--mgberp4a5d4ar", "xn--mgbgu82a", "xn--mgbi4ecexp", "xn--mgbpl2fh", "xn--mgbt3dhd", "xn--mgbtx2b", "xn--mgbx4cd0ab", "xn--mix891f", "xn--mk1bu44c", "xn--mxtq1m", "xn--ngbc5azd", "xn--ngbe9e0a", "xn--ngbrx", "xn--node", "xn--nqv7f", "xn--nqv7fs00ema", "xn--nyqy26a",
        "xn--o3cw4h", "xn--ogbpf8fl", "xn--otu796d", "xn--p1acf", "xn--p1ai", "xn--pbt977c", "xn--pgbs0dh", "xn--pssy2u", "xn--q9jyb4c", "xn--qcka1pmc", "xn--qxam", "xn--rhqv96g", "xn--rovu88b", "xn--rvc1e0am3e", "xn--s9brj9c", "xn--ses554g", "xn--t60b56a", "xn--tckwe", "xn--tiq49xqyj", "xn--unup4y", "xn--vermgensberater-ctb", "xn--vermgensberatung-pwb", "xn--vhquv", "xn--vuq861b", "xn--w4r85el8fhu5dnra", "xn--w4rs40l", "xn--wgbh1c", "xn--wgbl6a", "xn--xhq521b", "xn--xkc2al3hye2a", "xn--xkc2dl3a5ee0h", "xn--y9a3aq", "xn--yfro4i67o", "xn--ygbi2ammx",
        "xn--zfr164b", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zippo", "zm", "zone", "zuerich", "zw"
    ],
    unicode_tlds: "\u0915\u0949\u092e \u30bb\u30fc\u30eb \u4f5b\u5c71 \u0cad\u0cbe\u0cb0\u0ca4 \u6148\u5584 \u96c6\u56e2 \u5728\u7ebf \ud55c\uad6d \u0b2d\u0b3e\u0b30\u0b24 \u5927\u4f17\u6c7d\u8f66 \u70b9\u770b \u0e04\u0e2d\u0e21 \u09ad\u09be\u09f0\u09a4 \u09ad\u09be\u09b0\u09a4 \u516b\u5366 \u0645\u0648\u0642\u0639 \u09ac\u09be\u0982\u09b2\u09be \u516c\u76ca \u516c\u53f8 \u9999\u683c\u91cc\u62c9 \u7f51\u7ad9 \u79fb\u52a8 \u6211\u7231\u4f60 \u043c\u043e\u0441\u043a\u0432\u0430 \u049b\u0430\u0437 \u043a\u0430\u0442\u043e\u043b\u0438\u043a \u043e\u043d\u043b\u0430\u0439\u043d \u0441\u0430\u0439\u0442 \u8054\u901a \u0441\u0440\u0431 \u0431\u0433 \u0431\u0435\u043b \u05e7\u05d5\u05dd \u65f6\u5c1a \u5fae\u535a \u6de1\u9a6c\u9521 \u30d5\u30a1\u30c3\u30b7\u30e7\u30f3 \u043e\u0440\u0433 \u0928\u0947\u091f \u30b9\u30c8\u30a2 \uc0bc\uc131 \u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd \u5546\u6807 \u5546\u5e97 \u5546\u57ce \u0434\u0435\u0442\u0438 \u043c\u043a\u0434 \u0435\u044e \u30dd\u30a4\u30f3\u30c8 \u65b0\u95fb \u5de5\u884c \u5bb6\u96fb \u0643\u0648\u0645 \u4e2d\u6587\u7f51 \u4e2d\u4fe1 \u4e2d\u56fd \u4e2d\u570b \u5a31\u4e50 \u8c37\u6b4c \u0c2d\u0c3e\u0c30\u0c24\u0c4d \u0dbd\u0d82\u0d9a\u0dcf \u96fb\u8a0a\u76c8\u79d1 \u8d2d\u7269 \u30af\u30e9\u30a6\u30c9 \u0aad\u0abe\u0ab0\u0aa4 \u901a\u8ca9 \u092d\u093e\u0930\u0924\u092e\u094d \u092d\u093e\u0930\u0924 \u092d\u093e\u0930\u094b\u0924 \u7f51\u5e97 \u0938\u0902\u0917\u0920\u0928 \u9910\u5385 \u7f51\u7edc \u043a\u043e\u043c \u0443\u043a\u0440 \u9999\u6e2f \u8bfa\u57fa\u4e9a \u98df\u54c1 \u98de\u5229\u6d66 \u53f0\u6e7e \u53f0\u7063 \u624b\u8868 \u624b\u673a \u043c\u043e\u043d \u0627\u0644\u062c\u0632\u0627\u0626\u0631 \u0639\u0645\u0627\u0646 \u0627\u0631\u0627\u0645\u0643\u0648 \u0627\u06cc\u0631\u0627\u0646 \u0627\u0644\u0639\u0644\u064a\u0627\u0646 \u0627\u062a\u0635\u0627\u0644\u0627\u062a \u0627\u0645\u0627\u0631\u0627\u062a \u0628\u0627\u0632\u0627\u0631 \u067e\u0627\u06a9\u0633\u062a\u0627\u0646 \u0627\u0644\u0627\u0631\u062f\u0646 \u0645\u0648\u0628\u0627\u064a\u0644\u064a \u0628\u0627\u0631\u062a \u0628\u06be\u0627\u0631\u062a \u0627\u0644\u0645\u063a\u0631\u0628 \u0627\u0628\u0648\u0638\u0628\u064a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 \u0680\u0627\u0631\u062a \u0643\u0627\u062b\u0648\u0644\u064a\u0643 \u0633\u0648\u062f\u0627\u0646 \u0647\u0645\u0631\u0627\u0647 \u0639\u0631\u0627\u0642 \u0645\u0644\u064a\u0633\u064a\u0627 \u6fb3\u9580 \ub2f7\ucef4 \u653f\u5e9c \u0634\u0628\u0643\u0629 \u0628\u064a\u062a\u0643 \u0639\u0631\u0628 \u10d2\u10d4 \u673a\u6784 \u7ec4\u7ec7\u673a\u6784 \u5065\u5eb7 \u0e44\u0e17\u0e22 \u0633\u0648\u0631\u064a\u0629 \u62db\u8058 \u0440\u0443\u0441 \u0440\u0444 \u73e0\u5b9d \u062a\u0648\u0646\u0633 \u5927\u62ff \u307f\u3093\u306a \u30b0\u30fc\u30b0\u30eb \u03b5\u03bb \u4e16\u754c \u66f8\u7c4d \u0d2d\u0d3e\u0d30\u0d24\u0d02 \u0a2d\u0a3e\u0a30\u0a24 \u7f51\u5740 \ub2f7\ub137 \u30b3\u30e0 \u5929\u4e3b\u6559 \u6e38\u620f verm\u00f6gensberater verm\u00f6gensberatung \u4f01\u4e1a \u4fe1\u606f \u5609\u91cc\u5927\u9152\u5e97 \u5609\u91cc \u0645\u0635\u0631 \u0642\u0637\u0631 \u5e7f\u4e1c \u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8 \u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe \u0570\u0561\u0575 \u65b0\u52a0\u5761 \u0641\u0644\u0633\u0637\u064a\u0646 \u653f\u52a1".split(" ")
};
var Ki = !G || ci(9),
    Li = !Lh && !G || G && ci(9) || Lh && ai("1.9.1"),
    Mi = G && !ai("9"),
    Ni = G || Ih || Mh,
    Oi = G && !ci(9);
var Pi = w(null),
    Qi = function (a) {
        var b = b || 0;
        return function () {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    },
    Ri = function (a) {
        var b = !1,
            c;
        return function () {
            b || (c = a(), b = !0);
            return c
        }
    };
var Si = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
var Vi = function (a, b) {
    this.a = a === Ti && b || "";
    this.b = Ui
};
Vi.prototype.qc = !0;
Vi.prototype.Mb = v("a");
Vi.prototype.toString = function () {
    return "Const{" + this.a + "}"
};
var Wi = function (a) {
        return a instanceof Vi && a.constructor === Vi && a.b === Ui ? a.a : "type_error:Const"
    },
    Zi = function (a) {
        return new Vi(Ti, a)
    },
    Ui = {},
    Ti = {};
var $i = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i,
    aj = function (a) {
        return $i.test(a)
    };
var cj = function () {
    this.b = "";
    this.c = bj
};
cj.prototype.qc = !0;
cj.prototype.Mb = v("b");
cj.prototype.Ig = !0;
cj.prototype.a = w(1);
var dj = function (a) {
        if (a instanceof cj && a.constructor === cj && a.c === bj) return a.b;
        Xf(a);
        return "type_error:TrustedResourceUrl"
    },
    ej = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    bj = {},
    fj = function (a) {
        var b = new cj;
        b.b = a;
        return b
    },
    gj = function (a, b, c) {
        if (null == c) return b;
        if (Pf(c)) return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = Yf(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
            }
        }
        return b
    };
var ij = function () {
    this.b = "";
    this.c = hj
};
ij.prototype.qc = !0;
ij.prototype.Mb = v("b");
ij.prototype.Ig = !0;
ij.prototype.a = w(1);
var jj = function (a) {
        if (a instanceof ij && a.constructor === ij && a.c === hj) return a.b;
        Xf(a);
        return "type_error:SafeUrl"
    },
    kj = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    mj = function (a) {
        if (a instanceof ij) return a;
        a = typeof a == Nd && a.qc ? a.Mb() : String(a);
        kj.test(a) || (a = Ta);
        return lj(a)
    },
    nj = function (a) {
        if (a instanceof ij) return a;
        a = typeof a == Nd && a.qc ? a.Mb() : String(a);
        kj.test(a) || (a = Ta);
        return lj(a)
    },
    hj = {},
    lj = function (a) {
        var b = new ij;
        b.b = a;
        return b
    };
lj("about:blank");
var pj = function () {
    this.a = "";
    this.b = oj
};
pj.prototype.qc = !0;
var oj = {};
pj.prototype.Mb = v("a");
var qj = function (a) {
        if (a instanceof pj && a.constructor === pj && a.b === oj) return a.a;
        Xf(a);
        return "type_error:SafeStyle"
    },
    rj = function (a) {
        var b = new pj;
        b.a = a;
        return b
    },
    sj = rj(""),
    uj = function (a) {
        var b = "",
            c;
        for (c in a) {
            if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
            var d = a[c];
            null != d && (d = Yf(d) ? ng(d, tj).join(" ") : tj(d), b += c + ":" + d + ";")
        }
        return b ? rj(b) : sj
    },
    tj = function (a) {
        if (a instanceof ij) a = 'url("' + jj(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        else if (a instanceof Vi) a = Wi(a);
        else {
            a = String(a);
            var b = a.replace(vj, "$1").replace(vj, "$1").replace(wj, "url");
            if (xj.test(b)) {
                if (b = !yj.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && zj(a)
                }
                a = b ? Aj(a) : "zClosurez"
            } else a = "zClosurez"
        }
        return a
    },
    zj = function (a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    },
    xj = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
    wj =
        /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
    vj = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
    yj = /\/\*/,
    Aj = function (a) {
        return a.replace(wj, function (a, c, d, e) {
            var b = "";
            d = d.replace(/^(['"])(.*)\1$/, function (a, c, d) {
                b = c;
                return d
            });
            a = mj(d).Mb();
            return c + b + a + b + e
        })
    };
var Cj = function () {
    this.a = "";
    this.b = Bj
};
Cj.prototype.qc = !0;
var Bj = {},
    Ej = function (a, b) {
        if (Xg(a, "<")) throw Error("Selector does not allow '<', got: " + a);
        var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
        a: {
            for (var d = {
                "(": ")",
                "[": "]"
            }, e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                if (d[g]) e.push(d[g]);
                else {
                    b: {
                        var l = void 0;
                        for (l in d)
                            if (d[l] == g) {
                                l = !0;
                                break b
                            }
                        l = !1
                    }
                    if (l && e.pop() != g) {
                        c = !1;
                        break a
                    }
                }
            }
            c = 0 == e.length
        }
        if (!c) throw Error("() and [] in selector must be balanced, got: " +
            a);
        b instanceof pj || (b = uj(b));
        a = a + "{" + qj(b) + "}";
        return Dj(a)
    },
    Gj = function (a) {
        var b = "",
            c = function (a) {
                Yf(a) ? D(a, c) : b += Fj(a)
            };
        D(arguments, c);
        return Dj(b)
    };
Cj.prototype.Mb = v("a");
var Fj = function (a) {
        if (a instanceof Cj && a.constructor === Cj && a.b === Bj) return a.a;
        Xf(a);
        return "type_error:SafeStyleSheet"
    },
    Dj = function (a) {
        var b = new Cj;
        b.a = a;
        return b
    },
    Hj = Dj("");
var Jj = function () {
    this.b = "";
    this.g = Ij;
    this.c = null
};
Jj.prototype.Ig = !0;
Jj.prototype.a = v("c");
Jj.prototype.qc = !0;
Jj.prototype.Mb = v("b");
var Kj = function (a) {
        if (a instanceof Jj && a.constructor === Jj && a.g === Ij) return a.b;
        Xf(a);
        return "type_error:SafeHtml"
    },
    Mj = function (a) {
        if (a instanceof Jj) return a;
        var b = typeof a == Nd,
            c = null;
        b && a.Ig && (c = a.a());
        a = Wg(b && a.qc ? a.Mb() : String(a));
        return Lj(a, c)
    },
    Nj = function (a) {
        if (a instanceof Jj) return a;
        a = Mj(a);
        var b = Og(Kj(a));
        return Lj(b, a.a())
    },
    Oj = /^[a-zA-Z0-9-]+$/,
    Pj = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    Qj = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    },
    Sj = function (a, b, c) {
        var d = String(a);
        if (!Oj.test(d)) throw Error("Invalid tag name <" + d + ">.");
        if (d.toUpperCase() in Qj) throw Error("Tag name <" + d + "> is not allowed for SafeHtml.");
        return Rj(String(a), b, c)
    },
    Tj = function (a) {
        var b = 0,
            c = "",
            d = function (a) {
                Yf(a) ? D(a, d) : (a = Mj(a), c += Kj(a), a = a.a(), 0 == b ? b = a : 0 != a && b != a && (b = null))
            };
        D(arguments, d);
        return Lj(c, b)
    },
    Ij = {},
    Lj = function (a, b) {
        var c = new Jj;
        c.b = a;
        c.c = b;
        return c
    },
    Rj = function (a, b, c) {
        var d = null,
            e = "";
        if (b)
            for (m in b) {
                if (!Oj.test(m)) throw Error('Invalid attribute name "' +
                    m + '".');
                var f = b[m];
                if (null != f) {
                    var g = a;
                    var l = m;
                    if (f instanceof Vi) f = Wi(f);
                    else if (l.toLowerCase() == Le) {
                        if (!ag(f)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                        f instanceof pj || (f = uj(f));
                        f = qj(f)
                    } else {
                        if (/^on/i.test(l)) throw Error('Attribute "' + l + '" requires goog.string.Const value, "' + f + '" given.');
                        if (l.toLowerCase() in Pj)
                            if (f instanceof cj) f = dj(f);
                            else if (f instanceof ij) f = jj(f);
                            else if (Pf(f)) f = mj(f).Mb();
                            else throw Error('Attribute "' +
                                    l + '" on tag "' + g + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + f + '" given.');
                    }
                    f.qc && (f = f.Mb());
                    l = l + '="' + Wg(String(f)) + '"';
                    e += " " + l
                }
            }
        var m = "<" + a + e;
        null != c ? Yf(c) || (c = [c]) : c = [];
        !0 === Si[a.toLowerCase()] ? m += ">" : (d = Tj(c), m += ">" + Kj(d) + "</" + a + ">", d = d.a());
        (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
        return Lj(m, d)
    };
Lj("<!DOCTYPE html>", 0);
var Uj = Lj("", 0),
    Vj = Lj("<br>", 0);
var Wj = Ri(function () {
        var a = document.createElement("div");
        a.innerHTML = "<div><div></div></div>";
        var b = a.firstChild.firstChild;
        a.innerHTML = "";
        return !b.parentElement
    }),
    Xj = function (a, b) {
        if (Wj())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = b
    },
    Yj = function (a, b) {
        Xj(a, Kj(b))
    },
    Zj = function (a, b) {
        a.src = dj(b);
        if (null === Tf) b: {
            b = y.document;
            if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute(Kd)) && Sf.test(b)) {
                Tf = b;
                break b
            }
            Tf = ""
        }
        b = Tf;
        b && a.setAttribute(Kd, b)
    },
    ak = function (a,
                   b) {
        b = b instanceof ij ? b : nj(b);
        a.href = jj(b)
    };
var bk = function (a, b) {
    return a + Math.random() * (b - a)
};
var ck = function (a, b) {
        this.b = z(a) ? a : 0;
        this.a = z(b) ? b : 0
    },
    dk = function (a) {
        return new ck(a.b, a.a)
    },
    ek = function (a, b) {
        return new ck(a.b - b.b, a.a - b.a)
    };
ck.prototype.ceil = function () {
    this.b = Math.ceil(this.b);
    this.a = Math.ceil(this.a);
    return this
};
ck.prototype.floor = function () {
    this.b = Math.floor(this.b);
    this.a = Math.floor(this.a);
    return this
};
ck.prototype.round = function () {
    this.b = Math.round(this.b);
    this.a = Math.round(this.a);
    return this
};
var fk = function (a, b) {
        this.width = a;
        this.height = b
    },
    gk = function (a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    };
fk.prototype.aspectRatio = function () {
    return this.width / this.height
};
fk.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
fk.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
fk.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var jk = function (a) {
        return a ? new hk(ik(a)) : jg || (jg = new hk)
    },
    I = function (a) {
        return Pf(a) ? document.getElementById(a) : a
    },
    lk = function (a, b, c) {
        return kk(document, a, b, c)
    },
    mk = function (a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : kk(document, "*", a, b)
    },
    J = function (a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : kk(c, "*", a, b)[0] || null
        }
        return a ||
            null
    },
    kk = function (a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, typeof b.split == Wb && tg(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    },
    ok = function (a, b) {
        nh(b,
            function (b, d) {
                b && typeof b == Nd && b.qc && (b = b.Mb());
                d == Le ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : nk.hasOwnProperty(d) ? a.setAttribute(nk[d], b) : Gg(d, "aria-") || Gg(d, "data-") ? a.setAttribute(d, b) : a[d] = b
            })
    },
    nk = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: Pc,
        maxlength: "maxLength",
        nonce: Kd,
        role: fe,
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    },
    qk = function (a) {
        a = a.document;
        a = pk(a) ? a.documentElement :
            a.body;
        return new fk(a.clientWidth, a.clientHeight)
    },
    sk = function (a) {
        var b = rk(a);
        a = a.parentWindow || a.defaultView;
        return G && ai("10") && a.pageYOffset != b.scrollTop ? new ck(b.scrollLeft, b.scrollTop) : new ck(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    },
    rk = function (a) {
        return a.scrollingElement ? a.scrollingElement : !Mh && pk(a) ? a.documentElement : a.body || a.documentElement
    },
    tk = function (a) {
        return a ? a.parentWindow || a.defaultView : window
    },
    K = function (a, b, c) {
        return uk(document, arguments)
    },
    uk = function (a, b) {
        var c =
                String(b[0]),
            d = b[1];
        if (!Ki && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', Wg(d.name), '"');
            if (d.type) {
                c.push(' type="', Wg(d.type), '"');
                var e = {};
                wh(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (Pf(d) ? c.className = d : Yf(d) ? c.className = d.join(" ") : ok(c, d));
        2 < b.length && vk(a, c, b, 2);
        return c
    },
    vk = function (a, b, c, d) {
        function e(c) {
            c && b.appendChild(Pf(c) ? a.createTextNode(c) : c)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !Zf(f) || ag(f) && 0 < f.nodeType ? e(f) : D(wk(f) ? zg(f) : f, e)
        }
    },
    xk = function (a) {
        return document.createElement(String(a))
    },
    yk = function (a) {
        return document.createTextNode(String(a))
    },
    zk = function (a, b) {
        var c = a.createElement(k);
        G ? (Yj(c, Tj(Vj, b)), c.removeChild(c.firstChild)) : Yj(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    },
    pk = function (a) {
        return "CSS1Compat" == a.compatMode
    },
    Ak = function (a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case Da:
            case Ea:
            case Ca:
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case Ja:
            case "SOURCE":
            case Ma:
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    },
    Bk = function (a, b) {
        vk(ik(a), a, arguments, 1)
    },
    Ck = function (a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    },
    Dk = function (a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    },
    Ek = function (a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    },
    Fk = function (a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    },
    Gk = function (a) {
        return Li && void 0 != a.children ? a.children : mg(a.childNodes, function (a) {
            return 1 == a.nodeType
        })
    },
    Ik = function (a) {
        return z(a.firstElementChild) ? a.firstElementChild : Hk(a.firstChild, !0)
    },
    Jk = function (a) {
        return z(a.nextElementSibling) ? a.nextElementSibling : Hk(a.nextSibling, !0)
    },
    Hk = function (a, b) {
        for (; a && 1 != a.nodeType;) a = b ? a.nextSibling : a.previousSibling;
        return a
    },
    Kk = function (a) {
        return ag(a) && 1 == a.nodeType
    },
    Lk = function (a) {
        var b;
        if (Ni && !(G && ai("9") && !ai("10") && y.SVGElement && a instanceof y.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return Kk(b) ? b : null
    },
    Mk = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a ==
            b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    },
    Pk = function (a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (G && !ci(9)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType,
                d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var e = a.parentNode,
                f = b.parentNode;
            return e == f ? Nk(a, b) : !c && Mk(e, b) ? -1 * Ok(a, b) : !d && Mk(f, a) ? Ok(b, a) : (c ? a.sourceIndex :
                e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
        }
        d = ik(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        a = d.createRange();
        a.selectNode(b);
        a.collapse(!0);
        return c.compareBoundaryPoints(y.Range.START_TO_END, a)
    },
    Ok = function (a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (; b.parentNode != c;) b = b.parentNode;
        return Nk(b, a)
    },
    Nk = function (a, b) {
        for (; b = b.previousSibling;)
            if (b == a) return -1;
        return 1
    },
    Sk = function (a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b <
        c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var l = 1; l < c; l++)
                if (g != d[l][b]) return f;
            f = g
        }
        return f
    },
    ik = function (a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    },
    Tk = function (a) {
        return a.contentDocument || a.contentWindow.document
    },
    L = function (a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else Ck(a), a.appendChild(ik(a).createTextNode(String(b)))
    },
    Uk = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    Vk = {
        IMG: " ",
        BR: "\n"
    },
    Wk = function (a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    },
    Xk = function (a) {
        return G && !ai("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
    },
    Yk = function (a) {
        a = a.tabIndex;
        return Qf(a) && 0 <= a && 32768 > a
    },
    $k = function (a) {
        if (Mi && null !== a && "innerText" in a) a = Jg(a.innerText);
        else {
            var b = [];
            Zk(a, b, !0);
            a =
                b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Mi || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    },
    al = function (a) {
        var b = [];
        Zk(a, b, !1);
        return b.join("")
    },
    Zk = function (a, b, c) {
        if (!(a.nodeName in Uk))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Vk) b.push(Vk[a.nodeName]);
            else
                for (a = a.firstChild; a;) Zk(a, b, c), a = a.nextSibling
    },
    wk = function (a) {
        if (a && typeof a.length == Md) {
            if (ag(a)) return typeof a.item ==
                Wb || typeof a.item == Ke;
            if ($f(a)) return typeof a.item == Wb
        }
        return !1
    },
    cl = function (a) {
        return bl(a, function (a) {
            return Pf(a.className) && tg(a.className.split(/\s+/), pc)
        }, void 0)
    },
    bl = function (a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    },
    dl = function (a) {
        try {
            var b = a && a.activeElement;
            return b && b.nodeName ? b : null
        } catch (c) {
            return null
        }
    },
    hk = function (a) {
        this.a = a || y.document || document
    };
hk.prototype.l = function (a) {
    return Pf(a) ? this.a.getElementById(a) : a
};
hk.prototype.zc = function (a, b) {
    return J(a, b || this.a)
};
hk.prototype.b = function (a, b, c) {
    return uk(this.a, arguments)
};
var el = function (a, b) {
        return a.a.createElement(String(b))
    },
    fl = function (a) {
        a = a.a;
        return a.parentWindow || a.defaultView
    };
x = hk.prototype;
x.appendChild = function (a, b) {
    a.appendChild(b)
};
x.Sh = Bk;
x.We = Ck;
x.Uh = Fk;
x.Oh = Gk;
x.Ph = Ik;
x.Hl = Kk;
x.contains = Mk;
x.Xe = L;
x.Th = $k;
var gl = function () {
    this.vc = this.vc;
    this.Ab = this.Ab
};
gl.prototype.vc = !1;
gl.prototype.Da = function () {
    this.vc || (this.vc = !0, this.T())
};
var il = function (a, b) {
    b = gg(hl, b);
    a.vc ? z(void 0) ? b.call(void 0) : b() : (a.Ab || (a.Ab = []), a.Ab.push(z(void 0) ? A(b, void 0) : b))
};
gl.prototype.T = function () {
    if (this.Ab)
        for (; this.Ab.length;) this.Ab.shift()()
};
var hl = function (a) {
    a && typeof a.Da == Wb && a.Da()
};
var jl = zf("id");
jl.prototype.toString = v("id");
var N = function (a, b) {
    this.type = a instanceof jl ? String(a) : a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.ld = !1;
    this.Pi = !0
};
N.prototype.stopPropagation = function () {
    this.ld = !0
};
N.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.Pi = !1
};
var kl = !G || ci(9),
    ll = !G || ci(9),
    ml = G && !ai("9"),
    nl = function () {
        if (!y.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
        try {
            y.addEventListener("test", Vf, b), y.removeEventListener("test", Vf, b)
        } catch (c) {}
        return a
    }();
var ol = function (a) {
        return Mh ? rf + a : Ih ? "o" + a.toLowerCase() : a.toLowerCase()
    },
    pl = {
        yn: r,
        Mp: "rightclick",
        In: Fb,
        Od: Ad,
        Pd: Ed,
        Wo: Dd,
        Vo: Cd,
        Uo: Bd,
        So: "mouseenter",
        To: "mouseleave",
        Nd: "mousecancel",
        Rp: le,
        Sp: "selectstart",
        xq: "wheel",
        Eo: pd,
        Do: od,
        Fo: qd,
        rn: ib,
        po: Sb,
        Jn: Gb,
        qo: Tb,
        uo: Ub,
        wn: ob,
        Jp: "reset",
        Qp: ie,
        aq: "submit",
        Bo: Yc,
        Gp: "propertychange",
        $n: "dragstart",
        Vn: "drag",
        Xn: "dragenter",
        Zn: "dragover",
        Yn: "dragleave",
        ao: "drop",
        Wn: "dragend",
        jq: Ye,
        iq: Xe,
        hq: We,
        gq: Ve,
        qn: hb,
        Dn: "consolemessage",
        En: yb,
        Kn: "devicechange",
        Ln: "devicemotion",
        Mn: "deviceorientation",
        Pn: "DOMContentLoaded",
        io: Qb,
        Ao: "help",
        Go: "load",
        Oo: "losecapture",
        qp: Qd,
        Ip: $d,
        Kp: ce,
        Np: he,
        nq: kf,
        un: "canplay",
        vn: "canplaythrough",
        bo: "durationchange",
        fo: "emptied",
        ho: "ended",
        Jo: "loadeddata",
        Ko: "loadedmetadata",
        up: "pause",
        vp: Wd,
        wp: "playing",
        Hp: "ratechange",
        Op: "seeked",
        Pp: "seeking",
        Yp: "stalled",
        bq: "suspend",
        fq: "timeupdate",
        vq: "volumechange",
        wq: "waiting",
        Xp: "sourceopen",
        Wp: "sourceended",
        Vp: "sourceclosed",
        Zm: "abort",
        pq: "update",
        tq: "updatestart",
        qq: "updateend",
        zo: "hashchange",
        rp: "pagehide",
        sp: "pageshow",
        Fp: "popstate",
        Gn: zb,
        tp: Ud,
        Hn: "cut",
        hn: "beforecopy",
        jn: "beforecut",
        on: "beforepaste",
        pp: "online",
        op: "offline",
        Qo: "message",
        Cn: "connect",
        Co: "install",
        $m: "activate",
        oo: "fetch",
        vo: "foreignfetch",
        Ro: "messageerror",
        Zp: "statechange",
        rq: "updatefound",
        Fn: "controllerchange",
        fn: ol("AnimationStart"),
        cn: ol("AnimationEnd"),
        dn: ol("AnimationIteration"),
        kq: ol("TransitionEnd"),
        yp: "pointerdown",
        Ep: "pointerup",
        xp: "pointercancel",
        Bp: "pointermove",
        Dp: "pointerover",
        Cp: "pointerout",
        zp: "pointerenter",
        Ap: "pointerleave",
        xo: "gotpointercapture",
        Po: "lostpointercapture",
        Xo: "MSGestureChange",
        Yo: "MSGestureEnd",
        Zo: "MSGestureHold",
        $o: "MSGestureStart",
        ap: "MSGestureTap",
        bp: "MSGotPointerCapture",
        cp: "MSInertiaStart",
        ep: "MSLostPointerCapture",
        fp: "MSPointerCancel",
        gp: "MSPointerDown",
        hp: "MSPointerEnter",
        ip: "MSPointerHover",
        jp: "MSPointerLeave",
        kp: "MSPointerMove",
        lp: "MSPointerOut",
        mp: "MSPointerOver",
        np: "MSPointerUp",
        cq: Ne,
        eq: G ? "textinput" : "textInput",
        An: xb,
        Bn: "compositionupdate",
        zn: wb,
        ln: "beforeinput",
        jo: "exit",
        Ho: "loadabort",
        Io: "loadcommit",
        Lo: "loadredirect",
        Mo: "loadstart",
        No: "loadstop",
        Lp: "responsive",
        Tp: "sizechanged",
        oq: "unresponsive",
        uq: of,
        $p: "storage",
        Un: "DOMSubtreeModified",
        Qn: "DOMNodeInserted",
        Sn: "DOMNodeRemoved",
        Tn: "DOMNodeRemovedFromDocument",
        Rn: "DOMNodeInsertedIntoDocument",
        Nn: "DOMAttrModified",
        On: "DOMCharacterDataModified",
        pn: "beforeprint",
        an: "afterprint",
        nn: "beforeinstallprompt",
        gn: "appinstalled"
    };
var rl = function (a, b) {
    N.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.Yg = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.a = null;
    if (a) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? Lh &&
            (Fh(b, Id) || (b = null)): c == Dd ? b = a.fromElement : c == Cd && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.Yg = Oh ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = Pf(a.pointerType) ? a.pointerType : ql[a.pointerType] || "";
        this.state = a.state;
        this.a = a;
        a.defaultPrevented && this.preventDefault()
    }
};
C(rl, N);
var sl = [1, 4, 2],
    ql = {
        2: "touch",
        3: "pen",
        4: "mouse"
    },
    tl = function (a) {
        return (kl ? 0 == a.a.button : a.type == r ? !0 : !!(a.a.button & sl[0])) && !(Mh && Oh && a.ctrlKey)
    };
rl.prototype.stopPropagation = function () {
    rl.w.stopPropagation.call(this);
    this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
};
rl.prototype.preventDefault = function () {
    rl.w.preventDefault.call(this);
    var a = this.a;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, ml) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var ul = "closure_listenable_" + (1E6 * Math.random() | 0),
    vl = function (a) {
        return !(!a || !a[ul])
    },
    wl = 0;
var xl = function (a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.pf = e;
        this.key = ++wl;
        this.Id = this.He = !1
    },
    yl = function (a) {
        a.Id = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.pf = null
    };
var zl = function (a) {
    this.src = a;
    this.a = {};
    this.b = 0
};
zl.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var g = Al(a, b, d, e); - 1 < g ? (b = a[g], c || (b.He = !1)) : (b = new xl(b, this.src, f, !!d, e), b.He = c, a.push(b));
    return b
};
var Bl = function (a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = wg(a.a[c], b);
        d && (yl(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    },
    Cl = function (a, b) {
        b = b && b.toString();
        var c = 0,
            d;
        for (d in a.a)
            if (!b || d == b) {
                for (var e = a.a[d], f = 0; f < e.length; f++)++c, yl(e[f]);
                delete a.a[d];
                a.b--
            }
        return c
    };
zl.prototype.Qe = function (a, b) {
    a = this.a[a.toString()];
    var c = [];
    if (a)
        for (var d = 0; d < a.length; ++d) {
            var e = a[d];
            e.capture == b && c.push(e)
        }
    return c
};
zl.prototype.Ud = function (a, b, c, d) {
    a = this.a[a.toString()];
    var e = -1;
    a && (e = Al(a, b, c, d));
    return -1 < e ? a[e] : null
};
zl.prototype.hasListener = function (a, b) {
    var c = z(a),
        d = c ? a.toString() : "",
        e = z(b);
    return oh(this.a, function (a) {
        for (var f = 0; f < a.length; ++f)
            if (!(c && a[f].type != d || e && a[f].capture != b)) return !0;
        return !1
    })
};
var Al = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Id && f.listener == b && f.capture == !!c && f.pf == d) return e
    }
    return -1
};
var Dl = "closure_lm_" + (1E6 * Math.random() | 0),
    El = {},
    Fl = 0,
    O = function (a, b, c, d, e) {
        if (d && d.once) return Gl(a, b, c, d, e);
        if (Yf(b)) {
            for (var f = 0; f < b.length; f++) O(a, b[f], c, d, e);
            return null
        }
        c = Hl(c);
        return vl(a) ? a.K(b, c, ag(d) ? !!d.capture : !!d, e) : Il(a, b, c, !1, d, e)
    },
    Il = function (a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = ag(e) ? !!e.capture : !!e,
            l = Jl(a);
        l || (a[Dl] = l = new zl(a));
        c = l.add(b, c, d, g, f);
        if (c.a) return c;
        d = Kl();
        c.a = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) nl || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
            d, e);
        else if (a.attachEvent) a.attachEvent(Ll(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Fl++;
        return c
    },
    Kl = function () {
        var a = Ml,
            b = ll ? function (c) {
                return a.call(b.src, b.listener, c)
            } : function (c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    },
    Gl = function (a, b, c, d, e) {
        if (Yf(b)) {
            for (var f = 0; f < b.length; f++) Gl(a, b[f], c, d, e);
            return null
        }
        c = Hl(c);
        return vl(a) ? a.Rg(b, c, ag(d) ? !!d.capture : !!d, e) : Il(a, b, c, !0,
            d, e)
    },
    Nl = function (a, b, c, d, e) {
        if (Yf(b))
            for (var f = 0; f < b.length; f++) Nl(a, b[f], c, d, e);
        else d = ag(d) ? !!d.capture : !!d, c = Hl(c), vl(a) ? a.Ga(b, c, d, e) : a && (a = Jl(a)) && (b = a.Ud(b, c, d, e)) && Ol(b)
    },
    Ol = function (a) {
        if (Qf(a) || !a || a.Id) return !1;
        var b = a.src;
        if (vl(b)) return Bl(b.Eb, a);
        var c = a.type,
            d = a.a;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ll(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Fl--;
        (c = Jl(b)) ? (Bl(c, a), 0 == c.b && (c.src = null, b[Dl] = null)) : yl(a);
        return !0
    },
    Pl = function (a, b) {
        if (!a) return 0;
        if (vl(a)) return a.Eb ? Cl(a.Eb, b) : 0;
        a = Jl(a);
        if (!a) return 0;
        var c = 0;
        b = b && b.toString();
        for (var d in a.a)
            if (!b || d == b)
                for (var e = a.a[d].concat(), f = 0; f < e.length; ++f) Ol(e[f]) && ++c;
        return c
    },
    Ll = function (a) {
        return a in El ? El[a] : El[a] = "on" + a
    },
    Rl = function (a, b, c, d) {
        var e = !0;
        if (a = Jl(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.Id && (f = Ql(f, d), e = e && !1 !== f)
                }
        return e
    },
    Ql = function (a, b) {
        var c = a.listener,
            d = a.pf || a.src;
        a.He && Ol(a);
        return c.call(d,
            b)
    },
    Ml = function (a, b) {
        if (a.Id) return !0;
        if (!ll) {
            var c = b || Uf("window.event");
            b = new rl(c, this);
            var d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (e = b.currentTarget; e; e = e.parentNode) c.push(e);
                a = a.type;
                for (e = c.length - 1; !b.ld && 0 <= e; e--) {
                    b.currentTarget = c[e];
                    var f = Rl(c[e], a, !0, b);
                    d = d && f
                }
                for (e = 0; !b.ld && e < c.length; e++) b.currentTarget = c[e], f = Rl(c[e], a, !1, b), d = d && f
            }
            return d
        }
        return Ql(a, new rl(b,
            this))
    },
    Jl = function (a) {
        a = a[Dl];
        return a instanceof zl ? a : null
    },
    Sl = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    Hl = function (a) {
        if ($f(a)) return a;
        a[Sl] || (a[Sl] = function (b) {
            return a.handleEvent(b)
        });
        return a[Sl]
    };
var Tl = function (a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !Lh;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    },
    Wl = function (a, b, c, d, e, f) {
        if (Mh && !ai("525")) return !0;
        if (Oh && e) return Ul(a);
        if (e && !d) return !1;
        if (!Lh) {
            Qf(b) &&
            (b = Vl(b));
            var g = 17 == b || 18 == b || Oh && 91 == b;
            if ((!c || Oh) && g || Oh && 16 == b && (d || f)) return !1
        }
        if ((Mh || Jh) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (G && d && b == a) return !1;
        switch (a) {
            case 13:
                return Lh ? f || e ? !1 : !(c && d) : !0;
            case 27:
                return !(Mh || Jh || Lh)
        }
        return Lh && (d || e || f) ? !1 : Ul(a)
    },
    Ul = function (a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (Mh || Jh) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
            case 163:
                return !0;
            default:
                return !1
        }
    },
    Vl = function (a) {
        if (Lh) a = Xl(a);
        else if (Oh && Mh) switch (a) {
            case 93:
                a = 91
        }
        return a
    },
    Xl = function (a) {
        switch (a) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return a
        }
    };
var Yl = function (a, b) {
    O(a, r, b, !1);
    O(a, pd, function (a) {
        13 === a.keyCode && b(a)
    }, !1)
};
var gm = function (a) {
        this.b = !1;
        this.a = [];
        this.c = {};
        for (var b = 0; b < P(a, 1); b++) {
            var c = new Zl($l(a, 1, b)),
                d = Q(c, 0),
                e = "";
            am(c, 3) && (e = Q(c, 3));
            d in this.c ? d = this.c[d] : (c = new bm(d, e), this.c[d] = c, this.a.push(c), d = c);
            for (c = 0; c < (new Zl($l(a, 1, b))).a(); c++) {
                var f = (new Zl($l(a, 1, b))).b(c);
                e = f;
                e = 0 == P(e, 2) ? -dg(e) : cm(e, 2, 0);
                var g = d;
                if (e in g.b) e = g.b[e];
                else {
                    var l = new dm;
                    g.b[e] = l;
                    g.a.push(l);
                    e = l
                }
                g = Q(f, 0);
                l = Q(f, 4);
                var m = am(f, 3) ? em(f, 3) : -1;
                var p = [];
                for (var q = 0; q < P(f, 1); q++) p.push(cm(f, 1, q));
                f = e;
                g in f.b || (l = new fm(g, l,
                    m, p), f.b[g] = l, f.a.push(l));
                this.b |= 1 < e.a.length
            }
        }
    },
    hm = function (a) {
        for (var b = 0, c = 0; c < a.a.length; c++) {
            for (var d = a.a[c], e = 0, f = 0; f < d.a.length; f++) e += d.a[f].a.length;
            b += e
        }
        for (d = c = 0; d < a.a.length; d++) {
            e = a.a[d];
            for (var g = f = 0; g < e.a.length; g++) {
                for (var l = e.a[g], m = 0, p = 0; p < l.a.length; p++) m += l.a[p].a ? 1 : 0;
                f += m
            }
            c += f
        }
        return b - c
    },
    im = function (a) {
        for (var b = [], c = 0; c < a.a.length; c++)
            for (var d = 0; d < a.a[c].a.length; d++) Array.prototype.push.apply(b, a.a[c].a[d].a);
        return b
    },
    jm = function (a) {
        for (var b = 0; b < a.a.length; b++)
            for (var c =
                0; c < a.a[b].a.length; c++) a.a[b].a[c].a.sort(function (a, b) {
                return b.rb - a.rb
            })
    },
    bm = function (a, b) {
        this.g = a;
        this.c = b;
        this.a = [];
        this.b = {}
    };
bm.prototype.rb = function () {
    for (var a = 0, b = 0; b < this.a.length; b++) a = Math.max(a, this.a[b].rb());
    return a
};
var lm = function (a) {
        for (var b = 0; b < a.a.length; b++)
            if (km(a.a[b])) return !0;
        return !1
    },
    dm = function () {
        this.a = [];
        this.b = {}
    };
dm.prototype.rb = function () {
    for (var a = 0, b = 0; b < this.a.length; b++) a = Math.max(a, this.a[b].rb);
    return a
};
var km = function (a) {
        for (var b = 0; b < a.a.length; b++)
            if (a.a[b].a) return !0;
        return !1
    },
    fm = function (a, b, c, d) {
        this.text = a;
        this.Hd = b;
        this.rb = c;
        this.Ff = d;
        this.a = !1;
        this.b = 0
    };
var R = function () {
    gl.call(this);
    this.Eb = new zl(this);
    this.dk = this;
    this.Wg = null
};
C(R, gl);
R.prototype[ul] = !0;
x = R.prototype;
x.Re = v("Wg");
x.Kd = zf("Wg");
x.addEventListener = function (a, b, c, d) {
    O(this, a, b, c, d)
};
x.removeEventListener = function (a, b, c, d) {
    Nl(this, a, b, c, d)
};
x.dispatchEvent = function (a) {
    var b = this.Re();
    if (b) {
        var c = [];
        for (var d = 1; b; b = b.Re()) c.push(b), ++d
    }
    b = this.dk;
    d = a.type || a;
    if (Pf(a)) a = new N(a, b);
    else if (a instanceof N) a.target = a.target || b;
    else {
        var e = a;
        a = new N(d, b);
        wh(a, e)
    }
    e = !0;
    if (c)
        for (var f = c.length - 1; !a.ld && 0 <= f; f--) {
            var g = a.currentTarget = c[f];
            e = mm(g, d, !0, a) && e
        }
    a.ld || (g = a.currentTarget = b, e = mm(g, d, !0, a) && e, a.ld || (e = mm(g, d, !1, a) && e));
    if (c)
        for (f = 0; !a.ld && f < c.length; f++) g = a.currentTarget = c[f], e = mm(g, d, !1, a) && e;
    return e
};
x.T = function () {
    R.w.T.call(this);
    this.Eb && Cl(this.Eb, void 0);
    this.Wg = null
};
x.K = function (a, b, c, d) {
    return this.Eb.add(String(a), b, !1, c, d)
};
x.Rg = function (a, b, c, d) {
    return this.Eb.add(String(a), b, !0, c, d)
};
x.Ga = function (a, b, c, d) {
    var e = this.Eb;
    a = String(a).toString();
    if (a in e.a) {
        var f = e.a[a];
        b = Al(f, b, c, d); - 1 < b ? (yl(f[b]), vg(f, b), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1
    } else e = !1;
    return e
};
var mm = function (a, b, c, d) {
    b = a.Eb.a[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.Id && g.capture == c) {
            var l = g.listener,
                m = g.pf || g.src;
            g.He && Bl(a.Eb, g);
            e = !1 !== l.call(m, d) && e
        }
    }
    return e && 0 != d.Pi
};
R.prototype.Qe = function (a, b) {
    return this.Eb.Qe(String(a), b)
};
R.prototype.Ud = function (a, b, c, d) {
    return this.Eb.Ud(String(a), b, c, d)
};
R.prototype.hasListener = function (a, b) {
    return this.Eb.hasListener(z(a) ? String(a) : void 0, b)
};
var nm = function (a, b) {
    this.c = a;
    this.g = b;
    this.b = 0;
    this.a = null
};
nm.prototype.get = function () {
    if (0 < this.b) {
        this.b--;
        var a = this.a;
        this.a = a.next;
        a.next = null
    } else a = this.c();
    return a
};
var om = function (a, b) {
    a.g(b);
    100 > a.b && (a.b++, b.next = a.a, a.a = b)
};
var pm = function (a) {
        y.setTimeout(function () {
            throw a;
        }, 0)
    },
    qm, rm = function () {
        var a = y.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !E("Presto") && (a = function () {
            var a = document.createElement(Ca);
            a.style.display = Ld;
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow;
            a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(),
                d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
            a = A(function (a) {
                if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    b.postMessage(c, d)
                }
            }
        });
        if ("undefined" !== typeof a && !zh()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function () {
                if (z(c.next)) {
                    c = c.next;
                    var a = c.Dh;
                    c.Dh = null;
                    a()
                }
            };
            return function (a) {
                d.next = {
                    Dh: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement(Ja) ? function (a) {
            var b = document.createElement(Ja);
            b.onreadystatechange = function () {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            };
            document.documentElement.appendChild(b)
        } : function (a) {
            y.setTimeout(a, 0)
        }
    };
var sm = function () {
        this.b = this.a = null
    },
    um = new nm(function () {
        return new tm
    }, function (a) {
        a.reset()
    });
sm.prototype.add = function (a, b) {
    var c = um.get();
    c.set(a, b);
    this.b ? this.b.next = c : this.a = c;
    this.b = c
};
var wm = function () {
        var a = vm,
            b = null;
        a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
        return b
    },
    tm = function () {
        this.next = this.a = this.xc = null
    };
tm.prototype.set = function (a, b) {
    this.xc = a;
    this.a = b;
    this.next = null
};
tm.prototype.reset = function () {
    this.next = this.a = this.xc = null
};
var Am = function (a, b) {
        xm || ym();
        zm || (xm(), zm = !0);
        vm.add(a, b)
    },
    xm, ym = function () {
        if (y.Promise && y.Promise.resolve) {
            var a = y.Promise.resolve(void 0);
            xm = function () {
                a.then(Bm)
            }
        } else xm = function () {
            var a = Bm;
            !$f(y.setImmediate) || y.Window && y.Window.prototype && !E(Aa) && y.Window.prototype.setImmediate == y.setImmediate ? (qm || (qm = rm()), qm(a)) : y.setImmediate(a)
        }
    },
    zm = !1,
    vm = new sm,
    Bm = function () {
        for (var a; a = wm();) {
            try {
                a.xc.call(a.a)
            } catch (b) {
                pm(b)
            }
            om(um, a)
        }
        zm = !1
    };
var Cm = function (a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    },
    Dm = function (a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
var Fm = function (a, b) {
        this.a = 0;
        this.m = void 0;
        this.g = this.b = this.c = null;
        this.j = this.o = !1;
        if (a != Vf) try {
            var c = this;
            a.call(b, function (a) {
                Em(c, 2, a)
            }, function (a) {
                Em(c, 3, a)
            })
        } catch (d) {
            Em(this, 3, d)
        }
    },
    Gm = function () {
        this.next = this.context = this.b = this.c = this.a = null;
        this.g = !1
    };
Gm.prototype.reset = function () {
    this.context = this.b = this.c = this.a = null;
    this.g = !1
};
var Hm = new nm(function () {
        return new Gm
    }, function (a) {
        a.reset()
    }),
    Im = function (a, b, c) {
        var d = Hm.get();
        d.c = a;
        d.b = b;
        d.context = c;
        return d
    };
Fm.prototype.then = function (a, b, c) {
    return Jm(this, $f(a) ? a : null, $f(b) ? b : null, c)
};
Cm(Fm);
Fm.prototype.cancel = function (a) {
    0 == this.a && Am(function () {
        var b = new Km(a);
        Lm(this, b)
    }, this)
};
var Lm = function (a, b) {
        if (0 == a.a)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var d = 0, e = null, f = null, g = c.b; g && (g.g || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.a && 1 == d ? Lm(c, b) : (f ? (d = f, d.next == c.g && (c.g = d), d.next = d.next.next) : Mm(c), Nm(c, e, 3, b)))
                }
                a.c = null
            } else Em(a, 3, b)
    },
    Pm = function (a, b) {
        a.b || 2 != a.a && 3 != a.a || Om(a);
        a.g ? a.g.next = b : a.b = b;
        a.g = b
    },
    Jm = function (a, b, c, d) {
        var e = Im(null, null, null);
        e.a = new Fm(function (a, g) {
            e.c = b ? function (c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (p) {
                    g(p)
                }
            } : a;
            e.b = c ? function (b) {
                try {
                    var e = c.call(d,
                        b);
                    !z(e) && b instanceof Km ? g(b) : a(e)
                } catch (p) {
                    g(p)
                }
            } : g
        });
        e.a.c = a;
        Pm(a, e);
        return e.a
    };
Fm.prototype.F = function (a) {
    this.a = 0;
    Em(this, 2, a)
};
Fm.prototype.C = function (a) {
    this.a = 0;
    Em(this, 3, a)
};
var Em = function (a, b, c) {
        if (0 == a.a) {
            a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.a = 1;
            a: {
                var d = c,
                    e = a.F,
                    f = a.C;
                if (d instanceof Fm) {
                    Pm(d, Im(e || Vf, f || null, a));
                    var g = !0
                } else if (Dm(d)) d.then(e, f, a), g = !0;
                else {
                    if (ag(d)) try {
                        var l = d.then;
                        if ($f(l)) {
                            Qm(d, l, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (m) {
                        f.call(a, m);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
            g || (a.m = c, a.a = b, a.c = null, Om(a), 3 != b || c instanceof Km || Rm(a, c))
        }
    },
    Qm = function (a, b, c, d, e) {
        var f = !1,
            g = function (a) {
                f || (f = !0, c.call(e, a))
            },
            l = function (a) {
                f || (f = !0, d.call(e, a))
            };
        try {
            b.call(a,
                g, l)
        } catch (m) {
            l(m)
        }
    },
    Om = function (a) {
        a.o || (a.o = !0, Am(a.v, a))
    },
    Mm = function (a) {
        var b = null;
        a.b && (b = a.b, a.b = b.next, b.next = null);
        a.b || (a.g = null);
        return b
    };
Fm.prototype.v = function () {
    for (var a; a = Mm(this);) Nm(this, a, this.a, this.m);
    this.o = !1
};
var Nm = function (a, b, c, d) {
        if (3 == c && b.b && !b.g)
            for (; a && a.j; a = a.c) a.j = !1;
        if (b.a) b.a.c = null, Sm(b, c, d);
        else try {
            b.g ? b.c.call(b.context) : Sm(b, c, d)
        } catch (e) {
            Tm.call(null, e)
        }
        om(Hm, b)
    },
    Sm = function (a, b, c) {
        2 == b ? a.c.call(a.context, c) : a.b && a.b.call(a.context, c)
    },
    Rm = function (a, b) {
        a.j = !0;
        Am(function () {
            a.j && Tm.call(null, b)
        })
    },
    Tm = pm,
    Km = function (a) {
        ig.call(this, a)
    };
C(Km, ig);
Km.prototype.name = "cancel";
var Um = function (a, b) {
    R.call(this);
    this.g = a || 1;
    this.c = b || y;
    this.j = A(this.m, this);
    this.o = hg()
};
C(Um, R);
Um.prototype.b = !1;
Um.prototype.a = null;
var Vm = function (a, b) {
    a.g = b;
    a.a && a.b ? (a.stop(), a.start()) : a.a && a.stop()
};
Um.prototype.m = function () {
    if (this.b) {
        var a = hg() - this.o;
        0 < a && a < .8 * this.g ? this.a = this.c.setTimeout(this.j, this.g - a) : (this.a && (this.c.clearTimeout(this.a), this.a = null), this.dispatchEvent(Se), this.b && (this.stop(), this.start()))
    }
};
Um.prototype.start = function () {
    this.b = !0;
    this.a || (this.a = this.c.setTimeout(this.j, this.g), this.o = hg())
};
Um.prototype.stop = function () {
    this.b = !1;
    this.a && (this.c.clearTimeout(this.a), this.a = null)
};
Um.prototype.T = function () {
    Um.w.T.call(this);
    this.stop();
    delete this.c
};
var Xm = function (a, b, c) {
        if ($f(a)) c && (a = A(a, c));
        else if (a && typeof a.handleEvent == Wb) a = A(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : y.setTimeout(a, b || 0)
    },
    Ym = function (a) {
        y.clearTimeout(a)
    };
var Zm = function () {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        q = p = 0
    }

    function b(a) {
        for (var b = g, c = 0; 64 > c; c += 4) b[c / 4] = a[c] << 24 | a[c + 1] << 16 | a[c + 2] << 8 | a[c + 3];
        for (c = 16; 80 > c; c++) a = b[c - 3] ^ b[c - 8] ^ b[c - 14] ^ b[c - 16], b[c] = (a << 1 | a >>> 31) & 4294967295;
        a = e[0];
        var d = e[1],
            f = e[2],
            l = e[3],
            m = e[4];
        for (c = 0; 80 > c; c++) {
            if (40 > c)
                if (20 > c) {
                    var p = l ^ d & (f ^ l);
                    var q = 1518500249
                } else p = d ^ f ^ l, q = 1859775393;
            else 60 > c ? (p = d & f | l & (d | f), q = 2400959708) : (p = d ^ f ^ l, q = 3395469782);
            p = ((a << 5 | a >>> 27) & 4294967295) +
                p + m + q + b[c] & 4294967295;
            m = l;
            l = f;
            f = (d << 30 | d >>> 2) & 4294967295;
            d = a;
            a = p
        }
        e[0] = e[0] + a & 4294967295;
        e[1] = e[1] + d & 4294967295;
        e[2] = e[2] + f & 4294967295;
        e[3] = e[3] + l & 4294967295;
        e[4] = e[4] + m & 4294967295
    }

    function c(a, c) {
        if (typeof a === Ke) {
            a = unescape(encodeURIComponent(a));
            for (var d = [], e = 0, g = a.length; e < g; ++e) d.push(a.charCodeAt(e));
            a = d
        }
        c || (c = a.length);
        d = 0;
        if (0 == p)
            for (; d + 64 < c;) b(a.slice(d, d + 64)), d += 64, q += 64;
        for (; d < c;)
            if (f[p++] = a[d++], q++, 64 == p)
                for (p = 0, b(f); d + 64 < c;) b(a.slice(d, d + 64)), d += 64, q += 64
    }

    function d() {
        var a = [],
            d = 8 * q;
        56 > p ? c(l, 56 - p) : c(l, 64 - (p - 56));
        for (var g = 63; 56 <= g; g--) f[g] = d & 255, d >>>= 8;
        b(f);
        for (g = d = 0; 5 > g; g++)
            for (var m = 24; 0 <= m; m -= 8) a[d++] = e[g] >> m & 255;
        return a
    }
    for (var e = [], f = [], g = [], l = [128], m = 1; 64 > m; ++m) l[m] = 0;
    var p, q;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Ck: function () {
            for (var a = d(), b = "", c = 0; c < a.length; c++) b += "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) + "0123456789ABCDEF".charAt(a[c] % 16);
            return b
        }
    }
};
var an = function (a, b, c) {
        var d = [],
            e = [];
        if (1 == (Yf(c) ? 2 : 1)) return e = [b, a], D(d, function (a) {
            e.push(a)
        }), $m(e.join(" "));
        var f = [],
            g = [];
        D(c, function (a) {
            g.push(a.key);
            f.push(a.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        D(d, function (a) {
            e.push(a)
        });
        a = $m(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    },
    $m = function (a) {
        var b = Zm();
        b.update(a);
        return b.Ck().toLowerCase()
    };
var bn = function () {
    this.a = document || {
        cookie: ""
    }
};
x = bn.prototype;
x.isEnabled = function () {
    return navigator.cookieEnabled
};
x.set = function (a, b, c, d, e, f) {
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    z(c) || (c = -1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(hg() + 1E3 * c)).toUTCString();
    this.a.cookie = a + "=" + b + e + d + c + f
};
x.get = function (a, b) {
    for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = Lg(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return ""
    }
    return b
};
x.Lb = function () {
    return cn(this).keys
};
x.nb = function () {
    return cn(this).values
};
var cn = function (a) {
    a = (a.a.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = Lg(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
        keys: b,
        values: c
    }
};
var dn = function (a) {
    var b = Ii(String(y.location.href)),
        c = y.__OVERRIDE_SID;
    null == c && (c = (new bn).get("SID"));
    if (c && (b = (c = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? y.__SAPISID : y.__APISID, null == b && (b = (new bn).get(c ? "SAPISID" : "APISID")), b)) {
        c = c ? "SAPISIDHASH" : "APISIDHASH";
        var d = String(y.location.href);
        return d && b && c ? [c, an(Ii(d), b, a || null)].join(" ") : null
    }
    return null
};
var en = function (a) {
    this.a = this.b = this.c = a
};
en.prototype.reset = function () {
    this.a = this.b = this.c
};
en.prototype.W = v("b");
var fn = function (a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    },
    gn = function (a) {
        a = String(a);
        if (fn(a)) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    },
    hn = u();
hn.prototype.Tc = function (a) {
    var b = [];
    jn(this, a, b);
    return b.join("")
};
var jn = function (a, b, c) {
        if (null == b) c.push("null");
        else {
            if (typeof b == Nd) {
                if (Yf(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), jn(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], typeof f != Wb && (c.push(e), kn(d, c), c.push(":"), jn(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case Ke:
                    kn(b, c);
                    break;
                case Md:
                    c.push(isFinite(b) && !isNaN(b) ?
                        String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case Wb:
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    },
    ln = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    },
    mn = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
    kn = function (a, b) {
        b.push('"', a.replace(mn, function (a) {
            var b = ln[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), ln[a] = b);
            return b
        }), '"')
    };
var nn = u();
nn.prototype.a = null;
var pn = function (a) {
    var b;
    (b = a.a) || (b = {}, on(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
    return b
};
var qn, rn = u();
C(rn, nn);
var sn = function (a) {
        return (a = on(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    },
    on = function (a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    };
qn = new rn;
var tn = "StopIteration" in y ? y.StopIteration : {
        message: "StopIteration",
        stack: ""
    },
    un = u();
un.prototype.next = function () {
    throw tn;
};
un.prototype.Hb = function () {
    return this
};
var vn = function (a) {
        if (a instanceof un) return a;
        if (typeof a.Hb == Wb) return a.Hb(!1);
        if (Zf(a)) {
            var b = 0,
                c = new un;
            c.next = function () {
                for (;;) {
                    if (b >= a.length) throw tn;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    },
    wn = function (a, b, c) {
        a = vn(a);
        try {
            for (; b.call(c, a.next(), void 0, a););
        } catch (d) {
            if (d !== tn) throw d;
        }
    };
var xn = function (a, b) {
    this.b = {};
    this.a = [];
    this.g = this.c = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error(Sa);
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a)
        if (a instanceof xn)
            for (c = a.Lb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
        else
            for (d in a) this.set(d, a[d])
};
xn.prototype.nb = function () {
    yn(this);
    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
    return a
};
xn.prototype.Lb = function () {
    yn(this);
    return this.a.concat()
};
var An = function (a, b) {
    return zn(a.b, b)
};
xn.prototype.$c = function () {
    this.b = {};
    this.g = this.c = this.a.length = 0
};
var Bn = function (a, b) {
        zn(a.b, b) && (delete a.b[b], a.c--, a.g++, a.a.length > 2 * a.c && yn(a))
    },
    yn = function (a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                zn(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) d = a.a[b], zn(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
xn.prototype.get = function (a, b) {
    return zn(this.b, a) ? this.b[a] : b
};
xn.prototype.set = function (a, b) {
    zn(this.b, a) || (this.c++, this.a.push(a), this.g++);
    this.b[a] = b
};
xn.prototype.forEach = function (a, b) {
    for (var c = this.Lb(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this)
    }
};
xn.prototype.Hb = function (a) {
    yn(this);
    var b = 0,
        c = this.g,
        d = this,
        e = new un;
    e.next = function () {
        if (c != d.g) throw Error("The map has changed since the iterator was created");
        if (b >= d.a.length) throw tn;
        var e = d.a[b++];
        return a ? e : d.b[e]
    };
    return e
};
var zn = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var Cn = function (a) {
        if (a.nb && typeof a.nb == Wb) return a.nb();
        if (Pf(a)) return a.split("");
        if (Zf(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    },
    Dn = function (a, b, c) {
        if (a.forEach && typeof a.forEach == Wb) a.forEach(b, c);
        else if (Zf(a) || Pf(a)) D(a, b, c);
        else {
            if (a.Lb && typeof a.Lb == Wb) var d = a.Lb();
            else if (a.nb && typeof a.nb == Wb) d = void 0;
            else if (Zf(a) || Pf(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++) d.push(f)
            } else d = ph(a);
            e = Cn(a);
            f = e.length;
            for (var g = 0; g < f; g++) b.call(c,
                e[g], d && d[g], a)
        }
    };
var En = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    Fn = function (a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? Ng(e) : "")
            }
        }
    },
    Gn = function (a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.substr(0, d), e, a.substr(c)];
        c = a[1];
        a[1] = b ?
            c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    },
    Hn = function (a, b, c) {
        if (Yf(b))
            for (var d = 0; d < b.length; d++) Hn(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + Mg(b)))
    },
    In = function (a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) Hn(a[b], a[b + 1], c);
        return c.join("&")
    },
    Jn = function (a) {
        var b = [],
            c;
        for (c in a) Hn(c, a[c], b);
        return b.join("&")
    },
    Kn = function (a, b) {
        var c = 2 == arguments.length ? In(arguments[1], 0) : In(arguments, 1);
        return Gn(a, c)
    },
    Ln = function (a, b, c) {
        c = null != c ? "=" + Mg(c) : "";
        return Gn(a, b + c)
    },
    Mn = function (a,
                   b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    },
    Nn = /#|$/,
    On = /[?&]($|#)/,
    Pn = function (a, b) {
        Hg(a, "/") && (a = a.substr(0, a.length - 1));
        Gg(b, "/") && (b = b.substr(1));
        return eh(a, "/", b)
    };
var Qn = function (a) {
    R.call(this);
    this.headers = new xn;
    this.Hf = a || null;
    this.Bb = !1;
    this.Gf = this.va = null;
    this.ce = "";
    this.jd = 0;
    this.fd = this.Jg = this.rf = this.gg = !1;
    this.Df = 0;
    this.Cf = null;
    this.Oi = "";
    this.nh = this.ie = !1
};
C(Qn, R);
Qn.prototype.G = null;
var Rn = /^https?$/i,
    Sn = [Ia, "PUT"],
    Tn = [],
    Un = function (a, b, c, d, e, f, g) {
        var l = new Qn;
        Tn.push(l);
        b && l.K(vb, b);
        l.Rg("ready", l.pk);
        f && (l.Df = Math.max(0, f));
        g && (l.ie = g);
        l.send(a, c, d, e);
        return l
    };
Qn.prototype.pk = function () {
    this.Da();
    wg(Tn, this)
};
Qn.prototype.send = function (a, b, c, d) {
    if (this.va) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.ce + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.ce = a;
    this.jd = 0;
    this.gg = !1;
    this.Bb = !0;
    this.va = this.Hf ? sn(this.Hf) : sn(qn);
    this.Gf = this.Hf ? pn(this.Hf) : pn(qn);
    this.va.onreadystatechange = A(this.Ii, this);
    try {
        this.Jg = !0, this.va.open(b, String(a), !0), this.Jg = !1
    } catch (f) {
        this.Oe(5, f);
        return
    }
    a = c || "";
    var e = new xn(this.headers);
    d && Dn(d, function (a, b) {
        e.set(b, a)
    });
    d = sg(e.Lb(), Vn);
    c = y.FormData &&
        a instanceof y.FormData;
    !tg(Sn, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (a, b) {
        this.va.setRequestHeader(b, a)
    }, this);
    this.Oi && (this.va.responseType = this.Oi);
    "withCredentials" in this.va && this.va.withCredentials !== this.ie && (this.va.withCredentials = this.ie);
    try {
        Wn(this), 0 < this.Df && ((this.nh = Xn(this.va)) ? (this.va.timeout = this.Df, this.va.ontimeout = A(this.Vc, this)) : this.Cf = Xm(this.Vc, this.Df, this)), this.rf = !0, this.va.send(a), this.rf = !1
    } catch (f) {
        this.Oe(5,
            f)
    }
};
var Xn = function (a) {
        return G && ai(9) && Qf(a.timeout) && z(a.ontimeout)
    },
    Vn = function (a) {
        return "content-type" == a.toLowerCase()
    };
Qn.prototype.Vc = function () {
    "undefined" != typeof Of && this.va && (this.jd = 8, this.dispatchEvent("timeout"), this.abort(8))
};
Qn.prototype.Oe = function (a) {
    this.Bb = !1;
    this.va && (this.fd = !0, this.va.abort(), this.fd = !1);
    this.jd = a;
    Yn(this);
    Zn(this)
};
var Yn = function (a) {
    a.gg || (a.gg = !0, a.dispatchEvent(vb), a.dispatchEvent(Qb))
};
Qn.prototype.abort = function (a) {
    this.va && this.Bb && (this.Bb = !1, this.fd = !0, this.va.abort(), this.fd = !1, this.jd = a || 7, this.dispatchEvent(vb), this.dispatchEvent("abort"), Zn(this))
};
Qn.prototype.T = function () {
    this.va && (this.Bb && (this.Bb = !1, this.fd = !0, this.va.abort(), this.fd = !1), Zn(this, !0));
    Qn.w.T.call(this)
};
Qn.prototype.Ii = function () {
    this.vc || (this.Jg || this.rf || this.fd ? $n(this) : this.bm())
};
Qn.prototype.bm = function () {
    $n(this)
};
var $n = function (a) {
        if (a.Bb && "undefined" != typeof Of && (!a.Gf[1] || 4 != ao(a) || 2 != bo(a)))
            if (a.rf && 4 == ao(a)) Xm(a.Ii, 0, a);
            else if (a.dispatchEvent($d), 4 == ao(a)) {
                a.Bb = !1;
                try {
                    co(a) ? (a.dispatchEvent(vb), a.dispatchEvent("success")) : (a.jd = 6, Yn(a))
                } finally {
                    Zn(a)
                }
            }
    },
    Zn = function (a, b) {
        if (a.va) {
            Wn(a);
            var c = a.va,
                d = a.Gf[0] ? Vf : null;
            a.va = null;
            a.Gf = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    },
    Wn = function (a) {
        a.va && a.nh && (a.va.ontimeout = null);
        a.Cf && (Ym(a.Cf), a.Cf = null)
    };
Qn.prototype.gb = function () {
    return !!this.va
};
var co = function (a) {
        var b = bo(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.ce).match(En)[1] || null, !a && y.self && y.self.location && (a = y.self.location.protocol, a = a.substr(0, a.length - 1)), b = !Rn.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    },
    ao = function (a) {
        return a.va ? a.va.readyState : 0
    },
    bo = function (a) {
        try {
            return 2 < ao(a) ? a.va.status : -1
        } catch (b) {
            return -1
        }
    },
    eo = function (a) {
        try {
            return a.va ? a.va.responseText : ""
        } catch (b) {
            return ""
        }
    },
    fo = function (a) {
        if (a.va) {
            a: {
                a = a.va.responseText;
                if (y.JSON) try {
                    var b = y.JSON.parse(a);
                    break a
                } catch (c) {}
                b = gn(a)
            }
            return b
        }
    };
Qn.prototype.getResponseHeader = function (a) {
    if (this.va && 4 == ao(this)) return a = this.va.getResponseHeader(a), null === a ? void 0 : a
};
Qn.prototype.getAllResponseHeaders = function () {
    return this.va && 4 == ao(this) ? this.va.getAllResponseHeaders() || "" : ""
};
var go = function (a, b, c) {
    Un(a.url, function (a) {
        a = a.target;
        co(a) ? b(eo(a)) : c(bo(a))
    }, a.a, a.body, a.b, a.c, a.withCredentials)
};
var io = function (a) {
    si(this, a, 28, ho)
};
C(io, oi);
var ko = function (a) {
    si(this, a, -1, jo)
};
C(ko, oi);
var lo = function (a) {
    si(this, a, -1, null)
};
C(lo, oi);
var mo = function (a) {
    si(this, a, -1, null)
};
C(mo, oi);
var oo = function (a) {
    si(this, a, 17, no)
};
C(oo, oi);
var qo = function (a) {
    si(this, a, 6, po)
};
C(qo, oi);
var ho = [3, 20, 27],
    jo = [2],
    no = [3, 5],
    ro = function (a) {
        var b = hg().toString();
        H(a, 4, b)
    },
    po = [5];
var so = function (a) {
    si(this, a, -1, null)
};
C(so, oi);
var Ci = new function () {
    this.b = 175237375;
    this.a = so;
    this.c = 0
};
var to = function (a, b, c, d, e, f, g, l, m) {
    R.call(this);
    this.$ = a;
    this.J = b || Vf;
    this.j = new oo;
    this.aa = d;
    this.a = [];
    this.N = "";
    this.ma = gg(bk, 0, 1);
    this.F = e || null;
    this.m = c || null;
    this.C = g || !1;
    this.D = m || null;
    this.V = this.ia = !1;
    this.R = this.O = -1;
    this.G = this.c = null;
    this.ie = !l;
    this.L = 0;
    this.ea = 1;
    this.X = f || !1;
    a = new mo;
    H(a, 1, 1);
    f || (f = new lo, b = document.documentElement.getAttribute("lang"), H(f, 5, b), xi(a, 11, f));
    xi(this.j, 1, a);
    H(this.j, 2, this.$);
    this.g = new en(1E4);
    this.b = new Um(this.g.W());
    il(this, this.b);
    O(this.b, Se, Qi(this.flush), !1, this);
    this.v = new Um(6E5);
    il(this, this.v);
    O(this.v, Se, Qi(this.flush), !1, this);
    this.C || this.v.start();
    this.X || (O(tk(), hb, this.o, !1, this), O(tk(), kf, this.o, !1, this), O(document, "pagehide", this.o, !1, this))
};
C(to, R);
to.prototype.T = function () {
    this.o();
    to.w.T.call(this)
};
var uo = function (a) {
    a.F || (a.F = .01 > a.ma() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.F
};
to.prototype.log = function (a) {
    a = Fi(a);
    var b = this.ea++;
    H(a, 21, b);
    if (!ti(a, 1)) {
        b = a;
        var c = hg().toString();
        H(b, 1, c)
    }
    this.c && (b = Fi(this.c), xi(a, 16, b));
    for (; 1E3 <= this.a.length;) this.a.shift(), ++this.L;
    this.a.push(a);
    this.dispatchEvent(new vo(a));
    this.C || this.b.b || this.b.start()
};
to.prototype.flush = function (a, b) {
    if (0 == this.a.length) a && a();
    else {
        var c = hg();
        if (this.R > c && this.O < c) b && b("throttled");
        else {
            var d = Fi(this.j);
            ro(d);
            yi(d, 3, this.a);
            H(d, 14, this.L);
            c = {};
            var e = this.J();
            e && (c.Authorization = e);
            var f = uo(this);
            this.m && (c["X-Goog-AuthUser"] = this.m, f = Ln(f, db, this.m));
            this.D && (c["X-Goog-PageId"] = this.D, f = Ln(f, "pageId", this.D));
            if (e && this.N == e) b && b("stale-auth-token");
            else {
                this.a = [];
                this.b.b && this.b.stop();
                this.L = 0;
                var g = d.Tc();
                c = {
                    url: f,
                    body: g,
                    g: 1,
                    b: c,
                    a: Ia,
                    withCredentials: this.ie,
                    c: 0
                };
                f = A(function (b) {
                    this.g.reset();
                    Vm(this.b, this.g.W());
                    if (b) {
                        try {
                            var c = JSON.parse(b.replace(")]}'\n", ""));
                            var d = new qo(c)
                        } catch (q) {}
                        d && (b = vi(d, "-1"), b = Number(b), 0 < b && (this.O = hg(), this.R = this.O + b), d = Di(d)) && (d = vi(d, -1), -1 != d && (this.g = new en(1 > d ? 1 : d), Vm(this.b, this.g.W())))
                    }
                    a && a()
                }, this);
                g = A(function (a) {
                    wi(d, io, 3);
                    var c = d.a[3];
                    c == qi && (c = d.a[3] = []);
                    var f = this.g;
                    f.a = Math.min(3E5, 2 * f.a);
                    f.b = Math.min(3E5, f.a + Math.round(.2 * (Math.random() - .5) * f.a));
                    Vm(this.b, this.g.W());
                    401 == a && e && (this.N = e);
                    if (500 <= a &&
                        600 > a || 401 == a || 0 == a) this.a = c.concat(this.a), this.C || this.b.b || this.b.start();
                    b && b("net-send-failed", a)
                }, this);
                this.aa(c, f, g)
            }
        }
    }
};
to.prototype.o = function () {
    this.ia && wo(this);
    this.V && xo(this);
    this.flush()
};
var wo = function (a) {
        yo(a, 32, 10, function (a, c) {
            a = Ln(a, "format", "json");
            return tk().navigator.sendBeacon(a, c.Tc())
        })
    },
    xo = function (a) {
        yo(a, 6, 5, A(function (a, c) {
            c = c.Tc();
            for (var b = [], e = 0, f = 0; f < c.length; f++) {
                var g = c.charCodeAt(f);
                255 < g && (b[e++] = g & 255, g >>= 8);
                b[e++] = g
            }
            c = ni(b, !0);
            a = Kn(a, "format", "base64json", "p", c);
            (new Image).src = a;
            return !0
        }, a))
    },
    yo = function (a, b, c, d) {
        if (0 != a.a.length) {
            var e = uo(a);
            for (var f = e.search(Nn), g = 0, l, m = []; 0 <= (l = Mn(e, g, "format", f));) m.push(e.substring(g, l)), g = Math.min(e.indexOf("&",
                l) + 1 || f, f);
            m.push(e.substr(g));
            e = m.join("").replace(On, "$1");
            e = Kn(e, "auth", a.J(), db, a.m || "0");
            for (f = 0; f < c && a.a.length; ++f) {
                g = a.a.slice(0, b);
                l = Fi(a.j);
                ro(l);
                yi(l, 3, g);
                if (!d(e, l)) break;
                a.a = a.a.slice(g.length)
            }
        }
    },
    vo = function () {
        this.type = "event-logged"
    };
C(vo, N);
var zo = function (a, b, c, d, e, f) {
    to.call(this, a, dn, b, go, c, d, e, void 0, f)
};
C(zo, to);
var Ao = function (a, b) {
    this.a = new zo(375, a, void 0, !1, !0);
    il(this, this.a);
    this.a.ia = !!tk().navigator.sendBeacon && (ji || fi && ai(45));
    this.a.V = !0;
    b && 0 < b.length && (a = new Hi, H(a, 3, b || []), b = this.a, a ? (b.c || (b.c = new ko), a = a.Tc(), H(b.c, 4, a)) : b.c && H(b.c, 4, void 0));
    this.g = 0;
    this.b = new Um(1E3);
    il(this, this.b);
    O(this.b, Se, this.c, !1, this);
    this.b.start()
};
C(Ao, R);
Ao.prototype.T = function () {
    this.b.stop();
    Nl(this.b, Se, this.c, !1, this);
    this.c();
    Ao.w.T.call(this)
};
Ao.prototype.c = function () {
    0 < this.g && this.a.flush(A(this.j, this))
};
Ao.prototype.j = function () {
    this.g = 0
};
Ao.prototype.log = function (a) {
    this.a.log(a);
    900 <= ++this.g && this.c()
};
var Bo = function (a) {
        return (a = a.exec(jh)) ? a[1] : ""
    },
    Co = function () {
        if (fi) return Bo(/Firefox\/([0-9.]+)/);
        if (G || Jh || Ih) return $h;
        if (ji) return Dh() ? Bo(/CriOS\/([0-9.]+)/) : Bo(/Chrome\/([0-9.]+)/);
        if (ki && !Dh()) return Bo(/Version\/([0-9.]+)/);
        if (gi || hi) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(jh);
            if (a) return a[1] + "." + a[2]
        } else if (ii) return (a = Bo(/Android\s+([0-9.]+)/)) ? a : Bo(/Version\/([0-9.]+)/);
        return ""
    }(),
    Do = function (a) {
        return 0 <= gh(Co, a)
    };
var Eo = function () {
    this.a = G ? Do(9) : ji && Do(25) || G && Do(8) || Jh || fi && Do(19) || Ih && Do(12.1) || ki && Do(5.1) || hi && Do(3.2) || ii && Do(2.1)
};
Wf(Eo);
var Ho = function (a, b) {
        var c = Fo[b];
        b = Go[b];
        c = null != c ? zg(c) : [];
        if (a.a && null != b)
            for (a = 0; a < b.length; a++) c.push(b[a]);
        return c
    },
    Jo = function (a) {
        return 0 <= a.indexOf("-i0-") && !Io(a)
    },
    Io = function (a) {
        return 0 <= a.indexOf("-i0-handwrit")
    },
    Fo = {
        af: [ud],
        am: ["am-t-i0-und", "und-ethi-t-k0-und"],
        ar: ["ar-t-i0-und", "ar-t-k0-und"],
        be: ["be-t-i0-und", "be-t-k0-und"],
        bg: ["bg-t-i0-und", "bg-t-k0-und", "bg-t-k0-qwerty"],
        bn: ["bn-t-i0-und", "bn-t-k0-und", "bn-t-und-latn-k0-und"],
        bs: ["bs-t-k0-und"],
        ca: ["ca-t-k0-und"],
        chr: ["chr-t-k0-und",
            "chr-t-und-latn-k0-und"
        ],
        cs: ["cs-t-k0-und", "cs-t-k0-qwertz"],
        cy: [ud],
        da: ["da-t-k0-und"],
        de: ["de-t-k0-und", "de-ch-t-k0-und", Ob],
        el: ["el-t-i0-und", "el-t-k0-und"],
        en: ["en-t-k0-und", "en-t-k0-dvorak"],
        es: ["es-t-k0-und", Ob],
        et: ["et-t-k0-und"],
        eu: ["eu-t-k0-und"],
        fa: ["fa-t-i0-und", "fa-t-k0-und"],
        fi: ["fi-t-k0-und"],
        fr: [Vb, Ob],
        ga: [ud],
        gl: ["gl-t-k0-und"],
        gu: ["gu-t-i0-und", "gu-t-k0-und", "gu-t-und-latn-k0-qwerty"],
        ha: [ud],
        hi: ["hi-t-i0-und", "hi-t-k0-und", Qc],
        hr: ["hr-t-k0-und"],
        ht: [Vb],
        hu: ["hu-t-k0-101key"],
        hy: ["hy-hyr-t-k0-und",
            "hy-hyt-t-k0-und"
        ],
        id: [ud],
        ig: [ud],
        is: ["is-t-k0-und"],
        it: ["it-t-k0-und", Ob],
        iw: ["he-t-i0-und", "he-t-k0-und"],
        jw: [ud],
        ja: ["ja-t-ja-hira-i0-und"],
        ka: ["ka-t-k0-und", "ka-t-k0-legacy"],
        kk: ["kk-t-k0-und"],
        km: ["km-t-k0-und"],
        kn: ["kn-t-i0-und", "kn-t-k0-und", "kn-t-und-latn-k0-und"],
        ko: ["ko-t-k0-und"],
        ku: ["ku-t-k0-und"],
        ky: ["ky-cyrl-t-k0-und"],
        lb: [Vb, Ob],
        lo: ["lo-t-k0-und"],
        lt: ["lt-t-k0-und"],
        lv: ["lv-t-k0-und"],
        mg: [ud],
        mi: ["mi-t-k0-und"],
        mk: ["mk-t-k0-und"],
        ml: ["ml-t-i0-und", "ml-t-und-latn-k0-und", "ml-t-k0-und"],
        mn: ["mn-cyrl-t-k0-und"],
        mr: ["mr-t-i0-und", Qc],
        ms: [ud],
        mt: ["mt-t-k0-und"],
        my: ["my-t-k0-und", "my-t-k0-myansan"],
        ne: ["ne-t-i0-und", "ne-t-k0-und", "ne-t-und-latn-k0-und"],
        nl: ["nl-t-k0-und", Ob],
        no: ["no-t-k0-und"],
        ny: [ud],
        pa: ["pa-t-i0-und", "pa-guru-t-und-latn-k0-und", "pa-guru-t-k0-und"],
        pl: ["pl-t-k0-und"],
        ps: ["ps-t-k0-und"],
        pt: ["pt-br-t-k0-und", "pt-pt-t-k0-und", Ob],
        ro: ["ro-t-k0-und", "ro-t-k0-legacy", "ro-t-k0-extended"],
        ru: ["ru-t-i0-und", "ru-t-k0-und"],
        rw: [ud],
        sd: ["sd-t-k0-und"],
        si: ["si-t-i0-und", "si-t-k0-und"],
        sk: ["sk-t-k0-und", "sk-t-k0-qwerty"],
        sl: ["sl-t-k0-und"],
        sn: [ud],
        so: [ud],
        sq: ["sq-t-k0-und"],
        sr: ["sr-t-i0-und", "sr-cyrl-t-k0-und", "sr-latn-t-k0-und"],
        st: [ud],
        su: [ud],
        sv: ["sv-t-k0-und"],
        sw: [ud],
        ta: "ta-t-i0-und ta-t-k0-ta99 ta-t-und-latn-k0-und ta-t-k0-und ta-t-k0-typewriter ta-t-k0-itrans".split(" "),
        te: ["te-t-i0-und", "te-t-k0-und", "te-t-und-latn-k0-und"],
        tg: ["tg-t-k0-und"],
        th: ["th-t-i0-und", "th-t-k0-und", "th-t-k0-pattajoti", "th-t-k0-tis"],
        tk: [ud],
        tl: [ud],
        tr: ["tr-t-k0-und", "tr-t-k0-legacy"],
        tt: ["tt-t-k0-und"],
        ug: ["ug-t-k0-und"],
        uk: ["uk-t-i0-und", "uk-t-k0-101key"],
        ur: ["ur-t-i0-und", "ur-t-k0-und"],
        uz: ["uz-latn-t-k0-und", "uz-cyrl-t-k0-und", "uz-cyrl-t-k0-legacy"],
        vi: ["vi-t-i0-und", "vi-t-k0-legacy", "vi-t-k0-viqr", "vi-t-k0-und", "vi-t-k0-vni"],
        wo: [ud],
        xh: [ud],
        yi: ["yi-t-k0-und"],
        yo: [ud],
        yue: [sf, vf],
        zu: [ud],
        "zh-CN": ["zh-t-i0-pinyin", "zh-t-i0-wubi-1986", xf, vf, wf, sf],
        "zh-TW": [xf, vf, wf, sf]
    },
    Go = {
        af: ["af-t-i0-handwrit"],
        am: ["am-t-i0-handwrit"],
        ar: ["ar-t-i0-handwrit"],
        auto: ["mul-t-i0-handwrit"],
        az: ["az-t-i0-handwrit"],
        be: ["be-t-i0-handwrit"],
        bg: ["bg-t-i0-handwrit"],
        bn: ["bn-t-i0-handwrit"],
        bs: ["bs-t-i0-handwrit"],
        ca: ["ca-t-i0-handwrit"],
        ceb: ["ceb-t-i0-handwrit"],
        co: ["co-t-i0-handwrit"],
        cs: ["cs-t-i0-handwrit"],
        cy: ["cy-t-i0-handwrit"],
        da: ["da-t-i0-handwrit"],
        de: ["de-t-i0-handwrit"],
        el: ["el-t-i0-handwrit"],
        en: ["en-t-i0-handwrit"],
        eo: ["eo-t-i0-handwrit"],
        es: ["es-t-i0-handwrit"],
        et: ["et-t-i0-handwrit"],
        eu: ["eu-t-i0-handwrit"],
        fa: ["fa-t-i0-handwrit"],
        fi: ["fi-t-i0-handwrit"],
        fr: ["fr-t-i0-handwrit"],
        fy: ["fy-t-i0-handwrit"],
        ga: ["ga-t-i0-handwrit"],
        gd: ["gd-t-i0-handwrit"],
        gl: ["gl-t-i0-handwrit"],
        gu: ["gu-t-i0-handwrit"],
        haw: ["haw-t-i0-handwrit"],
        hi: ["hi-t-i0-handwrit"],
        hmn: ["hmn-t-i0-handwrit"],
        hr: ["hr-t-i0-handwrit"],
        ht: ["ht-t-i0-handwrit"],
        hu: ["hu-t-i0-handwrit"],
        hy: ["hy-t-i0-handwrit"],
        id: ["id-t-i0-handwrit"],
        is: ["is-t-i0-handwrit"],
        it: ["it-t-i0-handwrit"],
        iw: ["he-t-i0-handwrit"],
        ja: ["ja-t-i0-handwrit"],
        jv: ["jv-t-i0-handwrit"],
        ka: ["ka-t-i0-handwrit"],
        kk: ["kk-t-i0-handwrit"],
        km: ["km-t-i0-handwrit"],
        kn: ["kn-t-i0-handwrit"],
        ko: ["ko-t-i0-handwrit"],
        ku: ["ku-t-i0-handwrit"],
        ky: ["ky-t-i0-handwrit"],
        la: ["la-t-i0-handwrit"],
        lb: ["lb-t-i0-handwrit"],
        lo: ["lo-t-i0-handwrit"],
        lt: ["lt-t-i0-handwrit"],
        lv: ["lv-t-i0-handwrit"],
        mg: ["mg-t-i0-handwrit"],
        mi: ["mi-t-i0-handwrit"],
        mk: ["mk-t-i0-handwrit"],
        ml: ["ml-t-i0-handwrit"],
        mn: ["mn-t-i0-handwrit"],
        mr: ["mr-t-i0-handwrit"],
        ms: ["ms-t-i0-handwrit"],
        mt: ["mt-t-i0-handwrit"],
        my: ["my-t-i0-handwrit"],
        ne: ["ne-t-i0-handwrit"],
        nl: ["nl-t-i0-handwrit"],
        no: ["no-t-i0-handwrit"],
        ny: ["ny-t-i0-handwrit"],
        pa: ["pa-t-i0-handwrit"],
        pl: ["pl-t-i0-handwrit"],
        pt: ["pt-t-i0-handwrit"],
        ro: ["ro-t-i0-handwrit"],
        ru: ["ru-t-i0-handwrit"],
        si: ["si-t-i0-handwrit"],
        sk: ["sk-t-i0-handwrit"],
        sl: ["sl-t-i0-handwrit"],
        sm: ["sm-t-i0-handwrit"],
        sn: ["sn-t-i0-handwrit"],
        so: ["so-t-i0-handwrit"],
        sq: ["sq-t-i0-handwrit"],
        sr: ["sr-t-i0-handwrit"],
        su: ["su-t-i0-handwrit"],
        sv: ["sv-t-i0-handwrit"],
        sw: ["sw-t-i0-handwrit"],
        ta: ["ta-t-i0-handwrit"],
        te: ["te-t-i0-handwrit"],
        tg: ["tg-t-i0-handwrit"],
        th: ["th-t-i0-handwrit"],
        tl: ["fil-t-i0-handwrit"],
        tr: ["tr-t-i0-handwrit"],
        uk: ["uk-t-i0-handwrit"],
        ur: ["ur-t-i0-handwrit"],
        uz: ["uz-t-i0-handwrit"],
        vi: ["vi-t-i0-handwrit"],
        xh: ["xh-t-i0-handwrit"],
        "zh-CN": ["zh-t-i0-handwrit"],
        zu: ["zu-t-i0-handwrit"]
    };
var Lo = function (a) {
    si(this, a, -1, Ko)
};
C(Lo, oi);
var Mo = function (a) {
    si(this, a, -1, null)
};
C(Mo, oi);
var No = function (a) {
    si(this, a, -1, null)
};
C(No, oi);
var Oo = function (a) {
    si(this, a, -1, null)
};
C(Oo, oi);
var Po = function (a) {
    si(this, a, -1, null)
};
C(Po, oi);
var Qo = function (a) {
    si(this, a, -1, null)
};
C(Qo, oi);
var So = function (a) {
    si(this, a, -1, Ro)
};
C(So, oi);
var Uo = function (a) {
    si(this, a, -1, To)
};
C(Uo, oi);
var Wo = function (a) {
    si(this, a, -1, Vo)
};
C(Wo, oi);
var Yo = function (a) {
    si(this, a, -1, Xo)
};
C(Yo, oi);
var Zo = function (a) {
    si(this, a, -1, null)
};
C(Zo, oi);
var $o = function (a) {
    si(this, a, -1, null)
};
C($o, oi);
var ap = function (a) {
    si(this, a, -1, null)
};
C(ap, oi);
var bp = function (a) {
    si(this, a, -1, null)
};
C(bp, oi);
var dp = function (a) {
    si(this, a, -1, cp)
};
C(dp, oi);
var ep = function (a) {
    si(this, a, -1, null)
};
C(ep, oi);
var fp = function (a) {
    si(this, a, -1, null)
};
C(fp, oi);
var gp = function (a) {
    si(this, a, -1, null)
};
C(gp, oi);
var hp = function (a) {
    si(this, a, -1, null)
};
C(hp, oi);
var ip = function (a) {
    si(this, a, -1, null)
};
C(ip, oi);
var kp = function (a) {
    si(this, a, -1, jp)
};
C(kp, oi);
var Ko = [1, 3, 4];
Oo.prototype.Na = function () {
    return ti(this, 1)
};
var Ro = [3, 4],
    To = [3],
    Vo = [2],
    Xo = [26, 80];
Yo.prototype.Rh = function () {
    return ti(this, 1)
};
var cp = [1];
dp.prototype.Va = function () {
    return ti(this, 5)
};
gp.prototype.yc = function () {
    return ti(this, 1)
};
gp.prototype.Va = function () {
    return ti(this, 4)
};
var jp = [2];
var lp = function () {
        this.c = 0;
        this.m = this.g = this.F = this.b = this.o = "";
        this.j = this.a = this.v = 0;
        Eo.M()
    },
    mp = {
        bh: 27,
        btn: 1,
        clks: 2,
        clkt: 3,
        pb: 4,
        sel: 5,
        selalt: 6,
        tws_confirm: 7,
        tws_lsugg: 8,
        tws_revert: 9,
        tws_spell: 10,
        is: 11
    };
Wf(lp);
var np = function (a, b) {
        a.b = b
    },
    op = function (a, b) {
        a.F = b
    },
    pp = function (a) {
        var b = 0;
        0 <= a.indexOf("-k0-") ? b = 2 : Jo(a) ? b = 1 : Io(a) && (b = 5);
        return b
    },
    qp = function (a, b) {
        Pf(b) && (b = mp[b], b = null != b ? b : 0);
        a.v = b
    };
lp.prototype.store = function (a) {
    H(a, 65, this.c);
    H(a, 16, this.b);
    H(a, 14, this.g);
    H(a, 1, this.F);
    H(a, 50, this.o);
    H(a, 52, this.m);
    H(a, 32, this.a)
};
var rp = function () {
    this.a = null;
    this.b = lp.M()
};
C(rp, gl);
Wf(rp);
var tp = function (a, b, c, d) {
        b = sp(a, 237, b, void 0, void 0, void 0, d);
        z(c) && 0 != c && H(b, 74, c);
        S(a, b)
    },
    up = function (a, b, c) {
        S(a, sp(a, 190, b, c, !0, 0))
    },
    vp = function (a, b, c, d) {
        S(a, sp(a, 78, b, c, d, 0))
    },
    wp = function (a, b, c) {
        var d = T(a, 148),
            e = new Zo;
        H(e, 1, b);
        c && H(e, 5, c);
        xi(d, 63, e);
        S(a, d)
    },
    xp = function (a) {
        S(a, T(a, 248))
    },
    yp = function (a, b) {
        b = T(a, b);
        var c = new hp;
        H(c, 1, 1);
        xi(b, 46, c);
        S(a, b)
    },
    zp = function (a, b, c, d, e) {
        b = T(a, b ? 84 : 85);
        var f = new hp;
        H(f, 1, 1);
        H(f, 2, c);
        H(f, 3, d);
        H(f, 4, e + 1);
        xi(b, 46, f);
        S(a, b)
    },
    Bp = function (a, b, c) {
        S(a, Ap(a, 251, b,
            c))
    },
    Dp = function (a, b) {
        S(a, Cp(a, 71, b))
    },
    Ep = function (a, b) {
        var c = T(a, 22),
            d = new ip;
        H(d, 1, 3);
        H(d, 2, b);
        xi(c, 56, d);
        S(a, c)
    },
    Fp = function (a, b) {
        var c = T(a, 262),
            d = new $o;
        H(d, 1, b + 1);
        xi(c, 72, d);
        S(a, c)
    };
rp.prototype.c = function () {
    S(this, T(this, 145))
};
var Gp = function (a, b, c, d, e, f, g) {
        b = T(a, b);
        var l = new ep;
        H(l, 1, c);
        H(l, 4, 1);
        H(l, 7, d);
        H(l, 5, e);
        f && H(l, 8, f);
        z(g) && H(l, 6, g + 1);
        xi(b, 43, l);
        S(a, b)
    },
    Hp = function (a) {
        var b = T(a, 1);
        H(b, 53, a.b.v);
        S(a, b);
        qp(a.b, 0)
    };
rp.prototype.g = function () {
    S(this, T(this, 25))
};
var T = function (a, b) {
        var c = new Yo;
        a.b.store(c);
        H(c, 31, b);
        return c
    },
    sp = function (a, b, c, d, e, f, g) {
        var l = new gp;
        H(l, 1, c);
        z(d) && H(l, 4, d);
        z(e) && H(l, 2, e);
        z(f) && 0 != f && H(l, 3, f);
        z(g) && 0 != g && H(l, 5, g);
        a = T(a, b);
        xi(a, 61, l);
        return a
    },
    Ip = function (a, b, c, d, e, f, g, l) {
        for (var m = new Lo, p = [], q = 0; q < c.length; q++) {
            var F = c[q],
                B = new Mo;
            H(B, 1, F[0]);
            H(B, 2, !!F[1]);
            p.push(B)
        }
        yi(m, 1, p);
        c = new No;
        H(c, 1, !!d);
        xi(m, 2, c);
        d = [];
        for (c = 0; c < e.length; c++) p = new Oo, H(p, 1, e[c]), d.push(p);
        yi(m, 3, d);
        e = [];
        for (d = 0; d < f.length; d++) c = f[d], p = new Po, H(p,
            1, !!c[0]), H(p, 2, !!c[1]), e.push(p);
        yi(m, 4, e);
        g && (f = new Qo, H(f, 1, !0), xi(m, 5, f));
        0 != l && H(m, 6, l);
        a = T(a, b);
        xi(a, 66, m);
        return a
    },
    Jp = function (a, b, c, d, e, f) {
        a = T(a, b);
        b = new dp;
        H(b, 1, c || []);
        "" != d && H(b, 2, d);
        "" != e && H(b, 3, e);
        H(b, 4, f ? 2 : 1);
        xi(a, 59, b);
        return a
    },
    Ap = function (a, b, c, d) {
        var e = new bp;
        H(e, 1, d);
        a = T(a, b);
        H(a, 74, c);
        xi(a, 71, e);
        return a
    },
    Cp = function (a, b, c) {
        var d = new fp;
        H(d, 1, c);
        a = T(a, b);
        xi(a, 44, d);
        return a
    },
    S = function (a, b) {
        if (a.a) {
            var c = new io;
            b = b.Tc();
            H(c, 8, b);
            a.a.log(c)
        }
    };
var Kp = function () {
    this.c = [];
    this.b = {};
    this.a = {};
    this.j = !1;
    this.Zg = 1;
    this.Qd = {};
    this.g = null;
    this.o = "";
    O(window, hb, this.F, !1, this)
};
Wf(Kp);
var Lp = function (a, b, c) {
        if (null == b) return "1";
        switch (Xf(b)) {
            case Ke:
                return a = b, !(64 < a.length) || null != c && c || (a = a.substr(0, 64)), Mg(a);
            case Md:
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case bb:
                var d = [],
                    e;
                for (e in b) d.push(Lp(a, b[e], c));
                return d.join(",");
            case Nd:
                d = [];
                for (e in b) d.push(Mp(a, e, b[e], c));
                return d.join(",");
            default:
                return ""
        }
    },
    Mp = function (a, b, c, d) {
        return [Mg(b), Lp(a, c, d || "smtalt" == b)].join("=")
    };
Kp.prototype.log = function (a, b) {
    this.c.push([a, b]);
    this.j || (this.j = !0, Xm(this.m, 0, this))
};
var Pp = function (a, b, c, d, e) {
        b = a.o + "/gen204?" + Mp(a, c, d) + "&" + Mp(a, sb, b, !0);
        e && (b += Np(a, e));
        Op(a, b)
    },
    Np = function (a, b) {
        var c = "";
        z(b) && nh(b, function (a, b) {
            if (a instanceof Array)
                for (var d = 0; d < a.length; d++) c += "&" + Mp(this, b, a[d]);
            else c += "&" + Mp(this, b, a)
        }, a);
        return c
    };
Kp.prototype.m = function () {
    for (var a = 0; a < this.c.length; a++) {
        var b = this.c[a];
        Qp(this, b[0], b[1])
    }
    this.c = [];
    this.j = !1
};
var Qp = function (a, b, c) {
        Op(a, a.o + "/gen204?" + (a.g ? ["client=", a.g, "&"].join("") : "") + Mp(a, b, c))
    },
    Op = function (a, b) {
        var c = new Image,
            d = a.Zg++;
        a.Qd[d] = c;
        c.onload = c.onerror = function () {
            delete Kp.M().Qd[d]
        };
        c.src = b;
        c = null
    },
    Sp = function (a, b, c, d) {
        var e = null;
        b in a.b && (e = a.b[b]);
        a.b[b] = Rp(e, c, d)
    },
    Tp = function (a, b) {
        var c = 0,
            d = null;
        b in a.a && (d = a.a[b], c = d[0], d = d[1]);
        d = Rp(d, 1, Va);
        a.a[b] = [c, d];
        Ym(a.a[b][0]);
        c = Xm(A(a.v, a, b), 2E3);
        a.a[b][0] = c
    };
Kp.prototype.v = function (a) {
    Qp(this, a, this.a[a][1]);
    a in this.a && (Ym(this.a[a][0]), delete this.a[a])
};
var Up = function (a, b, c) {
        null != b || (b = 1);
        c == Va ? (isNaN(a) && (a = parseInt(a, 10)), isNaN(b) && (b = parseInt(b, 10)), a += b) : a = b;
        return a
    },
    Rp = function (a, b, c) {
        if (Xf(b) == Nd) {
            Xf(a) != Nd && (a = {});
            for (var d in b) a[d] = Up(d in a ? a[d] : null, b[d], c)
        } else a = Up(a, b, c);
        return a
    },
    Vp = function (a) {
        var b = [],
            c;
        for (c in a.b) b.push(Mp(a, c, a.b[c]));
        a.b = {};
        return b.join("&")
    };
Kp.prototype.F = function () {
    this.m();
    for (var a in this.a) 0 != this.a[a] && this.v(a)
};
var Wp = function (a) {
        return 32 >= a || 4096 <= a && (8192 <= a && 8198 >= a || 8200 <= a && 8203 >= a || 5760 == a || 6158 == a || 8232 == a || 8233 == a || 8287 == a || 12288 == a)
    },
    Zp = function (a) {
        var b = Xp;
        if (15 > a.length) return a;
        for (var c = [], d = 0, e = 0, f = 0, g = 0, l = 0; l < a.length; l++) {
            var m = g;
            g = a.charCodeAt(l);
            m = 768 <= g && !b(m, g, !0);
            15 <= d && !Wp(g) && !m && (c.push(a.substring(f, l), Yp), f = l, d = 0);
            e ? 62 == g && 60 == e ? e = 0 : 59 == g && 38 == e && (e = 0, d++) : 60 == g || 38 == g ? e = g : Wp(g) ? d = 0 : 8204 <= g && 8207 >= g || 8234 <= g && 8238 >= g || d++
        }
        c.push(a.substr(f));
        return c.join("")
    },
    Xp = function (a, b) {
        return 1024 <=
            b && 1315 > b
    },
    $p = G && ai(8),
    Yp = Mh ? "<wbr></wbr>" : Ih ? "&shy;" : $p ? "&#8203;" : "<wbr>";
var aq = function (a, b) {
    this.c = this.v = this.b = "";
    this.m = null;
    this.g = this.o = "";
    this.j = !1;
    var c;
    a instanceof aq ? (this.j = z(b) ? b : a.j, bq(this, a.b), this.v = a.v, this.c = a.c, cq(this, a.m), this.o = a.o, dq(this, eq(a.a)), this.g = a.g) : a && (c = String(a).match(En)) ? (this.j = !!b, bq(this, c[1] || "", !0), this.v = fq(c[2] || ""), this.c = fq(c[3] || "", !0), cq(this, c[4]), this.o = fq(c[5] || "", !0), dq(this, c[6] || "", !0), this.g = fq(c[7] || "")) : (this.j = !!b, this.a = new gq(null, this.j))
};
aq.prototype.toString = function () {
    var a = [],
        b = this.b;
    b && a.push(hq(b, iq, !0), ":");
    var c = this.c;
    if (c || "file" == b) a.push("//"), (b = this.v) && a.push(hq(b, iq, !0), "@"), a.push(Mg(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
    if (c = this.o) this.c && "/" != c.charAt(0) && a.push("/"), a.push(hq(c, "/" == c.charAt(0) ? jq : kq, !0));
    (c = this.a.toString()) && a.push("?", c);
    (c = this.g) && a.push("#", hq(c, lq));
    return a.join("")
};
var bq = function (a, b, c) {
        a.b = c ? fq(b, !0) : b;
        a.b && (a.b = a.b.replace(/:$/, ""))
    },
    cq = function (a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.m = b
        } else a.m = null
    },
    dq = function (a, b, c) {
        b instanceof gq ? (a.a = b, mq(a.a, a.j)) : (c || (b = hq(b, nq)), a.a = new gq(b, a.j))
    },
    oq = function (a) {
        return a instanceof aq ? new aq(a) : new aq(a, void 0)
    },
    fq = function (a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    },
    hq = function (a, b, c) {
        return Pf(a) ? (a = encodeURI(a).replace(b, pq), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g,
            "%$1")), a) : null
    },
    pq = function (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    },
    iq = /[#\/\?@]/g,
    kq = /[#\?:]/g,
    jq = /[#\?]/g,
    nq = /[#\?@]/g,
    lq = /#/g,
    gq = function (a, b) {
        this.b = this.a = null;
        this.c = a || null;
        this.j = !!b
    },
    qq = function (a) {
        a.a || (a.a = new xn, a.b = 0, a.c && Fn(a.c, function (b, c) {
            a.add(Ng(b), c)
        }))
    };
gq.prototype.add = function (a, b) {
    qq(this);
    this.c = null;
    a = rq(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b = this.b + 1;
    return this
};
var sq = function (a, b) {
        qq(a);
        b = rq(a, b);
        An(a.a, b) && (a.c = null, a.b = a.b - a.a.get(b).length, Bn(a.a, b))
    },
    tq = function (a, b) {
        qq(a);
        b = rq(a, b);
        return An(a.a, b)
    };
x = gq.prototype;
x.forEach = function (a, b) {
    qq(this);
    this.a.forEach(function (c, d) {
        D(c, function (c) {
            a.call(b, c, d, this)
        }, this)
    }, this)
};
x.Lb = function () {
    qq(this);
    for (var a = this.a.nb(), b = this.a.Lb(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
};
x.nb = function (a) {
    qq(this);
    var b = [];
    if (Pf(a)) tq(this, a) && (b = xg(b, this.a.get(rq(this, a))));
    else {
        a = this.a.nb();
        for (var c = 0; c < a.length; c++) b = xg(b, a[c])
    }
    return b
};
x.set = function (a, b) {
    qq(this);
    this.c = null;
    a = rq(this, a);
    tq(this, a) && (this.b = this.b - this.a.get(a).length);
    this.a.set(a, [b]);
    this.b = this.b + 1;
    return this
};
x.get = function (a, b) {
    if (!a) return b;
    a = this.nb(a);
    return 0 < a.length ? String(a[0]) : b
};
var uq = function (a, b, c) {
    sq(a, b);
    0 < c.length && (a.c = null, a.a.set(rq(a, b), zg(c)), a.b = a.b + c.length)
};
gq.prototype.toString = function () {
    if (this.c) return this.c;
    if (!this.a) return "";
    for (var a = [], b = this.a.Lb(), c = 0; c < b.length; c++) {
        var d = b[c],
            e = Mg(d);
        d = this.nb(d);
        for (var f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + Mg(d[f]));
            a.push(g)
        }
    }
    return this.c = a.join("&")
};
var eq = function (a) {
        var b = new gq;
        b.c = a.c;
        a.a && (b.a = new xn(a.a), b.b = a.b);
        return b
    },
    rq = function (a, b) {
        b = String(b);
        a.j && (b = b.toLowerCase());
        return b
    },
    mq = function (a, b) {
        b && !a.j && (qq(a), a.c = null, a.a.forEach(function (a, b) {
            var c = b.toLowerCase();
            b != c && (sq(this, b), uq(this, c, a))
        }, a));
        a.j = b
    };
gq.prototype.g = function (a) {
    for (var b = 0; b < arguments.length; b++) Dn(arguments[b], function (a, b) {
        this.add(b, a)
    }, this)
};
var vq = {},
    wq = {},
    xq = {},
    yq = {},
    zq = {},
    Aq = {},
    Bq = function () {
        throw Error("Do not instantiate directly");
    };
Bq.prototype.Ie = null;
Bq.prototype.Ja = v("content");
Bq.prototype.toString = v("content");
var Cq = function (a) {
        if (a.jb === Aq) return Mj(a.toString());
        if (a.jb !== vq) throw Error("Sanitized content was not of kind TEXT or HTML.");
        return Lj(a.toString(), a.Ie || null)
    },
    Dq = function (a, b) {
        this.content = String(a);
        this.Ie = null != b ? b : null
    };
C(Dq, Bq);
Dq.prototype.jb = Aq;
var Eq = function () {
    Bq.call(this)
};
C(Eq, Bq);
Eq.prototype.jb = vq;
var Fq = function (a) {
        if (null != a) switch (a.Ie) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    },
    Hq = function (a) {
        return null != a && a.jb === vq ? a : a instanceof Jj ? Gq(Kj(a), a.a()) : Gq(Wg(String(String(a))), Fq(a))
    },
    Gq = function (a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function (a, d) {
            a = new b(String(a));
            void 0 !== d && (a.Ie = d);
            return a
        }
    }(Eq),
    Iq = function (a, b) {
        a = a instanceof Dq ? a.toString() : a;
        b = b instanceof Dq ? b.toString() : b;
        return $f(a) && $f(b) ? a.jb !== b.jb ? !1 : a.toString() === b.toString() :
            a instanceof Bq && b instanceof Bq ? a.jb != b.jb ? !1 : a.toString() == b.toString() : a == b
    },
    Jq = function (a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    },
    U = function (a) {
        null != a && a.jb === vq ? (a = a.Ja(), a = String(a).replace(Kq, "").replace(Lq, "&lt;"), a = String(a).replace(Mq, Nq)) : a = Wg(String(a));
        return a
    },
    Pq = function (a) {
        null != a && a.jb === yq ? a = a.Ja().replace(/([^"'\s])$/, "$1 ") : (a = String(a), a = Oq.test(a) ? a : "zSoyz");
        return a
    },
    Qq = /['()]/g,
    Rq = function (a) {
        return "%" + a.charCodeAt(0).toString(16)
    },
    Sq = function (a) {
        a = Mg(String(a));
        Qq.lastIndex = 0;
        return Qq.test(a) ? a.replace(Qq, Rq) : a
    },
    Wq = function (a) {
        null != a && a.jb === wq || null != a && a.jb === xq ? a = String(a).replace(Tq, Uq) : a instanceof ij ? a = String(jj(a)).replace(Tq, Uq) : a instanceof cj ? a = String(dj(a)).replace(Tq, Uq) : (a = String(a), a = Vq.test(a) ? a.replace(Tq, Uq) : "about:invalid#zSoyz");
        return a
    },
    Yq = function (a) {
        null != a && a.jb === zq ? a = Jq(a.Ja()) : null == a ? a = "" : a instanceof pj ? a = Jq(qj(a)) : a instanceof Cj ? a = Jq(Fj(a)) : (a = String(a), a = Xq.test(a) ? a : "zSoyz");
        return a
    },
    Zq = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    },
    Nq = function (a) {
        return Zq[a]
    },
    $q = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    },
    Uq = function (a) {
        return $q[a]
    },
    Mq = /[\x00\x22\x27\x3c\x3e]/g,
    Tq = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Xq = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|!important)(?:\s+|$))*$/i,
    Vq = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
    Oq = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
    Kq = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Lq = /</g;
var ar = function (a) {
        return Gq('<div id="' + U(a.id) + '" class="cp-promo" style="display:none"><div class="cp-promo-c"><div class="cp-dismiss"></div><a href="' + U(Wq(a.url)) + '" target="_blank" class="cp-promo-href"><div class="cp-promo-graphic"></div><div class="cp-promo-text-c"><div class="cp-promo-text"><div class="cp-promo-title">' + Hq(a.Fm) + '</div><div class="cp-promo-subtext">' + Hq(a.Bm) + '</div></div></div><div class="cp-promo-bottom"><div class="cp-promo-link"><div class="cp-promo-link-badge"></div><div class="cp-promo-link-arrow"></div><div class="cp-promo-link-text">' +
            Hq(a.ee) + '</div><div class="cp-promo-link-subtext">' + Hq(a.Ml) + "</div></div></div></a></div></div>")
    },
    br = function (a) {
        return '<div><div class="speech-mic"><div class="gt-speech-l1"></div><div class="gt-speech-l2"></div><div class="gt-speech-l3"></div><div class="gt-speech-l4"></div></div><div class="speech-mic-label">' + Hq(a.label) + qa
    },
    cr = function (a) {
        return '<div id="' + U(a.id) + '" class="verified-translation"><div class="vt-description">' + Hq(a.cg) + '</div><div class="vt-buttons"><div class="vt-link"><a class="vt-link-text" href="' +
            U(Wq(a.url)) + '">' + Hq(a.ee) + '</a></div><div class="vt-dismiss">' + Hq(a.Dk) + "</div></div></div>"
    },
    dr = function (a) {
        return '<div class="gt-ex-info">' + (a.xm ? '<span class="gt-ex-quote">\x3c!--This SVG renders a quotation mark.--\x3e<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span>' : "") + '<div class="gt-ex-top"><div class="gt-ex-text" dir="' + U(a.zm) + '">' + Hq(a.Vi) + '</div></div><div class="gt-ex-mt" style="display:none"><span class="gt-cd-mt" dir="' +
            U(a.mh) + '"></span><br><span class="gt-cd-mt-label">' + Hq(a.Rm) + '</span><span class="gt-ex-credit"><a class="gt-ex-link" target="_blank" href="' + U(Wq(a.Qg)) + '">' + Hq(a.Ll) + "</a></span></div></div>"
    },
    er = function (a) {
        return Gq('<div class="st-stp1">' + (a.Di ? "" : '<div class="st-stp1-text"><div>' + Hq(a.Ei) + qa) + '<div id="st-buttons"></div>' + (a.Di ? '<div class="st-stp1-epu-text">' + Hq(a.Ei) + pa : "") + pa)
    },
    fr = function () {
        return Gq('<div class="gt-cc-t"><span class="gt-cc-tc"></span><span class="gt-cc-bc"></span></div><div class="gt-cc"><div class="gt-cc-l"><div class="gt-cc-l-i"></div><div class="gt-cc-exp" style="display:none"><div class="cd-exp-ar"></div></div></div><div class="gt-cc-r"><div class="gt-cc-r-i"></div></div></div>')
    },
    gr = function () {
        return Gq('<div class="gt-cd-t"><div class="gt-cd-tl"></div><div class="gt-cd-tr"></div></div><div class="gt-cd-c"></div><div class="cd-expand-button" role="button" tabindex="0"><span class="jfk-button-img"></span><span class="cd-expand-label"></span></div>')
    },
    hr = function () {
        return Gq('<span class="gt-ct-text"></span><span class="gt-ct-translit" style="display:none"></span><div class="gt-ct-tts goog-inline-block"></div>')
    },
    ir = function (a) {
        var b = '<div class="gt-def-info" lang="' + U(a.Qa) +
            '">' + (a.qh ? '<span class="gt-def-num">' + Hq(a.zk) + ra : "") + '<div class="gt-def-row">' + Hq(a.Ak) + '<div class="gt-mt-md" style="display:none"><span class="gt-cd-mt"></span></div></div>' + (a.Lh ? '<div class="gt-def-example"><q>' + Hq(a.Lh) + '</q><div class="gt-mt-ex" style="display:none"><q class="gt-cd-mt" dir="' + U(a.mh) + '"></q></div></div>' : "");
        if (0 < a.Zi.length) {
            b += '<div class="gt-def-synonym"><span class="gt-def-synonym-title">' + Hq(a.Dm) + ': </span><span class="gt-def-synonyms-group"></span><span class="gt-def-synonyms-group"></span>';
            for (var c = a.Zi, d = c.length, e = 0; e < d; e++)
                for (var f = c[e], g = f.length, l = 0; l < g; l++) {
                    var m = f[l];
                    var p = a.qh ? "" : l != g - 1 ? ", " : e != d - 1 ? "; " : "";
                    b += (a.vk ? '<span class="gt-cd-cl">' + Hq(m) + ra : '<span class="gt-cd-ncl">' + Hq(m) + ra) + p
                }
            b += pa
        }
        return b + pa
    },
    jr = w('<div class="gt-ee-container"></div>'),
    kr = function (a) {
        return '<a href="' + U(Wq(a.Qg)) + '"></a>'
    },
    lr = function (a) {
        return Gq((a.fc ? "" : ta) + '<div class="gt-baf-cell gt-baf-pos-head">' + (a.Ki ? '<span class="gt-cd-pos">' + Hq(a.Ki) + ra : "") + (a.Ek ? '<div class="gt-cd-pos-pop">' + Hq(a.Jk) +
            '<div class="help-icon-container tlid-frequency-help-icon-container"><div class="help-icon tlid-frequency-help-icon"></div><div class="help-tooltip tlid-frequency-help-tooltip"><p>' + Hq(a.Kk) + "</p></div></div></div>" : "") + pa + (a.fc ? "" : pa))
    },
    mr = function (a) {
        return Gq((a.fc ? "" : ta) + '<div class="gt-baf-cell gt-baf-term-text-parent"' + (a.dj ? ca + U(Yq(a.dj)) + ';"' : "") + '><span class="gt-baf-term-text' + (a.Mg ? " gt-baf-word-selected" : "") + '">' + (a.Hd ? '<span class="gt-baf-cell gt-baf-previous-word gt-baf-previous-word-mobile">' +
            Hq(a.Hd) + ra : "") + '<span class="' + U(a.Vm) + '">' + Hq(a.Um) + "</span></span></div>" + (a.fc ? "" : pa))
    },
    nr = function (a) {
        for (var b = (a.fc ? "" : ta) + '<div class="gt-baf-cell gt-baf-translations gt-baf-translations-mobile"' + (a.Jh ? ca + U(Yq(a.Jh)) + ';"' : "") + ">", c = a.Ff, d = c.length, e = 0; e < d; e++) {
            var f = c[e];
            b += "<span" + (a.Fh ? ' class="' + U(a.Fh) + '"' : "") + ">" + Hq(f) + ra + (e != d - 1 ? ", " : "")
        }
        b += pa + (a.fc ? "" : pa);
        return Gq(b)
    },
    pr = function (a) {
        for (var b = (a.fc ? "" : ta) + '<div class="gt-baf-cell gt-baf-entry-score" title="' + U(a.Qb) + '">', c = Math.max(0,
            Math.ceil(a.rb + 1 - 1)), d = 0; d < c; d++) {
            var e = Gq(or({
                className: "filled"
            }));
            b += e
        }
        if (3 > a.rb)
            for (c = Math.max(0, Math.ceil(4 - (a.rb + 1))), d = 0; d < c; d++) e = Gq(or({
                className: "empty"
            })), b += e;
        b += pa + (a.fc ? "" : pa);
        return Gq(b)
    },
    or = function (a) {
        return Gq(sa + U(a.className) + ' gt-score-dot"></div>')
    };
var qr = function (a) {
        return null != window[a]
    },
    rr = qr("COMPARE_PROD_TRANS"),
    sr = qr("MSG_HUMAN_TRANSLATION_ACTION"),
    tr = qr("MSG_CHANGE_ITA"),
    ur = qr("KNOWLEDGE_PANEL"),
    vr = qr("MSG_HATS_TITLE"),
    wr = qr("MSG_SHOW_PB"),
    xr = qr("PHRASEBOOK_REORDERING"),
    yr = qr("MSG_SPEECH_INPUT_TURN_ON"),
    zr = qr("SK_WP"),
    Ar = qr("TTS_PACE_CONTROL"),
    Br = qr("WEBFONT"),
    Cr = qr("TRANSLATED_INPUT_SUGGESTION_DESKTOP"),
    Dr = qr("ADD_INFLECTION");
var Er = function (a) {
        return function () {
            return a
        }
    },
    Fr = function (a, b) {
        for (var c = 0; c < b.length - 2; c += 3) {
            var d = b.charAt(c + 2);
            d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
            d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
            a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
        }
        return a
    },
    Gr = null,
    Hr = function (a) {
        if (null !== Gr) var b = Gr;
        else {
            b = Er(String.fromCharCode(84));
            var c = Er(String.fromCharCode(75));
            b = [b(), b()];
            b[1] = c();
            b = (Gr = window[b.join(c())] || "") || ""
        }
        var d = Er(String.fromCharCode(116));
        c = Er(String.fromCharCode(107));
        d = [d(), d()];
        d[1] = c();
        c = "&" + d.join("") +
            "=";
        d = b.split(".");
        b = Number(d[0]) || 0;
        for (var e = [], f = 0, g = 0; g < a.length; g++) {
            var l = a.charCodeAt(g);
            128 > l ? e[f++] = l : (2048 > l ? e[f++] = l >> 6 | 192 : (55296 == (l & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = l >> 18 | 240, e[f++] = l >> 12 & 63 | 128) : e[f++] = l >> 12 | 224, e[f++] = l >> 6 & 63 | 128), e[f++] = l & 63 | 128)
        }
        a = b;
        for (f = 0; f < e.length; f++) a += e[f], a = Fr(a, "+-a^+6");
        a = Fr(a, "+-3^+b+-f");
        a ^= Number(d[1]) || 0;
        0 > a && (a = (a & 2147483647) + 2147483648);
        a %= 1E6;
        return c + (a.toString() + "." +
            (a ^ b))
    };
var Jr = function (a) {
        var b = a;
        if (a instanceof Array) b = Array(a.length), Ir(b, a);
        else if (a instanceof Object) {
            var c = b = {},
                d;
            for (d in a) a.hasOwnProperty(d) && (c[d] = Jr(a[d]))
        }
        return b
    },
    Ir = function (a, b) {
        for (var c = 0; c < b.length; ++c) b.hasOwnProperty(c) && (a[c] = Jr(b[c]))
    },
    Kr = function (a, b) {
        a[b] || (a[b] = []);
        return a[b]
    },
    Mr = function (a, b) {
        if (null == a || null == b) return null == a == (null == b);
        if (a.constructor != Array && a.constructor != Object) throw Error("Invalid object type passed into jsproto.areObjectsEqual()");
        if (a === b) return !0;
        if (a.constructor != b.constructor) return !1;
        for (var c in a)
            if (!(c in b && Lr(a[c], b[c]))) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0
    },
    Lr = function (a, b) {
        if (a === b || !(!0 !== a && 1 !== a || !0 !== b && 1 !== b) || !(!1 !== a && 0 !== a || !1 !== b && 0 !== b)) return !0;
        if (a instanceof Object && b instanceof Object) {
            if (!Mr(a, b)) return !1
        } else return !1;
        return !0
    };
var Nr = function (a) {
        this.data = a || []
    },
    am = function (a, b) {
        return null != a.data[b]
    },
    Or = function (a, b, c) {
        a = a.data[b];
        return null != a ? a : c
    },
    Pr = function (a, b) {
        return !!Or(a, b, void 0)
    },
    em = function (a, b) {
        return Or(a, b, 0)
    },
    Q = function (a, b, c) {
        return Or(a, b, c || "")
    },
    cm = function (a, b, c) {
        return Kr(a.data, b)[c]
    },
    $l = function (a, b, c) {
        return Kr(a.data, b)[c]
    },
    Rr = function (a) {
        for (var b = Qr, c = [], d = 0; d < P(a, 0); d++) c.push(new b($l(a, 0, d)));
        return c
    },
    P = function (a, b) {
        return a.data[b] ? a.data[b].length : 0
    };
Nr.prototype.zb = v("data");
var Sr = function (a) {
    this.data = a || []
};
C(Sr, Nr);
var Tr = function (a) {
    this.data = a || []
};
C(Tr, Nr);
Sr.prototype.Ka = function () {
    return Q(this, 3)
};
var Ur = function (a) {
    this.data = a || []
};
C(Ur, Nr);
var Vr = function (a) {
    this.data = a || []
};
C(Vr, Nr);
var Wr = function (a) {
    this.data = a || []
};
C(Wr, Nr);
var Qr = function (a) {
    this.data = a || []
};
C(Qr, Nr);
var Xr = function (a) {
    this.data = a || []
};
C(Xr, Nr);
var Zl = function (a) {
    this.data = a || []
};
C(Zl, Nr);
var Yr = function (a) {
    this.data = a || []
};
C(Yr, Nr);
var Zr = function (a) {
    this.data = a || []
};
C(Zr, Nr);
var $r = function (a) {
    this.data = a || []
};
C($r, Nr);
var as = function (a) {
    this.data = a || []
};
C(as, Nr);
var bs = function (a) {
    this.data = a || []
};
C(bs, Nr);
var cs = function (a) {
    this.data = a || []
};
C(cs, Nr);
var ds = function (a) {
    this.data = a || []
};
C(ds, Nr);
var es = function (a) {
    this.data = a || []
};
C(es, Nr);
var fs = function (a) {
    this.data = a || []
};
C(fs, Nr);
var gs = function (a, b) {
        return new Vr($l(a, 2, b))
    },
    hs = function (a, b) {
        return new Wr($l(a, 3, b))
    };
Qr.prototype.kb = function () {
    return Q(this, 0)
};
Zl.prototype.a = function () {
    return P(this, 2)
};
Zl.prototype.b = function (a) {
    return new Xr($l(this, 2, a))
};
Zr.prototype.a = function () {
    return P(this, 1)
};
Zr.prototype.b = function (a) {
    return new Yr($l(this, 1, a))
};
as.prototype.a = function () {
    return P(this, 1)
};
as.prototype.b = function (a) {
    return new $r($l(this, 1, a))
};
var is = function (a) {
        return new bs(a.data[14])
    },
    js = function (a, b) {
        return new Qr($l(a, 0, b))
    },
    ks = function (a, b) {
        return new Ur($l(a, 5, b))
    };
var ls = function (a, b) {
        this.c = a;
        this.a = "";
        b && (this.a = b);
        this.b = 0;
        this.G = rp.M()
    },
    ms = function (a) {
        a = a.nb("q").join("");
        return Hr(a)
    },
    ns = function (a, b, c, d, e, f) {
        c = c.toString();
        c += ms(d);
        d = d.toString();
        var g = Ia;
        b += "?" + c;
        2E3 > b.length + d.length && (g = "GET", b += "&" + d, d = "");
        ++a.b;
        return Un(b, function (b) {
            --a.b;
            e(b)
        }, g, d, void 0, f)
    },
    os = function (a, b, c, d, e, f, g, l, m) {
        var p = a.a + "/translate_a/t",
            q = new gq,
            F = new gq;
        q.set(sb, a.c);
        q.set("sl", b);
        q.set("tl", c);
        q.set("hl", d);
        q.set("v", "1.0");
        null != g && q.set(ze, g);
        l && q.g(l);
        (b = !Yf(e) ||
            Yf(e) && 1 == e.length) ? F.set("q", e): uq(F, "q", e);
        e = A(a.j, a, b, f);
        return ns(a, p, q, F, e, m)
    },
    ps = function (a, b, c, d, e, f, g, l, m, p, q) {
        var F = a.a + oa,
            B = new gq,
            M = new gq;
        B.set(sb, a.c);
        B.set("sl", b);
        B.set("tl", c);
        B.set("hl", d);
        uq(B, "dt", f);
        null != l && (B.set("ie", l), B.set("oe", l));
        p && B.set("dj", "1");
        m && B.g(m);
        M.set("q", e);
        ns(a, F, B, M, A(a.g, a, g, q), void 0)
    },
    qs = function (a, b, c, d, e, f, g, l, m, p) {
        var q = "at bd ex ld md qc rw rm ss t".split(" ");
        g && (q = "at bd ex ld md qca rw rm ss t".split(" "));
        ur && q.push("kr");
        Dr && q.push("gt");
        ps(a,
            b, c, d, e, q, f, l, m, void 0, p)
    };
ls.prototype.o = function (a, b) {
    b = b.target;
    rs(b) && (b = ss(b, "handleTransliterationResult_"), b = new fs(b), 0 < P(b, 0) && a(Q(js(b, 0), 3)))
};
ls.prototype.g = function (a, b, c) {
    c = c.target;
    rs(c) ? (b = ss(c, "handleSingleResult_"), Yf(b) && (b = new fs(b)), a(b)) : (ts(this, c), b && b(bo(c)))
};
ls.prototype.j = function (a, b, c) {
    c = c.target;
    if (co(c)) {
        c = ss(c, "handleTextResult_");
        var d = [];
        if (a) d.push(Yf(c) ? c[0] : c);
        else if (Yf(c))
            for (a = 0; a < c.length; ++a) d.push(Yf(c[a]) ? c[a][0] : c[a]);
        b(d)
    } else ts(this, c), b(null, c.jd)
};
var ss = function (a, b) {
        var c = eo(a);
        a = {
            "class": "trans.common.TranslationAPI",
            func: b,
            url: String(a.ce)
        };
        try {
            var d = JSON.parse(c)
        } catch (e) {
            throw d = Kp.M(), a.js = c, a.error = e.message, d.log("jsonParseErr", a), e;
        }
        return d
    },
    rs = function (a) {
        return co(a) && ("[" == eo(a)[0] || "{" == eo(a)[0])
    },
    us = {},
    vs = (us[1] = 15, us[2] = 16, us[3] = 17, us[4] = 18, us[5] = 19, us[6] = 20, us[7] = 21, us[8] = 22, us[9] = 23, us),
    ts = function (a, b) {
        var c = b.jd;
        wp(a.G, 156, c in vs ? vs[c] : 0);
        a = Kp.M();
        c = String(b.ce);
        b = eo(b);
        a.log("invalidResponse", {
            q: c.substring(0, 500),
            ql: c.length,
            r: b.substring(0, 500),
            rl: b.length
        })
    };
ls.prototype.m = v("b");
var ws;
yh(["A", "AREA", wa, "HEAD", Ea, "LINK", "MENU", "META", "OPTGROUP", "OPTION", "PROGRESS", Ma, Ka, "SOURCE", Oa, "TITLE", "TRACK"]);
var xs = ["combobox", "grid", "group", wd, "menu", "menubar", "radiogroup", "row", "rowgroup", "tablist", "textbox", "toolbar", "tree", "treegrid"],
    ys = function (a, b) {
        b ? a.setAttribute(fe, b) : a.removeAttribute(fe)
    },
    zs = function (a, b, c) {
        Yf(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (ws || (ws = {
            atomic: !1,
            autocomplete: Ld,
            dropeffect: Ld,
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: mf,
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: Ld,
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = ws,
            b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    },
    As = function (a, b) {
        a = a.getAttribute("aria-" + b);
        return null == a || void 0 == a ? "" : String(a)
    },
    Bs = function (a) {
        var b = As(a, Wa);
        return ik(a).getElementById(b)
    },
    Cs = function (a, b) {
        var c = "";
        b && (c = b.id);
        zs(a, Wa, c)
    };
var Ds = function (a) {
        if (a.classList) return a.classList;
        a = a.className;
        return Pf(a) && a.match(/\S+/g) || []
    },
    Es = function (a, b) {
        return a.classList ? a.classList.contains(b) : tg(Ds(a), b)
    },
    V = function (a, b) {
        a.classList ? a.classList.add(b) : Es(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
    },
    Fs = function (a, b) {
        if (a.classList) D(b, function (b) {
            V(a, b)
        });
        else {
            var c = {};
            D(Ds(a), function (a) {
                c[a] = !0
            });
            D(b, function (a) {
                c[a] = !0
            });
            a.className = "";
            for (var d in c) a.className += 0 < a.className.length ? " " + d : d
        }
    },
    W = function (a, b) {
        a.classList ?
            a.classList.remove(b) : Es(a, b) && (a.className = mg(Ds(a), function (a) {
            return a != b
        }).join(" "))
    },
    Gs = function (a, b) {
        a.classList ? D(b, function (b) {
            W(a, b)
        }) : a.className = mg(Ds(a), function (a) {
            return !tg(b, a)
        }).join(" ")
    },
    Hs = function (a, b, c) {
        c ? V(a, b) : W(a, b)
    },
    Is = function (a, b, c) {
        W(a, b);
        V(a, c)
    };
var Ls = function (a, b) {
        var c = jk();
        a = a(b || Js, void 0, void 0);
        Ks(a);
        a = Cq(a);
        return zk(c.a, a)
    },
    Ms = function (a, b, c, d) {
        a = a(b || Js, void 0, c);
        d = el(d || jk(), k);
        a = Ks(a);
        Xj(d, a);
        1 == d.childNodes.length && (a = d.firstChild, 1 == a.nodeType && (d = a));
        return d
    },
    Ks = function (a) {
        if (!ag(a)) return String(a);
        if (a instanceof Bq) {
            if (a.jb === vq) return a.Ja();
            if (a.jb === Aq) return Wg(a.Ja())
        }
        return "zSoyz"
    },
    Js = {};
var Ns = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
};
Ns.prototype.contains = function (a) {
    return this && a ? a instanceof Ns ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.b >= this.left && a.b <= this.right && a.a >= this.top && a.a <= this.bottom : !1
};
Ns.prototype.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
Ns.prototype.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
Ns.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
var Os = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
};
Os.prototype.contains = function (a) {
    return a instanceof ck ? a.b >= this.left && a.b <= this.left + this.width && a.a >= this.top && a.a <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
};
Os.prototype.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
Os.prototype.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
Os.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var Qs = function (a, b, c) {
        if (Pf(b))(b = Ps(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Ps(c, d);
                f && (c.style[f] = e)
            }
    },
    Rs = {},
    Ps = function (a, b) {
        var c = Rs[b];
        if (!c) {
            var d = hh(b);
            c = d;
            void 0 === a.style[d] && (d = (Mh ? "Webkit" : Lh ? "Moz" : G ? "ms" : Ih ? "O" : null) + ih(d), void 0 !== a.style[d] && (c = d));
            Rs[b] = c
        }
        return c
    },
    Ss = function (a, b) {
        var c = ik(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    },
    Ts = function (a, b) {
        return Ss(a, b) || (a.currentStyle ?
            a.currentStyle[b] : null) || a.style && a.style[b]
    },
    Vs = function (a, b, c) {
        if (b instanceof ck) {
            var d = b.b;
            b = b.a
        } else d = b, b = c;
        a.style.left = Us(d, !1);
        a.style.top = Us(b, !1)
    },
    Ws = function (a) {
        a = a ? ik(a) : document;
        return !G || ci(9) || pk(jk(a).a) ? a.documentElement : a.body
    },
    Xs = function (a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        G && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    },
    Ys = function (a) {
        if (G && !ci(8)) return a.offsetParent;
        var b = ik(a),
            c = Ts(a, Xd),
            d = "fixed" == c || c == Ua;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = Ts(a, Xd), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == Ua || "relative" == c)) return a;
        return null
    },
    $s = function (a) {
        for (var b = new Ns(0, Infinity, Infinity, 0), c = jk(a), d = c.a.body, e = c.a.documentElement, f = rk(c.a); a = Ys(a);)
            if (!(G && 0 == a.clientWidth || Mh && 0 ==
                a.clientHeight && a == d) && a != d && a != e && Ts(a, "overflow") != pf) {
                var g = Zs(a),
                    l = new ck(a.clientLeft, a.clientTop);
                g.b += l.b;
                g.a += l.a;
                b.top = Math.max(b.top, g.a);
                b.right = Math.min(b.right, g.b + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.a + a.clientHeight);
                b.left = Math.max(b.left, g.b)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top, f);
        c = qk(fl(c) || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b :
            null
    },
    ct = function (a, b) {
        b = b || rk(document);
        var c = b || rk(document);
        var d = Zs(a),
            e = Zs(c),
            f = at(c);
        if (c == rk(document)) {
            var g = d.b - c.scrollLeft;
            d = d.a - c.scrollTop;
            G && !ci(10) && (g += f.left, d += f.top)
        } else g = d.b - e.b - f.left, d = d.a - e.a - f.top;
        a = bt(a);
        f = c.clientHeight - a.height;
        e = c.scrollLeft;
        var l = c.scrollTop;
        e += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
        l += Math.min(d, Math.max(d - f, 0));
        c = new ck(e, l);
        b.scrollLeft = c.b;
        b.scrollTop = c.a
    },
    Zs = function (a) {
        var b = ik(a),
            c = new ck(0, 0),
            d = Ws(b);
        if (a == d) return c;
        a = Xs(a);
        b = sk(jk(b).a);
        c.b = a.left + b.b;
        c.a = a.top + b.a;
        return c
    },
    et = function (a, b) {
        a = dt(a);
        b = dt(b);
        return new ck(a.b - b.b, a.a - b.a)
    },
    ft = function (a) {
        a = Xs(a);
        return new ck(a.left, a.top)
    },
    dt = function (a) {
        if (1 == a.nodeType) return ft(a);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new ck(a.clientX, a.clientY)
    },
    gt = function (a, b, c) {
        var d = Zs(a);
        b instanceof ck && (c = b.a, b = b.b);
        Vs(a, a.offsetLeft + (b - d.b), a.offsetTop + (Number(c) - d.a))
    },
    ht = function (a, b, c) {
        if (b instanceof fk) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        a.style.width = Us(b, !0);
        a.style.height = Us(c, !0)
    },
    Us = function (a, b) {
        typeof a == Md && (a = (b ? Math.round(a) : a) + Yd);
        return a
    },
    it = function (a) {
        var b = bt;
        if (Ts(a, "display") != Ld) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = Rc;
        c.position = Ua;
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    },
    bt = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Mh && !b && !c;
        return z(b) && !d || !a.getBoundingClientRect ? new fk(b, c) : (a = Xs(a), new fk(a.right - a.left, a.bottom - a.top))
    },
    jt = function (a) {
        var b = Zs(a);
        a = it(a);
        return new Os(b.b, b.a, a.width, a.height)
    },
    kt = function (a, b) {
        a = a.style;
        "opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
    },
    X = function (a, b) {
        a.style.display = b ? "" : Ld
    },
    lt = function (a) {
        return a.style.display != Ld
    },
    nt = function (a) {
        var b = jk(void 0),
            c = b.a;
        if (G && c.createStyleSheet) return b = c.createStyleSheet(), mt(b, a), b;
        c = kk(b.a, "HEAD", void 0, void 0)[0];
        if (!c) {
            var d = kk(b.a, "BODY", void 0, void 0)[0];
            c = b.b("HEAD");
            d.parentNode.insertBefore(c, d)
        }
        d = b.b(Ma);
        mt(d, a);
        b.appendChild(c, d);
        return d
    },
    mt = function (a, b) {
        b = Fj(b);
        G && z(a.cssText) ? a.cssText = b : a.innerHTML = b
    },
    ot = function (a) {
        return ge == Ts(a, Jb)
    },
    pt = Lh ? "MozUserSelect" : Mh || Jh ? "WebkitUserSelect" : null,
    qt = function (a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (pt) {
            if (b = b ? Ld : "", a.style && (a.style[pt] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style && (d.style[pt] = b)
            }
        } else if (G || Ih)
            if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
                for (a = 0; d = c[a]; a++) d.setAttribute("unselectable",
                    b)
    },
    rt = function (a, b, c) {
        a = a.style;
        Lh ? a.MozBoxSizing = c : Mh ? a.WebkitBoxSizing = c : a.boxSizing = c;
        a.width = Math.max(b.width, 0) + Yd;
        a.height = Math.max(b.height, 0) + Yd
    },
    st = function (a, b, c, d) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var e = a.style[c],
            f = a.runtimeStyle[c];
        a.runtimeStyle[c] = a.currentStyle[c];
        a.style[c] = b;
        b = a.style[d];
        a.style[c] = e;
        a.runtimeStyle[c] = f;
        return +b
    },
    tt = function (a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? st(a, b, vd, "pixelLeft") : 0
    },
    ut = function (a, b) {
        if (G) {
            var c = tt(a, b + "Left"),
                d = tt(a,
                    b + "Right"),
                e = tt(a, b + "Top");
            a = tt(a, b + "Bottom");
            return new Ns(e, d, a, c)
        }
        c = Ss(a, b + "Left");
        d = Ss(a, b + "Right");
        e = Ss(a, b + "Top");
        a = Ss(a, b + "Bottom");
        return new Ns(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
    },
    vt = function (a) {
        return ut(a, "padding")
    },
    wt = {
        thin: 2,
        medium: 4,
        thick: 6
    },
    xt = function (a, b) {
        if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == Ld) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in wt ? wt[b] : st(a, b, vd, "pixelLeft")
    },
    at = function (a) {
        if (G && !ci(9)) {
            var b = xt(a, "borderLeft"),
                c = xt(a, "borderRight"),
                d = xt(a, "borderTop");
            a = xt(a, "borderBottom");
            return new Ns(d, c, a, b)
        }
        b = Ss(a, "borderLeftWidth");
        c = Ss(a, "borderRightWidth");
        d = Ss(a, "borderTopWidth");
        a = Ss(a, "borderBottomWidth");
        return new Ns(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };
var yt = function (a) {
    gl.call(this);
    this.m = a;
    this.c = {}
};
C(yt, gl);
var zt = [];
yt.prototype.K = function (a, b, c, d) {
    return At(this, a, b, c, d)
};
var Bt = function (a, b, c, d) {
        At(a, b, r, c, !1, d)
    },
    At = function (a, b, c, d, e, f) {
        Yf(c) || (c && (zt[0] = c.toString()), c = zt);
        for (var g = 0; g < c.length; g++) {
            var l = O(b, c[g], d || a.handleEvent, e || !1, f || a.m || a);
            if (!l) break;
            a.c[l.key] = l
        }
        return a
    };
yt.prototype.Rg = function (a, b, c, d) {
    return Ct(this, a, b, c, d)
};
var Ct = function (a, b, c, d, e, f) {
    if (Yf(c))
        for (var g = 0; g < c.length; g++) Ct(a, b, c[g], d, e, f);
    else {
        b = Gl(b, c, d || a.handleEvent, e, f || a.m || a);
        if (!b) return a;
        a.c[b.key] = b
    }
    return a
};
yt.prototype.Ga = function (a, b, c, d, e) {
    if (Yf(b))
        for (var f = 0; f < b.length; f++) this.Ga(a, b[f], c, d, e);
    else c = c || this.handleEvent, d = ag(d) ? !!d.capture : !!d, e = e || this.m || this, c = Hl(c), d = !!d, b = vl(a) ? a.Ud(b, c, d, e) : a ? (a = Jl(a)) ? a.Ud(b, c, d, e) : null : null, b && (Ol(b), delete this.c[b.key]);
    return this
};
var Dt = function (a) {
    nh(a.c, function (a, c) {
        this.c.hasOwnProperty(c) && Ol(a)
    }, a);
    a.c = {}
};
yt.prototype.T = function () {
    yt.w.T.call(this);
    Dt(this)
};
yt.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
};
var Et = u();
Wf(Et);
Et.prototype.a = 0;
var Y = function (a) {
    R.call(this);
    this.a = a || jk();
    this.Ha = Ft;
    this.La = null;
    this.Ba = !1;
    this.H = null;
    this.O = void 0;
    this.L = this.o = this.F = this.ia = null;
    this.Xa = !1
};
C(Y, R);
Y.prototype.Rb = Et.M();
var Ft = null,
    Gt = function (a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? Tc : jf;
            case 4:
                return b ? "activate" : Gb;
            case 8:
                return b ? ie : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? Sb : ib;
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    },
    Ht = function (a) {
        return a.La || (a.La = ":" + (a.Rb.a++).toString(36))
    },
    It = function (a, b) {
        if (a.F && a.F.L) {
            var c = a.F.L,
                d = a.La;
            d in c && delete c[d];
            th(a.F.L, b, a)
        }
        a.La = b
    };
Y.prototype.l = v("H");
Y.prototype.zc = function (a) {
    return this.H ? this.a.zc(a, this.H) : null
};
var Z = function (a) {
        a.O || (a.O = new yt(a));
        return a.O
    },
    Kt = function (a, b) {
        if (a == b) throw Error(Qa);
        if (b && a.F && a.La && Jt(a.F, a.La) && a.F != b) throw Error(Qa);
        a.F = b;
        Y.w.Kd.call(a, b)
    };
Y.prototype.getParent = v("F");
Y.prototype.Kd = function (a) {
    if (this.F && this.F != a) throw Error("Method not supported");
    Y.w.Kd.call(this, a)
};
Y.prototype.Aa = function () {
    this.H = el(this.a, k)
};
Y.prototype.sa = function (a) {
    Lt(this, a)
};
var Lt = function (a, b, c) {
    if (a.Ba) throw Error(za);
    a.H || a.Aa();
    b ? b.insertBefore(a.H, c || null) : a.a.a.body.appendChild(a.H);
    a.F && !a.F.Ba || a.ba()
};
x = Y.prototype;
x.Y = function (a) {
    if (this.Ba) throw Error(za);
    if (a && this.xd(a)) {
        this.Xa = !0;
        var b = ik(a);
        this.a && this.a.a == b || (this.a = jk(a));
        this.na(a);
        this.ba()
    } else throw Error("Invalid element to decorate");
};
x.xd = w(!0);
x.na = zf("H");
x.ba = function () {
    this.Ba = !0;
    Mt(this, function (a) {
        !a.Ba && a.l() && a.ba()
    })
};
x.tb = function () {
    Mt(this, function (a) {
        a.Ba && a.tb()
    });
    this.O && Dt(this.O);
    this.Ba = !1
};
x.T = function () {
    this.Ba && this.tb();
    this.O && (this.O.Da(), delete this.O);
    Mt(this, function (a) {
        a.Da()
    });
    !this.Xa && this.H && Fk(this.H);
    this.F = this.ia = this.H = this.L = this.o = null;
    Y.w.T.call(this)
};
x.Ta = function (a, b) {
    this.Xc(a, Nt(this), b)
};
x.Xc = function (a, b, c) {
    if (a.Ba && (c || !this.Ba)) throw Error(za);
    if (0 > b || b > Nt(this)) throw Error("Child component index out of bounds");
    this.L && this.o || (this.L = {}, this.o = []);
    if (a.getParent() == this) {
        var d = Ht(a);
        this.L[d] = a;
        wg(this.o, a)
    } else th(this.L, Ht(a), a);
    Kt(a, this);
    Dg(this.o, b, 0, a);
    a.Ba && this.Ba && a.getParent() == this ? (c = this.Yb(), b = c.childNodes[b] || null, b != a.l() && c.insertBefore(a.l(), b)) : c ? (this.H || this.Aa(), b = Ot(this, b + 1), Lt(a, this.Yb(), b ? b.H : null)) : this.Ba && !a.Ba && a.H && a.H.parentNode && 1 == a.H.parentNode.nodeType &&
        a.ba()
};
x.Yb = v("H");
var Pt = function (a) {
        null == a.Ha && (a.Ha = ot(a.Ba ? a.H : a.a.a.body));
        return a.Ha
    },
    Nt = function (a) {
        return a.o ? a.o.length : 0
    },
    Jt = function (a, b) {
        a.L && b ? (a = a.L, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
        return b
    },
    Ot = function (a, b) {
        return a.o ? a.o[b] || null : null
    },
    Mt = function (a, b, c) {
        a.o && D(a.o, b, c)
    },
    Qt = function (a, b) {
        return a.o && b ? lg(a.o, b) : -1
    };
Y.prototype.removeChild = function (a, b) {
    if (a) {
        var c = Pf(a) ? a : Ht(a);
        a = Jt(this, c);
        if (c && a) {
            var d = this.L;
            c in d && delete d[c];
            wg(this.o, a);
            b && (a.tb(), a.H && Fk(a.H));
            Kt(a, null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
var Rt = function (a) {
    for (var b = []; a.o && 0 != a.o.length;) b.push(a.removeChild(Ot(a, 0), !0))
};
var Tt = function (a, b) {
    R.call(this);
    a && St(this, a, b)
};
C(Tt, R);
x = Tt.prototype;
x.H = null;
x.vf = null;
x.Ng = null;
x.wf = null;
x.wb = -1;
x.rc = -1;
x.Qf = !1;
var Ut = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    Vt = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    Wt = !Mh || ai("525"),
    Xt = Oh && Lh;
Tt.prototype.a = function (a) {
    if (Mh || Jh)
        if (17 == this.wb && !a.ctrlKey || 18 == this.wb && !a.altKey || Oh && 91 == this.wb && !a.metaKey) this.rc = this.wb = -1; - 1 == this.wb && (a.ctrlKey && 17 != a.keyCode ? this.wb = 17 : a.altKey && 18 != a.keyCode ? this.wb = 18 : a.metaKey && 91 != a.keyCode && (this.wb = 91));
    Wt && !Wl(a.keyCode, this.wb, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.rc = Vl(a.keyCode), Xt && (this.Qf = a.altKey))
};
Tt.prototype.b = function (a) {
    this.rc = this.wb = -1;
    this.Qf = a.altKey
};
Tt.prototype.handleEvent = function (a) {
    var b = a.a,
        c = b.altKey;
    if (G && a.type == pd) {
        var d = this.rc;
        var e = 13 != d && 27 != d ? b.keyCode : 0
    } else(Mh || Jh) && a.type == pd ? (d = this.rc, e = 0 <= b.charCode && 63232 > b.charCode && Ul(d) ? b.charCode : 0) : Ih && !Mh ? (d = this.rc, e = Ul(d) ? b.keyCode : 0) : (a.type == pd ? (Xt && (c = this.Qf), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.rc, e = b.charCode) : (d = b.keyCode || this.rc, e = b.charCode || 0)) : (d = b.keyCode || this.rc, e = b.charCode || 0), Oh && 63 == e && 224 == d && (d = 191));
    var f = d = Vl(d);
    d ? 63232 <= d && d in Ut ? f =
        Ut[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Vt && (f = Vt[b.keyIdentifier]);
    Lh && Wt && a.type == pd && !Wl(f, this.wb, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.wb, this.wb = f, b = new Yt(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
};
Tt.prototype.l = v("H");
var St = function (a, b, c) {
        a.wf && Zt(a);
        a.H = b;
        a.vf = O(a.H, pd, a, c);
        a.Ng = O(a.H, od, a.a, c, a);
        a.wf = O(a.H, qd, a.b, c, a)
    },
    Zt = function (a) {
        a.vf && (Ol(a.vf), Ol(a.Ng), Ol(a.wf), a.vf = null, a.Ng = null, a.wf = null);
        a.H = null;
        a.wb = -1;
        a.rc = -1
    };
Tt.prototype.T = function () {
    Tt.w.T.call(this);
    Zt(this)
};
var Yt = function (a, b, c, d) {
    rl.call(this, d);
    this.type = nd;
    this.keyCode = a;
    this.repeat = c
};
C(Yt, rl);
var $t = u(),
    au;
Wf($t);
var cu = function () {
        var a = new bu;
        a.Z = w("jfk-checkbox");
        return a
    },
    du = {
        button: "pressed",
        checkbox: qb,
        menuitem: ke,
        menuitemcheckbox: qb,
        menuitemradio: qb,
        radio: qb,
        tab: ke,
        treeitem: ke
    };
$t.prototype.oc = u();
$t.prototype.bb = function (a) {
    return a.a.b(k, eu(this, a).join(" "), a.Ja())
};
$t.prototype.Fb = yf();
var gu = function (a, b, c) {
    if (a = a.l ? a.l() : a) {
        var d = [b];
        G && !ai("7") && (d = fu(Ds(a), b), d.push(b));
        (c ? Fs : Gs)(a, d)
    }
};
$t.prototype.Qc = w(!0);
$t.prototype.Y = function (a, b) {
    b.id && It(a, b.id);
    var c = this.Fb(b);
    c && c.firstChild ? hu(a, c.firstChild.nextSibling ? zg(c.childNodes) : c.firstChild) : a.bd = null;
    var d = 0,
        e = this.Z(),
        f = this.Z(),
        g = !1,
        l = !1,
        m = !1,
        p = zg(Ds(b));
    D(p, function (a) {
        g || a != e ? l || a != f ? d |= this.c(a) : l = !0 : (g = !0, f == e && (l = !0));
        1 == this.c(a) && Xk(c) && Yk(c) && Wk(c, !1)
    }, this);
    a.Rc = d;
    g || (p.push(e), f == e && (l = !0));
    l || p.push(f);
    (a = a.Vb) && p.push.apply(p, a);
    if (G && !ai("7")) {
        var q = fu(p);
        0 < q.length && (p.push.apply(p, q), m = !0)
    }
    if (!g || !l || a || m) b.className = p.join(" ");
    return b
};
$t.prototype.Yh = function (a) {
    Pt(a) && this.wg(a.l(), !0);
    a.isEnabled() && this.yd(a, a.isVisible())
};
var iu = function (a, b, c) {
        if (a = c || a.oc()) c = b.getAttribute(fe) || null, a != c && ys(b, a)
    },
    ku = function (a, b, c) {
        b.isVisible() || zs(c, Rc, !b.isVisible());
        b.isEnabled() || a.cc(c, 1, !b.isEnabled());
        ju(b, 8) && a.cc(c, 8, b.Mg());
        ju(b, 16) && a.cc(c, 16, b.Ya());
        ju(b, 64) && a.cc(c, 64, b.Oa(64))
    };
x = $t.prototype;
x.bf = function (a, b) {
    qt(a, !b, !G && !Ih)
};
x.wg = function (a, b) {
    gu(a, this.Z() + "-rtl", b)
};
x.vg = function (a) {
    var b;
    return ju(a, 32) && (b = a.l()) ? Xk(b) && Yk(b) : !1
};
x.yd = function (a, b) {
    var c;
    if (ju(a, 32) && (c = a.l())) {
        if (!b && a.Oa(32)) {
            try {
                c.blur()
            } catch (d) {}
            a.Oa(32) && a.cf(null)
        }(Xk(c) && Yk(c)) != b && Wk(c, b)
    }
};
x.setVisible = function (a, b) {
    X(a, b);
    a && zs(a, Rc, !b)
};
x.ad = function (a, b, c) {
    var d = a.l();
    if (d) {
        var e = this.a(b);
        e && gu(a, e, c);
        this.cc(d, b, c)
    }
};
x.cc = function (a, b, c) {
    au || (au = {
        1: "disabled",
        8: ke,
        16: qb,
        64: "expanded"
    });
    b = au[b];
    var d = a.getAttribute(fe) || null;
    d && (d = du[d] || b, b = b == qb || b == ke ? d : b);
    b && zs(a, b, c)
};
x.Zb = function (a, b) {
    var c = this.Fb(a);
    c && (Ck(c), b && (Pf(b) ? L(c, b) : (a = function (a) {
        if (a) {
            var b = ik(c);
            c.appendChild(Pf(a) ? b.createTextNode(a) : a)
        }
    }, Yf(b) ? D(b, a) : !Zf(b) || Jd in b ? a(b) : D(zg(b), a))))
};
x.Z = w("goog-control");
var eu = function (a, b) {
        var c = a.Z(),
            d = [c],
            e = a.Z();
        e != c && d.push(e);
        c = b.Rc;
        for (e = []; c;) {
            var f = c & -c;
            e.push(a.a(f));
            c &= ~f
        }
        d.push.apply(d, e);
        (a = b.Vb) && d.push.apply(d, a);
        G && !ai("7") && d.push.apply(d, fu(d));
        return d
    },
    fu = function (a, b) {
        var c = [];
        b && (a = xg(a, [b]));
        D([], function (d) {
            !qg(d, gg(tg, a)) || b && !tg(d, b) || c.push(d.join("_"))
        });
        return c
    };
$t.prototype.a = function (a) {
    this.b || lu(this);
    return this.b[a]
};
$t.prototype.c = function (a) {
    if (!this.O) {
        this.b || lu(this);
        var b = this.b,
            c = {},
            d;
        for (d in b) c[b[d]] = d;
        this.O = c
    }
    a = parseInt(this.O[a], 10);
    return isNaN(a) ? 0 : a
};
var lu = function (a) {
    var b = a.Z();
    b.replace(/\xa0|\s/g, " ");
    a.b = {
        1: b + ja,
        2: b + "-hover",
        4: b + "-active",
        8: b + "-selected",
        16: b + "-checked",
        32: b + "-focused",
        64: b + "-open"
    }
};
var mu = u();
C(mu, $t);
Wf(mu);
x = mu.prototype;
x.oc = w(lb);
x.cc = function (a, b, c) {
    switch (b) {
        case 8:
        case 16:
            zs(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            mu.w.cc.call(this, a, b, c)
    }
};
x.bb = function (a) {
    var b = mu.w.bb.call(this, a);
    nu(b, a.m);
    var c = a.W();
    c && this.Ye(b, c);
    ju(a, 16) && this.cc(b, 16, a.Ya());
    return b
};
x.Y = function (a, b) {
    b = mu.w.Y.call(this, a, b);
    var c = this.W(b);
    a.Ra = c;
    a.m = b.title;
    ju(a, 16) && this.cc(b, 16, a.Ya());
    return b
};
x.W = Vf;
x.Ye = Vf;
var nu = function (a, b) {
        a && (b ? a.title = b : a.removeAttribute("title"))
    },
    pu = function (a, b, c) {
        var d = Pt(b),
            e = a.Z() + "-collapse-left";
        a = a.Z() + "-collapse-right";
        ou(b, d ? a : e, !!(c & 1));
        ou(b, d ? e : a, !!(c & 2))
    };
mu.prototype.Z = w("goog-button");
var ru = function (a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!$f(b)) throw Error("Invalid decorator function " + b);
        qu[a] = b
    },
    su = {},
    qu = {};
var tu = function (a, b, c) {
    Y.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = dg(b);
            if (d = su[d]) break;
            b = b.w ? b.w.constructor : null
        }
        b = d ? $f(d.M) ? d.M() : new d : null
    }
    this.c = b;
    this.bd = z(a) ? a : null
};
C(tu, Y);
x = tu.prototype;
x.bd = null;
x.Rc = 0;
x.he = 39;
x.tc = 255;
x.ge = 0;
x.df = !0;
x.Vb = null;
x.mf = !0;
x.Ce = !1;
x.yg = null;
var vu = function (a, b) {
        a.Ba && b != a.mf && uu(a, b);
        a.mf = b
    },
    wu = function (a, b) {
        b && (a.Vb ? tg(a.Vb, b) || a.Vb.push(b) : a.Vb = [b], gu(a, b, !0))
    },
    ou = function (a, b, c) {
        c ? wu(a, b) : b && a.Vb && wg(a.Vb, b) && (0 == a.Vb.length && (a.Vb = null), gu(a, b, !1))
    };
x = tu.prototype;
x.Aa = function () {
    var a = this.c.bb(this);
    this.H = a;
    iu(this.c, a, this.Zd());
    this.Ce || this.c.bf(a, !1);
    this.isVisible() || this.c.setVisible(a, !1)
};
x.Zd = v("yg");
x.Yb = function () {
    return this.c.Fb(this.l())
};
x.xd = function (a) {
    return this.c.Qc(a)
};
x.na = function (a) {
    this.H = a = this.c.Y(this, a);
    iu(this.c, a, this.Zd());
    this.Ce || this.c.bf(a, !1);
    this.df = a.style.display != Ld
};
x.ba = function () {
    tu.w.ba.call(this);
    ku(this.c, this, this.H);
    this.c.Yh(this);
    if (this.he & -2 && (this.mf && uu(this, !0), ju(this, 32))) {
        var a = this.l();
        if (a) {
            var b = this.C || (this.C = new Tt);
            St(b, a);
            Z(this).K(b, nd, this.Wa).K(a, Sb, this.Ok).K(a, ib, this.cf)
        }
    }
};
var uu = function (a, b) {
    var c = Z(a),
        d = a.l();
    b ? (c.K(d, pl.Od, a.eb).K(d, [pl.Pd, pl.Nd], a.vb).K(d, Dd, a.xg).K(d, Cd, a.Eg), a.ae != Vf && c.K(d, yb, a.ae), G && (ai(9) || c.K(d, Fb, a.ei), a.N || (a.N = new xu(a), il(a, a.N)))) : (c.Ga(d, pl.Od, a.eb).Ga(d, [pl.Pd, pl.Nd], a.vb).Ga(d, Dd, a.xg).Ga(d, Cd, a.Eg), a.ae != Vf && c.Ga(d, yb, a.ae), G && (ai(9) || c.Ga(d, Fb, a.ei), hl(a.N), a.N = null))
};
tu.prototype.tb = function () {
    tu.w.tb.call(this);
    this.C && Zt(this.C);
    this.isVisible() && this.isEnabled() && this.c.yd(this, !1)
};
tu.prototype.T = function () {
    tu.w.T.call(this);
    this.C && (this.C.Da(), delete this.C);
    delete this.c;
    this.N = this.Vb = this.bd = null
};
tu.prototype.Ja = v("bd");
tu.prototype.g = function (a) {
    this.c.Zb(this.l(), a);
    this.bd = a
};
var hu = function (a, b) {
    a.bd = b
};
x = tu.prototype;
x.ab = function () {
    var a = this.Ja();
    if (!a) return "";
    a = Pf(a) ? a : Yf(a) ? ng(a, al).join("") : $k(a);
    return Kg(a)
};
x.isVisible = v("df");
x.setVisible = function (a, b) {
    return b || this.df != a && this.dispatchEvent(a ? se : Sc) ? ((b = this.l()) && this.c.setVisible(b, a), this.isEnabled() && this.c.yd(this, a), this.df = a, !0) : !1
};
x.isEnabled = function () {
    return !this.Oa(1)
};
x.oa = function (a) {
    var b = this.getParent();
    b && typeof b.isEnabled == Wb && !b.isEnabled() || !yu(this, 1, !a) || (a || (zu(this, !1), Au(this, !1)), this.isVisible() && this.c.yd(this, a), Bu(this, 1, !a, !0))
};
var Au = function (a, b) {
    yu(a, 2, b) && Bu(a, 2, b)
};
tu.prototype.gb = function () {
    return this.Oa(4)
};
var zu = function (a, b) {
    yu(a, 4, b) && Bu(a, 4, b)
};
x = tu.prototype;
x.Mg = function () {
    return this.Oa(8)
};
x.eh = function (a) {
    yu(this, 8, a) && Bu(this, 8, a)
};
x.Ya = function () {
    return this.Oa(16)
};
x.Sa = function (a) {
    yu(this, 16, a) && Bu(this, 16, a)
};
x.Uc = function (a) {
    yu(this, 32, a) && Bu(this, 32, a)
};
x.Ua = function (a) {
    yu(this, 64, a) && Bu(this, 64, a)
};
x.Oa = function (a) {
    return !!(this.Rc & a)
};
var Bu = function (a, b, c, d) {
        d || 1 != b ? ju(a, b) && c != a.Oa(b) && (a.c.ad(a, b, c), a.Rc = c ? a.Rc | b : a.Rc & ~b) : a.oa(!c)
    },
    ju = function (a, b) {
        return !!(a.he & b)
    };
tu.prototype.Pa = function (a, b) {
    if (this.Ba && this.Oa(a) && !b) throw Error(za);
    !b && this.Oa(a) && Bu(this, a, !1);
    this.he = b ? this.he | a : this.he & ~a
};
var Cu = function (a, b) {
        return !!(a.tc & b) && ju(a, b)
    },
    yu = function (a, b, c) {
        return ju(a, b) && a.Oa(b) != c && (!(a.ge & b) || a.dispatchEvent(Gt(b, c))) && !a.vc
    };
x = tu.prototype;
x.xg = function (a) {
    (!a.relatedTarget || !Mk(this.l(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Cu(this, 2) && Au(this, !0)
};
x.Eg = function (a) {
    a.relatedTarget && Mk(this.l(), a.relatedTarget) || !this.dispatchEvent("leave") || (Cu(this, 4) && zu(this, !1), Cu(this, 2) && Au(this, !1))
};
x.ae = Vf;
x.eb = function (a) {
    this.isEnabled() && (Cu(this, 2) && Au(this, !0), tl(a) && (Cu(this, 4) && zu(this, !0), this.c && this.c.vg(this) && this.l().focus()));
    !this.Ce && tl(a) && a.preventDefault()
};
x.vb = function (a) {
    this.isEnabled() && (Cu(this, 2) && Au(this, !0), this.gb() && this.Ic(a) && Cu(this, 4) && zu(this, !1))
};
x.ei = function (a) {
    this.isEnabled() && this.Ic(a)
};
x.Ic = function (a) {
    Cu(this, 16) && this.Sa(!this.Ya());
    Cu(this, 8) && this.eh(!0);
    Cu(this, 64) && this.Ua(!this.Oa(64));
    var b = new N(n, this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.Yg = a.Yg);
    return this.dispatchEvent(b)
};
x.Ok = function () {
    Cu(this, 32) && this.Uc(!0)
};
x.cf = function () {
    Cu(this, 4) && zu(this, !1);
    Cu(this, 32) && this.Uc(!1)
};
x.Wa = function (a) {
    return this.isVisible() && this.isEnabled() && this.cd(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
x.cd = function (a) {
    return 13 == a.keyCode && this.Ic(a)
};
if (!$f(tu)) throw Error("Invalid component class " + tu);
if (!$f($t)) throw Error("Invalid renderer class " + $t);
var Du = dg(tu);
su[Du] = $t;
ru("goog-control", function () {
    return new tu(null)
});
var xu = function (a) {
    gl.call(this);
    this.b = a;
    this.a = !1;
    this.c = new yt(this);
    il(this, this.c);
    a = this.b.H;
    this.c.K(a, Ad, this.j).K(a, Ed, this.o).K(a, r, this.g)
};
C(xu, gl);
var Eu = !G || ci(9);
xu.prototype.j = function () {
    this.a = !1
};
xu.prototype.o = function () {
    this.a = !0
};
var Fu = function (a, b) {
    if (!Eu) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
};
xu.prototype.g = function (a) {
    if (this.a) this.a = !1;
    else {
        var b = a.a,
            c = b.button,
            d = b.type,
            e = Fu(b, Ad);
        this.b.eb(new rl(e, a.currentTarget));
        e = Fu(b, Ed);
        this.b.vb(new rl(e, a.currentTarget));
        Eu || (b.button = c, b.type = d)
    }
};
xu.prototype.T = function () {
    this.b = null;
    xu.w.T.call(this)
};
var Gu = u();
C(Gu, mu);
Wf(Gu);
x = Gu.prototype;
x.oc = u();
x.bb = function (a) {
    vu(a, !1);
    a.tc &= -256;
    a.Pa(32, !1);
    return a.a.b(wa, {
        "class": eu(this, a).join(" "),
        disabled: !a.isEnabled(),
        title: a.m || "",
        value: a.W() || ""
    }, a.ab() || "")
};
x.Qc = function (a) {
    return a.tagName == wa || a.tagName == Ea && (a.type == lb || "submit" == a.type || "reset" == a.type)
};
x.Y = function (a, b) {
    vu(a, !1);
    a.tc &= -256;
    a.Pa(32, !1);
    if (b.disabled) {
        var c = this.a(1);
        V(b, c)
    }
    return Gu.w.Y.call(this, a, b)
};
x.Yh = function (a) {
    Z(a).K(a.l(), r, a.Ic)
};
x.bf = Vf;
x.wg = Vf;
x.vg = function (a) {
    return a.isEnabled()
};
x.yd = Vf;
x.ad = function (a, b, c) {
    Gu.w.ad.call(this, a, b, c);
    (a = a.l()) && 1 == b && (a.disabled = c)
};
x.W = function (a) {
    return a.value
};
x.Ye = function (a, b) {
    a && (a.value = b)
};
x.cc = Vf;
var Hu = function (a, b, c) {
    tu.call(this, a, b || Gu.M(), c)
};
C(Hu, tu);
x = Hu.prototype;
x.W = v("Ra");
x.Ze = function (a) {
    this.Ra = a;
    this.c.Ye(this.l(), a)
};
x.T = function () {
    Hu.w.T.call(this);
    delete this.Ra;
    delete this.m
};
x.ba = function () {
    Hu.w.ba.call(this);
    if (ju(this, 32)) {
        var a = this.l();
        a && Z(this).K(a, qd, this.cd)
    }
};
x.cd = function (a) {
    return 13 == a.keyCode && a.type == nd || 32 == a.keyCode && a.type == qd ? this.Ic(a) : 32 == a.keyCode
};
ru("goog-button", function () {
    return new Hu(null)
});
var Iu = function (a) {
    a = a || {};
    var b = a.content,
        c = Gq,
        d = '<div role="button"' + (a.id ? ' id="' + U(a.id) + '"' : "") + ' class="';
    var e = a || {};
    var f = "goog-inline-block jfk-button ",
        g = e.style;
    switch (ag(g) ? g.toString() : g) {
        case 0:
            f += kd;
            break;
        case 2:
            f += gd;
            break;
        case 3:
            f += "jfk-button-primary";
            break;
        case 1:
            f += "jfk-button-default";
            break;
        case 4:
            f += "jfk-button-flat";
            break;
        case 5:
            f += "jfk-button-mini";
            break;
        case 6:
            f += "jfk-button-contrast";
            break;
        default:
            f += kd
    }
    f += (Iq(e.width, 1) ? " jfk-button-narrow" : "") + (e.checked ? " jfk-button-checked" :
        "") + (e.Wf ? " " + e.Wf : "") + (e.disabled ? " jfk-button-disabled" : "");
    return c(d + U(new Dq(f, void 0)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.ih ? U(a.ih) : "0") + '"') + (a.title ? a.Sm ? ' data-tooltip="' + U(a.title) + '"' : ' title="' + U(a.title) + '"' : "") + (a.value ? ' value="' + U(a.value) + '"' : "") + (a.attributes ? " " + Pq(a.attributes) : "") + ">" + Hq(null != b ? b : "") + pa)
};
var Ju = function (a, b, c) {
    gl.call(this);
    this.Pb = a;
    this.c = b || 0;
    this.a = c;
    this.b = A(this.pg, this)
};
C(Ju, gl);
x = Ju.prototype;
x.La = 0;
x.T = function () {
    Ju.w.T.call(this);
    this.stop();
    delete this.Pb;
    delete this.a
};
x.start = function (a) {
    this.stop();
    this.La = Xm(this.b, z(a) ? a : this.c)
};
x.stop = function () {
    this.gb() && Ym(this.La);
    this.La = 0
};
x.gb = function () {
    return 0 != this.La
};
x.pg = function () {
    this.La = 0;
    this.Pb && this.Pb.call(this.a)
};
var Mu = function (a) {
        return $g(Lg(a.replace(Ku, function (a, c) {
            return Lu.test(c) ? "" : " "
        }).replace(/[\t\n ]+/g, " ")))
    },
    Lu = /^(?:abbr|acronym|address|b|em|i|small|strong|su[bp]|u)$/i,
    Ku = /<[!\/]?([a-z0-9]+)([\/ ][^>]*)?>/gi;
var Nu = function () {
    if (Ph) {
        var a = /Windows NT ([0-9.]+)/;
        return (a = a.exec(jh)) ? a[1] : "0"
    }
    return Oh ? (a = /10[_.][0-9_.]+/, (a = a.exec(jh)) ? a[0].replace(/_/g, ".") : "10") : Qh ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(jh)) ? a[1] : "") : Rh || Sh || Th ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(jh)) ? a[1].replace(/_/g, ".") : "") : ""
}();
var Ru = function (a, b, c, d, e, f, g, l, m) {
        var p = Ou(c),
            q = jt(a),
            F = $s(a);
        if (F) {
            var B = new Os(F.left, F.top, F.right - F.left, F.bottom - F.top);
            F = Math.max(q.left, B.left);
            var M = Math.min(q.left + q.width, B.left + B.width);
            if (F <= M) {
                var fa = Math.max(q.top, B.top);
                B = Math.min(q.top + q.height, B.top + B.height);
                fa <= B && (q.left = F, q.top = fa, q.width = M - F, q.height = B - fa)
            }
        }
        F = jk(a);
        fa = jk(c);
        if (F.a != fa.a) {
            M = F.a.body;
            fa = fl(fa);
            B = new ck(0, 0);
            var da = tk(ik(M));
            if (Fh(da, "parent")) {
                var Lb = M;
                do {
                    var Zc = da == fa ? Zs(Lb) : ft(Lb);
                    B.b += Zc.b;
                    B.a += Zc.a
                } while (da &&
                da != fa && da != da.parent && (Lb = da.frameElement) && (da = da.parent))
            }
            M = ek(B, Zs(M));
            !G || ci(9) || pk(F.a) || (M = ek(M, sk(F.a)));
            q.left += M.b;
            q.top += M.a
        }
        a = Pu(a, b);
        b = q.left;
        a & 4 ? b += q.width : a & 2 && (b += q.width / 2);
        q = new ck(b, q.top + (a & 1 ? q.height : 0));
        q = ek(q, p);
        e && (q.b += (a & 4 ? -1 : 1) * e.b, q.a += (a & 1 ? -1 : 1) * e.a);
        if (g)
            if (m) var Bb = m;
            else if (Bb = $s(c)) Bb.top -= p.a, Bb.right -= p.b, Bb.bottom -= p.a, Bb.left -= p.b;
        return Qu(q, c, d, f, Bb, g, l)
    },
    Ou = function (a) {
        if (a = a.offsetParent) {
            var b = "HTML" == a.tagName || "BODY" == a.tagName;
            if (!b || "static" != Ts(a, Xd)) {
                var c =
                    Zs(a);
                if (!b) {
                    b = ot(a);
                    var d;
                    if (d = b) {
                        d = ki && Do(10);
                        var e = Uh && 0 <= gh(Nu, 10);
                        d = Lh || d || e
                    }
                    b = d ? -a.scrollLeft : !b || Kh && ai("8") || Ts(a, "overflowX") == pf ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
                    c = ek(c, new ck(b, a.scrollTop))
                }
            }
        }
        return c || new ck
    },
    Qu = function (a, b, c, d, e, f, g) {
        a = dk(a);
        var l = Pu(b, c);
        c = it(b);
        g = g ? new fk(g.width, g.height) : new fk(c.width, c.height);
        a = dk(a);
        g = new fk(g.width, g.height);
        var m = 0;
        if (d || 0 != l) l & 4 ? a.b -= g.width + (d ? d.right : 0) : l & 2 ? a.b -= g.width / 2 : d && (a.b += d.left), l & 1 ? a.a -= g.height + (d ? d.bottom :
            0) : d && (a.a += d.top);
        if (f) {
            if (e) {
                d = a;
                l = g;
                m = 0;
                65 == (f & 65) && (d.b < e.left || d.b >= e.right) && (f &= -2);
                132 == (f & 132) && (d.a < e.top || d.a >= e.bottom) && (f &= -5);
                d.b < e.left && f & 1 && (d.b = e.left, m |= 1);
                if (f & 16) {
                    var p = d.b;
                    d.b < e.left && (d.b = e.left, m |= 4);
                    d.b + l.width > e.right && (l.width = Math.min(e.right - d.b, p + l.width - e.left), l.width = Math.max(l.width, 0), m |= 4)
                }
                d.b + l.width > e.right && f & 1 && (d.b = Math.max(e.right - l.width, e.left), m |= 1);
                f & 2 && (m |= (d.b < e.left ? 16 : 0) | (d.b + l.width > e.right ? 32 : 0));
                d.a < e.top && f & 4 && (d.a = e.top, m |= 2);
                f & 32 && (p = d.a, d.a <
                e.top && (d.a = e.top, m |= 8), d.a + l.height > e.bottom && (l.height = Math.min(e.bottom - d.a, p + l.height - e.top), l.height = Math.max(l.height, 0), m |= 8));
                d.a + l.height > e.bottom && f & 4 && (d.a = Math.max(e.bottom - l.height, e.top), m |= 2);
                f & 8 && (m |= (d.a < e.top ? 64 : 0) | (d.a + l.height > e.bottom ? 128 : 0));
                e = m
            } else e = 256;
            m = e
        }
        f = new Os(0, 0, 0, 0);
        f.left = a.b;
        f.top = a.a;
        f.width = g.width;
        f.height = g.height;
        e = m;
        if (e & 496) return e;
        Vs(b, new ck(f.left, f.top));
        g = new fk(f.width, f.height);
        gk(c, g) || (c = g, a = pk(jk(ik(b)).a), !G || ai("10") || a && ai("8") ? rt(b, c, jb) : (g =
            b.style, a ? (a = vt(b), b = at(b), g.pixelWidth = c.width - b.left - a.left - a.right - b.right, g.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (g.pixelWidth = c.width, g.pixelHeight = c.height)));
        return e
    },
    Pu = function (a, b) {
        return (b & 8 && ot(a) ? b ^ 4 : b) & -9
    };
var Su = u();
Su.prototype.a = u();
var Tu = function (a, b) {
    this.g = a;
    this.m = !!b;
    this.o = {
        0: this.g + "-arrowright",
        1: this.g + "-arrowup",
        2: this.g + "-arrowdown",
        3: this.g + "-arrowleft"
    }
};
C(Tu, Su);
x = Tu.prototype;
x.sf = !1;
x.Sf = 2;
x.wh = 20;
x.Vf = 3;
x.Tg = -5;
x.Be = !1;
var Uu = function (a, b, c, d) {
    null != b && (a.Vf = b);
    null != c && (a.Sf = c);
    Qf(void 0) && (a.wh = NaN);
    Qf(d) && (a.Tg = d)
};
Tu.prototype.a = function (a, b, c) {
    a = this.Sf;
    2 == a && (a = 0);
    Vu(this, this.Vf, a, 2 == this.Sf ? Wu(this.Vf) ? this.c.offsetHeight / 2 : this.c.offsetWidth / 2 : this.wh, 0, c)
};
var Vu = function (a, b, c, d, e, f) {
        if (a.b) {
            var g = Xu(b, c),
                l = a.b;
            var m = it(l);
            m = (Wu(b) ? m.height / 2 : m.width / 2) - d;
            var p = Pu(l, g),
                q;
            if (q = $s(l)) l = jt(l), l = new Ns(l.top, l.left + l.width, l.top + l.height, l.left), Wu(b) ? l.top < q.top && !(p & 1) ? m -= q.top - l.top : l.bottom > q.bottom && p & 1 && (m -= l.bottom - q.bottom) : l.left < q.left && !(p & 4) ? m -= q.left - l.left : l.right > q.right && p & 4 && (m -= l.right - q.right);
            m = Wu(b) ? new ck(a.Tg, m) : new ck(m, a.Tg);
            p = Wu(b) ? 6 : 9;
            a.Be && 2 == e && (p = Wu(b) ? 4 : 1);
            q = b ^ 3;
            Wu(b) && a.b.dir == ge && (q = b);
            g = Ru(a.b, Xu(q, c), a.c, g, m, f, a.sf ? p :
                0, void 0, null);
            if (2 != e && g & 496) {
                Vu(a, b ^ 3, c, d, a.Be && 0 == e ? 1 : 2, f);
                return
            }!a.m || g & 496 || (e = parseFloat(a.c.style.left), f = parseFloat(a.c.style.top), isFinite(e) && 0 == e % 1 && isFinite(f) && 0 == f % 1 || Vs(a.c, Math.round(e), Math.round(f)))
        }
        Yu(a, b, c, d)
    },
    Yu = function (a, b, c, d) {
        var e = a.j;
        nh(a.o, function (a) {
            Hs(e, a, !1)
        }, a);
        V(e, a.o[b]);
        e.style.top = e.style.left = e.style.right = e.style.bottom = "";
        a.b ? (c = et(a.b, a.c), d = Zu(a.b, b), Wu(b) ? e.style.top = $u(c.a + d.a, a.c.offsetHeight - 15) + Yd : e.style.left = $u(c.b + d.b, a.c.offsetWidth - 15) + Yd) : e.style[0 ==
        c ? Wu(b) ? "top" : vd : Wu(b) ? "bottom" : ee] = d + Yd
    },
    $u = function (a, b) {
        return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
    },
    Xu = function (a, b) {
        switch (a) {
            case 2:
                return 0 == b ? 1 : 5;
            case 1:
                return 0 == b ? 0 : 4;
            case 0:
                return 0 == b ? 12 : 13;
            default:
                return 0 == b ? 8 : 9
        }
    },
    Zu = function (a, b) {
        var c = 0,
            d = 0;
        a = it(a);
        switch (b) {
            case 2:
                c = a.width / 2;
                break;
            case 1:
                c = a.width / 2;
                d = a.height;
                break;
            case 0:
                d = a.height / 2;
                break;
            case 3:
                c = a.width, d = a.height / 2
        }
        return new ck(c, d)
    },
    Wu = function (a) {
        return 0 == a || 3 == a
    };
var av = function (a) {
    gl.call(this);
    this.b = a || jk()
};
C(av, gl);
av.prototype.j = function () {
    ys(this.l(), "tooltip");
    zs(this.l(), "live", "polite")
};
var cv = function (a) {
    av.call(this, a);
    this.a = this.b.b(k, bv() + "-contentId");
    this.c = this.b.b(k, bv() + "-arrow", this.b.b(k, bv() + "-arrowimplbefore"), this.b.b(k, bv() + "-arrowimplafter"));
    this.g = this.b.b(k, {
        "class": bv(),
        role: "tooltip"
    }, this.a, this.c);
    this.j()
};
C(cv, av);
var bv = w("jfk-tooltip");
cv.prototype.l = v("g");
cv.prototype.T = function () {
    cv.w.T.call(this);
    this.g && Fk(this.g)
};
var dv = function (a) {
    cv.call(this, a)
};
C(dv, cv);
dv.prototype.j = function () {
    ys(this.l(), "tooltip")
};
var fv = function (a, b) {
        ev(a, b, void 0)
    },
    gv = function (a) {
        var b = a.getAttribute("title");
        b && ev(a, b)
    },
    ev = function (a, b, c) {
        c || (c = b instanceof Jj ? Mu(Kj(b)) : b);
        a.removeAttribute("title");
        a.removeAttribute(Db);
        a.removeAttribute(Ab);
        b ? (b instanceof Jj ? a.b = b : (a.setAttribute(Ab, b), a.b = null), a.setAttribute("aria-label", c)) : (a.b = null, a.removeAttribute("aria-label"));
        a = jk(a) || jk();
        b = dg(a.a);
        hv[b] || (hv[b] = new iv(a))
    },
    jv = function (a) {
        a.setAttribute(Cb, "t,c")
    },
    kv = function (a, b) {
        b ? a.setAttribute(Eb, hf) : a.removeAttribute(Eb)
    },
    hv = {},
    iv = function (a) {
        yt.call(this);
        this.D = a;
        this.L = new Ju(this.X, 0, this);
        il(this, this.L);
        var b = tk();
        this.v = $f(b.MutationObserver) ? new b.MutationObserver(A(this.R, this)) : null;
        a = a.a;
        this.K(a, [Cd, Ad, r, ib, Ub, od], this.N, !0);
        this.K(a, [Dd, Sb, Tb], this.ia, !0)
    };
C(iv, yt);
iv.prototype.T = function () {
    lv(this);
    iv.w.T.call(this)
};
var mv = function (a, b) {
    switch (b.type) {
        case Ad:
        case Dd:
        case Cd:
        case r:
            a.O = !1;
            break;
        case od:
            a.O = !0
    }
};
iv.prototype.ia = function (a) {
    this.v && this.v.disconnect();
    mv(this, a);
    var b = a.target;
    a = a.type == Sb || a.type == Tb;
    var c = this.a && Mk(this.a.a, b);
    if (this.O || !a || c) {
        this.V = a;
        if (a = b && b.getAttribute && this.v) a = b.getAttribute(fe) || null, a = tg(xs, a);
        a && (this.v.observe(b, {
            attributes: !0
        }), (a = Bs(b)) && (b = a));
        this.g = b
    } else this.g = null;
    nv(this)
};
iv.prototype.N = function (a) {
    mv(this, a);
    var b = a.target;
    a = a.type == Ad || a.type == r;
    b = this.a && Mk(this.a.a, b);
    a && b || (this.g = null, nv(this))
};
iv.prototype.R = function (a) {
    D(a, A(function (a) {
        var b = Bs(a.target);
        b && a.attributeName == ab && (this.g = b, nv(this))
    }, this))
};
var nv = function (a) {
        if (!(a.L.gb() && a.b && a.o)) {
            lv(a);
            var b = null != a.o ? a.o : 50;
            a.L.start(a.b ? b : 300)
        }
    },
    lv = function (a) {
        a.F && (Ym(a.F), a.F = 0, a.b = null)
    };
iv.prototype.X = function () {
    if (!this.g) ov(this), this.o = this.b = null;
    else if (!(this.b && this.a && Mk(this.a.l(), this.g)) || this.b.getAttribute("data-tooltip-unhoverable")) {
        var a = bl(this.g, function (a) {
                return a.getAttribute && (a.getAttribute(Db) || a.getAttribute(Ab) || a.b) && !a.getAttribute(Eb)
            }),
            b = !1;
        this.b && this.b != a && (ov(this), this.o = this.b = null, b = !0);
        if (!this.b && a && (this.b = a, pv(this, a))) {
            var c = Uj;
            if (a.getAttribute(Db))
                for (var d = mk("jfk-tooltip-data", a), e = 0; e < d.length; e++) {
                    if (d[e].parentNode == a) {
                        c = d[e].cloneNode(!0);
                        break
                    }
                } else c = a.b ? a.b : Nj(a.getAttribute(Ab));
            d = a.getAttribute(Cb);
            e = a.getAttribute("data-tooltip-class");
            var f = a.getAttribute("data-tooltip-offset");
            f = Ig(dh(f)) ? -1 : Number(f);
            var g = a.getAttribute("data-tooltip-hide-delay");
            g = Ig(dh(g)) ? null : Number(g);
            if (!b && (a = a.getAttribute("data-tooltip-delay"), a = Math.max(0, a - 300))) {
                this.F = Xm(gg(this.J, this.b, c, d, f, e, g), a, this);
                return
            }
            this.J(this.b, c, d, f, e, g)
        }
    }
};
var pv = function (a, b) {
        return b.getAttribute("data-tooltip-only-on-overflow") && b.offsetWidth >= b.scrollWidth && b.offsetHeight >= b.scrollHeight || a.V && "mouse" == b.getAttribute("data-tooltip-trigger") ? !1 : !0
    },
    qv = function (a) {
        if (a) switch (a.toLowerCase().split(",")[0]) {
            case "l":
                return 0;
            case "t":
                return 2;
            case "r":
                return 3
        }
        return 1
    };
iv.prototype.J = function (a, b, c, d, e, f) {
    this.F = 0;
    this.o = f;
    if (!this.a) {
        this.a = new dv(this.D);
        ov(this);
        this.D.a.body.appendChild(this.a.l());
        il(this, this.a);
        this.j = new Tu(bv(), !0);
        this.j.sf = !0;
        this.j.Be = !0;
        f = this.j;
        var g = this.a.c;
        f.c = this.a.l();
        f.j = g
    }
    a: {
        if (c) switch (c.toLowerCase().split(",")[1]) {
            case "l":
                f = 0;
                break a;
            case "r":
                f = 1;
                break a
        }
        f = 2
    }
    Uu(this.j, qv(c), f, d);
    W(this.a.l(), md);
    this.C != e && (this.C && !Ig(dh(this.C)) && W(this.a.l(), this.C), Ig(dh(e)) || V(this.a.l(), e), this.C = e);
    Vs(this.a.l(), 0, 0);
    if (b instanceof Jj) Yj(this.a.a, b);
    else
        for (Ck(this.a.a); c = b.firstChild;) this.a.a.appendChild(c);
    this.j.b = a;
    this.j.a(null, 0)
};
var ov = function (a) {
    a.a && V(a.a.l(), md)
};
var sv = function (a, b, c, d) {
    Hu.call(this, a, rv.M(), b);
    this.b = c || 0;
    this.v = d || 0;
    this.ob = !1
};
C(sv, Hu);
var uv = function (a, b) {
    a.b != b && (a.b = b, tv(a))
};
sv.prototype.oa = function (a) {
    this.isEnabled() != a && (sv.w.oa.call(this, a), tv(this))
};
sv.prototype.Uc = function (a) {
    sv.w.Uc.call(this, a);
    vv(this, !1)
};
sv.prototype.eb = function (a) {
    sv.w.eb.call(this, a);
    this.isEnabled() && vv(this, !0)
};
sv.prototype.vb = function (a) {
    sv.w.vb.call(this, a);
    this.isEnabled() && vv(this, !0)
};
var vv = function (a, b) {
        a.l() && Hs(a.l(), "jfk-button-clear-outline", b)
    },
    tv = function (a) {
        a.l() && wv(a.c, a)
    },
    rv = function () {
        this.D = this.Z() + "-standard";
        this.g = this.Z() + "-action";
        this.L = this.Z() + "-primary";
        this.m = this.Z() + "-default";
        this.v = this.Z() + "-flat";
        this.C = this.Z() + "-narrow";
        this.F = this.Z() + "-mini";
        this.o = this.Z() + "-contrast"
    };
C(rv, mu);
Wf(rv);
x = rv.prototype;
x.Wc = function (a, b, c) {
    a && uv(c, a);
    b && c.v != b && (c.v = b, tv(c))
};
x.Z = w("jfk-button");
x.bb = function (a) {
    var b = a.a,
        c = Ms(Iu, {
            disabled: !a.isEnabled(),
            checked: a.Ya(),
            style: a.b,
            title: a.m,
            Sm: a.ob,
            value: a.W(),
            width: a.v
        }, void 0, b);
    b.Sh(c, a.Ja());
    this.Y(a, c);
    return c
};
x.Y = function (a, b) {
    rv.w.Y.call(this, a, b);
    this.j || (this.j = xh(this.D, gg(this.Wc, 0, null), this.g, gg(this.Wc, 2, null), this.L, gg(this.Wc, 3, null), this.m, gg(this.Wc, 1, null), this.v, gg(this.Wc, 4, null), this.F, gg(this.Wc, 5, null), this.o, gg(this.Wc, 6, null), this.C, gg(this.Wc, null, 1)));
    for (var c = Ds(b), d = 0; d < c.length; ++d) {
        var e = this.j[c[d]];
        e && e(a)
    }
    if (c = b.getAttribute(Ab)) a.m = c, a.ob = !0;
    return b
};
x.W = function (a) {
    return a.getAttribute("value") || ""
};
x.Ye = function (a, b) {
    a && a.setAttribute("value", b)
};
var wv = function (a, b) {
    function c(a, b) {
        (a ? d : e).push(b)
    }
    var d = [],
        e = [],
        f = b.b;
    c(0 == f, a.D);
    c(2 == f, a.g);
    c(3 == f, a.L);
    c(4 == f, a.v);
    c(5 == f, a.F);
    c(1 == f, a.m);
    c(6 == f, a.o);
    c(1 == b.v, a.C);
    c(!b.isEnabled(), a.Z() + ja);
    Gs(b.l(), e);
    Fs(b.l(), d)
};
var xv = function (a, b) {
    Y.call(this);
    this.$ = b;
    this.Jb = a;
    this.Ge = this.text = this.g = this.Qa = "";
    this.data = null;
    this.hb = Kp.M()
};
C(xv, Y);
x = xv.prototype;
x.update = function (a, b, c, d) {
    this.text = a;
    this.Qa = b;
    this.g = c;
    this.data = d;
    this.setVisible(!1);
    return !1
};
x.setVisible = function (a) {
    var b = this.l();
    b && X(b, a)
};
x.isVisible = function () {
    var a = this.l();
    return a ? lt(a) : !1
};
x.jj = function () {
    return {}
};
x.mb = v("$");
x.log = function (a, b) {
    var c = {};
    c.dt = this.$;
    c.sl = this.Qa;
    c.tl = this.g;
    c.hl = this.Jb;
    c.q = this.text;
    c.e = a;
    null != b && wh(c, b);
    wh(c, this.jj());
    this.hb.log("lexicon", c);
    b = this.Qa;
    c = this.g;
    window.__gaTracker && (__gaTracker(ne, "dimension1", this.Jb), __gaTracker(ne, "dimension2", b + "|" + c), __gaTracker(ne, "dimension3", b), __gaTracker(ne, "dimension4", c));
    window.__gaTracker && __gaTracker("send", "event", "lexicon", this.$ + ":" + a, "", 1)
};
var yv = function (a, b, c, d, e) {
    xv.call(this, a, b);
    this.v = this.b = null;
    this.X = c;
    this.ib = d;
    this.aa = e;
    this.R = this.m = null;
    this.C = !1;
    this.ma = "More";
    this.wc = !1;
    this.Ca = "Less";
    this.Ia = [];
    new ls("mt");
    this.Rf = !1;
    this.G = rp.M();
    this.c = []
};
C(yv, xv);
x = yv.prototype;
x.Aa = function () {
    yv.w.Aa.call(this);
    this.na(xk(k))
};
x.na = function (a) {
    yv.w.na.call(this, a);
    V(this.l(), "gt-cd");
    V(this.l(), "gt-cd-" + this.$);
    Wk(this.l(), !0);
    this.l().appendChild(Ls(gr));
    this.v = J("gt-cd-tl", this.l());
    this.b = J("gt-cd-c", this.l());
    this.m = J("cd-expand-button", this.l());
    this.R = J("cd-expand-label", this.l());
    X(this.m, !1)
};
x.T = function () {
    this.md();
    yv.w.T.call(this)
};
x.yc = v("aa");
x.Td = function () {
    return this.c.length
};
x.og = function (a) {
    return this.c.indexOf(a)
};
x.md = function () {
    this.c = []
};
x.Va = function () {
    return this.Td()
};
x.update = function (a, b, c, d) {
    yv.w.update.call(this, a, b, c, d);
    this.C = this.wc = !1;
    Fk(null);
    X(this.m, !1);
    W(this.m, tb);
    zv(this, a);
    return !1
};
x.ba = function () {
    var a = this;
    yv.w.ba.call(this);
    this.m && Yl(this.m, this.Gm.bind(this));
    Z(this).K(this, "a", A(this.wi, this, "clks"), !1);
    Z(this).K(this, "b", A(this.wi, this, "clkt"), !1);
    this.l() && (Z(this).K(this.l(), Ub, function (b) {
        Mk(a.l(), b.relatedTarget) || W(a.l(), rb)
    }), Z(this).K(this.l(), Ad, function () {
        V(a.l(), rb)
    }), Z(this).K(this.l(), Ed, function () {
        V(a.l(), rb)
    }))
};
x.Gm = function () {
    this.C = !this.C;
    this.Ld(this.C);
    if (this.C) V(this.m, tb), L(this.R, this.Ca), this.log("expand"), up(this.G, this.aa, this.Va());
    else {
        W(this.m, tb);
        L(this.R, this.ma);
        this.log(tb);
        var a = this.G,
            b = this.Va();
        S(a, sp(a, 189, this.aa, b, !0, 0))
    }
};
x.wi = function (a, b) {
    b = b.target;
    var c = this.G;
    S(c, sp(c, 79, this.aa, this.Td(), this.wc, this.og(b) + 1));
    b = $k(b);
    this.log(a, {
        clk: b
    })
};
x.fh = function () {
    this.v && L(this.v, this.ib)
};
var zv = function (a, b) {
        var c = K(k),
            d = a.X.indexOf(ea);
        if (-1 != d) {
            var e = a.X.slice(0, d);
            d = a.X.slice(d + 4, a.X.length);
            e && Bk(c, e);
            e = K(La, {
                "class": "gt-card-ttl-txt"
            });
            Qs(e, Jb, aj(a.Qa) ? ge : xd);
            L(e, b);
            c.appendChild(e);
            d && Bk(c, d);
            a.v && (Ck(a.v), a.v.appendChild(c))
        } else a.fh()
    },
    Av = function (a, b, c) {
        a.wc = !0;
        X(a.m, !0);
        null != b && (a.ma = b);
        null != c && (a.Ca = c);
        L(a.R, a.ma)
    };
yv.prototype.Ld = function (a) {
    for (var b, c, d = mk(xc, this.l()), e = 0; e < d.length; e++) {
        b = d[e];
        c = b.firstChild;
        var f = ut(c, yd);
        c = it(c).height + f.top + f.bottom;
        Qs(b, "max-height", a ? c + Yd : 0);
        a ? (W(b, wc), V(b, yc), zs(b, Rc, !1)) : (W(b, yc), V(b, wc), zs(b, Rc, !0))
    }
};
var Bv = function (a, b) {
    if (b) return a;
    a = K(k, {
        "class": "gt-card-expand-wrapper gt-card-collapsed"
    }, a);
    zs(a, Rc, !0);
    return a
};
var Dv = function (a, b) {
        var c = Array.prototype.slice.call(arguments),
            d = c.shift();
        if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
        return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function (a, b, d, l, m, p, q, F) {
            if ("%" == p) return "%";
            var e = c.shift();
            if ("undefined" == typeof e) throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = e;
            return Cv[p].apply(null, arguments)
        })
    },
    Cv = {
        s: function (a, b, c) {
            return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                a + ch(" ", Number(c) - a.length) : ch(" ", Number(c) - a.length) + a
        }, f: function (a, b, c, d, e) {
            d = a.toString();
            isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
            var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= Number(a) && (d = f + d);
            if (isNaN(c) || d.length >= Number(c)) return d;
            d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
            a = Number(c) - d.length - f.length;
            return d = 0 <= b.indexOf("-", 0) ? f + d + ch(" ", a) : f + ch(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
        }, d: function (a, b, c, d, e, f, g, l) {
            return Cv.f(parseInt(a,
                10), b, c, d, 0, f, g, l)
        }
    };
Cv.i = Cv.d;
Cv.u = Cv.d;
var Ev = function (a, b, c, d, e, f, g) {
    yv.call(this, a, null != c && c ? "mbd" : "bd", MSG_TRANSLATIONS_OF, "", 11);
    this.j = c;
    this.V = null != d ? d : !1;
    this.wa = "";
    this.wa = this.j && this.V ? "gt-baf-cell gt-baf-word" : this.j ? "gt-baf-cell gt-baf-word-clickable" : rc;
    this.J = this.V ? null : nc;
    this.qb = f || "";
    this.xb = g || "";
    this.D = null;
    this.ra = !1;
    this.ea = null != e ? e : !0;
    this.N = {};
    this.N[1] = b[2];
    this.N[2] = b[1];
    this.N[3] = b[0];
    this.Ma = b[3].replace(ea, "%d")
};
C(Ev, yv);
Ev.prototype.update = function (a, b, c, d) {
    Ev.w.update.call(this, a, b, c, d);
    if (!d || 0 == P(d, 1)) return !1;
    Ck(this.b);
    this.md();
    this.D = new gm(d);
    Fv(this, this.D);
    a = K("TBODY");
    b = K("TABLE", {
        "class": "gt-baf-table"
    }, a);
    c = this.D.a;
    for (var e = 0; e < c.length; e++) {
        var f = c[e],
            g = Gv(this, f, this.j && this.ea && 0 === e);
        a.appendChild(g);
        f = f.a;
        for (var l = g = 0; l < f.length; l++) {
            var m = f[l];
            if (!this.j && this.D.b && 0 < l) {
                var p = km(m);
                var q = K(k, {
                    "class": "gt-baf-cell gt-baf-sep"
                });
                p = Bv(q, p);
                this.j || (p = K("TD", {
                    colspan: 4
                }, p), p = K("TR", null, p));
                a.appendChild(p)
            }
            m =
                m.a;
            for (p = 0; p < m.length; p++) {
                q = m[p];
                var F = js(d, 0).kb();
                q = Hv(this, q, F, g);
                a.appendChild(q);
                g++
            }
        }
        this.b.appendChild(b);
        0 < hm(this.D) && (f = Dv(this.Ma, hm(this.D)), Av(this, f, MSG_FEWER_TRANSLATIONS_LABEL))
    }
    this.setVisible(!0);
    return !0
};
Ev.prototype.ba = function () {
    Ev.w.ba.call(this);
    V(this.l(), "gt-cd-baf");
    Z(this).K(this.l(), r, this.ob);
    Z(this).K(this.l(), Dd, this.Za);
    Z(this).K(this.l(), Cd, this.Ra)
};
var Fv = function (a, b) {
        var c = im(b);
        c = c.sort(function (a, b) {
            return b.rb - a.rb
        });
        var d = 0;
        a.ra = !1;
        for (var e = 0; e < c.length; e++) {
            var f = c[e]; - 1 < f.rb && (a.ra = !0);
            f.b = .05 <= f.rb ? 3 : .0025 <= f.rb ? 2 : 1;
            f.a = 12 > e || 3 == f.b;
            d += f.a ? 0 : 1
        }
        if (4 >= d)
            for (e = 0; e < c.length; e++) c[e].a = !0;
        b.b && jm(b)
    },
    Iv = function (a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = K(La, null, b[d]);
            null != a.J && (V(e, a.J), a.c.push(e));
            c.push(e);
            d < b.length - 1 && c.push(yk(", "))
        }
        return c
    },
    Gv = function (a, b, c) {
        var d = b.c;
        d && (a.Ge = d, zv(a, d));
        b = Ms(lr, {
            Ek: c,
            Jk: a.qb,
            Kk: a.xb,
            Ki: b.g,
            fc: lm(b)
        });
        if (c) {
            c = J(Te, b);
            var e = J("tlid-frequency-help-icon-container", b),
                f = J("tlid-frequency-help-tooltip", b);
            Z(a).K(c, r, function () {
                Hs(e, te, !Es(e, te))
            });
            Z(a).K(document, r, function (a) {
                var b = a.target;
                Es(e, te) && (a = b.classList.contains(Te), b = Mk(f, b), a || b || W(e, te))
            })
        }
        a = K("TD", {
            colspan: 4
        }, b);
        return K("TR", null, a)
    },
    Jv = function (a, b) {
        return aj(b) !== aj(a.Jb) ? aj(b) ? ge : xd : ""
    },
    Hv = function (a, b, c, d) {
        if (a.j) {
            var e = b.text,
                f = null != b.Hd ? b.Hd : "",
                g = e === c;
            c = b.a;
            d = a.V ? pc : "gt-baf-entry";
            g && (d += " gt-baf-entry-selected");
            d = K("TR", {
                "class": d
            });
            var l = K("TD");
            e = Ms(mr, {
                Mg: g,
                Hd: f,
                dj: Jv(a, a.g),
                fc: c,
                Um: e,
                Vm: a.wa
            });
            l.appendChild(e);
            e = K("TD");
            f = Ms(nr, {
                Fh: null != a.J ? a.J : "",
                Jh: Jv(a, a.Qa),
                Ff: b.Ff,
                fc: c
            });
            e.appendChild(f);
            d.appendChild(l);
            d.appendChild(e);
            l = b.b;
            b = a.N[b.b];
            a.j && a.ea && l && b && (b = Ms(pr, {
                rb: l,
                Qb: b,
                fc: c
            }), c = K("TD"), c.appendChild(b), d.appendChild(c));
            a.J && D(mk(a.J, d), function (a) {
                this.c.push(a)
            }, a);
            a.c.push(a.V ? J("gt-baf-word", d) : J(rc, d));
            return d
        }
        f = b.text;
        g = b.Hd;
        e = b.a;
        c = Kv(a, b.b, e);
        l = null;
        g && (l = Lv(g, e));
        f = Mv(a, f, g, e);
        b =
            Iv(a, b.Ff);
        b = Nv(a, b, e);
        b = K("TR", null, c, l, f, b);
        aj(a.Qa) != aj(a.Jb) && 1 == d % 2 && V(b, "gt-baf-translations-alt");
        return b
    },
    Kv = function (a, b, c) {
        if (!a.ra || !a.ea) return a = K(k, {
            "class": oc
        }), c = Bv(a, c), K("TD", null, c);
        a = K(k, {
            "class": "gt-baf-cell gt-baf-marker-container",
            title: a.N[b]
        });
        b = Dv("width: %dpx", 8 * b);
        b = K(k, {
            "class": "gt-baf-cts",
            style: b
        });
        a.appendChild(b);
        c = Bv(a, c);
        return K("TD", null, c)
    },
    Lv = function (a, b) {
        var c = K(k, {
            "class": "gt-baf-cell gt-baf-previous-word"
        });
        L(c, a);
        a = Bv(c, b);
        return K("TD", null, a)
    },
    Mv = function (a,
                   b, c, d) {
        var e = "";
        aj(a.g) !== aj(a.Jb) && (e = Dv("direction: %s", aj(a.g) ? ge : xd));
        b = K(La, a.wa, b);
        a.c.push(b);
        a = K(k, oc, b);
        a = Bv(a, d);
        d || V(a, Ac);
        return K("TD", c ? null : {
            colspan: 2,
            style: e
        }, a)
    },
    Nv = function (a, b, c) {
        a = aj(a.Qa) !== aj(a.Jb) ? Dv("direction: %s", aj(a.Qa) ? ge : xd) : "";
        b = K(k, {
            "class": "gt-baf-cell gt-baf-translations",
            style: a
        }, b);
        c = Bv(b, c);
        return K("TD", {
            style: "width: 100%"
        }, c)
    };
Ev.prototype.Ld = function (a) {
    Ev.w.Ld.call(this, a);
    for (var b = mk(Ac, this.l()), c = 0; c < b.length; c++) {
        var d = b[c],
            e = J(oc, d),
            f = ut(e, yd);
        e = e.scrollWidth + f.left + f.right + 1;
        Qs(d, "max-width", a ? e + Yd : 0)
    }
};
Ev.prototype.ob = function (a) {
    var b = cl(a.target);
    null != b ? (a = J("gt-baf-word", b), null != a && this.dispatchEvent(new N("b", a))) : Es(a.target, rc) ? this.dispatchEvent(new N("b", a.target)) : Es(a.target, nc) && this.dispatchEvent(new N("a", a.target))
};
Ev.prototype.Za = function (a) {
    if (Es(a.target, nc)) {
        var b = lk(null, nc, this.l());
        a = $k(a.target);
        for (var c = 0; c < b.length; c++) $k(b[c]) == a && V(b[c], qc)
    }
};
Ev.prototype.Ra = function () {
    for (var a = lk(null, qc, this.l()), b = 0; b < a.length; b++) W(a[b], qc)
};
var Pv = function (a) {
        this.a = null != a ? new gq(Ov(a)) : new gq;
        this.b = "home";
        tq(this.a, "view") && (this.b = this.a.get("view"), sq(this.a, "view"))
    },
    Qv = function (a, b) {
        a.b = b;
        return a
    },
    Sv = function (a, b, c, d) {
        Rv(a);
        a.a.set("op", ff).set("sl", b).set("tl", c);
        null != d && !Ig(d) && a.a.set(Ne, d)
    },
    Rv = function (a) {
        sq(a.a, "op");
        sq(a.a, "sl");
        sq(a.a, "tl");
        sq(a.a, Ne)
    },
    Tv = function (a, b) {
        var c = "";
        tq(a.a, b) && (c = a.a.get(b), c = Ng(c));
        return c
    };
Pv.prototype.toString = function () {
    var a = "view=" + this.b,
        b = this.a;
    qq(b);
    0 == b.b || (a += "&" + this.a.toString());
    return a
};

function Ov(a) {
    if (a.startsWith("view=")) return a;
    var b = new Pv;
    if (a.startsWith("op=")) {
        var c = new gq(a);
        switch (c.get("op")) {
            case "showhistory":
                return Qv(b, Uc).toString();
            case "showsaved":
                return Qv(b, "saved").toString();
            case "star":
                if (tq(c, "sl") && tq(c, "tl") && tq(c, Ne) && tq(c, "page")) {
                    switch (c.get("page")) {
                        case Uc:
                            Qv(b, Uc);
                            break;
                        default:
                            Qv(b, "home")
                    }
                    a = c.get("sl");
                    var d = c.get("tl");
                    c = c.get(Ne);
                    Rv(b);
                    b.a.set("op", "star").set("sl", a).set("tl", d).set(Ne, c)
                }
                return b.toString();
            default:
                return Qv(b, "home").toString()
        }
    } else {
        a =
            a.split(/[|\/]/);
        Qv(b, "home");
        var e = c = d = "";
        0 < a.length && 0 < a[0].length && (d = a[0]);
        1 < a.length && 0 < a[1].length && (c = a[1]);
        2 < a.length && 0 < a[2].length && (e = a[2]);
        0 < d.length && 0 < c.length && (0 < e.length ? Sv(b, d, c, e) : Sv(b, d, c), 3 < a.length && a[3] === pe && b.a.set("op", pe));
        return b.toString()
    }
};
var Uv = function (a, b) {
    N.call(this, Hd);
    this.hj = a;
    this.Jl = b
};
C(Uv, N);
var Wv = function () {
        return !Vv() && (E("iPod") || E("iPhone") || E(va) || E("IEMobile"))
    },
    Vv = function () {
        return E("iPad") || E(va) && !E("Mobile") || E("Silk")
    };
var Xv = function (a, b) {
    a = [a];
    for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
    return a.join("\x0B")
};
var cw = function (a, b, c, d) {
    R.call(this);
    if (a && !b) throw Error("Can't use invisible history without providing a blank page.");
    if (c) var e = c;
    else {
        e = "history_state" + Yv;
        var f = Sj(Yc, {
            type: Ne,
            name: e,
            id: e,
            style: Zi(Kb)
        });
        document.write(Kj(f));
        e = I(e)
    }
    this.m = e;
    this.a = c ? tk(ik(c)) : window;
    this.L = b;
    G && !b && (this.L = "https" == window.location.protocol ? fj(Wi(Zi("https:///"))) : fj(Wi(Zi(ad))));
    this.b = new Um(150);
    il(this, this.b);
    this.g = !a;
    this.c = new yt(this);
    if (a || Zv) {
        if (d) var g = d;
        else {
            a = "history_iframe" + Yv;
            d = this.L;
            b = {
                id: a,
                style: Zi(Kb),
                sandbox: void 0
            };
            d && dj(d);
            c = {};
            c.src = d || null;
            c.srcdoc = null;
            d = {
                sandbox: ""
            };
            e = {};
            for (g in c) e[g] = c[g];
            for (g in d) e[g] = d[g];
            for (g in b) {
                f = g.toLowerCase();
                if (f in c) throw Error('Cannot override "' + f + '" attribute, got "' + g + '" with value "' + b[g] + '"');
                f in d && delete e[f];
                e[g] = b[g]
            }
            g = Rj("iframe", e, void 0);
            document.write(Kj(g));
            g = I(a)
        }
        this.F = g;
        this.J = !0
    }
    Zv && (this.c.K(this.a, "load", this.Xl), this.O = this.C = !1);
    this.g ? $v(this, aw(this), !0) : bw(this, this.m.value);
    Yv++
};
C(cw, R);
cw.prototype.v = !1;
cw.prototype.o = !1;
cw.prototype.j = null;
var dw = function (a, b) {
        var c = b || Xv;
        return function () {
            var b = this || y;
            b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {});
            var e = c(dg(a), arguments);
            return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
        }
    }(function () {
        return G ? ci(8) : "onhashchange" in y
    }),
    Zv = G && !ci(8);
x = cw.prototype;
x.Ed = null;
x.T = function () {
    cw.w.T.call(this);
    this.c.Da();
    this.oa(!1)
};
x.oa = function (a) {
    if (a != this.v)
        if (Zv && !this.C) this.O = a;
        else if (a)
            if (Ih ? this.c.K(this.a.document, ew, this.N) : Lh && this.c.K(this.a, "pageshow", this.dm), dw() && this.g) this.c.K(this.a, "hashchange", this.Zl), this.v = !0, this.dispatchEvent(new Uv(aw(this), !1));
            else {
                if (!G || Wv() || this.C) this.c.K(this.b, Se, A(this.D, this, !0)), this.v = !0, Zv || (this.j = aw(this), this.dispatchEvent(new Uv(aw(this), !1))), this.b.start()
            } else this.v = !1, Dt(this.c), this.b.stop()
};
x.Xl = function () {
    this.C = !0;
    this.m.value && bw(this, this.m.value, !0);
    this.oa(this.O)
};
x.dm = function (a) {
    a.a.persisted && (this.oa(!1), this.oa(!0))
};
x.Zl = function () {
    var a = fw(this.a);
    a != this.j && gw(this, a, !0)
};
var aw = function (a) {
        return null != a.Ed ? a.Ed : a.g ? fw(a.a) : hw(a) || ""
    },
    fw = function (a) {
        a = a.location.href;
        var b = a.indexOf("#");
        return 0 > b ? "" : a.substring(b + 1)
    },
    iw = function (a, b, c) {
        aw(a) != b && (a.g ? ($v(a, b, c), dw() || G && !Wv() && bw(a, b, c, void 0), a.v && a.D(!1)) : (bw(a, b, c), a.Ed = a.j = a.m.value = b, a.dispatchEvent(new Uv(b, !1))))
    },
    $v = function (a, b, c) {
        a = a.a.location;
        var d = a.href.split("#")[0],
            e = Xg(a.href, "#");
        if (Zv || e || b) d += "#" + b;
        d != a.href && (c ? a.replace(d) : (b = lj(d), ak(a, b)))
    },
    bw = function (a, b, c, d) {
        if (a.J || b != hw(a))
            if (a.J = !1,
                b = Mg(b), G) {
                var e = Tk(a.F);
                e.open("text/html", c ? "replace" : void 0);
                c = Tj(Sj("title", {}, d || a.a.document.title), Sj("body", {}, b));
                e.write(Kj(c));
                e.close()
            } else e = dj(a.L) + "#" + b, (a = a.F.contentWindow) && (c ? a.location.replace(e) : ak(a.location, e))
    },
    hw = function (a) {
        if (G) return a = Tk(a.F), a.body ? Ng(a.body.innerHTML) : null;
        var b = a.F.contentWindow;
        if (b) {
            try {
                var c = Ng(fw(b))
            } catch (d) {
                return a.o || (1 != a.o && Vm(a.b, 1E4), a.o = !0), null
            }
            a.o && (0 != a.o && Vm(a.b, 150), a.o = !1);
            return c || null
        }
        return null
    };
cw.prototype.D = function (a) {
    if (this.g) {
        var b = fw(this.a);
        b != this.j && gw(this, b, a)
    }
    if (!this.g || Zv)
        if (b = hw(this) || "", null == this.Ed || b == this.Ed) this.Ed = null, b != this.j && gw(this, b, a)
};
var gw = function (a, b, c) {
    a.j = a.m.value = b;
    a.g ? (Zv && bw(a, b), $v(a, b)) : bw(a, b);
    a.dispatchEvent(new Uv(aw(a), c))
};
cw.prototype.N = function () {
    this.b.stop();
    this.b.start()
};
var ew = [Ad, od, Bd],
    Yv = 0;
var jw = function (a) {
    var b = this;
    R.call(this);
    this.Bd = new cw;
    this.kh = null;
    this.b = 0;
    this.a = a || !1;
    O(this.Bd, Hd, function (a) {
        a.Jl && b.dispatchEvent({
            type: "c",
            hj: a.hj
        })
    }, !1)
};
C(jw, R);
var lw = function (a, b, c, d) {
        var e = "",
            f = "",
            g = "";
        if (a.a) b = new Pv(b), e = Tv(b, "sl"), f = Tv(b, "tl"), g = Tv(b, Ne);
        else {
            var l = [];
            D(b.split(/[|\/]/), function (a) {
                l.push(Ng(a))
            });
            e = dh(l[0]);
            f = dh(l[1]);
            2 < l.length && (g = l[2])
        }!Ig(e) && !Ig(f) && 0 <= c.indexOf(e) && (f === eb || 0 <= d.indexOf(f)) ? kw(a.kh, e, f, g, "bh") : kw(a.kh, "", "", "", "bh")
    },
    mw = function (a, b, c, d, e) {
        b = null != b ? b : eb;
        c = null != c ? c : Nb;
        if (a.a) {
            if (!a.a) throw Error("Should never be invoked without new URL fragment schema");
            var f = new Pv(aw(a.Bd));
            Sv(f, b, c, d);
            d = f.toString()
        } else d =
            b + "/" + c + "/" + Mg(d);
        e = !e || !1;
        b = (new Date).getTime();
        2E3 < b - a.b ? iw(a.Bd, d, !1) : iw(a.Bd, d, !0);
        a.b = e ? 0 : b
    };
var nw = u();
C(nw, mu);
Wf(nw);
x = nw.prototype;
x.bb = function (a) {
    var b = eu(this, a);
    b = a.a.b(k, ec + b.join(" "), this.Ke(a.Ja(), a.a));
    nu(b, a.m);
    return b
};
x.oc = w(lb);
x.Fb = function (a) {
    return a && a.firstChild && a.firstChild.firstChild
};
x.Ke = function (a, b) {
    return b.b(k, ec + (this.Z() + "-outer-box"), b.b(k, ec + (this.Z() + "-inner-box"), a))
};
x.Qc = function (a) {
    return a.tagName == k
};
x.Y = function (a, b) {
    ow(b, !0);
    ow(b, !1);
    a: {
        var c = a.a.Ph(b);
        var d = this.Z() + "-outer-box";
        if (c && Es(c, d) && (c = a.a.Ph(c), d = this.Z() + "-inner-box", c && Es(c, d))) {
            c = !0;
            break a
        }
        c = !1
    }
    c || b.appendChild(this.Ke(b.childNodes, a.a));
    Fs(b, [dc, this.Z()]);
    return nw.w.Y.call(this, a, b)
};
x.Z = w("goog-custom-button");
var ow = function (a, b) {
    if (a)
        for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var e = c.nodeValue;
                if ("" == Lg(e)) a.removeChild(c);
                else {
                    c.nodeValue = b ? e.replace(/^[\s\xa0]+/, "") : e.replace(/[\s\xa0]+$/, "");
                    break
                }
            } else break;
            c = d
        }
};
var pw = function (a, b, c) {
    Hu.call(this, a, b || nw.M(), c);
    this.Pa(16, !0)
};
C(pw, Hu);
ru("goog-toggle-button", function () {
    return new pw(null)
});
var qw = function (a, b, c, d) {
    pw.call(this, a, c || mu.M(), d);
    this.D = a;
    this.v = b || null;
    this.b = null
};
C(qw, pw);
qw.prototype.Sa = function (a) {
    qw.w.Sa.call(this, a);
    rw(this)
};
qw.prototype.oa = function (a) {
    qw.w.oa.call(this, a);
    rw(this)
};
var rw = function (a) {
        a.isEnabled() ? null != a.v && a.g(a.Ya() ? a.v : a.D) : a.b ? (a.g(a.b), a.b = null) : a.g("")
    },
    sw = zf("g");
C(sw, mu);
sw.prototype.bb = function (a) {
    var b = a.a.b(k, eu(this, a).join(" ")),
        c = a.a.b(La),
        d = a.a.b(La);
    this.g && V(b, this.g);
    V(b, kd);
    d.className = id;
    c.className = hd;
    b.appendChild(c);
    a.Ja() ? (b.appendChild(d), this.Zb(b, a.Ja())) : V(b, jd);
    return b
};
sw.prototype.Zb = function (a, b) {
    a && (a = z(a.lastElementChild) ? a.lastElementChild : Hk(a.lastChild, !1)) && L(a, b)
};
sw.prototype.Z = w("jfk-button");
sw.prototype.Y = function (a, b) {
    var c = a.a.b(La),
        d = a.a.b(La);
    this.g && V(b, this.g);
    V(b, kd);
    d.className = id;
    c.className = hd;
    Ck(b);
    b.appendChild(c);
    a.Ja() ? (b.appendChild(d), this.Zb(b, a.Ja())) : V(b, jd);
    return b = sw.w.Y.call(this, a, b)
};
var tw = function (a, b) {
    this.g = a;
    this.j = b || !1
};
C(tw, mu);
tw.prototype.bb = function (a) {
    var b = a.a.b(k, eu(this, a).join(" ") + " goog-inline-block"),
        c = a.a.b(La);
    this.g && V(b, this.g);
    c.className = hd;
    b.appendChild(c);
    a.Ja() && this.Zb(b, a.Ja());
    return b
};
tw.prototype.Zb = function (a, b) {
    a && !this.j && (fv(a, b), jv(a))
};
tw.prototype.Z = w("goog-toolbar-button");
tw.prototype.Y = function (a, b) {
    var c = a.a.b(La);
    this.g && V(b, this.g);
    c.className = hd;
    Ck(b);
    b.appendChild(c);
    a.Ja() && this.Zb(b, a.Ja());
    return b = tw.w.Y.call(this, a, b)
};
var uw = function (a, b, c, d) {
        this.text = a;
        this.Qa = b;
        this.a = c;
        this.data = d
    },
    vw = function (a, b, c, d) {
        this.g = a;
        this.c = b;
        this.j = c;
        this.o = d;
        this.a = [];
        this.b = -1;
        O(this.g, n, this.hm, !1, this);
        O(this.c, n, this.Vl, !1, this);
        O(this.j, n, this.rk, !1, this)
    };
x = vw.prototype;
x.push = function (a, b, c, d) {
    this.a.splice(++this.b);
    this.a.push(new uw(a, b, c, d));
    ww(this)
};
x.reset = function () {
    this.a = [];
    this.b = -1
};
x.hm = function () {
    0 < this.b && (--this.b, ww(this));
    Kp.M().log("lxprev")
};
x.Vl = function () {
    this.b < this.a.length - 1 && (++this.b, ww(this));
    Kp.M().log("lxnext")
};
x.rk = function () {
    1 < this.a.length && (this.a.splice(1), this.b = 0, ww(this));
    Kp.M().log("lxclear")
};
var ww = function (a) {
    var b = a.a[a.b];
    a.o.update(b.text, b.Qa, b.a, b.data);
    a.g.oa(1 < a.b);
    a.c.oa(a.b < a.a.length - 1)
};
var xw = function () {
    this.b = 0;
    this.a = []
};
Wf(xw);
xw.prototype.c = function (a) {
    var b = new Image,
        c = this.b++;
    this.a[c] = b;
    b.onload = b.onerror = function () {
        delete xw.M().a[c]
    };
    b.src = a;
    b = null
};
var yw = !1,
    zw = function (a) {
        if (a = a.match(/[\d]+/g)) a.length = 3
    };
(function () {
    if (navigator.plugins && navigator.plugins.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && (yw = !0, a.description)) {
            zw(a.description);
            return
        }
        if (navigator.plugins["Shockwave Flash 2.0"]) {
            yw = !0;
            return
        }
    }
    if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], yw = !(!a || !a.enabledPlugin))) {
        zw(a.enabledPlugin.description);
        return
    }
    if ("undefined" != typeof ActiveXObject) {
        try {
            var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            yw = !0;
            zw(b.GetVariable("$version"));
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            yw = !0;
            return
        } catch (c) {}
        try {
            b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), yw = !0, zw(b.GetVariable("$version"))
        } catch (c) {}
    }
})();
var Aw = yw;
var Bw = function () {
    R.call(this);
    this.url = ""
};
C(Bw, R);
Bw.prototype.Md = function () {
    this.dispatchEvent(new Cw(this.url))
};
Bw.prototype.play = zf("url");
Bw.prototype.c = function () {
    this.dispatchEvent(new Dw(this.url))
};
var Ew = function (a) {
    N.call(this, ye);
    this.url = a
};
C(Ew, N);
var Fw = function (a) {
    N.call(this, we);
    this.url = a
};
C(Fw, N);
var Cw = function (a) {
    N.call(this, xe);
    this.url = a
};
C(Cw, N);
var Dw = function (a) {
    N.call(this, ve);
    this.url = a
};
C(Dw, N);
var Gw = function () {
    Bw.call(this);
    this.o = Audio;
    this.a = new this.o;
    this.b = {}
};
C(Gw, Bw);
Gw.prototype.lh = function () {
    return !this.a.paused
};
Gw.prototype.Md = function () {
    Gw.w.Md.call(this);
    this.a.pause()
};
Gw.prototype.play = function (a) {
    Gw.w.play.call(this, a);
    Hw(this, this.a);
    this.a = null;
    null != this.b[a] ? (this.a = this.b[a], this.b[a] = null, this.a.play()) : (this.a = Iw(this, a), this.a.autoplay = !0)
};
Gw.prototype.pj = function (a) {
    y.setTimeout(A(this.m, this, a), 1E3)
};
var Iw = function (a, b) {
        var c = new a.o;
        c.setAttribute("src", b);
        O(c, Wd, a.j, !1, a);
        O(c, "ended", a.g, !1, a);
        O(c, Qb, a.c, !1, a);
        c.load();
        return c
    },
    Hw = function (a, b) {
        Nl(b, Wd, a.j);
        Nl(b, "ended", a.g)
    };
Gw.prototype.m = function (a) {
    null != this.b[a] && (Hw(this, this.b[a]), this.b[a] = null);
    this.b[a] = Iw(this, a)
};
Gw.prototype.j = function () {
    Nl(this.a, Wd, this.j);
    this.dispatchEvent(new Ew(this.url))
};
Gw.prototype.g = function () {
    Nl(this.a, "ended", this.g);
    this.dispatchEvent(new Fw(this.url))
};
var Jw = function (a) {
    Bw.call(this);
    this.a = a;
    this.b = !1
};
C(Jw, Bw);
x = Jw.prototype;
x.lh = v("b");
x.Md = function () {
    this.b = !1;
    null != this.a.stopPlayingSound && this.a.stopPlayingSound();
    Kw();
    Jw.w.Md.call(this)
};
x.play = function (a) {
    Jw.w.play.call(this, a);
    y.setTimeout(A(this.jm, this), 0)
};
x.jm = function () {
    this.b = !0;
    var a = A(this.Hm, this);
    y.SoundStopCB_ = a;
    null != this.a.setSoundStopCB && this.a.setSoundStopCB("SoundStopCB_");
    try {
        if (null != this.a.setSound) this.a.setSound(this.kj());
        else {
            this.b = !1;
            Kw();
            this.c();
            return
        }
        var b = A(this.kj, this);
        y._TTSSoundFile = b
    } catch (c) {
        this.b = !1;
        Kw();
        this.c();
        return
    }
    null != this.a.startPlayingSound ? this.a.startPlayingSound() : (this.b = !1, Kw(), this.c())
};
x.pj = function (a) {
    var b = xw.M();
    y.setTimeout(A(b.c, b, a), 1E3)
};
x.kj = function () {
    return this.url.substring(1)
};
x.Hm = function () {
    this.b = !1;
    Kw();
    this.dispatchEvent(new Fw(this.url))
};
var Kw = function () {
        y.SoundStopCB_ = null
    },
    Lw = function () {
        this.a = "";
        this.b = null;
        this.c = !1;
        this.G = null
    };
Wf(Lw);
Lw.prototype.get = function () {
    if (null != this.a && 0 != this.a.length) {
        var a = I(this.a);
        if (!this.c && (Mw("audio/mpeg") ? (this.b = new Gw, a = "html5") : null != a && "OBJECT" == a.tagName && Aw ? (this.b = new Jw(a), a = "flash") : (this.b = null, a = Ld), this.c = !0, !this.g && this.G)) {
            this.g = !0;
            var b = Mw("audio/mpeg") ? 1 : 0,
                c = Mw("audio/ogg") ? 1 : 0,
                d = Mw("audio/wav") ? 1 : 0;
            a: {
                try {
                    var e = K("AUDIO");
                    if (null != e && null != e.volume) {
                        var f = e.volume;
                        break a
                    }
                } catch (g) {}
                f = -1
            }
            this.G.log("ttsaudio", {
                mp3: b,
                ogg: c,
                wav: d,
                vol: f,
                type: a
            })
        }
    }
    return this.b
};
var Mw = function (a) {
    try {
        var b = K("AUDIO");
        return null != b && null != b.canPlayType && null != b.load && null != b.play && null != b.paused && null != b.pause && "no" != b.canPlayType(a) && "" != b.canPlayType(a)
    } catch (c) {
        return !1
    }
};
var Nw = function (a, b, c) {
    R.call(this);
    this.D = b;
    this.m = c ? c : 0;
    this.G = rp.M();
    this.C = Lw.M();
    this.C.a = a;
    this.C.G = b;
    this.b = this.C.get();
    this.F = this.c = null;
    this.a = this.o = 0;
    this.g = {};
    this.j = 0;
    this.v = !1
};
C(Nw, R);
Nw.prototype.set = function (a, b, c, d) {
    this.c = a;
    this.o = b;
    this.F = c;
    null != d && (this.g = uh(d));
    this.g.total = a.length;
    this.g.ttslocation = this.m;
    Ow(this)
};
Nw.prototype.start = function () {
    this.b.lh() && this.b.Md();
    O(this.b, ye, this.N, !1, this);
    O(this.b, we, this.J, !1, this);
    O(this.b, xe, this.L, !1, this);
    O(this.b, ve, this.O, !1, this);
    this.j = (new Date).getTime();
    Pw(this, "ttsstart", this.g);
    Gp(this.G, 31, this.m, this.o, this.c.length);
    this.b.play(this.c[this.a]);
    Qw(this)
};
Nw.prototype.stop = function () {
    if (this.c && this.b.lh()) {
        var a = uh(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.j;
        Pw(this, "ttsstop", a);
        Gp(this.G, 32, this.m, this.o, this.c.length, this.F[this.a], this.a);
        Ow(this);
        this.b.Md();
        Rw(this)
    }
};
var Ow = function (a) {
        a.a = 0;
        a.v = !1;
        Nl(a.b, ye, a.N, !1, a);
        Nl(a.b, we, a.J, !1, a);
        Nl(a.b, xe, a.L, !1, a);
        Nl(a.b, ve, a.O, !1, a)
    },
    Pw = function (a, b, c) {
        a.D && a.D.log(b, c)
    };
Nw.prototype.N = function () {
    if (!this.v) {
        this.dispatchEvent(new Sw(this.c));
        var a = uh(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.j;
        Pw(this, "ttsplaystart", a);
        Gp(this.G, 33, this.m, this.o, this.c.length, this.F[this.a], this.a);
        this.v = !0
    }
};
Nw.prototype.J = function () {
    this.a += 1;
    if (this.a < this.c.length) this.b.play(this.c[this.a]), Qw(this);
    else {
        Rw(this);
        Ow(this);
        var a = uh(this.g);
        a.idx = this.a;
        a.time = (new Date).getTime() - this.j;
        Pw(this, "ttsfinish", a);
        Gp(this.G, 34, this.m, this.o, this.c.length)
    }
};
Nw.prototype.L = function () {
    var a = uh(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.j;
    Pw(this, "ttsinterrupted", a);
    Rw(this);
    Ow(this)
};
Nw.prototype.O = function () {
    var a = uh(this.g);
    a.idx = this.a;
    a.time = (new Date).getTime() - this.j;
    Pw(this, "ttserror", a);
    wp(this.G, 155);
    Rw(this);
    Ow(this)
};
var Rw = function (a) {
        a.dispatchEvent(new Tw(a.c))
    },
    Qw = function (a) {
        var b = a.c[a.a + 1];
        null != b && a.b.pj(b)
    },
    Sw = function () {
        N.call(this, "play_start_playlist")
    };
C(Sw, N);
var Tw = function () {
    N.call(this, Je)
};
C(Tw, N);
var Uw = zf("G");
Uw.prototype.g = function (a, b, c) {
    Vw(a, b, c, A(this.b, this), A(this.c, this))
};
var Vw = function (a, b, c, d, e) {
    var f = [];
    d(f, b);
    b = "";
    for (d = 0; d < f.length; d++) {
        var g = Lg(b + f[d]);
        g.length <= c ? b += f[d] : (Ig(b) || (a.push(Lg(b)), b = ""), g = Lg(f[d]), g.length <= c ? b = f[d] : e(a, g, c))
    }
    Ig(b) || a.push(Lg(b))
};
Uw.prototype.c = function (a, b, c) {
    for (var d = 0; d < b.length; d += c) a.push(b.substr(d, c))
};
var Ww = / /g,
    Xw = /([?.,;:!][ ]+)|([\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f][ ]?)/g;
Uw.prototype.b = function (a, b) {
    Yw(a, b, Ww)
};
Uw.prototype.a = function (a, b) {
    Yw(a, b, Xw);
    for (b = 0; b < a.length; b++) {
        var c = {
            length: a[b].length
        };
        this.G && this.G.log("tbphrase", c)
    }
};
var Yw = function (a, b, c) {
    for (var d = 0; c.test(b);) {
        var e = c.lastIndex;
        e > d && a.push(b.substr(d, e - d));
        d = e
    }
    b.length > d && a.push(b.substr(d))
};
var Zw = [0, 200],
    $w = {
        af: 1,
        ar: 1,
        bn: 1,
        bs: 1,
        ca: 1,
        cs: 1,
        cy: 1,
        da: 1,
        de: 1,
        el: 1,
        en: 1,
        eo: 1,
        es: 1,
        et: 1,
        fi: 1,
        fr: 1,
        hi: 1,
        hr: 1,
        hu: 1,
        hy: 1,
        id: 1,
        is: 1,
        it: 1,
        ja: 1,
        jw: 1,
        km: 1,
        ko: 1,
        la: 1,
        lv: 1,
        mk: 1,
        ml: 1,
        mr: 1,
        my: 1,
        ne: 1,
        nl: 1,
        no: 1,
        pl: 1,
        pt: 1,
        ro: 1,
        ru: 1,
        si: 1,
        sk: 1,
        sq: 1,
        sr: 1,
        su: 1,
        sv: 1,
        sw: 1,
        ta: 1,
        te: 1,
        th: 1,
        tl: 1,
        tr: 1,
        vi: 1,
        uk: 1,
        zh: 1,
        "zh-cn": 1,
        "zh-tw": 1
    };
var ax = function (a, b) {
        this.b = [];
        this.a = b;
        for (var c = !0, d = a.length - 1; 0 <= d; d--) {
            var e = a[d] | 0;
            c && e == b || (this.b[d] = e, c = !1)
        }
    },
    bx = {},
    cx = function (a) {
        if (-128 <= a && 128 > a) {
            var b = bx[a];
            if (b) return b
        }
        b = new ax([a | 0], 0 > a ? -1 : 0); - 128 <= a && 128 > a && (bx[a] = b);
        return b
    },
    fx = function (a) {
        if (isNaN(a) || !isFinite(a)) return dx;
        if (0 > a) return ex(fx(-a));
        for (var b = [], c = 1, d = 0; a >= c; d++) b[d] = a / c | 0, c *= 4294967296;
        return new ax(b, 0)
    },
    gx = function (a, b) {
        if (0 == a.length) throw Error("number format error: empty string");
        b = b || 10;
        if (2 > b || 36 < b) throw Error(Zd +
            b);
        if ("-" == a.charAt(0)) return ex(gx(a.substring(1), b));
        if (0 <= a.indexOf("-")) throw Error('number format error: interior "-" character');
        for (var c = fx(Math.pow(b, 8)), d = dx, e = 0; e < a.length; e += 8) {
            var f = Math.min(8, a.length - e),
                g = parseInt(a.substring(e, e + f), b);
            8 > f ? (f = fx(Math.pow(b, f)), d = hx(d, f).add(fx(g))) : (d = hx(d, c), d = d.add(fx(g)))
        }
        return d
    },
    dx = cx(0),
    ix = cx(1),
    jx = cx(16777216),
    kx = function (a) {
        if (-1 == a.a) return -kx(ex(a));
        for (var b = 0, c = 1, d = 0; d < a.b.length; d++) b += lx(a, d) * c, c *= 4294967296;
        return b
    };
ax.prototype.toString = function (a) {
    a = a || 10;
    if (2 > a || 36 < a) throw Error(Zd + a);
    if (mx(this)) return "0";
    if (-1 == this.a) return "-" + ex(this).toString(a);
    for (var b = fx(Math.pow(a, 6)), c = this, d = "";;) {
        var e = nx(c, b);
        c = ox(c, hx(e, b));
        var f = ((0 < c.b.length ? c.b[0] : c.a) >>> 0).toString(a);
        c = e;
        if (mx(c)) return f + d;
        for (; 6 > f.length;) f = "0" + f;
        d = "" + f + d
    }
};
var px = function (a, b) {
        return 0 > b ? 0 : b < a.b.length ? a.b[b] : a.a
    },
    lx = function (a, b) {
        a = px(a, b);
        return 0 <= a ? a : 4294967296 + a
    },
    mx = function (a) {
        if (0 != a.a) return !1;
        for (var b = 0; b < a.b.length; b++)
            if (0 != a.b[b]) return !1;
        return !0
    },
    qx = function (a, b) {
        a = ox(a, b);
        return -1 == a.a ? -1 : mx(a) ? 0 : 1
    },
    ex = function (a) {
        for (var b = a.b.length, c = [], d = 0; d < b; d++) c[d] = ~a.b[d];
        return (new ax(c, ~a.a)).add(ix)
    };
ax.prototype.add = function (a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0, e = 0; e <= b; e++) {
        var f = d + (px(this, e) & 65535) + (px(a, e) & 65535),
            g = (f >>> 16) + (px(this, e) >>> 16) + (px(a, e) >>> 16);
        d = g >>> 16;
        f &= 65535;
        g &= 65535;
        c[e] = g << 16 | f
    }
    return new ax(c, c[c.length - 1] & -2147483648 ? -1 : 0)
};
var ox = function (a, b) {
        return a.add(ex(b))
    },
    hx = function (a, b) {
        if (mx(a) || mx(b)) return dx;
        if (-1 == a.a) return -1 == b.a ? hx(ex(a), ex(b)) : ex(hx(ex(a), b));
        if (-1 == b.a) return ex(hx(a, ex(b)));
        if (0 > qx(a, jx) && 0 > qx(b, jx)) return fx(kx(a) * kx(b));
        for (var c = a.b.length + b.b.length, d = [], e = 0; e < 2 * c; e++) d[e] = 0;
        for (e = 0; e < a.b.length; e++)
            for (var f = 0; f < b.b.length; f++) {
                var g = px(a, e) >>> 16,
                    l = px(a, e) & 65535,
                    m = px(b, f) >>> 16,
                    p = px(b, f) & 65535;
                d[2 * e + 2 * f] += l * p;
                rx(d, 2 * e + 2 * f);
                d[2 * e + 2 * f + 1] += g * p;
                rx(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 1] += l * m;
                rx(d, 2 * e + 2 * f + 1);
                d[2 * e + 2 * f + 2] += g * m;
                rx(d, 2 * e + 2 * f + 2)
            }
        for (e = 0; e < c; e++) d[e] = d[2 * e + 1] << 16 | d[2 * e];
        for (e = c; e < 2 * c; e++) d[e] = 0;
        return new ax(d, 0)
    },
    rx = function (a, b) {
        for (;
            (a[b] & 65535) != a[b];) a[b + 1] += a[b] >>> 16, a[b] &= 65535, b++
    },
    nx = function (a, b) {
        if (mx(b)) throw Error("division by zero");
        if (mx(a)) return dx;
        if (-1 == a.a) return -1 == b.a ? nx(ex(a), ex(b)) : ex(nx(ex(a), b));
        if (-1 == b.a) return ex(nx(a, ex(b)));
        if (30 < a.b.length) {
            if (-1 == a.a || -1 == b.a) throw Error("slowDivide_ only works with positive integers.");
            for (var c = ix; 0 >= qx(b, a);) c = sx(c, 1), b =
                sx(b, 1);
            var d = tx(c, 1),
                e = tx(b, 1);
            b = tx(b, 2);
            for (c = tx(c, 2); !mx(b);) {
                var f = e.add(b);
                0 >= qx(f, a) && (d = d.add(c), e = f);
                b = tx(b, 1);
                c = tx(c, 1)
            }
            return d
        }
        for (c = dx; 0 <= qx(a, b);) {
            d = Math.max(1, Math.floor(kx(a) / kx(b)));
            e = Math.ceil(Math.log(d) / Math.LN2);
            e = 48 >= e ? 1 : Math.pow(2, e - 48);
            f = fx(d);
            for (var g = hx(f, b); - 1 == g.a || 0 < qx(g, a);) d -= e, f = fx(d), g = hx(f, b);
            mx(f) && (f = ix);
            c = c.add(f);
            a = ox(a, g)
        }
        return c
    };
ax.prototype.and = function (a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = px(this, d) & px(a, d);
    return new ax(c, this.a & a.a)
};
ax.prototype.or = function (a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = px(this, d) | px(a, d);
    return new ax(c, this.a | a.a)
};
ax.prototype.xor = function (a) {
    for (var b = Math.max(this.b.length, a.b.length), c = [], d = 0; d < b; d++) c[d] = px(this, d) ^ px(a, d);
    return new ax(c, this.a ^ a.a)
};
var sx = function (a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.b.length + c + (0 < b ? 1 : 0), e = [], f = 0; f < d; f++) e[f] = 0 < b ? px(a, f - c) << b | px(a, f - c - 1) >>> 32 - b : px(a, f - c);
        return new ax(e, a.a)
    },
    tx = function (a, b) {
        var c = b >> 5;
        b %= 32;
        for (var d = a.b.length - c, e = [], f = 0; f < d; f++) e[f] = 0 < b ? px(a, f + c) >>> b | px(a, f + c + 1) << 32 - b : px(a, f + c);
        return new ax(e, a.a)
    };
var ux = zf("a"),
    xx = function (a) {
        this.b = null;
        var b = dx;
        if (a instanceof ax) {
            if (0 != a.a || 0 > qx(a, dx) || 0 < qx(a, vx)) throw Error("The address does not look like an IPv4.");
            b = uh(a)
        } else {
            if (!wx.test(a)) throw Error(a + aa);
            var c = a.split(".");
            if (4 != c.length) throw Error(a + aa);
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                var f = Number(e);
                e = 0 == f && Ig(e) ? NaN : f;
                if (isNaN(e) || 0 > e || 255 < e || 1 != c[d].length && Gg(c[d], "0")) throw Error("In " + a + ", octet " + d + " is not valid");
                e = fx(e);
                b = sx(b, 8).or(e)
            }
        }
        this.a = b
    };
C(xx, ux);
var wx = /^[0-9.]*$/,
    vx = ox(sx(ix, 32), ix);
xx.prototype.toString = function () {
    if (this.b) return this.b;
    for (var a = lx(this.a, 0), b = [], c = 3; 0 <= c; c--) b[c] = String(a & 255), a >>>= 8;
    return this.b = b.join(".")
};
var Bx = function (a) {
    this.b = null;
    var b = dx;
    if (a instanceof ax) {
        if (0 != a.a || 0 > qx(a, dx) || 0 < qx(a, yx)) throw Error("The address does not look like a valid IPv6.");
        b = uh(a)
    } else {
        if (!zx.test(a)) throw Error(a + ba);
        var c = a.split(":");
        if (-1 != c[c.length - 1].indexOf(".")) {
            a = lx(uh((new xx(c[c.length - 1])).a), 0);
            var d = [];
            d.push((a >>> 16 & 65535).toString(16));
            d.push((a & 65535).toString(16));
            vg(c, c.length - 1);
            Ag(c, d);
            a = c.join(":")
        }
        d = a.split("::");
        if (2 < d.length || 1 == d.length && 8 != c.length) throw Error(a + ba);
        if (1 < d.length) {
            c = d[0].split(":");
            d = d[1].split(":");
            1 == c.length && "" == c[0] && (c = []);
            1 == d.length && "" == d[0] && (d = []);
            var e = 8 - (c.length + d.length);
            if (1 > e) c = [];
            else {
                for (var f = [], g = 0; g < e; g++) f[g] = "0";
                c = yg(c, f, d)
            }
        }
        if (8 != c.length) throw Error(a + " is not a valid IPv6 address");
        for (d = 0; d < c.length; d++) {
            e = gx(c[d], 16);
            if (0 > qx(e, dx) || 0 < qx(e, Ax)) throw Error(c[d] + " in " + a + " is not a valid hextet.");
            b = sx(b, 16).or(e)
        }
    }
    this.a = b
};
C(Bx, ux);
var zx = /^([a-fA-F0-9]*:){2}[a-fA-F0-9:.]*$/,
    Ax = cx(65535),
    yx = ox(sx(ix, 128), ix);
Bx.prototype.toString = function () {
    if (this.b) return this.b;
    for (var a = [], b = 3; 0 <= b; b--) {
        var c = lx(this.a, b),
            d = c & 65535;
        a.push((c >>> 16).toString(16));
        a.push(d.toString(16))
    }
    c = b = -1;
    for (var e = d = 0, f = 0; f < a.length; f++) "0" == a[f] ? (e++, -1 == c && (c = f), e > d && (d = e, b = c)) : (c = -1, e = 0);
    0 < d && (b + d == a.length && a.push(""), a.splice(b, d, ""), 0 == b && (a = [""].concat(a)));
    return this.b = a.join(":")
};
var Cx = u(),
    Dx, Ex = {
        http: 1,
        https: 1,
        ftp: 1
    },
    Fx = function (a, b) {
        try {
            var c = oq(a)
        } catch (m) {
            return !1
        }
        if (!(a = c.b && !Ex[c.b.toLowerCase()] || !c.c)) {
            c = c.c;
            a: {
                a = c.split(".");
                for (var d = 0; d < a.length; d++)
                    if (!a[d]) {
                        var e = !1;
                        break a
                    }
                if (1 < a.length) {
                    b = a[a.length - 1].toLowerCase();
                    if (!Dx) {
                        try {
                            e = Ji
                        } catch (m) {
                            throw Error("Variable CFG_twsfe_likelyurl_module_file has not been loaded. This is probaly due the configuration data not being properly included.");
                        }
                        a = {};
                        var f = e.ascii_tlds;
                        for (d = 0; d < f.length; d++) {
                            var g = f[d];
                            a[g.toLowerCase()] =
                                1
                        }
                        e = e.unicode_tlds;
                        for (d = 0; d < e.length; d++) g = e[d], a[g.toLowerCase()] = 1;
                        Dx = a
                    }
                    e = !!Dx[b]
                } else e = !b
            }
            if (!e) {
                try {
                    var l = Gg(c, "[") && Hg(c, "]") ? new Bx(c.substring(1, c.length - 1)) : new xx(c)
                } catch (m) {
                    l = null
                }
                e = null != l
            }
            a = !e
        }
        return a ? !1 : !0
    },
    Gx = function (a) {
        a = Lg(a);
        if (0 <= a.search(/[\s\xa0@]/)) return !1;
        if (Fx(a, !1)) return !0;
        var b = a.replace(/%([0-9A-Fa-f][0-9A-Fa-f])/g, function (a, b) {
            return String.fromCharCode(Number("0x" + b))
        });
        return Fx(b, !1) ? !0 : Fx("http://" + a, !0) || Fx("http://" + b, !0)
    };
Cx.prototype.a = function (a, b) {
    if (typeof a != Ke) throw Error("Pattern is not a string.");
    var c = arguments;
    return a.replace(/%(\d+)\$\w/g, function (a, b) {
        b = parseInt(b, 10);
        return 0 < b && b < c.length ? c[b] : a
    })
};
var Hx = function () {
        var a = (new aq(window.location.href)).a,
            b = a.get("e");
        a = a.get("expid");
        var c = "";
        b && (c += "e=" + b);
        "ForceExperiment" == b && a && (c += "&expid=" + a);
        return c
    },
    Ix = function () {
        var a = (new aq(window.location.href)).a.get("rurl"),
            b = "";
        a && (b += "rurl=" + a);
        return b
    },
    Jx = function (a, b, c) {
        var d = oq(y.location.href),
            e = d.toString();
        c && (d.g = c, 2E3 >= Mg(d.toString()).length && (e = d.toString()));
        d = b + "/Login?hl=" + a + "&continue=" + Mg(e);
        a = {
            target: "_top"
        };
        b = window;
        c = d instanceof ij ? d : mj("undefined" != typeof d.href ? d.href :
            String(d));
        d = a.target || d.target;
        e = [];
        for (var f in a) switch (f) {
            case "width":
            case Pc:
            case "top":
            case vd:
                e.push(f + "=" + a[f]);
                break;
            case Me:
            case "noopener":
            case "noreferrer":
                break;
            default:
                e.push(f + "=" + (a[f] ? 1 : 0))
        }
        f = e.join(",");
        Dh() && b.navigator && b.navigator.standalone && d && "_self" != d ? (f = b.document.createElement("A"), c = c instanceof ij ? c : nj(c), f.href = jj(c), f.setAttribute(Me, d), a.noreferrer && f.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent(r, !0, !0, b, 1), f.dispatchEvent(a)) :
            a.noreferrer ? (f = b.open("", d, f), a = jj(c), f && (Kh && Xg(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), f.opener = null, a = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Wg(a) + '">', a = Lj(a, null), f.document.write(Kj(a)), f.document.close())) : (f = b.open(jj(c), d, f)) && a.noopener && (f.opener = null)
    },
    Kx = function (a) {
        a = mg(Rr(a), function (a) {
            return am(a, 4)
        });
        a = ng(a, function (a) {
            return Or(a, 4, 0)
        });
        return og(a, function (a, c) {
            return a && 1 == c
        }, 0 < a.length)
    };
var Lx = function (a, b, c, d, e, f, g) {
    R.call(this);
    this.a = a;
    this.X = Kp.M();
    this.G = rp.M();
    this.$ = new Uw(this.X);
    this.aa = b;
    this.O = this.R = this.j = this.c = "";
    this.N = 0;
    this.m = !1;
    this.b = new Nw("tts", Kp.M(), c);
    this.ia = null != this.b.b && (Qh && Xg(jh, "UCBrowser") ? !1 : !0);
    this.v = hi || gi;
    O(this.b, Je, this.D, !1, this);
    O(this.a, n, this.oj, !1, this);
    null != this.a.l() && O(this.a.l(), r, this.Km, !1, this);
    this.J = (a = /(sa=[^#&]+)/.exec(window.location.href)) ? a[0] : null;
    this.F = (a = /ttsspeed=([^&]+)/.exec(window.location.href)) ? a[0] : null;
    this.L =
        (a = /gl=([^&]+)/.exec(window.location.href)) ? a[0] : null;
    this.g = 0;
    this.ea = !!d;
    this.ma = !!e;
    this.C = f || null;
    this.V = g || null;
    this.o = "";
    this.Ha = new Cx
};
C(Lx, R);
Lx.prototype.T = function () {
    Lx.w.T.call(this);
    Nl(this.b, Je, this.D, !1, this);
    Nl(this.a, n, this.oj, !1, this)
};
Lx.prototype.D = function () {
    this.a.Sa(!1)
};
var Mx = function (a, b, c, d, e, f) {
    b = eh("/translate_tts?ie=UTF-8&q=", Mg(b), "&tl=", c, "&total=", d, "&idx=", e, "&textlen=", b.length, Hr(b), a.aa, f);
    a.L && (b += "&" + a.L);
    return b
};
x = Lx.prototype;
x.update = function (a, b, c, d) {
    var e = /([^?.,;:!"#$%&'()*+\-/<=>?@[\]^_`{|}~\u3001\u3002\uff01\uff08\uff09\uff0c\uff0e\uff1a\uff1b\uff1f])/;
    this.o = "";
    if (null != c)
        for (var f = 0; f < P(c, 5); f++) {
            var g = ks(c, f),
                l = em(hs(g, 0), 0),
                m = em(hs(g, 0), 1);
            l = Q(g, 4).substring(l, m);
            g = Q(gs(g, 0), 0);
            if (l == g && e.test(l)) {
                this.o = Q(c, 2);
                break
            }
        }
    this.g = 0;
    this.ia ? Ig(a) ? (this.display(!1), this.a.oa(!1)) : (a != this.c || b != this.j ? (this.c = a, this.j = b, c = !1) : c = !0, c || (this.b.stop(), this.m = !this.ia || !b || Ig(a) || this.v && a.length > Zw[$w[b.toLowerCase()]] ?
        !1 : b.toLowerCase() in $w), this.display(this.ma || this.m), this.a.oa(this.m)) : (this.display(!1), this.a.oa(!1));
    null != d && (this.a.isEnabled() && null != this.C ? this.a.l().setAttribute(Ab, this.C) : !this.a.isEnabled() && null != this.V && this.a.l().setAttribute(Ab, this.Ha.a(this.V, d)))
};
x.play = function () {
    if (this.c != this.R || this.j != this.O || this.g != this.N) {
        if (this.v) var a = [this.c];
        else {
            a = Zw[$w[this.j.toLowerCase()]];
            var b = [],
                c = this.$,
                d = this.c.replace(/[ \u3000\n\r\t\s]+/g, " ");
            Vw(b, d, a, A(c.a, c), A(c.g, c));
            a = b
        }
        b = [];
        c = [];
        d = "";
        null != this.J && (d += "&" + this.J);
        null != this.F ? d += "&ttsspeed=" + this.F : 0 != this.g && (d += "&ttsspeed=" + this.g);
        this.o && (d += "&hint=" + this.o);
        for (var e = 0; e < a.length; e++) b.push(Mx(this, a[e], this.j, a.length, e, d)), c.push(a[e].length);
        this.b.set(b, this.c.length, c, {
            textlen: this.c.length,
            tl: this.j
        });
        this.R = this.c;
        this.O = this.j;
        this.N = this.g
    }
    this.b.start();
    this.ea && (this.g = 0 === this.g ? .24 : 0)
};
x.stop = function () {
    this.b.stop()
};
x.oj = function () {
    this.a.Ya() ? this.play() : this.stop()
};
x.Km = function (a) {
    this.a.isEnabled() || (a.stopPropagation(), this.dispatchEvent(lf), a = this.G, S(a, T(a, 306)), Pp(this.X, qf, "dia", r, {
        dias: "vo"
    }))
};
x.display = function (a) {
    this.a.setVisible(a);
    a || this.b.stop()
};
var Nx = function (a, b) {
    xv.call(this, a, "ttl");
    this.b = this.c = null;
    this.j = new qw(MSG_LISTEN, void 0, new tw(Ze));
    this.m = new Lx(this.j, "&client=" + (b ? b : qf) + "&prev=lc", 7)
};
C(Nx, xv);
Nx.prototype.Aa = function () {
    Nx.w.Aa.call(this);
    this.na(xk(k))
};
Nx.prototype.na = function (a) {
    Nx.w.na.call(this, a);
    this.l().appendChild(Ls(hr));
    this.c = J("gt-ct-text", this.l());
    a = J("gt-ct-tts", this.l());
    this.b = J("gt-ct-translit", this.l());
    this.j.Y(a)
};
Nx.prototype.update = function (a, b, c, d) {
    Nx.w.update.call(this, a, b, c, d);
    L(this.c, a);
    this.m.update(a, b);
    if (this.data) {
        a = [];
        if (0 < P(this.data, 0))
            for (b = 0; b < P(this.data, 0); b++) c = js(this.data, b), am(c, 3) && "" != Q(c, 3) && a.push(Q(c, 3));
        0 < a.length ? (L(this.b, a.join(" ")), X(this.b, !0)) : X(this.b, !1)
    }
    this.setVisible(!0);
    return !0
};
var Ox = function (a, b, c, d, e) {
    xv.call(this, a, "cm");
    this.aa = b;
    this.D = new Nx(a, e ? e : qf);
    this.C = null;
    this.ma = c;
    this.b = new Y;
    this.Ta(this.b);
    this.m = new Y;
    this.Ta(this.m);
    this.c = this.v = this.J = this.N = this.R = null;
    this.j = [];
    this.X = !!d;
    this.ea = lp.M();
    this.G = rp.M()
};
C(Ox, xv);
x = Ox.prototype;
x.Aa = function () {
    Ox.w.Aa.call(this);
    this.na(xk(k))
};
x.na = function (a) {
    Ox.w.na.call(this, a);
    this.l().appendChild(Ls(fr));
    this.D.Y(J("gt-cc-tc", this.l()));
    this.C = J("gt-cc-t", this.l());
    X(this.C, !1);
    this.b.Y(J("gt-cc-l-i", this.l()));
    this.m.Y(J("gt-cc-r-i", this.l()));
    a = J("gt-cc-bc", this.l());
    this.R = new Hu("", new tw("prev-button"));
    this.R.sa(a);
    this.N = new Hu("", new tw("next-button"));
    this.N.sa(a);
    this.J = new Hu("", new tw("big-clear-button"));
    this.J.sa(a);
    this.v = J("gt-cc-exp", this.l());
    this.c = new vw(this.R, this.N, this.J, this)
};
x.ba = function () {
    Ox.w.ba.call(this);
    Z(this).K(this, "a", this.wl);
    Z(this).K(this, "b", this.Al);
    Z(this).K(this.v, r, this.cl)
};
x.cl = function () {
    X(this.v, !1);
    D(this.j, function (a) {
        a.setVisible(!0)
    });
    var a = {},
        b = this.G;
    Mt(this.b, function (c) {
        c.isVisible() && (vp(b, c.yc(), c.Va(), c.wc), a[c.mb()] = c.wc ? "e" : "ne")
    });
    up(this.G, 15, Nt(this.b));
    this.log("expand", a)
};
x.wl = function (a) {
    a = $k(a.target);
    Px(this, this.Qa, this.g, a, !1, "clks")
};
x.Al = function (a) {
    a = $k(a.target);
    Px(this, this.g, this.Qa, a, !1, "clkt")
};
x.bi = function (a) {
    var b = this.c.a[0];
    Px(this, b.a, b.Qa, a.text, !0, "selalt")
};
x.ul = function (a) {
    var b = a.text;
    if (!(50 < b.length)) {
        var c = this.c.a[0];
        a.Kl ? Px(this, c.a, c.Qa, b, !0, "sel") : Px(this, c.Qa, c.a, b, !0, "sel")
    }
};
var Px = function (a, b, c, d, e, f) {
    if (d != a.text || b != a.Qa) b == uf && (b = tf), qp(a.ea, f), e ? (L(a.D.c, "..."), qs(a.aa, b, c, a.Jb, d, A(a.V, a, d, b, c), !1, "UTF-8", new gq("source=" + f))) : (a.dispatchEvent("translationRefreshed"), kw(a.ma, b, c, d, f))
};
Ox.prototype.update = function (a, b, c, d) {
    Ox.w.update.call(this, a, b, c, d);
    var e = 1 != this.c.a.length;
    X(this.C, e);
    Hs(this.l(), "show-as-one-card", this.X && e);
    var f = 0,
        g = 0,
        l = !0;
    this.j = [];
    Mt(this.b, function (e) {
        var g = e.update(a, b, c, d);
        f |= g;
        g && (l ? l = !1 : e.Rf || (e.setVisible(!1), this.j.push(e)))
    }, this);
    Qx(this, this.b);
    e = 0 < this.j.length;
    X(this.v, e);
    Mt(this.m, function (e) {
        g |= e.update(a, b, c, d)
    }, this);
    var m = f || g;
    this.setVisible(m);
    this.D.update(a, b, c, d);
    if (m) {
        var p = {},
            q = this.G;
        Mt(this.b, function (a) {
            a.isVisible() && (vp(q,
                a.yc(), a.Va(), a.wc), p[a.mb()] = a.wc ? "e" : "ne")
        });
        Mt(this.m, function (a) {
            a.isVisible() && (vp(q, a.yc(), a.Va(), a.wc), p[a.mb()] = a.wc ? "e" : "ne")
        });
        p[this.mb()] = e ? "e" : "ne";
        this.log(se, p);
        vp(this.G, 15, Nt(this.b), !0)
    }
    return m
};
Ox.prototype.V = function (a, b, c, d) {
    this.c.push(a, b, c, d);
    this.isVisible() || (a = this.c, 1 < a.a.length && (a.a.splice(a.a.length - 1), a.b = a.a.length - 1, ww(a)))
};
var Qx = function (a, b) {
    var c = [];
    Mt(b, function (a) {
        if (a.isVisible() || tg(this.j, a)) {
            var b = a.Ge || a.text;
            tg(c, b) ? a.fh() : c.push(b)
        }
    }, a)
};
var Rx = {
        oh: {
            1E3: {
                other: "0K"
            },
            1E4: {
                other: "00K"
            },
            1E5: {
                other: "000K"
            },
            1E6: {
                other: "0M"
            },
            1E7: {
                other: "00M"
            },
            1E8: {
                other: "000M"
            },
            1E9: {
                other: "0B"
            },
            1E10: {
                other: "00B"
            },
            1E11: {
                other: "000B"
            },
            1E12: {
                other: "0T"
            },
            1E13: {
                other: "00T"
            },
            1E14: {
                other: "000T"
            }
        },
        xj: {
            1E3: {
                other: "0 thousand"
            },
            1E4: {
                other: "00 thousand"
            },
            1E5: {
                other: "000 thousand"
            },
            1E6: {
                other: "0 million"
            },
            1E7: {
                other: "00 million"
            },
            1E8: {
                other: "000 million"
            },
            1E9: {
                other: "0 billion"
            },
            1E10: {
                other: "00 billion"
            },
            1E11: {
                other: "000 billion"
            },
            1E12: {
                other: "0 trillion"
            },
            1E13: {
                other: "00 trillion"
            },
            1E14: {
                other: "000 trillion"
            }
        }
    },
    Sx = Rx;
Sx = Rx;
var Tx = {
    AED: [2, "dh", "\u062f.\u0625.", "DH"],
    ALL: [0, "Lek", "Lek"],
    AUD: [2, "$", "AU$"],
    BDT: [2, "\u09f3", "Tk"],
    BGN: [2, "lev", "lev"],
    BRL: [2, "R$", "R$"],
    CAD: [2, "$", "C$"],
    CDF: [2, "FrCD", "CDF"],
    CHF: [2, "CHF", "CHF"],
    CLP: [0, "$", "CL$"],
    CNY: [2, "\u00a5", "RMB\u00a5"],
    COP: [32, "$", "COL$"],
    CRC: [0, "\u20a1", "CR\u20a1"],
    CZK: [50, "K\u010d", "K\u010d"],
    DKK: [50, "kr.", "kr."],
    DOP: [2, "RD$", "RD$"],
    EGP: [2, "\u00a3", "LE"],
    ETB: [2, "Birr", "Birr"],
    EUR: [2, "\u20ac", "\u20ac"],
    GBP: [2, "\u00a3", "GB\u00a3"],
    HKD: [2, "$", "HK$"],
    HRK: [2, "kn", "kn"],
    HUF: [34,
        "Ft", "Ft"
    ],
    IDR: [0, "Rp", "Rp"],
    ILS: [34, "\u20aa", "IL\u20aa"],
    INR: [2, "\u20b9", "Rs"],
    IRR: [0, "Rial", "IRR"],
    ISK: [0, "kr", "kr"],
    JMD: [2, "$", "JA$"],
    JPY: [0, "\u00a5", "JP\u00a5"],
    KRW: [0, "\u20a9", "KR\u20a9"],
    LKR: [2, "Rs", "SLRs"],
    LTL: [2, "Lt", "Lt"],
    MNT: [0, "\u20ae", "MN\u20ae"],
    MVR: [2, "Rf", "MVR"],
    MXN: [2, "$", "Mex$"],
    MYR: [2, "RM", "RM"],
    NOK: [50, "kr", "NOkr"],
    PAB: [2, "B/.", "B/."],
    PEN: [2, "S/.", "S/."],
    PHP: [2, "\u20b1", "PHP"],
    PKR: [0, "Rs", "PKRs."],
    PLN: [50, "z\u0142", "z\u0142"],
    RON: [2, "RON", "RON"],
    RSD: [0, "din", "RSD"],
    RUB: [50, "\u20bd",
        "RUB"
    ],
    SAR: [2, "Rial", "Rial"],
    SEK: [50, "kr", "kr"],
    SGD: [2, "$", "S$"],
    THB: [2, "\u0e3f", "THB"],
    TRY: [2, "\u20ba", "TRY"],
    TWD: [2, "NT$", "NT$"],
    TZS: [0, "TSh", "TSh"],
    UAH: [2, "\u0433\u0440\u043d.", "UAH"],
    USD: [2, "$", "US$"],
    UYU: [2, "$", "$U"],
    VND: [48, "\u20ab", "VN\u20ab"],
    YER: [0, "Rial", "Rial"],
    ZAR: [2, "R", "ZAR"]
};
var Ux = {
        Aj: ".",
        rh: ",",
        Qj: "%",
        uh: "0",
        Tj: "+",
        sh: "-",
        Cj: "E",
        Sj: "\u2030",
        Hj: "\u221e",
        Nj: "NaN",
        ph: "#,##0.###",
        Xj: "#E0",
        Rj: "#,##0%",
        yj: "\u00a4#,##0.00",
        Jf: "USD"
    },
    Vx = Ux;
Vx = Ux;
var Yx = function (a) {
        this.m = 40;
        this.a = 1;
        this.L = 0;
        this.b = 3;
        this.v = this.c = 0;
        this.V = !1;
        this.N = this.J = "";
        this.F = Vx.sh;
        this.C = "";
        this.g = 1;
        this.o = !1;
        this.j = [];
        this.D = this.R = !1;
        this.O = 0;
        if (typeof a == Md) switch (a) {
            case 1:
                Wx(this, Vx.ph);
                break;
            case 2:
                Wx(this, Vx.Xj);
                break;
            case 3:
                Wx(this, Vx.Rj);
                break;
            case 4:
                a = Vx.yj;
                var b = ["0"],
                    c = Tx[Vx.Jf][0] & 7;
                if (0 < c) {
                    b.push(".");
                    for (var d = 0; d < c; d++) b.push("0")
                }
                a = a.replace(/0.00/g, b.join(""));
                Wx(this, a);
                break;
            case 5:
                Xx(this, 1);
                break;
            case 6:
                Xx(this, 2);
                break;
            default:
                throw Error("Unsupported pattern type.");
        } else Wx(this, a)
    },
    Wx = function (a, b) {
        b.replace(/ /g, "\u00a0");
        var c = [0];
        a.J = Zx(a, b, c);
        for (var d = c[0], e = -1, f = 0, g = 0, l = 0, m = -1, p = b.length, q = !0; c[0] < p && q; c[0]++) switch (b.charAt(c[0])) {
            case "#":
                0 < g ? l++ : f++;
                0 <= m && 0 > e && m++;
                break;
            case "0":
                if (0 < l) throw Error('Unexpected "0" in pattern "' + b + '"');
                g++;
                0 <= m && 0 > e && m++;
                break;
            case ",":
                0 < m && a.j.push(m);
                m = 0;
                break;
            case ".":
                if (0 <= e) throw Error('Multiple decimal separators in pattern "' + b + '"');
                e = f + g + l;
                break;
            case "E":
                if (a.D) throw Error('Multiple exponential symbols in pattern "' +
                    b + '"');
                a.D = !0;
                a.v = 0;
                c[0] + 1 < p && "+" == b.charAt(c[0] + 1) && (c[0]++, a.V = !0);
                for (; c[0] + 1 < p && "0" == b.charAt(c[0] + 1);) c[0]++, a.v++;
                if (1 > f + g || 1 > a.v) throw Error('Malformed exponential pattern "' + b + '"');
                q = !1;
                break;
            default:
                c[0]--, q = !1
        }
        0 == g && 0 < f && 0 <= e && (g = e, 0 == g && g++, l = f - g, f = g - 1, g = 1);
        if (0 > e && 0 < l || 0 <= e && (e < f || e > f + g) || 0 == m) throw Error('Malformed pattern "' + b + '"');
        l = f + g + l;
        a.b = 0 <= e ? l - e : 0;
        0 <= e && (a.c = f + g - e, 0 > a.c && (a.c = 0));
        a.a = (0 <= e ? e : l) - f;
        a.D && (a.m = f + a.a, 0 == a.b && 0 == a.a && (a.a = 1));
        a.j.push(Math.max(0, m));
        a.R = 0 == e || e == l;
        d = c[0] - d;
        a.N = Zx(a, b, c);
        c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++, 1 != a.g && (a.o = !0), a.F = Zx(a, b, c), c[0] += d, a.C = Zx(a, b, c)) : (a.F += a.J, a.C += a.N)
    },
    Xx = function (a, b) {
        a.O = b;
        Wx(a, Vx.ph);
        a.c = 0;
        a.b = 2;
        if (0 < a.c) throw Error("Can't combine significant digits and minimum fraction digits");
        a.L = 2
    },
    gy = function (a, b) {
        if (isNaN(b)) return Vx.Nj;
        var c = [];
        var d = b;
        if (0 == a.O) d = $x;
        else {
            d = Math.abs(d);
            var e = ay(a, 1 >= d ? 0 : by(d)).eg;
            d = ay(a, e + by(cy(a, dy(d, -e)).ni))
        }
        b = dy(b, -d.eg);
        c.push(d.prefix);
        e = 0 > b || 0 == b && 0 > 1 / b;
        c.push(e ? a.F : a.J);
        if (isFinite(b))
            if (b = b * (e ? -1 : 1) * a.g, a.D)
                if (0 == b) ey(a, b, a.a, c), fy(a, 0, c);
                else {
                    var f = Math.floor(Math.log(b) / Math.log(10) + 2E-15);
                    b = dy(b, -f);
                    var g = a.a;
                    1 < a.m && a.m > a.a ? (g = f % a.m, 0 > g && (g = a.m + g), b = dy(b, g), f -= g, g = 1) : 1 > a.a ? (f++, b = dy(b, -1)) : (f -= a.a - 1, b = dy(b, a.a - 1));
                    ey(a, b, g, c);
                    fy(a, f, c)
                } else ey(a, b, a.a, c);
        else c.push(Vx.Hj);
        c.push(e ? a.C : a.N);
        c.push(d.Xi);
        return c.join("")
    },
    cy = function (a, b) {
        var c = dy(b, a.b);
        0 < a.L && (c = hy(c, a.L, a.b));
        c = Math.round(c);
        isFinite(c) ? (b = Math.floor(dy(c, -a.b)), a = Math.floor(c - dy(b, a.b))) :
            a = 0;
        return {
            ni: b,
            Ik: a
        }
    },
    ey = function (a, b, c, d) {
        if (a.c > a.b) throw Error("Min value must be less than max value");
        d || (d = []);
        b = cy(a, b);
        var e = b.ni,
            f = b.Ik,
            g = 0 < a.c || 0 < f || !1;
        b = a.c;
        g && (b = a.c);
        for (var l = "", m = e; 1E20 < m;) l = "0" + l, m = Math.round(dy(m, -1));
        l = m + l;
        var p = Vx.Aj;
        m = Vx.uh.charCodeAt(0);
        var q = l.length,
            F = 0;
        if (0 < e || 0 < c) {
            for (e = q; e < c; e++) d.push(String.fromCharCode(m));
            if (2 <= a.j.length)
                for (c = 1; c < a.j.length; c++) F += a.j[c];
            c = q - F;
            if (0 < c) {
                e = a.j;
                F = q = 0;
                for (var B, M = Vx.rh, fa = l.length, da = 0; da < fa; da++)
                    if (d.push(String.fromCharCode(m +
                        1 * Number(l.charAt(da)))), 1 < fa - da)
                        if (B = e[F], da < c) {
                            var Lb = c - da;
                            (1 === B || 0 < B && 1 === Lb % B) && d.push(M)
                        } else F < e.length && (da === c ? F += 1 : B === da - c - q + 1 && (d.push(M), q += B, F += 1))
            } else {
                c = l;
                l = a.j;
                e = Vx.rh;
                B = c.length;
                M = [];
                for (q = l.length - 1; 0 <= q && 0 < B; q--) {
                    F = l[q];
                    for (fa = 0; fa < F && 0 <= B - fa - 1; fa++) M.push(String.fromCharCode(m + 1 * Number(c.charAt(B - fa - 1))));
                    B -= F;
                    0 < B && M.push(e)
                }
                d.push.apply(d, M.reverse())
            }
        } else g || d.push(String.fromCharCode(m));
        (a.R || g) && d.push(p);
        f = String(f);
        g = f.split("e+");
        2 == g.length && (f = String(hy(parseFloat(g[0]),
            a.L, 1)), f = f.replace(".", ""), f += ch("0", parseInt(g[1], 10) - f.length + 1));
        a.b + 1 > f.length && (f = "1" + ch("0", a.b - f.length) + f);
        for (a = f.length;
             "0" == f.charAt(a - 1) && a > b + 1;) a--;
        for (e = 1; e < a; e++) d.push(String.fromCharCode(m + 1 * Number(f.charAt(e))))
    },
    fy = function (a, b, c) {
        c.push(Vx.Cj);
        0 > b ? (b = -b, c.push(Vx.sh)) : a.V && c.push(Vx.Tj);
        b = "" + b;
        for (var d = Vx.uh, e = b.length; e < a.v; e++) c.push(d);
        c.push(b)
    },
    Zx = function (a, b, c) {
        for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
            var g = b.charAt(c[0]);
            if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++,
                d += "'") : e = !e;
            else if (e) d += g;
            else switch (g) {
                    case "#":
                    case "0":
                    case ",":
                    case ".":
                    case ";":
                        return d;
                    case "\u00a4":
                        c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++, d += Vx.Jf) : d += Tx[Vx.Jf][1];
                        break;
                    case "%":
                        if (!a.o && 1 != a.g) throw Error(Pa);
                        if (a.o && 100 != a.g) throw Error(Fa);
                        a.g = 100;
                        a.o = !1;
                        d += Vx.Qj;
                        break;
                    case "\u2030":
                        if (!a.o && 1 != a.g) throw Error(Pa);
                        if (a.o && 1E3 != a.g) throw Error(Fa);
                        a.g = 1E3;
                        a.o = !1;
                        d += Vx.Sj;
                        break;
                    default:
                        d += g
                }
        }
        return d
    },
    $x = {
        prefix: "",
        Xi: "",
        eg: 0
    },
    ay = function (a, b) {
        a = 1 == a.O ? Sx.oh : Sx.xj;
        null == a && (a =
            Sx.oh);
        if (3 > b) return $x;
        b = Math.min(14, b);
        var c = a[dy(1, b)];
        for (--b; !c && 3 <= b;) c = a[dy(1, b)], b--;
        if (!c) return $x;
        a = c.other;
        return a && "0" != a ? (a = /([^0]*)(0+)(.*)/.exec(a)) ? {
            prefix: a[1],
            Xi: a[3],
            eg: b + 1 - (a[2].length - 1)
        } : $x : $x
    },
    by = function (a) {
        if (!isFinite(a)) return 0 < a ? a : 0;
        for (var b = 0; 1 <= (a /= 10);) b++;
        return b
    },
    dy = function (a, b) {
        if (!a || !isFinite(a) || 0 == b) return a;
        a = String(a).split("e");
        return parseFloat(a[0] + "e" + (parseInt(a[1] || 0, 10) + b))
    },
    iy = function (a, b) {
        return a && isFinite(a) ? dy(Math.round(dy(a, b)), -b) : a
    },
    hy =
        function (a, b, c) {
            if (!a) return a;
            b = b - by(a) - 1;
            return b < -c ? iy(a, -c) : iy(a, b)
        };
var jy = function (a, b, c) {
    Y.call(this);
    this.j = a;
    this.b = b;
    this.c = c;
    this.g = new Yx("######")
};
C(jy, Y);
jy.prototype.xd = function (a) {
    return a && a.tagName == k && J(mb, a) && J(nb, a) ? !0 : !1
};
var my = function (a) {
        ky(a, !1);
        ly(a, 0)
    },
    ly = function (a, b) {
        b = gy(a.g, b);
        var c = gy(a.g, a.j);
        L(J(mb, a.l()), b + "/" + c)
    },
    ky = function (a, b) {
        b ? Is(J(mb, a.l()), a.b, a.c) : Is(J(mb, a.l()), a.c, a.b);
        X(J(nb, a.l()), b)
    },
    ny = function (a, b) {
        aj(b) ? Is(J(nb, a.l()), "cc-msg-ltr", "cc-msg-rtl") : Is(J(nb, a.l()), "cc-msg-rtl", "cc-msg-ltr")
    };
var oy = function (a, b) {
    gl.call(this);
    this.c = this.b = 0;
    this.Pb = a;
    this.g = b;
    this.a = new Ju(A(this.Mk, this), 0, this)
};
C(oy, gl);
x = oy.prototype;
x.T = function () {
    this.a.Da();
    delete this.Pb;
    delete this.g;
    oy.w.T.call(this)
};
x.start = function (a, b) {
    this.stop();
    b = b || 0;
    this.b = Math.max(a || 0, 0);
    this.c = 0 > b ? -1 : hg() + b;
    this.a.start(0 > b ? this.b : Math.min(this.b, b))
};
x.stop = function () {
    this.a.stop()
};
x.gb = function () {
    return this.a.gb()
};
x.Mk = function () {
    if (!this.Pb.call(this.g))
        if (0 > this.c) this.a.start(this.b);
        else {
            var a = this.c - hg();
            0 >= a || this.a.start(Math.min(this.b, a))
        }
};
var qy = function (a) {
    R.call(this);
    this.H = a;
    this.a = this.H.value;
    this.b = new yt(this);
    this.g = hg();
    py ? this.b.K(a, Ud, this.rd) : this.b.K(a, [od, ib, Sb, Dd, Yc], this.bl);
    this.c = new oy(A(this.Eh, this))
};
C(qy, R);
var py = Mh || G || Jh || Lh && ai("1.9");
x = qy.prototype;
x.Oc = Xc;
x.G = null;
x.T = function () {
    qy.w.T.call(this);
    this.b.Da();
    this.b = null;
    this.c.Da();
    this.c = null
};
x.Eh = function () {
    if (this.a == this.H.value) return !1;
    this.dispatchEvent("after_paste");
    return !0
};
x.rd = function (a) {
    a = new rl(a.a);
    a.type = Ud;
    this.dispatchEvent(a);
    Xm(function () {
        this.Eh() || this.c.start(50, 200)
    }, 0, this)
};
x.bl = function (a) {
    switch (this.Oc) {
        case Xc:
            switch (a.type) {
                case ib:
                    this.Oc = Xc;
                    break;
                case Sb:
                    this.Oc = "focused";
                    break;
                case Dd:
                    this.Oc = Xc, this.H.value != this.a && this.rd(a)
            }
            break;
        case "focused":
            switch (a.type) {
                case Yc:
                    var b = this.g + 400;
                    (hg() > b || this.j == Sb) && this.rd(a);
                    break;
                case ib:
                    this.Oc = Xc;
                    break;
                case od:
                    if (Oh && Ih && 0 == a.keyCode || Oh && Ih && 17 == a.keyCode) break;
                    this.Oc = "typing";
                    break;
                case Dd:
                    this.H.value != this.a && this.rd(a)
            }
            break;
        case "typing":
            switch (a.type) {
                case Yc:
                    this.Oc = "focused";
                    break;
                case ib:
                    this.Oc = Xc;
                    break;
                case od:
                    (a.ctrlKey && 86 == a.keyCode || a.shiftKey && 45 == a.keyCode || a.metaKey && 86 == a.keyCode) && this.rd(a);
                    break;
                case Dd:
                    this.H.value != this.a && this.rd(a)
            }
    }
    this.g = hg();
    this.a = this.H.value;
    this.j = a.type
};
var ry = u();
C(ry, $t);
Wf(ry);
x = ry.prototype;
x.oc = u();
x.Y = function (a, b) {
    vu(a, !1);
    a.tc &= -256;
    a.Pa(32, !1);
    ry.w.Y.call(this, a, b);
    a.g(b.value);
    return b
};
x.bb = function (a) {
    vu(a, !1);
    a.tc &= -256;
    a.Pa(32, !1);
    return a.a.b(Oa, {
        "class": eu(this, a).join(" "),
        disabled: !a.isEnabled()
    }, a.Ja() || "")
};
x.Qc = function (a) {
    return a.tagName == Oa
};
x.wg = Vf;
x.vg = function (a) {
    return a.isEnabled()
};
x.yd = Vf;
x.ad = function (a, b, c) {
    ry.w.ad.call(this, a, b, c);
    (a = a.l()) && 1 == b && (a.disabled = c)
};
x.cc = Vf;
x.Zb = function (a, b) {
    a && (a.value = b)
};
x.Z = w("goog-textarea");
var sy = function (a, b, c) {
    tu.call(this, a, b || ry.M(), c);
    vu(this, !1);
    this.Ce = !0;
    (b = this.l()) && this.c.bf(b, !0);
    this.Ad = "" != a;
    a || (this.bd = "")
};
C(sy, tu);
var ty = !(G && !ci(11));
x = sy.prototype;
x.Cd = !1;
x.qf = !1;
x.Ad = !1;
x.Gc = 0;
x.Sg = 0;
x.ki = !1;
x.zf = !1;
x.ah = !1;
x.$g = !1;
x.Gd = "";
var uy = function (a) {
        return a.v.top + a.v.bottom + a.V.top + a.V.bottom
    },
    vy = function (a) {
        var b = a.Sg,
            c = a.l();
        b && c && a.zf && (b -= uy(a));
        return b
    },
    xy = function (a) {
        a.Sg = 105;
        wy(a)
    };
sy.prototype.b = function (a) {
    this.g(String(a))
};
sy.prototype.W = function () {
    return this.l().value != this.Gd || yy(this) || this.Ad ? this.l().value : ""
};
sy.prototype.g = function (a) {
    sy.w.g.call(this, a);
    this.Ad = "" != a;
    wy(this)
};
sy.prototype.oa = function (a) {
    sy.w.oa.call(this, a);
    this.l().disabled = !a
};
var wy = function (a) {
        a.l() && a.D()
    },
    yy = function (a) {
        return "placeholder" in a.l()
    },
    zy = function (a) {
        a.Gd && (yy(a) ? a.l().placeholder = a.Gd : !a.l() || a.Ad || a.qf || (V(a.l(), Pe), a.l().value = a.Gd))
    };
sy.prototype.ba = function () {
    sy.w.ba.call(this);
    var a = this.l();
    Qs(a, {
        overflowY: Rc,
        overflowX: eb,
        boxSizing: jb,
        MsBoxSizing: jb,
        WebkitBoxSizing: jb,
        MozBoxSizing: jb
    });
    this.v = vt(a);
    this.V = at(a);
    Z(this).K(a, he, this.D).K(a, Sb, this.D).K(a, qd, this.D).K(a, Ed, this.Ia).K(a, ib, this.ra);
    zy(this);
    wy(this)
};
var Ay = function (a) {
        if (!a.ki) {
            var b = a.l().cloneNode(!1);
            Qs(b, {
                position: Ua,
                height: eb,
                top: "-9999px",
                margin: "0",
                padding: "1px",
                border: "1px solid #000",
                overflow: Rc
            });
            a.a.a.body.appendChild(b);
            var c = b.scrollHeight;
            b.style.padding = "10px";
            var d = b.scrollHeight;
            a.ah = d > c;
            b.style.borderWidth = "10px";
            a.$g = b.scrollHeight > d;
            b.style.height = "100px";
            100 != b.offsetHeight && (a.zf = !0);
            Fk(b);
            a.ki = !0
        }
        b = a.l();
        isNaN(a.v.top) && (a.v = vt(b), a.V = at(b));
        c = a.l().scrollHeight;
        var e = a.l();
        d = e.offsetHeight - e.clientHeight;
        if (!a.ah) {
            var f =
                a.v;
            d -= f.top + f.bottom
        }
        a.$g || (e = at(e), d -= e.top + e.bottom);
        c += 0 < d ? d : 0;
        a.zf ? c -= uy(a) : (a.ah || (d = a.v, c += d.top + d.bottom), a.$g || (a = at(b), c += a.top + a.bottom));
        return c
    },
    By = function (a, b) {
        a.Gc != b && (a.Gc = b, a.l().style.height = b + Yd)
    },
    Cy = function (a) {
        var b = a.l();
        b.style.height = eb;
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.Gc = 0
    };
sy.prototype.ra = function () {
    yy(this) || (this.qf = !1, "" == this.l().value && (this.Ad = !1, zy(this)))
};
sy.prototype.D = function (a) {
    if (!this.Cd) {
        var b = this.l();
        !yy(this) && a && a.type == Sb && (b.value == this.Gd && this.Gd && !this.qf && (W(b, Pe), b.value = ""), this.qf = !0, this.Ad = "" != b.value);
        var c = !1;
        this.Cd = !0;
        a = this.Gc;
        if (b.scrollHeight) {
            var d = !1,
                e = !1,
                f = Ay(this),
                g = b.offsetHeight,
                l = vy(this);
            var m = 0;
            var p = this.l();
            m && p && this.zf && (m -= uy(this));
            l && f < l ? (By(this, l), d = !0) : m && f > m ? (By(this, m), b.style.overflowY = "", e = !0) : g != f ? By(this, f) : this.Gc || (this.Gc = f);
            d || e || !ty || (c = !0)
        } else Cy(this);
        this.Cd = !1;
        c && (b = this.l(), this.Cd ||
        (this.Cd = !0, (e = b.scrollHeight) ? (f = Ay(this), c = vy(this), c && f <= c || (d = this.v, b.style.paddingBottom = d.bottom + 1 + Yd, Ay(this) == f && (b.style.paddingBottom = d.bottom + e + Yd, b.scrollTop = 0, e = Ay(this) - e, e >= c ? By(this, e) : By(this, c)), b.style.paddingBottom = d.bottom + Yd)) : Cy(this), this.Cd = !1));
        a != this.Gc && this.dispatchEvent(ce)
    }
};
sy.prototype.Ia = function () {
    var a = this.l(),
        b = a.offsetHeight;
    a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
    b != this.Gc && (this.Gc = this.Sg = b)
};
var Dy = function (a, b) {
    sy.call(this, a);
    this.Ma = !!b;
    this.aa = "";
    this.ea = null;
    this.J = 0;
    this.X = this.$ = !1;
    this.ma = null
};
C(Dy, sy);
Dy.prototype.b = function (a) {
    Dy.w.b.call(this, a);
    this.R(ne)
};
Dy.prototype.ba = function () {
    Dy.w.ba.call(this);
    O(this.l(), xb, A(this.Ca, this), !1, this);
    O(this.l(), wb, A(this.wa, this), !1, this);
    this.ma = new Tt(this.l());
    O(this.ma, nd, function (a) {
        Ey(this, nd, {
            keyCode: a.keyCode
        })
    }, !1, this);
    O(this.l(), Yc, function () {
        Ey(this, Yc)
    }, !1, this);
    O(new qy(this.l()), Ud, function () {
        this.$ = !0;
        Ey(this, Ud)
    }, !1, this);
    O(this.l(), "drop", function () {
        Ey(this, "drop")
    }, !1, this);
    this.ea = new Um(1E3);
    O(this.ea, Se, function () {
        this.R("timer")
    }, !1, this);
    this.ea.start()
};
Dy.prototype.Ca = function () {
    this.X = !0
};
Dy.prototype.wa = function () {
    this.X = !1;
    Ey(this, Yc)
};
var Ey = function (a, b, c) {
    Xm(A(a.R, a, b, c), 0, a)
};
Dy.prototype.R = function (a, b) {
    if (!this.X)
        if (this.Ma && a == nd && b && 13 == b.keyCode) this.dispatchEvent("enter");
        else {
            var c = this.W();
            "" == c.trim() && c != this.aa && this.dispatchEvent("clear");
            c != this.aa && (this.J += 1, this.aa = c, c = new N(ob), this.$ && (this.$ = !1, a = Ud), c.qd = a, null != b && wh(c, b), this.dispatchEvent(c))
        }
};
var Fy = function (a) {
    var b = a.J;
    a.J = 0;
    return b
};
var Gy = function (a, b) {
    R.call(this);
    this.Yc = a;
    this.a = [];
    null != b && this.Kd(b)
};
C(Gy, R);
Gy.prototype.update = function (a, b) {
    for (var c = this.a.length = 0; c < a.length; ++c) this.a.push(a[c]);
    this.dispatchEvent({
        type: this.Yc,
        data: this.a,
        selected: null != b ? b : null
    })
};
var Hy = function (a, b) {
    R.call(this);
    this.N = !!b;
    this.a = "";
    this.R = a;
    this.c = this.b = "";
    this.F = new Gy(Fe, this);
    this.C = new Gy(He, this);
    this.L = new Gy(Ie, this);
    this.V = [];
    this.aa = new Gy(De, this);
    this.X = new Gy(Qe, this);
    this.$ = this.ia = 0;
    this.g = [];
    this.j = [];
    this.O = [];
    this.J = [];
    this.D = !1;
    this.v = ""
};
C(Hy, R);
var Iy = function (a, b) {
        var c = [];
        if (b) {
            for (var d = a.a == eb ? a.c : a.a, e = -1, f = 0; f < b.length; ++f) b[f] == d ? a.a != eb && (e = f) : c.push(b[f]);
            b = -1 != e && 3 > e
        } else b = !1;
        b || a.D || a.F.update(c ? c.slice(0, 3) : [])
    },
    Jy = function (a, b, c, d) {
        for (var e = {}, f = [], g = 0; g < b.length && 3 > f.length; g++) f.push(b[g]), e[b[g]] = !0;
        for (g = 0; g < a.length && 3 > f.length; g++) null == e[a[g]] && (e[a[g]] = !0, f.push(a[g]));
        c.update(f, d)
    };
Hy.prototype.o = function (a, b) {
    b = null != b ? b : 0;
    if (3 == b || 4 == b || 5 == b) this.D = !0;
    6 == b && (this.v = a);
    a == uf && (a = tf);
    a != eb && Ky(this, "");
    Ly(this, this.C, a, this.g);
    if (this.a == a) a == eb && this.dispatchEvent(td);
    else {
        var c = this.a;
        this.a = a;
        this.N && My(this.a, this.g);
        this.R && c != this.a && this.R(aj(this.a) ? ge : xd);
        a = c == eb ? void 0 : A(this.m, this, c, 6);
        this.ia = b;
        Ny(this, this.a, Ee, b, a)
    }
};
Hy.prototype.m = function (a, b) {
    b = null != b ? b : 0;
    6 != b && 5 != b || a != tf || this.v != uf || (a = uf);
    5 == b && (this.v = this.b);
    Ly(this, this.L, a, this.j);
    if (this.b != a) {
        var c = this.b;
        this.b = a;
        this.N && My(this.b, this.j);
        this.$ = b;
        Ny(this, this.b, Re, b, A(this.o, this, c, 6))
    }
};
var Ly = function (a, b, c, d) {
        for (var e = zg(b.a), f = c != eb, g = 0; g < e.length; g++)
            if (c == e[g]) {
                f = !1;
                break
            }
        if (a.N && c != eb) g = e.length, e = [c].concat(d instanceof Array ? d : Cf(Bf(d)), e instanceof Array ? e : Cf(Bf(e))), Eg(e), e.length = g;
        else if (f)
            for (a = {}, 0 < d.length && (a[d[0]] = !0), 1 < d.length && (a[d[1]] = !0), g = e.length - 1; 0 <= g; g--)
                if (!a[e[g]]) {
                    e[g] = c;
                    break
                }
        b.update(e, c)
    },
    Ky = function (a, b) {
        b == eb && (b = "");
        a.c != b && (a.c = b, a.dispatchEvent({
            type: Ib,
            data: a.c
        }))
    },
    Oy = function (a) {
        My(a.a, a.g);
        My(a.b, a.j)
    },
    Py = function (a) {
        a.O = [];
        a.J = [];
        for (var b =
            window.DEFAULT_SOURCES || [], c = window.DEFAULT_TARGETS || [], d = 0; d < b.length; d++) ug(a.O, b[d]);
        for (b = 0; b < c.length; b++) ug(a.J, c[b])
    },
    Qy = function (a) {
        if (!a || 0 == a.length) return "";
        for (var b = [], c = 0; c < a.length; ++c) b.push(a[c]);
        return b.join("|")
    },
    Ny = function (a, b, c, d, e) {
        a.dispatchEvent({
            type: c,
            data: b,
            Bh: 6 == d
        });
        e && (3 == d || 4 == d) && a.a == a.b && a.a != tf && e();
        4 != d && 3 != d || a.dispatchEvent(td)
    },
    Ry = function (a, b) {
        for (var c = [], d = 0; d < a.length && !(a[d] != b && c.push(a[d]), 3 <= c.length); ++d);
        return c
    },
    My = function (a, b) {
        if (a != eb) {
            for (var c =
                0; c < b.length && b[c] != a; ++c);
            c == b.length ? (b.unshift(a), 10 < b.length && b.pop()) : (b.splice(c, 1), b.unshift(a))
        }
    };
var Vy = function (a, b) {
        var c = 0,
            d = 0;
        if (Sy(a)) c = a.selectionStart, d = b ? -1 : a.selectionEnd;
        else if (Ty()) {
            var e = Uy(a),
                f = e[0];
            e = e[1];
            if (f.inRange(e)) {
                f.setEndPoint("EndToStart", e);
                if (a.type == Oe) {
                    a = e.duplicate();
                    var g = f.text;
                    c = g;
                    e = d = a.text;
                    for (var l = !1; !l;) 0 == f.compareEndPoints(Na, f) ? l = !0 : (f.moveEnd(pb, -1), f.text == g ? c += "\r\n" : l = !0);
                    if (b) b = [c.length, -1];
                    else {
                        for (b = !1; !b;) 0 == a.compareEndPoints(Na, a) ? b = !0 : (a.moveEnd(pb, -1), a.text == d ? e += "\r\n" : b = !0);
                        b = [c.length, c.length + e.length]
                    }
                    return b
                }
                c = f.text.length;
                d = b ? -1 :
                    f.text.length + e.text.length
            }
        }
        return [c, d]
    },
    Uy = function (a) {
        var b = a.ownerDocument || a.document,
            c = b.selection.createRange();
        a.type == Oe ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
        return [b, c]
    },
    Wy = function (a, b) {
        a.type == Oe && (b = Jg(a.value.substring(0, b)).length);
        return b
    },
    Sy = function (a) {
        try {
            return typeof a.selectionStart == Md
        } catch (b) {
            return !1
        }
    },
    Ty = function () {
        return G && !ai("9")
    };
var Xy = function (a, b, c, d, e) {
        var f = MAX_SINGLE_QUERY_LENGTH;
        this.c = a;
        this.j = b;
        this.L = c;
        this.g = d;
        this.b = f;
        this.a = e || null;
        this.o = !1;
        this.m = new Kp;
        this.m.g = "t";
        this.G = rp.M()
    },
    Yy = function (a) {
        O(a.c, ob, a.v, !1, a);
        O(document, le, a.C, !1, a);
        O(new qy(a.c.l()), Ud, a.F, !1, a)
    };
Xy.prototype.v = function (a) {
    var b = this.c.W().length;
    this.a && ly(this.a, b);
    var c = a.qd == ne;
    a = a.qd == nd;
    if (b > this.b) {
        if (!lt(this.g.l()) && !a || c) {
            this.g.setVisible(!0);
            a = this.j.c;
            "" == a && (a = this.j.a);
            c = b - this.b;
            Pp(this.m, "t", "ov", "1", {
                sl: this.j.a,
                tl: this.j.b,
                dl: a,
                hl: this.L,
                ql: b,
                ol: c
            });
            a = this.G;
            S(a, Ap(a, 250, b, c));
            this.a && ky(this.a, !0);
            c = this.c.W().substring(this.b);
            L(Zy(this.g), c);
            a = this.g;
            c = J("ovfl-msg", a.l());
            a = a.v;
            b = {
                overflow_character_count: b - this.b,
                maximum_input_count: this.b
            };
            if (a.g) {
                a.j = [];
                var d = $y(a,
                    a.g);
                a.b = az(a, d);
                a.g = null
            }
            if (a.b && 0 != a.b.length)
                for (a.a = zg(a.j), d = [], bz(a, a.b, b, !1, d), b = d.join(""), b.search("#"); 0 < a.a.length;) b = b.replace(a.c(a.a), a.a.pop());
            else b = "";
            L(c, b)
        }
        this.c.g(this.c.W().substring(0, this.b));
        this.a && ly(this.a, this.b)
    } else b < this.b && this.a && ky(this.a, !1), (c || 0 == b) && cz(this)
};
var cz = function (a) {
    L(Zy(a.g), "");
    a.g.setVisible(!1);
    a.a && ky(a.a, !1)
};
Xy.prototype.C = function () {
    var a = Vy(this.c.l(), !1),
        b = this.c.W().length;
    this.o = 0 != b && 0 == a[0] && a[1] == b
};
Xy.prototype.F = function () {
    this.o && cz(this)
};
var bu = u();
C(bu, $t);
Wf(bu);
bu.prototype.bb = function (a) {
    var b = a.a.b(La, eu(this, a).join(" "));
    dz(this, b, a.j);
    return b
};
bu.prototype.Y = function (a, b) {
    b = bu.w.Y.call(this, a, b);
    var c = Ds(b),
        d = !1;
    tg(c, ez(this, null)) ? d = null : tg(c, ez(this, !0)) ? d = !0 : tg(c, ez(this, !1)) && (d = !1);
    a.j = d;
    zs(b, qb, null == d ? "mixed" : 1 == d ? hf : "false");
    return b
};
bu.prototype.oc = w("checkbox");
var dz = function (a, b, c) {
    if (b) {
        var d = ez(a, c);
        Es(b, d) || (nh(fz, function (a) {
            a = ez(this, a);
            Hs(b, a, a == d)
        }, a), zs(b, qb, null == c ? "mixed" : 1 == c ? hf : "false"))
    }
};
bu.prototype.Z = w("goog-checkbox");
var ez = function (a, b) {
    a = a.Z();
    if (1 == b) return a + "-checked";
    if (0 == b) return a + "-unchecked";
    if (null == b) return a + "-undetermined";
    throw Error("Invalid checkbox state: " + b);
};
var gz = function (a, b, c) {
    c = c || bu.M();
    tu.call(this, null, c, b);
    this.j = z(a) ? a : !1
};
C(gz, tu);
var fz = {
    xn: !0,
    lq: !1,
    mq: null
};
x = gz.prototype;
x.Ya = function () {
    return 1 == this.j
};
x.Sa = function (a) {
    a != this.j && (this.j = a, dz(this.c, this.l(), this.j))
};
x.Wh = function () {
    this.Sa(this.j ? !1 : !0)
};
x.ba = function () {
    gz.w.ba.call(this);
    this.mf && Z(this).K(this.l(), r, this.ci)
};
x.oa = function (a) {
    gz.w.oa.call(this, a);
    if (a = this.l()) a.tabIndex = this.isEnabled() ? 0 : -1
};
x.ci = function (a) {
    a.stopPropagation();
    var b = this.j ? "uncheck" : "check";
    this.isEnabled() && !a.target.href && this.dispatchEvent(b) && (a.preventDefault(), this.Wh(), this.dispatchEvent(ob))
};
x.cd = function (a) {
    32 == a.keyCode && (this.Ic(a), this.ci(a));
    return !1
};
ru("goog-checkbox", function () {
    return new gz
});
var hz = function (a) {
    a = a || {};
    var b = a.rj ? " " + U("jfk-checkbox-undetermined") : a.checked ? " " + U("jfk-checkbox-checked") : " " + U("jfk-checkbox-unchecked");
    var c = a.rj ? "mixed" : a.checked ? hf : "false";
    var d = a.gk ? ' aria-labelledby="' + U(a.gk) + '"' : a.fk ? ' aria-label="' + U(a.fk) + '"' : "";
    return Gq('<span class="' + U("jfk-checkbox") + " " + U(dc) + b + (a.disabled ? " " + U("jfk-checkbox-disabled") : "") + (a.Wf ? " " + U(a.Wf) : "") + '" role="checkbox" aria-checked="' + c + '"' + d + (a.id ? ' id="' + U(a.id) + '"' : "") + (a.disabled ? ' aria-disabled="true" tabindex="-1"' :
        ' tabindex="' + (a.ih ? U(a.ih) : "0") + '"') + (a.attributes ? " " + Pq(a.attributes) : "") + ' dir="ltr"><div class="' + U(ld) + '" role="presentation"></div></span>')
};
var iz = function (a, b) {
    var c = cu();
    gz.call(this, a, b, c);
    this.Pa(4, !0)
};
C(iz, gz);
iz.prototype.Aa = function () {
    this.H = Ms(hz, {
        checked: this.Ya(),
        disabled: !this.isEnabled(),
        rj: null == this.j
    }, void 0, this.a)
};
iz.prototype.na = function (a) {
    iz.w.na.call(this, a);
    V(a, dc);
    this.l().dir = xd;
    this.zc(ld) || (a = this.a.b(k, ld), this.l().appendChild(a));
    ys(this.zc(ld), "presentation")
};
iz.prototype.Uc = function (a) {
    iz.w.Uc.call(this, a);
    jz(this, !1)
};
iz.prototype.eb = function (a) {
    iz.w.eb.call(this, a);
    this.isEnabled() && jz(this, !0)
};
var jz = function (a, b) {
    a.l() && Hs(a.l(), "jfk-checkbox-clearOutline", b)
};
var kz = function (a, b) {
    iz.call(this, a, b)
};
C(kz, iz);
kz.prototype.Wh = function () {
    this.Sa(0 == this.j ? !0 : !1)
};
var lz = function (a, b, c, d, e, f, g, l) {
    Y.call(this);
    this.g = Kp.M();
    this.N = a;
    this.C = b;
    this.J = c;
    this.D = d;
    this.R = e;
    this.c = f;
    this.j = g;
    this.m = null != l ? l : null;
    this.G = rp.M();
    this.v = !1
};
C(lz, Y);
lz.prototype.setVisible = function (a) {
    a && !this.v ? (this.g.log(ub, "show-" + this.c), Dp(this.G, this.j), X(this.b, !0)) : X(this.b, !1)
};
lz.prototype.na = function (a) {
    lz.w.na.call(this, a);
    this.b = Ls(ar, {
        ee: this.N,
        Ml: this.C,
        Fm: this.J,
        Bm: this.D,
        url: this.R,
        id: this.c
    });
    a.appendChild(this.b);
    var b = J("cp-dismiss", a);
    Z(this).K(b, r, this.V);
    a = J("cp-promo-href", a);
    Z(this).K(a, r, this.X)
};
lz.prototype.V = function () {
    this.g.log(ub, "dismiss-" + this.c);
    Op(this.g, ma + this.c);
    var a = this.G;
    S(a, Cp(a, 74, this.j));
    this.setVisible(!1);
    this.v = !0
};
lz.prototype.X = function (a) {
    this.g.log(ub, "click-" + this.c);
    var b = this.G;
    S(b, Cp(b, 72, this.j));
    this.m && this.m.a() && (this.m.reset(), a.preventDefault(), a.stopPropagation())
};
var mz = function (a, b) {
    this.a = a;
    this.b = b || null
};
mz.prototype.Na = v("a");
mz.prototype.Ka = v("b");
var nz = u();
C(nz, $t);
Wf(nz);
x = nz.prototype;
x.oc = w(zd);
x.bb = function (a) {
    var b = K(k, null, a.Na());
    V(b, "gt-is-sg");
    var c = K(k, null, "");
    V(c, a.Mh ? "gt-is-ld-top" : Dc);
    c = [k, eu(this, a), c];
    var d = K(La);
    if (a.Lc) {
        var e = new Hu(null, new tw);
        e.sa(d);
        V(e.l(), "gt-is-flag");
        fv(e.l(), a.jg);
        e.setVisible(!1);
        a.Kb = e;
        d.id = Ht(e)
    }
    e = K(k);
    V(e, "gt-is-ca");
    var f = new Hu;
    f.H = e;
    a.lc = f;
    c = c.concat([b, d, e]);
    a.lm && (b = K(k, null, a.Ka()), c.push(b), V(b, "gt-is-tr"));
    b = K.apply(null, c);
    b.id = Ht(a);
    return a.H = b
};
x.Qc = function (a) {
    return a.tagName == k
};
x.Z = w("gt-is-itm");
x.ad = function (a, b, c) {
    nz.w.ad.call(this, a, b, c);
    2 == b && a.Lc && a.Kb && !a.vd && a.Kb.setVisible(c)
};
var oz = function (a, b, c, d, e, f, g) {
    tu.call(this, a.Na(), f || nz.M(), g);
    this.Fd = a;
    this.Lc = b;
    this.jg = c;
    this.lc = null;
    this.Mh = d;
    this.lm = e;
    this.vd = !1;
    this.Pa(1, !1)
};
C(oz, tu);
oz.prototype.Na = function () {
    return this.Fd.Na()
};
oz.prototype.Ka = function () {
    return this.Fd.Ka()
};
oz.prototype.eb = function (a) {
    this.Lc && Mk(this.Kb.l(), a.target) ? (this.vd = !0, this.Kb.eb(a)) : this.lc && Mk(this.lc.l(), a.target) ? this.lc.eb(a) : oz.w.eb.call(this, a)
};
oz.prototype.vb = function (a) {
    if (this.lc && Mk(this.lc.l(), a.target)) this.lc.vb(a);
    else if (this.Lc && Mk(this.Kb.l(), a.target) && this.vd) this.Kb.vb(a), this.vd = !1, this.Oa(2) || this.Kb.setVisible(!1);
    else {
        if (this.Lc) {
            var b = this.getParent();
            D(b.b, function (a) {
                a.vd && (a.vd = !1, zu(a.Kb, !1));
                a != this && a.Kb.setVisible(!1)
            })
        }
        oz.w.vb.call(this, a)
    }
};
var pz = function (a, b, c, d) {
    var e = "md";
    null != d && d && (e = "m" + e);
    yv.call(this, a, e, MSG_DEFINITIONS_OF, "", 7);
    this.N = b;
    this.J = null != c ? c : !0
};
C(pz, yv);
pz.prototype.update = function (a, b, c, d) {
    pz.w.update.call(this, a, b, c, d);
    if (!d || 0 == P(d, 12) && 0 == P(d, 15)) return !1;
    Ck(this.b);
    this.md();
    this.j = 0;
    a = P(d, 12);
    b = 3 > a;
    for (var e = c = 0; e < P(d, 12); e++) c += (new Zr($l(d, 12, e))).a();
    c = 5 > c ? c : 3;
    for (e = this.D = 0; e < a; ++e) {
        var f = new Zr($l(d, 12, e)),
            g = Q(new Zr($l(d, 12, e)), 2),
            l = K(k, {
                "class": "gt-cd-pos"
            });
        this.b.appendChild(l);
        L(l, Q(f, 0));
        l = d;
        var m = b,
            p = c,
            q = Math.ceil(p / a),
            F = K(k, {
                "class": "gt-def-list"
            }),
            B = aj(this.Qa) ? ge : xd;
        Qs(F, {
            direction: B
        });
        for (B = 0; B < f.a(); ++B) {
            var M = f.b(B),
                fa = Q(M,
                    0),
                da = Q(M, 2);
            var Lb = l;
            for (var Zc = [], Bb = 0; Bb < P(Lb, 11); ++Bb)
                for (var Wm = new as($l(Lb, 11, Bb)), Qk = 0; Qk < Wm.a(); ++Qk) {
                    var Rk = Wm.b(Qk);
                    if (Q(M, 1) == Q(Rk, 1)) {
                        for (var Xi = [], Yi = 0; Yi < P(Rk, 0); ++Yi) ug(Xi, cm(Rk, 0, Yi));
                        ug(Zc, Xi)
                    }
                }
            Lb = Zc;
            if (M = 1 > B || m && B < q && this.D < p) this.D += 1;
            fa = qz(this, B + 1, fa, da, Lb, M);
            F.appendChild(fa);
            this.j += 1
        }
        this.b.appendChild(F)
    }
    for (e = 0; e < P(d, 15); e++) m = new es($l(d, 15, e)), p = Q(m, 1), l = Q(m, 2), f = K(k, {
        "class": "gt-def-row"
    }), p = K(k, {
        "class": "gt-kp-desc"
    }, p), q = K("A"), q.setAttribute("href", Q(m, 3)), q.setAttribute(Me,
        "_blank"), m = K(Da, {
        "class": "gt-kp-image"
    }), m.setAttribute("src", l), q.appendChild(m), f.appendChild(q), f.appendChild(p), this.b.appendChild(f);
    g && (this.Ge = g, zv(this, g));
    if (!b && this.j > 1 * a || b && this.j > c) d = MSG_N_MORE_DEFINITIONS_LABEL.replace(ea, this.j - this.D), Av(this, d, MSG_FEWER_DEFINITIONS_LABEL);
    else
        for (d = mk(xc, this.l()), g = 0; g < d.length; g++) a = d[g], J("gt-def-synonym", a) && W(a, xc);
    this.setVisible(!0);
    return !0
};
pz.prototype.ba = function () {
    pz.w.ba.call(this);
    Z(this).K(this.l(), r, this.V)
};
pz.prototype.na = function (a) {
    pz.w.na.call(this, a)
};
var qz = function (a, b, c, d, e, f) {
    var g = aj(a.g) ? ge : xd;
    b = Ms(ir, {
        zk: b,
        qh: a.N,
        Ak: c,
        Lh: d,
        Dm: MSG_SYNONYMS_LOWERCASE,
        Zi: e,
        mh: g,
        vk: a.J,
        Qa: a.Qa
    });
    a.J && D(mk(Bc, b), function (a) {
        this.c.push(a)
    }, a);
    a.Ia.push([J("gt-mt-md", b), c]);
    (c = J("gt-ex-mt", b)) && a.Ia.push([c, d]);
    (d = J("gt-def-synonym-title", b)) && aj(a.Jb) != aj(a.Qa) && (a = aj(a.Jb), Qs(d, Jb, a ? ge : xd), Qs(d, "padding-" + (a ? vd : ee), "8px"));
    return Bv(b, f)
};
pz.prototype.V = function (a) {
    Es(a.target, Bc) && this.dispatchEvent(new N("a", a.target))
};
pz.prototype.Va = function () {
    return this.J ? this.Td() : this.j
};
var sz = function (a, b, c) {
    R.call(this);
    this.target = a;
    this.m = b || a;
    this.g = c || new Os(NaN, NaN, NaN, NaN);
    this.c = ik(a);
    this.a = new yt(this);
    il(this, this.a);
    this.deltaY = this.deltaX = this.L = this.C = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.o = !0;
    this.b = !1;
    this.v = 0;
    O(this.m, [Ye, Ad], this.gh, !1, this);
    this.j = rz
};
C(sz, R);
var rz = y.document && y.document.documentElement && !!y.document.documentElement.setCapture && !!y.document.releaseCapture;
x = sz.prototype;
x.oa = zf("o");
x.T = function () {
    sz.w.T.call(this);
    Nl(this.m, [Ye, Ad], this.gh, !1, this);
    Dt(this.a);
    this.j && this.c.releaseCapture();
    this.m = this.target = null
};
x.gh = function (a) {
    var b = a.type == Ad;
    if (!this.o || this.b || b && !tl(a)) this.dispatchEvent(Mb);
    else {
        if (0 == this.v)
            if (this.dispatchEvent(new tz(Ge, this, a.clientX, a.clientY, a))) this.b = !0, b && a.preventDefault();
            else return;
        else b && a.preventDefault();
        b = this.c;
        var c = b.documentElement,
            d = !this.j;
        this.a.K(b, [Xe, Bd], this.il, {
            capture: d,
            passive: !1
        });
        this.a.K(b, [We, Ed], this.Ne, d);
        this.j ? (c.setCapture(!1), this.a.K(c, "losecapture", this.Ne)) : this.a.K(tk(b), ib, this.Ne);
        this.O && this.a.K(this.O, he, this.D, d);
        this.clientX = this.C =
            a.clientX;
        this.clientY = this.L = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        this.deltaX = this.target.offsetLeft;
        this.deltaY = this.target.offsetTop;
        this.F = sk(jk(this.c).a)
    }
};
x.Ne = function (a, b) {
    Dt(this.a);
    this.j && this.c.releaseCapture();
    this.b ? (this.b = !1, this.dispatchEvent(new tz(Pb, this, a.clientX, a.clientY, a, uz(this, this.deltaX), vz(this, this.deltaY), b || a.type == Ve))) : this.dispatchEvent(Mb)
};
x.il = function (a) {
    if (this.o) {
        var b = a.clientX - this.clientX,
            c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        if (!this.b) {
            var d = this.C - this.clientX,
                e = this.L - this.clientY;
            if (d * d + e * e > this.v)
                if (this.dispatchEvent(new tz(Ge, this, a.clientX, a.clientY, a))) this.b = !0;
                else {
                    this.vc || this.Ne(a);
                    return
                }
        }
        c = wz(this, b, c);
        b = c.b;
        c = c.a;
        this.b && this.dispatchEvent(new tz("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (xz(this, a, b, c), a.preventDefault())
    }
};
var wz = function (a, b, c) {
    var d = sk(jk(a.c).a);
    b += d.b - a.F.b;
    c += d.a - a.F.a;
    a.F = d;
    a.deltaX += b;
    a.deltaY += c;
    return new ck(uz(a, a.deltaX), vz(a, a.deltaY))
};
sz.prototype.D = function (a) {
    var b = wz(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    xz(this, a, b.b, b.a)
};
var xz = function (a, b, c, d) {
        a.target.style.left = c + Yd;
        a.target.style.top = d + Yd;
        a.dispatchEvent(new tz("drag", a, b.clientX, b.clientY, b, c, d))
    },
    uz = function (a, b) {
        var c = a.g;
        a = isNaN(c.left) ? null : c.left;
        c = isNaN(c.width) ? 0 : c.width;
        return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
    },
    vz = function (a, b) {
        var c = a.g;
        a = isNaN(c.top) ? null : c.top;
        c = isNaN(c.height) ? 0 : c.height;
        return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
    },
    tz = function (a, b, c, d, e, f, g) {
        N.call(this, a);
        this.clientX = c;
        this.clientY =
            d;
        this.a = e;
        this.left = z(f) ? f : b.deltaX;
        this.top = z(g) ? g : b.deltaY
    };
C(tz, N);
var yz = function () {
    R.call(this);
    this.Ha = 0;
    this.g = [];
    this.o = [];
    this.J = {};
    this.m = new yt(this);
    this.wa = this.aa = !1;
    this.L = !0
};
C(yz, R);
var zz = new jl("d"),
    Az = new jl("beforedragstart"),
    Bz = new jl("dragstart"),
    Cz = new jl("beforedragmove"),
    Dz = new jl("dragmove"),
    Ez = new jl("beforedragend"),
    Fz = new jl("dragend"),
    Gz = new jl("e");
yz.prototype.D = function (a, b, c, d) {
    a.c = b;
    a.a = d;
    a.g = 0;
    this.g.push(a)
};
yz.prototype.Za = function (a) {
    this.C = Cg(arguments, 0)
};
yz.prototype.T = function () {
    this.m.Da();
    for (var a = 0, b = this.g.length; a < b; a++) {
        var c = this.g[a];
        c.c = void 0;
        c.a = void 0
    }
    this.g.length = 0;
    this.o.length = 0;
    this.J = null;
    Hz(this);
    yz.w.T.call(this)
};
var Iz = function (a, b) {
    for (var c = 0, d = a.g.length; c < d; c++) {
        var e = a.g[c];
        e.ud = jt(e)
    }
    c = 0;
    for (d = a.o.length; c < d; c++) e = a.o[c], e != b && (e.ud = jt(e))
};
x = yz.prototype;
x.ll = function (a) {
    var b = dg(a.currentTarget);
    b = this.J[b];
    if (2 != b.parentElement.g) {
        this.a = b;
        a: {
            b = this.a;
            for (var c = b.cloneNode(!0), d = (b || document).getElementsByTagName(Oa), e = (c || document).getElementsByTagName(Oa), f = 0; f < d.length; f++) e[f].value = d[f].value;
            switch (b.tagName) {
                case "TR":
                    b = K("TABLE", null, K("TBODY", null, c));
                    break a;
                case "TD":
                case "TH":
                    b = K("TABLE", null, K("TBODY", null, K("TR", null, c)));
                    break a;
                case Oa:
                    c.value = b.value;
                default:
                    b = c
            }
        }
        this.b = b;
        this.$ && Fs(this.b, this.$ || []);
        this.b.style.margin = "0";
        this.b.style.position =
            Ua;
        this.b.style.visibility = Rc;
        ik(this.a).body.appendChild(this.b);
        b = Zs(this.a);
        gt(this.b, b);
        this.c = new sz(this.b);
        this.c.v = Math.pow(this.Ha, 2);
        O(this.c, Ge, this.$k, !1, this);
        O(this.c, Pb, this.Yk, !1, this);
        O(this.c, Mb, this.Xf, !1, this);
        this.dispatchEvent(new Jz(zz, this, a, this.a, this.b, this.c));
        this.c.gh(a)
    }
};
x.$k = function (a) {
    if (this.dispatchEvent(new Jz(Az, this, a.a, this.a, null, null))) {
        this.F = this.a.parentNode;
        this.j = this.N = Jk(this.a);
        this.O = this.F;
        this.C ? Fs(this.a, this.C || []) : this.a.style.visibility = Rc;
        var b = it(this.b);
        this.b.o = b.width / 2;
        this.b.j = b.height / 2;
        this.b.style.visibility = "";
        this.L && (this.a.style.display = Ld);
        Iz(this, this.a);
        this.a.style.display = "";
        O(this.c, "drag", this.Zk, !1, this);
        this.dispatchEvent(new Jz(Bz, this, a.a, this.a, this.b, this.c))
    } else a.preventDefault(), this.Xf()
};
x.Zk = function (a) {
    var b = Zs(this.b);
    b = new ck(b.b + this.b.o, b.a + this.b.j);
    a: {
        var c = null;
        if (this.a.style.display != Ld) {
            c = this.a.parentNode;
            var d = jt(c);
            if (Kz(b, d)) break a
        }
        d = 0;
        for (var e = this.g.length; d < e; d++) {
            var f = this.g[d];
            if (f != c && Kz(b, f.ud)) {
                c = f;
                break a
            }
        }
        c = null
    }
    if (c) {
        if (null == c) throw Error("getHoverNextItem_ called with null hoverList.");
        d = 0;
        e = !1;
        f = void 0;
        switch (c.c) {
            case 0:
                d = b.a;
                var g = Lz;
                var l = Mz;
                break;
            case 4:
                e = !0;
            case 2:
                d = b.b;
                g = Nz;
                l = Mz;
                break;
            case 5:
                e = !0;
            case 3:
                d = b.b, g = Oz, l = Pz
        }
        for (var m = null, p, q = Gk(c),
                 F = 0, B = q.length; F < B; F++) {
            var M = q[F];
            if (M != this.a) {
                var fa = g(M.ud);
                if (e) {
                    var da = Qz(M, b);
                    z(f) || (f = da);
                    l(d, fa) && (void 0 == p || da < f || da == f && (l(fa, p) || fa == p)) && (m = M, p = fa);
                    da < f && (f = da)
                } else l(d, fa) && (void 0 == p || l(fa, p)) && (m = M, p = fa)
            }
        }
        g = null !== m && Qz(m, b) > f ? null : m
    } else g = null; if (!this.dispatchEvent(new Jz(Cz, this, a, this.a, this.b, this.c, b, c, g))) return !1;
    if (c && 1 != c.g) this.L ? this.a.parentNode == c && Jk(this.a) == g || c.insertBefore(this.a, g) : this.R(g, b), this.a.style.display = "", c.a && V(c, c.a);
    else
        for (this.wa || (this.a.style.display =
            Ld), l = 0, p = this.g.length; l < p; l++) d = this.g[l], d.a && W(d, d.a);
    c != this.O && (this.O = c, Iz(this, this.a));
    this.dispatchEvent(new Jz(Dz, this, a, this.a, this.b, this.c, b, c, g));
    return !1
};
x.Xf = function () {
    Hz(this);
    this.c = this.b = this.N = this.F = this.O = this.a = null;
    for (var a = 0, b = this.g.length; a < b; a++) this.g[a].ud = null;
    a = 0;
    for (b = this.o.length; a < b; a++) this.o[a].ud = null
};
x.Yk = function (a) {
    if (!this.dispatchEvent(new Jz(Ez, this, a, this.a, this.b, this.c))) return !1;
    this.L || this.ra();
    Hz(this);
    this.dispatchEvent(new Jz(Fz, this, a, this.a, this.b, this.c));
    this.Xf();
    return !0
};
var Hz = function (a) {
    hl(a.c);
    var b = a.b && a.b.parentElement;
    a.b && Fk(a.b);
    a.a && a.a.style.display == Ld && (a.F.insertBefore(a.a, a.N), a.a.style.display = "");
    a.C && a.a ? Gs(a.a, a.C || []) : a.a && (a.a.style.visibility = "");
    for (var c = 0, d = a.g.length; c < d; c++) {
        var e = a.g[c];
        e.a && W(e, e.a)
    }
    b && a.dispatchEvent(new Jz(Gz, a, null, a.a, a.b, a.c))
};
yz.prototype.Xa = function (a) {
    Fs(a.currentTarget, this.X || [])
};
yz.prototype.Ra = function (a) {
    Gs(a.currentTarget, this.X || [])
};
yz.prototype.Ma = function (a) {
    Fs(a.currentTarget, this.ia || [])
};
yz.prototype.Ia = function (a) {
    Gs(a.currentTarget, this.ia || [])
};
var Kz = function (a, b) {
    return a.b > b.left && a.b < b.left + b.width && a.a > b.top && a.a < b.top + b.height
};
yz.prototype.R = function (a) {
    a && (this.j = a)
};
yz.prototype.ra = function () {
    this.F.insertBefore(this.a, this.j)
};
var Qz = function (a, b) {
        a = a.ud;
        return Math.abs(b.a - (a.top + (a.height - 1) / 2))
    },
    Lz = function (a) {
        return a.top + a.height - 1
    },
    Nz = function (a) {
        return a.left + a.width - 1
    },
    Oz = function (a) {
        return a.left || 0
    },
    Mz = function (a, b) {
        return a < b
    },
    Pz = function (a, b) {
        return a > b
    },
    Jz = function (a, b, c) {
        N.call(this, a);
        this.a = c
    };
C(Jz, N);
var Rz = function (a, b) {
    yz.call(this);
    this.ma = null != a ? a : "";
    this.ea = null != b ? b : "";
    this.L = !1;
    this.v = null;
    this.V = new yt(this)
};
C(Rz, yz);
Rz.prototype.D = function (a, b, c, d) {
    Rz.w.D.call(this, a, b, c, d);
    this.V.K(this, Az, this.Ca)
};
Rz.prototype.Ca = function (a) {
    var b = sk(document);
    this.c.deltaX = a.a.clientX + b.b;
    this.c.deltaY = a.a.clientY + b.a
};
Rz.prototype.ra = function () {
    this.v && (1 == this.v ? Ek(this.a, this.j) : Dk(this.a, this.j));
    Sz(this, !1)
};
Rz.prototype.R = function (a, b) {
    Sz(this, !1);
    Rz.w.R.call(this, a, b);
    Sz(this, !0, b)
};
var Sz = function (a, b, c) {
    null != a.j && (b && c ? (b = jt(a.j), c = ek(new ck(b.left + b.width / 2, b.top + b.height / 2), c), b = 0 == a.F.c, a.v = 0 > c.a && b || 0 > c.b && !b ? 1 : 2, 1 == a.v ? V(a.j, a.ea) : V(a.j, a.ma)) : (W(a.j, a.ea), W(a.j, a.ma), a.v = null))
};
Rz.prototype.T = function () {
    this.V.Da();
    Rz.w.T.call(this)
};
var Tz = u();
Tz.prototype.o = w("");
var Uz = function (a, b, c, d, e) {
    this.g = a;
    this.j = b;
    this.c = c;
    this.a = [];
    for (a = 0; a < d.length; ++a) this.a.push(d[a].toLowerCase());
    this.b = [];
    for (a = 0; a < e.length; ++a) this.b.push(e[a].toLowerCase())
};
C(Uz, Tz);
Uz.prototype.o = function (a, b, c, d) {
    if ("" != this.c && this.c != c) return "";
    c = Vz(a, b, d, this.g, this.j, this.a, this.b);
    return "" != c ? c : Vz(a, b, d, this.j, this.g, this.b, this.a)
};
var Vz = function (a, b, c, d, e, f, g) {
    if (a == d && b == e)
        for (a = 0; a < P(c, 0); a++) {
            b = js(c, a);
            d = Q(b, 1).toLowerCase();
            if (0 <= lg(f, d)) return d;
            b = b.kb().toLowerCase();
            if (0 <= lg(g, b)) return b
        }
    return ""
};
var Wz = [{
    za: new Uz(t, Nb, t, ["\u0434\u0430\u043c\u0430", "\u0441\u043e\u0431\u0430\u043a\u0430", "\u0441\u043e\u0431\u0430\u0447\u043a\u0430", "\u0434\u0430\u043c\u0430 \u0441 \u0441\u043e\u0431\u0430\u0447\u043a\u043e\u0439"], ["lady", "dog", "dog", "lady with a dog"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/annasergeevna.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u043c\u0438\u043b\u044b\u0439", "\u0433\u0440\u0435\u0448\u043d\u0438\u043a", "\u0433\u0440\u0435\u0445", "\u0433\u0440\u0435\u0448\u043d\u0438\u0446\u0430"], ["sweet", "sinner", "sin", "sinner"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/annasergeevna_type.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0447\u0435\u043b\u043e\u0432\u0435\u043a", "\u0444\u0443\u0442\u043b\u044f\u0440", "\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0430", "\u0441\u043a\u043e\u0440\u043b\u0443\u043f\u0430"], ["man", "case", "shell", "shell"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/belikov.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u043d\u0435\u0442"], ["no"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/belikov_callout.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0441\u0435\u0441\u0442\u0440\u0430", "\u0442\u0440\u0438 \u0441\u0435\u0441\u0442\u0440\u044b"], ["sister", "three sisters"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_1.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0434\u043e\u043c", "\u043c\u0435\u0437\u043e\u043d\u0438\u043d", "\u0434\u043e\u043c \u0441 \u043c\u0435\u0437\u043e\u043d\u0438\u043d\u043e\u043c"], ["house",
        "mezzanine", "house with mezzanine"
    ]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_2.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0437\u043b\u043e\u0439", "\u043c\u0430\u043b\u044c\u0447\u0438\u043a", "\u0437\u043b\u043e\u0439 \u043c\u0430\u043b\u044c\u0447\u0438\u043a"], ["evil", "boy", "evil boy"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_3.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u043d\u0435\u0432\u0435\u0441\u0442\u0430"], ["bride"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_4.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0441\u043a\u0443\u0447\u043d\u044b\u0439", "\u0441\u043a\u0443\u043a\u0430", "\u0441\u043a\u0443\u0447\u043d\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f"], ["boring", "boredom", "boring story"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_5.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0446\u0432\u0435\u0442\u044b", "\u0437\u0430\u043f\u043e\u0437\u0434\u0430\u043b\u044b\u0439", "\u0446\u0432\u0435\u0442\u044b \u0437\u0430\u043f\u043e\u0437\u0434\u0430\u043b\u044b\u0435",
        "\u043f\u043e\u0437\u0434\u043d\u043e", "\u043f\u043e\u0437\u0434\u043d\u0438\u0439"
    ], ["flowers", "belated", "belated flowers", "late"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/chekhov_6.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u043e\u0432\u0440\u0430\u0433", "\u0432 \u043e\u0432\u0440\u0430\u0433\u0435"], ["ravine", "in a ravine"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/grigoiriytsibukin.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u044f \u043d\u0435 \u0437\u043d\u0430\u044e"], ["i do not know"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/grigoiriytsibukin_callout.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0446\u0438\u043d\u0438\u043a", "\u0446\u0438\u043d\u0438\u0437\u043c"], ["cynic", "cynism"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/grigoiriytsibukin_type.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, "\u0432\u043a\u0443\u0441\u043d\u043e \u043a\u043b\u0443\u0431\u043d\u0438\u043a\u0430 \u044f\u0433\u043e\u0434\u0430 \u0444\u0440\u0443\u043a\u0442 \u0430\u0440\u0431\u0443\u0437 \u0435\u0434\u0430".split(" "),
        "tasty strawberry berry fruit watermelon food".split(" ")),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/gurov.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u043f\u0440\u0438\u044f\u0442\u043d\u043e\u0433\u043e \u0430\u043f\u043f\u0435\u0442\u0438\u0442\u0430"], ["bon appetit"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/gurov_callout.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u043f\u0440\u043e\u0441\u0432\u0435\u0442\u0432\u043b\u0435\u043d\u043d\u044b\u0439"], ["enlightened"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/gurov_type.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0442\u043e\u0441\u043a\u0430", "\u0433\u0440\u0443\u0441\u0442\u044c", "\u043f\u0435\u0447\u0430\u043b\u044c", "\u043f\u0435\u0447\u0430\u043b\u044c", "\u043f\u0435\u0447\u0430\u043b\u044c\u043d\u044b\u0439"], ["yearning", "sorrow", "sadness", "sadness", "sad"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/iona.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0436\u0435\u0440\u0442\u0432\u0430", "\u0441\u0442\u0440\u0430\u0434\u0430\u0442\u044c",
        "\u0441\u0442\u0440\u0430\u0434\u0430\u043b\u0438\u0446\u0430", "\u0441\u0442\u0440\u0430\u0434\u0430\u043b\u0435\u0446", "\u0432\u0435\u0447\u043d\u044b\u0439"
    ], ["victim", "suffer", "sufferer", "eternal"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/iona_type.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0447\u0430\u0439\u043a\u0430", "\u043f\u0442\u0438\u0446\u0430"], ["seagull", "bird"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/konstantintreplev.gif"
    },
    xa: !0
}, {
    za: new Uz(t,
        Nb, t, ["\u0441\u0442\u0440\u0430\u043d\u043d\u0438\u043a", "\u0431\u0440\u043e\u0434\u044f\u0433\u0430"], ["wanderer", "tramp"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/konstantintreplev_type.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0440\u043e\u0437\u0430", "\u0433\u043e\u0434", "\u0442\u0440\u0438 \u0433\u043e\u0434\u0430"], ["rose", "year", "three years"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/laptev.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, "\u043b\u044e\u0431\u043b\u044e;\u043b\u044e\u0431\u0438\u0442\u044c;\u044f \u0442\u0435\u0431\u044f \u043b\u044e\u0431\u043b\u044e;\u043b\u044e\u0431\u043e\u0432\u044c;\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f;\u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f".split(";"),
        "love;love;i love you;love;artist;please".split(";")),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/laptev_callout.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0440\u043e\u043c\u0430\u043d\u0442\u0438\u043a", "\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439"], ["romantic", "latest"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/laptev_type.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0431\u0438\u0437\u043d\u0435\u0441", "\u0434\u0435\u043b\u043e", "\u0432\u0438\u0448\u043d\u044f",
        "\u0441\u0430\u0434", "\u0432\u0438\u0448\u043d\u0435\u0432\u044b\u0439 \u0441\u0430\u0434"
    ], [kb, kb, "cherry", "garden", "the cherry orchard"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/lopakhin.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0434\u0430"], ["yes"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/lopakhin_callout.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0440\u0430\u0431\u043e\u0442\u0430"], ["work"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/lopakhin_type.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0436\u0438\u0437\u043d\u044c", "\u043c\u043e\u044f \u0436\u0438\u0437\u043d\u044c"], ["life", "my life"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/masha.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, "\u043f\u0440\u0438\u0432\u0435\u0442;\u0434\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c;\u0434\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440;\u0434\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e;\u0437\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439;\u0437\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435;\u043a\u0430\u043a \u0434\u0435\u043b\u0430;\u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0448\u044c;\u0447\u0442\u043e \u043d\u043e\u0432\u043e\u0433\u043e;\u043a\u0430\u043a \u0436\u0438\u0437\u043d\u044c;\u043a\u0430\u043a \u0442\u044b".split(";"),
        "hello;good afternoon;good evening;good morning;how are you;what are you doing;what's new;what's up".split(";")),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/masha_callout.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0445\u0438\u0449\u043d\u0438\u043a", "\u0432\u0430\u043c\u043f\u0438\u0440", "\u043e\u0445\u043e\u0442\u0430"], ["predator", "vampire", "hunting"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/masha_type.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, "\u043a\u043d\u0438\u0433\u0430 \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u0430\u0441\u0441\u043a\u0430\u0437 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0430 \u0430\u0432\u0442\u043e\u0440 \u043f\u0438\u0441\u0430\u0442\u0435\u043b\u044c \u043f\u044c\u0435\u0441\u0430".split(" "), ["book", "literature", "composition", Uc, "story", "art", "classic", "author", "writer", Wd]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/petyatrofimov_callout.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0441\u0442\u0443\u0434\u0435\u043d\u0442", "\u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043a\u0430"], ["student", "student"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/petyatrofimov_type.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, "\u043f\u0430\u043b\u0430\u0442\u0430;\u043f\u0430\u043b\u0430\u0442\u0430 \u21166;\u043f\u0441\u0438\u0445\u0438\u0430\u0442\u0440\u0438\u044f;\u043f\u0441\u0438\u0445\u0438\u0430\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0431\u043e\u043b\u044c\u043d\u0438\u0446\u0430;\u043f\u0441\u0438\u0445\u0443\u0448\u043a\u0430;\u0431\u043e\u043b\u044c\u043d\u0438\u0446\u0430;\u0434\u0443\u0440\u0434\u043e\u043c".split(";"),
        "ward;ward No6;psychiatry;mental hospital;nuthouse;hospital;loony bin".split(";")),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/ragin.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u043f\u043e\u0431\u0435\u0436\u0434\u0435\u043d\u043d\u044b\u0439", "\u043f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u0435", "\u043f\u0440\u043e\u0438\u0433\u0440\u044b\u0448"], ["defeated", "defeat", "loss"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/ragin_type.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0434\u044f\u0434\u044f"], ["uncle"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/sonya.gif"
    },
    xa: !0
}, {
    za: new Uz(t, Nb, t, ["\u0430\u043b\u044c\u0442\u0440\u0443\u0438\u0441\u0442", "\u0434\u043e\u0431\u0440\u043e", "\u0445\u043e\u0440\u043e\u0448\u0438\u0439"], ["altruist", "good", "good"]),
    target: Wc,
    ya: Da,
    attributes: {
        src: "//ssl.gstatic.com/translate/ee/sonya_type.gif"
    },
    xa: !0
}];
var Xz = function (a) {
    yv.call(this, a, "ee", "", "", 12);
    this.Rf = !0
};
C(Xz, yv);
var Yz = [];
Xz.prototype.update = function (a, b, c, d) {
    Xz.w.update.call(this, a, b, c, d);
    Ck(this.b);
    var e = Yz;
    EGGS_RU_CHEKHOV && (e = e.concat(Wz));
    for (var f = 0; f < e.length; f++) {
        a = e[f];
        var g = a.za.o(b, c, this.Jb, d);
        if ("" != g) return c = b = Ms(jr), a.target && (d = a.target, a.xa && (d += g), g = Ms(kr, {
            Qg: d
        }), c.appendChild(g), c = g), c.appendChild(K.apply(null, [a.ya, a.attributes])), this.b.appendChild(b), this.setVisible(!0), !0
    }
    return !1
};
Xz.prototype.fh = function () {
    this.v && L(this.v, "")
};
var $z = function (a) {
        Zz();
        return Lj(a, null)
    },
    aA = function (a) {
        Zz();
        return Dj(a)
    },
    bA = function (a) {
        Zz();
        return fj(a)
    },
    Zz = Vf;
var cA = function (a, b, c) {
    var d = "ex";
    null != c && c && (d = "m" + d);
    this.N = b;
    yv.call(this, a, d, MSG_EXAMPLES_OF, MSG_EXAMPLES, 9);
    this.j = new Tr;
    this.J = this.D = xd
};
C(cA, yv);
cA.prototype.update = function (a, b, c, d) {
    cA.w.update.call(this, a, b, c, d);
    Ck(this.b);
    this.j = new Tr(d.data[13]);
    if (0 == P(this.j, 0)) return !1;
    this.setVisible(!0);
    3 <= P(this.j, 0) && (a = MSG_N_MORE_EXAMPLES_LABEL.replace(ea, P(this.j, 0) - 1), Av(this, a, MSG_FEWER_EXAMPLES_LABEL));
    this.D = aj(this.Qa) ? ge : xd;
    this.J = aj(this.g) ? ge : xd;
    for (a = 0; a < P(this.j, 0); ++a) {
        b = 0 == a || 1 == a && 2 == P(this.j, 0);
        c = new Sr($l(this.j, 0, a));
        d = Q(c, 1);
        var e = Q(c, 2),
            f = MSG_MT_FROM_GOOGLE;
        c = Ms(dr, {
            zm: this.D,
            Vi: $z(Q(c, 0)),
            Qg: e,
            Ll: d,
            mh: this.J,
            Rm: f,
            xm: this.N
        });
        b = Bv(c, b);
        this.b.appendChild(b)
    }
    return !0
};
cA.prototype.jj = function () {
    var a = {};
    a.total = P(this.j, 0);
    return a
};
cA.prototype.Va = function () {
    return P(this.j, 0)
};
var dA = u();
Wf(dA);
var eA = function (a) {
        a: {
            var b = a.changedTouches[0];
            switch (a.type) {
                case Ye:
                    var c = Ad;
                    break;
                case Xe:
                    c = Bd;
                    break;
                case We:
                    c = Ed;
                    break;
                default:
                    b = null;
                    break a
            }
            var d = document.createEvent("MouseEvent");
            d.initMouseEvent(c, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
            b = d
        }
        null != b && (a.changedTouches[0].target.dispatchEvent(b), a.preventDefault())
    },
    fA = gi || hi || ii,
    gA = function (a, b) {
        fA && (b.addEventListener(Ye, eA, !0), b.addEventListener(Xe, eA, !0), b.addEventListener(We, eA, !0), b.addEventListener(Ve,
            eA, !0))
    };
var hA = zf("b");
Wf(hA);
var iA = function (a, b) {
    a && (a.tabIndex = b ? 0 : -1)
};
hA.prototype.o = function (a) {
    return a.a.b(k, jA(this, a).join(" "))
};
hA.prototype.g = yf();
hA.prototype.a = function (a) {
    return a.tagName == k
};
hA.prototype.Y = function (a, b) {
    b.id && It(a, b.id);
    var c = this.Z(),
        d = !1,
        e = Ds(b);
    e && D(e, function (b) {
        b == c ? d = !0 : b && (b == c + ja ? a.oa(!1) : b == c + "-horizontal" ? kA(a, Vc) : b == c + "-vertical" && kA(a, mf))
    }, this);
    d || V(b, c);
    lA(this, a, this.g(b));
    return b
};
var lA = function (a, b, c) {
    if (c)
        for (var d = c.firstChild, e; d && d.parentNode == c;) {
            e = d.nextSibling;
            if (1 == d.nodeType) {
                var f = a.c(d);
                f && (f.H = d, b.isEnabled() || f.oa(!1), b.Ta(f), f.Y(d))
            } else d.nodeValue && "" != Lg(d.nodeValue) || c.removeChild(d);
            d = e
        }
};
hA.prototype.c = function (a) {
    a: {
        a = Ds(a);
        for (var b = 0, c = a.length; b < c; b++) {
            var d = a[b];
            if (d = d in qu ? qu[d]() : null) {
                a = d;
                break a
            }
        }
        a = null
    }
    return a
};
hA.prototype.j = function (a) {
    a = a.l();
    qt(a, !0, Lh);
    G && (a.hideFocus = !0);
    var b = this.b;
    b && ys(a, b)
};
hA.prototype.Z = w("goog-container");
var jA = function (a, b) {
        a = a.Z();
        var c = [a, b.kd == Vc ? a + "-horizontal" : a + "-vertical"];
        b.isEnabled() || c.push(a + ja);
        return c
    },
    mA = w(mf);
var nA = function (a, b, c) {
    Y.call(this, c);
    this.Dc = b || hA.M();
    this.kd = a || mA()
};
C(nA, Y);
x = nA.prototype;
x.Dd = null;
x.Yd = null;
x.Dc = null;
x.kd = null;
x.Ec = !0;
x.Pc = !0;
x.Zc = !0;
x.Ea = -1;
x.$a = null;
x.Hc = !1;
x.uc = null;
var oA = function (a) {
        return a.Dd || a.l()
    },
    rA = function (a, b) {
        if (a.Zc) {
            var c = oA(a),
                d = a.Ba;
            a.Dd = b;
            var e = oA(a);
            d && (a.Dd = c, pA(a, !1), a.Dd = b, St(qA(a), e), pA(a, !0))
        } else throw Error("Can't set key event target for container that doesn't support keyboard focus!");
    },
    qA = function (a) {
        return a.Yd || (a.Yd = new Tt(oA(a)))
    };
x = nA.prototype;
x.Aa = function () {
    this.H = this.Dc.o(this)
};
x.Yb = function () {
    return this.Dc.g(this.l())
};
x.xd = function (a) {
    return this.Dc.a(a)
};
x.na = function (a) {
    this.H = this.Dc.Y(this, a);
    a.style.display == Ld && (this.Ec = !1)
};
x.ba = function () {
    nA.w.ba.call(this);
    Mt(this, function (a) {
        a.Ba && sA(this, a)
    }, this);
    var a = this.l();
    this.Dc.j(this);
    this.setVisible(this.Ec, !0);
    Z(this).K(this, "enter", this.Cg).K(this, Tc, this.Wd).K(this, jf, this.sg).K(this, "open", this.jl).K(this, "close", this.Nk).K(a, pl.Od, this.eb).K(ik(a), [pl.Pd, pl.Nd], this.Xk).K(a, [pl.Od, pl.Pd, pl.Nd, Dd, Cd, yb], this.Qk);
    this.Zc && pA(this, !0)
};
var pA = function (a, b) {
    var c = Z(a),
        d = oA(a);
    b ? c.K(d, Sb, a.Xh).K(d, ib, a.$e).K(qA(a), nd, a.Wa) : c.Ga(d, Sb, a.Xh).Ga(d, ib, a.$e).Ga(qA(a), nd, a.Wa)
};
x = nA.prototype;
x.tb = function () {
    this.sc(-1);
    this.$a && this.$a.Ua(!1);
    this.Hc = !1;
    nA.w.tb.call(this)
};
x.T = function () {
    nA.w.T.call(this);
    this.Yd && (this.Yd.Da(), this.Yd = null);
    this.Dc = this.$a = this.uc = this.Dd = null
};
x.Cg = w(!0);
x.Wd = function (a) {
    var b = Qt(this, a.target);
    if (-1 < b && b != this.Ea) {
        var c = tA(this);
        c && Au(c, !1);
        this.Ea = b;
        c = tA(this);
        this.Hc && zu(c, !0);
        this.$a && c != this.$a && (ju(c, 64) ? c.Ua(!0) : this.$a.Ua(!1))
    }
    b = this.l();
    null != a.target.l() && zs(b, Wa, a.target.l().id)
};
x.sg = function (a) {
    a.target == tA(this) && (this.Ea = -1);
    this.l().removeAttribute(ab)
};
x.jl = function (a) {
    (a = a.target) && a != this.$a && a.getParent() == this && (this.$a && this.$a.Ua(!1), this.$a = a)
};
x.Nk = function (a) {
    a.target == this.$a && (this.$a = null);
    var b = this.l(),
        c = a.target.l();
    b && a.target.Oa(2) && c && Cs(b, c)
};
x.eb = function (a) {
    this.Pc && (this.Hc = !0);
    var b = oA(this);
    b && Xk(b) && Yk(b) ? b.focus() : a.preventDefault()
};
x.Xk = function () {
    this.Hc = !1
};
x.Qk = function (a) {
    a: {
        var b = a.target;
        if (this.uc)
            for (var c = this.l(); b && b !== c;) {
                var d = b.id;
                if (d in this.uc) {
                    b = this.uc[d];
                    break a
                }
                b = b.parentNode
            }
        b = null
    }
    if (b) switch (a.type) {
        case pl.Od:
            b.eb(a);
            break;
        case pl.Pd:
        case pl.Nd:
            b.vb(a);
            break;
        case Dd:
            b.xg(a);
            break;
        case Cd:
            b.Eg(a);
            break;
        case yb:
            b.ae(a)
    }
};
x.Xh = u();
x.$e = function () {
    this.sc(-1);
    this.Hc = !1;
    this.$a && this.$a.Ua(!1)
};
x.Wa = function (a) {
    return this.isEnabled() && this.isVisible() && (0 != Nt(this) || this.Dd) && this.Xd(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
x.Xd = function (a) {
    var b = tA(this);
    if (b && typeof b.Wa == Wb && b.Wa(a) || this.$a && this.$a != b && typeof this.$a.Wa == Wb && this.$a.Wa(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.keyCode) {
        case 27:
            if (this.Zc) oA(this).blur();
            else return !1;
            break;
        case 36:
            uA(this);
            break;
        case 35:
            vA(this);
            break;
        case 38:
            if (this.kd == mf) wA(this);
            else return !1;
            break;
        case 37:
            if (this.kd == Vc) Pt(this) ? xA(this) : wA(this);
            else return !1;
            break;
        case 40:
            if (this.kd == mf) xA(this);
            else return !1;
            break;
        case 39:
            if (this.kd == Vc) Pt(this) ?
                wA(this) : xA(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};
var sA = function (a, b) {
    var c = b.l();
    c = c.id || (c.id = Ht(b));
    a.uc || (a.uc = {});
    a.uc[c] = b
};
nA.prototype.Ta = function (a, b) {
    nA.w.Ta.call(this, a, b)
};
nA.prototype.Xc = function (a, b, c) {
    a.ge |= 2;
    a.ge |= 64;
    a.Pa(32, !1);
    vu(a, !1);
    var d = a.getParent() == this ? Qt(this, a) : -1;
    nA.w.Xc.call(this, a, b, c);
    a.Ba && this.Ba && sA(this, a);
    a = d; - 1 == a && (a = Nt(this));
    a == this.Ea ? this.Ea = Math.min(Nt(this) - 1, b) : a > this.Ea && b <= this.Ea ? this.Ea++ : a < this.Ea && b > this.Ea && this.Ea--
};
nA.prototype.removeChild = function (a, b) {
    if (a = Pf(a) ? Jt(this, a) : a) {
        var c = Qt(this, a); - 1 != c && (c == this.Ea ? (Au(a, !1), this.Ea = -1) : c < this.Ea && this.Ea--);
        var d = a.l();
        d && d.id && this.uc && (c = this.uc, d = d.id, d in c && delete c[d])
    }
    a = nA.w.removeChild.call(this, a, b);
    vu(a, !0);
    return a
};
var kA = function (a, b) {
    if (a.l()) throw Error(za);
    a.kd = b
};
nA.prototype.isVisible = v("Ec");
nA.prototype.setVisible = function (a, b) {
    if (b || this.Ec != a && this.dispatchEvent(a ? se : Sc)) {
        this.Ec = a;
        var c = this.l();
        c && (X(c, a), this.Zc && iA(oA(this), this.Pc && this.Ec), b || this.dispatchEvent(this.Ec ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
nA.prototype.isEnabled = v("Pc");
nA.prototype.oa = function (a) {
    this.Pc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Pc = !0, Mt(this, function (a) {
        a.tj ? delete a.tj : a.oa(!0)
    })) : (Mt(this, function (a) {
        a.isEnabled() ? a.oa(!1) : a.tj = !0
    }), this.Hc = this.Pc = !1), this.Zc && iA(oA(this), a && this.Ec))
};
var yA = function (a, b) {
    b != a.Zc && a.Ba && pA(a, b);
    a.Zc = b;
    a.Pc && a.Ec && iA(oA(a), b)
};
nA.prototype.sc = function (a) {
    (a = Ot(this, a)) ? Au(a, !0): -1 < this.Ea && Au(tA(this), !1)
};
var tA = function (a) {
        return Ot(a, a.Ea)
    },
    uA = function (a) {
        zA(a, function (a, c) {
            return (a + 1) % c
        }, Nt(a) - 1)
    },
    vA = function (a) {
        zA(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, 0)
    },
    xA = function (a) {
        zA(a, function (a, c) {
            return (a + 1) % c
        }, a.Ea)
    },
    wA = function (a) {
        zA(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, a.Ea)
    },
    zA = function (a, b, c) {
        c = 0 > c ? Qt(a, a.$a) : c;
        var d = Nt(a);
        c = b.call(a, c, d);
        for (var e = 0; e <= d;) {
            var f = Ot(a, c);
            if (f && a.Ch(f)) {
                a.sc(c);
                break
            }
            e++;
            c = b.call(a, c, d)
        }
    };
nA.prototype.Ch = function (a) {
    return a.isVisible() && a.isEnabled() && ju(a, 2)
};
var AA = u();
C(AA, $t);
Wf(AA);
AA.prototype.Z = w(hc);
var BA = function (a, b, c) {
    tu.call(this, a, c || AA.M(), b);
    this.Pa(1, !1);
    this.Pa(2, !1);
    this.Pa(4, !1);
    this.Pa(32, !1);
    this.Rc = 1
};
C(BA, tu);
ru(hc, function () {
    return new BA(null)
});
var CA = function () {
    this.g = []
};
C(CA, $t);
Wf(CA);
var DA = function (a, b) {
    var c = a.g[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.Z() + "-highlight";
                break;
            case 1:
                c = a.Z() + "-checkbox";
                break;
            case 2:
                c = a.Z() + ia
        }
        a.g[b] = c
    }
    return c
};
x = CA.prototype;
x.oc = w(zd);
x.bb = function (a) {
    var b = a.a.b(k, eu(this, a).join(" "), EA(this, a.Ja(), a.a));
    FA(this, a, b, ju(a, 8) || ju(a, 16));
    return b
};
x.Fb = function (a) {
    return a && a.firstChild
};
x.Y = function (a, b) {
    var c = Ik(b),
        d = DA(this, 2);
    c && Es(c, d) || b.appendChild(EA(this, b.childNodes, a.a));
    Es(b, lc) && (a.Pa(16, !0), a && b && FA(this, a, b, !0));
    return CA.w.Y.call(this, a, b)
};
x.Zb = function (a, b) {
    var c = this.Fb(a),
        d = GA(this, a) ? c.firstChild : null;
    CA.w.Zb.call(this, a, b);
    d && !GA(this, a) && c.insertBefore(d, c.firstChild || null)
};
var EA = function (a, b, c) {
        a = DA(a, 2);
        return c.b(k, a, b)
    },
    GA = function (a, b) {
        return (b = a.Fb(b)) ? (b = b.firstChild, a = DA(a, 1), !!b && Kk(b) && Es(b, a)) : !1
    },
    FA = function (a, b, c, d) {
        iu(a, c, b.Zd());
        ku(a, b, c);
        d != GA(a, c) && (Hs(c, lc, d), c = a.Fb(c), d ? (a = DA(a, 1), c.insertBefore(b.a.b(k, a), c.firstChild || null)) : c.removeChild(c.firstChild))
    };
CA.prototype.a = function (a) {
    switch (a) {
        case 2:
            return DA(this, 0);
        case 16:
        case 8:
            return mc;
        default:
            return CA.w.a.call(this, a)
    }
};
CA.prototype.c = function (a) {
    var b = DA(this, 0);
    switch (a) {
        case mc:
            return 16;
        case b:
            return 2;
        default:
            return CA.w.c.call(this, a)
    }
};
CA.prototype.Z = w("goog-menuitem");
var HA = function (a, b, c, d) {
    tu.call(this, a, d || CA.M(), c);
    this.ia = b
};
C(HA, tu);
x = HA.prototype;
x.W = function () {
    var a = this.ia;
    return null != a ? a : this.ab()
};
x.Pa = function (a, b) {
    HA.w.Pa.call(this, a, b);
    switch (a) {
        case 8:
            this.Ya() && !b && this.Sa(!1);
            (a = this.l()) && this && a && FA(this.c, this, a, b);
            break;
        case 16:
            (a = this.l()) && this && a && FA(this.c, this, a, b)
    }
};
x.ab = function () {
    var a = this.Ja();
    return Yf(a) ? (a = ng(a, function (a) {
        return Kk(a) && (Es(a, "goog-menuitem-accel") || Es(a, "goog-menuitem-mnemonic-separator")) ? "" : al(a)
    }).join(""), Kg(a)) : HA.w.ab.call(this)
};
x.vb = function (a) {
    var b = this.getParent();
    if (b) {
        var c = b.$;
        b.$ = null;
        if (b = c && Qf(a.clientX)) b = new ck(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.b == b.b && c.a == b.a : !1;
        if (b) return
    }
    HA.w.vb.call(this, a)
};
x.cd = function (a) {
    return a.keyCode == this.zi && this.Ic(a) ? !0 : HA.w.cd.call(this, a)
};
x.Lk = v("zi");
ru("goog-menuitem", function () {
    return new HA(null)
});
HA.prototype.Zd = function () {
    return ju(this, 16) ? "menuitemcheckbox" : ju(this, 8) ? "menuitemradio" : HA.w.Zd.call(this)
};
HA.prototype.getParent = function () {
    return tu.prototype.getParent.call(this)
};
HA.prototype.Re = function () {
    return tu.prototype.Re.call(this)
};
var IA = u();
C(IA, $t);
Wf(IA);
IA.prototype.bb = function (a) {
    return a.a.b(k, this.Z())
};
IA.prototype.Y = function (a, b) {
    b.id && It(a, b.id);
    if ("HR" == b.tagName) {
        var c = b;
        b = this.bb(a);
        Dk(b, c);
        Fk(c)
    } else V(b, this.Z());
    return b
};
IA.prototype.Zb = u();
IA.prototype.Z = w(kc);
var JA = function (a, b) {
    tu.call(this, null, a || IA.M(), b);
    this.Pa(1, !1);
    this.Pa(2, !1);
    this.Pa(4, !1);
    this.Pa(32, !1);
    this.Rc = 1
};
C(JA, tu);
JA.prototype.ba = function () {
    JA.w.ba.call(this);
    ys(this.l(), me)
};
ru(kc, function () {
    return new JA
});
var KA = function (a) {
    this.b = a || "menu"
};
C(KA, hA);
Wf(KA);
KA.prototype.a = function (a) {
    return "UL" == a.tagName || KA.w.a.call(this, a)
};
KA.prototype.c = function (a) {
    return "HR" == a.tagName ? new JA : KA.w.c.call(this, a)
};
KA.prototype.Z = w(fc);
KA.prototype.j = function (a) {
    KA.w.j.call(this, a);
    zs(a.l(), Oc, hf)
};
var LA = function (a) {
    JA.call(this, IA.M(), a)
};
C(LA, JA);
ru(kc, function () {
    return new JA
});
var MA = function (a, b) {
    nA.call(this, mf, b || KA.M(), a);
    yA(this, !1)
};
C(MA, nA);
MA.prototype.J = !0;
MA.prototype.Z = function () {
    return this.Dc.Z()
};
var NA = function (a, b) {
    if (Mk(a.l(), b)) return !0;
    for (var c = 0, d = Nt(a); c < d; c++) {
        var e = Ot(a, c);
        if (typeof e.zg == Wb && e.zg(b)) return !0
    }
    return !1
};
x = MA.prototype;
x.Va = function () {
    return Nt(this)
};
x.setVisible = function (a, b, c) {
    (b = MA.w.setVisible.call(this, a, b)) && a && this.Ba && this.J && oA(this).focus();
    a && c && Qf(c.clientX) ? this.$ = new ck(c.clientX, c.clientY) : this.$ = null;
    return b
};
x.Cg = function (a) {
    this.J && oA(this).focus();
    return MA.w.Cg.call(this, a)
};
x.li = function (a) {
    var b = new RegExp("^" + bh(a), "i");
    zA(this, function (a, d) {
        var c = 0 > a ? 0 : a,
            f = !1;
        do {
            ++a;
            a == d && (a = 0, f = !0);
            var g = Ot(this, a).ab();
            if (g && g.match(b)) return a
        } while (!f || a != c);
        return this.Ea
    }, this.Ea)
};
x.Ch = function (a) {
    return a.isEnabled() && a.isVisible() && ju(a, 2)
};
x.na = function (a) {
    for (var b = this.Dc, c = kk(this.a.a, k, b.Z() + ia, a), d = c.length, e = 0; e < d; e++) lA(b, this, c[e]);
    MA.w.na.call(this, a)
};
x.Xd = function (a) {
    var b = MA.w.Xd.call(this, a);
    b || Mt(this, function (c) {
        !b && c.Lk && c.zi == a.keyCode && (this.isEnabled() && this.sc(Qt(this, c)), b = c.Wa(a))
    }, this);
    return b
};
x.sc = function (a) {
    MA.w.sc.call(this, a);
    (a = Ot(this, a)) && ct(a.l(), this.l())
};
var OA = function (a, b, c) {
    HA.call(this, a, b, c);
    this.Pa(8, !0)
};
C(OA, HA);
OA.prototype.Ic = function () {
    return this.dispatchEvent(n)
};
ru(lc, function () {
    return new OA(null)
});
var PA = function (a, b, c) {
    this.b = a;
    this.g = b;
    this.v = c
};
C(PA, Su);
PA.prototype.a = function (a, b, c) {
    Ru(this.b, this.g, a, b, void 0, c, this.v)
};
var QA = function (a, b, c, d) {
    PA.call(this, a, b);
    this.j = c ? 5 : 0;
    this.o = d || void 0
};
C(QA, PA);
QA.prototype.m = v("j");
QA.prototype.c = zf("j");
QA.prototype.a = function (a, b, c, d) {
    var e = Ru(this.b, this.g, a, b, null, c, 10, d, this.o);
    if (e & 496) {
        var f = RA(e, this.g);
        b = RA(e, b);
        e = Ru(this.b, f, a, b, null, c, 10, d, this.o);
        e & 496 && (f = RA(e, f), b = RA(e, b), Ru(this.b, f, a, b, null, c, this.j, d, this.o))
    }
};
var RA = function (a, b) {
    a & 48 && (b ^= 4);
    a & 192 && (b ^= 1);
    return b
};
var SA = function (a, b, c, d) {
    QA.call(this, a, b, c || d);
    (c || d) && this.c(65 | (d ? 32 : 132))
};
C(SA, QA);
var TA = u();
C(TA, nw);
Wf(TA);
TA.prototype.Fb = function (a) {
    return TA.w.Fb.call(this, a && a.firstChild)
};
TA.prototype.Y = function (a, b) {
    var c = lk("*", fc, b)[0];
    if (c) {
        X(c, !1);
        ik(c).body.appendChild(c);
        var d = new MA;
        d.Y(c);
        a.Jd(d)
    }
    return TA.w.Y.call(this, a, b)
};
TA.prototype.Ke = function (a, b) {
    return TA.w.Ke.call(this, [b.b(k, ec + (this.Z() + ha), a), b.b(k, ec + (this.Z() + ka), "\u00a0")], b)
};
TA.prototype.Z = w(gc);
var UA = function (a, b, c, d, e) {
    Hu.call(this, a, c || TA.M(), d);
    this.Pa(64, !0);
    this.D = new SA(null, 9);
    b && this.Jd(b);
    this.V = new Um(500);
    !gi && !hi || ai("533.17.9") || (this.tf = !0);
    this.Ub = e || KA.M()
};
C(UA, Hu);
x = UA.prototype;
x.tf = !1;
x.ba = function () {
    UA.w.ba.call(this);
    VA(this, !0);
    this.b && WA(this, this.b, !0);
    zs(this.H, Oc, !!this.b)
};
x.tb = function () {
    UA.w.tb.call(this);
    VA(this, !1);
    if (this.b) {
        this.Ua(!1);
        this.b.tb();
        WA(this, this.b, !1);
        var a = this.b.l();
        a && Fk(a)
    }
};
x.T = function () {
    UA.w.T.call(this);
    this.b && (this.b.Da(), delete this.b);
    delete this.Jc;
    this.V.Da()
};
x.eb = function (a) {
    UA.w.eb.call(this, a);
    this.gb() && (this.Ua(!this.Oa(64), a), this.b && (this.b.Hc = this.Oa(64)))
};
x.vb = function (a) {
    UA.w.vb.call(this, a);
    this.b && !this.gb() && (this.b.Hc = !1)
};
x.Ic = function () {
    zu(this, !1);
    return !0
};
x.Wk = function (a) {
    this.b && this.b.isVisible() && !this.zg(a.target) && this.Ua(!1)
};
x.zg = function (a) {
    return a && Mk(this.l(), a) || this.b && NA(this.b, a) || !1
};
x.cd = function (a) {
    if (32 == a.keyCode) {
        if (a.preventDefault(), a.type != qd) return !0
    } else if (a.type != nd) return !1;
    if (this.b && this.b.isVisible()) {
        var b = 13 == a.keyCode || 32 == a.keyCode,
            c = this.b.Wa(a);
        return 27 == a.keyCode || b ? (this.Ua(!1), !0) : c
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Ua(!0, a), !0) : !1
};
x.Dg = function () {
    this.Ua(!1)
};
x.fl = function () {
    this.gb() || this.Ua(!1)
};
x.cf = function (a) {
    this.tf || this.Ua(!1);
    UA.w.cf.call(this, a)
};
var XA = function (a) {
    a.b || a.Jd(new MA(a.a, a.Ub));
    return a.b || null
};
UA.prototype.Jd = function (a) {
    var b = this.b;
    if (a != b && (b && (this.Ua(!1), this.Ba && WA(this, b, !1), delete this.b), this.Ba && zs(this.H, Oc, !!a), a)) {
        this.b = a;
        Kt(a, this);
        a.setVisible(!1);
        var c = this.tf;
        (a.J = c) && yA(a, !0);
        this.Ba && WA(this, a, !0)
    }
    return b
};
UA.prototype.ff = function (a) {
    XA(this).Ta(a, !0)
};
UA.prototype.ed = function (a) {
    var b = XA(this);
    (a = b.removeChild(Ot(b, a), !0)) && a.Da()
};
var YA = function (a, b) {
    return a.b ? Ot(a.b, b) : null
};
UA.prototype.Va = function () {
    return this.b ? Nt(this.b) : 0
};
UA.prototype.setVisible = function (a, b) {
    (a = UA.w.setVisible.call(this, a, b)) && !this.isVisible() && this.Ua(!1);
    return a
};
UA.prototype.oa = function (a) {
    UA.w.oa.call(this, a);
    this.isEnabled() || this.Ua(!1)
};
UA.prototype.Ua = function (a, b) {
    UA.w.Ua.call(this, a);
    if (this.b && this.Oa(64) == a) {
        if (a) this.b.Ba || this.b.sa(), this.qb = $s(this.l()), this.Za = jt(this.l()), ZA(this), !b || 40 != b.keyCode && 38 != b.keyCode ? this.b.sc(-1) : uA(this.b);
        else {
            zu(this, !1);
            this.b.Hc = !1;
            var c = this.l();
            c && (zs(c, Wa, ""), zs(c, "owns", ""));
            null != this.X && (this.X = void 0, (c = this.b.l()) && ht(c, "", ""))
        }
        this.b.setVisible(a, !1, b);
        this.vc || (b = Z(this), c = a ? b.K : b.Ga, c.call(b, this.a.a, Ad, this.Wk, !0), this.tf && c.call(b, this.b, ib, this.fl), c.call(b, this.V, Se, this.ic),
            a ? this.V.start() : this.V.stop())
    }
    this.b && this.b.l() && this.b.H.removeAttribute("aria-hidden")
};
var ZA = function (a) {
    if (a.b.Ba) {
        var b = a.D;
        a.D.b = a.Jc || a.l();
        var c = a.b.l();
        a.b.isVisible() || (c.style.visibility = Rc, X(c, !0));
        !a.X && a.D.m && a.D.j & 32 && (a.X = it(c));
        b.a(c, b.g ^ 1, null, a.X);
        a.b.isVisible() || (X(c, !1), c.style.visibility = pf)
    }
};
UA.prototype.ic = function () {
    var a = jt(this.l()),
        b = $s(this.l());
    var c = this.Za;
    (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.qb, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
    c && (this.Za = a, this.qb = b, ZA(this))
};
var WA = function (a, b, c) {
        var d = Z(a);
        c = c ? d.K : d.Ga;
        c.call(d, b, n, a.Dg);
        c.call(d, b, "close", a.dc);
        c.call(d, b, Tc, a.gc);
        c.call(d, b, jf, a.hc)
    },
    VA = function (a, b) {
        var c = Z(a);
        (b ? c.K : c.Ga).call(c, a.l(), od, a.jc)
    };
UA.prototype.gc = function (a) {
    (a = a.target.l()) && $A(this, a)
};
UA.prototype.jc = function (a) {
    ju(this, 32) && this.l() && this.b && this.b.isVisible() && a.stopPropagation()
};
UA.prototype.hc = function () {
    if (!tA(this.b)) {
        var a = this.l();
        zs(a, Wa, "");
        zs(a, "owns", "")
    }
};
UA.prototype.dc = function (a) {
    if (this.Oa(64) && a.target instanceof HA) {
        a = a.target;
        var b = a.l();
        a.isVisible() && a.Oa(2) && null != b && $A(this, b)
    }
};
var $A = function (a, b) {
    a = a.l();
    b = Bs(b) || b;
    if (!b.id) {
        var c = Et.M();
        b.id = ":" + (c.a++).toString(36)
    }
    Cs(a, b);
    zs(a, "owns", b.id)
};
ru(gc, function () {
    return new UA(null)
});
var bB = function (a) {
    R.call(this);
    this.a = [];
    aB(this, a)
};
C(bB, R);
bB.prototype.b = null;
bB.prototype.Va = function () {
    return this.a.length
};
var aB = function (a, b) {
        b && (D(b, function (a) {
            cB(a, !1)
        }, a), Ag(a.a, b))
    },
    dB = function (a, b, c) {
        b && (cB(b, !1), Dg(a.a, c, 0, b))
    };
bB.prototype.Ac = function () {
    var a = this.b;
    return a ? lg(this.a, a) : -1
};
var eB = function (a) {
    var b = a.a;
    if (!Yf(b))
        for (var c = b.length - 1; 0 <= c; c--) delete b[c];
    b.length = 0;
    a.b = null
};
bB.prototype.T = function () {
    bB.w.T.call(this);
    delete this.a;
    this.b = null
};
var cB = function (a, b) {
    a && typeof a.eh == Wb && a.eh(b)
};
var fB = function (a, b, c, d, e) {
    UA.call(this, a, b, c, d, e || new KA(wd));
    this.ea = this.Ja();
    this.ma = null;
    this.yg = wd
};
C(fB, UA);
x = fB.prototype;
x.Fa = null;
x.ba = function () {
    fB.w.ba.call(this);
    gB(this);
    hB(this)
};
x.na = function (a) {
    fB.w.na.call(this, a);
    (a = this.ab()) ? (this.ea = a, gB(this)) : iB(this) || jB(this, 0)
};
x.T = function () {
    fB.w.T.call(this);
    this.Fa && (this.Fa.Da(), this.Fa = null);
    this.ea = null
};
x.Dg = function (a) {
    kB(this, a.target);
    fB.w.Dg.call(this, a);
    a.stopPropagation();
    this.dispatchEvent(n)
};
x.vl = function () {
    var a = iB(this);
    fB.w.Ze.call(this, a && a.W());
    gB(this)
};
x.Jd = function (a) {
    var b = fB.w.Jd.call(this, a);
    a != b && (this.Fa && eB(this.Fa), a && (this.Fa ? Mt(a, function (a) {
        lB(a);
        var b = this.Fa;
        dB(b, a, b.Va())
    }, this) : mB(this, a)));
    return b
};
x.ff = function (a) {
    lB(a);
    fB.w.ff.call(this, a);
    if (this.Fa) {
        var b = this.Fa;
        dB(b, a, b.Va())
    } else mB(this, XA(this));
    nB(this)
};
x.ed = function (a) {
    fB.w.ed.call(this, a);
    if (this.Fa) {
        var b = this.Fa;
        (a = b.a[a] || null) && wg(b.a, a) && a == b.b && (b.b = null, b.dispatchEvent(ie))
    }
};
var kB = function (a, b) {
        if (a.Fa) {
            var c = iB(a),
                d = a.Fa;
            b != d.b && (cB(d.b, !1), d.b = b, cB(b, !0));
            d.dispatchEvent(ie);
            b != c && a.dispatchEvent(ob)
        }
    },
    jB = function (a, b) {
        a.Fa && kB(a, a.Fa.a[b] || null)
    };
fB.prototype.Ze = function (a) {
    if (null != a && this.Fa)
        for (var b = 0, c; c = this.Fa.a[b] || null; b++)
            if (c && typeof c.W == Wb && c.W() == a) {
                kB(this, c);
                return
            }
    kB(this, null)
};
fB.prototype.W = function () {
    var a = iB(this);
    return a ? a.W() : null
};
var iB = function (a) {
    return a.Fa ? a.Fa.b : null
};
fB.prototype.Ac = function () {
    return this.Fa ? this.Fa.Ac() : -1
};
var mB = function (a, b) {
        a.Fa = new bB;
        b && Mt(b, function (a) {
            lB(a);
            var b = this.Fa;
            dB(b, a, b.Va())
        }, a);
        hB(a)
    },
    hB = function (a) {
        a.Fa && Z(a).K(a.Fa, ie, a.vl)
    },
    gB = function (a) {
        var b = iB(a);
        a.g(b ? b.ab() : a.ea);
        var c = a.c.Fb(a.l());
        c && a.a.Hl(c) && (null == a.ma && (a.ma = As(c, rd)), b = (b = b ? b.l() : null) ? As(b, rd) : a.ma, zs(c, rd, b), nB(a))
    },
    nB = function (a) {
        var b = a.c;
        if (b && (b = b.Fb(a.l()))) {
            var c = a.H;
            b.id || (b.id = ":" + (Et.M().a++).toString(36));
            ys(b, Pd);
            zs(c, Wa, b.id);
            a.Fa && (c = zg(a.Fa.a), zs(b, "setsize", oB(c)), a = a.Fa.Ac(), zs(b, "posinset", 0 <= a ?
                oB(Cg(c, 0, a + 1)) : 0))
        }
    },
    oB = function (a) {
        return rg(a, function (a) {
            return a instanceof HA
        })
    },
    lB = function (a) {
        a.yg = a instanceof HA ? Pd : me
    };
fB.prototype.Ua = function (a, b) {
    fB.w.Ua.call(this, a, b);
    this.Oa(64) ? XA(this).sc(this.Ac()) : nB(this)
};
ru("goog-select", function () {
    return new fB(null)
});
var rB = function (a, b, c, d, e, f, g, l, m) {
    c = new pB(c);
    fB.call(this, "", c, g, l);
    this.D.c && this.D.c(33);
    this.Ia = a;
    this.xb = a.id;
    It(c, this.xb + "-menu");
    this.aa = [];
    this.$ = null;
    this.wa = null != f ? f : "";
    this.Sb = !!m;
    for (a = 0; a < b.length; a++) {
        var p;
        f = null != d && a < d.length && null != d[a] ? d[a] : b[a];
        f != me ? p = new OA(b[a], f) : p = new LA;
        this.ff(p)
    }
    this.Y(this.Ia);
    this.ac(null != e ? e : qB(this, 0))
};
C(rB, fB);
rB.prototype.g = function (a) {
    this.Sb ? a = this.wa : this.wa && (a = this.wa + " " + a);
    rB.w.g.call(this, a)
};
var sB = function (a) {
    a.$ && (Ym(a.$), a.$ = null);
    a.$ = Xm(function () {
        a.aa = []
    }, 1E3)
};
rB.prototype.T = function () {
    Fk(this.Ia);
    this.Ia = null;
    rB.w.T.call(this)
};
rB.prototype.Wa = function (a) {
    if (!this.Oa(64) && 48 <= a.keyCode && 90 >= a.keyCode) {
        sB(this);
        this.aa.push(String.fromCharCode(a.keyCode));
        a = this.aa.join("");
        var b = new RegExp("^" + bh(a), "i"),
            c = this.Ac(),
            d = c; - 1 < d && 1 < a.length && d--;
        var e = this.Va(),
            f = 0 > d ? 0 : d,
            g = !1,
            l = !1;
        do {
            ++d;
            d == e && (d = 0, g = !0);
            var m = YA(this, d);
            if (m instanceof HA && (m = m.ab()) && m.match(b)) {
                l = !0;
                break
            }
            g && d == f && 3 == a.length && (m = a.split(""), m[1] == m[2] && (b = new RegExp("^" + m[1], "i"), this.aa = [m[1]], g = !1))
        } while (!g || d != f);
        l && d != c && jB(this, d);
        return !0
    }
    return rB.w.Wa.call(this,
        a)
};
rB.prototype.ed = function (a) {
    var b = this.Ac();
    rB.w.ed.call(this, a);
    (a == b || -1 === b) && YA(this, 0) instanceof HA && jB(this, 0)
};
var tB = function (a, b) {
        if (b) {
            for (var c, d = 0; c = YA(a, d); d++)
                if (c instanceof HA && c.W() == b) return YA(a, d).ab();
            return ""
        }
        return YA(a, a.Ac()).ab()
    },
    uB = function (a, b) {
        var c = a.W() == eb;
        if ("" != b)
            for (var d, e = 0; d = YA(a, e); e++)
                if (d instanceof HA && d.W() == eb) {
                    d.ab() != b && (d.g(b), c && a.g(b));
                    break
                }
    };
rB.prototype.ac = function (a) {
    a: {
        for (var b, c = 0; b = YA(this, c); c++)
            if (b instanceof HA && b.W() == a) {
                a = c;
                break a
            }
        a = -1
    }
    0 <= a && jB(this, a);
    return a
};
var qB = function (a, b) {
    var c = "";
    a = YA(a, b);
    a instanceof HA && (c = a.W());
    return c
};
rB.prototype.W = function () {
    var a = this.Ac();
    return -1 != a ? qB(this, a) : ""
};
var pB = function (a, b, c) {
    this.b = a;
    this.m = [];
    this.D = [];
    MA.call(this, b, c)
};
C(pB, MA);
x = pB.prototype;
x.ai = K(k, {
    id: "goog-menuitem-group-",
    "class": jc
});
x.Fg = !1;
x.nd = 0;
x.Aa = function () {
    pB.w.Aa.call(this);
    this.l().id = Ht(this)
};
x.Xc = function (a, b, c) {
    this.Fg && (this.c = b == Nt(this) ? this.g[b - 1] : this.g[b]);
    pB.w.Xc.call(this, a, b, c);
    this.c && (this.c = null, vB(this))
};
x.removeChild = function (a, b) {
    Pf(a) && (a = Jt(this, a));
    var c = Qt(this, a);
    this.Fg && (this.c = 0 == c ? this.g[c + 1] : this.g[c]);
    a = pB.w.removeChild.call(this, a, b);
    this.c && (this.c = null, vB(this));
    return a
};
x.Yb = function () {
    var a;
    this.c ? a = this.c : a = pB.w.Yb.call(this);
    return a
};
x.sa = function (a) {
    pB.w.sa.call(this, a);
    vB(this);
    gA(dA.M(), this.l())
};
x.Y = function (a) {
    pB.w.Y.call(this, a);
    vB(this);
    gA(dA.M(), this.l())
};
var vB = function (a) {
        a.Fg = !0;
        wB(a);
        var b = a.l();
        b.innerHTML = "";
        var c = [],
            d = 0;
        var e = document.createElement("table");
        var f = e.insertRow(-1);
        for (var g = 0, l; l = a.j[g]; g++) {
            var m = f.insertCell(f.cells.length);
            m.appendChild(l);
            Es(l, cc) ? (c.push(m), f = e.insertRow(e.rows.length)) : d++
        }
        for (g = 0; m = c[g]; g++) m.setAttribute("colspan", d);
        b.appendChild(e)
    },
    xB = function (a, b, c) {
        tg(a.j, b.Ib) || a.j.push(b.Ib);
        Ot(a, c + 1) && (b.Ib = a.ai.cloneNode(!0), b.Ib.id += b.Ci, b.Ci++, b.lf = 1);
        return b
    },
    wB = function (a) {
        a.j = [];
        a.g = {};
        var b = a.ai.cloneNode(!0);
        b.id += 1;
        var c = {
            Ib: b,
            Ci: 2,
            lf: 1
        };
        Mt(a, function (a, b) {
            c.Ib.appendChild(a.l());
            this.g[b] = c.Ib;
            c.lf == this.b ? c = xB(this, c, b) : a instanceof HA && c.lf++;
            tg(this.D, b) && (W(c.Ib, jc), V(c.Ib, cc), this.g[b] = c.Ib, c = xB(this, c, b))
        }, a);
        1 == c.lf || tg(a.j, c.Ib) || a.j.push(c.Ib)
    };
pB.prototype.setVisible = function (a, b, c) {
    (a = pB.w.setVisible.call(this, a, b, c)) && this.nd && (Ym(this.nd), this.nd = 0);
    return a
};
pB.prototype.Xd = function (a) {
    var b = pB.w.Xd.call(this, a);
    if (b) return b;
    switch (a.keyCode) {
        case 37:
            return zA(this, A(this.v, this), this.Ea), !0;
        case 39:
            return zA(this, A(this.C, this), this.Ea), !0;
        default:
            return 48 <= a.keyCode && 90 >= a.keyCode ? (yB(this), this.m.push(String.fromCharCode(a.keyCode)), this.li(this.m.join("")), !0) : !1
    }
};
var yB = function (a) {
    a.nd && (Ym(a.nd), a.nd = 0);
    a.nd = Xm(function () {
        this.m = []
    }, 1E3, a)
};
pB.prototype.li = function (a) {
    var b = new RegExp("^" + bh(a), "i"),
        c = this.Ea; - 1 < c && 1 < a.length && c--;
    zA(this, function (a, c) {
        var d = 0 > a ? 0 : a,
            e = !1;
        do {
            ++a;
            a == c && (a = 0, e = !0);
            var l = Ot(this, a).ab();
            if (l && l.match(b)) return a
        } while (!e || a != d);
        return this.Ea
    }, c)
};
pB.prototype.v = function (a, b) {
    a -= this.b;
    var c;
    0 > a && (c = a + b + (Math.ceil(b / this.b) * this.b - b) + this.b);
    return c || a
};
pB.prototype.C = function (a, b) {
    a += this.b;
    var c;
    a > b && (c = a - b - (Math.ceil(b / this.b) * this.b - b) - this.b);
    return c || a
};
var zB = Zi("//www.gstatic.com/inputtools/js/ita/inputtools_3.js"),
    AB = Zi("//www.gstatic.com/inputtools/js/ita/inputtools_d_3.js");
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var BB = function (a, b) {
    this.j = [];
    this.D = a;
    this.L = b || null;
    this.g = this.a = !1;
    this.c = void 0;
    this.F = this.O = this.m = !1;
    this.o = 0;
    this.b = null;
    this.v = 0
};
BB.prototype.cancel = function (a) {
    if (this.a) this.c instanceof BB && this.c.cancel();
    else {
        if (this.b) {
            var b = this.b;
            delete this.b;
            a ? b.cancel(a) : (b.v--, 0 >= b.v && b.cancel())
        }
        this.D ? this.D.call(this.L, this) : this.F = !0;
        this.a || (a = new CB(this), DB(this), EB(this, !1, a))
    }
};
BB.prototype.C = function (a, b) {
    this.m = !1;
    EB(this, a, b)
};
var EB = function (a, b, c) {
        a.a = !0;
        a.c = c;
        a.g = !b;
        FB(a)
    },
    DB = function (a) {
        if (a.a) {
            if (!a.F) throw new GB(a);
            a.F = !1
        }
    },
    HB = function (a, b, c, d) {
        a.j.push([b, c, d]);
        a.a && FB(a)
    };
BB.prototype.then = function (a, b, c) {
    var d, e, f = new Fm(function (a, b) {
        d = a;
        e = b
    });
    HB(this, d, function (a) {
        a instanceof CB ? f.cancel() : e(a)
    });
    return f.then(a, b, c)
};
Cm(BB);
var IB = function (a) {
        return pg(a.j, function (a) {
            return $f(a[1])
        })
    },
    FB = function (a) {
        if (a.o && a.a && IB(a)) {
            var b = a.o,
                c = JB[b];
            c && (y.clearTimeout(c.La), delete JB[b]);
            a.o = 0
        }
        a.b && (a.b.v--, delete a.b);
        b = a.c;
        for (var d = c = !1; a.j.length && !a.m;) {
            var e = a.j.shift(),
                f = e[0],
                g = e[1];
            e = e[2];
            if (f = a.g ? g : f) try {
                var l = f.call(e || a.L, b);
                z(l) && (a.g = a.g && (l == b || l instanceof Error), a.c = b = l);
                if (Dm(b) || typeof y.Promise === Wb && b instanceof y.Promise) d = !0, a.m = !0
            } catch (m) {
                b = m, a.g = !0, IB(a) || (c = !0)
            }
        }
        a.c = b;
        d && (l = A(a.C, a, !0), d = A(a.C, a, !1), b instanceof BB ? (HB(b, l, d), b.O = !0) : b.then(l, d));
        c && (b = new KB(b), JB[b.La] = b, a.o = b.La)
    },
    GB = function () {
        ig.call(this)
    };
C(GB, ig);
GB.prototype.message = "Deferred has already fired";
GB.prototype.name = "AlreadyCalledError";
var CB = function () {
    ig.call(this)
};
C(CB, ig);
CB.prototype.message = "Deferred was canceled";
CB.prototype.name = "CanceledError";
var KB = function (a) {
    this.La = y.setTimeout(A(this.a, this), 0);
    this.Oe = a
};
KB.prototype.a = function () {
    delete JB[this.La];
    throw this.Oe;
};
var JB = {};
var PB = function (a, b) {
        var c = b || {};
        b = c.document || document;
        var d = dj(a),
            e = xk(Ja),
            f = {
                Ri: e,
                Vc: void 0
            },
            g = new BB(LB, f),
            l = null,
            m = null != c.timeout ? c.timeout : 5E3;
        0 < m && (l = window.setTimeout(function () {
            MB(e, !0);
            var a = new NB(1, "Timeout reached for loading script " + d);
            DB(g);
            EB(g, !1, a)
        }, m), f.Vc = l);
        e.onload = e.onreadystatechange = function () {
            e.readyState && "loaded" != e.readyState && e.readyState != vb || (MB(e, c.qk || !1, l), DB(g), EB(g, !0, null))
        };
        e.onerror = function () {
            MB(e, !0, l);
            var a = new NB(0, "Error while loading script " + d);
            DB(g);
            EB(g, !1, a)
        };
        f = c.attributes || {};
        wh(f, {
            type: "text/javascript",
            charset: "UTF-8"
        });
        ok(e, f);
        Zj(e, a);
        OB(b).appendChild(e);
        return g
    },
    OB = function (a) {
        var b = (a || document).getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    },
    LB = function () {
        if (this && this.Ri) {
            var a = this.Ri;
            a && a.tagName == Ja && MB(a, !0, this.Vc)
        }
    },
    MB = function (a, b, c) {
        null != c && y.clearTimeout(c);
        a.onload = Vf;
        a.onerror = Vf;
        a.onreadystatechange = Vf;
        b && window.setTimeout(function () {
            Fk(a)
        }, 0)
    },
    NB = function (a, b) {
        var c = "Jsloader error (code #" +
            a + ")";
        b && (c += ": " + b);
        ig.call(this, c);
        this.code = a
    };
C(NB, ig);
var QB = function () {
    this.c = this.b = !1;
    this.a = []
};
Wf(QB);
var RB = Zi("//www.gstatic.cn/inputtools/js/ita/inputtools_1.js"),
    SB = Zi("//www.gstatic.cn/inputtools/js/ita/inputtools_d_1.js");
QB.prototype.g = function () {
    this.c = !0;
    for (var a = 0; a < this.a.length; ++a) this.a[a]()
};
QB.prototype.load = function (a, b) {
    this.b ? this.b && !this.c ? this.a.push(a) : a() : (this.b = !0, this.a.push(a), a = 0 <= y.location.href.indexOf("?deb=static") || 0 <= y.location.href.indexOf("&deb=static"), PB(fj(Wi(b ? a ? SB : RB : a ? AB : zB))).then(A(this.g, this)))
};
var UB = function () {
    this.g = Eo.M();
    this.c = {};
    this.b = {};
    this.a = {};
    this.a[Cc] = new TB
};
Wf(UB);
var VB = function (a) {
        var b = a.split(/[-_]/g);
        "" == (1 < b.length && b[1].match(/^[a-zA-Z]{4}$/) ? b[1] : "") && (a = a.match(/^\w{2,3}([-_]|$)/)) && a[0].replace(/[_-]/g, "")
    },
    XB = function (a, b, c) {
        b = WB(a, b, c);
        if (z(b)) a = b.ti;
        else {
            a: {
                a = Ho(a.g, c);
                if (null != a)
                    for (c = 0; c < a.length; c++)
                        if (Jo(a[c])) {
                            a = a[c];
                            break a
                        }
                a = ""
            }
            a = a || ""
        }
        return a
    },
    WB = function (a, b, c) {
        if (a = YB(a, b)) return a.a[c]
    },
    YB = function (a, b, c) {
        var d = a.a[b];
        c && !z(d) && (d = new TB, a.a[b] = d);
        return d
    },
    ZB = function (a, b, c) {
        var d = {
            ua: "itui"
        };
        d.uav = Pf(a) ? a : a ? 1 : 0;
        d.sl = b;
        d.tl = "und";
        d.hl = c;
        var e = new Image;
        e.src = "/translate/uc?" + Jn(d);
        e.onload = function () {
            e.onload = null
        }
    },
    TB = function () {
        this.a = {};
        for (var a in $B) this.a[a] = new aC($B[a], "")
    },
    $B = {
        iw: !1,
        ja: !1,
        vi: !1,
        "zh-CN": !1
    };
TB.prototype.update = function (a, b, c) {
    var d = this.a[a];
    z(d) ? (d.isEnabled = b, d.ti = c) : this.a[a] = new aC(b, c)
};
var aC = function (a, b) {
    this.isEnabled = a;
    this.ti = b
};
var bC = function (a, b, c, d, e, f) {
    R.call(this);
    this.L = Eo.M();
    this.j = a;
    this.ia = c;
    this.aa = b;
    this.o = this.b = null;
    this.m = this.D = "";
    this.C = this.j.id;
    this.a = "";
    this.v = this.c = !1;
    this.g = Kp.M();
    this.J = d;
    this.V = e;
    this.$ = aj(d) ? [5, 4] : [1, 0];
    this.X = [30, 0, 0, 0];
    this.F = UB.M();
    this.N = lp.M();
    this.G = rp.M();
    this.O = !0;
    null != f && O(this, ob, f.ra, !1, f)
};
C(bC, R);
var eC = function (a, b) {
        if (null == a.b) a.m = b, (null != Fo[b] || a.L.a && null != Go[b]) && a.O && (a.O = !1, QB.M().load(A(a.ea, a), a.V));
        else if (a.D != b)
            if (a.D = b, null != Fo[b] || a.L.a && null != Go[b]) {
                var c = Ho(a.L, b),
                    d = XB(a.F, a.C, b),
                    e = a.F,
                    f = a.C,
                    g = WB(e, f, b);
                b = z(g) ? g.isEnabled : Jo(XB(e, f, b));
                a.v = !0;
                a.a = tg(c, d) ? d : c[0];
                a.b.disableCurrentInputTool();
                a.c = b;
                a.b.setInputTools(c);
                a.b.activateInputTool(a.a);
                a.c ? a.b.enableCurrentInputTool() : a.b.disableCurrentInputTool();
                null == a.o && (a.o = a.b.showControl({
                    ui: "kd",
                    container: a.j
                }));
                null != a.b.localize &&
                a.b.localize(a.J);
                a.o.show();
                cC(a);
                dC(a);
                a.v = !1;
                c = a.c ? a.a : "";
                a.N.a = Pf(c) ? pp(c) : c
            } else a.b.disableCurrentInputTool(), null != a.o && a.o.hide()
    },
    cC = function (a) {
        null != a.b && a.b.repositionKeyboard(a.ia, a.$, a.X)
    };
bC.prototype.isEnabled = function () {
    return null != this.b && this.c
};
var fC = function (a) {
    return a.isEnabled() && Jo(a.a)
};
bC.prototype.R = function (a) {
    cC(this);
    if (!this.v && (this.a != a.currInputToolName || this.c != a.currInputToolActive)) {
        this.a = a.currInputToolName;
        this.c = a.currInputToolActive;
        dC(this);
        a = this.c;
        var b = this.D,
            c = this.J,
            d = this.C,
            e = this.a;
        YB(this.F, d, !0).update(b, a, e);
        ZB((a ? "1" : "0") + "." + d + "." + e, b, c);
        a = this.c ? this.a : "";
        this.N.a = Pf(a) ? pp(a) : a;
        this.c && (0 <= this.a.indexOf("-k0-") ? (a = this.G, S(a, T(a, 171))) : Jo(this.a) ? (a = this.G, S(a, T(a, 172))) : Io(this.a) && (a = this.G, S(a, T(a, 146))))
    }
    this.dispatchEvent(ob)
};
bC.prototype.ea = function () {
    var a = new google.elements.inputtools.InputToolsController;
    a.setAutoDirection(!1);
    a.setApplicationName(ff);
    a.addPageElements([this.aa]);
    a.addEventListener(google.elements.inputtools.EventType.INPUT_TOOL_ENABLED, this.R, this);
    this.b = a;
    "" != this.m && (eC(this, this.m), this.m = "")
};
var dC = function (a) {
    var b = J("ita-kd-inputtool-icon", a.j);
    if (null != b) {
        var c = Jo(a.a) ? a.isEnabled() ? window.MSG_IME_OFF || "" : window.MSG_IME_ON || "" : 0 <= a.a.indexOf("-k0-") ? a.isEnabled() ? window.MSG_VK_OFF || "" : window.MSG_VK_ON || "" : Io(a.a) ? a.isEnabled() ? window.MSG_HW_OFF || "" : window.MSG_HW_ON || "" : "";
        fv(b, c);
        jv(b)
    }
    a = J("ita-kd-dropdown", a.j);
    null != a && (fv(a, window.MSG_CHANGE_ITA || ""), jv(a))
};
var hC = function (a, b, c, d, e) {
    this.c = !!b;
    this.o = null;
    this.j = 0;
    this.D = !1;
    this.O = !c;
    a && gC(this, a, d);
    this.g = void 0 != e ? e : this.j || 0;
    this.c && (this.g *= -1)
};
C(hC, un);
var gC = function (a, b, c, d) {
    if (a.o = b) a.j = Qf(c) ? c : 1 != a.o.nodeType ? 0 : a.c ? -1 : 1;
    Qf(d) && (a.g = d)
};
hC.prototype.next = function () {
    if (this.D) {
        if (!this.o || this.O && 0 == this.g) throw tn;
        var a = this.o;
        var b = this.c ? -1 : 1;
        if (this.j == b) {
            var c = this.c ? a.lastChild : a.firstChild;
            c ? gC(this, c) : gC(this, a, -1 * b)
        } else(c = this.c ? a.previousSibling : a.nextSibling) ? gC(this, c) : gC(this, a.parentNode, -1 * b);
        this.g += this.j * (this.c ? -1 : 1)
    } else this.D = !0;
    a = this.o;
    if (!this.o) throw tn;
    return a
};
hC.prototype.splice = function (a) {
    var b = this.o,
        c = this.c ? 1 : -1;
    this.j == c && (this.j = -1 * c, this.g += this.j * (this.c ? -1 : 1));
    this.c = !this.c;
    hC.prototype.next.call(this);
    this.c = !this.c;
    c = Zf(arguments[0]) ? arguments[0] : arguments;
    for (var d = c.length - 1; 0 <= d; d--) Ek(c[d], b);
    Fk(b)
};
var iC = u(),
    jC = function (a) {
        if (a.getSelection) return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a) return null
                } else if (!c.length || c.item(0).document != a) return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    },
    kC = function (a) {
        for (var b = [], c = 0, d = a.Vd(); c < d; c++) b.push(a.wd(c));
        return b
    },
    lC = function (a) {
        return a.Lg() ? a.Nb() : a.mc()
    };
iC.prototype.Lg = w(!1);
var mC = function (a, b) {
    hC.call(this, a, b, !0)
};
C(mC, hC);
var nC = function (a, b, c, d, e) {
    this.b = this.a = null;
    this.C = this.L = 0;
    this.m = !!e;
    if (a) {
        this.a = a;
        this.L = b;
        this.b = c;
        this.C = d;
        if (1 == a.nodeType && "BR" != a.tagName)
            if (a = a.childNodes, b = a[b]) this.a = b, this.L = 0;
            else {
                a.length && (this.a = kg(a));
                var f = !0
            }
        1 == c.nodeType && ((this.b = c.childNodes[d]) ? this.C = 0 : this.b = c)
    }
    hC.call(this, this.m ? this.b : this.a, this.m, !0);
    if (f) try {
        this.next()
    } catch (g) {
        if (g != tn) throw g;
    }
};
C(nC, mC);
nC.prototype.F = v("a");
nC.prototype.v = function () {
    return this.D && (this.o != (this.m ? this.a : this.b) ? !1 : this.m ? this.L ? -1 != this.j : 1 == this.j : !this.C || 1 != this.j)
};
nC.prototype.next = function () {
    if (this.v()) throw tn;
    return nC.w.next.call(this)
};
var oC = u(),
    pC = function (a, b) {
        b = b.Sd();
        try {
            return 0 <= a.kc(b, 0, 0) && 0 >= a.kc(b, 1, 1)
        } catch (c) {
            if (!G) throw c;
            return !1
        }
    };
oC.prototype.Hb = function () {
    return new nC(this.Wb(), this.Cc(), this.Bc(), this.Nc())
};
var qC = zf("a");
C(qC, oC);
var sC = function (a) {
        var b = ik(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
        else if (rC(a)) {
            for (var c, d = a;
                 (c = d.firstChild) && rC(c);) d = c;
            b.setStart(d, 0);
            for (d = a;
                 (c = d.lastChild) && rC(c);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else c = a.parentNode, a = lg(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
        return b
    },
    tC = function (a, b, c, d) {
        var e = ik(a).createRange();
        e.setStart(a, b);
        e.setEnd(c, d);
        return e
    };
x = qC.prototype;
x.Sd = v("a");
x.qg = function () {
    return this.a.commonAncestorContainer
};
x.Wb = function () {
    return this.a.startContainer
};
x.Cc = function () {
    return this.a.startOffset
};
x.Bc = function () {
    return this.a.endContainer
};
x.Nc = function () {
    return this.a.endOffset
};
x.kc = function (a, b, c) {
    return this.a.compareBoundaryPoints(1 == c ? 1 == b ? y.Range.START_TO_START : y.Range.START_TO_END : 1 == b ? y.Range.END_TO_START : y.Range.END_TO_END, a)
};
x.Xb = function () {
    return this.a.collapsed
};
x.Vh = function () {
    return this.a.toString()
};
x.select = function (a) {
    var b = tk(ik(this.Wb()));
    this.fe(b.getSelection(), a)
};
x.fe = function (a) {
    a.removeAllRanges();
    a.addRange(this.a)
};
var uC = zf("a");
C(uC, qC);
uC.prototype.fe = function (a, b) {
    !b || this.Xb() ? uC.w.fe.call(this, a, b) : (a.collapse(this.Bc(), this.Nc()), a.extend(this.Wb(), this.Cc()))
};
var vC = function (a) {
    this.b = this.a = this.o = null;
    this.j = this.g = -1;
    this.c = a
};
C(vC, oC);
var wC = function (a) {
    var b = ik(a).body.createTextRange();
    if (1 == a.nodeType) b.moveToElementText(a), rC(a) && !a.childNodes.length && b.collapse(!1);
    else {
        for (var c = 0, d = a; d = d.previousSibling;) {
            var e = d.nodeType;
            if (3 == e) c += d.length;
            else if (1 == e) {
                b.moveToElementText(d);
                break
            }
        }
        d || b.moveToElementText(a.parentNode);
        b.collapse(!d);
        c && b.move(pb, c);
        b.moveEnd(pb, a.length)
    }
    return b
};
vC.prototype.Sd = v("c");
vC.prototype.qg = function () {
    if (!this.o) {
        var a = this.c.text,
            b = this.c.duplicate(),
            c = a.replace(/ +$/, "");
        (c = a.length - c.length) && b.moveEnd(pb, -c);
        c = b.parentElement();
        b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
        if (this.Xb() && 0 < b) return this.o = c;
        for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
        for (; 1 == c.childNodes.length && c.innerText == xC(c.firstChild) && rC(c.firstChild);) c = c.firstChild;
        0 == a.length && (c = yC(this, c));
        this.o = c
    }
    return this.o
};
var yC = function (a, b) {
    for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
        var f = c[d];
        if (rC(f)) {
            var g = wC(f),
                l = g.htmlText != f.outerHTML;
            if (a.Xb() && l ? 0 <= a.kc(g, 1, 1) && 0 >= a.kc(g, 1, 0) : a.c.inRange(g)) return yC(a, f)
        }
    }
    return b
};
x = vC.prototype;
x.Wb = function () {
    this.a || (this.a = zC(this, 1), this.Xb() && (this.b = this.a));
    return this.a
};
x.Cc = function () {
    0 > this.g && (this.g = AC(this, 1), this.Xb() && (this.j = this.g));
    return this.g
};
x.Bc = function () {
    if (this.Xb()) return this.Wb();
    this.b || (this.b = zC(this, 0));
    return this.b
};
x.Nc = function () {
    if (this.Xb()) return this.Cc();
    0 > this.j && (this.j = AC(this, 0), this.Xb() && (this.g = this.j));
    return this.j
};
x.kc = function (a, b, c) {
    return this.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
};
var zC = function (a, b, c) {
        c = c || a.qg();
        if (!c || !c.firstChild) return c;
        for (var d = 1 == b, e = 0, f = c.childNodes.length; e < f; e++) {
            var g = d ? e : f - e - 1,
                l = c.childNodes[g];
            try {
                var m = BC(l)
            } catch (q) {
                continue
            }
            var p = m.Sd();
            if (a.Xb())
                if (!rC(l)) {
                    if (0 == a.kc(p, 1, 1)) {
                        a.g = a.j = g;
                        break
                    }
                } else {
                    if (pC(m, a)) return zC(a, b, l)
                } else {
                if (pC(a, m)) {
                    if (!rC(l)) {
                        d ? a.g = g : a.j = g + 1;
                        break
                    }
                    return zC(a, b, l)
                }
                if (0 > a.kc(p, 1, 0) && 0 < a.kc(p, 0, 1)) return zC(a, b, l)
            }
        }
        return c
    },
    AC = function (a, b) {
        var c = 1 == b,
            d = c ? a.Wb() : a.Bc();
        if (1 == d.nodeType) {
            d = d.childNodes;
            for (var e =
                d.length, f = c ? 1 : -1, g = c ? 0 : e - 1; 0 <= g && g < e; g += f) {
                var l = d[g];
                if (!rC(l) && 0 == a.c.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), BC(l).Sd())) return c ? g : g + 1
            }
            return -1 == g ? 0 : g
        }
        a = a.c.duplicate();
        b = wC(d);
        a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
        a = a.text.length;
        return c ? d.length - a : a
    },
    xC = function (a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    };
vC.prototype.Xb = function () {
    return 0 == this.c.compareEndPoints(Na, this.c)
};
vC.prototype.Vh = function () {
    return this.c.text
};
vC.prototype.select = function () {
    this.c.select()
};
var CC = zf("a");
C(CC, qC);
CC.prototype.fe = function (a) {
    a.collapse(this.Wb(), this.Cc());
    this.Bc() == this.Wb() && this.Nc() == this.Cc() || a.extend(this.Bc(), this.Nc());
    0 == a.rangeCount && a.addRange(this.a)
};
var DC = zf("a");
C(DC, qC);
DC.prototype.kc = function (a, b, c) {
    return ai("528") ? DC.w.kc.call(this, a, b, c) : this.a.compareBoundaryPoints(1 == c ? 1 == b ? y.Range.START_TO_START : y.Range.END_TO_START : 1 == b ? y.Range.START_TO_END : y.Range.END_TO_END, a)
};
DC.prototype.fe = function (a, b) {
    b ? a.setBaseAndExtent(this.Bc(), this.Nc(), this.Wb(), this.Cc()) : a.setBaseAndExtent(this.Wb(), this.Cc(), this.Bc(), this.Nc())
};
var EC = function (a) {
        return Oi ? new vC(a, ik(a.parentElement())) : Mh ? new DC(a) : Lh ? new uC(a) : Ih ? new CC(a) : new qC(a)
    },
    BC = function (a) {
        if (G && !ci(9)) {
            var b = new vC(wC(a), ik(a));
            if (rC(a)) {
                for (var c, d = a;
                     (c = d.firstChild) && rC(c);) d = c;
                b.a = d;
                b.g = 0;
                for (d = a;
                     (c = d.lastChild) && rC(c);) d = c;
                b.b = d;
                b.j = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.o = a
            } else b.a = b.b = b.o = a.parentNode, b.g = lg(b.o.childNodes, a), b.j = b.g + 1;
            a = b
        } else a = Mh ? new DC(sC(a)) : Lh ? new uC(sC(a)) : Ih ? new CC(sC(a)) : new qC(sC(a));
        return a
    },
    rC = function (a) {
        return Ak(a) ||
            3 == a.nodeType
    };
var FC = function () {
    this.c = this.b = this.j = this.a = this.o = null;
    this.g = !1
};
C(FC, iC);
var GC = function (a, b) {
        var c = new FC;
        c.o = a;
        c.g = !!b;
        return c
    },
    HC = function (a, b) {
        return GC(BC(a), b)
    };
FC.prototype.mb = w(Ne);
FC.prototype.ng = function () {
    return IC(this).Sd()
};
FC.prototype.Vd = w(1);
FC.prototype.wd = function () {
    return this
};
var IC = function (a) {
    var b;
    if (!(b = a.o)) {
        b = a.Nb();
        var c = a.Ob(),
            d = a.mc(),
            e = a.nc();
        if (G && !ci(9)) {
            var f = b,
                g = c,
                l = d,
                m = e,
                p = !1;
            1 == f.nodeType && (g = f.childNodes[g], p = !g, f = g || f.lastChild || f, g = 0);
            var q = wC(f);
            g && q.move(pb, g);
            f == l && g == m ? q.collapse(!0) : (p && q.collapse(!1), p = !1, 1 == l.nodeType && (l = (g = l.childNodes[m]) || l.lastChild || l, m = 0, p = !g), f = wC(l), f.collapse(!p), m && f.moveEnd(pb, m), q.setEndPoint("EndToEnd", f));
            m = new vC(q, ik(b));
            m.a = b;
            m.g = c;
            m.b = d;
            m.j = e;
            b = m
        } else b = Mh ? new DC(tC(b, c, d, e)) : Lh ? new uC(tC(b, c, d, e)) : Ih ? new CC(tC(b,
            c, d, e)) : new qC(tC(b, c, d, e));
        b = a.o = b
    }
    return b
};
x = FC.prototype;
x.Te = function () {
    return IC(this).qg()
};
x.Nb = function () {
    return this.a || (this.a = IC(this).Wb())
};
x.Ob = function () {
    return null != this.j ? this.j : this.j = IC(this).Cc()
};
x.mc = function () {
    return this.b || (this.b = IC(this).Bc())
};
x.nc = function () {
    return null != this.c ? this.c : this.c = IC(this).Nc()
};
x.Lg = v("g");
x.Ve = function () {
    return IC(this).Xb()
};
x.Ue = function () {
    return IC(this).Vh()
};
x.Hb = function () {
    return new nC(this.Nb(), this.Ob(), this.mc(), this.nc())
};
x.select = function () {
    IC(this).select(this.g)
};
var JC = u();
C(JC, iC);
var KC = function () {
    this.c = this.b = this.a = null
};
C(KC, JC);
x = KC.prototype;
x.mb = w("control");
x.ng = function () {
    return this.a || document.body.createControlRange()
};
x.Vd = function () {
    return this.a ? this.a.length : 0
};
x.wd = function (a) {
    return HC(this.a.item(a))
};
x.Te = function () {
    return Sk.apply(null, LC(this))
};
x.Nb = function () {
    return MC(this)[0]
};
x.Ob = w(0);
x.mc = function () {
    var a = MC(this),
        b = kg(a);
    return sg(a, function (a) {
        return Mk(a, b)
    })
};
x.nc = function () {
    return this.mc().childNodes.length
};
var LC = function (a) {
        if (!a.b && (a.b = [], a.a))
            for (var b = 0; b < a.a.length; b++) a.b.push(a.a.item(b));
        return a.b
    },
    MC = function (a) {
        a.c || (a.c = LC(a).concat(), a.c.sort(function (a, c) {
            return a.sourceIndex - c.sourceIndex
        }));
        return a.c
    };
KC.prototype.Ve = function () {
    return !this.a || !this.a.length
};
KC.prototype.Ue = w("");
KC.prototype.Hb = function () {
    return new NC(this)
};
KC.prototype.select = function () {
    this.a && this.a.select()
};
var NC = function (a) {
    this.m = this.b = this.a = null;
    a && (this.m = MC(a), this.a = this.m.shift(), this.b = kg(this.m) || this.a);
    hC.call(this, this.a, !1, !0)
};
C(NC, mC);
NC.prototype.F = v("a");
NC.prototype.v = function () {
    return !this.g && !this.m.length
};
NC.prototype.next = function () {
    if (this.v()) throw tn;
    if (!this.g) {
        var a = this.m.shift();
        gC(this, a, 1, 1);
        return a
    }
    return NC.w.next.call(this)
};
var OC = function () {
    this.G = null;
    this.a = [];
    this.g = [];
    this.c = this.b = null
};
C(OC, JC);
x = OC.prototype;
x.mb = w("mutli");
x.ng = function () {
    return this.a[0]
};
x.Vd = function () {
    return this.a.length
};
x.wd = function (a) {
    this.g[a] || (this.g[a] = GC(EC(this.a[a]), void 0));
    return this.g[a]
};
x.Te = function () {
    if (!this.c) {
        for (var a = [], b = 0, c = this.Vd(); b < c; b++) a.push(this.wd(b).Te());
        this.c = Sk.apply(null, a)
    }
    return this.c
};
var QC = function (a) {
    a.b || (a.b = kC(a), a.b.sort(function (a, c) {
        var b = a.Nb();
        a = a.Ob();
        var e = c.Nb();
        c = c.Ob();
        return b == e && a == c ? 0 : PC(b, a, e, c) ? 1 : -1
    }));
    return a.b
};
x = OC.prototype;
x.Nb = function () {
    return QC(this)[0].Nb()
};
x.Ob = function () {
    return QC(this)[0].Ob()
};
x.mc = function () {
    return kg(QC(this)).mc()
};
x.nc = function () {
    return kg(QC(this)).nc()
};
x.Ve = function () {
    return 0 == this.a.length || 1 == this.a.length && this.wd(0).Ve()
};
x.Ue = function () {
    return ng(kC(this), function (a) {
        return a.Ue()
    }).join("")
};
x.Hb = function () {
    return new RC(this)
};
x.select = function () {
    var a = jC(tk(ik(G ? this.Te() : this.Nb())));
    a.removeAllRanges();
    for (var b = 0, c = this.Vd(); b < c; b++) a.addRange(this.wd(b).ng())
};
var RC = function (a) {
    this.a = null;
    this.b = 0;
    a && (this.a = ng(QC(a), function (a) {
        return vn(a)
    }));
    hC.call(this, a ? this.F() : null, !1, !0)
};
C(RC, mC);
RC.prototype.F = function () {
    return this.a[0].F()
};
RC.prototype.v = function () {
    return this.a[this.b].v()
};
RC.prototype.next = function () {
    try {
        var a = this.a[this.b],
            b = a.next();
        gC(this, a.o, a.j, a.g);
        return b
    } catch (c) {
        if (c !== tn || this.a.length - 1 == this.b) throw c;
        this.b++;
        return this.next()
    }
};
var TC = function () {
        var a = jC(window);
        return a && SC(a)
    },
    SC = function (a) {
        var b = !1;
        if (a.createRange) try {
            var c = a.createRange()
        } catch (e) {
            return null
        } else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new OC;
                c = 0;
                for (var d = a.rangeCount; c < d; c++) b.a.push(a.getRangeAt(c));
                return b
            }
            c = a.getRangeAt(0);
            b = PC(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else return null;
        (a = c) && a.addElement ? (b = new KC, b.a = a, a = b) : a = GC(EC(a), b);
        return a
    },
    PC = function (a, b, c, d) {
        if (a == c) return d < b;
        var e;
        if (1 == a.nodeType && b)
            if (e = a.childNodes[b]) a =
                e, b = 0;
            else if (Mk(a, c)) return !0;
        if (1 == c.nodeType && d)
            if (e = c.childNodes[d]) c = e, d = 0;
            else if (Mk(c, a)) return !1;
        return 0 < (Pk(a, c) || b - d)
    };
var UC = function () {
        var a = TC();
        return null != a && !a.Ve() && 0 < a.Ue().length
    },
    VC = function (a) {
        TC();
        HC(a, void 0).select();
        a.setAttribute("tabIndex", "-1");
        return !0
    };
var WC = function (a, b, c, d, e, f) {
    this.C = Kp.M();
    this.v = b;
    this.g = c;
    this.F = d;
    this.o = e || null;
    this.m = f;
    this.b = this.c = this.a = 0;
    this.G = rp.M();
    this.delay = new Ju(this.xf, 3E3, this);
    this.j = a;
    O(a, zb, this.mj, !1, this);
    O(a, Ed, this.nj, !1, this);
    O(a, yb, this.di, !1, this);
    O(a, r, this.lj, !1, this);
    O(y, ib, this.flush, !1, this);
    O(y, hb, this.flush, !1, this)
};
C(WC, gl);
x = WC.prototype;
x.flush = function () {
    this.delay.stop();
    0 < this.a + this.c + this.b && this.xf()
};
x.T = function () {
    this.flush();
    this.delay.Da();
    Nl(this.j, zb, this.mj, !1, this);
    Nl(this.j, Ed, this.nj, !1, this);
    Nl(this.j, yb, this.di, !1, this);
    Nl(this.j, r, this.lj, !1, this);
    Nl(y, ib, this.flush, !1, this);
    Nl(y, hb, this.flush, !1, this);
    WC.w.T.call(this)
};
x.mj = function () {
    this.delay.stop();
    if (z(this.m)) {
        var a = this.m().length,
            b = null != y.getSelection ? y.getSelection().toString().length : document.selection && "Control" != document.selection.type ? document.selection.createRange().text.length : 0;
        this.xf(1, a, b);
        tp(this.G, this.g, a, b)
    } else this.xf(1), tp(this.G, this.g)
};
x.xf = function (a, b, c) {
    a = {
        cpy: a || 0,
        clk: this.a,
        sel: this.c,
        ctx: this.b
    };
    null != b && null != c && (a.ql = b, a.cpl = c);
    null != this.o && (a.sl = XC(this.o), a.tl = YC(this.o));
    Pp(this.C, this.F, "ilog", this.v, a);
    this.b = this.c = this.a = 0
};
x.nj = function () {
    if (UC()) {
        this.c++;
        var a = this.G;
        S(a, sp(a, 211, this.g));
        59 <= this.c ? this.flush() : this.delay.start()
    }
};
x.lj = function (a) {
    tl(a) && (this.a++, a = this.G, S(a, sp(a, 212, this.g)), 59 <= this.a ? this.flush() : this.delay.start())
};
x.di = function () {
    this.b++;
    var a = this.G;
    S(a, sp(a, 210, this.g));
    59 <= this.b ? this.flush() : this.delay.start()
};
var ZC = {
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "caps-lock",
    27: "esc",
    32: "space",
    33: "pg-up",
    34: "pg-down",
    35: Pb,
    36: "home",
    37: vd,
    38: "up",
    39: ee,
    40: "down",
    45: "insert",
    46: "delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    59: "semicolon",
    61: "equals",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    93: "context",
    96: "num-0",
    97: "num-1",
    98: "num-2",
    99: "num-3",
    100: "num-4",
    101: "num-5",
    102: "num-6",
    103: "num-7",
    104: "num-8",
    105: "num-9",
    106: "num-multiply",
    107: "num-plus",
    109: "num-minus",
    110: "num-period",
    111: "num-division",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    186: "semicolon",
    187: "equals",
    189: "dash",
    188: ",",
    190: ".",
    191: "/",
    192: "`",
    219: "open-square-bracket",
    220: "\\",
    221: "close-square-bracket",
    222: "single-quote",
    224: "win"
};
var bD = function (a) {
        R.call(this);
        this.b = this.c = {};
        this.g = 0;
        this.L = yh($C);
        this.O = yh(aD);
        this.m = !0;
        this.j = null;
        this.a = a;
        O(this.a, od, this.o, void 0, this);
        Ph && O(this.a, pd, this.F, void 0, this);
        O(this.a, qd, this.v, void 0, this)
    },
    cD;
C(bD, R);
var dD = function (a) {
        this.a = a || null;
        this.next = a ? null : {}
    },
    $C = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
    aD = ["color", "date", "datetime", "datetime-local", "email", "month", Md, "password", "search", "tel", Ne, "time", "url", "week"];
bD.prototype.D = function (a, b) {
    eD(this.c, fD(arguments), a)
};
var fD = function (a) {
    if (Pf(a[1])) a = ng(gD(a[1]), function (a) {
        return hD(a.key || "", a.keyCode, a.Sl)
    });
    else {
        var b = a,
            c = 1;
        Yf(a[1]) && (b = a[1], c = 0);
        for (a = []; c < b.length; c += 2) a.push(hD("", b[c], b[c + 1]))
    }
    return a
};
bD.prototype.T = function () {
    bD.w.T.call(this);
    this.c = {};
    Nl(this.a, od, this.o, !1, this);
    Ph && Nl(this.a, pd, this.F, !1, this);
    Nl(this.a, qd, this.v, !1, this);
    this.a = null
};
var gD = function (a) {
    a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
    a = a.split(" ");
    for (var b = [], c, d = 0; c = a[d]; d++) {
        var e = c.split("+"),
            f = null,
            g = null;
        c = 0;
        for (var l, m = 0; l = e[m]; m++) {
            switch (l) {
                case "shift":
                    c |= 1;
                    continue;
                case "ctrl":
                    c |= 2;
                    continue;
                case "alt":
                    c |= 4;
                    continue;
                case "meta":
                    c |= 8;
                    continue
            }
            e = void 0;
            f = l;
            if (!cD) {
                g = {};
                for (e in ZC) g[ZC[e]] = Vl(parseInt(e, 10));
                cD = g
            }
            g = cD[f];
            f = l;
            break
        }
        b.push({
            key: f,
            keyCode: g,
            Sl: c
        })
    }
    return b
};
bD.prototype.v = function (a) {
    Lh && (32 == this.j && 32 == a.keyCode && a.preventDefault(), this.j = null);
    Ph && !this.C && Ph && a.ctrlKey && a.altKey && this.o(a)
};
bD.prototype.F = function (a) {
    32 < a.keyCode && Ph && a.ctrlKey && a.altKey && (this.C = !0)
};
var eD = function (a, b, c) {
        var d = b.shift();
        D(d, function (c) {
            if ((c = a[c]) && (0 == b.length || c.a)) throw Error("Keyboard shortcut conflicts with existing shortcut");
        });
        b.length ? D(d, function (d) {
            d = d.toString();
            var e = new dD;
            d = d in a ? a[d] : a[d] = e;
            eD(d.next, b.slice(0), c)
        }) : D(d, function (b) {
            a[b] = new dD(c)
        })
    },
    iD = function (a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = a[b[c]];
            if (d) return d
        }
    },
    hD = function (a, b, c) {
        c = c || 0;
        b = ["c_" + b + "_" + c];
        "" != a && b.push("n_" + a + "_" + c);
        return b
    };
bD.prototype.o = function (a) {
    a: {
        var b = a.keyCode;
        if ("" != a.key) {
            var c = a.key;
            if ("Control" == c || "Shift" == c || "Meta" == c || "AltGraph" == c) {
                b = !1;
                break a
            }
        } else if (16 == b || 17 == b || 18 == b) {
            b = !1;
            break a
        }
        c = a.target;
        var d = c.tagName == Oa || c.tagName == Ea || c.tagName == wa || c.tagName == Ka,
            e = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
        b = !d && !e || this.L[b] ? !0 : e ? !1 : a.altKey || a.ctrlKey || a.metaKey ? !0 : c.tagName == Ea && this.O[c.type] ? 13 == b : c.tagName == Ea || c.tagName == wa ? 32 != b : !1
    }
    if (b)
        if (a.type == od && Ph && a.ctrlKey &&
            a.altKey) this.C = !1;
        else {
            b = Vl(a.keyCode);
            c = hD(a.key, b, (a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0));
            d = iD(this.b, c);
            if (!d || 1500 <= hg() - this.g) this.b = this.c, this.g = hg();
            (d = iD(this.b, c)) && d.next && (this.b = d.next, this.g = hg());
            d && (d.next ? a.preventDefault() : (this.b = this.c, this.g = hg(), this.m && a.preventDefault(), c = d.a, d = a.target, e = this.dispatchEvent(new jD(re, c, d)), (e &= this.dispatchEvent(new jD("shortcut_" + c, c, d))) || a.preventDefault(), Lh && (this.j = b)))
        }
};
var jD = function (a, b, c) {
    N.call(this, a, c);
    this.identifier = b
};
C(jD, N);
var kD = function (a) {
    this.c = a;
    this.g = Kp.M();
    this.G = rp.M();
    this.a = new bD(document);
    this.a.m = !1;
    this.a.D("CTRL_SHIFT_S", 83, (Oh ? 8 : 2) | 1);
    O(this.a, re, this.b, !1, this)
};
C(kD, gl);
kD.prototype.T = function () {
    kD.w.T.call(this);
    Nl(this.a, re, this.b, !1, this)
};
kD.prototype.b = function (a) {
    "CTRL_SHIFT_S" == a.identifier && (this.c.b.dispatchEvent(n), a = this.G, S(a, T(a, 289)), this.g.log("swaplang"))
};
var mD = function (a, b, c, d, e, f) {
    R.call(this);
    this.H = a;
    this.g = K(k, ue);
    this.C = b;
    a = J(ue, this.H) ? Gk(this.H.firstElementChild) : Gk(this.H);
    this.c = c ? c : a.length;
    Ck(this.H);
    this.b = !!d;
    this.o = !!e;
    this.a = [];
    c = this.b ? this.c + 1 : this.c;
    for (d = 0; d < c; ++d) e = new sv(""), e.Pa(16, !0), O(e, n, this.O, !1, this), e.sa(this.g), pu(e.c, e, 0 == d ? 2 : 3), this.a.push(e);
    this.H.appendChild(this.g);
    this.j = [];
    this.m = K(k, "ls-left-arrow");
    this.v = K(k, "ls-right-arrow");
    this.F = 0;
    f && (this.H.insertBefore(this.m, this.H.firstChild), this.H.appendChild(this.v),
        O(this.m, Dd, function () {
            lD(this, 2)
        }, !1, this), O(this.m, Cd, function () {
        clearTimeout(this.F)
    }, !1, this), O(this.v, Dd, function () {
        lD(this, -2)
    }, !1, this), O(this.v, Cd, function () {
        clearTimeout(this.F)
    }, !1, this));
    this.G = rp.M()
};
C(mD, R);
var lD = function (a, b) {
    a.g.scrollLeft -= b;
    a.F = setTimeout(function () {
        lD(a, b)
    }, 10)
};
mD.prototype.L = function (a) {
    var b = a.selected;
    a = a.data.slice(0, this.c);
    var c = this.j.slice();
    c.length = this.c;
    a: {
        c = zg(c).sort();
        var d = zg(a).sort();
        if (Zf(c) && Zf(d) && c.length == d.length) {
            for (var e = c.length, f = 0; f < e; f++)
                if (c[f] !== d[f]) {
                    c = !1;
                    break a
                }
            c = !0
        } else c = !1
    }
    c = !c;
    this.j = a;
    a = 0;
    this.b && this.o && (a = 1);
    for (d = 0; d < this.j.length; d++) {
        e = this.a[a];
        f = this.j[d];
        if (c) {
            e.Ze(f);
            var g = this.C(f);
            e.g(g)
        }
        nD(e, e.W() == b, f);
        a++
    }
    for (; a < this.c; a++) this.a[a].setVisible(!1);
    this.b && (a = this.a[this.o ? 0 : this.a.length - 1], a.Ze(eb),
        a.g(detect_language), nD(a, a.W() == b));
    X(this.H, !0)
};
mD.prototype.O = function (a) {
    var b = a.currentTarget.W();
    if (a.currentTarget.Ya()) {
        a: {
            var c = a.currentTarget;
            for (var d = 0, e = 0; d < this.a.length; d++) {
                var f = this.a[d];
                if (f && f.isVisible()) {
                    if (c == f) {
                        c = e;
                        break a
                    }
                    e++
                }
            }
            c = -1
        }
        zp(this.G, this.b, 2, b, c)
    } else a.currentTarget.Sa(!0);
    ct(a.currentTarget.l(), this.H);
    this.dispatchEvent({
        type: r,
        data: b
    })
};
var nD = function (a, b, c) {
    a.setVisible(!0);
    a.Sa(b);
    c && (a.l().id = "sugg-item-" + c)
};
mD.prototype.D = function (a) {
    if (this.b) {
        var b = this.a[this.o ? 0 : this.a.length - 1];
        "" == a.data ? b.g(detect_language) : (a = source_language_detected.replace(/%\d\$s/g, this.C(a.data)), b.g(a))
    }
};
var oD = function (a) {
        this.a = a;
        this.b = this.F = this.v = this.j = this.g = null;
        this.D = !1;
        this.c = null;
        this.C = w("");
        this.o = Kp.M();
        this.ia = lp.M();
        this.G = rp.M();
        this.m = null
    },
    qD = function (a, b) {
        b.Ti && (a.g = b.Ti, O(a.g, n, a.J, !1, a), pD(a, a.a, Ee, a.xl), pD(a, a.a, Ib, a.Uk));
        b.aj && (a.j = b.aj, O(a.j, n, a.N, !1, a), pD(a, a.a, Re, a.Bl));
        b.nm && (a.ea = b.nm, pD(a, a.ea, n, a.O));
        b.Am && (a.R = b.Am, pD(a, a.R, n, A(a.L, a, "src", !0)));
        b.Em && (a.V = b.Em, pD(a, a.V, n, A(a.L, a, "tgt", !1)));
        if (b.Ui) {
            a.v = b.Ui;
            pD(a, a.v, r, a.yl);
            var c = a.v;
            O(a.a, He, c.L, !1, c);
            c = a.v;
            O(a.a,
                Ib, c.D, !1, c)
        }
        b.bj && (a.F = b.bj, pD(a, a.F, r, a.Cl), c = a.F, O(a.a, Ie, c.L, !1, c));
        b.Yi && (a.b = b.Yi, pD(a, a.b, n, a.zl));
        b.ej && (a.c = b.ej, pD(a, new Tt(a.c.l()), nd, a.ji), pD(a, new qy(a.c.l()), Ud, a.ji));
        b.Qh && (a.C = b.Qh)
    },
    sD = function (a, b) {
        (a.D = b) && a.b ? a.b.oa(!1) : rD(a)
    },
    pD = function (a, b, c, d) {
        b && O(b, c, d, !1, a)
    };
oD.prototype.J = function () {
    var a = this.g,
        b = this.a.o;
    var c = Qy(this.a.V);
    tD(this, a, b, c, "slc")
};
oD.prototype.N = function () {
    var a = this.j,
        b = this.a.m;
    var c = Qy(this.a.X.a);
    tD(this, a, b, c, "tlc", !0)
};
var uD = function (a, b, c) {
    var d = {};
    d.lpk = c;
    a.m = d;
    a.m.lsa = b;
    Pp(a.o, "t", "lsa", b, d)
};
oD.prototype.O = function () {
    this.g && this.g.isVisible() ? (uD(this, "lso", "src"), yp(this.G, 217)) : this.j && this.j.isVisible() && (uD(this, "lso", "tgt"), yp(this.G, 219))
};
oD.prototype.L = function (a, b) {
    uD(this, "lsc", a);
    yp(this.G, b ? 218 : 220)
};
var tD = function (a, b, c, d, e, f) {
    var g = b.W(),
        l = vD(a),
        m = wD(a, f);
    c.call(a.a, g, 4);
    null != b.Ma && wh(l, b.Ma);
    "" != d && (l.emphlang = d);
    b = Qy(a.a.F.a);
    f || "" == b || (l.bslang = b);
    "" != m && (l.sugglang = m);
    a.m = l;
    a.m[e] = g;
    Pp(a.o, "t", e, g, l)
};
x = oD.prototype;
x.xl = function (a) {
    this.g.W() != a.data && this.g.ac(a.data);
    rD(this);
    a.Bh && (xD(this, "slauto", vD(this)), yp(this.G, 221))
};
x.Uk = function () {
    rD(this)
};
x.Bl = function (a) {
    this.j.W() != a.data && this.j.ac(a.data);
    rD(this);
    a.Bh && (xD(this, "tlauto", vD(this)), yp(this.G, 222))
};
x.yl = function (a) {
    if (a.data == this.a.a) a.target.dispatchEvent({
        type: "clickSelected"
    }), a.preventDefault();
    else {
        var b = this.a.o,
            c = wD(this),
            d = vD(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        xD(this, "ssuggclick", d)
    }
};
x.Cl = function (a) {
    if (a.data == this.a.b) a.target.dispatchEvent({
        type: "clickSelected"
    }), a.preventDefault();
    else {
        var b = this.a.m,
            c = wD(this, !0),
            d = vD(this, a.data);
        b.call(this.a, a.data, 3);
        d.sugglang = c;
        xD(this, "tsuggclick", d)
    }
};
x.zl = function () {
    var a = vD(this),
        b = this.a.a,
        c = this.a.b,
        d = b;
    if (b == eb && (d = this.a.c, !d)) return;
    (b = this.C()) && this.c && (this.c.b(b), qp(this.ia, 28));
    xD(this, "swapclick", a);
    a = this.a;
    a.o(c, 5);
    a.m(d, 5);
    a.dispatchEvent(td);
    Sp(this.o, "swap", 1, Va);
    c = this.G;
    d = T(c, 89);
    a = new hp;
    H(a, 1, 1);
    xi(d, 46, a);
    S(c, d)
};
x.ji = function (a) {
    if (a.type == Ud || 2 > Lg(this.c.W()).length) this.a.D = !1
};
var vD = function (a, b) {
        var c = {};
        c.sl = a.a.a;
        c.tl = a.a.b;
        b && (c.val = b);
        (b = a.a.c) && (c.dsl = b);
        a.c && (c.ql = Lg(a.c.W()).length);
        return c
    },
    yD = function (a) {
        Sp(a.o, "ssel", a.a.ia);
        Sp(a.o, "tsel", a.a.$)
    },
    xD = function (a, b, c) {
        a.m = c;
        a.o.log(b, c)
    },
    wD = function (a, b) {
        return b ? Qy(a.a.L.a) : Qy(a.a.C.a)
    },
    rD = function (a) {
        if (a.b && !a.D) {
            var b = a.a.a;
            b == eb && (b = a.a.c);
            b == tf && a.a.v == uf && (b = uf);
            "" == b || b == a.a.b ? a.b.oa(!1) : a.b.oa(!0)
        }
    };
var zD = zf("a");
zD.prototype.Ka = w(null);
zD.prototype.Na = v("a");
var AD = {
        "* ARIA-CHECKED": !0,
        "* ARIA-COLCOUNT": !0,
        "* ARIA-COLINDEX": !0,
        "* ARIA-DESCRIBEDBY": !0,
        "* ARIA-DISABLED": !0,
        "* ARIA-LABEL": !0,
        "* ARIA-LABELLEDBY": !0,
        "* ARIA-READONLY": !0,
        "* ARIA-REQUIRED": !0,
        "* ARIA-ROWCOUNT": !0,
        "* ARIA-ROWINDEX": !0,
        "* ARIA-SELECTED": !0,
        "* ABBR": !0,
        "* ACCEPT": !0,
        "* ACCESSKEY": !0,
        "* ALIGN": !0,
        "* ALT": !0,
        "* AUTOCOMPLETE": !0,
        "* AXIS": !0,
        "* BGCOLOR": !0,
        "* BORDER": !0,
        "* CELLPADDING": !0,
        "* CELLSPACING": !0,
        "* CHAROFF": !0,
        "* CHAR": !0,
        "* CHECKED": !0,
        "* CLEAR": !0,
        "* COLOR": !0,
        "* COLSPAN": !0,
        "* COLS": !0,
        "* COMPACT": !0,
        "* COORDS": !0,
        "* DATETIME": !0,
        "* DIR": !0,
        "* DISABLED": !0,
        "* ENCTYPE": !0,
        "* FACE": !0,
        "* FRAME": !0,
        "* HEIGHT": !0,
        "* HREFLANG": !0,
        "* HSPACE": !0,
        "* ISMAP": !0,
        "* LABEL": !0,
        "* LANG": !0,
        "* MAXLENGTH": !0,
        "* METHOD": !0,
        "* MULTIPLE": !0,
        "* NOHREF": !0,
        "* NOSHADE": !0,
        "* NOWRAP": !0,
        "* READONLY": !0,
        "* REL": !0,
        "* REV": !0,
        "* ROLE": !0,
        "* ROWSPAN": !0,
        "* ROWS": !0,
        "* RULES": !0,
        "* SCOPE": !0,
        "* SELECTED": !0,
        "* SHAPE": !0,
        "* SIZE": !0,
        "* SPAN": !0,
        "* START": !0,
        "* SUMMARY": !0,
        "* TABINDEX": !0,
        "* TITLE": !0,
        "* TYPE": !0,
        "* VALIGN": !0,
        "* VALUE": !0,
        "* VSPACE": !0,
        "* WIDTH": !0
    },
    BD = {
        "* USEMAP": !0,
        "* ACTION": !0,
        "* CITE": !0,
        "* HREF": !0,
        "* LONGDESC": !0,
        "* SRC": !0,
        "LINK HREF": !0,
        "* FOR": !0,
        "* HEADERS": !0,
        "* NAME": !0,
        "A TARGET": !0,
        "* CLASS": !0,
        "* ID": !0,
        "* STYLE": !0
    };
var CD = {};

function DD(a) {
    if (G && !ai(9)) return [0, 0, 0, 0];
    var b = CD.hasOwnProperty(a) ? CD[a] : null;
    if (b) return b;
    65536 < Object.keys(CD).length && (CD = {});
    var c = [0, 0, 0, 0];
    b = ED(a, /\\[0-9A-Fa-f]{6}\s?/g);
    b = ED(b, /\\[0-9A-Fa-f]{1,5}\s/g);
    b = ED(b, /\\./g);
    b = b.replace(/:not\(([^\)]*)\)/g, "     $1 ");
    b = b.replace(/{[^]*/gm, "");
    b = FD(b, c, /(\[[^\]]+\])/g, 2);
    b = FD(b, c, /(#[^\#\s\+>~\.\[:]+)/g, 1);
    b = FD(b, c, /(\.[^\s\+>~\.\[:]+)/g, 2);
    b = FD(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
    b = FD(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
    b = FD(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    FD(b, c, /([^\s\+>~\.\[:]+)/g, 3);
    b = c;
    return CD[a] = b
}

function FD(a, b, c, d) {
    return a.replace(c, function (a) {
        b[d] += 1;
        return Array(a.length + 1).join(" ")
    })
}

function ED(a, b) {
    return a.replace(b, function (a) {
        return Array(a.length + 1).join("A")
    })
};
var GD = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    },
    HD = /[\n\f\r"'()*<>]/g,
    ID = {
        "\n": "%0a",
        "\f": "%0c",
        "\r": "%0d",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "*": "%2a",
        "<": "%3c",
        ">": "%3e"
    };

function JD(a) {
    return ID[a]
}
var KD = function (a, b, c) {
    b = Lg(b);
    if ("" == b) return null;
    var d = String(b.substr(0, 4)).toLowerCase();
    if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
        if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c) a = null;
        else {
            a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
                var e = "\"'".charAt(d);
                if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                    b = b.substring(1, b.length - 1);
                    break a
                }
            }
            a = c ? (a = c(b, a)) && jj(a) != Ta ? 'url("' + jj(a).replace(HD, JD) + '")' : null : null
        }
        return a
    }
    if (0 < b.indexOf("(")) {
        if (/"|'/.test(b)) return null;
        for (a = /([\-\w]+)\(/g; c = a.exec(b);)
            if (!(c[1] in GD)) return null
    }
    return b
};

function LD(a, b) {
    a = y[a];
    return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
}

function MD(a, b) {
    return (a = y[a]) && a.prototype && a.prototype[b] || null
}
var ND = LD(Ba, cb) || LD("Node", cb),
    OD = MD(Ba, Nc),
    PD = MD(Ba, Xb),
    QD = MD(Ba, oe),
    RD = MD(Ba, ae),
    SD = MD(Ba, Yb),
    TD = MD(Ba, "matches") || MD(Ba, Gd),
    UD = LD("Node", Id),
    VD = LD("Node", Jd),
    WD = LD("Node", "parentNode"),
    XD = LD("HTMLElement", Le) || LD(Ba, Le),
    YD = LD("HTMLStyleElement", "sheet"),
    ZD = MD(xa, Zb),
    $D = MD(xa, "setProperty");

function aE(a, b, c, d) {
    if (a) return a.apply(b);
    a = b[c];
    if (!d(a)) throw Error(ya);
    return a
}

function bE(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (G && 10 > document.documentMode) {
        if (!b[c].call) throw Error("IE Clobbering detected");
    } else if (typeof b[c] != Wb) throw Error(ya);
    return b[c].apply(b, d)
}

function cE(a) {
    return aE(ND, a, cb, function (a) {
        return a instanceof NamedNodeMap
    })
}

function dE(a, b, c) {
    try {
        bE(QD, a, oe, [b, c])
    } catch (d) {
        if (-1 == d.message.indexOf("A security problem occurred")) throw d;
    }
}

function eE(a) {
    return aE(XD, a, Le, function (a) {
        return a instanceof CSSStyleDeclaration
    })
}

function fE(a) {
    return aE(YD, a, "sheet", function (a) {
        return a instanceof CSSStyleSheet
    })
}

function gE(a) {
    return aE(UD, a, Id, function (a) {
        return typeof a == Ke
    })
}

function hE(a) {
    return aE(VD, a, Jd, function (a) {
        return typeof a == Md
    })
}

function iE(a) {
    return aE(WD, a, "parentNode", function (a) {
        return !(a && typeof a.name == Ke && a.name && "parentnode" == a.name.toLowerCase())
    })
}

function jE(a, b) {
    return bE(ZD, a, a.getPropertyValue ? Zb : Xb, [b]) || ""
}

function kE(a, b, c) {
    bE($D, a, a.setProperty ? "setProperty" : oe, [b, c])
};
var lE = G && 10 > document.documentMode ? null : /\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g,
    mE = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    },
    pE = function (a, b, c) {
        var d = [];
        a = nE(zg(a.cssRules));
        D(a, function (a) {
            if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
            if (!(b && G && 10 == document.documentMode && /\\['"]/.test(a.selectorText))) {
                var e = b ? a.selectorText.replace(lE, "#" + b + " $1") : a.selectorText;
                d.push(Ej(e, oE(a.style, c)))
            }
        });
        return Gj(d)
    },
    nE = function (a) {
        return mg(a, function (a) {
            return a instanceof CSSStyleRule || a.type == CSSRule.STYLE_RULE
        })
    },
    rE = function (a, b, c) {
        a = qE("<style>" + a + "</style>");
        return null == a ? Hj : pE(a.sheet, void 0 != b ? b : null, c)
    },
    qE = function (a) {
        return G && !ai(10) || typeof y.DOMParser != Wb ? null : (new DOMParser).parseFromString("<html><head></head><body>" + a + "</body></html>", "text/html").body.children[0]
    },
    oE = function (a, b) {
        if (!a) return sj;
        var c = document.createElement("div").style,
            d = sE(a);
        D(d, function (d) {
            var e = Mh && d in mE ?
                d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            Gg(e, "--") || Gg(e, "var") || (d = jE(a, d), d = KD(e, d, b), null != d && kE(c, e, d))
        });
        return rj(c.cssText || "")
    },
    wE = function (a) {
        var b = Array.from(bE(SD, a, Yb, [Ma])),
            c = Fg(b, function (a) {
                return zg(fE(a).cssRules)
            });
        c = nE(c);
        c.sort(function (a, b) {
            a = DD(a.selectorText);
            a: {
                b = DD(b.selectorText);
                for (var c = Math.min(a.length, b.length), d = 0; d < c; d++) {
                    var e = a[d];
                    var f = b[d];
                    e = e > f ? 1 : e < f ? -1 : 0;
                    if (0 != e) {
                        a = e;
                        break a
                    }
                }
                a = a.length;
                b = b.length;
                a = a > b ? 1 : a < b ? -1 :
                    0
            }
            return -a
        });
        a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
        for (var d; d = a.nextNode();) D(c, function (a) {
            bE(TD, d, d.matches ? "matches" : Gd, [a.selectorText]) && a.style && tE(d, a.style)
        });
        D(b, Fk)
    },
    tE = function (a, b) {
        var c = sE(a.style),
            d = sE(b);
        D(d, function (d) {
            if (!(0 <= c.indexOf(d))) {
                var e = jE(b, d);
                kE(a.style, d, e)
            }
        })
    },
    sE = function (a) {
        Zf(a) ? a = zg(a) : (a = ph(a), wg(a, "cssText"));
        return a
    };
var xE = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"),
    yE = 0,
    zE = function () {
        this.c = [];
        this.b = [];
        this.a = "data-elementweakmap-index-" + yE++
    };
zE.prototype.set = function (a, b) {
    if (bE(OD, a, Nc, [this.a])) {
        var c = parseInt(bE(PD, a, Xb, [this.a]) || null, 10);
        this.b[c] = b
    } else c = this.b.push(b) - 1, dE(a, this.a, c.toString()), this.c.push(a);
    return this
};
zE.prototype.get = function (a) {
    if (bE(OD, a, Nc, [this.a])) return a = parseInt(bE(PD, a, Xb, [this.a]) || null, 10), this.b[a]
};
zE.prototype.clear = function () {
    this.c.forEach(function (a) {
        bE(RD, a, ae, [this.a])
    }, this);
    this.c = [];
    this.b = []
};
var AE = !G || ci(10),
    BE = u();
var CE = {
    APPLET: !0,
    AUDIO: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0,
    VIDEO: !0
};
var DE = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    WBR: !0
};
var HE = function (a) {
    a = a || new EE;
    FE(a);
    this.a = uh(a.a);
    this.g = uh(a.C);
    this.j = uh(a.L);
    this.v = a.v;
    D(a.o, function (a) {
        this.a["* " + a.toUpperCase()] = GE
    }, this);
    this.m = a.c;
    this.c = a.F;
    this.b = null;
    this.o = a.m
};
C(HE, BE);
var IE = function (a) {
        return function (b, c) {
            return (b = a(Lg(b), c)) && jj(b) != Ta ? jj(b) : null
        }
    },
    EE = function () {
        this.a = {};
        D([AD, BD], function (a) {
            D(ph(a), function (a) {
                this.a[a] = GE
            }, this)
        }, this);
        this.b = {};
        this.o = [];
        this.C = uh(CE);
        this.L = uh(DE);
        this.v = !1;
        this.J = mj;
        this.O = this.j = this.D = this.c = Pi;
        this.F = null;
        this.g = this.m = !1
    },
    JE = function (a, b) {
        return function (c, d, e, f) {
            c = a(c, d, e, f);
            return null == c ? null : b(c, d, e, f)
        }
    },
    KE = function (a, b, c, d) {
        a[c] && !b[c] && (a[c] = JE(a[c], d))
    },
    FE = function (a) {
        if (a.g) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
        KE(a.a, a.b, "* USEMAP", LE);
        var b = IE(a.J);
        D(["* ACTION", "* CITE", "* HREF"], function (a) {
            KE(this.a, this.b, a, b)
        }, a);
        var c = IE(a.c);
        D(["* LONGDESC", "* SRC", "LINK HREF"], function (a) {
            KE(this.a, this.b, a, c)
        }, a);
        D(["* FOR", "* HEADERS", "* NAME"], function (a) {
            KE(this.a, this.b, a, gg(ME, this.D))
        }, a);
        KE(a.a, a.b, "A TARGET", gg(NE, ["_blank", "_self"]));
        KE(a.a, a.b, "* CLASS", gg(OE, a.j));
        KE(a.a, a.b, "* ID", gg(PE, a.j));
        KE(a.a, a.b, "* STYLE", gg(a.O, c));
        a.g = !0
    },
    QE = function (a, b) {
        a || (a = "*");
        return (a + " " + b).toUpperCase()
    },
    GE = function (a) {
        return Lg(a)
    },
    NE = function (a, b) {
        b = Lg(b);
        return tg(a, b.toLowerCase()) ? b : null
    },
    LE = function (a) {
        return (a = Lg(a)) && "#" == a.charAt(0) ? a : null
    },
    ME = function (a, b, c) {
        return a(Lg(b), c)
    },
    OE = function (a, b, c) {
        b = b.split(/(?:\s+)/);
        for (var d = [], e = 0; e < b.length; e++) {
            var f = a(b[e], c);
            f && d.push(f)
        }
        return 0 == d.length ? null : d.join(" ")
    },
    PE = function (a, b, c) {
        return a(Lg(b), c)
    },
    RE = function (a, b) {
        var c = b.data;
        (b = iE(b)) && gE(b).toLowerCase() == Le && !(Ma in a.g) && Ma in a.j && (c = Fj(rE(c, a.b, A(function (a, b) {
            return this.m(a, {
                Cq: b
            })
        }, a))));
        return document.createTextNode(c)
    },
    SE = function (a) {
        var b = new EE;
        b = new HE(b);
        var c = !(Ma in b.g) && Ma in b.j;
        c = "*" == b.c && c ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ hg()).toString(36)) : b.c;
        b.b = c;
        if (AE) {
            c = a;
            if (AE) {
                a = xk(La);
                b.b && "*" == b.c && (a.id = b.b);
                b.o && (c = qE("<div>" + c + pa), wE(c), c = c.innerHTML);
                var d = document.createElement("template");
                if ("content" in d) d.innerHTML = c, d = d.content;
                else {
                    var e = document.implementation.createHTMLDocument("x");
                    d = e.body;
                    e.body.innerHTML = c
                }
                c = document.createTreeWalker(d,
                    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
                for (d = xE ? new WeakMap : new zE; e = c.nextNode();) {
                    c: {
                        var f = b;
                        var g = e;
                        switch (hE(g)) {
                            case 3:
                                f = RE(f, g);
                                break c;
                            case 1:
                                if ("TEMPLATE" == gE(g).toUpperCase()) f = null;
                                else {
                                    var l = gE(g).toUpperCase();
                                    if (l in f.g) var m = null;
                                    else f.j[l] ? m = document.createElement(l) : (m = xk(La), f.v && dE(m, "data-sanitizer-original-tag", l.toLowerCase())); if (m) {
                                        var p = m,
                                            q = cE(g);
                                        if (null != q)
                                            for (var F = 0; l = q[F]; F++)
                                                if (l.specified) {
                                                    var B = f;
                                                    var M = g,
                                                        fa = l,
                                                        da = fa.name;
                                                    if (Gg(da, "data-sanitizer-")) B =
                                                        null;
                                                    else {
                                                        var Lb = gE(M);
                                                        fa = fa.value;
                                                        var Zc = {
                                                                tagName: Lg(Lb).toLowerCase(),
                                                                attributeName: Lg(da).toLowerCase()
                                                            },
                                                            Bb = {
                                                                yk: void 0
                                                            };
                                                        Zc.attributeName == Le && (Bb.yk = eE(M));
                                                        M = QE(Lb, da);
                                                        M in B.a ? (B = B.a[M], B = B(fa, Zc, Bb)) : (da = QE(null, da), da in B.a ? (B = B.a[da], B = B(fa, Zc, Bb)) : B = null)
                                                    }
                                                    null === B || dE(p, l.name, B)
                                                }
                                        f = m
                                    } else f = null
                                }
                                break c;
                            default:
                                f = null
                        }
                    }
                    if (f) {
                        if (1 == hE(f) && d.set(e, f), e = iE(e), g = !1, e) l = hE(e), m = gE(e).toLowerCase(), p = iE(e), 11 != l || p ? "body" == m && p && (l = iE(p)) && !iE(l) && (g = !0) : g = !0, l = null, g || !e ? l = a : 1 == hE(e) && (l = d.get(e)),
                        l.content && (l = l.content), l.appendChild(f)
                    } else Ck(e)
                }
                d.clear && d.clear();
                b = a
            } else b = xk(La);
            0 < cE(b).length && (a = xk(La), a.appendChild(b), b = a);
            b = b.innerHTML
        } else b = "";
        return Lj(b, null)
    };
var TE = u();
C(TE, $t);
Wf(TE);
TE.prototype.oc = w(zd);
TE.prototype.bb = function (a) {
    var b = SE(a.Kc),
        c = zk(document, b);
    b = c.querySelector("div");
    if (!b) throw Error("Invalid item label");
    b.innerHTML = a.Na();
    Fs(b, ["gt-is-sp", "gt-is-cont"]);
    b = [k, eu(this, a)];
    var d = K(k);
    V(d, Dc);
    var e = K(k);
    V(e, "gt-is-ai");
    c = K(k, null, c);
    V(c, "gt-is-lb");
    b = b.concat([e, d, c]);
    if (a.ib) {
        c = K("A", {
            href: "#"
        }, a.ib);
        V(c, "gt-is-act");
        var f = new tu;
        f.Y(c);
        Kt(f, a);
        c.addEventListener(Ed, function (a) {
            f.gb() && a.stopPropagation()
        });
        b.push(c)
    }
    b = K.apply(null, b);
    b.id = Ht(a);
    return a.H = b
};
TE.prototype.Qc = function (a) {
    return a.tagName == k
};
TE.prototype.Z = w("gt-is-itm");
var UE = function (a, b, c, d, e) {
    e = void 0 === e ? "" : e;
    tu.call(this, a.Na(), c || TE.M(), d);
    this.Fd = a;
    this.Kc = b;
    this.ib = e;
    this.Pa(1, !1)
};
C(UE, tu);
UE.prototype.Na = function () {
    return this.Fd.Na()
};
UE.prototype.Ka = function () {
    return this.Fd.Ka()
};
var VE = function (a) {
    N.call(this, a)
};
C(VE, N);
jk(window.document);
new R;
var WE = function (a) {
        var b = a.getBoundingClientRect();
        if (G) {
            var c = dt(a);
            a = it(a);
            b.left = c.b;
            b.right = c.b + a.width;
            b.top = c.a;
            b.bottom = c.a + a.height
        }
        return b
    },
    XE = function (a, b) {
        var c = jk(a),
            d = 0;
        if (Qf(b)) d = b;
        else if (G && !ai(9)) {
            if (b = c.a.selection.createRange()) try {
                var e = a.createTextRange(),
                    f = e.duplicate();
                e.moveToBookmark(b.getBookmark());
                f.setEndPoint("EndToStart", e);
                d = f.text.length
            } catch (p) {}
        } else d = a.selectionStart;
        e = "_h#" + dg(a);
        var g = c.l(e);
        g ? c.We(g) : g = c.b("PRE", {
            id: e
        });
        g.parentNode || c.a.body.appendChild(g);
        var l = [];
        D(a.value, function (a, b, c) {
            l.push(" " == a && b + 1 != c.length && " " == c[b + 1] ? "\u00a0" : a)
        });
        l = l.join("");
        c.appendChild(g, c.a.createTextNode(String(l.substring(0, d))));
        e = el(c, La);
        e.appendChild(c.a.createTextNode("\u200b"));
        c.appendChild(g, e);
        c.appendChild(g, c.a.createTextNode(String(l.substring(d) + " ")));
        c = Ds(a);
        D(c, function (a) {
            V(g, a)
        });
        var m = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
        D(["font-family", "font-size", "font-weight", "font-style",
            "text-transform", "text-decoration", "letter-spacing", "word-spacing", "line-height", "text-align", "vertical-align", Jb, "width", Pc, "margin-top", "margin-right", "margin-bottom", "margin-left", "padding-top", "padding-right", "padding-bottom", "padding-left", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "overflow-x", "overflow-y"
        ], function (b) {
            try {
                var c;
                (c = Ss(a, b) || (a.currentStyle ? a.currentStyle[b] :
                    null) || a.style[b]) && (m += b + ":" + c + ";")
            } catch (F) {}
        });
        g.style.cssText = m;
        c = Ts(a, "overflowX");
        g.style.overflowX = c && c != pf ? c : eb;
        c = Ts(a, "overflowY");
        g.style.overflowY = c && c != pf ? c : eb;
        g.scrollTop = a.scrollTop;
        g.scrollLeft = a.scrollLeft;
        Vs(g, Zs(a));
        c = WE(e);
        return a.tagName.toUpperCase() == Ea ? new ck(c.left, Math.ceil(dt(a).a + it(a).height)) : new ck(c.left, Math.ceil(c.bottom))
    };
var YE = function (a, b) {
    Y.call(this, b);
    this.m = a
};
C(YE, Y);
YE.prototype.c = "info";
YE.prototype.v = !1;
var ZE = {
    info: "jfk-butterBar-info",
    error: "jfk-butterBar-error",
    warning: "jfk-butterBar-warning",
    promo: "jfk-butterBar-promo"
};
YE.prototype.mb = v("c");
var $E = function (a, b) {
    a.m = b;
    if (b = a.l()) {
        var c = a.a;
        c.We(b);
        c.Sh(b, a.m)
    }
};
YE.prototype.isVisible = function () {
    var a = this.l();
    return null != a && Es(a, fd)
};
YE.prototype.setVisible = function (a) {
    Hs(this.l(), fd, a)
};
YE.prototype.Aa = function () {
    this.H = this.a.b(k, "jfk-butterBar");
    var a = this.l();
    a && (zs(a, "live", "assertive"), zs(a, "atomic", hf));
    $E(this, this.m);
    this.v = this.v;
    (a = this.l()) && Hs(a, "jfk-butterBar-mini", this.v);
    a = this.c;
    this.Yb() && Is(this.l(), ZE[this.c], ZE[a]);
    this.c = a
};
var bF = function (a, b, c) {
    R.call(this);
    this.v = c.client;
    this.g = a;
    this.a = b;
    this.o = c.Fl;
    this.ia = !1;
    this.C = c.rm;
    this.O = c.Gl;
    this.Ia = c.wk || null;
    this.N = c.qa;
    this.Tb = c.Jb;
    this.ra = c.Cm;
    this.Kc = c.Qm;
    this.D = null;
    this.R = c.Pm;
    this.Ha = c.Pl;
    this.L = 0;
    this.m = {};
    this.Lc = c.ik;
    this.jg = c.Gk;
    this.aa = c.ym;
    this.Ca = c.Aq;
    this.dc = c.Il;
    this.ic = !!c.Fq;
    this.$ = !!c.Eq;
    this.ea = !!c.zq;
    this.Sb = c.Iq || "Did you mean: <div>%1$s</div>";
    this.jc = c.Gq || "Translating <div>%1$s</div>";
    this.Rb = c.Hq || "Undo";
    this.pd = c.Jq || 500;
    a = new YE("");
    a.sa(I("gt-bbar"));
    a.setVisible(!1);
    this.V = a;
    this.c = this.b = this.j = "";
    this.F = Kp.M();
    "async_translate_onebox" == this.v && (this.F.o = "/translate");
    this.J = new yt(this);
    this.Ub = new Tt(this.o.l());
    this.wa = lp.M();
    this.G = rp.M();
    this.X = !0;
    aF(this)
};
C(bF, R);
var aF = function (a) {
    a.aa && a.J.K(a.Ub, nd, a.ib).K(a.o, ob, a.qb);
    a.J.K(a.a, n, a.Ma).K(a.o.l(), ib, a.hb).K(a.o.l(), Sb, a.ob).K(a.N, Ee, a.ma).K(a.N, Re, a.ma);
    null != a.O && a.J.K(a.O, ob, a.xb)
};
bF.prototype.update = function () {
    0 != this.j.length || this.ea ? this.X && (dF(this, this.g.a[0]), this.L++, this.m[this.L] = {}, this.m[this.L][0] = hg(), eF(this.ra, this.j, this.b, this.c, A(this.gc, this, this.j, this.b, this.c, this.L))) : cF(this)
};
var gF = function (a) {
    var b = a.a;
    b.c && b.removeChild(b.c, !0);
    b.c = null;
    fF(a, !!Nt(a.a))
};
bF.prototype.xb = function () {
    fC(this.O) && cF(this)
};
bF.prototype.ib = function (a) {
    if (!this.a.isVisible()) return !1;
    if (27 == a.keyCode) {
        var b = hF(this.g.a);
        Pp(this.F, this.v, "is", "0", {
            q: this.j,
            sl: this.b,
            tl: this.c,
            sn: b.length,
            s: b
        });
        b = this.G;
        var c = iF(this),
            d = jF(this);
        S(b, Ip(b, 204, c, d, kF(this), [], null != this.a.j, 0));
        cF(this)
    }
    13 == a.keyCode && -1 == this.a.Ea && (b = hF(this.g.a), Pp(this.F, this.v, "is", "8", {
        q: this.j,
        sl: this.b,
        tl: this.c,
        sn: b.length,
        s: b
    }), b = this.G, c = iF(this), d = jF(this), S(b, Ip(b, 205, c, d, kF(this), [], null != this.a.j, 0)), cF(this));
    if (36 == a.keyCode || 35 == a.keyCode) return !1;
    b = this.a.Wa(a);
    38 != a.keyCode && 40 != a.keyCode || -1 == this.a.Ea || (a = tA(this.a), a != this.a.c && this.o.W() != a.Na() && (this.ia = !0, qp(this.wa, "is"), this.o.b(a.Na()), dF(this)));
    return b
};
bF.prototype.qb = function (a) {
    this.ia ? this.ia = !1 : this.O && fC(this.O) ? cF(this) : a.qd == ne ? cF(this) : Xm(A(this.Jc, this, a), 0)
};
bF.prototype.Jc = function () {
    var a = Xg(this.o.W(), "\n") ? "" : lF(this.o.W()),
        b = this.N.a,
        c = this.N.b;
    if (a != this.j || b != this.b || c != this.c) this.j = a, this.b = b, this.c = c, this.update()
};
var lF = function (a) {
    return a.replace(/[ \n\t\r\f,\.\?!]+/g, " ").replace(/^ /, "")
};
bF.prototype.Ma = function (a) {
    var b = iF(this),
        c = jF(this),
        d = kF(this),
        e = [],
        f = null != this.a.j;
    if (a.target == this.a.j) f = this.G, S(f, Ip(f, 185, b, c, d, e, !0, 1)), mF(this, "it", "translationSelected", "");
    else if (a.target == this.a.g) a = this.G, S(a, Ip(a, 181, b, c, d, e, f, 1)), mF(this, "ss", "spellingSelected", c);
    else if (a.target.getParent && a.target.getParent() === this.a.g) mF(this, "ss", "ignoreSpellingSuggestion", "");
    else if (a.target == this.a.c) a = this.G, S(a, Ip(a, 183, b, c, d, e, f, 1)), mF(this, "ls", td, d[0]);
    else {
        a = a.target;
        a: {
            var g = this.a.b;
            for (var l = 0; l < g.length; l++)
                if (g[l] == a) {
                    g = l;
                    break a
                }
            g = -1
        }
        l = this.G;
        S(l, Ip(l, 142, b, c, d, e, f, g + 1));
        nF(this, a.Na(), "2")
    }
};
var mF = function (a, b, c, d) {
        var e = hF(a.g.a);
        Pp(a.F, a.v, "is", "b", {
            q: a.j,
            sl: a.b,
            tl: a.c,
            sn: e.length,
            s: e,
            si: 0,
            sy: b
        });
        cF(a);
        a.dispatchEvent(new VE(c, d))
    },
    nF = function (a, b, c) {
        for (var d = hF(a.g.a), e = 0, f = 0; f < d.length; f++)
            if (d[f] == b) {
                e = f + 1;
                break
            }
        Pp(a.F, a.v, "is", c, {
            q: a.j,
            sl: a.b,
            tl: a.c,
            sn: d.length,
            s: d,
            si: e
        });
        a.j = lF(b);
        qp(a.wa, "is");
        a.o.b(b);
        "2" == c ? (cF(a), a.o.l().blur(), a.dispatchEvent("suggestionSelected")) : (a.update(), a.dispatchEvent("suggestionCopied"))
    };
bF.prototype.ma = function () {
    cF(this)
};
bF.prototype.gc = function (a, b, c, d, e) {
    this.m[d][1] = hg();
    0 == this.j.length && !this.ea || 0 == e.length && !this.$ ? cF(this) : 0 == e.length ? oF(this) : this.b != b || this.c != c ? oF(this) : this.R ? (this.m[d][2] = hg(), this.D && this.D.abort(), this.D = os(this.Kc, this.b, this.c, this.Tb, e, A(this.hc, this, a, d, e), "is", void 0, this.pd)) : pF(this, a, ng(e, function (a) {
        return new mz(a)
    }), d)
};
bF.prototype.hc = function (a, b, c, d, e) {
    null == d ? (qF(this, a, c, e), wp(this.G, 145)) : (this.m[b][3] = hg(), c.length == d.length ? pF(this, a, ng(c, function (a, b) {
        return new mz(c[b], d[b])
    }), b) : (rF(this), wp(this.G, 146), pF(this, a, ng(c, function (a) {
        return new mz(a)
    }), b)))
};
var oF = function (a) {
        sF(a.a, []);
        a.g.a = [];
        dF(a);
        var b = a.a;
        b.o && 0 != b.o.length || fF(a, !1)
    },
    cF = function (a) {
        tF(a.ra);
        a.D && a.D.abort();
        fF(a, !1);
        var b = a.a;
        Rt(b);
        b.b = [];
        b.c = null;
        b.g = null;
        b.j = null;
        b = a.g;
        b.a = [];
        b.b = null;
        b.c = null;
        dF(a)
    },
    pF = function (a, b, c, d) {
        var e = a.m[d][1] - a.m[d][0];
        if (a.R) var f = a.m[d][3] - a.m[d][2];
        delete a.m[d];
        if (0 != c.length) {
            var g = c;
            c.length > a.Ha && (g = Cg(c, 0, a.Ha));
            a.g.a = g;
            c = {};
            a.R && (c.td = f);
            if (a.L > d) uF(a, !1), vF(a, e, b, g, c, !1);
            else {
                var l = [];
                D(g, function (a, b) {
                    b = new oz(a, this.Lc, this.jg, 0 == b && !this.$,
                        this.R, this.Ia);
                    l.push(b);
                    if ((b = this.g.b) && b.Na() == a.Na()) {
                        a = "";
                        var c = void 0 === c ? !1 : c;
                        b = hF(this.g.a);
                        tg(b, a) && (a = "");
                        a ? (a = new zD(a), c = new UE(a, c ? this.jc : this.Sb, void 0, void 0, c ? this.Rb : void 0), this.g.b = a, wF(this.a, c), xF(this.a, !0), fF(this, !0)) : (this.g.b = null, wF(this.a, null), fF(this, !!Nt(this.a)))
                    }
                }, a);
                sF(a.a, l);
                6 < yF(a.g) && gF(a);
                a.$ && xF(a.a, !!a.a.j);
                dF(a, g[0]);
                if (!a.dc) {
                    d = sk(jk(document).a);
                    f = XE(a.o.l(), a.o.W().length);
                    var m = Zs(Lk(a.a.l()));
                    f.b = 0;
                    f.a += d.a;
                    f.a -= m.a;
                    Vs(a.a.l(), f)
                }
                a.Lc && zF(a);
                AF(a);
                fF(a, !0);
                uF(a, !0);
                vF(a, e, b, g, c, !0)
            }
        }
    },
    fF = function (a, b) {
        a.Ca || a.a.setVisible(b)
    },
    iF = function (a) {
        var b = [];
        a = a.a.b;
        for (var c = 0; c < a.length; c++) b.push([a[c].Na(), a[c].Ka()]);
        return b
    },
    jF = function (a) {
        return a.a.g ? a.a.g.Na() : ""
    },
    kF = function (a) {
        a = a.a.c ? a.a.c.Fd.a : "";
        return "" != a ? [a] : []
    },
    uF = function (a, b) {
        var c = a.G,
            d = iF(a),
            e = jF(a);
        S(c, Ip(c, b ? 141 : 203, d, e, kF(a), [], null != a.a.j, 0))
    },
    dF = function (a, b) {
        if (a.C)
            if (b) {
                var c = a.o.W();
                Gg(b.Na(), c) ? a.C.b(b.Na()) : a.C.b(c)
            } else a.C.b("")
    },
    zF = function (a) {
        D(a.a.b, function (a) {
            a.Kb &&
            O(a.Kb, n, this.Za, !1, this)
        }, a)
    };
bF.prototype.Za = function (a) {
    var b = this.a.b;
    D(b, function (c, d) {
        if (c.Kb == a.target) {
            var e = K(La, null, (window.MSG_SUGGESTION_FLAGGED || "").replace(ea, c.Na())),
                f = K(La, null, " ");
            c = K("A", {
                href: "javascript:;"
            }, window.MSG_DISMISS || "");
            e = K(k, null, e, f, c);
            $E(this.V, e);
            this.V.setVisible(!0);
            O(c, r, this.Xa, !1, this);
            BF(this, d + 1, b)
        }
    }, this)
};
var AF = function (a) {
    D(a.a.b, function (a) {
        a.lc && O(a.lc, n, this.Ra, !1, this)
    }, a)
};
bF.prototype.Ra = function (a) {
    D(this.a.b, function (b) {
        b.lc == a.target && nF(this, b.Na(), "a")
    }, this)
};
bF.prototype.Xa = function () {
    this.V.setVisible(!1)
};
bF.prototype.hb = function () {
    this.a && (this.ic ? (oF(this), this.X = !1) : fF(this, !1));
    this.C && this.C.b("")
};
bF.prototype.ob = function () {
    this.X = !0
};
var BF = function (a, b, c) {
        c = ng(c, function (a) {
            return a.Na()
        });
        Pp(a.F, a.v, "is", "3", {
            q: a.j,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c,
            si: b
        })
    },
    hF = function (a) {
        return a ? ng(a, function (a) {
            return a ? a.Na() : ""
        }) : []
    },
    CF = function (a) {
        if (!a) return [];
        a = ng(a, function (a) {
            return a ? a.Ka() : ""
        });
        return mg(a, function (a) {
            return null != a
        })
    },
    vF = function (a, b, c, d, e, f) {
        d = hF(d);
        b = {
            q: c,
            sl: a.b,
            tl: a.c,
            sd: b,
            sn: d.length,
            s: d
        };
        for (var g in e) b[g] = e[g];
        Pp(a.F, a.v, "is", f ? "1" : "7", b)
    },
    rF = function (a) {
        var b = a.g.a,
            c = hF(b);
        b = CF(b);
        Pp(a.F, a.v, "is", "6", {
            q: a.j,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c,
            tn: b.length,
            st: b
        })
    },
    qF = function (a, b, c, d) {
        b = {
            q: b,
            sl: a.b,
            tl: a.c,
            sn: c.length,
            s: c
        };
        d && (b.ec = d);
        Pp(a.F, a.v, "is", "9", b)
    };
var DF = function (a) {
    R.call(this);
    this.H = a;
    O(a, od, this.b, !1, this);
    O(a, r, this.a, !1, this)
};
C(DF, R);
DF.prototype.b = function (a) {
    (13 == a.keyCode || Mh && 3 == a.keyCode) && EF(this, a)
};
DF.prototype.a = function (a) {
    EF(this, a)
};
var EF = function (a, b) {
    var c = new FF(b);
    if (a.dispatchEvent(c)) {
        c = new GF(b);
        try {
            a.dispatchEvent(c)
        } finally {
            b.stopPropagation()
        }
    }
};
DF.prototype.T = function () {
    DF.w.T.call(this);
    Nl(this.H, od, this.b, !1, this);
    Nl(this.H, r, this.a, !1, this);
    delete this.H
};
var GF = function (a) {
    rl.call(this, a.a);
    this.type = n
};
C(GF, rl);
var FF = function (a) {
    rl.call(this, a.a);
    this.type = "beforeaction"
};
C(FF, rl);
var HF = function (a, b, c, d, e, f) {
    this.m = a;
    this.a = b;
    this.g = c;
    this.D = d;
    this.R = e;
    this.C = f;
    this.b = "";
    this.c = new Ju(this.N, 300, this);
    this.o = this.v = 0;
    this.L = null;
    this.F = !1;
    this.j = Kp.M();
    this.g && (this.L = new DF(this.g), O(this.L, n, this.J, !1, this));
    O(this.m, ob, this.O, !1, this);
    this.c.start(void 0)
};
HF.prototype.O = function (a) {
    var b = "";
    a.qd && (b = a.qd);
    b == Ud && (this.v++, Sp(this.j, "pc", 1, Va));
    b == ne && this.o++;
    this.c.start(void 0)
};
HF.prototype.N = function () {
    if (this.a) {
        this.c.stop();
        var a = Lg(this.m.W());
        if (a != this.b)
            if (this.C && this.C()) this.c.start(300);
            else if (!(2E3 < Mg(a).length && 0 == this.v && 0 == this.o)) {
                this.o = this.v = 0;
                var b = a.substring(0, this.b.length) == this.b;
                (a = this.b.substring(0, a.length) == a) || 0 != this.b.length && b && !this.F ? Sp(this.j, "otf", "2") : Sp(this.j, "otf", "1");
                this.F = a;
                this.R()
            }
    }
};
HF.prototype.reset = function (a) {
    this.c.stop();
    this.b = Lg(this.m.W());
    a || (this.F = !1)
};
HF.prototype.J = function (a) {
    a.preventDefault();
    this.a = !this.a;
    this.g && (this.g.innerHTML = this.a ? msg_disable_otf : msg_enable_otf);
    if (this.D) {
        a = this.D;
        var b = this.a;
        b != a.aa && ((a.aa = b) ? aF(a) : Dt(a.J))
    }
    Op(this.j, "/translate/uc?ua=eotf&uav=" + (this.a ? 1 : 0))
};
var IF = function () {
    R.call(this);
    this.a = 0;
    this.endTime = this.c = null
};
C(IF, R);
IF.prototype.g = function () {
    this.b("begin")
};
IF.prototype.j = function () {
    this.b(Pb)
};
IF.prototype.b = function (a) {
    this.dispatchEvent(a)
};
var JF = function (a, b) {
        Yf(b) || (b = [b]);
        b = ng(b, function (a) {
            return Pf(a) ? a : a.im + " " + a.duration + "s " + a.timing + " " + a.delay + "s"
        });
        Qs(a, ef, b.join(","))
    },
    KF = Ri(function () {
        if (G) return ai("10.0");
        var a = xk(k),
            b = Mh ? "-webkit" : Lh ? "-moz" : G ? "-ms" : Ih ? "-o" : null,
            c = {
                transition: Od
            };
        b && (c[b + "-transition"] = Od);
        Yj(a, Sj("div", {
            style: c
        }));
        a = a.firstChild;
        b = a.style[hh(ef)];
        return "" != ("undefined" !== typeof b ? b : a.style[Ps(a, ef)] || "")
    });
var LF = function (a, b, c, d, e) {
    IF.call(this);
    this.H = a;
    this.v = b;
    this.F = c;
    this.o = d;
    this.C = Yf(e) ? e : [e]
};
C(LF, IF);
x = LF.prototype;
x.play = function () {
    if (1 == this.a) return !1;
    this.g();
    this.b(Wd);
    this.c = hg();
    this.a = 1;
    if (KF()) return Qs(this.H, this.F), this.m = Xm(this.gm, void 0, this), !0;
    this.rg(!1);
    return !1
};
x.gm = function () {
    it(this.H);
    JF(this.H, this.C);
    Qs(this.H, this.o);
    this.m = Xm(A(this.rg, this, !1), 1E3 * this.v)
};
x.stop = function () {
    1 == this.a && this.rg(!0)
};
x.rg = function (a) {
    Qs(this.H, ef, "");
    Ym(this.m);
    Qs(this.H, this.o);
    this.endTime = hg();
    this.a = 0;
    a ? this.b("stop") : this.b(Rb);
    this.j()
};
x.T = function () {
    this.stop();
    LF.w.T.call(this)
};
var MF = function (a, b) {
    R.call(this);
    this.g = new yt(this);
    this.$d(a || null);
    b && (this.zd = b)
};
C(MF, R);
x = MF.prototype;
x.H = null;
x.Ah = !0;
x.yh = null;
x.hd = !1;
x.Pg = -1;
x.Og = -1;
x.zd = Ue;
x.mb = v("zd");
x.l = v("H");
x.$d = function (a) {
    NF(this);
    this.H = a
};
x.setAutoHide = function (a) {
    NF(this);
    this.Ah = a
};
var NF = function (a) {
    if (a.hd) throw Error("Can not change this state of the popup while showing.");
};
MF.prototype.isVisible = v("hd");
var OF = function (a) {
    return a.hd || 150 > hg() - a.Og
};
MF.prototype.setVisible = function (a) {
    this.v && this.v.stop();
    this.m && this.m.stop();
    if (a) {
        if (!this.hd && this.Vg()) {
            if (!this.H) throw Error("Caller must call setElement before trying to show the popup");
            this.C();
            a = ik(this.H);
            if (this.Ah)
                if (this.g.K(a, Ad, this.Hi, !0), G) {
                    try {
                        var b = a.activeElement
                    } catch (d) {}
                    for (; b && b.nodeName == Ca;) {
                        try {
                            var c = Tk(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.g.K(a, Ad, this.Hi, !0);
                    this.g.K(a, Gb, this.Gi)
                } else this.g.K(a, ib, this.Gi);
            this.zd == Ue ? (this.H.style.visibility = pf, X(this.H, !0)) : this.zd == Fd && this.C();
            this.hd = !0;
            this.Pg = hg();
            this.Og = -1;
            this.v ? (Gl(this.v, Pb, this.$h, !1, this), this.v.play()) : this.$h()
        }
    } else PF(this)
};
MF.prototype.C = Vf;
var PF = function (a, b) {
    a.hd && a.dispatchEvent({
        type: fb,
        target: b
    }) && (a.g && Dt(a.g), a.hd = !1, a.Og = hg(), a.m ? (Gl(a.m, Pb, gg(a.Hh, b), !1, a), a.m.play()) : a.Hh(b))
};
x = MF.prototype;
x.Hh = function (a) {
    this.zd == Ue ? this.El() : this.zd == Fd && (this.H.style.top = "-10000px");
    this.Ag(a)
};
x.El = function () {
    this.H.style.visibility = Rc;
    X(this.H, !1)
};
x.Vg = function () {
    return this.dispatchEvent(gb)
};
x.$h = function () {
    this.dispatchEvent(se)
};
x.Ag = function (a) {
    this.dispatchEvent({
        type: Sc,
        target: a
    })
};
x.Hi = function (a) {
    a = a.target;
    Mk(this.H, a) || QF(this, a) || 150 > hg() - this.Pg || PF(this, a)
};
x.Gi = function (a) {
    var b = ik(this.H);
    if ("undefined" != typeof document.activeElement) {
        if (a = b.activeElement, !a || Mk(this.H, a) || "BODY" == a.tagName) return
    } else if (a.target != b) return;
    150 > hg() - this.Pg || PF(this)
};
var QF = function (a, b) {
    return pg(a.yh || [], function (a) {
        return b === a || Mk(a, b)
    })
};
MF.prototype.T = function () {
    MF.w.T.call(this);
    this.g.Da();
    hl(this.v);
    hl(this.m);
    delete this.H;
    delete this.g;
    delete this.yh
};
var RF = function (a, b) {
    this.R = b || void 0;
    MF.call(this, a)
};
C(RF, MF);
RF.prototype.C = function () {
    if (this.R) {
        var a = !this.isVisible() && this.mb() != Fd,
            b = this.l();
        a && (b.style.visibility = Rc, X(b, !0));
        this.R.a(b, 8, this.yf);
        a && X(b, !1)
    }
};
var SF = function (a, b) {
    RF.call(this, a);
    this.c = b;
    this.a = 0;
    this.b = null;
    this.j = 0;
    this.setVisible(!0);
    this.setVisible(!1);
    V(this.l(), "round-trip-popup");
    V(this.c, "round-trip-content")
};
C(SF, RF);
SF.prototype.L = function () {
    Ym(this.j);
    1 == this.a ? Gl(this.b, Rb, A(this.L, this)) : 0 == this.a && (this.j = Xm(A(this.F, this, -1), 200))
};
SF.prototype.F = function (a) {
    if (this.a != a && (0 != this.a || !(this.isVisible() && 1 == a || !this.isVisible() && -1 == a))) {
        var b = this.isVisible();
        this.setVisible(!0);
        var c = -Math.ceil(it(this.c).width);
        ot(this.l()) && (c = -c);
        var d = 1 == a ? c : 0;
        c = 1 == a ? 0 : c;
        this.setVisible(b);
        if (KF()) {
            b = .2;
            if (0 != this.a) {
                var e = parseInt(Ss(this.c, vd), 10);
                this.o();
                b *= (c - e) / (c - d);
                d = e
            }
            this.a = a;
            this.b = new LF(this.c, b, {
                left: d + Yd
            }, {
                left: c + Yd
            }, "left " + b + "s");
            this.b.play();
            Gl(this.b, Rb, A(this.o, this)); - 1 == a ? Gl(this.b, Rb, A(this.setVisible, this, !1)) :
                this.setVisible(!0)
        } else Qs(this.c, vd, c + Yd), this.setVisible(1 == a ? !0 : !1)
    }
};
SF.prototype.o = function () {
    0 != this.a && (this.b.stop(), Xm(A(Pl, this, this.b)), this.a = 0, this.b = null)
};
var UF = function (a) {
        this.H = a || null;
        this.a = K(k, "gt-hl-layer", yk(""));
        this.b = null;
        this.H && (Dk(this.a, this.H), TF(this))
    },
    WF = function (a, b, c, d, e) {
        var f = d || "gt-hl-text";
        d = a.H && (a.H.value || $k(a.H));
        TF(a);
        Ck(a.a);
        if (b != c || e) {
            if (0 < b) {
                var g = d.substring(0, b);
                VF(a.a, g, 0, e)
            }
            b < c && (g = d.substring(b, c), f = K(La, f), VF(f, g, b, e), a.a.appendChild(f));
            c < d.length && (g = d.substring(c), VF(a.a, g, c, e))
        }
    },
    TF = function (a) {
        var b;
        var c = a.H,
            d = ik(c);
        (b = G && c.currentStyle) && pk(jk(d).a) && b.width != eb && b.height != eb && !b.boxSizing ? (d = st(c, b.width,
            "width", "pixelWidth"), c = st(c, b.height, Pc, "pixelHeight"), b = new fk(d, c)) : (b = new fk(c.offsetWidth, c.offsetHeight), d = vt(c), c = at(c), b = new fk(b.width - c.left - d.left - d.right - c.right, b.height - c.top - d.top - d.bottom - c.bottom));
        c = a.a;
        var e = pk(jk(ik(c)).a);
        !G || ai("10") || e && ai("8") ? rt(c, b, "content-box") : (d = c.style, e ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (e = vt(c), c = at(c), d.pixelWidth = b.width + c.left + e.left + e.right + c.right, d.pixelHeight = b.height + c.top + e.top + e.bottom + c.bottom));
        c = Zs(a.H);
        gt(a.a, c.b, c.a);
        c = vt(a.H);
        Qs(a.a, Sd, c.left + Yd);
        Qs(a.a, Td, c.right + Yd);
        a.a.dir = a.H.dir
    },
    VF = function (a, b, c, d) {
        d = d || [];
        for (var e = 0, f; f = d[e]; e++)
            if (!(0 > f.Rd - c)) {
                if (f.Rd - c >= b.length) break;
                if (0 < f.Rd - c) {
                    var g = b.substring(0, f.Rd - c);
                    XF(a, g)
                }
                var l = f.className || "gt-hl-text";
                g = b.substring(f.Rd - c, f.jh - c);
                l = K(La, l);
                XF(l, g);
                a.appendChild(l);
                b = b.substring(f.jh - c);
                c = f.jh
            }
        b && XF(a, b)
    },
    XF = function (a, b) {
        b = Jg(b).split("\n");
        for (var c = 0, d = b.length; c < d; c++) {
            if (0 < c) {
                var e = K("BR");
                a.appendChild(e)
            }
            a.appendChild(yk(b[c]))
        }
    };
var YF = function (a, b) {
    this.b = a instanceof ck ? a : new ck(a, b)
};
C(YF, Su);
YF.prototype.a = function (a, b, c, d) {
    var e = ik(a);
    var f = e.body;
    e = e.documentElement;
    e = new ck(f.scrollLeft || e.scrollLeft, f.scrollTop || e.scrollTop);
    f = this.b.b + e.b;
    e = this.b.a + e.a;
    var g = Ou(a);
    f -= g.b;
    e -= g.a;
    Qu(new ck(f, e), a, b, c, null, null, d)
};
var ZF = function (a, b) {
    YF.call(this, a, b)
};
C(ZF, YF);
ZF.prototype.g = 0;
ZF.prototype.c = zf("g");
ZF.prototype.a = function (a, b, c, d) {
    var e = Ws(a);
    e = $s(e);
    var f = rk(jk(a).a);
    f = new ck(this.b.b + f.scrollLeft, this.b.a + f.scrollTop);
    var g = b,
        l = Qu(f, a, g, c, e, 10, d);
    if (0 != (l & 496)) {
        if (l & 16 || l & 32) g ^= 4;
        if (l & 64 || l & 128) g ^= 1;
        l = Qu(f, a, g, c, e, 10, d);
        0 != (l & 496) && Qu(f, a, b, c, e, this.g, d)
    }
};
var $F = function (a, b) {
    MA.call(this, a, b);
    this.J = !0;
    yA(this, !0);
    this.setVisible(!1, !0);
    this.b = new xn
};
C($F, MA);
x = $F.prototype;
x.gj = !1;
x.ri = 0;
x.sb = null;
x.na = function (a) {
    $F.w.na.call(this, a);
    (a = a.getAttribute("for") || a.htmlFor) && aG(this, this.a.l(a), 1)
};
x.ba = function () {
    $F.w.ba.call(this);
    this.b.forEach(this.Ee, this);
    var a = Z(this);
    a.K(this, n, this.Ug);
    a.K(this.a.a, Ad, this.wa, !0)
};
var aG = function (a, b, c, d, e, f) {
    b && An(a.b, dg(b)) || (c = a.$f(b, c, d, e, f), a.Ba && a.Ee(c), b = gg(a.$l, b), a.l() && Z(a).K(a.l(), od, b))
};
x = $F.prototype;
x.$l = function (a, b) {
    if (27 == b.keyCode) a.focus();
    else if (a = Ot(this, this.Ea)) {
        a = a.l();
        var c = new rl(b.a, a);
        c.target = a;
        if (32 == b.keyCode || 13 == b.keyCode) vl(a) ? mm(a, od, !1, c) : Rl(a, od, !1, c);
        32 == b.keyCode && this.Fc()
    }
};
x.$f = function (a, b, c, d, e) {
    if (!a) return null;
    b = {
        H: a,
        $i: b,
        Rl: c,
        Yc: d ? yb : Ad,
        yf: e
    };
    this.b.set(dg(a), b);
    return b
};
x.Ee = function (a) {
    Z(this).K(a.H, a.Yc, this.Af);
    a.Yc != yb && Z(this).K(a.H, od, this.em)
};
x.Me = function () {
    if (this.Ba)
        for (var a = this.b.Lb(), b = 0; b < a.length; b++) this.dg(this.b.get(a[b]));
    this.b.$c()
};
x.dg = function (a) {
    Z(this).Ga(a.H, a.Yc, this.Af)
};
x.kf = function (a, b, c) {
    b = z(a.$i) ? new QA(a.H, a.$i, !0) : new ZF(b, c);
    b.c && b.c(5);
    var d = a.Rl;
    c = a.yf;
    var e = a.H;
    a = this.isVisible();
    var f;
    (f = this.isVisible()) || (f = 150 > hg() - this.ri);
    f && this.gj ? this.Fc() : (this.sb = e || null, this.dispatchEvent(gb) && (d = "undefined" != typeof d ? d : 8, a || (this.l().style.visibility = Rc), X(this.l(), !0), b.a(this.l(), d, c), a || (this.l().style.visibility = pf), this.sc(-1), this.setVisible(!0)))
};
x.Fc = function () {
    this.isVisible() && (this.setVisible(!1), this.isVisible() || (this.ri = hg(), this.sb = null))
};
x.Ug = function () {
    this.Fc()
};
x.Af = function (a) {
    bG(this, a)
};
x.em = function (a) {
    32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || bG(this, a);
    40 == a.keyCode && uA(this)
};
var bG = function (a, b) {
    for (var c = a.b.Lb(), d = 0; d < c.length; d++) {
        var e = a.b.get(c[d]);
        if (e.H == b.currentTarget) {
            a.kf(e, b.clientX, b.clientY);
            b.preventDefault();
            b.stopPropagation();
            break
        }
    }
};
$F.prototype.wa = function (a) {
    this.isVisible() && !NA(this, a.target) && this.Fc()
};
$F.prototype.$e = function (a) {
    $F.w.$e.call(this, a);
    this.Fc()
};
$F.prototype.T = function () {
    $F.w.T.call(this);
    this.b && (this.b.$c(), delete this.b)
};
var cG = function (a, b, c, d, e) {
    return new LF(a, b, {
        opacity: d
    }, {
        opacity: e
    }, {
        im: "opacity",
        duration: b,
        timing: c,
        delay: 0
    })
};
var dG = function (a) {
    R.call(this);
    this.H = a;
    a = G ? Ub : ib;
    this.a = O(this.H, G ? Tb : Sb, this, !G);
    this.b = O(this.H, a, this, !G)
};
C(dG, R);
dG.prototype.handleEvent = function (a) {
    var b = new rl(a.a);
    b.type = a.type == Tb || a.type == Sb ? Tb : Ub;
    this.dispatchEvent(b)
};
dG.prototype.T = function () {
    dG.w.T.call(this);
    Ol(this.a);
    Ol(this.b);
    delete this.H
};
var eG = function (a, b) {
    this.b = a instanceof ck ? a : new ck(a, b)
};
C(eG, Su);
eG.prototype.a = function (a, b, c, d) {
    Ru(Ws(a), 0, a, b, this.b, c, null, d)
};
var fG = function () {
        this.a = new xn
    },
    gG = function (a) {
        var b = typeof a;
        return b == Nd && a || b == Wb ? "o" + dg(a) : b.substr(0, 1) + a
    };
fG.prototype.add = function (a) {
    this.a.set(gG(a), a)
};
fG.prototype.contains = function (a) {
    return An(this.a, gG(a))
};
fG.prototype.nb = function () {
    return this.a.nb()
};
fG.prototype.Hb = function () {
    return this.a.Hb(!1)
};
var iG = function (a, b, c) {
    this.O = c || (a ? jk(I(a)) : jk());
    RF.call(this, this.O.b(k, {
        style: "position:absolute;display:none;"
    }));
    this.$ = new ck(1, 1);
    this.o = new fG;
    this.F = null;
    a && hG(this, a);
    null != b && this.ra(b)
};
C(iG, RF);
var jG = [];
iG.prototype.b = null;
iG.prototype.className = "goog-tooltip";
iG.prototype.ia = 500;
var hG = function (a, b) {
        b = I(b);
        a.o.add(b);
        O(b, Dd, a.Ha, !1, a);
        O(b, Cd, a.N, !1, a);
        O(b, Bd, a.wa, !1, a);
        O(b, Sb, a.ma, !1, a);
        O(b, ib, a.N, !1, a)
    },
    lG = function (a, b) {
        if (b) b = I(b), kG(a, b), Bn(a.o.a, gG(b));
        else {
            for (var c = a.o.nb(), d = 0; b = c[d]; d++) kG(a, b);
            a.o.a.$c()
        }
    },
    kG = function (a, b) {
        Nl(b, Dd, a.Ha, !1, a);
        Nl(b, Cd, a.N, !1, a);
        Nl(b, Bd, a.wa, !1, a);
        Nl(b, Sb, a.ma, !1, a);
        Nl(b, ib, a.N, !1, a)
    };
iG.prototype.ra = function (a) {
    L(this.l(), a)
};
iG.prototype.$d = function (a) {
    var b = this.l();
    b && Fk(b);
    iG.w.$d.call(this, a);
    a ? (b = this.O.a.body, b.insertBefore(a, b.lastChild), hl(this.F), this.F = new dG(this.l()), il(this, this.F), O(this.F, Tb, this.D, void 0, this), O(this.F, Ub, this.X, void 0, this)) : (hl(this.F), this.F = null)
};
var mG = function (a) {
    return a.j ? a.isVisible() ? 4 : 1 : a.J ? 3 : a.isVisible() ? 2 : 0
};
iG.prototype.Vg = function () {
    if (!MF.prototype.Vg.call(this)) return !1;
    if (this.a)
        for (var a, b = 0; a = jG[b]; b++) Mk(a.l(), this.a) || a.setVisible(!1);
    ug(jG, this);
    a = this.l();
    a.className = this.className;
    this.D();
    O(a, Dd, this.Ia, !1, this);
    O(a, Cd, this.Ca, !1, this);
    nG(this);
    return !0
};
iG.prototype.Ag = function () {
    wg(jG, this);
    for (var a = this.l(), b, c = 0; b = jG[c]; c++) b.a && Mk(a, b.a) && b.setVisible(!1);
    this.Ra && this.Ra.X();
    Nl(a, Dd, this.Ia, !1, this);
    Nl(a, Cd, this.Ca, !1, this);
    this.a = void 0;
    0 == mG(this) && (this.V = !1);
    MF.prototype.Ag.call(this)
};
iG.prototype.Ma = function (a, b) {
    this.a == a && this.o.contains(this.a) && (this.V || !this.Za ? (this.setVisible(!1), this.isVisible() || oG(this, a, b)) : this.a = void 0);
    this.j = void 0
};
var oG = function (a, b, c) {
    a.a = b;
    b = c || a.aa(0);
    a.R = b || void 0;
    a.isVisible() && a.C();
    a.setVisible(!0)
};
iG.prototype.Xa = function (a) {
    this.J = void 0;
    if (a == this.a) {
        a = this.O;
        var b;
        a = (b = dl(a.a)) && this.l() && a.contains(this.l(), b);
        null != this.b && (this.b == this.l() || this.o.contains(this.b)) || a || this.ea && this.ea.b || this.setVisible(!1)
    }
};
var pG = function (a, b) {
    var c = sk(a.O.a);
    a.$.b = b.clientX + c.b;
    a.$.a = b.clientY + c.a
};
iG.prototype.Ha = function (a) {
    var b = qG(this, a.target);
    this.b = b;
    this.D();
    b != this.a && (this.a = b, this.j || (this.j = Xm(A(this.Ma, this, b, void 0), this.ia)), rG(this), pG(this, a))
};
var qG = function (a, b) {
    try {
        for (; b && !a.o.contains(b);) b = b.parentNode;
        return b
    } catch (c) {
        return null
    }
};
iG.prototype.wa = function (a) {
    pG(this, a);
    this.V = !0
};
iG.prototype.ma = function (a) {
    this.b = a = qG(this, a.target);
    this.V = !0;
    if (this.a != a) {
        this.a = a;
        var b = this.aa(1);
        this.D();
        this.j || (this.j = Xm(A(this.Ma, this, a, b), this.ia));
        rG(this)
    }
};
iG.prototype.aa = function (a) {
    return 0 == a ? new sG(dk(this.$)) : new tG(this.b)
};
var rG = function (a) {
    if (a.a)
        for (var b, c = 0; b = jG[c]; c++) Mk(b.l(), a.a) && (b.ea = a, a.Ra = b)
};
iG.prototype.N = function (a) {
    var b = qG(this, a.target),
        c = qG(this, a.relatedTarget);
    b != c && (b == this.b && (this.b = null), nG(this), this.V = !1, !this.isVisible() || a.relatedTarget && Mk(this.l(), a.relatedTarget) ? this.a = void 0 : this.X())
};
iG.prototype.Ia = function () {
    var a = this.l();
    this.b != a && (this.D(), this.b = a)
};
iG.prototype.Ca = function (a) {
    var b = this.l();
    this.b != b || a.relatedTarget && Mk(b, a.relatedTarget) || (this.b = null, this.X())
};
var nG = function (a) {
    a.j && (Ym(a.j), a.j = void 0)
};
iG.prototype.X = function () {
    2 == mG(this) && (this.J = Xm(A(this.Xa, this, this.a), 0))
};
iG.prototype.D = function () {
    this.J && (Ym(this.J), this.J = void 0)
};
iG.prototype.T = function () {
    this.setVisible(!1);
    nG(this);
    lG(this);
    this.l() && Fk(this.l());
    this.b = null;
    delete this.O;
    iG.w.T.call(this)
};
var sG = function (a, b) {
    eG.call(this, a, b)
};
C(sG, eG);
sG.prototype.a = function (a, b, c) {
    b = Ws(a);
    b = $s(b);
    c = c ? new Ns(c.top + 10, c.right, c.bottom, c.left + 10) : new Ns(10, 0, 0, 10);
    Qu(this.b, a, 8, c, b, 9) & 496 && Qu(this.b, a, 8, c, b, 5)
};
var tG = function (a) {
    PA.call(this, a, 5)
};
C(tG, PA);
tG.prototype.a = function (a, b, c) {
    var d = new ck(10, 0);
    Ru(this.b, this.g, a, b, d, c, 9) & 496 && Ru(this.b, 4, a, 1, d, c, 5)
};
var uG = function (a, b, c, d, e) {
    d = d || (b ? jk(I(b)) : jk());
    this.c = a;
    d.a.body.appendChild(this.c.l());
    X(this.c.l(), !1);
    this.className = bv();
    iG.call(this, b, c, d);
    il(this, this.c);
    this.$d(this.c.l());
    a = cG(this.c.l(), .13, "ease-out", 0, 1);
    b = cG(this.c.l(), .13, "ease-in", 1, 0);
    this.v = a;
    this.m = b;
    this.L = new Tu(bv(), !0);
    Uu(this.L, null != e ? e : 1, void 0, -1);
    e = this.L;
    a = this.c.c;
    e.c = this.c.l();
    e.j = a;
    this.L.sf = !0;
    this.ia = 300
};
C(uG, iG);
uG.prototype.aa = function () {
    this.L.b = this.b;
    return this.L
};
uG.prototype.ra = function (a) {
    L(this.c.a, a)
};
var vG = function (a, b, c, d) {
    c = c || (a ? jk(I(a)) : jk());
    var e = new cv(c);
    uG.call(this, e, a, b, c, d)
};
C(vG, uG);
var wG = function (a, b, c) {
    $F.call(this, b, c);
    this.v = new xn;
    this.g = a || 5;
    this.C = null;
    this.D = !1;
    this.j = Array(this.g);
    this.V = Array(this.g);
    this.R = Kp.M();
    this.G = rp.M();
    this.X = this.m = this.Qb = null;
    this.gj = !0
};
C(wG, $F);
var xG = "",
    yG = "";
wG.prototype.Aa = function () {
    wG.w.Aa.call(this);
    for (var a = 0; a < this.g; ++a) this.Ta(new HA(""), !0);
    "" != yG && (this.m = new HA(yG), wu(this.m, "gt-edit-menuitem"), this.Ta(this.m, !0))
};
wG.prototype.sa = function (a) {
    wG.w.sa.call(this, a);
    V(this.l(), "alt-menu")
};
wG.prototype.dh = function (a) {
    a = this.v.get(dg(a));
    for (var b = 0; b < P(a, 2) && b < this.g; ++b) {
        var c = Ot(this, b);
        c.g(Q(gs(a, b), 0));
        c.ia = b;
        c.setVisible(!0, !0)
    }
    for (; b < this.g; ++b) Ot(this, b).setVisible(!1);
    this.m && this.m.setVisible(!0, !0)
};
var zG = function (a, b, c) {
    a.v.set(dg(b), c);
    aG(a, b, 9, 8, !1, new Ns(-2, 1, -2, 1))
};
x = wG.prototype;
x.Me = function () {
    wG.w.Me.call(this);
    null != this.Qb && lG(this.Qb);
    this.v.$c()
};
x.setVisible = function (a, b) {
    var c = this.sb;
    this.X = c;
    if (a && null != c) {
        AG(this, c);
        Tp(this.R, "altshow");
        var d = this.G;
        S(d, T(d, 207))
    } else null != this.C && WF(this.C, 0, 0);
    null != c && (a ? this.ag(c) : this.Yf(c));
    b = wG.w.setVisible.call(this, a, b);
    a && null != this.l() && qt(this.l(), !1);
    return b
};
x.ab = function () {
    if (null != this.X) {
        var a = $k(this.X);
        if (null != a) return a
    }
    return ""
};
x.Fc = function () {
    wG.w.Fc.call(this);
    if (this.D)
        for (var a = 0; a < this.j.length; a++) {
            var b = this.j[a];
            Ym(b.j);
            b.o();
            b.F(-1);
            b.o();
            b.setVisible(!1)
        }
};
x.ag = function (a) {
    V(a, "trans-target");
    null === this.Qb ? a.title = "" : lG(this.Qb, a)
};
x.Yf = function (a) {
    W(a, "trans-target");
    null === this.Qb ? a.title = xG : hG(this.Qb, a)
};
x.Wa = function (a) {
    if (a.shiftKey || a.ctrlKey || a.altKey || 36 == a.keyCode || 35 == a.keyCode) return !1;
    var b = wG.w.Wa.call(this, a);
    if (!b && (37 == a.keyCode || 39 == a.keyCode)) {
        var c = ot(this.sb.parentNode.parentNode),
            d = null;
        if (!c && 37 == a.keyCode || c && 39 == a.keyCode) d = !1;
        if (!c && 39 == a.keyCode || c && 37 == a.keyCode) d = !0;
        if (this.Pf(d) && (c = this.sb, (c = d ? Jk(c) : z(c.previousElementSibling) ? c.previousElementSibling : Hk(c.previousSibling, !1)) && c != this.sb)) return this.Fc(), this.Si(d), this.kf(c ? this.b.get(dg(c)) : null, 0, 0), BG(this), a.preventDefault(),
            a.stopPropagation(), !0
    }
    return b
};
x.kf = function (a, b, c) {
    ot((a.H || this.sb).parentNode.parentNode) ? Qs(this.l(), Jb, ge) : Qs(this.l(), Jb, "");
    if (this.D)
        for (var d = 0; d < this.j.length; d++) CG(this, d), L(this.j[d].c, "...");
    this.dh(a.H);
    wG.w.kf.call(this, a, b, c)
};
var DG = function (a, b, c) {
        !a.D || b >= a.g || "" == c || (L(a.j[b].c, c), CG(a, b))
    },
    CG = function (a, b) {
        Ru(Ot(a, b).l(), 12, a.j[b].l(), 8, new ck(1, 0))
    };
x = wG.prototype;
x.Wd = function (a) {
    wG.w.Wd.call(this, a);
    var b = this.sb;
    if (null != b) {
        Tp(this.R, "altmenuhl");
        var c = this.G;
        S(c, T(c, 209));
        AG(this, b);
        a = this.Se(a.target); - 1 != a && a != this.g && (Ym(this.V[a]), this.V[a] = Xm(this.Ol, 300, this), this.D && (b = this.j[a], ot(this.sb.parentNode.parentNode) ? (V(b.l(), ge), Qs(b.l(), Jb, ge)) : (W(b.l(), ge), Qs(b.l(), Jb, "")), CG(this, a), Ym(b.j), 0 == b.a ? b.j = Xm(A(b.F, b, 1), 300) : b.F(1)))
    }
};
x.Ol = function () {
    Tp(this.R, "altmenuhold");
    var a = this.G;
    S(a, T(a, 208))
};
x.sg = function (a) {
    wG.w.sg.call(this, a);
    a = this.Se(a.target); - 1 != a && a != this.g && (Ym(this.V[a]), this.D && this.j[a].L())
};
x.Se = function (a) {
    return Qt(this, a)
};
x.Pf = w(!0);
x.Si = u();
x.$f = function (a, b, c, d, e) {
    (a = wG.w.$f.call(this, a, b, c, d, e)) && a.Yc == Ad && (a.Yc = r);
    return a
};
x.Ee = function (a) {
    wG.w.Ee.call(this, a);
    Z(this).K(a.H, Dd, this.ra);
    Z(this).K(a.H, Cd, this.N);
    Z(this).K(a.H, yb, this.ea);
    Z(this).K(a.H, Bd, this.ma)
};
x.dg = function (a) {
    wG.w.dg.call(this, a);
    Z(this).Ga(a.H, Dd, this.ra);
    Z(this).Ga(a.H, Cd, this.N);
    Z(this).Ga(a.H, yb, this.ea);
    Z(this).Ga(a.H, Bd, this.ma)
};
var AG = function (a, b) {
        if (null != a.C && (b = a.v.get(dg(b))) && (a = a.C, a.b))
            for (var c = a.H && (a.H.value || $k(a.H)), d = -1, e = -1, f = !1, g = 0; g < P(a.b, 5); g++) {
                var l = ks(a.b, g);
                if (0 != P(l, 2) && (0 == em(l, 5) && (f = c.indexOf(Q(l, 4), e + 1), 0 <= f ? (d = f, e = d + Q(l, 4).length, f = !0) : f = !1), ks(a.b, g).zb() == b.zb())) {
                    if (f) {
                        c = [];
                        for (e = 0; e < P(b, 3); ++e) c.push({
                            Rd: d + em(hs(b, e), 0),
                            jh: d + em(hs(b, e), 1)
                        });
                        WF(a, 0, 0, void 0, c)
                    } else d = c.indexOf(Q(b, 0)), 0 <= d && WF(a, d, d + Q(b, 0).length);
                    break
                }
            }
    },
    EG = function (a, b) {
        b ? wn(a.b.Hb(!1), function (a) {
            "" == this.a.Th(a.H) && (V(a.H,
                af), this.a.Xe(a.H, "_"));
            return !0
        }, a) : wn(a.b.Hb(!1), function (a) {
            Es(a.H, af) && (W(a.H, af), this.a.Xe(a.H, ""));
            return !0
        }, a)
    };
wG.prototype.ra = function (a) {
    UC() || (V(a.target, bf), AG(this, a.target), EG(this, !0), Tp(this.R, "althighlight"), a = this.G, S(a, T(a, 206)))
};
wG.prototype.N = function (a) {
    W(a.target, bf);
    null == this.C || this.isVisible() || WF(this.C, 0, 0);
    EG(this, !1)
};
wG.prototype.ma = function (a) {
    UC() && this.N(a)
};
wG.prototype.ea = function (a) {
    UC() || (this.N(a), HC(a.target, void 0).select())
};
var BG = function (a) {
    wn(a.b.Hb(!1), function (a) {
        W(a.H, bf);
        return !0
    }, a)
};
wG.prototype.Ug = function (a) {
    a && a.currentTarget && a.currentTarget.sb && (a.hk = a.currentTarget.sb);
    wG.w.Ug.call(this, a)
};
wG.prototype.Af = function (a) {
    UC() ? BG(this) : this.Pc && wG.w.Af.call(this, a)
};
var FG = function (a, b, c) {
    this.aa = this.c = null;
    wG.call(this, a, b, c)
};
C(FG, wG);
x = FG.prototype;
x.Si = zf("c");
x.setVisible = function (a, b) {
    b = FG.w.setVisible.call(this, a, b);
    this.c = null;
    a ? this.aa = this.ab() : null != this.aa && this.aa != this.ab() && this.dispatchEvent(new N(n, this));
    return b
};
x.ag = function (a) {
    FG.w.ag.call(this, a);
    V(a, "trans-edit");
    a.contentEditable = !0;
    rA(this, a);
    oA(this).focus();
    Wk(oA(this), !0);
    Z(this).K(a, od, this.gi);
    Z(this).K(a, Cd, this.nf);
    Z(this).K(a, Dd, this.nf);
    if (null != this.c) {
        a = HC(a, void 0);
        var b = this.c ? a.Ob() : a.nc(),
            c = lC(a);
        a = c;
        var d = b,
            e = new FC;
        e.g = PC(a, d, c, b);
        if (Kk(a) && !Ak(a)) {
            var f = a.parentNode;
            d = lg(f.childNodes, a);
            a = f
        }
        Kk(c) && !Ak(c) && (f = c.parentNode, b = lg(f.childNodes, c), c = f);
        e.g ? (e.a = c, e.j = b, e.b = a, e.c = d) : (e.a = a, e.j = d, e.b = c, e.c = b);
        e.select()
    }
};
x.Yf = function (a) {
    FG.w.Yf.call(this, a);
    W(a, "trans-edit");
    a.contentEditable = !1;
    oA(this) && Wk(oA(this), !1);
    Z(this).Ga(a, od, this.gi);
    Z(this).Ga(a, Cd, this.nf);
    Z(this).Ga(a, Dd, this.nf)
};
x.nf = function () {
    var a = TC();
    null == a || a.Nb() == a.mc() && a.Ob() == a.nc() || this.setVisible(a.Nb() == a.mc())
};
x.gi = function (a) {
    for (var b = 0; b < this.g; ++b) Ot(this, b).setVisible(!1);
    this.m && this.m.setVisible(!1);
    if (13 == a.keyCode || 3 == a.keyCode) return null === tA(this) ? (this.Fc(), a.stopPropagation(), a.preventDefault(), !0) : !1;
    null === tA(this) || !Tl(a) && 37 != a.keyCode && 39 != a.keyCode || (this.sb.focus(), this.sc(Qt(this, null)));
    return !1
};
x.Pf = function (a) {
    var b = TC();
    if (b.Nb() == b.mc() && b.Ob() == b.nc()) {
        var c = b.Lg() ? b.Ob() : b.nc();
        b = HC(lC(b), void 0);
        if (!a && c == b.Ob() || a && c == b.nc()) return !0
    }
    return !1
};
var GG = function (a, b, c) {
    wG.call(this, a, b, c);
    this.c = null
};
C(GG, wG);
x = GG.prototype;
x.sa = function (a) {
    GG.w.sa.call(this, a);
    this.c = new HG("");
    this.Ta(this.c, !0)
};
x.dh = function (a) {
    GG.w.dh.call(this, a);
    this.c.l().firstChild.value = this.a.Th(a)
};
x.setVisible = function (a, b) {
    b = GG.w.setVisible.call(this, a, b);
    a && null != this.l() && (oA(this) == this.c.l().firstChild || oA(this) == this.c.l().firstChild.nextSibling) && Au(this.c, !0);
    return b
};
x.Wd = function (a) {
    GG.w.Wd.call(this, a);
    a.target == this.c ? rA(this, this.c.l().firstChild) : rA(this, this.l());
    oA(this).focus();
    oA(this).tabIndex = 0
};
x.Se = function (a) {
    return a == this.c ? -1 : GG.w.Se.call(this, a)
};
x.Wa = function (a) {
    return 9 == a.keyCode ? (this.c.Oa(2) ? (oA(this) == this.c.l().firstChild ? rA(this, this.c.l().firstChild.nextSibling) : rA(this, this.c.l().firstChild), oA(this).focus(), oA(this).tabIndex = 0) : Au(this.c, !0), a.preventDefault(), a.stopPropagation(), !0) : GG.w.Wa.call(this, a)
};
x.Pf = function () {
    return null === tA(this) || !(tA(this) instanceof HG)
};
var HG = function (a, b, c) {
    tu.call(this, a, c || IG.M(), b);
    this.Pa(4, !1)
};
C(HG, tu);
HG.prototype.eb = function (a) {
    a.target == this.l().firstChild.nextSibling && this.dispatchEvent(n)
};
HG.prototype.ba = function () {
    HG.w.ba.call(this);
    Z(this).K(this.l().firstChild, od, function (a) {
        32 == a.keyCode && a.stopPropagation()
    })
};
HG.prototype.ab = function () {
    return this.l().firstChild.value
};
var IG = u();
C(IG, $t);
Wf(IG);
var JG = "",
    KG = "";
IG.prototype.bb = function (a) {
    var b = a.a.b(Ea, {
            value: a.Ja(),
            id: "alt-input-text",
            type: Ne
        }),
        c = a.a.b(Ea, {
            value: JG,
            id: "alt-input-submit",
            "class": KG,
            type: lb
        });
    return a.a.b(k, {
        id: "alt-input"
    }, b, c)
};
var LG = function (a, b, c) {
    var d = I("gt-edit"),
        e = I("gt-res-content"),
        f = I("gt-res-wrap");
    this.a = a;
    this.v = d;
    this.C = e;
    this.F = f;
    O(this.a.l(), Sb, function () {
        V(f, Sb)
    });
    O(this.a.l(), ib, function () {
        W(f, Sb)
    });
    this.c = c;
    null != this.c && O(this.c, n, this.D, !1, this);
    this.j = !1;
    this.g = null;
    this.b = !1;
    this.m = null;
    this.o = b;
    this.L = !1;
    this.G = rp.M()
};
LG.prototype.D = function () {
    this.b = !1;
    this.a.b("");
    this.a.l().focus();
    var a = this.G;
    S(a, T(a, 27));
    this.c.setVisible(!1)
};
var MG = function (a) {
    a.j = !1;
    W(a.F, "full-edit");
    X(a.C, !0);
    X(a.v, !1);
    X(a.o, a.L);
    a.a.setVisible(!1);
    a.a.Uc(!1)
};
LG.prototype.O = function (a) {
    this.b = !1;
    "" != this.a.W() && (this.c.setVisible(!0), this.a.W() != this.m && (this.b = !0));
    a()
};
var OG = function (a) {
        var b = I(Gc);
        this.g = I("gt-res-tools");
        this.a = b;
        null != this.a && ((new Hu(NG, new tw("trans-undo-button"))).Y(this.a), Bk(this.a, NG));
        this.b = a;
        this.c = !1
    },
    NG = "",
    PG = function (a, b) {
        b ? (V(a.g, "edit"), a.c = a.b.isVisible(), a.b.setVisible(!1)) : (W(a.g, "edit"), a.b.setVisible(a.c))
    };
var QG = function (a, b, c, d, e) {
    Y.call(this);
    this.b = d;
    Kp.M();
    this.c = new sv(a);
    uv(this.c, 2);
    this.m = null;
    this.v = new sv(b);
    this.j = null;
    this.J = c;
    this.D = e || !1;
    this.C = this.g = null
};
C(QG, Y);
x = QG.prototype;
x.oa = function (a) {
    this.c.oa(a)
};
x.Aa = function () {
    QG.w.Aa.call(this);
    this.na(xk(k))
};
x.na = function (a) {
    QG.w.na.call(this, a);
    null != this.b && !this.b.Xa && this.b.Y(a);
    V(a, "st-wrap");
    a.appendChild(Ls(er, {
        Di: this.D,
        Ei: this.J
    }));
    this.g = J("st-stp1", a);
    a = I("st-buttons");
    this.c.sa(a);
    this.c.Kd(this);
    Z(this).K(this.c, n, this.Tk);
    this.v.sa(a);
    this.v.Kd(this);
    Z(this).K(this.v, n, this.Pk)
};
x.Tk = function (a) {
    X(this.g, !1);
    null != this.b && this.b.setVisible(!0);
    null != this.m && this.m(a)
};
x.Pk = function (a) {
    X(this.g, !1);
    null != this.j && this.j(a)
};
x.reset = function () {
    this.C && Ym(this.C);
    this.C = null;
    uv(this.c, 2);
    kt(this.l(), 1);
    X(this.l(), !0);
    X(this.g, !0);
    null != this.b && this.b.setVisible(!1)
};
var RG = G || Mh || Ih || Jh || !1;
ji && Do("4") || ki && ai("533") || Lh && ai("2.0") || G && ai("10") || Ih && Bh();
var SG = function (a, b, c, d, e, f, g, l, m) {
    Y.call(this, a);
    this.c = g || null;
    if (null != this.c) {
        a = this.c;
        g = A(this.al, this);
        a.g = A(a.O, a, g);
        g = a.a.l();
        var p = new Tt(g);
        O(p, nd, a.g, !1, a);
        p = new qy(g);
        O(p, Ud, a.g, !1, a);
        O(g, qd, a.g, !1, a)
    }
    this.j = null;
    this.C = eb;
    this.X = this.m = "";
    this.ma = new ls("mt");
    this.ra = !!b && RG && !G;
    this.R = null != e ? e : 0;
    this.b = null;
    this.ra ? this.b = new FG : this.b = new GG;
    m && this.b.oa(!1);
    if (0 < this.R)
        for (b = this.b, b.D = !0, e = 0; e < b.g; e++) a = K(k, fc, ""), m = K(k, null, a), a = new SF(m, a), b.j[e] = a, document.body.appendChild(m);
    this.b.sa(c);
    this.g = l || null;
    this.ea = null != d ? d : -1;
    this.V = Kp.M();
    this.D = new xn;
    this.J = this.N = null;
    this.v = f || null;
    this.$ = !1;
    null != this.v && (c = A(this.Ca, this), this.v.m = c, c = A(this.Sk, this), this.v.j = c);
    this.aa = null;
    this.G = rp.M()
};
C(SG, Y);
var TG = function (a, b) {
        a.aa = b;
        a.b.C = b
    },
    bH = function (a, b, c, d, e) {
        if (null != a.v) {
            var f = a.v;
            X(f.l(), !1);
            X(f.g, !1);
            null != f.b && f.b.setVisible(!1)
        }
        b && (a.j = new fs(b), a.J = null);
        c && (a.C = c);
        d && (a.m = d);
        e && (a.X = e);
        UG(a) && (MG(a.c), null != a.g && PG(a.g, !1));
        if (a.j) {
            b = 0 != mk(Za).length;
            a.a.We(a.l());
            a.b.Me();
            a.aa && (a.aa.b = a.j);
            c = "";
            for (e = d = 0; e < P(a.j, 5); e++) VG(a.j, e) && (c += " "), c += WG(a.j, e), d += P(ks(a.j, e), 2);
            if (0 == d) return !1;
            c = [];
            d = !1;
            e = a.j;
            f = "";
            for (var g = 0; g < P(e, 5); g++) {
                var l = ks(e, g);
                am(l, 4) && 0 < Q(l, 4).length ? f = Q(l, 4) : (new Ur(l.zb())).data[4] =
                    f
            }
            for (e = 0; e < P(a.j, 5); e++) {
                f = ks(a.j, e);
                g = gs(f, 0);
                VG(a.j, e) ? a.a.appendChild(a.l(), a.a.a.createTextNode(" ")) : ("km" == a.m || "lo" == a.m) && a.a.appendChild(a.l(), Mh ? zk(document, Sj("WBR")) : Ih ? yk("&shy;") : G ? yk("&#8203;") : zk(document, Sj("WBR")));
                am(f, 4) && 0 < Q(f, 4).length && 0 == em(f, 5) && c.push(Q(f, 4));
                var m;
                l = WG(a.j, e);
                Ig(l) ? 0 == l.length || (m = XG(l)) : (m = a.a.b(La, null, l), g = em(g, 1), 0 <= a.ea && g < a.ea && V(m, "alt-low-conf"), An(a.D, a.C + "." + a.m + "." + Q(f, 0)) && (g = a.D.get(a.C + "." + a.m + "." + Q(f, 0)), g != YG(f, 0) && (a.a.Xe(m, g), V(m, Za),
                    d = !0, ZG(a, !0))), null != a.b.Qb ? hG(a.b.Qb, m) : m.title = xG, zG(a.b, m, f));
                m && a.a.appendChild(a.l(), m)
            }
            if (null != a.c) {
                m = a.C + "." + a.m;
                for (e = 0; e < c.length; ++e) m += "." + c[e];
                An(a.D, m) && ($G(a, !1), d = !0, aH(a, a.D.get(m)), null != a.g && PG(a.g, !1), ZG(a, !0))
            }
            d || (ZG(a, !1), $G(a, !1));
            (d || b) && a.dispatchEvent(n);
            return 0 < P(a.j, 5)
        }
        ZG(a, !1);
        $G(a, !1);
        return !1
    },
    XG = function (a) {
        a = Og(Wg(a)).split("<br>");
        var b = document.createDocumentFragment(),
            c = 0;
        D(a, function (a) {
            0 != c && b.appendChild(K("BR"));
            c++;
            "" != a && b.appendChild(yk($g(a)))
        });
        return b
    },
    cH = function (a, b) {
        if (UG(a)) return a.c.a.W();
        var c = [];
        if (a.l() && a.l().childNodes)
            for (var d = 0; d < a.l().childNodes.length; ++d) {
                var e = a.l().childNodes[d];
                c[d] = b && "BR" == e.tagName ? "\n" : $k(e)
            }
        return c.join("")
    },
    eH = function (a, b, c, d) {
        for (a = 0; a < P(b, 5); a++) {
            var e = ks(b, a),
                f = e && e;
            if (Mr(c.data, e ? f.data : null)) {
                c = b;
                b = a;
                e = -1;
                a = P(c, 5);
                for (f = b; 0 <= f; f--)
                    if (0 == em(ks(c, f), 5)) {
                        e = f;
                        break
                    }
                for (f = b + 1; f <= P(c, 5); f++)
                    if (0 == em(ks(c, f), 5)) {
                        a = f;
                        break
                    }
                if (null != d && d) b = dH(c, e, a);
                else if (d = c, c = e, d) {
                    e = b + 1;
                    f = b;
                    for (b = WG(d, b).length; 64 > b &&
                    (e != a || f != c);) e < a && (b += WG(d, e++).length + 1), 64 > b && f > c && (b += WG(d, --f).length + 1);
                    b = dH(d, f, e)
                } else b = "";
                return b
            }
        }
        return ""
    },
    dH = function (a, b, c) {
        var d = [];
        d.push(WG(a, b));
        for (b += 1; b < c; b++) VG(a, b) && d.push(" "), d.push(WG(a, b));
        return d.join("")
    },
    VG = function (a, b) {
        if (0 == b) return !1;
        var c = ks(a, b),
            d = ks(a, b - 1);
        return Pr(gs(c, 0), 2) && !Pr(gs(d, 0), 3) && !Hg(WG(a, b - 1), "\n")
    };
x = SG.prototype;
x.Rh = v("m");
x.Aa = function () {
    this.na(el(this.a, "span"))
};
x.na = function (a) {
    SG.w.na.call(this, a);
    bH(this)
};
x.ba = function () {
    SG.w.ba.call(this);
    Z(this).K(this.b, n, this.wa);
    null != this.g && null != this.g.a && (Z(this).K(this.g.a, r, this.Dl), Bt(Z(this), this.g.a, this.G.g, this.G));
    Z(this).K(this.b, se, this.kl);
    this.l() && Z(this).K(this.l(), od, function (a) {
        32 == a.keyCode && a.stopPropagation()
    }, !0)
};
x.T = function () {
    SG.w.T.call(this);
    this.b.Da()
};
x.al = function () {
    this.v.oa(this.c.b);
    ZG(this, this.c.b)
};
var fH = function (a) {
    null != a.g && PG(a.g, !0);
    var b = a.c,
        c = cH(a);
    V(b.F, "full-edit");
    b.c.setVisible(!0);
    b.m = c;
    b.a.g(c);
    b.a.setVisible(!0);
    b.a.Uc(!0);
    X(b.v, !0);
    X(b.C, !1);
    b.L = lt(b.o);
    X(b.o, !1);
    c = b.a.l();
    c.focus();
    c.setSelectionRange(c.value.length, c.value.length);
    b.j = !0;
    a.$ = lt(a.v.l());
    a.v.reset();
    null != a.g ? a.v.oa(lt(a.g.a)) : a.v.oa(!1);
    ZG(a, !1)
};
SG.prototype.wa = function (a) {
    if (a.type != Sc || a.target == this.b)
        if (a.target == this.b.m && null != this.c) {
            this.V.log("editpopupclk");
            var b = this.G;
            S(b, T(b, 233));
            fH(this)
        } else {
            var c = a.hk;
            null == c && null != a.currentTarget && (c = a.currentTarget.sb);
            b = a.target.ab();
            if (null != c && null != a.target) {
                var d = c,
                    e = this.b.v.get(dg(d));
                this.a.Xe(d, b);
                b == YG(e, 0) ? (W(d, Za), 0 == mk(Za).length && (ZG(this, !1), $G(this, !1))) : (V(d, Za), ZG(this, !0), $G(this, !0));
                null != this.D && this.D.set(this.C + "." + this.m + "." + Q(e, 0), b);
                e = this.b.v.get(dg(c));
                null !=
                this.D && this.D.set(this.C + "." + this.m + "." + Q(e, 0), b);
                d = YG(e, 0);
                c = Qt(this.b, a.target);
                d = {
                    sl: this.C,
                    tl: this.m,
                    utrans: b,
                    gtrans: d,
                    index: c,
                    ophrase: Q(e, 0),
                    osentence: Q(e, 4),
                    tsentence: eH(this, this.j, e)
                };
                0 < P(e, 2) && (d.confidence = em(gs(e, 0), 1));
                if (a.target instanceof HG || -1 == c) d.manual = 1, c = this.G, S(c, T(c, 240));
                else {
                    a = this.G;
                    e = T(a, 239);
                    var f = new Wo,
                        g = zi(zi(f, 2, Uo), 3, So);
                    H(g, 1, c);
                    xi(e, 27, f);
                    S(a, e)
                }
                for (var l in d) Pf(d[l]) && 64 < d[l].length && (d.tr = 1, d[l] = d[l].substr(0, 64));
                this.V.log("usealt", d, null);
                l = new N("usealt");
                l.text = b;
                this.dispatchEvent(l);
                this.dispatchEvent(n)
            }
        }
};
var aH = function (a, b) {
    if (a.l()) {
        null == a.N && (a.J = zg(a.a.Oh(a.l())));
        a.N = b;
        var c;
        if (c = a.l().childNodes && 0 < a.l().childNodes.length) c = (c = a.l().childNodes[0]) ? An(a.b.b, dg(c)) : !1;
        c ? (a.a.We(a.l()), a.b.Me(), b = a.a.b(La, Za, a.N), a.a.appendChild(a.l(), b), zG(a.b, b, new Ur)) : a.l().innerHTML = Og(Wg(b))
    }
};
x = SG.prototype;
x.Im = function () {
    this.N = null;
    this.c.b = !1
};
x.Dl = function () {
    if (null != this.c && UG(this)) {
        var a = this.c;
        a.c.setVisible(!0);
        a.a.g(a.m);
        a.a.l().focus();
        a.g(null)
    } else UG(this) && (null != this.g && PG(this.g, !1), MG(this.c)), this.D.$c(), this.N = null, bH(this), this.dispatchEvent(n);
    this.V.log("clkundo", void 0, null)
};
x.Sk = function () {
    UG(this) && (this.c.b && (aH(this, this.c.a.W()), this.$ = !0), MG(this.c), null != this.g && PG(this.g, !1), this.c.b && ZG(this, !0), this.v.oa(!0), X(this.v.l(), this.$), this.dispatchEvent(n));
    var a = this.G;
    S(a, T(a, 215));
    this.V.log("clkcancel", void 0, null)
};
x.kl = function () {
    var a = this.b.v.get(dg(this.b.sb));
    if (a) {
        if (0 < this.R) {
            var b = new gq("source=baf");
            if (1 == this.R) {
                for (var c = [], d = 0, e = P(a, 2); d < e; d++) c.push(YG(a, d));
                os(this.ma, this.m, this.C, gH(this), c, A(this.pm, this), void 0, b, void 0)
            } else
                for (d = 0, e = P(a, 2); d < e; d++) c = YG(a, d), ps(this.ma, this.m, this.C, gH(this), c, ["at", "t"], A(this.qm, this, d), void 0, b)
        }
        b = new N(r);
        b.text = this.b.ab();
        b.Wl = P(this.j, 5);
        this.dispatchEvent(b);
        b = {};
        b.confidence = em(gs(a, 0), 1);
        this.C && this.m && this.X && (b.segments = P(this.j, 5), b.sl = this.C,
            b.tl = this.m, b.hl = this.X);
        a = this.G;
        S(a, T(a, 238));
        this.V.log("phrsclk", b, null)
    }
};
x.qm = function (a, b) {
    if (1 == this.R || 1 < P(b, 5)) {
        var c = js(b, 0).kb();
        var d = 1;
        for (var e = P(b, 0); d < e; d++) c += " " + js(b, d).kb();
        d = c
    } else if (1 == P(b, 5)) {
        c = [];
        b = ks(b, 0);
        d = 0;
        for (e = Math.min(this.R, P(b, 2)); d < e; d++) c.push(YG(b, d));
        d = c.join(", ")
    } else d = "...";
    DG(this.b, a, d)
};
x.pm = function (a) {
    for (var b = 0; b < a.length; b++) DG(this.b, b, a[b])
};
var ZG = function (a, b) {
        null != a.g && null != a.g.a && X(a.g.a, b)
    },
    $G = function (a, b) {
        null != a.v && (b && a.v.reset(), X(a.v.l(), b))
    };
SG.prototype.Ca = function () {
    var a = [],
        b;
    null != this.J ? b = this.J : b = Gk(this.l());
    for (var c = {
        segment: []
    }, d = null, e = 0, f = 0; f < b.length; f++) {
        var g = ks(this.j, f);
        if (null != g) {
            var l = $k(b[f]);
            a: {
                var m = l;
                var p = g;
                if (0 == P(p, 2)) m = 0;
                else {
                    for (var q = 0; q < P(p, 2); ++q)
                        if (m == YG(p, q)) {
                            m = q;
                            break a
                        }
                    m = -1
                }
            }
            p = Lg(Q(g, 4));
            q = eH(this, this.j, g, !0);
            if (0 != p.length) {
                if (0 == a.length || p != a[a.length - 1]) a.push(p), d = hH(this, a.length - 1), e = 0, d = {
                    source: p,
                    original_target: q,
                    segment_source: d,
                    phrase_correction: []
                }, c.segment.push(d);
                if (0 != m)
                    for (p = YG(g,
                        0).length, m = {
                        alternative_index: m,
                        edited_phrase: l,
                        source_span: [],
                        target_span: [{
                            start: e,
                            end: e + p
                        }]
                    }, d.phrase_correction.push(m), p = 0; p < P(g, 3); ++p) q = hs(g, p), m.source_span.push({
                        start: em(q, 0),
                        end: em(q, 1)
                    });
                e += l.length;
                Pr(gs(g, 0), 2) && e++
            }
        }
    }
    if (UG(this)) {
        this.dispatchEvent(n);
        MG(this.c);
        null != this.g && PG(this.g, !1);
        ZG(this, !0);
        this.c.a.W() != cH(this) && aH(this, this.c.a.W());
        b = this.C + "." + this.m;
        for (f = 0; f < a.length; ++f) b += "." + a[f];
        a = this.c.a.W();
        this.D.set(b, a);
        c.contains_full_edit = !0
    }
    c.edited_target = cH(this, !0);
    a = new gq;
    a.set("ue", JSON.stringify(c));
    a.set("sl", this.C);
    a.set("tl", this.m);
    Un("/translate_suggestion?client=t", void 0, Ia, a.toString(), void 0, 1E4)
};
var hH = function (a, b) {
        if (b < P(a.j, 0)) switch (Or(js(a.j, b), 4, 0)) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            case 10:
                return 4;
            case 3:
                return 5
        }
        return 0
    },
    UG = function (a) {
        return null != a.c && a.c.j
    },
    WG = function (a, b) {
        a = ks(a, b);
        return 0 == P(a, 2) ? Q(a, 0) : YG(a, 0)
    },
    YG = function (a, b) {
        return Q(gs(a, b), 0)
    },
    gH = function (a) {
        a = a.X;
        0 === a.length && null != I("hl") && (a = I("hl").value);
        return a
    };
var iH = function (a) {
    this.data = a || []
};
C(iH, Nr);
var jH = function (a) {
    this.data = a || []
};
C(jH, Nr);
iH.prototype.Mc = function () {
    return Q(this, 0)
};
iH.prototype.kb = function () {
    return Q(this, 4)
};
var kH = function (a) {
    var b = USAGE,
        c = MSG_PB_ERROR;
    this.j = a;
    this.a = "";
    this.c = b;
    this.g = c
};
kH.prototype.b = function (a, b) {
    b = b.target;
    if (co(b) && "" != eo(b) && null != fo(b)) {
        b = fo(b);
        b = new jH(b);
        var c = Q(b, 1);
        null != c && "" != c && (this.a = c)
    } else b = new jH, b.data[3] = this.g;
    a(b)
};
var lH = function (a, b, c, d, e) {
    var f = window.location.href;
    b = new aq(b);
    (f = (new aq(f, !0)).a.get(db)) && b.a.set(db, f);
    b = b.toString();
    b += "&hl=" + a.j;
    a.c && (b += "&xt=" + a.c);
    null != e ? Un(b, A(a.b, a, c), d, e) : Un(b, A(a.b, a, c), d)
};
kH.prototype.Ka = function (a, b, c, d, e, f) {
    var g = {
        cm: "g"
    };
    null != b && b != Xa && (g.sl = b);
    null != c && c != Xa && (g.tl = c);
    null != d && "" != d && (g.q = d);
    null != e && "" != e && (g.utrans = e);
    null != f && "0" != f && (g.od = f);
    "" != this.a && (g.tk = this.a, this.a = "");
    lH(this, na + Jn(g), a, "GET")
};
var mH = function (a, b, c) {
    R.call(this);
    this.o = a;
    this.m = b;
    this.c = c;
    this.D = 1E4;
    this.a = null;
    this.j = this.g = Xa;
    this.v = "0";
    this.b = "";
    this.C = [];
    this.F = !1;
    this.L = ""
};
C(mH, R);
var nH = function (a) {
        a.F = !1;
        if ("" != a.b) {
            var b = a.o,
                c = A(a.O, a),
                d = {
                    cm: "s"
                };
            d.q = a.b;
            "" != b.a && (d.tk = b.a, b.a = "");
            lH(b, na + Jn(d), c, "GET")
        } else a.o.Ka(A(a.O, a), a.g, a.j, void 0, void 0, a.v)
    },
    oH = function (a) {
        return null != a.a ? a.a : []
    };
mH.prototype.J = function (a, b) {
    var c = Q(b, 3);
    if (null != c && "" != c) this.L = c, this.dispatchEvent(Vd);
    else if (ug(this.C, Q(b, 5)), am(b, 6) && (c = Number(Q(b, 6, "")), null == c || isNaN(c) || (this.D = c)), null == this.a || this.F || "0" != this.v) nH(this);
    else {
        c = new iH;
        var d = a && a;
        a = c.data;
        d = d ? d.zb() : null;
        a !== d && (a.length = 0, d && (a.length = d.length, Ir(a, d)));
        c.data[0] = Q(b, 5);
        this.a.push(c);
        this.dispatchEvent(Vd)
    }
};
var pH = function (a) {
        var b = zg(a.C);
        a.C = [];
        return b
    },
    qH = function (a, b) {
        if (0 != b.length) {
            var c = a.o,
                d = {
                    cm: "d"
                };
            d.count = b.length + "";
            var e = {};
            e.id = b;
            lH(c, na + Jn(d), Vf, Ia, Jn(e));
            for (c = a.a.length - 1; 0 <= c; --c) tg(b, a.a[c].Mc()) && vg(a.a, c)
        }
    };
mH.prototype.O = function (a) {
    this.a = [];
    for (var b = 0; b < P(a, 2); ++b) this.a.push(new iH($l(a, 2, b)));
    this.L = dh(Q(a, 3));
    this.dispatchEvent(Vd);
    am(a, 6) && (a = Number(Q(a, 6, "")), null == a || isNaN(a) || (this.D = a))
};
var rH = function (a) {
    a.match(/[",\t\n]/) && (a = '"' + a.replace(/"/g, '""') + '"');
    return a
};
mH.prototype.Na = function () {
    if (null == this.a) return [];
    for (var a = [], b = 0; b < this.a.length; b++) {
        var c = this.a[b],
            d = Q(c, 3);
        void 0 == Q(c, 1) && void 0 == Q(c, 2) && Gg(d, void 0) && d.length >= (void 0).length && a.push(c)
    }
    Eg(a);
    return a
};
var rh = {},
    sH = null,
    tH = function (a) {
        a = dg(a);
        delete rh[a];
        sh() && sH && sH.stop()
    },
    vH = function () {
        sH || (sH = new Ju(function () {
            uH()
        }, 20));
        var a = sH;
        a.gb() || a.start()
    },
    uH = function () {
        var a = hg();
        nh(rh, function (b) {
            wH(b, a)
        });
        sh() || vH()
    };
var xH = function (a, b, c, d) {
    IF.call(this);
    if (!Yf(a) || !Yf(b)) throw Error("Start and end parameters must be arrays");
    if (a.length != b.length) throw Error("Start and end points must be the same length");
    this.m = a;
    this.D = b;
    this.duration = c;
    this.L = d;
    this.coords = [];
    this.progress = 0
};
C(xH, IF);
xH.prototype.play = function (a) {
    if (a || 0 == this.a) this.progress = 0, this.coords = this.m;
    else if (1 == this.a) return !1;
    tH(this);
    this.c = a = hg(); - 1 == this.a && (this.c -= this.duration * this.progress);
    this.endTime = this.c + this.duration;
    this.progress || this.g();
    this.b(Wd); - 1 == this.a && this.b("resume");
    this.a = 1;
    var b = dg(this);
    b in rh || (rh[b] = this);
    vH();
    wH(this, a);
    return !0
};
xH.prototype.stop = function (a) {
    tH(this);
    this.a = 0;
    a && (this.progress = 1);
    yH(this, this.progress);
    this.b("stop");
    this.j()
};
xH.prototype.T = function () {
    0 == this.a || this.stop(!1);
    this.b("destroy");
    xH.w.T.call(this)
};
var wH = function (a, b) {
        b < a.c && (a.endTime = b + a.endTime - a.c, a.c = b);
        a.progress = (b - a.c) / (a.endTime - a.c);
        1 < a.progress && (a.progress = 1);
        yH(a, a.progress);
        1 == a.progress ? (a.a = 0, tH(a), a.b(Rb), a.j()) : 1 == a.a && a.C()
    },
    yH = function (a, b) {
        $f(a.L) && (b = a.L(b));
        a.coords = Array(a.m.length);
        for (var c = 0; c < a.m.length; c++) a.coords[c] = (a.D[c] - a.m[c]) * b + a.m[c]
    };
xH.prototype.C = function () {
    this.b("animate")
};
xH.prototype.b = function (a) {
    this.dispatchEvent(new zH(a, this))
};
var zH = function (a, b) {
    N.call(this, a);
    this.coords = b.coords;
    this.duration = b.duration;
    this.progress = b.progress;
    this.state = b.a
};
C(zH, N);
var AH = function (a, b, c, d, e) {
    xH.call(this, b, c, d, e);
    this.o = a
};
C(AH, xH);
AH.prototype.v = Vf;
AH.prototype.C = function () {
    this.v();
    AH.w.C.call(this)
};
AH.prototype.j = function () {
    this.v();
    AH.w.j.call(this)
};
AH.prototype.g = function () {
    this.v();
    AH.w.g.call(this)
};
var BH = function (a, b, c, d, e) {
    Qf(b) && (b = [b]);
    Qf(c) && (c = [c]);
    AH.call(this, a, b, c, d, e);
    if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
    this.F = -1
};
C(BH, AH);
var CH = 1 / 1024;
BH.prototype.v = function () {
    var a = this.coords[0];
    Math.abs(a - this.F) >= CH && (kt(this.o, a), this.F = a)
};
BH.prototype.g = function () {
    this.F = -1;
    BH.w.g.call(this)
};
BH.prototype.j = function () {
    this.F = -1;
    BH.w.j.call(this)
};
var DH = function (a, b, c) {
    BH.call(this, a, 1, 0, b, c)
};
C(DH, BH);
DH.prototype.g = function () {
    this.o.style.display = "";
    DH.w.g.call(this)
};
DH.prototype.j = function () {
    this.o.style.display = Ld;
    DH.w.j.call(this)
};
var EH = function (a, b, c) {
    BH.call(this, a, 0, 1, b, c)
};
C(EH, BH);
EH.prototype.g = function () {
    this.o.style.display = "";
    EH.w.g.call(this)
};
var FH = function (a, b, c, d, e) {
    if (3 != b.length || 3 != c.length) throw Error("Start and end points must be 3D");
    AH.apply(this, arguments)
};
C(FH, AH);
FH.prototype.v = function () {
    for (var a = [], b = 0; b < this.coords.length; b++) a[b] = Math.round(this.coords[b]);
    this.o.style.backgroundColor = "rgb(" + a.join(",") + ")"
};
var GH = function (a, b, c) {
    var d = "rw";
    null != c && c && (d = "m" + d);
    this.j = b;
    yv.call(this, a, d, MSG_SEE_ALSO, MSG_SEE_ALSO, 10);
    this.Rf = !0
};
C(GH, yv);
GH.prototype.update = function (a, b, c, d) {
    GH.w.update.call(this, a, b, c, d);
    if (!d || 0 == P(is(d), 0)) return !1;
    if (a = this.l()) b = $k(this.v), zs(a, rd, b);
    Ck(this.b);
    this.md();
    c = a = K(k, {
        "class": Hc
    });
    b = 15 < P(is(d), 0);
    for (var e = 0; e < P(is(d), 0); ++e) {
        var f = cm(is(d), 0, e),
            g = K(La, {
                "class": Bc
            });
        L(g, f);
        ys(g, Pd);
        g.tabIndex = -1;
        this.c.push(g);
        if (10 == e && b) {
            var l = K(k, {
                "class": Hc
            });
            c = l;
            l = b ? K(La, {
                "class": zc
            }, l) : l;
            Qs(l, {
                display: Ld
            })
        }
        this.j || 0 != e && e != P(is(d), 0) && c.appendChild(yk(", "));
        c.appendChild(g)
    }
    c = aj(this.Qa) ? ge : xd;
    Qs(this.b, {
        direction: c
    });
    this.b.appendChild(a);
    l && this.b.appendChild(l);
    b && (d = MSG_N_MORE_RELATED_LABEL.replace(ea, P(is(d), 0) - 7), Av(this, d, MSG_FEWER_RELATED_LABEL));
    HH(this, zg(Gk(a)));
    this.setVisible(!0);
    return !0
};
GH.prototype.ba = function () {
    GH.w.ba.call(this);
    var a = this.l();
    a && (ys(a, wd), Yl(a, this.D.bind(this)))
};
var HH = function (a, b) {
    a.j && (Pl(a.l(), od), O(a.l(), od, function (a) {
        var c = zg(b),
            e = dl(document);
        if (e) {
            var f = c.indexOf(e);
            e = f + 1 === c.length ? 0 : f + 1;
            f = 0 > f - 1 ? c.length - 1 : f - 1;
            switch (a.keyCode) {
                case 39:
                    c[e].focus();
                    break;
                case 37:
                    c[f].focus()
            }
        }
    }, !1))
};
GH.prototype.D = function (a) {
    Es(a.target, Bc) && this.dispatchEvent(new N("a", a.target))
};
GH.prototype.Ld = function (a) {
    var b = [],
        c = mk(zc, this.l());
    if (this.j) {
        var d = [];
        a ? d = zg(mk(Bc, this.l())) : d = zg(Gk(J(Hc, this.l())));
        HH(this, d)
    }
    for (var e = 0; e < c.length; e++) d = c[e], a ? b.push(new EH(d, 218)) : b.push(new DH(d, 218));
    for (e = 0; e < b.length; e++) b[e].play()
};
var IH = u(),
    JH = function (a) {
        var b = K(La);
        b.style.color = "transparent";
        b.style.background = "transparent";
        b.style.top = "-1000px";
        b.style.left = "-1000px";
        b.style.position = Ua;
        document.body.appendChild(b);
        L(b, a);
        a = b.offsetWidth;
        Fk(b);
        return a
    };
Wf(IH);
var KH = function () {
    IH.M()
};
Wf(KH);
var LH = function (a) {
    var b = JH(a);
    a = JH(a.substr(0, 1));
    return b != a
};
var NH = function (a, b) {
    R.call(this);
    var c = Bf(a);
    for (a = c.next(); !a.done; a = c.next()) MH(a.value, this.a.bind(this));
    b = Bf(b);
    for (a = b.next(); !a.done; a = b.next()) MH(a.value, this.b.bind(this))
};
NH.prototype = Df(R.prototype);
NH.prototype.constructor = NH;
if (If) If(NH, R);
else
    for (var OH in R)
        if ("prototype" != OH)
            if (Object.defineProperties) {
                var PH = Object.getOwnPropertyDescriptor(R, OH);
                PH && Object.defineProperty(NH, OH, PH)
            } else NH[OH] = R[OH];
NH.w = R.prototype;
NH.prototype.a = function (a) {
    a = QH(a.target);
    if ("" != a) {
        var b = new N(ie);
        b.text = a;
        this.dispatchEvent(b)
    }
};
NH.prototype.b = function (a) {
    a = QH(a.target);
    if ("" != a) {
        var b = new N(ie);
        b.text = a;
        b.Kl = !0;
        this.dispatchEvent(b)
    }
};
var QH = function (a) {
    var b = "";
    try {
        if (Sy(a)) var c = a.value.substring(a.selectionStart, a.selectionEnd);
        else if (Ty()) {
            var d = Uy(a),
                e = d[1];
            if (d[0].inRange(e)) {
                if (a.type == Oe) {
                    var f = e.duplicate(),
                        g = f.text;
                    a = g;
                    for (d = !1; !d;) 0 == f.compareEndPoints(Na, f) ? d = !0 : (f.moveEnd(pb, -1), f.text == g ? a += "\r\n" : d = !0);
                    var l = a
                } else l = e.text;
                var m = l
            } else m = "";
            c = m
        } else throw Error("Cannot get the selection text");
        b = c.trim();
        if ("" != b) return b
    } catch (p) {}
    b = jC(window);
    return b.toString ? b.toString().trim() : ""
};

function MH(a, b) {
    O(a, Ed, b);
    O(a, qd, function (a) {
        16 == a.keyCode && b(a)
    })
};
var RH = u(),
    SH = new RH,
    TH = [r, od, qd];
RH.prototype.K = function (a, b, c, d, e) {
    var f = function (a) {
        var c = Hl(b),
            e = Kk(a.target) ? a.target.getAttribute(fe) || null : null;
        a.type == r && tl(a) ? c.call(d, a) : 13 != a.keyCode && 3 != a.keyCode || a.type == qd ? 32 != a.keyCode || a.type != qd || e != lb && "tab" != e || (c.call(d, a), a.preventDefault()) : (a.type = pd, c.call(d, a))
    };
    f.Pb = b;
    f.mm = d;
    e ? e.K(a, TH, f, c) : O(a, TH, f, c)
};
RH.prototype.Ga = function (a, b, c, d, e) {
    for (var f, g = 0; f = TH[g]; g++) {
        var l = a;
        var m = f;
        var p = !!c;
        m = vl(l) ? l.Qe(m, p) : l ? (l = Jl(l)) ? l.Qe(m, p) : [] : [];
        for (l = 0; p = m[l]; l++) {
            var q = p.listener;
            if (q.Pb == b && q.mm == d) {
                e ? e.Ga(a, f, p.listener, c, d) : Nl(a, f, p.listener, c, d);
                break
            }
        }
    }
};
var UH = function (a) {
    var b = sa + U("jfk-bubble") + '" role="alertdialog"' + (a.uid ? ' aria-describedby="' + U(a.uid) + '"' : "") + '><div class="' + U(ed) + '"' + (a.uid ? ' id="' + U(a.uid) + '"' : "") + "></div>";
    a.wm && (a = b += sa + U(dd) + " " + U("jfk-bubble-closebtn") + '" aria-label="', b = "Close".replace(Mq, Nq), b = a + b + '" role="button" tabindex=0></div>');
    b += sa + U(cd) + " " + U("jfk-bubble-arrow") + '"><div class="' + U("jfk-bubble-arrowimplbefore") + '"></div><div class="' + U("jfk-bubble-arrowimplafter") + '"></div></div></div>';
    return Gq(b)
};
var VH = function (a) {
    Y.call(this, a);
    this.c = new Tu("jfk-bubble", !0);
    this.b = new RF;
    this.C = []
};
C(VH, Y);
VH.prototype.g = !0;
var WH = function (a, b) {
        a.c.Be = !1;
        Uu(a.c, 1, b, void 0)
    },
    YH = function (a, b) {
        a.N = b;
        XH(a, b)
    },
    XH = function (a, b) {
        a = a.Yb();
        b && a && (Pf(b) ? L(a, b) : b instanceof Eq ? Yj(a, Cq(b)) : b instanceof Jj ? Yj(a, b) : (Yj(a, Uj), a.appendChild(b)))
    };
x = VH.prototype;
x.setAutoHide = function (a) {
    this.b.setAutoHide(a)
};
x.Yb = function () {
    return this.zc(ed)
};
x.Aa = function () {
    this.H = Ms(UH, {
        wm: this.g,
        uid: "bubble-" + dg(this)
    }, void 0, this.a);
    XH(this, this.N);
    X(this.l(), !1);
    this.b.$d(this.l());
    if (!Nh) {
        var a = this.b,
            b = cG(this.l(), .218, "ease-out", 0, 1),
            c = cG(this.l(), .218, "ease-in", 1, 0);
        a.v = b;
        a.m = c
    }
    Fs(this.l(), this.C)
};
x.ba = function () {
    VH.w.ba.call(this);
    Z(this).K(this.b, [gb, se, fb, Sc], this.J);
    if (this.g) {
        var a = Z(this);
        SH.K(this.zc(dd), gg(this.setVisible, !1), void 0, a.m || a, a)
    }
    a = this.c;
    var b = this.zc(cd);
    a.c = this.l();
    a.j = b;
    a = this.b;
    a.R = this.c || void 0;
    a.isVisible() && a.C()
};
x.setVisible = function (a) {
    this.b.setVisible(a)
};
x.isVisible = function () {
    return this.b.isVisible()
};
var ZH = function (a) {
    a.isVisible() && a.b.C()
};
VH.prototype.T = function () {
    this.b.Da();
    delete this.b;
    VH.w.T.call(this)
};
VH.prototype.j = function () {
    dt(this.l());
    return !1
};
VH.prototype.J = function (a) {
    if (a.type == se || a.type == Sc) {
        var b = Z(this),
            c = this.a;
        c = G ? fl(c) : c.a;
        a.type == se ? b.K(c, he, this.j) : b.Ga(c, he, this.j)
    }
    return this.dispatchEvent(a.type)
};
var $H = function (a, b) {
        this.a = a;
        this.b = b
    },
    aI = {
        af: "af-ZA",
        am: "am-ET",
        az: "az-AZ",
        bg: "bg-BG",
        ca: "ca-ES",
        cs: "cs-CZ",
        da: "da-DK",
        de: "de-DE",
        el: "el-GR",
        eu: "eu-ES",
        fa: "fa-IR",
        fi: "fi-FI",
        tl: "fil-PH",
        gl: "gl-ES",
        gu: "gu-IN",
        hi: "hi-IN",
        hr: "hr-HR",
        hu: "hu-HU",
        hy: "hy-AM",
        iw: "he-IL",
        id: "id-ID",
        is: "is-IS",
        it: "it-IT",
        ja: "ja-JP",
        jw: "jv-ID",
        ka: "ka-GE",
        km: "km-KH",
        kn: "kn-IN",
        ko: "ko-KR",
        lo: "lo-LA",
        lt: "lt-LT",
        lv: "lv-LV",
        ml: "ml-IN",
        mr: "mr-IN",
        ms: "ms-MY",
        ne: "ne-NP",
        no: "nb-NO",
        nl: "nl-NL",
        pl: "pl-PL",
        ro: "ro-RO",
        ru: "ru-RU",
        si: "si-LK",
        sk: "sk-SK",
        sl: "sl-SI",
        sr: "sr-RS",
        su: "su-ID",
        sv: "sv-SE",
        te: "te-IN",
        th: "th-TH",
        tr: "tr-TR",
        uk: "uk-UA",
        vi: "vi-VN",
        zu: "zu-ZA",
        "ar::ae": "ar-AE",
        "ar::bh": "ar-BH",
        "ar::dz": "ar-DZ",
        "ar::eg": "ar-EG",
        "ar::il": "ar-IL",
        "ar::jo": "ar-JO",
        "ar::kw": "ar-KW",
        "ar::lb": "ar-LB",
        "ar::ma": "ar-MA",
        "ar::om": "ar-OM",
        "ar::ps": "ar-PS",
        "ar::qa": "ar-QA",
        "ar::sa": "ar-SA",
        "ar::tn": "ar-TN",
        ar: "ar-EG",
        "bn::bd": "bn-BD",
        "bn::in": "bn-IN",
        bn: "bn-BD",
        "en::au": "en-AU",
        "en::ca": "en-CA",
        "en::com": "en-US",
        "en::gh": "en-GH",
        "en::ie": "en-IE",
        "en::in": "en-IN",
        "en::ke": "en-KE",
        "en::ng": "en-NG",
        "en::nz": "en-NZ",
        "en::ph": "en-PH",
        "en::tz": "en-TZ",
        "en::uk": "en-GB",
        "en::za": "en-ZA",
        en: "en-001",
        "es::ar": "es-AR",
        "es::bo": "es-BO",
        "es::cl": "es-CL",
        "es::co": "es-CO",
        "es::cr": "es-CR",
        "es::do": "es-DO",
        "es::ec": "es-EC",
        "es::es": "es-ES",
        "es::gt": "es-GT",
        "es::hn": "es-HN",
        "es::mx": "es-MX",
        "es::ni": "es-NI",
        "es::pa": "es-PA",
        "es::pe": "es-PE",
        "es::pr": "es-PR",
        "es::py": "es-PY",
        "es::sv": "es-SV",
        "es::com": "es-US",
        "es::uy": "es-UY",
        "es::ve": "es-VE",
        es: "es-ES",
        "fr::ca": "fr-CA",
        "fr::fr": "fr-FR",
        fr: "fr-FR",
        "pt::pt": "pt-PT",
        pt: "pt-BR",
        "ta::in": "ta-IN",
        "ta::lk": "ta-LK",
        "ta::sg": "ta-SG",
        "ta::my": "ta-MY",
        ta: "ta-IN",
        "sw::ke": "sw",
        "sw::tz": "sw-TZ",
        sw: "sw",
        "ur::pk": "ur-PK",
        "ur::in": "ur-IN",
        ur: "ur-PK",
        "zh-CN:zh-TW:hk": "yue-Hant-HK",
        "zh-CN:zh-CN:hk": "cmn-Hans-HK",
        "zh-CN:zh-TW": "cmn-Hant-TW",
        "zh-CN": "cmn-Hans-CN"
    };
$H.prototype.get = function (a) {
    return aI[a + ":" + this.b + ":" + this.a] || aI[a + "::" + this.a] || aI[a + ":" + this.b] || aI[a] || null
};
var bI = function (a, b) {
    VH.call(this, b);
    this.v = 0;
    this.c.sf = !0;
    this.setAutoHide(!1);
    this.c.b = a;
    ZH(this);
    WH(this, 2);
    this.g = !1;
    YH(this, Ms(br, {
        label: MSG_SPEAK_NOW
    }))
};
C(bI, VH);
bI.prototype.ba = function () {
    bI.w.ba.call(this);
    this.m = J("gt-speech-l3", this.l())
};
var cI = function (a) {
    0 == a.v++ && V(a.m, "trigger");
    Xm(a.D, 600, a)
};
bI.prototype.D = function () {
    0 == --this.v && W(this.m, "trigger")
};
var dI = function (a, b, c, d, e) {
    R.call(this);
    this.X = a;
    this.v = b;
    this.a = null;
    yr && "webkitSpeechRecognition" in window && (a = new webkitSpeechRecognition, a.continuous = !Wv() && !Vv(), a.interimResults = !0, this.a = a);
    this.V = new $H(c, d);
    this.R = !e;
    this.c = "";
    this.Bb = !1;
    this.b = null;
    this.m = Xc;
    this.j = Kp.M();
    this.ia = lp.M();
    this.G = rp.M();
    this.o = null
};
C(dI, R);
var eI = function (a) {
        if (null != a.a) {
            a.o = I(Kc);
            var b = a.o;
            a.b = new qw(MSG_SPEECH_INPUT_TURN_ON, MSG_SPEECH_INPUT_TURN_OFF, new tw("speech-button", !1));
            a.b.Y(K(k, {
                id: "gt-speech",
                tabindex: "0"
            }));
            b.insertBefore(a.b.l(), b.childNodes[1] || null);
            a.g = new bI(a.b.l());
            a.g.sa(a.b.l());
            a.a.onresult = A(a.D, a);
            a.a.onstart = A(a.N, a);
            a.a.onspeechstart = A(a.J, a);
            a.a.onend = A(a.C, a);
            a.a.onspeechend = A(a.O, a);
            a.a.onerror = A(a.aa, a);
            a.a.onnomatch = A(a.L, a);
            O(a.b, n, a.F, !1, a);
            O(a.o, r, a.$, !1, a)
        }
    },
    fI = function (a, b) {
        var c = a.ia;
        b ? (c.j = c.a,
            c.a = 3) : c.a = c.j;
        a.g.setVisible(b && a.R)
    },
    gI = "init:buttonOn end:buttonOn buttonOn:start start:speechStart speechStart:result result:result result:buttonOff buttonOff:speechEnd speechEnd:end".split(" "),
    hI = function (a, b) {
        if (!(0 <= gI.indexOf(a.m + ":" + b))) {
            var c = {};
            c.from = a.m;
            c.to = b;
            a.j.log("speech", c)
        }
        a.m = b
    };
dI.prototype.F = function () {
    if (this.b.Ya()) {
        var a = this.G;
        S(a, T(a, 149));
        Pp(this.j, qf, "si", Ge, {
            sl: ""
        });
        sD(this.v, !0);
        this.c = "";
        this.a.start();
        hI(this, "buttonOn")
    } else this.a.stop(), fI(this, !1), hI(this, "buttonOff"), sD(this.v, !1)
};
dI.prototype.$ = function () {
    if (!this.b.isEnabled()) {
        this.dispatchEvent(lf);
        var a = this.G;
        S(a, T(a, 305));
        Pp(this.j, qf, "dia", r, {
            dias: "vi"
        })
    }
};
var iI = function (a, b) {
    null != a.a && (a.Bb && a.a.stop(), b = a.V.get(b), a.a.lang = null != b ? b : "", a.b.setVisible(null != b))
};
dI.prototype.N = function () {
    this.Bb = !0;
    fI(this, !0);
    hI(this, Ge);
    this.dispatchEvent(Ge)
};
dI.prototype.J = function () {
    cI(this.g);
    hI(this, "speechStart");
    this.dispatchEvent("speechStart")
};
dI.prototype.C = function () {
    jI(this);
    hI(this, Pb);
    this.dispatchEvent(Pb)
};
dI.prototype.O = function () {
    cI(this.g);
    hI(this, "speechEnd")
};
var jI = function (a) {
    a.Bb = !1;
    fI(a, !1);
    a.b.Sa(!1)
};
dI.prototype.D = function (a) {
    cI(this.g);
    for (var b = "", c = a.resultIndex; c < a.results.length; ++c) this.a.continuous && (this.c || b) && 0 < a.results[c].length && a.results[c][0].transcript && a.results[c][0].transcript.length && " " != a.results[c][0].transcript[0] || (a.results[c].isFinal ? this.c += a.results[c][0].transcript : b += a.results[c][0].transcript);
    a = this.c + b;
    Sp(this.j, $c, 3);
    this.X.b(a);
    hI(this, "result")
};
dI.prototype.aa = function () {
    jI(this);
    hI(this, Qb)
};
dI.prototype.L = function () {
    jI(this);
    hI(this, "noMatch")
};
dI.prototype.gb = v("Bb");
var kI = function (a, b, c, d, e, f) {
    Y.call(this);
    this.N = a;
    this.$ = b;
    this.ea = c;
    this.aa = d || "";
    this.ma = e || "";
    this.Ca = f || u();
    this.c = this.J = this.g = "";
    this.b = !1;
    this.C = !0;
    this.v = [];
    this.m = "";
    this.R = !1;
    this.D = new Ju(this.X, 1E3, this);
    this.j = Kp.M();
    this.G = rp.M()
};
C(kI, Y);
kI.prototype.setVisible = function (a) {
    a || (this.R = this.b = !1, this.D.stop());
    X(this.l(), a)
};
kI.prototype.isVisible = function () {
    return lt(this.l())
};
var lI = function (a, b) {
    if ("" == b.Je) a.setVisible(!1);
    else {
        if (b.hh) {
            if (a.R) return
        } else a.R = !0;
        a.m = b.hh || "";
        a.g = b.Ji;
        a.J = b.Wi;
        a.c = a.m ? a.c : b.Je;
        a.V = b.xk || Wg(b.Je);
        a.b = b.Gh && a.C;
        var c = b.hh ? a.$ : b.Gh && a.C ? a.aa : a.ea;
        if (a.b && tg(b.Zf, 6)) {
            a.setVisible(!1);
            var d = I(Ce);
            d && L(d, a.c);
            if (b.result)
                for (d = 0; d < P(b.result, 0); d++) js(b.result, d).data[3] = 0 == d ? a.c : ""
        } else a.b ? Is(a.l(), Ic, Ec) : Is(a.l(), Ec, Ic), a.setVisible(!0);
        L(a.l(), c + " ");
        a.v = b.Zf;
        c = K("a", {
            tabindex: 0,
            href: bd
        });
        Qs(c, {
            direction: aj(a.J) ? ge : xd
        });
        Qs(c, {
            "text-decoration": Ld
        });
        c.innerHTML = a.V;
        O(c, r, a.ra, !1, a);
        a.l().appendChild(c);
        c = K(k, "gt-spell-icon");
        a.l().appendChild(c);
        a.b && !tg(b.Zf, 6) && (b = K("div"), L(b, a.ma + " "), c = K("a", {
            tabindex: 1,
            href: bd
        }), O(c, r, a.wa, !1, a), L(c, a.g), b.appendChild(c), a.l().appendChild(b), V(b, "gt-revert-correct-message"));
        a.D.start()
    }
};
kI.prototype.X = function () {
    var a = {};
    a.orig = this.g;
    a.sl = this.J;
    this.b && (a.autocorrect = this.b);
    this.m ? (a.corrlang = this.m, this.j.log("langidshow", a), vp(this.G, 5, 1, !1)) : (a.corr = this.c, a.corrtype = this.v, this.j.log("spell", a), vp(this.G, 4, 1, !1))
};
kI.prototype.ra = function () {
    if (this.m) {
        var a = this.g;
        64 < a.length && (a = a.substr(0, 64));
        Sp(this.j, "orig", a);
        Sp(this.j, "psl", this.J);
        this.Ca(this.V, this.m);
        kw(this.N, this.m, "", this.g, "tws_lsugg");
        a = this.G;
        S(a, sp(a, 79, 5, 1, !1, 1))
    } else a = this.g, 64 < a.length && (a = a.substr(0, 64)), Sp(this.j, "orig", a), Sp(this.j, "corrtype", this.v), this.b ? kw(this.N, "", "", this.c, "tws_confirm") : kw(this.N, "", "", this.c, "tws_spell"), a = this.G, S(a, sp(a, 79, 4, 1, !1, 1));
    a = this.D;
    a.gb() && (a.stop(), a.pg());
    this.setVisible(!1)
};
var mI = {},
    nI = (mI[1] = 1, mI[2] = 2, mI[3] = 3, mI[4] = 4, mI[5] = 5, mI[6] = 6, mI[7] = 7, mI[8] = 8, mI[9] = 9, mI[10] = 10, mI);
kI.prototype.wa = function () {
    var a = this.c;
    64 < a.length && (a = a.substr(0, 64));
    Sp(this.j, "corr", a);
    Sp(this.j, "corrtype", this.v);
    this.C = !1;
    kw(this.N, "", "", this.g, "tws_revert");
    a = this.D;
    a.gb() && (a.stop(), a.pg());
    this.setVisible(!1);
    a = this.G;
    for (var b = this.g, c = [], d = 0; d < this.v.length; d++) {
        var e = nI[this.v[d]];
        c.push(e ? e : 0)
    }
    d = new kp;
    H(d, 1, b);
    H(d, 2, c || []);
    b = T(a, 139);
    xi(b, 55, d);
    S(a, b)
};
var oI = function () {
        this.a = bA(INPUT_SUGGESTION_SERVER_URL);
        this.Vc = 5E3
    },
    pI = 0;
oI.prototype.send = function (a, b, c, d) {
    a = a ? uh(a) : {};
    d = d || "_" + (pI++).toString(36) + hg().toString(36);
    var e = "_callbacks___" + d;
    b && (y[e] = qI(d, b), a.callback = e);
    b = {
        timeout: this.Vc,
        qk: !0
    };
    e = dj(this.a);
    e = ej.exec(e);
    var f = e[3] || "";
    e = fj(e[1] + gj("?", e[2] || "", a) + gj("#", f, void 0));
    b = PB(e, b);
    HB(b, null, rI(d, a, c), void 0);
    return {
        La: d,
        Ih: b
    }
};
oI.prototype.cancel = function (a) {
    a && (a.Ih && a.Ih.cancel(), a.La && sI(a.La, !1))
};
var rI = function (a, b, c) {
        return function () {
            sI(a, !1);
            c && c(b)
        }
    },
    qI = function (a, b) {
        return function (c) {
            sI(a, !0);
            b.apply(void 0, arguments)
        }
    },
    sI = function (a, b) {
        a = "_callbacks___" + a;
        if (y[a])
            if (b) try {
                delete y[a]
            } catch (c) {
                y[a] = void 0
            } else y[a] = Vf
    };
var tI = function () {
        var a = INPUT_SUGGESTION_CLIENT_NAME,
            b = INPUT_SUGGESTION_DATASET;
        this.g = new oI;
        this.g.Vc = 500;
        this.a = null;
        this.j = 0;
        this.c = !1;
        this.C = Kp.M();
        this.G = rp.M();
        this.m = b || ff;
        this.F = a || "translate_separate_corpus"
    },
    eF = function (a, b, c, d, e) {
        tF(a);
        if (0 == b.length || 64 < b.length || c == eb) e([]);
        else {
            c = c == tf || c == uf ? "zh" : c;
            var f = 167 - (hg() - a.j);
            0 > f && (f = 0);
            a.b = Xm(function () {
                if (this.b) {
                    this.b = void 0;
                    var a = c;
                    this.j = hg();
                    var f = {};
                    f.q = b;
                    f.client = this.F;
                    f.ds = this.m;
                    f.hl = a;
                    f.requiredfields = "tl:" + d;
                    this.a = this.g.send(f,
                        A(this.v, this, b, a, d, e), A(this.o, this, "4", b, a, d, 144))
                }
            }, f, a)
        }
    },
    tF = function (a) {
        a.a && (a.c = !0, a.g.cancel(a.a), a.a = null);
        a.b && (Ym(a.b), a.b = void 0)
    };
tI.prototype.o = function (a, b, c, d, e, f, g, l) {
    if (!this.c) {
        b = {
            q: b,
            sl: c,
            tl: d
        };
        if (null != g) try {
            b.se = g.substring(0, 64)
        } catch (m) {
            throw Error(m + " opt_context is " + g);
        }
        l && (b.msg = l.substring(0, 64));
        wp(this.G, e);
        Pp(this.C, "t", "is", a, b)
    }
    this.c = !1
};
tI.prototype.v = function (a, b, c, d, e) {
    try {
        var f = ng(e[1], function (a) {
            return $g(a[0])
        }, this);
        d(f)
    } catch (g) {
        this.o("5", a, b, c, 53, null, (new hn).Tc(e), g.message)
    }
    this.a = null
};
var uI = function () {
        this.a = [];
        this.c = this.b = null
    },
    yF = function (a) {
        var b = a.a.length;
        b += a.b ? 1 : 0;
        b += a.c ? 1 : 0;
        return a = b + (a.c ? 1 : 0)
    };
var vI = function (a) {
    this.b = a || "menu"
};
C(vI, hA);
Wf(vI);
vI.prototype.Z = w("gt-is");
vI.prototype.g = function (a) {
    return Ik(a)
};
vI.prototype.a = function (a) {
    return a.tagName == k && a.firstChild && a.firstChild.tagName == k ? !0 : !1
};
vI.prototype.o = function () {
    var a = K(k, "gt-is"),
        b = K(k, "gt-is-ctr");
    a.appendChild(b);
    return a
};
var wI = function (a, b, c) {
    nA.call(this, a || mA(vI.M()), b || vI.M(), c);
    this.b = [];
    this.j = this.g = this.c = null;
    yA(this, !1)
};
C(wI, nA);
var sF = function (a, b) {
        D(a.b, function (a) {
            this.removeChild(a, !0)
        }, a);
        D(b, function (a, b) {
            this.c ? this.Xc(a, Qt(this, this.c), !0) : this.Ta(a, !0);
            a.zc("gt-is-sg").id = "gt-is-si-" + b
        }, a);
        a.b = b
    },
    wF = function (a, b) {
        a.g && a.removeChild(a.g, !0);
        b && a.Xc(b, Qt(a, a.j) + 1, !0);
        a.g = b
    },
    xF = function (a, b) {
        (a = a.b[0]) && (a = a.zc(a.Mh ? "gt-is-ld-top" : Dc)) && X(a, b)
    };
wI.prototype.Wa = function (a) {
    return 27 == a.keyCode ? (this.setVisible(!1), a.stopPropagation(), a.preventDefault(), !0) : wI.w.Wa.call(this, a)
};
var xI = function (a, b, c) {
    var d = "ss";
    null != c && c && (d = "m" + d);
    this.D = b;
    yv.call(this, a, d, MSG_SYNONYMS_OF, MSG_SYNONYMS, 8);
    this.j = []
};
C(xI, yv);
x = xI.prototype;
x.update = function (a, b, c, d) {
    xI.w.update.call(this, a, b, c, d);
    if (!d || 0 == P(d, 11)) return !1;
    Ck(this.b);
    this.md();
    var e = c = 0;
    for (a = 0; a < P(d, 11); ++a) {
        var f = new as($l(d, 11, a)),
            g = Q(f, 2);
        c += f.a();
        for (b = 0; b < f.a(); ++b) e += P(f.b(b), 0)
    }
    if (b = 2 < c / P(d, 11) && 1 < e - c) a = MSG_N_MORE_SYNONYMS_LABEL.replace(ea, e - c), Av(this, a, MSG_FEWER_SYNONYMS_LABEL);
    c = 1 == c / P(d, 11);
    g && (this.Ge = g, zv(this, g));
    for (a = 0; a < P(d, 11); ++a) {
        f = new as($l(d, 11, a));
        g = K(k, {
            "class": "gt-cd-pos"
        });
        this.b.appendChild(g);
        L(g, Q(f, 0));
        g = f;
        f = c;
        e = b;
        var l = K("UL", {
            "class": "gt-syn-list"
        });
        var m = aj(this.Qa) ? ge : xd;
        Qs(l, {
            direction: m
        });
        if (e) {
            m = K(La, {
                "class": "gt-syn-span"
            });
            for (var p = K(k, {
                "class": Lc
            }, m), q = [], F = 0; F < g.a(); ++F) {
                var B = g.b(F);
                B = cm(B, 0, 0);
                if (!tg(q, B)) {
                    q.push(B);
                    this.D || 0 < F && m.appendChild(yk(", "));
                    var M = K(La, {
                        "class": Bc
                    });
                    m.appendChild(M);
                    L(M, B);
                    this.j.push(M)
                }
            }
            m = K(k, {
                "class": Mc
            }, p);
            l.appendChild(m)
        }
        for (m = 0; m < g.a(); ++m) {
            p = g.b(m);
            F = e;
            B = f ? k : "LI";
            q = K(La, {
                "class": "gt-syn-span"
            });
            B = K(B, {
                "class": Lc
            }, q);
            F = Bv(B, !F);
            for (B = 0; B < P(p, 0); ++B) M = K(La, {
                "class": Bc
            }), q.appendChild(M), L(M, cm(p,
                0, B)), this.c.push(M), this.D || B < P(p, 0) - 1 && q.appendChild(yk(", "));
            l.appendChild(F)
        }
        this.b.appendChild(l)
    }
    this.setVisible(!0);
    return !0
};
x.ba = function () {
    xI.w.ba.call(this);
    Z(this).K(this.l(), r, this.Jm)
};
x.Jm = function (a) {
    Es(a.target, Bc) && this.dispatchEvent(new N("a", a.target))
};
x.Ld = function (a) {
    xI.w.Ld.call(this, a);
    for (var b = mk(Mc, this.l()), c = 0; c < b.length; c++) {
        var d = b[c],
            e = J(Lc, d),
            f = ut(e, yd);
        e = it(e).height + f.top + f.bottom;
        Qs(d, "max-height", a ? 0 : e + Yd)
    }
};
x.Td = function () {
    return this.C ? xI.w.Td.call(this) : this.j.length
};
x.og = function (a) {
    return this.C ? xI.w.og.call(this, a) : this.j.indexOf(a)
};
x.md = function () {
    xI.w.md.call(this);
    this.j = []
};
var yI = function (a, b) {
    this.C = Kp.M();
    this.G = rp.M();
    this.c = a;
    G || Jh || Lh || O(a, zb, this.m, !1, this);
    this.a = b;
    for (a = 0; a < b.length; a++) O(b[a], Ad, this.v, !1, this);
    this.g = this.b = null;
    this.o = this.j = !1
};
C(yI, gl);
yI.prototype.T = function () {
    yI.w.T.call(this);
    Nl(this.c, zb, this.m, !1, this);
    this.c = null;
    for (var a = 0; a < this.a.length; a++) Nl(this.a[a], Ad, this.v, !1, this);
    this.a = null
};
yI.prototype.m = function () {
    var a = TC();
    if (a && this.c) {
        this.g = a;
        Xm(this.F, 0, this);
        I(Fc) && (this.j = lt(I(Fc)), this.o = lt(I(Gc)), X(I(Fc), !1), X(I(Gc), !1));
        var b = jC(window).toString();
        a = K(Oa, {
            id: "hdt"
        });
        Qs(a, {
            position: Ua,
            top: sk(document).a + Yd,
            left: "-1000px"
        });
        document.body.appendChild(a);
        a.focus();
        L(a, b);
        b = 0;
        if (Sy(a)) a.selectionStart = b;
        else if (Ty()) {
            var c = Uy(a),
                d = c[0];
            d.inRange(c[1]) && (b = Wy(a, b), d.collapse(!0), d.move(pb, b), d.select())
        }
        b = a.value.length;
        Sy(a) ? a.selectionEnd = b : Ty() && (d = Uy(a), c = d[1], d[0].inRange(c) &&
        (b = Wy(a, b), d = Wy(a, Vy(a, !0)[0]), c.collapse(!0), c.moveEnd(pb, b - d), c.select()));
        this.b = a
    }
};
yI.prototype.v = function (a) {
    var b = a.a.detail;
    1 < b && tl(a) && tg(this.a, a.target) && (a.preventDefault(), VC(this.c), a = {}, a.clickCount = b, this.C.log("dblClickSelectall", a), b = this.G, S(b, T(b, 236)))
};
yI.prototype.F = function () {
    this.g && (this.g.select(), this.g = null);
    this.b && (Fk(this.b), this.b = null);
    this.j && X(I(Fc), !0);
    this.o && X(I(Gc), !0)
};
var zI = function (a, b, c, d, e, f, g) {
    Y.call(this);
    this.g = Kp.M();
    this.C = b;
    this.J = c;
    this.D = d;
    this.N = e;
    this.c = a;
    this.b = this.j = null;
    this.v = f;
    this.m = null != g ? g : null;
    this.G = rp.M()
};
C(zI, Y);
x = zI.prototype;
x.setVisible = function (a) {
    a ? (this.g.log(ub, "show-" + this.c), Dp(this.G, 17), this.j.setVisible(!0), this.v || (Dp(this.G, 16), this.g.log(ub, "open-" + this.c), this.b.setVisible(!0), this.v = !0, Op(this.g, ma + this.c))) : (this.j.setVisible(!1), this.b.setVisible(!1))
};
x.na = function (a) {
    zI.w.na.call(this, a);
    var b = K(La, {
        id: this.c + "-button",
        style: Kb
    });
    a.appendChild(b);
    this.j = new Hu("", new tw("trans-verified-button", !0));
    this.j.Y(b);
    a = this.b = new VH;
    a.c.b = b;
    ZH(a);
    WH(this.b, 1);
    this.b.g = !1;
    this.b.sa();
    b = Ms(cr, {
        id: this.c,
        cg: this.C,
        ee: this.J,
        Dk: this.D,
        url: this.N
    });
    YH(this.b, b);
    this.b.setVisible(!1);
    O(this.j, n, this.vm, !1, this);
    b = J("vt-link", this.b.l());
    Z(this).K(b, r, this.Lm);
    b = J("vt-dismiss", this.b.l());
    Z(this).K(b, r, this.Vk)
};
x.vm = function () {
    OF(this.b.b) ? this.b.setVisible(!1) : (Dp(this.G, 16), this.g.log(ub, "open-" + this.c), this.b.setVisible(!0))
};
x.Lm = function (a) {
    this.g.log(ub, "click-" + this.c);
    this.b.setVisible(!1);
    var b = this.G;
    S(b, Cp(b, 72, 16));
    this.m && this.m.a() && (this.m.reset(), a.preventDefault(), a.stopPropagation())
};
x.Vk = function () {
    this.g.log(ub, "dismiss-" + this.c);
    var a = this.G;
    S(a, Cp(a, 74, 16));
    this.b.setVisible(!1)
};
var AI = function (a) {
    this.a = nt(aA(""));
    this.b = (Yf(a) ? a.join(",") : a) + "{font-family:%FONT%arial,sans-serif!important}"
};
AI.prototype.set = function (a) {
    mt(this.a, aA("" == a ? "" : this.b.replace("%FONT%", '"' + a + '",')))
};
var BI = function () {
    KH.M();
    var a = JH("\u1288") == JH("\u1290"),
        b = LH("\u09a5\u09cd"),
        c = LH("\u1780\u17d1"),
        d = LH("\u0e81\u0ec8"),
        e = LH("\u0d15\u0d4d"),
        f = LH("\u1001\u1039\u1010"),
        g = LH("\u0da5\u0dca");
    var l = LH("\u0ba4\u0bcd") || JH("\u0bb1\u0bc6\u0bbe") + JH("\u0bb1") != JH("\u0bb1\u0bc6") + JH("\u0bb1\u0bbe");
    this.a = {
        am: a,
        bn: b,
        km: c,
        lo: d,
        ml: e,
        my: f,
        ps: !0,
        sd: !0,
        si: g,
        ta: l
    }
};
Wf(BI);
var CI = {
        "Noto Sans Ethiopic": "notosansethiopic",
        "Noto Naskh Arabic": "notonaskharabic",
        "Noto Sans Malayalam": "notosansmalayalam",
        "Noto Sans Myanmar": "notosansmyanmar",
        "Noto Sans Sinhala": "notosanssinhala"
    },
    DI = {
        Dhyana: ki || Ih || ii || hi || gi
    },
    EI = {
        lo: Ph && 0 <= gh(Nu, "6.0")
    },
    FI = {
        am: "Noto Sans Ethiopic",
        bn: "Lohit Bengali",
        lo: "Dhyana",
        km: "Nokora",
        ml: "Noto Sans Malayalam",
        my: "Noto Sans Myanmar",
        ps: Ga,
        sd: Ga,
        si: "Noto Sans Sinhala",
        ta: "Lohit Tamil"
    },
    GI = function () {
        this.a = {};
        BI.M()
    };
Wf(GI);
var KI = function () {
        this.j = BI.M();
        this.b = GI.M();
        this.a = new AI(HI);
        this.c = new AI(II);
        this.g = new AI(JI)
    },
    HI = ["body", "#gb"],
    II = "#source .gt-hl-layer .gt-baf-translations .round-trip-content .vk-cap .vk-t .orig".split(" "),
    JI = "#result_box .gt-baf-word .gt-baf-word-clickable .alt-menu .gt-ex-translate #alt-input-text .text-wrap".split(" "),
    LI = function (a, b, c) {
        a: {
            var d = EI[c],
                e = a.j.a[c];
            if ((null == d || !d) && null != e && e && (c = FI[c], null != c && (d = DI[c], null == d || !d))) break a;
            c = ""
        }
        a = a.b;
        if ("" != c && null == a.a[c]) {
            a = a.a;
            e =
                d = c;
            var f = new aq;
            null != CI[e] ? f.o = "/earlyaccess/" + CI[e] + ".css" : (f.o = "/css", f.a.set("family", e));
            a[d] = nt(aA("@import url(//fonts.googleapis.com" + f.toString() + ");"))
        }
        b.set(c)
    },
    MI = function (a, b) {
        LI(a, a.a, b)
    },
    NI = function (a, b) {
        LI(a, a.c, b)
    },
    OI = function (a, b) {
        LI(a, a.g, b)
    };
var SI = function (a) {
        var b = I("gt-res-tools-l"),
            c = I(Kc);
        I("gt-res-tools-r").style.display = "";
        if (ji && Do(43) || G && ai(11) || Jh || Ih && ai(29) || fi && Do(41) || ki && Do(10)) {
            var d = new Hu(MSG_COPY, new tw("copy-button"));
            d.Y(PI("gt-res-copy", b));
            d.setVisible(!1);
            a.b = d
        } else MSG_SELECT_ALL && "" != MSG_SELECT_ALL && (d = new Hu(MSG_SELECT_ALL, new tw("select-button")), d.Y(PI("gt-res-select", b)), d.setVisible(!1), a.b = d);
        a.ia = QI("gt-res-listen", b);
        a.$ = QI("gt-src-listen", c);
        !IN_CHINA && tr && (a.a = K(k, {
            id: Cc,
            style: "display:inline-block"
        }),
            c.appendChild(a.a), MSG_SHARE && (c = new Hu(MSG_SHARE, new tw("share-button")), c.Y(PI("gt-res-share", b)), c.setVisible(!1), a.X = c));
        a.N = RI();
        a.Ab = RI();
        a.v = Br;
        return a
    },
    PI = function (a, b) {
        a = K(k, {
            id: a,
            style: Kb
        });
        b.appendChild(a);
        return a
    },
    QI = function (a, b) {
        var c = new qw(MSG_LISTEN, void 0, new tw(Ze));
        c.Y(PI(a, b));
        c.setVisible(!1);
        return c
    },
    RI = function () {
        var a = new Hu(MSG_CLEAR_TEXT, new tw("clear-button"));
        a.Y(K(k, {
            id: "gt-clear",
            style: Kb,
            tabindex: "0"
        }));
        a.setVisible(!1);
        return a
    };
var TI = function (a, b) {
    this.j = "";
    this.b = 0;
    this.J = Kp.M();
    this.G = rp.M();
    this.V = a;
    this.D = K("A", {
        href: "javascript:;",
        id: "gt-bbar-dm"
    }, MSG_DISMISS);
    this.g = K("A", {
        id: "gt-bbar-lm"
    });
    this.C = K(La);
    a = K(La);
    a.appendChild(this.C);
    a.appendChild(this.g);
    a.appendChild(this.D);
    O(this.D, r, this.N, !1, this);
    O(this.g, r, this.R, !1, this);
    YE.call(this, a, b)
};
C(TI, YE);
var UI = {
    chromepromo: 18,
    sandbox: 19,
    hiring: 20
};
TI.prototype.log = function (a) {
    this.J.log(a, {
        hl: this.V,
        type: this.j
    })
};
var VI = function (a) {
    if (!Ig(MSG_BUTTER_BAR_DESC) || !Ig(MSG_BUTTER_BAR_BUTTON)) {
        a.j = BUTTER_BAR_LOGTYPE;
        var b = UI[a.j];
        a.b = null != b ? b : 0;
        L(a.C, MSG_BUTTER_BAR_DESC);
        L(a.g, MSG_BUTTER_BAR_BUTTON);
        a.g.href = BUTTER_BAR_URL;
        a.setVisible(!0)
    }
};
TI.prototype.setVisible = function (a) {
    a && (Dp(this.G, this.b), this.log("bbarshow"));
    TI.w.setVisible.call(this, a)
};
TI.prototype.R = function () {
    this.setVisible(!1);
    var a = this.G;
    S(a, Cp(a, 72, this.b));
    this.log("bbarlm")
};
TI.prototype.N = function () {
    this.setVisible(!1);
    var a = this.G;
    S(a, Cp(a, 74, this.b));
    Op(this.J, "/translate/uc?ua=dismiss&uav=" + this.j)
};
var WI = zf("a"),
    XI = function (a, b, c) {
        var d = I(a);
        d ? X(d, b) : c && null.Tm("Element was not found on the page. ID=" + a)
    },
    YI = function (a, b) {
        XI("file", b, !1);
        XI("file_div", b, !1);
        b && (a = a.a, null != a.Lf && a.Lf.Hk())
    },
    aJ = function (a, b) {
        XI("gt-src-wrap", b, !0);
        ZI(b);
        $I(a.a)
    },
    ZI = function (a) {
        if (a) {
            a = I(Jc);
            for (var b = 0, c = a.childNodes.length; b < c; b++)
                if (a.childNodes[b].style.display != Ld) {
                    XI(Jc, !0, !0);
                    return
                }
        }
        XI(Jc, !1, !0)
    };
var bJ = u();
bJ.prototype.a = function (a) {
    var b = document.body;
    switch (a.mo) {
        case "sm":
            V(b, "e_sm");
            W(b, "e_md");
            W(b, "e_lg");
            break;
        case "lg":
            V(b, "e_lg");
            W(b, "e_sm");
            W(b, "e_md");
            break;
        default:
            V(b, "e_md"), W(b, "e_sm"), W(b, "e_lg")
    }
    if (b = document.getElementById("contentframe")) {
        var c = 0,
            d = document.getElementById("wtgbr"),
            e = ut(d, yd).top;
        a = a.es.h;
        var f = I("gt-logo");
        null != f && (a += it(f).height);
        0 == e ? c += a : a != -e && Qs(d, "margin-top", -a + Yd);
        (d = document.getElementById("gt-appbar")) && (c += it(d).height);
        Vs(b, 0, c)
    }
};
var cJ = function () {
    N.call(this, gf)
};
C(cJ, N);
var dJ = function (a) {
    N.call(this, Ae);
    this.Vi = a
};
C(dJ, N);
var eJ = /^[\w+/_-]+[=]{0,2}$/;
var fJ = function (a, b) {
        this.a = I("gt-feedback");
        this.c = a;
        this.g = b
    },
    gJ = ["file", "gt-otf-switch", "gt-tl", "gt-res-listen", de, Be, ze, "gt-sl", "gt-src-listen", be, Ce],
    hJ = function (a) {
        null != a.a && O(a.a, r, a.b, !1, a)
    };
fJ.prototype.b = function () {
    var a = {
        productId: "275",
        locale: this.g,
        version: VERSION_LABEL
    };
    IN_CHINA && (a.serverUri = "//www.google.cn/tools/feedback");
    var b = this.c,
        c = {
            NO_CACHE_RESULT: b.Mf ? (new hn).Tc(b.Mf) : "not found"
        };
    c.DISPLAY_LANGUAGE = b.a;
    c.SOURCE_LANGUAGE = XC(b);
    c.TARGET_LANGUAGE = YC(b);
    c.ACTUAL_SOURCE = iJ(b);
    c.SOURCE_TEXT = jJ(b);
    c.TARGET_TEXT = b.Ka();
    c.SOURCE_STATIC = Qy(b.qa.C.a);
    c.TARGET_STATIC = Qy(b.qa.L.a);
    c.BOTTOM_SUGG = Qy(b.qa.F.a);
    iJ(b) == YC(b) || Ig(jJ(b)) || Ig(b.Ka()) || jJ(b) != b.Ka() || (c.IDENTICAL_TRANSLATION =
        "1");
    window.JS_ERR_COUNT && (c.JS_ERR_COUNT = JS_ERR_COUNT, c.JS_ERR_ARR = JS_ERR_ARR);
    null != b.J && (c.TTL = b.Fi - b.J);
    null != b.Gg && (c.TTNC = b.Gg);
    0 < EXPERIMENT_IDS.length && (c.EXP = EXPERIMENT_IDS.join(","));
    b.we && (b = b.we, b = 10 * (b.b - 1) + b.j, 0 <= b && (c.HATS = b));
    for (var d in gJ) {
        var e = gJ[d];
        b = document.getElementById(e);
        e = "ELEMENT[id:" + e + "]";
        c[e] = b ? "exists" : "missing";
        b && ("value" in b && (c[e + ".value"] = "" + b.value), "" != $k(b) && (c[e + ".innerText"] = "" + $k(b)))
    }
    try {
        a.timeOfStartCall = (new Date).getTime();
        var f = y.document;
        a: {
            var g =
                    (y || y).document,
                l = g.querySelector && g.querySelector("script[nonce]");
            if (l) {
                var m = l.nonce || l.getAttribute(Kd);
                if (m && eJ.test(m)) {
                    var p = m;
                    break a
                }
            }
            p = void 0
        }
        p && (a.nonce = p);
        if ("help" == a.flow) {
            var q = Uf("document.location.href", y);
            !a.helpCenterContext && q && (a.helpCenterContext = q.substring(0, 1200));
            g = !0;
            if (c && JSON && JSON.stringify) {
                var F = JSON.stringify(c);
                (g = 1200 >= F.length) && (a.psdJson = F)
            }
            g || (c = {
                invalidPsd: !0
            })
        }
        F = [a, c, void 0];
        y.GOOGLE_FEEDBACK_START_ARGUMENTS = F;
        var B = a.serverUri || "//www.google.com/tools/feedback",
            M = y.GOOGLE_FEEDBACK_START;
        if (M) M.apply(y, F);
        else {
            B += "/load.js?";
            for (var fa in a) {
                var da = a[fa];
                null != da && !ag(da) && (B += encodeURIComponent(fa) + "=" + encodeURIComponent(da) + "&")
            }
            var Lb = el(jk(f), Ja);
            p && Lb.setAttribute(Kd, p);
            Zj(Lb, bA(B));
            f.body.appendChild(Lb)
        }
    } catch (Zc) {}
};
var kJ = u();
C(kJ, mu);
Wf(kJ);
x = kJ.prototype;
x.bb = function (a) {
    var b = eu(this, a);
    b = a.a.b(k, ec + b.join(" "), a.Ja());
    nu(b, a.m);
    return b
};
x.oc = w(lb);
x.Qc = function (a) {
    return a.tagName == k
};
x.Y = function (a, b) {
    V(b, dc);
    return kJ.w.Y.call(this, a, b)
};
x.W = w("");
x.Z = w(ac);
ru(ac, function () {
    return new Hu(null, kJ.M())
});
var lJ = u();
C(lJ, kJ);
Wf(lJ);
lJ.prototype.bb = function (a) {
    var b = eu(this, a);
    b = a.a.b(k, ec + b.join(" "), [mJ(this, a.Ja(), a.a), nJ(this, a.a)]);
    nu(b, a.m);
    return b
};
lJ.prototype.Fb = function (a) {
    return a && a.firstChild
};
lJ.prototype.Y = function (a, b) {
    var c = lk("*", fc, b)[0];
    if (c) {
        X(c, !1);
        a.a.a.body.appendChild(c);
        var d = new MA;
        d.Y(c);
        a.Jd(d)
    }
    lk("*", this.Z() + ha, b)[0] || b.appendChild(mJ(this, b.childNodes, a.a));
    lk("*", this.Z() + ka, b)[0] || b.appendChild(nJ(this, a.a));
    return lJ.w.Y.call(this, a, b)
};
var mJ = function (a, b, c) {
        return c.b(k, ec + (a.Z() + ha), b)
    },
    nJ = function (a, b) {
        return b.b(k, {
            "class": ec + (a.Z() + ka),
            "aria-hidden": !0
        }, "\u00a0")
    };
lJ.prototype.Z = w(bc);
ru(bc, function () {
    return new UA(null, null, lJ.M())
});
var oJ = function (a, b) {
    this.v = I(a);
    this.ra = b;
    var c = this.v.id + "-gms",
        d = lk(Pd, null, this.v);
    a = [];
    this.J = [];
    var e;
    for (b = 0; e = d[b]; b++) {
        var f = $k(e);
        a.push(f);
        this.J.push(e.value);
        if (e.selected) var g = e.value
    }
    this.R = K(Ea, {
        type: Rc,
        id: this.v.id,
        name: this.v.name,
        value: g
    });
    Dk(this.R, this.v);
    d = document.getElementById(c);
    null == d && (d = K(k, {
        id: c
    }), Dk(d, this.v));
    c = "";
    e = lk(rd);
    for (b = 0; f = e[b]; b++) f.htmlFor && f.htmlFor == this.v.id && (c = $k(f), Fk(f));
    b = lJ.M();
    rB.call(this, d, a, 16, this.J, g, c, b, void 0, "" == c);
    "" == c && (pu(this.c,
        this, 1), V(this.l(), "gt-gms-icon"));
    O(this, ob, this.jk, !1, this);
    Fk(this.v);
    this.Ca = 3;
    this.Ma = {};
    O(this, [se, n], this.Nl, !1, this);
    this.G = rp.M()
};
C(oJ, rB);
x = oJ.prototype;
x.ac = function (a) {
    return oJ.w.ac.call(this, a)
};
x.W = function () {
    return oJ.w.W.call(this)
};
x.T = function () {
    Fk(this.R);
    this.R = null;
    oJ.w.T.call(this)
};
x.Nl = function (a) {
    if (a.type == se) this.Tb = hg(), yp(this.G, this.ra ? 82 : 83);
    else {
        var b = a.target.W();
        a = a.currentTarget.Ac();
        this.ra && 0 < a && a--;
        zp(this.G, this.ra, 0, b, a)
    }
    b && (this.Ma.ct = (hg() - this.Tb).toString())
};
x.jk = function () {
    var a = this.W();
    this.R.value != a && (this.R.value = a)
};
var pJ = function (a) {
    var b = [];
    var c = a.Va();
    for (var d = 0; d < a.Ca + 1 && d < c; d++) {
        if (YA(a, d) instanceof LA) {
            for (c = 0; c < d; c++) b.push(qB(a, c));
            break
        }
        if (qB(a, d) == eb) break
    }
    if (b.length) {
        d = a.W();
        c = 0;
        for (b = b.length + 1; c < b; c++) a.ed(0);
        a.ac(d)
    } else YA(a, 0) instanceof LA && a.ed(0)
};
oJ.prototype.hb = function (a) {
    var b = a.data;
    a = [];
    for (var c = 0; c < b.length; ++c) b[c] != this.W() && a.push(b[c]);
    for (b = 0; c = YA(this, b); b++) c.W && c.W() && (-1 != lg(a, c.W()) ? V(c.l(), ic) : W(c.l(), ic))
};
var qJ = zf("Pb"),
    rJ = function (a, b, c, d) {
        O(b, De, c.hb, !1, c);
        O(b, Qe, d.hb, !1, d);
        c = a.Pb;
        O(b, Ee, c.ra, !1, c);
        a = a.Pb;
        O(b, Re, a.ra, !1, a)
    };
qJ.prototype.a = function (a) {
    for (var b = 0; b < arguments.length; b++) {
        var c = arguments[b];
        if (null != c && null != c.l()) {
            var d = this.Pb;
            O(c.l(), r, d.ra, !1, d)
        }
    }
};
var sJ = function () {
    this.j = null;
    this.C = this.F = this.g = this.c = this.R = this.ma = this.V = this.aa = this.ea = this.J = "";
    this.b = this.O = this.a = this.N = this.$ = this.ia = this.X = null;
    this.D = 0;
    this.o = !1;
    this.L = -1;
    this.v = !1
};
var tJ = function (a) {
        return '<div id="gt-apb-pb" style="display:none"><div id="gt-pb-tt">' + Hq(a.Xg) + '</div><div id="gt-apb-pb-r"><input id="gt-pb-sb" type="text"><div id="pb-back-c" class="goog-inline-block"></div><button id="gt-pb-sbt" class="jfk-button jfk-button-action"><span class="jfk-button-img"></span></button><div id="gt-pb-sw2" class="goog-inline-block"></div></div></div>'
    },
    uJ = function (a) {
        return '<div id="gt-pb-c" style="display:none"><div id="gt-pb"><div id="gt-pb-pt">' + Hq(a.Xg) + '</div><div id="pb-tool" class="goog-toolbar"><div id="pb-cb-a" class="goog-inline-block"></div><div id="pb-dd" class="goog-inline-block"><div id="pb-ls"></div><div class="goog-toolbar-separator goog-inline-block"></div><div id="pb-st"></div></div><div id="pb-sh" class="goog-inline-block" style="display:none"></div><div class="goog-toolbar-separator goog-inline-block" id="pb-sp-del" style="display:none"></div><div id="pb-del-c" class="goog-inline-block"></div><div id="pb-tool-r" class="goog-inline-block"></div></div><div id="pb-tb-c" class="jfk-scrollbar-borderless"><div id="gt-pb-spin" style="display:none"></div><div id="pb-empty"></div><table id="gt-pb-tb"><colgroup><col><col><col width="50%"><col><col width="50%"></colgroup><table></div></div></div>'
    },
    vJ = function (a) {
        return Gq('<div class="pt-icon goog-inline-block"></div><div class="pt-text goog-inline-block"><div class="pt-act">' + Hq(a.ck) + '</div><div class="pt-desc">' + Hq(a.cg) + qa)
    },
    wJ = function () {
        return Gq('<div class="gt-hats-t"><div class="gt-hats-x clear-button"><div class="jfk-button-img"></div></div><div class="gt-hats-tt"></div></div><div class="gt-hats-c"></div>')
    },
    xJ = function (a) {
        return Gq('<div class="gt-hats-af">' + Hq(a.ek) + '</div><a href="javascript:void(0);" class="gt-hats-link">' + Hq(a.ee) +
            "</a>")
    },
    yJ = function (a) {
        return '<div class="share-panel goog-menu-nocheckbox"><h3>' + Hq(a.um) + '</h3><ul><li><a href="mailto:?body=' + Sq(a.ij) + '" target="_top" class="email"><span class="share-link-icon"></span><span> ' + Hq(a.tm) + ' </span></a></li><li><a href="https://twitter.com/intent/tweet?text=' + Sq(a.ij) + '" target="_blank" class="twitter"><span class="share-link-icon"></span><span> Twitter </span></a></li><li><a href="https://plus.google.com/share?url=' + Sq(a.url) + '" target="_blank" class="gplus"><span class="share-link-icon"></span><span> Google+ </span></a></li></ul></div>'
    };
var zJ = function (a) {
    Y.call(this, a)
};
C(zJ, Y);
zJ.prototype.Aa = function () {
    this.H = this.a.b("FORM", {
        method: Ia,
        style: Kb
    })
};
var BJ = function (a, b, c, d) {
        var e = a.l();
        e || (a.sa(), e = a.l());
        e.action = c || "";
        e.target = d || "";
        AJ(a, e, b);
        e.submit()
    },
    AJ = function (a, b, c) {
        var d, e = [];
        for (d in c) {
            var f = c[d];
            Zf(f) ? D(f, A(function (a) {
                e.push(Sj(Yc, {
                    type: Rc,
                    name: d,
                    value: String(a)
                }))
            }, a)) : e.push(Sj(Yc, {
                type: Rc,
                name: d,
                value: String(f)
            }))
        }
        Yj(b, Tj(e))
    };
var CJ = function (a, b, c) {
    Y.call(this);
    this.c = a;
    this.m = b;
    this.j = c;
    this.b = !1
};
C(CJ, Y);
x = CJ.prototype;
x.Aa = function () {
    CJ.w.Aa.call(this);
    this.na(xk(k))
};
x.na = function (a) {
    CJ.w.na.call(this, a);
    V(a, "pt-wrap");
    a.appendChild(Ls(vJ, {
        ck: MSG_HUMAN_TRANSLATION_ACTION,
        cg: MSG_HUMAN_TRANSLATION_DESCRIPTION
    }));
    Z(this).K(this.l(), r, this.Mm);
    a = new Hu(MSG_DISMISS, new tw("clear-button"));
    a.sa(this.l());
    this.g = a.l();
    Z(this).K(a, n, this.Nm)
};
x.Mm = function (a) {
    if (!a.target || !Mk(this.g, a.target)) {
        a = new zJ;
        var b = {};
        b.hl = this.j;
        var c = iJ(this.c);
        c != eb && (b.sl = c);
        b.tl = YC(this.c);
        b.r = ff;
        c = jJ(this.m, !0);
        if (1500 > Mg(c).length) b.src = c, window.open(la + Jn(b) + "#text", "_top");
        else {
            var d = {};
            d.src = c;
            BJ(a, d, la + Jn(b) + "#text")
        }
    }
};
x.Nm = function () {
    this.b = !0;
    (new DH(this.l(), 300)).play();
    Kp.M().log("dismissht")
};
x.setVisible = function (a) {
    this.b || X(this.l(), a)
};
var DJ = function (a) {
        return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
    },
    EJ = DJ;
EJ = DJ;
var FJ = function (a, b) {
        if (void 0 === b) {
            b = a + "";
            var c = b.indexOf(".");
            b = Math.min(-1 == c ? 0 : b.length - c - 1, 3)
        }
        return 1 == (a | 0) && 0 == b ? "one" : "other"
    },
    GJ = FJ;
GJ = FJ;
var KJ = function () {
        this.g = MSG_OVERFLOW_HEADER;
        this.b = this.a = this.j = null;
        var a = Vx,
            b = Sx;
        if (HJ !== a || IJ !== b) HJ = a, IJ = b, JJ = new Yx(1);
        this.o = JJ
    },
    HJ = null,
    IJ = null,
    JJ = null,
    LJ = /'([{}#].*?)'/g,
    MJ = /''/g,
    bz = function (a, b, c, d, e) {
        for (var f = 0; f < b.length; f++) switch (b[f].type) {
            case 4:
                e.push(b[f].value);
                break;
            case 3:
                var g = b[f].value,
                    l = a,
                    m = e,
                    p = c[g];
                z(p) ? (l.a.push(p), m.push(l.c(l.a))) : m.push(Ra + g);
                break;
            case 2:
                g = b[f].value;
                l = a;
                m = c;
                p = d;
                var q = e,
                    F = g.De;
                z(m[F]) ? (F = g[m[F]], z(F) || (F = g.other), bz(l, F, m, p, q)) : q.push(Ra + F);
                break;
            case 0:
                g = b[f].value;
                NJ(a, g, c, GJ, d, e);
                break;
            case 1:
                g = b[f].value, NJ(a, g, c, EJ, d, e)
        }
    },
    NJ = function (a, b, c, d, e, f) {
        var g = b.De,
            l = b.vh,
            m = +c[g];
        isNaN(m) ? f.push("Undefined or invalid parameter - " + g) : (l = m - l, g = b[c[g]], z(g) || (d = d(l), g = b[d], z(g) || (g = b.other)), b = [], bz(a, g, c, e, b), c = b.join(""), e ? f.push(c) : (a = gy(a.o, l), f.push(c.replace(/#/g, a))))
    },
    $y = function (a, b) {
        var c = a.j,
            d = A(a.c, a);
        b = b.replace(MJ, function () {
            c.push("'");
            return d(c)
        });
        return b = b.replace(LJ, function (a, b) {
            c.push(b);
            return d(c)
        })
    },
    OJ = function (a) {
        var b =
                0,
            c = [],
            d = [],
            e = /[{}]/g;
        e.lastIndex = 0;
        for (var f; f = e.exec(a);) {
            var g = f.index;
            "}" == f[0] ? (c.pop(), 0 == c.length && (f = {
                type: 1
            }, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (0 == c.length && (b = a.substring(b, g), "" != b && d.push({
                type: 0,
                value: b
            }), b = g + 1), c.push("{"))
        }
        b = a.substring(b);
        "" != b && d.push({
            type: 0,
            value: b
        });
        return d
    },
    PJ = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
    QJ = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
    RJ = /^\s*(\w+)\s*,\s*select\s*,/,
    az = function (a, b) {
        var c = [];
        b = OJ(b);
        for (var d = 0; d < b.length; d++) {
            var e = {};
            if (0 ==
                b[d].type) e.type = 4, e.value = b[d].value;
            else if (1 == b[d].type) {
                var f = b[d].value;
                switch (PJ.test(f) ? 0 : QJ.test(f) ? 1 : RJ.test(f) ? 2 : /^\s*\w+\s*/.test(f) ? 3 : 5) {
                    case 2:
                        e.type = 2;
                        e.value = SJ(a, b[d].value);
                        break;
                    case 0:
                        e.type = 0;
                        e.value = TJ(a, b[d].value);
                        break;
                    case 1:
                        e.type = 1;
                        e.value = UJ(a, b[d].value);
                        break;
                    case 3:
                        e.type = 3, e.value = b[d].value
                }
            }
            c.push(e)
        }
        return c
    },
    SJ = function (a, b) {
        var c = "";
        b = b.replace(RJ, function (a, b) {
            c = b;
            return ""
        });
        var d = {};
        d.De = c;
        b = OJ(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            e++;
            if (1 == b[e].type) var g =
                az(a, b[e].value);
            d[f.replace(/\s/g, "")] = g;
            e++
        }
        return d
    },
    TJ = function (a, b) {
        var c = "",
            d = 0;
        b = b.replace(PJ, function (a, b, e) {
            c = b;
            e && (d = parseInt(e, 10));
            return ""
        });
        var e = {};
        e.De = c;
        e.vh = d;
        b = OJ(b);
        for (var f = 0; f < b.length;) {
            var g = b[f].value;
            f++;
            if (1 == b[f].type) var l = az(a, b[f].value);
            e[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = l;
            f++
        }
        return e
    },
    UJ = function (a, b) {
        var c = "";
        b = b.replace(QJ, function (a, b) {
            c = b;
            return ""
        });
        var d = {};
        d.De = c;
        d.vh = 0;
        b = OJ(b);
        for (var e = 0; e < b.length;) {
            var f = b[e].value;
            e++;
            if (1 == b[e].type) var g = az(a, b[e].value);
            d[f.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = g;
            e++
        }
        return d
    };
KJ.prototype.c = function (a) {
    return "\ufddf_" + (a.length - 1).toString(10) + "_"
};
var VJ = function (a, b, c, d) {
    Y.call(this);
    this.g = a;
    this.b = b;
    this.D = c;
    this.C = d;
    this.c = null;
    new Yx("######");
    this.v = new KJ;
    this.j = new Kp;
    this.j.g = "t";
    this.G = rp.M()
};
C(VJ, Y);
VJ.prototype.xd = function (a) {
    return a && a.tagName == k && J("ovfl-msg", a) && J("ovfl-text", a) && J("ovfl-xlt", a) ? !0 : !1
};
VJ.prototype.ba = function () {
    VJ.w.ba.call(this);
    var a = J("ovfl-xlt", this.l());
    this.c = new Hu(null, new WJ);
    this.c.Y(a);
    O(this.c, n, this.m, !1, this)
};
var XJ = function (a, b) {
        aj(b) ? V(J(Rd, a.l()), "ovfl-xlt-arrow-rtl") : V(J(Rd, a.l()), "ovfl-xlt-arrow-ltr")
    },
    YJ = function (a, b) {
        Zy(a).dir = aj(b) ? ge : xd
    };
VJ.prototype.setVisible = function (a) {
    X(this.l(), a)
};
var Zy = function (a) {
    return J("ovfl-text", a.l())
};
VJ.prototype.m = function () {
    var a = this.b.c;
    "" == a && (a = this.b.a);
    var b = $k(Zy(this)),
        c = b.length,
        d = Math.max(c - this.C, 0);
    Bp(this.G, c, d);
    Pp(this.j, "t", "xm", "1", {
        sl: this.b.a,
        tl: this.b.b,
        dl: a,
        hl: this.D,
        ql: c,
        ol: d
    });
    this.g.b(b);
    window.scrollTo(0, 0);
    var e = this.g,
        f = e.l();
    Xm(function () {
        f.focus();
        var a = e.W().length;
        if (Sy(f)) f.selectionStart = a, f.selectionEnd = a;
        else if (Ty()) {
            a = Wy(f, a);
            var b = f.createTextRange();
            b.collapse(!0);
            b.move(pb, a);
            b.select()
        }
    }, 0)
};
var WJ = u();
C(WJ, mu);
WJ.prototype.Qc = function (a) {
    return a && a.tagName == k && J(Rd, a) ? !0 : !1
};
var ZJ = function (a, b, c) {
    Y.call(this);
    this.b = b;
    this.C = a;
    this.j = !!c;
    Kp.M()
};
C(ZJ, Y);
ZJ.prototype.Aa = function () {
    ZJ.w.Aa.call(this);
    var a = xk(k);
    var b = this.j ? "" : this.C.ea(Q(this.b, 1));
    var c = this.j ? "" : this.C.dc(Q(this.b, 2)),
        d = $z(Zp(Wg(Q(this.b, 3)))),
        e = $z(Zp(Wg(this.b.kb())));
    b = "<tr" + (Iq(b, "") ? ' class="nolabel"' : "") + '><td class="pb-cb"></td><td class="pb-slis-td"></td><td class="pb-src-td">' + (Iq(b, "") ? "" : ua + Hq(b) + pa) + '<div class="gt-pb-stc">' + Hq(d) + '</div></td><td class="pb-tlis-td"></td><td class="pb-tgt-td">' + (Iq(b, "") ? "" : ua + Hq(c) + pa) + '<div class="gt-pb-ttc">' + Hq(e) + "</div></td><tr>";
    a.innerHTML = "<table><tbody>" + b + "</tbody></table>";
    this.na(a.firstChild.rows[0])
};
ZJ.prototype.na = function (a) {
    ZJ.w.na.call(this, a);
    a = this.l();
    this.c = J("pb-src-td", a);
    aj(Q(this.b, 1)) ? this.c.dir = ge : this.c.dir = xd;
    this.g = J("pb-tgt-td", a);
    aj(Q(this.b, 2)) ? this.g.dir = ge : this.g.dir = xd;
    var b = J("pb-cb", a),
        c = new iz;
    this.Ta(c);
    c.sa(b);
    Z(this).K(c, "check", A(this.Bg, this, !0));
    Z(this).K(c, "uncheck", A(this.Bg, this, !1));
    this.v = c;
    this.D = $J(this, J("pb-slis-td", a));
    this.m = $J(this, J("pb-tlis-td", a));
    a = Q(this.b, 1);
    b = Q(this.b, 3);
    c = new Lx(this.D, "&client=t&prev=pbsrc", 5);
    il(this, c);
    c.update(b, a);
    a = Q(this.b,
        2);
    b = this.b.kb();
    c = new Lx(this.m, "&client=t&prev=pbtgt", 6);
    il(this, c);
    c.update(b, a);
    this.m.isVisible();
    Z(this).K(this.c, r, this.ii);
    Z(this).K(this.g, r, this.ii)
};
var $J = function (a, b) {
    var c = new qw(MSG_LISTEN, void 0, new tw(Ze));
    a.Ta(c);
    c.sa(b);
    c.setVisible(!1);
    return c
};
x = ZJ.prototype;
x.T = function () {
    ZJ.w.T.call(this)
};
x.Ya = function () {
    return this.v.Ya()
};
x.Sa = function (a) {
    this.v.Sa(a);
    this.Bg(a)
};
x.Mc = function () {
    return this.b.Mc()
};
x.Ka = v("b");
x.ii = function () {
    this.dispatchEvent("pbclick")
};
x.Bg = function (a) {
    a ? V(this.l(), qb) : W(this.l(), qb)
};
var aK = function (a, b, c) {
    gl.call(this);
    this.a = a;
    this.b = new Um(50);
    this.o = new yt(this);
    this.j = new ck;
    this.c = jt(a);
    if ("BODY" === a.tagName || "HTML" === a.tagName) a = qk(window), this.c.height = a.height, this.c.width = a.width;
    this.yf = b || 0;
    if (b) {
        if (b = this.c, b = new Os(b.left, b.top, b.width, b.height), a = this.yf) {
            var d = Math.min(a, .25 * b.height);
            b.top += d;
            b.height -= 2 * d;
            a = Math.min(a, .25 * b.width);
            b.left += a;
            b.width -= 2 * a
        }
    } else b = this.c;
    this.g = b;
    c || this.o.K(ik(this.a), Bd, this.v);
    this.o.K(this.b, Se, this.m)
};
C(aK, gl);
aK.prototype.m = function () {
    this.a.scrollTop += this.j.a;
    this.a.scrollLeft += this.j.b
};
aK.prototype.v = function (a) {
    var b = bK(a.clientX, this.g.left, this.g.width);
    a = bK(a.clientY, this.g.top, this.g.height);
    this.j.b = b;
    this.j.a = a;
    (b = !b && !a) || (b = !1);
    b ? this.b.stop() : this.b.b || this.b.start()
};
var bK = function (a, b, c) {
    var d = 0;
    a < b ? d = -8 : a > b + c && (d = 8);
    return d
};
aK.prototype.T = function () {
    aK.w.T.call(this);
    this.o.Da();
    this.b.Da()
};
var cK = function () {
    Y.call(this);
    this.c = this.b = null
};
C(cK, Y);
var dK = [255, 255, 204],
    eK = [255, 255, 255];
cK.prototype.Aa = function () {
    cK.w.Aa.call(this);
    var a = K("TBODY");
    this.na(a)
};
cK.prototype.update = function (a, b, c) {
    Rt(this);
    for (var d = a.length - 1; 0 <= d; d--) {
        var e = new ZJ(b, a[d], c);
        this.Ta(e, !0)
    }
    this.b && (Nl(this.b, Bz, this.j, !1, this), Nl(this.b, Fz, this.g, !1, this), hl(this.b));
    if (xr && (this.b = new Rz("pb-drag-before", "pb-drag-after"), this.b.$ = Lg("pb-drag-flt").split(" "), this.b.Za("pb-drag-cur"), this.b.wa = !0, this.b.D(this.l(), 0), this.b.Ha = 5, O(this.b, Bz, this.j, !1, this), O(this.b, Fz, this.g, !1, this), a = this.b, !a.aa)) {
        b = 0;
        for (c = a.g.length; b < c; b++) {
            d = Gk(a.g[b]);
            e = 0;
            for (var f = d.length; e < f; ++e) {
                var g =
                        a,
                    l = d[e],
                    m = dg(l);
                g.J[m] = l;
                g.X && (g.m.K(l, Dd, g.Xa), g.m.K(l, Cd, g.Ra));
                g.ia && (g.m.K(l, Dd, g.Ma), g.m.K(l, Cd, g.Ia));
                g.o.push(l);
                g.m.K(l, [Ad, Ye], g.ll)
            }
        }
        a.aa = !0
    }
};
cK.prototype.j = function () {
    this.c = new aK(I("pb-tb-c"))
};
cK.prototype.g = function () {
    hl(this.c)
};
var fK = function (a, b) {
        var c = [];
        Mt(a, function (a) {
            tg(b, a.Mc()) && c.push(a)
        }, a);
        for (var d = 0; d < c.length; ++d) a.removeChild(c[d], !0)
    },
    gK = function (a) {
        var b = [],
            c = [];
        Mt(a, function (a) {
            a.Ya() && (b.push(a.Mc()), c.push(a))
        }, a);
        for (var d = 0; d < c.length; ++d) a.removeChild(c[d], !0);
        return b
    },
    hK = function (a) {
        for (var b = Nt(a), c = 0, d = 0; d < b; d++) Ot(a, d).Ya() && c++;
        return 0 == c ? !1 : c == b ? !0 : null
    };
cK.prototype.Sa = function (a) {
    for (var b = Nt(this), c = 0; c < b; c++) Ot(this, c).Sa(a)
};
var iK = function (a, b) {
        var c = [];
        Mt(a, function (a) {
            tg(b, a.Mc()) && c.push(a)
        }, a);
        for (a = 0; a < c.length; ++a)(new FH(c[a].l(), dK, eK, 1E3)).play()
    },
    jK = function (a) {
        for (var b = [], c = Nt(a), d = 0; d < c; d++) Ot(a, d).Ya() && b.push(d);
        return b
    };
var kK = function (a) {
    R.call(this);
    this.a = a || window;
    this.b = O(this.a, ce, this.g, !1, this);
    this.c = qk(this.a || window)
};
C(kK, R);
kK.prototype.T = function () {
    kK.w.T.call(this);
    this.b && (Ol(this.b), this.b = null);
    this.c = this.a = null
};
kK.prototype.g = function () {
    var a = qk(this.a || window);
    gk(a, this.c) || (this.c = a, this.dispatchEvent(ce))
};
(function () {
    for (var a = ["ms", "moz", rf, "o"], b = 0, c; c = a[b] && !y.requestAnimationFrame; ++b) y.requestAnimationFrame = y[c + "RequestAnimationFrame"], y.cancelAnimationFrame = y[c + "CancelAnimationFrame"] || y[c + "CancelRequestAnimationFrame"];
    if (!y.requestAnimationFrame) {
        var d = 0;
        y.requestAnimationFrame = function (a) {
            var b = (new Date).getTime(),
                c = Math.max(0, 16 - (b - d));
            d = b + c;
            return y.setTimeout(function () {
                a(b + c)
            }, c)
        };
        y.cancelAnimationFrame || (y.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        })
    }
})();
var lK = [
        [],
        []
    ],
    mK = 0,
    nK = !1,
    oK = 0,
    qK = function (a, b) {
        var c = oK++,
            d = {
                Ql: {
                    id: c,
                    xc: a.measure,
                    context: b
                },
                Ul: {
                    id: c,
                    xc: a.Tl,
                    context: b
                },
                state: {},
                Cb: void 0,
                uf: !1
            };
        return function () {
            0 < arguments.length ? (d.Cb || (d.Cb = []), d.Cb.length = 0, d.Cb.push.apply(d.Cb, arguments), d.Cb.push(d.state)) : d.Cb && 0 != d.Cb.length ? (d.Cb[0] = d.state, d.Cb.length = 1) : d.Cb = [d.state];
            d.uf || (d.uf = !0, lK[mK].push(d));
            nK || (nK = !0, window.requestAnimationFrame(pK))
        }
    },
    pK = function () {
        nK = !1;
        var a = lK[mK],
            b = a.length;
        mK = (mK + 1) % 2;
        for (var c, d = 0; d < b; ++d) {
            c = a[d];
            var e = c.Ql;
            c.uf = !1;
            e.xc && e.xc.apply(e.context, c.Cb)
        }
        for (d = 0; d < b; ++d) c = a[d], e = c.Ul, c.uf = !1, e.xc && e.xc.apply(e.context, c.Cb), c.state = {};
        a.length = 0
    };
var rK = G ? fj(Wi(Zi(ad))) : fj(Wi(Zi("about:blank"))),
    sK = dj(rK),
    tK = G ? fj(Wi(Zi(ad))) : fj(Wi(Zi("javascript:undefined")));
dj(tK);
var uK = function (a, b) {
    this.H = a;
    this.b = b
};
var vK = function (a, b) {
    Y.call(this, b);
    this.V = !!a;
    this.g = null;
    this.N = qK({
        Tl: this.Bf
    }, this)
};
C(vK, Y);
x = vK.prototype;
x.kg = null;
x.jf = !1;
x.Db = null;
x.fb = null;
x.bc = null;
x.Tf = !1;
x.Z = w("goog-modalpopup");
x.Pe = v("Db");
x.Aa = function () {
    vK.w.Aa.call(this);
    var a = this.l();
    Fs(a, Lg(this.Z()).split(" "));
    Wk(a, !0);
    X(a, !1);
    wK(this);
    xK(this)
};
var wK = function (a) {
        if (a.V && !a.fb) {
            var b = a.a.b(Ca, {
                frameborder: 0,
                style: "border:0;vertical-align:bottom;",
                src: sK
            });
            a.fb = b;
            a.fb.className = a.Z() + "-bg";
            X(a.fb, !1);
            kt(a.fb, 0)
        }
        a.Db || (a.Db = a.a.b(k, a.Z() + "-bg"), X(a.Db, !1))
    },
    xK = function (a) {
        a.bc || (a.bc = el(a.a, La), X(a.bc, !1), Wk(a.bc, !0), a.bc.style.position = Ua)
    };
x = vK.prototype;
x.Ni = function () {
    this.Tf = !1
};
x.xd = function (a) {
    return !!a && a.tagName == k
};
x.na = function (a) {
    vK.w.na.call(this, a);
    Fs(this.l(), Lg(this.Z()).split(" "));
    wK(this);
    xK(this);
    Wk(this.l(), !0);
    X(this.l(), !1)
};
x.ba = function () {
    this.fb && Dk(this.fb, this.l());
    Dk(this.Db, this.l());
    vK.w.ba.call(this);
    Ek(this.bc, this.l());
    this.kg = new dG(this.a.a);
    Z(this).K(this.kg, Tb, this.Yl);
    yK(this, !1)
};
x.tb = function () {
    this.isVisible() && this.setVisible(!1);
    hl(this.kg);
    vK.w.tb.call(this);
    Fk(this.fb);
    Fk(this.Db);
    Fk(this.bc)
};
x.setVisible = function (a) {
    if (a != this.jf)
        if (this.m && this.m.stop(), this.C && this.C.stop(), this.j && this.j.stop(), this.v && this.v.stop(), this.Ba && yK(this, a), a) {
            if (this.dispatchEvent(gb)) {
                try {
                    this.g = this.a.a.activeElement
                } catch (e) {}
                this.Bf();
                var b = tk(this.a.a) || window;
                if ("fixed" == Ts(this.l(), Xd)) var c = a = 0;
                else c = sk(this.a.a), a = c.b, c = c.a;
                var d = it(this.l());
                b = qk(b || window);
                a = Math.max(a + b.width / 2 - d.width / 2, 0);
                c = Math.max(c + b.height / 2 - d.height / 2, 0);
                Vs(this.l(), a, c);
                Vs(this.bc, a, c);
                Z(this).K(fl(this.a), ce, this.Bf).K(fl(this.a),
                    Qd, this.N);
                zK(this, !0);
                this.Nh();
                this.jf = !0;
                this.m && this.C ? (Gl(this.m, Pb, this.hf, !1, this), this.C.play(), this.m.play()) : this.hf()
            }
        } else if (this.dispatchEvent(fb)) {
            Z(this).Ga(fl(this.a), ce, this.Bf).Ga(fl(this.a), Qd, this.N);
            this.jf = !1;
            this.j && this.v ? (Gl(this.j, Pb, this.gf, !1, this), this.v.play(), this.j.play()) : this.gf();
            a: {
                try {
                    c = this.a;
                    d = c.a.body;
                    b = c.a.activeElement || d;
                    if (!this.g || this.g == d) {
                        this.g = null;
                        break a
                    }(b == d || c.contains(this.l(), b)) && this.g.focus()
                } catch (e) {}
                this.g = null
            }
        }
};
var yK = function (a, b) {
        a.D || (a.D = new uK(a.H, a.a));
        a = a.D;
        if (b) {
            a.a || (a.a = []);
            b = a.b.Oh(a.b.a.body);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d == a.H || As(d, Rc) || (zs(d, Rc, !0), a.a.push(d))
            }
        } else if (a.a) {
            for (c = 0; c < a.a.length; c++) a.a[c].removeAttribute("aria-hidden");
            a.a = null
        }
    },
    zK = function (a, b) {
        a.fb && X(a.fb, b);
        a.Db && X(a.Db, b);
        X(a.l(), b);
        X(a.bc, b)
    };
x = vK.prototype;
x.hf = function () {
    this.dispatchEvent(se)
};
x.gf = function () {
    zK(this, !1);
    this.dispatchEvent(Sc)
};
x.isVisible = v("jf");
x.Bf = function () {
    this.fb && X(this.fb, !1);
    this.Db && X(this.Db, !1);
    var a = this.a.a,
        b = qk(tk(a) || window || window),
        c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
    a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.fb && (X(this.fb, !0), ht(this.fb, c, a));
    this.Db && (X(this.Db, !0), ht(this.Db, c, a))
};
x.Yl = function (a) {
    this.Tf ? this.Ni() : a.target == this.bc && Xm(this.Nh, 0, this)
};
x.Nh = function () {
    try {
        G && this.a.a.body.focus(), this.l().focus()
    } catch (a) {}
};
x.T = function () {
    hl(this.m);
    this.m = null;
    hl(this.j);
    this.j = null;
    hl(this.C);
    this.C = null;
    hl(this.v);
    this.v = null;
    vK.w.T.call(this)
};
var EK = function (a, b, c) {
    vK.call(this, b, c);
    this.c = a || "modal-dialog";
    this.b = AK(AK(new BK, CK, !0), DK, !1, !0)
};
C(EK, vK);
x = EK.prototype;
x.Ai = !0;
x.Fe = .5;
x.fj = "";
x.dd = null;
x.Sc = null;
x.Zh = !1;
x.ub = null;
x.Gb = null;
x.Ef = null;
x.yb = null;
x.$b = null;
x.cb = null;
x.Z = v("c");
x.Ja = function () {
    return null != this.dd ? Kj(this.dd) : ""
};
x.Yb = function () {
    this.l() || this.sa();
    return this.$b
};
x.Pe = function () {
    this.l() || this.sa();
    return EK.w.Pe.call(this)
};
var FK = function (a, b) {
        a.Fe = b;
        a.l() && (b = a.Pe()) && kt(b, a.Fe)
    },
    GK = function (a, b) {
        var c = Lg(a.c + "-title-draggable").split(" ");
        a.l() && (b ? Fs(a.ub, c) : Gs(a.ub, c));
        b && !a.Sc ? (a.Sc = new sz(a.l(), a.ub), Fs(a.ub, c), O(a.Sc, Ge, a.om, !1, a)) : !b && a.Sc && (a.Sc.Da(), a.Sc = null)
    };
x = EK.prototype;
x.Aa = function () {
    EK.w.Aa.call(this);
    var a = this.l(),
        b = this.a;
    this.ub = b.b(k, this.c + "-title", this.Gb = b.b(La, {
        className: this.c + "-title-text",
        id: Ht(this)
    }, this.fj), this.yb = b.b(La, this.c + "-title-close"));
    Bk(a, this.ub, this.$b = b.b(k, this.c + ia), this.cb = b.b(k, this.c + "-buttons"));
    ys(this.Gb, "heading");
    ys(this.yb, lb);
    Wk(this.yb, !0);
    zs(this.yb, rd, "Close");
    this.Ef = this.Gb.id;
    ys(a, "dialog");
    zs(a, sd, this.Ef || "");
    this.dd && Yj(this.$b, this.dd);
    X(this.yb, !0);
    this.b && (a = this.b, a.H = this.cb, HK(a));
    X(this.cb, !!this.b);
    FK(this,
        this.Fe)
};
x.na = function (a) {
    EK.w.na.call(this, a);
    a = this.l();
    var b = this.c + ia;
    this.$b = lk(null, b, a)[0];
    this.$b || (this.$b = this.a.b(k, b), this.dd && Yj(this.$b, this.dd), a.appendChild(this.$b));
    b = this.c + "-title";
    var c = this.c + "-title-text",
        d = this.c + "-title-close";
    (this.ub = lk(null, b, a)[0]) ? (this.Gb = lk(null, c, this.ub)[0], this.yb = lk(null, d, this.ub)[0]) : (this.ub = this.a.b(k, b), a.insertBefore(this.ub, this.$b));
    this.Gb ? (this.fj = $k(this.Gb), this.Gb.id || (this.Gb.id = Ht(this))) : (this.Gb = K(La, {
        className: c,
        id: Ht(this)
    }), this.ub.appendChild(this.Gb));
    this.Ef = this.Gb.id;
    zs(a, sd, this.Ef || "");
    this.yb || (this.yb = this.a.b(La, d), this.ub.appendChild(this.yb));
    X(this.yb, !0);
    b = this.c + "-buttons";
    (this.cb = lk(null, b, a)[0]) ? (this.b = new BK(this.a), this.b.Y(this.cb)) : (this.cb = this.a.b(k, b), a.appendChild(this.cb), this.b && (a = this.b, a.H = this.cb, HK(a)), X(this.cb, !!this.b));
    FK(this, this.Fe)
};
x.ba = function () {
    EK.w.ba.call(this);
    Z(this).K(this.l(), od, this.J).K(this.l(), pd, this.J);
    Z(this).K(this.cb, r, this.R);
    GK(this, !0);
    Z(this).K(this.yb, r, this.fm);
    var a = this.l();
    ys(a, "dialog");
    "" !== this.Gb.id && zs(a, sd, this.Gb.id);
    if (!this.Ai) {
        this.Ai = !1;
        if (this.Ba) {
            a = this.a;
            var b = this.Pe();
            a.Uh(this.fb);
            a.Uh(b)
        }
        this.isVisible() && yK(this, !1)
    }
};
x.tb = function () {
    this.isVisible() && this.setVisible(!1);
    GK(this, !1);
    EK.w.tb.call(this)
};
x.setVisible = function (a) {
    a != this.isVisible() && (this.Ba || this.sa(), EK.w.setVisible.call(this, a))
};
x.hf = function () {
    EK.w.hf.call(this);
    this.dispatchEvent("aftershow")
};
x.gf = function () {
    EK.w.gf.call(this);
    this.dispatchEvent("afterhide");
    this.Zh && this.Da()
};
x.om = function () {
    var a = this.a.a,
        b = qk(tk(a) || window || window),
        c = Math.max(a.body.scrollWidth, b.width);
    a = Math.max(a.body.scrollHeight, b.height);
    var d = it(this.l());
    "fixed" == Ts(this.l(), Xd) ? this.Sc.g = new Os(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)) : this.Sc.g = new Os(0, 0, c - d.width, a - d.height)
};
x.fm = function () {
    IK(this)
};
var IK = function (a) {
    var b = a.b,
        c = b && b.ef;
    c ? (b = b.get(c), a.dispatchEvent(new JK(c, b)) && a.setVisible(!1)) : a.setVisible(!1)
};
EK.prototype.T = function () {
    this.cb = this.yb = null;
    EK.w.T.call(this)
};
EK.prototype.R = function (a) {
    a: {
        for (a = a.target; null != a && a != this.cb;) {
            if (a.tagName == wa) break a;
            a = a.parentNode
        }
        a = null
    }
    if (a && !a.disabled) {
        a = a.name;
        var b = this.b.get(a);
        this.dispatchEvent(new JK(a, b)) && this.setVisible(!1)
    }
};
EK.prototype.J = function (a) {
    var b = !1,
        c = !1,
        d = this.b,
        e = a.target;
    if (a.type == od)
        if (27 == a.keyCode) {
            var f = d && d.ef;
            e = e.tagName == Ka && !e.disabled;
            f && !e ? (c = !0, b = d.get(f), b = this.dispatchEvent(new JK(f, b))) : e || (b = !0)
        } else {
            if (9 == a.keyCode && a.shiftKey && e == this.l()) {
                this.Tf = !0;
                try {
                    this.bc.focus()
                } catch (q) {}
                Xm(this.Ni, 0, this)
            }
        } else if (13 == a.keyCode) {
        if (e.tagName == wa && !e.disabled) f = e.name;
        else if (e == this.yb) IK(this);
        else if (d) {
            var g = d.Le,
                l;
            if (l = g) a: {
                l = (d.H || document).getElementsByTagName(wa);
                for (var m = 0, p; p = l[m]; m++)
                    if (p.name ==
                        g || p.id == g) {
                        l = p;
                        break a
                    }
                l = null
            }
            e = (e.tagName == Oa || e.tagName == Ka || "A" == e.tagName) && !e.disabled;
            !l || l.disabled || e || (f = g)
        }
        f && d && (c = !0, b = this.dispatchEvent(new JK(f, String(d.get(f)))))
    } else e == this.yb && 32 == a.keyCode && IK(this); if (b || c) a.stopPropagation(), a.preventDefault();
    b && this.setVisible(!1)
};
var JK = function (a, b) {
    this.type = "dialogselect";
    this.key = a;
    this.caption = b
};
C(JK, N);
var BK = function (a) {
    a || jk();
    xn.call(this)
};
C(BK, xn);
x = BK.prototype;
x.Le = null;
x.H = null;
x.ef = null;
x.$c = function () {
    xn.prototype.$c.call(this);
    this.Le = this.ef = null
};
x.set = function (a, b, c, d) {
    xn.prototype.set.call(this, a, b);
    c && (this.Le = a);
    d && (this.ef = a);
    return this
};
var AK = function (a, b, c, d) {
        return a.set(b.key, b.caption, c, d)
    },
    HK = function (a) {
        if (a.H) {
            Yj(a.H, Uj);
            var b = jk(a.H);
            a.forEach(function (a, d) {
                a = b.b(wa, {
                    name: d
                }, a);
                d == this.Le && (a.className = $b);
                this.H.appendChild(a)
            }, a)
        }
    };
BK.prototype.Y = function (a) {
    if (a && 1 == a.nodeType) {
        this.H = a;
        a = (this.H || document).getElementsByTagName(wa);
        for (var b = 0, c, d, e; c = a[b]; b++)
            if (d = c.name || c.id, e = $k(c) || c.value, d) {
                var f = 0 == b;
                this.set(d, e, f, "cancel" == c.name);
                f && V(c, $b)
            }
    }
};
BK.prototype.l = v("H");
var CK = {
        key: "ok",
        caption: "OK"
    },
    DK = {
        key: "cancel",
        caption: "Cancel"
    },
    KK = {
        key: "yes",
        caption: "Yes"
    },
    LK = {
        key: "no",
        caption: "No"
    },
    MK = {
        key: "save",
        caption: "Save"
    },
    NK = {
        key: "continue",
        caption: "Continue"
    };
"undefined" != typeof document && (AK(new BK, CK, !0, !0), AK(AK(new BK, CK, !0), DK, !1, !0), AK(AK(new BK, KK, !0), LK, !1, !0), AK(AK(AK(new BK, KK), LK, !0), DK, !1, !0), AK(AK(AK(new BK, NK), MK), DK, !0, !0));
var OK = u();
C(OK, TA);
Wf(OK);
OK.prototype.Z = w("goog-toolbar-menu-button");
var SK = function (a, b, c, d, e, f, g) {
    var l = SIGNED_IN;
    this.L = c;
    this.V = b;
    this.Sb = d;
    this.Rb = e;
    this.R = l;
    this.dc = f;
    this.C = this.Ab = !1;
    this.a = new mH(a, b, c);
    this.Xa = MSG_PB_SIGNIN;
    this.Ra = MSG_SAVE;
    this.$ = MSG_MY_PB;
    this.g = Kp.M();
    this.xb = g;
    a = I("gt-pb-star");
    null != a ? (b = new Hu(MSG_SAVE_PB, new tw("trans-pb-button")), b.setVisible(!1), b.sa(a), this.R ? O(b, n, this.ic, !1, this) : O(b, n, gg(Jx, this.xb, LOGIN_URL), !1, this), PK(this, b), a = b) : a = null;
    this.j = a;
    this.F = QK(this);
    a = I("gt-apb-main");
    b = K(k, {
        id: "gt-pb-sw1"
    });
    a.appendChild(b);
    this.X = RK(this, b, MSG_SHOW_PB);
    a = this.X.l();
    b = K(k, {
        id: "gt-pb-id"
    });
    a.appendChild(b);
    X(b, !1);
    this.aa = b;
    this.v = 0;
    this.Ma = !0;
    this.m = "";
    this.G = rp.M()
};
SK.prototype.ic = function () {
    if ("" == this.m) {
        TK(this);
        this.g.log("pbsavs", 1);
        var a = this.G;
        S(a, T(a, 67))
    } else a = [this.m], fK(this.b, a), 0 != a.length && qH(this.a, a), UK(this), this.J(), this.C || VK(this, -1), this.g.log("pbsavs", 0), a = this.G, S(a, T(a, 180))
};
var PK = function (a, b) {
        if (a.R) {
            var c = a.a;
            null != c.a && c.a.length >= c.D ? (b.oa("" != a.m), b.g("" != a.m ? MSG_SAVED : MSG_PB_FULL)) : (b.oa(!0), b.g("" != a.m ? MSG_SAVED : MSG_SAVE_PB))
        } else b.oa(!0), b.g(MSG_SAVE_PB)
    },
    QK = function (a) {
        var b = I("gt-pb-save");
        if (null == b) return null;
        var c = new sv(a.Ra);
        c.sa(b);
        c.setVisible(!1);
        a.R || (c.oa(!1), fv(c.l(), a.Xa));
        O(c, n, function () {
            TK(this);
            this.g.log("pbsavb")
        }, !1, a);
        return c
    },
    RK = function (a, b, c) {
        var d = new Hu(null, new sw);
        d.sa(b);
        V(d.l(), "pb-sw");
        a.R ? (fv(d.l(), c), O(d, n, a.jc, !1, a)) : (fv(d.l(),
            a.Xa), O(d, n, gg(Jx, a.xb, LOGIN_URL), !1, a));
        return d
    },
    XK = function (a) {
        var b = I("pb-back-c"),
            c = new Hu(MSG_BACK_TO_ALL, new tw("pbback-button"));
        c.sa(b);
        Qs(c.l(), nf, Rc);
        O(c, n, function () {
            WK(this);
            nH(this.a)
        }, !1, a);
        return c
    },
    YK = function (a) {
        var b = new rB(I("pb-st"), [MSG_NEWEST, MSG_SOURCE], 10, ["0", "2"], void 0, MSG_SORT_BY + " ", OK.M(), void 0, !0);
        O(b, ob, a.lk, !1, a);
        O(XA(b), se, function () {
            var b = a.G;
            S(b, T(b, 319))
        }, !1);
        return b
    };
SK.prototype.hc = function () {
    this.o.Sa(hK(this.b));
    UK(this);
    this.g.log("pbco");
    var a = this.G,
        b = jK(this.b),
        c = ZK(this),
        d = $K(this),
        e = aL(this);
    S(a, Jp(a, 42, b, c, d, e))
};
var WK = function (a, b) {
        var c = a.a;
        "" != c.b && (c.F = !0, c.b = "");
        a.N.value = "";
        a.Ha = "";
        if (!b) {
            b = a.a;
            if (b.g != Xa || b.j != Xa) b.F = !0, b.g = Xa, b.j = Xa;
            a.c.ac(Ya)
        }
        X(a.ma, !1);
        X(a.Ia, !0);
        UK(a);
        X(a.D, !0)
    },
    VK = function (a, b) {
        a.v += b;
        0 > a.v && (a.v = 0);
        L(a.aa, 9 >= a.v ? a.v + "" : "9+");
        X(a.aa, 0 < a.v)
    },
    TK = function (a) {
        if (300 < jJ(a.V, !0).length || 300 < a.V.Ka().length) {
            var b = iJ(a.L),
                c = YC(a.L),
                d = jJ(a.V, !0).length,
                e = a.V.Ka().length,
                f = new EK,
                g = Nj(MSG_PB_TL);
            f.dd = g;
            f.$b && Yj(f.$b, g);
            g = AK(new BK, CK, !0, !0);
            f.b = g;
            f.cb && (f.b ? (g = f.b, g.H = f.cb, HK(g)) : Yj(f.cb,
                Uj), X(f.cb, !!f.b));
            f.Zh = !0;
            f.sa();
            f.setVisible(!0);
            a.g.log("pbtl", {
                sl: b,
                tl: c,
                slen: d,
                tlen: e
            })
        } else {
            null != a.j && (a.j.oa(!1), a.j.g(MSG_SAVING), V(a.j.l(), $e));
            null != a.F && (a.F.oa(!1), a.F.g(MSG_SAVING));
            a.Ab || bL(a);
            b = a.c.W() != Ya && a.c.W() != iJ(a.L) + "|" + YC(a.L);
            WK(a, !b);
            e = a.a;
            b = new iH;
            c = iJ(e.c);
            b.data[1] = c;
            c = YC(e.c);
            b.data[2] = c;
            c = jJ(e.m, !0);
            b.data[3] = c;
            c = e.m.Ka(!0);
            b.data[4] = c;
            c = e.o;
            d = A(e.J, e, b);
            e = e.m.g;
            var l = null != e.g && lt(e.g.a);
            var m = Q(b, 2);
            e = Q(b, 3);
            f = b.kb();
            g = {
                cm: "a"
            };
            g.sl = Q(b, 1);
            g.tl = m;
            g.ql = e.length + "";
            l && (g.edit = "1");
            b = {};
            b.q = e;
            b.utrans = f;
            lH(c, na + Jn(g), d, Ia, Jn(b));
            X(a.D, !0);
            a.C || VK(a, 1)
        }
    },
    UK = function (a) {
        var b = 0 != a.o.j;
        a.wa.setVisible(b);
        X(a.Ca, b);
        "" == a.a.b ? Qs(a.qb.l(), nf, Rc) : Qs(a.qb.l(), nf, "")
    },
    cL = function (a, b) {
        null != a.j && a.j.setVisible(b);
        null != a.F && a.F.setVisible(b)
    };
SK.prototype.gc = function () {
    UK(this);
    var a = this.a,
        b = this.c.W(),
        c = b.split("|")[0];
    b = b.split("|")[1];
    if (c != a.g || b != a.j) a.g = c, a.j = b, nH(a);
    X(this.D, !0);
    a = this.G;
    c = jK(this.b);
    b = ZK(this);
    var d = $K(this),
        e = aL(this);
    S(a, Jp(a, 179, c, b, d, e))
};
var aL = function (a) {
        return "2" == a.ib.W()
    },
    ZK = function (a) {
        a = a.c.W().split("|")[0];
        return a == Xa ? "" : a
    },
    $K = function (a) {
        a = a.c.W().split("|");
        a = 1 < a.length ? a[1] : "";
        return a == Xa ? "" : a
    };
x = SK.prototype;
x.lk = function () {
    var a = this.a,
        b = this.ib.W();
    b != a.v && (a.v = b, nH(a));
    X(this.D, !0);
    a = this.G;
    b = jK(this.b);
    var c = ZK(this),
        d = $K(this),
        e = aL(this);
    S(a, Jp(a, 44, b, c, d, e))
};
x.Kh = function (a) {
    a.stopPropagation();
    a.preventDefault();
    a = this.N.value;
    if (a != this.Ha)
        if (this.Ha = a, "" == a) WK(this), nH(this.a);
        else {
            a = this.a;
            var b = this.N.value;
            b != a.b && (a.b = b, nH(a));
            UK(this);
            X(this.D, !0)
        }
    a = this.G;
    b = jK(this.b);
    var c = ZK(this),
        d = $K(this),
        e = aL(this);
    S(a, Jp(a, 43, b, c, d, e))
};
x.Bk = function () {
    var a = this.G,
        b = jK(this.b),
        c = ZK(this),
        d = $K(this),
        e = aL(this);
    S(a, Jp(a, 46, b, c, d, e));
    a = gK(this.b);
    this.o.Sa(!1);
    0 != a.length && qH(this.a, a);
    UK(this);
    this.J()
};
x.nk = function () {
    if (0 == oH(this.a).length) this.o.Sa(!1);
    else {
        this.b.Sa(this.o.Ya());
        UK(this);
        this.g.log("pbca", this.o.Ya());
        var a = this.G,
            b = jK(this.b),
            c = ZK(this),
            d = $K(this),
            e = aL(this);
        S(a, Jp(a, 178, b, c, d, e))
    }
};
x.Om = function (a) {
    var b = a.target.Ka();
    a = this.a.o;
    var c = Q(b, 1),
        d = Q(b, 2),
        e = Q(b, 3),
        f = b.kb(),
        g = {
            cm: "e"
        };
    g.id = b.Mc();
    g.sl = c;
    g.tl = d;
    b = {};
    b.q = e;
    b.utrans = f;
    lH(a, na + Jn(g), Vf, Ia, Jn(b))
};
x.Rk = function (a) {
    a = a.target;
    var b = a.Ka();
    kw(this.Sb, Q(b, 1), Q(b, 2), Q(b, 3), "pb");
    aH(this.Rb, b.kb());
    b = this.b;
    for (var c = Nt(b), d = 0; d < c; d++) Ot(b, d).Sa(Ot(b, d) == a);
    this.o.Sa(hK(this.b));
    UK(this);
    this.J();
    this.g.log("pbcl");
    a = this.G;
    b = jK(this.b);
    c = ZK(this);
    d = $K(this);
    var e = aL(this);
    S(a, Jp(a, 48, b, c, d, e))
};
x.Fk = function () {
    var a = {},
        b = (new aq(window.location.href, !0)).a.get(db);
    a.authuser = b ? b : "0";
    b = this.a;
    var c = [],
        d = !1;
    b.g != Xa && b.j != Xa && (d = !0);
    if (null != b.a)
        for (var e = b.a.length - 1; 0 <= e; --e) {
            var f = [],
                g = b.a[e];
            f.push(b.c.ea(Q(g, 1)));
            f.push(b.c.dc(Q(g, 2)));
            f.push(rH(Q(g, 3)));
            f.push(rH(g.kb()));
            c.push(f.join(","))
        }
    e = "";
    d ? e = " - " + b.c.ea(b.g) + " - " + b.c.dc(b.j) : "" != b.b && (e = " - " + b.b);
    b = [c.join("\n"), e];
    this.g.log("pbexp", "" == b[1] ? 1 : 2);
    c = this.G;
    S(c, T(c, 45));
    c = b[0];
    d = this.$ + b[1];
    a = a || {};
    b = a.target;
    e = a.trixPath ||
        (a.useCorp ? "https://docs.google.com/a/google.com/spreadsheets/" : void 0);
    delete a.target;
    delete a.useCorp;
    delete a.trixPath;
    wh(a, {
        content: c,
        title: d
    });
    c = a.authuser;
    d = Pn(e || "https://docs.google.com/spreadsheets/", "import");
    d = Pn(d, "inline");
    c && (d = Ln(d, db, c));
    c = d;
    BJ(new zJ, a, c, b)
};
var bL = function (a) {
        a.Ab = !0;
        I("gt-apb-c").appendChild(Ms(tJ, {
            Xg: a.$
        }));
        RK(a, I("gt-pb-sw2"), MSG_HIDE_PB);
        I("gt-main").appendChild(Ms(uJ, {
            Xg: a.$
        }));
        a.Ia = I("pb-dd");
        a.ma = I("pb-sh");
        a.o = new kz;
        a.o.sa(I("pb-cb-a"));
        a.Ca = I("pb-sp-del");
        var b = I("pb-del-c"),
            c = new Hu(MSG_DELETE, new tw("pbdel-button"));
        c.sa(b);
        c.setVisible(!1);
        O(c, n, a.Bk, !1, a);
        a.wa = c;
        a.qb = XK(a);
        b = new rB(I("pb-ls"), [MSG_ALL, "-"], 11, [Ya, me], void 0, "", OK.M());
        O(b, ob, a.gc, !1, a);
        a.c = b;
        a.ib = YK(a);
        a.ia = I("pb-empty");
        b = I("gt-pb-tb");
        c = new cK;
        c.sa(b);
        O(c, ob, a.hc, !1, a);
        O(c, "pbedit", a.Om, !1, a);
        O(c, "pbclick", a.Rk, !1, a);
        a.b = c;
        a.N = I("gt-pb-sb");
        a.Ha = "";
        a.ea = I("gt-pb-sbt");
        a.D = I("gt-pb-spin");
        a.Za = I("gt-apb-pb");
        a.hb = I("gt-pb-c");
        a.O = I("pb-tb-c");
        a.ob = I("pb-tool");
        b = I("pb-tool-r");
        c = new Hu(MSG_PB_EXP, new tw("pbexp-button"));
        c.sa(b);
        O(c, n, a.Fk, !1, a);
        b = new kK;
        O(b, ce, a.ra, !1, a);
        dL(a)
    },
    eL = function (a, b) {
        if (null == b) {
            b = MSG_NP;
            var c = MSG_NPM;
            b = a.c.W() == Ya ? b : c
        }
        L(a.ia, b);
        X(a.ia, !0);
        X(a.b.l(), !1)
    },
    fL = function (a, b) {
        a.b.update(b, a.L, !0);
        X(a.ia, !1);
        X(a.b.l(), !0)
    };
SK.prototype.Ub = function () {
    this.o.Sa(!1);
    this.wa.setVisible(!1);
    X(this.Ca, !1);
    X(this.D, !1);
    var a = oH(this.a);
    if (this.c.W() == Ya) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = this.L.ea(Q(d, 1)) + (document.body.dir == ge ? " < " : " > ") + this.L.dc(Q(d, 2));
            b[Q(d, 1) + "|" + Q(d, 2)] = e
        }
        for (var f in b) {
            d = !1;
            for (c = 2; c < this.c.Va(); c++)
                if (qB(this.c, c) == f) {
                    d = !0;
                    break
                }
            d || (c = new OA(b[f], f), this.c.ff(c))
        }
        for (c = this.c.Va() - 1; 1 < c; c--) null != b[qB(this.c, c)] || this.c.ed(c);
        YA(this.c, 1).setVisible(2 < this.c.Va())
    }
    "" != this.a.b && (b =
        MSG_PB_SR.replace(ea, a.length), L(this.ma, b), X(this.ma, !0), X(this.Ia, !1));
    0 == a.length ? (b = this.a.L, "" != b ? (eL(this, b), this.g.log("pberr")) : "" == this.a.b ? eL(this) : fL(this, a)) : (fL(this, a), this.C && iK(this.b, pH(this.a)));
    this.J();
    if (this.Ma) {
        b = [];
        for (f = 0; f < a.length; f++) ug(b, Q(a[f], 1) + "/" + Q(a[f], 2));
        f = {};
        f.count = a.length;
        f.pairs = b.length;
        this.g.log("pbfo", f);
        a = this.G;
        S(a, T(a, 260));
        this.Ma = !1
    }
};
SK.prototype.jc = function () {
    X(this.aa, !1);
    this.v = 0;
    if (this.C) {
        fv(this.X.l(), MSG_SHOW_PB);
        W(document.body, "pbv");
        var a = new DH(this.Za, 400),
            b = new DH(this.hb, 400);
        a.play();
        b.play();
        this.C = !1
    } else fv(this.X.l(), MSG_HIDE_PB), this.C = !0, this.Ab || (bL(this), nH(this.a), X(this.D, !0)), V(document.body, "pbv"), a = new EH(this.Za, 400), b = new EH(this.hb, 400), a.play(), b.play(), this.ra(), iK(this.b, pH(this.a));
    a = this.G;
    S(a, T(a, this.C ? 40 : 41));
    this.g.log("pbsw", this.C)
};
var dL = function (a) {
    O(a.o, ob, a.nk, !1, a);
    O(a.ea, r, a.Kh, !1, a);
    O(new Tt(a.N), nd, function (a) {
        13 == a.keyCode && this.Kh(a)
    }, !1, a);
    O(a.a, Vd, a.Ub, !1, a);
    O(a.dc, gf, a.J, !1, a);
    O(window, he, a.ra, !1, a);
    O(a.O, he, a.Tb, !1, a)
};
SK.prototype.ra = function () {
    var a = document.documentElement.clientHeight;
    X(this.O, !1);
    document.body.scrollHeight > a && (a = document.body.scrollHeight);
    X(this.O, !0);
    var b = Zs(this.O).a;
    this.O.style.height = Us(a - b - 29, !0)
};
SK.prototype.J = function () {
    a: {
        var a = this.a;
        if (null != a.a)
            for (var b = 0; b < a.a.length; ++b) {
                var c = a.a[b];
                if (iJ(a.c) == Q(c, 1) && YC(a.c) == Q(c, 2) && jJ(a.m) == Q(c, 3) && a.m.Ka(!0) == c.kb()) {
                    a = c.Mc();
                    break a
                }
            }
        a = ""
    }
    this.m = a;
    null != this.j && ("" != this.m ? V(this.j.l(), $e) : W(this.j.l(), $e), PK(this, this.j));
    null != this.F && (this.F.oa("" == this.m), this.F.g("" != this.m ? MSG_SAVED : this.Ra))
};
SK.prototype.Tb = function () {
    0 < this.O.scrollTop ? V(this.ob, "pb-shadow") : W(this.ob, "pb-shadow")
};
var gL = function (a, b, c) {
    Y.call(this);
    this.R = a;
    this.D = b;
    this.V = c;
    this.b = HATS_TP;
    this.c = this.v = this.g = this.m = null;
    this.j = -1;
    this.J = Kp.M();
    this.G = rp.M()
};
C(gL, Y);
gL.prototype.Aa = function () {
    gL.w.Aa.call(this);
    this.na(xk(k))
};
gL.prototype.na = function (a) {
    gL.w.na.call(this, a);
    V(a, "gt-hats");
    a.appendChild(Ls(wJ));
    this.m = J("gt-hats-tt", a);
    this.g = J("gt-hats-c", a);
    this.v = J("gt-hats-x", a);
    L(this.m, MSG_HATS_TITLE);
    this.c = new MA;
    this.Ta(this.c, !0);
    a = [
        [MSG_HATS_O1, 0],
        [MSG_HATS_O2, 1],
        [MSG_HATS_O3, 2],
        [MSG_HATS_O4, 3],
        [MSG_HATS_O5, 4]
    ];
    if (2 == this.b || 4 == this.b || 6 == this.b)
        for (var b = Math.random, c = a.length - 1; 0 < c; c--) {
            var d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    for (b = 0; b < a.length; ++b)
        if (a[b][0]) {
            c = a[b][0];
            d = a[b][1];
            e = K(La);
            if (1 ==
                this.b) {
                var f = K(La, {
                    "class": "goog-inline-block gt-hats-icon"
                });
                V(f, "gt-hats-icon" + Nt(this.c));
                e.appendChild(f)
            }
            f = K(La, {
                "class": "gt-hats-option"
            });
            L(f, c);
            e.appendChild(f);
            c = new OA(e, d);
            this.c.Ta(c, !0)
        }
};
gL.prototype.Yb = v("g");
gL.prototype.ba = function () {
    gL.w.ba.call(this);
    Z(this).K(this.c, n, this.N);
    Z(this).K(this.v, r, A(this.C, this, 0));
    var a = this.G;
    S(a, T(a, 261));
    hL(this, se)
};
var hL = function (a, b) {
    var c = {};
    c.sl = iJ(a.D);
    c.tl = YC(a.D);
    c.hl = a.R;
    c.e = b;
    a.J.log(1 == a.b ? "survey" : "survey" + a.b, c)
};
gL.prototype.N = function (a) {
    this.j = a.target.W();
    Fp(this.G, 10 * (this.b - 1) + this.j);
    hL(this, ie + this.j);
    ht(this.l(), it(this.l()));
    this.c.Da();
    L(this.m, MSG_HATS_THANKS);
    this.g.appendChild(Ls(xJ, {
        ek: MSG_HATS_AF,
        ee: MSG_HATS_MF
    }));
    a = J("gt-hats-link", this.g);
    Z(this).K(a, r, function () {
        this.V.b();
        var a = this.G;
        S(a, T(a, 263));
        hL(this, "feedback")
    });
    this.C(1E4)
};
gL.prototype.C = function (a) {
    Op(this.J, "/translate/uc?ua=dismiss&uav=survey");
    Xm(this.X, a, this)
};
gL.prototype.X = function () {
    (new DH(this.l(), 300)).play();
    Xm(A(this.Da, this), 300)
};
var iL = function (a) {
    this.data = a || []
};
C(iL, Nr);
var jL = function (a) {
    this.data = a || []
};
C(jL, Nr);
var kL = function (a) {
    this.data = a || []
};
C(kL, Nr);
iL.prototype.Oa = function () {
    return am(this, 1)
};
jL.prototype.Oa = function () {
    return am(this, 1)
};
var lL = function (a) {
    this.data = a || []
};
C(lL, Nr);
var mL = function (a) {
    this.data = a || []
};
C(mL, Nr);

function nL(a, b, c) {
    b = K(Ea, {
        type: Rc,
        name: b,
        value: c
    });
    a.appendChild(b)
}
var AL = function (a) {
    var b = this;
    R.call(this);
    this.o = Kp.M();
    var c = new qJ(this);
    a.o && (a = SI(a));
    this.uj = I("gt-submit");
    this.form = this.uj.form;
    this.a = I("hl").value;
    this.ia = lp.M();
    this.G = rp.M();
    this.hb = new ls("t");
    this.re = !0;
    this.J = a.O;
    this.Fi = (new Date).getTime();
    xp(this.G);
    this.j = new oJ("gt-sl", !0);
    this.D = new oJ("gt-tl", !1);
    pJ(this.j);
    this.j.Ca = 0;
    pJ(this.D);
    this.D.Ca = 0;
    this.Mf = null;
    this.If = UB.M();
    this.qj = I("gt-swap");
    this.hg = new Hu(null, new sw("trans-swap-button"));
    this.qj && this.hg.Y(this.qj);
    var d = I(ze);
    this.c = new Dy(d.value);
    xy(this.c);
    this.c.Y(d);
    wy(this.c);
    V(oL(this), qe);
    this.ze = this.Hg = 0;
    this.qa = new Hy(A(this.cj, this));
    rJ(c, this.qa, this.j, this.D);
    d = "" == a.c ? null : new mD(pL(a.c), A(this.ea, this), void 0, !0);
    var e = "" == a.g ? null : new mD(pL(a.g), A(this.dc, this));
    Py(this.qa);
    np(this.ia, iJ(this));
    op(this.ia, YC(this));
    this.Qi = !0;
    this.V = new oD(this.qa);
    this.b = pL(a.J);
    qD(this.V, {
        Ti: this.j,
        aj: this.D,
        Ui: d,
        bj: e,
        Yi: this.hg,
        ej: this.c,
        Qh: function () {
            return b.b ? al(b.b) : ""
        }
    });
    null != FEATURE_STICKINESS && qL(this);
    d = I("gt-src-cc");
    this.xe = new jy(MAX_SINGLE_QUERY_LENGTH, "gt-src-cc-normal", "gt-src-cc-overflow");
    this.xe.Y(d);
    my(this.xe);
    ny(this.xe, iJ(this));
    this.ib = new VJ(this.c, this.qa, this.a, MAX_SINGLE_QUERY_LENGTH);
    this.ib.Y(I("gt-ovfl"));
    XJ(this.ib, this.a);
    YJ(this.ib, iJ(this));
    this.Xm = new Xy(this.c, this.qa, this.a, this.ib, this.xe);
    Yy(this.Xm);
    rL(this);
    sL(this.c, iJ(this));
    O(this.qa, Fe, this.Lj, !1, this);
    O(this.qa, Ee, this.Oj, !1, this);
    O(this.qa, Ib, this.vj, !1, this);
    O(this.qa, Re, this.Vj, !1, this);
    this.C = new sy("");
    this.C.Y(I("contribute-target"));
    xy(this.C);
    wy(this.C);
    sL(this.C, YC(this));
    O(this.uj, r, this.Wm, !1, this);
    O(this.qa, td, A(this.Ae, this, !1), !1, this);
    O(this.c, ob, this.Dj, !1, this);
    O(this, gf, this.Ej, !1, this);
    this.v = new Ox(this.a, this.hb, this, void 0, "t");
    this.v.Y(I("gt-lc"));
    d = new Xz(this.a);
    this.v.b.Ta(d, !0);
    this.pe = new Ev(this.a, [common_translation_tooltip, uncommon_translation_tooltip, rare_translation_tooltip, MSG_N_MORE_TRANSLATIONS_LABEL], !1);
    this.v.m.Ta(this.pe, !0);
    this.gc = this.xb = this.Rb = this.ob = null;
    this.ob = new pz(this.a, !1);
    this.v.b.Ta(this.ob, !0);
    this.Rb = new xI(this.a, !1);
    this.v.b.Ta(this.Rb, !0);
    this.xb = new cA(this.a, !1);
    this.v.b.Ta(this.xb, !0);
    this.gc = new GH(this.a, !1);
    this.v.b.Ta(this.gc, !0);
    if (d = pL(a.R)) this.m = new kI(this, MSG_LANGUAGE_CORRECTION, MSG_SPELLING_CORRECTION, MSG_SPELLING_AUTO_CORRECTION, MSG_SPELLING_REVERT_CORRECTION), this.m.Y(d);
    this.lg = a.ea;
    this.Zj = a.aa;
    this.N = I(be);
    this.Za = I(Ce);
    this.oe = I("backend-stats-stt-total");
    this.Kc = I("backend-stats-community");
    this.je = I("backend-stats-dictionary");
    this.le = I("backend-stats-other");
    this.pd = I("backend-stats-decoder");
    this.me = I("backend-stats-decoder1");
    this.ke = I("backend-stats-decoder2");
    this.Jc = I("backend-models-used");
    this.Wj = a.V;
    this.Bi = pL(a.F);
    this.Tb = pL(a.C);
    this.Ia = null;
    null != a.a && (this.Ia = new bC(a.a, oL(this), I("gt-src-c"), this.a, IN_CHINA, this));
    this.qb = null;
    null != this.C && null != a.m && (this.qb = new bC(a.m, this.C.l(), I("gt-res-c"), this.a, IN_CHINA, void 0), X(a.m, !1));
    this.qe = I(je);
    this.xi = new WI(this);
    tL(this);
    this.Of = a.ia;
    this.Uf = a.$;
    if (this.O = a.N) uL(this.O, iJ(this)), Ek(this.O.l(),
        oL(this)), O(this.O, n, this.Ym, !1, this);
    this.hc = a.Ab;
    null != this.C && null != this.hc && (uL(this.hc, YC(this)), Ek(this.hc.l(), this.C.l()));
    this.Ma = a.X;
    this.jc = null;
    this.Ma && (this.jc = vL(this.Ma.l()), O(this.Ma, n, this.Kj, !1, this));
    this.L = null;
    ENABLE_COMMUNITY_PROMO && ENABLE_COMMUNITY_SERVED_PROMO && (this.L = new zI("t-served-community", MSG_COMMUNITY_PROMO_SERVED_DESCRIPTION, MSG_COMMUNITY_PROMO_SERVED_LINK, MSG_COMMUNITY_PROMO_SERVED_DISMISS, MSG_COMMUNITY_PROMO_SERVED_URL, COMMUNITY_PROMO_SERVED_DISMISSED, null), this.L.Y(I("gt-res-dir-ctr")));
    this.Ra = {};
    this.Ra.edit = ENABLE_COMMUNITY_USER_EDIT_PROMO ? new lz(MSG_COMMUNITY_PROMO_EDIT_LINK, MSG_COMMUNITY_PROMO_EDIT_SUBTEXT, MSG_COMMUNITY_PROMO_EDIT_TITLE, "", MSG_COMMUNITY_PROMO_EDIT_URL, "t-user-edit", 15, null) : null;
    ENABLE_COMMUNITY_PROMO && ("new" === COMMUNITY_PROMO_TYPE ? this.Ra[Hb] = new lz(MSG_COMMUNITY_PROMO_NEW_USER_LINK, "", MSG_COMMUNITY_PROMO_NEW_USER_TITLE, MSG_COMMUNITY_PROMO_NEW_USER_SUBTEXT, MSG_COMMUNITY_PROMO_NEW_USER_URL, "t-new-user", 13) : "return" === COMMUNITY_PROMO_TYPE && (this.Ra[Hb] = new lz(MSG_COMMUNITY_PROMO_RETURN_USER_LINK,
        "", MSG_COMMUNITY_PROMO_RETURN_USER_TITLE, MSG_COMMUNITY_PROMO_RETURN_USER_SUBTEXT, MSG_COMMUNITY_PROMO_RETURN_USER_URL, "t-return-user", 14)), d = I("gt-promo-lr"), e = this.Ra[Hb], null != e && e.Y(d));
    NG = MSG_UNDO_EDITS;
    this.Ha = new OG(a.b);
    this.aa = I("gt-res-copy");
    this.Ha.b && (this.aa && (this.Kf = new vG(this.aa, MSG_COPIED, null, 2)), O(this.Ha.b, n, this.Jj, !1, this));
    c.a(this.hg, this.Of, this.Uf);
    (c = Hx()) && (c = "&" + c);
    this.ic = null;
    null != this.Of && (this.ic = new Lx(this.Of, "&client=t" + c, 2, Ar));
    this.wa = null;
    null != this.Uf && (this.wa =
        new Lx(this.Uf, "&client=t&prev=input" + c, 1, Ar));
    ZI(!0);
    this.ue = !1;
    xG = MSG_ALT_PHRASE_TITLE;
    yG = MSG_EDIT_TRANSLATION;
    JG = MSG_USE_ALTERNATIVE;
    KG = gd;
    d = xk(k);
    X(d, !1);
    Dk(d, this.N);
    c = new QG(MSG_SUBMIT_TRANSLATION, MSG_CANCEL_EDITS, MSG_SUGGEST_A_TRANSLATION, this.Ra.edit);
    c.Y(d);
    d = new LG(this.C, this.N, this.hc);
    this.g = new SG(void 0, !0, void 0, a.L, a.D, c, d, this.Ha);
    this.g.Y(this.b);
    this.ye = new UF(oL(this));
    TG(this.g, this.ye);
    V(this.ye.a, qe);
    this.g.b.Qb = new vG(void 0, MSG_ALT_PHRASE_TITLE, void 0, 2);
    this.g.b.Qb.ia = 700;
    zr && (c = new NH([this.c.l()], [this.b]), O(c, ie, this.v.ul, !1, this.v), O(this.g, r, function (a) {
        1 < a.Wl && this.v.bi(a)
    }, !1, this), O(this.g, "usealt", this.v.bi, !1, this.v));
    $I(this);
    null != this.qb && eC(this.qb, YC(this));
    this.m && O(this.m, n, this.Pj, !1, this);
    this.Ca = new dI(this.c, this.V, tld.substr(tld.lastIndexOf(".") + 1), this.a);
    eI(this.Ca);
    iI(this.Ca, XC(this));
    O(this.Ca, Ge, function () {
        oL(this).focus()
    }, !1, this);
    O(this.Ca, Pb, function () {
        oL(this).focus()
    }, !1, this);
    O(this.g, n, this.zj, !1, this);
    c = [this.b];
    (d = I("gt-res-tools")) &&
    c.push(d);
    new yI(this.b, c);
    (c = I("gt-swap")) && c.title && gv(c);
    var f = I("gt-src-wrap");
    V(f, Sb);
    O(oL(this), Sb, function () {
        V(f, Sb)
    });
    O(oL(this), ib, function () {
        W(f, Sb)
    });
    O(oL(this), Sb, this.G.c, !1, this.G);
    W(document.body, "nj");
    c = I("gt-sl-gms");
    d = I("gt-tl-gms");
    null != c && (c.onclick = null);
    null != d && (d.onclick = null);
    this.sj = new fJ(this, this.a);
    hJ(this.sj);
    this.pi = new TI(this.a);
    this.pi.sa(I("gt-bbar"));
    VI(this.pi);
    this.$ = null;
    a.v && (this.$ = new KI, MI(this.$, this.a), NI(this.$, XC(this)), OI(this.$, YC(this)));
    new kD(this.V);
    this.Sb = wL(this);
    wr && (this.ve = new SK(new kH(this.a), this, this, this, this.g, this, this.a));
    this.Yj = new uI;
    this.fg = new wI;
    this.fg.Y(I("gt-src-is"));
    this.fg.setVisible(!1);
    this.Ub = new sy("");
    c = I("source-is");
    this.Ub.Y(c);
    V(c, qe);
    sL(this.Ub, iJ(this));
    c = {
        Fl: this.c,
        rm: this.Ub,
        Gl: this.Ia,
        wk: new nz,
        qa: this.qa,
        Cm: new tI,
        Qm: new ls("t"),
        client: "t",
        Jb: this.a,
        ym: this.re,
        Pl: 4,
        Pm: Cr,
        ik: !1,
        Gk: MSG_FLAG_SUGGESTION,
        Il: !1
    };
    this.X = new bF(this.Yj, this.fg, c);
    this.cj(aj(this.qa.a) ? ge : xd);
    Cr ? V(this.X.a.l(), "gt-is-tr-on") : V(this.X.a.l(),
        "gt-is-tr-off");
    this.Gj = new HF(this.c, this.re, I("gt-otf-switch"), this.X, A(this.Ae, this, !0, void 0), A(this.hb.m, this.hb));
    O(this, Ae, this.g.Im, !1, this.g);
    this.Xa = null;
    sr && (d = xk(k), X(d, !1), Ek(d, I(be)), this.Xa = new CJ(this, this, this.a), this.Xa.Y(d));
    this.we = null;
    Xm(this.Mj, 6E4, this);
    this.F = "";
    this.R = null;
    a.j && (this.R = a.j, this.R.kh = this, oq(y.location).g && lw(this.R, y.location.hash.substr(1), this.j.J, this.D.J), this.R.Bd.oa(!0), O(this.R.Bd, Hd, this.Fj, void 0, this));
    this.ma = [];
    this.ma.push(new WC(oL(this), "orig",
        13, "t", this));
    this.ma.push(new WC(this.b, "trans", 14, "t", this, A(this.Ka, this)));
    this.ma.push(new WC(this.pe.l(), this.pe.mb(), this.pe.yc(), "t", this));
    this.ma.push(new WC(this.ob.l(), this.ob.mb(), this.ob.yc(), "t", this));
    this.ma.push(new WC(this.Rb.l(), this.Rb.mb(), this.Rb.yc(), "t", this));
    this.ma.push(new WC(this.xb.l(), this.xb.mb(), this.xb.yc(), "t", this));
    this.ma.push(new WC(this.gc.l(), this.gc.mb(), this.gc.yc(), "t", this));
    O(window, hb, A(this.Nf, this, hb));
    O(window, kf, A(this.Nf, this, kf));
    JS_LOADED = !0;
    window.jstiming && window.jstiming.load && (window.jstiming.load.tick("je"), _csi("t", XC(this), YC(this), this.c.l()));
    xL(this);
    yL(this);
    if (rr) {
        a = mk("gt-br-logo");
        var g = YC(this);
        D(a, function (a) {
            V(a, aj(g) ? uc : tc)
        });
        zL(this)
    }
};
C(AL, R);
AL.prototype.cj = function (a) {
    if (this.X) a: {
        var b = this.X.a;
        if (a == xd) var c = vd;
        else if (a == ge) c = ee;
        else break a;
        Qs(b.l(), Jb, a);
        Qs(b.l(), "text-align", c)
    }
};
AL.prototype.Lj = function (a) {
    if (!this.ue && a && a.data && 0 < a.data.length) {
        a = a.data[0];
        var b = this.ea(a);
        b && lI(this.m, {
            Je: b,
            hh: a,
            Ji: jJ(this),
            Wi: XC(this)
        })
    }
};
var pL = function (a) {
    return z(a) ? I(a) : null
};
AL.prototype.Ym = function () {
    BL(this, "");
    var a = this.g;
    a.j = null;
    a.J = null;
    bH(this.g);
    CL(this);
    this.Ca.c = "";
    a = this.G;
    S(a, T(a, 23));
    Sp(this.o, "clearbtn", 1, Va);
    this.ra()
};
AL.prototype.Jj = function () {
    var a = VC(I(de)),
        b = vD(this.V);
    b.hl = this.a;
    b.ql = jJ(this).length;
    if (this.aa) try {
        if (document.execCommand(zb)) {
            kv(this.aa, !0);
            var c = this.Kf,
                d = this.aa;
            hG(c, d);
            c.b = d;
            oG(c, d, void 0);
            var e = this.G,
                f = T(e, 21),
                g = new ip;
            H(g, 1, 3);
            xi(f, 56, g);
            S(e, f);
            Pp(this.o, "t", zb, "success", b)
        } else wp(this.G, 157), Pp(this.o, "t", zb, "failure", b)
    } catch (l) {
        wp(this.G, 158), Pp(this.o, "t", zb, Qb, b)
    } else c = this.G, S(c, T(c, 24)), b.selected = a, this.o.log("selectall", b)
};
AL.prototype.Kj = function () {
    if (OF(this.jc.b)) this.jc.setVisible(!1);
    else {
        var a = "https://translate.google.com/#" + XC(this) + "/" + YC(this) + "/" + Mg(jJ(this));
        a = Ms(yJ, {
            ij: this.Ka(),
            um: MSG_SHARE_MODULE_TITLE,
            tm: MSG_SHARE_MODULE_EMAIL,
            url: Mg(a)
        });
        YH(this.jc, a);
        this.jc.setVisible(!0);
        var b = this.o;
        Pp(b, "t", pe, pe, {
            sl: XC(this),
            tl: YC(this),
            hl: this.a,
            ql: jJ(this).length
        });
        Ep(this.G, pe);
        a = lk("a", "", J("share-panel"));
        a[0].focus();
        D(a, function (a) {
            O(a, r, function () {
                var c = a.className.split(" ")[0];
                Pp(b, "t", pe, c, {
                    sl: XC(this),
                    tl: YC(this),
                    hl: this.a,
                    ql: jJ(this).length
                });
                Ep(this.G, c)
            }, !1, this)
        }, this)
    }
};
var vL = function (a) {
    var b = new VH;
    b.c.b = a;
    ZH(b);
    WH(b, 0);
    b.g = !0;
    b.sa();
    return b
};
AL.prototype.ra = function () {
    Nh || gi || hi || ii || oL(this).focus()
};
AL.prototype.Pj = function () {
    this.ra()
};
var sL = function (a, b) {
        a && (a = a.l(), aj(b) ? (a.dir = ge, Qs(a, Sd, "20px"), Qs(a, Td, "")) : (a.dir = xd, Qs(a, Td, "20px"), Qs(a, Sd, "")))
    },
    uL = function (a, b) {
        a && (a = a.l(), aj(b) ? (Qs(a, ee, ""), Qs(a, vd, "0")) : (Qs(a, vd, ""), Qs(a, ee, "0")))
    },
    rL = function (a) {
        var b = iJ(a);
        XC(a) == eb && b != eb ? (b = source_language_detected.replace(/%\d\$s/g, a.ea(b)), uB(a.j, b)) : uB(a.j, detect_language)
    },
    DL = function (a, b) {
        var c = !1;
        D(NND, function (d) {
            d[0] == a && d[1] == b && (c = !0)
        });
        return c
    },
    EL = function (a, b) {
        var c = !1;
        D(NNDX, function (d) {
            d[0] == a && d[1] == b && (c = !0)
        });
        return c
    },
    FL = function (a) {
        var b = iJ(a);
        a = YC(a);
        return DL(b, a) || DL(b, Nb) && DL(Nb, a) && !EL(b, a) ? !0 : !1
    },
    zL = function (a) {
        a = FL(a);
        W(I("gt-brain"), a ? sc : vc);
        V(I("gt-brain"), a ? vc : sc);
        W(I("gt-nobrain"), a ? vc : sc);
        V(I("gt-nobrain"), a ? sc : vc)
    };
AL.prototype.Oj = function () {
    iI(this.Ca, XC(this));
    $I(this);
    yL(this);
    null != this.$ && NI(this.$, XC(this));
    sL(this.c, iJ(this));
    sL(this.Ub, iJ(this));
    uL(this.O, iJ(this));
    var a = jJ(this, !0),
        b = XC(this);
    this.wa && this.wa.update(a, b);
    GL(this);
    rr && zL(this);
    YJ(this.ib, iJ(this));
    a = iJ(this);
    this.ia.b = a
};
AL.prototype.vj = function () {
    rL(this);
    yL(this);
    sL(this.c, iJ(this));
    sL(this.Ub, iJ(this));
    uL(this.O, iJ(this));
    var a = iJ(this);
    this.ia.g = a;
    rr && zL(this);
    YJ(this.ib, iJ(this))
};
AL.prototype.Vj = function () {
    null != this.qb && eC(this.qb, YC(this));
    yL(this);
    var a = YC(this);
    null != this.$ && OI(this.$, a);
    sL(this.C, YC(this));
    uL(this.hc, YC(this));
    GL(this);
    op(this.ia, YC(this));
    if (rr) {
        var b = aj(a);
        D(mk("gt-br-logo"), function (a) {
            W(a, b ? tc : uc);
            V(a, b ? uc : tc)
        })
    }
    rr && zL(this)
};
var GL = function (a) {
    var b = !0;
    0 == a.Ka().length && (b = !1);
    a.Sb.setVisible(b)
};
AL.prototype.Dj = function (a) {
    this.O && this.O.setVisible(jJ(this) ? !0 : !1);
    a.qd == Ud && (HL(this, jJ(this)) ? this.Hg++ : this.ze++);
    50 >= (jJ(this) || "").length ? (V(this.b, qe), V(oL(this), qe), V(this.ye.a, qe), null != this.C && V(this.C.l(), qe), null != this.L && (W(this.L.l(), df), V(this.L.l(), cf))) : (W(this.b, qe), W(oL(this), qe), W(this.ye.a, qe), null != this.C && W(this.C.l(), qe), null != this.L && (W(this.L.l(), cf), V(this.L.l(), df)));
    this.dispatchEvent(new dJ(a.text))
};
var yL = function (a) {
    var b = a.Ra[Hb];
    a = !jJ(a);
    null != b && b.setVisible(a)
};
AL.prototype.Ej = function () {
    this.Kf && (lG(this.Kf, this.aa), kv(this.aa, !1));
    if (iJ(this) != eb) {
        var a = jJ(this, !0),
            b = iJ(this);
        this.wa && this.wa.update(a, b)
    }
    this.Ca.gb() || sD(this.V, !1)
};
var IL = function (a) {
    "u" == oL(a).name ? (a.form.action = a.lg, a.form.enctype = a.form.encoding = $a, a.form.method = "get") : null != a.Bi && lt(a.Bi) ? (a.form.action = a.Wj, a.form.enctype = a.form.encoding = "multipart/form-data", a.form.method = "post") : (a.form.action = a.Zj, a.form.enctype = a.form.encoding = $a, 2E3 < jJ(a).length ? a.form.method = "post" : a.form.method = "get")
};
AL.prototype.oi = function (a) {
    BL(this, jJ(this));
    null != this.Tb && (Fk(this.Tb), this.Tb = null);
    oL(this).name = "u";
    IL(this);
    a && nL(this.form, "act", "url");
    (a = (new aq(window.location, !0)).a.get(db)) && nL(this.form, db, a);
    this.form.submit()
};
AL.prototype.Wm = function (a) {
    a.preventDefault(); - 1 != this.form.action.indexOf("/translate_f") ? this.Tb && Ig(dh(this.Tb.value)) || (this.form.submit(), a = this.G, S(a, T(a, 301)), this.G.Da()) : "" != this.lg && Gx(jJ(this)) ? this.oi() : (qp(this.ia, "btn"), Sp(this.o, ze, "btn"), this.Ae(!1), this.yq && cF(this.X))
};
var JL = function (a) {
        0 != a.b.innerHTML.length ? a.b.innerHTML += "..." : Xm(function () {
            this.hb.b && 0 == this.b.innerHTML.length && (this.b.innerHTML = tr_in)
        }, 1500, a)
    },
    KL = function (a) {
        Ck(a.b);
        a.b.lang = "";
        a.N && Ck(a.N);
        a.Ha.b && a.Ha.b.setVisible(!1);
        a.Ma && a.Ma.setVisible(!1);
        null != a.L && a.L.setVisible(!1);
        a.ic && a.ic.display(!1);
        null != a.ve && cL(a.ve, !1);
        a.Sb && a.Sb.setVisible(!1)
    },
    CL = function (a) {
        LL();
        KL(a);
        a.v.setVisible(!1);
        a.qa && Iy(a.qa, null);
        a.Za && Ck(a.Za);
        a.oe && L(a.oe, "0");
        a.Kc && L(a.Kc, "0");
        a.je && L(a.je, "0");
        a.le && L(a.le,
            "0");
        a.pd && L(a.pd, "0");
        a.me && L(a.me, "0");
        a.ke && L(a.ke, "0");
        a.Jc && L(a.Jc, "&nbsp;");
        a.wa && a.wa.display(!1);
        rL(a);
        a.O && a.O.setVisible(!1);
        a.Xa && a.Xa.setVisible(!1);
        a.m && a.m.setVisible(!1);
        a.qe && X(a.qe, !0);
        yL(a);
        a.dispatchEvent(new cJ(a, a))
    };
AL.prototype.Ae = function (a) {
    this.Gj.reset(a);
    var b = XC(this),
        c = YC(this);
    if (0 == jJ(this).length) CL(this);
    else {
        ML(this);
        yD(this.V);
        this.R && mw(this.R, XC(this), YC(this), jJ(this), a);
        var d = new window.jstiming.Timer;
        d.name = "at";
        JL(this);
        sD(this.V, !0);
        var e = new gq;
        e.g(new gq(Vp(this.o)));
        e.g(new gq(Hx()));
        e.g(new gq(Ix()));
        e.add("kc", Fy(this.c));
        a = jJ(this);
        this.ia.m = a.substring(0, 64);
        Hp(this.G);
        var f = null != this.m && this.m.C;
        qs(this.hb, b, c, this.a, a, A(this.$j, this, a, d), f, ENCODING, e, A(this.ak, this));
        d = !1;
        HL(this,
            a) ? (this.Nf(), d = !0) : a.length >= this.F.length && (d = !0);
        d && (this.F = a, this.wj = b, this.Li = c);
        if (rr) {
            var g = I("prod-trans");
            g || (g = K(k, {
                id: "prod-trans"
            }), Ek(g, I(be)));
            e = eq(e);
            e.add("internal", 1);
            e.add("expflags", "NMT__enable_nmt_level:0");
            qs(new ls("t", "https://translate.google.com"), b, c, this.a, a, function (a) {
                Ck(g);
                X(g, !!a);
                if (a) {
                    for (var b = [], d = 0; d < P(a, 0); d++) b.push(js(a, d).kb());
                    L(g, b.join(""));
                    Qs(g, Jb, aj(c) ? ge : xd)
                }
            }, f, ENCODING, e)
        }
    }
};
AL.prototype.Fj = function () {
    if (oq(y.location).g) {
        var a = y.location.hash.substr(1);
        this.j.W() + "/" + this.D.W() + "/" + Mg(jJ(this)) == a || lw(this.R, a, this.j.J, this.D.J)
    }
};
var HL = function (a, b) {
    return "" != a.F && b[0] != a.F[0] && b[b.length - 1] != a.F[a.F.length - 1]
};
AL.prototype.Nf = function (a) {
    if ("" != this.F) {
        var b = this.G,
            c = this.F,
            d = this.Li,
            e = this.ze,
            f = T(b, 246);
        H(f, 1, d);
        H(f, 74, c.length);
        H(f, 52, c.substring(0, 64));
        c = new ap;
        H(c, 1, e);
        xi(f, 70, c);
        S(b, f);
        b = {
            sl: this.wj,
            tl: this.Li,
            ql: this.F.length
        };
        64 < this.F.length && (this.F = this.F.substr(0, 64));
        b.q = this.F;
        a && (b[a] = 1);
        b.pc = this.ze;
        this.ze = this.Hg;
        this.Hg = 0;
        this.o.log("fq", b);
        this.F = ""
    }
};
AL.prototype.$j = function (a, b, c) {
    this.m && this.m.setVisible(!1);
    LL();
    try {
        this.ue = Gx(a);
        XC(this) == eb && am(c, 2) && (this.ue || am(c, 3) ? Ky(this.qa, "") : Ky(this.qa, Q(c, 2)));
        NL(this, am(c, 8) ? new ds(c.data[8]) : null);
        var d = YC(this);
        am(c, 9) && (b.tick("_start", void 0, 1), b.tick("st", "_start", em(c, 9) + 1));
        this.b.parentNode.parentNode.style.display = "";
        Oy(this.qa);
        var e = [],
            f = [],
            g = [],
            l = "";
        this.b.lang = d;
        Ck(this.b);
        var m = Q(c, 2);
        if (0 < P(c, 0))
            for (var p = 0; p < P(c, 0); p++) {
                var q = js(c, p);
                am(q, 2) && e.push(Q(q, 2));
                am(q, 3) && f.push(Q(q,
                    3));
                am(q, 0) && q.kb() && g.push(Or(q, 4, 0));
                if (0 < P(q, 5)) {
                    for (var F = 0; F < P(q, 5); F++) l += cm(q, 5, F) + " ";
                    l += "\n"
                }
            }
        this.Jc && (this.Jc.innerHTML = Og(Wg(l)));
        l = "";
        if (bH(this.g, c.zb(), m, d, this.a)) l = cH(this.g);
        else
            for (Ck(this.b), p = 0; p < P(c, 0); p++) {
                q = js(c, p);
                var B = K(La, {
                    title: Q(q, 1)
                });
                B.innerHTML = Og(Wg(q.kb()));
                this.b.appendChild(B);
                l += $k(B)
            }
        null != this.Sb && this.Sb.setVisible(!0);
        this.Mi(d, e.join(" "));
        if (this.Za) {
            var M = Og(Wg(dh(f.join(" "))));
            if (Ig(M)) Ck(this.Za);
            else {
                var fa = aj(m) ? ee : vd;
                this.Za.innerHTML = M;
                this.Za.style.textAlign =
                    fa;
                if (m != this.Uj) {
                    if (!z(this.If.c[m])) {
                        var da = this.a;
                        m != da && (VB(m), VB(da))
                    }
                    this.Uj = m
                }
            }
        }
        if (am(c, 7)) {
            var Lb = this.m,
                Zc = Q(new cs(c.data[7]), 0),
                Bb = Q(new cs(c.data[7]), 1),
                Wm = Pr(new cs(c.data[7]), 5),
                Qk = jJ(this);
            var Rk = Kr((new cs(c.data[7])).data, 2);
            lI(Lb, {
                xk: Zc,
                Je: Bb,
                Gh: Wm,
                Ji: Qk,
                Zf: Rk,
                Wi: XC(this)
            });
            this.m.C = !0
        }
        this.dispatchEvent(new cJ(this, this));
        if (this.oe && this.Kc && this.je && this.pd && this.me && this.ke && this.le) {
            for (M = B = q = p = f = e = 0; M < g.length; M++) 0 == g[M] ? e++ : 3 == g[M] ? f++ : 1 == g[M] ? p++ : 2 == g[M] ? q++ : 10 == g[M] && B++;
            this.oe.innerHTML = (p + q).toString();
            this.Kc.innerHTML = p.toString();
            this.je.innerHTML = q.toString();
            this.le.innerHTML = B.toString();
            this.pd.innerHTML = (e + f).toString();
            this.me.innerHTML = e.toString();
            this.ke.innerHTML = f.toString()
        }
        var Xi = Lg(l);
        if ("" != this.lg && this.ue && (null != this.Lf && this.Lf.Hk(), this.b.innerHTML = '<a href="javascript:ctr._submitUrl(true);" title="' + url_hyperlink_tooltip + '">' + Wg(a) + "</a>", 0 != Xi.length && Xi != a)) {
            var Yi = K(La, {
                title: a
            });
            Yi.innerHTML = Og(Wg(" (" + Xi + ")"));
            this.b.appendChild(Yi)
        }
        this.qe &&
        X(this.qe, !1);
        this.b.parentNode.dir = aj(d) ? ge : xd;
        yL(this);
        b.tick("prt");
        if (null != this.J) {
            var uE = this.G;
            S(uE, T(uE, 249));
            this.o.log("ftrans", {
                ttl: this.Fi - this.J,
                ttt: (new Date).getTime() - this.J
            });
            this.J = null
        }
        var vE = this.v;
        vE.c.reset();
        vE.c.push(a, m, d, c);
        null != this.ve && cL(this.ve, !am(c, 3));
        this.Ha.b && this.Ha.b.setVisible(!am(c, 3));
        this.Ma && this.Ma.setVisible(!am(c, 3));
        var RL = this.Ka(!0),
            SL = YC(this);
        this.ic && this.ic.update(RL, SL, c);
        this.Xa && this.Xa.setVisible(!0);
        null != this.L && this.L.setVisible(Kx(c));
        var TL = Mg(a).length;
        a = {};
        a.sl = m;
        a.tl = d;
        a.size = TL;
        a.e = EXPERIMENT_IDS.join(",");
        b.tick("ol");
        window.jstiming.sn = ff;
        window.jstiming.report(b, a)
    } catch (Bg) {
        throw null.Tm("Ajax translation failed.", Bg), b = {}, Bg.name && (b.name = Bg.name), Bg.message && (b.message = Bg.message), Bg.stack && (b.stack = Bg.stack.substr(0, 2E3)), this.o.log("transerr", b), Bg;
    }
    rr && !FL(this) && (this.b.innerHTML = "NMT NOT SUPPORTED FOR " + iJ(this) + "->" + YC(this))
};
var LL = function () {
    var a = I(de);
    X(I("gt-res-error"), !1);
    X(a, !0)
};
AL.prototype.ak = function (a) {
    a = 413 == a ? MSG_REQUEST_TOO_BIG : MSG_TRANSLATION_ERROR;
    KL(this);
    var b = I("gt-res-error");
    X(I(de), !1);
    Ck(b);
    b.appendChild(document.createTextNode(a));
    X(b, !0)
};
AL.prototype.zj = function (a) {
    var b = cH(a.target),
        c = a.target.Rh();
    a = this.hb;
    var d = A(this.Mi, this, c),
        e = new gq,
        f = new gq;
    e.set(sb, a.c);
    e.set("sl", c);
    c = a.a + oa;
    e.set("dt", "rm");
    f.set("q", b);
    ns(a, c, e, f, A(a.o, a, d), void 0);
    this.dispatchEvent(new cJ(this, this))
};
AL.prototype.Mi = function (a, b) {
    if (this.N)
        if (b = Og(Wg(dh(b))), Ig(b)) Ck(this.N);
        else {
            var c = aj(a) ? ee : vd;
            this.N.innerHTML = b;
            this.N.style.textAlign = c;
            a != this.Ij && (z(this.If.b[a]) || (b = this.a, a != b && (VB(a), VB(b))), this.Ij = a)
        }
};
var xL = function (a) {
        for (var b = a.V, c = vD(b), d = [], e = [], f = 0; f < b.a.g.length; ++f) d.push(b.a.g[f]);
        for (f = 0; f < b.a.j.length; ++f) e.push(b.a.j[f]);
        c.slh = d.join("|");
        c.tlh = e.join("|");
        b = b.a;
        d = [];
        e = [];
        for (f = 0; f < b.g.length; ++f) {
            var g = b.g[f]; - 1 == lg(d, g) && (d.push(g), e.push(g))
        }
        for (f = 0; f < b.j.length; ++f) g = b.j[f], -1 == lg(e, g) && e.push(g);
        c.soph = 2 < d.length && 3 < e.length;
        c.hl = a.a;
        null != a.J && (a.Gg = (new Date).getTime() - a.J, c.ttnc = a.Gg);
        c.uetrans = a.g.ra;
        c.eotf = a.re;
        a.o.log("hready", c);
        a = a.G;
        S(a, T(a, 216))
    },
    qL = function (a) {
        var b =
            FEATURE_STICKINESS;
        a.Mf = b;
        b = new mL(b);
        if (am(b, 2)) {
            var c = a.If,
                d = new kL(b.data[2]);
            c.a = {};
            c.a[Cc] = new TB;
            for (var e, f = 0; f < P(d, 3); ++f)
                if (e = new iL($l(d, 3, f)), 0 == !!Pr(e, 1))
                    for (var g in c.a) c.a[g].update(Q(e, 0), !1, "");
            c.c = {};
            for (f = 0; f < P(d, 1); ++f) e = new iL($l(d, 1, f)), c.c[Q(e, 0)] = !!Pr(e, 1);
            c.b = {};
            for (f = 0; f < P(d, 2); ++f) e = new iL($l(d, 2, f)), c.b[Q(e, 0)] = !!Pr(e, 1);
            for (f = 0; f < P(d, 9); ++f) g = new jL($l(d, 9, f)), (am(g, 3) ? YB(c, Q(g, 3), !0) : YB(c, Cc, !0)).update(Q(g, 0), Pr(g, 1), Q(g, 2))
        }
        a.re = Pr(b, 1);
        d = new lL(b.data[0]);
        f = [];
        c = [];
        for (g = 0; g < P(d, 0); ++g) e = cm(d, 0, g), f.push(e);
        g = a.qa;
        for (e = 0; e < f.length; ++e) g.g.push(f[e]);
        for (g = 0; g < P(d, 1); ++g) e = cm(d, 1, g), c.push(e);
        d = a.qa;
        for (f = 0; f < c.length; ++f) d.j.push(c[f]);
        if (a.Qi) {
            b = new lL(b.data[0]);
            c = [];
            d = [];
            for (f = 0; f < P(b, 0); ++f) c.push(cm(b, 0, f));
            for (f = 0; f < P(b, 1); ++f) d.push(cm(b, 1, f));
            am(b, 4) && (c = [Q(b, 4)]);
            am(b, 5) && (d = [Q(b, 5)]);
            2E3 < jJ(a).length || window.location.href.match(/^[^#]+(\?|&)sl=([A-Za-z-]+)/) || (window.location.href.match(/^[^#]+(\?|&)tl=([A-Za-z-]+)/) ? a.j.ac(eb) : (Pr(b, 3) ? a.j.ac(eb) :
                a.j.ac(c[0]), a.D.ac(d[0])));
            a.qa.o(XC(a));
            a.qa.m(YC(a))
        }
        NL(a, null);
        Oy(a.qa);
        b = a.qa;
        Jy(b.O, b.g, b.C, b.a);
        a = a.qa;
        Jy(a.J, a.j, a.L, a.b)
    },
    NL = function (a, b) {
        if (a.qa) {
            if (b) {
                for (var c = [], d = 0; d < P(b, 0); ++d) {
                    var e = cm(b, 0, d);
                    c.push(e)
                }
                Iy(a.qa, c)
            } else Iy(a.qa, null);
            b = a.qa;
            c = b.a == eb ? "" : b.a;
            d = Ry(b.g, c);
            d.push(b.a);
            b.V = zg(d);
            d = d.concat(Ry(b.F.a, c));
            b.aa.update(d);
            a = a.qa;
            b = Ry(a.j, a.b);
            b.push(a.b);
            a.X.update(b)
        }
    },
    $I = function (a) {
        null != a.Ia && (X(a.Ia.j, !0), eC(a.Ia, XC(a)))
    },
    ML = function (a) {
        null != a.Ia && (a = a.Ia, fC(a) && (Sp(a.g,
            "trs"), Sp(a.g, $c, 1)), a.isEnabled() && 0 <= a.a.indexOf("-k0-") && (Sp(a.g, "vkb"), Sp(a.g, $c, 2)), a.isEnabled() && Io(a.a) && (Sp(a.g, "hwt"), Sp(a.g, $c, 5)))
    },
    tL = function (a) {
        var b = lk("A", null, I(je));
        b && 1 == b.length && (b = b[0], O(b, r, function (a) {
            a.preventDefault();
            a = this.xi;
            aJ(a, !1);
            YI(a, !0);
            XI("gt-res-data", !1, !0);
            XI(je, !1, !1);
            IL(a.a);
            a = this.G;
            S(a, T(a, 296));
            Pp(this.o, "t", "ib", "d", {})
        }, !1, a));
        (b = lk("A", null, I("select_text"))) && 1 == b.length && (b = b[0], O(b, r, function (a) {
            a.preventDefault();
            a = this.xi;
            YI(a, !1);
            aJ(a, !0);
            XI("gt-res-data", !0, !0);
            XI(je, !0, !1);
            IL(a.a);
            a = this.G;
            S(a, T(a, 295));
            Pp(this.o, "t", "ib", "t", {});
            this.ra()
        }, !1, a))
    },
    kw = function (a, b, c, d, e) {
        null != e && qp(a.ia, e);
        a.Qi = !1;
        if (b) {
            var f = void 0;
            "tws_lsugg" == e && (f = 3);
            a.qa.o(b, f)
        }
        c && a.qa.m(c);
        jJ(a) != d && BL(a, d);
        e && Sp(a.o, ze, e);
        a.Ae(!1)
    };
AL.prototype.ea = function (a) {
    return null != a ? tB(this.j, a) : tB(this.j)
};
AL.prototype.dc = function (a) {
    return null != a ? tB(this.D, a) : tB(this.D)
};
var iJ = function (a) {
        var b = a.j.W();
        a = a.qa.c;
        b == eb && "" != a && (b = a);
        return b
    },
    XC = function (a) {
        return a.j.W()
    },
    YC = function (a) {
        return a.D.W()
    },
    oL = function (a) {
        return a.c.l()
    },
    jJ = function (a, b) {
        return b && a.m && a.m.b ? Lg(a.m.c) : Lg(a.c.W())
    };
AL.prototype.Ka = function (a) {
    return cH(this.g, a)
};
var BL = function (a, b) {
        a.c.b(b);
        if (a.X) {
            var c = a.X,
                d = a.qa.a;
            a = a.qa.b;
            c.j = lF(b);
            c.b = d;
            c.c = a;
            cF(c)
        }
    },
    wL = function (a) {
        var b = K(k, {
            id: Fc,
            style: Kb
        });
        Dk(b, I(Gc));
        var c = new Hu(MSG_EDIT_POPUP, new tw("trans-edit-button"));
        c.Y(b);
        Bk(b, MSG_SUGGEST_AN_EDIT);
        c.setVisible(!1);
        O(c, n, a.Bj, !1, a);
        return c
    };
AL.prototype.Bj = function () {
    if (jJ(this)) {
        fH(this.g);
        var a = this.G;
        S(a, T(a, 26));
        Pp(this.o, "t", "editclk", "1", {
            sl: XC(this),
            tl: YC(this)
        })
    }
};
AL.prototype.Mj = function () {
    vr && (this.we = new gL(this.a, this, this.sj), this.we.sa(document.body))
};
AL.prototype._submitUrl = AL.prototype.oi;

function _csi(a) {
    window.jstiming.load.name = a;
    window.jstiming.sn = ff;
    try {
        window[OL.a] && window[OL.a].resT && window[OL.a].resT()
    } catch (b) {
        null.Dq("No CSI (window.external.resT) found.", b)
    }
}
Rf("_csi", _csi);
var OL = function () {
    var a = I("hl").value,
        b = lp.M();
    b.c = 1;
    b.o = a;
    a = rp.M();
    b = y.location.href;
    var c = b.search(Nn),
        d = Mn(b, 0, db, c);
    if (0 > d) b = null;
    else {
        var e = b.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += 9;
        b = Ng(b.substr(d, e - d))
    }
    a.a = new Ao(b || "0", window.EXPERIMENT_IDS);
    il(a, a.a);
    b = new bJ;
    b = A(b.a, b);
    window.gbar && window.gbar.elc && (window.gbar.elc(b), window.gbar.elr && b(window.gbar.elr()));
    y.h = new jw;
    b = new sJ;
    b.j = y.h;
    b.J = de;
    b.ea = WEB_TRANSLATION_PATH;
    b.aa = TEXT_TRANSLATION_PATH;
    b.V = FILE_TRANSLATION_PATH;
    b.ma = null != window.INPUT_SUGGESTION_SERVER_URL ?
        window.INPUT_SUGGESTION_SERVER_URL : "";
    b.R = Be;
    b.c = "gt-sl-sugg";
    b.g = "gt-tl-sugg";
    b.F = "file_div";
    b.C = "file";
    b.O = (new Date).getTime();
    S(a, T(a, 247));
    b.D = MAX_ALTERNATIVES_ROUNDTRIP_RESULTS;
    b.o = !0;
    b.L = LOW_CONFIDENCE_THRESHOLD;
    y.ctr = new AL(b)
};
OL.a = "external";
Rf("Init", OL);
if (window.jstiming) {
    window.jstiming.Qd = {};
    window.jstiming.Zg = 1;
    var PL = function (a, b, c) {
            var d = a.t[b],
                e = a.t.start;
            if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
        },
        QL = function (a, b, c) {
            var d = "";
            window.jstiming.srt && (d += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
            window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" +
                    window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (F) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += "&p=s");
                if (e().wasNpnNegotiated) {
                    d += "&npn=1";
                    var f = e().npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var g = a.t,
                l = g.start;
            e = [];
            f = [];
            for (var m in g)
                if (m != Ge && 0 != m.indexOf("_")) {
                    var p = g[m][1];
                    p ? g[p] && f.push(m + "." + PL(a, m, g[p][0])) : l && e.push(m + "." + PL(a,
                        m))
                }
            delete g.start;
            if (b)
                for (var q in b) d += "&" + q + "=" + b[q];
            (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.jstiming.sn || ff) + "&action=", a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        },
        UL = function (a, b, c) {
            a = QL(a, b, c);
            if (!a) return "";
            b = new Image;
            var d = window.jstiming.Zg++;
            window.jstiming.Qd[d] = b;
            b.onload = b.onerror = function () {
                window.jstiming && delete window.jstiming.Qd[d]
            };
            b.src = a;
            b = null;
            return a
        };
    window.jstiming.report = function (a, b, c) {
        var d = document.visibilityState,
            e = of;
        d || (d = document.webkitVisibilityState, e = "webkitvisibilitychange");
        if ("prerender" == d) {
            var f = !1,
                g = function () {
                    if (!f) {
                        b ? b.prerender = "1" : b = {
                            prerender: "1"
                        };
                        if ("prerender" == (document.visibilityState || document.webkitVisibilityState)) var d = !1;
                        else UL(a, b, c), d = !0;
                        d && (f = !0, document.removeEventListener(e, g, !1))
                    }
                };
            document.addEventListener(e, g, !1);
            return ""
        }
        return UL(a, b, c)
    }
};
window.jstiming.load.tick('jl');