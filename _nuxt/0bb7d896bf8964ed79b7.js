(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{182:function(t,e,r){var content=r(204);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("45be49ee",content,!0,{sourceMap:!1})},203:function(t,e,r){"use strict";var o=r(182);r.n(o).a},204:function(t,e,r){(e=r(44)(!1)).push([t.i,"aside{box-shadow:1px 0 2px 0 rgba(31,33,38,.08)}",""]),t.exports=e},209:function(t,e,r){"use strict";r.r(e);var o=r(187),l=r(170),n=r(183),d=r(184),h=r(185),c=r(186),m={components:{LogomarkCalculator:o.a,Diagram:l.a,SidebarCollapse:n.a,SidebarCollapseInput:d.a,SidebarCollapseInputHeader:h.a,SidebarCollapseResult:c.a},data:function(){return{metric:!0,earthRadius:6371,earthRadiusImperial:3958.75585149,feetPerMeter:3.2808399,feetPerMile:.000189393939393939,milesPerKilometer:.621371192,h0:0,d0:0,h0i:0,d0i:0}},computed:{d1:function(){return this.h0>=1e-9?Math.sqrt(Math.pow(this.earthRadius+.001*this.h0,2)-Math.pow(this.earthRadius,2)).toFixed(8):"0"},h1:function(){return this.d0>this.d1?(1e3*(Math.sqrt(Math.pow(this.d1,2)-2*this.d1*this.d0+Math.pow(this.d0,2)+Math.pow(this.earthRadius,2))-this.earthRadius)).toFixed(6):"0"},d1i:function(){return this.h0>=1e-9?Math.sqrt(Math.pow(this.earthRadiusImperial+this.h0*this.feetPerMile,2)-Math.pow(this.earthRadiusImperial,2)).toFixed(12):"0"},h1i:function(){return this.d0>this.d1i&&((Math.sqrt(Math.pow(this.d1i,2)-2*this.d1i*this.d0+Math.pow(this.d0,2)+Math.pow(this.earthRadiusImperial,2))-this.earthRadiusImperial)/this.feetPerMile).toFixed(12)||"0"}}},f=(r(203),r(20)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-wrap"},[r("aside",{staticClass:"w-full md:w-73 md:fixed md:h-screen bg-white md:overflow-y-auto z-20"},[r("header",{staticClass:"flex flex-1 justify-center"},[r("logomark-calculator",{staticClass:"mt-8 mb-12 w-20 h-20 rounded-1/3 shadow-lg hover:shadow-md transition ease-in-out duration-300 cursor-pointer transform hover:-translate-y--1 block"})],1),t._v(" "),r("sidebar-collapse",{staticClass:"shadow-none hover:shadow-md hover:duration-200 transition ease-in-out duration-700",attrs:{title:"Calculator"}},[r("sidebar-collapse-input-header",{staticClass:"mt-4",attrs:{unit:t.metric?"m":"ft",title:"Eyesight Height",identifier:"H"}}),t._v(" "),r("sidebar-collapse-input",{staticClass:"pb-4",model:{value:t.h0,callback:function(e){t.h0=t._n(e)},expression:"h0"}}),t._v(" "),r("sidebar-collapse-input-header",{attrs:{unit:t.metric?"km":"mi",title:"Distance To Target",identifier:"D"}}),t._v(" "),r("sidebar-collapse-input",{staticClass:"pb-4",model:{value:t.d0,callback:function(e){t.d0=t._n(e)},expression:"d0"}}),t._v(" "),r("sidebar-collapse-input-header",{staticClass:"mt-4",attrs:{unit:t.metric?"km":"mi",title:"Distance to Horizon",identifier:"D1"}}),t._v(" "),r("sidebar-collapse-result",{staticClass:"pb-4",attrs:{horizon:"",result:t.metric?t.d1:t.d1i}}),t._v(" "),r("sidebar-collapse-input-header",{staticClass:"mt-1",attrs:{unit:t.metric?"m":"ft",title:"Target Hidden Height",identifier:"H1"}}),t._v(" "),r("sidebar-collapse-result",{staticClass:"pb-4",attrs:{result:t.metric?t.h1:t.h1i}})],1),t._v(" "),r("sidebar-collapse",{staticClass:"shadow-none hover:shadow-md hover:duration-200 transition ease-in-out duration-700",attrs:{title:"Preferences"}},[r("header",{staticClass:"text-xs tracking-wider mb-2 text-gray-950 group-hover:text-gray-950 transition ease-in-out duration-200 antialiased flex justify-between items-center"},[r("span",{staticClass:"uppercase"},[t._v("Units")]),t._v(" "),r("span",{staticClass:"text-xs lowercase text-gray-500"},[r("span",{staticClass:"cursor-pointer mr-2",class:{"text-brand-800 font-bold":!t.metric},on:{click:function(e){t.metric=!1}}},[t._v("imperial")]),t._v(" "),r("span",{staticClass:"cursor-pointer",class:{"text-brand-800 font-bold":t.metric},on:{click:function(e){t.metric=!0}}},[t._v("Metric")])])])]),t._v(" "),r("sidebar-collapse",{staticClass:"shadow-none hover:shadow-md hover:duration-200 transition ease-in-out duration-700",attrs:{title:"Assumptions"}},[r("ol",{staticClass:"list-decimal list-outside pl-3 text-xs"},[r("li",{staticClass:"pb-01"},[t._v("Light travels in a straight line.")]),t._v(" "),r("li",[t._v("The Earth is a sphere with a radius of 6371 km.")])])])],1),t._v(" "),r("div",{staticClass:"diagram w-full h-screen absolute right-0 md:w-sidebar"},[r("pan-zoom",{staticClass:"w-full h-full",attrs:{options:{autocenter:!0,bounds:!1,minZoom:.5,maxZoom:3,smoothScroll:!0,transformOrigin:{x:.5,y:.5}},selector:"#diagram"}},[r("diagram",{staticClass:"w-full h-full absolute"})],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);