(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/profile_picture.8bd2ee7d.jpg"},function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e){e.exports=JSON.parse('{"PersonalDetailItems":[{"title":"DATE OF BIRTH","content":"21/11/1997"},{"title":"EMAIL ADDRESS","content":"idjazhossanee@gmail.com"},{"title":"COUNTRY","content":"Mauritius"},{"title":"LANGUAGE","content":"English | French | Mauritian Creole"}]}')},function(e,t,a){},function(e){e.exports=JSON.parse('{"SkillRatingProgressBarItems":[{"color":"#EF5350","title":"HTML","rating":"65"},{"color":"#EC407A","title":"CSS","rating":"50"},{"color":"#AB47BC","title":"Javascript","rating":"70"},{"color":"#7E57C2","title":"Java","rating":"80"},{"color":"#5C6BC0","title":"C#","rating":"80"},{"color":"#42A5F5","title":"SQL","rating":"65"},{"color":"#26A69A","title":"Git","rating":"50"},{"color":"#66BB6A","title":"Linux","rating":"60"},{"color":"#FFA726","title":"Typescript","rating":"60"},{"color":"#78909C","title":"React JS","rating":"50"}]}')},,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/guess-the-number-react.905f3f19.png"},function(e,t,a){},function(e){e.exports=JSON.parse('{"SocialMediaWidgetItems":[{"icon":"fab fa-facebook","url":"https://www.facebook.com/idjaz.hossanee.90"}]}')},function(e,t,a){},function(e,t,a){},function(e,t,a){var n={"./not-available.png":32,"./user-graduate.png":33};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=31},function(e,t,a){e.exports=a.p+"static/media/not-available.9322a920.png"},function(e,t,a){e.exports=a.p+"static/media/user-graduate.d5111914.png"},function(e){e.exports=JSON.parse('{"EducationCardItems":[{"title":"BACHELOR\'S DEGREE","location":"University of Mauritius","year":"2016 - 2019","image":"user-graduate.png","results":[{"subject":"BSc (Hons) Computer Science","result":"First class with honors"}]},{"title":"HIGHER SCHOOL CERTIFICATE","location":"Sir Abdool Raman Osman State College","year":"2015","image":"not-available.png","results":[{"subject":"Mathematics","result":"A"},{"subject":"Physics","result":"B"},{"subject":"Computer Science","result":"C"},{"subject":"General Paper","result":"d"},{"subject":"Physical Education","result":"d"}]},{"title":"SCHOOL CERTIFICATE","location":"Sir Abdool Raman Osman State College","year":"2013","image":"not-available.png","results":[{"subject":"Mathematics","result":"2"},{"subject":"English","result":"3"},{"subject":"French","result":"1"},{"subject":"Additional Mathematics","result":"3"},{"subject":"Computer Science","result":"2"},{"subject":"Physics","result":"3"},{"subject":"Design & Technology","result":"3"},{"subject":"Physical Education","result":"2"}]}]}')},function(e){e.exports=JSON.parse('{"NavigationBarBrand":"Idjaz Hossanee","NavigationBarItems":[{"Name":"Home","FontAwesomeIcon":"fa fa-home","Link":"#home"},{"Name":"Education","FontAwesomeIcon":"fa fa-university","Link":"#education"},{"Name":"Skills","FontAwesomeIcon":"fa fa-tools","Link":"#skills"},{"Name":"Projects","FontAwesomeIcon":"fa fa-laptop","Link":"#projects"},{"Name":"Contact","FontAwesomeIcon":"fa fa-phone","Link":"#contact"}]}')},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=(a(16),a(1)),s=a(2),i=a(4),m=a(3),u=a(5),d=(a(17),function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.adaptNavigationBar)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.adaptNavigationBar)}},{key:"render",value:function(){return r.a.createElement("nav",{id:"nav-bar",className:"navbar navbar-expand-md fixed-top bg-light navbar-light"},r.a.createElement("a",{id:"brand",className:"navbar-brand",href:"#"},this.props.resource.NavigationBarBrand),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},r.a.createElement("ul",{className:"navbar-nav"},this.props.resource.NavigationBarItems.map((function(e){return r.a.createElement("li",{key:e.Name,className:"nav-item nav-item-hover-background-change-light"},r.a.createElement("a",{className:"nav-link",href:e.Link},r.a.createElement("i",{className:"".concat(e.FontAwesomeIcon," nav-bar-icon-right-padding")}),e.Name))})))))}},{key:"adaptNavigationBar",value:function(){var e=document.getElementById("nav-bar"),t=document.getElementsByClassName("nav-item");if(null!=e)if(0===document.documentElement.scrollTop){e.classList.remove("navbar-dark"),e.classList.remove("bg-dark"),e.classList.add("navbar-light"),e.classList.add("bg-light");for(var a=0;a<t.length;a++)t[a].classList.remove("nav-item-hover-background-change-dark"),t[a].classList.add("nav-item-hover-background-change-light")}else{e.classList.remove("navbar-light"),e.classList.remove("bg-light"),e.classList.add("navbar-dark"),e.classList.add("bg-dark");for(var n=0;n<t.length;n++)t[n].classList.remove("nav-item-hover-background-change-light"),t[n].classList.add("nav-item-hover-background-change-dark")}}}]),t}(r.a.Component)),p=(a(18),a(10)),b=a.n(p),h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"introduction",className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("img",{id:"img-profile-picture",src:b.a,alt:"Idjaz"})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h1",{id:"header-name"},"IDJAZ HOSSANEE")),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h6",{id:"header-title"},"WEBSITE IN PROGRESS, CONTENTS NOT FINALIZED")))}}]),t}(r.a.Component),E=(a(19),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-2 text-center title-box-bg-color"},r.a.createElement("i",{className:"break-line fa-icon-color ".concat(this.props.fontAwesomeIcon)}),r.a.createElement("strong",{className:"title-box-font"},this.props.title))}}]),t}(r.a.Component)),v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.resource.PersonalDetailItems.map((function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("strong",null,e.title)),r.a.createElement("div",{className:"col-md-10"},e.content))}))}}]),t}(r.a.Component),f=(a(20),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"row section-top-padding"},r.a.createElement(E,{title:"Home",fontAwesomeIcon:"fa fa-home fa-5x"}),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"container shadow p-3 mb-5 bg-white rounded content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"ABOUT ME"),"I am a professional software developer seeking out new challenges and opportunities to grow my career. I am an open-source enthusiast who works with linux as my daily driver and I my motivation to work is to make the world a place where technology ..."),r.a.createElement("div",{className:"container shadow p-3 mb-5 bg-white rounded content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"PERSONAL DETAILS"),r.a.createElement(v,{resource:a(21)}))))}}]),t}(r.a.Component)),g=(a(22),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.props.resource.SkillRatingProgressBarItems.map((function(e,t){var a={width:e.rating+"%",backgroundColor:e.color};return r.a.createElement("div",{className:"col-md-6 progress-bottom-margin"},r.a.createElement("div",null,r.a.createElement("strong",null,e.title),r.a.createElement("label",{className:"text-right-float"},e.rating,"%")),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":e.rating,style:a})))})))}}]),t}(r.a.Component)),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"skills",className:"row section-top-padding"},r.a.createElement(E,{title:"Skills",fontAwesomeIcon:"fa fa-tools fa-5x"}),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"container shadow p-3 mb-5 bg-white rounded content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"SKILL RATING"),r.a.createElement(g,{resource:a(23)}))))}}]),t}(r.a.Component),j=a(8),O=a.n(j),w=(a(25),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={repos:[],loading:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.populateReposData()}},{key:"renderReposCarousel",value:function(e){return r.a.createElement("div",{id:"project-carousel",className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},e.map((function(e,t){return r.a.createElement("li",{"data-target":"#project-carousel","data-slide-to":t,className:0==t?"active":""})}))),r.a.createElement("div",{className:"carousel-inner"},e.map((function(e,t){return r.a.createElement("div",{className:0==t?"carousel-item active":"carousel-item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{className:"carousel-image",src:a(26),alt:"First slide"})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h5",{style:{color:"black"}},e.name),r.a.createElement("p",null,e.description),r.a.createElement("p",null,r.a.createElement("a",{href:e.html_url,target:"_blank"},"Link to Project")))))}))),r.a.createElement("a",{className:"carousel-control-prev",href:"#project-carousel",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#project-carousel",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))}},{key:"render",value:function(){var e=this.state.loading?r.a.createElement("p",null,r.a.createElement("em",null,"Loading...")):this.renderReposCarousel(this.state.repos);return r.a.createElement("div",null,e)}},{key:"populateReposData",value:function(){var e,t;return O.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.awrap(fetch("https://api.github.com/users/ihsaro/repos"));case 2:return e=a.sent,a.next=5,O.a.awrap(e.json());case 5:t=a.sent,this.setState({repos:t,loading:!1});case 7:case"end":return a.stop()}}),null,this)}}]),t}(r.a.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"projects",className:"row section-top-padding"},r.a.createElement(E,{title:"Projects",fontAwesomeIcon:"fa fa-laptop fa-5x"}),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"container shadow p-3 mb-5 bg-white rounded content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"GITHUB PROJECTS"),r.a.createElement(w,null))))}}]),t}(r.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.resource.SocialMediaWidgetItems.map((function(e,t){return r.a.createElement("div",{className:"col-md-3"},r.a.createElement("i",{className:e.icon}))}))}}]),t}(r.a.Component),C=(a(27),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"contact",className:"row section-top-padding"},r.a.createElement(E,{title:"Contact",fontAwesomeIcon:"fa fa-phone fa-5x"}),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"container shadow p-3 mb-5 bg-white rounded content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"CONTACT"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("strong",null,"Name"),r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Enter your name",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("strong",null,"Email"),r.a.createElement("input",{className:"form-control",type:"Email",placeholder:"Enter your email"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("strong",null,"Message"),r.a.createElement("textarea",{className:"form-control",rows:3,placeholder:"Enter your message",required:!0})),r.a.createElement("button",{type:"submit",className:"btn btn-primary enlarge-button"},"Submit")))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(k,{resource:a(28)})))))}}]),t}(r.a.Component)),T=a(6),x=(a(29),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).scrollAnimation=void 0,a.goToTop=a.goToTop.bind(Object(T.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.toggleGoToTopWidget)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.toggleGoToTopWidget)}},{key:"render",value:function(){return r.a.createElement("div",{id:"divArrowGoToTop",onClick:this.goToTop},r.a.createElement("i",{className:"fa fa-arrow-up"}),r.a.createElement("label",null,"Go to top"))}},{key:"toggleGoToTopWidget",value:function(){0===document.documentElement.scrollTop?$("#divArrowGoToTop").fadeOut(500):$("#divArrowGoToTop").fadeIn(500)}},{key:"goToTop",value:function(){var e=document.body.scrollTop||document.documentElement.scrollTop;e?(window.scrollBy(0,-Math.max(1,Math.floor(e/10))),this.scrollAnimation=setTimeout(this.goToTop,15)):clearTimeout(this.scrollAnimation)}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30);var I=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.props.resource.EducationCardItems.map((function(e,t){return r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"card education-card"},r.a.createElement("img",{className:"education-card-photo",src:a(31)("./"+e.image),alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"text-center"},r.a.createElement("strong",{className:"text-center card-title line-breaker"},e.title)),r.a.createElement("label",{className:"line-breaker"},r.a.createElement("strong",null,"Location:")," ",e.location),r.a.createElement("label",{className:"line-breaker"},r.a.createElement("strong",null,"Year:")," ",e.year),r.a.createElement("table",{className:"maximize-width"},r.a.createElement("tr",null,r.a.createElement("th",null,"Subject"),r.a.createElement("th",null,"Result")),e.results.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.subject),r.a.createElement("td",null,r.a.createElement("u",null,e.result)))}))))))})))}}]),t}(r.a.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"education",className:"row section-top-padding"},r.a.createElement(E,{title:"Education",fontAwesomeIcon:"fa fa-university fa-5x"}),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"container shadow p-3 mb-5 bg-white rounded content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"MAIN PATH"),r.a.createElement(I,{resource:a(34)}))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(d,{resource:a(35)}),document.getElementById("header")),c.a.render([r.a.createElement(h,null),r.a.createElement(f,null),r.a.createElement(A,null),r.a.createElement(N,null),r.a.createElement(y,null),r.a.createElement(C,null)],document.getElementById("main")),c.a.render(r.a.createElement(x,null),document.getElementById("footer")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.60775e01.chunk.js.map