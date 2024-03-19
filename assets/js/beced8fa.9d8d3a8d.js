"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[3660],{6257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(5893),a=t(1151);const s={title:"Network Options"},r=void 0,l={id:"install/network_options",title:"Network Options",description:"RKE2 requires a CNI plugin to connect pods and services. The Canal CNI plugin is the default and has been supported since the beginning. Starting with RKE2 v1.21, there are two extra supported CNI plugins: Calico and Cilium. All CNI",source:"@site/docs/install/network_options.md",sourceDirName:"install",slug:"/install/network_options",permalink:"/install/network_options",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/install/network_options.md",tags:[],version:"current",lastUpdatedAt:1710866752,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Network Options"},sidebar:"mySidebar",previous:{title:"Configuration Options",permalink:"/install/configuration"},next:{title:"High Availability",permalink:"/install/ha"}},o={},c=[{value:"Install a CNI plugin",id:"install-a-cni-plugin",level:2},{value:"Dual-stack configuration",id:"dual-stack-configuration",level:2},{value:"IPv6 setup",id:"ipv6-setup",level:2},{value:"Using Multus",id:"using-multus",level:2},{value:"Using Multus with Cilium",id:"using-multus-with-cilium",level:2},{value:"Using Multus with the containernetworking plugins",id:"using-multus-with-the-containernetworking-plugins",level:2},{value:"Multus IPAM plugin options",id:"multus-ipam-plugin-options",level:2},{value:"Using Multus with SR-IOV",id:"using-multus-with-sr-iov",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{TabItem:t,Tabs:s}=n;return t||h("TabItem",!0),s||h("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"RKE2 requires a CNI plugin to connect pods and services. The Canal CNI plugin is the default and has been supported since the beginning. Starting with RKE2 v1.21, there are two extra supported CNI plugins: Calico and Cilium. All CNI\nplugins get installed via a helm chart after the main components are up and running and can be customized by modifying the helm chart options."}),"\n",(0,i.jsx)(n.p,{children:"This page focuses on the network options available when setting up RKE2:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#install-a-cni-plugin",children:"Install a CNI plugin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#dual-stack-configuration",children:"Dual-stack configuration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#using-multus",children:"Using Multus"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-a-cni-plugin",children:"Install a CNI plugin"}),"\n",(0,i.jsx)(n.p,{children:"RKE2 integrates with four different CNI plugins: Canal, Cilium, Calico and Flannel. Note that only Calico and Flannel are options for RKE2 deployments with Windows nodes."}),"\n",(0,i.jsx)(n.p,{children:"The next tabs inform how to deploy each CNI plugin and override the default options:"}),"\n",(0,i.jsxs)(s,{groupId:"CNIplugin",children:[(0,i.jsxs)(t,{value:"Canal CNI plugin",default:!0,children:[(0,i.jsx)(n.p,{children:"Canal means using Flannel for inter-node traffic and Calico for intra-node traffic and network policies. By default, it will use vxlan encapsulation to create an overlay network among nodes. Canal is deployed by default in RKE2 and thus nothing must be configured to activate it. To override the default Canal options you should create a HelmChartConfig resource. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart. For example to override the flannel interface, you can apply the following config:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'# /var/lib/rancher/rke2/server/manifests/rke2-canal-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-canal\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    flannel:\n      iface: "eth1"\n'})}),(0,i.jsxs)(n.p,{children:["Starting with RKE2 v1.23 it is possible to use flannel's ",(0,i.jsx)(n.a,{href:"https://github.com/flannel-io/flannel/blob/master/Documentation/backends.md#wireguard",children:"wireguard backend"})," for in-kernel WireGuard encapsulation and encryption (",(0,i.jsx)(n.a,{href:"https://www.wireguard.com/install/",children:"Users of kernels < 5.6 need to install a module"}),"). This can be achieved using the following config:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'# /var/lib/rancher/rke2/server/manifests/rke2-canal-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-canal\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    flannel:\n      backend: "wireguard"\n'})}),(0,i.jsxs)(n.p,{children:["After that, please restart the canal daemonset to use the newer config by executing: ",(0,i.jsx)(n.code,{children:"kubectl rollout restart ds rke2-canal -n kube-system"})]}),(0,i.jsxs)(n.p,{children:["For more information about the full options of the Canal config please refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2-charts/blob/main-source/packages/rke2-canal/charts/values.yaml",children:"rke2-charts"}),"."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Canal requires the iptables or xtables-nft package to be installed on the node."})}),(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Canal is currently not supported on clusters with Windows nodes."})}),(0,i.jsxs)(n.p,{children:["Please check ",(0,i.jsx)(n.a,{href:"/known_issues",children:"Known issues and Limitations"})," if you experience IP allocation problems"]})]}),(0,i.jsxs)(t,{value:"Cilium CNI plugin",default:!0,children:[(0,i.jsxs)(n.p,{children:["Starting with RKE2 v1.21, Cilium can be deployed as the CNI plugin. To do so, pass ",(0,i.jsx)(n.code,{children:"cilium"})," as the value of the ",(0,i.jsx)(n.code,{children:"--cni"})," flag. Ensure that the nodes have the right required kernel version (>= 4.9.17) and they meet the ",(0,i.jsx)(n.a,{href:"https://docs.cilium.io/en/stable/operations/system_requirements/",children:"requirements"}),". To override the default options, please use a HelmChartConfig resource. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart. For example, to enable eni:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    eni:\n      enabled: true\n"})}),(0,i.jsxs)(n.p,{children:["For more information about values available in the Cilium chart, please refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2-charts/blob/main/charts/rke2-cilium/rke2-cilium/1.14.400/values.yaml",children:"rke2-charts repository"})]}),(0,i.jsxs)(n.p,{children:["Cilium includes advanced features to fully replace kube-proxy and implement the routing of services using eBPF instead of iptables. It is not recommended to replace kube-proxy by Cilium if your kernel is not v5.8 or newer, as important bug fixes and features will be missing. To activate this mode, deploy rke2 with the flag ",(0,i.jsx)(n.code,{children:"--disable-kube-proxy"})," and the following cilium configuration:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    kubeProxyReplacement: true\n    k8sServiceHost: <KUBE_API_SERVER_IP>\n    k8sServicePort: <KUBE_API_SERVER_PORT>\n"})}),(0,i.jsxs)(n.p,{children:["For more information, please check the ",(0,i.jsx)(n.a,{href:"https://docs.cilium.io/en/stable/network/kubernetes/kubeproxy-free/",children:"upstream docs"})]}),(0,i.jsxs)(n.p,{children:["Cilium includes also an observability platform called ",(0,i.jsx)(n.a,{href:"https://docs.cilium.io/en/stable/overview/intro/#what-is-hubble",children:"Hubble"}),"\nTo enable Hubble the following configuration is required:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    hubble:\n      enabled: true\n      relay:\n        enabled: true\n      ui:\n        enabled: true\n"})}),(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Cilium is currently not supported in the Windows installation of RKE2"})})]}),(0,i.jsxs)(t,{value:"Calico CNI plugin",default:!0,children:[(0,i.jsxs)(n.p,{children:["Starting with RKE2 v1.21, Calico can be deployed as the CNI plugin. To do so, pass ",(0,i.jsx)(n.code,{children:"calico"})," as the value of the ",(0,i.jsx)(n.code,{children:"--cni"})," flag. To override the default options, please use a HelmChartConfig resource. The HelmChartConfig resource must match the name and namespace of its corresponding HelmChart. For example, to change the mtu:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# /var/lib/rancher/rke2/server/manifests/rke2-calico-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-calico\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    installation:\n      calicoNetwork:\n        mtu: 9000\n"})}),(0,i.jsxs)(n.p,{children:["For more information about values available for the Calico chart, please refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2-charts/blob/main/charts/rke2-calico/rke2-calico/v3.26.300/values.yaml",children:"rke2-charts repository"})]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Calico requires the iptables or xtables-nft package  to be installed on the node."})})]}),(0,i.jsxs)(t,{value:"Flannel CNI plugin",default:!0,children:[(0,i.jsxs)(n.p,{children:["Starting with RKE2 2024 Feb release (v1.29.2, v1.28.7, v1.27.11, v1.26.14), Flannel can be deployed as the CNI plugin. To do so, pass ",(0,i.jsx)(n.code,{children:"flannel"})," as the value of the ",(0,i.jsx)(n.code,{children:"--cni"})," flag."]}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Only vxlan backend is supported at this point"})}),(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Flannel does not support network policies. Therefore, it is not recommended for hardened installations"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"dual-stack-configuration",children:"Dual-stack configuration"}),"\n",(0,i.jsxs)(n.p,{children:["IPv4/IPv6 dual-stack networking enables the allocation of both IPv4 and IPv6 addresses to Pods and Services. It is supported in RKE2 since v1.21, stable since v1.23 but not activated by default. To activate it correctly, both RKE2 and the chosen CNI plugin must be configured accordingly. To configure RKE2 in dual-stack mode, in the control-plane nodes, you must set a valid IPv4/IPv6 dual-stack cidr for pods and services. To do so, use the flags ",(0,i.jsx)(n.code,{children:"--cluster-cidr"})," and ",(0,i.jsx)(n.code,{children:"--service-cidr"})," for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'#/etc/rancher/rke2/config.yaml\ncluster-cidr: "10.42.0.0/16,2001:cafe:42::/56"\nservice-cidr: "10.43.0.0/16,2001:cafe:43::/112"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Each CNI plugin requires a different configuration for dual-stack:"}),"\n",(0,i.jsxs)(s,{groupId:"CNIplugin",children:[(0,i.jsx)(t,{value:"Canal CNI plugin",default:!0,children:(0,i.jsx)(n.p,{children:"Canal automatically detects the RKE2 configuration for dual-stack and does not need any extra configuration. Dual-stack is currently not supported in the windows installations of RKE2."})}),(0,i.jsx)(t,{value:"Cilium CNI plugin",default:!0,children:(0,i.jsx)(n.p,{children:"Cilium automatically detects the RKE2 configuration for dual-stack and does not need any extra configuration."})}),(0,i.jsx)(t,{value:"Calico CNI plugin",default:!0,children:(0,i.jsx)(n.p,{children:"Calico automatically detects the RKE2 configuration for dual-stack and does not need any extra configuration. When deployed in dual-stack mode, it creates two different ippool resources. Note that when using dual-stack, calico leverages BGP instead of VXLAN encapsulation. Dual-stack and BGP are currently not supported in the windows installations of RKE2."})}),(0,i.jsx)(t,{value:"Flannel CNI plugin",default:!0,children:(0,i.jsx)(n.p,{children:"Flannel automatically detects the RKE2 configuration for dual-stack and does not need any extra configuration."})})]}),"\n",(0,i.jsx)(n.h2,{id:"ipv6-setup",children:"IPv6 setup"}),"\n",(0,i.jsxs)(n.p,{children:["In case of IPv6 only configuration RKE2 needs to use ",(0,i.jsx)(n.code,{children:"localhost"})," to access the liveness URL of the ETCD pod; check that your operating system configures ",(0,i.jsx)(n.code,{children:"/etc/hosts"})," file correctly:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"::1       localhost\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-multus",children:"Using Multus"}),"\n",(0,i.jsx)(n.p,{children:"Starting with RKE2 v1.21 it is possible to deploy the Multus CNI meta-plugin. Note that this is for advanced users."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni",children:"Multus CNI"})," is a CNI plugin that enables attaching multiple network interfaces to pods. Multus does not replace CNI plugins, instead it acts as a CNI plugin multiplexer. Multus is useful in certain use cases, especially when pods are network intensive and require extra network interfaces that support dataplane acceleration techniques such as SR-IOV."]}),"\n",(0,i.jsx)(n.p,{children:"Multus can not be deployed standalone. It always requires at least one conventional CNI plugin that fulfills the Kubernetes cluster network requirements. That CNI plugin becomes the default for Multus, and will be used to provide the primary interface for all pods."}),"\n",(0,i.jsxs)(n.p,{children:["To enable Multus, add multus as the first list entry in the cni config key, followed by the name of the plugin you want to use alongside Multus (or ",(0,i.jsx)(n.code,{children:"none"})," if you will provide your own default plugin). Note that multus must always be in the first position of the list. For example, to use Multus with canal as the default plugin you could specify:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# /etc/rancher/rke2/config.yaml\ncni:\n- multus\n- canal\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This can also be specified with command-line arguments, i.e. ",(0,i.jsx)(n.code,{children:"--cni=multus,canal"})," or ",(0,i.jsx)(n.code,{children:"--cni=multus --cni=canal"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about Multus, refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni/tree/master/docs",children:"multus-cni"})," documentation."]}),"\n",(0,i.jsx)(n.h2,{id:"using-multus-with-cilium",children:"Using Multus with Cilium"}),"\n",(0,i.jsxs)(n.p,{children:["To use Cilium with Multus the ",(0,i.jsx)(n.code,{children:"exclusive"})," config needs to be disabled.\nYou can do this by using the following HelmChartConfig:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# /var/lib/rancher/rke2/server/manifests/rke2-cilium-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-cilium\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    cni:\n      exclusive: false\n"})}),"\n",(0,i.jsx)(n.h2,{id:"using-multus-with-the-containernetworking-plugins",children:"Using Multus with the containernetworking plugins"}),"\n",(0,i.jsxs)(n.p,{children:["Any CNI plugin can be used as secondary CNI plugin for Multus to provide additional network interfaces attached to a pod. However, it is most common to use the CNI plugins maintained by the containernetworking team (bridge, host-device,\nmacvlan, etc) as secondary CNI plugins for Multus. These containernetworking plugins are automatically deployed when installing Multus. For more information about these plugins, refer to the ",(0,i.jsx)(n.a,{href:"https://www.cni.dev/plugins/current",children:"containernetworking plugins"})," documentation."]}),"\n",(0,i.jsxs)(n.p,{children:["To use any of these plugins, a proper NetworkAttachmentDefinition object will need to be created to define the configuration of the secondary network. The definition is then referenced by pod annotations, which Multus will use to provide extra interfaces to that pod. An example using the macvlan cni plugin with Multus is available ",(0,i.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/multus-cni/blob/master/docs/quickstart.md#storing-a-configuration-as-a-custom-resource",children:"in the multus-cni repo"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"multus-ipam-plugin-options",children:"Multus IPAM plugin options"}),"\n",(0,i.jsxs)(s,{groupId:"MultusIPAMplugins",children:[(0,i.jsx)(t,{value:"host-local",default:!0,children:(0,i.jsxs)(n.p,{children:["host-local IPAM plugin allocates ip addresses out of a set of address ranges. It stores the state locally on the host filesystem, therefore ensuring uniqueness of IP addresses on a single host. Therefore, we don't recommend it for multi-node clusters. This IPAM plugin does not require any extra deployment. For more information: ",(0,i.jsx)(n.a,{href:"https://www.cni.dev/plugins/current/ipam/host-local/",children:"https://www.cni.dev/plugins/current/ipam/host-local/"}),"."]})}),(0,i.jsxs)(t,{value:"Multus DHCP daemon",default:!0,children:[(0,i.jsxs)(n.p,{children:["Multus provides an optional daemonset to deploy the DHCP daemon required to run the ",(0,i.jsx)(n.a,{href:"https://www.cni.dev/plugins/current/ipam/dhcp/",children:"DHCP IPAM plugin"}),"."]}),(0,i.jsxs)(n.p,{children:["You can do this by using the following ",(0,i.jsx)(n.a,{href:"/helm#customizing-packaged-components-with-helmchartconfig",children:"HelmChartConfig"}),":"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# /var/lib/rancher/rke2/server/manifests/rke2-multus-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-multus\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    manifests:\n      dhcpDaemonSet: true\n"})}),(0,i.jsx)(n.p,{children:"This will configure the chart for Multus to deploy the DHCP daemonset.\nThis feature is available starting with the 2024-01 releases (v1.29.1+rke2r1, v1.28.6+rke2r1, v1.27.10+rke2r1, v1.26.13+rke2r1)."}),(0,i.jsx)(n.p,{children:"NOTE: You should write this file before starting rke2."})]}),(0,i.jsxs)(t,{value:"Whereabouts",default:!0,children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/whereabouts",children:"Whereabouts"})," is an IP Address Management (IPAM) CNI plugin that assigns IP addresses cluster-wide.\nStarting with RKE2 1.22, RKE2 includes the option to use Whereabouts with Multus to manage the IP addresses of the additional interfaces created through Multus.\nIn order to do this, you need to use ",(0,i.jsx)(n.a,{href:"/helm#customizing-packaged-components-with-helmchartconfig",children:"HelmChartConfig"})," to configure the Multus CNI to use Whereabouts."]}),(0,i.jsx)(n.p,{children:"You can do this by using the following HelmChartConfig:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# /var/lib/rancher/rke2/server/manifests/rke2-multus-config.yaml\n---\napiVersion: helm.cattle.io/v1\nkind: HelmChartConfig\nmetadata:\n  name: rke2-multus\n  namespace: kube-system\nspec:\n  valuesContent: |-\n    rke2-whereabouts:\n      enabled: true\n"})}),(0,i.jsxs)(n.p,{children:["This will configure the chart for Multus to use ",(0,i.jsx)(n.code,{children:"rke2-whereabouts"})," as a dependency."]}),(0,i.jsx)(n.p,{children:"NOTE: You should write this file before starting rke2."})]})]}),"\n",(0,i.jsx)(n.h2,{id:"using-multus-with-sr-iov",children:"Using Multus with SR-IOV"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"SR-IOV experimental support was added in v1.21.2+rke2r1, and is fully supported starting with the April 2023 releases: v1.26.4+rke2r1, v1.25.9+rke2r1, and v1.24.13+rke2r1"})}),"\n",(0,i.jsx)(n.p,{children:"Using the SR-IOV CNI with Multus can help with data-plane acceleration use cases, providing an extra interface in the pod that can achieve very high throughput. SR-IOV will not work in all environments, and there are several requirements\nthat must be fulfilled to consider the node as SR-IOV capable:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Physical NIC must support SR-IOV (e.g. by checking /sys/class/net/$NIC/device/sriov_totalvfs)"}),"\n",(0,i.jsx)(n.li,{children:"The host operating system must activate IOMMU virtualization"}),"\n",(0,i.jsx)(n.li,{children:"The host operating system includes drivers capable of doing sriov (e.g. i40e, vfio-pci, etc)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The SR-IOV CNI plugin cannot be used as the default CNI plugin for Multus; it must be deployed alongside both Multus and a traditional CNI plugin. The SR-IOV CNI helm chart can be found in the ",(0,i.jsx)(n.code,{children:"rancher-charts"})," Helm repo. For more information see ",(0,i.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/helm-charts-in-rancher",children:"Rancher Helm Charts documentation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["After installing the SR-IOV CNI chart, the SR-IOV operator will be deployed. Then, the user must specify what nodes in the cluster are SR-IOV capable by labeling them with ",(0,i.jsx)(n.code,{children:"feature.node.kubernetes.io/network-sriov.capable=true"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl label node $NODE-NAME feature.node.kubernetes.io/network-sriov.capable=true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once labeled, the sriov-network-config Daemonset will deploy a pod to the node to collect information about the network interfaces. That information is available through the ",(0,i.jsx)(n.code,{children:"sriovnetworknodestates"})," Custom Resource Definition. A couple of\nminutes after the deployment, there will be one ",(0,i.jsx)(n.code,{children:"sriovnetworknodestates"})," resource per node, with the name of the node as the resource name."]}),"\n",(0,i.jsxs)(n.p,{children:["NOTE: the SR-IOV CNI chart from ",(0,i.jsx)(n.code,{children:"rancher-charts"})," now includes the ",(0,i.jsx)(n.code,{children:"node-feature-discovery"})," chart as an automatic dependency. This chart deploys a small daemonset that automatically labels each node based on the capabilities detected on that node. This works for both hardware and software features. In particular, ",(0,i.jsx)(n.code,{children:"node-feature-discovery"})," can automatically add the label ",(0,i.jsx)(n.code,{children:"feature.node.kubernetes.io/network-sriov.capable=true"})," when it detects a compatible node.\nFor more information, see the ",(0,i.jsx)(n.a,{href:"https://kubernetes-sigs.github.io/node-feature-discovery/v0.11/get-started/introduction.html",children:"NFD documentation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["However, the latest versions of the sriov-network-operator also include a whitelist of supported hardware so sriov will actually be available only with the NICs on ",(0,i.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/sriov-network-operator/blob/master/doc/supported-hardware.md",children:"that list"}),". If you want to use the SR-IOV CNI with a NIC that is not on the list, you will need to update the ",(0,i.jsx)(n.code,{children:"supported-nic-ids"})," configMap yourself."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about how to use the SR-IOV operator, please refer to ",(0,i.jsx)(n.a,{href:"https://github.com/k8snetworkplumbingwg/sriov-network-operator/blob/master/doc/quickstart.md#configuration",children:"sriov-network-operator"})]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);