(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-49956071"], {
    "06c5": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        }
        ));
        n("a630"),
        n("fb6a"),
        n("b0c0"),
        n("d3b7"),
        n("25f0"),
        n("3ca3");
        var r = n("6b75");
        function a(t, e) {
            if (t) {
                if ("string" === typeof t)
                    return Object(r["a"])(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Object(r["a"])(t, e) : void 0
            }
        }
    },
    1276: function(t, e, n) {
        "use strict";
        var r = n("d784")
          , a = n("44e7")
          , i = n("825a")
          , o = n("1d80")
          , c = n("4840")
          , s = n("8aa5")
          , u = n("50c4")
          , l = n("14c3")
          , d = n("9263")
          , f = n("d039")
          , p = [].push
          , g = Math.min
          , h = 4294967295
          , v = !f((function() {
            return !RegExp(h, "y")
        }
        ));
        r("split", 2, (function(t, e, n) {
            var r;
            return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, n) {
                var r = String(o(this))
                  , i = void 0 === n ? h : n >>> 0;
                if (0 === i)
                    return [];
                if (void 0 === t)
                    return [r];
                if (!a(t))
                    return e.call(r, t, i);
                var c, s, u, l = [], f = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), g = 0, v = new RegExp(t.source,f + "g");
                while (c = d.call(v, r)) {
                    if (s = v.lastIndex,
                    s > g && (l.push(r.slice(g, c.index)),
                    c.length > 1 && c.index < r.length && p.apply(l, c.slice(1)),
                    u = c[0].length,
                    g = s,
                    l.length >= i))
                        break;
                    v.lastIndex === c.index && v.lastIndex++
                }
                return g === r.length ? !u && v.test("") || l.push("") : l.push(r.slice(g)),
                l.length > i ? l.slice(0, i) : l
            }
            : "0".split(void 0, 0).length ? function(t, n) {
                return void 0 === t && 0 === n ? [] : e.call(this, t, n)
            }
            : e,
            [function(e, n) {
                var a = o(this)
                  , i = void 0 == e ? void 0 : e[t];
                return void 0 !== i ? i.call(e, a, n) : r.call(String(a), e, n)
            }
            , function(t, a) {
                var o = n(r, t, this, a, r !== e);
                if (o.done)
                    return o.value;
                var d = i(t)
                  , f = String(this)
                  , p = c(d, RegExp)
                  , b = d.unicode
                  , m = (d.ignoreCase ? "i" : "") + (d.multiline ? "m" : "") + (d.unicode ? "u" : "") + (v ? "y" : "g")
                  , y = new p(v ? d : "^(?:" + d.source + ")",m)
                  , x = void 0 === a ? h : a >>> 0;
                if (0 === x)
                    return [];
                if (0 === f.length)
                    return null === l(y, f) ? [f] : [];
                var w = 0
                  , O = 0
                  , S = [];
                while (O < f.length) {
                    y.lastIndex = v ? O : 0;
                    var L, _ = l(y, v ? f : f.slice(O));
                    if (null === _ || (L = g(u(y.lastIndex + (v ? 0 : O)), f.length)) === w)
                        O = s(f, O, b);
                    else {
                        if (S.push(f.slice(w, O)),
                        S.length === x)
                            return S;
                        for (var C = 1; C <= _.length - 1; C++)
                            if (S.push(_[C]),
                            S.length === x)
                                return S;
                        O = w = L
                    }
                }
                return S.push(f.slice(w)),
                S
            }
            ]
        }
        ), !v)
    },
    "159b": function(t, e, n) {
        var r = n("da84")
          , a = n("fdbc")
          , i = n("17c2")
          , o = n("9112");
        for (var c in a) {
            var s = r[c]
              , u = s && s.prototype;
            if (u && u.forEach !== i)
                try {
                    o(u, "forEach", i)
                } catch (l) {
                    u.forEach = i
                }
        }
    },
    "1cbe": function(t, e, n) {
        "use strict";
        n("1df1")
    },
    "1dee": function(t, e, n) {},
    "1df1": function(t, e, n) {},
    2128: function(t, e, n) {
        "use strict";
        n("219b")
    },
    "219b": function(t, e, n) {},
    "21f7": function(t, e, n) {
        t.exports = n.p + "img/logo.ab5be78e.gif"
    },
    "25f0": function(t, e, n) {
        "use strict";
        var r = n("6eeb")
          , a = n("825a")
          , i = n("d039")
          , o = n("ad6d")
          , c = "toString"
          , s = RegExp.prototype
          , u = s[c]
          , l = i((function() {
            return "/a/b" != u.call({
                source: "a",
                flags: "b"
            })
        }
        ))
          , d = u.name != c;
        (l || d) && r(RegExp.prototype, c, (function() {
            var t = a(this)
              , e = String(t.source)
              , n = t.flags
              , r = String(void 0 === n && t instanceof RegExp && !("flags"in s) ? o.call(t) : n);
            return "/" + e + "/" + r
        }
        ), {
            unsafe: !0
        })
    },
    "3ca3": function(t, e, n) {
        "use strict";
        var r = n("6547").charAt
          , a = n("69f3")
          , i = n("7dd0")
          , o = "String Iterator"
          , c = a.set
          , s = a.getterFor(o);
        i(String, "String", (function(t) {
            c(this, {
                type: o,
                string: String(t),
                index: 0
            })
        }
        ), (function() {
            var t, e = s(this), n = e.string, a = e.index;
            return a >= n.length ? {
                value: void 0,
                done: !0
            } : (t = r(n, a),
            e.index += t.length,
            {
                value: t,
                done: !1
            })
        }
        ))
    },
    "467fe": function(t, e, n) {
        "use strict";
        n("817d")
    },
    "4df4": function(t, e, n) {
        "use strict";
        var r = n("0366")
          , a = n("7b0b")
          , i = n("9bdd")
          , o = n("e95a")
          , c = n("50c4")
          , s = n("8418")
          , u = n("35a1");
        t.exports = function(t) {
            var e, n, l, d, f, p, g = a(t), h = "function" == typeof this ? this : Array, v = arguments.length, b = v > 1 ? arguments[1] : void 0, m = void 0 !== b, y = u(g), x = 0;
            if (m && (b = r(b, v > 2 ? arguments[2] : void 0, 2)),
            void 0 == y || h == Array && o(y))
                for (e = c(g.length),
                n = new h(e); e > x; x++)
                    p = m ? b(g[x], x) : g[x],
                    s(n, x, p);
            else
                for (d = y.call(g),
                f = d.next,
                n = new h; !(l = f.call(d)).done; x++)
                    p = m ? i(d, b, [l.value, x], !0) : l.value,
                    s(n, x, p);
            return n.length = x,
            n
        }
    },
    5530: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }
        ));
        n("a4d3"),
        n("4de4"),
        n("4160"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("159b");
        var r = n("ade3");
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(n), !0).forEach((function(e) {
                    Object(r["a"])(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
    },
    "5cf9": function(t, e, n) {
        "use strict";
        n("72d6")
    },
    6443: function(t, e, n) {
        "use strict";
        n.d(e, "c", (function() {
            return o
        }
        )),
        n.d(e, "j", (function() {
            return c
        }
        )),
        n.d(e, "g", (function() {
            return s
        }
        )),
        n.d(e, "m", (function() {
            return u
        }
        )),
        n.d(e, "l", (function() {
            return l
        }
        )),
        n.d(e, "h", (function() {
            return d
        }
        )),
        n.d(e, "o", (function() {
            return f
        }
        )),
        n.d(e, "k", (function() {
            return p
        }
        )),
        n.d(e, "v", (function() {
            return g
        }
        )),
        n.d(e, "i", (function() {
            return h
        }
        )),
        n.d(e, "z", (function() {
            return v
        }
        )),
        n.d(e, "n", (function() {
            return b
        }
        )),
        n.d(e, "A", (function() {
            return m
        }
        )),
        n.d(e, "s", (function() {
            return y
        }
        )),
        n.d(e, "t", (function() {
            return x
        }
        )),
        n.d(e, "w", (function() {
            return w
        }
        )),
        n.d(e, "x", (function() {
            return O
        }
        )),
        n.d(e, "u", (function() {
            return S
        }
        )),
        n.d(e, "d", (function() {
            return L
        }
        )),
        n.d(e, "B", (function() {
            return _
        }
        )),
        n.d(e, "b", (function() {
            return C
        }
        )),
        n.d(e, "p", (function() {
            return j
        }
        )),
        n.d(e, "q", (function() {
            return k
        }
        )),
        n.d(e, "e", (function() {
            return I
        }
        )),
        n.d(e, "f", (function() {
            return D
        }
        )),
        n.d(e, "a", (function() {
            return T
        }
        )),
        n.d(e, "y", (function() {
            return A
        }
        )),
        n.d(e, "r", (function() {
            return P
        }
        ));
        var r = n("365c")
          , a = n("b775")
          , i = n("85c0");
        function o(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.apply,
                method: "post",
                data: t
            })
        }
        function c(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.getByUserId,
                method: "post",
                data: t
            })
        }
        function s(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.gainRealSignMessage,
                method: "post",
                data: t
            })
        }
        function u(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.getCertificationUrl,
                method: "post",
                data: t
            })
        }
        function l(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.getCertificationSync,
                method: "post",
                data: t
            })
        }
        function d(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.gainUserElectronicContractUrl,
                method: "post",
                data: t
            })
        }
        function f(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.getPackOutDynamicList,
                method: "get",
                params: t
            })
        }
        function p(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.getCategoryPrice,
                method: "get",
                params: t
            })
        }
        function g(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.getTaskHallPage,
                method: "post",
                data: t
            })
        }
        function h(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.getActivity,
                method: "post",
                data: t
            })
        }
        function v(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.upReviewOver,
                method: "post",
                data: t
            })
        }
        function b(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.getLabelList,
                method: "post",
                data: t
            })
        }
        function m(t) {
            return Object(a["a"])({
                url: r["a"].designer.applyer.updateInitialDesignDocument,
                method: "post",
                data: t
            })
        }
        function y(t) {
            return Object(a["a"])({
                url: r["a"].designer.packOut.getStylistTaskList,
                method: "post",
                data: t
            })
        }
        function x(t) {
            return Object(a["a"])({
                url: r["a"].designer.packOut.getStylistTaskParticulars,
                method: "post",
                data: t
            })
        }
        function w(t) {
            return Object(a["a"])({
                url: r["a"].designer.packOut.getTaskdetail,
                method: "get",
                params: t
            })
        }
        function O(t) {
            return Object(a["a"])({
                url: r["a"].designer.packOut.getTheTask,
                method: "post",
                data: t
            })
        }
        function S(t) {
            return Object(a["a"])({
                url: r["a"].designer.packOut.getSubmitAudit,
                method: "post",
                data: t
            })
        }
        function L(t) {
            return Object(a["a"])({
                url: r["a"].designer.packOut.closeTask,
                method: "post",
                data: t
            })
        }
        function _(t, e) {
            return Object(i["a"])(r["a"].designer.packOut.zipDownload, t, e)
        }
        function C(t, e) {
            return Object(i["a"])(r["a"].designer.packOut.allDocument, t, e)
        }
        function j(t) {
            return Object(a["a"])({
                url: r["a"].designer.financial.getSettlementListPage,
                method: "post",
                data: t
            })
        }
        function k(t) {
            return Object(a["a"])({
                url: r["a"].designer.financial.getSettlementMoney,
                method: "post",
                data: t
            })
        }
        function I(t) {
            return Object(a["a"])({
                url: r["a"].designer.financial.gainFinanceSettlemenWithdraw,
                method: "post",
                data: t
            })
        }
        function D(t) {
            return Object(a["a"])({
                url: r["a"].designer.financial.gainFinanceWithdrawalAccount,
                method: "post",
                data: t
            })
        }
        function T(t) {
            return Object(a["a"])({
                url: r["a"].designer.financial.addFinanceWithdrawalAccount,
                method: "post",
                data: t
            })
        }
        function A(t) {
            return Object(a["a"])({
                url: r["a"].designer.financial.getWithdrawListPage,
                method: "post",
                data: t
            })
        }
        function P(t) {
            return Object(a["a"])({
                url: r["a"].designer.financial.getSettlementWithdrawList,
                method: "post",
                data: t
            })
        }
    },
    "6b75": function(t, e, n) {
        "use strict";
        function r(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        n.d(e, "a", (function() {
            return r
        }
        ))
    },
    "72d6": function(t, e, n) {},
    "77b4": function(t, e, n) {},
    8153: function(t, e, n) {
        "use strict";
        n("97c3")
    },
    "817d": function(t, e, n) {},
    8418: function(t, e, n) {
        "use strict";
        var r = n("c04e")
          , a = n("9bf2")
          , i = n("5c6c");
        t.exports = function(t, e, n) {
            var o = r(e);
            o in t ? a.f(t, o, i(0, n)) : t[o] = n
        }
    },
    "85c0": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }
        ));
        n("c975"),
        n("d3b7"),
        n("ac1f"),
        n("3ca3"),
        n("1276"),
        n("ddb0"),
        n("2b3d");
        var r = n("bc3a")
          , a = n.n(r)
          , i = n("d342");
        n("5c96");
        function o(t, e, n) {
            var r = localStorage.getItem(i["a"])
              , o = {
                url: t,
                method: "post",
                data: e,
                responseType: "blob",
                headers: {
                    token: r,
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=utf-8",
                    withCredentials: !0
                }
            };
            return a.a.request(o).then((function(t) {
                if (-1 != t.headers["content-type"].indexOf("application/json")) {
                    var e = new Blob([t.data],{
                        type: "application/json"
                    })
                      , r = new FileReader;
                    r.readAsText(e, "utf-8"),
                    r.onload = function() {
                        var t = JSON.parse(this.result);
                        n(t)
                    }
                } else
                    c(t)
            }
            )).catch((function(t) {
                return console.log(t)
            }
            ))
        }
        function c(t) {
            var e = t.headers["content-disposition"]
              , n = e.split(";")
              , r = "temp.pdf";
            for (var a in n)
                if (-1 !== n[a].indexOf("=")) {
                    var i = n[a].split("=");
                    if ("fileName" === i[0]) {
                        r = i[1];
                        break
                    }
                }
            var o = new Blob([t.data],{
                type: "application/octet-stream"
            });
            if ("undefined" !== typeof window.navigator.msSaveBlob)
                window.navigator.msSaveBlob(o, decodeURI(r));
            else {
                var c = window.URL.createObjectURL(o)
                  , s = document.createElement("a");
                s.style.display = "none",
                s.href = c,
                s.setAttribute("download", decodeURI(r)),
                "undefined" === typeof s.download && s.setAttribute("target", "_blank"),
                document.body.appendChild(s),
                s.click(),
                document.body.removeChild(s),
                window.URL.revokeObjectURL(c)
            }
        }
    },
    "88cb": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("el-container", [n("el-header", {
                staticClass: "headerBox header-nav",
                staticStyle: {
                    height: "auto"
                }
            }, [n("header-notice"), n("header-user"), n("header-navs")], 1), n("el-main", {
                class: t.newHappy ? "newYearImg3" : "",
                staticStyle: {
                    position: "relative",
                    overflow: "hidden"
                }
            }, [n("router-view")], 1), "packing" != t.$route.name && "PackagingDemand" != t.$route.name ? n("el-footer", {
                staticClass: "footer"
            }, [n("foot-top"), n("foot-bottom")], 1) : t._e()], 1)
        }
          , a = []
          , i = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", [n("div", [t.flag ? n("div", {
                staticClass: "dialogbox",
                style: "margin-top: " + t.top + "px"
            }, [n("div", {
                staticClass: "activitesDelete"
            }, [n("div", {
                staticClass: "activitesDeleteBut",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.activitesDeleteBut()
                    }
                }
            }, [n("span", {
                staticClass: "el-icon-close ",
                attrs: {
                    type: "primary"
                }
            }), n("span", {
                staticClass: "activitesDeleteCountdown"
            }, [t._v(t._s(t.nub) + "s")])])]), t._m(0)]) : n("div", {
                staticClass: "noticeBox",
                staticStyle: {
                    height: "46px"
                }
            }, [n("div", {
                staticClass: "comBox"
            }, [n("div", {
                staticClass: "scroll_vertical",
                attrs: {
                    id: "viewlist"
                }
            }, [n("div", {
                staticClass: "box"
            }, [n("el-carousel", {
                attrs: {
                    direction: "vertical",
                    autoplay: t.isAutoplay,
                    interval: 5e3,
                    loop: !0
                }
            }, t._l(t.contentList, (function(e, r) {
                return n("el-carousel-item", {
                    key: r
                }, [n("li", {
                    staticClass: "flex noticeDv",
                    staticStyle: {
                        color: "#000",
                        "font-size": "16px",
                        cursor: "pointer"
                    },
                    attrs: {
                        title: "点击查看公告详情"
                    },
                    on: {
                        click: function(n) {
                            return t.newsDetail(e.id)
                        }
                    }
                }, [n("span", {
                    domProps: {
                        innerHTML: t._s(e.title)
                    }
                })])])
            }
            )), 1)], 1)])])])]), t._e()])
        }
          , o = [function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("p", {
                staticStyle: {
                    height: "255px"
                }
            }, [r("img", {
                staticStyle: {
                    height: "300px",
                    width: "100%"
                },
                attrs: {
                    src: n("ba66")
                }
            })])
        }
        ]
          , c = (n("99af"),
        n("f7e0"),
        {
            name: "HeaderUser",
            data: function() {
                return {
                    ids: [176, 178, 203],
                    contentList: [{
                        content: "尊敬的客户，近期纸价波动频繁，请各位及早安排下单。"
                    }],
                    flag: !1,
                    nub: 5,
                    time: "",
                    top: 0,
                    dialogVisible: !1,
                    isAutoplay: !1
                }
            },
            watch: {
                "$store.getters.noticeList": function(t) {
                    var e = this
                      , n = {
                        data: t
                    };
                    n.data.length > 1 ? (e.contentList = n.data.concat(n.data),
                    e.isAutoplay = !0) : n.data.length > 0 && (e.contentList = [].concat(n.data))
                }
            },
            methods: {
                getDesc: function() {
                    var t = this;
                    0 == this.$store.getters.noticeList.length ? t.$store.dispatch("getTopNotice") : (t.contentList = t.$store.getters.noticeList,
                    t.isAutoplay = !0)
                },
                activitesDeleteBut: function() {
                    if (1 == this.dialogVisible) {
                        var t = new Date
                          , e = t.getHours()
                          , n = localStorage.getItem("activitesDeleteNumber") ? 1 * localStorage.getItem("activitesDeleteNumber") + 1 : 1;
                        this.dialogVisible = !1,
                        localStorage.setItem("activitesDeleteTime", t.getDate()),
                        localStorage.setItem("activitesDeleteHours", e),
                        localStorage.setItem("activitesDeleteNumber", n)
                    }
                },
                CountdownTime: function() {
                    var t = this;
                    !0 === this.dialogVisible && (this.time = setInterval((function() {
                        t.nub--,
                        0 == t.nub && (clearInterval(t.time),
                        t.activitesDeleteBut())
                    }
                    ), 1e3))
                },
                newsDetail: function(t) {
                    console.log(t),
                    this.$router.push({
                        path: "/news/detail",
                        query: {
                            id: t
                        }
                    })
                },
                newsDetails: function() {
                    this.dialogVisible = !1,
                    this.$router.push({
                        path: "/news/detail",
                        query: {
                            id: "177"
                        }
                    })
                },
                deleteBun: function() {
                    this.activitesDeleteBut()
                }
            },
            created: function() {
                this.getDesc();
                var t = new Date
                  , e = t.getHours()
                  , n = t.getMonth()
                  , r = t.getDate();
                if (r >= 19 && 5 == n || r <= 18 && 6 == n)
                    if (!localStorage.getItem("activitesDeleteTime") || localStorage.getItem("activitesDeleteTime") < t.getDate())
                        localStorage.setItem("activitesDeleteNumber", 1),
                        this.dialogVisible = !0;
                    else if (localStorage.getItem("activitesDeleteNumber") <= 3) {
                        var a = 1 * e - 1 * localStorage.getItem("activitesDeleteHours");
                        a > 3 && (this.dialogVisible = !0)
                    }
                this.CountdownTime()
            }
        })
          , s = c
          , u = (n("8153"),
        n("2877"))
          , l = Object(u["a"])(s, i, o, !1, null, null, null)
          , d = l.exports
          , f = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticStyle: {
                    position: "relative"
                },
                attrs: {
                    id: "topbar"
                }
            }, [n("div", {
                staticClass: "flex comBox"
            }, [n("div", {
                staticClass: "topbarLt"
            }, [n("a", {
                attrs: {
                    href: "/"
                }
            }, [t._v("傲彩首页")]), n("span", {
                staticClass: "topbarLtSpn"
            }, [t._v("哞，欢迎来做包装！")]), null != t.userInfo ? n("span", [n("router-link", {
                attrs: {
                    to: "/user/index"
                }
            }, [t._v(t._s(t.userInfo.mobile))]), n("el-divider", {
                attrs: {
                    direction: "vertical"
                }
            }), n("el-link", {
                attrs: {
                    type: "text"
                },
                on: {
                    click: t.logout
                }
            }, [t._v("退出")])], 1) : t._e(), n("div", {
                staticStyle: {
                    display: "inline-block",
                    "padding-left": "24px"
                }
            }, [t._m(0), n("span", {
                staticStyle: {
                    cursor: "pointer"
                }
            }, [n("a", {
                staticClass: "magichand",
                on: {
                    click: t.toDesigner
                }
            }, [t._v("设计师入驻")])])])]), n("ul", {
                staticClass: "flex topbarRt"
            }, [t._m(1), t._m(2), n("li", {
                staticClass: "topbarLogin"
            }, [null != t.userInfo ? n("div", {
                staticClass: "useLgBox"
            }, [n("el-menu", {
                staticClass: "userNav cart-nav",
                attrs: {
                    mode: "horizontal",
                    router: "",
                    "active-text-color": "#fff",
                    "text-color": "#fff"
                }
            }, [n("el-submenu", {
                attrs: {
                    index: "1",
                    "popper-class": "popUserNav"
                }
            }, [n("template", {
                slot: "title"
            }, [n("i", {
                staticClass: "el-icon-user"
            }), n("router-link", {
                attrs: {
                    to: "/user/index"
                }
            }, [t._v("用户中心")])], 1), n("el-menu-item", {
                attrs: {
                    index: "/user/orderlist"
                }
            }, [t._v("我的订单")]), n("el-menu-item", {
                attrs: {
                    index: "/user/userAddressList"
                }
            }, [t._v("收货地址")]), n("el-menu-item", {
                attrs: {
                    index: "#"
                },
                on: {
                    click: t.logout
                }
            }, [t._v("退出")])], 2)], 1)], 1) : n("p", {
                staticClass: "LgBox"
            }, [n("router-link", {
                staticClass: "topbarLogSp",
                attrs: {
                    to: "/login"
                }
            }, [t._v("登录")]), n("router-link", {
                attrs: {
                    to: "/register"
                }
            }, [t._v("注册")])], 1)])])])])
        }
          , p = [function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("span", [n("a", {
                staticClass: "magichand",
                attrs: {
                    href: "https://www.iaocai.com/magichand",
                    target: "_blank"
                }
            }, [t._v("下载魔术手")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("li", {
                staticClass: "topbarRtxt"
            }, [n("span", [t._v("客服热线：0755-36567904")]), t._v(" "), n("span", [t._v("18820487869")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("li", {
                staticClass: "topbarRtxt"
            }, [n("a", {
                staticClass: "afterQq",
                attrs: {
                    href: "//wpa1.qq.com/cPNJlL1B?_type=wpa&qidian=true",
                    target: "_blank"
                }
            }, [n("i", {
                staticClass: "icon icon-qq"
            }), t._v(" 售后QQ ")])])
        }
        ]
          , g = n("5530")
          , h = n("2f62")
          , v = n("4360")
          , b = n("d342")
          , m = n("8958")
          , y = n("6443")
          , x = {
            name: "HeaderUser",
            data: function() {
                return {
                    userInfo: null
                }
            },
            created: function() {
                this.getUserInfo()
            },
            methods: Object(g["a"])(Object(g["a"])({}, Object(h["b"])(["Logout"])), {}, {
                logout: function() {
                    var t = this
                      , e = this.Logout;
                    e({}).then((function() {
                        t.$router.push({
                            path: "/"
                        }),
                        window.location.reload()
                    }
                    ))
                },
                getUserInfo: function() {
                    var t = this;
                    null != localStorage.getItem(b["a"]) && v["a"].dispatch("GetUserInfo").then((function() {
                        t.userInfo = v["a"].getters.userInfo,
                        t.userInfo && (t.userInfo.mobile = Object(m["a"])(t.userInfo.mobile))
                    }
                    ))
                },
                toDesigner: function() {
                    console.log("this.userInfo", this.userInfo);
                    var t = localStorage.getItem("Access-Token");
                    if (t)
                        this.getByUserIdFn();
                    else {
                        var e = this.$router.resolve({
                            path: "/user/designerRegister"
                        });
                        window.open(e.href, "_blank")
                    }
                },
                getByUserIdFn: function() {
                    var t = this;
                    Object(y["j"])({
                        id: this.userInfo.id
                    }).then((function(e) {
                        if ("000000" == e.code)
                            if (null == e.data) {
                                var n = t.$router.resolve({
                                    path: "/user/designerRegister"
                                });
                                window.open(n.href, "_blank")
                            } else {
                                var r = t.$router.resolve({
                                    path: "/user/myTask"
                                });
                                window.open(r.href, "_blank")
                            }
                    }
                    )).catch((function(e) {
                        var n = t.$router.resolve({
                            path: "/user/designerRegister"
                        });
                        window.open(n.href, "_blank")
                    }
                    ))
                }
            })
        }
          , w = x
          , O = (n("5cf9"),
        n("c448"),
        Object(u["a"])(w, f, p, !1, null, "03f3e0db", null))
          , S = O.exports
          , L = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                attrs: {
                    id: "topBox"
                }
            }, [n("div", {
                staticClass: "flex comBox"
            }, [t._m(0), n("div", {
                staticClass: "topRight",
                staticStyle: {
                    display: "flex",
                    "justify-content": "flex-end"
                }
            }, [n("ul", {
                staticClass: "flex fl topNav",
                staticStyle: {
                    "margin-right": "40px"
                }
            }, t._l(t.navs, (function(e, r) {
                return n("li", {
                    key: r,
                    class: t.select(t.$route.path.indexOf(e.curUrl))
                }, ["/zbz" === e.curUrl ? n("div", {
                    class: {
                        menuZbz: t.isZbzPage(t.$route.path)
                    }
                }, [n("a", {
                    attrs: {
                        href: null == e.param ? e.url : e.url + "?" + e.param,
                        target: "_blank"
                    }
                }, [t._v(t._s(e.name))]), n("multi-level-menu", {
                    staticClass: "LookNav hide"
                })], 1) : n("div", [n("a", {
                    attrs: {
                        href: null == e.param ? e.url : e.url + "?" + e.param,
                        target: "_blank"
                    }
                }, [t._v(t._s(e.name))])])])
            }
            )), 0), n("div", {
                staticClass: "fr topCart"
            }, [n("el-menu", {
                staticClass: "cart-nav",
                attrs: {
                    router: "",
                    "default-active": "/cart/index",
                    mode: "horizontal",
                    "active-text-color": "#fff",
                    "text-color": "#fff",
                    "background-color": "#d0514e"
                }
            }, [n("el-submenu", {
                attrs: {
                    index: "/cart/index"
                }
            }, [n("template", {
                slot: "title"
            }, [n("i", {
                staticClass: "el-icon-shopping-cart-full"
            }), t._v("购物车"), n("em", [t._v(t._s(t.$store.getters.cartNum))])]), n("el-menu-item", {
                attrs: {
                    index: "/cart/index"
                }
            }, [t._v("购物车 (" + t._s(t.$store.getters.cartNum) + ")")]), n("el-menu-item", {
                attrs: {
                    index: "/cart/proof"
                }
            }, [t._v("打样购物车 (" + t._s(t.$store.getters.proofCartNum) + ")")])], 2)], 1)], 1)])])])
        }
          , _ = [function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "logo"
            }, [r("a", {
                attrs: {
                    href: "/"
                }
            }, [r("img", {
                attrs: {
                    src: n("21f7")
                }
            })])])
        }
        ]
          , C = (n("c975"),
        n("b85c"))
          , j = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("ul", {
                staticClass: "LookNavUl hide"
            }, t._l(t.categoryList, (function(e, r) {
                return n("li", {
                    key: r,
                    class: t.selectedParent(r),
                    on: {
                        mouseover: function(e) {
                            return t.selected(r)
                        }
                    }
                }, [n("a", {
                    staticClass: "LookNav_a",
                    attrs: {
                        href: "/zbz/list?zbzCateId=" + e.data.id
                    }
                }, [n("span", [t._v(t._s(e.data.title))]), n("em", {
                    staticClass: "el-icon-arrow-right"
                })]), n("div", {
                    staticClass: "LookNavList"
                }, [n("div", {
                    staticClass: "LookNavLbx"
                }, [n("i", {
                    staticClass: "el-icon-caret-top LookIcon"
                }), t._l(e.childrenList, (function(r, a) {
                    return n("ul", {
                        key: a + 100
                    }, t._l(r, (function(r, a) {
                        return n("li", {
                            key: a + 1e3
                        }, [n("a", {
                            attrs: {
                                href: "/zbz/list?zbzCateId=" + e.data.id + "&zbzSubCateId=" + r.id
                            }
                        }, [n("img", {
                            attrs: {
                                src: t.alifileUrl + r.coverPath
                            }
                        }), n("span", {
                            staticClass: "texts"
                        }, [t._v(t._s(r.title))])])])
                    }
                    )), 0)
                }
                ))], 2)])])
            }
            )), 0)
        }
          , k = []
          , I = n("365c")
          , D = n("b775");
        function T(t) {
            return Object(D["a"])({
                url: I["a"].zbz.nav.listAllCate,
                method: "post",
                data: t
            })
        }
        var A = {
            name: "MultiLevelMenu",
            data: function() {
                return {
                    categoryList: [],
                    isSelected: 0,
                    alifileUrl: "http://alifile.xiaocaiyin.com/"
                }
            },
            created: function() {
                this.getNavList(0)
            },
            methods: {
                selected: function(t) {
                    this.isSelected = t
                },
                selectedParent: function(t) {
                    return t === this.isSelected ? "curr" : " "
                },
                getNavList: function(t) {
                    this.getCategory(t)
                },
                getCategory: function(t) {
                    var e = this;
                    t || (t = 0);
                    var n = {
                        language: "zh-cn",
                        pid: t
                    };
                    T(n).then((function(t) {
                        if ("000000" === t.code) {
                            var n = t.data;
                            e.categoryList = n;
                            var r, a = Object(C["a"])(n);
                            try {
                                for (a.s(); !(r = a.n()).done; ) {
                                    for (var i = r.value, o = i.children, c = [[]], s = 0, u = 0, l = 0; l < o.length; l++)
                                        u++,
                                        u < 8 ? c[s].push(o[l]) : (s++,
                                        c[s] = [],
                                        u = 0);
                                    i["childrenList"] = c
                                }
                            } catch (d) {
                                a.e(d)
                            } finally {
                                a.f()
                            }
                        }
                    }
                    ))
                }
            }
        }
          , P = A
          , U = (n("ac69"),
        n("e399"),
        Object(u["a"])(P, j, k, !1, null, "6ce58dca", null))
          , M = U.exports
          , N = {
            name: "HeaderUser",
            components: {
                MultiLevelMenu: M
            },
            data: function() {
                return {
                    navs: [{
                        name: "首页",
                        url: "/index/index",
                        curUrl: "/index/index"
                    }, {
                        name: "报价下单",
                        url: "/price/cartIndex",
                        curUrl: "/price",
                        param: "cateId=1&subCateId=15"
                    }, {
                        name: "包装方案",
                        url: "/packagingSolution/packagingSolution",
                        curUrl: "/packagingSolution"
                    }, {
                        name: "设计打样",
                        url: "/proof/index",
                        curUrl: "/proof",
                        param: "cateId=1&subCateId=15"
                    }, {
                        name: "下载刀模",
                        url: "/cutter/index",
                        curUrl: "/cutter",
                        param: "cateId=1&subCateId=15"
                    }, {
                        name: "智能预检",
                        url: "/preview/index",
                        curUrl: "/preview"
                    }],
                    cartNum: 0,
                    proofCartNum: 0,
                    multiMenuShow: !1,
                    activeIndex: 1,
                    showZbzMultiLevelMenu: "/zbz",
                    showPriceMultiLevelMenu: ["/price"],
                    newHappy: !0
                }
            },
            methods: {
                handleSelect: function(t, e) {
                    console.log(t, e)
                },
                select: function(t) {
                    var e = -1 !== t ? "curr" : "";
                    return e
                },
                isZbzPage: function(t) {
                    return -1 !== t.indexOf(this.showZbzMultiLevelMenu)
                },
                isPricePage: function(t) {
                    return -1 !== t.indexOf(this.showPriceMultiLevelMenu)
                },
                existList: function(t, e) {
                    var n, r = Object(C["a"])(t);
                    try {
                        for (r.s(); !(n = r.n()).done; ) {
                            var a = n.value;
                            if (a === e)
                                return !0
                        }
                    } catch (i) {
                        r.e(i)
                    } finally {
                        r.f()
                    }
                    return !1
                }
            }
        }
          , $ = N
          , E = (n("9cfe"),
        n("467fe"),
        Object(u["a"])($, L, _, !1, null, "3daf3cf6", null))
          , z = E.exports
          , R = n("a1b7")
          , B = n("7358")
          , H = {
            components: {
                HeaderNotice: d,
                HeaderUser: S,
                HeaderNavs: z,
                FootTop: R["a"],
                FootBottom: B["a"]
            },
            name: "IndexLayout",
            data: function() {
                return {
                    newHappy: !1
                }
            },
            created: function() {
                "/preview/index" == this.$route.path && (this.newHappy = !0)
            }
        }
          , V = H
          , q = (n("2128"),
        n("1cbe"),
        Object(u["a"])(V, r, a, !1, null, null, null));
        e["default"] = q.exports
    },
    "948f": function(t, e, n) {},
    "97c3": function(t, e, n) {},
    "99af": function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , a = n("d039")
          , i = n("e8b5")
          , o = n("861d")
          , c = n("7b0b")
          , s = n("50c4")
          , u = n("8418")
          , l = n("65f0")
          , d = n("1dde")
          , f = n("b622")
          , p = n("2d00")
          , g = f("isConcatSpreadable")
          , h = 9007199254740991
          , v = "Maximum allowed index exceeded"
          , b = p >= 51 || !a((function() {
            var t = [];
            return t[g] = !1,
            t.concat()[0] !== t
        }
        ))
          , m = d("concat")
          , y = function(t) {
            if (!o(t))
                return !1;
            var e = t[g];
            return void 0 !== e ? !!e : i(t)
        }
          , x = !b || !m;
        r({
            target: "Array",
            proto: !0,
            forced: x
        }, {
            concat: function(t) {
                var e, n, r, a, i, o = c(this), d = l(o, 0), f = 0;
                for (e = -1,
                r = arguments.length; e < r; e++)
                    if (i = -1 === e ? o : arguments[e],
                    y(i)) {
                        if (a = s(i.length),
                        f + a > h)
                            throw TypeError(v);
                        for (n = 0; n < a; n++,
                        f++)
                            n in i && u(d, f, i[n])
                    } else {
                        if (f >= h)
                            throw TypeError(v);
                        u(d, f++, i)
                    }
                return d.length = f,
                d
            }
        })
    },
    "9bdd": function(t, e, n) {
        var r = n("825a")
          , a = n("2a62");
        t.exports = function(t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n)
            } catch (o) {
                throw a(t),
                o
            }
        }
    },
    "9cfe": function(t, e, n) {
        "use strict";
        n("948f")
    },
    a630: function(t, e, n) {
        var r = n("23e7")
          , a = n("4df4")
          , i = n("1c7e")
          , o = !i((function(t) {
            Array.from(t)
        }
        ));
        r({
            target: "Array",
            stat: !0,
            forced: o
        }, {
            from: a
        })
    },
    ac69: function(t, e, n) {
        "use strict";
        n("77b4")
    },
    ade3: function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        n.d(e, "a", (function() {
            return r
        }
        ))
    },
    b64b: function(t, e, n) {
        var r = n("23e7")
          , a = n("7b0b")
          , i = n("df75")
          , o = n("d039")
          , c = o((function() {
            i(1)
        }
        ));
        r({
            target: "Object",
            stat: !0,
            forced: c
        }, {
            keys: function(t) {
                return i(a(t))
            }
        })
    },
    b85c: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return a
        }
        ));
        n("a4d3"),
        n("e01a"),
        n("d28b"),
        n("d3b7"),
        n("3ca3"),
        n("ddb0");
        var r = n("06c5");
        function a(t, e) {
            var n;
            if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (n = Object(r["a"])(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var a = 0
                      , i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return a >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[a++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, s = !1;
            return {
                s: function() {
                    n = t[Symbol.iterator]()
                },
                n: function() {
                    var t = n.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    s = !0,
                    o = t
                },
                f: function() {
                    try {
                        c || null == n["return"] || n["return"]()
                    } finally {
                        if (s)
                            throw o
                    }
                }
            }
        }
    },
    ba66: function(t, e, n) {
        t.exports = n.p + "img/activityimg.0cb3e7ae.png"
    },
    c448: function(t, e, n) {
        "use strict";
        n("1dee")
    },
    d28b: function(t, e, n) {
        var r = n("746f");
        r("iterator")
    },
    d48d: function(t, e, n) {},
    dbb4: function(t, e, n) {
        var r = n("23e7")
          , a = n("83ab")
          , i = n("56ef")
          , o = n("fc6a")
          , c = n("06cf")
          , s = n("8418");
        r({
            target: "Object",
            stat: !0,
            sham: !a
        }, {
            getOwnPropertyDescriptors: function(t) {
                var e, n, r = o(t), a = c.f, u = i(r), l = {}, d = 0;
                while (u.length > d)
                    n = a(r, e = u[d++]),
                    void 0 !== n && s(l, e, n);
                return l
            }
        })
    },
    ddb0: function(t, e, n) {
        var r = n("da84")
          , a = n("fdbc")
          , i = n("e260")
          , o = n("9112")
          , c = n("b622")
          , s = c("iterator")
          , u = c("toStringTag")
          , l = i.values;
        for (var d in a) {
            var f = r[d]
              , p = f && f.prototype;
            if (p) {
                if (p[s] !== l)
                    try {
                        o(p, s, l)
                    } catch (h) {
                        p[s] = l
                    }
                if (p[u] || o(p, u, d),
                a[d])
                    for (var g in i)
                        if (p[g] !== i[g])
                            try {
                                o(p, g, i[g])
                            } catch (h) {
                                p[g] = i[g]
                            }
            }
        }
    },
    e399: function(t, e, n) {
        "use strict";
        n("d48d")
    },
    e439: function(t, e, n) {
        var r = n("23e7")
          , a = n("d039")
          , i = n("fc6a")
          , o = n("06cf").f
          , c = n("83ab")
          , s = a((function() {
            o(1)
        }
        ))
          , u = !c || s;
        r({
            target: "Object",
            stat: !0,
            forced: u,
            sham: !c
        }, {
            getOwnPropertyDescriptor: function(t, e) {
                return o(i(t), e)
            }
        })
    },
    fb6a: function(t, e, n) {
        "use strict";
        var r = n("23e7")
          , a = n("861d")
          , i = n("e8b5")
          , o = n("23cb")
          , c = n("50c4")
          , s = n("fc6a")
          , u = n("8418")
          , l = n("b622")
          , d = n("1dde")
          , f = n("ae40")
          , p = d("slice")
          , g = f("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        })
          , h = l("species")
          , v = [].slice
          , b = Math.max;
        r({
            target: "Array",
            proto: !0,
            forced: !p || !g
        }, {
            slice: function(t, e) {
                var n, r, l, d = s(this), f = c(d.length), p = o(t, f), g = o(void 0 === e ? f : e, f);
                if (i(d) && (n = d.constructor,
                "function" != typeof n || n !== Array && !i(n.prototype) ? a(n) && (n = n[h],
                null === n && (n = void 0)) : n = void 0,
                n === Array || void 0 === n))
                    return v.call(d, p, g);
                for (r = new (void 0 === n ? Array : n)(b(g - p, 0)),
                l = 0; p < g; p++,
                l++)
                    p in d && u(r, l, d[p]);
                return r.length = l,
                r
            }
        })
    },
    fdbc: function(t, e) {
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }
}]);
