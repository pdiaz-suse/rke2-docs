"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[597],{9388:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var r=c(5893),n=c(1151);const s={title:"Cluster Access"},o=void 0,i={id:"cluster_access",title:"Cluster Access",description:"The kubeconfig file stored at /etc/rancher/rke2/rke2.yaml is used to configure access to the Kubernetes cluster.",source:"@site/docs/cluster_access.md",sourceDirName:".",slug:"/cluster_access",permalink:"/cluster_access",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/cluster_access.md",tags:[],version:"current",lastUpdatedAt:1710866752,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Cluster Access"},sidebar:"mySidebar",previous:{title:"Architecture",permalink:"/architecture"},next:{title:"Etcd Backup and Restore",permalink:"/backup_restore"}},l={},a=[{value:"Accessing the Cluster from Outside with kubectl",id:"accessing-the-cluster-from-outside-with-kubectl",level:3}];function u(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The kubeconfig file stored at ",(0,r.jsx)(t.code,{children:"/etc/rancher/rke2/rke2.yaml"})," is used to configure access to the Kubernetes cluster.\nIf you have installed upstream Kubernetes command line tools such as kubectl or helm you will need to configure them with the correct kubeconfig path.\nThis can be done by either exporting the ",(0,r.jsx)(t.code,{children:"KUBECONFIG"})," environment variable or by invoking the ",(0,r.jsx)(t.code,{children:"--kubeconfig"})," command line flag.\nRefer to the examples below for details."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that some tools, such as kubectl, are installed by default into ",(0,r.jsx)(t.code,{children:"/var/lib/rancher/rke2/bin"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Leverage the KUBECONFIG environment variable:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"export KUBECONFIG=/etc/rancher/rke2/rke2.yaml\nkubectl get pods --all-namespaces\nhelm ls --all-namespaces\n"})}),"\n",(0,r.jsx)(t.p,{children:"Or specify the location of the kubeconfig file in the command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"kubectl --kubeconfig /etc/rancher/rke2/rke2.yaml get pods --all-namespaces\nhelm --kubeconfig /etc/rancher/rke2/rke2.yaml ls --all-namespaces\n"})}),"\n",(0,r.jsx)(t.h3,{id:"accessing-the-cluster-from-outside-with-kubectl",children:"Accessing the Cluster from Outside with kubectl"}),"\n",(0,r.jsxs)(t.p,{children:["Copy ",(0,r.jsx)(t.code,{children:"/etc/rancher/rke2/rke2.yaml"})," on your machine located outside the cluster as ",(0,r.jsx)(t.code,{children:"~/.kube/config"}),". Then replace ",(0,r.jsx)(t.code,{children:"127.0.0.1"})," with the IP or hostname of your RKE2 server. ",(0,r.jsx)(t.code,{children:"kubectl"})," can now manage your RKE2 cluster."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,t,c)=>{c.d(t,{Z:()=>i,a:()=>o});var r=c(7294);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);