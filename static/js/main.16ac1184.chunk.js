(this["webpackJsonpkursat.github.io"]=this["webpackJsonpkursat.github.io"]||[]).push([[0],{145:function(e,t,a){e.exports=a(451)},450:function(e,t,a){},451:function(e,t,a){"use strict";a.r(t);var n=a(459),c=a(0),o=a.n(c),r=a(10),l=a.n(r),i=a(25),s=a(29),u=a(457),m=a(11),d=u.f.create({position:m.a.BOTTOM_RIGHT,canEscapeKeyClear:!0,maxToasts:1,usePortal:!0}),E=o.a.createContext(),p=function(e){return o.a.createElement(E.Provider,{value:{toaster:d}},e.children)};var h=function(){return o.a.createElement("div",null,"My CV will be here soon.")},f=a(1),b=a(82),g=a.n(b),T=a(28),v=function(){var e=Object(i.c)((function(e){return e.posts}));return o.a.createElement("ul",{className:f.a.LIST_UNSTYLED},e.map((function(e){return o.a.createElement("li",null,o.a.createElement(T.a,{to:"/post/".concat(e.fileName)},e.title),o.a.createElement("span",null," ",g()(e.date).format("DD-MM-YYYY")))})))},N=a(33),O=function(){return o.a.createElement(u.b,null,o.a.createElement(u.d,{align:N.a.LEFT},o.a.createElement(u.e,null,o.a.createElement(T.a,{to:"/"},"K\xfcr\u015fat Yi\u011fito\u011flu - Senior React Developer"))),o.a.createElement(u.d,{align:N.a.RIGHT},o.a.createElement(u.c,null),o.a.createElement(T.a,{to:"/",className:[f.a.BUTTON,f.a.MINIMAL].join(" ")},o.a.createElement(u.a,{icon:"home"}),o.a.createElement("span",{className:f.a.BUTTON_TEXT},"Home")),o.a.createElement(T.a,{to:"/projects",className:[f.a.BUTTON,f.a.MINIMAL].join(" ")},o.a.createElement(u.a,{icon:"projects"}),o.a.createElement("span",{className:f.a.BUTTON_TEXT},"Projects")),o.a.createElement(T.a,{to:"/blog",className:[f.a.BUTTON,f.a.MINIMAL].join(" ")},o.a.createElement(u.a,{icon:"text-highlight"}),o.a.createElement("span",{className:f.a.BUTTON_TEXT},"Blog"))))},j=function(e){var t=e.children,a=Object(i.b)();return Object(c.useEffect)((function(){a((function(e){e({type:"FETCH_POSTS",payload:fetch("/metadata.json").then((function(e){return e.json()}))})}))}),[a]),o.a.createElement("div",{className:"layout"},o.a.createElement(O,null),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"container"},t)))},w=a(94),y=a(83),M=a(84),S=a.n(M),I=a(85),x=/^---([\S\s]*)---\n/g,C=a(27),L=a(458),_=a(456),k=function(e){var t=e.language,a=e.value,n=Object(c.useContext)(E).toaster;return"embed"===t?o.a.createElement("div",{className:"embed",dangerouslySetInnerHTML:{__html:a}}):o.a.createElement("div",{onContextMenu:function(e){e.preventDefault(),e.stopPropagation(),function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(a),n.show({intent:C.a.PRIMARY,message:"Copied to clipboard!",timeout:1e3,icon:"clipboard"})}},o.a.createElement(L.a,{showLineNumbers:!0,language:t,style:_.a},a))},B=function(e){var t=e.match.params.name,a=Object(c.useState)(!1),n=Object(w.a)(a,2),r=n[0],l=n[1],s=Object(i.c)((function(e){return e.posts.find((function(e){return e.fileName===t}))}));return Object(c.useEffect)((function(){fetch("".concat("https://raw.githubusercontent.com/kursat/kursat.github.io/master/blog-content","/").concat(t)).then((function(e){return e.text()})).then((function(e){return e.replace(x,"")})).then((function(e){return setTimeout((function(){l(e)}),0)}))}),[t]),o.a.createElement(o.a.Fragment,null,r?o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,s&&s.title),o.a.createElement(S.a,{renderers:{code:k},source:r}),o.a.createElement(y.DiscussionEmbed,{shortname:"kursat-github-io",config:{url:window.location.href.replace("#",""),identifier:window.location.href.replace("#",""),title:t}})):o.a.createElement("div",{className:"center-flex"},o.a.createElement(I.MagicSpinner,{size:100,color:"#5c7080",loading:!0})))},P=a(17),D=a(59),F=a(90),U=a(91),Y=a(92),A=a(93),H=a.n(A),R={};var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAMPLE_ACTION_TYPE":default:return e}},X=[];var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat("FETCH_POSTS","_FULFILLED"):return t.payload.sort((function(e,t){return e.date<t.date}));default:return e}},J=Object(P.combineReducers)({app:W,posts:G}),K={key:"root",storage:H.a,whitelist:["app"]},z=Object(D.a)(K,J),V=Object(F.composeWithDevTools)({}),$=Object(P.createStore)(z,V(Object(P.applyMiddleware)(U.a,Y.a)));Object(D.b)($),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(450);n.a.onlyShowFocusOnTabs(),l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:$},o.a.createElement(s.c,null,o.a.createElement(p,null,o.a.createElement(j,null,o.a.createElement(s.a,{exact:!0,path:"/",component:h}),o.a.createElement(s.a,{exact:!0,path:"/blog",component:v}),o.a.createElement(s.a,{exact:!0,path:"/post/:name",component:B})))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.16ac1184.chunk.js.map