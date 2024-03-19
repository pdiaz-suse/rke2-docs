"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[6801],{2862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(5893),s=t(1151);const i={title:"Advanced Options and Configuration"},o=void 0,a={id:"advanced",title:"Advanced Options and Configuration",description:"This section contains advanced information describing the different ways you can run and manage RKE2.",source:"@site/docs/advanced.md",sourceDirName:".",slug:"/advanced",permalink:"/advanced",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/advanced.md",tags:[],version:"current",lastUpdatedAt:1710866752,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Advanced Options and Configuration"},sidebar:"mySidebar",previous:{title:"Helm Integration",permalink:"/helm"},next:{title:"CLI Tools",permalink:"/reference/cli_tools"}},l={},c=[{value:"Certificate Rotation",id:"certificate-rotation",level:2},{value:"Auto-Deploying Manifests",id:"auto-deploying-manifests",level:2},{value:"Configuring containerd",id:"configuring-containerd",level:2},{value:"Configuring an HTTP proxy",id:"configuring-an-http-proxy",level:2},{value:"Node Labels and Taints",id:"node-labels-and-taints",level:2},{value:"Starting the Server with the Installation Script",id:"starting-the-server-with-the-installation-script",level:2},{value:"Disabling Server Charts",id:"disabling-server-charts",level:2},{value:"Installation on classified AWS regions or networks with custom AWS API endpoints",id:"installation-on-classified-aws-regions-or-networks-with-custom-aws-api-endpoints",level:2},{value:"Control Plane Component Resource Requests/Limits",id:"control-plane-component-resource-requestslimits",level:2},{value:"Extra Control Plane Component Volume Mounts",id:"extra-control-plane-component-volume-mounts",level:2},{value:"RW Host Path Volume Mount",id:"rw-host-path-volume-mount",level:3},{value:"RO Host Path Volume Mount",id:"ro-host-path-volume-mount",level:3},{value:"Extra Control Plane Component Environment Variables",id:"extra-control-plane-component-environment-variables",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This section contains advanced information describing the different ways you can run and manage RKE2."}),"\n",(0,r.jsx)(n.h2,{id:"certificate-rotation",children:"Certificate Rotation"}),"\n",(0,r.jsx)(n.p,{children:"By default, certificates in RKE2 expire in 12 months."}),"\n",(0,r.jsx)(n.p,{children:"If the certificates are expired or have fewer than 90 days remaining before they expire, the certificates are rotated when RKE2 is restarted."}),"\n",(0,r.jsx)(n.p,{children:"As of v1.21.8+rke2r1, certificates can also be rotated manually. To do this, it is best to stop the rke2-server process, rotate the certificates, then start the process up again:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"systemctl stop rke2-server\nrke2 certificate rotate\nsystemctl start rke2-server\n"})}),"\n",(0,r.jsx)(n.p,{children:"To renew agent certificates, restart rke2-agent in agent nodes. Agent certificates are renewed every time the agent starts."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"systemctl restart rke2-agent\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It is also possible to rotate an individual service by passing the ",(0,r.jsx)(n.code,{children:"--service"})," flag, for example: ",(0,r.jsx)(n.code,{children:"rke2 certificate rotate --service api-server"}),". See ",(0,r.jsx)(n.a,{href:"/security/certificates#rotating-client-and-server-certificates-manually",children:"Certificate Management"})," for more details."]}),"\n",(0,r.jsx)(n.h2,{id:"auto-deploying-manifests",children:"Auto-Deploying Manifests"}),"\n",(0,r.jsxs)(n.p,{children:["Any file found in ",(0,r.jsx)(n.code,{children:"/var/lib/rancher/rke2/server/manifests"})," will automatically be deployed to Kubernetes in a manner similar to ",(0,r.jsx)(n.code,{children:"kubectl apply"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For information about deploying Helm charts using the manifests directory, refer to the section about ",(0,r.jsx)(n.a,{href:"/helm",children:"Helm."})]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-containerd",children:"Configuring containerd"}),"\n",(0,r.jsxs)(n.p,{children:["RKE2 will generate the ",(0,r.jsx)(n.code,{children:"config.toml"})," for containerd in ",(0,r.jsx)(n.code,{children:"/var/lib/rancher/rke2/agent/etc/containerd/config.toml"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For advanced customization of this file you can create another file called ",(0,r.jsx)(n.code,{children:"config.toml.tmpl"})," in the same directory and it will be used instead."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"config.toml.tmpl"})," will be treated as a Go template file, and the ",(0,r.jsx)(n.code,{children:"config.Node"})," structure is being passed to the template. See ",(0,r.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/blob/master/pkg/agent/templates/templates.go#L16-L32",children:"this template"})," for an example of how to use the structure to customize the configuration file."]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-an-http-proxy",children:"Configuring an HTTP proxy"}),"\n",(0,r.jsx)(n.p,{children:"If you are running RKE2 in an environment, which only has external connectivity through an HTTP proxy, you can configure your proxy settings on the RKE2 systemd service. These proxy settings will then be used in RKE2 and passed down to the embedded containerd and kubelet."}),"\n",(0,r.jsxs)(n.p,{children:["Add the necessary ",(0,r.jsx)(n.code,{children:"HTTP_PROXY"}),", ",(0,r.jsx)(n.code,{children:"HTTPS_PROXY"})," and ",(0,r.jsx)(n.code,{children:"NO_PROXY"})," variables to the environment file of your systemd service, usually:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/etc/default/rke2-server"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"/etc/default/rke2-agent"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["RKE2 will automatically add the cluster internal Pod and Service IP ranges and cluster DNS domain to the list of ",(0,r.jsx)(n.code,{children:"NO_PROXY"})," entries. You should ensure that the IP address ranges used by the Kubernetes nodes themselves (i.e. the public and private IPs of the nodes) are included in the ",(0,r.jsx)(n.code,{children:"NO_PROXY"})," list, or that the nodes can be reached through the proxy."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"HTTP_PROXY=http://your-proxy.example.com:8888\nHTTPS_PROXY=http://your-proxy.example.com:8888\nNO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you want to configure the proxy settings for containerd without affecting RKE2 and the Kubelet, you can prefix the variables with ",(0,r.jsx)(n.code,{children:"CONTAINERD_"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CONTAINERD_HTTP_PROXY=http://your-proxy.example.com:8888\nCONTAINERD_HTTPS_PROXY=http://your-proxy.example.com:8888\nCONTAINERD_NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16\n"})}),"\n",(0,r.jsx)(n.h2,{id:"node-labels-and-taints",children:"Node Labels and Taints"}),"\n",(0,r.jsxs)(n.p,{children:["RKE2 agents can be configured with the options ",(0,r.jsx)(n.code,{children:"node-label"})," and ",(0,r.jsx)(n.code,{children:"node-taint"})," which adds a label and taint to the kubelet. The two options only add labels and/or taints at registration time, and can only be added once and not removed after that through rke2 commands."]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to change node labels and taints after node registration you should use ",(0,r.jsx)(n.code,{children:"kubectl"}),". Refer to the official Kubernetes documentation for details on how to add ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/",children:"taints"})," and ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes/#add-a-label-to-a-node",children:"node labels"}),"."]}),"\n",(0,r.jsx)(n.h1,{id:"how-agent-node-registration-works",children:"How Agent Node Registration Works"}),"\n",(0,r.jsxs)(n.p,{children:["Agent nodes are registered via a websocket connection initiated by the ",(0,r.jsx)(n.code,{children:"rke2 agent"})," process, and the connection is maintained by a client-side load balancer running as part of the agent process."]}),"\n",(0,r.jsxs)(n.p,{children:["Agents register with the server using the cluster secret portion of the join token, along with a randomly generated node-specific password, which is stored on the agent at ",(0,r.jsx)(n.code,{children:"/etc/rancher/node/password"}),". The server will store the passwords for individual nodes as Kubernetes secrets, and any subsequent attempts must use the same password. Node password secrets are stored in the ",(0,r.jsx)(n.code,{children:"kube-system"})," namespace with names using the template ",(0,r.jsx)(n.code,{children:"<host>.node-password.rke2"}),". These secrets are deleted when the corresponding Kubernetes node is deleted."]}),"\n",(0,r.jsxs)(n.p,{children:["Note: Prior to RKE2 v1.20.2 servers stored passwords on disk at ",(0,r.jsx)(n.code,{children:"/var/lib/rancher/rke2/server/cred/node-passwd"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"/etc/rancher/node"})," directory of an agent is removed, the password file should be recreated for the agent prior to startup, or the entry removed from the server or Kubernetes cluster (depending on the RKE2 version)."]}),"\n",(0,r.jsx)(n.h2,{id:"starting-the-server-with-the-installation-script",children:"Starting the Server with the Installation Script"}),"\n",(0,r.jsx)(n.p,{children:"The installation script provides units for systemd, but does not enable or start the service by default."}),"\n",(0,r.jsxs)(n.p,{children:["When running with systemd, logs will be created in ",(0,r.jsx)(n.code,{children:"/var/log/syslog"})," and viewed using ",(0,r.jsx)(n.code,{children:"journalctl -u rke2-server"})," or ",(0,r.jsx)(n.code,{children:"journalctl -u rke2-agent"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"An example of installing with the install script:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -sfL https://get.rke2.io | sh -\nsystemctl enable rke2-server\nsystemctl start rke2-server\n"})}),"\n",(0,r.jsx)(n.h2,{id:"disabling-server-charts",children:"Disabling Server Charts"}),"\n",(0,r.jsxs)(n.p,{children:["The server charts bundled with ",(0,r.jsx)(n.code,{children:"rke2"})," deployed during cluster bootstrapping can be disabled and replaced with alternatives.  A common use case is replacing the bundled ",(0,r.jsx)(n.code,{children:"rke2-ingress-nginx"})," chart with an alternative."]}),"\n",(0,r.jsxs)(n.p,{children:["To disable any of the bundled system charts, set the ",(0,r.jsx)(n.code,{children:"disable"})," parameter in the config file before bootstrapping. An example of disabling all available system charts is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# /etc/rancher/rke2/config.yaml\ndisable:\n  - rke2-coredns\n  - rke2-ingress-nginx\n  - rke2-metrics-server\n  - rke2-snapshot-controller\n  - rke2-snapshot-controller-crd\n  - rke2-snapshot-validation-webhook\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsxs)(n.p,{children:["It is the cluster operator's responsibility to ensure that components are disabled or replaced with care, as the server charts play important roles in cluster operability.  Refer to the ",(0,r.jsx)(n.a,{href:"/architecture#server-charts",children:"architecture overview"})," for more information on the individual system charts role within the cluster."]})]}),"\n",(0,r.jsx)(n.h2,{id:"installation-on-classified-aws-regions-or-networks-with-custom-aws-api-endpoints",children:"Installation on classified AWS regions or networks with custom AWS API endpoints"}),"\n",(0,r.jsx)(n.p,{children:"In public AWS regions, to ensure RKE2 is cloud-enabled, and capable of auto-provisioning certain cloud resources, config RKE2 with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# /etc/rancher/rke2/config.yaml\ncloud-provider-name: aws\n"})}),"\n",(0,r.jsx)(n.p,{children:"When installing RKE2 on classified regions (such as SC2S or C2S), there are a few additional pre-requisites to be aware of to ensure RKE2 knows how and where to securely communicate with the appropriate AWS endpoints:"}),"\n",(0,r.jsxs)(n.ol,{start:"0",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Ensure all the common AWS cloud-provider ",(0,r.jsx)(n.a,{href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/aws/",children:"prerequisites"})," are met.  These are independent of regions and are always required."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Ensure RKE2 knows where to send API requests for ",(0,r.jsx)(n.code,{children:"ec2"})," and ",(0,r.jsx)(n.code,{children:"elasticloadbalancing"})," services by creating a ",(0,r.jsx)(n.code,{children:"cloud.conf"})," file, the below is an example for the ",(0,r.jsx)(n.code,{children:"us-iso-east-1"})," (C2S) region:"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# /etc/rancher/rke2/cloud.conf\n[Global]\n[ServiceOverride "ec2"]\n  Service=ec2\n  Region=us-iso-east-1\n  URL=https://ec2.us-iso-east-1.c2s.ic.gov\n  SigningRegion=us-iso-east-1\n[ServiceOverride "elasticloadbalancing"]\n  Service=elasticloadbalancing\n  Region=us-iso-east-1\n  URL=https://elasticloadbalancing.us-iso-east-1.c2s.ic.gov\n  SigningRegion=us-iso-east-1\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, if you are using ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/vpc/latest/privatelink/endpoint-services-overview.html",children:"private AWS endpoints"}),", ensure the appropriate ",(0,r.jsx)(n.code,{children:"URL"})," is used for each of the private endpoints."]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Ensure the appropriate AWS CA bundle is loaded into the system's root ca trust store.  This may already be done for you depending on the AMI you are using."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# on CentOS/RHEL 7/8\ncp <ca.pem> /etc/pki/ca-trust/source/anchors/\nupdate-ca-trust\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Configure RKE2 to use the ",(0,r.jsx)(n.code,{children:"aws"})," cloud-provider with the custom ",(0,r.jsx)(n.code,{children:"cloud.conf"})," created in step 1:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# /etc/rancher/rke2/config.yaml\n...\ncloud-provider-name: aws\ncloud-provider-config: "/etc/rancher/rke2/cloud.conf"\n...\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/install/methods",children:"Install"})," RKE2 normally (most likely in an ",(0,r.jsx)(n.a,{href:"/install/airgap",children:"airgapped"})," capacity)"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Validate successful installation by confirming the existence of AWS metadata on cluster node labels with ",(0,r.jsx)(n.code,{children:"kubectl get nodes --show-labels"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"control-plane-component-resource-requestslimits",children:"Control Plane Component Resource Requests/Limits"}),"\n",(0,r.jsxs)(n.p,{children:["The following options are available under the ",(0,r.jsx)(n.code,{children:"server"})," sub-command for RKE2. The options allow for specifying CPU requests and limits for the control plane components within RKE2."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"   --control-plane-resource-requests value       (components) Control Plane resource requests [$RKE2_CONTROL_PLANE_RESOURCE_REQUESTS]\n   --control-plane-resource-limits value         (components) Control Plane resource limits [$RKE2_CONTROL_PLANE_RESOURCE_LIMITS]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Values are a comma-delimited list of ",(0,r.jsx)(n.code,{children:"[controlplane-component]-(cpu|memory)=[desired-value]"}),". The possible values for ",(0,r.jsx)(n.code,{children:"controlplane-component"})," are:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kube-apiserver\nkube-scheduler\nkube-controller-manager\nkube-proxy\netcd\ncloud-controller-manager\n"})}),"\n",(0,r.jsx)(n.p,{children:"Thus, an example config may value may look like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# /etc/rancher/rke2/config.yaml\ncontrol-plane-resource-requests:\n  - kube-apiserver-cpu=500m\n  - kube-apiserver-memory=512M\n  - kube-scheduler-cpu=250m\n  - kube-scheduler-memory=512M\n  - etcd-cpu=1000m\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The unit values for CPU/memory are identical to Kubernetes resource units (See: ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#resource-units-in-kubernetes",children:"Resource Limits in Kubernetes"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"extra-control-plane-component-volume-mounts",children:"Extra Control Plane Component Volume Mounts"}),"\n",(0,r.jsxs)(n.p,{children:["The following options are available under the ",(0,r.jsx)(n.code,{children:"server"})," sub-command for RKE2. These options specify host-path mounting of directories from the node filesystem into the static pod component that corresponds to the prefixed name."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Flag"}),(0,r.jsx)(n.th,{children:"ENV VAR"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--kube-apiserver-extra-mount"})}),(0,r.jsx)(n.td,{children:"RKE2_KUBE_APISERVER_EXTRA_MOUNT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--kube-scheduler-extra-mount"})}),(0,r.jsx)(n.td,{children:"RKE2_KUBE_SCHEDULER_EXTRA_MOUNT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--kube-controller-manager-extra-mount"})}),(0,r.jsx)(n.td,{children:"RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_MOUNT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--kube-proxy-extra-mount"})}),(0,r.jsx)(n.td,{children:"RKE2_KUBE_PROXY_EXTRA_MOUNT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--etcd-extra-mount"})}),(0,r.jsx)(n.td,{children:"RKE2_ETCD_EXTRA_MOUNT"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--cloud-controller-manager-extra-mount"})}),(0,r.jsx)(n.td,{children:"RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_MOUNT"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"rw-host-path-volume-mount",children:"RW Host Path Volume Mount"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"/source/volume/path/on/host:/destination/volume/path/in/staticpod"})}),"\n",(0,r.jsx)(n.h3,{id:"ro-host-path-volume-mount",children:"RO Host Path Volume Mount"}),"\n",(0,r.jsxs)(n.p,{children:["In order to mount a volume as read only, append ",(0,r.jsx)(n.code,{children:":ro"})," to the end of the volume mount.\n",(0,r.jsx)(n.code,{children:"/source/volume/path/on/host:/destination/volume/path/in/staticpod:ro"})]}),"\n",(0,r.jsx)(n.p,{children:"Multiple volume mounts can be specified for the same component by passing the flag values as an array in the config file."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# /etc/rancher/rke2/config.yaml\nkube-apiserver-extra-mount: \n   - "/tmp/foo.yaml:/root/foo.yaml"\n   - "/tmp/bar.txt:/etc/bar.txt:ro"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"extra-control-plane-component-environment-variables",children:"Extra Control Plane Component Environment Variables"}),"\n",(0,r.jsxs)(n.p,{children:["The following options are available under the ",(0,r.jsx)(n.code,{children:"server"})," sub-command for RKE2. These options specify additional environment variables in standard format i.e. ",(0,r.jsx)(n.code,{children:"KEY=VALUE"})," for the static pod component that corresponds to the prefixed name."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Flag"}),(0,r.jsx)(n.th,{children:"ENV VAR"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--kube-apiserver-extra-env"})}),(0,r.jsx)(n.td,{children:"RKE2_KUBE_APISERVER_EXTRA_ENV"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--kube-scheduler-extra-env"})}),(0,r.jsx)(n.td,{children:"RKE2_KUBE_SCHEDULER_EXTRA_ENV"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--kube-controller-manager-extra-env"})}),(0,r.jsx)(n.td,{children:"RKE2_KUBE_CONTROLLER_MANAGER_EXTRA_ENV"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--kube-proxy-extra-env"})}),(0,r.jsx)(n.td,{children:"RKE2_KUBE_PROXY_EXTRA_ENV"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--etcd-extra-env"})}),(0,r.jsx)(n.td,{children:"RKE2_ETCD_EXTRA_ENV"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--cloud-controller-manager-extra-env"})}),(0,r.jsx)(n.td,{children:"RKE2_CLOUD_CONTROLLER_MANAGER_EXTRA_ENV"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Multiple environment variables can be specified for the same component by passing the flag values as an array in the config file."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# /etc/rancher/rke2/config.yaml\nkube-apiserver-extra-env:\n  - "MY_FOO=FOO"\n  - "MY_BAR=BAR"\nkube-scheduler-extra-env: "TZ=America/Los_Angeles"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(7294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);