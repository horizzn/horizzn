(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{170:function(t,e,r){var content=r(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("72404e26",content,!0,{sourceMap:!1})},171:function(t,e,r){var content=r(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(46).default)("0823ef2e",content,!0,{sourceMap:!1})},172:function(t,e,r){"use strict";var o=r(4),n=r(17),c=r(23),l=r(110),C=r(63),h=r(9),m=r(47).f,f=r(64).f,d=r(8).f,L=r(175).trim,v=o.Number,_=v,x=v.prototype,k="Number"==c(r(79)(x)),w="trim"in String.prototype,y=function(t){var e=C(t,!1);if("string"==typeof e&&e.length>2){var r,o,n,c=(e=w?e.trim():L(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+e}for(var code,l=e.slice(2),i=0,h=l.length;i<h;i++)if((code=l.charCodeAt(i))<48||code>n)return NaN;return parseInt(l,o)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof v&&(k?h((function(){x.valueOf.call(r)})):"Number"!=c(r))?l(new _(y(e)),r,v):y(e)};for(var M,I=r(7)?m(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;I.length>E;E++)n(_,M=I[E])&&!n(v,M)&&d(v,M,f(_,M));v.prototype=x,x.constructor=v,r(10)(o,"Number",v)}},173:function(t,e,r){"use strict";r(172);var o={props:{viewbox:{type:String,default:"0 0 512 512"},iconName:{type:String,default:"icon"},width:{type:[Number,String],default:24},height:{type:[Number,String],default:24},iconColor:{type:String,default:"currentColor"}}},n=(r(177),r(22)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:this.width,height:this.height,"aria-labelledby":this.iconName,viewBox:this.viewbox,xmlns:"http://www.w3.org/2000/svg",role:"presentation"}},[e("g",{attrs:{fill:this.iconColor}},[this._t("default")],2)])}),[],!1,null,"2415cd90",null);e.a=component.exports},174:function(t,e,r){"use strict";var o=r(22),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("circle",{staticClass:"logomark__backk",attrs:{cx:"256",cy:"256",r:"256"}})}),[],!1,null,null,null);e.a=component.exports},175:function(t,e,r){var o=r(6),n=r(24),c=r(9),l=r(176),C="["+l+"]",h=RegExp("^"+C+C+"*"),m=RegExp(C+C+"*$"),f=function(t,e,r){var n={},C=c((function(){return!!l[t]()||"​"!="​"[t]()})),h=n[t]=C?e(d):l[t];r&&(n[r]=h),o(o.P+o.F*C,"String",n)},d=f.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(m,"")),t};t.exports=f},176:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},177:function(t,e,r){"use strict";var o=r(170);r.n(o).a},178:function(t,e,r){(e=r(45)(!1)).push([t.i,"svg[data-v-2415cd90]{display:inline-block;vertical-align:baseline;margin-bottom:-2px}",""]),t.exports=e},179:function(t,e,r){"use strict";var o=r(171);r.n(o).a},180:function(t,e,r){var o=r(45),n=r(181),c=r(182);e=o(!1);var l=n(c);e.push([t.i,".conical{background:url("+l+") 50%;background-size:contain}.logomark__back{width:61.803%;height:61.803%}.hrz .logomark__icon{width:54%;height:54%}.hrz .logomark__back{transform:rotate(-105deg)}.ecc .logomark__icon{width:38%;height:38%}.ecc .logomark__back{transform:rotate(-105deg)}.ufe .logomark__icon{width:48%;height:48%}.ufe .logomark__back{transform:rotate(65deg)}.fec .logomark__icon{width:44%;height:44%}.fec .logomark__back{transform:rotate(-45deg)}.pps .logomark__icon{width:41%;height:41%}.pps .logomark__back{transform:rotate(-45deg)}",""]),t.exports=e},181:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},182:function(t,e,r){t.exports=r.p+"img/c88e2d8.png"},186:function(t,e,r){"use strict";var o=r(173),n=r(174),c={components:{Icon:o.a,IconCircle:n.a},props:{name:{type:String,default:"ecc"},active:{type:Boolean,default:!1}},data:function(){return{hover:!1}}},l=(r(179),r(22)),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logomark group flex items-center justify-center rounded-1/3 hover:shadow-lg transition ease-in-out duration-300 cursor-pointer relative transform gradient-white",class:[this.name,this.active?"shadow-lg hover:shadow-xl hover:-translate-y-01":"shadow-xs hover:shadow-lg hover:-translate-y-1"]},[e("icon",{staticClass:"logomark__back absolute m-0 p-0"},[e("icon-circle",{staticClass:"mono text-brand-200 fill-current"})],1),this._v(" "),e("div",{staticClass:"conical logomark__back absolute m-0 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out",class:{"opacity-100":this.active}}),this._v(" "),e("icon",{staticClass:"logomark__icon text-brand-100 fill-current absolute m-0 p-0"},[this._t("default")],2)],1)}),[],!1,null,null,null);e.a=component.exports},187:function(t,e,r){"use strict";var o=r(22),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("g",{attrs:{id:"basemark-calculator"}},[e("path",{attrs:{d:"M243.835841,81.3441845 L201.219831,38.7249511 C196.253606,33.7583496 188.201763,33.7583496 183.235537,38.7249511 C178.269311,43.6915526 178.269311,51.7440046 183.235537,56.710606 L225.851546,99.3298394 L183.235537,141.949073 C178.269311,146.915674 178.269311,154.968126 183.235537,159.934728 C188.201763,164.901329 196.253606,164.901329 201.219831,159.934728 L243.835841,117.315494 L286.45185,159.934728 C291.418076,164.901329 299.469919,164.901329 304.436145,159.934728 C309.40237,154.968126 309.40237,146.915674 304.436145,141.949073 L261.820135,99.3298394 L304.436145,56.710606 C309.40237,51.7440046 309.40237,43.6915526 304.436145,38.7249511 C299.469919,33.7583496 291.418076,33.7583496 286.45185,38.7249511 L243.835841,81.3441845 Z M170.850886,416.174603 C163.827582,416.174603 158.134069,410.48066 158.134069,403.456824 C158.134069,396.432989 163.827582,390.739046 170.850886,390.739046 L316.820796,390.739046 C323.8441,390.739046 329.537612,396.432989 329.537612,403.456824 C329.537612,410.48066 323.8441,416.174603 316.820796,416.174603 L170.850886,416.174603 Z M170.850886,477 C163.827582,477 158.134069,471.306057 158.134069,464.282221 C158.134069,457.258386 163.827582,451.564443 170.850886,451.564443 L316.820796,451.564443 C323.8441,451.564443 329.537612,457.258386 329.537612,464.282221 C329.537612,471.306057 323.8441,477 316.820796,477 L170.850886,477 Z M12.7168165,282.86078 C5.69351269,282.86078 0,277.166837 0,270.143002 C0,263.119167 5.69351269,257.425223 12.7168165,257.425223 L499.283183,257.425223 C506.306487,257.425223 512,263.119167 512,270.143002 C512,277.166837 506.306487,282.86078 499.283183,282.86078 L12.7168165,282.86078 Z"}})])}),[],!1,null,null,null);e.a=component.exports},195:function(t,e,r){"use strict";r.r(e);var o=r(173),n=r(187),c=r(22),l=Object(c.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("path",{attrs:{id:"clock",d:"M276.208682,249.531981 L364.236101,402.07486 C369.925833,411.934607 366.549293,424.542216 356.694389,430.234743 C346.839485,435.927271 334.238067,432.549072 328.548336,422.689325 L239.520782,268.413311 C236.692068,264.883802 235,260.403199 235,255.527198 L235,23.6144652 C235,12.2294104 244.224878,3 255.604341,3 C266.983804,3 276.208682,12.2294104 276.208682,23.6144652 L276.208682,249.531981 Z"}})}),[],!1,null,null,null).exports,C=Object(c.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("path",{attrs:{id:"compass",d:"M331.456494,222.049257 L331.456494,222.049257 C324.52378,206.857109 312.940745,193.58389 297.349012,184.581999 C281.758725,175.580943 264.474024,172.186144 247.852301,173.777238 L387.385002,4.65697475 C396.105737,-5.91297053 412.947019,3.810348 408.153545,16.6476987 L331.456494,222.049257 Z M180.544564,289.953061 L180.544564,289.953061 C184.61392,298.869805 190.285285,307.125443 197.428924,314.244329 L151.972892,435.979647 L234.670759,335.745904 C244.40771,338.373039 254.392984,339.156767 264.149789,338.22256 L124.616922,507.343025 C115.896187,517.91297 99.0549052,508.189652 103.848379,495.352301 L180.544564,289.953061 Z M226.909091,306.386933 C198.851441,290.187841 189.160834,254.497398 205.21998,226.682142 C221.279126,198.866885 257.033259,189.413976 285.090909,205.613067 C313.148559,221.812159 322.839166,257.502602 306.78002,285.317858 C290.720874,313.133115 254.966741,322.586024 226.909091,306.386933 Z"}})}),[],!1,null,null,null).exports,h=r(174),m=Object(c.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("path",{attrs:{d:"M47.9188849,95.9464016 L37.8673638,95.9464016 L37.8673638,63.7363919 L10.101281,63.7363919 L10.101281,95.9464016 L0,95.9464016 L0,22.8969093 L10.101281,22.8969093 L10.101281,55.959832 L37.8673638,55.959832 L37.8673638,22.8969093 L47.9188849,22.8969093 L47.9188849,95.9464016 Z M127.539636,69.5060977 C127.539636,78.1690616 125.317045,84.9170413 120.871796,89.7502393 C116.426546,94.5834373 110.471992,97 103.007954,97 C95.6434362,97 89.7884008,94.5834373 85.442672,89.7502393 C81.0969431,84.9170413 78.9241113,78.1690616 78.9241113,69.5060977 L78.9241113,49.4375559 C78.9241113,40.8080397 81.1052364,34.0516982 85.467552,29.1683286 C89.8298676,24.284959 95.6766097,21.8433109 103.007954,21.8433109 C110.438818,21.8433109 116.385079,24.284959 120.846916,29.1683286 C125.308752,34.0516982 127.539636,40.8080397 127.539636,49.4375559 L127.539636,69.5060977 Z M117.488115,49.2870418 C117.488115,42.9319718 116.227541,38.1072081 113.706355,34.812606 C111.185169,31.5180039 107.619071,29.8707276 103.007954,29.8707276 C98.4631839,29.8707276 94.9800184,31.5180039 92.5583527,34.812606 C90.136687,38.1072081 88.9258723,42.9319718 88.9258723,49.2870418 L88.9258723,69.5060977 C88.9258723,75.9280632 90.1449803,80.7946359 92.5832327,84.1059619 C95.0214851,87.4172878 98.4963574,89.072926 103.007954,89.072926 C107.652244,89.072926 111.226635,87.4256496 113.731235,84.1310476 C116.235834,80.8364455 117.488115,75.9615109 117.488115,69.5060977 L117.488115,49.2870418 Z M168.646144,64.4889622 L168.646144,95.9464016 L158.544863,95.9464016 L158.544863,22.9470807 L181.086145,22.9470807 C187.95306,22.9470807 193.260741,24.7365078 197.009347,28.3154156 C200.757952,31.8943235 202.632227,37.0284741 202.632227,43.7180215 C202.632227,47.5310635 201.761436,50.8590634 200.019827,53.702121 C198.278218,56.5451787 195.765363,58.7694198 192.481186,60.3749112 C196.097098,61.6124774 198.709472,63.7112915 200.318387,66.6714162 C201.927302,69.6315409 202.731747,73.2856513 202.731747,77.6338571 L202.731747,84.0056192 C202.731747,86.2466175 202.955665,88.3287079 203.403507,90.2519528 C203.85135,92.1751977 204.622622,93.6886851 205.717347,94.7924604 L205.717347,95.9464016 L195.317506,95.9464016 C194.189607,94.8426262 193.468094,93.1786263 193.152946,90.9543518 C192.837798,88.7300773 192.680226,86.380409 192.680226,83.9052765 L192.680226,77.7341999 C192.680226,73.6535759 191.759675,70.4259177 189.918546,68.0511284 C188.077416,65.6763391 185.547975,64.4889622 182.330145,64.4889622 L168.646144,64.4889622 Z M168.646144,56.7124023 L180.588545,56.7124023 C184.668886,56.7124023 187.679336,55.6002817 189.619986,53.3760072 C191.560636,51.1517327 192.530946,47.9993308 192.530946,43.9187069 C192.530946,39.7377398 191.585516,36.4933579 189.694626,34.1854641 C187.803736,31.8775702 184.934271,30.7236406 181.086145,30.7236406 L168.646144,30.7236406 L168.646144,56.7124023 Z M246.525295,95.9464016 L236.473774,95.9464016 L236.473774,22.8969093 L246.525295,22.8969093 L246.525295,95.9464016 Z M288.378202,88.220013 L320.423646,88.220013 L320.423646,95.9464016 L277.630041,95.9464016 L277.630041,89.6749822 L308.531005,30.6734693 L277.829081,30.6734693 L277.829081,22.8969093 L319.428446,22.8969093 L319.428446,28.9676432 L288.378202,88.220013 Z M358.046953,88.220013 L390.092396,88.220013 L390.092396,95.9464016 L347.298792,95.9464016 L347.298792,89.6749822 L378.199755,30.6734693 L347.497832,30.6734693 L347.497832,22.8969093 L389.097196,22.8969093 L389.097196,28.9676432 L358.046953,88.220013 Z M467.971547,95.9464016 L457.920026,95.9464016 L430.452504,41.6108246 L430.153943,41.7111673 L430.153943,95.9464016 L420.052662,95.9464016 L420.052662,22.8969093 L430.153943,22.8969093 L457.621466,77.0819722 L457.920026,76.9816295 L457.920026,22.8969093 L467.971547,22.8969093 L467.971547,95.9464016 Z M489.010878,13.0947235 C489.010878,9.54926342 490.147053,6.48047959 492.419438,3.88827998 C494.691823,1.29608037 497.420303,0 500.604959,0 C503.690095,0 506.360521,1.29608037 508.61632,3.88827998 C510.872118,6.48047959 512,9.54926342 512,13.0947235 C512,16.7070791 510.880411,19.7591393 508.6412,22.2509957 C506.401988,24.7428521 503.723268,25.9887617 500.604959,25.9887617 C497.420303,25.9887617 494.691823,24.7428521 492.419438,22.2509957 C490.147053,19.7591393 489.010878,16.7070791 489.010878,13.0947235 Z M494.832798,13.0947235 C494.832798,15.06814 495.388446,16.7154164 496.499758,18.036602 C497.611071,19.3577876 498.979457,20.0183705 500.604959,20.0183705 C502.164113,20.0183705 503.48274,19.3661494 504.560879,18.0616876 C505.639018,16.7572259 506.178079,15.1015878 506.178079,13.0947235 C506.178079,11.0878593 505.639018,9.40713575 504.560879,8.05250241 C503.48274,6.69786906 502.164113,6.02056255 500.604959,6.02056255 C498.979457,6.02056255 497.611071,6.69786906 496.499758,8.05250241 C495.388446,9.40713575 494.832798,11.0878593 494.832798,13.0947235 Z"}})}),[],!1,null,null,null).exports,f=Object(c.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("g",{attrs:{id:"logomark-ufe","fill-rule":"nonzero"}},[e("path",{attrs:{id:"Combined-Shape",d:"M302.812935,6.12297838 L307.858662,8.36221739 L302.812935,10.6014564 C278.921742,21.2041091 263.195327,44.9072784 263.195327,71.4829437 C263.195327,98.0586091 278.921742,121.761778 302.812935,132.364431 L307.858662,134.60367 L302.812935,136.842909 C293.756806,140.861921 283.924059,142.965887 273.799634,142.965887 C234.287785,142.965887 202.256348,110.962301 202.256348,71.4829437 C202.256348,32.0035869 234.287785,2.55795385e-13 273.799634,2.55795385e-13 C283.924059,2.55795385e-13 293.756806,2.10396644 302.812935,6.12297838 Z M295.776647,134.361573 L289.164208,136.288629 C291.403247,135.760872 293.609671,135.117614 295.776647,134.361573 Z M175.883027,430.434854 C106.143869,399.082016 60,329.502527 60,251.338267 C60,142.909392 147.9773,55.0126977 256.5,55.0126977 C365.0227,55.0126977 453,142.909392 453,251.338267 C453,326.405474 410.441207,393.631264 345.109193,426.620913 C345.111011,426.849786 345.111921,427.078777 345.111921,427.307884 C345.111921,474.080863 307.217256,512 260.469162,512 C214.767378,512 177.527146,475.759271 175.883027,430.434854 Z M78.755557,248.407109 L434.244443,248.407109 C432.677628,151.676044 353.69923,73.7424798 256.5,73.7424798 C159.30077,73.7424798 80.3223716,151.676044 78.755557,248.407109 Z M327.059625,427.307884 C327.059625,390.50217 297.245593,360.666086 260.469162,360.666086 C223.69273,360.666086 193.878699,390.50217 193.878699,427.307884 C193.878699,464.113597 223.69273,493.949681 260.469162,493.949681 C297.245593,493.949681 327.059625,464.113597 327.059625,427.307884 Z"}})])}),[],!1,null,null,null).exports,d=r(186),L={components:{Icon:o.a,IconCalc:n.a,IconClock:l,IconCompass:C,IconCircle:h.a,IconLogotype:m,IconUfe:f,BaseLogomark:d.a}},v=Object(c.a)(L,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main bg-gray-100 min-h-screen flex flex-col md:flex-row justify-center items-center text-center mx-auto"},[r("nuxt-link",{staticClass:"absolute top-0",attrs:{to:"/"}},[r("icon",{staticClass:" text-brand-600 fill-current w-24 h-24",attrs:{viewbox:"0 0 512 112"}},[r("icon-logotype")],1)],1),t._v(" "),r("nuxt-link",{staticClass:"group m-3 md:mx-6 lg:mx-8",attrs:{to:"/ecc/"}},[r("base-logomark",{staticClass:"w-18 h-18 md:w-24 md:h-24 lg:w-28 lg:h-28",attrs:{name:"ecc"}},[r("icon-calc")],1),t._v(" "),r("h2",{staticClass:"absolute bottom-0 uppercase text-xs font-bold tracking tracking-widest left-0 right-0 mb-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"},[t._v("\n      Earth Curvature Calculator"),r("br"),t._v(" "),r("span",{staticClass:"text-brand-400 font-normal"},[t._v("Press to View")])])],1),t._v(" "),r("nuxt-link",{staticClass:"group m-3 md:mx-6 lg:mx-8",attrs:{to:"/"}},[r("base-logomark",{staticClass:"w-18 h-18 md:w-24 md:h-24 lg:w-28 lg:h-28",attrs:{name:"fec"}},[r("icon-clock")],1),t._v(" "),r("h2",{staticClass:"absolute bottom-0 uppercase text-xs font-bold tracking-widest left-0 right-0 mb-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"},[t._v("\n      Flat Earth Clock"),r("br"),t._v(" "),r("span",{staticClass:"text-brand-400 font-normal"},[t._v("Upcoming")])])],1),t._v(" "),r("nuxt-link",{staticClass:"hrz group m-0 md:mx-6 lg:mx-8",attrs:{to:"/"}},[r("base-logomark",{staticClass:"hidden md:flex w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36",attrs:{active:"",name:"hrz"}},[r("icon-circle")],1),t._v(" "),r("h2",{staticClass:"absolute bottom-0 uppercase text-xs font-bold tracking tracking-widest left-0 right-0 mb-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"},[t._v("\n      Tools For The awakened"),r("br"),t._v(" "),r("span",{staticClass:"text-brand-400 font-normal"},[t._v("Choose Your Path")])])],1),t._v(" "),r("nuxt-link",{staticClass:"group m-3 md:mx-6 lg:mx-8",attrs:{to:"/"}},[r("base-logomark",{staticClass:"w-18 h-18 md:w-24 md:h-24 lg:w-28 lg:h-28",attrs:{name:"ufe"}},[r("icon-ufe")],1),t._v(" "),r("h2",{staticClass:"absolute bottom-0 uppercase text-xs font-bold tracking tracking-widest left-0 right-0 mb-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"},[t._v("\n      United Flat Earth"),r("br"),t._v(" "),r("span",{staticClass:"text-brand-400 font-normal"},[t._v("Upcoming")])])],1),t._v(" "),r("nuxt-link",{staticClass:"group m-3 md:mx-6 lg:mx-8",attrs:{to:"/"}},[r("base-logomark",{staticClass:"w-18 h-18 md:w-24 md:h-24 lg:w-28 lg:h-28",attrs:{name:"pps"}},[r("icon-compass")],1),t._v(" "),r("h2",{staticClass:"absolute bottom-0 uppercase text-xs font-bold tracking tracking-widest left-0 right-0 mb-4 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"},[t._v("\n      Plane Positioning System"),r("br"),t._v(" "),r("span",{staticClass:"text-brand-400 font-normal"},[t._v("Upcoming")])])],1)],1)}),[],!1,null,null,null);e.default=v.exports}}]);