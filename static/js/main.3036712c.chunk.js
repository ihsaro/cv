(this.webpackJsonpcv=this.webpackJsonpcv||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/profile_picture.9df44d02.jpg"},function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e){e.exports=JSON.parse('{"NavigationBarBrand":"Idjaz Hossanee","NavigationBarItems":[{"Name":"Home","FontAwesomeIcon":"fa fa-home","Link":"#home"},{"Name":"Skills","FontAwesomeIcon":"fa fa-tools","Link":"#skills"},{"Name":"Education","FontAwesomeIcon":"fa fa-university","Link":"#education"},{"Name":"Projects","FontAwesomeIcon":"fa fa-laptop","Link":"#projects"},{"Name":"Contact","FontAwesomeIcon":"fa fa-phone","Link":"#contact"}]}')},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(7),r=t.n(i),c=(t(15),t(1)),l=t(2),s=t(4),m=t(3),d=t(5),v=(t(16),function(e){function a(e){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).call(this,e))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.adaptNavigationBar)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.adaptNavigationBar)}},{key:"render",value:function(){var e=this.props.jsonResource.NavigationBarItems.map((function(e){return o.a.createElement("li",{key:e.Name,className:"nav-item nav-item-hover-background-change-light"},o.a.createElement("a",{className:"nav-link",href:e.Link},o.a.createElement("i",{className:"".concat(e.FontAwesomeIcon," nav-bar-icon-right-padding")}),e.Name))}));return o.a.createElement("nav",{id:"nav-bar",className:"navbar navbar-expand-md fixed-top bg-light navbar-light"},o.a.createElement("a",{id:"brand",className:"navbar-brand",href:"#"},this.props.jsonResource.NavigationBarBrand),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},o.a.createElement("ul",{className:"navbar-nav"},e)))}},{key:"adaptNavigationBar",value:function(){var e=document.getElementById("nav-bar"),a=document.getElementsByClassName("nav-item");if(null!=e)if(0===document.documentElement.scrollTop){e.classList.remove("navbar-dark"),e.classList.remove("bg-dark"),e.classList.add("navbar-light"),e.classList.add("bg-light");for(var t=0;t<a.length;t++)a[t].classList.remove("nav-item-hover-background-change-dark"),a[t].classList.add("nav-item-hover-background-change-light")}else{e.classList.remove("navbar-light"),e.classList.remove("bg-light"),e.classList.add("navbar-dark"),e.classList.add("bg-dark");for(var n=0;n<a.length;n++)a[n].classList.remove("nav-item-hover-background-change-light"),a[n].classList.add("nav-item-hover-background-change-dark")}}}]),a}(o.a.Component)),u=(t(17),t(9)),h=t.n(u),g=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{id:"home",className:"container-fluid"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("img",{id:"img-profile-picture",src:h.a,alt:"Idjaz"})),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("h1",{id:"header-name"},"IDJAZ HOSSANEE")),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("h6",{id:"header-title"},"WEBSITE IN PROGRESS, CONTENTS NOT FINALIZED")),o.a.createElement("div",{id:"logo-container-home",className:"container"},o.a.createElement("i",{className:"fa fa-home"})),o.a.createElement("div",{id:"about-me",className:"container shadow p-3 mb-5 bg-white rounded"},o.a.createElement("h5",{id:"header-about-me"},"ABOUT ME"),"I am a professional software developer seeking out new challenges and opportunities to grow my career. I am an open-source enthusiast who works with linux as my daily driver and I my motivation to work is to make the world a place where technology ..."),o.a.createElement("div",{id:"personal-details",className:"container shadow p-3 mb-5 bg-white rounded"},o.a.createElement("h5",{id:"header-personal-information"},"PERSONAL INFORMATION"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4 personal-details-title"},o.a.createElement("i",{className:"fa fa-birthday-cake nav-bar-icon-right-padding"}),"DATE OF BIRTH"),o.a.createElement("div",{className:"col-sm-8"},"21/11/1997")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4 personal-details-title"},o.a.createElement("i",{className:"fa fa-envelope nav-bar-icon-right-padding"}),"EMAIL ADDRESS"),o.a.createElement("div",{className:"col-sm-8"},"idjazhossanee@gmail.com")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4 personal-details-title"},o.a.createElement("i",{className:"fa fa-globe-africa nav-bar-icon-right-padding"}),"COUNTRY"),o.a.createElement("div",{className:"col-sm-8"},"Mauritius")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-4 personal-details-title"},o.a.createElement("i",{className:"fa fa-language nav-bar-icon-right-padding"}),"LANGUAGE"),o.a.createElement("div",{className:"col-sm-8"},"English | French | Mauritian Creole"))))}}]),a}(o.a.Component),p=t(6),E=(t(18),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).scrollAnimation=void 0,t.scrollAnimation=0,t.goToTop=t.goToTop.bind(Object(p.a)(t)),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.toggleGoToTopWidget)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.toggleGoToTopWidget)}},{key:"render",value:function(){return o.a.createElement("div",{id:"divArrowGoToTop",onClick:this.goToTop},o.a.createElement("i",{className:"fa fa-arrow-up"}),o.a.createElement("label",null,"Go to top"))}},{key:"toggleGoToTopWidget",value:function(){0===document.documentElement.scrollTop?$("#divArrowGoToTop").fadeOut(500):$("#divArrowGoToTop").fadeIn(500)}},{key:"goToTop",value:function(){var e=document.body.scrollTop||document.documentElement.scrollTop;e?(window.scrollBy(0,-Math.max(1,Math.floor(e/10))),this.scrollAnimation=setTimeout(this.goToTop,15)):clearTimeout(this.scrollAnimation)}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,{jsonResource:t(19)}),document.getElementById("header")),r.a.render(o.a.createElement(g,null),document.getElementById("main")),r.a.render(o.a.createElement(E,null),document.getElementById("footer")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.3036712c.chunk.js.map