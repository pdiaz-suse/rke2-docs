"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[8521],{7759:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(5893),c=r(1151);const i={title:"CLI \u5de5\u5177"},o=void 0,s={id:"reference/cli_tools",title:"CLI \u5de5\u5177",description:"RKE2 \u9644\u5e26\u4e86\u591a\u4e2a CLI \u5de5\u5177\u6765\u5e2e\u52a9\u4f60\u8bbf\u95ee\u548c\u8c03\u8bd5\u96c6\u7fa4\u3002\u542f\u52a8\u65f6\uff0c\u5b83\u4eec\u4f1a\u88ab\u63d0\u53d6\u5230 /var/lib/rancher/rke2/bin\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/cli_tools.md",sourceDirName:"reference",slug:"/reference/cli_tools",permalink:"/zh/reference/cli_tools",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/reference/cli_tools.md",tags:[],version:"current",lastUpdatedAt:1710866752,formattedLastUpdatedAt:"2024\u5e743\u670819\u65e5",frontMatter:{title:"CLI \u5de5\u5177"},sidebar:"mySidebar",previous:{title:"\u9ad8\u7ea7\u9009\u9879\u548c\u914d\u7f6e",permalink:"/zh/advanced"},next:{title:"Agent \u914d\u7f6e\u53c2\u8003",permalink:"/zh/reference/linux_agent_config"}},d={},l=[{value:"kubectl",id:"kubectl",level:2},{value:"Containerd",id:"containerd",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["RKE2 \u9644\u5e26\u4e86\u591a\u4e2a CLI \u5de5\u5177\u6765\u5e2e\u52a9\u4f60\u8bbf\u95ee\u548c\u8c03\u8bd5\u96c6\u7fa4\u3002\u542f\u52a8\u65f6\uff0c\u5b83\u4eec\u4f1a\u88ab\u63d0\u53d6\u5230 ",(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/bin"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"kubectl",children:"kubectl"}),"\n",(0,t.jsxs)(n.p,{children:["admin kubeconfig \u5728 ",(0,t.jsx)(n.code,{children:"/etc/rancher/rke2/rke2.yaml"})," \u5904\u751f\u6210\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"export KUBECONFIG=/etc/rancher/rke2/rke2.yaml\n/var/lib/rancher/rke2/bin/kubectl get nodes\n"})}),"\n",(0,t.jsx)(n.h2,{id:"containerd",children:"Containerd"}),"\n",(0,t.jsxs)(n.p,{children:["RKE2 \u9644\u5e26\u4e86 ",(0,t.jsx)(n.code,{children:"ctr"})," \u548c ",(0,t.jsx)(n.code,{children:"crictl"}),"\u3002Containerd \u5957\u63a5\u5b57\u4f4d\u4e8e ",(0,t.jsx)(n.code,{children:"/run/k3s/containerd/containerd.sock"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"/var/lib/rancher/rke2/bin/ctr --address /run/k3s/containerd/containerd.sock --namespace k8s.io container ls\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"export CRI_CONFIG_FILE=/var/lib/rancher/rke2/agent/etc/crictl.yaml\n/var/lib/rancher/rke2/bin/crictl ps\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(7294);const c={},i=t.createContext(c);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);