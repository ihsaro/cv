(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/not-available.9322a920.png"},,function(e,t,a){e.exports=a.p+"static/media/profile_picture.8bd2ee7d.jpg"},function(e,t,a){e.exports=a.p+"static/media/user-graduate.d5111914.png"},function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e){e.exports=JSON.parse('{"PersonalDetailItems":[{"title":"DATE OF BIRTH","content":"21/11/1997"},{"title":"EMAIL ADDRESS","content":"idjazhossanee@gmail.com"},{"title":"COUNTRY","content":"Mauritius"},{"title":"LANGUAGE","content":"English | French | Mauritian Creole"}]}')},function(e,t,a){},function(e){e.exports=JSON.parse('{"SkillRatingProgressBarItems":[{"color":"#EF5350","title":"HTML","rating":"65"},{"color":"#EC407A","title":"CSS","rating":"50"},{"color":"#AB47BC","title":"Javascript","rating":"70"},{"color":"#7E57C2","title":"Java","rating":"80"},{"color":"#5C6BC0","title":"C#","rating":"80"},{"color":"#42A5F5","title":"SQL","rating":"65"},{"color":"#26A69A","title":"Git","rating":"50"},{"color":"#66BB6A","title":"Linux","rating":"60"},{"color":"#FFA726","title":"Typescript","rating":"60"},{"color":"#78909C","title":"React JS","rating":"50"}]}')},function(e,t,a){},function(e,t,a){},function(e){e.exports=JSON.parse('{"EducationCardItems":[{"title":"BACHELOR\'S DEGREE","location":"University of Mauritius","year":"2016 - 2019","results":[{"subject":"BSc (Hons) Computer Science","result":"First class with honors"}]},{"title":"HIGHER SCHOOL CERTIFICATE","location":"Sir Abdool Raman Osman State College","year":"2015","results":[{"subject":"Mathematics","result":"A"},{"subject":"Physics","result":"B"},{"subject":"Computer Science","result":"C"},{"subject":"General Paper","result":"d"},{"subject":"Physical Education","result":"d"}]},{"title":"SCHOOL CERTIFICATE","location":"Sir Abdool Raman Osman State College","year":"2013","results":[{"subject":"Mathematics","result":"2"},{"subject":"English","result":"3"},{"subject":"French","result":"1"},{"subject":"Additional Mathematics","result":"3"},{"subject":"Computer Science","result":"2"},{"subject":"Physics","result":"3"},{"subject":"Design & Technology","result":"3"},{"subject":"Physical Education","result":"2"}]}]}')},function(e){e.exports=JSON.parse('{"NavigationBarBrand":"Idjaz Hossanee","NavigationBarItems":[{"Name":"Home","FontAwesomeIcon":"fa fa-home","Link":"#home"},{"Name":"Education","FontAwesomeIcon":"fa fa-university","Link":"#education"},{"Name":"Skills","FontAwesomeIcon":"fa fa-tools","Link":"#skills"},{"Name":"Projects","FontAwesomeIcon":"fa fa-laptop","Link":"#projects"},{"Name":"Contact","FontAwesomeIcon":"fa fa-phone","Link":"#contact"}]}')},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),l=(a(17),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),d=(a(18),function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.adaptNavigationBar)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.adaptNavigationBar)}},{key:"render",value:function(){return o.a.createElement("nav",{id:"nav-bar",className:"navbar navbar-expand-md fixed-top bg-light navbar-light"},o.a.createElement("a",{id:"brand",className:"navbar-brand",href:"#"},this.props.jsonResource.NavigationBarBrand),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},o.a.createElement("ul",{className:"navbar-nav"},this.props.jsonResource.NavigationBarItems.map((function(e){return o.a.createElement("li",{key:e.Name,className:"nav-item nav-item-hover-background-change-light"},o.a.createElement("a",{className:"nav-link",href:e.Link},o.a.createElement("i",{className:"".concat(e.FontAwesomeIcon," nav-bar-icon-right-padding")}),e.Name))})))))}},{key:"adaptNavigationBar",value:function(){var e=document.getElementById("nav-bar"),t=document.getElementsByClassName("nav-item");if(null!=e)if(0===document.documentElement.scrollTop){e.classList.remove("navbar-dark"),e.classList.remove("bg-dark"),e.classList.add("navbar-light"),e.classList.add("bg-light");for(var a=0;a<t.length;a++)t[a].classList.remove("nav-item-hover-background-change-dark"),t[a].classList.add("nav-item-hover-background-change-light")}else{e.classList.remove("navbar-light"),e.classList.remove("bg-light"),e.classList.add("navbar-dark"),e.classList.add("bg-dark");for(var n=0;n<t.length;n++)t[n].classList.remove("nav-item-hover-background-change-light"),t[n].classList.add("nav-item-hover-background-change-dark")}}}]),t}(o.a.Component)),b=(a(19),a(10)),h=a.n(b),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"introduction",className:"container-fluid"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("img",{id:"img-profile-picture",src:h.a,alt:"Idjaz"})),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("h1",{id:"header-name"},"IDJAZ HOSSANEE")),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("h6",{id:"header-title"},"WEBSITE IN PROGRESS, CONTENTS NOT FINALIZED")))}}]),t}(o.a.Component),v=(a(20),function(e){function t(e){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"col-md-2 text-center title-box-bg-color"},o.a.createElement("i",{className:"break-line fa-icon-color ".concat(this.props.fontAwesomeIcon)}),o.a.createElement("strong",{className:"title-box-font"},this.props.title))}}]),t}(o.a.Component)),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.jsonResource.PersonalDetailItems.map((function(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2"},o.a.createElement("strong",null,e.title)),o.a.createElement("div",{className:"col-md-10"},e.content))}))}}]),t}(o.a.Component),g=(a(21),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"home",className:"row section-top-padding"},o.a.createElement(v,{title:"Home",fontAwesomeIcon:"fa fa-home fa-5x"}),o.a.createElement("div",{className:"col-md-10"},o.a.createElement("div",{className:"container shadow p-3 mb-5 bg-white rounded content-box-container-width"},o.a.createElement("h5",{className:"content-box-header"},"ABOUT ME"),"I am a professional software developer seeking out new challenges and opportunities to grow my career. I am an open-source enthusiast who works with linux as my daily driver and I my motivation to work is to make the world a place where technology ..."),o.a.createElement("div",{className:"container shadow p-3 mb-5 bg-white rounded content-box-container-width"},o.a.createElement("h5",{className:"content-box-header"},"PERSONAL DETAILS"),o.a.createElement(E,{jsonResource:a(22)}))))}}]),t}(o.a.Component)),f=(a(23),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row"},this.props.jsonResource.SkillRatingProgressBarItems.map((function(e,t){var a={width:e.rating+"%",backgroundColor:e.color};return o.a.createElement("div",{className:"col-md-6 progress-bottom-margin"},o.a.createElement("div",null,o.a.createElement("strong",null,e.title),o.a.createElement("label",{className:"text-right-float"},e.rating,"%")),o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":e.rating,style:a})))})))}}]),t}(o.a.Component)),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"skills",className:"row section-top-padding"},o.a.createElement(v,{title:"Skills",fontAwesomeIcon:"fa fa-tools fa-5x"}),o.a.createElement("div",{className:"col-md-10"},o.a.createElement("div",{className:"container shadow p-3 mb-5 bg-white rounded content-box-container-width"},o.a.createElement("h5",{className:"content-box-header"},"SKILL RATING"),o.a.createElement(f,{jsonResource:a(24)}))))}}]),t}(o.a.Component),N=a(6),O=(a(25),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).scrollAnimation=void 0,a.goToTop=a.goToTop.bind(Object(N.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.toggleGoToTopWidget)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.toggleGoToTopWidget)}},{key:"render",value:function(){return o.a.createElement("div",{id:"divArrowGoToTop",onClick:this.goToTop},o.a.createElement("i",{className:"fa fa-arrow-up"}),o.a.createElement("label",null,"Go to top"))}},{key:"toggleGoToTopWidget",value:function(){0===document.documentElement.scrollTop?$("#divArrowGoToTop").fadeOut(500):$("#divArrowGoToTop").fadeIn(500)}},{key:"goToTop",value:function(){var e=document.body.scrollTop||document.documentElement.scrollTop;e?(window.scrollBy(0,-Math.max(1,Math.floor(e/10))),this.scrollAnimation=setTimeout(this.goToTop,15)):clearTimeout(this.scrollAnimation)}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(26);var w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row"},this.props.jsonResource.EducationCardItems.map((function(t,a){return o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("div",{className:"card education-card"},o.a.createElement("img",{className:"education-card-photo",src:e.props.cardPictures[a],alt:"..."}),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"text-center"},o.a.createElement("strong",{className:"text-center card-title line-breaker"},t.title)),o.a.createElement("label",{className:"line-breaker"},o.a.createElement("strong",null,"Location:")," ",t.location),o.a.createElement("label",{className:"line-breaker"},o.a.createElement("strong",null,"Year:")," ",t.year),o.a.createElement("table",{className:"maximize-width"},o.a.createElement("tr",null,o.a.createElement("th",null,"Subject"),o.a.createElement("th",null,"Result")),t.results.map((function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e.subject),o.a.createElement("td",null,o.a.createElement("u",null,e.result)))}))))))})))}}]),t}(o.a.Component),y=a(11),k=a.n(y),T=a(8),A=a.n(T),I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"education",className:"row section-top-padding"},o.a.createElement(v,{title:"Education",fontAwesomeIcon:"fa fa-university fa-5x"}),o.a.createElement("div",{className:"col-md-10"},o.a.createElement("div",{className:"container shadow p-3 mb-5 bg-white rounded content-box-container-width"},o.a.createElement("h5",{className:"content-box-header"},"MAIN PATH"),o.a.createElement(w,{cardPictures:[k.a,A.a,A.a],jsonResource:a(27)}))))}}]),t}(o.a.Component);c.a.render(o.a.createElement(d,{jsonResource:a(28)}),document.getElementById("header")),c.a.render([o.a.createElement(p,null),o.a.createElement(g,null),o.a.createElement(I,null),o.a.createElement(j,null)],document.getElementById("main")),c.a.render(o.a.createElement(O,null),document.getElementById("footer")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.da79cf2f.chunk.js.map