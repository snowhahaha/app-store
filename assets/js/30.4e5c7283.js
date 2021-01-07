(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{401:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"停止扫描"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止扫描"}},[t._v("#")]),t._v(" 停止扫描")]),t._v(" "),a("p",[a("strong",[t._v("注：当使用物理扫描键来触发扫描时，系统底层会自行监听扫描按键并按照设定好的扫描模式来停止扫描，应用程序无需发送此广播，直接跳过这步操作。即使用物理扫描键启动读码，只需通过广播获取扫描结果，无需在应用程序中处理启动、停止扫描的操作。")])]),t._v(" "),a("p",[t._v("发送一个广播，可以停止正在进行的扫描操作。")]),t._v(" "),a("ul",[a("li",[t._v("广播名Action：nlscan.action.STOP_SCAN")])]),t._v(" "),a("p",[t._v("例：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" stopIntent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("“nlscan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("STOP_SCAN”"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBroadcast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stopIntent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);