(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{515:function(u,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return c});var a=n(0),f=n.n(a),t=n(1),r=n.n(t),o=n(530),d=n.n(o),i=n(16),x=function(u){var e=u.data.allMarkdownRemark.group;return f.a.createElement("div",null,f.a.createElement("div",null,f.a.createElement("h1",null,"Tags"),f.a.createElement("ul",null,e.map(function(u){return f.a.createElement("li",{key:u.fieldValue},f.a.createElement(i.a,{to:"/tags/"+d()(u.fieldValue)+"/"},u.fieldValue," (",u.totalCount,")"))}))))};x.propTypes={data:r.a.shape({allMarkdownRemark:r.a.shape({group:r.a.arrayOf(r.a.shape({fieldValue:r.a.string.isRequired,totalCount:r.a.number.isRequired}).isRequired)}),site:r.a.shape({siteMetadata:r.a.shape({title:r.a.string.isRequired})})})},e.default=x;var c="3593768641"},530:function(u,e,n){var a=n(531)(function(u,e,n){return u+(n?"-":"")+e.toLowerCase()});u.exports=a},531:function(u,e,n){var a=n(252),f=n(532),t=n(535),r=RegExp("['’]","g");u.exports=function(u){return function(e){return a(t(f(e).replace(r,"")),u,"")}}},532:function(u,e,n){var a=n(533),f=n(108),t=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");u.exports=function(u){return(u=f(u))&&u.replace(t,a).replace(r,"")}},533:function(u,e,n){var a=n(534)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});u.exports=a},534:function(u,e){u.exports=function(u){return function(e){return null==u?void 0:u[e]}}},535:function(u,e,n){var a=n(536),f=n(537),t=n(108),r=n(538);u.exports=function(u,e,n){return u=t(u),void 0===(e=n?void 0:e)?f(u)?r(u):a(u):u.match(e)||[]}},536:function(u,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;u.exports=function(u){return u.match(n)||[]}},537:function(u,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;u.exports=function(u){return n.test(u)}},538:function(u,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+n+"]",f="\\d+",t="[\\u2700-\\u27bf]",r="[a-z\\xdf-\\xf6\\xf8-\\xff]",o="[^\\ud800-\\udfff"+n+f+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",x="[A-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:"+r+"|"+o+")",l="(?:"+x+"|"+o+")",s="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,i].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),E="(?:"+[t,d,i].join("|")+")"+p,g=RegExp([x+"?"+r+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,x,"$"].join("|")+")",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,x+c,"$"].join("|")+")",x+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?",x+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",f,E].join("|"),"g");u.exports=function(u){return u.match(g)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-js-56e020e3e79cd5ef80e9.js.map