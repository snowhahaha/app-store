(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{404:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开启扫描"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启扫描"}},[t._v("#")]),t._v(" 开启扫描")]),t._v(" "),a("p",[a("strong",[t._v("注：当使用物理扫描键来触发扫描时，系统底层会自行监听扫描按键并启动扫描，应用程序无需发送此广播，直接跳过这步操作。")])]),t._v(" "),a("p",[t._v("发送一个广播以启动扫描。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("广播名Action：nlscan.action.SCANNER_TRIG")])]),t._v(" "),a("li",[a("p",[t._v("Extra扫描超时参数：SCAN_TIMEOUT")])])]),t._v(" "),a("p",[t._v("（单位为秒，值为int类型，且不超过9秒，默认3秒）")]),t._v(" "),a("ul",[a("li",[t._v("Extra 扫码类型参数：SCAN_TYPE")])]),t._v(" "),a("p",[t._v("(单码、双码类型，值为1：单码，值为2：双码，默认单码；)")]),t._v(" "),a("p",[a("strong",[t._v("注：暂不支持双码")])]),t._v(" "),a("p",[t._v("举例1：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" intent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nlscan.action.SCANNER_TRIG"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBroadcast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("举例2：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" intent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nlscan.action.SCANNER_TRIG"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nintent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putExtra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SCAN_TIMEOUT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//单位为秒，值为int类型，且不超过9秒")]),t._v("\nintent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putExtra")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SCAN_TYPE "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//扫码类型：双码")]),t._v("\nmContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBroadcast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("说明：如果当前已经启动了扫描，此时如果系统又收到该广播，则表示取消当前正在进行的扫描事务。")]),t._v(" "),a("p",[t._v("注：正常使用按键来触发扫描时，系统底层会启动扫描，应用程序无需再监听扫描按键再开启扫描。")])])}),[],!1,null,null,null);s.default=e.exports}}]);