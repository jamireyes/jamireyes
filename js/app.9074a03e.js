(function(t){function e(e){for(var a,n,i=e[0],o=e[1],c=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&d.push(l[n][0]),l[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var o=s[n];0!==l[o]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},l={app:0},r=[];function n(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b5813af4"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(t){var e=[],s=l[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=l[t]=[e,a]}));e.push(s[2]=a);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,i.nc&&o.setAttribute("nonce",i.nc),o.src=n(t);var c=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(u);var s=l[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,s[1](c)}l[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var f=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"015e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white w-full lg:w-3/4 h-auto m-2 rounded-lg p-10 shadow-lg"},[s("div",{staticClass:"flex flex-col lg:flex-row"},[s("div",{staticClass:"w-full lg:w-2/3"},[s("personal-info"),s("educational-bg")],1),s("div",{staticClass:"w-full lg:w-1/2"},[s("projects")],1)]),s("div",{staticClass:"w-full"},[s("skills")],1)])},l=[],r={name:"main-card"},n=r,i=s("2877"),o=Object(i["a"])(n,a,l,!1,null,null,null);e["default"]=o.exports},"034f":function(t,e,s){"use strict";var a=s("85ec"),l=s.n(a);l.a},"557b":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("557b");var a=s("2b0e"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-gradient flex justify-center items-start lg:items-center w-full h-screen",attrs:{id:"app"}},[s("div",{staticClass:"w-full flex flex-col lg:flex-row container p-5"},[s("side-card"),s("main-card")],1)])},r=[],n={},i=n,o=(s("034f"),s("2877")),c=Object(o["a"])(i,l,r,!1,null,null,null),u=c.exports,f=(s("d3b7"),s("8c4f")),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"})},m=[],p={name:"Home"},v=p,x=Object(o["a"])(v,d,m,!1,null,null,null),h=x.exports;a["a"].use(f["a"]);var C=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],b=new f["a"]({mode:"history",base:"/",routes:C}),w=b,g=s("2f62");a["a"].use(g["a"]);var y=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,a["a"].component("side-card",s("eb6b").default),a["a"].component("main-card",s("015e").default),a["a"].component("personal-info",s("d95e").default),a["a"].component("educational-bg",s("584f").default),a["a"].component("skills",s("75d7").default),a["a"].component("projects",s("62c6").default),new a["a"]({router:w,store:y,render:function(t){return t(u)}}).$mount("#app")},"584f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col mb-5"},[s("div",{staticClass:"flex flex-row items-center"},[s("span",{staticClass:"w-5 h-5 mr-2"},[s("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"12",cy:"8",r:"7"}}),s("polyline",{attrs:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}})])]),s("h1",{staticClass:"font-semibold text-lg lg:text-xl"},[t._v("Educational Background")])]),s("hr",{staticClass:"border-2 border-blue-400 w-20 my-2"}),t._m(0),t._m(1),t._m(2)])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-1"},[s("p",{staticClass:"font-medium text-sm"},[t._v("University of San Carlos - TC")]),s("p",{staticClass:"text-sm italic ml-5"},[t._v("B.S in Information and Communications Technology, Dec. 2019")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-1"},[s("p",{staticClass:"font-medium text-sm"},[t._v("B.R.I.G.H.T. Academy")]),s("p",{staticClass:"text-sm italic ml-5"},[t._v("High School Level, May 2014")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-1"},[s("p",{staticClass:"font-medium text-sm"},[t._v("Lae Christian Academy")]),s("p",{staticClass:"text-sm italic ml-5"},[t._v("Elementary Level, 2010")])])}],r={name:"educational-bg"},n=r,i=s("2877"),o=Object(i["a"])(n,a,l,!1,null,null,null);e["default"]=o.exports},"62c6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-5"},[s("div",{staticClass:"flex flex-row items-center"},[s("span",{staticClass:"w-5 h-5 mr-2"},[s("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polyline",{attrs:{points:"21 8 21 21 3 21 3 8"}}),s("rect",{attrs:{x:"1",y:"3",width:"22",height:"5"}}),s("line",{attrs:{x1:"10",y1:"12",x2:"14",y2:"12"}})])]),s("h1",{staticClass:"font-semibold text-lg lg:text-xl"},[t._v("Projects")])]),s("hr",{staticClass:"border-2 border-blue-400 w-20 my-2"}),t._m(0)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex mt-3"},[a("a",{attrs:{href:"https://app1.jamireyes.tech"}},[a("img",{staticClass:"w-40 h-24 object-cover rounded-lg",attrs:{src:s("c892"),alt:"app1"}})])])}],r={name:"projects"},n=r,i=s("2877"),o=Object(i["a"])(n,a,l,!1,null,null,null);e["default"]=o.exports},"75d7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex flex-row items-center"},[s("span",{staticClass:"w-5 h-5 mr-2"},[s("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}})])]),s("h1",{staticClass:"font-semibold text-lg lg:text-xl"},[t._v("Skills & Technologies")])]),s("hr",{staticClass:"border-2 border-blue-400 w-20 my-2"}),s("div",{staticClass:"flex flex-wrap"},t._l(t.skills,(function(e){return s("div",{key:e.title,staticClass:"bg-blue-400 hover:bg-blue-600 cursor-pointer text-white font-medium text-xs rounded-full p-1 px-3 my-1 mr-2"},[t._v(t._s(e.title))])})),0)])},l=[],r={name:"skills",data:function(){return{skills:[{title:"C"},{title:"Java (OOP)"},{title:"HTML/CSS"},{title:"Javascript"},{title:"jQuery/AJAX"},{title:"PHP"},{title:"Bootstrap"},{title:"Tailwind CSS"},{title:"Laravel"},{title:"Vue JS"},{title:"MySQL"},{title:"Cisco Networking"},{title:"Adobe Photoshop"},{title:"Adobe Illustrator"},{title:"Adobe InDesign"},{title:"Justinmind"},{title:"Figma"}]}}},n=r,i=s("2877"),o=Object(i["a"])(n,a,l,!1,null,null,null);e["default"]=o.exports},"7f6f":function(t,e,s){t.exports=s.p+"img/profile-pic.6316b25a.jpg"},"85ec":function(t,e,s){},c892:function(t,e,s){t.exports=s.p+"img/app1.7312b843.jpg"},d95e:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-col mb-5"},[s("div",{staticClass:"flex flex-row items-center"},[s("span",{staticClass:"w-5 h-5 mr-2"},[s("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),s("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"12"}}),s("line",{attrs:{x1:"12",y1:"8",x2:"12.01",y2:"8"}})])]),s("h1",{staticClass:"font-semibold text-lg lg:text-xl"},[t._v("Personal Information")])]),s("hr",{staticClass:"border-2 border-blue-400 w-20 my-2"}),t._m(0)])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-row mt-1"},[s("div",{staticClass:"w-1/3"},[s("p",{staticClass:"font-medium text-xs md:text-sm"},[t._v("Date of Birth")]),s("p",{staticClass:"font-medium text-xs md:text-sm"},[t._v("Place of Birth")]),s("p",{staticClass:"font-medium text-xs md:text-sm"},[t._v("Citizenship")]),s("p",{staticClass:"font-medium text-xs md:text-sm"},[t._v("Gender")])]),s("div",{staticClass:"w-2/3"},[s("p",{staticClass:"text-xs md:text-sm"},[t._v("February 18, 1997")]),s("p",{staticClass:"text-xs md:text-sm"},[t._v("Lae, Papua New Guinea")]),s("p",{staticClass:"text-xs md:text-sm"},[t._v("Filipino")]),s("p",{staticClass:"text-xs md:text-sm"},[t._v("Male")])])])}],r={name:"personal-info"},n=r,i=s("2877"),o=Object(i["a"])(n,a,l,!1,null,null,null);e["default"]=o.exports},eb6b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white w-full lg:w-1/4 h-auto m-2 rounded-lg p-10 shadow-lg"},[t._m(0),s("div",{staticClass:"flex flex-col mx-5"},[s("div",{staticClass:"flex flex-row items-center mb-3"},[s("span",{staticClass:"text-gray-700 mr-2 w-4"},[s("svg",{staticClass:"feather feather-inbox",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polyline",{attrs:{points:"22 12 16 12 14 15 10 15 8 12 2 12"}}),s("path",{attrs:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}})])]),s("p",{staticClass:"text-xs"},[t._v("jamireyes1802@gmail.com")])]),s("div",{staticClass:"flex flex-row items-center mb-3"},[s("span",{staticClass:"text-gray-700 mr-2 w-4"},[s("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}})])]),s("p",{staticClass:"text-xs"},[t._v("+63 917 135 8009")])]),s("div",{staticClass:"flex flex-row items-start mb-3"},[s("span",{staticClass:"text-gray-700 mr-2 w-4 lg:w-10"},[s("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}}),s("polyline",{attrs:{points:"9 22 9 12 15 12 15 22"}})])]),s("p",{staticClass:"text-xs"},[t._v("Vittoria Subdivision, Kagudoy, Basak, Lapu-Lapu City, 6015 (PH)")])])]),s("div",{staticClass:"flex justify-center items-center w-full mt-10"},[s("div",{staticClass:"flex justify-center items-center bg-blue-400 hover:bg-blue-600 appearance-none outline-none cursor-pointer text-white rounded-full p-2 px-10",on:{click:t.OpenResume}},[s("span",{staticClass:"w-4 h-4 mr-1"},[s("svg",{staticClass:"css-i6dzq1",attrs:{viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}}),s("polyline",{attrs:{points:"7 10 12 15 17 10"}}),s("line",{attrs:{x1:"12",y1:"15",x2:"12",y2:"3"}})])]),t._v(" Resume ")])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col justify-center items-center"},[a("img",{staticClass:"rounded-full w-40 h-40 flex items-center justify-center",attrs:{src:s("7f6f"),alt:"profile-pic"}}),a("h1",{staticClass:"pt-8 text-2xl font-semibold"},[a("span",{staticClass:"font-medium"},[t._v("Jami")]),t._v(" Reyes")]),a("div",{staticClass:"bg-gray-400 text-gray-700 font-medium text-xs rounded-full p-2 px-3 my-5"},[t._v(" Web Developer ")])])}],r={name:"side-card",methods:{OpenResume:function(){window.open("https://drive.google.com/file/d/1jSv7HOMTgT3nQHY3JFC6oQnLaXs93DMR/view?usp=sharing","_blank")}}},n=r,i=s("2877"),o=Object(i["a"])(n,a,l,!1,null,null,null);e["default"]=o.exports}});
//# sourceMappingURL=app.9074a03e.js.map