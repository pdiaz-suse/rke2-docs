"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[4962],{3905:(e,t,r)=>{r.d(t,{Zo:()=>k,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},k=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=s(r),u=n,d=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return r?a.createElement(d,i(i({ref:t},k),{},{components:r})):a.createElement(d,i({ref:t},k))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={title:"\u79bb\u7ebf\u5b89\u88c5"},i=void 0,o={unversionedId:"install/airgap",id:"install/airgap",title:"\u79bb\u7ebf\u5b89\u88c5",description:"\u91cd\u8981\uff1a\u5982\u679c\u4f60\u7684\u8282\u70b9\u5b89\u88c5\u5e76\u542f\u7528\u4e86 NetworkManager\uff0c\u8bf7\u786e\u4fdd\u5c06\u5176\u914d\u7f6e\u4e3a\u5ffd\u7565 CNI \u7ba1\u7406\u7684\u63a5\u53e3\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/airgap.md",sourceDirName:"install",slug:"/install/airgap",permalink:"/zh/install/airgap",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/airgap.md",tags:[],version:"current",lastUpdatedAt:1694629423,formattedLastUpdatedAt:"2023\u5e749\u670813\u65e5",frontMatter:{title:"\u79bb\u7ebf\u5b89\u88c5"},sidebar:"mySidebar",previous:{title:"Containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e",permalink:"/zh/install/containerd_registry_configuration"},next:{title:"Windows \u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/install/windows_airgap"}},p={},s=[{value:"Tarball \u65b9\u6cd5",id:"tarball-\u65b9\u6cd5",level:2},{value:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5",id:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5",level:2},{value:"\u5b89\u88c5 RKE2",id:"\u5b89\u88c5-rke2",level:2},{value:"RKE2 \u4e8c\u8fdb\u5236\u5b89\u88c5",id:"rke2-\u4e8c\u8fdb\u5236\u5b89\u88c5",level:3},{value:"RKE2 Install.sh \u811a\u672c\u5b89\u88c5",id:"rke2-installsh-\u811a\u672c\u5b89\u88c5",level:3}],k={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u91cd\u8981"),"\uff1a\u5982\u679c\u4f60\u7684\u8282\u70b9\u5b89\u88c5\u5e76\u542f\u7528\u4e86 NetworkManager\uff0c\u8bf7",(0,n.kt)("a",{parentName:"p",href:"/zh/known_issues#networkmanager"},"\u786e\u4fdd\u5c06\u5176\u914d\u7f6e\u4e3a\u5ffd\u7565 CNI \u7ba1\u7406\u7684\u63a5\u53e3"),"\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 RKE2\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"rke2-airgap-images")," \u538b\u7f29\u5305\u53d1\u5e03\u5de5\u4ef6\u8fdb\u884c\u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8fdb\u884c\u90e8\u7f72\u3002"),(0,n.kt)("p",null,"\u6b65\u9aa4\u4e2d\u63d0\u5230\u7684\u6240\u6709\u6587\u4ef6\u90fd\u53ef\u4ee5\u4ece",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2/releases"},"\u6b64\u5904"),"\u6240\u9700 RKE2 \u7248\u672c\u7684 asset \u4e2d\u83b7\u53d6\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u5728\u542f\u7528\u4e86 SELinux \u7684\u79bb\u7ebf\u8282\u70b9\u4e0a\u8fd0\u884c\uff0c\u5219\u5fc5\u987b\u5728\u6267\u884c\u8fd9\u4e9b\u6b65\u9aa4\u4e4b\u524d\u624b\u52a8\u5b89\u88c5\u5fc5\u8981\u7684 SELinux \u7b56\u7565 RPM\u3002\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"/zh/install/methods#rpm"},"RPM \u6587\u6863")," \u786e\u5b9a\u4f60\u9700\u8981\u7684\u5185\u5bb9\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u5728\u542f\u7528\u4e86 SELinux \u7684\u79bb\u7ebf\u8282\u70b9\u4e0a\u8fd0\u884c\uff0c\u5219\u6267\u884c ",(0,n.kt)("a",{parentName:"p",href:"/zh/install/methods#rpm"},"RPM \u5b89\u88c5"),"\u65f6 SLES\u3001CentOS \u6216 RHEL 8 \u6240\u9700\u7684\u4f9d\u8d56\u9879\u5982\u4e0b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Installing dependencies:\ncontainer-selinux\niptables\nlibnetfilter_conntrack\nlibnfnetlink\nlibnftnl\npolicycoreutils-python-utils\nrke2-common\nrke2-selinux\n")),(0,n.kt)("p",null,"\u672c\u6587\u6863\u4e2d\u5217\u51fa\u7684\u6240\u6709\u6b65\u9aa4\u90fd\u5fc5\u987b\u4ee5 root \u7528\u6237\u6216\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo")," \u8fd0\u884c\u3002"),(0,n.kt)("h2",{id:"tarball-\u65b9\u6cd5"},"Tarball \u65b9\u6cd5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4ece RKE release artifacts \u5217\u8868\u4e0b\u8f7d RKE2 \u79bb\u7ebf\u955c\u50cf tarball\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e v1.20 \u4e4b\u524d\u7684\u7248\u672c\uff0c\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images.linux-amd64.tar.zst")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images.linux-amd64.tar.gz"),"\u3002\u4e0e gzip \u76f8\u6bd4\uff0cZstandard \u652f\u6301\u66f4\u597d\u7684\u538b\u7f29\u6bd4\u548c\u66f4\u5feb\u7684\u89e3\u538b\u7f29\u901f\u5ea6\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u9ed8\u8ba4\u7684 Canal CNI (",(0,n.kt)("inlineCode",{parentName:"li"},"--cni=canal"),")\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0a\u6240\u8ff0\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-image")," \u65e7\u7248\u5b58\u6863\u6587\u4ef6\uff0c\u6216\u8005\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images- core")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images-canal"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528 Cilium CNI (",(0,n.kt)("inlineCode",{parentName:"li"},"--cni=cilium"),")\uff0c\u4f60\u5fc5\u987b\u4e0b\u8f7d ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images-core")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images-cilium"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u4f60\u81ea\u5df1\u7684 CNI (",(0,n.kt)("inlineCode",{parentName:"li"},"--cni=none"),")\uff0c\u5219\u53ea\u80fd\u4e0b\u8f7d ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images-core"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u542f\u7528 vSphere CPI/CSI Chart (",(0,n.kt)("inlineCode",{parentName:"li"},"--cloud-provider-name=rancher-vsphere"),")\uff0c\u4f60\u8fd8\u5fc5\u987b\u4e0b\u8f7d ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-images-vsphere"),"\u3002"))),(0,n.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u8282\u70b9\u4e0a\u5b58\u5728 ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/rke2/agent/images/")," \u76ee\u5f55\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5c06\u538b\u7f29\u5305\u590d\u5236\u5230\u8282\u70b9\u4e0a\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/rke2/agent/images/"),"\uff0c\u9700\u8981\u4fdd\u7559\u6587\u4ef6\u6269\u5c55\u540d\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#%E5%AE%89%E8%A3%85-rke2"},"\u5b89\u88c5 RKE2"))),(0,n.kt)("h2",{id:"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5"),(0,n.kt)("p",null,"\u4ece RKE2 v1.20 \u5f00\u59cb\uff0c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u652f\u6301\u9075\u5faa ",(0,n.kt)("a",{parentName:"p",href:"/zh/install/containerd_registry_configuration"},"containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"),"\u4e2d\u7684\u6240\u6709\u8bbe\u7f6e\u3002\u5176\u4e2d\u5305\u62ec\u7aef\u70b9\u8986\u76d6\u548c\u4f20\u8f93\u534f\u8bae\uff08HTTP/HTTPS\uff09\u3001\u8eab\u4efd\u9a8c\u8bc1\u3001\u8bc1\u4e66\u9a8c\u8bc1\u7b49\u3002"),(0,n.kt)("p",null,"\u5728 RKE2 v1.20 \u4e4b\u524d\uff0c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u5fc5\u987b\u4f7f\u7528 TLS\uff0c\u5e76\u4f7f\u7528\u4e3b\u673a CA \u6346\u7ed1\u5305\u4fe1\u4efb\u7684\u8bc1\u4e66\u3002\u5982\u679c\u955c\u50cf\u4ed3\u5e93\u4f7f\u7528\u7684\u662f\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"update-ca-certificates")," \u5c06\u8bc1\u4e66\u6dfb\u52a0\u5230\u4e3b\u673a CA \u6346\u7ed1\u5305\u3002\u955c\u50cf\u4ed3\u5e93\u8fd8\u5fc5\u987b\u5141\u8bb8\u533f\u540d\uff08\u672a\u7ecf\u8eab\u4efd\u9a8c\u8bc1\uff09\u8bbf\u95ee\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5c06\u6240\u6709\u5fc5\u9700\u7684\u7cfb\u7edf\u955c\u50cf\u6dfb\u52a0\u5230\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002\u4f60\u53ef\u4ee5\u4ece\u4e0e\u4e0a\u8ff0\u6bcf\u4e2a\u538b\u7f29\u5305\u5bf9\u5e94\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},".txt")," \u6587\u4ef6\u4e2d\u83b7\u53d6\u955c\u50cf\u5217\u8868\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u79bb\u7ebf\u955c\u50cf\u538b\u7f29\u5305\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"docker load"),"\uff0c\u7136\u540e\u6807\u8bb0\u5e76\u63a8\u9001\u52a0\u8f7d\u7684\u955c\u50cf\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c\u5728\u955c\u50cf\u4ed3\u5e93\u4e0a\u4f7f\u7528\u79c1\u6709\u6216\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u8bf7\u5c06\u955c\u50cf\u4ed3\u5e93\u7684 CA \u8bc1\u4e66\u6dfb\u52a0\u5230 containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u4e2d\uff0c\u5982\u679c\u4f7f\u7528 v1.20 \u4e4b\u524d\u7684\u7248\u672c\uff0c\u5219\u6dfb\u52a0\u5230\u64cd\u4f5c\u7cfb\u7edf\u7684\u53d7\u4fe1\u4efb\u8bc1\u4e66\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"system-default-registry")," \u53c2\u6570",(0,n.kt)("a",{parentName:"li",href:"#%E5%AE%89%E8%A3%85-rke2"},"\u5b89\u88c5 RKE2"),"\uff0c\u6216\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"/zh/install/containerd_registry_configuration"},"containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"),"\u5c06\u4f60\u7684\u955c\u50cf\u4ed3\u5e93\u7528\u4f5c docker.io \u7684 mirror\u3002")),(0,n.kt)("h2",{id:"\u5b89\u88c5-rke2"},"\u5b89\u88c5 RKE2"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u5b89\u88c5 RKE2 \u7684\u9009\u9879\u53ea\u80fd\u5728\u5b8c\u6210 ",(0,n.kt)("a",{parentName:"p",href:"#tarball-%E6%96%B9%E6%B3%95"},"Tarball \u65b9\u6cd5"),"\u6216",(0,n.kt)("a",{parentName:"p",href:"#%E7%A7%81%E6%9C%89%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93%E6%96%B9%E6%B3%95"},"\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5"),"\u4e4b\u4e00\u540e\u6267\u884c\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c",(0,n.kt)("a",{parentName:"p",href:"#rke2-%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AE%89%E8%A3%85"},"\u4e8c\u8fdb\u5236\u6587\u4ef6"),"\u6216\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"#rke2-installsh-%E8%84%9A%E6%9C%AC%E5%AE%89%E8%A3%85"},"install.sh \u811a\u672c"),"\u6765\u5b89\u88c5 RKE2\u3002"),(0,n.kt)("h3",{id:"rke2-\u4e8c\u8fdb\u5236\u5b89\u88c5"},"RKE2 \u4e8c\u8fdb\u5236\u5b89\u88c5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u83b7\u53d6 RKE2 \u4e8c\u8fdb\u5236\u6587\u4ef6 ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2.linux-amd64"),"\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u4e8c\u8fdb\u5236\u6587\u4ef6\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2")," \u5e76\u5c06\u5176\u653e\u5728 ",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," \u4e2d\u3002\u8bf7\u786e\u4fdd\u6587\u4ef6\u53ef\u6267\u884c\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6240\u9700\u53c2\u6570\u8fd0\u884c\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f7f\u7528\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5\uff0c\u4f60\u7684\u914d\u7f6e\u6587\u4ef6\u5c06\u5177\u6709\u4ee5\u4e0b\u5185\u5bb9\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'system-default-registry: "registry.example.com:5000"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"system-default-registry")," \u53c2\u6570\u5fc5\u987b\u4ec5\u6307\u5b9a\u6709\u6548\u7684 RFC 3986 URI \u6388\u6743\uff0c\u5373\u4e3b\u673a\u548c\u53ef\u9009\u7aef\u53e3\u3002"),(0,n.kt)("h3",{id:"rke2-installsh-\u811a\u672c\u5b89\u88c5"},"RKE2 Install.sh \u811a\u672c\u5b89\u88c5"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"install.sh")," \u53ef\u4ee5\u901a\u8fc7\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"INSTALL_RKE2_ARTIFACT_PATH")," \u53d8\u91cf\u8bbe\u7f6e\u4e3a\u5305\u542b\u9884\u4e0b\u8f7d\u5de5\u4ef6\u7684\u8def\u5f84\u6765\u5728\u79bb\u7ebf\u6a21\u5f0f\u4e0b\u4f7f\u7528\u3002\u8fd9\u5c06\u901a\u8fc7\u6b63\u5e38\u5b89\u88c5\u8fd0\u884c\uff0c\u5305\u62ec\u521b\u5efa systemd \u5355\u5143\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4ece releases \u9875\u9762\u5c06\u5b89\u88c5\u811a\u672c\u3001rke2\u3001rke2-images \u548c sha256sum \u5b58\u6863\u4e0b\u8f7d\u5230\u4e00\u4e2a\u76ee\u5f55\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /root/rke2-artifacts && cd /root/rke2-artifacts/\ncurl -OLs https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/rke2-images.linux-amd64.tar.zst\ncurl -OLs https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/rke2.linux-amd64.tar.gz\ncurl -OLs https://github.com/rancher/rke2/releases/download/v1.21.5%2Brke2r2/sha256sum-amd64.txt\ncurl -sfL https://get.rke2.io --output install.sh\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u63a5\u4e0b\u6765\uff0c\u4f7f\u7528\u8be5\u76ee\u5f55\u8fd0\u884c install.sh\uff0c\u5982\u4e0b\u4f8b\u6240\u793a\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_RKE2_ARTIFACT_PATH=/root/rke2-artifacts sh install.sh\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u6309\u7167",(0,n.kt)("a",{parentName:"li",href:"/zh/install/quickstart#2-%E5%90%AF%E7%94%A8-rke2-server-%E6%9C%8D%E5%8A%A1"},"\u6b64\u5904"),"\u7684\u6982\u8ff0\u542f\u7528\u5e76\u8fd0\u884c\u8be5\u670d\u52a1\u3002")))}m.isMDXComponent=!0}}]);