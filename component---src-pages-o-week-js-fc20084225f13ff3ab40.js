(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9Swm":function(e,t,n){"use strict";n.r(t);n("a1Th"),n("Btvt"),n("I5cv");var a=n("q1tI"),r=n.n(a),o=n("9kay"),s=n("kIla"),c=n("f6S5");var i=function(e){var t,n;n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a;a=o;function o(){return e.apply(this,arguments)||this}return o.prototype.render=function(){var e=this.props.t;return r.a.createElement(c.b,null,(function(t){var n=t.data;return r.a.createElement(s.a,{theme:n.theme,title:e("o-week.title")})}))},o}(r.a.Component),p=Object(o.d)()(i);t.default=p},kIla:function(e,t,n){"use strict";n("91GP"),n("a1Th"),n("Btvt"),n("I5cv");var a=n("q1tI"),r=n.n(a),o=n("BMrR"),s=n("/kpp"),c=n("kPKH"),i=n("9kay");function p(e){var t=Object(i.c)().t,n=e.theme;return n=n||"light",r.a.createElement(o.a,{className:"page-head-"+n},r.a.createElement(c.a,{span:14,offset:5},r.a.createElement("h1",{className:"text-4xl heading-"+n},e.title?e.title:t("in-progress")),r.a.createElement("p",null,e.text?e.text:t("in-progress"))))}function l(){var e=window,t=e.innerWidth,n="xs";return t>=1600?n="xxl":t>=1200?n="xl":t>=992?n="lg":t>=768?n="md":t>=576?n="sm":t<576&&(n="xs"),{width:t,height:e.innerHeight,breakpoint:n}}var u=n("f6S5");var m,h=["xs","sm","md"],f=function(e){var t,n;n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a;a=c;function c(){return e.apply(this,arguments)||this}return c.prototype.render=function(){var e=this,t=null,n=this.props.children,a=null;return r.a.Children.map(this.props.children,(function(e){switch(e.key){case"left-content":t=e;break;case"main-content":n=[e];break;case"right-content":a=e}})),h.some((function(t){return t===e.props.breakpoint}))&&n.push(t,a),r.a.createElement(u.b,null,(function(c){var i=c.data;return r.a.createElement("div",null,r.a.createElement(p,{theme:i.theme,title:e.props.title,text:e.props.text}),r.a.createElement("div",null,r.a.createElement(o.a,{className:"content-"+i.theme},r.a.createElement(s.a,{xs:{span:0},lg:{span:4},xl:{span:5},xxl:{span:5},className:"left-content"},t),r.a.createElement(s.a,{xs:{span:24},lg:{span:16},xl:{span:14},xxl:{span:14},className:"main-content-"+i.theme},n),r.a.createElement(s.a,{xs:{span:0},lg:{span:4},xl:{span:5},xxl:{span:5},className:"right-content"},a))))}))},c}(r.a.Component);m=f,f=function(e){var t=function(){if("undefined"!=typeof window){var e=Object(a.useState)(l()),t=e[0],n=e[1];return Object(a.useEffect)((function(){function e(){n(l())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}}(),n=t?t.breakpoint:"xxl";return r.a.createElement(m,Object.assign({},e,{breakpoint:n}))};t.a=f}}]);
//# sourceMappingURL=component---src-pages-o-week-js-fc20084225f13ff3ab40.js.map