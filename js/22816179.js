(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-e8b234e4"], {
    "027c": function(t, e, a) {},
    "0481": function(t, e, a) {
        "use strict";
        var r = a("23e7")
          , i = a("a2bf")
          , o = a("7b0b")
          , s = a("50c4")
          , n = a("a691")
          , c = a("65f0");
        r({
            target: "Array",
            proto: !0
        }, {
            flat: function() {
                var t = arguments.length ? arguments[0] : void 0
                  , e = o(this)
                  , a = s(e.length)
                  , r = c(e, 0);
                return r.length = i(r, e, e, a, 0, void 0 === t ? 1 : n(t)),
                r
            }
        })
    },
    "0dab": function(t, e, a) {},
    1343: function(t, e, a) {
        "use strict";
        a("027c")
    },
    4069: function(t, e, a) {
        var r = a("44d2");
        r("flat")
    },
    "42da": function(t, e, a) {
        "use strict";
        var r = function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "guigeRt"
            }, [r("div", {
                staticClass: "guigeRtWrap"
            }, [t.topNav && t.subNav && t.isCmsHidden() ? r("h2", {
                staticClass: "guigeRtH2"
            }, [t._v(t._s(t.topNav.name) + "-" + t._s(t.subNav.name) + "报价")]) : t._e(), t.isCmsHidden() ? r("div", {
                staticClass: "geRtList"
            }, [1 != t.$route.query.cateId ? r("h4", [t._v("价格")]) : t._e(), r("ul", {
                staticClass: "guigeRtUl",
                style: 1 == t.$route.query.cateId ? "margin-top:20px;" : ""
            }, [r("ol", {
                staticClass: "flex"
            }, [r("span", [t._v("出货时间")]), 1 != t.$route.query.cateId ? r("span", [t._v("价格")]) : t._e()]), r("li", [t.strEquals(t.priceFormData.cextends, "4") && "1" === t.$route.query.cateId ? r("div", [r("div", {
                class: "flex geRtime" + (t.strEquals(t.priceFormData.extends, "4") ? " curr" : ""),
                on: {
                    click: function(e) {
                        return t.selectExtends("4")
                    }
                }
            }, [r("label", {
                staticClass: "layui-form-item geRtimeLt dateSel"
            }, [r("em", {
                staticClass: "dateH",
                attrs: {
                    value: "4"
                }
            }), r("span", {
                staticClass: "daySlow"
            }, [t._v(t._s(t.priceFormData.time_slow) + "小时（" + t._s(t.priceFormData.days_slow) + "天）")])])])]) : t._e(), t.strEquals(t.priceFormData.cextends, "4") ? t._e() : ["1" === t.$route.query.cateId || t.priceFormData.yssl < 1e4 && "13" === t.$route.query.cateId || t.priceFormData.yssl < 1e4 && "4" === t.$route.query.cateId && "35" === t.$route.query.subCateId || 42 == t.$route.query.subCateId ? r("div", {
                class: "flex geRtime" + (t.strEquals(t.priceFormData.extends, "1") ? " curr" : ""),
                on: {
                    click: function(e) {
                        return t.selectExtends("1")
                    }
                }
            }, [r("label", {
                staticClass: "layui-form-item geRtimeLt dateSel"
            }, [r("em", {
                staticClass: "dateH",
                attrs: {
                    value: "1"
                }
            }), r("span", {
                staticClass: "daySlow"
            }, [t._v(t._s(t.priceFormData.time_slow) + "小时（" + t._s(t.priceFormData.days_slow) + "天）")])]), 1 != t.$route.query.cateId ? r("div", {
                staticClass: "extra en"
            }, [r("p", {
                staticClass: "moneySlow"
            }, [t.goodsIdsCheckList[t.goodsId] && t.priceFormData.price_slow > 0 ? r("span", [r("span", {
                staticStyle: {
                    "margin-right": "10px",
                    color: "red"
                }
            }, [t._v("￥" + t._s(t.getDiscountPrice(t.priceFormData.price_slow)))]), r("span", {
                staticStyle: {
                    "text-decoration": "line-through",
                    color: "#999"
                }
            }, [t._v("￥" + t._s(t.priceFormData.price_slow || 0))])]) : r("span", {
                staticStyle: {
                    "font-weight": "bold"
                }
            }, [t._v("¥" + t._s(t.priceFormData.price_slow))])]), r("p", {
                staticClass: "f12 C7 unitSlow"
            }, [t._v("单价:" + t._s(t.getUnitPrice(t.priceFormData.price_slow, t.priceFormData.yssl * t.priceFormData.tkks)))])]) : t._e()]) : t._e(), r("div", {
                class: "flex geRtime" + (t.strEquals(t.priceFormData.extends, "0") ? " curr" : ""),
                attrs: {
                    name: "1" == t.$route.query.cateId && t.priceFormData.yssl >= 1e4 ? "hidename" : ""
                },
                on: {
                    click: function(e) {
                        return t.selectExtends("0")
                    }
                }
            }, [r("label", {
                staticClass: "layui-form-item geRtimeLt dateSel"
            }, [r("em", {
                staticClass: "dateH",
                attrs: {
                    value: "0"
                }
            }), "86" == t.$route.query.cateId || "121" == t.$route.query.cateId ? r("span", {
                staticClass: "dayNormal"
            }, [t._v(t._s(0 == t.priceFormData.time_normal ? 48 : t.priceFormData.time_normal) + "小时（" + t._s(0 == t.priceFormData.days_normal ? 2 : t.priceFormData.days_normal) + "天)")]) : r("span", {
                staticClass: "dayNormal"
            }, [t._v(t._s(0 == t.priceFormData.time_normal ? 120 : t.priceFormData.time_normal) + "小时（" + t._s(0 == t.priceFormData.days_normal ? 5 : t.priceFormData.days_normal) + "天）")])]), 1 != t.$route.query.cateId ? r("div", {
                staticClass: "extra en"
            }, [r("p", {
                staticClass: "moneyNormal"
            }, [t.goodsIdsCheckList[t.goodsId] && t.priceFormData.price_normal > 0 ? r("span", [r("span", {
                staticStyle: {
                    "margin-right": "10px",
                    color: "red"
                }
            }, [t._v("￥" + t._s(t.getDiscountPrice(t.priceFormData.price_normal)))]), r("span", {
                staticStyle: {
                    "text-decoration": "line-through",
                    color: "#999"
                }
            }, [t._v("￥" + t._s(t.priceFormData.price_normal || 0))])]) : r("span", {
                staticStyle: {
                    "font-weight": "bold"
                }
            }, [t._v("￥" + t._s(t.priceFormData.price_normal || 0))])]), "85" === t.$route.query.subCateId ? void 0 : [r("p", {
                staticClass: "f12 C7 unitNormal"
            }, [t._v(" " + t._s(t.SLXNumValue > 0 ? "单价(套):" + t.getUnitPrice(t.priceFormData.price_normal, t.priceFormData.yssl * t.SLXNumValue) : "单价:" + t.getUnitPrice(t.priceFormData.price_normal, t.priceFormData.yssl * t.priceFormData.tkks)) + " ")])]], 2) : t._e()]), t.isShort && (t.formData.goodSize.goodAl < 785 && t.formData.goodSize.goodAw < 545 || t.formData.goodSize.goodAl < 545 && t.formData.goodSize.goodAw < 785) ? r("div", [1 == t.$route.query.cateId ? r("div", {
                class: "flex geRtime" + (t.strEquals(t.priceFormData.extends, "3") ? " curr" : ""),
                attrs: {
                    name: "1" == t.$route.query.cateId && t.priceFormData.yssl >= 1e4 ? "hidename" : ""
                },
                on: {
                    click: function(e) {
                        return t.selectExtends("3")
                    }
                }
            }, [r("label", {
                staticClass: "layui-form-item geRtimeLt dateSel"
            }, [r("em", {
                staticClass: "dateH",
                attrs: {
                    value: "3"
                }
            }), r("span", {
                staticClass: "dayNormal"
            }, [t._v(t._s(t.priceFormData.days_kraft > 0 ? 24 * t.priceFormData.days_kraft : 144) + "小时（" + t._s(t.priceFormData.days_kraft > 0 ? t.priceFormData.days_kraft : 6) + "天）")])])]) : t._e()]) : t._e()]], 2)])]) : t._e(), 1 == t.$route.query.cateId && t.newlist.length >= 1 ? r("div", {
                staticClass: "geRtList geRtListkg"
            }, [r("ul", {
                staticClass: "guigeRtUl"
            }, [t._m(0), r("li", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.loadingstatus,
                    expression: "loadingstatus"
                }],
                staticStyle: {
                    "min-height": "46px"
                }
            }, [1 == t.newlist.length ? r("div", t._l(t.newlist, (function(e, a) {
                return r("div", {
                    key: a,
                    staticClass: "geRtListkglist",
                    staticStyle: {
                        "line-height": "45px"
                    }
                }, [r("span", {
                    staticStyle: {
                        color: "#000",
                        "font-weight": "bold"
                    }
                }, [t._v(t._s(e.name))]), r("div", {
                    staticStyle: {
                        "line-height": "15px",
                        float: "right",
                        margin: "4px 10px 0 0"
                    }
                }, [r("p", {
                    staticStyle: {
                        "text-align": "right",
                        "font-weight": "bold"
                    }
                }, [t.goodsIdsCheckList[t.goodsId] && e.price ? r("span", [r("span", {
                    staticStyle: {
                        "margin-right": "10px",
                        color: "red"
                    }
                }, [t._v("￥" + t._s(t.getDiscountPrice(e.price)))]), r("span", {
                    staticStyle: {
                        "text-decoration": "line-through",
                        color: "#999"
                    }
                }, [t._v("￥" + t._s(e.price || 0))])]) : r("span", {
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [t._v("￥" + t._s(e.price || 0))])]), r("p", {
                    staticStyle: {
                        "text-align": "right",
                        color: "#606266",
                        "font-size": "12px"
                    }
                }, [t._v("单价:" + t._s(t.getUnitPrice(e.price, t.priceFormData.yssl * t.priceFormData.tkks)))])])])
            }
            )), 0) : r("div", [r("el-radio-group", {
                attrs: {
                    disabled: "edit" === this.$route.query.isCms && "true" === this.$route.query.flat
                },
                on: {
                    change: t.PaperChange
                },
                model: {
                    value: t.radio,
                    callback: function(e) {
                        t.radio = e
                    },
                    expression: "radio"
                }
            }, t._l(t.newlist, (function(e, a) {
                return r("div", {
                    key: a,
                    staticClass: "geRtListkglist"
                }, [r("el-radio", {
                    staticClass: "labelr",
                    attrs: {
                        label: e.actualValue
                    }
                }, [t._v(t._s(e.name))]), r("div", {
                    staticClass: "el-radio__label",
                    staticStyle: {
                        "line-height": "15px",
                        float: "right",
                        margin: "4px 10px 0 0"
                    }
                }, [r("p", {
                    staticStyle: {
                        "text-align": "right",
                        "font-weight": "bold"
                    }
                }, [t.goodsIdsCheckList[t.goodsId] && e.price ? r("span", [r("span", {
                    staticStyle: {
                        "margin-right": "10px",
                        color: "red"
                    }
                }, [t._v("￥" + t._s(t.getDiscountPrice(e.price)))]), r("span", {
                    staticStyle: {
                        "text-decoration": "line-through",
                        color: "#999"
                    }
                }, [t._v("￥" + t._s(e.price || 0))])]) : r("span", {
                    staticStyle: {
                        "font-weight": "bold"
                    }
                }, [t._v("￥" + t._s(e.price || 0))])]), r("p", {
                    staticStyle: {
                        "text-align": "right",
                        color: "#606266",
                        "font-size": "12px"
                    }
                }, [t._v("单价:" + t._s(t.getUnitPrice(e.price, t.priceFormData.yssl * t.priceFormData.tkks)))])])], 1)
            }
            )), 0)], 1)])])]) : t._e(), 1 != t.$route.query.cateId || t.isCmsHidden() ? t._e() : r("div", {
                staticStyle: {
                    "margin-bottom": "20px"
                }
            }), t.isCmsHidden() ? r("div", {
                staticClass: "geRtList"
            }, [r("h4", [t._v("货期规则")]), "86" == t.$route.query.cateId || "121" == t.$route.query.cateId ? r("div", {
                staticClass: "geRtSection"
            }, [t._v(" 20点前确认，当天20点开始计算；20点后确认，次日开始计算；周日和节假日不计货期。 "), r("br"), t.priceFormData.yssl * t.SLXNumValue > 19999 ? r("p", {
                staticStyle: {
                    color: "red"
                }
            }, [t._v("2万套48小时内发货，高于2万套请联系右下角人工客服确定货期。")]) : t._e(), r("a", {
                staticClass: "bule",
                attrs: {
                    href: "/news/detail?id=102"
                }
            }, [t._v("计时规则")])]) : r("div", {
                staticClass: "geRtSection"
            }, [t._v(" 20点前确认，当天20点开始计算；20点后确认，次日20点开始计算；周日和节假日不计货期。 "), r("a", {
                staticClass: "bule",
                attrs: {
                    href: "/news/detail?id=102"
                }
            }, [t._v("计时规则")])]), "24" === t.$route.query.subCateId ? r("div", {
                staticClass: "geRtSection chap red"
            }, [r("span", {
                staticClass: "red"
            }, [t._v("温馨提示：")]), r("br"), t._v(" 1、本通道仅限于用您自主设计的卡盒盒型刀模图进行下单，如文件导致的问题，责任自负；"), r("br"), t._v(" 2、本通道报价、货期只能作为参考，实际价格与生产货期以我司客服反馈为准 ；"), r("br"), t._v(" 3、本通道仅限卡盒下单，非卡盒品类在此下单不退款不生产，请您谅解；"), r("br"), t._v(" 4、建议按照对应盒型报价下单，价格比此通道更优惠，祝您下单愉快！ ")]) : t._e(), "5" === t.$route.query.cateId ? r("div", {
                staticClass: "geRtSection chap red"
            }, [r("span", {
                staticClass: "red"
            }, [t._v("温馨提示：")]), r("br"), t._v(" 本平台的生产原材料为优质的不干胶材料，但由于不同的标签材质有不同的用途，及针对不同的使用场景，客人在下单大货前， 需自己做好产品与标签的适配工作。 ")]) : t._e(), "24" === t.$route.query.subCateId ? r("div", {
                staticClass: "geRtSection"
            }, [r("p", {
                staticClass: "agree_check"
            }, [r("label", [r("el-checkbox", {
                model: {
                    value: t.priceFormData.agreement,
                    callback: function(e) {
                        t.$set(t.priceFormData, "agreement", e)
                    },
                    expression: "priceFormData.agreement"
                }
            }), r("span", {
                staticClass: "text"
            })], 1), r("span", [t._v("我已了解并同意以上免责声明")])])]) : t._e()]) : t._e(), t.isCmsHidden() ? r("div", {
                staticClass: "geRtList"
            }, [r("h4", [t._v("配送费用")]), r("div", {
                staticClass: "costBox"
            }, [r("div", {
                staticClass: "addressValue"
            }, [r("el-cascader", {
                ref: "cascaderHandle",
                staticStyle: {
                    width: "320px"
                },
                attrs: {
                    props: t.options,
                    placeholder: "请选择配送地区"
                },
                on: {
                    change: t.handlerValue
                }
            })], 1), r("div", {
                staticClass: "flex geRtkg"
            }, [r("span", {
                staticClass: "C9 kgColor goodsWeight"
            }, [t._v("重量:" + t._s(t.priceFormData.weight) + "kg")]), 0 === t.priceFormData.shipping_fee && t.priceFormData.total_price > 0 && t.priceFormData.countyId ? r("span", {
                staticClass: "red"
            }, [t._v("该地区不支持配送")]) : r("div", [t.isRemoteCity() ? [r("span", {
                staticClass: "red en shipfee"
            }, [t._v("¥" + t._s(t.priceFormData.shipping_fee))])] : [r("div", [r("div", {
                staticClass: "black en shipfee",
                staticStyle: {
                    "text-decoration": "line-through",
                    "text-align": "right"
                }
            }, [t._v("¥" + t._s(t.priceFormData.shipping_fee) + "9999")]), r("div", {
                staticClass: "red en shipfee",
                staticStyle: {
                    "margin-top": "5px"
                }
            }, [t._v("运费：¥" + t._s(t.priceFormData.shipping_fee - t.getShippeFreePrice(t.priceFormData.shipping_fee)))])])]], 2)]), r("div", {
                staticClass: "flex geRtExpect"
            }, [r("i"), r("div", {
                staticClass: "geRtExpectxt"
            }, [r("p", [t._v("预计发货")]), r("p", {
                attrs: {
                    id: "out_time"
                }
            }, [t._v(t._s(t.priceFormData.out_time))])])])])]) : t._e(), t.isCmsHidden() ? r("div", {
                staticClass: "geRtList"
            }, [t.currentUser.vipRank <= 0 || t.currentUser.vipRank > 6 ? r("div", {
                staticClass: "geRtotalBox"
            }, [r("p", {
                staticClass: "flex geRtotal",
                staticStyle: {
                    "justify-content": "space-between"
                }
            }, [r("span", [t._v("总计: "), r("span", {
                attrs: {
                    id: "price_total"
                }
            }, [t.isRemoteCity() ? [t._v(" ￥" + t._s(t.getDiscountPrice(t.priceFormData.total_price) + t.priceFormData.shipping_fee) + " ")] : [t._v("￥" + t._s(t.getDiscountPrice(t.priceFormData.total_price) + t.priceFormData.shipping_fee - t.getShippeFreePrice(t.priceFormData.shipping_fee)))]], 2)]), t.strJsonLength(t.priceFormData.goodsAttrMap) > 0 ? r("span", {
                staticClass: "red en shipfee",
                on: {
                    click: function(e) {
                        t.dialogVisible = !0
                    }
                }
            }, [t._v("报价单")]) : t._e()])]) : t.currentUser.vipRank ? r("div", {
                staticClass: "geRtotalBox"
            }, [r("div", {
                staticClass: "yuanPrice"
            }, [r("div", {
                staticClass: "flex priceDv"
            }, [t._m(1), r("span", {
                staticClass: "priceDvR"
            }, [r("font", {
                attrs: {
                    id: "price_old"
                }
            }, [t.isRemoteCity() ? [t._v(" ￥" + t._s(t.priceFormData.price_old + t.priceFormData.shipping_fee) + " ")] : [t._v("￥" + t._s(t.priceFormData.price_old + t.priceFormData.shipping_fee - t.getShippeFreePrice(t.priceFormData.shipping_fee)))]], 2)], 1)])]), r("div", {
                staticClass: "geRtotal"
            }, [r("div", {
                staticClass: "flex priceDv"
            }, [r("span", {
                staticClass: "priceDvL"
            }, [r("i", {
                staticClass: "vicon"
            }), t._v("您的V" + t._s(t.currentUser.vipRank) + "会员价 "), t._m(2)]), r("span", {
                staticClass: "priceDvR red"
            }, [r("font", {
                attrs: {
                    id: "price_limit"
                }
            }, [t.isRemoteCity() ? [t._v(" ￥" + t._s(t.priceFormData.total_price + t.priceFormData.shipping_fee) + " ")] : [t._v("￥" + t._s(t.priceFormData.total_price + t.priceFormData.shipping_fee - t.getShippeFreePrice(t.priceFormData.shipping_fee)))]], 2)], 1)])]), r("p", {
                staticClass: "yuantiptxt"
            }, [t._v("恭喜您获得傲彩的V" + t._s(t.currentUser.vipRank) + "会员等级，您将享受" + t._s(t.rank[t.currentUser.vipRank]) + "折的折扣，会员到期：2023-05-04")])]) : t._e(), r("div", {
                staticClass: "price",
                style: t.priceFormData.total_price > 1e4 && "1" === t.$route.query.cateId ? "" : "display: none"
            }, [r("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.quoteMobile,
                    expression: "quoteMobile"
                }],
                staticClass: "quotemobile priceIput",
                attrs: {
                    type: "text",
                    placeholder: "请输入您的电话号码"
                },
                domProps: {
                    value: t.quoteMobile
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.quoteMobile = e.target.value)
                    }
                }
            }), r("button", {
                staticClass: "priceBtn",
                on: {
                    click: function(e) {
                        return t.addQuote(t.quoteMobile, t.priceFormData.total_price)
                    }
                }
            }, [t._v("申请人工核价")]), r("br"), r("span", {
                staticClass: "priceTips"
            }, [t._v("订单价格＞1万元，可申请人工核价，价格更优惠，输入联系电话，傲彩包装顾问将与您联系")])]), "3" === t.$route.query.cateId ? r("div", {
                staticStyle: {
                    color: "red",
                    "font-size": "12px",
                    "padding-bottom": "10px"
                }
            }, [t._v(" 精装盒系统报价未完善，请点击右下角QQ客服人工报价 ")]) : t._e(), r("div", {
                staticClass: "flex geRtBtnDv"
            }, [r("a", {
                staticClass: "buybtn goCart getBuy",
                attrs: {
                    href: "javascript:;",
                    disabled: t.priceFormData.submitProgress
                },
                on: {
                    click: function(e) {
                        return t.addCart("1")
                    }
                }
            }, [t._v("立即购买")]), r("a", {
                staticClass: "joinShoping buybtn btnCart curr",
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: function(e) {
                        return t.addCart("0")
                    }
                }
            }, [r("i"), t._v("加入购物车")])])]) : t._e()]), r("el-dialog", {
                directives: [{
                    name: "dialogDrag",
                    rawName: "v-dialogDrag"
                }],
                attrs: {
                    visible: t.dialogVisible,
                    width: "850px",
                    "close-on-click-modal": !1,
                    "append-to-body": ""
                },
                on: {
                    "update:visible": function(e) {
                        t.dialogVisible = e
                    }
                }
            }, [r("div", {
                staticStyle: {
                    "margin-top": "-30px"
                },
                attrs: {
                    id: "pdfDom"
                }
            }, [r("div", {
                staticStyle: {
                    color: "black",
                    margin: "0 10% 40px"
                }
            }, [r("div", {
                staticStyle: {
                    "text-align": "left"
                }
            }, [r("img", {
                staticStyle: {
                    width: "200px"
                },
                attrs: {
                    src: a("f520")
                }
            })]), r("p", {
                staticStyle: {
                    "text-align": "center",
                    "font-size": "27px"
                }
            }, [t._v("报价单")]), r("div", {
                staticStyle: {
                    "text-align": "right",
                    "margin-top": "20px"
                }
            }, [r("div", {
                staticStyle: {
                    "margin-bottom": "10px"
                }
            }, [r("span", {
                staticStyle: {
                    padding: "5px 0"
                }
            }, [t._v("联系人：")]), r("input", {
                staticStyle: {
                    "border-bottom": "1px solid",
                    width: "140px"
                },
                attrs: {
                    type: "text"
                }
            })]), r("div", {
                staticStyle: {
                    "margin-bottom": "10px"
                }
            }, [r("span", {
                staticStyle: {
                    padding: "5px 0"
                }
            }, [t._v("电话：")]), r("input", {
                staticStyle: {
                    "border-bottom": "1px solid",
                    width: "140px"
                },
                attrs: {
                    type: "text"
                }
            })])]), r("table", {
                staticStyle: {
                    "border-collapse": "collapse",
                    margin: "20px 0"
                },
                attrs: {
                    border: "1 ",
                    width: "100%"
                }
            }, [r("tbody", [r("tr", {
                staticClass: "tabHard"
            }, [r("td", {
                attrs: {
                    width: "10% "
                }
            }, [t._v("商品名称")]), r("td", {
                attrs: {
                    width: "10% "
                }
            }, [t._v("项目")]), r("td", {
                attrs: {
                    width: "25% "
                }
            }, [t._v("内容")]), r("td", {
                attrs: {
                    width: "10% "
                }
            }, [t._v("数量")]), r("td", {
                attrs: {
                    width: "15% "
                }
            }, [t._v("金额")])]), t._l(t.priceFormData.goodsAttrMap, (function(e, a, i) {
                return r("tr", {
                    key: i
                }, [r("td", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: 0 == i,
                        expression: "number == 0"
                    }],
                    attrs: {
                        width: "10% ",
                        rowspan: t.strJsonLength(t.priceFormData.goodsAttrMap)
                    }
                }, [t._v(t._s(t.topNav.name) + "-" + t._s(t.subNav.name))]), r("td", {
                    attrs: {
                        width: "10% "
                    }
                }, "烫金1" == a ? [t._v("烫金")] : "局部UV1" == a ? [t._v("局部UV")] : "击凸1" == a ? [t._v("击凸")] : "击凹1" == a ? [t._v("击凹")] : [t._v(t._s(a))]), r("td", {
                    attrs: {
                        width: "25% "
                    }
                }, "cross" == e ? [t._v("单面贴窗")] : "cross2" == e ? [t._v("跨二面贴窗")] : "cross3" == e ? [t._v("跨三面贴窗")] : [t._v(t._s(e))]), 0 == i ? r("td", {
                    attrs: {
                        width: "10% ",
                        rowspan: t.strJsonLength(t.priceFormData.goodsAttrMap)
                    }
                }, [t._v(t._s(t.priceFormData.priceInfoMap.totalNum))]) : t._e(), 0 == i ? r("td", {
                    attrs: {
                        width: "15% ",
                        rowspan: t.strJsonLength(t.priceFormData.goodsAttrMap)
                    }
                }, [t._v(t._s(t.priceFormData.total_price) + "元")]) : t._e()])
            }
            )), r("tr", [r("td", {
                attrs: {
                    width: "10% "
                }
            }, [t._v("配送方式")]), r("td", {
                attrs: {
                    width: "10% ",
                    colspan: "2"
                }
            }), r("td", {
                attrs: {
                    width: "10% "
                }
            }, [t._v("运费预估")]), r("td", {
                attrs: {
                    width: "15% "
                }
            }, [t.isRemoteCity() ? [t._v(" " + t._s(t.priceFormData.shipping_fee) + "元 ")] : [r("span", [t._v(" " + t._s(t.priceFormData.shipping_fee - t.getShippeFreePrice(t.priceFormData.shipping_fee)) + "元 ")])]], 2)]), r("tr", [r("td", {
                attrs: {
                    width: "10% "
                }
            }, [t._v("货期")]), r("td", {
                attrs: {
                    width: "15% ",
                    colspan: "2"
                }
            }, [t._v(t._s(t.priceFormData.days) + "天")]), r("td", {
                attrs: {
                    width: "10% "
                }
            }, [t._v("总金额")]), r("td", {
                attrs: {
                    width: "15% "
                }
            }, [t.isRemoteCity() ? [t._v(" " + t._s(t.priceFormData.total_price + t.priceFormData.shipping_fee) + " ")] : [t._v("￥" + t._s(t.priceFormData.total_price + t.priceFormData.shipping_fee - t.getShippeFreePrice(t.priceFormData.shipping_fee)))], t._v("元 ")], 2)])], 2)]), r("div", {
                staticStyle: {
                    "margin-bottom": "10px"
                }
            }, [r("span", [t._v("备注：")]), r("input", {
                staticStyle: {
                    "border-bottom": "1px solid",
                    width: "600px"
                },
                attrs: {
                    type: "text"
                }
            })]), r("div", [t.priceFormData.priceInfoMap ? r("span", [t._v("报价时间：" + t._s(t.priceFormData.priceInfoMap.today))]) : t._e()])])]), r("div", {
                staticStyle: {
                    "text-align": "center",
                    "margin-bottom": "30px"
                }
            }, [r("el-button", {
                attrs: {
                    type: "danger"
                },
                on: {
                    click: t.quotation
                }
            }, [t._v("下载报价单")])], 1)])], 1)
        }
          , i = [function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("ol", {
                staticClass: "flex",
                staticStyle: {
                    padding: "0 10px"
                }
            }, [a("span", [t._v("纸张克重")]), a("span", [t._v("价格")])])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("span", {
                staticClass: "priceDvL"
            }, [a("i"), t._v("普通会员")])
        }
        , function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "guigeTis"
            }, [t._v(" ? "), a("div", {
                staticClass: "geTipstxt"
            }, [a("s"), a("div", {
                staticClass: "vipstx"
            }, [a("p", {
                staticClass: "flex"
            }, [a("span", [t._v("1.")]), t._v(" "), a("span", [t._v("从2019年7月1日开始计算累计PO数量，PO数量不含标签")])]), a("p", {
                staticClass: "flex"
            }, [a("span", [t._v("2.")]), t._v(" "), a("span", [t._v("线下报价订单不享受本优惠政策、卡盒特殊材质不享受优惠")])]), a("p", {
                staticClass: "flex"
            }, [a("span", [t._v("3.")]), t._v(" "), a("span", [t._v("第1次下单PO不参与优惠，商品交付后开始计数")])]), a("p", {
                staticClass: "flex"
            }, [a("span", [t._v("4.")]), t._v(" "), a("span", [t._v("物流费、税金不参与优惠")])]), a("p", {
                staticClass: "flex"
            }, [a("span", [t._v("5.")]), t._v(" "), a("span", [t._v("会员到期：2022-05-04")])])])])])
        }
        ]
          , o = (a("c975"),
        a("d81d"),
        a("a9e3"),
        a("b680"),
        a("5530"))
          , s = a("c0e9")
          , n = a.n(s)
          , c = a("8baf")
          , u = a("d342")
          , l = a("4360")
          , d = a("8958")
          , p = a("2e8e")
          , m = a("3731")
          , f = (a("5dda"),
        a("f82a"))
          , _ = a("fa7d")
          , b = {
            name: "PriceRight",
            props: {
                priceFormData: Object,
                formData: Object,
                isShort: Boolean,
                addCart: Function,
                addQuote: Function,
                priceValuation: Function,
                newlist: Array,
                newid: String,
                loadingstatus: Boolean,
                goodsId: Number
            },
            data: function() {
                return {
                    options: {
                        lazy: !0,
                        lazyLoad: function(t, e) {
                            var a = t.level
                              , r = [];
                            0 == a && (r = Object(p["e"])()),
                            1 == a && (r = Object(p["d"])(t.value)),
                            2 == a && (r = Object(p["d"])(t.value));
                            var i = r.map((function(e, r) {
                                return {
                                    value: 0 == a ? r + "" : t.value + "_" + r,
                                    label: e,
                                    leaf: a >= 2
                                }
                            }
                            ));
                            e(i)
                        }
                    },
                    checkList: ["复选框 A"],
                    SLXNumValue: 0,
                    quoteMobile: "",
                    radio: "纸张材质:单铜纸_350",
                    currentUser: {},
                    cateNavs: [],
                    paperlist: [],
                    zhflag: !0,
                    topNav: {
                        name: ""
                    },
                    subNav: {
                        name: ""
                    },
                    rank: {
                        1: "9.9",
                        2: "9.8",
                        3: "9.7",
                        4: "9.6",
                        5: "9.5",
                        6: "9.4"
                    },
                    dialogVisible: !1,
                    remoteCity: ["", "28", "33", "6", "25", "31", "32", "30"],
                    goodsIdsCheckList: {}
                }
            },
            watch: {
                $route: function() {
                    this.$refs.cascaderHandle.checkedValue = "",
                    this.topNav = Object(m["b"])(this.cateNavs, this.$route.query.cateId, this.$route.path.indexOf("/price")).data || {},
                    this.subNav = Object(m["a"])(this.cateNavs, this.$route.query.cateId, this.$route.query.subCateId, this.$route.path.indexOf("/price")) || {},
                    this.ubdateextends()
                }
            },
            created: function() {
                var t = this;
                null != localStorage.getItem(u["a"]) && (null != l["a"].getters.userInfo && l["a"].getters.userInfo.id ? this.setUserInfo() : l["a"].dispatch("GetUserInfo").then((function() {
                    t.setUserInfo()
                }
                ))),
                0 === l["a"].getters.priceCateNavs.length ? l["a"].dispatch("GetPriceCateNavs").then((function() {
                    var e;
                    (t.cateNavs = l["a"].getters.priceCateNavs,
                    t.$route.query.cateId && t.$route.query.subCateId) && (t.topNav = null === (e = Object(m["b"])(t.cateNavs, t.$route.query.cateId, t.$route.path.indexOf("/price"))) || void 0 === e ? void 0 : e.data,
                    t.subNav = Object(m["a"])(t.cateNavs, t.$route.query.cateId, t.$route.query.subCateId, t.$route.path.indexOf("/price")))
                }
                )) : (this.cateNavs = l["a"].getters.priceCateNavs,
                this.$route.query.cateId && this.$route.query.subCateId && (this.topNav = Object(m["b"])(this.cateNavs, this.$route.query.cateId, this.$route.path.indexOf("/price")).data,
                this.subNav = Object(m["a"])(this.cateNavs, this.$route.query.cateId, this.$route.query.subCateId, this.$route.path.indexOf("/price")))),
                this.ubdateextends()
            },
            methods: Object(o["a"])(Object(o["a"])({}, {
                strEquals: d["d"],
                strJsonLength: d["e"]
            }), {}, {
                setUserInfo: function() {
                    var t = this;
                    t.currentUser = l["a"].getters.userInfo,
                    t.currentUser.vipRank > 6 && t.currentUser.vipRank <= 10 && (t.currentUser.vipRank = 6)
                },
                goodsIdsCheck: Object(_["debounce"])((function(t) {
                    var e = this
                      , a = (new Date).getTime()
                      , r = new Date(e.$store.state.user.activitye).getTime();
                    a > r || Object(f["e"])({
                        list: [e.goodsId]
                    }).then((function(t) {
                        t.success
                    }
                    ))
                }
                ), 500),
                setSLXNumValue: function(t) {
                    this.SLXNumValue = t
                },
                getUnitPrice: function(t, e) {
                    return t > 0 && e > 0 ? (t / e).toFixed(2) : 0
                },
                getDiscountPrice: function(t) {
                    var e = this;
                    return e.goodsIdsCheckList[e.goodsId] ? Math.ceil(.9 * t) : t
                },
                selectExtends: function(t) {
                    Object(d["d"])(t, this.priceFormData.extends) || (this.priceFormData.extends = t,
                    this.priceValuation(this.radio))
                },
                ubdateextends: function() {
                    1 != this.$route.query.cateId && 42 != this.$route.query.subCateId || (this.priceFormData.extends = "1")
                },
                handlerValue: function(t) {
                    this.priceFormData.provinceId = t ? t[0] : "",
                    this.priceFormData.cityId = t ? t[1] : "",
                    this.priceFormData.countyId = t ? t[2] : "",
                    console.log("val", t),
                    this.priceFormData.total_price = 0,
                    this.priceValuation(this.radio)
                },
                PaperChange: function() {
                    this.getDiscountPrice(),
                    this.priceValuation(this.radio)
                },
                PaperChange2: function() {
                    this.priceValuation(this.radio)
                },
                getraradio: function() {
                    return this.radio
                },
                setradio: function(t) {
                    this.radio = t
                },
                emptyId: function() {
                    this.radio = ""
                },
                quotation: function(t) {
                    var e = "傲彩报价单";
                    document.documentElement.scrollTop || document.body.scrollTop;
                    document.body.scrollTop = 0,
                    document.documentElement.scrollTop = 0,
                    n()(document.querySelector("#pdfDom"), {
                        allowTaint: !0,
                        taintTest: !1,
                        useCORS: !0,
                        dpi: 4 * window.devicePixelRatio,
                        scale: 4
                    }).then((function(t) {
                        var a = t.width
                          , r = t.height
                          , i = a / 592.28 * 841.89
                          , o = r
                          , s = 0
                          , n = 595.28
                          , u = 592.28 / a * r
                          , l = t.toDataURL("image/jpeg", 1)
                          , d = new c["a"]("","pt","a4");
                        if (o < i)
                            d.addImage(l, "JPEG", 0, 0, n, u);
                        else
                            while (o > 0)
                                d.addImage(l, "JPEG", 0, s, n, u),
                                o -= i,
                                s -= 841.89,
                                o > 0 && d.addPage();
                        d.save(e + ".pdf")
                    }
                    ))
                },
                isRemoteCity: function() {
                    var t = new Date
                      , e = new Date(this.$store.state.user.activitys)
                      , a = new Date(this.$store.state.user.activitye);
                    return t < e || t > a || (this.remoteCity.indexOf(this.priceFormData.provinceId) > -1 || this.$store.state.user.activitystatus)
                },
                getShippeFreePercent: function() {
                    var t = new Date
                      , e = new Date(this.$store.state.user.activitys)
                      , a = new Date(this.$store.state.user.activitye);
                    if (!(t < e || t > a) && !(this.remoteCity.indexOf(this.priceFormData.provinceId) > -1))
                        return "19" == this.priceFormData.provinceId ? .3 : .8
                },
                getShippeFreePrice: function(t) {
                    return t * this.getShippeFreePercent() - 2e3 > 0 ? 2e3 : Math.floor(t * this.getShippeFreePercent())
                },
                isCmsHidden: function() {
                    return !this.$route.query.isCms
                }
            })
        }
          , g = b
          , h = (a("8a8e"),
        a("c6e5"),
        a("2877"))
          , v = Object(h["a"])(g, r, i, !1, null, "0493baad", null);
        e["a"] = v.exports
    },
    4543: function(t, e, a) {
        "use strict";
        a("8ea2")
    },
    4590: function(t, e, a) {
        "use strict";
        a.d(e, "b", (function() {
            return o
        }
        )),
        a.d(e, "a", (function() {
            return s
        }
        ));
        var r = a("365c")
          , i = a("b775");
        function o(t) {
            return Object(i["a"])({
                url: r["a"].producer.saveProducer,
                method: "post",
                data: t
            })
        }
        function s(t) {
            return Object(i["a"])({
                url: r["a"].producer.addQuote,
                method: "post",
                data: t
            })
        }
    },
    "466d": function(t, e, a) {
        "use strict";
        var r = a("d784")
          , i = a("825a")
          , o = a("50c4")
          , s = a("1d80")
          , n = a("8aa5")
          , c = a("14c3");
        r("match", 1, (function(t, e, a) {
            return [function(e) {
                var a = s(this)
                  , r = void 0 == e ? void 0 : e[t];
                return void 0 !== r ? r.call(e, a) : new RegExp(e)[t](String(a))
            }
            , function(t) {
                var r = a(e, t, this);
                if (r.done)
                    return r.value;
                var s = i(t)
                  , u = String(this);
                if (!s.global)
                    return c(s, u);
                var l = s.unicode;
                s.lastIndex = 0;
                var d, p = [], m = 0;
                while (null !== (d = c(s, u))) {
                    var f = String(d[0]);
                    p[m] = f,
                    "" === f && (s.lastIndex = n(u, o(s.lastIndex), l)),
                    m++
                }
                return 0 === m ? null : p
            }
            ]
        }
        ))
    },
    4824: function(t, e, a) {
        "use strict";
        var r = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "cardtabB"
            }, [a("div", {
                staticClass: "guigeImg",
                style: 10 == t.$route.query.cateId || 152 == t.$route.query.cateId ? "display: none;" : ""
            }, [a("img", {
                class: t.showClass ? "rotatemg" : "",
                attrs: {
                    src: t.formData.goodAttrVo.coverPath
                },
                on: {
                    mouseout: function(e) {
                        return t.abc(!1)
                    }
                }
            })]), a("el-form", {
                ref: "formData",
                staticClass: "guigeTop",
                attrs: {
                    model: t.formData,
                    "label-width": "130px",
                    size: "small"
                },
                nativeOn: {
                    submit: function(t) {
                        t.preventDefault()
                    }
                }
            }, [a("el-form-item", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "143" === t.$route.query.cateId && "144" == t.$route.query.subCateId,
                    expression: "$route.query.cateId === '143' && $route.query.subCateId == '144'"
                }],
                attrs: {
                    required: "",
                    label: "名片尺寸"
                }
            }, [a("div", [t._v("长90mm*宽54mm")])]), t._l(t.commonVoList, (function(e, r) {
                return [a("el-form-item", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.ifhide(e),
                        expression: "ifhide(item)"
                    }],
                    key: "common_" + r,
                    attrs: {
                        required: !0,
                        label: e.name
                    }
                }, [a("template", {
                    slot: "label"
                }, [t._v(" " + t._s(e.name) + " "), "TKKS" === e.code && "85" !== t.$route.query.subCateId ? a("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start"
                    }
                }, [a("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [t._v("同款指参数工艺及数量相同，仅设计稿内容不同的" + t._s("13" === t.$route.query.cateId ? t.formData.subCateName : t.formData.cateName))]), a("em", {
                    staticClass: "guigeTis"
                }, [t._v("?")])]) : t._e()], 1), "input" === e.groupType ? a("div", ["SIZE" === e.code ? a("div", {
                    staticClass: "inputBx"
                }, [t.formData.goodAttrVo.id ? [t._l(e.attrList, (function(e) {
                    return [t.formData.goodAttrVo.id && 1 === t.formData.goodAttrVo[e.code] ? a("div", {
                        key: e.id,
                        staticClass: "inputBxrow inputBxrowSize"
                    }, [a("el-input", {
                        staticStyle: {
                            width: "180px"
                        },
                        attrs: {
                            placeholder: e.inputTips,
                            size: "small"
                        },
                        on: {
                            change: function(a) {
                                return t.numberChange(a, {
                                    data: t.commonFormData.inputValues,
                                    code: e.code,
                                    name: e.name,
                                    dataKey: e.groupId + "_" + e.id,
                                    min: t.formData.goodAttrVo[e.code + "Min"],
                                    max: t.formData.goodAttrVo[e.code + "Max"]
                                })
                            }
                        },
                        model: {
                            value: t.commonFormData.inputValues[e.groupId + "_" + e.id],
                            callback: function(a) {
                                t.$set(t.commonFormData.inputValues, e.groupId + "_" + e.id, a)
                            },
                            expression: "commonFormData.inputValues[attr.groupId + '_' + attr.id]"
                        }
                    }, ["24" == t.$route.query.subCateId || "32" == t.$route.query.subCateId ? a("template", {
                        slot: "append"
                    }, [t._v(t._s(e.suffix))]) : a("template", {
                        slot: "append"
                    }, [t._v(t._s(1 === t.formData.goodAttrVo[e.code] ? t.formData.appendsDesc[e.code] : e.suffix))])], 2)], 1) : t._e()]
                }
                ))] : t._l(e.attrList, (function(e) {
                    return a("div", {
                        key: e.id,
                        staticClass: "inputBxrow"
                    }, [a("el-input", {
                        attrs: {
                            placeholder: e.inputTips,
                            size: "small"
                        },
                        on: {
                            change: t.priceValuation
                        },
                        model: {
                            value: t.commonFormData.inputValues[e.groupId + "_" + e.id],
                            callback: function(a) {
                                t.$set(t.commonFormData.inputValues, e.groupId + "_" + e.id, a)
                            },
                            expression: "commonFormData.inputValues[attr.groupId + '_' + attr.id]"
                        }
                    }, [a("template", {
                        slot: "append"
                    }, [t._v(t._s(e.suffix))])], 2)], 1)
                }
                ))], 2) : a("div", {
                    staticClass: "flex inputBx"
                }, [t._l(e.attrList, (function(r, i) {
                    return a("div", {
                        key: i,
                        staticClass: "inputBxrow"
                    }, [r.max ? a("el-input", {
                        attrs: {
                            placeholder: r.inputTips,
                            size: "small"
                        },
                        on: {
                            change: function(e) {
                                return t.numberChange(e, {
                                    data: t.commonFormData.inputValues,
                                    name: r.name,
                                    dataKey: r.groupId + "_" + r.id,
                                    min: r.min,
                                    max: 38 == t.$route.query.subCateId && 2 == i ? "200" : r.max
                                }, "yssl")
                            }
                        },
                        model: {
                            value: t.commonFormData.inputValues[r.groupId + "_" + r.id],
                            callback: function(e) {
                                t.$set(t.commonFormData.inputValues, r.groupId + "_" + r.id, e)
                            },
                            expression: "commonFormData.inputValues[attr.groupId + '_' + attr.id]"
                        }
                    }, [a("template", {
                        slot: "append"
                    }, [t._v(t._s(r.suffix))])], 2) : a("el-input", {
                        attrs: {
                            placeholder: r.inputTips,
                            size: "small"
                        },
                        on: {
                            change: function(a) {
                                return t.otherInputChange(a, {
                                    data: t.commonFormData.inputValues,
                                    code: e.code,
                                    name: r.name,
                                    dataKey: r.groupId + "_" + r.id
                                })
                            }
                        },
                        model: {
                            value: t.commonFormData.inputValues[r.groupId + "_" + r.id],
                            callback: function(e) {
                                t.$set(t.commonFormData.inputValues, r.groupId + "_" + r.id, e)
                            },
                            expression: "commonFormData.inputValues[attr.groupId + '_' + attr.id]"
                        }
                    }, ["31" == t.$route.query.subCateId && "102" == r.id || "31" == t.$route.query.subCateId && "202" == r.id ? a("template", {
                        slot: "append"
                    }, [t._v("mm")]) : a("template", {
                        slot: "append"
                    }, [t._v(t._s(r.suffix))])], 2), "YSSL" === e.code && "70" === t.$route.query.cateId && "85" !== t.$route.query.subCateId && "96" !== t.$route.query.subCateId ? a("span", {
                        staticStyle: {
                            "font-size": "10px",
                            color: "#9a9a9a"
                        }
                    }, [t._v("（100个起订）")]) : t._e(), "YSSL" === e.code && "3" === t.$route.query.cateId ? a("span", {
                        staticStyle: {
                            "font-size": "10px",
                            color: "#9a9a9a"
                        }
                    }, [t._v("（20个起订）")]) : t._e(), "YSSL" !== e.code || "5" !== t.$route.query.cateId && "6" !== t.$route.query.cateId && "9" !== t.$route.query.cateId ? t._e() : a("span", {
                        staticStyle: {
                            "font-size": "12px",
                            color: "#F00"
                        }
                    }, ["101" === t.$route.query.subCateId ? [t._v(" （100个起印，订购数量不能超过3000个） ")] : [t._v(" （该品类无备品，请评估下单数量） ")]], 2)], 1)
                }
                )), !t.$route.query.isCms || "BJ1_SIZE" !== e.code || "36" !== t.$route.query.subCateId && "37" !== t.$route.query.subCateId && "38" !== t.$route.query.subCateId ? "BJ1_SIZE" !== e.code || "36" !== t.$route.query.subCateId && "37" !== t.$route.query.subCateId && "38" !== t.$route.query.subCateId ? t._e() : a("span", {
                    staticClass: "setParts addPart icon icon-add",
                    attrs: {
                        title: "增加部件"
                    },
                    on: {
                        click: t.addCommonSize
                    }
                }, [t.$route.query.parts ? a("i", {
                    staticClass: "el-icon-circle-plus-outline",
                    staticStyle: {
                        "font-size": "23px",
                        margin: "-2px -2px 0 -2px"
                    }
                }) : t._e()]) : a("span", {
                    staticClass: "setParts addPart el-icon-plus",
                    attrs: {
                        title: "增加部件"
                    },
                    on: {
                        click: t.addCommonSize
                    }
                }), !t.$route.query.isCms || "BJ2_SIZE" !== e.code && "BJ3_SIZE" !== e.code && "BJ4_SIZE" !== e.code || "36" !== t.$route.query.subCateId && "37" !== t.$route.query.subCateId && "38" !== t.$route.query.subCateId ? "BJ2_SIZE" !== e.code && "BJ3_SIZE" !== e.code && "BJ4_SIZE" !== e.code || "36" !== t.$route.query.subCateId && "37" !== t.$route.query.subCateId && "38" !== t.$route.query.subCateId ? t._e() : a("span", {
                    staticClass: "setParts delPart icon icon-colse",
                    attrs: {
                        title: "删除部件"
                    },
                    on: {
                        click: t.removeCommonSize
                    }
                }, [t.$route.query.parts ? a("i", {
                    staticClass: "el-icon-circle-close",
                    staticStyle: {
                        "font-size": "23px",
                        margin: "-2px -2px 0 -2px"
                    }
                }) : t._e()]) : a("span", {
                    staticClass: "setParts delPart el-icon-close",
                    attrs: {
                        title: "删除部件"
                    },
                    on: {
                        click: t.removeCommonSize
                    }
                })], 2), "YSSL" === e.code && "55" === t.$route.query.subCateId ? a("span", {
                    staticClass: "plspn f12 C9"
                }, [t._v("(可输入100,200,500,1000,2000,3000,5000,10000以上的10000整数倍)")]) : t._e(), "YSSL" === e.code && "10" === t.$route.query.cateId ? a("span", {
                    staticClass: "plspn f12 C9"
                }, [t._v("(5000个起订)")]) : t._e(), "YSSL" !== e.code || "51" !== t.$route.query.subCateId && "120" !== t.$route.query.subCateId ? t._e() : a("span", {
                    staticClass: "plspn f12 C9"
                }, [t._v("(1000个起订,可输入1000整数倍)")]), "YSSL" === e.code && "82" === t.$route.query.subCateId ? a("span", {
                    staticClass: "plspn f12 C9"
                }, [t._v("(光杯500个起订,定制5000个起订,可输入500整数倍;)")]) : t._e(), "YSSL" === e.code && "52" === t.$route.query.subCateId ? a("span", {
                    staticClass: "plspn f12 C9"
                }, [t._v("(1000个起订,可输入1000,2000,3000,5000；10000以上的1000整数倍)")]) : t._e()]) : t._e()], 2), a("el-form-item", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "SIZE" === e.code && "1" === t.$route.query.cateId && "24" !== t.$route.query.subCateId && t.validData() && t.formData.goodSize.goodAl,
                        expression: "item.code === 'SIZE' && $route.query.cateId === '1' && $route.query.subCateId !== '24' && validData() && formData.goodSize.goodAl"
                    }],
                    key: "common_size_warning" + r,
                    staticClass: "red",
                    attrs: {
                        label: "温馨提示"
                    }
                }, [a("p", [t._v("当尺寸盒型长超过高1/3或宽超过高1/2，存在喇叭口风险，建议修改盒型或更改开盒方向！")])]), "SIZE" === e.code && t.formData.goodSize.goodAl && "85" !== t.$route.query.subCateId && "96" !== t.$route.query.subCateId && "24" !== t.$route.query.subCateId ? a("el-form-item", {
                    key: "common_size_" + r,
                    attrs: {
                        label: "展开尺寸"
                    }
                }, [t._v(" " + t._s(t.formData.goodSize.goodAl) + "mm*" + t._s(t.formData.goodSize.goodAw) + "mm ")]) : t._e()]
            }
            )), a("el-form-item", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "143" === t.$route.query.cateId && "144" == t.$route.query.subCateId,
                    expression: "$route.query.cateId === '143' && $route.query.subCateId == '144'"
                }],
                attrs: {
                    label: "说明:"
                }
            }, [a("div", {
                staticStyle: {
                    width: "400px",
                    color: "#898989"
                }
            }, [t._v("印刷名片100张起订，每100张为一盒，下单数量1000张内按100增加，数量1000以上，按500来增加，5000以上，按照每1000来增加")])]), a("el-form-item", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "145" === t.$route.query.cateId && "146" == t.$route.query.subCateId,
                    expression: "$route.query.cateId === '145' && $route.query.subCateId == '146'"
                }],
                attrs: {
                    label: "说明:"
                }
            }, [a("div", {
                staticStyle: {
                    width: "400px",
                    color: "#898989"
                }
            }, [t._v("印刷数量联单50本起订，按50本、100本及100倍数来下单")])]), 122 == t.$route.query.cateId ? a("p", {
                staticStyle: {
                    "margin-left": "66px",
                    color: "#606266"
                }
            }, [t._v("盒子尺寸 " + t._s(t.msize) + "mm")]) : t._e()], 2)], 1)
        }
          , i = []
          , o = (a("c975"),
        a("b0c0"),
        {
            name: "PriceCommon",
            props: {
                commonVoList: Array,
                commonFormData: Object,
                formData: Object,
                priceValuation: Function,
                numberChange: Function,
                otherInputChange: Function,
                addCommonSize: Function,
                removeCommonSize: Function
            },
            data: function() {
                return {
                    showClass: !1,
                    SLXNumValue: 0,
                    msize: sessionStorage.getItem("size") || ""
                }
            },
            methods: {
                abc: function(t) {
                    var e = this;
                    e.showClass = !0,
                    setTimeout((function() {
                        e.showClass = !1
                    }
                    ), 800)
                },
                setSLXNumValue: function(t) {
                    this.SLXNumValue = t
                },
                validData: function() {
                    var t = this.commonFormData.inputValues["100_101"]
                      , e = this.commonFormData.inputValues["100_102"]
                      , a = this.commonFormData.inputValues["100_103"];
                    if (t / a >= 1.3 || e / a >= 1.5)
                        return !0
                },
                ifhide: function(t) {
                    if (this.$route.query.isnum)
                        return !0;
                    var e = ["印刷数量", "每套数量", "同款款数"];
                    return !this.$route.query.isCms || -1 == e.indexOf(t.name)
                }
            }
        })
          , s = o
          , n = (a("4543"),
        a("2877"))
          , c = Object(n["a"])(s, r, i, !1, null, null, null);
        e["a"] = c.exports
    },
    "4ce1": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABL5JREFUaEPtml9I4lkUx++8FBs7BRMVgWYPmr2tKT0oFUsGQzK9NJA/gkqEliIIBtP+4DzNIGK4Cz0sFASjL+XCRDFhD+m0FOWT9uchMqKsjYViDWqHWeyl5ezOjYtUeu/vOmOiL9Hvd+/9nc/5nns89/x8gv7/PEUI/YgQeoYQKvxy7TH/iSGEQgihv598gWvPETBSlARCaA4AnyOEZI9Zrgds/xMAf8pROMBK5DogygM+9vDNK5hXMMs9kA9RMQLJ5fIinU73rKGhQSqRSErxWjs7O6e7u7t/eb3eUzHrpzM3Iwo6nU6VIAj6yspKSUFBQdF9hlxfX38+Ojran5+fD42MjGylYzDtGK6AU1NTWqPR2FZcXHyrVroGXV1dxWdmZj709fVBkcztwwVQr9eXTk9Pm2QyWQ1p2cnJSTQUCm0dHh5eLC8v/wH3pFLpd2VlZUX19fUSrVarqqqqUpJzNjc3N6xW62IwGIzzoBQNCHBzc3MWrBqEXTAYDA4ODn48ODj4nMpImO9yudrUarUWjwU129vb3TwgRQGCcX6/3473GShmNps9LIYlO4oXJDNgskFLS0sfDAbDYirFUt2PRCKmurq6/9QESI1G8zadSLhvXWbAWCxmwXuOFxw2koSMRCIhjUbzLpVjuAJCtuzt7TXBohCWMpnsZ1YD7poH35/r6+uW8vJyCdy32Wzu8fHxfZZnMCl4eXnpgKQCCcVgMLxl2XOpjO3u7pZ4PJ7XMO74+Hi/urranWrOXfepAUn1eIdmsoHhcNiEsyuritSAe3t7/UqlUgXGtLS0jGVCPQza1dUl9Xq9dvh/bW0t2NTU9ButitSANzc3k5nae3cZj5MZbIfCwsJXGQW0Wq01LpfLAg/x+Xw+QRA+0j6Qdvzq6mpHY2OjHuY1NzePraysUFU4VApCET08PNwPDxsaGnK73W6mzEYDSe55p9P56+jo6DbNfCpAv9//orW1tY3VmzSG4bFk1ExOTr6jLcbzgKTXZ2dnm41GozFnFRS7H1hCVOy+pwpR8nvpW2RRhULxirbwpgIEBRKJxC9wPBJTPtEoeXZ29hpqUjhZlJSUjNHMhbHUgGQlw+JRGgPJiIGTvlqt9tDMZwIk0/bXrEV7enresHThqBUEr3yN0wQcqAOBgENsWcgESKp4fn5+WlFR8YY2dB4aD+fBcDhsx30eMUU9EyAYR+5FsafuZFhybdZTBF6TGTDZyzwgYc1AINCPWyGsmZN0GDMgLMKzEwZhb7fbTclNY5b6kxvgXZBwjaZ5C2CCIOiS+6IkqBhIUQpiT0Fo+Xy+DtJIuAcJKBqNRjc2Nvbj8fhtE1ihUJTW1tZKlUqlEjeW8Fqw58xm86LNZvsBN7bgHiskF0BsnMPhUA0MDHSwvJuA7tzExMQiecYka19WSK6AGNRisdR0dnbq5HJ5zUOwkES2t7e3FhYWtu47PIuFzAgguckhEalUqlIIS3z94uLiH3gZk277gYSk7c1kHJBXAYAhaRvNjwaQ1VF5QFbPZcu8vILZogSrHXkFWT2XLfNAwZ4c/DnzrX8BEFrxldnicc52xADwe4TQyxxUEX6U/h4A4QOQOoRQNWcPfovlAAxesf2OEPr0L20OiufA0j8tAAAAAElFTkSuQmCC"
    },
    "5c76": function(t, e, a) {
        "use strict";
        a("0dab")
    },
    "6c73": function(t, e, a) {
        "use strict";
        a.d(e, "y", (function() {
            return D
        }
        )),
        a.d(e, "c", (function() {
            return O
        }
        )),
        a.d(e, "E", (function() {
            return x
        }
        )),
        a.d(e, "d", (function() {
            return I
        }
        )),
        a.d(e, "h", (function() {
            return A
        }
        )),
        a.d(e, "F", (function() {
            return S
        }
        )),
        a.d(e, "i", (function() {
            return V
        }
        )),
        a.d(e, "j", (function() {
            return Z
        }
        )),
        a.d(e, "s", (function() {
            return E
        }
        )),
        a.d(e, "C", (function() {
            return F
        }
        )),
        a.d(e, "m", (function() {
            return N
        }
        )),
        a.d(e, "g", (function() {
            return B
        }
        )),
        a.d(e, "A", (function() {
            return Y
        }
        )),
        a.d(e, "B", (function() {
            return z
        }
        )),
        a.d(e, "G", (function() {
            return K
        }
        )),
        a.d(e, "v", (function() {
            return W
        }
        )),
        a.d(e, "x", (function() {
            return Q
        }
        )),
        a.d(e, "w", (function() {
            return tt
        }
        )),
        a.d(e, "a", (function() {
            return rt
        }
        )),
        a.d(e, "e", (function() {
            return it
        }
        )),
        a.d(e, "z", (function() {
            return ot
        }
        )),
        a.d(e, "b", (function() {
            return ut
        }
        )),
        a.d(e, "D", (function() {
            return lt
        }
        )),
        a.d(e, "p", (function() {
            return dt
        }
        )),
        a.d(e, "t", (function() {
            return pt
        }
        )),
        a.d(e, "o", (function() {
            return mt
        }
        )),
        a.d(e, "r", (function() {
            return _t
        }
        )),
        a.d(e, "f", (function() {
            return bt
        }
        )),
        a.d(e, "n", (function() {
            return ht
        }
        )),
        a.d(e, "q", (function() {
            return vt
        }
        )),
        a.d(e, "u", (function() {
            return Ct
        }
        )),
        a.d(e, "k", (function() {
            return xt
        }
        )),
        a.d(e, "l", (function() {
            return It
        }
        ));
        a("a4d3"),
        a("e01a"),
        a("99af"),
        a("4de4"),
        a("7db0"),
        a("4160"),
        a("caad"),
        a("c975"),
        a("baa5"),
        a("a434"),
        a("b0c0"),
        a("d3b7"),
        a("ac1f"),
        a("2532"),
        a("5319"),
        a("1276"),
        a("159b"),
        a("ddb0"),
        a("96cf");
        var r = a("5530")
          , i = a("1da1")
          , o = a("2909")
          , s = a("8958")
          , n = a("5dda")
          , c = a("83b0")
          , u = a("90b9")
          , l = a("4489")
          , d = a("4590")
          , p = a("4360")
          , m = a("3731")
          , f = a("1101")
          , _ = a("b85c")
          , b = [{
            name: "背面处理",
            subCateId: 17
        }, {
            name: "粘合",
            subCateId: 73
        }];
        function g(t, e) {
            if (t.length > 0)
                for (var a = e.$route.query.subCateId, r = 0; r < t.length; r++) {
                    var i = t[r];
                    h(t, r, i, a)
                }
        }
        function h(t, e, a, r) {
            var i, o = Object(_["a"])(b);
            try {
                for (o.s(); !(i = o.n()).done; ) {
                    var s = i.value;
                    a.miniZtAttrGroup.name == s.name && r == s.subCateId && t.splice(e, 1)
                }
            } catch (n) {
                o.e(n)
            } finally {
                o.f()
            }
        }
        var v = a("fa7d")
          , y = null;
        function D(t) {
            y = t
        }
        function C() {
            y.formVoList.sort(et),
            y.groupVoList = [];
            for (var t = y.formVoList, e = 0; e < t.length; e++) {
                var a = t[e]
                  , r = null;
                null == a.miniZtAttrGroup.groupName && (a.miniZtAttrGroup.groupName = "");
                for (var i = 0; i < y.groupVoList.length; i++) {
                    var o = y.groupVoList[i];
                    if (a.miniZtAttrGroup.groupName === o.name) {
                        o.sortOrder > a.miniZtAttrGroup.sortOrder && (o.sortOrder = a.miniZtAttrGroup.sortOrder),
                        r = o;
                        break
                    }
                }
                null == r && (r = {
                    name: a.miniZtAttrGroup.groupName,
                    sortOrder: a.miniZtAttrGroup.sortOrder,
                    list: []
                },
                y.groupVoList.push(r)),
                r.list.push(a)
            }
        }
        function O(t, e) {
            for (var a, r = [], i = 0, n = [], c = function(e) {
                var a = y.formVoList[e];
                if (t === a.miniZtAttrGroup.parentAttrId) {
                    if (Object(s["b"])(a.miniZtAttrGroup.code, "_COPY"))
                        return r = [],
                        "break";
                    y.voList.forEach((function(t) {
                        if (a.miniZtAttrGroup.id == t.miniZtAttrGroup.pid) {
                            if (Object(s["b"])(t.miniZtAttrGroup.code, "_COPY"))
                                return;
                            t.miniZtAttrGroup.code = t.miniZtAttrGroup.code + "_COPY",
                            n.push(t)
                        }
                    }
                    )),
                    a.miniZtAttrGroup.sortOrder > i && (i = a.miniZtAttrGroup.sortOrder,
                    a.miniZtAttrGroup.parentLevel);
                    var o = JSON.parse(JSON.stringify(a));
                    o.miniZtAttrGroup.code = o.miniZtAttrGroup.code + "_COPY",
                    r.push(o)
                }
            }, u = 0; u < y.formVoList.length; u++) {
                var l = c(u);
                if ("break" === l)
                    break
            }
            n && (n = JSON.parse(JSON.stringify(n)),
            n.forEach((function(t) {
                var e;
                t.miniZtAttrGroup.sortOrder = i + 1,
                t.miniZtAttrGroup.id = t.miniZtAttrGroup.id + y.copyIdStart,
                t.miniZtAttrGroup.parentAttrId = t.miniZtAttrGroup.parentAttrId + y.copyIdStart,
                t.miniZtAttrGroup.pid = t.miniZtAttrGroup.pid + y.copyIdStart,
                t.miniZtAttrGroup.actualValue = null === (e = t.miniZtAttrGroup.actualValue) || void 0 === e ? void 0 : e.replace("1", "2"),
                t.attrList.forEach((function(t) {
                    t.id = t.id + y.copyIdStart,
                    t.groupId = t.groupId + y.copyIdStart
                }
                ))
            }
            )),
            (a = y.voList).push.apply(a, Object(o["a"])(n)));
            for (var d = 0; d < r.length; d++) {
                r[d].copyId = r[d].miniZtAttrGroup.id,
                r[d].miniZtAttrGroup.sortOrder = i + d + 1,
                r[d].miniZtAttrGroup.id = r[d].miniZtAttrGroup.id + y.copyIdStart;
                for (var p = 0; p < r[d].attrList.length; p++)
                    r[d].attrList[p].id = r[d].attrList[p].id + y.copyIdStart,
                    r[d].attrList[p].groupId = r[d].miniZtAttrGroup.id,
                    r[d].attrList[p].actualValue = r[d].attrList[p].actualValue.replace("1", "2");
                r[d].copy = !0;
                for (var m = !0, f = 0; f < y.voList.length; f++)
                    r[d].miniZtAttrGroup.id === y.voList[f].miniZtAttrGroup.id && (m = !1);
                m && y.voList.push(r[d]),
                y.formVoList.push(r[d]),
                y.$set(y.formData.radioSelectValues, r[d].miniZtAttrGroup.id, r[d].miniZtAttrGroup.id + "_" + r[d].attrList[0].id)
            }
            y.formVoList.sort(et),
            C(),
            e || (1 == y.$route.query.cateId ? (y.getpaperId(),
            y.priceValuation2()) : y.priceValuation())
        }
        function x(t) {
            var e = t.pid
              , a = t.copyIndex
              , r = t.parentAttrId
              , i = t.isCopy;
            if (!i)
                for (var o in y.formData.checkBoxSelectValues)
                    for (var n = y.formData.checkBoxSelectValues[o], c = 0; c < n.length; c++) {
                        var u = n[c].split("_")[1];
                        Object(s["d"])(u, r) && n.splice(c, 1)
                    }
            for (var l = function(t) {
                if (y.formVoList[t].miniZtAttrGroup.parentAttrId === r)
                    if (a)
                        i && Object(s["b"])(y.formVoList[t].miniZtAttrGroup.code, a + "_COPY") && (y.formVoList.splice(t, 1),
                        t--);
                    else if (i && Object(s["b"])(y.formVoList[t].miniZtAttrGroup.code, "_COPY")) {
                        y.formVoList.filter((function(e, a) {
                            e.miniZtAttrGroup.pid == y.formVoList[t].miniZtAttrGroup.id && y.formVoList.splice(a, 1)
                        }
                        ));
                        y.formVoList.splice(t, 1),
                        t--
                    } else
                        i || ("烫金" == y.formVoList[t].miniZtAttrGroup.name ? U(y.formVoList[t].miniZtAttrGroup.parentAttrId) : y.formVoList.splice(t, 1),
                        t--);
                d = t
            }, d = 0; d < y.formVoList.length; d++)
                l(d);
            C(),
            y.$set(y.formData, "oldCheckBoxSelectVals", JSON.parse(JSON.stringify(y.formData.checkBoxSelectValues))),
            1 == y.$route.query.cateId ? (y.getpaperId(),
            y.priceValuation2()) : y.priceValuation(),
            y.formData.checkBoxSelectValues[e].length > 1 ? y.formData.showMsg = !0 : y.formData.showMsg = !1
        }
        function I(t, e) {
            for (var a = [], r = 0, i = 0, o = T(t), n = 0; n < y.formVoList.length; n++) {
                var c = y.formVoList[n];
                Object(s["c"])(c.miniZtAttrGroup.code, o.miniZtAttrGroup.code) && i++
            }
            if (i >= e)
                return y.$message({
                    type: "error",
                    message: "最多增加" + e + "层"
                }),
                !1;
            for (var u = 0; u < y.formVoList.length; u++) {
                var l = y.formVoList[u];
                if (t === l.miniZtAttrGroup.id) {
                    l.miniZtAttrGroup.sortOrder > r && (r = l.miniZtAttrGroup.sortOrder,
                    l.miniZtAttrGroup.parentLevel);
                    var d = JSON.parse(JSON.stringify(l));
                    d.miniZtAttrGroup.code = d.miniZtAttrGroup.code + "_" + i + "_COPY",
                    a.push(d)
                }
            }
            for (var p = 0; p < a.length; p++) {
                a[p].copyId = a[p].miniZtAttrGroup.id,
                a[p].miniZtAttrGroup.sortOrder = r + p + 1,
                a[p].miniZtAttrGroup.name = o.miniZtAttrGroup.actualValue + (i + 1),
                a[p].miniZtAttrGroup.id = a[p].miniZtAttrGroup.id + y.copyIdStart + i;
                for (var m = 0; m < a[p].attrList.length; m++)
                    a[p].attrList[m].id = a[p].attrList[m].id + y.copyIdStart + i,
                    a[p].attrList[m].groupId = a[p].miniZtAttrGroup.id,
                    a[p].attrList[m].actualValue = a[p].attrList[m].actualValue.replace("1", i + 1 + "");
                a[p].copyIndex = i,
                a[p].copy = !0;
                for (var f = !0, _ = 0; _ < y.voList.length; _++)
                    a[p].miniZtAttrGroup.id === y.voList[_].miniZtAttrGroup.id && (f = !1);
                f && y.voList.push(a[p]),
                y.formVoList.push(a[p])
            }
            y.formVoList.sort(et),
            C(),
            y.priceValuation()
        }
        function A(t) {
            var e = t.event
              , a = e[0].split("_")
              , r = a[0]
              , i = a[1];
            W(r, i),
            y.formVoList.sort(et),
            C()
        }
        function S(t) {
            var e = t.id
              , a = t.isCopy;
            if (a) {
                for (var r = 0; r < y.formVoList.length; r++)
                    if (y.formVoList[r].miniZtAttrGroup.id === e) {
                        y.formVoList.splice(r, 1),
                        r--;
                        break
                    }
            } else {
                delete y.formData.radioSelectValues[e];
                for (var i = 0; i < y.formVoList.length; i++)
                    y.formVoList[i].copy && y.formVoList[i].copyId === e && (y.formVoList.splice(i, 1),
                    i--)
            }
            C(),
            y.priceValuation()
        }
        function V() {
            return j.apply(this, arguments)
        }
        function j() {
            return j = Object(i["a"])(regeneratorRuntime.mark((function t() {
                var e, a, r, i, o, n, u, l, d, p, m, f, _, b, g, h, v, D, C, O, x, I, A, S, V, j, L, Z, k, G, $, F, q, T, P, N, B, Y;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            r = y.formData,
                            i = r.inputValues,
                            o = r.radioSelectValues,
                            n = r.checkBoxSelectValues,
                            u = r.selectSelectValues,
                            l = [],
                            y.imglist = [],
                            y.formVoList.sort(et),
                            d = 0;
                        case 9:
                            if (!(d < y.formVoList.length)) {
                                t.next = 74;
                                break
                            }
                            for (p in o)
                                m = o[p].split("_"),
                                f = m[0],
                                _ = m[1],
                                b = M(_, f),
                                Object(s["d"])(y.formVoList[d].miniZtAttrGroup.id, b.groupId) && b.actualValue && (Object(c["c"])(b, l),
                                l.push(b.actualValue),
                                !b.remark || "吊扣尺寸" !== y.formVoList[d].miniZtAttrGroup.name && "吊扣系列" !== y.formVoList[d].miniZtAttrGroup.name || (g = b.remark.indexOf("src="),
                                h = b.remark.indexOf("style"),
                                y.imglist.push({
                                    name: b.actualValue,
                                    img: [b.remark.substring(g + 5, h - 2)]
                                })));
                            for (v in u)
                                D = u[v].split("_"),
                                C = D[0],
                                O = D[1],
                                x = M(O, C),
                                Object(s["d"])(y.formVoList[d].miniZtAttrGroup.id, x.groupId) && x.actualValue && (Object(c["c"])(x, l),
                                l.push(x.actualValue));
                            if (I = y.formVoList[d],
                            "input" !== I.miniZtAttrGroup.groupType) {
                                t.next = 44;
                                break
                            }
                            if ("印刷数量" !== I.miniZtAttrGroup.name) {
                                t.next = 16;
                                break
                            }
                            return t.abrupt("continue", 71);
                        case 16:
                            if (A = "",
                            S = Object(c["b"])(I, l, i),
                            "-1" !== S) {
                                t.next = 22;
                                break
                            }
                            return t.abrupt("return", !1);
                        case 22:
                            if ("0" !== S) {
                                t.next = 44;
                                break
                            }
                            A = I.miniZtAttrGroup.actualValue ? Object(s["b"])(I.miniZtAttrGroup.code, "BBFS_ZDY_ZDY_TK") ? "下盖包边方式:" : I.miniZtAttrGroup.actualValue + ":" : Object(s["b"])(I.miniZtAttrGroup.code, "BBFS_ZDY_ZDY_TK") ? "下盖包边方式:" : I.miniZtAttrGroup.name + ":",
                            t.t0 = regeneratorRuntime.keys(i);
                        case 25:
                            if ((t.t1 = t.t0()).done) {
                                t.next = 43;
                                break
                            }
                            if (V = t.t1.value,
                            !i[V]) {
                                t.next = 41;
                                break
                            }
                            if (j = V.split("_"),
                            L = j[0],
                            Z = j[1],
                            k = M(Z, L),
                            !k || !Object(s["d"])(k.groupId, I.miniZtAttrGroup.id)) {
                                t.next = 41;
                                break
                            }
                            if (!Object(s["b"])(I.miniZtAttrGroup.code, "BBFS_ZDY_ZDY_TK")) {
                                t.next = 40;
                                break
                            }
                            if (!(parseInt(i[V]) < 15)) {
                                t.next = 37;
                                break
                            }
                            return y.$message({
                                type: "error",
                                message: "无效的包边数值，不能少于15MM"
                            }),
                            t.abrupt("return", !1);
                        case 37:
                            A += "包边" + i[V] + "MM_",
                            t.next = 41;
                            break;
                        case 40:
                            A += i[V] + "_";
                        case 41:
                            t.next = 25;
                            break;
                        case 43:
                            l.push(A.substring(0, A.length - 1));
                        case 44:
                            t.t2 = regeneratorRuntime.keys(n);
                        case 45:
                            if ((t.t3 = t.t2()).done) {
                                t.next = 71;
                                break
                            }
                            G = t.t3.value,
                            $ = 0;
                        case 48:
                            if (!($ < n[G].length)) {
                                t.next = 69;
                                break
                            }
                            if (F = n[G][$].split("_"),
                            q = F[0],
                            T = F[1],
                            P = M(T, q),
                            !Object(s["d"])(I.miniZtAttrGroup.id, P.groupId)) {
                                t.next = 66;
                                break
                            }
                            if (!Object(s["b"])(I.miniZtAttrGroup.code, "_SS_XZ") && !Object(s["b"])(I.miniZtAttrGroup.code, "_SSS_XZ")) {
                                t.next = 65;
                                break
                            }
                            N = 0;
                        case 56:
                            if (!(N < l.length)) {
                                t.next = 63;
                                break
                            }
                            if (-1 === l[N].indexOf("印刷颜色:")) {
                                t.next = 60;
                                break
                            }
                            return l[N] += "_" + P.actualValue,
                            t.abrupt("break", 63);
                        case 60:
                            N++,
                            t.next = 56;
                            break;
                        case 63:
                            t.next = 66;
                            break;
                        case 65:
                            P.actualValue && l.push(P.actualValue);
                        case 66:
                            $++,
                            t.next = 48;
                            break;
                        case 69:
                            t.next = 45;
                            break;
                        case 71:
                            d++,
                            t.next = 9;
                            break;
                        case 74:
                            for (B = "",
                            Y = 0; Y < l.length; Y++)
                                B += l[Y] + ";";
                            if ("dm" !== y.formData.yslx) {
                                t.next = 107;
                                break
                            }
                            if (9 != y.cateId) {
                                t.next = 90;
                                break
                            }
                            if (46 != y.subCateId || !(y.formData.radioSelectValues["6668"].indexOf("6668_29878") > -1 || y.formData.radioSelectValues["16818"].indexOf("16818_53452") > -1)) {
                                t.next = 81;
                                break
                            }
                            t.next = 88;
                            break;
                        case 81:
                            if (47 != y.subCateId || !(y.formData.radioSelectValues["6705"].indexOf("6705_30005") > -1 || y.formData.radioSelectValues["18195"].indexOf("18195_57729") > -1)) {
                                t.next = 84;
                                break
                            }
                            t.next = 88;
                            break;
                        case 84:
                            return t.t4 = B,
                            t.next = 87,
                            E(y.formData.dmys, "专色");
                        case 87:
                            B = t.t4 += t.sent;
                        case 88:
                            t.next = 104;
                            break;
                        case 90:
                            if (!(y.formData.checkBoxSelectValues["6796"] && y.formData.checkBoxSelectValues["6796"].indexOf("6796_61306") > -1)) {
                                t.next = 95;
                                break
                            }
                            return t.t5 = B,
                            t.next = 94,
                            E(y.formData.bj1ys, "部件一裱卡专色1");
                        case 94:
                            B = t.t5 += t.sent;
                        case 95:
                            if (!(y.formData.checkBoxSelectValues["6796"] && y.formData.checkBoxSelectValues["6797"].indexOf("6797_61307") > -1)) {
                                t.next = 100;
                                break
                            }
                            return t.t6 = B,
                            t.next = 99,
                            E(y.formData.bj2ys, "部件二裱卡专色1");
                        case 99:
                            B = t.t6 += t.sent;
                        case 100:
                            return t.t7 = B,
                            t.next = 103,
                            E(y.formData.dmys, "专色");
                        case 103:
                            B = t.t7 += t.sent;
                        case 104:
                            (y.formData.dmys.jybm || y.formData.dmys.jybm2) && y.formData.dmys.jybmVal && (B += "加印白墨;"),
                            t.next = 117;
                            break;
                        case 107:
                            return t.t8 = B,
                            t.next = 110,
                            E(y.formData.zmys, "正面专色");
                        case 110:
                            return B = t.t8 += t.sent,
                            t.t9 = B,
                            t.next = 114,
                            E(y.formData.fmys, "反面专色");
                        case 114:
                            B = t.t9 += t.sent,
                            (y.formData.zmys.jybm || y.formData.zmys.jybm2) && y.formData.zmys.jybmVal && (B += "正面加印白墨;"),
                            (y.formData.fmys.jybm || y.formData.fmys.jybm2) && y.formData.fmys.jybmVal && (B += "反面加印白墨;");
                        case 117:
                            if (!(y.formData.sgYsys.scCount > 0)) {
                                t.next = 122;
                                break
                            }
                            return t.t10 = B,
                            t.next = 121,
                            w(y.formData.sgYsys, "上盖印刷专色");
                        case 121:
                            B = t.t10 += t.sent;
                        case 122:
                            if (!(y.formData.xgYsys.scCount > 0)) {
                                t.next = 127;
                                break
                            }
                            return t.t11 = B,
                            t.next = 126,
                            w(y.formData.xgYsys, "下盖印刷专色");
                        case 126:
                            B = t.t11 += t.sent;
                        case 127:
                            if (!((null === (e = y.formData.checkBoxSelectValues) || void 0 === e || null === (a = e["4858"]) || void 0 === a ? void 0 : a.indexOf("4858_23134")) > -1 && y.formData.bqys.scCount > 0)) {
                                t.next = 132;
                                break
                            }
                            return t.t12 = B,
                            t.next = 131,
                            E(y.formData.bqys, "裱卡专色1");
                        case 131:
                            B = t.t12 += t.sent;
                        case 132:
                            return t.abrupt("return", B);
                        case 133:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            j.apply(this, arguments)
        }
        function L() {
            if (Object(s["d"])(y.cateId, "13")) {
                y.formData.zcjgpb = "";
                for (var t = 0, e = 0; e < y.formVoList.length; e++)
                    for (var a in y.formData.radioSelectValues) {
                        var r = y.formData.radioSelectValues[a].split("_")
                          , i = r[0]
                          , o = r[1]
                          , n = T(i);
                        if (n.miniZtAttrGroup.name && -1 !== n.miniZtAttrGroup.name.indexOf("印刷层材质") || n.miniZtAttrGroup.name && -1 !== n.miniZtAttrGroup.name.indexOf("复合层材质") || n.miniZtAttrGroup.name && -1 !== n.miniZtAttrGroup.name.indexOf("热封底层材质")) {
                            var c = M(o, i);
                            if (Object(s["d"])(y.formVoList[e].miniZtAttrGroup.id, c.groupId) && c.actualValue && c.actualValue.indexOf(":")) {
                                var l = c.actualValue.split(":")[1];
                                t += parseFloat(l.split("_")[1].substring(0, l.split("_")[1].length - 1)),
                                y.formData.zcjgpb += " " + c.actualValue.split(":")[1] + " +"
                            }
                        } else if ("LL" === n.miniZtAttrGroup.code) {
                            var d = M(o, i);
                            y.formData.zipval = "拉链:无" === d.actualValue ? "0" : "1"
                        }
                    }
                y.formData.zcjgpb && (y.formData.zcjgpb = y.formData.zcjgpb.substring(0, y.formData.zcjgpb.length - 1),
                y.formData.zcjgpb += "(" + t + "c)")
            } else if (Object(s["d"])(y.cateId, "2")) {
                y.formData.zcjgpb = "";
                for (var p = 0; p < y.formVoList.length; p++)
                    for (var m in y.formData.radioSelectValues) {
                        var f = y.formData.radioSelectValues[m].split("_")
                          , _ = f[0]
                          , b = f[1]
                          , g = M(b, _);
                        Object(s["b"])(g.code, "XZ") && (y.formData.zcjgpb = g.actualValue)
                    }
                console.log("that.formData.zcjgpb", y.formData.zcjgpb)
            } else if (Object(s["d"])(y.cateId, "70")) {
                y.formData.zcjgpb = "";
                for (var h = "", v = 0; v < y.formVoList.length; v++)
                    for (var D in y.formData.radioSelectValues) {
                        var C = y.formData.radioSelectValues[D].split("_")
                          , O = C[0]
                          , x = C[1]
                          , I = T(O);
                        if (I.miniZtAttrGroup.name && -1 !== I.miniZtAttrGroup.name.indexOf("坑纸类型") || I.miniZtAttrGroup.name && -1 !== I.miniZtAttrGroup.name.indexOf("面纸材质") || I.miniZtAttrGroup.name && -1 !== I.miniZtAttrGroup.name.indexOf("芯纸") || I.miniZtAttrGroup.name && -1 !== I.miniZtAttrGroup.name.indexOf("里纸材质") || I.miniZtAttrGroup.name && -1 !== I.miniZtAttrGroup.name.indexOf("外层芯纸") || I.miniZtAttrGroup.name && -1 !== I.miniZtAttrGroup.name.indexOf("隔纸") || I.miniZtAttrGroup.name && -1 !== I.miniZtAttrGroup.name.indexOf("外层芯纸")) {
                            var A = M(x, O);
                            Object(s["d"])(y.formVoList[v].miniZtAttrGroup.id, A.groupId) && A.actualValue && (u["h"][A.actualValue] && (h += u["h"][A.actualValue]),
                            y.formData.zcjgpb += " " + A.actualValue + " +")
                        }
                    }
                y.formData.zcjgpb && (y.formData.zcjgpb = y.formData.zcjgpb.substring(0, y.formData.zcjgpb.length - 1) + "" + h)
            }
        }
        function Z() {
            return k.apply(this, arguments)
        }
        function k() {
            return k = Object(i["a"])(regeneratorRuntime.mark((function t() {
                var e, a, r, i, o, c, u, l, d, p, m, f, _, b, g, h, D, C, O, x, I, A, S;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            if (e = Dt(),
                            a = y.totalInCount,
                            r = 0,
                            i = 0,
                            L(),
                            y.formData.goodAttrVo.id) {
                                t.next = 7;
                                break
                            }
                            return t.abrupt("return", !1);
                        case 7:
                            for (o in y.commonFormData.inputValues)
                                o && (c = o.split("_")[0],
                                u = o.split("_")[1],
                                l = nt(c),
                                d = ct(c, u),
                                Object(s["d"])(null === d || void 0 === d ? void 0 : d.code, "goodAx") && 0 == parseInt(y.commonFormData.inputValues[o]) ? (i++,
                                a--) : y.commonFormData.inputValues[o] && parseInt(y.commonFormData.inputValues[o]) > 0 && (l && Object(s["b"])(l.code, "SIZE") ? "TWO_SIZE" != l.code && (i++,
                                r++) : (l && Object(s["b"])(l.code, "YSSL") || l && Object(s["b"])(l.code, "TKKS")) && r++));
                            if (y.formData.ysm.list && 70 == y.$route.query.cateId && 85 != y.$route.query.subCateId)
                                for (p = 0; p < y.formData.ysm.list.length; p++)
                                    y.formData.ysm.list[p]["longVal"] > 0 && r++,
                                    y.formData.ysm.list[p]["widthVal"] > 0 && r++;
                            if (console.log("输入", "尺寸应输:" + y.sizeInCount, "尺寸实输:" + i, "总应输:" + a, "总实输:" + r),
                            y.sizeInCount !== i) {
                                t.next = 59;
                                break
                            }
                            for (m = 0; m < y.commonVoList.length; m++)
                                "YSSL" === y.commonVoList[m].code ? (f = y.commonVoList[m].attrList[0],
                                y.priceFormData.yssl = y.commonFormData.inputValues[f.groupId + "_" + f.id]) : "TKKS" === y.commonVoList[m].code && (_ = y.commonVoList[m].attrList[0],
                                y.priceFormData.tkks = y.commonFormData.inputValues[_.groupId + "_" + _.id]);
                            if (b = y.commonVoList[0].attrList,
                            g = {
                                success: !0
                            },
                            !e) {
                                t.next = 42;
                                break
                            }
                            for (h = {
                                id: y.formData.goodAttrVo.id
                            },
                            D = 0; D < b.length; D++)
                                y.commonFormData.inputValues[b[D].groupId + "_" + b[D].id] && (h[b[D].code] = y.commonFormData.inputValues[b[D].groupId + "_" + b[D].id]);
                            return h["zipval"] = y.formData.zipval,
                            t.next = 20,
                            Object(n["b"])(h).then((function(t) {
                                return t
                            }
                            ));
                        case 20:
                            if (g = t.sent,
                            !g.success) {
                                t.next = 42;
                                break
                            }
                            if (!Object(s["d"])(y.cateId, "3")) {
                                t.next = 27;
                                break
                            }
                            for (y.$set(y.formData.goodSize, "otherMap", g.data.otherMap),
                            C = 0; C < y.commonVoList.length; C++)
                                "W_INPUT" === y.commonVoList[C].code && (y.$set(y.commonFormData.inputValues, y.commonVoList[C].attrList[0].groupId + "_" + y.commonVoList[C].attrList[0].id, g.data.otherMap.outlong),
                                y.$set(y.commonFormData.inputValues, y.commonVoList[C].attrList[1].groupId + "_" + y.commonVoList[C].attrList[1].id, g.data.otherMap.outwidth),
                                y.$set(y.commonFormData.inputValues, y.commonVoList[C].attrList[2].groupId + "_" + y.commonVoList[C].attrList[2].id, g.data.otherMap.outheight));
                            t.next = 42;
                            break;
                        case 27:
                            if (y.$set(y.formData.goodSize, "goodAl", g.data.goodAl),
                            y.$set(y.formData.goodSize, "goodAw", g.data.goodAw),
                            !Object(s["d"])(y.cateId, "70")) {
                                t.next = 42;
                                break
                            }
                            if (!Object(s["d"])(y.subCateId, "73") && !Object(s["d"])(y.subCateId, "75")) {
                                t.next = 39;
                                break
                            }
                            if (!(g.data.goodAl > 1430 || g.data.goodAw > 1430)) {
                                t.next = 34;
                                break
                            }
                            return y.$message({
                                type: "error",
                                message: "展开尺寸不能大于1430*1070"
                            }),
                            t.abrupt("return", !1);
                        case 34:
                            if (!(g.data.goodAl > 1070 && g.data.goodAw > 1070)) {
                                t.next = 37;
                                break
                            }
                            return y.$message({
                                type: "error",
                                message: "展开尺寸不能大于1430*1070"
                            }),
                            t.abrupt("return", !1);
                        case 37:
                            t.next = 42;
                            break;
                        case 39:
                            if (!(g.data.goodAl > 2230 || g.data.goodAw > 2230)) {
                                t.next = 42;
                                break
                            }
                            return y.$message({
                                type: "error",
                                message: "展开尺寸不能大于2230*2230"
                            }),
                            t.abrupt("return", !1);
                        case 42:
                            if (!Object(s["d"])(y.subCateId, "85")) {
                                t.next = 52;
                                break
                            }
                            if (!y.commonFormData.inputValues["200_201"] || !y.commonFormData.inputValues["200_202"]) {
                                t.next = 52;
                                break
                            }
                            return O = {
                                id: y.formData.goodAttrVo.id
                            },
                            O["zipval"] = y.formData.zipval,
                            O["goodAl"] = y.commonFormData.inputValues["200_201"],
                            O["goodAw"] = y.commonFormData.inputValues["200_202"],
                            t.next = 50,
                            Object(n["b"])(O).then((function(t) {
                                return t
                            }
                            ));
                        case 50:
                            x = t.sent,
                            x.success && (y.formData.goodSizeTwo.goodAl = x.data.goodAl,
                            y.formData.goodSizeTwo.goodAw = x.data.goodAw);
                        case 52:
                            if (!g.success) {
                                t.next = 59;
                                break
                            }
                            if (!(r >= a)) {
                                t.next = 59;
                                break
                            }
                            for (I = "",
                            A = 0; A < y.commonVoList.length; A++)
                                if ("TWO_SIZE" != y.commonVoList[A].code && Object(s["b"])(y.commonVoList[A].code, "SIZE")) {
                                    for (y.commonVoList[A].actualValue ? I += y.commonVoList[A].actualValue + ":" : I += y.commonVoList[A].name + ":",
                                    S = 0; S < y.commonVoList[A].attrList.length; S++)
                                        null != y.commonFormData.inputValues[y.commonVoList[A].attrList[S].groupId + "_" + y.commonVoList[A].attrList[S].id] && (I += Object(v["setdecimal"])(y.commonFormData.inputValues[y.commonVoList[A].attrList[S].groupId + "_" + y.commonVoList[A].attrList[S].id]) + "_");
                                    I = I.substring(0, I.length - 1),
                                    I += ";"
                                }
                            return I = I.substring(0, I.length - 1),
                            I += ";",
                            t.abrupt("return", I);
                        case 59:
                            return t.abrupt("return", "");
                        case 60:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            k.apply(this, arguments)
        }
        function w(t, e) {
            return G.apply(this, arguments)
        }
        function G() {
            return G = Object(i["a"])(regeneratorRuntime.mark((function t(e, a) {
                var r;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            if (!(e.scCount > 0)) {
                                t.next = 8;
                                break
                            }
                            return !0,
                            t.next = 4,
                            Object(n["a"])({
                                list: e.pantoneList
                            }).then((function(t) {
                                return "980003" === t.code && (e.pantone = "",
                                y.$message({
                                    type: "error",
                                    message: t.message
                                }),
                                !1),
                                t
                            }
                            ));
                        case 4:
                            for (e.pantone = "",
                            r = 0; r < e.scCount; r++)
                                e.pantoneList[r] && (e.pantone += a + (r + 1) + ":" + e.pantoneList[r] + ";");
                            t.next = 9;
                            break;
                        case 8:
                            e.pantone = "";
                        case 9:
                            return t.abrupt("return", e.pantone);
                        case 10:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            G.apply(this, arguments)
        }
        function E(t, e) {
            return $.apply(this, arguments)
        }
        function $() {
            return $ = Object(i["a"])(regeneratorRuntime.mark((function t(e, a) {
                var r;
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            if (!(e.scCount > 0)) {
                                t.next = 16;
                                break
                            }
                            return !0,
                            t.next = 4,
                            Object(n["a"])({
                                list: e.pantoneList
                            }).then((function(t) {
                                return "980003" === t.code && (e.pantone = "",
                                y.$message({
                                    type: "error",
                                    message: t.message
                                }),
                                !1),
                                t
                            }
                            ));
                        case 4:
                            e.pantone = a + ":" + e.scCount,
                            r = 0;
                        case 6:
                            if (!(r < e.pantoneList.length)) {
                                t.next = 13;
                                break
                            }
                            if (!(r > e.scCount)) {
                                t.next = 9;
                                break
                            }
                            return t.abrupt("break", 13);
                        case 9:
                            e.pantoneList[r] && (e.pantone += "," + e.pantoneList[r]);
                        case 10:
                            r++,
                            t.next = 6;
                            break;
                        case 13:
                            e.pantone += ";",
                            t.next = 17;
                            break;
                        case 16:
                            e.pantone = "";
                        case 17:
                            return t.abrupt("return", e.pantone);
                        case 18:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            $.apply(this, arguments)
        }
        function F() {
            var t = Dt();
            t ? y.totalInCount = y.sizeInCount : (y.sizeInCount = 0,
            y.totalInCount = 0);
            for (var e = 0; e < y.commonVoList.length; e++)
                t || Object(s["b"])(y.commonVoList[e].code, "SIZE") && (y.sizeInCount += y.commonVoList[0].attrList.length,
                y.totalInCount += y.commonVoList[0].attrList.length),
                (Object(s["b"])(y.commonVoList[e].code, "YSSL") || Object(s["b"])(y.commonVoList[e].code, "TKKS")) && (y.totalInCount += 1)
        }
        function q(t) {
            for (var e = y.voList, a = [], r = e.length - 1, i = r; i >= 0; i--) {
                var o = e[i];
                if (Object(s["d"])(o.miniZtAttrGroup.pid, t)) {
                    a.push(o);
                    for (var n = r; n >= 0; n--) {
                        var c = e[n];
                        if (null != c && null != c.miniZtAttrGroup && c.miniZtAttrGroup.pid === o.miniZtAttrGroup.id) {
                            var u = q(o.miniZtAttrGroup.id);
                            a = a.concat(u);
                            break
                        }
                    }
                }
            }
            return a
        }
        function T(t) {
            for (var e = y.voList, a = 0; a < e.length; a++) {
                var r = e[a];
                if (Object(s["d"])(r.miniZtAttrGroup.id, t))
                    return r
            }
            return null
        }
        function P(t) {
            for (var e = y.voList, a = [], r = 0; r < e.length; r++) {
                var i = e[r];
                Object(s["d"])(i.miniZtAttrGroup.parentAttrId, t) && a.push(i)
            }
            return a
        }
        function M(t, e) {
            var a = T(e);
            if (a)
                for (var r in a.attrList)
                    if (Object(s["d"])(a.attrList[r].id, t))
                        return a.attrList[r]
        }
        function N(t) {
            for (var e = q(t), a = 0; a < e.length; a++)
                for (var r = 0; r < y.formVoList.length; r++)
                    if (Object(s["d"])(e[a].miniZtAttrGroup.id, y.formVoList[r].miniZtAttrGroup.id)) {
                        y.formVoList.splice(r, 1);
                        break
                    }
            C()
        }
        function B(t) {
            var e = t.event
              , a = t.code
              , r = 0
              , i = !0;
            if (e.indexOf("15299_48591") > -1 && "15399_48865" == y.formData.radioSelectValues[15399] && (y.$set(y.formData.radioSelectValues, "15399", "15399_48864"),
            Y("15399_48864")),
            y.formData.checkBoxSelectValues[a].length > 1 ? y.formData.showMsg = !0 : y.formData.showMsg = !1,
            null != y.formData.oldCheckBoxSelectVals[a]) {
                var o = y.formData.checkBoxSelectValues[a].concat(y.formData.oldCheckBoxSelectVals[a]).filter((function(t, e, a) {
                    return a.indexOf(t) === a.lastIndexOf(t)
                }
                ));
                r = o[0],
                y.formData.checkBoxSelectValues[a].length <= y.formData.oldCheckBoxSelectVals[a].length && (i = !1)
            } else
                r = y.formData.checkBoxSelectValues[a][0];
            if (!r)
                return !1;
            y.$set(y.formData, "oldCheckBoxSelectVals", JSON.parse(JSON.stringify(y.formData.checkBoxSelectValues)));
            var n = r.split("_")
              , c = n[0]
              , u = n[1]
              , l = T(c)
              , d = l.miniZtAttrGroup.maxSelect
              , p = l.miniZtAttrGroup.minSelect;
            if (d && p) {
                if (y.formData.checkBoxSelectValues[a].length > d)
                    return y.$message({
                        type: "error",
                        message: "最多可选择" + d + "个，如要继续，请取消当前选中的某一个选项"
                    }),
                    !1;
                if (y.formData.checkBoxSelectValues[a].length < p)
                    return y.$message({
                        type: "error",
                        message: "请完善印刷颜色信息"
                    }),
                    !1
            }
            if (i) {
                var m = M(u, c);
                Object(s["b"])(m.code, "_TJ") ? y.$message({
                    type: "warning",
                    message: "请务必选择烫金颜色及填写烫金尺寸"
                }) : Object(s["b"])(m.code, "_JT") ? "10" != y.cateId && y.$message({
                    type: "warning",
                    message: "请务必填写击凸尺寸"
                }) : Object(s["b"])(m.code, "_JBUV") ? y.$message({
                    type: "warning",
                    message: "请务必填写局部UV尺寸"
                }) : Object(s["b"])(m.code, "_JA") ? y.$message({
                    type: "warning",
                    message: "请务必填写击凹尺寸"
                }) : Object(s["b"])(m.code, "_TC") ? y.$message({
                    type: "warning",
                    message: "请务必填写贴窗尺寸及选择窗口离折线距离"
                }) : Object(s["b"])(m.code, "_BK") ? (y.$refs["PriceMajor"] && y.$set(y.$refs["PriceMajor"], "isAddBK", !0),
                y.$message({
                    type: "warning",
                    message: "请务必完善裱卡信息"
                })) : Object(s["b"])(m.code, "_YW") ? y.$message({
                    type: "warning",
                    message: "请务必完善压纹信息"
                }) : Object(s["b"])(m.code, "_DK") && y.$message({
                    type: "warning",
                    message: "请务必完善吊扣信息"
                }),
                W(m.groupId, m.id)
            } else {
                if (y.$refs["PriceMajor"] && y.$refs["PriceMajor"].isAddBK && Object(s["b"])(l.miniZtAttrGroup.code, "ZJGY"))
                    if (0 == e.length)
                        y.$set(y.$refs["PriceMajor"], "isAddBK", !1);
                    else {
                        var f = y.formData.checkBoxSelectValues[a].find((function(t) {
                            var e = l.attrList.find((function(e) {
                                return t === e.groupId + "_" + e.id
                            }
                            ));
                            return Object(s["b"])(e.code, "_BK")
                        }
                        ));
                        y.$set(y.$refs["PriceMajor"], "isAddBK", !!f)
                    }
                U(u)
            }
            y.formVoList.sort(et),
            C(),
            t.flag || (1 == y.$route.query.cateId ? (y.getpaperId(),
            y.priceValuation2()) : y.priceValuation())
        }
        function Y(t, e, a) {
            var r, i = t.split("_"), n = i[0], c = i[1];
            if (y.formVoListId = t,
            t && ("6448_29118" == t && (y.formData.dmys.scCount = 0),
            "6448_65444" == t && (y.formData.dmys.scCount = 1),
            y.formData.dmys.pantoneList = []),
            1 == y.$route.query.cateId && -1 != y.formVoListId.indexOf("4757") && "4757_22880" !== y.formVoListId ? (y.priceFormData.extends = "1",
            y.isShort = !1) : "4757_22880" == y.formVoListId && (y.isShort = !0),
            "42" == y.$route.query.subCateId && y.formData.checkBoxSelectValues["15299"] && y.formData.checkBoxSelectValues["15299"].indexOf("15299_48591") > -1 && y.formData.radioSelectValues["15309"] && ("15309_48639" == y.formData.radioSelectValues["15309"] || "15309_48640" == y.formData.radioSelectValues["15309"])) {
                setTimeout((function() {
                    V().then((function(t) {
                        var e = t.split(";");
                        e.forEach((function(t) {
                            t.indexOf("纸张材质") > -1 && (y.formData.bkkg = t.replace("纸张材质:", "")),
                            t.indexOf("表面处理") > -1 && (y.formData.bkbmcl = t.replace("表面处理:", ""))
                        }
                        ))
                    }
                    ))
                }
                ), 100),
                y.formData.bkstatus = !0;
                for (var u = y.formVoList.length - 1; u >= 0; u--)
                    "bklist" == y.formVoList[u].miniZtAttrGroup.actualValue && (y.formData.bkarr.length < 5 && y.formData.bkarr.push(y.formVoList[u]),
                    y.formVoList.splice(u, 1))
            }
            (28 == y.$route.query.subCateId && "5896_32267" == t && y.formData.checkBoxSelectValues[5953].length > 0 && y.formData.checkBoxSelectValues[5953].indexOf("5953_53504") > -1 && (y.formData.checkBoxSelectValues[5953].splice(y.formData.checkBoxSelectValues[5953].indexOf("5953_53504"), 1),
            B({
                event: y.formData.checkBoxSelectValues[5953],
                code: 5953
            })),
            "15309_48641" == t) && (y.formData.bkstatus = !1,
            (r = y.formVoList).push.apply(r, Object(o["a"])(y.formData.bkarr)));
            "22623" == c || "22624" == c || "22625" == c ? y.$refs.PriceRight.setradio("纸张材质:单铜纸_350") : "22626" == c ? y.$refs.PriceRight.setradio("纸张材质:单铜纸_400") : "32419" == c ? y.$refs.PriceRight.setradio("纸张材质:单铜纸_300") : "48358" != c && "49001" != c && "48403" != c || setTimeout((function() {
                y.$set(y.formData.radioSelectValues, "15256", "15256_48421")
            }
            ), 100);
            var l = T(n)
              , d = M(c, n);
            Object(s["d"])(y.cateId, "1") && Object(s["b"])(d.code, "YSXZ_W") && (y.formData.dmys.jybmVal = !1),
            Object(s["d"])(y.cateId, "1") && Object(s["b"])(d.code, "SMYS_ZM_W") && (y.formData.zmys.jybmVal = !1),
            Object(s["d"])(y.cateId, "1") && Object(s["b"])(d.code, "SMYS_FM_W") && (y.formData.fmys.jybmVal = !1),
            Object(s["d"])(y.cateId, "70") && (Object(s["d"])(d.code, "YSYS_W") ? y.formData.ysm.scCount = 0 : (Object(s["d"])(d.code, "YSYS_SS") || Object(s["d"])(d.code, "YSYS_DS")) && (y.formData.ysm.scCount = 1)),
            Object(s["d"])(l.miniZtAttrGroup.code, "YSYS") && (y.formData.yslx = Object(s["b"])(d.code, "SMYS") ? "sm" : "dm");
            for (var p = q(d.groupId), m = 0; m < p.length; m++)
                delete y.formData.radioSelectValues[p[m].miniZtAttrGroup.id];
            N(d.groupId),
            W(d.groupId, d.id),
            y.formVoList.sort(et);
            var f = !1
              , _ = !1
              , b = !1
              , g = !1;
            "7014" != n && "6775" != n && "19799" != n && "5994" != n || (_ = y.formData.dmys.jybmVal,
            b = y.formData.zmys.jybmVal,
            g = y.formData.fmys.jybmVal);
            var h = 0;
            for (var v in y.formData.radioSelectValues) {
                var D = y.formData.radioSelectValues[v + ""]
                  , O = D.split("_")[0]
                  , x = D.split("_")[1]
                  , I = M(x, O);
                if (Object(s["d"])(y.cateId, "2") && Object(s["b"])(l.miniZtAttrGroup.code, "BMCL") ? h = R(I, h, ["BMCL_GJ", "BMCL_CGM", "BMCL_W", "BMCL_GY"], "ZJGY", "_JBUV") : Object(s["d"])(y.cateId, "3") && Object(s["b"])(l.miniZtAttrGroup.code, "SG_MZBMCL") && (h = R(I, h, ["SG_FGHM"], "SGMZGY", "_TJ")),
                Object(s["d"])(I.code, "ZZCZ_JYKZL") || Object(s["d"])(I.code, "ZZCZ_NPZL") || Object(s["d"])(I.code, "ZZCZ_TZZL") || Object(s["d"])(I.code, "ZZCZ_YKZ") || Object(s["d"])(I.code, "ZZCZ_JKZ") || Object(s["d"])(I.code, "ZZCZ_NPZ") || Object(s["d"])(I.code, "ZZCZ_QNPZ") || Object(s["d"])(I.code, "MZCZ_YKZ") || Object(s["d"])(I.code, "MZCZ_JKZ") || Object(s["d"])(I.code, "MZCZ_NPZ") || Object(s["d"])(I.code, "MZCZ_JYKZ") || Object(s["d"])(y.cateId, "13") || Object(s["d"])(y.cateId, "8") || Object(s["d"])(y.subCateId, "40") || !Object(s["d"])(I.code, "ZZCZ_TZZL_DMHKZ") && !Object(s["d"])(y.cateId, "2") || !Object(s["d"])(I.code, "ZZCZ_TZZL_SMHKZ") && !Object(s["d"])(y.cateId, "2")) {
                    f = !0;
                    break
                }
            }
            for (var A in y.formData.radioSelectValues) {
                var S = y.formData.radioSelectValues[A + ""]
                  , j = S.split("_")[0]
                  , L = S.split("_")[1]
                  , Z = M(L, j);
                if (Object(s["d"])(Z.code, "ZZCZ_TZZL_DMHKZ") || Object(s["d"])(Z.code, "ZZCZ_TZZL_SMHKZ")) {
                    f = !1,
                    _ = !0,
                    b = !0,
                    g = !0;
                    break
                }
            }
            var k = !1;
            for (var w in y.formData.radioSelectValues) {
                var G = y.formData.radioSelectValues[w + ""]
                  , E = G.split("_")[0]
                  , $ = G.split("_")[1]
                  , F = M($, E);
                if (Object(s["d"])(F.code, "ZZCZ_JYKZL_GSWY_S")) {
                    k = !0;
                    break
                }
            }
            if (y.formData.showDydz = k,
            1 === h && Object(s["d"])(y.cateId, "2") && Object(s["b"])(l.miniZtAttrGroup.code, "BMCL"))
                for (var P = 0; P < y.formVoList.length; P++)
                    if (Object(s["d"])(y.formVoList[P].miniZtAttrGroup.code, "ZJGY")) {
                        var Y = T(y.formVoList[P].miniZtAttrGroup.id);
                        y.$set(y.formVoList[P], "attrList", JSON.parse(JSON.stringify(Y.attrList)))
                    }
            if (1 === h && Object(s["d"])(y.cateId, "3") && Object(s["b"])(l.miniZtAttrGroup.code, "SG_MZBMCL"))
                for (var z = 0; z < y.formVoList.length; z++)
                    if (Object(s["d"])(y.formVoList[z].miniZtAttrGroup.code, "SGMZGY")) {
                        var K = T(y.formVoList[z].miniZtAttrGroup.id);
                        y.$set(y.formVoList[z], "attrList", JSON.parse(JSON.stringify(K.attrList)))
                    }
            e || (y.formData.checkBoxSelectValues[a] = ""),
            y.formData.dmys.jybm = f,
            y.formData.zmys.jybm = f,
            y.formData.fmys.jybm = f,
            y.formData.dmys.jybm2 = _,
            y.formData.zmys.jybm2 = b,
            y.formData.fmys.jybm2 = g,
            y.formData.dmys.jybmVal = _,
            y.formData.zmys.jybmVal = b,
            y.formData.fmys.jybmVal = g,
            C(),
            1 == y.$route.query.cateId ? (y.getpaperId(),
            y.priceValuation2()) : y.priceValuation()
        }
        function z(t, e, a) {
            for (var r = t.split("_"), i = r[0], o = r[1], s = M(o, i), n = q(s.groupId), c = 0; c < n.length; c++)
                delete y.formData.radioSelectValues[n[c].miniZtAttrGroup.id];
            N(s.groupId),
            W(s.groupId, s.id),
            y.formVoList.sort(et)
        }
        function R(t, e, a, r, i) {
            e = 0 === e ? 1 : e;
            for (var o = 0; o < a.length; o++)
                if (Object(s["b"])(t.code, a[o])) {
                    e = 2;
                    for (var n = 0; n < y.formVoList.length; n++)
                        if (Object(s["d"])(y.formVoList[n].miniZtAttrGroup.code, r))
                            for (var c = y.formVoList[n].attrList, u = 0; u < c.length; u++)
                                if (Object(s["b"])(c[u].code, i)) {
                                    N(y.formVoList[n].attrList[u].groupId),
                                    y.formVoList[n].attrList.splice(u, 1),
                                    y.$set(y.formData.checkBoxSelectValues, y.formVoList[n].attrList[u].groupId, []),
                                    y.$set(y.formData.oldCheckBoxSelectVals, y.formVoList[n].attrList[u].groupId, []);
                                    break
                                }
                }
            return e
        }
        function K(t) {
            for (var e = t.split("_"), a = e[0], r = e[1], i = M(r, a), o = q(i.groupId), s = 0; s < o.length; s++)
                delete y.formData.selectSelectValues[o[s].miniZtAttrGroup.id];
            N(i.groupId),
            W(i.groupId, i.id),
            y.formVoList.sort(et),
            C(),
            1 == y.$route.query.cateId ? (y.getpaperId(),
            y.priceValuation2()) : y.priceValuation()
        }
        function U(t) {
            for (var e = y.formVoList.length - 1; e >= 0; e--) {
                var a = y.formVoList[e];
                if (Object(s["d"])(a.miniZtAttrGroup.parentAttrId, t)) {
                    for (var r = 0; r < a.attrList.length; r++)
                        U(a.attrList[r].id);
                    y.formVoList.splice(e, 1)
                }
            }
            C()
        }
        function J(t) {
            for (var e = 0; e < y.voList.length; e++) {
                var a = y.voList[e];
                if (Object(s["d"])(a.miniZtAttrGroup.pid, t)) {
                    if (Object(s["d"])(a.miniZtAttrGroup.groupType, "radio")) {
                        if (a.miniZtAttrGroup.required && null != a.attrList && a.attrList.length > 0) {
                            var r = H(a.attrList, a.miniZtAttrGroup.defaultSelect, !0);
                            W(r.groupId, r.id),
                            y.$set(y.formData.radioSelectValues, a.miniZtAttrGroup.id, a.miniZtAttrGroup.id + "_" + r.id)
                        }
                    } else if (Object(s["d"])(a.miniZtAttrGroup.groupType, "checkbox"))
                        X(a);
                    else if (Object(s["d"])(a.miniZtAttrGroup.groupType, "select")) {
                        var i = H(a.attrList, a.miniZtAttrGroup.defaultSelect, !0);
                        null === i && (i = a.attrList[0]),
                        W(i.groupId, i.id),
                        y.$set(y.formData.selectSelectValues, a.miniZtAttrGroup.id, a.miniZtAttrGroup.id + "_" + i.id)
                    } else if (Object(s["d"])(a.miniZtAttrGroup.groupType, "input")) {
                        var o = a.attrList;
                        if (o.length > 0)
                            for (var n = 0; n < o.length; n++)
                                o[n].defaultValue && y.$set(y.formData.inputValues, o[n].groupId + "_" + o[n].id, o[n].defaultValue)
                    }
                    y.formVoList.push(JSON.parse(JSON.stringify(a)))
                }
            }
            C()
        }
        function W(t, e) {
            for (var a = 0; a < y.voList.length; a++) {
                var r = y.voList[a];
                if (Object(s["d"])(r.miniZtAttrGroup.pid, t) && Object(s["d"])(e, r.miniZtAttrGroup.parentAttrId) && null != r.attrList && r.attrList.length > 0)
                    if (y.formVoList.push(JSON.parse(JSON.stringify(r))),
                    Object(s["d"])(r.miniZtAttrGroup.groupType, "radio")) {
                        var i = H(r.attrList, r.miniZtAttrGroup.defaultSelect, !0);
                        y.$set(y.formData.radioSelectValues, r.miniZtAttrGroup.id, r.miniZtAttrGroup.id + "_" + i.id),
                        W(i.groupId, i.id)
                    } else if (Object(s["d"])(r.miniZtAttrGroup.groupType, "select")) {
                        var o = H(r.attrList, r.miniZtAttrGroup.defaultSelect, !0);
                        y.$set(y.formData.selectSelectValues, r.miniZtAttrGroup.id, r.miniZtAttrGroup.id + "_" + o.id),
                        W(o.groupId, o.id)
                    } else if (Object(s["d"])(r.miniZtAttrGroup.groupType, "checkbox"))
                        X(r);
                    else if (Object(s["d"])(r.miniZtAttrGroup.groupType, "input")) {
                        var n = r.attrList;
                        if (n.length > 0)
                            for (var c = 0; c < n.length; c++)
                                n[c].defaultValue && y.$set(y.formData.inputValues, n[c].groupId + "_" + n[c].id, n[c].defaultValue)
                    }
            }
            C()
        }
        function X(t) {
            for (var e = 0; e < t.attrList.length; e++)
                if (Object(s["d"])(y.subCateId, "23") && !Object(s["d"])(y.goodsId, "823") && "磁铁" === t.attrList[e].name) {
                    t.attrList.splice(e, 1),
                    e -= 1;
                    break
                }
            if (t.miniZtAttrGroup.pid > 0) {
                var a = T(t.miniZtAttrGroup.pid);
                if (a.attrList)
                    for (var r = 0; r < a.attrList.length; r++)
                        for (var i = P(a.attrList[r].id), o = 0; o < i.length; o++)
                            y.$set(y.formData.checkBoxSelectValues, i[o].miniZtAttrGroup.id, [])
            }
            if (y.$set(y.formData.checkBoxSelectValues, t.miniZtAttrGroup.id, []),
            t.miniZtAttrGroup.defaultSelect) {
                var n = t.miniZtAttrGroup.defaultSelect.split(",");
                if (n.length > 0) {
                    for (var c = [], u = 0; u < n.length; u++)
                        if (n[u]) {
                            var l = H(t.attrList, n[u], !1);
                            l && (c.push(t.miniZtAttrGroup.id + "_" + l.id),
                            W(l.groupId, l.id))
                        }
                    y.$set(y.formData.checkBoxSelectValues, t.miniZtAttrGroup.id, c),
                    y.$set(y.formData.oldCheckBoxSelectVals, t.miniZtAttrGroup.id, c)
                }
            }
        }
        function H(t, e, a) {
            var r = null;
            if (e)
                for (var i = 0; i < t.length; i++) {
                    var o = t[i];
                    if (Object(s["d"])(o.id, e))
                        return r = o,
                        r
                }
            return a && t.length > 0 && (r = t[0]),
            r
        }
        function Q(t, e) {
            var a = /^\d+$|^\d*\.\d+$/g;
            if (!a.test(e.data[e.dataKey]))
                return y.$message({
                    type: "error",
                    message: "输入内容出错"
                }),
                e.data[e.dataKey] = "1",
                Object(s["d"])(y.subCateId, "85") && "TWO_SIZE" === e.code && (e.data[e.dataKey] = ""),
                y.priceFormData = JSON.parse(JSON.stringify(It)),
                !1;
            if ("TKKS" === e.code) {
                var r = 63e4;
                if (Dt())
                    if ("85" == y.subCateId)
                        parseInt(t) < 100 && (y.$message({
                            type: "error",
                            message: "100个起印"
                        }),
                        e.data[e.dataKey] = "100");
                    else {
                        if (!(y.formData.goodSize.goodAl > 0))
                            return y.$message({
                                type: "error",
                                message: "请先填写必要参数"
                            }),
                            e.data[e.dataKey] = "1",
                            !1;
                        if (y.formData.goodSize.goodAl * y.formData.goodSize.goodAw * parseInt(t) > r)
                            return e.data[e.dataKey] = "1",
                            y.$route.query.isCms && (y.priceFormData.total_price = 0,
                            1 == y.cateId ? y.priceValuation(y.getraradiofn()) : y.priceValuation()),
                            y.$message({
                                type: "error",
                                message: "对不起，超过最大数量了1"
                            }),
                            !1
                    }
                else
                    for (var i = 0; i < y.commonVoList.length; i++)
                        if (Object(s["b"])(y.commonVoList[i].code, "SIZE")) {
                            var o = y.commonVoList[i].attrList
                              , n = y.commonFormData.inputValues[y.commonVoList[i].id + "_" + o[0].id]
                              , c = y.commonFormData.inputValues[y.commonVoList[i].id + "_" + o[1].id];
                            if (parseInt(n) * parseInt(c) * parseInt(t) > r)
                                return e.data[e.dataKey] = "1",
                                y.$message({
                                    type: "error",
                                    message: "对不起，超过最大数量了"
                                }),
                                !1
                        }
            } else if ("YSSL" === e.code) {
                if (Object(s["d"])(y.subCateId, "51") || Object(s["d"])(y.subCateId, "120"))
                    parseInt(t) < 1e3 ? e.data[e.dataKey] = "1000" : e.data[e.dataKey] = "" + 1e3 * Math.ceil(parseInt(t) / 1e3);
                else if (Object(s["d"])(y.subCateId, "52"))
                    parseInt(t) < 1e3 ? e.data[e.dataKey] = "1000" : e.data[e.dataKey] = "" + 1e3 * Math.ceil(parseInt(t) / 1e3);
                else if (Object(s["d"])(y.subCateId, "55")) {
                    var u = [100, 200, 500, 1e3, 2e3, 3e3, 5e3, 1e4];
                    if (parseInt(t) > 1e4)
                        parseInt(t) % 100 != 0 && (e.data[e.dataKey] = "100",
                        y.$message({
                            type: "error",
                            message: "数量必须是100的整数倍数"
                        }));
                    else
                        for (var l = 0; l < u.length; l++)
                            if (parseInt(t) <= u[l]) {
                                e.data[e.dataKey] = u[l] + "";
                                break
                            }
                } else
                    Object(s["d"])(y.cateId, "70") || Object(s["d"])(y.subCateId, "36") || Object(s["d"])(y.subCateId, "37") || Object(s["d"])(y.subCateId, "38") || Object(s["d"])(y.subCateId, "36") || Object(s["d"])(y.subCateId, "37") || Object(s["d"])(y.subCateId, "38") ? parseInt(t) < 100 && (y.$message({
                        type: "error",
                        message: "100个起印"
                    }),
                    e.data[e.dataKey] = "100") : Object(s["d"])(y.cateId, "5") && Object(s["d"])(y.subCateId, "40") || Object(s["d"])(y.subCateId, "48") ? parseInt(t) < 1 && (y.$message({
                        type: "error",
                        message: "1个起印"
                    }),
                    e.data[e.dataKey] = "1") : Object(s["d"])(y.subCateId, "82") ? parseInt(t) < 500 ? (e.data[e.dataKey] = "500",
                    y.$message({
                        type: "error",
                        message: "500个起印"
                    })) : e.data[e.dataKey] = "" + 500 * Math.ceil(parseInt(t) / 500) : Object(s["d"])(y.cateId, "86") || Object(s["d"])(y.cateId, "121") ? parseInt(t) < 1 && (e.data[e.dataKey] = "1",
                    y.$message({
                        type: "error",
                        message: "箱数不能小于1"
                    })) : Object(s["d"])(y.cateId, "10") ? parseInt(t) < 5e3 && (e.data[e.dataKey] = "5000",
                    y.$message({
                        type: "error",
                        message: "5000个起印"
                    })) : Object(s["d"])(y.cateId, "145") ? parseInt(t) < 50 ? (y.$message({
                        type: "error",
                        message: "50本起订"
                    }),
                    e.data[e.dataKey] = 50) : t > 50 && (e.data[e.dataKey] = 100 * Math.ceil(t / 100)) : parseInt(t) < 100 ? (Object(s["d"])(y.cateId, "143") ? y.$message({
                        type: "error",
                        message: "100张起订"
                    }) : y.$message({
                        type: "error",
                        message: "100个起印"
                    }),
                    e.data[e.dataKey] = "100") : Object(s["d"])(y.cateId, "143") && (t > 100 && t < 1e3 ? e.data[e.dataKey] = 100 * Math.ceil(t / 100) : t > 1e3 && t < 5e3 ? e.data[e.dataKey] = 500 * Math.ceil(t / 500) : t > 5e3 && (e.data[e.dataKey] = 1e3 * Math.ceil(t / 1e3)));
                Object(s["d"])(y.cateId, "6") && Object(s["d"])(y.subCateId, "101") && parseInt(t) > 3e3 && (y.$message({
                    type: "error",
                    message: "订购数量不能超过3000个"
                }),
                e.data[e.dataKey] = 3e3)
            }
            if (Object(s["d"])(y.subCateId, "85") && "TWO_SIZE" === e.code) {
                var d = 1e3;
                if ("200_201" == e.dataKey ? d = 1e3 : "200_202" == e.dataKey && (d = 700),
                parseInt(t) > d)
                    return y.$message({
                        type: "error",
                        message: "已经超出" + d
                    }),
                    e.data[e.dataKey] = "",
                    y.priceFormData = JSON.parse(JSON.stringify(It)),
                    !1;
                if (parseInt(t) < 30)
                    return y.$message({
                        type: "error",
                        message: "已经小于30"
                    }),
                    e.data[e.dataKey] = "",
                    y.priceFormData = JSON.parse(JSON.stringify(It)),
                    !1
            }
            1 == y.$route.query.cateId ? y.priceValuation(y.getraradiofn()) : y.priceValuation()
        }
        function tt(t, e) {
            if (y.isShort && (y.formData.goodSize.goodAl > "785" || y.formData.goodSize.goodAw > "785" || y.formData.goodSize.goodAl > "545" && y.formData.goodSize.goodAw > "545") && (y.priceFormData.extends = "1"),
            "24" == y.$route.query.subCateId && ("goodAl" == e.code ? y.formData.goodSize.goodAl = t : "goodAw" == e.code && (y.formData.goodSize.goodAw = t),
            y.isShort && (y.formData.goodSize.goodAl > "785" || y.formData.goodSize.goodAw > "785" || y.formData.goodSize.goodAl > "545" && y.formData.goodSize.goodAw > "545") && (y.priceFormData.extends = "1")),
            Object(s["d"])(e.code, "goodAx") && 0 === parseFloat(t))
                return y.priceValuation(),
                !1;
            if (isNaN(parseFloat(e.data[e.dataKey])))
                return y.$message({
                    type: "error",
                    message: "输入内容不正确,请重新输入"
                }),
                y.priceFormData = JSON.parse(JSON.stringify(It)),
                e.data[e.dataKey] = "",
                !1;
            if (e.max && parseInt(e.data[e.dataKey]) > e.max && !Object(s["b"])(y.cateId, "2") && !Object(s["b"])(y.cateId, "1"))
                return y.$message({
                    type: "error",
                    message: "已经超出" + e.max
                }),
                e.data[e.dataKey] = "",
                y.priceFormData = JSON.parse(JSON.stringify(It)),
                !1;
            if (e.min && parseInt(e.data[e.dataKey]) < e.min)
                return y.$message({
                    type: "error",
                    message: "已经小于" + e.min
                }),
                e.data[e.dataKey] = "",
                y.priceFormData = JSON.parse(JSON.stringify(It)),
                !1;
            if ("N_SIZE" === y.commonVoList[0].code) {
                var a = e.data["1_1"]
                  , r = e.data["1_2"]
                  , i = e.data["1_3"];
                if (r > a)
                    return y.$message({
                        type: "error",
                        message: "宽不能大于长"
                    }),
                    y.priceFormData = JSON.parse(JSON.stringify(It)),
                    !1;
                if (r < i)
                    return y.$message({
                        type: "error",
                        message: "宽不能小于高"
                    }),
                    y.priceFormData = JSON.parse(JSON.stringify(It)),
                    !1
            }
            if (Object(s["d"])(y.formData.goodAttrVo.id, 938) || Object(s["d"])(y.formData.goodAttrVo.id, 939) || Object(s["d"])(y.formData.goodAttrVo.id, 941) || Object(s["d"])(y.formData.goodAttrVo.id, 950) || Object(s["d"])(y.formData.goodAttrVo.id, 684)) {
                var o = 0
                  , n = 0;
                for (var c in y.commonFormData.inputValues)
                    if (c) {
                        var u = c.split("_")[0]
                          , l = c.split("_")[1]
                          , d = ct(u, l);
                        Object(s["d"])(null === d || void 0 === d ? void 0 : d.code, "goodAl") ? o = parseFloat(y.commonFormData.inputValues[c]) : Object(s["d"])(null === d || void 0 === d ? void 0 : d.code, "goodAw") && (n = parseFloat(y.commonFormData.inputValues[c]))
                    }
                if (o + n < 32) {
                    y.$message({
                        type: "error",
                        message: "长+宽必须大于或等于32mm"
                    });
                    var p = y.priceFormData.provinceId
                      , m = y.priceFormData.cityId
                      , f = y.priceFormData.yssl
                      , _ = y.priceFormData.tkks
                      , b = y.priceFormData.extends;
                    return y.priceFormData = JSON.parse(JSON.stringify(It)),
                    y.priceFormData.provinceId = p,
                    y.priceFormData.cityId = m,
                    y.priceFormData.yssl = f,
                    y.priceFormData.tkks = _,
                    y.priceFormData.extends = b,
                    !1
                }
            }
            1 == y.$route.query.cateId ? y.priceValuation(y.getraradiofn()) : y.priceValuation()
        }
        function et(t, e) {
            return t.miniZtAttrGroup.sortOrder - e.miniZtAttrGroup.sortOrder
        }
        function at(t) {
            y.formData.appendsDesc = {
                goodAl: "x",
                goodAw: "152" == y.$route.query.cateId ? "mm" : "x",
                goodAd: "x",
                goodAt: "x",
                goodAx: "x",
                goodAh: "x",
                goodAr: "x"
            },
            1 === t.goodAr ? y.formData.appendsDesc.goodAr = "mm" : 1 === t.goodAh ? y.formData.appendsDesc.goodAh = "mm" : 1 === t.goodAx ? y.formData.appendsDesc.goodAx = "mm" : 1 === t.goodAt ? y.formData.appendsDesc.goodAt = "mm" : 1 === t.goodAd ? y.formData.appendsDesc.goodAd = "mm" : 1 === t.goodAw ? y.formData.appendsDesc.goodAw = "mm" : 1 === t.goodAl && (y.formData.appendsDesc.goodAl = "mm")
        }
        function rt(t) {
            var e = !1
              , a = p["a"].getters.parentsId
              , r = p["a"].getters.priceCateNavs[a].children;
            console.log(r);
            for (var i = 0; i < r.length; i++)
                if (r[i].data.id == y.cateId)
                    for (var o = 0; o < r[i].children.length; o++)
                        r[i].children[o].data.id == y.subCateId && (e = !0);
            if (e) {
                if ("24" === y.subCateId && !y.priceFormData.agreement)
                    return y.$message({
                        type: "error",
                        message: "请选择免责声明"
                    }),
                    !1;
                y.formData.loading = !0,
                st(t)
            } else
                y.$message({
                    type: "error",
                    message: "该盒型不存在"
                })
        }
        function it(t, e) {
            var a = this;
            if (!/^1[3456789]\d{9}$/.test(t))
                return this.$message({
                    type: "error",
                    message: "手机号码有误,请重填!"
                }),
                !1;
            var r = {
                mobile: t,
                number: y.priceFormData.yssl,
                fnumber: y.priceFormData.tkks,
                goodsId: y.formData.goodAttrVo.id,
                goodsAttr: y.formData.goodAttr,
                goodsTotal: e
            };
            Object(d["a"])(r).then((function(t) {
                a.$message({
                    type: "success",
                    message: t.data
                })
            }
            )).catch((function(t) {
                console.log(t)
            }
            ))
        }
        function ot(t) {
            setTimeout((function() {
                y.priceFormData.priceProgress ? ot(t) : t()
            }
            ), 100)
        }
        function st(t) {
            setTimeout((function() {
                if (y.priceFormData.priceProgress)
                    st(t);
                else {
                    if (parseFloat(y.priceFormData.total_price) <= 0)
                        return y.$message({
                            type: "error",
                            message: "请完善计价信息"
                        }),
                        y.formData.loading = !1,
                        !1;
                    if (t || (t = "0"),
                    y.formData.goodAttr) {
                        var e = 0;
                        Object(s["d"])(y.priceFormData.extends, "0") ? e = y.priceFormData.time_normal : Object(s["d"])(y.priceFormData.extends, "1") ? e = y.priceFormData.time_slow : Object(s["d"])(y.priceFormData.extends, "3") ? e = y.priceFormData.time_kraft : Object(s["d"])(y.priceFormData.extends, "4") && (e = y.priceFormData.time_slow);
                        var a = {
                            miniCart: {
                                isfrom: t,
                                num: y.priceFormData.yssl,
                                totalTime: e,
                                goodsId: y.formData.goodAttrVo.id,
                                goodsAttr: y.formData.hxid ? y.formData.goodAttr + y.formData.hxid : y.formData.goodAttr,
                                goodsTotal: y.priceFormData.total_price,
                                extendsStr: y.priceFormData.extends,
                                imgFormData: y.imglist.length ? JSON.stringify(y.imglist) : ""
                            },
                            number: y.priceFormData.tkks
                        };
                        Object(l["b"])(a).then((function() {
                            Object(s["d"])(t, "1") ? y.$router.push({
                                path: "/cart/checkorder?isCart=0"
                            }) : y.$message({
                                type: "success",
                                message: "添加购物车成功!"
                            }),
                            p["a"].dispatch("CartCount").then((function() {}
                            )),
                            y.formData.loading = !1
                        }
                        )).catch((function() {
                            y.formData.loading = !1
                        }
                        ))
                    } else
                        y.$message({
                            type: "error",
                            message: "请完善计价信息"
                        }),
                        y.formData.loading = !1
                }
            }
            ), 100)
        }
        function nt(t) {
            for (var e = 0; e < y.commonVoList.length; e++)
                if (Object(s["d"])(y.commonVoList[e].id, t))
                    return y.commonVoList[e];
            return null
        }
        function ct(t, e) {
            var a = nt(t);
            if (a)
                for (var r = 0; r < a.attrList.length; r++)
                    if (Object(s["d"])(a.attrList[r].id, e))
                        return a.attrList[r];
            return null
        }
        function ut() {
            for (var t = 0, e = 0; e < y.commonVoList.length; e++)
                -1 !== y.commonVoList[e].code.indexOf("_SIZE") && t++;
            if (t >= 4)
                return y.$message({
                    type: "error",
                    message: "最多4个部件"
                }),
                !1;
            y.commonVoList.splice(y.commonVoList.length - 1, 1);
            var a = JSON.parse(JSON.stringify(u["f"][0]));
            a.code = "BJ" + (t + 1) + "_SIZE",
            a.name = "部件" + (1 === t ? "二" : 2 === t ? "三" : 3 === t ? "四" : "一") + "成品尺寸",
            a.actualValue = "部件" + (1 === t ? "二" : 2 === t ? "三" : 3 === t ? "四" : "一") + "成品尺寸",
            a.id = a.id + 100 * (t + 1);
            for (var r = 0; r < a.attrList.length; r++)
                a.attrList[r].id = a.attrList[r].id + 100 * (t + 1),
                a.attrList[r].groupId = a.id;
            y.commonVoList.push(a),
            y.commonVoList.push(JSON.parse(JSON.stringify(u["n"]))),
            F(),
            y.priceValuation()
        }
        function lt() {
            for (var t = 0, e = 0; e < y.commonVoList.length; e++)
                -1 !== y.commonVoList[e].code.indexOf("_SIZE") && t++;
            y.commonVoList = [];
            for (var a = 0; a < t - 1; a++) {
                var r = JSON.parse(JSON.stringify(u["f"][0]));
                if (0 !== a) {
                    r.code = "BJ" + (a + 1) + "_SIZE",
                    r.name = "部件" + (1 === a ? "二" : 2 === a ? "三" : 3 === a ? "四" : "一") + "成品尺寸",
                    r.actualValue = "部件" + (1 === a ? "二" : 2 === a ? "三" : 3 === a ? "四" : "一") + "成品尺寸",
                    r.id = r.id + 100 * (a + 1);
                    for (var i = 0; i < r.attrList.length; i++)
                        r.attrList[i].id = r.attrList[i].id + 100 * (a + 1),
                        r.attrList[i].groupId = r.id
                }
                y.commonVoList.push(r)
            }
            y.commonVoList.push(JSON.parse(JSON.stringify(u["n"]))),
            F(),
            y.priceValuation()
        }
        function dt(t, e) {
            var a = [];
            return Object(s["d"])(t, "1") && Object(s["d"])(e, "24") || Object(s["d"])(t, "2") && Object(s["d"])(e, "32") || Object(s["d"])(t, "8") && Object(s["d"])(e, "61") || Object(s["d"])(t, "5") && Object(s["d"])(e, "40") || Object(s["d"])(t, "5") && Object(s["d"])(e, "41") ? (a = JSON.parse(JSON.stringify(u["a"])),
            Object(s["d"])(t, "8") || a.push(JSON.parse(JSON.stringify(u["k"])))) : Object(s["d"])(t, "2") && Object(s["d"])(e, "31") ? (a = JSON.parse(JSON.stringify(u["i"])),
            a.push(JSON.parse(JSON.stringify(u["k"])))) : Object(s["d"])(t, "9") ? Object(s["d"])(e, "48") ? (a = JSON.parse(JSON.stringify(u["c"])),
            a[0].actualValue = "成品尺寸",
            a[0].name = "成品尺寸",
            a[0].attrList[0].name = "开页长",
            a[0].attrList[0].inputTips = "开页长",
            a[0].attrList[1].name = "书脊高",
            a[0].attrList[1].inputTips = "书脊高") : a = JSON.parse(JSON.stringify(u["a"])) : Object(s["d"])(t, "4") && Object(s["d"])(e, "34") ? a = JSON.parse(JSON.stringify(u["a"])) : Object(s["d"])(t, "100") && (Object(s["d"])(e, "36") || Object(s["d"])(e, "37") || Object(s["d"])(e, "38")) ? (a = JSON.parse(JSON.stringify(u["f"])),
            a.push(JSON.parse(JSON.stringify(u["n"])))) : Object(s["d"])(t, "152") && Object(s["d"])(e, "153") ? a = JSON.parse(JSON.stringify(u["b"])) : Object(s["d"])(t, "7") && Object(s["d"])(e, "44") ? a = JSON.parse(JSON.stringify(u["c"])) : Object(s["d"])(t, "7") && Object(s["d"])(e, "55") || Object(s["d"])(t, "143") || Object(s["d"])(t, "145") ? (a = [],
            a.push(JSON.parse(JSON.stringify(u["n"]))),
            Object(s["d"])(t, "143") && Object(s["d"])(e, "144") ? (a[0].attrList[0].inputTips = "张",
            a[0].attrList[0].suffix = "张") : Object(s["d"])(t, "145") && Object(s["d"])(e, "146") && (a[0].attrList[0].inputTips = "本",
            a[0].attrList[0].suffix = "本")) : Object(s["d"])(t, "11") && Object(s["d"])(e, "51") || Object(s["d"])(t, "12") && Object(s["d"])(e, "52") || Object(s["d"])(t, "81") && Object(s["d"])(e, "82") ? (a = [],
            a.push(JSON.parse(JSON.stringify(u["n"])))) : Object(s["d"])(t, "90") && Object(s["d"])(e, "120") ? (a = [],
            a.push(JSON.parse(JSON.stringify(u["e"])))) : Object(s["d"])(t, "86") || Object(s["d"])(t, "121") ? a = JSON.parse(JSON.stringify(u["l"])) : Object(s["d"])(t, "10") ? (a = [],
            a.push(JSON.parse(JSON.stringify(u["e"]))),
            a.push(JSON.parse(JSON.stringify(u["k"])))) : Object(s["d"])(t, "4") && Object(s["d"])(e, "35") ? (a = JSON.parse(JSON.stringify(u["a"])),
            a.push(JSON.parse(JSON.stringify(u["k"])))) : Object(s["d"])(t, "6") && Object(s["d"])(e, "42") || Object(s["d"])(t, "6") && Object(s["d"])(e, "43") || Object(s["d"])(t, "6") && Object(s["d"])(e, "101") || Object(s["d"])(t, "6") && Object(s["d"])(e, "14006") ? (a = JSON.parse(JSON.stringify(u["j"])),
            a.push(JSON.parse(JSON.stringify(u["k"])))) : Object(s["d"])(t, "70") ? Object(s["d"])(e, "85") ? a = JSON.parse(JSON.stringify(u["d"])) : Object(s["d"])(e, "126") ? a = JSON.parse(JSON.stringify(u["a"])) : (a = JSON.parse(JSON.stringify(u["c"])),
            a[0].name = "成品内尺寸",
            a[0].actualValue = "成品内尺寸",
            Object(s["d"])(e, "96") && (a[0].name = "成品尺寸",
            a[0].actualValue = "成品尺寸")) : Object(s["d"])(t, "3") && Object(s["d"])(e, "33") ? a = JSON.parse(JSON.stringify(u["g"])) : Object(s["d"])(t, "122") ? a = JSON.parse(JSON.stringify(u["m"])) : (a = JSON.parse(JSON.stringify(u["c"])),
            Object(s["d"])(e, "69") && (a[0].attrList[0].name = "全展宽",
            a[0].attrList[0].inputTips = "全展宽",
            a[0].attrList[0].name = "高",
            a[0].attrList[1].inputTips = "高",
            a[1].attrList[0].suffix = "轮转"),
            Object(s["d"])(t, "13") && (a[0].attrList[0].name = "宽",
            a[0].attrList[0].inputTips = "宽",
            a[0].attrList[1].name = "高",
            a[0].attrList[1].inputTips = "高"),
            (Object(s["d"])(e, "62") || Object(s["d"])(e, "66") || Object(s["d"])(e, "67") || Object(s["d"])(e, "68")) && (a[0].attrList[3].name = "半展",
            a[0].attrList[3].inputTips = "半展"),
            (Object(s["d"])(e, "65") || Object(s["d"])(e, "68")) && (a[0].attrList[5].name = "封位",
            a[0].attrList[5].inputTips = "封位"),
            Object(s["d"])(t, "8") || Object(s["d"])(t, "4") || a.push(JSON.parse(JSON.stringify(u["k"])))),
            a
        }
        function pt() {
            var t, e, a = Object(m["b"])(p["a"].getters.priceCateNavs, y.cateId, y.$route.path.indexOf("/price")), r = Object(m["a"])(p["a"].getters.priceCateNavs, y.cateId, y.subCateId, y.$route.path.indexOf("/price"));
            y.cateName = null === a || void 0 === a || null === (t = a.data) || void 0 === t ? void 0 : t.name,
            y.formData.cateName = null === a || void 0 === a || null === (e = a.data) || void 0 === e ? void 0 : e.name,
            r && (y.paperId = r.paperId,
            y.subCateName = r.name,
            y.formData.subCateName = r.name,
            Object(f["a"])(r.title),
            Object(f["b"])(r.keywords, r.description))
        }
        function mt(t) {
            return ft.apply(this, arguments)
        }
        function ft() {
            return ft = Object(i["a"])(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            return y.formData.loading = !0,
                            t.next = 3,
                            Object(n["f"])({
                                bindType: y.bindType,
                                bindId: e,
                                whereBindId: y.whereBindId,
                                whereGoodsId: y.$route.query.gid
                            }).then((function(t) {
                                y.voList = [],
                                y.formVoList = [];
                                var e = t.data;
                                null != e && e.length > 0 && (g(e, y),
                                y.voList = e,
                                J(0),
                                y.formData.loading = !1,
                                L()),
                                "29" != y.$route.query.subCateId && "30" != y.$route.query.subCateId && "31" != y.$route.query.subCateId || Y("18450_58522")
                            }
                            ));
                        case 3:
                            88 == y.$route.query.subCateId && y.$route.query.egg && y.SelectEgg();
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            ft.apply(this, arguments)
        }
        function _t() {
            y.goodsId = "",
            y.cateId = y.$route.query.cateId,
            y.cateId || (y.cateId = "1"),
            y.$route.query.subCateId && (y.subCateId = y.$route.query.subCateId),
            y.$route.query.gid && (y.goodsId = y.$route.query.gid),
            y.clearData()
        }
        function bt() {
            return gt.apply(this, arguments)
        }
        function gt() {
            return gt = Object(i["a"])(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            if (!y.subCateIds.includes(y.cateId)) {
                                t.next = 5;
                                break
                            }
                            return t.next = 3,
                            mt(y.subCateId);
                        case 3:
                            t.next = 7;
                            break;
                        case 5:
                            return t.next = 7,
                            mt(y.cateId);
                        case 7:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            gt.apply(this, arguments)
        }
        function ht(t, e, a) {
            if (Object(s["d"])(t, "70")) {
                var r = a.indexOf("纸张类型:") + 8
                  , i = a.indexOf("印刷颜色:");
                if (Object(s["d"])(e, "85") || Object(s["d"])(e, "96")) {
                    for (var o = a.substring(r), n = o.split(";"), c = "", l = 0; l < n.length; l++)
                        u["h"][n[l]] && (c += u["h"][n[l]]);
                    var d = "纸张材质:" + o.replace(/;/g, "_") + c;
                    return a.substring(0, r) + d
                }
                for (var p = a.substring(r, i), m = p.split(";"), f = "", _ = 0; _ < m.length; _++)
                    u["h"][m[_]] && (f += u["h"][m[_]]);
                var b = "纸张材质:" + p.replace(/;/g, "_") + f;
                return a.substring(0, r) + b + a.substring(i - 1)
            }
            return Object(s["d"])(t, "2") && (Object(s["d"])(e, "29") || Object(s["d"])(e, "31")),
            a
        }
        function vt() {
            return yt.apply(this, arguments)
        }
        function yt() {
            return yt = Object(i["a"])(regeneratorRuntime.mark((function t() {
                return regeneratorRuntime.wrap((function(t) {
                    while (1)
                        switch (t.prev = t.next) {
                        case 0:
                            if (!y.goodsId) {
                                t.next = 5;
                                break
                            }
                            return t.next = 3,
                            Object(n["c"])({
                                id: y.goodsId
                            }).then((function(t) {
                                y.$set(y.formData, "goodAttrVo", t.data),
                                Dt() && (y.sizeInCount = t.data.goodAr + t.data.goodAh + t.data.goodAx + t.data.goodAt + t.data.goodAd + t.data.goodAw + t.data.goodAl),
                                at(t.data)
                            }
                            ));
                        case 3:
                            t.next = 7;
                            break;
                        case 5:
                            return t.next = 7,
                            Object(n["d"])({
                                id: y.subCateId
                            }).then((function(t) {
                                y.$set(y.formData, "goodAttrVo", t.data),
                                Dt() && (y.sizeInCount = t.data.goodAr + t.data.goodAh + t.data.goodAx + t.data.goodAt + t.data.goodAd + t.data.goodAw + t.data.goodAl),
                                at(t.data)
                            }
                            ));
                        case 7:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            yt.apply(this, arguments)
        }
        function Dt() {
            return !(Object(s["d"])(y.cateId, "1") && Object(s["d"])(y.subCateId, "24") || Object(s["d"])(y.cateId, "2") && Object(s["d"])(y.subCateId, "31") || Object(s["d"])(y.cateId, "2") && Object(s["d"])(y.subCateId, "32") || Object(s["d"])(y.cateId, "4") && Object(s["d"])(y.subCateId, "34") || Object(s["d"])(y.cateId, "4") && Object(s["d"])(y.subCateId, "35") || Object(s["d"])(y.cateId, "100") && Object(s["d"])(y.subCateId, "36") || Object(s["d"])(y.cateId, "100") && Object(s["d"])(y.subCateId, "37") || Object(s["d"])(y.cateId, "100") && Object(s["d"])(y.subCateId, "38") || Object(s["d"])(y.cateId, "5") && Object(s["d"])(y.subCateId, "40") || Object(s["d"])(y.cateId, "5") && Object(s["d"])(y.subCateId, "41") || Object(s["d"])(y.cateId, "6") && Object(s["d"])(y.subCateId, "101") || Object(s["d"])(y.cateId, "6") && Object(s["d"])(y.subCateId, "14006") || Object(s["d"])(y.cateId, "6") && Object(s["d"])(y.subCateId, "42") || Object(s["d"])(y.cateId, "6") && Object(s["d"])(y.subCateId, "43") || Object(s["d"])(y.cateId, "7") && Object(s["d"])(y.subCateId, "55") || Object(s["d"])(y.cateId, "8") && Object(s["d"])(y.subCateId, "61") || Object(s["d"])(y.cateId, "9") && Object(s["d"])(y.subCateId, "46") || Object(s["d"])(y.cateId, "9") && Object(s["d"])(y.subCateId, "47") || Object(s["d"])(y.cateId, "152") && Object(s["d"])(y.subCateId, "153") || Object(s["d"])(y.cateId, "10") || Object(s["d"])(y.cateId, "143") || Object(s["d"])(y.cateId, "145") || (Object(s["d"])(y.cateId, "11") || Object(s["d"])(y.cateId, "90")) && (Object(s["d"])(y.subCateId, "51") || Object(s["d"])(y.subCateId, "120")) || Object(s["d"])(y.cateId, "12") && Object(s["d"])(y.subCateId, "52") || Object(s["d"])(y.cateId, "81") && Object(s["d"])(y.subCateId, "82") || Object(s["d"])(y.cateId, "86") || Object(s["d"])(y.cateId, "121") || Object(s["d"])(y.cateId, "122") || Object(s["d"])(y.cateId, "70") && Object(s["d"])(y.subCateId, "126"))
        }
        function Ct() {
            for (var t = 0; t < y.commonVoList.length; t++)
                for (var e = y.commonVoList[t], a = 0; a < e.attrList.length; a++) {
                    var r = e.attrList[a];
                    null !== r.defaultValue && void 0 !== r.defaultValue && y.$set(y.commonFormData.inputValues, r.groupId + "_" + r.id, r.defaultValue)
                }
        }
        var Ot = {
            scCount: 0,
            pantoneList: [],
            pantone: "",
            jybm: !1,
            jybmVal: !1,
            jybm2: !1
        }
          , xt = {
            showDydz: !1,
            tabType: "0",
            whereBindId: "",
            whereGoodsId: "",
            cateId: "0",
            parentId: "0",
            subCateId: "",
            goodsId: "",
            copyIdStart: 1e8,
            imglist: [],
            subCateIds: ["4", "5", "6", "7", "9", "11", "100", "86", "10", "121", "122", "90"],
            voList: [],
            formData: {
                cateName: "",
                subCateName: "",
                showMsg: !1,
                loading: !0,
                bkstatus: !1,
                zcjgpb: "",
                bkkg: "",
                bkbmcl: "",
                bkarr: [],
                inputValues: {},
                radioSelectValues: {},
                checkBoxSelectValues: {},
                oldCheckBoxSelectVals: {},
                selectSelectValues: {},
                yslx: "dm",
                dmys: Object(r["a"])({}, Ot),
                zmys: Object(r["a"])({}, Ot),
                fmys: Object(r["a"])({}, Ot),
                bqys: Object(r["a"])({}, Ot),
                bj1ys: Object(r["a"])({}, Ot),
                bj2ys: Object(r["a"])({}, Ot),
                ysm: {
                    scCount: 1,
                    value: "",
                    list: [{
                        widthVal: 0,
                        longVal: 0
                    }, {
                        widthVal: 0,
                        longVal: 0
                    }, {
                        widthVal: 0,
                        longVal: 0
                    }, {
                        widthVal: 0,
                        longVal: 0
                    }, {
                        widthVal: 0,
                        longVal: 0
                    }, {
                        widthVal: 0,
                        longVal: 0
                    }]
                },
                sgYsys: Object(r["a"])({}, Ot),
                xgYsys: Object(r["a"])({}, Ot),
                showLoginDialog: !1,
                goodSize: {
                    goodAl: 0,
                    goodAw: 0,
                    otherMap: {}
                },
                goodAttr: "",
                goodAttrVo: {
                    id: 938,
                    goodAl: 0,
                    goodAw: 0,
                    goodAd: 0,
                    goodAh: 0,
                    goodAr: 0,
                    goodAt: 0,
                    goodAx: 0
                },
                appendsDesc: {},
                goodSizeTwo: {
                    goodAl: 0,
                    goodAw: 0,
                    otherMap: {}
                }
            },
            sizeInCount: 0,
            totalInCount: 0,
            commonVoList: [],
            commonFormData: {
                inputValues: {}
            },
            formVoList: [],
            groupVoList: [],
            priceFormData: {},
            cateNavs: [],
            subCateName: "",
            cateName: "",
            pagerId: 0
        }
          , It = {
            radioService: "盒子扎皮筋",
            checkedService: [],
            priceProgress: !1,
            provinceId: "",
            cityId: "",
            countyId: "",
            yssl: 0,
            tkks: 1,
            extends: "0",
            boxmoney: "0",
            common_time: 0,
            days: 0,
            days_fast: 0,
            days_normal: 5,
            days_slow: 7,
            editfee: 0,
            msg: "",
            out_time: "",
            percentV: 1,
            price_fast: "0",
            price_member: "0",
            price_normal: "0",
            price_old: "0",
            price_slow: "0",
            savemoney: "0.00",
            shipping_fee: "0.00",
            time_fast: 0,
            time_normal: 120,
            time_slow: 168,
            total_price: "0",
            weight: 0
        }
    },
    "6c8d": function(t, e, a) {
        "use strict";
        a("7823")
    },
    "75f0": function(t, e, a) {
        "use strict";
        var r = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("el-dialog", {
                attrs: {
                    title: "用户密码登录",
                    visible: t.dialogVisible,
                    width: "380px",
                    "before-close": t.handleClose,
                    "append-to-body": ""
                },
                on: {
                    "update:visible": function(e) {
                        t.dialogVisible = e
                    }
                }
            }, [a("el-form", [a("el-form-item", [a("el-input", {
                attrs: {
                    placeholder: "请输入手机号"
                },
                on: {
                    input: function(e) {
                        return t.inputChange("username")
                    }
                },
                model: {
                    value: t.formData.username,
                    callback: function(e) {
                        t.$set(t.formData, "username", e)
                    },
                    expression: "formData.username"
                }
            })], 1), a("el-form-item", [a("el-input", {
                attrs: {
                    placeholder: "请输入密码",
                    type: "password"
                },
                on: {
                    input: function(e) {
                        return t.inputChange("password")
                    }
                },
                nativeOn: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handlerSubmit(e)
                    }
                },
                model: {
                    value: t.formData.password,
                    callback: function(e) {
                        t.$set(t.formData, "password", e)
                    },
                    expression: "formData.password"
                }
            })], 1)], 1), a("div", [a("el-checkbox", {
                attrs: {
                    "true-label": "1",
                    "false-label": "0"
                },
                model: {
                    value: t.formData.remember,
                    callback: function(e) {
                        t.$set(t.formData, "remember", e)
                    },
                    expression: "formData.remember"
                }
            }, [t._v("下次自动登录")]), a("div", {
                staticClass: "logLa",
                staticStyle: {
                    float: "right"
                }
            }, [a("el-link", {
                attrs: {
                    href: "/getpassword"
                }
            }, [t._v("忘记密码？")]), a("el-link", {
                attrs: {
                    href: "/register"
                }
            }, [t._v("立即注册")])], 1)], 1), a("span", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [a("el-button", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    type: "danger"
                },
                on: {
                    click: t.handlerSubmit
                }
            }, [t._v("确 定")])], 1)], 1)
        }
          , i = []
          , o = (a("ac1f"),
        a("5319"),
        a("5530"))
          , s = a("2f62")
          , n = {
            name: "LoginForm",
            props: {
                dialogVisible: Boolean
            },
            data: function() {
                return {
                    formData: {
                        username: "",
                        password: "",
                        remember: "0"
                    }
                }
            },
            methods: Object(o["a"])(Object(o["a"])({}, Object(s["b"])(["Login"])), {}, {
                handleClose: function() {
                    this.$emit("update:dialogVisible", !1)
                },
                handlerSubmit: function() {
                    var t = this.Login
                      , e = {
                        username: this.formData.username,
                        password: this.formData.password,
                        remember: this.formData.remember
                    };
                    t(e).then((function(t) {
                        t.success && window.location.reload()
                    }
                    ))
                },
                inputChange: function(t) {
                    "username" == t ? this.formData.username = this.formData.username.replace(/\s+/g, "") : "password" == t && (this.formData.password = this.formData.password.replace(/\s+/g, ""))
                }
            })
        }
          , c = n
          , u = (a("6c8d"),
        a("2877"))
          , l = Object(u["a"])(c, r, i, !1, null, "37b24590", null);
        e["a"] = l.exports
    },
    7823: function(t, e, a) {},
    "836f": function(t, e, a) {},
    "83b0": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return craftInitUtil
        }
        )),
        __webpack_require__.d(__webpack_exports__, "d", (function() {
            return isCopyCraft
        }
        )),
        __webpack_require__.d(__webpack_exports__, "c", (function() {
            return craftRadioAttr
        }
        )),
        __webpack_require__.d(__webpack_exports__, "b", (function() {
            return craftInputAttr
        }
        ));
        var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c975")
          , core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__)
          , core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a434")
          , core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__)
          , core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("b0c0")
          , core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__)
          , core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ac1f")
          , core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__)
          , core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("466d")
          , core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__)
          , core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1276")
          , core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__)
          , _utils_strUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("8958")
          , that = null;
        function craftInitUtil(t) {
            that = t
        }
        function isCopyCraft(t) {
            return !(!Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "TJ_TK") && !Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "TJ_TK_COPY")) || (!(!Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "BBFF_TK") && !Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "BBFF_TK_COPY")) || (!(!Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "TTFF_TK") && !Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "TTFF_TK_COPY")) || (!(!Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "_JT") && !Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "_JT_COPY")) || (!(!Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "_FDJT") && !Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "_FDJT_COPY")) || (!(!Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "_DBJT") && !Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "_DBJT_COPY")) || (!(!Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "_JBUV") && !Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "_JBUV_COPY")) || !(!Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "_JA") && !Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t, "_JA_COPY"))))))))
        }
        function craftRadioAttr(t, e) {
            return !!Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.code, "_DKLX_TMDK") && (e.push("吊扣颜色:无"),
            !0)
        }
        function craftInputAttr(t, e, a) {
            return Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "TJ_TK") || Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "TJ_TK_COPY") ? tangjin(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "TTFF_TK") || Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "TTFF_TK_COPY") ? fdtangjin(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "BBFF_TK") || Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "BBFF_TK_COPY") ? dbtangjin(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_JT") || Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_JT_COPY") ? jitu(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_FDJT") || Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_FDJT_COPY") ? fdjitu(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_DBJT") || Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_DBJT_COPY") ? dbjitu(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_JBUV") || Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_JBUV_COPY") ? juBuUv(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_JA") || Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_JA_COPY") ? jiao(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_TC") ? tiechuang(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_TCCC") ? tiechuang2(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "NTJWKD") ? requiredInput(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "XGBBFS_ZDY_BB") ? requiredInput(t, e, a, "MM") : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_BSEVA") || Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_HSEVA") || Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_BSZZM") || Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "_HSZZM") ? ntcl(t, e, a) : Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["b"])(t.miniZtAttrGroup.code, "CS_SZZD") ? requiredInput2(t, e, a) : "自定义工艺" === t.miniZtAttrGroup.parentAttrName ? zdygy(t, e, a) : "0"
        }
        function requiredInput2(t, e, a, r) {
            for (var i = t.attrList, o = "", s = 0; s < i.length; s++)
                a[i[s].groupId + "_" + i[s].id] && (o += a[i[s].groupId + "_" + i[s].id] + "_");
            if (-1 === o.indexOf("_"))
                return o = "",
                that.$message({
                    type: "error",
                    message: "请完善" + t.miniZtAttrGroup.name + "信息"
                }),
                "-1";
            for (var n = "加手提:", c = 0; c < e.length; c++)
                -1 !== e[c].indexOf("加手提:") && (n += e[c].split(":")[1] + "_",
                e.splice(c, 1),
                c--);
            return r ? e.push(n + o.substring(0, o.length - 1) + r) : e.push(n + o.substring(0, o.length - 1)),
            "1"
        }
        function requiredInput(t, e, a, r) {
            for (var i = t.attrList, o = null !== t.miniZtAttrGroup.actualValue && "" !== t.miniZtAttrGroup.actualValue ? t.miniZtAttrGroup.actualValue : t.miniZtAttrGroup.name, s = o + ":", n = 0; n < i.length; n++)
                a[i[n].groupId + "_" + i[n].id] && (s += a[i[n].groupId + "_" + i[n].id] + "_");
            return -1 === s.indexOf("_") ? (s = "",
            that.$message({
                type: "error",
                message: "请完善" + t.miniZtAttrGroup.name + "信息"
            }),
            "-1") : (r ? e.push(s.substring(0, s.length - 1) + r) : e.push(s.substring(0, s.length - 1)),
            "1")
        }
        function ntcl(t, e, a) {
            for (var r = 1, i = 0; i < e.length; i++)
                -1 !== e[i].indexOf("内托材料") && r++;
            for (var o = t.attrList, s = null !== t.miniZtAttrGroup.actualValue && "" !== t.miniZtAttrGroup.actualValue ? t.miniZtAttrGroup.actualValue : t.miniZtAttrGroup.name, n = "内托材料" + r + ":" + s + "_", c = 0; c < o.length; c++)
                a[o[c].groupId + "_" + o[c].id] && (n += a[o[c].groupId + "_" + o[c].id] + "_");
            return countSubstr(n, "_", !1) < 3 ? (n = "",
            that.$message({
                type: "error",
                message: "请完善" + t.miniZtAttrGroup.name + "信息"
            }),
            "-1") : (e.push(n.substring(0, n.length - 1)),
            "1")
        }
        function countSubstr(str, substr, isIgnore) {
            var count, reg = "";
            return reg = 1 == isIgnore ? "/" + substr + "/gi" : "/" + substr + "/g",
            reg = eval(reg),
            count = null == str.match(reg) ? 0 : str.match(reg).length,
            count
        }
        function tiechuang2(t, e, a) {
            for (var r = t.attrList, i = null !== t.miniZtAttrGroup.actualValue && "" !== t.miniZtAttrGroup.actualValue ? t.miniZtAttrGroup.actualValue : t.miniZtAttrGroup.name, o = i + ":", s = 0; s < r.length; s++)
                a[r[s].groupId + "_" + r[s].id] && (o += a[r[s].groupId + "_" + r[s].id] + "_");
            return countSubstr(o, "_", !1) < 2 ? (o = "",
            that.$message({
                type: "error",
                message: "请完善" + t.miniZtAttrGroup.name + "信息"
            }),
            "-1") : (e.push(o.substring(0, o.length - 1)),
            "1")
        }
        function tiechuang(t, e, a) {
            var r = null !== t.miniZtAttrGroup.actualValue && "" !== t.miniZtAttrGroup.actualValue ? t.miniZtAttrGroup.actualValue : t.miniZtAttrGroup.name
              , i = r + ":";
            for (var o in a)
                if (null != a[o] && "" !== a[o]) {
                    var s = o.split("_")[0]
                      , n = o.split("_")[1]
                      , c = getGroupAttr(n, s);
                    c && c.groupId && c.groupId === t.miniZtAttrGroup.id && (i += a[o] + "_")
                }
            return countSubstr(i, "_", !1) >= 2 ? (e.push(i.substring(0, i.length - 1)),
            "1") : (that.$message({
                type: "error",
                message: "请完善" + t.miniZtAttrGroup.name + "信息"
            }),
            "-1")
        }
        function jiao(t, e, a) {
            return jitu(t, e, a)
        }
        function juBuUv(t, e, a) {
            return jitu(t, e, a)
        }
        function jitu(t, e, a) {
            var r = null !== t.miniZtAttrGroup.actualValue && "" !== t.miniZtAttrGroup.actualValue ? t.miniZtAttrGroup.actualValue : t.miniZtAttrGroup.name
              , i = (t.copy ? r + "2" : r + "1") + ":";
            for (var o in a)
                if (null != a[o] && "" !== a[o]) {
                    var s = o.split("_")[0]
                      , n = o.split("_")[1]
                      , c = getGroupAttr(n, s);
                    c && c.groupId && c.groupId === t.miniZtAttrGroup.id && (i += a[o] + "_")
                }
            return countSubstr(i, "_", !1) >= 2 ? (e.push(i.substring(0, i.length - 1)),
            "1") : (that.$message({
                type: "error",
                message: "请完善" + t.miniZtAttrGroup.name + "信息"
            }),
            "-1")
        }
        function fdjitu(t, e, a) {
            var r = null !== t.miniZtAttrGroup.actualValue && "" !== t.miniZtAttrGroup.actualValue ? t.miniZtAttrGroup.actualValue : t.miniZtAttrGroup.name
              , i = (t.copy ? r + "2" : r + "1") + ":";
            for (var o in a)
                if (null != a[o] && "" !== a[o]) {
                    var s = o.split("_")[0]
                      , n = o.split("_")[1]
                      , c = getGroupAttr(n, s);
                    c && c.groupId && c.groupId === t.miniZtAttrGroup.id && (i += a[o] + "_")
                }
            return countSubstr(i, "_", !1) >= 2 ? (e.push(i.substring(0, i.length - 1)),
            "1") : (that.$message({
                type: "error",
                message: "请完善" + t.miniZtAttrGroup.name + "信息"
            }),
            "-1")
        }
        function dbjitu(t, e, a) {
            var r = null !== t.miniZtAttrGroup.actualValue && "" !== t.miniZtAttrGroup.actualValue ? t.miniZtAttrGroup.actualValue : t.miniZtAttrGroup.name
              , i = (t.copy ? r + "2" : r + "1") + ":";
            for (var o in a)
                if (null != a[o] && "" !== a[o]) {
                    var s = o.split("_")[0]
                      , n = o.split("_")[1]
                      , c = getGroupAttr(n, s);
                    c && c.groupId && c.groupId === t.miniZtAttrGroup.id && (i += a[o] + "_")
                }
            return countSubstr(i, "_", !1) >= 2 ? (e.push(i.substring(0, i.length - 1)),
            "1") : (that.$message({
                type: "error",
                message: "请完善" + t.miniZtAttrGroup.name + "信息"
            }),
            "-1")
        }
        function zdygy(t, e, a) {
            var r, i, o, s;
            return a[(null === (r = t.attrList[0]) || void 0 === r ? void 0 : r.groupId) + "_" + (null === (i = t.attrList[0]) || void 0 === i ? void 0 : i.id)] ? (e.push(t.miniZtAttrGroup.actualValue + ":" + a[(null === (o = t.attrList[0]) || void 0 === o ? void 0 : o.groupId) + "_" + (null === (s = t.attrList[0]) || void 0 === s ? void 0 : s.id)]),
            "1") : (that.$message({
                type: "error",
                message: "请完善" + t.miniZtAttrGroup.name + "信息"
            }),
            "-1")
        }
        function tangjin(t, e, a) {
            for (var r = null !== t.miniZtAttrGroup.actualValue && "" !== t.miniZtAttrGroup.actualValue ? t.miniZtAttrGroup.actualValue : t.miniZtAttrGroup.name, i = 0; i < e.length; i++)
                if (Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["c"])(e[i], r) && (!t.copy && -1 !== e[i].indexOf("烫金1:Foil") || t.copy && -1 !== e[i].indexOf("烫金2:Foil"))) {
                    for (var o in a)
                        if (null != a[o] && "" !== a[o]) {
                            var s = o.split("_")[0]
                              , n = o.split("_")[1]
                              , c = getGroupAttr(n, s);
                            c && Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["d"])(c.groupId, t.miniZtAttrGroup.id) && (e[i] += "_" + a[o])
                        }
                    if (countSubstr(e[i], "_", !1) < 2)
                        return e.splice(i, 1),
                        that.$message({
                            type: "error",
                            message: "请完善" + t.miniZtAttrGroup.name + "信息"
                        }),
                        "-1"
                }
            return "1"
        }
        function fdtangjin(t, e, a) {
            for (var r = null !== t.miniZtAttrGroup.actualValue && "" !== t.miniZtAttrGroup.actualValue ? t.miniZtAttrGroup.actualValue : t.miniZtAttrGroup.name, i = 0; i < e.length; i++)
                if (Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["c"])(e[i], r) && (!t.copy && -1 !== e[i].indexOf("烫金浮雕1:Foil") || t.copy && -1 !== e[i].indexOf("烫金浮雕2:Foil"))) {
                    for (var o in a)
                        if (null != a[o] && "" !== a[o]) {
                            var s = o.split("_")[0]
                              , n = o.split("_")[1]
                              , c = getGroupAttr(n, s);
                            c && Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["d"])(c.groupId, t.miniZtAttrGroup.id) && (e[i] += "_" + a[o])
                        }
                    if (countSubstr(e[i], "_", !1) < 2)
                        return e.splice(i, 1),
                        that.$message({
                            type: "error",
                            message: "请完善" + t.miniZtAttrGroup.name + "信息"
                        }),
                        "-1"
                }
            return "1"
        }
        function dbtangjin(t, e, a) {
            for (var r = null !== t.miniZtAttrGroup.actualValue && "" !== t.miniZtAttrGroup.actualValue ? t.miniZtAttrGroup.actualValue : t.miniZtAttrGroup.name, i = 0; i < e.length; i++)
                if (Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["c"])(e[i], r) && (!t.copy && -1 !== e[i].indexOf("烫金对裱1:Foil") || t.copy && -1 !== e[i].indexOf("烫金对裱2:Foil"))) {
                    for (var o in a)
                        if (null != a[o] && "" !== a[o]) {
                            var s = o.split("_")[0]
                              , n = o.split("_")[1]
                              , c = getGroupAttr(n, s);
                            c && Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["d"])(c.groupId, t.miniZtAttrGroup.id) && (e[i] += "_" + a[o])
                        }
                    if (countSubstr(e[i], "_", !1) < 2)
                        return e.splice(i, 1),
                        that.$message({
                            type: "error",
                            message: "请完善" + t.miniZtAttrGroup.name + "信息"
                        }),
                        "-1"
                }
            return "1"
        }
        function getGroupAttr(t, e) {
            var a = getGroupById(e);
            if (a)
                for (var r in a.attrList)
                    if (Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["d"])(a.attrList[r].id, t))
                        return a.attrList[r]
        }
        function getGroupById(t) {
            for (var e = that.voList, a = 0; a < e.length; a++) {
                var r = e[a];
                if (Object(_utils_strUtil__WEBPACK_IMPORTED_MODULE_6__["d"])(r.miniZtAttrGroup.id, t))
                    return r
            }
            return null
        }
    },
    "8a8e": function(t, e, a) {
        "use strict";
        a("abeb")
    },
    "8ea2": function(t, e, a) {},
    9013: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAghJREFUWEftmC1MHEEYhp+BFEdCZd1V1N8JSlV/ElzN1SHahEuKqANTWa6tq+BHIdqEEBBFcaauCeDq7jQIziE5Ao7AkLfbze1yN3O73HVvxX1mk92Zb57vnXe+TcYAWJ4VwG7CTRHMlN5lHDUYWzL8aZoA5ro+JJBI3bYF4yVjmdkDW85YEcdy9sBYntp8wPw1TytnQDAC6mWPkUL5U2j+NawuQesSqt9h61eMMdstKz6B+k4boHUBD2eHBFR4BPsboGcYzVN4HO/J2SjUDUZQiyuwvpuxQlOTUN+OKyME+efzjw6P/3+F9r5B+UV8YQeMBvmBVJ1C5rtPVBdg+X18Zu0Q3nx0ZnMDRZNJWlWVJrrByMSld94C3UBnvyFUSCDzXzp6hpNvcS7oNdEQzKsPoKcn3EAntU4jlt5C49iv091eo9EJYfwe6pZYXpLkripdxztJIf/K9JtabX7zUzLpU/Sa+21ZOEunRAaNhrZNfghPX8pe0x+QZsugMmo0osc3Za/pH0gZui269hPOL1P3msEAaVv0c5TZfZGg1wwGSFlcxg1XSHG8XVDp/2UuqAHA+PuQT1dBLS9A+XkwqnEEla89u7B/r4Ov6RVKkrWPMSOgXuLlUaHps+FfxbR103XMPtiXvaTM6HvNWIoFeJCTC6urklHlAdTEKjCEiyvdnNGAq4qh0bwF1jHqqbhWQ2MAAAAASUVORK5CYII="
    },
    "90b9": function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return r
        }
        )),
        a.d(e, "j", (function() {
            return i
        }
        )),
        a.d(e, "c", (function() {
            return o
        }
        )),
        a.d(e, "b", (function() {
            return s
        }
        )),
        a.d(e, "d", (function() {
            return n
        }
        )),
        a.d(e, "g", (function() {
            return c
        }
        )),
        a.d(e, "i", (function() {
            return u
        }
        )),
        a.d(e, "f", (function() {
            return l
        }
        )),
        a.d(e, "k", (function() {
            return d
        }
        )),
        a.d(e, "n", (function() {
            return p
        }
        )),
        a.d(e, "e", (function() {
            return m
        }
        )),
        a.d(e, "l", (function() {
            return f
        }
        )),
        a.d(e, "m", (function() {
            return _
        }
        )),
        a.d(e, "h", (function() {
            return b
        }
        ));
        var r = [{
            groupType: "input",
            code: "SIZE",
            name: "展开尺寸",
            actualValue: "展开尺寸",
            id: 100,
            attrList: [{
                id: 101,
                code: "goodAl",
                suffix: "x",
                name: "长",
                inputTips: "长",
                groupId: 100
            }, {
                id: 102,
                code: "goodAw",
                suffix: "mm",
                name: "宽",
                inputTips: "宽",
                groupId: 100
            }]
        }, {
            groupType: "input",
            name: "印刷数量",
            code: "YSSL",
            id: 5e3,
            attrList: [{
                id: 5001,
                code: "YSSL",
                defaultValue: "0",
                suffix: "个",
                name: "个",
                inputTips: "个",
                groupId: 5e3
            }]
        }]
          , i = [{
            groupType: "input",
            code: "SIZE",
            name: "吊牌尺寸",
            actualValue: "展开尺寸",
            id: 100,
            attrList: [{
                id: 101,
                code: "goodAl",
                suffix: "x",
                name: "长",
                inputTips: "长",
                groupId: 100
            }, {
                id: 102,
                code: "goodAw",
                suffix: "mm",
                name: "宽",
                inputTips: "宽",
                groupId: 100
            }]
        }, {
            groupType: "input",
            name: "印刷数量",
            code: "YSSL",
            id: 5e3,
            attrList: [{
                id: 5001,
                code: "YSSL",
                defaultValue: "0",
                suffix: "个",
                name: "个",
                inputTips: "个",
                groupId: 5e3
            }]
        }]
          , o = [{
            groupType: "input",
            code: "SIZE",
            name: "成品外尺寸",
            actualValue: "成品尺寸",
            id: 100,
            attrList: [{
                id: 101,
                code: "goodAl",
                suffix: "x",
                name: "长",
                inputTips: "长",
                groupId: 100
            }, {
                id: 102,
                code: "goodAw",
                suffix: "x",
                name: "宽",
                inputTips: "宽",
                groupId: 100
            }, {
                id: 103,
                code: "goodAd",
                suffix: "x",
                name: "高",
                inputTips: "高",
                groupId: 100
            }, {
                id: 104,
                code: "goodAt",
                suffix: "x",
                name: "局部高度",
                inputTips: "局部高度",
                groupId: 100
            }, {
                id: 105,
                code: "goodAx",
                suffix: "x",
                name: "壁厚",
                inputTips: "壁厚",
                groupId: 100
            }, {
                id: 106,
                code: "goodAh",
                suffix: "x",
                name: "天盖高",
                inputTips: "天盖高",
                groupId: 100
            }, {
                id: 107,
                code: "goodAr",
                suffix: "x",
                name: "半径",
                inputTips: "半径",
                groupId: 100
            }]
        }, {
            groupType: "input",
            name: "印刷数量",
            code: "YSSL",
            id: 5e3,
            attrList: [{
                id: 5001,
                code: "YSSL",
                defaultValue: "0",
                suffix: "个",
                name: "个",
                inputTips: "个",
                groupId: 5e3
            }]
        }]
          , s = [{
            groupType: "input",
            code: "SIZE",
            name: "展开尺寸",
            actualValue: "展开尺寸",
            id: 100,
            attrList: [{
                id: 101,
                code: "goodAl",
                suffix: "x",
                name: "长",
                inputTips: "长",
                groupId: 100
            }, {
                id: 102,
                code: "goodAw",
                suffix: "mm",
                name: "宽",
                inputTips: "宽",
                groupId: 100
            }]
        }, {
            groupType: "input",
            name: "每套数量",
            code: "YSSL",
            id: 5e3,
            attrList: [{
                id: 5001,
                code: "YSSL",
                defaultValue: "0",
                suffix: "个",
                name: "个",
                inputTips: "个",
                groupId: 5e3
            }]
        }]
          , n = [{
            groupType: "input",
            code: "SIZE",
            name: "刀卡一尺寸",
            actualValue: "刀卡一尺寸",
            id: 100,
            attrList: [{
                id: 101,
                code: "goodAl",
                suffix: "x",
                name: "长",
                inputTips: "长",
                groupId: 100
            }, {
                id: 102,
                code: "goodAw",
                suffix: "x",
                name: "宽",
                inputTips: "宽",
                groupId: 100
            }, {
                id: 103,
                code: "goodAd",
                suffix: "x",
                name: "高",
                inputTips: "高",
                groupId: 100
            }, {
                id: 104,
                code: "goodAt",
                suffix: "x",
                name: "局部高度",
                inputTips: "局部高度",
                groupId: 100
            }, {
                id: 105,
                code: "goodAx",
                suffix: "x",
                name: "壁厚",
                inputTips: "壁厚",
                groupId: 100
            }, {
                id: 106,
                code: "goodAh",
                suffix: "x",
                name: "天盖高",
                inputTips: "天盖高",
                groupId: 100
            }, {
                id: 107,
                code: "goodAr",
                suffix: "x",
                name: "半径",
                inputTips: "半径",
                groupId: 100
            }]
        }, {
            groupType: "input",
            name: "刀卡一数量",
            code: "YSSL",
            id: 5e3,
            attrList: [{
                id: 5001,
                code: "YSSL",
                defaultValue: "0",
                suffix: "个",
                name: "个",
                inputTips: "个",
                groupId: 5e3
            }]
        }, {
            groupType: "input",
            code: "TWO_SIZE",
            name: "刀卡二尺寸",
            actualValue: "成品二尺寸",
            id: 200,
            attrList: [{
                id: 201,
                code: "goodAls",
                suffix: "x",
                name: "长",
                inputTips: "长",
                groupId: 200
            }, {
                id: 202,
                code: "goodAws",
                suffix: "mm",
                name: "宽",
                inputTips: "宽",
                groupId: 200
            }]
        }, {
            groupType: "input",
            name: "刀卡二数量",
            code: "TKKS",
            id: 9e3,
            attrList: [{
                id: 9001,
                code: "TKKS",
                defaultValue: "0",
                suffix: "个",
                name: "个",
                inputTips: "个",
                groupId: 9e3
            }]
        }]
          , c = [{
            groupType: "input",
            code: "N_SIZE",
            name: "成品内尺寸",
            actualValue: "成品内尺寸",
            id: 100,
            attrList: [{
                id: 101,
                code: "goodAl",
                suffix: "x",
                name: "内长",
                inputTips: "内长",
                groupId: 100,
                min: 45,
                max: 9999
            }, {
                id: 102,
                code: "goodAw",
                suffix: "x",
                name: "内宽",
                inputTips: "内宽",
                groupId: 100,
                min: 45,
                max: 9999
            }, {
                id: 103,
                code: "goodAd",
                suffix: "x",
                name: "内高",
                inputTips: "内高",
                groupId: 100,
                min: 20,
                max: 250
            }]
        }, {
            groupType: "input",
            code: "W_INPUT",
            name: "成品外尺寸",
            actualValue: "成品外尺寸",
            id: 200,
            attrList: [{
                id: 201,
                code: "goodAl",
                suffix: "x",
                name: "外长",
                inputTips: "外长",
                groupId: 200
            }, {
                id: 202,
                code: "goodAw",
                suffix: "x",
                name: "外宽",
                inputTips: "外宽",
                groupId: 200
            }, {
                id: 203,
                code: "goodAd",
                suffix: "x",
                name: "外高",
                inputTips: "外高",
                groupId: 200
            }]
        }, {
            groupType: "input",
            name: "印刷数量",
            code: "YSSL",
            id: 5e3,
            attrList: [{
                id: 5001,
                code: "YSSL",
                defaultValue: "20",
                suffix: "个",
                name: "个",
                inputTips: "个",
                groupId: 5e3,
                min: 20,
                max: 99999
            }]
        }]
          , u = [{
            groupType: "input",
            code: "BJ1_SIZE",
            name: "部件一展开尺寸",
            actualValue: "部件一展开尺寸",
            id: 100,
            attrList: [{
                id: 101,
                code: "goodAl",
                suffix: "x",
                name: "长",
                inputTips: "长",
                groupId: 100
            }, {
                id: 102,
                code: "goodAw",
                suffix: "x",
                name: "宽",
                inputTips: "宽",
                groupId: 100
            }]
        }, {
            groupType: "input",
            code: "BJ2_SIZE",
            name: "部件二展开尺寸",
            actualValue: "部件二展开尺寸",
            id: 200,
            attrList: [{
                id: 201,
                code: "goodAl",
                suffix: "x",
                name: "长",
                inputTips: "长",
                groupId: 200
            }, {
                id: 202,
                code: "goodAw",
                suffix: "x",
                name: "宽",
                inputTips: "宽",
                groupId: 200
            }]
        }, {
            groupType: "input",
            name: "印刷数量",
            code: "YSSL",
            id: 5e3,
            attrList: [{
                id: 5001,
                code: "YSSL",
                defaultValue: "0",
                suffix: "个",
                name: "个",
                inputTips: "个",
                groupId: 5e3
            }]
        }]
          , l = [{
            groupType: "input",
            code: "BJ1_SIZE",
            name: "部件一成品尺寸",
            actualValue: "部件一成品尺寸",
            id: 100,
            attrList: [{
                id: 101,
                code: "goodAl",
                suffix: "x",
                name: "长",
                inputTips: "长",
                groupId: 100,
                min: 10,
                max: 3e3
            }, {
                id: 102,
                code: "goodAw",
                suffix: "x",
                name: "宽",
                inputTips: "宽",
                groupId: 100,
                min: 10,
                max: 1500
            }, {
                id: 103,
                code: "goodAd",
                suffix: "mm",
                name: "高",
                inputTips: "高",
                groupId: 100,
                min: 2,
                max: 60
            }]
        }]
          , d = {
            groupType: "input",
            name: "同款款数",
            code: "TKKS",
            id: 9e3,
            attrList: [{
                id: 9001,
                code: "TKKS",
                defaultValue: "1",
                suffix: "款",
                name: "款",
                inputTips: "款",
                groupId: 9e3
            }]
        }
          , p = {
            groupType: "input",
            name: "印刷数量",
            code: "YSSL",
            id: 5e3,
            attrList: [{
                id: 5001,
                code: "YSSL",
                defaultValue: "0",
                suffix: "个",
                name: "个",
                inputTips: "个",
                groupId: 5e3
            }]
        }
          , m = {
            groupType: "input",
            name: "订购数量",
            code: "YSSL",
            id: 5e3,
            attrList: [{
                id: 5001,
                code: "YSSL",
                defaultValue: "0",
                suffix: "个",
                name: "个",
                inputTips: "个",
                groupId: 5e3
            }]
        }
          , f = [{
            groupType: "input",
            name: "购买箱数",
            code: "YSSL",
            id: 5e3,
            attrList: [{
                id: 5001,
                code: "YSSL",
                defaultValue: "0",
                suffix: "箱",
                name: "箱",
                inputTips: "箱",
                groupId: 5e3,
                min: 1
            }]
        }]
          , _ = [{
            groupType: "input",
            name: "购买数量",
            code: "YSSL",
            id: 5e3,
            attrList: [{
                id: 5001,
                code: "YSSL",
                defaultValue: "0",
                suffix: "个",
                name: "个",
                inputTips: "个",
                groupId: 5e3
            }]
        }]
          , b = {
            "120g牛卡": "A",
            "150g牛卡": "K",
            "90g牛卡": "B",
            "140g牛卡白": "W",
            "160g优质牛卡": "F",
            "90g普芯": "3",
            "110g普芯": "6",
            "120g高强芯": "4",
            "100g高强芯": "4",
            "140g高强芯": "5",
            "50g普芯": "1"
        }
    },
    a2bf: function(t, e, a) {
        "use strict";
        var r = a("e8b5")
          , i = a("50c4")
          , o = a("0366")
          , s = function(t, e, a, n, c, u, l, d) {
            var p, m = c, f = 0, _ = !!l && o(l, d, 3);
            while (f < n) {
                if (f in a) {
                    if (p = _ ? _(a[f], f, e) : a[f],
                    u > 0 && r(p))
                        m = s(t, e, p, i(p.length), m, u - 1) - 1;
                    else {
                        if (m >= 9007199254740991)
                            throw TypeError("Exceed the acceptable array length");
                        t[m] = p
                    }
                    m++
                }
                f++
            }
            return m
        };
        t.exports = s
    },
    aab4: function(t, e, a) {
        "use strict";
        a.r(e);
        var r = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [a("el-row", [a("el-col", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.formData.loading,
                    expression: "formData.loading"
                }]
            }, [a("div", {
                staticClass: "comBox guigeBox cardBox needhide"
            }, [a("div", {
                staticClass: "guigeLt"
            }, [a("h1", {
                staticClass: "flex guigeH1"
            }, [a("span", {
                staticClass: "geH1Lt"
            }, [t._v(t._s(t.cateName) + "-" + t._s(t.subCateName) + "规格选择 ")]), a("span", {
                staticClass: "lookBnt"
            }, [a("router-link", {
                attrs: {
                    to: "/goods/goodsDesc?gid=" + t.formData.goodAttrVo.id,
                    target: "_blank"
                }
            }, [t._v("查看产品详情")])], 1)]), a("price-common", {
                attrs: {
                    "number-change": t.numberChange,
                    otherInputChange: t.otherInputChange,
                    "form-data": t.formData,
                    "common-form-data": t.commonFormData,
                    "common-vo-list": t.commonVoList,
                    "price-valuation": t.priceValuation
                },
                on: {
                    "update:formData": function(e) {
                        t.formData = e
                    },
                    "update:form-data": function(e) {
                        t.formData = e
                    },
                    "update:commonFormData": function(e) {
                        t.commonFormData = e
                    },
                    "update:common-form-data": function(e) {
                        t.commonFormData = e
                    },
                    "update:commonVoList": function(e) {
                        t.commonVoList = e
                    },
                    "update:common-vo-list": function(e) {
                        t.commonVoList = e
                    }
                }
            }), a("price-major-group", {
                attrs: {
                    priceValuation: t.priceValuation,
                    removeCopyGroupCk: t.removeCopyGroupCk,
                    addCopyGroupCk: t.addCopyGroupCk,
                    radioSelect: t.radioSelect,
                    addCopyGroupRd: t.addCopyGroupRd,
                    removeCopyGroupRd: t.removeCopyGroupRd,
                    selectSelect: t.selectSelect,
                    checkboxSelect: t.checkboxSelect,
                    "form-data": t.formData,
                    "form-vo-list": t.formVoList,
                    "group-vo-list": t.groupVoList,
                    bindType: t.bindType
                },
                on: {
                    "update:formData": function(e) {
                        t.formData = e
                    },
                    "update:form-data": function(e) {
                        t.formData = e
                    },
                    "update:formVoList": function(e) {
                        t.formVoList = e
                    },
                    "update:form-vo-list": function(e) {
                        t.formVoList = e
                    },
                    "update:groupVoList": function(e) {
                        t.groupVoList = e
                    },
                    "update:group-vo-list": function(e) {
                        t.groupVoList = e
                    }
                }
            })], 1), a("price-right", {
                staticClass: "fixedstatus",
                style: "margin-top:" + t.marginnum + "px",
                attrs: {
                    goodsId: t.formData.goodAttrVo.id,
                    priceFormData: t.priceFormData,
                    addCart: t.addCart,
                    addQuote: t.addQuote,
                    priceValuation: t.priceValuation
                },
                on: {
                    "update:priceFormData": function(e) {
                        t.priceFormData = e
                    },
                    "update:price-form-data": function(e) {
                        t.priceFormData = e
                    }
                }
            })], 1)])], 1), a("login-form", {
                attrs: {
                    dialogVisible: t.formData.showLoginDialog
                },
                on: {
                    "update:dialogVisible": function(e) {
                        return t.$set(t.formData, "showLoginDialog", e)
                    },
                    "update:dialog-visible": function(e) {
                        return t.$set(t.formData, "showLoginDialog", e)
                    }
                }
            })], 1)
        }
          , i = []
          , o = (a("7db0"),
        a("c975"),
        a("a9e3"),
        a("96cf"),
        a("1da1"))
          , s = a("5530")
          , n = a("5dda")
          , c = a("6c73")
          , u = a("8958")
          , l = a("83b0")
          , d = a("cc1a")
          , p = a("42da")
          , m = a("4824")
          , f = a("75f0")
          , _ = a("2e8e")
          , b = a("6c10")
          , g = a("fa7d")
          , h = {
            components: {
                PriceRight: p["a"],
                PriceMajorGroup: d["a"],
                PriceCommon: m["a"],
                LoginForm: f["a"]
            },
            data: function() {
                return Object(s["a"])(Object(s["a"])({}, JSON.parse(JSON.stringify(c["k"]))), {}, {
                    bindType: "cate",
                    fixedstatus: "false",
                    fixednum: 0,
                    marginnum: 0,
                    divheight: 0
                })
            },
            created: function() {
                Object(c["y"])(this),
                Object(l["a"])(this),
                this.initPage()
            },
            mounted: function() {
                var t = document.querySelector("body");
                this.divheight = document.querySelector(".guigeLt").clientHeight,
                this.fixednum = document.querySelector(".fixedstatus").clientHeight;
                var e = document.querySelector(".guigeRtWrap")
                  , a = this;
                t.onscroll = function() {
                    a.divheight > a.fixednum + 50 && (document.documentElement.scrollTop > 350 ? (e.classList.add("fixedclass"),
                    document.documentElement.scrollTop > a.divheight - a.fixednum + 350 ? (e.classList.remove("fixedclass"),
                    a.marginnum = a.divheight - a.fixednum) : a.marginnum = 0) : e.classList.remove("fixedclass"))
                }
            },
            watch: {
                $route: function(t) {
                    this.initPage()
                },
                subCateId: {
                    handler: function() {
                        var t = this;
                        return Object(o["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1)
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return t.whereBindId = t.subCateId,
                                        t.formVoList = [],
                                        t.voList = [],
                                        e.next = 5,
                                        Object(c["f"])();
                                    case 5:
                                        return e.next = 7,
                                        Object(c["q"])();
                                    case 7:
                                        Object(c["C"])(),
                                        t.divheight = document.querySelector(".guigeLt").clientHeight,
                                        t.fixednum = document.querySelector(".fixedstatus").clientHeight,
                                        console.log("watch", t.divheight);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))()
                    }
                }
            },
            methods: Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({}, {
                startWith: u["c"],
                endWith: u["b"]
            }), {
                addCopyGroupCk: c["c"],
                removeCopyGroupCk: c["E"],
                addCopyGroupRd: c["d"],
                removeCopyGroupRd: c["F"],
                addCart: c["a"],
                addQuote: c["e"],
                numberChange: c["w"],
                otherInputChange: c["x"],
                checkboxSelect: c["g"],
                selectSelect: c["G"],
                radioSelect: c["A"]
            }), {
                isCopyCraft: l["d"]
            }), {}, {
                initPage: function() {
                    Object(c["r"])(),
                    this.whereBindId = this.subCateId,
                    this.commonVoList = Object(c["p"])(this.cateId, this.subCateId),
                    this.clearData(),
                    Object(c["C"])(),
                    Object(c["t"])(),
                    Object(u["d"])(this.cateId, "13") && (this.formData.dmys.jybm = !0)
                },
                clearData: function() {
                    this.$set(this, "formVoList", []),
                    this.$set(this, "voList", []),
                    this.$set(this, "formData", JSON.parse(JSON.stringify(c["k"].formData))),
                    this.$set(this, "commonFormData", JSON.parse(JSON.stringify(c["k"].commonFormData))),
                    this.$set(this, "priceFormData", JSON.parse(JSON.stringify(c["l"]))),
                    Object(c["u"])()
                },
                pantoneChange: function() {
                    this.priceValuation()
                },
                ysslCheck: function() {
                    var t = this
                      , e = t.priceFormData.yssl
                      , a = t.commonVoList.find((function(t) {
                        return "YSSL" === t.code
                    }
                    ))
                      , r = a.attrList[0]
                      , i = {
                        data: t.commonFormData.inputValues,
                        dataKey: r.groupId + "_" + r.id
                    };
                    if (Object(u["d"])(t.subCateId, "51") || Object(u["d"])(t.subCateId, "120"))
                        parseInt(e) < 1e3 ? i.data[i.dataKey] = "1000" : i.data[i.dataKey] = "" + 1e3 * Math.ceil(parseInt(e) / 1e3);
                    else if (Object(u["d"])(t.subCateId, "52"))
                        parseInt(e) < 1e3 ? i.data[i.dataKey] = "1000" : i.data[i.dataKey] = "" + 1e3 * Math.ceil(parseInt(e) / 1e3);
                    else if (Object(u["d"])(t.subCateId, "55")) {
                        var o = [100, 200, 500, 1e3, 2e3, 3e3, 5e3, 1e4];
                        if (parseInt(e) > 1e4)
                            parseInt(e) % 100 != 0 && (i.data[i.dataKey] = "100",
                            t.$message({
                                type: "error",
                                message: "数量必须是100的整数倍数"
                            }));
                        else
                            for (var s = 0; s < o.length; s++)
                                if (parseInt(e) <= o[s]) {
                                    i.data[i.dataKey] = o[s] + "";
                                    break
                                }
                    } else
                        Object(u["d"])(t.cateId, "70") || Object(u["d"])(t.subCateId, "36") || Object(u["d"])(t.subCateId, "37") || Object(u["d"])(t.subCateId, "38") ? Object(u["d"])(t.subCateId, "85") || Object(u["d"])(t.subCateId, "96") ? parseInt(e) < 1 && (t.$message({
                            type: "error",
                            message: "1个起印"
                        }),
                        i.data[i.dataKey] = "1") : parseInt(e) < 50 && (t.$message({
                            type: "error",
                            message: "50个起印"
                        }),
                        i.data[i.dataKey] = "50") : Object(u["d"])(t.cateId, "5") && Object(u["d"])(t.subCateId, "40") || Object(u["d"])(t.subCateId, "48") ? parseInt(e) < 1 && (t.$message({
                            type: "error",
                            message: "1个起印"
                        }),
                        i.data[i.dataKey] = "1") : Object(u["d"])(t.subCateId, "82") ? parseInt(e) < 500 ? (i.data[i.dataKey] = "500",
                        t.$message({
                            type: "error",
                            message: "500个起印"
                        })) : (console.log(500 * Math.ceil(parseInt(e) / 500)),
                        i.data[i.dataKey] = "" + 500 * Math.ceil(parseInt(e) / 500)) : Object(u["d"])(t.cateId, "86") || Object(u["d"])(t.cateId, "121") ? parseInt(e) < 1 && (i.data[i.dataKey] = "1",
                        t.$message({
                            type: "error",
                            message: "箱数不能小于1"
                        })) : Object(u["d"])(t.cateId, "10") ? parseInt(e) < 5e3 && (i.data[i.dataKey] = "5000",
                        t.$message({
                            type: "error",
                            message: "5000个起印"
                        })) : parseInt(e) < 100 && (t.$message({
                            type: "error",
                            message: "100个起印"
                        }),
                        i.data[i.dataKey] = "100");
                    return Object(u["d"])(t.cateId, "6") && Object(u["d"])(t.subCateId, "101") && parseInt(e) > 3e3 && (t.$message({
                        type: "error",
                        message: "订购数量不能超过3000个"
                    }),
                    i.data[i.dataKey] = 3e3),
                    i.data[i.dataKey]
                },
                priceValuation: function(t, e, a, r) {
                    var i = this;
                    return Object(o["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return "47" == i.$route.query.subCateId && e > 10 && r && (i.$message({
                                        type: "error",
                                        message: "最大不能超过10折"
                                    }),
                                    i.formData.inputValues[r] = 10),
                                    t.next = 3,
                                    Object(c["z"])(i.priceValuationNew);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                priceValuationNew: Object(g["debounce"])(Object(o["a"])(regeneratorRuntime.mark((function t() {
                    var e, a, r, i, o, s, l, d, p, m, f, g, h, v, y, D, C, O, x, I, A, S, V, j, L, Z, k = this;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1)
                            switch (t.prev = t.next) {
                            case 0:
                                if (this.formData.goodAttrVo.id) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 2:
                                if (e = this,
                                a = e.priceFormData.provinceId,
                                r = e.priceFormData.cityId,
                                i = e.priceFormData.countyId,
                                o = e.priceFormData.yssl,
                                s = e.priceFormData.tkks,
                                l = e.priceFormData.extends,
                                e.priceFormData = JSON.parse(JSON.stringify(c["l"])),
                                e.priceFormData.provinceId = a,
                                e.priceFormData.cityId = r,
                                e.priceFormData.countyId = i,
                                e.priceFormData.yssl = o,
                                e.priceFormData.tkks = s,
                                e.priceFormData.extends = l,
                                e.priceFormData.priceProgress = !0,
                                d = !1,
                                p = "",
                                !(this.commonVoList.length > 0)) {
                                    t.next = 26;
                                    break
                                }
                                return t.next = 22,
                                Object(c["j"])();
                            case 22:
                                p = t.sent,
                                p && (this.formData.goodSize.goodAl > 0 && (p += "展开尺寸:" + this.formData.goodSize.goodAl + "_" + this.formData.goodSize.goodAw + ";"),
                                Object(u["d"])(this.cateId, "3") && this.formData.goodSize.otherMap.outlong && (m = this.formData.goodSize.otherMap,
                                p += "天盒面纸展开尺寸:" + m.longFaceTop + "_" + m.widthFaceTop + ";",
                                p += "天盒灰板展开尺寸:" + m.longGreyTop + "_" + m.widthGreyTop + ";",
                                p += "地盒面纸展开尺寸:" + m.longFaceBut + "_" + m.widthFaceBut + ";",
                                p += "地盒灰板展开尺寸:" + m.longGreyBut + "_" + m.widthGreyBut + ";",
                                p += "成品外尺寸:" + m.outlong + "_" + m.outwidth + "_" + m.outheight + ";"),
                                d = !0),
                                t.next = 27;
                                break;
                            case 26:
                                d = !0;
                            case 27:
                                if (!d) {
                                    t.next = 116;
                                    break
                                }
                                f = [],
                                g = 0;
                            case 30:
                                if (!(g < this.formVoList.length)) {
                                    t.next = 55;
                                    break
                                }
                                if (h = this.formVoList[g],
                                "SIZE" !== this.formVoList[g].miniZtAttrGroup.code) {
                                    t.next = 36;
                                    break
                                }
                                f = this.formVoList[g].attrList,
                                t.next = 41;
                                break;
                            case 36:
                                if ("YSSL" !== this.formVoList[g].miniZtAttrGroup.code) {
                                    t.next = 41;
                                    break
                                }
                                if (v = this.formVoList[g].attrList[0],
                                y = this.formData.inputValues[v.groupId + "_" + v.id],
                                y && 0 !== parseInt(y)) {
                                    t.next = 41;
                                    break
                                }
                                return t.abrupt("return", !1);
                            case 41:
                                if (1 !== h.miniZtAttrGroup.required) {
                                    t.next = 52;
                                    break
                                }
                                if ("input" !== h.miniZtAttrGroup.groupType) {
                                    t.next = 52;
                                    break
                                }
                                D = 0;
                            case 44:
                                if (!(D < h.attrList.length)) {
                                    t.next = 52;
                                    break
                                }
                                if (C = h.attrList[D],
                                O = this.formData.inputValues[C.groupId + "_" + C.id],
                                O) {
                                    t.next = 49;
                                    break
                                }
                                return t.abrupt("return");
                            case 49:
                                D++,
                                t.next = 44;
                                break;
                            case 52:
                                g++,
                                t.next = 30;
                                break;
                            case 55:
                                if (!(f.length > 0)) {
                                    t.next = 83;
                                    break
                                }
                                x = {
                                    success: !0
                                },
                                I = {
                                    id: this.formData.goodAttrVo.id
                                },
                                A = 0;
                            case 59:
                                if (!(A < f.length)) {
                                    t.next = 78;
                                    break
                                }
                                if (!this.formData.inputValues[f[A].groupId + "_" + f[A].id]) {
                                    t.next = 75;
                                    break
                                }
                                if ("CPCC_L" !== f[A].code) {
                                    t.next = 69;
                                    break
                                }
                                if (!this.formData.inputValues[f[A].groupId + "_" + f[A].id]) {
                                    t.next = 66;
                                    break
                                }
                                I["goodAl"] = this.formData.inputValues[f[A].groupId + "_" + f[A].id],
                                t.next = 67;
                                break;
                            case 66:
                                return t.abrupt("return", !1);
                            case 67:
                                t.next = 75;
                                break;
                            case 69:
                                if ("CPCC_W" !== f[A].code) {
                                    t.next = 75;
                                    break
                                }
                                if (!this.formData.inputValues[f[A].groupId + "_" + f[A].id]) {
                                    t.next = 74;
                                    break
                                }
                                I["goodAw"] = this.formData.inputValues[f[A].groupId + "_" + f[A].id],
                                t.next = 75;
                                break;
                            case 74:
                                return t.abrupt("return", !1);
                            case 75:
                                A++,
                                t.next = 59;
                                break;
                            case 78:
                                return t.next = 80,
                                Object(n["b"])(I).then((function(t) {
                                    return t
                                }
                                ));
                            case 80:
                                x = t.sent,
                                x.success && (this.$set(this.formData.goodSize, "goodAl", x.data.goodAl),
                                this.$set(this.formData.goodSize, "goodAw", x.data.goodAw)),
                                this.formData.goodSize.goodAl > 0 && (p += "展开尺寸:" + this.formData.goodSize.goodAl + "_" + this.formData.goodSize.goodAw + ";");
                            case 83:
                                return t.next = 85,
                                this.dataChange();
                            case 85:
                                if (S = t.sent,
                                !S) {
                                    t.next = 90;
                                    break
                                }
                                p += S,
                                t.next = 92;
                                break;
                            case 90:
                                return e.priceFormData.priceProgress = !1,
                                t.abrupt("return", !1);
                            case 92:
                                if ("47" === this.subCateId && -1 === p.indexOf("折叠次数") ? -1 !== p.indexOf("折页方式:对折") ? p += "折叠次数:1;" : -1 !== p.indexOf("折页方式:十字折") ? p += "折叠次数:2;" : -1 !== p.indexOf("折页方式:三折") ? p += "折叠次数:3;" : -1 !== p.indexOf("折页方式:四折") && (p += "折叠次数:4;") : Object(u["d"])(this.cateId, "9") && Object(u["d"])(this.subCateId, "46") && (-1 === p.indexOf("开孔形状:") && (p += "开孔形状:不开孔;"),
                                -1 === p.indexOf("开孔数:") && (p += "开孔数:0;")),
                                Object(u["d"])(this.cateId, "3") || (p = this.sortAttrStr(p, "展开尺寸:"),
                                p = this.sortAttrStr(p, "成品尺寸:")),
                                p = p + e.priceFormData.extends + ";",
                                V = "",
                                "" !== this.priceFormData.provinceId && (V += Object(_["b"])("province", this.priceFormData.provinceId)),
                                "" !== this.priceFormData.cityId && ("" !== V && (V += " "),
                                V += Object(_["b"])("city", this.priceFormData.cityId)),
                                "" !== this.priceFormData.countyId && ("" !== V && (V += " "),
                                V += Object(_["b"])("county", this.priceFormData.countyId)),
                                !Object(u["d"])(this.cateId, "81") || !Object(u["d"])(this.subCateId, "82")) {
                                    t.next = 110;
                                    break
                                }
                                if (p = "品类:注塑杯" + p,
                                "-1" != p.indexOf("印刷颜色:无") && "-1" == p.indexOf("专色") || parseInt(e.priceFormData.yssl) < 5e3 && (e.commonFormData.inputValues["5000_5001"] = 5e3,
                                e.priceFormData.yssl = 5e3,
                                this.$message({
                                    type: "error",
                                    message: "定制5000个起订"
                                })),
                                j = 0,
                                L = 0,
                                -1 != p.indexOf("印刷颜色:单色") ? j = 1 : -1 != p.indexOf("印刷颜色:双色") ? j = 2 : -1 != p.indexOf("印刷颜色:三色") ? j = 3 : -1 != p.indexOf("印刷颜色:多色") && (j = 4),
                                -1 != p.indexOf("专色:1") ? L = 1 : -1 != p.indexOf("专色:2") ? L = 2 : -1 != p.indexOf("专色:3") ? L = 3 : -1 != p.indexOf("专色:4") ? L = 4 : -1 != p.indexOf("专色:5") ? L = 5 : -1 != p.indexOf("专色:6") && (L = 6),
                                !(j + L > 6)) {
                                    t.next = 110;
                                    break
                                }
                                return this.$message({
                                    type: "error",
                                    message: "印刷颜色不能大于六种色，请调整印刷颜色"
                                }),
                                e.priceFormData.priceProgress = !1,
                                t.abrupt("return", !1);
                            case 110:
                                console.log(p),
                                Z = this.ysslCheck(),
                                Number(Z) > Number(this.priceFormData.yssl) && (this.priceFormData.yssl = Z),
                                Object(b["c"])({
                                    goodsId: this.formData.goodAttrVo.id,
                                    goodsAttr: p,
                                    number: this.priceFormData.yssl,
                                    fnumber: this.priceFormData.tkks,
                                    cextends: this.priceFormData.extends,
                                    city: V
                                }).then((function(t) {
                                    "970006" === t.code ? k.formData.showLoginDialog = !0 : (k.priceFormData = Object.assign({}, k.priceFormData, t.data),
                                    k.formData.goodAttr = p),
                                    e.priceFormData.priceProgress = !1
                                }
                                )).catch((function(t) {
                                    e.formData.goodAttr = p,
                                    e.priceFormData.priceProgress = !1
                                }
                                )),
                                t.next = 117;
                                break;
                            case 116:
                                e.priceFormData.priceProgress = !1;
                            case 117:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this)
                }
                ))), 500),
                sortAttrStr: function(t, e) {
                    if (-1 !== t.indexOf(e)) {
                        var a = t.indexOf(e)
                          , r = t.indexOf(";", a)
                          , i = t.substring(a, r + 1) + t.substring(0, a) + t.substring(r + 1);
                        return i
                    }
                    return t
                },
                dataChange: function() {
                    return Object(o["a"])(regeneratorRuntime.mark((function t() {
                        var e;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    Object(c["i"])();
                                case 2:
                                    return e = t.sent,
                                    t.abrupt("return", e);
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                }
            })
        }
          , v = h
          , y = (a("cbae"),
        a("2877"))
          , D = Object(y["a"])(v, r, i, !1, null, null, null);
        e["default"] = D.exports
    },
    abeb: function(t, e, a) {},
    b58a: function(t, e, a) {},
    b85c: function(t, e, a) {
        "use strict";
        a.d(e, "a", (function() {
            return i
        }
        ));
        a("a4d3"),
        a("e01a"),
        a("d28b"),
        a("d3b7"),
        a("3ca3"),
        a("ddb0");
        var r = a("06c5");
        function i(t, e) {
            var a;
            if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (a = Object(r["a"])(t)) || e && t && "number" === typeof t.length) {
                    a && (t = a);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, n = !0, c = !1;
            return {
                s: function() {
                    a = t[Symbol.iterator]()
                },
                n: function() {
                    var t = a.next();
                    return n = t.done,
                    t
                },
                e: function(t) {
                    c = !0,
                    s = t
                },
                f: function() {
                    try {
                        n || null == a["return"] || a["return"]()
                    } finally {
                        if (c)
                            throw s
                    }
                }
            }
        }
    },
    b919: function(t, e, a) {
        "use strict";
        a("7db0"),
        a("ac1f"),
        a("466d"),
        a("5319");
        var r = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("el-dialog", {
                attrs: {
                    "custom-class": "ywxx-dialog",
                    visible: t.visible,
                    "append-to-body": "",
                    top: "20px",
                    width: "840px",
                    "before-close": t.handleClose
                },
                on: {
                    "update:visible": function(e) {
                        t.visible = e
                    }
                }
            }, [a("template", {
                slot: "title"
            }, [t._v(" 压纹详情 "), a("el-input", {
                staticClass: "ywxx-search",
                attrs: {
                    size: "mini",
                    placeholder: "输入压纹关键字或者编号搜索"
                },
                model: {
                    value: t.searchValue,
                    callback: function(e) {
                        t.searchValue = "string" === typeof e ? e.trim() : e
                    },
                    expression: "searchValue"
                }
            }, [a("i", {
                staticClass: "el-input__icon el-icon-search",
                attrs: {
                    slot: "prefix"
                },
                slot: "prefix"
            })])], 1), a("div", {
                staticStyle: {
                    padding: "5px 0"
                }
            }, [a("el-tabs", {
                on: {
                    "tab-click": t.tabsHandleClick
                },
                model: {
                    value: t.tabsActiveName,
                    callback: function(e) {
                        t.tabsActiveName = e
                    },
                    expression: "tabsActiveName"
                }
            }, [a("el-tab-pane", {
                attrs: {
                    label: "全部",
                    name: "all"
                }
            }), t._l(t.keywords, (function(t, e) {
                return a("el-tab-pane", {
                    key: e,
                    attrs: {
                        label: t,
                        name: t
                    }
                })
            }
            ))], 2)], 1), a("el-scrollbar", {
                staticClass: "ywxx-box",
                staticStyle: {
                    height: "450px"
                }
            }, [t.radioAttrList.length ? a("el-radio-group", {
                staticClass: "EattrMgroup",
                attrs: {
                    size: "small"
                },
                model: {
                    value: t.attrRadio,
                    callback: function(e) {
                        t.attrRadio = e
                    },
                    expression: "attrRadio"
                }
            }, t._l(t.radioAttrList, (function(e, r) {
                return a("el-row", {
                    key: r,
                    class: t.attrRadio == e.groupId + "_" + e.id ? "Eattrrow radio-eattrrow" : "Eattrrow"
                }, [a("div", {
                    staticClass: "remark"
                }, [a("el-image", {
                    attrs: {
                        src: e.imgUrl,
                        "preview-src-list": [e.imgUrl]
                    }
                }), a("img", {
                    staticClass: "zoom-in-img",
                    attrs: {
                        src: t.zoomInImg
                    }
                })], 1), a("el-radio-button", {
                    attrs: {
                        label: e.groupId + "_" + e.id
                    }
                }, [a("div", {
                    staticClass: "radio-box"
                }, [a("div", {
                    staticClass: "radio-img-box"
                }, [a("img", {
                    class: t.attrRadio == e.groupId + "_" + e.id ? "show-radio-img radio-img" : "radio-img",
                    attrs: {
                        src: t.checkboxImg,
                        alt: ""
                    }
                })]), a("div", [a("div", {
                    staticClass: "attr-text"
                }, [t._v(t._s(e.name))]), a("div", {
                    staticClass: "attr-code"
                }, [t._v("编号:" + t._s(e.actualValueCode))])])])])], 1)
            }
            )), 1) : a("div", {
                staticClass: "null-text"
            }, [t._v(t._s(t.nullText))])], 1), t.attrRadio && t.radioAttrList.length ? a("div", {
                staticStyle: {
                    "text-align": "right"
                }
            }, [a("el-button", {
                staticClass: "confirm-ywxx",
                on: {
                    click: t.confirm
                }
            }, [t._v("确认选择")])], 1) : t._e()], 2)
        }
          , i = []
          , o = (a("4de4"),
        a("c975"),
        a("d81d"),
        a("b0c0"),
        a("1276"),
        a("fa7d"))
          , s = {
            props: {
                visible: {
                    type: Boolean,
                    default: function() {
                        return !1
                    }
                },
                attrList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                value: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    searchValue: "",
                    radioAttrList: [],
                    attrRadio: "",
                    previewSrcList: [],
                    sourceAttrList: [],
                    nullText: "请输入压纹关键字搜索~",
                    keywords: [],
                    tabsActiveName: "all",
                    checked: !1,
                    zoomInImg: a("4ce1"),
                    checkboxImg: a("9013")
                }
            },
            watch: {
                searchValue: function(t) {
                    var e = this;
                    t.length > 1 ? (e.tabsActiveName = "all",
                    e.updateRadioAttrList(t)) : e.radioAttrList = []
                }
            },
            methods: {
                tabsHandleClick: function() {
                    var t = this;
                    "all" != t.tabsActiveName ? t.updateRadioAttrList(t.tabsActiveName) : t.radioAttrList = t.sourceAttrList.filter((function(t, e) {
                        return e < 10
                    }
                    ))
                },
                handleClose: function() {
                    var t = document.querySelector(".el-image-viewer__wrapper");
                    t || this.$emit("update:visible", !1)
                },
                confirm: function() {
                    this.$emit("update:value", this.attrRadio),
                    this.$emit("update:visible", !1)
                },
                updateRadioAttrList: Object(o["debounce"])((function(t) {
                    var e = this;
                    e.attrRadio = "",
                    e.radioAttrList = e.sourceAttrList.filter((function(e) {
                        return -1 != e.name.indexOf(t) || e.actualValueCode == t
                    }
                    )),
                    0 == e.radioAttrList.length && (e.nullText = "没有找到符合条件的数据，请检查并重新输入正确的压纹关键字。")
                }
                ), 300)
            },
            created: function() {
                var t = this;
                0 == t.sourceAttrList.length && (t.sourceAttrList = t.attrList.map((function(e) {
                    if (e.remark) {
                        var a = /src=['"]?([^'"]*)['"]?/i
                          , r = e.remark.match(a);
                        r.length && r[1] && (e.imgUrl = r[1]),
                        -1 == e.remark.indexOf('style="object-fit:none;') && (e.remark = e.remark.replace(/style="/, 'style="object-fit:none;'))
                    } else
                        e.imgUrl = "";
                    var i = e.name.split("-");
                    if (i.length > 1) {
                        var o = i[0];
                        -1 == t.keywords.indexOf(o) && t.keywords.push(o),
                        e.cart = o
                    }
                    if (e.actualValue) {
                        var s = e.actualValue.split(":");
                        s.length > 1 && (e.actualValueCode = s[1])
                    }
                    return e.checked = !1,
                    e
                }
                )),
                t.radioAttrList = t.sourceAttrList.filter((function(t, e) {
                    return e < 10
                }
                )))
            }
        }
          , n = s
          , c = (a("fa8f"),
        a("5c76"),
        a("2877"))
          , u = Object(c["a"])(n, r, i, !1, null, "497629b2", null)
          , l = u.exports
          , d = a("8958");
        e["a"] = {
            components: {
                attrSelect: l
            },
            data: function() {
                return {
                    embossVisible: !1,
                    embossAttrList: [],
                    embossId: "",
                    previewImgSrc: "",
                    oldEmboss: ""
                }
            },
            watch: {
                embossVisible: function(t) {
                    if (!t) {
                        var e = this;
                        if (e.formData.selectSelectValues) {
                            var a = e.formData.selectSelectValues[e.embossId];
                            e.oldEmboss != a && e.selectSelect(a)
                        } else {
                            var r = e.selectdata[e.embossId];
                            r && e.oldEmboss != r && e.getprice()
                        }
                    }
                }
            },
            methods: {
                endWith: d["b"],
                previewImg: function(t, e) {
                    var a = this;
                    if (e[t.miniZtAttrGroup.id]) {
                        var r = t.attrList.find((function(a) {
                            return a.groupId + "_" + a.id === e[t.miniZtAttrGroup.id]
                        }
                        ))
                          , i = /src=['"]?([^'"]*)['"]?/i
                          , o = r.remark.match(i);
                        if (!o.length || !o[1])
                            return void (a.previewImgSrc = "");
                        a.previewImgSrc = o[1],
                        a.$refs.previewImg && a.$refs.previewImg.clickHandler()
                    }
                },
                embossRemark: function(t, e) {
                    if (e && e[t.miniZtAttrGroup.id]) {
                        var a = t.attrList.find((function(a) {
                            return a.groupId + "_" + a.id === e[t.miniZtAttrGroup.id]
                        }
                        ));
                        if (a) {
                            var r = a.remark.replace(/style="/, 'style="');
                            return r
                        }
                    }
                    return ""
                },
                showEmboss: function(t) {
                    var e = this;
                    e.embossId = t.miniZtAttrGroup.id,
                    e.formData.selectSelectValues ? e.oldEmboss = e.formData.selectSelectValues[e.embossId] : e.selectdata && (e.oldEmboss = e.selectdata[e.embossId]),
                    e.embossAttrList = t.attrList,
                    e.embossVisible = !0
                }
            }
        }
    },
    baa5: function(t, e, a) {
        var r = a("23e7")
          , i = a("e58c");
        r({
            target: "Array",
            proto: !0,
            forced: i !== [].lastIndexOf
        }, {
            lastIndexOf: i
        })
    },
    c6e5: function(t, e, a) {
        "use strict";
        a("d6e1")
    },
    cbae: function(t, e, a) {
        "use strict";
        a("836f")
    },
    cc1a: function(t, e, a) {
        "use strict";
        var r = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [t._l(t.groupVoList, (function(e, r) {
                return [a("div", {
                    key: "div_" + r,
                    staticClass: "hardList"
                }, [e.name ? a("h2", {
                    staticClass: "flex hardH2"
                }, [a("span", {
                    staticClass: "geH1Lt"
                }, [t._v(t._s(e.name))])]) : t._e(), "9" == t.$route.query.cateId && "" == e.name ? a("div", {
                    staticStyle: {
                        color: "red",
                        margin: "10px 0 -10px 64px"
                    }
                }, [t._v("说明书使用的是最广泛高松纸材质，与实际克重有差异，如有影响建议您选用更高克重材质")]) : t._e(), a("price-major", {
                    attrs: {
                        priceValuation: t.priceValuation,
                        removeCopyGroupCk: t.removeCopyGroupCk,
                        addCopyGroupCk: t.addCopyGroupCk,
                        addCopyGroupRd: t.addCopyGroupRd,
                        removeCopyGroupRd: t.removeCopyGroupRd,
                        radioSelect: t.radioSelect,
                        selectSelect: t.selectSelect,
                        checkboxSelect: t.checkboxSelect,
                        "form-data": t.formData,
                        "form-vo-list": e.list,
                        bindType: t.bindType,
                        disabledObj: t.disabledObj
                    },
                    on: {
                        "update:formData": function(e) {
                            t.formData = e
                        },
                        "update:form-data": function(e) {
                            t.formData = e
                        },
                        "update:formVoList": function(a) {
                            return t.$set(e, "list", a)
                        },
                        "update:form-vo-list": function(a) {
                            return t.$set(e, "list", a)
                        }
                    }
                }), t.strEquals(e.name, "印刷层信息") ? a("div", {
                    staticClass: "Pantips",
                    staticStyle: {
                        "margin-left": "130px"
                    }
                }, [a("span", {
                    staticClass: "red"
                }, [t._v("温馨提示:")]), t._v(" 如果您的设计文件中使用了三色或四色混合(浅灰、灰、深灰、黑)、暗红色、浅红色、墨绿色、蓝紫色、深紫色、深褐色、咖啡色等色，建议您选择专色印刷，否则出现色差问题不予受理。")]) : t._e()], 1), t.strEquals(e.name, "热封底层信息") && t.strEquals(t.$route.query.cateId, "13") ? a("div", {
                    key: "div_2" + r,
                    staticClass: "hardList",
                    staticStyle: {
                        padding: "15px 15px"
                    }
                }, [t._v("材质结构配比&厚度:" + t._s(t.formData.zcjgpb))]) : t._e()]
            }
            ))], 2)
        }
          , i = []
          , o = a("5530")
          , s = a("8958")
          , n = a("83b0")
          , c = a("f404")
          , u = {
            name: "PriceMajorGroup",
            components: {
                PriceMajor: c["a"]
            },
            props: {
                formVoList: Array,
                formData: Object,
                groupVoList: Array,
                priceValuation: Function,
                removeCopyGroupCk: Function,
                removeCopyGroupRd: Function,
                addCopyGroupCk: Function,
                addCopyGroupRd: Function,
                radioSelect: Function,
                selectSelect: Function,
                checkboxSelect: Function,
                bindType: String,
                disabledObj: Object
            },
            watch: {},
            data: function() {
                return {}
            },
            methods: Object(o["a"])(Object(o["a"])(Object(o["a"])({}, {
                startWith: s["c"],
                endWith: s["b"],
                strEquals: s["d"]
            }), {
                isCopyCraft: n["d"]
            }), {}, {
                parentRadioSelect: function(t) {
                    this.radioSelect(t)
                }
            })
        }
          , l = u
          , d = a("2877")
          , p = Object(d["a"])(l, r, i, !1, null, "10c670ed", null);
        e["a"] = p.exports
    },
    d6e1: function(t, e, a) {},
    e58c: function(t, e, a) {
        "use strict";
        var r = a("fc6a")
          , i = a("a691")
          , o = a("50c4")
          , s = a("a640")
          , n = a("ae40")
          , c = Math.min
          , u = [].lastIndexOf
          , l = !!u && 1 / [1].lastIndexOf(1, -0) < 0
          , d = s("lastIndexOf")
          , p = n("indexOf", {
            ACCESSORS: !0,
            1: 0
        })
          , m = l || !d || !p;
        t.exports = m ? function(t) {
            if (l)
                return u.apply(this, arguments) || 0;
            var e = r(this)
              , a = o(e.length)
              , s = a - 1;
            for (arguments.length > 1 && (s = c(s, i(arguments[1]))),
            s < 0 && (s = a + s); s >= 0; s--)
                if (s in e && e[s] === t)
                    return s || 0;
            return -1
        }
        : u
    },
    ecef: function(t, e, a) {
        t.exports = a.p + "img/gestureleft.85386fa7.jpg"
    },
    f404: function(t, e, a) {
        "use strict";
        var r = function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "EattrMbox"
            }, [t.tgimg ? r("div", {
                staticClass: "guigeImg tgimg",
                style: t.$route.query.disposable ? "width:200px" : ""
            }, [r("img", {
                attrs: {
                    src: t.tgimg,
                    alt: ""
                }
            })]) : t._e(), r("el-form", {
                ref: "formData",
                staticClass: "EattrMain",
                attrs: {
                    model: t.formData,
                    "label-width": "130px",
                    size: "small"
                },
                nativeOn: {
                    submit: function(t) {
                        t.preventDefault()
                    }
                }
            }, [t._l(t.formVoList, (function(e, i) {
                return ["YSLX_PBYS_MZCZ" == e.miniZtAttrGroup.code ? r("div", {
                    key: "pbyhts" + i,
                    staticStyle: {
                        "margin-left": "64px",
                        "margin-bottom": "20px",
                        "font-size": "12px"
                    }
                }, [r("span", {
                    staticStyle: {
                        color: "red"
                    }
                }, [t._v("温馨提示：")]), t._v("拼版印刷500个起订，100个递增，超过1000个按照1000个递增印刷数量，专版印刷100个起订。 ")]) : t._e(), t.endWith(e.miniZtAttrGroup.code, "ZJGY_BK_YSYS") && t.formData.bkstatus ? [r("el-form-item", {
                    key: "bkczkz_" + i,
                    attrs: {
                        label: "裱卡按钮:"
                    }
                }, [r("template", {
                    slot: "label"
                }, [r("div", {
                    staticClass: "EattrLab"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v(" 裱卡材质/克重 ")])]), r("div", {
                    staticClass: "Eattrrow el-row"
                }, [r("label", {
                    staticClass: "el-radio-button el-radio-button--small is-active",
                    attrs: {
                        role: "radio",
                        "aria-checked": "true",
                        tabindex: "0",
                        size: "small"
                    }
                }, [r("input", {
                    staticClass: "el-radio-button__orig-radio",
                    attrs: {
                        type: "radio",
                        tabindex: "-1",
                        value: "15310_48642"
                    }
                }), r("span", {
                    staticClass: "el-radio-button__inner",
                    staticStyle: {
                        "border-color": "#e60021"
                    }
                }, [t._v(" " + t._s(t.formData.bkkg) + "g ")])])])], 2), r("el-form-item", {
                    key: "bkbmcl_" + i,
                    attrs: {
                        label: "表面处理:"
                    }
                }, [r("template", {
                    slot: "label"
                }, [r("div", {
                    staticClass: "EattrLab"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v(" 表面处理 ")])]), r("div", {
                    staticClass: "Eattrrow el-row"
                }, [r("label", {
                    staticClass: "el-radio-button el-radio-button--small is-active",
                    attrs: {
                        role: "radio",
                        "aria-checked": "true",
                        tabindex: "0",
                        size: "small"
                    }
                }, [r("input", {
                    staticClass: "el-radio-button__orig-radio",
                    attrs: {
                        type: "radio",
                        tabindex: "-1",
                        value: "15310_48642"
                    }
                }), r("span", {
                    staticClass: "el-radio-button__inner",
                    staticStyle: {
                        "border-color": "#e60021"
                    }
                }, [t._v(" " + t._s(t.formData.bkbmcl) + " ")])])])], 2)] : t._e(), [t._v(" " + t._s(t.endWith(e.miniZtAttrGroup.code, "SL") ? t.setX(e.attrList[0].name) : "") + " ")], t.strEquals(t.$route.query.cateId, "2") && t.strEquals(e.miniZtAttrGroup.code, "ZJGY") ? r("el-form-item", {
                    key: "reminderbkz_" + i,
                    attrs: {
                        label: "见坑纸信息:"
                    }
                }, [r("template", {
                    slot: "label"
                }, [r("div", {
                    staticClass: "EattrLab"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v(" 见坑纸信息 ")])]), t._v(" " + t._s(t.formData.zcjgpb) + " ")], 2) : t._e(), t.strEquals(t.$route.query.cateId, "70") && t.strEquals(e.miniZtAttrGroup.code, "YSYS") ? r("el-form-item", {
                    key: "reminderwx_" + i
                }, [r("template", {
                    slot: "label"
                }, [r("div", {
                    staticClass: "EattrLab"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v(" 材质信息 ")])]), t._v(" " + t._s(t.formData.zcjgpb) + " ")], 2) : t._e(), t.strEquals(t.$route.query.cateId, "2") && t.strEquals(e.miniZtAttrGroup.code, "GY_TC") ? r("el-form-item", {
                    key: "reminder3_" + i
                }, [r("div", {
                    staticClass: "Emtils"
                }, [t._v("温馨提示：平台贴窗材质为PET，离折线≥15mm，用厚度为0.15±0.03mm胶片； 离折线＜12mm，用厚度为0.10±0.02mm胶片")])]) : t._e(), t.strEquals(t.$route.query.cateId, "1") && t.strEquals(e.miniZtAttrGroup.code, "ZJGY") ? r("el-form-item", {
                    key: "reminder2_" + i
                }, [r("div", {
                    staticClass: "Pantips"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("温馨提示:")]), t._v(" 如果您的设计文件中使用了三色或四色混合(浅灰、灰、深灰、黑)、暗红色、浅红色、墨绿色、蓝紫色、深紫色、深褐色、咖啡色等色，建议您选择专色印刷，否则出现色差问题不予受理。")])]) : t._e(), null != e.miniZtAttrGroup.reminder && "" !== e.miniZtAttrGroup.reminder ? r("el-form-item", {
                    key: "reminder_" + i
                }, [r("div", {
                    staticClass: "Emtils"
                }, [t._v(" " + t._s(e.miniZtAttrGroup.reminder) + " ")])]) : t._e(), r("el-form-item", {
                    key: i,
                    class: t.strEquals(e.miniZtAttrGroup.actualValue, "isshow") ? "ishow" : "",
                    attrs: {
                        name: t.$route.query.disposable && t.endWith(e.miniZtAttrGroup.code, "HX") || t.hidefu(e.miniZtAttrGroup.name, t.$route.query.subCateId, t.$route.query.cateId) ? "hidename" : ""
                    }
                }, [r("template", {
                    slot: "label"
                }, [r("div", {
                    staticClass: "EattrLab",
                    class: "is" == e.miniZtAttrGroup.actualValue && e.miniZtAttrGroup.code.indexOf(t.msize) > 0 ? "titlenone" : ""
                }, [t.strEquals(t.$route.query.cateId, "86") || t.strEquals(t.$route.query.cateId, "121") ? [1 !== e.miniZtAttrGroup.required || t.endWith(e.miniZtAttrGroup.code, "SL") || 1 !== e.miniZtAttrGroup.showName ? t._e() : r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v(" " + t._s(1 !== e.miniZtAttrGroup.showName || t.endWith(e.miniZtAttrGroup.code, "SL") ? "" : e.miniZtAttrGroup.name) + " ")] : [1 === e.miniZtAttrGroup.required && 1 === e.miniZtAttrGroup.showName ? r("span", {
                    staticClass: "red"
                }, [t._v("*")]) : t._e(), t._v(" " + t._s(1 === e.miniZtAttrGroup.showName ? e.miniZtAttrGroup.name : "") + " "), 10 == t.$route.query.cateId && t.endWith(e.miniZtAttrGroup.code, "TGCC") ? r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start"
                    }
                }, [r("div", {
                    attrs: {
                        slot: "content"
                    },
                    slot: "content"
                }, [t._v(t._s(94 == e.miniZtAttrGroup.bindId ? "请输入直径，傲彩为您推荐尺寸相近铁罐" : "请输入长宽，傲彩为您推荐尺寸相近铁盒"))]), r("em", {
                    staticClass: "guigeTis"
                }, [t._v("?")])]) : t._e(), 10 == t.$route.query.cateId && t.endWith(e.miniZtAttrGroup.code, "TGCC") ? r("p", {
                    staticStyle: {
                        "line-height": "5px"
                    }
                }, [t._v(t._s(94 == e.miniZtAttrGroup.bindId ? "(直径*高)" : "(长*宽*高)"))]) : t._e()]], 2), t.endWith(e.miniZtAttrGroup.code, "YSBH") ? r("div", [r("a", {
                    staticStyle: {
                        color: "red"
                    },
                    attrs: {
                        href: "/goods/goodsDesc?gid=919",
                        target: "_blank"
                    }
                }, [t._v("(查看颜色详情)")])]) : t._e(), t._e(), t.strEquals(e.miniZtAttrGroup.code, "BMCL_BRB_FBYS") ? r("div", [r("span", {
                    staticClass: "viewVeins charpieTips",
                    on: {
                        click: function(e) {
                            t.fbysDialogVisible = !0
                        }
                    }
                }, [t._v("(查看绒布颜色参照)")])]) : t._e()]), t.strEquals(e.miniZtAttrGroup.groupType, "input") ? r("el-row", {
                    staticClass: "flex inputBx Layerinpts",
                    staticStyle: {
                        "flex-wrap": "wrap"
                    }
                }, [t.endWith(e.miniZtAttrGroup.code, "TGCC") ? [t._l(e.attrList, (function(e) {
                    return r("div", {
                        key: e.id,
                        staticClass: "inputBxrow tgcc"
                    }, [r("el-input", {
                        style: e.suffix ? "" : "width:130px",
                        attrs: {
                            disabled: t.disabledflag,
                            placeholder: e.inputTips,
                            size: "small"
                        },
                        on: {
                            focus: t.inpfocus,
                            input: function(a) {
                                return t.tgchange(e, e.groupId + "_" + e.id)
                            }
                        },
                        model: {
                            value: t.formData.inputValues[e.groupId + "_" + e.id],
                            callback: function(a) {
                                t.$set(t.formData.inputValues, e.groupId + "_" + e.id, a)
                            },
                            expression: "formData.inputValues[attr.groupId + '_' + attr.id]"
                        }
                    }, [e.suffix ? r("template", {
                        slot: "append"
                    }, [t._v(t._s(e.suffix))]) : t._e()], 2)], 1)
                }
                )), t.anewflag && !t.$route.query.isCms ? r("span", {
                    staticClass: "anew",
                    on: {
                        click: t.anewfn
                    }
                }, [t._v("重新筛选")]) : t._e(), t.$route.query.isCms && t.noFlatDisabled || t.$route.query.isnum ? r("span", {
                    staticClass: "anew",
                    on: {
                        click: t.anewfn
                    }
                }, [t._v("重新筛选")]) : t._e(), t.cclist.length > 0 ? r("div", {
                    staticStyle: {
                        float: "left",
                        width: "100%",
                        "margin-top": "10px"
                    }
                }, t._l(t.cclist, (function(e, a) {
                    return r("div", {
                        key: a,
                        staticStyle: {
                            float: "left"
                        }
                    }, [r("el-radio-group", {
                        staticClass: "EattrMgroup",
                        attrs: {
                            size: "small",
                            "button-style": "solid"
                        },
                        on: {
                            change: function(a) {
                                return t.tgclick(e)
                            }
                        },
                        model: {
                            value: t.ccdata,
                            callback: function(e) {
                                t.ccdata = e
                            },
                            expression: "ccdata"
                        }
                    }, [r("el-row", {
                        staticClass: "Eattrrow"
                    }, [r("el-tooltip", {
                        staticClass: "item",
                        attrs: {
                            width: "200",
                            effect: "light",
                            placement: "top-start",
                            enterable: !1
                        }
                    }, [r("template", {
                        slot: "content"
                    }, [r("div", {
                        staticClass: "EattrMtips"
                    }, [r("img", {
                        attrs: {
                            width: "100%",
                            src: e.imagesPath ? "https://aocai.cn/" + e.imagesPath : "https://aocai.cn" + e.photoPath1,
                            alt: ""
                        }
                    })])]), r("el-radio-button", {
                        attrs: {
                            size: "small",
                            label: e.id
                        }
                    }, [t._v(t._s(e.size))])], 2)], 1)], 1)], 1)
                }
                )), 0) : t._e()] : t._l(e.attrList, (function(e) {
                    return r("div", {
                        key: e.id,
                        staticClass: "inputBxrow"
                    }, ["120" == t.$route.query.subCateId ? r("el-input-number", {
                        style: e.suffix ? "" : "width:130px",
                        attrs: {
                            placeholder: e.inputTips,
                            size: "small",
                            min: 0,
                            step: 100,
                            "step-strictly": ""
                        },
                        on: {
                            change: t.priceValuation
                        },
                        model: {
                            value: t.formData.inputValues[e.groupId + "_" + e.id],
                            callback: function(a) {
                                t.$set(t.formData.inputValues, e.groupId + "_" + e.id, a)
                            },
                            expression: "formData.inputValues[attr.groupId + '_' + attr.id]"
                        }
                    }, [e.suffix ? r("template", {
                        slot: "append"
                    }, [t._v(t._s(e.suffix))]) : t._e()], 2) : r("el-input", {
                        style: e.suffix ? "" : "width:378px",
                        attrs: {
                            disabled: t.noFlatDisabled,
                            placeholder: e.inputTips,
                            size: "small"
                        },
                        on: {
                            change: function(a) {
                                t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "", t.formData.inputValues[e.groupId + "_" + e.id], e.suffix, e.groupId + "_" + e.id)
                            }
                        },
                        nativeOn: {
                            keyup: function(a) {
                                return t.inpkey(e.groupId + "_" + e.id)
                            }
                        },
                        model: {
                            value: t.formData.inputValues[e.groupId + "_" + e.id],
                            callback: function(a) {
                                t.$set(t.formData.inputValues, e.groupId + "_" + e.id, a)
                            },
                            expression: "formData.inputValues[attr.groupId + '_' + attr.id]"
                        }
                    }, [e.suffix ? r("template", {
                        slot: "append"
                    }, [t._v(t._s(e.suffix))]) : t._e()], 2)], 1)
                }
                )), t.isCopyCraft(e.miniZtAttrGroup.code) && !t.endWith(e.miniZtAttrGroup.code, "_COPY") ? r("div", {
                    staticClass: "group-copy-div"
                }, [r("el-button", {
                    attrs: {
                        size: "mini",
                        round: "",
                        type: "danger",
                        disabled: t.readioDisabled(e)
                    },
                    on: {
                        click: function(a) {
                            return t.addCopyGroupCk(e.miniZtAttrGroup.parentAttrId)
                        }
                    }
                }, [t._v("增加" + t._s(e.miniZtAttrGroup.name))]), r("el-button", {
                    attrs: {
                        size: "mini",
                        round: "",
                        type: "info",
                        disabled: t.readioDisabled(e)
                    },
                    on: {
                        click: function(a) {
                            return t.removeCopyGroupCk({
                                pid: e.miniZtAttrGroup.pid,
                                parentAttrId: e.miniZtAttrGroup.parentAttrId,
                                isCopy: !1
                            })
                        }
                    }
                }, [t._v("取消" + t._s(e.miniZtAttrGroup.name))])], 1) : t._e(), t.isCopyCraft(e.miniZtAttrGroup.code) && t.endWith(e.miniZtAttrGroup.code, "_COPY") ? r("div", {
                    staticClass: "group-copy-div"
                }, [r("el-button", {
                    attrs: {
                        size: "mini",
                        round: "",
                        type: "info",
                        disabled: t.readioDisabled(e)
                    },
                    on: {
                        click: function(a) {
                            return t.removeCopyGroupCk({
                                pid: e.miniZtAttrGroup.pid,
                                copyIndex: e.copyIndex,
                                parentAttrId: e.miniZtAttrGroup.parentAttrId,
                                isCopy: !0
                            })
                        }
                    }
                }, [t._v("删除")])], 1) : t._e()], 2) : t.strEquals(e.miniZtAttrGroup.groupType, "radio") ? r("div", {
                    staticClass: "flex",
                    class: 0 === e.miniZtAttrGroup.showName ? "oAtrLayer" : ""
                }, [r("el-radio-group", {
                    staticClass: "EattrMgroup",
                    attrs: {
                        size: "small",
                        "button-style": "solid"
                    },
                    on: {
                        change: t.radioSelect
                    },
                    model: {
                        value: t.formData.radioSelectValues[e.miniZtAttrGroup.id],
                        callback: function(a) {
                            t.$set(t.formData.radioSelectValues, e.miniZtAttrGroup.id, a)
                        },
                        expression: "formData.radioSelectValues[item.miniZtAttrGroup.id]"
                    }
                }, [t._l(e.attrList, (function(a) {
                    return r("el-row", {
                        key: "attr_" + a.id,
                        staticClass: "Eattrrow"
                    }, ["" != a.remark && null != a.remark ? [t.$route.query.isCms ? r("el-radio-button", {
                        attrs: {
                            disabled: t.readioDisabled(e, a),
                            size: "small",
                            label: a.groupId + "_" + a.id
                        }
                    }, [t._v(t._s(a.name))]) : r("el-tooltip", {
                        staticClass: "item",
                        attrs: {
                            width: "200",
                            effect: "light",
                            placement: "top-start",
                            enterable: 86 != t.$route.query.cateId && 121 != t.$route.query.cateId
                        }
                    }, [r("template", {
                        slot: "content"
                    }, [r("div", {
                        staticClass: "EattrMtips",
                        domProps: {
                            innerHTML: t._s(a.remark)
                        }
                    }, [t._v(t._s(a.remark))])]), r("el-radio-button", {
                        attrs: {
                            size: "small",
                            label: a.groupId + "_" + a.id
                        }
                    }, [t._v(t._s(a.name))])], 2)] : (t.strEquals(t.$route.query.cateId, "86") || t.strEquals(t.$route.query.cateId, "121")) && t.endWith(e.miniZtAttrGroup.code, "SL") ? void 0 : [[t.endWith(e.miniZtAttrGroup.code, "QTGY_CK") ? r("el-radio-button", {
                        attrs: {
                            size: "small",
                            label: a.groupId + "_" + a.id
                        },
                        nativeOn: {
                            click: function(r) {
                                return r.preventDefault(),
                                t.clickitem(a.groupId + "_" + a.id, e.miniZtAttrGroup.id, a.inputTips)
                            }
                        }
                    }, [t._v(" " + t._s(a.name) + " ")]) : 122 == t.$route.query.cateId ? ["img" == a.defaultValue ? [r("el-tooltip", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: a.prefix.indexOf(t.msize) > -1 || "all" == a.prefix,
                            expression: "attr.prefix.indexOf(msize) > -1 || attr.prefix == 'all'"
                        }],
                        staticClass: "item",
                        attrs: {
                            width: "200",
                            effect: "light",
                            placement: "top-start",
                            enterable: !1
                        }
                    }, [r("template", {
                        slot: "content"
                    }, [r("div", {
                        staticClass: "EattrMtips"
                    }, ["HZYS" == e.miniZtAttrGroup.code || "盒内搭配:空盒" == a.actualValue || "上层:空盒" == a.actualValue || "下层:空盒" == a.actualValue || "上层内盒:空盒" == a.actualValue || "下层内盒:空盒" == a.actualValue ? r("img", {
                        attrs: {
                            width: "100%",
                            src: a.name + t.msize + ".png"
                        }
                    }) : r("img", {
                        attrs: {
                            width: "100%",
                            src: a.name
                        }
                    }), r("p", [t._v(t._s(a.actualValue.substring(a.actualValue.lastIndexOf(":") + 1, a.actualValue.length)))])])]), r("el-radio-button", {
                        class: "img" == a.defaultValue ? "padd" : "",
                        attrs: {
                            size: "small",
                            label: a.groupId + "_" + a.id
                        }
                    }, ["HZYS" == e.miniZtAttrGroup.code || "盒内搭配:空盒" == a.actualValue || "上层:空盒" == a.actualValue || "下层:空盒" == a.actualValue || "上层内盒:空盒" == a.actualValue || "下层内盒:空盒" == a.actualValue ? r("img", {
                        attrs: {
                            width: "50px",
                            height: "50px",
                            src: a.name + t.msize + ".png"
                        }
                    }) : r("img", {
                        attrs: {
                            width: "50px",
                            height: "50px",
                            src: a.name
                        }
                    })])], 2)] : [r("el-radio-button", {
                        staticStyle: {
                            "margin-top": "12px"
                        },
                        attrs: {
                            size: "small",
                            label: a.groupId + "_" + a.id
                        }
                    }, [t._v(" " + t._s(a.name) + " ")])]] : r("el-radio-button", {
                        attrs: {
                            size: "small",
                            disabled: "品类" == e.miniZtAttrGroup.name && 13 == t.$route.query.cateId ? "true" == t.$route.query.flat : t.readioDisabled(e, a),
                            label: a.groupId + "_" + a.id
                        }
                    }, [t._v(" " + t._s(a.name) + " ")])]]], 2)
                }
                )), t.strEquals(e.miniZtAttrGroup.code, "FHCCZ") ? r("div", {
                    staticClass: "group-copy-div1"
                }, [r("el-button", {
                    attrs: {
                        round: "",
                        size: "mini",
                        type: "danger",
                        disabled: t.readioDisabled(e)
                    },
                    on: {
                        click: function(a) {
                            return t.addCopyGroupRd(e.miniZtAttrGroup.id, 4)
                        }
                    }
                }, [t._v("增加复合层")]), r("el-button", {
                    attrs: {
                        round: "",
                        size: "mini",
                        type: "info",
                        disabled: t.readioDisabled(e)
                    },
                    on: {
                        click: function(a) {
                            return t.removeCopyGroupRd({
                                id: e.miniZtAttrGroup.id,
                                copyIndex: 0,
                                parentAttrId: e.miniZtAttrGroup.parentAttrId,
                                isCopy: !1
                            })
                        }
                    }
                }, [t._v("取消复合层")]), r("div", {
                    staticStyle: {
                        clear: "both"
                    }
                })], 1) : t._e(), t.startWith(e.miniZtAttrGroup.code, "FHCCZ") && t.endWith(e.miniZtAttrGroup.code, "_COPY") ? r("div", {
                    staticClass: "group-copy-div1"
                }, [r("el-button", {
                    attrs: {
                        round: "",
                        size: "mini",
                        type: "info",
                        disabled: t.readioDisabled(e)
                    },
                    on: {
                        click: function(a) {
                            return t.removeCopyGroupRd({
                                id: e.miniZtAttrGroup.id,
                                copyIndex: e.copyIndex,
                                parentAttrId: e.miniZtAttrGroup.parentAttrId,
                                isCopy: !0
                            })
                        }
                    }
                }, [t._v("删除")])], 1) : t._e()], 2), (t.strEquals(t.$route.query.cateId, "8") || t.strEquals(t.$route.query.subCateId, "40")) && t.strEquals(e.miniZtAttrGroup.code, "YSYS") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t.formData.dmys.jybm ? r("el-checkbox-button", {
                    staticClass: "major-check",
                    attrs: {
                        label: "加印白墨",
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: t.priceValuation
                    },
                    model: {
                        value: t.formData.dmys.jybmVal,
                        callback: function(e) {
                            t.$set(t.formData.dmys, "jybmVal", e)
                        },
                        expression: "formData.dmys.jybmVal"
                    }
                }, [t._v("加印白墨")]) : t._e()], 1) : t._e(), "YSLX_PBYS_BMCL" == e.miniZtAttrGroup.code ? r("span", [t._v("(备注:如需光胶或哑胶选专版印刷)")]) : t._e(), "YSLX_PBYS_QCP" == e.miniZtAttrGroup.code ? r("span", [t._v("(备注:如需圆角或异形选专版印刷)")]) : t._e(), "YSLX_PBYS_BMCL_T" == e.miniZtAttrGroup.code ? r("span", [t._v("(备注:如需过胶,请选择专版印刷)")]) : t._e(), "YSLX_PBYS_MZCZ" == e.miniZtAttrGroup.code ? r("span", {
                    staticStyle: {
                        color: "red"
                    }
                }, [t._v("(更多材质或需考虑坑纹方向请选专版印刷)")]) : t._e(), "粘合" == e.miniZtAttrGroup.name && t.strEquals(t.$route.query.subCateId, "24") ? r("span", [t._v("(此粘合是指粘口位的粘合工艺)")]) : t._e(), t.strEquals(t.bindType, "cate") ? r("span", [t.endWith(e.miniZtAttrGroup.code, "SGYSYS") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t._v(" 专色数量: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: t.priceValuation
                    },
                    model: {
                        value: t.formData.sgYsys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.sgYsys, "scCount", e)
                        },
                        expression: "formData.sgYsys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                })], 1)], 1) : t._e(), t.endWith(e.miniZtAttrGroup.code, "XGYSYS") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t._v(" 专色数量: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: t.priceValuation
                    },
                    model: {
                        value: t.formData.xgYsys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.xgYsys, "scCount", e)
                        },
                        expression: "formData.xgYsys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                })], 1)], 1) : t._e(), t.endWith(e.miniZtAttrGroup.code, "YSXZ") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t.formData.dmys.jybm ? r("el-checkbox-button", {
                    staticClass: "major-check",
                    attrs: {
                        disabled: t.noFlatDisabled,
                        label: "加印白墨"
                    },
                    on: {
                        change: function(e) {
                            t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                        }
                    },
                    model: {
                        value: t.formData.dmys.jybmVal,
                        callback: function(e) {
                            t.$set(t.formData.dmys, "jybmVal", e)
                        },
                        expression: "formData.dmys.jybmVal"
                    }
                }, [t._v("加印白墨")]) : t._e(), t._v(" 专色数量: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: function(e) {
                            t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                        }
                    },
                    model: {
                        value: t.formData.dmys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.dmys, "scCount", e)
                        },
                        expression: "formData.dmys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                })], 1)], 1) : t._e(), t.endWith(e.miniZtAttrGroup.code, "BK_YSYS") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t._v(" 专色数量: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: function(e) {
                            t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                        }
                    },
                    model: {
                        value: t.formData.bqys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.bqys, "scCount", e)
                        },
                        expression: "formData.bqys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                })], 1)], 1) : t._e(), t.endWith(e.miniZtAttrGroup.code, "ZJGY_YSYS") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t._v(" 专色数量: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: t.priceValuation
                    },
                    model: {
                        value: t.formData.bqys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.bqys, "scCount", e)
                        },
                        expression: "formData.bqys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                })], 1)], 1) : t._e(), (t.strEquals(t.$route.query.cateId, "2") && "裱卡" != e.miniZtAttrGroup.parentAttrName || t.strEquals(t.$route.query.cateId, "4") && t.strEquals(t.$route.query.subCateId, "35") && "YSYS" == e.miniZtAttrGroup.code || t.strEquals(t.$route.query.cateId, "9") && t.strEquals(t.$route.query.subCateId, "46") && t.formData.radioSelectValues["6668"] && t.formData.radioSelectValues["6668"].indexOf("6668_29877") > -1 || t.strEquals(t.$route.query.cateId, "9") && t.strEquals(t.$route.query.subCateId, "47") && t.formData.radioSelectValues["6705"] && t.formData.radioSelectValues["6705"].indexOf("6705_30004") > -1 || t.strEquals(t.$route.query.cateId, "81") && t.strEquals(t.$route.query.subCateId, "82") || t.strEquals(t.$route.query.cateId, "70") || t.strEquals(t.$route.query.cateId, "13")) && t.endWith(e.miniZtAttrGroup.code, "YSYS") ? r("span", {
                    staticClass: "colorNumbr"
                }, [!t.formData.dmys.jybm || t.strEquals(t.$route.query.cateId, "9") && (t.strEquals(t.$route.query.subCateId, "46") || t.strEquals(t.$route.query.subCateId, "47")) ? t._e() : r("el-checkbox-button", {
                    staticClass: "major-check",
                    attrs: {
                        disabled: t.noFlatDisabled,
                        label: "加印白墨"
                    },
                    on: {
                        change: t.priceValuation
                    },
                    model: {
                        value: t.formData.dmys.jybmVal,
                        callback: function(e) {
                            t.$set(t.formData.dmys, "jybmVal", e)
                        },
                        expression: "formData.dmys.jybmVal"
                    }
                }, [t._v("加印白墨")]), t._v(" 专色数量: "), t.strEquals(t.$route.query.cateId, "81") && t.strEquals(t.$route.query.subCateId, "82") ? r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: function(e) {
                            return t.priceValuation()
                        }
                    },
                    model: {
                        value: t.formData.dmys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.dmys, "scCount", e)
                        },
                        expression: "formData.dmys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                }), r("el-option", {
                    attrs: {
                        label: "5",
                        value: 5
                    }
                }), r("el-option", {
                    attrs: {
                        label: "6",
                        value: 6
                    }
                })], 1) : r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: t.priceValuation
                    },
                    model: {
                        value: t.formData.dmys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.dmys, "scCount", e)
                        },
                        expression: "formData.dmys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), "2" !== t.$route.query.cateId ? r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                }) : t._e()], 1)], 1) : t._e(), t.strEquals(t.$route.query.cateId, "10") && t.endWith(e.miniZtAttrGroup.code, "YSYS") ? r("span", {
                    staticClass: "colorNumbr"
                }, [r("el-checkbox-button", {
                    staticClass: "major-check",
                    attrs: {
                        disabled: t.noFlatDisabled,
                        label: "加印白墨"
                    },
                    on: {
                        change: t.priceValuation
                    },
                    model: {
                        value: t.formData.dmys.jybmVal,
                        callback: function(e) {
                            t.$set(t.formData.dmys, "jybmVal", e)
                        },
                        expression: "formData.dmys.jybmVal"
                    }
                }, [t._v("加印白墨")]), t._v(" 专色数量: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: t.priceValuation
                    },
                    model: {
                        value: t.formData.dmys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.dmys, "scCount", e)
                        },
                        expression: "formData.dmys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                })], 1)], 1) : t._e(), t.endWith(e.miniZtAttrGroup.code, "SMYS_ZM") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t.formData.zmys.jybm ? r("el-checkbox-button", {
                    staticClass: "major-check",
                    attrs: {
                        disabled: t.noFlatDisabled,
                        label: "加印白墨"
                    },
                    on: {
                        change: function(e) {
                            t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                        }
                    },
                    model: {
                        value: t.formData.zmys.jybmVal,
                        callback: function(e) {
                            t.$set(t.formData.zmys, "jybmVal", e)
                        },
                        expression: "formData.zmys.jybmVal"
                    }
                }, [t._v("加印白墨")]) : t._e(), t._v(" 专色数量: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: function(e) {
                            t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                        }
                    },
                    model: {
                        value: t.formData.zmys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.zmys, "scCount", e)
                        },
                        expression: "formData.zmys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                })], 1)], 1) : t._e(), t.endWith(e.miniZtAttrGroup.code, "SMYS_FM") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t.formData.fmys.jybm ? r("el-checkbox-button", {
                    staticClass: "major-check",
                    attrs: {
                        disabled: t.noFlatDisabled,
                        label: "加印白墨"
                    },
                    on: {
                        change: function(e) {
                            t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                        }
                    },
                    model: {
                        value: t.formData.fmys.jybmVal,
                        callback: function(e) {
                            t.$set(t.formData.fmys, "jybmVal", e)
                        },
                        expression: "formData.fmys.jybmVal"
                    }
                }, [t._v("加印白墨")]) : t._e(), t._v(" 专色数量: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: function(e) {
                            t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                        }
                    },
                    model: {
                        value: t.formData.fmys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.fmys, "scCount", e)
                        },
                        expression: "formData.fmys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                })], 1)], 1) : t._e(), t.endWith(e.miniZtAttrGroup.code, "BJYGY_BK_YSYS1") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t._v(" 专色数量: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: function(e) {
                            return t.priceValuation()
                        }
                    },
                    model: {
                        value: t.formData.bj1ys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.bj1ys, "scCount", e)
                        },
                        expression: "formData.bj1ys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                })], 1)], 1) : t._e(), t.endWith(e.miniZtAttrGroup.code, "BJEGY_BK_YSYS2") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t._v(" 专色数量: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: function(e) {
                            return t.priceValuation()
                        }
                    },
                    model: {
                        value: t.formData.bj2ys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.bj2ys, "scCount", e)
                        },
                        expression: "formData.bj2ys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                })], 1)], 1) : t._e(), t.strEquals(t.$route.query.cateId, "5") && t.strEquals(t.$route.query.subCateId, "41") && t.endWith(e.miniZtAttrGroup.code, "YSYS") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t._v(" 专色数量: "), t.formData.radioSelectValues["6448"] && t.formData.radioSelectValues["6448"].includes("6448_29118") ? r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: function(e) {
                            return t.priceValuation()
                        }
                    },
                    model: {
                        value: t.formData.dmys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.dmys, "scCount", e)
                        },
                        expression: "formData.dmys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                })], 1) : t._e(), t.formData.radioSelectValues["6448"] && t.formData.radioSelectValues["6448"].includes("6448_65444") ? r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: function(e) {
                            return t.priceValuation()
                        }
                    },
                    model: {
                        value: t.formData.dmys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.dmys, "scCount", e)
                        },
                        expression: "formData.dmys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                }), r("el-option", {
                    attrs: {
                        label: "5",
                        value: 5
                    }
                }), r("el-option", {
                    attrs: {
                        label: "6",
                        value: 6
                    }
                })], 1) : t._e()], 1) : t._e(), t.strEquals(t.$route.query.cateId, "70") && t.endWith(e.miniZtAttrGroup.code, "YSYS") ? r("span", {
                    staticClass: "colorNumbr"
                }, [t._v(" 印刷面: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: t.ysmChange
                    },
                    model: {
                        value: t.formData.ysm.scCount,
                        callback: function(e) {
                            t.$set(t.formData.ysm, "scCount", e)
                        },
                        expression: "formData.ysm.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                }), r("el-option", {
                    attrs: {
                        label: "5",
                        value: 5
                    }
                }), r("el-option", {
                    attrs: {
                        label: "6",
                        value: 6
                    }
                })], 1)], 1) : t._e()]) : t._e()], 1) : t.strEquals(e.miniZtAttrGroup.groupType, "checkbox") ? r("div", [r("el-checkbox-group", {
                    staticClass: "EattrMgroup",
                    attrs: {
                        size: "small",
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: function(a) {
                            return t.checkboxSelect({
                                event: a,
                                code: e.miniZtAttrGroup.id
                            })
                        }
                    },
                    model: {
                        value: t.formData.checkBoxSelectValues[e.miniZtAttrGroup.id],
                        callback: function(a) {
                            t.$set(t.formData.checkBoxSelectValues, e.miniZtAttrGroup.id, a)
                        },
                        expression: "formData.checkBoxSelectValues[item.miniZtAttrGroup.id]"
                    }
                }, t._l(e.attrList, (function(a) {
                    return r("el-row", {
                        key: "attr_" + a.id,
                        staticClass: "Eattrrow"
                    }, ["" !== a.remark && null != a.remark ? [r("el-tooltip", {
                        staticClass: "item",
                        attrs: {
                            effect: "light",
                            placement: "top-start"
                        }
                    }, [r("template", {
                        slot: "content"
                    }, [r("div", {
                        staticClass: "EattrMtips",
                        domProps: {
                            innerHTML: t._s(a.remark)
                        }
                    }, [t._v(t._s(a.remark))])]), r("el-checkbox-button", {
                        attrs: {
                            label: a.groupId + "_" + a.id
                        }
                    }, [t._v(t._s(a.name))])], 2)] : 122 == t.$route.query.cateId ? r("el-checkbox-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: a.prefix.indexOf(t.msize) > -1 || "all" == a.prefix,
                            expression: "attr.prefix.indexOf(msize) > -1 || attr.prefix == 'all'"
                        }],
                        class: "img" == a.defaultValue ? "padd" : "",
                        attrs: {
                            size: "small",
                            label: a.groupId + "_" + a.id
                        }
                    }, ["img" == a.defaultValue ? [r("img", {
                        attrs: {
                            width: "50px",
                            src: a.name
                        }
                    })] : [t._v(t._s(a.name))]], 2) : r("el-checkbox-button", {
                        class: 28 == t.$route.query.subCateId && "53504" == a.id && "5896_32267" == t.formData.radioSelectValues[5896] ? "hideclass" : "",
                        attrs: {
                            label: a.groupId + "_" + a.id,
                            disabled: t.readioDisabled(e, a)
                        }
                    }, [t._v(t._s(a.name))])], 2)
                }
                )), 1), t.strEquals(t.$route.query.cateId, "10") && "YSGY" == e.miniZtAttrGroup.code ? r("span", {
                    staticClass: "colorNumbr"
                }, [t._v(" 专色数量: "), r("el-select", {
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        disabled: t.readioDisabled(e)
                    },
                    on: {
                        change: t.priceValuation
                    },
                    model: {
                        value: t.formData.dmys.scCount,
                        callback: function(e) {
                            t.$set(t.formData.dmys, "scCount", e)
                        },
                        expression: "formData.dmys.scCount"
                    }
                }, [r("el-option", {
                    attrs: {
                        label: "0",
                        value: 0
                    }
                }), r("el-option", {
                    attrs: {
                        label: "1",
                        value: 1
                    }
                }), r("el-option", {
                    attrs: {
                        label: "2",
                        value: 2
                    }
                }), r("el-option", {
                    attrs: {
                        label: "3",
                        value: 3
                    }
                }), r("el-option", {
                    attrs: {
                        label: "4",
                        value: 4
                    }
                })], 1)], 1) : t._e()], 1) : t.strEquals(e.miniZtAttrGroup.groupType, "select") ? r("div", [t.endWith(e.miniZtAttrGroup.code, "_YWXX") || t.endWith(e.miniZtAttrGroup.code, "_WLXX") ? r("span", {
                    staticClass: "show-ywxx",
                    on: {
                        click: function(a) {
                            return t.showEmboss(e, t.formData.selectSelectValues)
                        }
                    }
                }, [t._v(" 去压纹详情选择 >> ")]) : t._e(), r("br"), r("el-select", {
                    attrs: {
                        size: "small",
                        filterable: "",
                        placeholder: "请选择",
                        disabled: t.noFlatDisabled
                    },
                    on: {
                        change: t.selectSelect
                    },
                    model: {
                        value: t.formData.selectSelectValues[e.miniZtAttrGroup.id],
                        callback: function(a) {
                            t.$set(t.formData.selectSelectValues, e.miniZtAttrGroup.id, a)
                        },
                        expression: "formData.selectSelectValues[item.miniZtAttrGroup.id]"
                    }
                }, t._l(e.attrList, (function(t, e) {
                    return r("el-option", {
                        key: e,
                        attrs: {
                            label: t.name,
                            value: t.groupId + "_" + t.id
                        }
                    })
                }
                )), 1)], 1) : t._e(), t.endWith(e.miniZtAttrGroup.code, "_YWXX") || t.endWith(e.miniZtAttrGroup.code, "_WLXX") ? r("div", {
                    staticClass: "ywxx-img",
                    on: {
                        click: function(a) {
                            return t.previewImg(e, t.formData.selectSelectValues)
                        }
                    }
                }) : t._e(), t.strEquals(e.miniZtAttrGroup.code, "BMCL_BRB_BRCS") ? r("div", [r("span", {
                    staticClass: "velvetTimesTips f12 C9"
                }, [t._v("默认同一产品多次裱绒为同一颜色,如有不同请联系"), r("a", {
                    staticClass: "red",
                    attrs: {
                        href: "http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDgyMjAwNl80NzE5OTVfODAwODIyMDA2XzJf",
                        target: "_blank"
                    }
                }, [t._v("在线客服")]), t._v("进行备注,给您造成不便敬请谅解")])]) : t._e(), t.endWith(e.miniZtAttrGroup.code, "SGYSYS") && t.formData.sgYsys.scCount > 0 ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("label", [t._v("请填写PANTONE色号:")]), t._l(t.formData.sgYsys.scCount, (function(e, a) {
                    return r("el-input", {
                        key: e,
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: t.priceValuation
                        },
                        model: {
                            value: t.formData.sgYsys.pantoneList[a],
                            callback: function(e) {
                                t.$set(t.formData.sgYsys.pantoneList, a, e)
                            },
                            expression: "formData.sgYsys.pantoneList[index]"
                        }
                    })
                }
                )), r("p", {
                    staticClass: "toolbox"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v("官方默认以潘通色卡版本“ "), r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start",
                        enterable: !1
                    }
                }, [r("template", {
                    slot: "content"
                }, [r("div", {
                    staticClass: "EattrMtips",
                    staticStyle: {
                        width: "400px"
                    }
                }, [r("img", {
                    attrs: {
                        width: "400px",
                        src: a("733a"),
                        alt: ""
                    }
                })])]), r("span", {
                    staticClass: "tooltext"
                }, [t._v("Pantone LCC, 2019.")])], 2), t._v(" ”为准，若须以您自有色卡为准，请邮寄您的色卡给傲彩。 ")], 1)], 2) : t._e(), t.endWith(e.miniZtAttrGroup.code, "XGYSYS") && t.formData.xgYsys.scCount > 0 ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("label", [t._v("请填写PANTONE色号:")]), t._l(t.formData.xgYsys.scCount, (function(e, a) {
                    return r("el-input", {
                        key: e,
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: t.priceValuation
                        },
                        model: {
                            value: t.formData.xgYsys.pantoneList[a],
                            callback: function(e) {
                                t.$set(t.formData.xgYsys.pantoneList, a, e)
                            },
                            expression: "formData.xgYsys.pantoneList[index]"
                        }
                    })
                }
                )), r("p", {
                    staticClass: "toolbox"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v("官方默认以潘通色卡版本“ "), r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start",
                        enterable: !1
                    }
                }, [r("template", {
                    slot: "content"
                }, [r("div", {
                    staticClass: "EattrMtips",
                    staticStyle: {
                        width: "400px"
                    }
                }, [r("img", {
                    attrs: {
                        width: "400px",
                        src: a("733a"),
                        alt: ""
                    }
                })])]), r("span", {
                    staticClass: "tooltext"
                }, [t._v("Pantone LCC, 2019.")])], 2), t._v(" ”为准，若须以您自有色卡为准，请邮寄您的色卡给傲彩。 ")], 1)], 2) : t._e(), t.endWith(e.miniZtAttrGroup.code, "YSXZ") && t.formData.dmys.scCount > 0 ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("label", [t._v("请填写PANTONE色号:")]), t._l(t.formData.dmys.scCount, (function(e, a) {
                    return r("el-input", {
                        key: e,
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: function(e) {
                                t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                            }
                        },
                        model: {
                            value: t.formData.dmys.pantoneList[a],
                            callback: function(e) {
                                t.$set(t.formData.dmys.pantoneList, a, e)
                            },
                            expression: "formData.dmys.pantoneList[index]"
                        }
                    })
                }
                )), r("p", {
                    staticClass: "toolbox"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v("官方默认以潘通色卡版本“ "), r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start",
                        enterable: !1
                    }
                }, [r("template", {
                    slot: "content"
                }, [r("div", {
                    staticClass: "EattrMtips",
                    staticStyle: {
                        width: "400px"
                    }
                }, [r("img", {
                    attrs: {
                        width: "400px",
                        src: a("733a"),
                        alt: ""
                    }
                })])]), r("span", {
                    staticClass: "tooltext"
                }, [t._v("Pantone LCC, 2019.")])], 2), t._v(" ”为准，若须以您自有色卡为准，请邮寄您的色卡给傲彩。 ")], 1)], 2) : t._e(), t.endWith(e.miniZtAttrGroup.code, "BK_YSYS") && t.formData.bqys.scCount > 0 ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("label", [t._v("请填写PANTONE色号:")]), t._l(t.formData.bqys.scCount, (function(e, a) {
                    return r("el-input", {
                        key: e,
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: function(e) {
                                t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                            }
                        },
                        model: {
                            value: t.formData.bqys.pantoneList[a],
                            callback: function(e) {
                                t.$set(t.formData.bqys.pantoneList, a, e)
                            },
                            expression: "formData.bqys.pantoneList[index]"
                        }
                    })
                }
                )), r("p", {
                    staticClass: "toolbox"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v("官方默认以潘通色卡版本“ "), r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start",
                        enterable: !1
                    }
                }, [r("template", {
                    slot: "content"
                }, [r("div", {
                    staticClass: "EattrMtips",
                    staticStyle: {
                        width: "400px"
                    }
                }, [r("img", {
                    attrs: {
                        width: "400px",
                        src: a("733a"),
                        alt: ""
                    }
                })])]), r("span", {
                    staticClass: "tooltext"
                }, [t._v("Pantone LCC, 2019.")])], 2), t._v(" ”为准，若须以您自有色卡为准，请邮寄您的色卡给傲彩。 ")], 1)], 2) : t._e(), t.endWith(e.miniZtAttrGroup.code, "ZJGY_YSYS") && t.formData.bqys.scCount > 0 ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("label", [t._v("请填写PANTONE色号:")]), t._l(t.formData.bqys.scCount, (function(e, a) {
                    return r("el-input", {
                        key: e,
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: t.priceValuation
                        },
                        model: {
                            value: t.formData.bqys.pantoneList[a],
                            callback: function(e) {
                                t.$set(t.formData.bqys.pantoneList, a, e)
                            },
                            expression: "formData.bqys.pantoneList[index]"
                        }
                    })
                }
                )), r("p", {
                    staticClass: "toolbox"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v("官方默认以潘通色卡版本“ "), r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start",
                        enterable: !1
                    }
                }, [r("template", {
                    slot: "content"
                }, [r("div", {
                    staticClass: "EattrMtips",
                    staticStyle: {
                        width: "400px"
                    }
                }, [r("img", {
                    attrs: {
                        width: "400px",
                        src: a("733a"),
                        alt: ""
                    }
                })])]), r("span", {
                    staticClass: "tooltext"
                }, [t._v("Pantone LCC, 2019.")])], 2), t._v(" ”为准，若须以您自有色卡为准，请邮寄您的色卡给傲彩。 ")], 1)], 2) : t._e(), (t.strEquals(t.$route.query.cateId, "2") && "YSYS" == e.miniZtAttrGroup.code || t.strEquals(t.$route.query.cateId, "4") && t.strEquals(t.$route.query.subCateId, "35") && "YSYS" == e.miniZtAttrGroup.code || t.strEquals(t.$route.query.cateId, "9") && t.strEquals(t.$route.query.subCateId, "46") && t.formData.radioSelectValues["6668"] && t.formData.radioSelectValues["6668"].indexOf("6668_29877") > -1 || t.strEquals(t.$route.query.cateId, "9") && t.strEquals(t.$route.query.subCateId, "47") && t.formData.radioSelectValues["6705"] && t.formData.radioSelectValues["6705"].indexOf("6705_30004") > -1 || t.strEquals(t.$route.query.cateId, "10") || t.strEquals(t.$route.query.cateId, "81") && t.strEquals(t.$route.query.subCateId, "82") || t.strEquals(t.$route.query.cateId, "5") && t.strEquals(t.$route.query.subCateId, "41") || t.strEquals(t.$route.query.cateId, "70") || t.strEquals(t.$route.query.cateId, "13")) && t.endWith(e.miniZtAttrGroup.code, "YSYS") && t.formData.dmys.scCount > 0 ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("label", [t._v("请填写PANTONE色号:")]), t._l(t.formData.dmys.scCount, (function(e, a) {
                    return r("el-input", {
                        key: e,
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: t.priceValuation
                        },
                        model: {
                            value: t.formData.dmys.pantoneList[a],
                            callback: function(e) {
                                t.$set(t.formData.dmys.pantoneList, a, e)
                            },
                            expression: "formData.dmys.pantoneList[index]"
                        }
                    })
                }
                )), r("p", {
                    staticClass: "toolbox"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v("官方默认以潘通色卡版本“ "), r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start",
                        enterable: !1
                    }
                }, [r("template", {
                    slot: "content"
                }, [r("div", {
                    staticClass: "EattrMtips",
                    staticStyle: {
                        width: "400px"
                    }
                }, [r("img", {
                    attrs: {
                        width: "400px",
                        src: a("733a"),
                        alt: ""
                    }
                })])]), r("span", {
                    staticClass: "tooltext"
                }, [t._v("Pantone LCC, 2019.")])], 2), t._v(" ”为准，若须以您自有色卡为准，请邮寄您的色卡给傲彩。 ")], 1)], 2) : t._e(), t.endWith(e.miniZtAttrGroup.code, "SMYS_ZM") && t.formData.zmys.scCount > 0 ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("label", [t._v("请填写PANTONE色号:")]), t._l(t.formData.zmys.scCount, (function(e, a) {
                    return r("el-input", {
                        key: e,
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: function(e) {
                                t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                            }
                        },
                        model: {
                            value: t.formData.zmys.pantoneList[a],
                            callback: function(e) {
                                t.$set(t.formData.zmys.pantoneList, a, e)
                            },
                            expression: "formData.zmys.pantoneList[index]"
                        }
                    })
                }
                )), r("p", {
                    staticClass: "toolbox"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v("官方默认以潘通色卡版本“ "), r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start",
                        enterable: !1
                    }
                }, [r("template", {
                    slot: "content"
                }, [r("div", {
                    staticClass: "EattrMtips",
                    staticStyle: {
                        width: "400px"
                    }
                }, [r("img", {
                    attrs: {
                        width: "400px",
                        src: a("733a"),
                        alt: ""
                    }
                })])]), r("span", {
                    staticClass: "tooltext"
                }, [t._v("Pantone LCC, 2019.")])], 2), t._v(" ”为准，若须以您自有色卡为准，请邮寄您的色卡给傲彩。 ")], 1)], 2) : t._e(), t.endWith(e.miniZtAttrGroup.code, "SMYS_FM") && t.formData.fmys.scCount > 0 ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("label", [t._v("请填写PANTONE色号:")]), t._l(t.formData.fmys.scCount, (function(e, a) {
                    return r("el-input", {
                        key: e,
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: function(e) {
                                t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                            }
                        },
                        model: {
                            value: t.formData.fmys.pantoneList[a],
                            callback: function(e) {
                                t.$set(t.formData.fmys.pantoneList, a, e)
                            },
                            expression: "formData.fmys.pantoneList[index]"
                        }
                    })
                }
                )), r("p", {
                    staticClass: "toolbox"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v("官方默认以潘通色卡版本“ "), r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start",
                        enterable: !1
                    }
                }, [r("template", {
                    slot: "content"
                }, [r("div", {
                    staticClass: "EattrMtips",
                    staticStyle: {
                        width: "400px"
                    }
                }, [r("img", {
                    attrs: {
                        width: "400px",
                        src: a("733a"),
                        alt: ""
                    }
                })])]), r("span", {
                    staticClass: "tooltext"
                }, [t._v("Pantone LCC, 2019.")])], 2), t._v(" ”为准，若须以您自有色卡为准，请邮寄您的色卡给傲彩。 ")], 1)], 2) : t._e(), t.endWith(e.miniZtAttrGroup.code, "BJYGY_BK_YSYS1") && t.formData.bj1ys.scCount > 0 ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("label", [t._v("请填写PANTONE色号:")]), t._l(t.formData.bj1ys.scCount, (function(e, a) {
                    return r("el-input", {
                        key: e,
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: function(e) {
                                t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                            }
                        },
                        model: {
                            value: t.formData.bj1ys.pantoneList[a],
                            callback: function(e) {
                                t.$set(t.formData.bj1ys.pantoneList, a, e)
                            },
                            expression: "formData.bj1ys.pantoneList[index]"
                        }
                    })
                }
                )), r("p", {
                    staticClass: "toolbox"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v("官方默认以潘通色卡版本“ "), r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start",
                        enterable: !1
                    }
                }, [r("template", {
                    slot: "content"
                }, [r("div", {
                    staticClass: "EattrMtips",
                    staticStyle: {
                        width: "400px"
                    }
                }, [r("img", {
                    attrs: {
                        width: "400px",
                        src: a("733a"),
                        alt: ""
                    }
                })])]), r("span", {
                    staticClass: "tooltext"
                }, [t._v("Pantone LCC, 2019.")])], 2), t._v(" ”为准，若须以您自有色卡为准，请邮寄您的色卡给傲彩。 ")], 1)], 2) : t._e(), t.endWith(e.miniZtAttrGroup.code, "BJEGY_BK_YSYS2") && t.formData.bj2ys.scCount > 0 ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("label", [t._v("请填写PANTONE色号:")]), t._l(t.formData.bj2ys.scCount, (function(e, a) {
                    return r("el-input", {
                        key: e,
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: function(e) {
                                t.priceValuation(1 == t.$route.query.cateId ? t.getraradiofn() : "")
                            }
                        },
                        model: {
                            value: t.formData.bj2ys.pantoneList[a],
                            callback: function(e) {
                                t.$set(t.formData.bj2ys.pantoneList, a, e)
                            },
                            expression: "formData.bj2ys.pantoneList[index]"
                        }
                    })
                }
                )), r("p", {
                    staticClass: "toolbox"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v("官方默认以潘通色卡版本“ "), r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start",
                        enterable: !1
                    }
                }, [r("template", {
                    slot: "content"
                }, [r("div", {
                    staticClass: "EattrMtips",
                    staticStyle: {
                        width: "400px"
                    }
                }, [r("img", {
                    attrs: {
                        width: "400px",
                        src: a("733a"),
                        alt: ""
                    }
                })])]), r("span", {
                    staticClass: "tooltext"
                }, [t._v("Pantone LCC, 2019.")])], 2), t._v(" ”为准，若须以您自有色卡为准，请邮寄您的色卡给傲彩。 ")], 1)], 2) : t._e(), t.strEquals(t.$route.query.cateId, "70") && t.endWith(e.miniZtAttrGroup.code, "YSYS") ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("ul", t._l(t.formData.ysm.scCount, (function(e, a) {
                    return r("li", {
                        key: a,
                        staticClass: "flex inputBx onetx"
                    }, [r("label", [t._v("实际印刷尺寸" + t._s(a + 1))]), r("el-input", {
                        staticClass: "PantoneDvtx noMrgin",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: t.priceValuation
                        },
                        model: {
                            value: t.formData.ysm.list[a]["longVal"],
                            callback: function(e) {
                                t.$set(t.formData.ysm.list[a], "longVal", e)
                            },
                            expression: "formData.ysm.list[index]['longVal']"
                        }
                    }, [r("template", {
                        attrs: {
                            s: ""
                        },
                        slot: "append"
                    }, [t._v("x")]), t._v("实际印刷尺寸 ")], 2), r("el-input", {
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: t.priceValuation
                        },
                        model: {
                            value: t.formData.ysm.list[a]["widthVal"],
                            callback: function(e) {
                                t.$set(t.formData.ysm.list[a], "widthVal", e)
                            },
                            expression: "formData.ysm.list[index]['widthVal']"
                        }
                    }, [r("template", {
                        slot: "append"
                    }, [t._v("mm")])], 2)], 1)
                }
                )), 0)]) : t._e(), r("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.formData.showMsg && i === t.formVoList.length - 1,
                        expression: "formData.showMsg && index === formVoList.length - 1"
                    }],
                    staticStyle: {
                        width: "100%",
                        display: "flex"
                    }
                }, [t._v("温馨提示：请尽量避免同一位置工艺叠加，因工艺叠加产生的问题本公司不予受理。")]), t.formData.showDydz && t.strEquals(e.miniZtAttrGroup.code, "ZZCZ_JYKZL_GSWY") ? r("div", [t._v(" 请下载跟样表格，填写对应信息并打印，将跟样表格与样品快递至傲彩佛山办公室；避免耽误生产货期，建议您选择顺丰寄付，傲彩跟样工程师一律拒收到付件，请知悉！ "), r("a", {
                    staticClass: "gtrTipsBtn",
                    attrs: {
                        href: "/uploads/傲彩样品信息表.xlsx",
                        target: "_blank"
                    }
                }, [t._v("点击下载")]), r("img", {
                    attrs: {
                        src: a("ecef"),
                        width: "32"
                    }
                }), r("p", [r("span", [t._v("地址：佛山市南海区里水镇里里官路大朗工业区福致工业园办公楼1楼 ")]), r("span", {
                    staticStyle: {
                        "padding-left": "30px"
                    }
                }, [t._v("联系人：孙先生 18998826009")])])]) : t._e(), t.endWith(e.miniZtAttrGroup.code, "YSGY") && t.formData.dmys.scCount > 0 ? r("div", {
                    staticClass: "PantoneDv"
                }, [r("label", [t._v("请填写PANTONE色号:")]), t._l(t.formData.dmys.scCount, (function(e, a) {
                    return r("el-input", {
                        key: e,
                        staticClass: "PantoneDvtx",
                        attrs: {
                            disabled: t.noFlatDisabled
                        },
                        on: {
                            change: t.priceValuation
                        },
                        model: {
                            value: t.formData.dmys.pantoneList[a],
                            callback: function(e) {
                                t.$set(t.formData.dmys.pantoneList, a, e)
                            },
                            expression: "formData.dmys.pantoneList[index]"
                        }
                    })
                }
                )), r("p", {
                    staticClass: "toolbox"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v("官方默认以潘通色卡版本“ "), r("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        width: "200",
                        effect: "light",
                        placement: "top-start",
                        enterable: !1
                    }
                }, [r("template", {
                    slot: "content"
                }, [r("div", {
                    staticClass: "EattrMtips",
                    staticStyle: {
                        width: "400px"
                    }
                }, [r("img", {
                    attrs: {
                        width: "400px",
                        src: a("733a"),
                        alt: ""
                    }
                })])]), r("span", {
                    staticClass: "tooltext"
                }, [t._v("Pantone LCC, 2019.")])], 2), t._v(" ”为准，若须以您自有色卡为准，请邮寄您的色卡给傲彩。 ")], 1)], 2) : t._e()], 2), i != t.formVoList.length - 1 || "85" !== t.$route.query.subCateId && "96" !== t.$route.query.subCateId ? t._e() : r("el-form-item", {
                    key: "reminderwx_" + i
                }, [r("template", {
                    slot: "label"
                }, [r("div", {
                    staticClass: "EattrLab"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("*")]), t._v(" 材质信息 ")])]), t._v(" " + t._s(t.formData.zcjgpb) + " ")], 2), "自定义工艺" === e.miniZtAttrGroup.parentAttrName ? r("el-form-item", {
                    key: "reminder3_" + i
                }, [r("div", {
                    staticClass: "Pantips"
                }, [r("span", {
                    staticClass: "red"
                }, [t._v("温馨提示:")]), t._v(" 请准确描述自定义工艺，生产环节需先理解工艺再评估报价，待订单重新计价后再支付")])]) : t._e()]
            }
            )), 1 == t.$route.query.cateId ? r("el-form-item", [r("template", {
                attrs: {
                    required: !0
                },
                slot: "label"
            }, [r("div", {
                staticClass: "EattrLab"
            }, [r("span", {
                staticClass: "red"
            }, [t._v("*")]), t._v("包装服务")])]), r("div", {
                staticStyle: {
                    display: "flex"
                }
            }, [r("el-radio-group", {
                staticClass: "EattrMgroup",
                attrs: {
                    size: "small"
                },
                on: {
                    change: function(e) {
                        return t.addService(1, e)
                    }
                },
                model: {
                    value: t.priceFormData.radioService,
                    callback: function(e) {
                        t.$set(t.priceFormData, "radioService", e)
                    },
                    expression: "priceFormData.radioService"
                }
            }, [r("el-row", {
                staticClass: "Eattrrow"
            }, [r("el-radio-button", {
                attrs: {
                    label: "盒子扎皮筋"
                }
            }, [t._v("盒子扎皮筋")])], 1), r("el-row", {
                staticClass: "Eattrrow"
            }, [r("el-radio-button", {
                attrs: {
                    label: "盒子扎纸带"
                }
            }, [t._v("盒子扎纸带")])], 1)], 1), r("el-checkbox-group", {
                on: {
                    change: function(e) {
                        return t.addService(2, e)
                    }
                },
                model: {
                    value: t.priceFormData.checkedService,
                    callback: function(e) {
                        t.$set(t.priceFormData, "checkedService", e)
                    },
                    expression: "priceFormData.checkedService"
                }
            }, [r("el-row", {
                staticClass: "Eattrrow"
            }, [r("el-checkbox-button", {
                staticClass: "addwhite",
                attrs: {
                    label: "1"
                }
            }, [t._v("外箱套蛇皮袋")])], 1)], 1)], 1)], 2) : t._e()], 2), r("el-dialog", {
                attrs: {
                    visible: t.dialogVisible,
                    top: "20px",
                    width: "1250px",
                    title: "压纹详情",
                    "before-close": t.handleClose
                },
                on: {
                    "update:visible": function(e) {
                        t.dialogVisible = e
                    }
                }
            }, [r("el-scrollbar", {
                staticStyle: {
                    height: "750px"
                }
            }, [r("div", {
                staticClass: "veinsDesc"
            }, [r("img", {
                attrs: {
                    src: "/uploads/images/veins01.jpg",
                    width: "1200"
                }
            }), r("img", {
                attrs: {
                    src: "/uploads/images/veins02.jpg",
                    width: "1200"
                }
            })])])], 1), r("el-dialog", {
                attrs: {
                    visible: t.fbysDialogVisible,
                    top: "20px",
                    width: "1250px",
                    title: "绒布的颜色参照",
                    "before-close": t.handleClose
                },
                on: {
                    "update:visible": function(e) {
                        t.fbysDialogVisible = e
                    }
                }
            }, [r("el-scrollbar", {
                staticStyle: {
                    height: "750px"
                }
            }, [r("img", {
                attrs: {
                    src: "/uploads/editor/image/20190821/1566358720689864.jpg"
                }
            })])], 1), t.embossVisible ? r("attrSelect", {
                attrs: {
                    visible: t.embossVisible,
                    value: t.formData.selectSelectValues[t.embossId],
                    attrList: t.embossAttrList
                },
                on: {
                    "update:visible": function(e) {
                        t.embossVisible = e
                    },
                    "update:value": function(e) {
                        return t.$set(t.formData.selectSelectValues, t.embossId, e)
                    }
                }
            }) : t._e(), r("el-image", {
                ref: "previewImg",
                attrs: {
                    "preview-src-list": [t.previewImgSrc]
                }
            })], 1)
        }
          , i = []
          , o = (a("4de4"),
        a("7db0"),
        a("0481"),
        a("c975"),
        a("4069"),
        a("b0c0"),
        a("ac1f"),
        a("5319"),
        a("1276"),
        a("5530"))
          , s = a("8958")
          , n = a("83b0")
          , c = a("6c73")
          , u = a("6c10")
          , l = a("b919")
          , d = {
            mixins: [l["a"]],
            name: "PriceMajor",
            props: {
                priceFormData: Object,
                addService: Function,
                formVoList: Array,
                formData: Object,
                priceValuation: Function,
                removeCopyGroupCk: Function,
                addCopyGroupCk: Function,
                addCopyGroupRd: Function,
                removeCopyGroupRd: Function,
                radioSelect: Function,
                selectSelect: Function,
                checkboxSelect: Function,
                bindType: String,
                getraradiofn: Function,
                disabledObj: {
                    type: Object,
                    default: function() {
                        return {
                            disabledArr: [],
                            pDisabledArr: [],
                            pass: []
                        }
                    }
                }
            },
            data: function() {
                return {
                    dialogVisible: !1,
                    fbysDialogVisible: !1,
                    data: {
                        addNumber: 5,
                        dataLength: 10,
                        goodsId: 0,
                        maxScope: 100,
                        minScope: 0,
                        sizeLong: 0,
                        sizeWidth: 0,
                        type: ""
                    },
                    cclist: [],
                    ccnum: [],
                    ccdata: "",
                    csize: "",
                    cwidth: "",
                    tgimg: "",
                    newinput: [],
                    newinput2: [],
                    anewflag: !1,
                    timer: null,
                    hxid: "",
                    disabledflag: !1,
                    msize: "",
                    isAddBK: !1,
                    mshape: "180,220,250,245,320,360",
                    noFlatDisabled: !1
                }
            },
            mounted: function() {
                122 == this.$route.query.cateId && (sessionStorage.getItem("size") && (this.msize = sessionStorage.getItem("size").substring(0, 3)),
                sessionStorage.getItem("img") && (this.tgimg = sessionStorage.getItem("img"),
                this.formData.goodAttrVo.coverPath = this.tgimg))
            },
            methods: Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({}, {
                startWith: s["c"],
                endWith: s["b"],
                strEquals: s["d"]
            }), {
                isCopyCraft: n["d"]
            }), {
                reSetSize: c["C"]
            }), {}, {
                handleClose: function(t) {
                    t()
                },
                inpfocus: function() {
                    var t = this;
                    this.newinput2 = [],
                    setTimeout((function() {
                        t.newinput = t.formVoList.filter((function(t) {
                            return "TGCC" == t.miniZtAttrGroup.code
                        }
                        ));
                        for (var e = 0; e < t.newinput[0].attrList.length; e++)
                            t.newinput2.push({
                                data: t.newinput[0].attrList[e].groupId + "_" + t.newinput[0].attrList[e].id
                            });
                        t.data.goodsId = t.formData.goodAttrVo.id
                    }
                    ), 100)
                },
                tgchange: function(t, e) {
                    var a = this;
                    "长" == t.name ? this.data.sizeLong = this.formData.inputValues[e] : "宽" == t.name && (this.data.sizeWidth = this.formData.inputValues[e]),
                    clearTimeout(this.timer),
                    this.timer = setTimeout((function() {
                        Object(u["d"])(a.data).then((function(t) {
                            a.cclist = t.data
                        }
                        ))
                    }
                    ), 300)
                },
                hidefu: function(t, e, a) {
                    var r = !0;
                    return r = "印刷类型" == t && ("29" == e || "30" == e || "31" == e || 2 == a),
                    r
                },
                tgclick: function(t) {
                    console.log("tgclick", this.ccdata),
                    this.disabledflag = !0,
                    94 == this.$route.query.subCateId ? document.querySelector(".tgcc:nth-child(2)").style.display = "inline-block" : document.querySelector(".tgcc:nth-child(3)").style.display = "inline-block",
                    this.hxid = "盒型标识:" + t.id + ";",
                    this.$emit("event1", this.hxid),
                    this.ccnum = t.size.split("x");
                    for (var e = 0; e < this.newinput2.length; e++)
                        this.formData.inputValues[this.newinput2[e].data] = this.ccnum[e];
                    this.tgimg = "/" + t.imagesPath,
                    this.anewflag = !0,
                    this.priceValuation()
                },
                clickitem: function(t, e, a) {
                    if ("edit" !== this.$route.query.isCms || "false" !== this.$route.query.flat) {
                        var r = null;
                        if (this.formData.radioSelectValues[e],
                        t == this.formData.radioSelectValues[e]) {
                            delete this.formData.radioSelectValues[e];
                            try {
                                document.querySelector(".ishow").style.display = "none"
                            } catch (i) {}
                            r = !1
                        } else {
                            this.formData.radioSelectValues[e] = t,
                            r = !0;
                            try {
                                document.querySelector(".ishow").style.display = "block"
                            } catch (i) {}
                        }
                        this.radioSelect(t, r, a)
                    }
                },
                inpkey: function(t) {
                    this.formData.inputValues[t].indexOf("自定义") > -1 && this.$set(this.formData.inputValues, t, this.formData.inputValues[t].replace(/自定义/g, "")),
                    this.formData.inputValues[t].indexOf("；") > -1 && this.$set(this.formData.inputValues, t, this.formData.inputValues[t].replace(/；/g, "")),
                    this.formData.inputValues[t].indexOf("#") > -1 && this.$set(this.formData.inputValues, t, this.formData.inputValues[t].replace(/#/g, "")),
                    this.formData.inputValues[t].indexOf(";") > -1 && this.$set(this.formData.inputValues, t, this.formData.inputValues[t].replace(/;/g, "")),
                    this.formData.inputValues[t].indexOf("：") > -1 && this.$set(this.formData.inputValues, t, this.formData.inputValues[t].replace(/：/g, "")),
                    this.formData.inputValues[t].indexOf(":") > -1 && this.$set(this.formData.inputValues, t, this.formData.inputValues[t].replace(/:/g, ""))
                },
                anewfn: function() {
                    this.disabledflag = !1,
                    this.formData.inputValues = {},
                    this.cclist = [],
                    this.ccdata = "",
                    this.tgimg = "",
                    this.anewflag = !1,
                    this.hxid = "",
                    this.$emit("event1", this.hxid),
                    this.priceValuation()
                },
                ysmChange: function() {
                    if (this.formData.ysm.scCount <= 0) {
                        var t = !1;
                        for (var e in this.formData.radioSelectValues) {
                            var a = this.formData.radioSelectValues[e + ""];
                            (Object(s["d"])(a.split("_")[1], "29860") || Object(s["d"])(a.split("_")[1], "29861")) && (t = !0)
                        }
                        if (t)
                            return this.$message({
                                type: "error",
                                message: "有印刷，印刷面不能为0"
                            }),
                            !1
                    }
                    this.priceValuation()
                },
                setX: function(t) {
                    this.$emit("setX", t)
                },
                readioDisabled: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = this;
                    if ("背面处理" == t.miniZtAttrGroup.name && e.code) {
                        if (a.isAddBK && "背面处理:无" != e.actualValue)
                            return !0;
                        if (a.isAddBK) {
                            var r = e
                              , i = r.groupId + "_" + r.id;
                            a.formData.radioSelectValues[r.groupId] != i && (a.$set(a.formData.radioSelectValues, r.groupId + "", i),
                            setTimeout((function() {
                                Object(c["m"])(r.groupId),
                                Object(c["v"])(r.groupId, r.id)
                            }
                            ), 1))
                        }
                        return !1
                    }
                    if (e.code && a.endWith(e.code, "YSYS_SMYS")) {
                        if (a.isAddBK) {
                            var o = t.attrList.find((function(t) {
                                return "YSYS_SMYS" != t.code
                            }
                            ))
                              , s = o.groupId + "_" + o.id;
                            return a.formData.radioSelectValues[o.groupId] != s && (a.$set(a.formData.radioSelectValues, o.groupId + "", s),
                            a.formData.yslx = "dm",
                            setTimeout((function() {
                                Object(c["m"])(o.groupId),
                                Object(c["v"])(o.groupId, o.id)
                            }
                            ), 1)),
                            !0
                        }
                        return !1
                    }
                    if (42 == this.$route.query.subCateId && this.formData.checkBoxSelectValues[15299].indexOf("15299_48591") > -1 && 48865 == e.id)
                        return !0;
                    if (!this.$route.query.isCms)
                        return !1;
                    if ("add" === this.$route.query.isCms && "false" === this.$route.query.flat)
                        return !1;
                    var n = !1;
                    return this.disabledObj.pass.find((function(e) {
                        return e === t.miniZtAttrGroup.name
                    }
                    )) ? n = !1 : (this.disabledObj.pDisabledArr.find((function(e) {
                        return e === t.miniZtAttrGroup.pname
                    }
                    )) || this.disabledObj.disabledArr.find((function(e) {
                        return e === t.miniZtAttrGroup.name
                    }
                    ))) && (n = !0),
                    "edit" == this.$route.query.isCms && "false" == this.$route.query.flat ? (this.noFlatDisabled = !0,
                    !n) : n
                }
            }),
            watch: {
                "formData.ysm.scCount": {
                    handler: function() {
                        Object(c["C"])()
                    }
                },
                $route: {
                    handler: function() {
                        93 != this.$route.query.subCateId && 94 != this.$route.query.subCateId && 95 != this.$route.query.subCateId || (this.cclist = [],
                        this.ccdata = "",
                        this.anewflag = !1,
                        this.disabledflag = !1,
                        this.data.sizeLong = 0,
                        this.data.sizeWidth = 0),
                        this.tgimg = "",
                        this.isAddBK = !1
                    }
                }
            }
        }
          , p = d
          , m = (a("1343"),
        a("2877"))
          , f = Object(m["a"])(p, r, i, !1, null, null, null);
        e["a"] = f.exports
    },
    fa8f: function(t, e, a) {
        "use strict";
        a("b58a")
    }
}]);
