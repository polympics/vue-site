(function(t){function e(e){for(var a,s,i=e[0],o=e[1],u=e[2],p=0,h=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(h.length)h.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},c=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"12de":function(t,e,n){},"12e5":function(t,e,n){"use strict";n("d692")},"23a5":function(t,e,n){},"2aeb":function(t,e,n){},"2d96":function(t,e,n){},"2e84":function(t,e,n){"use strict";n("d200")},"308c":function(t,e,n){"use strict";n("2d96")},"3e0e":function(t,e,n){},"5e68":function(t,e,n){"use strict";n("3e0e")},6329:function(t,e,n){"use strict";n("e054")},"7e73":function(t,e,n){"use strict";n("23a5")},"80c7":function(t,e,n){"use strict";n("eb81")},9452:function(t,e,n){"use strict";n("12de")},b4d2:function(t,e,n){"use strict";n("f33a")},c166:function(t,e,n){"use strict";n("2aeb")},c5a9:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r,c,s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("NavBar",{attrs:{account:t.account}}),n("transition",{attrs:{name:"slide_transition",mode:"out-in"}},[n("router-view",{key:t.$route.path,on:{reloadNavbar:t.getAccount}})],1),n("Footer")],1)},o=[],u=n("1da1"),l=n("d4ec"),p=n("bee2"),h=n("257e"),m=n("262e"),f=n("2caf"),_=n("ade3"),d=(n("96cf"),n("99af"),n("1b40")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar"},[n("router-link",{staticClass:"navbar__home",attrs:{to:"/"}},[n("img",{staticClass:"navbar__home__icon",attrs:{src:"/img/icons/icon-192.png",alt:"Polympics Logo"}}),n("span",{staticClass:"navbar__home__text"},[t._v("Polympics")])]),n("div",{staticClass:"navbar__wrapper"},[t._m(0),n("div",{staticClass:"navbar__menu"},[n("span",{staticClass:"navbar__menu__title"},[t._v("Members")]),n("router-link",{staticClass:"navbar__menu__item",attrs:{to:"/accounts"}},[t._v("All Members")]),t.account?n("router-link",{staticClass:"navbar__menu__item",attrs:{to:"/account/"+t.account.id}},[t._v("Me")]):t._e(),t.account?n("router-link",{staticClass:"navbar__menu__item",attrs:{to:"/logout"}},[t._v("Logout")]):n("router-link",{staticClass:"navbar__menu__item",attrs:{to:"/login"}},[t._v("Login or Signup")])],1),n("div",{staticClass:"navbar__menu"},[n("span",{staticClass:"navbar__menu__title"},[t._v("About")]),n("router-link",{staticClass:"navbar__menu__item",attrs:{to:"/about"}},[t._v("About")]),n("a",{staticClass:"navbar__menu__item",attrs:{href:"#"}},[t._v("Events")])],1)])],1)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar__menu"},[n("span",{staticClass:"navbar__menu__title"},[t._v("Teams")]),n("a",{staticClass:"navbar__menu__item",attrs:{href:"#"}},[t._v("All Teams")]),n("a",{staticClass:"navbar__menu__item",attrs:{href:"#"}},[t._v("My Team")]),n("a",{staticClass:"navbar__menu__item",attrs:{href:"#"}},[t._v("Create Team")])])}],g={props:["account"]},y=g,j=(n("2e84"),n("2877")),O=Object(j["a"])(y,v,b,!1,null,"a4ab09ec",null),C=O.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[t._v("Polympics website, by Artemis."),n("br"),n("br"),t._v("This site is still in beta, so expect to see links that don't lead anywhere and placeholder content."),n("br"),n("br"),n("a",{attrs:{href:"https://discord.gg/HYnQQdJFeP"}},[t._v("Join now on Discord!")])])}],x=(n("b4d2"),{}),P=Object(j["a"])(x,w,k,!1,null,"18d612e5",null),A=P.exports,$=(a=Object(d["a"])({components:{NavBar:C,Footer:A}}),a((c=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){var t;Object(l["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(_["a"])(Object(h["a"])(t),"account",null),t}return Object(p["a"])(n,[{key:"mounted",value:function(){this.getAccount()}},{key:"getAccount",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=common.getClient("https://api.polytopia.fun"),!e.getSelf){t.next=7;break}return t.next=4,e.getSelf();case 4:this.account=t.sent,t.next=8;break;case 7:this.account=null;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(d["c"]),r=c))||r),T=$,R=(n("cf25"),Object(j["a"])(T,i,o,!1,null,null,null)),E=R.exports,S=n("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var L,I,N,D,M,U,F,z,q,W,B,J=n("8c4f"),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main main--centered"},[t._m(0),n("LinkCard",{attrs:{link:"/login",title:"Sign up"}},[t._v("Put your name down to represent your country, city or state in a summer of competetive Polytopia fun!")]),n("LinkCard",{attrs:{link:"/about",title:"Read all about it"}},[t._v("Read and understand the nitty-gritty details behind the event.")]),n("LinkCard",{attrs:{link:"/discord",title:"Join the community"}},[t._v("Join our Discord server, where you can connect with other players and ask all the questions you need to about the event.")]),n("LinkCard",{attrs:{link:"/events",title:"See the events"}},[t._v("We have an event to suit everyone and the Polympics. View the full list here.")])],1)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page_intro page_intro--centered"},[n("img",{staticClass:"page_intro__icon",attrs:{src:"/img/logo.png",alt:"PolyChampions Logo"}}),n("h1",{staticClass:"page_intro__header"},[t._v("Polympics")]),n("p",{staticClass:"page_intro__slogan"},[t._v("A worldwide event to bring the Polytopia community together for a summer of fun!")])])}],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"card_item",attrs:{to:t.link}},[n("div",{staticClass:"card_item__content_wrapper"},[n("h2",{staticClass:"card_item__header"},[t._v(t._s(t.title))]),n("p",{staticClass:"card_item__content"},[t._t("default")],2)]),n("i",{staticClass:"fas fa-arrow-right card_item__arrow"})])},V=[],Z={props:["link","title"]},G=Z,K=(n("6329"),Object(j["a"])(G,Y,V,!1,null,"12ea4383",null)),X=K.exports,tt=(L=Object(d["a"])({components:{LinkCard:X}}),L(I=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return n}(d["c"]))||I),et=tt,nt=Object(j["a"])(et,H,Q,!1,null,null,null),at=nt.exports,rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("section",{staticClass:"page_intro"},[n("h1",{staticClass:"page_intro__header"},[t._v("About Polympics")]),n("p",{staticClass:"page_intro__slogan"},[t._v("A worldwide event to bring the Polytopia community together for a summer of fun.")])]),n("img",{staticClass:"page_image",attrs:{src:"/img/logo.png",alt:"Polympics logo"}}),n("section",{staticClass:"page_content"},[n("h3",{staticClass:"page_content__header"},[t._v("Most cats have")]),n("p",{staticClass:"page_content__p"},[t._v('five claws on their front paws, and four on their rear paws. The dewclaw is proximal to the other claws. More proximally is a protrusion which appears to be a sixth "finger". This special feature of the front paws, on the inside of the wrists has no function in normal walking, but is thought to be an antiskidding device used while jumping. Some cat breeds are prone to having extra digits (“polydactyly”).')])]),n("section",{staticClass:"page_content"},[n("h3",{staticClass:"page_content__header"},[t._v("The domestic cat's hearing")]),n("p",{staticClass:"page_content__p"},[t._v("is most acute in the range of 500 Hz to 32 kHz.")]),n("p",{staticClass:"page_content__p"},[t._v("Its hearing sensitivity is enhanced by its large movable outer ears, the pinnae, which amplify sounds and help detect the location of a noise. It can detect ultrasound, which enables it to detect ultrasonic calls made by rodent prey.")])]),n("section",{staticClass:"page_content"},[n("h3",{staticClass:"page_content__header"},[t._v("To aid with navigation and sensation,")]),n("p",{staticClass:"page_content__p"},[t._v("cats have dozens of movable whiskers (vibrissae) over their body, especially their faces. These provide information on the width of gaps and on the location of objects in the dark, both by touching objects directly and by sensing air currents; they also trigger protective blink reflexes to protect the eyes from damage.:47")])]),n("section",{staticClass:"page_content"},[n("h3",{staticClass:"page_content__header"},[t._v("Cats conserve energy")]),n("p",{staticClass:"page_content__p"},[t._v('by sleeping more than most animals, especially as they grow older. The daily duration of sleep varies, usually between 12 and 16 hours, with 13 and 14 being the average. Some cats can sleep as much as 20 hours. The term "cat nap" for a short rest refers to the cat\'s tendency to fall asleep (lightly) for a brief period. While asleep, cats experience short periods of rapid eye movement sleep often accompanied by muscle twitches, which suggests they are dreaming.')])]),n("section",{staticClass:"page_content"},[n("h3",{staticClass:"page_content__header"},[t._v("Purring may have developed")]),n("p",{staticClass:"page_content__p"},[t._v("as an evolutionary advantage as a signalling mechanism of reassurance between mother cats and nursing kittens. Post-nursing cats often purr as a sign of contentment: when being petted, becoming relaxed.")])])])}],st=Object(d["a"])(N=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return n}(d["c"]))||N,it=st,ot=Object(j["a"])(it,rt,ct,!1,null,null,null),ut=ot.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main main--centered"},[n("ProfileCard",{attrs:{account:t.account}},[t.canChangeTeam?n("h3",[t._v("Change Team")]):t._e(),t.canChangeTeam&&t.account.id===t.ownAccount.id?n("Warning",{staticClass:"section_warning"},[t._v("Changing your team frequently is not allowed and may result in a ban. Please chose a team and stick to it, preferably one that matches your nationality.")]):t._e(),t.canChangeTeam?n("TeamSelector",{attrs:{selectedTeam:t.account.team},on:{input:t.updateTeam}}):t._e(),t.canChangeDetails?n("h3",[t._v("Change Name")]):t._e(),t.canChangeDetails?n("DiscordNameInput",{attrs:{username:t.account.name,discriminator:t.account.discriminator},on:{usernameInput:t.updateUsername,discriminatorInput:t.updateDiscriminator}}):t._e(),t.canChangeDetails?n("h3",[t._v("Change Avatar")]):t._e(),t.canChangeDetails?n("ImageUrlInput",{attrs:{value:t.account.avatarUrl},on:{input:t.updateAvatarUrl}}):t._e(),t.canChangePermissions?n("h3",[t._v("Change Permissions")]):t._e(),t.canChangePermissions&&t.account.id===t.ownAccount.id?n("Warning",{staticClass:"section_warning"},[t._v("If you revoke your own permissions you may not be able to get them back.")]):t._e(),t.canChangePermissions?n("PermissionsInput",{attrs:{value:t.account.permissions,userPermissions:t.ownAccount.permissions},on:{input:t.updatePermissions}}):t._e()],1)],1)},pt=[],ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"account"},[n("img",{staticClass:"account__pfp",attrs:{src:t.account.avatarUrl+"?size=256",alt:"Profile Picture"}}),n("div",{staticClass:"account__details"},[n("h1",{staticClass:"account__name"},[t._v(t._s(t.account.name)),n("span",{staticClass:"account__discrim"},[t._v("#"+t._s(t.account.discriminator))])]),t.account.team?n("a",{staticClass:"account__team",attrs:{href:"#"}},[t._v(t._s(t.account.team.name))]):n("span",{staticClass:"account__team account__team--none"},[t._v("🏳️‍🌈 No team")]),t._t("default")],2)])},mt=[],ft={props:["account"]},_t=ft,dt=(n("308c"),Object(j["a"])(_t,ht,mt,!1,null,"7e71b2f2",null)),vt=dt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",{staticClass:"text_input long_text_input",attrs:{type:"url",pattern:"https?://.*.(png|gif|jpg|jpeg|webp|apng|jfif)",placeholder:"Image URL",onClick:"this.select();"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})},gt=[],yt={props:["value"]},jt=yt,Ot=Object(j["a"])(jt,bt,gt,!1,null,null,null),Ct=Ot.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"discord_name_input"},[n("input",{staticClass:"text_input",attrs:{placeholder:"Wumpus"},domProps:{value:t.username},on:{input:function(e){return t.$emit("usernameInput",e.target.value)}}}),n("span",{staticClass:"separator"},[t._v("#")]),n("input",{staticClass:"text_input discriminator_input",attrs:{type:"number",placeholder:"0000",min:"0",max:"9999"},domProps:{value:t.discriminator},on:{input:function(e){return t.$emit("discriminatorInput",e.target.value)}}})])},kt=[],xt={props:["username","discriminator"]},Pt=xt,At=(n("5e68"),Object(j["a"])(Pt,wt,kt,!1,null,"b263c74a",null)),$t=At.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"permissions_input"},t._l(t.inputs,(function(e){return n("label",{key:e.id,staticClass:"permissions_input__flag",class:e.enabled?"":"permissions_input__flag--disabled",attrs:{for:e.id}},[n("input",{attrs:{type:"checkbox",id:e.id,disabled:!e.enabled},domProps:{checked:e.value},on:{change:function(n){return t.updateFlag(e.flag,n.checked)}}}),n("span",[t._v(t._s(e.prettyName))])])})),0)},Rt=[],Et=n("b85c"),St=n("6b7b"),Lt=n("63ae"),It=(n("f890"),n("5319"),n("ac1f"),["managePermissions","manageAccountTeams","manageAccountDetails","manageTeams","manageOwnTeam"]);function Nt(t){var e=t.replace(/([a-z])([A-Z])/gm,"$1 $2");return e.charAt(0).toUpperCase()+e.substr(1)}var Dt,Mt,Ut,Ft,zt,qt,Wt,Bt,Jt,Ht,Qt,Yt,Vt,Zt,Gt,Kt,Xt,te=(D=Object(d["a"])(),M=Object(d["b"])(),U=Object(d["b"])(),D((B=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){var t;Object(l["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(St["a"])(Object(h["a"])(t),"value",q,Object(h["a"])(t)),Object(St["a"])(Object(h["a"])(t),"userPermissions",W,Object(h["a"])(t)),t}return Object(p["a"])(n,[{key:"inputs",get:function(){var t,e=[],n=Object(Et["a"])(It);try{for(n.s();!(t=n.n()).done;){var a=t.value,r=polympics.PolympicsPermissions[a],c=this.userPermissions&r,s="permissions__".concat(a),i=Nt(a);e.push({enabled:c,id:s,prettyName:i,flag:r,value:!!(this.value&r)})}}catch(o){n.e(o)}finally{n.f()}return e}},{key:"updateFlag",value:function(t,e){var n={};e?n.grant=t:n.revoke=t,this.$emit("input",n)}}]),n}(d["c"]),z=B,q=Object(Lt["a"])(z.prototype,"value",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=Object(Lt["a"])(z.prototype,"userPermissions",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=z))||F),ee=te,ne=(n("80c7"),Object(j["a"])(ee,Tt,Rt,!1,null,"01e3e55b",null)),ae=ne.exports,re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"team_selector"},[n("div",{staticClass:"search_bar"},[n("input",{staticClass:"search_bar__input text_input",attrs:{placeholder:"Start searching...",type:"search"},on:{input:function(e){return t.fetchTeams(e.target.value)}}})]),t.teams.length?n("table",{staticClass:"teams_list"},t._l(t.teams,(function(e){return n("tr",{staticClass:"teams_list__team",class:t.teamSelected(e)?"teams_list__team--selected":"",on:{mouseup:function(n){return n.preventDefault(),t.selectTeam(e)}}},[n("td",[n("label",{attrs:{for:"team_"+e.id}},[n("input",{attrs:{type:"radio",name:"team",id:"team_"+e.id}}),t._v(t._s(e.name))])]),e.isPlaceholder?n("td"):n("td",[t._v(t._s(e.memberCount)+" Members")])])})),0):n("p",{staticClass:"team_selector__placeholder"},[t._v("There's nothing here!")])])},ce=[],se=common.getClient("https://api.polytopia.fun"),ie={name:"🏳️‍🌈 No team",id:0,isPlaceholder:!0,memberCount:0},oe=(Dt=Object(d["a"])(),Mt=Object(d["b"])(),Dt((qt=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){var t;Object(l["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(_["a"])(Object(h["a"])(t),"teams",[]),Object(St["a"])(Object(h["a"])(t),"selectedTeam",zt,Object(h["a"])(t)),t}return Object(p["a"])(n,[{key:"mounted",value:function(){this.fetchTeams("")}},{key:"getSelectedTeam",value:function(){return this.selectedTeam||ie}},{key:"fetchTeams",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=se.listTeams({search:e}),t.next=3,n.getPage({perPage:5});case 3:this.teams=t.sent.data,this.teams.unshift(ie),a=this.getSelectedTeam(),r=this.teams.some((function(t){return t.id===a.id})),r||this.teams.unshift(a);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"selectTeam",value:function(t){if(!this.teamSelected(t)){var e,n=Object(Et["a"])(this.teams);try{for(n.s();!(e=n.n()).done;){var a=e.value;this.teamSelected(a)&&(a.memberCount-=1)}}catch(r){n.e(r)}finally{n.f()}t.memberCount+=1,t===ie?this.$emit("input",null):this.$emit("input",t)}}},{key:"teamSelected",value:function(t){return t.id===this.getSelectedTeam().id}}]),n}(d["c"]),Ft=qt,zt=Object(Lt["a"])(Ft.prototype,"selectedTeam",[Mt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ut=Ft))||Ut),ue=oe,le=(n("fec6"),Object(j["a"])(ue,re,ce,!1,null,"67c81a40",null)),pe=le.exports,he=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"warning"},[n("h4",{staticClass:"warning__title"},[t._v("Warning")]),t._t("default")],2)},me=[],fe=(n("12e5"),{}),_e=Object(j["a"])(fe,he,me,!1,null,"34a90c4e",null),de=_e.exports,ve=common.getClient("https://api.polytopia.fun"),be=(Wt=Object(d["a"])({components:{ProfileCard:vt,ImageUrlInput:Ct,DiscordNameInput:$t,PermissionsInput:ae,TeamSelector:pe,Warning:de}}),Wt((Jt=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){var t;Object(l["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(_["a"])(Object(h["a"])(t),"account",{name:"Loading...",discriminator:"0000",team:{name:"Loading..."}}),Object(_["a"])(Object(h["a"])(t),"canChangeTeam",!1),Object(_["a"])(Object(h["a"])(t),"canChangeDetails",!1),Object(_["a"])(Object(h["a"])(t),"canChangePermissions",!1),Object(_["a"])(Object(h["a"])(t),"ownAccount",{}),t}return Object(p["a"])(n,[{key:"created",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(ve.getSelf){t.next=3;break}return this.$router.push({path:"/account/".concat(this.$route.params.id)}),t.abrupt("return");case 3:return t.next=5,ve.getSelf();case 5:if(this.ownAccount=t.sent,e=common.canManage(this.$route.params.id,this.ownAccount),e){t.next=10;break}return this.$router.push({path:"/account/".concat(this.$route.params.id)}),t.abrupt("return");case 10:this.canChangeTeam=1&e,this.canChangeDetails=2&e,this.canChangePermissions=4&e,this.fetchAccount();case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"fetchAccount",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.id,t.prev=1,t.next=4,ve.getAccount(e);case 4:n=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t["catch"](1),422===t.t0.code&&this.$router.push({path:"/404"}),t.abrupt("return");case 11:this.account=n;case 12:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"updatePermissions",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.grant,a=e.revoke,t.next=3,ve.updateAccount(this.account,{grantPermissions:n,revokePermissions:a});case 3:this.account=t.sent;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"updateUsername",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ve.updateAccount(this.account,{name:e});case 2:this.account=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"updateDiscriminator",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ve.updateAccount(this.account,{discriminator:e});case 2:this.account=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"updateAvatarUrl",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ve.updateAccount(this.account,{avatarUrl:e});case 2:this.account=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"updateTeam",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ve.updateAccount(this.account,{team:e});case 2:this.account=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),n}(d["c"]),Bt=Jt))||Bt),ge=be,ye=(n("9452"),Object(j["a"])(ge,lt,pt,!1,null,"2b447dd7",null)),je=ye.exports,Oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main main--centered"},[n("ProfileCard",{attrs:{account:t.account}},[n("router-link",{staticClass:"account__link",attrs:{to:"/account/"+t.account.id+"/manage"}},[t._v("Manage Account")])],1)],1)},Ce=[],we=common.getClient("https://api.polytopia.fun"),ke=(Ht=Object(d["a"])({components:{ProfileCard:vt}}),Ht((Yt=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){var t;Object(l["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(_["a"])(Object(h["a"])(t),"account",{name:"Loading...",discriminator:"0000",team:{name:"Loading..."}}),t}return Object(p["a"])(n,[{key:"created",value:function(){this.fetchAccount()}},{key:"fetchAccount",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.id,t.prev=1,t.next=4,we.getAccount(e);case 4:n=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t["catch"](1),422===t.t0.code&&this.$router.push({path:"/404"}),t.abrupt("return");case 11:this.account=n;case 12:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(){return t.apply(this,arguments)}return e}()}]),n}(d["c"]),Qt=Yt))||Qt),xe=ke,Pe=Object(j["a"])(xe,Oe,Ce,!1,null,null,null),Ae=Pe.exports,$e=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main main--full"},[n("h1",{staticClass:"main__title"},[t._v("Polympics Members")]),n("SearchBar",{on:{input:t.updateSearch},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),n("AccountList",{key:t.query,attrs:{accountPaginator:t.accounts}})],1)},Te=[],Re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"account_list"},[t._l(t.accounts,(function(e){return n("tr",{staticClass:"account_list__row"},[n("td",{staticClass:"account_list__row__pfp"},[n("img",{attrs:{src:e.avatarUrl,alt:"Pfp"}})]),n("td",{staticClass:"account_list__row__name"},[n("router-link",{attrs:{to:"/account/"+e.id}},[t._v(t._s(e.name)+"#"+t._s(e.discriminator))])],1),n("td",{staticClass:"account_list__row__team"},[e.team?n("a",{attrs:{href:"#"}},[t._v(t._s(e.team.name))]):n("p",{attrs:{href:"#"}},[t._v("🏳️‍🌈 No team")])])])})),t.accounts.length?t._e():n("tr",{staticClass:"account_list_placeholder"},[n("td",[t._v("There's nothing here!")])])],2)},Ee=[],Se=n("2909");d["a"].registerHooks(["beforeRouteEnter"]);var Le,Ie,Ne,De,Me,Ue,Fe,ze,qe,We,Be=(Vt=Object(d["b"])(),Object(d["a"])((Xt=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){var t;Object(l["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(_["a"])(Object(h["a"])(t),"accounts",[]),Object(_["a"])(Object(h["a"])(t),"finished",!1),Object(_["a"])(Object(h["a"])(t),"currentlyFetching",!1),Object(St["a"])(Object(h["a"])(t),"accountPaginator",Kt,Object(h["a"])(t)),t}return Object(p["a"])(n,[{key:"mounted",value:function(){this.fetchAccounts(),window.addEventListener("scroll",this.fetchAccounts)}},{key:"destroyed",value:function(){window.removeEventListener("scroll",this.fetchAccounts)}},{key:"beforeRouteEnter",value:function(t,e,n){n((function(t){t.fetchAccounts()}))}},{key:"fetchAccounts",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.finished&&!this.currentlyFetching){t.next=2;break}return t.abrupt("return");case 2:return this.currentlyFetching=!0,t.next=5,this.accountPaginator.nextPage();case 5:if(n=t.sent,n.length){t.next=9;break}return this.finished=!0,t.abrupt("return");case 9:this.currentlyFetching=!1,(e=this.accounts).push.apply(e,Object(Se["a"])(n));case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(d["c"]),Gt=Xt,Kt=Object(Lt["a"])(Gt.prototype,"accountPaginator",[Vt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Zt=Gt))||Zt),Je=Be,He=(n("7e73"),Object(j["a"])(Je,Re,Ee,!1,null,"31944c8e",null)),Qe=He.exports,Ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search_bar"},[n("input",{staticClass:"text_input search_bar__input",attrs:{placeholder:"Start searching...",type:"search"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])},Ve=[],Ze={props:["value"]},Ge=Ze,Ke=(n("c166"),Object(j["a"])(Ge,Ye,Ve,!1,null,"c2f88aa6",null)),Xe=Ke.exports,tn=common.getClient("https://api.polytopia.fun"),en=(Le=Object(d["a"])({components:{AccountList:Qe,SearchBar:Xe}}),Le((Ne=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){var t;Object(l["a"])(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(_["a"])(Object(h["a"])(t),"accounts",tn.listAccounts()),Object(_["a"])(Object(h["a"])(t),"query",""),t}return Object(p["a"])(n,[{key:"updateSearch",value:function(){this.accounts=tn.listAccounts({search:this.query})}}]),n}(d["c"]),Ie=Ne))||Ie),nn=en,an=Object(j["a"])(nn,$e,Te,!1,null,null,null),rn=an.exports,cn=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},sn=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main main--centered"},[n("section",{staticClass:"page_intro page_intro--centered"},[n("i",{staticClass:"fas fa-search page_intro__icon"}),n("h1",{staticClass:"page_intro__header"},[t._v("404 Error")]),n("p",{staticClass:"page_intro__description"},[t._v("Couldn't find that page.")])])])}],on=Object(d["a"])(De=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return n}(d["c"]))||De,un=on,ln=Object(j["a"])(un,cn,sn,!1,null,null,null),pn=ln.exports,hn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Redirecting")},mn=[],fn=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main main--centered"},[n("section",{staticClass:"page_intro page_intro--centered"},[n("i",{staticClass:"fas fa-spinner fa-spin fa-5x"}),n("h1",{staticClass:"page_intro__header"},[t._v("Redirecting...")]),n("p",{staticClass:"page_intro__description"},[t._v("You should be redirected shortly")])])])}],dn={},vn=Object(j["a"])(dn,fn,_n,!1,null,null,null),bn=vn.exports,gn=(Me=Object(d["a"])({components:{Redirecting:bn}}),Me(Ue=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return Object(p["a"])(n,[{key:"mounted",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=common.getClient("https://api.polytopia.fun"),!e.getSelf){t.next=7;break}return t.next=4,e.getSelf();case 4:return n=t.sent,this.$router.push({path:"/account/".concat(n.id)}),t.abrupt("return");case 7:window.location.href="https://discord.com/api/oauth2/authorize?response_type=token&scope=identify&client_id=822436180439203861&redirect_uri=https://polytopia.fun/login/callback";case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(d["c"]))||Ue),yn=gn,jn=Object(j["a"])(yn,hn,mn,!1,null,null,null),On=jn.exports,Cn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Redirecting")},wn=[],kn=(n("2b3d"),n("d3b7"),n("3ca3"),n("ddb0"),Fe=Object(d["a"])({components:{Redirecting:bn}}),Fe(ze=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return Object(p["a"])(n,[{key:"mounted",value:function(){var t=new URLSearchParams(window.location.hash.substr(1)),e=t.get("scope")||"";e.indexOf("identify")<0?this.failLogin():this.loginWith(t.get("access_token"))}},{key:"failLogin",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$router.push({path:"/"});case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"loginWith",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var n,a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=common.getClient("https://api.polytopia.fun"),t.next=3,n.discordAuthenticate(e);case 3:return a=t.sent,common.login(a),r=common.getClient("https://api.polytopia.fun"),t.next=8,r.getSelf();case 8:c=t.sent,this.$emit("reloadNavbar"),this.$router.push({path:"/account/".concat(c.id)});case 11:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),n}(d["c"]))||ze),xn=kn,Pn=Object(j["a"])(xn,Cn,wn,!1,null,null,null),An=Pn.exports,$n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Redirecting")},Tn=[],Rn=(qe=Object(d["a"])({components:{Redirecting:bn}}),qe(We=function(t){Object(m["a"])(n,t);var e=Object(f["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return Object(p["a"])(n,[{key:"mounted",value:function(){common.logout(),this.$emit("reloadNavbar"),this.$router.push({path:"/"})}}]),n}(d["c"]))||We),En=Rn,Sn=Object(j["a"])(En,$n,Tn,!1,null,null,null),Ln=Sn.exports;s["a"].use(J["a"]);var In=[{path:"/",component:at},{path:"/about",component:ut},{path:"/accounts",component:rn},{path:"/account/:id",component:Ae},{path:"/account/:id/manage",component:je},{path:"/login",component:On},{path:"/login/callback",component:An},{path:"/logout",component:Ln},{path:"**",component:pn}],Nn=new J["a"]({mode:"history",base:"/",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:In}),Dn=Nn;s["a"].config.productionTip=!1,new s["a"]({router:Dn,render:function(t){return t(E)}}).$mount("#app")},cf25:function(t,e,n){"use strict";n("fea6")},d200:function(t,e,n){},d692:function(t,e,n){},e054:function(t,e,n){},eb81:function(t,e,n){},f33a:function(t,e,n){},fea6:function(t,e,n){},fec6:function(t,e,n){"use strict";n("c5a9")}});
//# sourceMappingURL=app.e8daddae.js.map