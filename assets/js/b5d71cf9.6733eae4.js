"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Installation Methods"},l=void 0,s={unversionedId:"install/methods",id:"install/methods",title:"Installation Methods",description:"Important: If your node has NetworkManager installed and enabled, ensure that it is configured to ignore CNI-managed interfaces.",source:"@site/docs/install/methods.md",sourceDirName:"install",slug:"/install/methods",permalink:"/install/methods",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/methods.md",tags:[],version:"current",lastUpdatedAt:1698859705,formattedLastUpdatedAt:"Nov 1, 2023",frontMatter:{title:"Installation Methods"},sidebar:"mySidebar",previous:{title:"High Availability",permalink:"/install/ha"},next:{title:"Containerd Registry Configuration",permalink:"/install/containerd_registry_configuration"}},o={},p=[{value:"Tarball",id:"tarball",level:3},{value:"Installation",id:"installation",level:4},{value:"RPM",id:"rpm",level:3},{value:"Repositories",id:"repositories",level:4},{value:"Enterprise Linux 7",id:"enterprise-linux-7",level:4},{value:"Enterprise Linux 8",id:"enterprise-linux-8",level:4},{value:"Installation",id:"installation-1",level:4},{value:"Manual",id:"manual",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important:")," If your node has NetworkManager installed and enabled, ",(0,a.kt)("a",{parentName:"p",href:"/known_issues#networkmanager"},"ensure that it is configured to ignore CNI-managed interfaces.")),(0,a.kt)("p",null,"RKE2 can be installed to a system in a number of ways, two of which are the preferred and supported methods. Those methods are tarball and RPM. The install script referenced in the Quick Start is a wrapper around these two methods."),(0,a.kt)("p",null,"This document explains these installation methods in greater detail."),(0,a.kt)("h3",{id:"tarball"},"Tarball"),(0,a.kt)("p",null,"To install RKE2 via install you first need to get the install script. This can be done in a number of ways."),(0,a.kt)("p",null,"This gets the script and immediately starts the installation process."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# curl -sfL https://get.rke2.io | sudo sh -\ncurl -sfL https://get.rke2.io | sh -\n")),(0,a.kt)("p",null,"Alternatively, you can download the install script and make it executable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl -sfL https://get.rke2.io --output install.sh\nchmod +x install.sh\n")),(0,a.kt)("h4",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The installation process defaults to the latest RKE2 version and no other qualifiers are necessary. However, if you want to specify a version, you should set the ",(0,a.kt)("inlineCode",{parentName:"p"},"INSTALL_RKE2_CHANNEL")," environment variable. An example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"INSTALL_RKE2_CHANNEL=latest ./install.sh\n")),(0,a.kt)("p",null,"When the install script is executed, it makes a determination of what type of system it is. If it's an OS that uses RPMs (such as CentOS or RHEL), it will perform an RPM based installation, otherwise the script defaults to tarball. RPM based installation is covered below."),(0,a.kt)("p",null,"Next, the installation script downloads the tarball, verifies it by comparing SHA256 hashes, and lastly, extracts the contents to ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local"),". An operator is free to move the files after installation if desired. This operation simply extracts the tarball and no other system modifications are made."),(0,a.kt)("p",null,"Tarball structure / contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bin - contains the RKE2 executable as well as the ",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-killall.sh")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"rke2-uninstall.sh")," scripts"),(0,a.kt)("li",{parentName:"ul"},"lib - contains server and agent systemd unit files"),(0,a.kt)("li",{parentName:"ul"},"share - contains the RKE2 license as well as a sysctl configuration file used for when RKE2 is ran in CIS mode")),(0,a.kt)("p",null,"To configure the system any further, you'll want to reference either the ",(0,a.kt)("a",{parentName:"p",href:"/reference/server_config"},"server")," or ",(0,a.kt)("a",{parentName:"p",href:"/reference/linux_agent_config"},"agent")," documentation."),(0,a.kt)("h3",{id:"rpm"},"RPM"),(0,a.kt)("p",null,"To start the RPM install process, you need to get the installation script which is covered above. The script will check your system for ",(0,a.kt)("inlineCode",{parentName:"p"},"rpm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"yum"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"dnf")," and if any of those exist, it determines that the system is Redhat based and starts the RPM install process."),(0,a.kt)("p",null,"Files are installed with the prefix of ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local"),"."),(0,a.kt)("h4",{id:"repositories"},"Repositories"),(0,a.kt)("p",null,"Signed RPMs are published for RKE2 within the ",(0,a.kt)("inlineCode",{parentName:"p"},"rpm-testing.rancher.io")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rpm.rancher.io")," RPM repositories. If you run the ",(0,a.kt)("a",{parentName:"p",href:"https://get.rke2.io"},"https://get.rke2.io")," script on nodes supporting RPMs, it will use these RPM repos by default. But you can also install them yourself."),(0,a.kt)("p",null,"The RPMs provide ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," units for managing ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2"),", but will need to be configured via configuration file before starting the services for the first time."),(0,a.kt)("h4",{id:"enterprise-linux-7"},"Enterprise Linux 7"),(0,a.kt)("p",null,"In order to use the RPM repository, on a CentOS 7 or RHEL 7 system, run the following bash snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF > /etc/yum.repos.d/rancher-rke2-1-18-latest.repo\n[rancher-rke2-common-latest]\nname=Rancher RKE2 Common Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/common/centos/7/noarch\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\n\n[rancher-rke2-1-18-latest]\nname=Rancher RKE2 1.18 Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/1.18/centos/7/x86_64\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\nEOF\n")),(0,a.kt)("h4",{id:"enterprise-linux-8"},"Enterprise Linux 8"),(0,a.kt)("p",null,"In order to use the RPM repository, on a CentOS 8 or RHEL 8 system, run the following bash snippet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF > /etc/yum.repos.d/rancher-rke2-1-18-latest.repo\n[rancher-rke2-common-latest]\nname=Rancher RKE2 Common Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/common/centos/8/noarch\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\n\n[rancher-rke2-1-18-latest]\nname=Rancher RKE2 1.18 Latest\nbaseurl=https://rpm.rancher.io/rke2/latest/1.18/centos/8/x86_64\nenabled=1\ngpgcheck=1\ngpgkey=https://rpm.rancher.io/public.key\nEOF\n")),(0,a.kt)("h4",{id:"installation-1"},"Installation"),(0,a.kt)("p",null,"After the repository is configured, you can run either of the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yum -y install rke2-server\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yum -y install rke2-agent\n")),(0,a.kt)("p",null,"The RPM will install a corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-server.service")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-agent.service")," systemd unit that can be invoked like: ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl start rke2-server"),". Make sure that you configure ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2")," before you start it, by following the ",(0,a.kt)("inlineCode",{parentName:"p"},"Configuration File")," instructions below."),(0,a.kt)("h3",{id:"manual"},"Manual"),(0,a.kt)("p",null,"The RKE2 binary is statically compiled and linked which allows for the RKE2 binary to be portable across Linux distributions without the concern for dependency issues. The simplest installation is to download the binary, make sure it's executable, and copy it into the ",(0,a.kt)("inlineCode",{parentName:"p"},"${PATH}"),", generally ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),". After first execution, RKE2 will create all necessary directories and files. To configure the system any further, you'll want to reference the ",(0,a.kt)("a",{parentName:"p",href:"/install/configuration"},"config file")," documentation."))}d.isMDXComponent=!0}}]);