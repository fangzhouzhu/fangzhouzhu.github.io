webpackJsonp([3],{"+Nj0":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o("YiXb"),s=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,function(){return r[e]})}(n);var i=o("8Kqj");var a=function(e){o("SrXq")},c=o("VU/8")(s.a,i.a,!1,a,"data-v-285914fa",null);t.default=c.exports},"8Kqj":function(e,t,o){"use strict";var r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"login"}},[o("div",{staticClass:"login-bg"},[o("div",{staticClass:"login-box"},[o("h1",{staticClass:"login-logo"},[e._v("LOGO位置")]),e._v(" "),o("div",{staticClass:"login-main"},[o("p",{staticClass:"login-input"},[o("span",{staticClass:"login-icon login-username"}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.name,expression:"formRegister.name"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.formRegister.name},on:{input:function(t){t.target.composing||e.$set(e.formRegister,"name",t.target.value)}}})]),e._v(" "),o("p",{staticClass:"login-input"},[o("span",{staticClass:"login-icon login-password"}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.password,expression:"formRegister.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.formRegister.password},on:{input:function(t){t.target.composing||e.$set(e.formRegister,"password",t.target.value)}}})]),e._v(" "),o("p",{staticStyle:{"margin-bottom":"30px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.rememberPassword,expression:"rememberPassword"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.rememberPassword)?e._i(e.rememberPassword,null)>-1:e.rememberPassword},on:{change:function(t){var o=e.rememberPassword,r=t.target,s=!!r.checked;if(Array.isArray(o)){var n=e._i(o,null);r.checked?n<0&&(e.rememberPassword=o.concat([null])):n>-1&&(e.rememberPassword=o.slice(0,n).concat(o.slice(n+1)))}else e.rememberPassword=s}}}),e._v(" "),o("span",{staticClass:"rem-pwd"},[e._v("记住密码")])]),e._v(" "),o("p",{staticClass:"login-btn button1Css"},[o("a",{on:{click:function(t){e.handleSubmit(e.formRegister)}}},[e._v("登录")])]),e._v(" "),o("div",{staticClass:"login-bom"},[o("p",[o("router-link",{attrs:{to:"/user/retrieve"}},[e._v("忘记密码")]),e._v(" |\n                        "),o("a",{attrs:{href:"http://www.litsoft.com.cn/pc/index.html"}},[e._v("联和利泰官网")])],1)])])])])])},staticRenderFns:[]};t.a=r},SrXq:function(e,t){},YiXb:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,s=o("7+uW");(r=s)&&r.__esModule;t.default={data:function(){return{loginModel:!1,formLeft:{ip:"",port:""},formRegister:{name:"admin",password:"admin"},rememberPassword:!1}},methods:{handleSubmit:function(e){"admin"==this.formRegister.name&&"admin"==this.formRegister.password?this.$router.push({path:"/screen"}):alert("密码错误")},loadAccountInfo:function(){this.getCookie("accountInfo");var e=localStorage.getItem("loginInfo");if(0==Boolean(e))return console.log("cookie中没有检测到账号信息！"),!1;console.log("cookie中检测到账号信息！现在开始预填写！");var t,o,r=e.indexOf("&");t=e.substring(0,r),o=e.substring(r+1),this.formRegister.email=t,this.formRegister.password=o,this.rememberPassword=!0},setCookie:function(e,t,o){var r=new Date;r.setTime(r.getTime()+60*o*1e3),document.cookie=e+"="+escape(t)+(null==o?"":";expires="+r.toGMTString())},getCookie:function(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(-1!=t){t=t+e.length+1;var o=document.cookie.indexOf(";",t);return-1==o&&(o=document.cookie.length),unescape(document.cookie.substring(t,o))}}return""},delCookie:function(e){var t=new Date;t.setTime(t.getTime()-1);var o=this.getCookie(e);null!=o&&(document.cookie=e+"="+o+";expires="+t.toGMTString())}},mounted:function(){var e=this;document.getElementById("login").onkeydown=function(t){13==t.keyCode&&e.handleSubmit()};this.loadAccountInfo()}}}});