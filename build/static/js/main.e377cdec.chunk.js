(this.webpackJsonpsecret_machine=this.webpackJsonpsecret_machine||[]).push([[0],{33:function(e,t,n){e.exports=n.p+"static/media/trial.b4dfe561.png"},35:function(e,t,n){e.exports=n(56)},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(22),c=n.n(r),o=n(9),u=n(11),s=n(19),h=n(18);var l={main:"",left:"Loading..",right:"",inputting:!1,inputting_at:0};var d=Object(s.b)({display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY.ADD_TO_MAIN_DISPLAY":var n=t.payload.message,a=e.main;return a+=n,Object(h.a)({},e,{main:a,inputting:!1});case"DISPLAY.INPUT_TO_DISPLAY":var i=t.payload.message,r=e.main;return r+=i,Object(h.a)({},e,{main:r});case"DISPLAY.DELETE_LAST_CHARACTER":var c=e.main,o=e.inputting_at;return c.length>o&&(c=c.slice(0,-1)),Object(h.a)({},e,{main:c});case"DISPLAY.FOCUS_INPUT":var u=e.inputting;if(u)return e;var s=e.main.length;return Object(h.a)({},e,{inputting_at:s,inputting:!0});case"DISPLAY.SET_LEFT_DISPLAY":var d=t.payload.message;return Object(h.a)({},e,{left:d});case"DISPLAY.SET_RIGHT_DISPLAY":var g=t.payload.message;return Object(h.a)({},e,{right:g});default:return e}}}),g=n(34),f=n(16);function p(){var e=Object(a.useState)({width:window.innerWidth,height:window.innerHeight});return Object(f.a)(e,1)[0]}var y=Object(o.withFilters)(o.Container,[g.a]);function m(e){var t=function(e){return{vignettingAlpha:.5,noise:.1,noiseSize:3.3,seed:Math.random(),time:e,lineWidth:5,lineContrast:.05,animating:!0}}(function(){var e=Object(a.useState)(0),t=Object(f.a)(e,2),n=t[0],i=t[1],r=Object(a.useRef)(0);return Object(a.useEffect)((function(){return r.current=window.requestAnimationFrame((function e(t){i((function(e){return e+1})),r.current=window.requestAnimationFrame(e)})),function(){window.cancelAnimationFrame(r.current)}}),[]),n}()/2.71);return i.a.createElement(y,Object.assign({},t,e))}var w=n(7),v=new w.p({fill:3211101});var b=v.clone();b.fill=0;var E=Object(u.b)((function(e){var t=e.display;return{left:t.left,right:t.right}}))((function(e){var t=e.left,n=e.right,a={x:e.x,y:e.y,height:e.height,width:e.width},r=function(e){return{x:e.x,y:e.y,anchor:[0,0]}}(a),c=function(e){var t=e.width;return{x:e.x+t,y:e.y,anchor:[1,0]}}(a);return i.a.createElement(o.Container,a,i.a.createElement(o.Graphics,{draw:function(e){return function(e,t,n){e.beginFill(t,1);var a=n.x,i=n.y,r=n.width,c=n.height;e.drawRect(a,i,r,c),e.endFill()}(e,3211101,a)}}),i.a.createElement(o.Text,Object.assign({},r,{text:t,style:b})),i.a.createElement(o.Text,Object.assign({},c,{text:n,style:b})))}));function O(e,t,n){e.beginFill(t,1);var a=n.x,i=n.y,r=n.width,c=n.height;e.drawRect(a,i,r,c),e.endFill()}var S=v.clone();var x=Object(u.b)((function(e){return{main:e.display.main}}))((function(e){var t=e.main,n=e.x,r=e.y,c=e.height,u=e.width,s={x:n,y:r,height:c,width:u},h=function(e){var t=e.height;return{x:e.x,y:e.y+t,anchor:[0,1]}}(s),l=Object(a.useRef)();return S.wordWrap=!0,S.wordWrapWidth=u,i.a.createElement(o.Container,s,i.a.createElement(o.Graphics,{draw:function(e){return O(e,2565927,{x:n,y:r,height:c,width:u})}}),i.a.createElement(o.Graphics,{draw:function(e){return O(e,2565927,{x:n,y:r,height:c,width:u})},ref:l}),i.a.createElement(o.Text,Object.assign({},h,{style:S,text:t,mask:l.current})))})),D=n(58),A=window.RustyZ;function I(e){var t=Object(a.useState)(!1),n=Object(f.a)(t,2),i=n[0],r=n[1],c=e.setLeftDisplay,o=e.setRightDisplay,u=e.addToMainDisplay,s=e.focusInput;i||(new D.a((function(e){A.subscribe((function(t){e.next(t)}))})).subscribe((function(e){switch(e.source){case"left":c(e.content);break;case"right":o(e.content);break;case"main":u(e.content);break;case"input":s()}})),r(!0));return null}I.propTypes={};var L={setLeftDisplay:function(e){return{type:"DISPLAY.SET_LEFT_DISPLAY",payload:{message:e}}},setRightDisplay:function(e){return{type:"DISPLAY.SET_RIGHT_DISPLAY",payload:{message:e}}},addToMainDisplay:function(e){return{type:"DISPLAY.ADD_TO_MAIN_DISPLAY",payload:{message:e}}},focusInput:function(){return{type:"DISPLAY.FOCUS_INPUT",payload:{message:"focus"}}}},T=Object(u.b)(null,L)(I);function j(e){var t=e.inputToDisplay,n=e.deleteLastCharacter,i=Object(a.useState)(""),r=Object(f.a)(i,2),c=r[0],o=r[1],u=A.update;return Object(a.useEffect)((function(){var e=function(e){return"Backspace"===e.key||"Delete"===e.key?(n(),void(c.length>0&&o(c.slice(0,-1)))):"Enter"===e.key?(t("\n"),u(c),void o("")):String.fromCharCode(e.keyCode).match(/(\w|\s)/g)?(t(e.key),void o(c+e.key)):void 0};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}})),null}j.propTypes={};var _={inputToDisplay:function(e){return{type:"DISPLAY.INPUT_TO_DISPLAY",payload:{message:e}}},deleteLastCharacter:function(){return{type:"DISPLAY.DELETE_LAST_CHARACTER",payload:{message:""}}}},P=Object(u.b)((function(e){var t=e.display;return{main:t.main,inputting:t.inputting}}),_)(j),Y=n(33),k=n.n(Y),C=(n(55),Object(s.c)(d));function R(e){var t=e.width;return{x:e.x,y:e.y,width:t,height:30}}var F=function(){var e=p(),t=function(e){return{width:e.width,height:e.height,x:0,y:0}}(e),n=function(e){var t=e.width,n=e.height;return{x:t/773*44,y:n/543*44,width:t/773*450,height:n/543*310}}(t),a=R(n),r=a.x,c=a.y,s=a.width,h=a.height,l={x:r,y:c,width:s,height:h},d=function(e){var t=e.width,n=e.height;return{x:e.x,y:e.y+R(e).height/2,height:n,width:t}}(n),g={x:r=d.x,y:c=d.y,width:s=d.width,height:h=d.height},f={backgroundColor:0};return i.a.createElement(o.Stage,Object.assign({},e,{options:f}),i.a.createElement(u.a,{store:C},i.a.createElement(o.Sprite,{image:k.a,anchor:0,height:t.height,width:t.width,zIndex:2}),i.a.createElement(m,{zIndex:1},i.a.createElement(E,l),i.a.createElement(x,g),i.a.createElement(T,null),i.a.createElement(P,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=document.getElementById("root");c.a.render(i.a.createElement(F,null),W),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.e377cdec.chunk.js.map