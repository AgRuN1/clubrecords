!function(r){function e(t){if(n[t])return n[t].exports;var a=n[t]={exports:{},id:t,loaded:!1};return r[t].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=r,e.c=n,e.p="",e(0)}({0:function(r,e,n){"use strict";var t=n(5);window.addEventListener("load",function(){$(".auth").on("submit",function(r){$(".alert-error").remove();var e=$('[name="login"]').val(),n=$('[name="pass"]').val(),a=$(".error");(0,t.validLogin)(e,a)&&(0,t.validPass)(n,a)||r.preventDefault()})})},5:function(r,e){"use strict";function n(r,e,n){r.append('<aside class="alert alert-'+n+' alert-error"><strong>'+e+"</strong></aside>")}function t(r,e){return r=r.trim(),r?!(r.length<4)||(n(e,"Логин слишком короткий","danger"),!1):(n(e,"Логин не введен","danger"),!1)}function a(r,e){return r=r.trim(),r?!(r.length<6)||(n(e,"Пароль слишком короткий","danger"),!1):(n(e,"Пароль не введен","danger"),!1)}Object.defineProperty(e,"__esModule",{value:!0}),e.showError=n,e.validLogin=t,e.validPass=a}});
//# sourceMappingURL=checkAuth.js.map