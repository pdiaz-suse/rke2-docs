"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[8626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(u,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u7f51\u7edc\u9009\u9879"},i=void 0,o={unversionedId:"install/network_options",id:"install/network_options",title:"\u7f51\u7edc\u9009\u9879",description:"RKE2 \u9700\u8981\u4e00\u4e2a CNI \u63d2\u4ef6\u6765\u8fde\u63a5 pod \u548c\u670d\u52a1\u3002Canal CNI \u63d2\u4ef6\u662f\u9ed8\u8ba4\u63d2\u4ef6\uff0c\u4ece\u4e00\u5f00\u59cb\u5c31\u88ab\u652f\u6301\u3002RKE2 v1.21 \u5f00\u59cb\u652f\u6301\u53e6\u5916\u4e24\u4e2a CNI \u63d2\u4ef6\uff0c\u5206\u522b\u662f Calico \u548c Cilium\u3002\u5728\u4e3b\u8981\u7ec4\u4ef6\u542f\u52a8\u5e76\u8fd0\u884c\u540e\uff0c\u6240\u6709 CNI \u63d2\u4ef6\u5747\u901a\u8fc7 helm chart \u5b89\u88c5\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 helm chart \u9009\u9879\u8fdb\u884c\u81ea\u5b9a\u4e49\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/network_options.md",sourceDirName:"install",slug:"/install/network_options",permalink:"/zh/install/network_options",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/network_options.md",tags:[],version:"current",lastUpdatedAt:1694629423,formattedLastUpdatedAt:"2023\u5e749\u670813\u65e5",frontMatter:{title:"\u7f51\u7edc\u9009\u9879"},sidebar:"mySidebar",previous:{title:"\u914d\u7f6e\u9009\u9879",permalink:"/zh/install/configuration"},next:{title:"\u9ad8\u53ef\u7528",permalink:"/zh/install/ha"}},u={},s=[{value:"\u5b89\u88c5 CNI \u63d2\u4ef6",id:"\u5b89\u88c5-cni-\u63d2\u4ef6",level:2},{value:"\u53cc\u6808\u914d\u7f6e",id:"\u53cc\u6808\u914d\u7f6e",level:2},{value:"IPv6 \u8bbe\u7f6e",id:"ipv6-\u8bbe\u7f6e",level:2},{value:"\u4f7f\u7528 Multus",id:"\u4f7f\u7528-multus",level:2},{value:"\u7ed3\u5408\u4f7f\u7528 Multus \u4e0e Cilium",id:"\u7ed3\u5408\u4f7f\u7528-multus-\u4e0e-cilium",level:2},{value:"\u7ed3\u5408\u4f7f\u7528 Multus \u4e0e containernetworking \u63d2\u4ef6",id:"\u7ed3\u5408\u4f7f\u7528-multus-\u4e0e-containernetworking-\u63d2\u4ef6",level:2},{value:"\u7ed3\u5408\u4f7f\u7528 Multus \u4e0e Whereabouts CNI",id:"\u7ed3\u5408\u4f7f\u7528-multus-\u4e0e-whereabouts-cni",level:2},{value:"\u7ed3\u5408\u4f7f\u7528 Multus \u4e0e SR-IOV",id:"\u7ed3\u5408\u4f7f\u7528-multus-\u4e0e-sr-iov",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("Tabs"),c=p("TabItem"),k={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"RKE2 \u9700\u8981\u4e00\u4e2a CNI \u63d2\u4ef6\u6765\u8fde\u63a5 pod \u548c\u670d\u52a1\u3002Canal CNI \u63d2\u4ef6\u662f\u9ed8\u8ba4\u63d2\u4ef6\uff0c\u4ece\u4e00\u5f00\u59cb\u5c31\u88ab\u652f\u6301\u3002RKE2 v1.21 \u5f00\u59cb\u652f\u6301\u53e6\u5916\u4e24\u4e2a CNI \u63d2\u4ef6\uff0c\u5206\u522b\u662f Calico \u548c Cilium\u3002\u5728\u4e3b\u8981\u7ec4\u4ef6\u542f\u52a8\u5e76\u8fd0\u884c\u540e\uff0c\u6240\u6709 CNI \u63d2\u4ef6\u5747\u901a\u8fc7 helm chart \u5b89\u88c5\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 helm chart \u9009\u9879\u8fdb\u884c\u81ea\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u8bbe\u7f6e RKE2 \u65f6\u53ef\u7528\u7684\u7f51\u7edc\u9009\u9879\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%AE%89%E8%A3%85-cni-%E6%8F%92%E4%BB%B6"},"\u5b89\u88c5 CNI \u63d2\u4ef6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%8F%8C%E6%A0%88%E9%85%8D%E7%BD%AE"},"\u53cc\u6808\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%BD%BF%E7%94%A8-multus"},"\u4f7f\u7528 Multus"))),(0,r.kt)("h2",{id:"\u5b89\u88c5-cni-\u63d2\u4ef6"},"\u5b89\u88c5 CNI \u63d2\u4ef6"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u9009\u9879\u5361\u4ecb\u7ecd\u4e86\u5982\u4f55\u90e8\u7f72\u5404\u4e2a CNI \u63d2\u4ef6\u5e76\u8986\u76d6\u9ed8\u8ba4\u9009\u9879\uff1a"),(0,r.kt)(m,{groupId:"CNIplugin",mdxType:"Tabs"},(0,r.kt)(c,{value:"Canal CNI \u63d2\u4ef6",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Canal \u8868\u793a\u4f7f\u7528 Flannel \u5904\u7406\u8282\u70b9\u95f4\u7684\u6d41\u91cf\uff0c\u4f7f\u7528 Calico \u5904\u7406\u8282\u70b9\u5185\u6d41\u91cf\u548c\u7f51\u7edc\u7b56\u7565\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u5c06\u4f7f\u7528 vxlan \u5c01\u88c5\u5728\u8282\u70b9\u4e4b\u95f4\u521b\u5efa\u8986\u76d6\u7f51\u7edc\u3002Canal \u9ed8\u8ba4\u90e8\u7f72\u5728 RKE2 \u4e2d\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u989d\u5916\u914d\u7f6e\u6765\u6fc0\u6d3b\u5b83\u3002\u8981\u8986\u76d6\u9ed8\u8ba4\u7684 Canal \u9009\u9879\uff0c\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a HelmChartConfig \u8d44\u6e90\u3002HelmChartConfig \u8d44\u6e90\u5fc5\u987b\u4e0e\u5176\u5bf9\u5e94 HelmChart \u7684\u540d\u79f0\u548c\u547d\u540d\u7a7a\u95f4\u76f8\u5339\u914d\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8981\u8986\u76d6 Flannel \u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u5e94\u7528\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# /var/lib/rancher/rke2/server/manifests/rke2-canal-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-canal\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    flannel:\n      iface: "eth1"\n')),(0,r.kt)("p",null,"\u4ece RKE2 v1.23 \u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Flannel \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/flannel-io/flannel/blob/master/Documentation/backends.md#wireguard"},"wireguard \u540e\u7aef")," \u8fdb\u884c\u5185\u6838 WireGuard \u5c01\u88c5\u548c\u52a0\u5bc6\uff08",(0,r.kt)("a",{parentName:"p",href:"https://www.wireguard.com/install/"},"\u5185\u6838\u7248\u672c <5.6 \u7684\u7528\u6237\u9700\u8981\u5b89\u88c5\u6a21\u5757"),"\uff09\u3002\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\u6765\u5b9e\u73b0\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# /var/lib/rancher/rke2/server/manifests/rke2-canal-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-canal\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    flannel:\n      backend: "wireguard"\n')),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u8bf7\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u91cd\u542f canal daemonset \u4ee5\u4f7f\u7528\u66f4\u65b0\u7684\u914d\u7f6e\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl rollout restart ds rke2-canal -n kube-system")),(0,r.kt)("p",null,"\u6709\u5173 Canal \u914d\u7f6e\u5b8c\u6574\u9009\u9879\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-charts/blob/main-source/packages/rke2-canal/charts/values.yaml"},"rke2-charts"),"\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Canal \u8981\u6c42\u5728\u8282\u70b9\u4e0a\u5b89\u88c5 iptables \u6216 xtables-nft \u5305\u3002")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5177\u6709 Windows \u8282\u70b9\u7684\u96c6\u7fa4\u76ee\u524d\u4e0d\u652f\u6301 Canal\u3002")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u9047\u5230 IP \u5206\u914d\u95ee\u9898\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/known_issues"},"\u5df2\u77e5\u95ee\u9898\u548c\u9650\u5236"),"\u3002")),(0,r.kt)(c,{value:"Cilium CNI \u63d2\u4ef6",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u4ece RKE2 v1.21 \u5f00\u59cb\uff0cCilium \u53ef\u4ee5\u90e8\u7f72\u4e3a CNI \u63d2\u4ef6\u3002\u4e3a\u6b64\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"cilium")," \u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"--cni")," \u6807\u5fd7\u7684\u503c\u4f20\u9012\u3002\u786e\u4fdd\u8282\u70b9\u5177\u6709\u6240\u9700\u7684\u5185\u6838\u7248\u672c (>= 4.9.17) \u5e76\u4e14\u6ee1\u8db3",(0,r.kt)("a",{parentName:"p",href:"https://docs.cilium.io/en/stable/operations/system_requirements/"},"\u8981\u6c42"),"\u3002\u8981\u8986\u76d6\u9ed8\u8ba4\u9009\u9879\uff0c\u8bf7\u4f7f\u7528 HelmChartConfig \u8d44\u6e90\u3002HelmChartConfig \u8d44\u6e90\u5fc5\u987b\u4e0e\u5176\u5bf9\u5e94 HelmChart \u7684\u540d\u79f0\u548c\u547d\u540d\u7a7a\u95f4\u76f8\u5339\u914d\u3002\u4f8b\u5982\uff0c\u542f\u7528 eni\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    eni:\n      enabled: true\n")),(0,r.kt)("p",null,"\u6709\u5173 Cilium Chart \u4e2d\u53ef\u7528\u503c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-charts/blob/main/charts/rke2-cilium/rke2-cilium/1.12.301/values.yaml"},"rke2-charts \u4ed3\u5e93"),"\u3002"),(0,r.kt)("p",null,"Cilium \u5305\u62ec\u4e86\u4e00\u4e9b\u9ad8\u7ea7\u529f\u80fd\uff0c\u53ef\u4ee5\u5b8c\u5168\u66ff\u4ee3 kube-proxy\uff0c\u5e76\u4f7f\u7528 eBPF \u4ee3\u66ff iptables \u5b9e\u73b0\u670d\u52a1\u8def\u7531\u3002\u5982\u679c\u4f60\u7684\u5185\u6838\u4e0d\u662f v5.8 \u6216\u66f4\u65b0\u7248\u672c\uff0c\u4e0d\u5efa\u8bae\u7528 Cilium \u66ff\u6362 kube-proxy\uff0c\u56e0\u4e3a\u91cd\u8981\u7684\u9519\u8bef\u4fee\u590d\u548c\u529f\u80fd\u5c06\u4e22\u5931\u3002\u8981\u6fc0\u6d3b\u6b64\u6a21\u5f0f\uff0c\u8bf7\u4f7f\u7528\u6807\u5fd7 ",(0,r.kt)("inlineCode",{parentName:"p"},"--disable-kube-proxy")," \u548c\u4ee5\u4e0b Cilium \u914d\u7f6e\u90e8\u7f72 RKE2\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    kubeProxyReplacement: strict\n    k8sServiceHost: <KUBE_API_SERVER_IP>\n    k8sServicePort: <KUBE_API_SERVER_PORT>\n    cni:\n      chainingMode: "none"\n')),(0,r.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://docs.cilium.io/en/v1.12/gettingstarted/kubeproxy-free/"},"\u4e0a\u6e38\u6587\u6863"),"\u3002"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"RKE2 \u7684 Windows \u5b89\u88c5\u76ee\u524d\u4e0d\u652f\u6301 Cilium\u3002"))),(0,r.kt)(c,{value:"Calico CNI \u63d2\u4ef6",default:!0,mdxType:"TabItem"},"\u4ece RKE2 v1.21 \u5f00\u59cb\uff0cCalico \u53ef\u4ee5\u90e8\u7f72\u4e3a CNI \u63d2\u4ef6\u3002\u4e3a\u6b64\uff0c\u5c06 `calico` \u4f5c\u4e3a `--cni` \u6807\u5fd7\u7684\u503c\u4f20\u9012\u3002\u8981\u8986\u76d6\u9ed8\u8ba4\u9009\u9879\uff0c\u8bf7\u4f7f\u7528 HelmChartConfig \u8d44\u6e90\u3002HelmChartConfig \u8d44\u6e90\u5fc5\u987b\u4e0e\u5176\u5bf9\u5e94 HelmChart \u7684\u540d\u79f0\u548c\u547d\u540d\u7a7a\u95f4\u76f8\u5339\u914d\u3002\u4f8b\u5982\uff0c\u8981\u66f4\u6539 mtu\uff1a",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-calico-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-calico\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    installation:\n      calicoNetwork:\n        mtu: 9000\n")),(0,r.kt)("p",null,"\u6709\u5173 Calico chart \u4e2d\u53ef\u7528\u503c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-charts/blob/main/charts/rke2-calico/rke2-calico/v3.25.001/values.yaml"},"rke2-charts \u4ed3\u5e93"),"\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Calico \u8981\u6c42\u5728\u8282\u70b9\u4e0a\u5b89\u88c5 iptables \u6216 xtables-nft \u5305\u3002")))),(0,r.kt)("h2",{id:"\u53cc\u6808\u914d\u7f6e"},"\u53cc\u6808\u914d\u7f6e"),(0,r.kt)("p",null,"IPv4/IPv6 \u53cc\u6808\u7f51\u7edc\u652f\u6301\u5c06 IPv4 \u548c IPv6 \u5730\u5740\u5206\u914d\u7ed9 Pod \u548c Service\u3002\u8be5\u529f\u80fd\u4ece RKE2 v1.21 \u5f00\u59cb\u53d7\u652f\u6301\uff0cv1.23 \u5f00\u59cb\u7a33\u5b9a\uff0c\u4f46\u9ed8\u8ba4\u4e0d\u6fc0\u6d3b\u3002\u8981\u6b63\u786e\u6fc0\u6d3b\u5b83\uff0c\u5fc5\u987b\u76f8\u5e94\u914d\u7f6e RKE2 \u548c\u6240\u9009\u7684 CNI \u63d2\u4ef6\u3002\u8981\u5728\u53cc\u6808\u6a21\u5f0f\u4e0b\u914d\u7f6e RKE2\uff0c\u5728 control plane \u8282\u70b9\u4e2d\uff0c\u4f60\u5fc5\u987b\u4e3a pod \u548cservice \u8bbe\u7f6e\u6709\u6548\u7684 IPv4/IPv6 \u53cc\u6808 cidr\u3002\u4e3a\u6b64\uff0c\u8bf7\u4f7f\u7528\u6807\u5fd7 ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-cidr")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"--service-cidr"),"\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'#/etc/rancher/rke2/config.yaml\ncluster-cidr: "10.42.0.0/16,2001:cafe:42:0::/56"\nservice-cidr: "10.43.0.0/16,2001:cafe:42:1::/112"\n')),(0,r.kt)("p",null,"\u6bcf\u4e2a CNI \u63d2\u4ef6\u90fd\u9700\u8981\u4e0d\u540c\u7684\u53cc\u6808\u914d\u7f6e\uff1a"),(0,r.kt)(m,{groupId:"CNIplugin",mdxType:"Tabs"},(0,r.kt)(c,{value:"Canal CNI \u63d2\u4ef6",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Canal \u81ea\u52a8\u68c0\u6d4b\u53cc\u6808\u7684 RKE2 \u914d\u7f6e\uff0c\u4e0d\u9700\u8981\u989d\u5916\u914d\u7f6e\u3002RKE2 \u7684 Windows \u5b89\u88c5\u76ee\u524d\u4e0d\u652f\u6301\u53cc\u6808\u3002")),(0,r.kt)(c,{value:"Cilium CNI \u63d2\u4ef6",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Cilium \u81ea\u52a8\u68c0\u6d4b\u53cc\u6808\u7684 RKE2 \u914d\u7f6e\uff0c\u4e0d\u9700\u8981\u989d\u5916\u914d\u7f6e\u3002")),(0,r.kt)(c,{value:"Calico CNI \u63d2\u4ef6",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Calico \u81ea\u52a8\u68c0\u6d4b\u53cc\u6808\u7684 RKE2 \u914d\u7f6e\uff0c\u4e0d\u9700\u8981\u989d\u5916\u914d\u7f6e\u3002\u5f53\u4ee5\u53cc\u6808\u6a21\u5f0f\u90e8\u7f72\u65f6\uff0c\u5b83\u4f1a\u521b\u5efa\u4e24\u4e2a\u4e0d\u540c\u7684 ippool \u8d44\u6e90\u3002\u8bf7\u6ce8\u610f\uff0c\u5728\u4f7f\u7528\u53cc\u6808\u65f6\uff0ccalico \u5229\u7528 BGP \u800c\u4e0d\u662f VXLAN \u5c01\u88c5\u3002RKE2 \u7684 Windows \u5b89\u88c5\u76ee\u524d\u4e0d\u652f\u6301\u53cc\u6808\u548c BGP\u3002"))),(0,r.kt)("h2",{id:"ipv6-\u8bbe\u7f6e"},"IPv6 \u8bbe\u7f6e"),(0,r.kt)("p",null,"\u5728\u53ea\u914d\u7f6e IPv6 \u7684\u60c5\u51b5\u4e0b\uff0cRKE2 \u9700\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," \u6765\u8bbf\u95ee ETCD pod \u7684 liveness URL\u3002\u68c0\u67e5\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u662f\u5426\u6b63\u786e\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," \u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"::1       localhost\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-multus"},"\u4f7f\u7528 Multus"),(0,r.kt)("p",null,"\u4ece RKE2 v1.21 \u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u90e8\u7f72 Multus CNI meta-plugin\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u662f\u9488\u5bf9\u9ad8\u7ea7\u7528\u6237\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"Multus CNI")," \u662f\u4e00\u4e2a CNI \u63d2\u4ef6\uff0c\u53ef\u4ee5\u5c06\u591a\u4e2a\u7f51\u7edc\u63a5\u53e3\u9644\u52a0\u5230 pod\u3002Multus \u4e0d\u4f1a\u53d6\u4ee3 CNI \u63d2\u4ef6\uff0c\u800c\u662f\u5145\u5f53 CNI \u63d2\u4ef6\u591a\u8def\u590d\u7528\u5668\u3002Multus \u5728\u67d0\u4e9b\u7528\u4f8b\u4e2d\u5f88\u6709\u7528\uff0c\u7279\u522b\u662f\u5f53 pod \u662f\u7f51\u7edc\u5bc6\u96c6\u578b\u7684\uff0c\u9700\u8981\u989d\u5916\u7684\u7f51\u7edc\u63a5\u53e3\u6765\u652f\u6301\u6570\u636e\u5e73\u9762\u52a0\u901f\u6280\u672f\uff0c\u5982 SR-IOV\u3002"),(0,r.kt)("p",null,"Multus \u4e0d\u80fd\u72ec\u7acb\u90e8\u7f72\u3002\u5b83\u603b\u662f\u9700\u8981\u81f3\u5c11\u4e00\u4e2a\u6ee1\u8db3 Kubernetes \u96c6\u7fa4\u7f51\u7edc\u8981\u6c42\u7684\u5e38\u89c4 CNI \u63d2\u4ef6\u3002\u8be5 CNI \u63d2\u4ef6\u6210\u4e3a Multus \u7684\u9ed8\u8ba4\u63d2\u4ef6\uff0c\u5e76\u5c06\u7528\u4e8e\u4e3a\u6240\u6709 pod \u63d0\u4f9b\u4e3b\u8981\u63a5\u53e3\u3002"),(0,r.kt)("p",null,"\u8981\u542f\u7528 Multus\uff0c\u8bf7\u5c06 Multus \u6dfb\u52a0\u4e3a cni \u914d\u7f6e\u9879\u4e2d\u7684\u7b2c\u4e00\u4e2a\u5217\u8868\u6761\u76ee\uff0c\u7136\u540e\u662f\u8981\u4e0e Multus \u4e00\u8d77\u4f7f\u7528\u7684\u63d2\u4ef6\u7684\u540d\u79f0\uff08\u5982\u679c\u4f60\u63d0\u4f9b\u81ea\u5df1\u7684\u9ed8\u8ba4\u63d2\u4ef6\uff0c\u5219\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),"\uff09\u3002\u8bf7\u6ce8\u610f\uff0cMultus \u5fc5\u987b\u59cb\u7ec8\u4f4d\u4e8e\u5217\u8868\u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\u3002\u4f8b\u5982\uff0c\u8981\u4f7f\u7528\u5e26\u6709 Canal \u7684 Multus \u4f5c\u4e3a\u9ed8\u8ba4\u63d2\u4ef6\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/rke2/config.yaml\ncni:\n- multus\n- canal\n")),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u7528\u547d\u4ee4\u884c\u53c2\u6570\u6765\u6307\u5b9a\uff0c\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"--cni=multus,canal")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"--cni=multus --cni=canal"),"\u3002"),(0,r.kt)("p",null,"\u6709\u5173 Multus \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni/tree/master/docs"},"multus-cni")," \u6587\u6863\u3002"),(0,r.kt)("h2",{id:"\u7ed3\u5408\u4f7f\u7528-multus-\u4e0e-cilium"},"\u7ed3\u5408\u4f7f\u7528 Multus \u4e0e Cilium"),(0,r.kt)("p",null,"\u8981\u7ed3\u5408\u4f7f\u7528 Cilium \u4e0e Multus\uff0c\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"exclusive")," \u914d\u7f6e\u3002\n\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b HelmChartConfig \u6765\u6267\u884c\u6b64\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    cni:\n      exclusive: false\n")),(0,r.kt)("h2",{id:"\u7ed3\u5408\u4f7f\u7528-multus-\u4e0e-containernetworking-\u63d2\u4ef6"},"\u7ed3\u5408\u4f7f\u7528 Multus \u4e0e containernetworking \u63d2\u4ef6"),(0,r.kt)("p",null,"\u4efb\u4f55 CNI \u63d2\u4ef6\u90fd\u53ef\u4ee5\u7528\u4f5c Multus \u7684\u8f85\u52a9 CNI \u63d2\u4ef6\uff0c\u7528\u4e8e\u63d0\u4f9b\u9644\u52a0\u5230 pod \u7684\u989d\u5916\u7f51\u7edc\u63a5\u53e3\u3002\u7136\u800c\uff0c\u6700\u5e38\u89c1\u7684\u662f\u4f7f\u7528 containernetworking \u56e2\u961f\uff08\u7f51\u6865\u3001\u4e3b\u673a\u8bbe\u5907\u3001macvlan \u7b49\uff09\u7ef4\u62a4\u7684 CNI \u63d2\u4ef6\u4f5c\u4e3a Multus \u7684\u8f85\u52a9 CNI \u63d2\u4ef6\u3002\u5b89\u88c5 Multus \u65f6\u4f1a\u81ea\u52a8\u90e8\u7f72\u8fd9\u4e9b containernetworking \u63d2\u4ef6\u3002\u6709\u5173\u8fd9\u4e9b\u63d2\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current"},"containernetworking \u63d2\u4ef6")," \u6587\u6863\u3002"),(0,r.kt)("p",null,"\u8981\u4f7f\u7528\u8fd9\u4e9b\u63d2\u4ef6\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\uff0c\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a NetworkAttachmentDefinition \u5bf9\u8c61\u6765\u5b9a\u4e49\u8f85\u52a9\u7f51\u7edc\u7684\u914d\u7f6e\u3002\u7136\u540e pod \u6ce8\u91ca\u5f15\u7528\u8be5\u5b9a\u4e49\uff0cMultus \u5c06\u4f7f\u7528\u8fd9\u4e9b\u6ce8\u91ca\u4e3a\u8be5 pod \u63d0\u4f9b\u989d\u5916\u7684\u63a5\u53e3\u3002",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni/blob/master/docs/quickstart.md#storing-a-configuration-as-a-custom-resource"},"multus-cni repo")," \u4e2d\u63d0\u4f9b\u4e86\u5c06 macvlan CNI \u63d2\u4ef6\u4e0e Mu \u4e00\u8d77\u4f7f\u7528\u7684\u793a\u4f8b\u3002"),(0,r.kt)("h2",{id:"\u7ed3\u5408\u4f7f\u7528-multus-\u4e0e-whereabouts-cni"},"\u7ed3\u5408\u4f7f\u7528 Multus \u4e0e Whereabouts CNI"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/whereabouts"},"Whereabouts")," \u662f\u4e00\u4e2a IP \u5730\u5740\u7ba1\u7406 (IPAM) CNI \u63d2\u4ef6\uff0c\u53ef\u5728\u96c6\u7fa4\u8303\u56f4\u5185\u5206\u914d IP \u5730\u5740\u3002\n\u4ece RKE2 1.22 \u5f00\u59cb\uff0cRKE2 \u5305\u62ec\u4e86\u4f7f\u7528 Whereabouts \u4e0e Multus \u6765\u7ba1\u7406\u901a\u8fc7 Multus \u521b\u5efa\u7684\u9644\u52a0\u63a5\u53e3 IP \u5730\u5740\u7684\u9009\u9879\u3002\n\u4e3a\u6b64\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh/helm#%E4%BD%BF%E7%94%A8-helmchartconfig-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%89%93%E5%8C%85%E7%BB%84%E4%BB%B6"},"HelmChartConfig")," \u914d\u7f6e Multus CNI \u4ee5\u4f7f\u7528 Whereabouts\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b HelmChartConfig \u6765\u6267\u884c\u6b64\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-multus-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-multus\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    rke2-whereabouts:\n      enabled: true\n")),(0,r.kt)("p",null,"\u8fd9\u5c06\u4e3a Multus \u914d\u7f6e Chart \u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-whereabouts")," \u4f5c\u4e3a\u4f9d\u8d56\u9879\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u81ea\u5b9a\u4e49 Whereabouts \u955c\u50cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# /var/lib/rancher/rke2/server/manifests/rke2-multus-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-multus\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    rke2-whereabouts:\n      enabled: true\n      image:\n        repository: ghcr.io/k8snetworkplumbingwg/whereabouts\n        tag: latest-amd64\n")),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u4f60\u9700\u8981\u5728\u542f\u52a8 RKE2 \u4e4b\u524d\u5199\u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u7ed3\u5408\u4f7f\u7528-multus-\u4e0e-sr-iov"},"\u7ed3\u5408\u4f7f\u7528 Multus \u4e0e SR-IOV"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"v1.21.2+rke2r1 \u6dfb\u52a0\u4e86 SR-IOV \u5b9e\u9a8c\u6027\u652f\u6301\uff0c\u5e76\u4ece 2023 \u5e74 4 \u6708\u7684 v1.26.4+rke2r1\u3001v1.25.9+rke2r1 \u548c v1.24.13+rke2r1 \u7248\u672c\u5f00\u59cb\u63d0\u4f9b\u5168\u9762\u652f\u6301\u3002")),(0,r.kt)("p",null,"\u5c06 SR-IOV CNI \u4e0e Multus \u7ed3\u5408\u4f7f\u7528\u53ef\u7528\u4e8e\u6570\u636e\u5e73\u9762\u52a0\u901f\u7684\u7528\u4f8b\uff0c\u5728 pod \u4e2d\u63d0\u4f9b\u989d\u5916\u7684\u63a5\u53e3\u6765\u5b9e\u73b0\u975e\u5e38\u9ad8\u7684\u541e\u5410\u91cf\u3002SR-IOV \u4e0d\u4f1a\u5728\u6240\u6709\u73af\u5883\u4e0b\u5de5\u4f5c\uff0c\u5fc5\u987b\u6ee1\u8db3\u51e0\u4e2a\u8981\u6c42\u624d\u80fd\u5c06\u8282\u70b9\u89c6\u4e3a\u652f\u6301 SR-IOV \u7684\u8282\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7269\u7406 NIC \u5fc5\u987b\u652f\u6301 SR-IOV\uff08\u4f8b\u5982\u901a\u8fc7\u68c0\u67e5 /sys/class/net/$NIC/device/sriov_totalvfs\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u673a\u64cd\u4f5c\u7cfb\u7edf\u5fc5\u987b\u6fc0\u6d3b IOMMU \u865a\u62df\u5316"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u673a\u64cd\u4f5c\u7cfb\u7edf\u5305\u62ec\u80fd\u591f\u6267\u884c sriov\uff08\u4f8b\u5982 i40e\u3001vfio-pci \u7b49\uff09\u7684\u9a71\u52a8\u7a0b\u5e8f")),(0,r.kt)("p",null,"SR-IOV CNI \u63d2\u4ef6\u4e0d\u80fd\u7528\u4f5c Multus \u7684\u9ed8\u8ba4 CNI \u63d2\u4ef6\u3002\u5b83\u5fc5\u987b\u4e0e Multus \u548c\u4f20\u7edf\u7684 CNI \u63d2\u4ef6\u4e00\u8d77\u90e8\u7f72\u3002\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-charts")," Helm \u4ed3\u5e93\u4e2d\u627e\u5230 SR-IOV CNI helm chart\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/helm-charts-in-rancher"},"Rancher Helm Chart \u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u5b89\u88c5 SR-IOV CNI chart \u540e\uff0c\u5c06\u90e8\u7f72 SR-IOV operator\u3002\u7136\u540e\uff0c\u7528\u6237\u5fc5\u987b\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"feature.node.kubernetes.io/network-sriov.capable=true")," \u6807\u8bb0\u6765\u6307\u5b9a\u96c6\u7fa4\u4e2d\u652f\u6301 SR-IOV \u7684\u8282\u70b9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label node $NODE-NAME feature.node.kubernetes.io/network-sriov.capable=true\n")),(0,r.kt)("p",null,"\u6807\u8bb0\u540e\uff0csriov-network-config Daemonset \u5c06\u5728\u8282\u70b9\u4e2d\u90e8\u7f72\u4e00\u4e2a pod\uff0c\u7528\u6765\u6536\u96c6\u7f51\u7edc\u63a5\u53e3\u7684\u4fe1\u606f\u3002\u8be5\u4fe1\u606f\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"sriovnetworknodestates")," \u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49\u83b7\u5f97\u3002\u90e8\u7f72\u51e0\u5206\u949f\u540e\uff0c\u6bcf\u4e2a\u8282\u70b9\u5c06\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"sriovnetworknodestates")," \u8d44\u6e90\uff0c\u8d44\u6e90\u540d\u79f0\u662f\u8282\u70b9\u540d\u79f0\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u6765\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-charts")," \u7684 SR-IOV CNI Chart \u73b0\u5728\u5df2\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"node-feature-discovery")," Chart \u4f5c\u4e3a\u81ea\u52a8\u4f9d\u8d56\u9879\u3002\u8be5 Chart \u90e8\u7f72\u4e86\u4e00\u4e2a\u5c0f\u578b\u5b88\u62a4\u7a0b\u5e8f\u96c6\uff0c\u5b83\u4f1a\u6839\u636e\u5728\u8282\u70b9\u4e0a\u68c0\u6d4b\u5230\u7684\u529f\u80fd\u81ea\u52a8\u6807\u8bb0\u6bcf\u4e2a\u8282\u70b9\u3002\u8fd9\u9002\u7528\u4e8e\u786c\u4ef6\u548c\u8f6f\u4ef6\u529f\u80fd\u3002\u503c\u5f97\u5173\u6ce8\u7684\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"node-feature-discovery")," \u53ef\u4ee5\u5728\u68c0\u6d4b\u5230\u517c\u5bb9\u8282\u70b9\u65f6\u81ea\u52a8\u6dfb\u52a0\u6807\u7b7e ",(0,r.kt)("inlineCode",{parentName:"p"},"feature.node.kubernetes.io/network-sriov.capable=true"),"\u3002\n\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes-sigs.github.io/node-feature-discovery/v0.11/get-started/introduction.html"},"NFD \u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u6700\u65b0\u7248\u672c\u7684 sriov-network-operator \u5305\u542b\u4e86\u652f\u6301\u786c\u4ef6\u7684\u767d\u540d\u5355\uff0c\u56e0\u6b64 sriov \u5b9e\u9645\u4e0a\u4ec5\u9002\u7528\u4e8e",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/sriov-network-operator/blob/master/doc/supported-hardware.md"},"\u8be5\u5217\u8868"),"\u4e2d\u7684 NIC\u3002\u5982\u679c\u8981\u5c06 SR-IOV CNI \u4e0e\u4e0d\u5728\u5217\u8868\u4e2d\u7684 NIC \u4e00\u8d77\u4f7f\u7528\uff0c\u5219\u9700\u8981\u81ea\u884c\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"supported-nic-ids")," configMap\u3002"),(0,r.kt)("p",null,"\u6709\u5173 SR-IOV Operator \u7684\u4f7f\u7528\u65b9\u6cd5\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/sriov-network-operator/blob/master/doc/quickstart.md#configuration"},"sriov-network-operator"),"\u3002"))}d.isMDXComponent=!0}}]);