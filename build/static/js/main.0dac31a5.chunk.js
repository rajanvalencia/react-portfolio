(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,function(e,t,a){e.exports=a.p+"static/media/image1.768998c6.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/image2.8de6195d.jpg"},function(e,t,a){e.exports=a.p+"static/media/image3.28470933.jpg"},function(e,t,a){e.exports=a.p+"static/media/image4.0b37f434.jpg"},function(e,t,a){e.exports=a.p+"static/media/image5.8d16c4af.jpg"},function(e,t,a){e.exports=a.p+"static/media/image6.62b7cc75.jpg"},function(e,t,a){e.exports=a.p+"static/media/rajanvalencia.b737e977.JPG"},,,,,function(e,t,a){e.exports=a.p+"static/media/male.a82ab1cd.png"},,function(e,t,a){e.exports=a.p+"static/media/white_logo_transparent_background.6cf85f0a.png"},function(e,t,a){e.exports=a.p+"static/media/logo_transparent_background.83c24008.png"},function(e,t,a){e.exports=a.p+"static/media/earth.67af05e1.jpg"},function(e,t,a){e.exports=a(43)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),o=a.n(c),r=(a(29),a(30),a(31),a(32),a(33),a(34),a(35),a(36),a(37),a(1)),u=a.n(r);u.a.easing.jswing=u.a.easing.swing,u.a.extend(u.a.easing,{def:"easeOutQuad",swing:function(e,t,a,n,l){return u.a.easing[u.a.easing.def](e,t,a,n,l)},easeInQuad:function(e,t,a,n,l){return n*(t/=l)*t+a},easeOutQuad:function(e,t,a,n,l){return-n*(t/=l)*(t-2)+a},easeInOutQuad:function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t+a:-n/2*(--t*(t-2)-1)+a},easeInCubic:function(e,t,a,n,l){return n*(t/=l)*t*t+a},easeOutCubic:function(e,t,a,n,l){return n*((t=t/l-1)*t*t+1)+a},easeInOutCubic:function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t*t+a:n/2*((t-=2)*t*t+2)+a},easeInQuart:function(e,t,a,n,l){return n*(t/=l)*t*t*t+a},easeOutQuart:function(e,t,a,n,l){return-n*((t=t/l-1)*t*t*t-1)+a},easeInOutQuart:function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t*t*t+a:-n/2*((t-=2)*t*t*t-2)+a},easeInQuint:function(e,t,a,n,l){return n*(t/=l)*t*t*t*t+a},easeOutQuint:function(e,t,a,n,l){return n*((t=t/l-1)*t*t*t*t+1)+a},easeInOutQuint:function(e,t,a,n,l){return(t/=l/2)<1?n/2*t*t*t*t*t+a:n/2*((t-=2)*t*t*t*t+2)+a},easeInSine:function(e,t,a,n,l){return-n*Math.cos(t/l*(Math.PI/2))+n+a},easeOutSine:function(e,t,a,n,l){return n*Math.sin(t/l*(Math.PI/2))+a},easeInOutSine:function(e,t,a,n,l){return-n/2*(Math.cos(Math.PI*t/l)-1)+a},easeInExpo:function(e,t,a,n,l){return 0===t?a:n*Math.pow(2,10*(t/l-1))+a},easeOutExpo:function(e,t,a,n,l){return t===l?a+n:n*(1-Math.pow(2,-10*t/l))+a},easeInOutExpo:function(e,t,a,n,l){return 0===t?a:t===l?a+n:(t/=l/2)<1?n/2*Math.pow(2,10*(t-1))+a:n/2*(2-Math.pow(2,-10*--t))+a},easeInCirc:function(e,t,a,n,l){return-n*(Math.sqrt(1-(t/=l)*t)-1)+a},easeOutCirc:function(e,t,a,n,l){return n*Math.sqrt(1-(t=t/l-1)*t)+a},easeInOutCirc:function(e,t,a,n,l){return(t/=l/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+a:n/2*(Math.sqrt(1-(t-=2)*t)+1)+a},easeInElastic:function(e,t,a,n,l){var c=1.70158,o=0,r=n;if(0===t)return a;if(1===(t/=l))return a+n;if(o||(o=.3*l),r<Math.abs(n)){r=n;c=o/4}else c=o/(2*Math.PI)*Math.asin(n/r);return-r*Math.pow(2,10*(t-=1))*Math.sin((t*l-c)*(2*Math.PI)/o)+a},easeOutElastic:function(e,t,a,n,l){var c=1.70158,o=0,r=n;if(0===t)return a;if(1===(t/=l))return a+n;if(o||(o=.3*l),r<Math.abs(n)){r=n;c=o/4}else c=o/(2*Math.PI)*Math.asin(n/r);return r*Math.pow(2,-10*t)*Math.sin((t*l-c)*(2*Math.PI)/o)+n+a},easeInOutElastic:function(e,t,a,n,l){var c=1.70158,o=0,r=n;if(0===t)return a;if(2===(t/=l/2))return a+n;if(o||(o=l*(.3*1.5)),r<Math.abs(n)){r=n;c=o/4}else c=o/(2*Math.PI)*Math.asin(n/r);return t<1?r*Math.pow(2,10*(t-=1))*Math.sin((t*l-c)*(2*Math.PI)/o)*-.5+a:r*Math.pow(2,-10*(t-=1))*Math.sin((t*l-c)*(2*Math.PI)/o)*.5+n+a},easeInBack:function(e,t,a,n,l,c){return void 0===c&&(c=1.70158),n*(t/=l)*t*((c+1)*t-c)+a},easeOutBack:function(e,t,a,n,l,c){return void 0===c&&(c=1.70158),n*((t=t/l-1)*t*((c+1)*t+c)+1)+a},easeInOutBack:function(e,t,a,n,l,c){return void 0===c&&(c=1.70158),(t/=l/2)<1?n/2*(t*t*((1+(c*=1.525))*t-c))+a:n/2*((t-=2)*t*((1+(c*=1.525))*t+c)+2)+a},easeInBounce:function(e,t,a,n,l){return n-u.a.easing.easeOutBounce(e,l-t,0,n,l)+a},easeOutBounce:function(e,t,a,n,l){return(t/=l)<1/2.75?n*(7.5625*t*t)+a:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+a:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+a:n*(7.5625*(t-=2.625/2.75)*t+.984375)+a},easeInOutBounce:function(e,t,a,n,l){return t<l/2?.5*u.a.easing.easeInBounce(e,2*t,0,n,l)+a:.5*u.a.easing.easeOutBounce(e,2*t-l,0,n,l)+.5*n+a}});a(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(4),s=a(5),p=a(7),m=a(6),h=a(14),b=a.n(h),d=a(19),f=a.n(d),E=(l.a.Component,a(3)),g=a(16),v=a.n(g),k=a(20),M=a(15),y=(a(42),a(8)),O=a.n(y),j=a(21),_=a.n(j),D=a(22),w=a.n(D);function x(){var e=Object(n.useState)(!1),t=Object(M.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({MultiYouthCEO_English:!0,MultiYouthCEO_Japanese:!0,FullstackWebDeveloper_English:!1,FullstackWebDeveloper_Japanese:!1,TheMulticulturalYouthProjectDeputyRepesentative_English:!1,TheMulticulturalYouthProjectDeputyRepesentative_Japanese:!1}),r=Object(M.a)(o,2),u=r[0],i=r[1],s=Object(n.useState)({MultiYouthCEO_English:!1,MultiYouthCEO_Japanese:!1,FullstackWebDeveloper_English:!1,FullstackWebDeveloper_Japanese:!1,TheMulticulturalYouthProjectDeputyRepesentative_English:!1,TheMulticulturalYouthProjectDeputyRepesentative_Japanese:!1}),p=Object(M.a)(s,2),m=p[0],h=p[1];Object(n.useEffect)((function(){function e(){return(e=Object(k.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,setTimeout(d,1e3);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m]);var d=function(){m.MultiYouthCEO_English&&m.MultiYouthCEO_Japanese&&(i(Object(E.a)({},u,{MultiYouthCEO_English:!1,MultiYouthCEO_Japanese:!1,FullstackWebDeveloper_English:!0,FullstackWebDeveloper_Japanese:!0})),h(Object(E.a)({},m,{MultiYouthCEO_English:!1,MultiYouthCEO_Japanese:!1}))),m.FullstackWebDeveloper_English&&m.FullstackWebDeveloper_Japanese&&(i(Object(E.a)({},u,{FullstackWebDeveloper_English:!1,FullstackWebDeveloper_Japanese:!1,TheMulticulturalYouthProjectDeputyRepesentative_English:!0,TheMulticulturalYouthProjectDeputyRepesentative_Japanese:!0})),h(Object(E.a)({},m,{FullstackWebDeveloper_English:!1,FullstackWebDeveloper_Japanese:!1}))),m.TheMulticulturalYouthProjectDeputyRepesentative_English&&m.TheMulticulturalYouthProjectDeputyRepesentative_Japanese&&(i(Object(E.a)({},u,{TheMulticulturalYouthProjectDeputyRepesentative_English:!1,TheMulticulturalYouthProjectDeputyRepesentative_Japanese:!1,MultiYouthCEO_English:!0,MultiYouthCEO_Japanese:!0})),h(Object(E.a)({},m,{TheMulticulturalYouthProjectDeputyRepesentative_English:!1,TheMulticulturalYouthProjectDeputyRepesentative_Japanese:!1})))};return l.a.createElement("div",{id:"home",className:"intro route bg-image background"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{id:"stars2"}),l.a.createElement("div",{id:"stars3"}),l.a.createElement("div",{className:"intro-content display-table"},l.a.createElement("div",{className:"table-cell"},l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:b.a,alt:"logo",style:{maxWidth:"60px",borderRadius:"50%"}}),l.a.createElement("h3",{className:"mb-4",style:{color:"#fff"}},"Yamazaki Rajan Valencia"),l.a.createElement("p",{className:"intro-subtitle"},l.a.createElement("span",{className:"text-slider-items"}),l.a.createElement("strong",{className:"text-slider"},u.MultiYouthCEO_English&&u.MultiYouthCEO_Japanese?l.a.createElement(n.Fragment,null,l.a.createElement(O.a,{strings:["MultiYouth Founder \u30fb CEO"],style:{fontSize:"20px"},typeSpeed:50,backDelay:1100,backSpeed:90,onComplete:function(){h(Object(E.a)({},m,{MultiYouthCEO_English:!0}))}}),l.a.createElement("br",null),l.a.createElement(O.a,{strings:["MultiYouth \u5275\u7acb\u8005 \u30fb \u6700\u9ad8\u7d4c\u55b6\u8cac\u4efb\u8005"],style:{fontSize:"20px"},typeSpeed:50,backDelay:1100,backSpeed:90,onComplete:function(){h(Object(E.a)({},m,{MultiYouthCEO_Japanese:!0}))}})):null,u.FullstackWebDeveloper_English&&u.FullstackWebDeveloper_Japanese?l.a.createElement(n.Fragment,null,l.a.createElement(O.a,{strings:["Full Stack Web Developer"],style:{fontSize:"20px"},typeSpeed:40,backDelay:1100,backSpeed:90,onComplete:function(){h(Object(E.a)({},m,{FullstackWebDeveloper_English:!0}))}}),l.a.createElement("br",null),l.a.createElement(O.a,{strings:["\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u30a8\u30f3\u30b8\u30cb\u30a2"],style:{fontSize:"20px"},typeSpeed:90,backDelay:1100,backSpeed:90,onComplete:function(){h(Object(E.a)({},m,{FullstackWebDeveloper_Japanese:!0}))}})):null,u.TheMulticulturalYouthProjectDeputyRepesentative_English&&u.TheMulticulturalYouthProjectDeputyRepesentative_Japanese?l.a.createElement(n.Fragment,null,l.a.createElement(O.a,{strings:["The Multicultural Youth Project Deputy Representative"],style:{fontSize:"20px"},typeSpeed:20,backDelay:1100,backSpeed:90,start:u.TheMulticulturalYouthProjectDeputyRepesentative_English,onComplete:function(){h(Object(E.a)({},m,{TheMulticulturalYouthProjectDeputyRepesentative_English:!0}))}}),l.a.createElement("br",null),l.a.createElement(O.a,{strings:["\u591a\u6587\u5316\u30e6\u30fc\u30b9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u526f\u4ee3\u8868"],style:{fontSize:"20px"},typeSpeed:90,backDelay:1100,backSpeed:90,onComplete:function(){h(Object(E.a)({},m,{TheMulticulturalYouthProjectDeputyRepesentative_Japanese:!0}))}})):null)),l.a.createElement("div",{style:{maxWidth:"400px",display:"block",marginRight:"auto",marginLeft:"auto"}},l.a.createElement("p",{className:"pt-1"},l.a.createElement("a",{className:"btn btn-outline-light btn btn-block js-scroll px-4",href:"http://multiyouth.com",role:"button",onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)}},l.a.createElement("img",{src:a?w.a:_.a,width:"100",alt:"",style:{borderRadius:"8px",marginRight:"10px"}}),"MultiYouth (\u8fd1\u65e5\u516c\u958b)")),l.a.createElement("p",{className:"pt-1"},l.a.createElement("a",{className:"btn btn-outline-light btn btn-block js-scroll px-4",href:"http://multiyouth.com/multiculturalyouth",role:"button"},"\u591a\u6587\u5316\u30e6\u30fc\u30b9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8")),l.a.createElement("p",{className:"pt-1"},l.a.createElement("a",{className:"btn btn-outline-light btn btn-block js-scroll px-4",href:"http://github.com/rajanvalencia",role:"button"},"Github")),l.a.createElement("p",{className:"pt-1"},l.a.createElement("a",{className:"btn btn-outline-light btn btn-block js-scroll px-4",href:"http://instagram.com/rajanvalencia",role:"button"},"Instagram")),l.a.createElement("p",{className:"pt-1"},l.a.createElement("a",{className:"btn btn-outline-light btn btn-block js-scroll px-4",href:"http://facebook.com/rajanvalencia",role:"button"},"Facebook")),l.a.createElement("p",{className:"pt-1"},l.a.createElement("a",{className:"btn btn-outline-light btn btn-block js-scroll px-4",href:"http://twitter.com/rajanvalencia",role:"button"},"Twitter")))))))}var C=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={skills:[{id:"HTML5_skill",content:"HTML5",porcentage:"80%",value:"80"},{id:"CSS3_skill",content:"CSS3",porcentage:"75%",value:"75"},{id:"JavaScript_skill",content:"JavaScript",porcentage:"90%",value:"90"},{id:"PHP_skill",content:"PHP",porcentage:"70%",value:"70"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"80%",value:"80"},{id:"Python_skill",content:"Python",porcentage:"75%",value:"75"},{id:"VanillaJS_skill",content:"VanillaJS",porcentage:"85%",value:"85"},{id:"Wordpress_skill",content:"Wordpress",porcentage:"80%",value:"80"}],about_me:[{id:"first-p-about",content:"Just another software engineer."},{id:"second-p-about",content:""},{id:"third-p-about",content:""}]},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route",style:{backgroundColor:"#121212"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"box-shadow-full",style:{backgroundColor:"#222222"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"skill-mf"},l.a.createElement("img",{src:"https://github-readme-stats.vercel.app/api?username=rajanvalencia&count_private=true&show_icons=true&theme=dark",alt:"",style:{width:"100%"}}),l.a.createElement("img",{src:"https://github-readme-streak-stats.herokuapp.com/?user=rajanvalencia&theme=dark",alt:"",style:{width:"100%"}}),l.a.createElement("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=rajanvalencia&count_private=true&layout=compact&show_icons=true&theme=dark",alt:"",style:{width:"100%"}}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"about-me pt-4 pt-md-0",style:{color:"#9e9e9e"}},l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left",style:{color:"#cfcfcf"}},"About Me")),this.state.about_me.map((function(e){return l.a.createElement("p",{className:"lead",key:e.id},e.content)}))))))))))}}]),a}(l.a.Component),S=a(2),Y=a.n(S),I=a(9),N=a.n(I),P=a(10),J=a.n(P),R=a(11),F=a.n(R),T=a(12),W=a.n(T),B=a(13),Q=a.n(B),q=(l.a.Component,a(23)),L=a.n(q),z=(l.a.Component,function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){u()(".back-to-top").click((function(){return u()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return l.a.createElement("a",{href:"#",className:"back-to-top animated",style:{backgroundColor:"#626262"}},l.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),a}(l.a.Component)),H=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){u()(window).on("load",(function(){u()("#preloader").length&&u()("#preloader").delay(100).fadeOut("slow",(function(){u()(this).remove()}))}))}},{key:"render",value:function(){return l.a.createElement("div",{id:"preloader"})}}]),a}(l.a.Component);o.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),l.a.createElement(x,null),l.a.createElement(C,null),l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,1,2]]]);
//# sourceMappingURL=main.0dac31a5.chunk.js.map