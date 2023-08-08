"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[6124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=o(r),u=a,d=m["".concat(c,".").concat(u)]||m[u]||k[u]||p;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<p;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const p={title:"Secret \u52a0\u5bc6"},i=void 0,l={unversionedId:"security/secrets_encryption",id:"security/secrets_encryption",title:"Secret \u52a0\u5bc6",description:"Secret \u52a0\u5bc6\u914d\u7f6e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/security/secrets_encryption.md",sourceDirName:"security",slug:"/security/secrets_encryption",permalink:"/zh/security/secrets_encryption",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/secrets_encryption.md",tags:[],version:"current",lastUpdatedAt:1691512284,formattedLastUpdatedAt:"2023\u5e748\u67088\u65e5",frontMatter:{title:"Secret \u52a0\u5bc6"},sidebar:"mySidebar",previous:{title:"SELinux",permalink:"/zh/security/selinux"},next:{title:"\u67b6\u6784",permalink:"/zh/architecture"}},c={},o=[{value:"Secret \u52a0\u5bc6\u914d\u7f6e",id:"secret-\u52a0\u5bc6\u914d\u7f6e",level:2},{value:"Secret \u52a0\u5bc6\u5de5\u5177",id:"secret-\u52a0\u5bc6\u5de5\u5177",level:2},{value:"\u5355 Server \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",id:"\u5355-server-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",level:3},{value:"\u591a Server \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",id:"\u591a-server-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362",level:3},{value:"Secret \u52a0\u5bc6\u72b6\u6001",id:"secret-\u52a0\u5bc6\u72b6\u6001",level:3}],s={toc:o};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"secret-\u52a0\u5bc6\u914d\u7f6e"},"Secret \u52a0\u5bc6\u914d\u7f6e"),(0,a.kt)("p",null,"RKE2 \u652f\u6301",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/"},"\u9759\u6001\u52a0\u5bc6 Secret"),"\uff0c\u5e76\u5c06\u81ea\u52a8\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210 AES-CBC \u5bc6\u94a5"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5bc6\u94a5\u751f\u6210\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "kind": "EncryptionConfiguration",\n  "apiVersion": "apiserver.config.k8s.io/v1",\n  "resources": [\n    {\n      "resources": [\n        "secrets"\n      ],\n      "providers": [\n        {\n          "aescbc": {\n            "keys": [\n              {\n                "name": "aescbckey",\n                "secret": "xxxxxxxxxxxxxxxxxxx"\n              }\n            ]\n          }\n        },\n        {\n          "identity": {}\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u914d\u7f6e\u4f5c\u4e3a encryption-provider-config \u4f20\u9012\u7ed9 Kubernetes APIServer")),(0,a.kt)("p",null,"\u4e00\u65e6\u542f\u7528\uff0c\u4efb\u4f55\u521b\u5efa\u7684 Secret \u90fd\u5c06\u4f7f\u7528\u6b64\u5bc6\u94a5\u8fdb\u884c\u52a0\u5bc6\u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u4f60\u7981\u7528\u52a0\u5bc6\uff0c\u90a3\u4e48\u4efb\u4f55\u52a0\u5bc6\u7684 secret \u5c06\u65e0\u6cd5\u8bfb\u53d6\uff0c\u76f4\u5230\u4f60\u4f7f\u7528\u76f8\u540c\u7684\u5bc6\u94a5\u518d\u6b21\u542f\u7528\u52a0\u5bc6\u3002"),(0,a.kt)("h2",{id:"secret-\u52a0\u5bc6\u5de5\u5177"},"Secret \u52a0\u5bc6\u5de5\u5177"),(0,a.kt)("admonition",{title:"\u7248\u672c",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases/tag/v1.21.8%2Brke2r1"},"v1.21.8+rke2r1")," \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"RKE2 \u5305\u542b\u4e00\u4e2a\u5b9e\u7528\u7684",(0,a.kt)("a",{parentName:"p",href:"/zh/reference/subcommands#secrets-encrypt"},"\u5b50\u547d\u4ee4")," ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets-encrypt"),"\uff0c\u5b83\u5141\u8bb8\u7ba1\u7406\u5458\u6267\u884c\u4ee5\u4e0b\u4efb\u52a1\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u65b0\u7684\u52a0\u5bc6\u5bc6\u94a5"),(0,a.kt)("li",{parentName:"ul"},"\u8f6e\u6362\u548c\u5220\u9664\u52a0\u5bc6\u5bc6\u94a5"),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u65b0\u52a0\u5bc6 Secret")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u5728\u8f6e\u6362 Secret \u52a0\u5bc6\u5bc6\u94a5\u65f6\u6ca1\u6709\u9075\u5faa\u6b63\u786e\u7684\u7a0b\u5e8f\uff0c\u6570\u636e\u53ef\u80fd\u6c38\u4e45\u4e22\u5931\u3002\u5efa\u8bae\u5728\u8f6e\u6362\u4e4b\u524d",(0,a.kt)("a",{parentName:"p",href:"/zh/backup_restore"},"\u521b\u5efa\u5feb\u7167"),"\u3002\u56e0\u6b64\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002")),(0,a.kt)("h3",{id:"\u5355-server-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"},"\u5355 Server \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"),(0,a.kt)("p",null,"\u8981\u5728\u5355\u8282\u70b9\u96c6\u7fa4\u4e0a\u8f6e\u6362 Secret \u52a0\u5bc6\u5bc6\u94a5\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u51c6\u5907\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt prepare\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," pod\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'# Get the kube-apiserver container ID\nexport CONTAINER_RUNTIME_ENDPOINT="unix:///var/run/k3s/containerd/containerd.sock"\ncrictl ps --name kube-apiserver\n# Stop the pod\ncrictl stop <CONTAINER_ID>\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8f6e\u6362\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt rotate\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u518d\u6b21\u91cd\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," pod\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u65b0\u52a0\u5bc6\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt reencrypt\n")))),(0,a.kt)("h3",{id:"\u591a-server-\u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"},"\u591a Server \u52a0\u5bc6\u5bc6\u94a5\u8f6e\u6362"),(0,a.kt)("p",null,"\u8981\u5728 HA \u8bbe\u7f6e\u4e0a\u8f6e\u6362 Secret \u52a0\u5bc6\u5bc6\u94a5\uff1a"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u672c\u793a\u4f8b\u4e2d\uff0c3 \u4e2a server \u7ec4\u6210\u4e00\u4e2a HA \u96c6\u7fa4\uff0c\u5b83\u4eec\u5206\u522b\u79f0\u4e3a S1\u3001S2\u3001S3\u3002\u867d\u7136\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u5efa\u8bae\u4f60\u9009\u62e9\u4e00\u4e2a Server \u8282\u70b9\u6765\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets-encrypt")," \u547d\u4ee4\u3002")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u51c6\u5907 S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt prepare\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f9d\u6b21\u91cd\u542f S1\u3001S2\u3001S3"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"systemctl restart rke2-server.service\n")),(0,a.kt)("p",{parentName:"li"},"\u7b49\u5f85 systemctl \u547d\u4ee4\u8fd4\u56de\uff0c\u7136\u540e\u91cd\u542f\u4e0b\u4e00\u4e2a server\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8f6e\u6362 S1"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt rotate\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f9d\u6b21\u91cd\u542f S1\u3001S2\u3001S3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 S1 \u4e0a\u91cd\u65b0\u52a0\u5bc6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"rke2 secrets-encrypt reencrypt\n")),(0,a.kt)("p",{parentName:"li"},"\u91cd\u65b0\u52a0\u5bc6\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"journalctl -u rke2-server")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 secrets-encrypt status")," \u67e5\u770b\u65e5\u5fd7\u3002\u5b8c\u6210\u540e\uff0c\u72b6\u6001\u5c06\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"reencrypt_finished"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f9d\u6b21\u91cd\u542f S1\u3001S2\u3001S3"))),(0,a.kt)("h3",{id:"secret-\u52a0\u5bc6\u72b6\u6001"},"Secret \u52a0\u5bc6\u72b6\u6001"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"secrets-encrypt status")," \u5b50\u547d\u4ee4\u4f1a\u663e\u793a\u8282\u70b9\u4e0a Secret \u52a0\u5bc6\u7684\u5f53\u524d\u72b6\u6001\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u5355 Server \u8282\u70b9\u4e0a\u7684\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rke2 secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: start\nServer Encryption Hashes: All hashes match\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey\n\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u53e6\u4e00\u4e2a\u5173\u4e8e HA \u96c6\u7fa4\u7684\u4f8b\u5b50\uff0c\u5728\u8f6e\u6362\u5bc6\u94a5\u540e\uff0c\u91cd\u542f server \u4e4b\u524d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rke2 secrets-encrypt status\nEncryption Status: Enabled\nCurrent Rotation Stage: rotate\nServer Encryption Hashes: hash does not match between node-1 and node-2\n\nActive  Key Type  Name\n------  --------  ----\n *      AES-CBC   aescbckey-2021-12-10T22:54:38Z\n        AES-CBC   aescbckey\n\n")),(0,a.kt)("p",null,"\u5404\u90e8\u5206\u8be6\u60c5\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Encryption Status"),"\uff1a\u663e\u793a\u8282\u70b9\u4e0a\u7684 Secret \u52a0\u5bc6\u662f\u7981\u7528\u8fd8\u662f\u542f\u7528\u7684"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Current Rotation Stage"),"\uff1a\u8868\u793a\u8282\u70b9\u4e0a\u5f53\u524d\u7684\u8f6e\u6362\u9636\u6bb5",(0,a.kt)("br",{parentName:"li"}),"Stage \u53ef\u80fd\u662f\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"start"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"prepare"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"rotate"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_request"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_active"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"reencrypt_finished")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Server Encryption Hashes"),"\uff1a\u5bf9 HA \u96c6\u7fa4\u6709\u7528\uff0c\u8868\u660e\u6240\u6709 server \u662f\u5426\u4e0e\u672c\u5730\u6587\u4ef6\u5904\u4e8e\u540c\u4e00\u9636\u6bb5\u3002\u8fd9\u53ef\u7528\u4e8e\u786e\u5b9a\u5728\u8fdb\u5165\u4e0b\u4e00\u9636\u6bb5\u4e4b\u524d\u662f\u5426\u9700\u8981\u91cd\u542f server\u3002\u5728\u4e0a\u9762\u7684 HA \u4f8b\u5b50\u4e2d\uff0cnode-1 \u548c node-2 \u7684\u54c8\u5e0c\u503c\u4e0d\u540c\uff0c\u8bf4\u660e\u5b83\u4eec\u76ee\u524d\u6ca1\u6709\u76f8\u540c\u7684\u52a0\u5bc6\u914d\u7f6e\u3002\u91cd\u542f server \u5c06\u540c\u6b65\u5b83\u4eec\u7684\u914d\u7f6e\u3002")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5bc6\u94a5\u8868"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"*")," \u8868\u793a\u5f53\u524d\u4f7f\u7528\u4e86\u54ea\u4e9b\u5bc6\u94a5\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09\u8fdb\u884c Secret \u52a0\u5bc6\u3002Kubernetes \u4f7f\u7528 active \u5bc6\u94a5\u6765\u52a0\u5bc6\u65b0\u7684 Secret\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Key Type"),(0,a.kt)("td",{parentName:"tr",align:null},"RKE2 \u4ec5\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"td"},"AES-CBC")," \u5bc6\u94a5\u7c7b\u578b\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/#providers"},"\u6b64\u5904"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a0\u5bc6\u5bc6\u94a5\u7684\u540d\u79f0\u3002\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"aescbckey-<DATE_AND_TIME>"),"\u3002")))))}k.isMDXComponent=!0}}]);