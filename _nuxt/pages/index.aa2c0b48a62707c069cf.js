webpackJsonp([0],{"/TYz":function(t,i,e){"use strict";function n(t){e("ohSq")}Object.defineProperty(i,"__esModule",{value:!0});var o=e("JWEC"),a=e("intA"),r=e("VU/8"),l=n,s=r(o.a,a.a,!1,l,null,null);i.default=s.exports},"1HGy":function(t,i,e){"use strict";function n(t){e("ovY9")}var o=e("4JNz"),a=e("VU/8"),r=n,l=a(null,o.a,!1,r,null,null);i.a=l.exports},"4JNz":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("h1",{staticClass:"header-logo"},[e("svg",{staticClass:"logo-image",staticStyle:{"enable-background":"new 0 0 48 40"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",width:"24px",height:"20px",viewBox:"0 0 48 40","xml:space":"preserve"}},[e("defs"),e("path",{attrs:{d:"M37.3,16L44,8H33.3L40,0H20L0,24h10.7L4,32h10.7L8,40h20l20-24H37.3z M12.5,28l3.3-4H20l10-12h5.5L22.1,28H12.5z M26.1,36 h-9.6l3.3-4H24l10-12h5.5L26.1,36z"}})]),t._m(0)])},o=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("b",{staticClass:"logo-type"},[t._v("\n    Savvy"),e("span",[t._v("Stat")])])}],a={render:n,staticRenderFns:o};i.a=a},HCwO:function(t,i,e){"use strict";function n(t){e("IfX6")}var o=e("NFmp"),a=e("VU/8"),r=n,l=a(null,o.a,!1,r,null,null);i.a=l.exports},IfX6:function(t,i,e){var n=e("QyzV");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("3fd7b374",n,!0)},JWEC:function(t,i,e){"use strict";var n=e("1HGy"),o=e("HCwO");i.a={components:{Logo:n.a,Background:o.a},mounted:function(){var t=this,i=this.$el.querySelectorAll(".main-item"),e=this.$el.querySelector(".background");setInterval(function(){i.forEach(function(i){t.move(i)}),setTimeout(function(){t.refresh(i)},1100)},2e3),this.animate(e)},data:function(){return{lang:"en",texts:{en:{phrases:["We provide your personal","A.I.","managing your game."],items:["Behavioral Economist","Machine Learning Expert","Statistician","Physicist","Neuroscientist","Econometrics Expert"],contacts:["contact us today to find out more","info@savvystat.com"]}}}},methods:{move:function(t){var i=this,e=parseInt(t.dataset.index),n=parseInt(window.getComputedStyle(t,null).getPropertyValue("font-size"));if(0===e){var o=10*(n/5-1);this.$velocity(t,{top:"-="+o+"px",opacity:0},{duration:500,complete:function(){t.style.top=4*o+"px",i.$velocity(t,{top:"-="+o+"px",opacity:.02},{duration:500})}})}else if(3===e)this.$velocity(t,{top:0,opacity:1,color:"#0000ec",fontSize:n/5*6},{duration:500});else{2===e&&(n=n/6*5);var a=10*(n/5-1);this.$velocity(t,{top:a*(e-3),opacity:.11-.03*Math.abs(3-e),color:"#000",fontSize:n},{duration:500})}},refresh:function(t){t.forEach(function(t){t.style=""});var i=this.texts[this.lang].items,e=i.shift();return i.push(e),i},animate:function(t){var i=this;this.$velocity(t,{left:"-100%"},{duration:5e4,easing:"linear",complete:function(){t.style.left=0,i.animate(t)}})}}}},NFmp:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"background"})},o=[],a={render:n,staticRenderFns:o};i.a=a},QyzV:function(t,i,e){i=t.exports=e("FZ+f")(!1),i.push([t.i,".background{position:absolute;width:200%;height:100%;z-index:-1;top:0;left:0;background:transparent url(/background.svg) 0 50% repeat-x}",""])},intA:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"container"},[e("header",[e("logo")],1),e("main",[e("b",{staticClass:"main-phrase"},[t._v(t._s(t.texts[t.lang].phrases[0]))]),e("ul",{staticClass:"main-items"},t._l(t.texts[t.lang].items,function(i,n){return e("li",{key:n,staticClass:"main-item",attrs:{"data-index":n}},[t._v("\n        "+t._s(i)+"\n      ")])})),e("b",{staticClass:"main-phrase"},[e("span",[t._v(t._s(t.texts[t.lang].phrases[1]))]),t._v(" "+t._s(t.texts[t.lang].phrases[2]))])]),e("footer",[e("div",{staticClass:"footer-contact"},[t._v("\n      "+t._s(t.texts[t.lang].contacts[0])+" "),e("span"),e("b",[t._v(t._s(t.texts[t.lang].contacts[1]))])]),e("div",{staticClass:"footer-copyright"},[t._v("\n      © 2017 PangTrio, Inc. All rights reserved\n    ")])]),e("background")],1)},o=[],a={render:n,staticRenderFns:o};i.a=a},n3Dc:function(t,i,e){i=t.exports=e("FZ+f")(!1),i.push([t.i,".header-logo{display:inline-block;height:20px}.header-logo .logo-image,.header-logo .logo-type{display:block;float:left}.header-logo .logo-type{font-weight:300;font-size:17px;line-height:20px;height:20px;margin-left:7px}.header-logo .logo-type span{font-weight:400}@media (min-width:1280px) and (max-width:1599px){.header-logo .logo-image{width:20px;height:20px}.header-logo .logo-type{font-size:15px;line-height:20px;height:20px}}@media (min-width:720px) and (max-width:1279px){.header-logo .logo-image{width:16px;height:16px}.header-logo .logo-type{font-size:13px;line-height:16px;height:16px}}@media (max-width:719px){.header-logo .logo-image{width:20px;height:20px}.header-logo .logo-type{font-size:15px;line-height:20px;height:20px}}",""])},ohSq:function(t,i,e){var n=e("qIxS");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("4e9b37f4",n,!0)},ovY9:function(t,i,e){var n=e("n3Dc");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("29881d7b",n,!0)},qIxS:function(t,i,e){i=t.exports=e("FZ+f")(!1),i.push([t.i,"@media (max-width:719px){.container{min-width:100vw;min-height:100vh;border:4px solid #0000ec;position:relative}header{display:inline-block;top:24px;left:20px;z-index:10}header,main{position:absolute}main{width:100%;height:100%;top:0;left:0;z-index:20}.main-phrase{font-size:15px;font-weight:400;line-height:40px;letter-spacing:.03em;position:absolute;top:50%}.main-phrase:first-child{top:calc(50% - 140px)}.main-phrase:first-child,.main-phrase:last-child{text-align:center;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.main-phrase:last-child{top:calc(50% + 100px)}.main-phrase span{color:#0000ec;font-weight:500}.main-items{top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:400px;margin-top:-52px;width:0;height:0;overflow:visible}.main-item,.main-items{display:block;left:50%;position:absolute}.main-item{width:400px;height:60px;list-style:none;text-align:center;line-height:60px;font-size:20px;letter-spacing:.03em;font-weight:500;margin-left:-200px}.main-item:first-child{top:-60px}.main-item:nth-child(2){top:-30px}.main-item:nth-child(3){top:0}.main-item:nth-child(4){top:30px}.main-item:nth-child(5){top:60px}.main-item:nth-child(6){top:90px}.main-item:nth-child(4n+1){opacity:.05}.main-item:nth-child(2n){opacity:.08}.main-item:last-child{opacity:.02}.main-item:nth-child(3){color:#0000ec;font-size:24px}footer{bottom:0;z-index:30}.footer-contact,footer{width:100%;position:absolute}.footer-contact{font-size:13px;font-weight:300;line-height:20px;letter-spacing:.03em;text-align:center;margin-bottom:10px;bottom:32px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.footer-contact span{display:none;width:1px;height:11px;margin:0 4px 0 5px;background:#0000ec;-webkit-transform:rotate(22.5deg) translateY(3px);transform:rotate(22.5deg) translateY(3px)}.footer-contact b{display:block;font-size:13px;line-height:13px;padding-left:3px;color:#0000ec}.footer-contact b,.footer-copyright{font-weight:300;letter-spacing:.03em}.footer-copyright{position:absolute;bottom:16px;left:50%;font-size:9px;line-height:9px;margin-bottom:-2px;margin-right:-1px;text-align:center;color:rgba(0,0,0,.6);-webkit-transform:translate(-50%);transform:translate(-50%)}}@media (min-width:720px){.container{min-width:100vw;min-height:100vh;border:3px solid #0000ec;position:relative}header{display:inline-block;top:24px;left:20px;z-index:10}header,main{position:absolute}main{width:100%;height:100%;top:0;left:0;z-index:20}.main-phrase{font-size:15px;font-weight:300;line-height:40px;letter-spacing:.03em;position:absolute;top:50%}.main-phrase:first-child{text-align:left;left:24px}.main-phrase:first-child,.main-phrase:last-child{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.main-phrase:last-child{text-align:right;right:24px}.main-phrase span{color:#0000ec}.main-items{top:50%;left:50%;margin-top:-1px;width:0;height:0;overflow:visible}.main-item,.main-items{display:block;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute}.main-item{width:100vw;height:60px;list-style:none;text-align:center;line-height:60px;font-size:20px;letter-spacing:.03em;font-weight:500;top:0;left:0}.main-item:first-child{top:-60px}.main-item:nth-child(2){top:-30px}.main-item:nth-child(3){top:0}.main-item:nth-child(4){top:30px}.main-item:nth-child(5){top:60px}.main-item:nth-child(6){top:90px}.main-item:nth-child(4n+1){opacity:.05}.main-item:nth-child(2n){opacity:.08}.main-item:last-child{opacity:.02}.main-item:nth-child(3){color:#0000ec;font-size:24px}footer{width:100%;position:absolute;bottom:0;z-index:30}.footer-contact{font-size:11px;font-weight:300;line-height:13px;letter-spacing:.03em;text-align:center;position:absolute;margin-bottom:-3px;bottom:32px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.footer-contact span{display:inline-block;width:1px;height:11px;margin:0 4px 0 5px;background:#0000ec;-webkit-transform:rotate(22.5deg) translateY(3px);transform:rotate(22.5deg) translateY(3px)}.footer-contact b{display:inline-block;font-size:11px;line-height:13px;padding-left:3px;color:#0000ec}.footer-contact b,.footer-copyright{font-weight:300;letter-spacing:.03em}.footer-copyright{position:absolute;bottom:16px;left:50%;font-size:9px;line-height:9px;margin-bottom:-2px;margin-right:-1px;text-align:center;color:rgba(0,0,0,.6);-webkit-transform:translate(-50%);transform:translate(-50%)}}@media (min-width:960px){.container{min-width:100vw;min-height:100vh;border:3px solid #0000ec;position:relative}header{display:inline-block;top:24px;left:20px;z-index:10}header,main{position:absolute}main{width:100%;height:100%;top:0;left:0;z-index:20}.main-phrase{font-size:18px;font-weight:300;line-height:40px;letter-spacing:.03em;position:absolute;top:50%}.main-phrase:first-child{text-align:left;left:36px}.main-phrase:first-child,.main-phrase:last-child{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.main-phrase:last-child{text-align:right;right:36px}.main-phrase span{color:#0000ec}.main-items{top:50%;left:50%;margin-top:-1px;width:0;height:0;overflow:visible}.main-item,.main-items{display:block;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute}.main-item{width:100vw;height:60px;list-style:none;text-align:center;line-height:60px;font-size:25px;letter-spacing:.03em;font-weight:500;top:0;left:0}.main-item:first-child{top:-80px}.main-item:nth-child(2){top:-40px}.main-item:nth-child(3){top:0}.main-item:nth-child(4){top:40px}.main-item:nth-child(5){top:80px}.main-item:nth-child(6){top:120px}.main-item:nth-child(4n+1){opacity:.05}.main-item:nth-child(2n){opacity:.08}.main-item:last-child{opacity:.02}.main-item:nth-child(3){color:#0000ec;font-size:30px}footer{width:100%;position:absolute;bottom:0;z-index:30}.footer-contact{font-size:13px;font-weight:300;line-height:13px;letter-spacing:.03em;text-align:center;position:absolute;margin-bottom:-3px;bottom:32px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.footer-contact span{display:inline-block;width:1px;height:13px;margin:0 4px 0 5px;background:#0000ec;-webkit-transform:rotate(22.5deg) translateY(3px);transform:rotate(22.5deg) translateY(3px)}.footer-contact b{display:inline-block;font-size:13px;line-height:13px;padding-left:3px;color:#0000ec}.footer-contact b,.footer-copyright{font-weight:300;letter-spacing:.03em}.footer-copyright{position:absolute;bottom:12px;left:50%;font-size:11px;line-height:11px;margin-bottom:-2px;margin-right:-1px;text-align:center;color:rgba(0,0,0,.6);-webkit-transform:translate(-50%);transform:translate(-50%)}}@media (min-width:1280px){.container{min-width:100vw;min-height:100vh;border:4px solid #0000ec;position:relative}header{display:inline-block;top:32px;left:24px;z-index:10}header,main{position:absolute}main{width:100%;height:100%;top:0;left:0;z-index:20}.main-phrase{font-size:24px;font-weight:300;line-height:40px;letter-spacing:.03em;position:absolute;top:50%}.main-phrase:first-child{text-align:left;left:47px}.main-phrase:first-child,.main-phrase:last-child{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.main-phrase:last-child{text-align:right;right:47px}.main-phrase span{color:#0000ec}.main-items{top:50%;left:50%;margin-top:2px;width:0;height:0;overflow:visible}.main-item,.main-items{display:block;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute}.main-item{width:100vw;height:60px;list-style:none;text-align:center;line-height:60px;font-size:30px;letter-spacing:.03em;font-weight:500;top:0;left:0}.main-item:first-child{top:-100px}.main-item:nth-child(2){top:-50px}.main-item:nth-child(3){top:0}.main-item:nth-child(4){top:50px}.main-item:nth-child(5){top:100px}.main-item:nth-child(6){top:150px}.main-item:nth-child(4n+1){opacity:.05}.main-item:nth-child(2n){opacity:.08}.main-item:last-child{opacity:.02}.main-item:nth-child(3){color:#0000ec;font-size:36px}footer{width:100%;position:absolute;bottom:0;z-index:30}.footer-contact{font-size:13px;font-weight:300;line-height:13px;letter-spacing:.03em;text-align:center;position:absolute;margin-bottom:-3px;bottom:32px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.footer-contact span{display:inline-block;width:1px;height:13px;margin:0 4px 0 5px;background:#0000ec;-webkit-transform:rotate(22.5deg) translateY(3px);transform:rotate(22.5deg) translateY(3px)}.footer-contact b{display:inline-block;font-size:13px;line-height:13px;padding-left:4px;color:#0000ec}.footer-contact b,.footer-copyright{font-weight:300;letter-spacing:.03em}.footer-copyright{position:absolute;bottom:32px;right:48px;font-size:9px;line-height:9px;margin-bottom:-2px;margin-right:-1px;text-align:right;color:rgba(0,0,0,.6);-webkit-transform:translate(0);transform:translate(0)}}@media (min-width:1600px){.container{min-width:100vw;min-height:100vh;border:8px solid #0000ec;position:relative}header{display:inline-block;top:32px;left:24px;z-index:10}header,main{position:absolute}main{width:100%;height:100%;top:0;left:0;z-index:20}.main-phrase{font-size:32px;font-weight:300;line-height:40px;letter-spacing:.03em;position:absolute;top:50%}.main-phrase:first-child{text-align:left;left:47px}.main-phrase:first-child,.main-phrase:last-child{-webkit-transform:translateY(-50%);transform:translateY(-50%)}.main-phrase:last-child{text-align:right;right:47px}.main-phrase span{color:#0000ec}.main-items{top:50%;left:50%;margin-top:2px;width:0;height:0;overflow:visible}.main-item,.main-items{display:block;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute}.main-item{width:100vw;height:80px;list-style:none;text-align:center;line-height:80px;font-size:40px;letter-spacing:.03em;font-weight:500;top:0;left:0}.main-item:first-child{top:-140px}.main-item:nth-child(2){top:-70px}.main-item:nth-child(3){top:0}.main-item:nth-child(4){top:70px}.main-item:nth-child(5){top:140px}.main-item:nth-child(6){top:210px}.main-item:nth-child(4n+1){opacity:.05}.main-item:nth-child(2n){opacity:.08}.main-item:last-child{opacity:.02}.main-item:nth-child(3){color:#0000ec;font-size:48px}footer{width:100%;position:absolute;bottom:0;z-index:30}.footer-contact{font-size:16px;font-weight:300;line-height:16px;letter-spacing:.03em;text-align:center;position:absolute;margin-bottom:-3px;bottom:32px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.footer-contact span{display:inline-block;width:1px;height:17px;margin:0 4px 0 5px;background:#0000ec;-webkit-transform:rotate(22.5deg) translateY(3px);transform:rotate(22.5deg) translateY(3px)}.footer-contact b{display:inline-block;font-size:16px;line-height:16px;padding-left:4px;color:#0000ec}.footer-contact b,.footer-copyright{font-weight:300;letter-spacing:.03em}.footer-copyright{position:absolute;bottom:32px;right:48px;font-size:12px;line-height:12px;margin-bottom:-2px;margin-right:-1px;text-align:right;color:rgba(0,0,0,.6)}}body,html{overflow:hidden}",""])}});
//# sourceMappingURL=index.aa2c0b48a62707c069cf.js.map