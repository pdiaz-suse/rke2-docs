"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[8290],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=k(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,u=c["".concat(i,".").concat(m)]||c[m]||o[m]||l;return r?n.createElement(u,p(p({ref:t},s),{},{components:r})):n.createElement(u,p({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=c;var k={};for(var i in t)hasOwnProperty.call(t,i)&&(k[i]=t[i]);k.originalType=e,k.mdxType="string"==typeof e?e:a,p[1]=k;for(var d=2;d<l;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>o,frontMatter:()=>l,metadata:()=>k,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={title:"Etcd \u5907\u4efd\u4e0e\u6062\u590d"},p="Etcd \u5907\u4efd\u4e0e\u6062\u590d",k={unversionedId:"backup_restore",id:"backup_restore",title:"Etcd \u5907\u4efd\u4e0e\u6062\u590d",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u521b\u5efa RKE2 \u96c6\u7fa4\u6570\u636e\u7684\u5907\u4efd\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/backup_restore.md",sourceDirName:".",slug:"/backup_restore",permalink:"/zh/backup_restore",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/backup_restore.md",tags:[],version:"current",lastUpdatedAt:1694629423,formattedLastUpdatedAt:"2023\u5e749\u670813\u65e5",frontMatter:{title:"Etcd \u5907\u4efd\u4e0e\u6062\u590d"},sidebar:"mySidebar",previous:{title:"\u96c6\u7fa4\u8bbf\u95ee",permalink:"/zh/cluster_access"},next:{title:"\u7f51\u7edc",permalink:"/zh/networking"}},i={},d=[{value:"\u521b\u5efa\u5feb\u7167",id:"\u521b\u5efa\u5feb\u7167",level:3},{value:"\u96c6\u7fa4\u91cd\u7f6e",id:"\u96c6\u7fa4\u91cd\u7f6e",level:2},{value:"\u5c06\u5feb\u7167\u6062\u590d\u5230\u73b0\u6709\u8282\u70b9",id:"\u5c06\u5feb\u7167\u6062\u590d\u5230\u73b0\u6709\u8282\u70b9",level:3},{value:"\u5c06\u5feb\u7167\u6062\u590d\u5230\u65b0\u8282\u70b9",id:"\u5c06\u5feb\u7167\u6062\u590d\u5230\u65b0\u8282\u70b9",level:3},{value:"\u6062\u590d\u5feb\u7167\u7684\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",id:"\u6062\u590d\u5feb\u7167\u7684\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879",level:3},{value:"rke2 v1.20.11+rke2r1 \u7684\u8981\u6c42",id:"rke2-v12011rke2r1-\u7684\u8981\u6c42",level:4},{value:"\u9009\u9879",id:"\u9009\u9879",level:3},{value:"S3 \u517c\u5bb9 API \u652f\u6301",id:"s3-\u517c\u5bb9-api-\u652f\u6301",level:3}],s={toc:d};function o(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"etcd-\u5907\u4efd\u4e0e\u6062\u590d"},"Etcd \u5907\u4efd\u4e0e\u6062\u590d"),(0,a.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u521b\u5efa RKE2 \u96c6\u7fa4\u6570\u636e\u7684\u5907\u4efd\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2")," \u662f RKE2 \u7684\u9ed8\u8ba4\u6570\u636e\u76ee\u5f55\uff0c\u4f46\u662f\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"data-dir")," \u53c2\u6570\u81ea\u884c\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"\u521b\u5efa\u5feb\u7167"},"\u521b\u5efa\u5feb\u7167"),(0,a.kt)("p",null,"\u5feb\u7167\u662f\u9ed8\u8ba4\u542f\u52a8\u7684\u3002"),(0,a.kt)("p",null,"\u5feb\u7167\u76ee\u5f55\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/db/snapshots"),"\u3002"),(0,a.kt)("p",null,"\u8981\u914d\u7f6e\u5feb\u7167\u95f4\u9694\u6216\u4fdd\u7559\u5feb\u7167\u7684\u6570\u91cf\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"#%E9%80%89%E9%A1%B9"},"\u9009\u9879"),"\u3002"),(0,a.kt)("p",null,"\u5728 RKE2 \u4e2d\uff0c\u5feb\u7167\u4f1a\u5b58\u50a8\u5728\u6bcf\u4e2a etcd \u8282\u70b9\u4e0a\u3002\u5982\u679c\u4f60\u6709\u591a\u4e2a etcd \u6216 etcd + control plane \u8282\u70b9\uff0c\u4f60\u5c06\u62e5\u6709\u672c\u5730 etcd \u5feb\u7167\u7684\u591a\u4e2a\u526f\u672c\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 RKE2 \u8fd0\u884c\u65f6\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," \u5b50\u547d\u4ee4\u624b\u52a8\u6267\u884c\u5feb\u7167\u3002\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 etcd-snapshot save --name pre-upgrade-snapshot"),"\u3002\u6709\u5173 etcd-snapshot \u5b50\u547d\u4ee4\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/reference/subcommands#etcd-snapshot"},"\u5b50\u547d\u4ee4\u9875\u9762"),"\u3002"),(0,a.kt)("h2",{id:"\u96c6\u7fa4\u91cd\u7f6e"},"\u96c6\u7fa4\u91cd\u7f6e"),(0,a.kt)("p",null,"RKE2 \u542f\u7528\u4e86\u4e00\u9879\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012 ",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-reset")," \u6807\u5fd7\u5c06\u96c6\u7fa4\u91cd\u7f6e\u4e3a\u4e00\u4e2a\u6210\u5458\u96c6\u7fa4\u3002\u5c06\u6b64\u6807\u5fd7\u4f20\u9012\u7ed9 RKE2 server \u65f6\uff0c\u5b83\u5c06\u4f7f\u7528\u76f8\u540c\u7684\u6570\u636e\u76ee\u5f55\u91cd\u7f6e\u96c6\u7fa4\uff0c\u6570\u636e etcd \u7684\u76ee\u5f55\u5b58\u5728\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/db/etcd")," \u4e2d\uff0c\u8fd9\u4e2a\u6807\u5fd7\u53ef\u4ee5\u5728\u96c6\u7fa4\u4e22\u5931\u4ef2\u88c1\u65f6\u4f20\u9012\u3002"),(0,a.kt)("p",null,"\u8981\u4f20\u9012\u91cd\u7f6e\u6807\u5fd7\uff0c\u9996\u5148\u4f60\u9700\u8981\u505c\u6b62 RKE2 \u670d\u52a1\uff08\u5982\u679c RKE2 \u662f\u901a\u8fc7 systemd \u542f\u7528\u7684\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop rke2-server\nrke2 server --cluster-reset\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u65e5\u5fd7\u4e2d\u7684\u4e00\u6761\u6d88\u606f\u8868\u793a RKE2 \u53ef\u4ee5\u5728\u6ca1\u6709\u6807\u5fd7\u7684\u60c5\u51b5\u4e0b\u91cd\u65b0\u542f\u52a8\u3002\u518d\u6b21\u542f\u52a8 RKE2\uff0c\u5b83\u5e94\u8be5\u5c06 RKE2 \u4f5c\u4e3a\u4e00\u4e2a\u6210\u5458\u96c6\u7fa4\u542f\u52a8\u3002"),(0,a.kt)("h3",{id:"\u5c06\u5feb\u7167\u6062\u590d\u5230\u73b0\u6709\u8282\u70b9"},"\u5c06\u5feb\u7167\u6062\u590d\u5230\u73b0\u6709\u8282\u70b9"),(0,a.kt)("p",null,"\u4f7f\u7528\u5907\u4efd\u6062\u590d RKE2 \u65f6\uff0c\u65e7\u7684\u6570\u636e\u76ee\u5f55\u5c06\u88ab\u79fb\u52a8\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/db/etcd-old-%date%/"),"\u3002\u7136\u540e RKE2 \u5c06\u5c1d\u8bd5\u901a\u8fc7\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u76ee\u5f55\u6765\u6062\u590d\u5feb\u7167\uff0c\u5e76\u4f7f\u7528\u4e00\u4e2a\u5177\u6709\u4e00\u4e2a etcd \u6210\u5458\u7684\u65b0 RKE2 \u96c6\u7fa4\u542f\u52a8 etcd\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u901a\u8fc7 systemd \u542f\u7528\uff0c\u5219\u5fc5\u987b\u5728\u6240\u6709 Server \u8282\u70b9\u4e0a\u505c\u6b62 RKE2 \u670d\u52a1\u3002\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\u6b64\u64cd\u4f5c\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop rke2-server\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728\u7b2c\u4e00\u4e2a Server \u8282\u70b9\u4e0a\u542f\u52a8\u5feb\u7167\u6062\u590d\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rke2 server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u6062\u590d\u5b8c\u6210\u540e\uff0c\u5728\u7b2c\u4e00\u4e2a Server \u8282\u70b9\u4e0a\u542f\u52a8 rke2-server \u670d\u52a1\uff0c\u5982\u4e0b\u6240\u793a\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl start rke2-server\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u5176\u4ed6 Server \u8282\u70b9\u4e0a\u7684 rke2 db \u76ee\u5f55\uff0c\u5982\u4e0b\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rm -rf /var/lib/rancher/rke2/server/db\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728\u5176\u4ed6 Server \u8282\u70b9\u4e0a\u542f\u52a8 rke2-server \u670d\u52a1\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl start rke2-server\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u6210\u529f\u6062\u590d\u540e\uff0c\u65e5\u5fd7\u4e2d\u7684\u4e00\u6761\u6d88\u606f\u8868\u660e etcd \u6b63\u5728\u8fd0\u884c\uff0cRKE2 \u53ef\u4ee5\u5728\u6ca1\u6709\u6807\u5fd7\u7684\u60c5\u51b5\u4e0b\u91cd\u542f\u3002\u518d\u6b21\u542f\u52a8 RKE2\uff0cRKE2 \u5e94\u8be5\u4f1a\u6210\u529f\u8fd0\u884c\u5e76\u901a\u8fc7\u6307\u5b9a\u7684\u5feb\u7167\u6062\u590d\u3002"),(0,a.kt)("p",null,"RKE2 \u91cd\u7f6e\u96c6\u7fa4\u65f6\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/db/reset-flag")," \u4e2d\u521b\u5efa\u4e00\u4e2a\u7a7a\u6587\u4ef6\u3002\u8be5\u6587\u4ef6\u7559\u5728\u539f\u5730\u662f\u6ca1\u6709\u95ee\u9898\u7684\uff0c\u4f46\u5fc5\u987b\u5220\u9664\u5b83\u624d\u80fd\u6267\u884c\u540e\u7eed\u7684\u91cd\u7f6e\u6216\u6062\u590d\u3002RKE2 \u6b63\u5e38\u542f\u52a8\u65f6\u4f1a\u5220\u9664\u8be5\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"\u5c06\u5feb\u7167\u6062\u590d\u5230\u65b0\u8282\u70b9"},"\u5c06\u5feb\u7167\u6062\u590d\u5230\u65b0\u8282\u70b9"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8b66\u544a"),"\uff1a\u5bf9\u4e8e rke2 v.1.20.9 \u53ca\u4e4b\u524d\u7684\u6240\u6709\u7248\u672c\uff0c\u7531\u4e8e\u5b58\u5728\u4e00\u4e2a\u5df2\u77e5\u95ee\u9898\uff0c\u5373\u5f15\u5bfc\u6570\u636e\u53ef\u80fd\u65e0\u6cd5\u5728\u6062\u590d\u65f6\u4fdd\u5b58\uff08\u6b65\u9aa4 1 -\u4e0b\u9762\u7684 3 \u5047\u5b9a\u4e86\u8fd9\u79cd\u60c5\u51b5\uff09\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u5148\u5907\u4efd\u548c\u6062\u590d\u8bc1\u4e66\u3002\u8bf7\u53c2\u9605\u4e0b\u9762\u7684",(0,a.kt)("a",{parentName:"p",href:"#%E6%81%A2%E5%A4%8D%E5%BF%AB%E7%85%A7%E7%9A%84%E5%85%B6%E4%BB%96%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9"},"\u6ce8\u610f\u4e8b\u9879"),"\uff0c\u4e86\u89e3\u7279\u5b9a\u7248\u672c\u7684\u6062\u590d\u6ce8\u610f\u4e8b\u9879\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5907\u4efd ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/cred"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/tls"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"/var /lib/rancher/rke2/server/token")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u4e0a\u9762\u6b65\u9aa4 1 \u4e2d\u7684\u8bc1\u4e66\u6062\u590d\u5230\u7b2c\u4e00\u4e2a\u65b0 Server \u8282\u70b9\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u7b2c\u4e00\u4e2a\u65b0 Server \u8282\u70b9\u4e0a\u5b89\u88c5 rke2 v1.20.8+rke2r1\uff0c\u5982\u4e0b\u6240\u793a\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -sfL https://get.rke2.io | INSTALL_RKE2_VERSION="v1.20.8+rke2r1" sh -\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c RKE2 \u5df2\u542f\u7528\uff0c\u8bf7\u505c\u6b62\u6240\u6709 Server \u8282\u70b9\u4e0a\u7684 RKE2 \u670d\u52a1\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728\u7b2c\u4e00\u4e2a Server \u8282\u70b9\u4e0a\u542f\u52a8\u5feb\u7167\u6062\u590d\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl stop rke2-server\nrke2 server \\\n  --cluster-reset \\\n  --cluster-reset-restore-path=<PATH-TO-SNAPSHOT>\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u6062\u590d\u5b8c\u6210\u540e\uff0c\u5728\u7b2c\u4e00\u4e2a Server \u8282\u70b9\u4e0a\u542f\u52a8 rke2-server \u670d\u52a1\uff0c\u5982\u4e0b\u6240\u793a\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl start rke2-server\n")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u6839\u636e\u6807\u51c6 ",(0,a.kt)("a",{parentName:"li",href:"/zh/install/ha#3-%E5%90%AF%E5%8A%A8%E5%85%B6%E4%BB%96-server-%E8%8A%82%E7%82%B9"},"RKE2 HA \u5b89\u88c5\u6587\u6863"),"\u7ee7\u7eed\u5411\u96c6\u7fa4\u6dfb\u52a0\u65b0\u7684 Server \u548c Worker \u8282\u70b9\u3002")),(0,a.kt)("h3",{id:"\u6062\u590d\u5feb\u7167\u7684\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"},"\u6062\u590d\u5feb\u7167\u7684\u5176\u4ed6\u6ce8\u610f\u4e8b\u9879"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6267\u884c\u5907\u4efd\u6062\u590d\u65f6\uff0c\u7528\u6237\u4e0d\u9700\u8981\u4f7f\u7528\u521b\u5efa\u5feb\u7167\u65f6\u4f7f\u7528\u7684 RKE2 \u7248\u672c\u3002\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u66f4\u65b0\u7684\u7248\u672c\u8fdb\u884c\u6062\u590d\u3002\u5982\u679c\u4f60\u5728\u6062\u590d\u65f6\u66f4\u6539\u7248\u672c\uff0c\u8bf7\u6ce8\u610f\u6b63\u5728\u4f7f\u7528\u54ea\u4e2a etcd \u7248\u672c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5feb\u7167\u9ed8\u8ba4\u542f\u7528\uff0c\u5e76\u4e14\u6bcf 12 \u5c0f\u65f6\u83b7\u53d6\u4e00\u6b21\u3002\u5feb\u7167\u5199\u5165\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"${data-dir}/server/db/snapshots"),"\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"p"},"${data-dir}")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher /rke2"),"\u3002"))),(0,a.kt)("h4",{id:"rke2-v12011rke2r1-\u7684\u8981\u6c42"},"rke2 v1.20.11+rke2r1 \u7684\u8981\u6c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5907\u4efd\u5c06 RKE2 \u6062\u590d\u5230\u4f7f\u7528 rke2 v1.20.11+rke2r1 \u7684\u65b0\u8282\u70b9\u65f6\uff0c\u8bf7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-killall.sh")," \u786e\u4fdd\u6240\u6709 pod \u5728\u521d\u59cb\u6062\u590d\u540e\u5df2\u505c\u6b62\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.rke2.io | sudo INSTALL_RKE2_VERSION=v1.20.11+rke2r1\nrke2 server \\\n--cluster-reset \\\n--cluster-reset-restore-path=<PATH-TO-SNAPSHOT> \\\n--token=<token used in the original cluster>\nrke2-killall.sh\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6062\u590d\u5b8c\u6210\u540e\uff0c\u5728\u7b2c\u4e00\u4e2a Server \u8282\u70b9\u4e0a\u542f\u52a8 rke2-server \u670d\u52a1\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"systemctl enable rke2-server\nsystemctl start rke2-server\n")))),(0,a.kt)("h3",{id:"\u9009\u9879"},"\u9009\u9879"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u9009\u9879\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u7f6e\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"etcd-disable-snapshots")),(0,a.kt)("td",{parentName:"tr",align:null},"\u7981\u7528\u81ea\u52a8 etcd \u5feb\u7167")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"etcd-snapshot-schedule-cron")," value"),(0,a.kt)("td",{parentName:"tr",align:null},"cron \u89c4\u8303\u4e2d\u7684\u5feb\u7167\u95f4\u9694\u65f6\u95f4\u3002eg. \u6bcf 4 \u5c0f\u65f6 ",(0,a.kt)("inlineCode",{parentName:"td"},"0 */4 * * *"),"\uff08\u9ed8\u8ba4\u503c\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},"0 */12 * * *"),"\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"etcd-snapshot-retention")," value"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8981\u4fdd\u7559\u7684\u5feb\u7167\u6570\u91cf\uff08\u9ed8\u8ba4\u503c\uff1a5\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"etcd-snapshot-dir")," value"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u6570\u636e\u5e93\u5feb\u7167\u7684\u76ee\u5f55\u3002\uff08\u9ed8\u8ba4\u4f4d\u7f6e\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},"${data-dir}/db/snapshots"),"\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cluster-reset")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fd8\u8bb0\u6240\u6709\u5bf9\u7b49\u70b9\uff0c\u6210\u4e3a\u65b0\u96c6\u7fa4\u7684\u552f\u4e00\u6210\u5458\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"td"},"[$RKE2_CLUSTER_RESET]")," \u8fdb\u884c\u8bbe\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cluster-reset-restore-path")," value"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8981\u6062\u590d\u7684\u5feb\u7167\u6587\u4ef6\u8def\u5f84")))),(0,a.kt)("h3",{id:"s3-\u517c\u5bb9-api-\u652f\u6301"},"S3 \u517c\u5bb9 API \u652f\u6301"),(0,a.kt)("p",null,"RKE2 \u652f\u6301\u5411\u5177\u6709 S3 \u517c\u5bb9 API \u7684\u7cfb\u7edf\u5199\u5165 etcd \u5feb\u7167\u548c\u4ece\u7cfb\u7edf\u4e2d\u6062\u590d etcd \u5feb\u7167\u3002S3 \u652f\u6301\u6309\u9700\u548c\u8ba1\u5212\u5feb\u7167\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u53c2\u6570\u5df2\u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u5b50\u547d\u4ee4\u4e2d\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"etcd-snapshot")," \u5b50\u547d\u4ee4\u4e5f\u5b58\u5728\u8fd9\u4e9b\u6807\u5fd7\uff0c\u4f46\u662f\u5220\u9664\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"--etcd-s3")," \u90e8\u5206\u4ee5\u907f\u514d\u5197\u4f59\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3")),(0,a.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u5907\u4efd\u5230 S3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 \u7aef\u70b9\u7f51\u5740")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-endpoint-ca")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 \u81ea\u5b9a\u4e49 CA \u8bc1\u4e66\uff0c\u7528\u4e8e\u8fde\u63a5\u5230 S3 \u7aef\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-skip-ssl-verify")),(0,a.kt)("td",{parentName:"tr",align:null},"\u7981\u7528 S3 SSL \u8bc1\u4e66\u9a8c\u8bc1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-access-key")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 access key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-secret-key")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 secret key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-bucket")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 \u5b58\u50a8\u6876\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-region")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 \u533a\u57df/\u5b58\u50a8\u6876\u4f4d\u7f6e\uff08\u53ef\u9009\uff09\u3002\u9ed8\u8ba4\u4e3a us-east-1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--etcd-s3-folder")),(0,a.kt)("td",{parentName:"tr",align:null},"S3 \u6587\u4ef6\u5939")))),(0,a.kt)("p",null,"\u6267\u884c\u6309\u9700\u7684 etcd \u5feb\u7167\u5e76\u5c06\u5176\u4fdd\u5b58\u5230 S3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rke2 etcd-snapshot \\\n  --s3 \\\n  --s3-bucket=<S3-BUCKET-NAME> \\\n  --s3-access-key=<S3-ACCESS-KEY> \\\n  --s3-secret-key=<S3-SECRET-KEY>\n")),(0,a.kt)("p",null,"\u8981\u4ece S3 \u4e2d\u6267\u884c\u6309\u9700\u7684 etcd \u5feb\u7167\u8fd8\u539f\uff0c\u9996\u5148\u786e\u4fdd RKE2 \u6ca1\u6709\u8fd0\u884c\u3002\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rke2 server \\\n  --cluster-reset \\\n  --etcd-s3 \\\n  --cluster-reset-restore-path=<SNAPSHOT-NAME> \\\n  --etcd-s3-bucket=<S3-BUCKET-NAME> \\\n  --etcd-s3-access-key=<S3-ACCESS-KEY> \\\n  --etcd-s3-secret-key=<S3-SECRET-KEY>\n")))}o.isMDXComponent=!0}}]);