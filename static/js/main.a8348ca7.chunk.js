(this.webpackJsonpproj2=this.webpackJsonpproj2||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),r=a.n(s),i=(a(11),a(3)),j=a.n(i),o=a(6),u=a(4),l=(a(13),a(0)),d=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Pune"),r=Object(u.a)(s,2),i=r[0],d=r[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=metric&appid=5406a726c586afca03ee2a68f7f9f5d4"),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n(c.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("div",{className:"inputData",children:Object(l.jsx)("input",{type:"search",value:i,className:"inputField",onChange:function(e){d(e.target.value)}})}),a?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("h2",{className:"location",children:Object(l.jsx)("i",{className:"fas fa-street-view",children:i})}),Object(l.jsxs)("h1",{className:"temp",children:[a.temp," \xb0C"]}),Object(l.jsxs)("h3",{className:"tempmin_max",children:["Min : ",a.temp_min,"  \xb0C  |  Max : ",a.temp_max,"  \xb0C"]})]}),Object(l.jsx)("div",{className:"wave -one"}),Object(l.jsx)("div",{className:"wave -two"}),Object(l.jsx)("div",{className:"wave -three"})]}):Object(l.jsx)("p",{className:"errorMsg",children:"No data found"})]})})};var m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(d,{})})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a8348ca7.chunk.js.map