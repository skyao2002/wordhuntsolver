(this["webpackJsonpword-hunt-solver"]=this["webpackJsonpword-hunt-solver"]||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(11),o=a.n(l),c=(a(41),a(5)),m=(a(42),a(9)),s=a(8);a(43);var u=function(e){var t,a=e.letters,r=[["","","",""],["","","",""],["","","",""],["","","",""]];return function(e){if(console.log("set grid called "+e),null==e)return r=[["","","",""],["","","",""],["","","",""],["","","",""]],void(t=4);t=Math.round(Math.sqrt(e.length));for(var a=0;a<t;a++)for(var n=0;n<t;n++)r[a][n]=e.charAt(a*t+n);console.log("set grid to values")}(a),n.a.createElement("div",null,r.map((function(e,a){return n.a.createElement(m.a,{key:a},e.map((function(e,r){return n.a.createElement(s.a,{className:"p-1",key:a*t+r},n.a.createElement("div",{className:"square"},n.a.createElement("h1",{className:"text-center letter"},e)))})))})))},i=a(19),d=a(20),h=a.n(d),E=a(22),f=a(13);var g=function(e){for(var t=e.currWord,a=e.size,l="",o=0;o<Math.pow(a,2);o++)l+=" ";var u=Object(i.a)(),d=u.register,g=u.handleSubmit,p=u.errors,v=Object(r.useState)(l),b=Object(c.a)(v,2),y=b[0],k=b[1],w=function(t){for(var r="",l=0;l<Math.pow(a,2);l++){var o=document.getElementsByName("letter")[l].value;if(o.toUpperCase()==o.toLowerCase())return n.a.createElement("h1",null,"You did not enter a character in one of the fields. Refresh the page");r+=o.toUpperCase()}k(r),e.onClick(r)},x=function(e){var t=h()(e.target).attr("tabindex")||0;t=Number(t);var a=document.getElementsByName("letter")[t].value;console.log(a),e.keyCode>=65&&e.keyCode<=90&&""!==a&&(t+=1);var r=h()("[tabindex="+t+"]");r[0]&&r.focus()};return null==t?n.a.createElement(E.a,{id:"forms",className:"py-3 text-center",onSubmit:g(w)},n.a.createElement("table",{className:"table table-bordered",name:"values",ref:d({required:"Enter something!",minLength:{value:16,message:"Too short"},maxLength:{value:16,message:"Too long"}})},n.a.createElement("tbody",null,Array.from({length:a}).map((function(e,t){return n.a.createElement("tr",{key:t},Array.from({length:a}).map((function(e,r){return n.a.createElement("td",{key:t*a+r},n.a.createElement("input",{placeholder:y.charAt(t*a+r),maxLength:"1",name:"letter",ref:d({required:!0}),id:t*a+r,tabIndex:t*a+r,onKeyUp:x,type:"text",style:{height:"2.15em"}}))})))})))),p.letter&&n.a.createElement("p",null,"Some values are not filled"),n.a.createElement("p",null,"To reset all, refresh the page"),n.a.createElement(f.a,{type:"submit",tabIndex:Math.pow(a,2),variant:"dark",size:"lg"},"Set Grid!")):n.a.createElement("div",null,n.a.createElement(E.a,{id:"forms",className:"py-3 text-center",onSubmit:g(w)},n.a.createElement(m.a,null,n.a.createElement(s.a,{lg:"9"},n.a.createElement("table",{className:"table table-bordered",name:"values",ref:d({required:"Enter something!",minLength:{value:16,message:"Too short"},maxLength:{value:16,message:"Too long"}})},n.a.createElement("tbody",null,Array.from({length:a}).map((function(e,t){return n.a.createElement("tr",{key:t},Array.from({length:a}).map((function(e,r){return n.a.createElement("td",{key:t*a+r},n.a.createElement("input",{defaultValue:y.charAt(t*a+r),maxLength:"1",name:"letter",ref:d({required:!0}),id:t*a+r,tabIndex:t*a+r,onKeyUp:x,type:"text",style:{height:"2.15em"}}))})))}))))),n.a.createElement(s.a,{lg:"3"},p.letter&&n.a.createElement("p",null,"Some values are not filled"),n.a.createElement("p",null,"To reset all, refresh the page"),n.a.createElement(f.a,{type:"submit",tabIndex:Math.pow(a,2),variant:"dark",size:"lg"},"Set Grid!")))),n.a.createElement("form",{className:"text-center p-3",name:"next"},n.a.createElement("p",null,"current word: ")," ",n.a.createElement("h1",null," ",t," "),n.a.createElement("br",null),n.a.createElement(f.a,{variant:"dark",onClick:function(){e.nextClick()}},"Next Word!"),n.a.createElement("p",null,"Click once and then use SPACE or ENTER")))};var p=function(e){var t=e.directions,a=e.size;if(console.log(t.length),Array.isArray(t)&&0==t.length)return n.a.createElement("div",null);for(var r=[],l=Math.floor(t[0]/a),o=t[0]%a,c=1;c<t.length;c++){var m=Math.floor(t[c]/a),s=100*o+50,u=100*l+50,i=100*(t[c]%a)+50,d=100*m+50;r.push([s,u,i,d]),console.log(s,u,i,d),l=Math.floor(t[c]/a),o=t[c]%a}return n.a.createElement("div",null,n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400",className:"mt-2"},n.a.createElement("circle",{cx:r[0][0],cy:r[0][1],r:"15",stroke:"black",strokeWidth:"3",fill:"red"}),n.a.createElement("defs",null,n.a.createElement("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"0",refY:"3.5",orient:"auto"},n.a.createElement("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#ffcc99",stroke:"black"}))),r.map((function(e,t){return n.a.createElement("line",{x1:e[0],y1:e[1],x2:e[2],y2:e[3],stroke:"#990000",strokeWidth:"2",markerEnd:"url(#arrowhead)",key:t})}))))};var v=function(e){var t=e.words;return Array.isArray(t)&&0==t.length?n.a.createElement("div",null):n.a.createElement("div",{className:"border border-dark rounded"},n.a.createElement("h3",null,"All Words"),n.a.createElement(m.a,null,t.map((function(e,t){return n.a.createElement(s.a,{key:e,xs:"6",sm:"4",md:"3",lg:"2"},e[0])}))))},b=a(33),y=a.n(b),k=a(35),w=a(34),x=a(21);var N=function(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)([]),i=Object(c.a)(o,2),d=i[0],h=i[1],E=Object(r.useState)(null),b=Object(c.a)(E,2),N=b[0],S=b[1],j=Object(r.useState)(0),O=Object(c.a)(j,2),C=O[0],A=O[1],W=Object(r.useState)(4),M=Object(c.a)(W,2),T=M[0],z=(M[1],Object(r.useState)([])),L=Object(c.a)(z,2),q=L[0],B=L[1],I="https://stevenyao.pythonanywhere.com/solve_this/";return Object(r.useEffect)((function(){null!=a&&y.a.post(I,{letters:a,size:T}).then((function(e){B(e.data.answer)}),(function(e){console.log(e)})),A(0)}),[I,a]),Object(r.useEffect)((function(){null!==a&&q!==[]&&(h(q[C][1]),S(q[C][0]),A(C+1))}),[q]),n.a.createElement("div",{className:"bg-light"},n.a.createElement(x.a,{bg:"dark",variant:"dark"},n.a.createElement(x.a.Brand,{href:"#home",className:"pl-3"},"Word Hunt Solver")),n.a.createElement(w.a,{className:"p-3 bg-white"},n.a.createElement(k.a,null,n.a.createElement("h1",null,"Never Lose WordHunt Again!"),n.a.createElement("p",null,"Simply enter the 16 letters of your word hunt board and watch as the solutions magically appear. Check out my YouTube for more quality content:"),n.a.createElement(f.a,{href:"https://www.youtube.com/channel/UCZDp6CvSxKBEKycW4dpHIJQ",variant:"dark",size:"lg"},"Go to YouTube")),n.a.createElement(m.a,null,n.a.createElement(s.a,{md:"6"},n.a.createElement("h1",{className:"text-center"},"Enter your letters"),n.a.createElement(g,{onClick:function(e){l(e)},nextClick:function(){null!==a&&(h(q[C][1]),S(q[C][0]),A(C+1))},currWord:N,size:T})),n.a.createElement(s.a,{md:"6"},n.a.createElement("div",{className:"parent px-1"},n.a.createElement(u,{letters:a}),n.a.createElement("div",{className:"child"},n.a.createElement(p,{directions:d,size:T}))))),n.a.createElement("div",{className:"mt-3"},n.a.createElement(v,{words:q}))),n.a.createElement("footer",{className:"bg-dark text-light text-center text-xs p-3 absolute bottom-0 w-full to-bottom"},"\xa9 Copyright Steven Yao 2020"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.0eb859f2.chunk.js.map