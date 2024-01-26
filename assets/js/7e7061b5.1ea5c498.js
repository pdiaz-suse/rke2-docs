"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[3782],{7581:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var d=t(5893),s=t(1151);const n={title:"Server Configuration Reference"},i=void 0,l={id:"reference/server_config",title:"Server Configuration Reference",description:"This is a reference to all parameters that can be used to configure the rke2 server. Note that while this is a reference to the command line arguments, the best way to configure RKE2 is using the configuration file.",source:"@site/docs/reference/server_config.md",sourceDirName:"reference",slug:"/reference/server_config",permalink:"/reference/server_config",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/reference/server_config.md",tags:[],version:"current",lastUpdatedAt:1706293946,formattedLastUpdatedAt:"Jan 26, 2024",frontMatter:{title:"Server Configuration Reference"},sidebar:"mySidebar",previous:{title:"Logging",permalink:"/reference/logging"},next:{title:"Windows Agent Configuration Reference",permalink:"/reference/windows_agent_config"}},c={},h=[{value:"Critical Configuration Values",id:"critical-configuration-values",level:2},{value:"Common",id:"common",level:3},{value:"Listener",id:"listener",level:3},{value:"Networking",id:"networking",level:3},{value:"Client",id:"client",level:3},{value:"Helm",id:"helm",level:3},{value:"Cluster",id:"cluster",level:3},{value:"Database",id:"database",level:3},{value:"Flags",id:"flags",level:3},{value:"Components",id:"components",level:3},{value:"Image",id:"image",level:3},{value:"Cloud Provider",id:"cloud-provider",level:3},{value:"Security",id:"security",level:3},{value:"Experimental",id:"experimental",level:3},{value:"Agent/Node",id:"agentnode",level:3},{value:"Agent/Runtime",id:"agentruntime",level:3},{value:"Agent/Containerd",id:"agentcontainerd",level:3},{value:"Agent/Networking",id:"agentnetworking",level:3},{value:"Agent/Flags",id:"agentflags",level:3}];function x(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:["This is a reference to all parameters that can be used to configure the rke2 server. Note that while this is a reference to the command line arguments, the best way to configure RKE2 is using the ",(0,d.jsx)(r.a,{href:"/install/configuration#configuration-file",children:"configuration file"}),"."]}),"\n",(0,d.jsx)(r.h2,{id:"critical-configuration-values",children:"Critical Configuration Values"}),"\n",(0,d.jsx)(r.p,{children:"The following options must be set to the same value on all servers in the cluster. Failure to do so will cause new servers to fail to join the cluster."}),"\n",(0,d.jsxs)(r.ul,{children:["\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.code,{children:"agent-token"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.code,{children:"cluster-cidr"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.code,{children:"cluster-dns"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.code,{children:"cluster-domain"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.code,{children:"disable-cloud-controller"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.code,{children:"disable-kube-proxy"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.code,{children:"egress-selector-mode"})}),"\n",(0,d.jsx)(r.li,{children:(0,d.jsx)(r.code,{children:"service-cidr"})}),"\n"]}),"\n",(0,d.jsx)(r.h3,{id:"common",children:"Common"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Default"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"config"}),(0,d.jsx)(r.td,{children:"Path to config file"}),(0,d.jsx)(r.td,{children:"/etc/rancher/rke2/config.yaml"}),(0,d.jsx)(r.td,{children:"RKE2_CONFIG_FILE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"debug"}),(0,d.jsx)(r.td,{children:"Turn on debug logs"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"RKE2_DEBUG"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"data-dir"}),(0,d.jsx)(r.td,{children:"Folder to hold state"}),(0,d.jsx)(r.td,{children:'"/var/lib/rancher/rke2"'}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"listener",children:"Listener"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Default"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"bind-address"}),(0,d.jsx)(r.td,{children:"rke2 bind address"}),(0,d.jsx)(r.td,{children:"0.0.0.0"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"advertise-address"}),(0,d.jsx)(r.td,{children:"IPv4/IPv6 address that apiserver uses to advertise to members of the cluster"}),(0,d.jsx)(r.td,{children:"node-external-ip/node-ip"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tls-san"}),(0,d.jsx)(r.td,{children:"Add additional hostnames or IPv4/IPv6 addresses as Subject Alternative Names on the server TLS cert"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"tls-san-security"}),(0,d.jsx)(r.td,{children:"Protect the server TLS cert by refusing to add Subject Alternative Names not associated with the kubernetes apiserver service, server nodes, or values of the tls-san option"}),(0,d.jsx)(r.td,{children:"true"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"networking",children:"Networking"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Default"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cluster-cidr"}),(0,d.jsx)(r.td,{children:"IPv4/IPv6 network CIDRs to use for pod IPs"}),(0,d.jsx)(r.td,{children:"10.42.0.0/16"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"service-cidr"}),(0,d.jsx)(r.td,{children:"IPv4/IPv6 network CIDRs to use for service IPs"}),(0,d.jsx)(r.td,{children:"10.43.0.0/16"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"service-node-port-range"}),(0,d.jsx)(r.td,{children:"Port range to reserve for services with NodePort visibility"}),(0,d.jsx)(r.td,{children:'"30000-32767"'}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cluster-dns"}),(0,d.jsx)(r.td,{children:"IPv4 Cluster IP for coredns service. Should be in your service-cidr range"}),(0,d.jsx)(r.td,{children:"10.43.0.10"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cluster-domain"}),(0,d.jsx)(r.td,{children:"Cluster Domain"}),(0,d.jsx)(r.td,{children:'"cluster.local"'}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"egress-selector-mode"}),(0,d.jsx)(r.td,{children:"One of 'agent', 'cluster', 'pod', 'disabled'"}),(0,d.jsx)(r.td,{children:'"agent"'}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"servicelb-namespace"}),(0,d.jsx)(r.td,{children:"Namespace of the pods for the servicelb component"}),(0,d.jsx)(r.td,{children:'"kube-system"'}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cni"}),(0,d.jsx)(r.td,{children:"CNI Plugins to deploy, one of none, calico, canal, cilium; optionally with multus as the first value to enable the multus meta-plugin"}),(0,d.jsx)(r.td,{children:"canal"}),(0,d.jsx)(r.td,{children:"RKE2_CNI"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"client",children:"Client"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"write-kubeconfig"}),(0,d.jsx)(r.td,{children:"Write kubeconfig for admin client to this file"}),(0,d.jsx)(r.td,{children:"RKE2_KUBECONFIG_OUTPUT"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"write-kubeconfig-mode"}),(0,d.jsx)(r.td,{children:"Write kubeconfig with this mode"}),(0,d.jsx)(r.td,{children:"RKE2_KUBECONFIG_MODE"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"helm",children:"Helm"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"helm-job-image"}),(0,d.jsx)(r.td,{children:"Default image to use for helm jobs"})]})})]}),"\n",(0,d.jsx)(r.h3,{id:"cluster",children:"Cluster"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"token"}),(0,d.jsx)(r.td,{children:"Shared secret used to join a server or agent to a cluster"}),(0,d.jsx)(r.td,{children:"RKE2_TOKEN"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"token-file"}),(0,d.jsx)(r.td,{children:"File containing the token"}),(0,d.jsx)(r.td,{children:"RKE2_TOKEN_FILE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"agent-token"}),(0,d.jsx)(r.td,{children:"Shared secret used to join agents to the cluster, but not servers"}),(0,d.jsx)(r.td,{children:"RKE2_AGENT_TOKEN"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"agent-token-file"}),(0,d.jsx)(r.td,{children:"File containing the agent secret"}),(0,d.jsx)(r.td,{children:"RKE2_AGENT_TOKEN_FILE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"server"}),(0,d.jsx)(r.td,{children:"Server to connect to, used to join a cluster"}),(0,d.jsx)(r.td,{children:"RKE2_URL"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cluster-reset"}),(0,d.jsx)(r.td,{children:"Forget all peers and become sole member of a new cluster"}),(0,d.jsx)(r.td,{children:"RKE2_CLUSTER_RESET"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"database",children:"Database"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Default"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cluster-reset-restore-path"}),(0,d.jsx)(r.td,{children:"Path to snapshot file to be restored"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-expose-metrics"}),(0,d.jsx)(r.td,{children:"Expose etcd metrics to client interface."}),(0,d.jsx)(r.td,{children:"false"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-disable-snapshots"}),(0,d.jsx)(r.td,{children:"Disable automatic etcd snapshots"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-snapshot-name"}),(0,d.jsx)(r.td,{children:"Set the base name of etcd snapshots"}),(0,d.jsx)(r.td,{children:"etcd-snapshot-<unix-timestamp>)"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-snapshot-schedule-cron"}),(0,d.jsx)(r.td,{children:"Snapshot interval time in cron spec. eg. every 5 hours '0 */5 * * *'"}),(0,d.jsx)(r.td,{children:'"0 */12 * * *"'}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-snapshot-retention"}),(0,d.jsx)(r.td,{children:"Number of snapshots to retain"}),(0,d.jsx)(r.td,{children:"5"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-snapshot-dir"}),(0,d.jsx)(r.td,{children:"Directory to save db snapshots."}),(0,d.jsx)(r.td,{children:"${data-dir}/db/snapshots"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-snapshot-compress"}),(0,d.jsx)(r.td,{children:"Compress etcd snapshot"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-s3"}),(0,d.jsx)(r.td,{children:"Enable backup to S3"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-s3-endpoint"}),(0,d.jsx)(r.td,{children:"S3 endpoint url"}),(0,d.jsx)(r.td,{children:'"s3.amazonaws.com"'}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-s3-endpoint-ca"}),(0,d.jsx)(r.td,{children:"S3 custom CA cert to connect to S3 endpoint"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-s3-skip-ssl-verify"}),(0,d.jsx)(r.td,{children:"Disables S3 SSL certificate validation"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-s3-access-key"}),(0,d.jsx)(r.td,{children:"S3 access key"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"AWS_ACCESS_KEY_ID"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-s3-secret-key"}),(0,d.jsx)(r.td,{children:"S3 secret key"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"AWS_SECRET_ACCESS_KEY"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-s3-bucket"}),(0,d.jsx)(r.td,{children:"S3 bucket name"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-s3-region"}),(0,d.jsx)(r.td,{children:"S3 region / bucket location (optional)"}),(0,d.jsx)(r.td,{children:'"us-east-1"'}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-s3-folder"}),(0,d.jsx)(r.td,{children:"S3 folder"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-s3-insecure"}),(0,d.jsx)(r.td,{children:"Disables S3 over HTTPS"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-s3-timeout"}),(0,d.jsx)(r.td,{children:"S3 timeout"}),(0,d.jsx)(r.td,{children:"5m0s"}),(0,d.jsx)(r.td,{})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"flags",children:"Flags"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-apiserver-arg"}),(0,d.jsx)(r.td,{children:"Customized flag for kube-apiserver process"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-arg"}),(0,d.jsx)(r.td,{children:"Customized flag for etcd process"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-controller-manager-arg"}),(0,d.jsx)(r.td,{children:"Customized flag for kube-controller-manager process"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-scheduler-arg"}),(0,d.jsx)(r.td,{children:"Customized flag for kube-scheduler process"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-cloud-controller-manager-arg"}),(0,d.jsx)(r.td,{children:"Customized flag for kube-cloud-controller-manager process"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"components",children:"Components"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"disable"}),(0,d.jsx)(r.td,{children:"Do not deploy packaged components and delete any deployed components (valid items: rke2-coredns, rke2-ingress-nginx, rke2-metrics-server)"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"disable-scheduler"}),(0,d.jsx)(r.td,{children:"Disable Kubernetes default scheduler"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"disable-cloud-controller"}),(0,d.jsx)(r.td,{children:"Disable rke2 default cloud controller manager"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"disable-kube-proxy"}),(0,d.jsx)(r.td,{children:"Disable running kube-proxy"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"enable-servicelb"}),(0,d.jsx)(r.td,{children:"Enable rke2 default cloud controller manager's service controller"}),(0,d.jsx)(r.td,{children:"RKE2_ENABLE_SERVICELB"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"control-plane-resource-requests"}),(0,d.jsx)(r.td,{children:"Control Plane resource requests"}),(0,d.jsx)(r.td,{children:"RKE2_CONTROL_PLANE_RESOURCE_REQUESTS"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"control-plane-resource-limits"}),(0,d.jsx)(r.td,{children:"Control Plane resource limits"}),(0,d.jsx)(r.td,{children:"RKE2_CONTROL_PLANE_RESOURCE_LIMITS"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"control-plane-probe-configuration"}),(0,d.jsx)(r.td,{children:"Control Plane Probe configuration"}),(0,d.jsx)(r.td,{children:"RKE2_CONTROL_PLANE_PROBE_CONFIGURATION"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-apiserver-extra-mount"}),(0,d.jsx)(r.td,{children:"kube-apiserver extra volume mounts"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_APISERVER_EXTRA_MOUNT"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-scheduler-extra-mount"}),(0,d.jsx)(r.td,{children:"kube-scheduler extra volume mounts"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_SCHEDULER_EXTRA_MOUNT"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-controller-manager-extra-mount"}),(0,d.jsx)(r.td,{children:"kube-controller-manager extra volume mounts"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_MOUNT"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-proxy-extra-mount"}),(0,d.jsx)(r.td,{children:"kube-proxy extra volume mounts"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_PROXY_EXTRA_MOUNT"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-extra-mount"}),(0,d.jsx)(r.td,{children:"etcd extra volume mounts"}),(0,d.jsx)(r.td,{children:"RKE2_ETCD_EXTRA_MOUNT"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cloud-controller-manager-extra-mount"}),(0,d.jsx)(r.td,{children:"cloud-controller-manager extra volume mounts"}),(0,d.jsx)(r.td,{children:"RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_MOUNT"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-apiserver-extra-env"}),(0,d.jsx)(r.td,{children:"kube-apiserver extra environment variables"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_APISERVER_EXTRA_ENV"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-scheduler-extra-env"}),(0,d.jsx)(r.td,{children:"kube-scheduler extra environment variables"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_SCHEDULER_EXTRA_ENV"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-controller-manager-extra-env"}),(0,d.jsx)(r.td,{children:"kube-controller-manager extra environment variables"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_ENV"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-proxy-extra-env"}),(0,d.jsx)(r.td,{children:"kube-proxy extra environment variables"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_PROXY_EXTRA_ENV"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-extra-env"}),(0,d.jsx)(r.td,{children:"etcd extra environment variables"}),(0,d.jsx)(r.td,{children:"RKE2_ETCD_EXTRA_ENV"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cloud-controller-manager-extra-env"}),(0,d.jsx)(r.td,{children:"cloud-controller-manager extra environment variables"}),(0,d.jsx)(r.td,{children:"RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_ENV"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"image",children:"Image"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-apiserver-image"}),(0,d.jsx)(r.td,{children:"Override image to use for kube-apiserver"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_APISERVER_IMAGE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-controller-manager-image"}),(0,d.jsx)(r.td,{children:"Override image to use for kube-controller-manager"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_CONTROLLER_MANAGER_IMAGE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cloud-controller-manager-image"}),(0,d.jsx)(r.td,{children:"Override image to use for cloud-controller-manager"}),(0,d.jsx)(r.td,{children:"RKE2_CLOUD_CONTROLLER_MANAGER_IMAGE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-proxy-image"}),(0,d.jsx)(r.td,{children:"Override image to use for kube-proxy"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_PROXY_IMAGE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-scheduler-image"}),(0,d.jsx)(r.td,{children:"Override image to use for kube-scheduler"}),(0,d.jsx)(r.td,{children:"RKE2_KUBE_SCHEDULER_IMAGE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"pause-image"}),(0,d.jsx)(r.td,{children:"Override image to use for pause"}),(0,d.jsx)(r.td,{children:"RKE2_PAUSE_IMAGE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"runtime-image"}),(0,d.jsx)(r.td,{children:"Override image to use for runtime binaries (containerd, kubectl, crictl, etc)"}),(0,d.jsx)(r.td,{children:"RKE2_RUNTIME_IMAGE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"etcd-image"}),(0,d.jsx)(r.td,{children:"Override image to use for etcd"}),(0,d.jsx)(r.td,{children:"RKE2_ETCD_IMAGE"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"cloud-provider",children:"Cloud Provider"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cloud-provider-name"}),(0,d.jsx)(r.td,{children:"Cloud provider name"}),(0,d.jsx)(r.td,{children:"RKE2_CLOUD_PROVIDER_NAME"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"cloud-provider-config"}),(0,d.jsx)(r.td,{children:"Cloud provider configuration file path"}),(0,d.jsx)(r.td,{children:"RKE2_CLOUD_PROVIDER_CONFIG"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"security",children:"Security"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"profile"}),(0,d.jsx)(r.td,{children:"Validate system configuration against the selected benchmark (valid items: cis, cis-1.23 (deprecated))"}),(0,d.jsx)(r.td,{children:"RKE2_CIS_PROFILE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"audit-policy-file"}),(0,d.jsx)(r.td,{children:"Path to the file that defines the audit policy configuration"}),(0,d.jsx)(r.td,{children:"RKE2_AUDIT_POLICY_FILE"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"pod-security-admission-config-file"}),(0,d.jsx)(r.td,{children:"Path to the file that defines Pod Security Admission configuration"}),(0,d.jsx)(r.td,{children:"RKE2_POD_SECURITY_ADMISSION_CONFIG_FILE"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"experimental",children:"Experimental"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"embedded-registry"}),(0,d.jsx)(r.td,{children:"Enable embedded distributed container registry; requires use of embedded containerd"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"enable-pprof"}),(0,d.jsx)(r.td,{children:"Enable pprof endpoint on supervisor port"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kubelet-path"}),(0,d.jsx)(r.td,{children:"Override kubelet binary path"}),(0,d.jsx)(r.td,{children:"RKE2_KUBELET_PATH"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"agentnode",children:"Agent/Node"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Default"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"node-name"}),(0,d.jsx)(r.td,{children:"Node name"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"RKE2_NODE_NAME"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"with-node-id"}),(0,d.jsx)(r.td,{children:"Append id to node name"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"node-label"}),(0,d.jsx)(r.td,{children:"Registering and starting kubelet with set of labels"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"node-taint"}),(0,d.jsx)(r.td,{children:"Registering kubelet with set of taints"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"image-credential-provider-bin-dir"}),(0,d.jsx)(r.td,{children:"The path to the directory where credential provider plugin binaries are located"}),(0,d.jsx)(r.td,{children:'"/var/lib/rancher/credentialprovider/bin"'}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"image-credential-provider-config"}),(0,d.jsx)(r.td,{children:"The path to the credential provider plugin config file"}),(0,d.jsx)(r.td,{children:'"/var/lib/rancher/credentialprovider/config.yaml"'}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"protect-kernel-defaults"}),(0,d.jsx)(r.td,{children:"Kernel tuning behavior. If set, error if kernel tunables are different than kubelet defaults."}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"selinux"}),(0,d.jsx)(r.td,{children:"Enable SELinux in containerd"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"RKE2_SELINUX"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"lb-server-port"}),(0,d.jsx)(r.td,{children:"Local port for supervisor client load-balancer. If the supervisor and apiserver are not colocated an additional port 1 less than this port will also be used for the apiserver client load-balancer."}),(0,d.jsx)(r.td,{children:"6444"}),(0,d.jsx)(r.td,{children:"RKE2_LB_SERVER_PORT"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"agentruntime",children:"Agent/Runtime"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Default"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"container-runtime-endpoint"}),(0,d.jsx)(r.td,{children:"Disable embedded containerd and use the CRI socket at the given path; when used with --docker this sets the docker socket path"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"default-runtime"}),(0,d.jsx)(r.td,{children:"Set the default runtime in containerd"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"snapshotter"}),(0,d.jsx)(r.td,{children:"Override default containerd snapshotter"}),(0,d.jsx)(r.td,{children:'"overlayfs"'}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"private-registry"}),(0,d.jsx)(r.td,{children:"Private registry configuration file"}),(0,d.jsx)(r.td,{children:'"/etc/rancher/rke2/registries.yaml"'}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"system-default-registry"}),(0,d.jsx)(r.td,{children:"Private registry to be used for all system images"}),(0,d.jsx)(r.td,{}),(0,d.jsx)(r.td,{children:"RKE2_SYSTEM_DEFAULT_REGISTRY"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"agentcontainerd",children:"Agent/Containerd"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsx)(r.tbody,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"disable-default-registry-endpoint"}),(0,d.jsx)(r.td,{children:"Disables containerd's fallback default registry endpoint when a mirror is configured for that registry"})]})})]}),"\n",(0,d.jsx)(r.h3,{id:"agentnetworking",children:"Agent/Networking"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"}),(0,d.jsx)(r.th,{children:"Enviroment Variable"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"node-ip"}),(0,d.jsx)(r.td,{children:"IPv4/IPv6 addresses to advertise for node"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"node-external-ip"}),(0,d.jsx)(r.td,{children:"IPv4/IPv6 external IP addresses to advertise for node"}),(0,d.jsx)(r.td,{})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"resolv-conf"}),(0,d.jsx)(r.td,{children:"Kubelet resolv.conf file"}),(0,d.jsx)(r.td,{children:"RKE2_RESOLV_CONF"})]})]})]}),"\n",(0,d.jsx)(r.h3,{id:"agentflags",children:"Agent/Flags"}),"\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Flag"}),(0,d.jsx)(r.th,{children:"Description"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kubelet-arg"}),(0,d.jsx)(r.td,{children:"Customized flag for kubelet process"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"kube-proxy-arg"}),(0,d.jsx)(r.td,{children:"Customized flag for kube-proxy process"})]})]})]})]})}function o(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>i});var d=t(7294);const s={},n=d.createContext(s);function i(e){const r=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(n.Provider,{value:r},e.children)}}}]);