(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{340:function(t,e,l){},381:function(t,e,l){"use strict";l(340)},423:function(t,e,l){"use strict";l.r(e);l(381);var a=l(25),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"预授权-金融设备"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#预授权-金融设备"}},[t._v("#")]),t._v(" 预授权（金融设备）")]),t._v(" "),l("p",[l("strong",[t._v("预授权（金融设备）")])]),t._v(" "),l("p",[l("strong",[t._v("Request")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("数据项")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("数据类型(默认String)")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("标识")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("是否必填(M/C)")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("适用范围")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("应用类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("appType")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("00:银行卡应用")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("应用Id")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("appId")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("应用包名，android APP程序packagename")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("交易类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("transType")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("03－预授权")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("交易金额")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Long")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("amount")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("单位为分，1元表示为100L,最多12位")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Saas系统支付订单号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("orderId")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.Saas系统的支付订单号(字符串)，用于标识当笔交易的支付订单号，交易处理结果中会带回。2.业务订单号与支付订单号的关系：一个业务订单号可以对应多个支付订单号，比如用户买了一件商品后会产生一个业务订单号和一个消费支付订单号，用户将此商品退款后又会产生一个退款的支付订单号。3.如果Saas业务系统中业务订单号与支付订单号是一对一的关系或者没有支付订单号的情况那么两个订单号都填写业务订单号即可。4.推荐不要超过32位")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡、扫脸")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Saas系统业务订单号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("businessId")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.Saas系统的业务订单号(字符串,不包含特殊字符)，用于标识当笔交易属于哪一笔业务订单，交易处理结果中会带回。2.业务订单号与支付订单号的关系：一个业务订单号可以对应多个支付订单号，比如用户买了一件商品后会产生一个业务订单号和一个消费支付订单号，用户将此商品退款后又会产生一个退款的支付订单号。3.如果Saas业务系统中业务订单号与支付订单号是一对一的关系或者没有支付订单号的情况那么两个订单号都填写业务订单号即可。4.最多50个字符长度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡、扫脸")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("配置参数(UI、打印等参数配置)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Config(实体)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("config")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("配置UI、打印等参数")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、扫脸")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("是否打印小票")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("printTicket(Config字段)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("为true时打印；为false时不打印；默认打印(兼容老字段)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡、扫脸")])])])]),t._v(" "),l("p",[l("strong",[t._v("Response")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("数据项")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("数据类型(默认String)")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("标识")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("是否必填(M/C)")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("适用范围")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("交易结果返回码")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("resultCode")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("T00：成功非T00：失败, 见返回码定义(附录B)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("返回码描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("resultMsg")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("应用类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("appType")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("00:银行卡应用01:聚合扫码支付应用02:银行卡+银联扫码支付应用51：刷脸支付")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("交易类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("transType")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("03－预授权")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("收银台流水号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("misId")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用于标识当笔交易的订单号，交易处理结果中会带回。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Saas系统支付订单号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("orderId")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.Saas系统的支付订单号(字符串,不包含特殊字符)，用于标识当笔交易的支付订单号，交易处理结果中会带回。2.业务订单号与支付订单号的关系：一个业务订单号可以对应多个支付订单号，比如用户买了一件商品后会产生一个业务订单号和一个消费支付订单号，用户将此商品退款后又会产生一个退款的支付订单号。3.如果Saas业务系统中业务订单号与支付订单号是一对一的关系或者没有支付订单号的情况那么两个订单号都填写业务订单号即可。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡、扫脸")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Saas系统业务订单号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("businessId")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1.Saas系统的业务订单号(字符串,不包含特殊字符)，用于标识当笔交易属于哪一笔业务订单，交易处理结果中会带回。2.业务订单号与支付订单号的关系：一个业务订单号可以对应多个支付订单号，比如用户买了一件商品后会产生一个业务订单号和一个消费支付订单号，用户将此商品退款后又会产生一个退款的支付订单号。3.如果Saas业务系统中业务订单号与支付订单号是一对一的关系或者没有支付订单号的情况那么两个订单号都填写业务订单号即可。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡、扫脸")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("商户(第三方平台)订单号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("platformId")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("商户(第三方平台)订单号(微信、支付宝客户端显示的订单号，银行卡交易则返回系统参考号)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("支付方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("platform")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("wxpay：微信支付alipay：支付宝支付unionpay：银联钱包支付card：银行卡支付")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("交易金额")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Long")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("amount")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("单位为分，1元表示为100L")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("交易日期")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("transDate")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("格式“MMdd”")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("交易时间")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("transTime")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("格式“HHmmss”")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("凭证号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("voucherNum")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("撤销、查询、打印使用")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("批次号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("batchNum")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("系统参考号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("referenceNum")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("部分业务退货使用")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("授权码")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("authNum")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("卡号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("cardNum")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("脱敏处理规则：除前六位和后四位之外其余位变*号处理。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("发卡行")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("issuer")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("收单行")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("acquirer")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("操作员号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("operatorId")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("卡类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("cardType")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("IC、NFC、MAG")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("账户类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("accountType")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("“OA”：扫码”CC”：贷记卡"),l("br"),t._v("“DC”：借记卡"),l("br"),t._v("“SCC”：准贷记卡”"),l("br"),t._v("EC”：电子现金"),l("br"),t._v("“MAG”：磁条卡"),l("br"),t._v("“VC”：Visa卡"),l("br"),t._v("“MC”：MasterCard 万事达卡"),l("br"),t._v("“AE”：美国运通卡"),l("br"),t._v("“JCB”：JCB卡是源自日本的世界通用国际信用"),l("br"),t._v("”RPC”：RuPay(India)印度卡")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("机型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("model")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("POS外设型号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("版本")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("version")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("POS应用版本")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("终端号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("terminalId")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("商户号")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("merchantId")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("扫码、银行卡")])])])])])}),[],!1,null,"95efcdfa",null);e.default=i.exports}}]);