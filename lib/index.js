!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("through"),require("request"),require("gulp-util")):"function"==typeof define&&define.amd?define(["through","request","gulp-util"],t):"object"==typeof exports?exports.gulpQcIcon=t(require("through"),require("request"),require("gulp-util")):e.gulpQcIcon=t(e.through,e.request,e["gulp-util"])}(global,(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var r=n(1),o=n(2),u=n(3),i=u.PluginError,f="gulp-qc-iconfont";e.exports=function(e){if(!(e=e||{}).url)throw new i(f,"Missing options url!");var t=e.url,n=t.replace(".css",""),c="boolean"!=typeof e.isDev||e.isDev,l=e.fontPath||"./iconfont/iconfont",p=e.fontExt||[".eot",".ttf",".svg",".woff",".woff2"],a=e.iconPrefix,s=e.keepIconFontStyle,g=r((function(e,t,n){this.push(e),n()}));return o({url:"http:"+t,encoding:"binary"},(function(e,r,i){var f=i;c||(f=f.replace(new RegExp(n,"g"),l));var d='/* 字体图标，来源路径："'+t+'"*/ \r\n',h=f.replace(/\.iconfont[\s\S]*?\}/,""),v=h.match(/\.icon\-[\s\S]*?\}/g),y=s?f:h;for(var b in d+=y.replace(/\.icon\-[\s\S]*?\}/g,""),v){var x=v[b];a&&(x=x.replace(/\.icon\-/,a)),d+=x+"\r\n"}d=(d=d.replace(/\r{2,}/g,"\r")).replace(/\n{2,}/g,"\n");var m=new u.File({path:"iconfont.css",contents:Buffer.from(d)});g.queue(m),!c&&p&&p.length>0?function e(t){var r=p[t];o("http:"+n+r,(function(n,o,i){var f=new u.File({path:l+r,contents:Buffer.from(i)});g.queue(f),t===p.length-1?g.emit("end"):(t++,e(t))}))}(0):g.emit("end")}),{throttle:1e3,delay:1e3}),g}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWxwUWNJY29uL21haW4uanMiXSwibmFtZXMiOlsicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsImdsb2JhbCIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzFfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzJfXyIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzNfXyIsIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJ0aHJvdWdoIiwicmVxdWVzdCIsImd1bHBVdGlsIiwiUGx1Z2luRXJyb3IiLCJQTFVHSU5fTkFNRSIsIm9wdGlvbnMiLCJ1cmwiLCJVUkwiLCJVUkxfUFJFRklYIiwicmVwbGFjZSIsIklTX0RFViIsImlzRGV2IiwiRk9OVF9QQVRIIiwiZm9udFBhdGgiLCJGT05UX0VYVF9MSVNUIiwiZm9udEV4dCIsIklDT05fUFJFRklYIiwiaWNvblByZWZpeCIsIktFRVBfSUNPTl9GT05UX1NUWUxFIiwia2VlcEljb25Gb250U3R5bGUiLCJzdHJlYW0iLCJmaWxlIiwiZW5jIiwiY2IiLCJ0aGlzIiwicHVzaCIsImVuY29kaW5nIiwiZXJyIiwicmVzIiwiYm9keSIsInJhd0RhdGEiLCJSZWdFeHAiLCJyZXN1bHQiLCJkZWxVbm5lY2Vzc2FyeSIsImljb25Dc3MiLCJtYXRjaCIsImhhbmRsZXJEYXRhIiwiaXRlbSIsIkNTU19GSUxFIiwiRmlsZSIsInBhdGgiLCJjb250ZW50cyIsIkJ1ZmZlciIsImZyb20iLCJxdWV1ZSIsImxlbmd0aCIsImRvd25sb2FkRm9udCIsImluZGV4IiwiRVhUIiwiSUNPTl9GSUxFIiwiZW1pdCIsInRocm90dGxlIiwiZGVsYXkiXSwibWFwcGluZ3MiOiJDQUFBLFNBQTJDQSxFQUFNQyxHQUMxQixpQkFBWkMsU0FBMEMsaUJBQVhDLE9BQ3hDQSxPQUFPRCxRQUFVRCxFQUFRRyxRQUFRLFdBQVlBLFFBQVEsV0FBWUEsUUFBUSxjQUNoRCxtQkFBWEMsUUFBeUJBLE9BQU9DLElBQzlDRCxPQUFPLENBQUMsVUFBVyxVQUFXLGFBQWNKLEdBQ2xCLGlCQUFaQyxRQUNkQSxRQUFvQixXQUFJRCxFQUFRRyxRQUFRLFdBQVlBLFFBQVEsV0FBWUEsUUFBUSxjQUVoRkosRUFBaUIsV0FBSUMsRUFBUUQsRUFBYyxRQUFHQSxFQUFjLFFBQUdBLEVBQUssY0FSdEUsQ0FTR08sUUFBUSxTQUFTQyxFQUFnQ0MsRUFBZ0NDLEdBQ3BGLE9BQWdCLFNBQVVDLEdBRWhCLElBQUlDLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVaLFFBR25DLElBQUlDLEVBQVNTLEVBQWlCRSxHQUFZLENBQ3pDQyxFQUFHRCxFQUNIRSxHQUFHLEVBQ0hkLFFBQVMsSUFVVixPQU5BUyxFQUFRRyxHQUFVRyxLQUFLZCxFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTVyxHQUcvRFYsRUFBT2EsR0FBSSxFQUdKYixFQUFPRCxRQTBEZixPQXJEQVcsRUFBb0JLLEVBQUlQLEVBR3hCRSxFQUFvQk0sRUFBSVAsRUFHeEJDLEVBQW9CTyxFQUFJLFNBQVNsQixFQUFTbUIsRUFBTUMsR0FDM0NULEVBQW9CVSxFQUFFckIsRUFBU21CLElBQ2xDRyxPQUFPQyxlQUFldkIsRUFBU21CLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVQsRUFBb0JlLEVBQUksU0FBUzFCLEdBQ1gsb0JBQVgyQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWV2QixFQUFTMkIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFldkIsRUFBUyxhQUFjLENBQUU2QixPQUFPLEtBUXZEbEIsRUFBb0JtQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUWxCLEVBQW9Ca0IsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFzQkEsR0FBU0EsRUFBTUcsV0FBWSxPQUFPSCxFQUNoRixJQUFJSSxFQUFLWCxPQUFPWSxPQUFPLE1BR3ZCLEdBRkF2QixFQUFvQmUsRUFBRU8sR0FDdEJYLE9BQU9DLGVBQWVVLEVBQUksVUFBVyxDQUFFVCxZQUFZLEVBQU1LLE1BQU9BLElBQ3RELEVBQVBFLEdBQTRCLGlCQUFURixFQUFtQixJQUFJLElBQUlNLEtBQU9OLEVBQU9sQixFQUFvQk8sRUFBRWUsRUFBSUUsRUFBSyxTQUFTQSxHQUFPLE9BQU9OLEVBQU1NLElBQVFDLEtBQUssS0FBTUQsSUFDOUksT0FBT0YsR0FJUnRCLEVBQW9CMEIsRUFBSSxTQUFTcEMsR0FDaEMsSUFBSW1CLEVBQVNuQixHQUFVQSxFQUFPK0IsV0FDN0IsV0FBd0IsT0FBTy9CLEVBQWdCLFNBQy9DLFdBQThCLE9BQU9BLEdBRXRDLE9BREFVLEVBQW9CTyxFQUFFRSxFQUFRLElBQUtBLEdBQzVCQSxHQUlSVCxFQUFvQlUsRUFBSSxTQUFTaUIsRUFBUUMsR0FBWSxPQUFPakIsT0FBT2tCLFVBQVVDLGVBQWUxQixLQUFLdUIsRUFBUUMsSUFHekc1QixFQUFvQitCLEVBQUksR0FJakIvQixFQUFvQkEsRUFBb0JnQyxFQUFJLEdBbkY3QyxDQXNGTixDQUVKLFNBQVUxQyxFQUFRRCxFQUFTVyxHQUVqQyxJQUFJaUMsRUFBVWpDLEVBQW9CLEdBRTlCa0MsRUFBVWxDLEVBQW9CLEdBRTlCbUMsRUFBV25DLEVBQW9CLEdBRS9Cb0MsRUFBY0QsRUFBU0MsWUFDdkJDLEVBQWMsbUJBdUVsQi9DLEVBQU9ELFFBckVQLFNBQXdCaUQsR0FFdEIsS0FEQUEsRUFBVUEsR0FBVyxJQUNSQyxJQUFLLE1BQU0sSUFBSUgsRUFBWUMsRUFBYSx3QkFDckQsSUFBSUcsRUFBTUYsRUFBUUMsSUFDZEUsRUFBYUQsRUFBSUUsUUFBUSxPQUFRLElBQ2pDQyxFQUFrQyxrQkFBbEJMLEVBQVFNLE9BQXNCTixFQUFRTSxNQUN0REMsRUFBWVAsRUFBUVEsVUFBWSxzQkFDaENDLEVBQWdCVCxFQUFRVSxTQUFXLENBQUMsT0FBUSxPQUFRLE9BQVEsUUFBUyxVQUNyRUMsRUFBY1gsRUFBUVksV0FDdEJDLEVBQXVCYixFQUFRYyxrQkFDL0JDLEVBQVNwQixHQUFRLFNBQVVxQixFQUFNQyxFQUFLQyxHQUN4Q0MsS0FBS0MsS0FBS0osR0FDVkUsT0FzREYsT0E5QkF0QixFQUFRLENBQ05LLElBQUssUUFBVUMsRUFDZm1CLFNBQVUsV0FDVCxTQUFVQyxFQUFLQyxFQUFLQyxHQUNyQixJQUFJQyxFQUFVRCxFQUNUbkIsSUFBUW9CLEVBQVVBLEVBQVFyQixRQUFRLElBQUlzQixPQUFPdkIsRUFBWSxLQUFNSSxJQUNwRSxJQUFJb0IsRUFBUyxpQkFBbUJ6QixFQUFNLFdBQ2xDMEIsRUFBaUJILEVBQVFyQixRQUFRLHVCQUF3QixJQUN6RHlCLEVBQVVELEVBQWVFLE1BQU0sdUJBQy9CQyxFQUFjbEIsRUFBdUJZLEVBQVVHLEVBR25ELElBQUssSUFBSWhFLEtBRlQrRCxHQUFVSSxFQUFZM0IsUUFBUSxzQkFBdUIsSUFFdkN5QixFQUFTLENBQ3JCLElBQUlHLEVBQU9ILEVBQVFqRSxHQUNmK0MsSUFBYXFCLEVBQU9BLEVBQUs1QixRQUFRLFdBQVlPLElBQ2pEZ0IsR0FBVUssRUFBTyxPQUluQkwsR0FEQUEsRUFBU0EsRUFBT3ZCLFFBQVEsVUFBVyxPQUNuQkEsUUFBUSxVQUFXLE1BQ25DLElBQUk2QixFQUFXLElBQUlwQyxFQUFTcUMsS0FBSyxDQUMvQkMsS0FBTSxlQUNOQyxTQUFVQyxPQUFPQyxLQUFLWCxLQUV4QlosRUFBT3dCLE1BQU1OLElBQ1o1QixHQUFVSSxHQUFpQkEsRUFBYytCLE9BQVMsRUE5Q2xDLFNBQVNDLEVBQWFDLEdBQ3ZDLElBQUlDLEVBQU1sQyxFQUFjaUMsR0FDeEI5QyxFQUFRLFFBQVVPLEVBQWF3QyxHQUFLLFNBQVVyQixFQUFLQyxFQUFLQyxHQUN0RCxJQUFJb0IsRUFBWSxJQUFJL0MsRUFBU3FDLEtBQUssQ0FDaENDLEtBQU01QixFQUFZb0MsRUFDbEJQLFNBQVVDLE9BQU9DLEtBQUtkLEtBRXhCVCxFQUFPd0IsTUFBTUssR0FFVEYsSUFBVWpDLEVBQWMrQixPQUFTLEVBQ25DekIsRUFBTzhCLEtBQUssUUFFWkgsSUFDQUQsRUFBYUMsT0FpQ3NDRCxDQUFhLEdBQUsxQixFQUFPOEIsS0FBSyxTQUNwRixDQUNEQyxTQUFVLElBQ1ZDLE1BQU8sTUFFRmhDLElBT0gsU0FBVS9ELEVBQVFELEdBRXhCQyxFQUFPRCxRQUFVTSxHQUlYLFNBQVVMLEVBQVFELEdBRXhCQyxFQUFPRCxRQUFVTyxHQUlYLFNBQVVOLEVBQVFELEdBRXhCQyxFQUFPRCxRQUFVUSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIifQ==