(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(t,e,r){var content=r(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("76fef9a4",content,!0,{sourceMap:!1})},178:function(t,e,r){"use strict";var o=r(171);r.n(o).a},179:function(t,e,r){var o=r(45),l=r(180),n=r(181);e=o(!1);var c=l(n);e.push([t.i,".logomark__back{width:100%;height:100%;background:url("+c+') 50% no-repeat;background-size:60%}.logomark__back:before{background-color:#eceef4;border-radius:9999px;position:absolute;display:block;content:"";width:60%;height:60%;top:20%;right:20%;transition:all .555s ease-in-out}.logomark.active .logomark__back:before,.logomark:hover .logomark__back:before{transition:all .222s ease-in-out;background:transparent}.ecc{width:38%;height:38%}.ufe{width:48%;height:48%}',""]),t.exports=e},180:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},181:function(t,e,r){t.exports=r.p+"img/2be381c.png"},188:function(t,e,r){var content=r(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("45be49ee",content,!0,{sourceMap:!1})},189:function(t,e,r){"use strict";var o={components:{Icon:r(173).a},props:{name:{type:String,default:"ecc"},active:{type:Boolean,default:!1}}},l=(r(178),r(22)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logomark flex items-center justify-center rounded-1/3 hover:shadow-lg transition ease-in-out duration-300 cursor-pointer relative transform",class:this.active?"active shadow-lg hover:shadow-xl hover:-translate-y-01":"shadow-xs hover:shadow-lg hover:-translate-y-1"},[e("div",{staticClass:"logomark__back w-full h-full rounded-full transform -rotate-90 absolute"}),this._v(" "),e("icon",{staticClass:"logomark__icon absolute text-brand-100 fill-current",class:this.name},[this._t("default")],2)],1)}),[],!1,null,null,null);e.a=component.exports},190:function(t,e,r){"use strict";var o=r(22),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("g",{attrs:{id:"basemark-calculator"}},[e("path",{attrs:{d:"M243.835841,81.3441845 L201.219831,38.7249511 C196.253606,33.7583496 188.201763,33.7583496 183.235537,38.7249511 C178.269311,43.6915526 178.269311,51.7440046 183.235537,56.710606 L225.851546,99.3298394 L183.235537,141.949073 C178.269311,146.915674 178.269311,154.968126 183.235537,159.934728 C188.201763,164.901329 196.253606,164.901329 201.219831,159.934728 L243.835841,117.315494 L286.45185,159.934728 C291.418076,164.901329 299.469919,164.901329 304.436145,159.934728 C309.40237,154.968126 309.40237,146.915674 304.436145,141.949073 L261.820135,99.3298394 L304.436145,56.710606 C309.40237,51.7440046 309.40237,43.6915526 304.436145,38.7249511 C299.469919,33.7583496 291.418076,33.7583496 286.45185,38.7249511 L243.835841,81.3441845 Z M170.850886,416.174603 C163.827582,416.174603 158.134069,410.48066 158.134069,403.456824 C158.134069,396.432989 163.827582,390.739046 170.850886,390.739046 L316.820796,390.739046 C323.8441,390.739046 329.537612,396.432989 329.537612,403.456824 C329.537612,410.48066 323.8441,416.174603 316.820796,416.174603 L170.850886,416.174603 Z M170.850886,477 C163.827582,477 158.134069,471.306057 158.134069,464.282221 C158.134069,457.258386 163.827582,451.564443 170.850886,451.564443 L316.820796,451.564443 C323.8441,451.564443 329.537612,457.258386 329.537612,464.282221 C329.537612,471.306057 323.8441,477 316.820796,477 L170.850886,477 Z M12.7168165,282.86078 C5.69351269,282.86078 0,277.166837 0,270.143002 C0,263.119167 5.69351269,257.425223 12.7168165,257.425223 L499.283183,257.425223 C506.306487,257.425223 512,263.119167 512,270.143002 C512,277.166837 506.306487,282.86078 499.283183,282.86078 L12.7168165,282.86078 Z"}})])}),[],!1,null,null,null);e.a=component.exports},208:function(t,e,r){"use strict";var o=r(188);r.n(o).a},209:function(t,e,r){(e=r(45)(!1)).push([t.i,"aside{box-shadow:1px 0 2px 0 rgba(31,33,38,.08)}",""]),t.exports=e},213:function(t,e,r){"use strict";r.r(e);var o=r(189),l=r(190),n=r(195),c=r(191),h=r(192),d=r(193),f=r(194),m={components:{logomarkBase:o.a,IconCalc:l.a,Diagram:n.a,SidebarCollapse:c.a,SidebarCollapseInput:h.a,SidebarCollapseInputHeader:d.a,SidebarCollapseResult:f.a},data:function(){return{metric:!0,earthRadius:6371,earthRadiusImperial:3958.75585149,feetPerMeter:3.2808399,feetPerMile:.000189393939393939,milesPerKilometer:.621371192,h0:0,d0:0,h0i:0,d0i:0}},computed:{d1:function(){return this.h0>=1e-9?Math.sqrt(Math.pow(this.earthRadius+.001*this.h0,2)-Math.pow(this.earthRadius,2)).toFixed(8):"0"},h1:function(){return this.d0>this.d1?(1e3*(Math.sqrt(Math.pow(this.d1,2)-2*this.d1*this.d0+Math.pow(this.d0,2)+Math.pow(this.earthRadius,2))-this.earthRadius)).toFixed(6):"0"},d1i:function(){return this.h0>=1e-9?Math.sqrt(Math.pow(this.earthRadiusImperial+this.h0*this.feetPerMile,2)-Math.pow(this.earthRadiusImperial,2)).toFixed(12):"0"},h1i:function(){return this.d0>this.d1i&&((Math.sqrt(Math.pow(this.d1i,2)-2*this.d1i*this.d0+Math.pow(this.d0,2)+Math.pow(this.earthRadiusImperial,2))-this.earthRadiusImperial)/this.feetPerMile).toFixed(12)||"0"}}},v=(r(208),r(22)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-wrap"},[r("aside",{staticClass:"w-full md:w-73 md:fixed md:h-screen bg-white md:overflow-y-auto z-20"},[r("header",{staticClass:"flex flex-1 justify-center"},[r("a",{attrs:{href:"/"}},[r("logomark-base",{staticClass:"mt-8 mb-12 w-20 h-20",attrs:{active:""}},[r("icon-calc")],1)],1)]),t._v(" "),r("sidebar-collapse",{staticClass:"shadow-none hover:shadow-md hover:duration-200 transition ease-in-out duration-700",attrs:{title:"Calculator"}},[r("header",{staticClass:"text-xs tracking-wider mb-6 mt-1 text-gray-950 group-hover:text-gray-950 transition ease-in-out duration-200 antialiased flex justify-between items-center"},[r("span",{staticClass:"uppercase"},[t._v("Units")]),t._v(" "),r("span",{staticClass:"text-xs lowercase text-gray-600"},[r("span",{staticClass:"cursor-pointer mr-2",class:{"text-brand-800 font-bold":!t.metric},on:{click:function(e){t.metric=!1}}},[t._v("imperial")]),t._v(" "),r("span",{staticClass:"cursor-pointer",class:{"text-brand-800 font-bold":t.metric},on:{click:function(e){t.metric=!0}}},[t._v("Metric")])])]),t._v(" "),r("sidebar-collapse-input-header",{staticClass:"mt-4",attrs:{unit:t.metric?"m":"ft",title:"Eyesight Height",identifier:"H"}}),t._v(" "),r("sidebar-collapse-input",{staticClass:"pb-4",model:{value:t.h0,callback:function(e){t.h0=t._n(e)},expression:"h0"}}),t._v(" "),r("sidebar-collapse-input-header",{attrs:{unit:t.metric?"km":"mi",title:"Distance To Target",identifier:"D"}}),t._v(" "),r("sidebar-collapse-input",{staticClass:"pb-4",model:{value:t.d0,callback:function(e){t.d0=t._n(e)},expression:"d0"}}),t._v(" "),r("sidebar-collapse-input-header",{staticClass:"mt-4",attrs:{unit:t.metric?"km":"mi",title:"Distance to Horizon",identifier:"D1"}}),t._v(" "),r("sidebar-collapse-result",{staticClass:"pb-4",attrs:{horizon:"",result:t.metric?t.d1:t.d1i}}),t._v(" "),r("sidebar-collapse-input-header",{staticClass:"mt-1",attrs:{unit:t.metric?"m":"ft",title:"Target Hidden Height",identifier:"H1"}}),t._v(" "),r("sidebar-collapse-result",{staticClass:"pb-4",attrs:{result:t.metric?t.h1:t.h1i}})],1),t._v(" "),r("sidebar-collapse",{staticClass:"shadow-none hover:shadow-md hover:duration-200 transition ease-in-out duration-700",attrs:{title:"Assumptions"}},[r("ol",{staticClass:"list-decimal list-outside pl-3 text-xs"},[r("li",{staticClass:"pb-01"},[t._v("Light travels in a straight line.")]),t._v(" "),r("li",[t._v("The Earth is a sphere with a radius of 6371 km.")])])])],1),t._v(" "),r("div",{staticClass:"diagram w-full h-screen absolute right-0 md:w-sidebar"},[r("pan-zoom",{staticClass:"w-full h-full cursor-grab active:cursor-grabbing",attrs:{options:{autocenter:!0,bounds:!1,minZoom:.5,maxZoom:3,smoothScroll:!0,transformOrigin:{x:.5,y:.5},beforeWheel:function(t){return!t.altKey}},selector:"#diagram"}},[r("diagram",{staticClass:"w-full h-full absolute outline-none"})],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);