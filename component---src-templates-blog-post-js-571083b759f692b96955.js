(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{502:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(506),l=a(507),m=a(1),c=a.n(m),o=a(51),p=function(e){var t=e.title,a=e.description,n=e.image,m=e.pathname,c=e.article;return r.a.createElement(o.b,{query:u,render:function(e){var i=e.site,o=i.defaultTitle,p=i.titleTemplate,s=i.defaultDescription,u=i.siteUrl,d=i.defaultImage,g=i.twitterUsername,E={title:t||o,description:a||s,image:""+u+(n||d),url:""+u+(m||"/")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Helmet,{title:E.title,titleTemplate:p},r.a.createElement("meta",{name:"description",content:E.description}),r.a.createElement("meta",{name:"image",content:E.image}),E.url&&r.a.createElement("meta",{property:"og:url",content:E.url}),!c?null:r.a.createElement("meta",{property:"og:type",content:"article"}),E.title&&r.a.createElement("meta",{property:"og:title",content:E.title}),E.description&&r.a.createElement("meta",{property:"og:description",content:E.description}),E.image&&r.a.createElement("meta",{property:"og:image",content:E.image}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),g&&r.a.createElement("meta",{name:"twitter:creator",content:g}),E.title&&r.a.createElement("meta",{name:"twitter:title",content:E.title}),E.description&&r.a.createElement("meta",{name:"twitter:description",content:E.description}),E.image&&r.a.createElement("meta",{name:"twitter:image",content:E.image})))},data:i})},s=p,u="1387910276";p.propTypes={title:c.a.string,description:c.a.string,image:c.a.string,pathname:c.a.string,article:c.a.bool},p.defaultProps={title:null,description:null,image:null,pathname:null,article:!1},a.d(t,"query",function(){return d});t.default=function(e){var t=e.data.markdownRemark,a=t.frontmatter,n=t.html,i=t.fields,l=t.excerpt;return r.a.createElement("div",null,r.a.createElement(s,{title:a.title,description:a.description||l||"nothin’",pathname:i.slug,article:!0}),r.a.createElement("h1",null,a.title),r.a.createElement("h2",null,a.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}))};var d="3952412616"},506:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Luo Chuanjing's Blog",titleTemplate:"%s · The Real Hero",defaultDescription:"we are the world",siteUrl:"https://l704863851.github.io/my-blog",defaultImage:"https://s2.ax1x.com/2019/03/01/kbSpAU.jpg",twitterUsername:"@luochuanjing"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-571083b759f692b96955.js.map