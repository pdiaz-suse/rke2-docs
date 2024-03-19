"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[5181],{3185:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=l(5893),s=l(1151);const i={title:"\u5378\u8f7d"},r=void 0,a={id:"install/uninstall",title:"\u5378\u8f7d",description:"\u5378\u8f7d RKE2 \u4f1a\u5220\u9664\u96c6\u7fa4\u6570\u636e\u548c\u6240\u6709\u811a\u672c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/uninstall.md",sourceDirName:"install",slug:"/install/uninstall",permalink:"/zh/install/uninstall",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/uninstall.md",tags:[],version:"current",lastUpdatedAt:1710866752,formattedLastUpdatedAt:"2024\u5e743\u670819\u65e5",frontMatter:{title:"\u5378\u8f7d"},sidebar:"mySidebar",previous:{title:"\u7ba1\u7406 Server \u89d2\u8272",permalink:"/zh/install/server_roles"},next:{title:"\u6982\u8ff0",permalink:"/zh/upgrade/"}},o={},d=[{value:"Linux \u5378\u8f7d",id:"linux-\u5378\u8f7d",level:2},{value:"RPM \u65b9\u6cd5",id:"rpm-\u65b9\u6cd5",level:3},{value:"Tarball \u65b9\u6cd5",id:"tarball-\u65b9\u6cd5",level:3},{value:"Windows \u5378\u8f7d",id:"windows-\u5378\u8f7d",level:2}];function c(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsx)(e.p,{children:"\u5378\u8f7d RKE2 \u4f1a\u5220\u9664\u96c6\u7fa4\u6570\u636e\u548c\u6240\u6709\u811a\u672c\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"linux-\u5378\u8f7d",children:"Linux \u5378\u8f7d"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0d\u540c\u7684 RKE2 \u5b89\u88c5\u65b9\u6cd5\u5bf9\u5e94\u7684\u5378\u8f7d\u6d41\u7a0b\u4e0d\u540c\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"rpm-\u65b9\u6cd5",children:"RPM \u65b9\u6cd5"}),"\n",(0,t.jsxs)(e.p,{children:["\u8981\u4ece\u7cfb\u7edf\u4e2d\u5378\u8f7d\u901a\u8fc7 RPM \u5b89\u88c5\u7684 RKE2\uff0c\u53ea\u9700\u4ee5 root \u7528\u6237\u6216\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"sudo"})," \u8fd0\u884c\u4f60\u7684 RKE2 \u7248\u672c\u5bf9\u5e94\u7684\u547d\u4ee4\u3002\u8fd9\u5c06\u5173\u95ed RKE2 \u8fdb\u7a0b\uff0c\u5220\u9664 RKE2 RPM\uff0c\u5e76\u6e05\u7406 RKE2 \u4f7f\u7528\u7684\u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"/usr/bin/rke2-uninstall.sh\n"})}),"\n",(0,t.jsx)(e.h3,{id:"tarball-\u65b9\u6cd5",children:"Tarball \u65b9\u6cd5"}),"\n",(0,t.jsx)(e.p,{children:"\u8981\u4ece\u7cfb\u7edf\u4e2d\u5378\u8f7d\u901a\u8fc7 Tarball \u65b9\u6cd5\u5b89\u88c5\u7684 RKE2\uff0c\u53ea\u9700\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u8fd9\u5c06\u7ec8\u6b62\u8fdb\u7a0b\uff0c\u5220\u9664 RKE2 \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e76\u6e05\u7406 RKE2 \u4f7f\u7528\u7684\u6587\u4ef6\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"/usr/local/bin/rke2-uninstall.sh\n"})}),"\n",(0,t.jsx)(e.h2,{id:"windows-\u5378\u8f7d",children:"Windows \u5378\u8f7d"}),"\n",(0,t.jsx)(e.p,{children:"\u8981\u4ece\u7cfb\u7edf\u4e2d\u5378\u8f7d\u4f7f\u7528 tarball \u5b89\u88c5\u7684 RKE2 Windows Agent\uff0c\u4f60\u53ea\u9700\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u8fd9\u5c06\u5173\u95ed\u6240\u6709 RKE2 Windows \u8fdb\u7a0b\uff0c\u5220\u9664 RKE2 Windows \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e76\u6e05\u7406 RKE2 \u4f7f\u7528\u7684\u6587\u4ef6\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-powershell",children:"c:/usr/local/bin/rke2-uninstall.ps1\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},1151:(n,e,l)=>{l.d(e,{Z:()=>a,a:()=>r});var t=l(7294);const s={},i=t.createContext(s);function r(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);