"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[7591],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},o=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),o=d(n),N=r,g=o["".concat(u,".").concat(N)]||o[N]||m[N]||l;return n?a.createElement(g,i(i({ref:e},k),{},{components:n})):a.createElement(g,i({ref:e},k))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=o;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},3166:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u8981\u6c42"},i=void 0,p={unversionedId:"install/requirements",id:"install/requirements",title:"\u8981\u6c42",description:"RKE2 \u975e\u5e38\u8f7b\u91cf\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u6700\u4f4e\u8981\u6c42\uff0c\u5982\u4e0b\u6240\u8ff0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/zh/install/requirements",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/requirements.md",tags:[],version:"current",lastUpdatedAt:1694629423,formattedLastUpdatedAt:"2023\u5e749\u670813\u65e5",frontMatter:{title:"\u8981\u6c42"},sidebar:"mySidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/install/quickstart"},next:{title:"\u914d\u7f6e\u9009\u9879",permalink:"/zh/install/configuration"}},u={},d=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u64cd\u4f5c\u7cfb\u7edf",id:"\u64cd\u4f5c\u7cfb\u7edf",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:2},{value:"Linux/Windows",id:"linuxwindows",level:3},{value:"\u78c1\u76d8",id:"\u78c1\u76d8",level:4},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:2},{value:"\u5165\u7ad9\u7f51\u7edc\u89c4\u5219",id:"\u5165\u7ad9\u7f51\u7edc\u89c4\u5219",level:3},{value:"Windows \u7279\u5b9a\u7684\u5165\u7ad9\u7f51\u7edc\u89c4\u5219",id:"windows-\u7279\u5b9a\u7684\u5165\u7ad9\u7f51\u7edc\u89c4\u5219",level:3}],k={toc:d};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"RKE2 \u975e\u5e38\u8f7b\u91cf\uff0c\u4f46\u4e5f\u6709\u4e00\u4e9b\u6700\u4f4e\u8981\u6c42\uff0c\u5982\u4e0b\u6240\u8ff0\u3002"),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u4e24\u4e2a RKE2 \u8282\u70b9\u4e0d\u80fd\u5177\u6709\u76f8\u540c\u7684\u8282\u70b9\u540d\u79f0\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8282\u70b9\u540d\u79f0\u53d6\u81ea\u8ba1\u7b97\u673a\u7684\u4e3b\u673a\u540d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e24\u53f0\u6216\u591a\u53f0\u8ba1\u7b97\u673a\u5177\u6709\u76f8\u540c\u7684\u4e3b\u673a\u540d\uff0c\u5219\u5fc5\u987b\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4e4b\u4e00\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u4e3b\u673a\u540d\u66f4\u65b0\u4e3a\u552f\u4e00\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"node-name")," \u53c2\u6570\u8bbe\u7f6e\u4e3a\u552f\u4e00\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"with-node-id")," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u4ece\u800c\u5c06\u968f\u673a\u751f\u6210\u7684 ID \u53f7\u9644\u52a0\u5230\u4e3b\u673a\u540d\u540e\u3002")),(0,r.kt)("admonition",{title:"\u7248\u672c",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"with-node-id")," \u53c2\u6570\u4ece 2023-05 \u7248\u672c\uff08v1.27.2+rke2r1\u3001v1.26.5+rke2r1\u3001v1.25.10+rke2r1\u3001v1.24.14+rke2r1\uff09\u5f00\u59cb\u53ef\u7528\u3002")),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u7cfb\u7edf"},"\u64cd\u4f5c\u7cfb\u7edf"),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,"RKE2 \u5df2\u5728\u4ee5\u4e0b\u64cd\u4f5c\u7cfb\u7edf\u53ca\u5176\u540e\u7eed\u975e\u4e3b\u8981\u7248\u672c\u4e0a\u8fdb\u884c\u4e86\u6d4b\u8bd5\u548c\u9a8c\u8bc1\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53d1\u884c\u7248"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu"),(0,r.kt)("td",{parentName:"tr",align:null},"18.04, 20.04, 22.04")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CentOS/RHEL"),(0,r.kt)("td",{parentName:"tr",align:null},"7.8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rocky/RHEL"),(0,r.kt)("td",{parentName:"tr",align:null},"8.5, 9.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Oracle Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"8.7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SLES"),(0,r.kt)("td",{parentName:"tr",align:null},"15 SP3, SP4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OpenSUSE, SLE Micro"),(0,r.kt)("td",{parentName:"tr",align:null},"5.1, 5.2, 5.3, 5.4")))),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("admonition",{title:"\u7248\u672c",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases/tag/v1.21.3%2Brke2r1"},"v1.21.3+rke2r1")," \u5f00\u59cb\u4f5c\u4e3a\u5b9e\u9a8c\u6027\u529f\u80fd\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Windows \u652f\u6301\u8981\u6c42\u9009\u62e9 Calico \u4f5c\u4e3a RKE2 \u96c6\u7fa4\u7684 CNI\u3002")),(0,r.kt)("p",null,"RKE2 Windows Node (Worker) agent \u5df2\u5728\u4ee5\u4e0b\u64cd\u4f5c\u7cfb\u7edf\u53ca\u5176\u540e\u7eed\u975e\u4e3b\u8981\u7248\u672c\u4e0a\u8fdb\u884c\u4e86\u6d4b\u8bd5\u548c\u9a8c\u8bc1\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows Server 2019 LTSC (amd64) (OS Build 17763.2061)"),(0,r.kt)("li",{parentName:"ul"},"Windows Server 2022 LTSC (amd64) (OS Build 20348.169)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u9700\u8981\u542f\u7528 Windows Server Containers \u529f\u80fd\u624d\u80fd\u4f7f RKE2 Windows Agent \u5de5\u4f5c\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u7ba1\u7406\u5458\u6743\u9650\u6253\u5f00\u4e00\u4e2a\u65b0\u7684 Powershell \u7a97\u53e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'powershell -Command "Start-Process PowerShell -Verb RunAs"\n')),(0,r.kt)("p",null,"\u5728\u65b0\u7684 Powershell \u7a97\u53e3\u4e2d\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -Online -FeatureName Containers \u2013All\n")),(0,r.kt)("p",null,"\u9700\u8981\u91cd\u542f\u624d\u80fd\u4f7f ",(0,r.kt)("inlineCode",{parentName:"p"},"Containers")," \u529f\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"),(0,r.kt)("h2",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,r.kt)("p",null,"\u786c\u4ef6\u8981\u6c42\u6839\u636e\u4f60\u90e8\u7f72\u7684\u89c4\u6a21\u800c\u53d8\u5316\u3002\u6b64\u5904\u6982\u8ff0\u4e86\u6700\u4f4e\u5efa\u8bae\u3002"),(0,r.kt)("h3",{id:"linuxwindows"},"Linux/Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RAM\uff1a\u6700\u4f4e 4 GB\uff08\u5efa\u8bae\u81f3\u5c11 8 GB\uff09"),(0,r.kt)("li",{parentName:"ul"},"CPU\uff1a\u6700\u5c11 2\uff08\u5efa\u8bae\u81f3\u5c11 4 CPU\uff09")),(0,r.kt)("h4",{id:"\u78c1\u76d8"},"\u78c1\u76d8"),(0,r.kt)("p",null,"RKE2 \u7684\u6027\u80fd\u53d6\u51b3\u4e8e\u6570\u636e\u5e93\u7684\u6027\u80fd\u3002\u7531\u4e8e RKE2 \u5d4c\u5165\u5f0f\u8fd0\u884c etcd \u5e76\u5c06\u6570\u636e\u76ee\u5f55\u5b58\u50a8\u5728\u78c1\u76d8\u4e0a\uff0c\u6211\u4eec\u5efa\u8bae\u5c3d\u53ef\u80fd\u4f7f\u7528 SSD \u4ee5\u786e\u4fdd\u6700\u4f73\u6027\u80fd\u3002"),(0,r.kt)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,r.kt)("admonition",{title:"\u91cd\u8981\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684\u8282\u70b9\u5b89\u88c5\u5e76\u542f\u7528\u4e86 NetworkManager\uff0c\u8bf7",(0,r.kt)("a",{parentName:"p",href:"/zh/known_issues#networkmanager"},"\u786e\u4fdd\u5c06\u5176\u914d\u7f6e\u4e3a\u5ffd\u7565 CNI \u7ba1\u7406\u7684\u63a5\u53e3"),"\u3002\u5982\u679c\u4f60\u7684\u8282\u70b9\u5b89\u88c5\u5e76\u542f\u7528\u4e86 Wicked\uff0c\u8bf7",(0,r.kt)("a",{parentName:"p",href:"/zh/known_issues#wicked"},"\u786e\u4fdd\u8f6c\u53d1 sysctl \u914d\u7f6e\u5df2\u542f\u7528"),"\u3002")),(0,r.kt)("p",null,"RKE2 server \u9700\u8981\u5f00\u653e\u7aef\u53e3 6443 \u548c 9345 \u624d\u80fd\u4f9b\u96c6\u7fa4\u4e2d\u7684\u5176\u4ed6\u8282\u70b9\u8bbf\u95ee\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 Flannel VXLAN \u65f6\uff0c\u6240\u6709\u8282\u70b9\u90fd\u9700\u8981\u80fd\u591f\u901a\u8fc7 UDP \u7aef\u53e3 8472 \u8bbf\u95ee\u5176\u4ed6\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528 Metrics Server\uff0c\u5219\u9700\u8981\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u6253\u5f00\u7aef\u53e3 10250\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u8981\u63d0\u793a"),"\uff1a\u8282\u70b9\u4e0a\u7684 VXLAN \u7aef\u53e3\u4f1a\u5f00\u653e\u96c6\u7fa4\u7f51\u7edc\uff0c\u8ba9\u4efb\u4f55\u4eba\u5747\u80fd\u8bbf\u95ee\u96c6\u7fa4\u3002\u56e0\u6b64\uff0c\u4e0d\u8981\u5c06 VXLAN \u7aef\u53e3\u66b4\u9732\u7ed9\u5916\u754c\u3002\u8bf7\u4f7f\u7528\u7981\u7528 8472 \u7aef\u53e3\u7684\u9632\u706b\u5899/\u5b89\u5168\u7ec4\u6765\u8fd0\u884c\u8282\u70b9\u3002"),(0,r.kt)("h3",{id:"\u5165\u7ad9\u7f51\u7edc\u89c4\u5219"},"\u5165\u7ad9\u7f51\u7edc\u89c4\u5219"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u534f\u8bae"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6e90"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"9345"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"6443"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"Kubernetes API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"8472"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u6709 Flannel VXLAN \u9700\u8981")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"10250"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"kubelet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"2379"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"etcd \u5ba2\u6237\u7aef\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"2380"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"etcd \u5bf9\u7b49\u7aef\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"30000-32767"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"NodePort \u7aef\u53e3\u8303\u56f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"8472"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"Cilium CNI VXLAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"4240"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"Cilium CNI \u5065\u5eb7\u68c0\u67e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ICMP"),(0,r.kt)("td",{parentName:"tr",align:null},"8/0"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"Cilium CNI \u5065\u5eb7\u68c0\u67e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"179"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 BGP \u7684 Calico CNI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"4789"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 VXLAN \u7684 Calico CNI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"5473"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 Typha \u7684 Calico CNI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"9098"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"Calico Typha \u5065\u5eb7\u68c0\u67e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"9099"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"Calico \u5065\u5eb7\u68c0\u67e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"5473"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 Typha \u7684 Calico CNI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"8472"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 VXLAN \u7684 Canal CNI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"9099"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"Canal CNI \u5065\u5eb7\u68c0\u67e5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"51820"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 WireGuard IPv4 \u7684 Canal CNI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"51821"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u548c Agent \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 WireGuard IPv6/\u53cc\u6808\u7684 Canal CNI")))),(0,r.kt)("h3",{id:"windows-\u7279\u5b9a\u7684\u5165\u7ad9\u7f51\u7edc\u89c4\u5219"},"Windows \u7279\u5b9a\u7684\u5165\u7ad9\u7f51\u7edc\u89c4\u5219"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u534f\u8bae"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6e90"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"4789"),(0,r.kt)("td",{parentName:"tr",align:null},"RKE2 Server \u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},"Calico \u548c Flannel VXLAN \u9700\u8981")))),(0,r.kt)("p",null,"\u6240\u6709\u51fa\u7ad9\u6d41\u91cf\u901a\u5e38\u90fd\u662f\u5141\u8bb8\u7684\u3002"))}m.isMDXComponent=!0}}]);