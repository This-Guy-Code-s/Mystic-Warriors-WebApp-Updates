(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){},110:function(e,a,t){},113:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(19),c=t.n(s),r=(t(71),t(72),t(7)),i=t(8),o=t(10),m=t(9),u=(t(73),t(74),t(115)),d=t(28),p=t.n(d),E=t(29),g=t.n(E),b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"theBand"},l.a.createElement("div",{className:"theBand2Holder"},l.a.createElement("div",{className:"artist"},l.a.createElement("div",{className:"artist__thumbnail"},l.a.createElement("img",{className:"artist__blur",src:p.a,alt:"Mystic Warrios Member"}),l.a.createElement("img",{className:"artist__image",src:p.a,alt:"Mystic Warrios Member"}),l.a.createElement("div",{className:"artist__ring"}),l.a.createElement("div",{className:"artist__ring artist__ring--outer"})),l.a.createElement("div",{className:"artist__label"},l.a.createElement("p",null,"General Manager & Booking Agent"),l.a.createElement("p",{className:"capital"},"Marco Mallea"))),l.a.createElement("div",{className:"artist"},l.a.createElement("div",{className:"artist__thumbnail"},l.a.createElement("img",{className:"artist__blur",src:g.a,alt:"Mystic Warrios Member"}),l.a.createElement("img",{className:"artist__image",src:g.a,alt:"Mystic Warrios Member"}),l.a.createElement("div",{className:"artist__ring"}),l.a.createElement("div",{className:"artist__ring artist__ring--outer"})),l.a.createElement("div",{className:"artist__label"},l.a.createElement("p",null,"Lead Musician"),l.a.createElement("p",{className:"capital"},"Andres Mallea ")))))}}]),t}(l.a.Component),v=(t(75),t(48)),h=t.n(v),N=t(49),f=t.n(N),y=t(50),O=t.n(y),j=t(51),_=t.n(j),w=t(52),x=t.n(w),k=t(53),M=t.n(k),S=t(54),C=t.n(S),I=t(55),D=t.n(I),W=t(56),L=t.n(W),T=t(57),A=t.n(T),B=t(58),H=t.n(B),V=t(59),U=t.n(V),R=t(60),z=t.n(R),G=t(12),q=t(122),F=t(114),Y=(t(76),t(61)),P=t.n(Y),J=t(30),K=t.n(J),$="SUB",Q=t(16),X=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={modal:!1,email:""},n.toggle=n.toggle.bind(Object(G.a)(n)),n.subNow=n.subNow.bind(Object(G.a)(n)),n}return Object(i.a)(t,[{key:"toggle",value:function(){return this.setState({modal:!this.state.modal}),this.props.toggleHeaderBasedOnModals(this.props.modalIsOut)}},{key:"subNow",value:function(e){var a=this;e.preventDefault(),this.props.subscribe({user_email:this.state.email}).then((function(e){if(!0===a.props.subIsSuccess)return a.setState({email:""}),a.toggle()}))}},{key:"componentDidUpdate",value:function(){console.log(this.props.modalIsOut)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card__button",onClick:this.toggle,style:{cursor:"pointer"}},this.props.buttonLabel),l.a.createElement(q.a,{toggle:this.toggle,className:"subs-modal",isOpen:this.state.modal,id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("form",{className:"modal-content subs-modal-content",onSubmit:this.subNow},l.a.createElement("div",{className:"modal-body p-0 row"},l.a.createElement("div",{className:"col-12 col-lg-5 ad p-0 sub-img-block"}," ",l.a.createElement("img",{src:P.a,alt:"mystic warriors"})," "),l.a.createElement("div",{className:"details col-12 col-lg-7"},l.a.createElement("div",{id:"wrapper"},l.a.createElement("h6",{className:"glitch","data-text":"STAY TUNED"},"Stay Tuned"),l.a.createElement("span",{className:"sub"})),l.a.createElement("p",null,l.a.createElement("small",{className:"para subs-small"},"Subscribe to our newsletter and never miss our coming events, latest music, albums, etc.")),l.a.createElement("p",null,l.a.createElement("small",{className:"para subs-small"},"Our newsletter is sent once a week, every",l.a.createElement("br",null),"Tuesday")),l.a.createElement("div",null,l.a.createElement("small",{className:"para subs-small"},l.a.createElement("code",null,"loading"===this.props.subIsSuccess?l.a.createElement(F.a,{size:"sm",color:"primary"}):this.props.subMsg))),l.a.createElement("div",{className:"form-group mt-3 pt-3 mb-5"},l.a.createElement("input",{type:"email",className:"form-control inp",placeholder:"email@example.com",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})},required:!0})),l.a.createElement("div",{className:"subs-btns"},l.a.createElement("small",{className:"text-muted subs-small"},l.a.createElement("button",{type:"submit",className:" subs-button"},"Subscribe Now!")),l.a.createElement("small",{className:"text-muted subs-small hide-btn",onClick:this.toggle},"Hide",l.a.createElement("i",{className:"fas fa-eye-slash subs-close-button"}))))))))}}]),t}(l.a.Component),Z=Object(Q.b)((function(e){return{modalIsOut:e.modalIsOut,subMsg:e.subMsg,subIsSuccess:e.subIsSuccess}}),{toggleHeaderBasedOnModals:function(){return function(e){return e({type:"MODAL"})}},subscribe:function(e){return function(a){return a({type:$,payload:{msg:"loading",stat:"loading"}}),K.a.post("http://localhost:3001/sub2mwb",e).then((function(e){console.log(e.data),a({type:$,payload:{msg:e.data,stat:!0}}),setTimeout((function(){return a({type:$,payload:""})}),5e3)})).catch((function(e){console.log(e),a({type:$,payload:{msg:"I'm sorry, you cannot subscribe now \n try again later",stat:!1}}),setTimeout((function(){return a({type:$,payload:""})}),5e3)}))}}})(X),ee=t(5),ae=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){/videos/gi.test(this.props.location.pathname)&&(document.querySelector(".ad-blocks").style="display:block")}},{key:"render",value:function(){return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"grid-container"},l.a.createElement("div",{className:"card card--2x"},l.a.createElement("div",{className:"card__content big-script padding-large"},l.a.createElement("p",null,"Traveling to a town near you"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:h.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"}))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:f.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"}))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__content"},l.a.createElement("p",null,l.a.createElement("em",null,"Some words from marco can be here.")),l.a.createElement("p",null,"\u2014 Marco Mallea"))),l.a.createElement("div",{className:"card card--horizontal"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:O.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"}))),l.a.createElement("div",{className:"card card--featured"},l.a.createElement("div",{className:"card__side-by-side--m"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:x.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"})),l.a.createElement("div",{className:"card__content padding-large--l"},l.a.createElement("div",{id:"wrapper"},l.a.createElement("h6",{className:"glitch","data-text":"STAY TUNED"},"Stay Tuned"),l.a.createElement("span",{className:"sub"})),l.a.createElement("p",null,"Subscribe and get an email news letter with the latest info on the Mystic Warriors."),l.a.createElement(Z,{buttonLabel:"Subscribe Now"})))),l.a.createElement("div",{className:"card card--vertical"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:M.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"}))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:_.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"}))),l.a.createElement("div",{className:"card card--vertical"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:C.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"}))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:D.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"}))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__content"},l.a.createElement("p",null,l.a.createElement("em",null,"some words from another band member can be here")),l.a.createElement("p",null,"\u2014 band members name here"))),l.a.createElement("div",{className:"card card--2x"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:L.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"}))),l.a.createElement("div",{className:"card card--horizontal card--frameless"},l.a.createElement("div",{className:"card__content big-script"},l.a.createElement("p",null,"Beyond Reality"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:A.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"}))),l.a.createElement("div",{className:"card card--horizontal"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:H.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"}))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:U.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios"}))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__content"},l.a.createElement("p",null,l.a.createElement("em",null,"some words from another band member can be here also.")),l.a.createElement("p",null,"\u2014 members name"))),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card__image"},l.a.createElement("img",{src:z.a,className:"img img-thumbnail img-gallery",alt:"Mystic Warrios",style:{filter:"grayscale(100%)"}})))))}}]),t}(l.a.Component),te=Object(ee.f)(ae),ne=(t(105),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={showC:!1,lcBox:{}},n.showContent=n.showContent.bind(Object(G.a)(n)),n}return Object(i.a)(t,[{key:"showContent",value:function(){}},{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"links-content"},l.a.createElement("div",{className:"links-card"},l.a.createElement("div",{className:"links-icon"},l.a.createElement("i",{className:"material-icons md-36"},"facebook")),l.a.createElement("p",{className:"title"},"Facebook"),l.a.createElement("p",{className:"text"},l.a.createElement("a",{className:"material-icons",href:"https://www.facebook.com/MysticWarriors/"},"exit_to_app"),l.a.createElement("br",null),"See our post and tune in live.")),l.a.createElement("div",{className:"links-card"},l.a.createElement("div",{className:"links-icon"},l.a.createElement("i",{className:"material-icons fab fa-youtube"})),l.a.createElement("p",{className:"title"},"YouTube"),l.a.createElement("p",{className:"text"},l.a.createElement("a",{className:"material-icons",href:"https://www.youtube.com/channel/UCL06HreOhP5FWtOdGck_Pmw"},"exit_to_app"),l.a.createElement("br",null),"Check out all our music and videos.")),l.a.createElement("div",{className:"links-card"},l.a.createElement("div",{className:"links-icon"},l.a.createElement("i",{className:"material-icons fas fa-at"})),l.a.createElement("p",{className:"title"},"email"),l.a.createElement("p",{className:"text"},l.a.createElement("a",{className:"material-icons",href:"mailto:marcovini@aol.com"},"exit_to_app"),l.a.createElement("br",null),"Email the General manager now via email."))))}}]),t}(l.a.Component)),le=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,{className:"Main"},l.a.createElement("div",{style:{marginBottom:"50px"}},l.a.createElement("div",{id:"wrapper"},l.a.createElement("h6",{className:"glitch","data-text":"ALWAYS IMITATED NEVER DUPLICATED"},"ALWAYS IMITATED"),l.a.createElement("span",{className:"sub"}))),l.a.createElement(b,null),l.a.createElement(te,null),l.a.createElement(ne,null))}}]),t}(l.a.Component),se=(t(106),t(107),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={bubbleLifeTime:20,noOfBubbles:100,bubbles:[]},n.init=n.init.bind(Object(G.a)(n)),n.createBubble=n.createBubble.bind(Object(G.a)(n)),n.createCircle=n.createCircle.bind(Object(G.a)(n)),n}return Object(i.a)(t,[{key:"createCircle",value:function(){var e=document.createElement("div");e.classList.add("circle"),e.style.animationDelay=Math.random()*this.state.bubbleLifeTime+"s";var a=5+Math.floor(5*Math.random())+"px";return e.style.width=a,e.style.height=a,e}},{key:"createBubble",value:function(){var e=document.createElement("div");e.classList.add("circle_container"),e.style.transform="rotate("+Math.floor(360*Math.random())+"deg)";var a=this.createCircle();return e.appendChild(a),e}},{key:"init",value:function(){for(var e,a=document.querySelector(".wrapper"),t=0;t<this.state.noOfBubbles;t++)e=this.createBubble(),a.appendChild(e)}},{key:"componentDidMount",value:function(){return this.init()}},{key:"render",value:function(){return l.a.createElement("div",{className:"Header"},l.a.createElement("div",{className:"wrapper header-wrapper"},l.a.createElement("div",{className:"header_container"},l.a.createElement("div",{className:"container header-name"},l.a.createElement("small",null,l.a.createElement("h1",null,"Mystic Warriors"))))),l.a.createElement("div",{className:"glow"}),l.a.createElement("div",{className:"particles"},l.a.createElement("div",{className:"rotate"},l.a.createElement("div",{className:"angle"},l.a.createElement("div",{className:"size"},l.a.createElement("div",{className:"position"},l.a.createElement("div",{className:"pulse"},l.a.createElement("div",{className:"particle"}))))),l.a.createElement("div",{className:"angle"},l.a.createElement("div",{className:"size"},l.a.createElement("div",{className:"position"},l.a.createElement("div",{className:"pulse"},l.a.createElement("div",{className:"particle"}))))),l.a.createElement("div",{className:"angle"},l.a.createElement("div",{className:"size"},l.a.createElement("div",{className:"position"},l.a.createElement("div",{className:"pulse"},l.a.createElement("div",{className:"particle"}))))))))}}]),t}(l.a.Component)),ce=(t(108),t(117)),re=t(20),ie=t(116),oe=t(63),me=t.n(oe),ue={WebkitTextFillColor:"limegreen",border:"double 1px",borderRight:"none",borderTop:"none",borderRadius:"0px 5px",paddingLeft:"6px"},de={WebkitTextFillColor:"orange",textDecoration:"underline crimson",textDecorationStyle:"solid crimson"},pe={WebkitTextFillColor:"limegreen",border:"double 1px",borderLeft:"none",borderTop:"none",borderRadius:"5px 0px",paddingRight:"6px"},Ee=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={},n.toggle=n.toggle.bind(Object(G.a)(n)),n}return Object(i.a)(t,[{key:"toggle",value:function(){return this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"componentDidMount",value:function(){console.log(this.props.history),this.toggle()}},{key:"render",value:function(){var e=this;return l.a.createElement("header",{onScroll:this.scrolling,className:"footer-linx",style:{display:this.props.modalIsOut?"none":"flex"}},l.a.createElement("div",{className:"language-toggle"},l.a.createElement(ie.a,{className:"language-toggle-btn"},l.a.createElement("span",{className:"material-icons"},"language"),l.a.createElement("code",{style:{fontWeight:"bolder",marginRight:"4px"}},this.props.useEspanol?l.a.createElement("small",null,window.innerWidth<=700?l.a.createElement("sup",null,"show ENGLISH"):"show ENGLISH"):l.a.createElement("small",null,window.innerWidth<=700?l.a.createElement("sup",null,"show ESPANOL"):"show ESPANOL")),l.a.createElement(me.a,{onChange:function(){return e.props.toggleLanguage()},checked:this.props.useEspanol,onColor:"#666",offColor:"#666",onHandleColor:"#0099FF",offHandleColor:"#DC143C",handleDiameter:17,height:19.5,width:40,checkedIcon:!1,uncheckedIcon:!1}))),l.a.createElement(ce.a,{className:"nav-bar"},l.a.createElement("div",null,!/[a-z]/gi.test(this.props.location.pathname)&&/[/]/gi.test(this.props.location.pathname)||/mystic-warriors-webapp-updates/gi.test(this.props.location.pathname)?l.a.createElement("span",{className:"material-icons"},"audiotrack"):"",l.a.createElement(re.b,{activeStyle:ue,to:"/"},"Home")),l.a.createElement("div",null,/videos/gi.test(this.props.location.pathname)?l.a.createElement("span",{className:"material-icons"},"audiotrack"):"",l.a.createElement(re.b,{activeStyle:de,to:"/videos"},"Videos")),l.a.createElement("div",null,/music/gi.test(this.props.location.pathname)?l.a.createElement("span",{className:"material-icons"},"audiotrack"):"",l.a.createElement(re.b,{activeStyle:de,to:"/music"},"Music")),l.a.createElement("div",null,/about/gi.test(this.props.location.pathname)?l.a.createElement("span",{className:"material-icons"},"audiotrack"):"",l.a.createElement(re.b,{style:pe,activeStyle:de,to:"/about"},"About"))))}}]),t}(l.a.Component),ge=Object(Q.b)((function(e){return{useEspanol:e.useEspanol,modalIsOut:e.modalIsOut}}),{toggleLanguage:function(){return function(e){switch(JSON.parse(window.sessionStorage.getItem("useEspanol"))||!1){case!1:return window.sessionStorage.setItem("useEspanol",!0),e({type:"LANGUAGE",payload:!0});case!0:return window.sessionStorage.setItem("useEspanol",!1),e({type:"LANGUAGE",payload:!1});default:return window.sessionStorage.removeItem("useEspanol"),!1}}}})(Object(ee.f)(Ee)),be=(t(110),t(118)),ve=t(119),he=t(120),Ne=t(121),fe=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={modal:!1},n.toggle=n.toggle.bind(Object(G.a)(n)),n}return Object(i.a)(t,[{key:"toggle",value:function(){return this.setState({modal:!this.state.modal})}},{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"componentDidUpdate",value:function(){console.log(this.props)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("li",{title:"WATCH THIS VIDEO HERE(pop up)"},l.a.createElement("b",{onClick:this.toggle},l.a.createElement("i",{className:"fas fa-eye"}))),l.a.createElement(q.a,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},l.a.createElement(be.a,{toggle:this.toggle},"Modal title"),l.a.createElement(ve.a,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),l.a.createElement(he.a,null,l.a.createElement(Ne.a,{color:"primary",onClick:this.toggle},"Do Something")," ",l.a.createElement(Ne.a,{color:"secondary",onClick:this.toggle},"Cancel"))))}}]),t}(l.a.Component),ye=Object(Q.b)((function(e){return{useEspanol:e.useEspanol}}),{})(fe),Oe=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){return this.props.getVideos()}},{key:"componentDidUpdate",value:function(){console.log(this.props.videos)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container vg-container"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"home-title"},l.a.createElement("span",{className:"vid-title-long"},l.a.createElement("h3",{className:"glitch","data-text":"Our Hottest \u2b50 \u2b50 \u2b50 \u2b50"},l.a.createElement("span",{role:"img","aria-label":"emoji starz"},"Our Hottest")),l.a.createElement("span",{className:"sub"})),l.a.createElement("span",{className:"vid-title-short"},l.a.createElement("h6",{className:"glitch","data-text":"\u2b50 \u2b50 \u2b50 \u2b50"},l.a.createElement("span",{role:"img","aria-label":"emoji starz"},"\u2b50 \u2b50 \u2b50 \u2b50")),l.a.createElement("span",{className:"sub"})),l.a.createElement("span",null,l.a.createElement("h3",{className:"glitch","data-text":"Videos"},"Videos"),l.a.createElement("span",{className:"sub"}))),l.a.createElement("div",{className:"row"},this.props.videos.length>0?this.props.videos.map((function(e,a){return l.a.createElement("div",{key:a,className:"col-md-4 col-sm-6"},l.a.createElement("div",{className:"box"},l.a.createElement("svg",{className:"curve1",x:"0px",y:"0px",viewBox:"0 0 400 200"},l.a.createElement("path",{d:"M398.938,143.806c-24.004,26.063-155.373,104.33-224.724,7.328 C69.626,4.846,0.5,71.583,0.5,71.583V1.5h398.629L398.938,143.806z"})),l.a.createElement("img",{src:e.img,alt:""}),l.a.createElement("div",{className:"box-content"},l.a.createElement("h3",{className:"post title"},e.title),l.a.createElement("ul",{className:"icon"},l.a.createElement(ye,null),l.a.createElement("li",{title:"GO TO THE YOUTUBE LINK FOR THIS VIDEO (new tab)"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.src},l.a.createElement("i",{className:"fa fa-link"}))))),l.a.createElement("svg",{className:"curve2",x:"0px",y:"0px",width:"150px",height:"150px",viewBox:"0 0 150 50"},l.a.createElement("path",{d:"M1.114,7.567C87.544-33.817,150,150.5,150,150.5H1.361L1.114,7.567z"}))))})):l.a.createElement("div",null,l.a.createElement(F.a,{size:"lg",color:"primary"}),l.a.createElement("br",null),l.a.createElement("code",null,"LOADING VIDEOS..."))),l.a.createElement(ne,null)))}}]),t}(l.a.Component),je=Object(Q.b)((function(e){return{videos:e.videos}}),{getVideos:function(){return function(e){return K.a.get("http://localhost:3001/get/videos").then((function(a){return console.log(a.data),e({type:"VIDEOS",payload:a.data})})).catch((function(a){return console.log(a),e({type:"ERR_VIDEOS"})}))}}})(Oe),_e=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"componentDidUpdate",value:function(){console.log(this.props)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(ge,null),l.a.createElement(se,null),l.a.createElement(ee.c,null,l.a.createElement(ee.a,{exact:!0,path:"/",render:function(){return l.a.createElement(le,null)}}),l.a.createElement(ee.a,{exact:!0,path:"/videos",render:function(){return l.a.createElement("div",{className:"gallery-n-link"},l.a.createElement(je,null))}}),l.a.createElement(ee.a,{render:function(){return l.a.createElement(le,null)}})))}}]),t}(l.a.Component),we=Object(Q.b)((function(e){return{useEspanol:e.useEspanol}}),{})(_e);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=t(23),ke=t(18),Me={useEspanol:!!window.sessionStorage.getItem("useEspanol")&&JSON.parse(window.sessionStorage.getItem("useEspanol")),modalIsOut:!1,subMsg:"",subIsSuccess:null,videos:[]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"MODAL":return Object(ke.a)(Object(ke.a)({},e),{},{modalIsOut:!e.modalIsOut});case"LANGUAGE":return Object(ke.a)(Object(ke.a)({},e),{},{useEspanol:a.payload});case $:return Object(ke.a)(Object(ke.a)({},e),{},{subMsg:a.payload.msg,subIsSuccess:a.payload.stat});case"VIDEOS":return Object(ke.a)(Object(ke.a)({},e),{},{videos:a.payload});case"ERR_VIDEOS":return Object(ke.a)(Object(ke.a)({},e),{},{errVideo:!0,errVidMsg:"Videos Cant Be Loaded Right Now \n Please Check Your Connection."});default:return e}},Ce=t(64),Ie=t(65);t.n(Ie).a.config();var De=Object(xe.c)(Se,Object(xe.a)(Ce.a));c.a.render(l.a.createElement(re.a,null,l.a.createElement(Q.a,{store:De},l.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,a,t){e.exports=t.p+"static/media/marco.b84e341b.jpg"},29:function(e,a,t){e.exports=t.p+"static/media/member1.e19c3bd3.jpg"},48:function(e,a,t){e.exports=t.p+"static/media/2.a5883974.jpg"},49:function(e,a,t){e.exports=t.p+"static/media/5.81c2bb46.jpg"},50:function(e,a,t){e.exports=t.p+"static/media/6.1ea0f5f0.jpg"},51:function(e,a,t){e.exports=t.p+"static/media/12.b0e68ef8.jpg"},52:function(e,a,t){e.exports=t.p+"static/media/Booking.9d442603.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/14.d42fcc67.jpg"},54:function(e,a,t){e.exports=t.p+"static/media/15.e35ef172.jpg"},55:function(e,a,t){e.exports=t.p+"static/media/21.cc3c27bf.jpg"},56:function(e,a,t){e.exports=t.p+"static/media/22.9a43c7e4.jpg"},57:function(e,a,t){e.exports=t.p+"static/media/9.fe558c73.jpg"},58:function(e,a,t){e.exports=t.p+"static/media/8.49e8fcab.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/18.fbfff5d7.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/19.7289e1d1.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/1.befe6b09.jpg"},66:function(e,a,t){e.exports=t(113)},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.2821eb0b.chunk.js.map