(this.webpackJsonpsecret_machine=this.webpackJsonpsecret_machine||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/trial.b4dfe561.png"},38:function(e,t,n){e.exports=n(59)},57:function(e,t,n){e.exports=n.p+"static/media/commodore.252e74d8.woff"},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(22),c=n.n(r),o=n(12),u=n(9),s=n(11),h=n(19),l=n(18),d="DISPLAY.ADD_TO_MAIN_DISPLAY",f="DISPLAY.DELETE_LAST_CHARACTER",g="DISPLAY.INPUT_TO_DISPLAY",m="DISPLAY.FOCUS_INPUT",p="DISPLAY.SET_LEFT_DISPLAY",y="DISPLAY.SET_RIGHT_DISPLAY",w="DISPLAY.REFRESH";var v={main:"",left:"Loading..",right:"",inputting:!1,inputting_at:0};var b=Object(h.b)({display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n=t.payload.message,a=e.main;return a+=n,Object(l.a)({},e,{main:a,inputting:!1});case g:var i=t.payload.message,r=e.main;return r+=i,Object(l.a)({},e,{main:r});case f:var c=e.main,o=e.inputting_at;return c.length>o&&(c=c.slice(0,-1)),Object(l.a)({},e,{main:c});case m:if(e.inputting)return e;var u=e.main.length;return Object(l.a)({},e,{inputting_at:u,inputting:!0});case w:var s=e.left,h=e.right,b=e.main;return s+=" ",h=" "+h,b=" "+b,Object(l.a)({},e,{left:s,right:h,main:b});case p:var O=t.payload.message;return Object(l.a)({},e,{left:O});case y:var j=t.payload.message;return Object(l.a)({},e,{right:j});default:return e}}}),O=n(37),j=n(34);function E(){return{width:window.innerWidth,height:window.innerHeight}}var x=Object(u.withFilters)(u.Container,[O.a]);function S(e){var t=function(e){return{vignettingAlpha:.7,noise:.1,noiseSize:3.3,seed:Math.random(),time:e,lineWidth:5,lineContrast:.05,animating:!0}}(function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(a.useRef)(0);return Object(a.useEffect)((function(){return r.current=window.requestAnimationFrame((function e(t){i((function(e){return e+1})),r.current=window.requestAnimationFrame(e)})),function(){window.cancelAnimationFrame(r.current)}}),[]),n}()/2.71);return i.a.createElement(x,Object.assign({},t,e))}var D=n(7),L=3211101,A=new D.p({fill:L,fontFamily:"Commodore",fontSize:24}),T=2565927;var I=A.clone();I.fill=0;var k=Object(s.b)((function(e){var t=e.display;return{left:t.left,right:t.right}}))((function(e){var t=e.left,n=e.right,a={x:e.x,y:e.y,height:e.height,width:e.width},r=function(e){return{x:e.x,y:e.y,anchor:[0,0]}}(a),c=function(e){var t=e.width;return{x:e.x+t,y:e.y,anchor:[1,0]}}(a);return i.a.createElement(u.Container,a,i.a.createElement(u.Graphics,{draw:function(e){return function(e,t,n){e.beginFill(t,1);var a=n.x,i=n.y,r=n.width,c=n.height;e.drawRect(a,i,r,c),e.endFill()}(e,L,a)}}),i.a.createElement(u.Text,Object.assign({},r,{text:t,style:I})),i.a.createElement(u.Text,Object.assign({},c,{text:n,style:I})))}));function _(e,t,n){e.beginFill(t,1);var a=n.x,i=n.y,r=n.width,c=n.height;e.drawRect(a,i,r,c),e.endFill()}var C=A.clone();var P=Object(s.b)((function(e){return{main:e.display.main}}))((function(e){var t=e.main,n=e.x,r=e.y,c=e.height,o=e.width,s={x:n,y:r,height:c,width:o},h=function(e){var t=e.height;return{x:e.x,y:e.y+t,anchor:[0,1]}}(s),l=Object(a.useRef)();return C.wordWrap=!0,C.wordWrapWidth=o,i.a.createElement(u.Container,s,i.a.createElement(u.Graphics,{draw:function(e){return _(e,T,{x:n,y:r,height:c,width:o})}}),i.a.createElement(u.Graphics,{draw:function(e){return _(e,T,{x:n,y:r,height:c,width:o})},ref:l}),i.a.createElement(u.Text,Object.assign({},h,{style:C,text:t,mask:l.current})))})),F=n(61),R=window.RustyZ;function Y(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),i=n[0],r=n[1],c=e.setLeftDisplay,u=e.setRightDisplay,s=e.addToMainDisplay,h=e.focusInput;i||(new F.a((function(e){R.subscribe((function(t){e.next(t)}))})).subscribe((function(e){switch(e.source){case"left":c(e.content);break;case"right":u(e.content);break;case"main":s(e.content);break;case"input":h()}})),r(!0));return null}Y.propTypes={};var W={setLeftDisplay:function(e){return{type:p,payload:{message:e}}},setRightDisplay:function(e){return{type:y,payload:{message:e}}},addToMainDisplay:function(e){return{type:d,payload:{message:e}}},focusInput:function(){return{type:m,payload:{message:"focus"}}}},z=Object(s.b)(null,W)(Y);function G(e){var t=e.inputToDisplay,n=e.deleteLastCharacter,i=Object(a.useState)(""),r=Object(o.a)(i,2),c=r[0],u=r[1],s=R.update;return Object(a.useEffect)((function(){var e=function(e){return"Backspace"===e.key||"Delete"===e.key?(n(),void(c.length>0&&u(c.slice(0,-1)))):"Enter"===e.key?(t("\n"),s(c),void u("")):String.fromCharCode(e.keyCode).match(/(\w|\s)/g)?(t(e.key),void u(c+e.key)):void 0};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}})),null}G.propTypes={};var H={inputToDisplay:function(e){return{type:g,payload:{message:e}}},deleteLastCharacter:function(){return{type:f,payload:{message:""}}}},M=Object(s.b)((function(e){var t=e.display;return{main:t.main,inputting:t.inputting}}),H)(G),B=n(13),N=n.n(B),U=n(35),q=n.n(U);function J(e){var t=e.css,n=e.font,i=e.refreshDisplay,r=Object(a.useState)(!1),c=Object(o.a)(r,2),u=c[0],s=c[1];return u||(q.a.load({active:function(){i()},custom:{families:[n],urls:[t]}}),s(!0)),null}J.propTypes={font:N.a.string,css:N.a.string};var Z={refreshDisplay:function(){return{type:w,payload:{message:"refresh"}}}},$=Object(s.b)(null,Z)(J),K=n(36),Q=n.n(K),V=(n(57),n(58),Object(h.c)(b));function X(e){var t=e.width;return{x:e.x,y:e.y,width:t,height:30}}var ee=function(){var e=function(){var e=Object(a.useState)(E()),t=Object(o.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(!1),c=Object(o.a)(r,2),u=c[0],s=c[1];return Object(a.useEffect)((function(){var e=function(){var e=E();i(e),s(!1)};e=Object(j.debounce)(e,250),window.addEventListener("resize",e);var t=function(){s(!0)};return window.addEventListener("resize",t),function(){window.removeEventListener(t),window.removeEventListener(e)}}),[]),[n,u]}(),t=Object(o.a)(e,2),n=t[0],r=t[1],c=function(e){return{width:e.width,height:e.height,x:0,y:0}}(n),h=function(e){var t=e.width,n=e.height;return{x:t/773*44,y:n/543*43,width:t/773*450,height:n/543*310}}(c),l=X(h),d=l.x,f=l.y,g=l.width,m=l.height,p={x:d,y:f,width:g,height:m},y=function(e){var t=e.width,n=e.height;return{x:e.x,y:e.y+X(e).height/2,height:n,width:t}}(h),w={x:d=y.x,y:f=y.y,width:g=y.width,height:m=y.height},v={backgroundColor:0};return r?null:i.a.createElement(u.Stage,Object.assign({},n,{options:v}),i.a.createElement(s.a,{store:V},i.a.createElement(u.Sprite,{image:Q.a,anchor:0,height:c.height,width:c.width,zIndex:2}),i.a.createElement(S,{zIndex:1},i.a.createElement(k,p),i.a.createElement(P,w),i.a.createElement(z,null),i.a.createElement(M,null),i.a.createElement($,{css:"./App.css",font:"Commodore"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=document.getElementById("root");c.a.render(i.a.createElement(ee,null),te),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.24e94230.chunk.js.map