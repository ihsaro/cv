(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/profile_picture.8bd2ee7d.jpg"},function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e){e.exports=JSON.parse('{"PersonalDetailItems":[{"title":"DATE OF BIRTH","content":"21/11/1997","has_navigable_icons":"false"},{"title":"EMAIL ADDRESS","content":"idjazhossanee@gmail.com","has_navigable_icons":"false"},{"title":"COUNTRY","content":"Mauritius","has_navigable_icons":"false"},{"title":"LANGUAGE","content":"English | French | Mauritian Creole","has_navigable_icons":"false"},{"title":"SOCIAL MEDIA","has_navigable_icons":"true","navigable_icons":[{"name":"LinkedIn","icon":"fab fa-linkedin fa-2x","url":"https://www.linkedin.com/in/muhammad-idjaz-ali-hossanee-5b5913167"},{"name":"Github","icon":"fab fa-github fa-2x","url":"https://github.com/ihsaro"},{"name":"Facebook","icon":"fab fa-facebook fa-2x","url":"https://www.facebook.com/idjaz.hossanee.90"}]}]}')},function(e,a,t){},function(e){e.exports=JSON.parse('{"SkillRatingProgressBarItems":[{"color":"orange","title":"HTML","rating":"65"},{"color":"orange","title":"CSS","rating":"50"},{"color":"orange","title":"Javascript","rating":"70"},{"color":"green","title":"Java","rating":"80"},{"color":"green","title":"C#","rating":"80"},{"color":"orange","title":"SQL","rating":"65"},{"color":"orange","title":"Git","rating":"50"},{"color":"orange","title":"Linux","rating":"60"},{"color":"orange","title":"Typescript","rating":"60"},{"color":"orange","title":"React JS","rating":"50"}]}')},function(e,a,t){},function(e){e.exports=JSON.parse('{"ExperienceItem":[{"company_name":"CERIDIAN","period":"JUNE 2019 - PRESENT","role":"Associate Software Developer","description":"Maintained existing solutions using C#, Dojo, Stylus, SQL and XML/XSD as well as implementing new items using the same technologies."},{"company_name":"CERIDIAN","period":"June 2018 - August 2018","role":"Intern","description":"Developed and maintained existing solutions in ASP.NET Framework, mainly on the backend side. Additionally worked on powershell scripts."},{"company_name":"PROXIMTY BBDO","period":"June 2016 - September 2016","role":"Freelance Webmaster","description":"Maintained websites using the Sitecore CMS. Mainly edited contents with basic HTML since the architecture was already in place."}]}')},,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/image-not-available.855e8ca0.jpg"},function(e,a,t){},function(e,a,t){},function(e,a,t){var n={"./not-available.png":33,"./user-graduate.png":34};function r(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=32},function(e,a,t){e.exports=t.p+"static/media/not-available.9322a920.png"},function(e,a,t){e.exports=t.p+"static/media/user-graduate.d5111914.png"},function(e){e.exports=JSON.parse('{"EducationCardItems":[{"title":"BACHELOR\'S DEGREE","location":"University of Mauritius","year":"2016 - 2019","image":"user-graduate.png","results":[{"subject":"BSc (Hons) Computer Science","result":"First class with honors"}]},{"title":"HIGHER SCHOOL CERTIFICATE","location":"Sir Abdool Raman Osman State College","year":"2015","image":"not-available.png","results":[{"subject":"Mathematics","result":"A"},{"subject":"Physics","result":"B"},{"subject":"Computer Science","result":"C"},{"subject":"General Paper","result":"d"},{"subject":"Physical Education","result":"d"}]},{"title":"SCHOOL CERTIFICATE","location":"Sir Abdool Raman Osman State College","year":"2013","image":"not-available.png","results":[{"subject":"Mathematics","result":"2"},{"subject":"English","result":"3"},{"subject":"French","result":"1"},{"subject":"Additional Mathematics","result":"3"},{"subject":"Computer Science","result":"2"},{"subject":"Physics","result":"3"},{"subject":"Design & Technology","result":"3"},{"subject":"Physical Education","result":"2"}]}]}')},function(e){e.exports=JSON.parse('{"NavigationBarBrand":"IDJAZ HOSSANEE","NavigationBarItems":[{"Name":"HOME","FontAwesomeIcon":"fa fa-home","Link":"#home"},{"Name":"EDUCATION","FontAwesomeIcon":"fa fa-university","Link":"#education"},{"Name":"SKILLS","FontAwesomeIcon":"fa fa-tools","Link":"#skills"},{"Name":"WORK EXPERIENCE","FontAwesomeIcon":"fa fa-briefcase","Link":"#work-experience"},{"Name":"PROJECTS","FontAwesomeIcon":"fa fa-laptop","Link":"#projects"}]}')},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),o=t.n(c),i=(t(16),t(17),t(1)),l=t(2),s=t(4),m=t(3),u=t(6),d=t(5),p=(t(18),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).togglerClicked=void 0,t.togglerClicked=!1,t.changeNavigationBarColorOnSmallDevicesButtonClick=t.changeNavigationBarColorOnSmallDevicesButtonClick.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.adaptNavigationBar)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.adaptNavigationBar)}},{key:"render",value:function(){return r.a.createElement("nav",{id:"nav-bar",className:"navbar navbar-expand-md fixed-top nav-bar-light-bg navbar-light"},r.a.createElement("a",{id:"brand",className:"navbar-brand",href:"#"},this.props.resource.NavigationBarBrand),r.a.createElement("button",{onClick:this.changeNavigationBarColorOnSmallDevicesButtonClick,className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},r.a.createElement("ul",{id:"nav-items",className:"navbar-nav"},this.props.resource.NavigationBarItems.map((function(e){return r.a.createElement("li",{key:e.Name,className:"nav-item nav-item-hover-background-change-light"},r.a.createElement("a",{className:"nav-link",href:e.Link},r.a.createElement("i",{className:"".concat(e.FontAwesomeIcon," nav-bar-icon-right-padding")}),e.Name))})))))}},{key:"adaptNavigationBar",value:function(){var e=document.getElementById("nav-bar"),a=document.getElementsByClassName("nav-item");if(null!=e)if(0!==document.documentElement.scrollTop||this.togglerClicked){e.classList.remove("nav-bar-light-bg"),e.classList.remove("navbar-light"),e.classList.add("nav-bar-dark-bg"),e.classList.add("navbar-dark");for(var t=0;t<a.length;t++)a[t].classList.remove("nav-item-hover-background-change-light"),a[t].classList.add("nav-item-hover-background-change-dark")}else{e.classList.remove("nav-bar-dark-bg"),e.classList.remove("navbar-dark"),e.classList.add("nav-bar-light-bg"),e.classList.add("navbar-light");for(var n=0;n<a.length;n++)a[n].classList.remove("nav-item-hover-background-change-dark"),a[n].classList.add("nav-item-hover-background-change-light")}}},{key:"changeNavigationBarColorOnSmallDevicesButtonClick",value:function(){var e=document.getElementById("nav-bar"),a=document.getElementsByClassName("nav-item");this.togglerClicked=!this.togglerClicked,0!==document.documentElement.scrollTop?this.adaptNavigationBarToDarkBackground(e,a):this.togglerClicked?this.adaptNavigationBarToDarkBackground(e,a):this.adaptNavigationBarToLightBackground(e,a)}},{key:"adaptNavigationBarToLightBackground",value:function(e,a){e.classList.remove("nav-bar-dark-bg"),e.classList.remove("navbar-dark"),e.classList.add("nav-bar-light-bg"),e.classList.add("navbar-light");for(var t=0;t<a.length;t++)a[t].classList.remove("nav-item-hover-background-change-dark"),a[t].classList.add("nav-item-hover-background-change-light")}},{key:"adaptNavigationBarToDarkBackground",value:function(e,a){e.classList.remove("nav-bar-light-bg"),e.classList.remove("navbar-light"),e.classList.add("nav-bar-dark-bg"),e.classList.add("navbar-dark");for(var t=0;t<a.length;t++)a[t].classList.remove("nav-item-hover-background-change-light"),a[t].classList.add("nav-item-hover-background-change-dark")}}]),a}(r.a.Component)),g=(t(19),t(10)),v=t.n(g),b=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"introduction",className:"container-fluid"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("img",{id:"img-profile-picture",src:v.a,alt:"Idjaz"})),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("h1",{id:"header-name"},"IDJAZ HOSSANEE")),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("em",{id:"header-title"},"The wisest fool is the loudest")))}}]),a}(r.a.Component),h=(t(20),t(21),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return this.props.resource.PersonalDetailItems.map((function(e){return"false"===e.has_navigable_icons?r.a.createElement("div",{className:"personal-detail-item-row row"},r.a.createElement("div",{className:"col-md-2 personal-detail-item-title"},r.a.createElement("strong",null,e.title)),r.a.createElement("div",{className:"col-md-10 personal-detail-item-content"},e.content)):r.a.createElement("div",{className:"personal-detail-item-row row"},r.a.createElement("div",{className:"col-md-2 personal-detail-item-title"},r.a.createElement("strong",null,e.title)),e.navigable_icons.map((function(e){return r.a.createElement("div",{className:"col-md-1 col-sm-3 col-xs-3 personal-detail-item-navigable_icon"},r.a.createElement("a",{href:e.url,className:"icon-url",target:"_blank"},r.a.createElement("div",{className:"url-div"},r.a.createElement("i",{className:"".concat(e.icon," social-media-icon")}))))})))}))}}]),a}(r.a.Component)),E=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"row justify-content-center section-top-padding"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"container icon-container"},r.a.createElement("i",{className:"fa fa-home"},r.a.createElement("u",{className:"section-title"},"Home"))),r.a.createElement("div",{className:"container p-3 content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"ABOUT ME"),r.a.createElement("p",{id:"about-message"},"I am a professional software developer seeking out new challenges and opportunities to grow my career. I am an open-source enthusiast who works with linux as my daily driver and my motivation to work is to make the world a place where technology is accessible to all 4 corners of the world, hence my love for open-source technologies.")),r.a.createElement("div",{className:"container p-3 content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"PERSONAL DETAILS"),r.a.createElement(h,{resource:t(22)}))))}}]),a}(r.a.Component),f=(t(23),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.props.resource.SkillRatingProgressBarItems.map((function(e,a){var t={width:e.rating+"%",backgroundColor:e.color};return r.a.createElement("div",{className:"col-md-6 progress-bottom-margin"},r.a.createElement("div",null,r.a.createElement("strong",{className:"skill-rating-item-title"},e.title),r.a.createElement("label",{className:"skill-rating-item-rating text-right-float"},e.rating,"%")),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":e.rating,style:t})))})))}}]),a}(r.a.Component)),N=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"skills",className:"row section-top-padding"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"container icon-container"},r.a.createElement("i",{className:"fa fa-tools"},r.a.createElement("u",{className:"section-title"},"Skills"))),r.a.createElement("div",{className:"container p-3 content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"SKILL RATING"),r.a.createElement(f,{resource:t(24)}))))}}]),a}(r.a.Component),k=(t(25),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return this.props.resource.ExperienceItem.map((function(e,a){return r.a.createElement("div",{className:"row experience-item-top-margin"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("strong",{className:"company-name"},e.company_name),r.a.createElement("br",null),r.a.createElement("label",{className:"job-period"},e.period),r.a.createElement("br",null),r.a.createElement("label",{className:"job-role"},e.role)),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("p",{className:"job-description"},e.description)))}))}}]),a}(r.a.Component)),O=function(e){function a(e){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"work-experience",className:"row section-top-padding"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"container icon-container"},r.a.createElement("i",{className:"fa fa-briefcase"},r.a.createElement("u",{className:"section-title"},"Work Experience"))),r.a.createElement("div",{className:"container p-3 content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"ROADMAP"),r.a.createElement(k,{resource:t(26)}))))}}]),a}(r.a.Component),j=t(8),y=t.n(j),w=(t(28),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={repos:[],loading:!0},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.populateReposData()}},{key:"renderReposCardDeck",value:function(e){return r.a.createElement("div",{className:"card-deck row"},e.map((function(e,a){return r.a.createElement("div",{className:"col-md-4 card-bottom-margin no-padding"},r.a.createElement("div",{className:"card fixed-height"},r.a.createElement("img",{className:"card-img-top",src:t(29),alt:"Card image cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("strong",{className:"card-title item-name"},e.name),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"card-text item-description"},e.description)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("a",{className:"item-url",href:e.html_url,target:"_blank"},r.a.createElement("button",{className:"btn btn-primary"},"LINK TO PROJECT")))))})))}},{key:"render",value:function(){var e=this.state.loading?r.a.createElement("p",null,r.a.createElement("em",null,"Loading...")):this.renderReposCardDeck(this.state.repos);return r.a.createElement("div",null,e)}},{key:"populateReposData",value:function(){var e,a;return y.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.awrap(fetch("https://api.github.com/users/ihsaro/repos"));case 2:return e=t.sent,t.next=5,y.a.awrap(e.json());case 5:a=t.sent,this.setState({repos:a,loading:!1});case 7:case"end":return t.stop()}}),null,this)}}]),a}(r.a.Component)),C=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"projects",className:"row section-top-padding"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"container icon-container"},r.a.createElement("i",{className:"fa fa-laptop"},r.a.createElement("u",{className:"section-title"},"Projects"))),r.a.createElement("div",{className:"container p-3 content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"GITHUB PROJECTS"),r.a.createElement(w,null))))}}]),a}(r.a.Component),T=(t(30),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).scrollAnimation=void 0,t.goToTop=t.goToTop.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.toggleGoToTopWidget)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.toggleGoToTopWidget)}},{key:"render",value:function(){return r.a.createElement("div",{id:"divArrowGoToTop",onClick:this.goToTop},r.a.createElement("i",{className:"fa fa-arrow-up"}),r.a.createElement("label",null,"Go to top"))}},{key:"toggleGoToTopWidget",value:function(){0===document.documentElement.scrollTop?$("#divArrowGoToTop").fadeOut(500):$("#divArrowGoToTop").fadeIn(500)}},{key:"goToTop",value:function(){var e=document.body.scrollTop||document.documentElement.scrollTop;e?(window.scrollBy(0,-Math.max(1,Math.floor(e/10))),this.scrollAnimation=setTimeout(this.goToTop,15)):clearTimeout(this.scrollAnimation)}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(31);var L=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},this.props.resource.EducationCardItems.map((function(e,a){return r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"card education-card"},r.a.createElement("img",{className:"education-card-photo",src:t(32)("./"+e.image),alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"text-center"},r.a.createElement("strong",{className:"text-center card-title line-breaker education-card-title"},e.title)),r.a.createElement("label",{className:"education-card-location line-breaker"},r.a.createElement("strong",null,"Location:")," ",e.location),r.a.createElement("label",{className:"education-card-year line-breaker"},r.a.createElement("strong",null,"Year:")," ",e.year),r.a.createElement("table",{className:"maximize-width"},r.a.createElement("tr",null,r.a.createElement("th",{className:"education-card-subject-title"},"Subject"),r.a.createElement("th",{className:"education-card-result-title"},"Result")),e.results.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{className:"education-card-subject"},e.subject),r.a.createElement("td",{className:"education-card-result"},r.a.createElement("u",null,e.result)))}))))))})))}}]),a}(r.a.Component),I=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"education",className:"row section-top-padding"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"container icon-container"},r.a.createElement("i",{className:"fa fa-university"},r.a.createElement("u",{className:"section-title"},"Education"))),r.a.createElement("div",{className:"container p-3 content-box-container-width"},r.a.createElement("h5",{className:"content-box-header"},"MAIN PATH"),r.a.createElement(L,{resource:t(35)}))))}}]),a}(r.a.Component);o.a.render(r.a.createElement(p,{resource:t(36)}),document.getElementById("header")),o.a.render([r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(I,null),r.a.createElement(N,null),r.a.createElement(O,null),r.a.createElement(C,null)],document.getElementById("main")),o.a.render(r.a.createElement(T,null),document.getElementById("footer")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.35ebc7bb.chunk.js.map