(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/monitor.a4573174.svg"},37:function(e,t,n){e.exports=n.p+"static/media/background.73745505.jpg"},39:function(e,t,n){e.exports=n(61)},58:function(e,t,n){e.exports=n.p+"static/media/desklamp.d4c74a2a.svg"},59:function(e,t,n){e.exports=n.p+"static/media/commodore.252e74d8.woff"},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var i=n(4),a=n.n(i),r=n(22),c=n.n(r),o=n(12),u=n(9),s=n(11),h=n(19),l=n(18),d="DISPLAY.ADD_TO_MAIN_DISPLAY",f="DISPLAY.DELETE_LAST_CHARACTER",g="DISPLAY.INPUT_TO_DISPLAY",m="DISPLAY.FOCUS_INPUT",p="DISPLAY.SET_LEFT_DISPLAY",w="DISPLAY.SET_RIGHT_DISPLAY",y="DISPLAY.REFRESH";var v={main:"",left:"Loading..",right:"",inputting:!1,inputting_at:0};var b=Object(h.b)({display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n=t.payload.message,i=e.main;return i+=n,Object(l.a)({},e,{main:i,inputting:!1});case g:var a=t.payload.message,r=e.main;return r+=a,Object(l.a)({},e,{main:r});case f:var c=e.main,o=e.inputting_at;return c.length>o&&(c=c.slice(0,-1)),Object(l.a)({},e,{main:c});case m:if(e.inputting)return e;var u=e.main.length;return Object(l.a)({},e,{inputting_at:u,inputting:!0});case y:var s=e.left,h=e.right,b=e.main;return s+=" ",h=" "+h,b=" "+b,Object(l.a)({},e,{left:s,right:h,main:b});case p:var O=t.payload.message;return Object(l.a)({},e,{left:O});case w:var j=t.payload.message;return Object(l.a)({},e,{right:j});default:return e}}}),O=n(38),j=n(34);function E(e,t,n){e.beginFill(t,1);var i=n.x,a=n.y,r=n.width,c=n.height;e.drawRect(i,a,r,c),e.endFill()}function x(){return{width:window.innerWidth,height:window.innerHeight}}var S=Object(u.withFilters)(u.Container,[O.a]);function D(e){var t=function(e){return{vignettingAlpha:.4,noise:.1,noiseSize:2.3,seed:Math.random(),time:e,lineWidth:6,lineContrast:.03,animating:!0}}(function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(i.useRef)(0);return Object(i.useEffect)(function(){return r.current=window.requestAnimationFrame(function e(t){a(function(e){return e+1}),r.current=window.requestAnimationFrame(e)}),function(){window.cancelAnimationFrame(r.current)}},[]),n}()/2.71);return a.a.createElement(S,Object.assign({},t,e))}var L=n(7),A=8155610,T=new L.p({fill:A,fontFamily:"Commodore",fontSize:24}),k=4076194,I=2565927,C=6569513;var _=T.clone();_.fill=0;var P=Object(s.b)(function(e){var t=e.display;return{left:t.left,right:t.right}})(function(e){var t=e.left,n=e.right,i=e.x,r=e.y,c=e.height,o=e.width,s={x:i,y:r,height:c,width:o},h={height:c,width:o},l={x:0,y:0,anchor:[0,0]},d=function(e){return{x:e.width,y:0,anchor:[1,0]}}(h);return a.a.createElement(u.Container,s,a.a.createElement(u.Graphics,{draw:function(e){return function(e,t,n){e.beginFill(t,1);var i=n.x,a=n.y,r=n.width,c=n.height;e.drawRect(i,a,r,c),e.endFill()}(e,A,h)}}),a.a.createElement(u.Text,Object.assign({},l,{text:t,style:_})),a.a.createElement(u.Text,Object.assign({},d,{text:n,style:_})))});var F=T.clone();var R=Object(s.b)(function(e){return{main:e.display.main}})(function(e){var t=e.main,n=e.x,r=e.y,c=e.height,o=e.width,s={x:n,y:r,height:c,width:o},h={height:c,width:o},l=function(e){return{x:0,y:e.height,anchor:[0,1]}}(h),d=Object(i.useRef)();return F.wordWrap=!0,F.wordWrapWidth=o,a.a.createElement(u.Container,s,a.a.createElement(u.Graphics,{draw:function(e){return E(e,k,h)}}),a.a.createElement(u.Graphics,{draw:function(e){return E(e,k,h)},ref:d}),a.a.createElement(u.Text,Object.assign({},l,{style:F,text:t,mask:d.current})))}),Y=n(13),W=n.n(Y),G=n(35),M=n.n(G);function z(e){var t=e.css,n=e.font,a=e.refreshDisplay,r=Object(i.useState)(!1),c=Object(o.a)(r,2),u=c[0],s=c[1];return u||(M.a.load({active:function(){a()},custom:{families:[n],urls:[t]}}),s(!0)),null}z.propTypes={font:W.a.string,css:W.a.string};var B={refreshDisplay:function(){return{type:y,payload:{message:"refresh"}}}},H=Object(s.b)(null,B)(z),N=window.RustyZ;function U(e){var t=e.inputToDisplay,n=e.deleteLastCharacter,a=N.update,r=Object(i.useState)(""),c=Object(o.a)(r,2),u=c[0],s=c[1];return Object(i.useEffect)(function(){var e=function(e){if(function(e){return"Backspace"===e.key||"Delete"===e.key}(e))n(),u.length>0&&s(u.slice(0,-1));else if(function(e){return"Enter"===e.key}(e))t("\n"),a(u),s("");else if(function(e){return Boolean(String.fromCharCode(e.keyCode).match(/(\w|\s)/g))}(e))return t(e.key),void s(u+e.key)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),null}U.propTypes={};var q={inputToDisplay:function(e){return{type:g,payload:{message:e}}},deleteLastCharacter:function(){return{type:f,payload:{message:""}}}},J=Object(s.b)(function(e){var t=e.display;return{main:t.main,inputting:t.inputting}},q)(U),Z=n(63);function $(e){var t=Object(i.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],c=e.setLeftDisplay,u=e.setRightDisplay,s=e.addToMainDisplay,h=e.focusInput;a||(new Z.a(function(e){N.subscribe(function(t){e.next(t)})}).subscribe(function(e){switch(e.source){case"left":c(e.content);break;case"right":u(e.content);break;case"main":s(e.content);break;case"input":h()}}),r(!0));return null}$.propTypes={};var K={setLeftDisplay:function(e){return{type:p,payload:{message:e}}},setRightDisplay:function(e){return{type:w,payload:{message:e}}},addToMainDisplay:function(e){return{type:d,payload:{message:e}}},focusInput:function(){return{type:m,payload:{message:"focus"}}}},Q=Object(s.b)(null,K)($),V=n(36),X=n.n(V),ee=(n(58),n(37)),te=n.n(ee),ne=(n(59),n(60),Object(h.c)(b)),ie=578,ae=400,re=800,ce=800,oe=20;function ue(e){var t=e.width,n=e.height,i=Math.abs(t-n),a=0,r=0;return t>n?a+=i/2:r+=i/2,{width:t=n=Math.min(t,n),height:n,x:a,y:r}}function se(e){var t=e.width;return{x:e.x,y:e.y,width:t,height:30}}var he=function(){var e=function(){var e=Object(i.useState)(x()),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(!1),c=Object(o.a)(r,2),u=c[0],s=c[1];return Object(i.useEffect)(function(){var e=function(){var e=x();a(e),s(!1)};e=Object(j.debounce)(e,250),window.addEventListener("resize",e);var t=function(){s(!0)};return window.addEventListener("resize",t),function(){window.removeEventListener(t),window.removeEventListener(e)}},[]),[n,u]}(),t=Object(o.a)(e,2),n=t[0],r=t[1],c=ue(n),h=function(e){var t=e.width,n=e.height,i=ue(e).height;return{x:0,y:0,height:i+(n-i)/2,width:t}}(n),l=function(e,t){var n=e.width,i=e.height;return{y:e.y+i,x:0,height:oe*(t.height/ce),width:n}}(h,n),d=(function(e,t){e.x;e.y,e.width;var n=e.height,i=n*t}(c,.6),function(e){var t=e.width,n=e.height,i=e.x,a=e.y;return{x:t/re*112+i,y:n/ce*120+a,width:ie*(t/re),height:ae*(n/ce)}}(c)),f=function(e){var t=e.width,n=e.height,i=e.x,a=e.y,r=t+162,c=n+162;return{width:r,height:c,x:i-=(r-t)/2,y:a-=(c-n)/2}}(d),g=se(d),m=g.x,p=g.y,w=g.width,y=g.height,v={x:m,y:p,width:w,height:y},b=function(e){var t=e.width,n=e.height,i=e.x,a=e.y,r=se(e).height;return{x:i,y:a+r,height:n-r,width:t}}(d),O={x:m=b.x,y:p=b.y,width:w=b.width,height:y=b.height},S={backgroundColor:0};return r?null:a.a.createElement(u.Stage,Object.assign({},n,{options:S}),a.a.createElement(s.a,{store:ne},a.a.createElement(u.Sprite,Object.assign({image:te.a,anchor:0},h)),a.a.createElement(u.Graphics,{draw:function(e){return E(e,I,f)}}),a.a.createElement(u.Graphics,{draw:function(e){return E(e,C,l)}}),a.a.createElement(D,{zIndex:1},a.a.createElement(P,v),a.a.createElement(R,O),a.a.createElement(Q,null),a.a.createElement(J,null),a.a.createElement(H,{css:"./App.css",font:"Commodore"})),a.a.createElement(u.Sprite,Object.assign({image:X.a,anchor:0},c))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=document.getElementById("root");c.a.render(a.a.createElement(he,null),le),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.55027f7a.chunk.js.map