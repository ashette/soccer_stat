(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("NavbarComponent"),a("v-main",{staticClass:"d-flex flex-column"},[a("v-container",{staticClass:"main-container__wrap d-flex",attrs:{fluid:""}},[a("v-container",{staticClass:"main-container px-sm-8 my-8 rounded-lg",attrs:{fluid:""}},[a("router-view")],1)],1)],1),a("v-footer",{staticClass:"justify-center",attrs:{app:"",absolute:""}},[a("div",{staticClass:"footer"},[a("p",{staticClass:"footer-text text-center font-weight-light"},[e._v(" Soccer statistics. 2022 © All rights reserved. ")])])])],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("v-app-bar",{staticClass:"deep-purple lighten-2 white--text",attrs:{app:"",absolute:""}},[a("v-app-bar-nav-icon",{staticClass:"hidden-sm-and-up white--text",on:{click:function(t){e.menu=!e.menu}}}),a("v-toolbar-title",{attrs:{to:"/"}},[e._v("Soccer Stat")]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-xs-only"},[a("v-btn",{staticClass:"white--text",attrs:{text:"",to:"/"}},[e._v(" Home ")]),a("v-btn",{staticClass:"white--text",attrs:{text:"",to:"/teams"}},[e._v(" Teams ")])],1)],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[a("v-list-item",{attrs:{to:"/"}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-title",[e._v("Home")])],1),a("v-list-item",{attrs:{to:"/teams"}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-account")])],1),a("v-list-item-title",[e._v("Teams")])],1)],1)],1)],1)],1)},s=[],c={data:function(){return{menu:!1}}},l=c,u=a("2877"),d=a("6544"),m=a.n(d),p=a("40dc"),f=a("5bc1"),v=a("8336"),h=a("132d"),g=a("8860"),b=a("da13"),x=a("1baa"),_=a("34c3"),C=a("5d23"),T=a("f774"),w=a("2fa4"),y=a("2a7f"),F=Object(u["a"])(l,i,s,!1,null,null,null),k=F.exports;m()(F,{VAppBar:p["a"],VAppBarNavIcon:f["a"],VBtn:v["a"],VIcon:h["a"],VList:g["a"],VListItem:b["a"],VListItemGroup:x["a"],VListItemIcon:_["a"],VListItemTitle:C["b"],VNavigationDrawer:T["a"],VSpacer:w["a"],VToolbarItems:y["a"],VToolbarTitle:y["b"]});var D={components:{NavbarComponent:k}},V=D,L=(a("5c0b"),a("7496")),O=a("a523"),j=a("553a"),E=a("f6c4"),M=Object(u["a"])(V,n,o,!1,null,null,null),S=M.exports;m()(M,{VApp:L["a"],VContainer:O["a"],VFooter:j["a"],VMain:E["a"]});var R=a("8c4f"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLoading?a("Loader"):e.errorCode?a("Error",{attrs:{errorCode:e.errorCode}}):a("v-row",[a("v-container",[a("div",[a("h1",{staticClass:"py-5 text-center text-uppercase"},[e._v(" Competitions list ")])]),a("v-text-field",{attrs:{"prepend-icon":"mdi-magnify",label:"Search by name"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("v-list",{attrs:{"two-line":""}},[a("v-list-item-group",[e._l(e.filteredCompetitions,(function(t,r){return[a("v-list-item",{key:t.id,attrs:{to:"/competitions/"+t.id}},[[t.emblemUrl?a("v-list-item-avatar",[a("v-img",{attrs:{src:t.emblemUrl}})],1):a("v-list-item-avatar",{attrs:{color:"primary lighten-1"}},[a("span",{staticClass:"white--text"},[e._v(e._s(t.name.charAt(0)))])]),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)]],2),r<e.filteredCompetitions.length-1?a("v-divider",{key:r}):e._e()]}))],2)],1)],1)],1)},P=[],I=a("1da1"),B=(a("4de4"),a("d3b7"),a("caad"),a("2532"),a("b0c0"),a("96cf"),a("99af"),a("bc3a")),A=a.n(B),q=A.a.create({baseURL:"http://api.football-data.org/v2",withCredentials:!1,headers:{"X-Auth-Token":"ab95f9b0642d4bb6987335249a48b770"}});q.interceptors.request.use(null,(function(e){return Promise.reject(e)})),q.interceptors.response.use(null,(function(e){return Promise.reject(e)}));var N=q,U={getCompetitions:function(){return Object(I["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.get("/competitions");case 2:return t=e.sent,e.abrupt("return",t.data.competitions);case 4:case"end":return e.stop()}}),e)})))()},getMatches:function(e){var t=arguments;return Object(I["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:"",a.next=3,N.get("/competitions/".concat(e,"/matches").concat(r));case 3:return n=a.sent,a.abrupt("return",n.data);case 5:case"end":return a.stop()}}),a)})))()},getTeams:function(){return Object(I["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.get("/teams");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},getTeamData:function(e){return Object(I["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,N.get("/teams/".concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},getTeamMatches:function(e){var t=arguments;return Object(I["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.length>1&&void 0!==t[1]?t[1]:"",a.next=3,N.get("/teams/".concat(e,"/matches").concat(r));case 3:return n=a.sent,a.abrupt("return",n.data.matches);case 5:case"end":return a.stop()}}),a)})))()}},G={handleError:function(e){var t=e.response;return t&&t.status?t.status:"Network error"}},H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-alert",{staticClass:"m-4",attrs:{text:"",color:"error"}},[a("h1",{staticClass:"text-h1"},[e._v(" "+e._s(e.error.code)+" ")]),a("div",[e._v(e._s(e.error.title))]),a("v-divider",{staticClass:"my-4 error",staticStyle:{opacity:"0.22"}}),a("v-row",{attrs:{align:"center","no-gutters":""}},[a("v-col",{staticClass:"grow"},[e._v(" "+e._s(e.error.message)+" ")]),a("v-spacer"),a("v-col",{staticClass:"shrink"},[e.error.homepage?a("v-btn",{attrs:{color:"error",outlined:"",to:"/"}},[e._v(" Go to homepage ")]):e._e()],1)],1)],1)},J=[],K={props:["errorCode"],data:function(){return{error:{code:null,title:null,message:null,homepage:!0}}},mounted:function(){switch(this.error.code=this.errorCode,this.errorCode){case 400:this.error.title="Bad request",this.error.message="You've sent a bad request";break;case 403:this.error.title="Access denied / Forbidden",this.error.message="This page you were trying to reach is absolutely forbidden for some reason";break;case 404:this.error.title="OOPS! Page does not exist :(",this.error.message="The requested URL was not found on this server";break;case 429:this.error.title="Too many requests",this.error.message="Please try later";break;default:this.error.title="Sorry something went wrong",this.error.message="Please try later",this.error.homepage=!1;break}}},z=K,X=a("0798"),Y=a("62ad"),Q=a("ce7e"),W=a("0fd9"),Z=Object(u["a"])(z,H,J,!1,null,null,null),ee=Z.exports;m()(Z,{VAlert:X["a"],VBtn:v["a"],VCol:Y["a"],VDivider:Q["a"],VRow:W["a"],VSpacer:w["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-center align-center"},[a("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1)},ae=[],re={},ne=re,oe=a("490a"),ie=Object(u["a"])(ne,te,ae,!1,null,null,null),se=ie.exports;m()(ie,{VProgressCircular:oe["a"]});var ce={components:{Error:ee,Loader:se},name:"home",data:function(){return{isLoading:!0,competitions:null,errorCode:null,filter:""}},mounted:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.getCompetitions();case 3:e.competitions=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.errorCode=G.handleError(t.t0);case 9:return t.prev=9,e.isLoading=!1,t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})))()},computed:{filteredCompetitions:function(){var e=this;return!!this.competitions&&this.competitions.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())}))}}},le=ce,ue=a("adda"),de=a("8270"),me=a("8654"),pe=Object(u["a"])(le,$,P,!1,null,null,null),fe=pe.exports;m()(pe,{VContainer:O["a"],VDivider:Q["a"],VImg:ue["a"],VList:g["a"],VListItem:b["a"],VListItemAvatar:de["a"],VListItemContent:C["a"],VListItemGroup:x["a"],VListItemTitle:C["b"],VRow:W["a"],VTextField:me["a"]});var ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLoading?a("Loader"):e.errorCode?a("Error",{attrs:{errorCode:e.errorCode}}):a("div",{staticClass:"d-flex flex-column"},[e.competition?[a("div",[a("h1",[e._v(" "+e._s(e.competition.name)+" "),a("span",{staticClass:"competition-area py-4 text-muted"},[e._v("("+e._s(e.competition.area.name)+")")])])]),e.matches?a("div",{staticClass:"matches-table"},[a("div",[a("ListFilter",{attrs:{getFilteredData:e.filterByDate,dateFrom:e.dateFrom,dateTo:e.dateTo,updatedDateFrom:e.dateFrom,updatedDateTo:e.dateTo},on:{"update:updatedDateFrom":function(t){e.dateFrom=t},"update:updated-date-from":function(t){e.dateFrom=t},"update:updatedDateTo":function(t){e.dateTo=t},"update:updated-date-to":function(t){e.dateTo=t}}}),a("MatchCalendar",{attrs:{matches:e.matches}})],1)]):e._e()]:e._e()],2)},he=[],ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.matches.length?a("div",{staticClass:"d-flex flex-column"},[[a("v-data-table",{staticClass:"elevation-1 flex-grow-1",attrs:{headers:e.matchFields,items:e.matches,page:e.page,"items-per-page":e.itemsPerPage,"hide-default-footer":""},on:{"update:page":function(t){e.page=t},"page-count":function(t){e.pageCount=t}},scopedSlots:e._u([{key:"item.formatedDate",fn:function(t){var r=t.item;return[a("div",{staticClass:"d-flex flex-wrap align-items-center"},[a("span",{staticClass:"match-date me-4 my-1"},[e._v(" "+e._s(e.formatDate(r.utcDate))+" ")]),a("v-chip",{staticClass:"my-1",class:"finished"==r.status.toLowerCase()?"status_finished white--text":"status_not_finished"},[e._v(e._s(r.status)+" ")])],1)]}},{key:"item.opponents",fn:function(t){var r=t.item;return[a("strong",[e._v(e._s(r.awayTeam.name||"--?--"))]),e._v(" vs "),a("strong",[e._v(e._s(r.homeTeam.name||"--?--"))])]}},{key:"item.formatedScore",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.formatScore(a))+" ")]}}],null,!0)}),a("v-pagination",{staticClass:"my-2",attrs:{color:"secondary","total-visible":"6",length:e.pageCount},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})]],2):a("div",{staticClass:"text-center py-16"},[a("p",[e._v("No matches.")])])},be=[],xe={props:{matches:Array},data:function(){return{page:1,pageCount:0,itemsPerPage:10,matchFields:[{text:"Date",value:"formatedDate",sortable:!1},{text:"Opponents",value:"opponents",sortable:!1},{text:"Score",value:"formatedScore",sortable:!1}]}},methods:{formatDate:function(e){var t={day:"numeric",month:"numeric",year:"numeric",hour:"numeric",minute:"2-digit"};return new Date(e).toLocaleString([],t)},formatScore:function(e){var t=null!=e.score.fullTime.awayTeam?e.score.fullTime.awayTeam:"...",a=null!=e.score.fullTime.homeTeam?e.score.fullTime.homeTeam:"...";return"".concat(t,":").concat(a)}}},_e=xe,Ce=a("cc20"),Te=a("8fea"),we=a("891e"),ye=Object(u["a"])(_e,ge,be,!1,null,null,null),Fe=ye.exports;m()(ye,{VChip:Ce["a"],VDataTable:Te["a"],VPagination:we["a"]});var ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filter my-5 d-flex justify-end align-center"},[a("v-dialog",{ref:"calendarMenuFrom",attrs:{"close-on-content-click":!1,persistent:"",width:"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"datepicker-input mr-sm-8 flex-grow-0",attrs:{label:"Choose date: From","append-icon":"mdi-calendar",readonly:""},model:{value:e.updatedDateFrom,callback:function(t){e.updatedDateFrom=t},expression:"updatedDateFrom"}},"v-text-field",n,!1),r))]}}]),model:{value:e.calendarMenuFrom,callback:function(t){e.calendarMenuFrom=t},expression:"calendarMenuFrom"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.updatedDateFrom,callback:function(t){e.updatedDateFrom=t},expression:"updatedDateFrom"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.calendarMenuFrom=!1}}},[e._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.calendarMenuFrom.save(e.updatedDateFrom)}}},[e._v(" OK ")])],1)],1),a("v-dialog",{ref:"calendarMenuTo",attrs:{"close-on-content-click":!1,persistent:"",width:"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"datepicker-input flex-grow-0",attrs:{label:"Choose date: To","append-icon":"mdi-calendar",readonly:""},model:{value:e.updatedDateTo,callback:function(t){e.updatedDateTo=t},expression:"updatedDateTo"}},"v-text-field",n,!1),r))]}}]),model:{value:e.calendarMenuTo,callback:function(t){e.calendarMenuTo=t},expression:"calendarMenuTo"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.updatedDateTo,callback:function(t){e.updatedDateTo=t},expression:"updatedDateTo"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.calendarMenuTo=!1}}},[e._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.calendarMenuTo.save(e.updatedDateTo)}}},[e._v(" OK ")])],1)],1),e.dateFrom&&e.dateTo?a("v-btn",{staticClass:"filter-btn ml-sm-8",attrs:{color:"secondary"},on:{click:e.getFilteredData}},[e._v("Find")]):e._e()],1)},De=[],Ve={props:{dateFrom:String,dateTo:String,getFilteredData:Function},data:function(){return{calendarMenuFrom:!1,calendarMenuTo:!1}},computed:{updatedDateFrom:{get:function(){return this.dateFrom},set:function(e){this.$emit("update:updatedDateFrom",e)}},updatedDateTo:{get:function(){return this.dateTo},set:function(e){this.$emit("update:updatedDateTo",e)}}}},Le=Ve,Oe=a("2e4b"),je=a("169a"),Ee=Object(u["a"])(Le,ke,De,!1,null,null,null),Me=Ee.exports;m()(Ee,{VBtn:v["a"],VDatePicker:Oe["a"],VDialog:je["a"],VSpacer:w["a"],VTextField:me["a"]});var Se={components:{Error:ee,MatchCalendar:Fe,Loader:se,ListFilter:Me},data:function(){return{competition:null,competitionID:null,matches:null,errorCode:null,isLoading:!0,dateFrom:null,dateTo:null}},methods:{getMatches:function(e){var t=arguments,a=this;return Object(I["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:"",r.prev=1,r.next=4,U.getMatches(e,n);case 4:o=r.sent,a.competition=o.competition,a.matches=o.matches,r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](1),a.errorCode=G.handleError(r.t0);case 12:return r.prev=12,a.isLoading=!1,r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[1,9,12,15]])})))()},filterByDate:function(){if(null!==this.dateFrom&&null!==this.dateTo){var e="?dateFrom=".concat(this.dateFrom,"&dateTo=").concat(this.dateTo);this.$router.push({query:{dateFrom:this.dateFrom,dateTo:this.dateTo}}).catch((function(){})),this.getMatches(this.$route.params.id,e)}}},mounted:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.dateFrom=e.$route.query.dateFrom,e.dateTo=e.$route.query.dateTo,!e.dateFrom||!e.dateTo){t.next=6;break}e.filterByDate(),t.next=8;break;case 6:return t.next=8,e.getMatches(e.$route.params.id);case 8:case"end":return t.stop()}}),t)})))()}},Re=Se,$e=Object(u["a"])(Re,ve,he,!1,null,null,null),Pe=$e.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLoading?a("Loader"):e.errorCode?a("Error",{attrs:{errorCode:e.errorCode}}):a("v-row",[a("v-container",[a("div",[a("h1",{staticClass:"py-5 text-center text-uppercase"},[e._v("Teams list")])]),a("v-text-field",{attrs:{"prepend-icon":"mdi-magnify",label:"Search by name"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("v-list",{attrs:{"two-line":""}},[a("v-list-item-group",[e._l(e.filteredTeams,(function(t,r){return[a("v-list-item",{key:t.id,attrs:{to:"/teams/"+t.id+"/matches"}},[[t.crestUrl?a("v-list-item-avatar",[a("v-img",{attrs:{src:t.crestUrl}})],1):a("v-list-item-avatar",{attrs:{color:"primary lighten-1"}},[a("span",{staticClass:"white--text"},[e._v(e._s(t.name.charAt(0)))])]),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)]],2),r<e.filteredTeams.length-1?a("v-divider",{key:r}):e._e()]}))],2)],1)],1)],1)},Be=[],Ae={name:"TeamList",components:{Error:ee,Loader:se},data:function(){return{teams:null,errorCode:null,isLoading:!0,filter:""}},mounted:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.getTeams();case 3:a=t.sent,e.teams=a.teams,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.errorCode=G.handleError(t.t0);case 10:return t.prev=10,e.isLoading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))()},computed:{filteredTeams:function(){var e=this;return!!this.teams&&this.teams.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())}))}}},qe=Ae,Ne=Object(u["a"])(qe,Ie,Be,!1,null,null,null),Ue=Ne.exports;m()(Ne,{VContainer:O["a"],VDivider:Q["a"],VImg:ue["a"],VList:g["a"],VListItem:b["a"],VListItemAvatar:de["a"],VListItemContent:C["a"],VListItemGroup:x["a"],VListItemTitle:C["b"],VRow:W["a"],VTextField:me["a"]});var Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLoading?a("Loader"):e.errorCode?a("Error",{attrs:{errorCode:e.errorCode}}):a("div",{staticClass:"d-flex flex-column"},[e.team?[a("div",[a("h1",[e._v(" "+e._s(e.team.name)+" "),a("span",{staticClass:"competition-area py-4 text-muted"},[e._v("("+e._s(e.team.area.name)+")")])])]),e.matches?a("div",{staticClass:"matches-table"},[a("ListFilter",{attrs:{getFilteredData:e.filterByDate,dateFrom:e.dateFrom,dateTo:e.dateTo,updatedDateFrom:e.dateFrom,updatedDateTo:e.dateTo},on:{"update:updatedDateFrom":function(t){e.dateFrom=t},"update:updated-date-from":function(t){e.dateFrom=t},"update:updatedDateTo":function(t){e.dateTo=t},"update:updated-date-to":function(t){e.dateTo=t}}}),a("MatchCalendar",{attrs:{matches:e.matches}})],1):e._e()]:e._e()],2)},He=[],Je={components:{Error:ee,MatchCalendar:Fe,Loader:se,ListFilter:Me},data:function(){return{team:null,matches:null,errorCode:null,isLoading:!0,dateFrom:null,dateTo:null}},methods:{getTeamMatches:function(e){var t=arguments,a=this;return Object(I["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:"",r.prev=1,r.next=4,U.getTeamMatches(e,n);case 4:return o=r.sent,r.next=7,U.getTeamData(e);case 7:a.team=r.sent,a.matches=o,r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](1),a.errorCode=G.handleError(r.t0);case 14:return r.prev=14,a.isLoading=!1,r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[1,11,14,17]])})))()},filterByDate:function(){if(null!==this.dateFrom&&null!==this.dateTo){var e="?dateFrom=".concat(this.dateFrom,"&dateTo=").concat(this.dateTo);this.$router.push({query:{dateFrom:this.dateFrom,dateTo:this.dateTo}}).catch((function(){})),this.getTeamMatches(this.$route.params.id,e)}}},mounted:function(){var e=this;return Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.dateFrom=e.$route.query.dateFrom,e.dateTo=e.$route.query.dateTo,!e.dateFrom||!e.dateTo){t.next=6;break}e.filterByDate(),t.next=8;break;case 6:return t.next=8,e.getTeamMatches(e.$route.params.id);case 8:case"end":return t.stop()}}),t)})))()}},Ke=Je,ze=Object(u["a"])(Ke,Ge,He,!1,null,null,null),Xe=ze.exports,Ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Error",{attrs:{errorCode:404}})],1)},Qe=[],We={components:{Error:ee}},Ze=We,et=Object(u["a"])(Ze,Ye,Qe,!1,null,null,null),tt=et.exports;r["a"].use(R["a"]);var at=[{path:"/",name:"Home",component:fe},{path:"/competitions/:id",name:"League List",component:Pe},{path:"/teams",name:"Team list",component:Ue},{path:"/teams/:id/matches",name:"Team",component:Xe},{path:"/404",name:"404",component:tt},{path:"*",redirect:{name:"404"}}],rt=new R["a"]({mode:"history",routes:at}),nt=rt,ot=a("2f62");r["a"].use(ot["a"]);var it=new ot["a"].Store({actions:{},state:{isLoading:!0}}),st=a("f309");r["a"].use(st["a"]);var ct=new st["a"]({theme:{themes:{light:{primary:"#B39DDB",secondary:"#5E35B1",background:"#EEEEEE",status_finished:"#4CAF50",status_not_finished:"#4FC3F7"}},options:{customProperties:!0}}});r["a"].config.productionTip=!1,new r["a"]({router:nt,store:it,vuetify:ct,render:function(e){return e(S)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){}});
//# sourceMappingURL=app.c5ecda4c.js.map