webpackJsonp([5],{"4bDD":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/oeL"),c=function(){return function(){}}(),o=n("BkNc"),u=n("F24s"),i=n("jHzq"),l=function(){function e(e,t,n){this.activatedRoute=e,this.coreService=t,this.redirectService=n}return e.prototype.ngOnInit=function(){var e=this;this.coreService.showLoaderOnScreen(),this.activatedRoute.queryParamMap.subscribe(function(t){e.redirectUrl=t.get("redirect_url"),e.authenticated=Number(t.get("authenticated")),e.courseId=Number(t.get("courseId")),e.batchId=Number(t.get("batchId")),e.batchWebinarId=Number(t.get("batchWebinarId")),e.isInstructor=Number(t.get("isInstructor"))}),this.redirectService.checkLoginAndDoRedirection(this.redirectUrl,this.authenticated,this.isInstructor,this.batchId,this.batchWebinarId,this.courseId),this.coreService.hideLoaderFromScreen()},e.ctorParameters=function(){return[{type:o.a},{type:i.a},{type:u.a}]},e}(),a=[[""]],d=r["\u0275crt"]({encapsulation:0,styles:a,data:{}});function s(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,0,"p",[],null,null,null,null,null)),(e()(),r["\u0275ted"](-1,null,["\n"]))],null,null)}var p=r["\u0275ccf"]("app-process-user-redirect",l,function(e){return r["\u0275vid"](0,[(e()(),r["\u0275eld"](0,0,null,null,1,"app-process-user-redirect",[],null,null,null,s,d)),r["\u0275did"](1,114688,null,0,l,[o.a,i.a,u.a],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),h=n("qbdv");n.d(t,"RedirectModuleNgFactory",function(){return m});var m=r["\u0275cmf"](c,[],function(e){return r["\u0275mod"]([r["\u0275mpd"](512,r.ComponentFactoryResolver,r["\u0275CodegenComponentFactoryResolver"],[[8,[p]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["\u0275mpd"](4608,h.NgLocalization,h.NgLocaleLocalization,[r.LOCALE_ID]),r["\u0275mpd"](512,o.p,o.p,[[2,o.u],[2,o.l]]),r["\u0275mpd"](512,h.CommonModule,h.CommonModule,[]),r["\u0275mpd"](512,c,c,[]),r["\u0275mpd"](1024,o.j,function(){return[[{path:"",component:l}]]},[])])})}});