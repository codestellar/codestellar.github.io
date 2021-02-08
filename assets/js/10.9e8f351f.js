(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{366:function(e,a,n){"use strict";n.r(a);var s=n(42),t=Object(s.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"devops"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#devops"}},[e._v("#")]),e._v(" DevOps")]),e._v(" "),n("h2",{attrs:{id:"jenkins-getting-started"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-getting-started"}},[e._v("#")]),e._v(" Jenkins: Getting Started")]),e._v(" "),n("p",[e._v("Recently, I installed Jenkins on my ubuntu server, I read the documentation "),n("a",{attrs:{href:"https://www.jenkins.io/doc/book/installing/docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(" and here are the steps I followed:")]),e._v(" "),n("ul",[n("li",[e._v("Installed Docker")]),e._v(" "),n("li",[e._v("Create a Docker Network")])]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("docker network create jenkins\n")])])]),n("ul",[n("li",[e._v("To confirm that a network has been created, run:")])]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("docker network list\n")])])]),n("ul",[n("li",[e._v("In order to be able to run docker commands inside jenkins nodes, install docker:dind image as follows:")])]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("docker run --name jenkins-docker --rm --detach "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --privileged --network jenkins --network-alias docker "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DOCKER_TLS_CERTDIR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/certs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --volume jenkins-docker-certs:/certs/client "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --volume jenkins-data:/var/jenkins_home "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --publish "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2376")]),e._v(":2376 docker:dind\n")])])]),n("ul",[n("li",[e._v("Customise official Jenkins Docker image, by executing below two steps:\n"),n("ul",[n("li",[e._v("Create a docker file:")])]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("FROM jenkins/jenkins:2.263.3-lts-jdk11\n"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("USER")]),e._v(" root\nRUN "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y apt-transport-https "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    ca-certificates "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" gnupg2 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    software-properties-common\nRUN "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL https://download.docker.com/linux/debian/gpg "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" apt-key "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -\nRUN apt-key fingerprint 0EBFCD88\nRUN add-apt-repository "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"deb [arch=amd64] https://download.docker.com/linux/debian \\\n    '),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("lsb_release -cs"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(' stable"')]),e._v("\nRUN "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y docker-ce-cli\n"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("USER")]),e._v(" jenkins\nRUN jenkins-plugin-cli --plugins blueocean:1.24.4\n")])])]),n("ul",[n("li",[e._v("Build the image:")])]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("docker build -t myjenkins-blueocean:1.1 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])])]),e._v(" "),n("li",[e._v("Run your image as container:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker run \\\n  --name jenkins-blueocean \\\n  --rm \\\n  --detach \\\n  --network jenkins \\\n  --env DOCKER_HOST=tcp://docker:2376 \\\n  --env DOCKER_CERT_PATH=/certs/client \\\n  --env DOCKER_TLS_VERIFY=1 \\\n  --publish 8080:8080 \\\n  --publish 50000:50000 \\\n  --volume jenkins-data:/var/jenkins_home \\\n  --volume jenkins-docker-certs:/certs/client:ro \\\n  myjenkins-blueocean:1.1\n")])])]),n("ul",[n("li",[e._v("Once you have run the container, please note that you have your jenkins files available in a docker volume. So, run the following commands to realize the same:")])]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("docker volume list\n")])])]),n("ul",[n("li",[e._v("Now that you have the container active, run:")])]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("docker "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" -a\n```"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("\n\n- Get the initial password:\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("``"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),e._v("shell\ndocker "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("container_name_or_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /var/jenkins_home/secrets/initialAdminPassword\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v("```\n\n::: Tip to run "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" commands inside your container\ndocker "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("container_name_or_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n:::\n\n\n::: Warning\nSimply removing the container and images does not remove the volume\n:::")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);