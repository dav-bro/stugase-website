(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9Swm":function(e,t,n){"use strict";n.r(t);n("a1Th"),n("Btvt"),n("I5cv");var a=n("q1tI"),r=n.n(a),s=n("9kay"),o=n("kIla"),c=n("f6S5");var i=function(e){var t,n;n=e,(t=s).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a;a=s;function s(){return e.apply(this,arguments)||this}return s.prototype.render=function(){var e=this.props.t;return r.a.createElement(c.b,null,(function(t){var n=t.data;return r.a.createElement(o.a,{theme:n.theme,title:e("o-week.title")})}))},s}(r.a.Component),l=Object(s.d)()(i);t.default=l},kIla:function(e,t,n){"use strict";n("91GP"),n("a1Th"),n("Btvt"),n("I5cv");var a=n("q1tI"),r=n.n(a),s=n("BMrR"),o=n("/kpp"),c=n("kPKH"),i=n("9kay");function l(e){var t=Object(i.c)().t,n=e.theme;return n=n||"light",r.a.createElement(s.a,{className:"page-head-"+n},r.a.createElement(c.a,{xs:{span:24,offset:0},lg:{span:16,offset:4},xl:{span:14,offset:5}},r.a.createElement("div",{className:"ml-5 lg:ml-0"},r.a.createElement("h1",{className:"text-4xl heading-"+n},e.title?e.title:t("in-progress")),r.a.createElement("p",null,e.text?e.text:t("in-progress")))))}function p(){var e=window,t=e.innerWidth,n="xs";return t>=1600?n="xxl":t>=1200?n="xl":t>=992?n="lg":t>=768?n="md":t>=576?n="sm":t<576&&(n="xs"),{width:t,height:e.innerHeight,breakpoint:n}}var u=n("f6S5");var m,f=["xs","sm","md"],h=function(e){var t,n;n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a;a=c;function c(){return e.apply(this,arguments)||this}return c.prototype.render=function(){var e=this,t=null,n=this.props.children,a=null;return r.a.Children.map(this.props.children,(function(e){switch(e.key){case"left-content":t=e;break;case"main-content":n=[e];break;case"right-content":a=e}})),f.some((function(t){return t===e.props.breakpoint}))&&n.push(t,a),r.a.createElement(u.b,null,(function(c){var i=c.data;return r.a.createElement("div",null,r.a.createElement(l,{theme:i.theme,title:e.props.title,text:e.props.text}),r.a.createElement("div",null,r.a.createElement(s.a,{className:"content-"+i.theme},r.a.createElement(o.a,{xs:{span:0},lg:{span:4},xl:{span:5},xxl:{span:5},className:"left-content"},t),r.a.createElement(o.a,{xs:{span:24},lg:{span:16},xl:{span:14},xxl:{span:14},className:"main-content-"+i.theme},n),r.a.createElement(o.a,{xs:{span:0},lg:{span:4},xl:{span:5},xxl:{span:5},className:"right-content"},a))))}))},c}(r.a.Component);m=h,h=function(e){var t=function(){if("undefined"!=typeof window){var e=Object(a.useState)(p()),t=e[0],n=e[1];return Object(a.useEffect)((function(){function e(){n(p())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}}(),n=t?t.breakpoint:"xxl";return r.a.createElement(m,Object.assign({},e,{breakpoint:n}))};t.a=h}}]);
//# sourceMappingURL=component---src-pages-o-week-js-93c78b2a258e84451fcd.js.map