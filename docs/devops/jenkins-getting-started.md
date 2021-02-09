# Jenkins: Getting Started

::: danger What was the problem?
I wanted to set up my own CI Server as CI servers have minutes limit. Bitbucket has 50 min/month, Azure DevOps has 240 min/month, AWS Pipeline is paid.
:::

::: tip What was the solution?
I chose Jenkins as I can install it on my own server, had some initial problems like setting up the password, re-installations, containerizing. So, I summed it up here.
:::


Recently, I installed Jenkins on my ubuntu server, I read the documentation [here](https://www.jenkins.io/doc/book/installing/docker/) and here are the steps I followed:

- Installed Docker
- Create a Docker Network
````shell
docker network create jenkins
````

- To confirm that a network has been created, run:
````shell
docker network list
````

- In order to be able to run docker commands inside jenkins nodes, install docker:dind image as follows:
````shell
docker run --name jenkins-docker --rm --detach \
  --privileged --network jenkins --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume jenkins-docker-certs:/certs/client \
  --volume jenkins-data:/var/jenkins_home \
  --publish 2376:2376 docker:dind
````

- Customise official Jenkins Docker image, by executing below two steps:
    - Create a docker file:
    ````shell
    FROM jenkins/jenkins:2.263.3-lts-jdk11
    USER root
    RUN apt-get update && apt-get install -y apt-transport-https \
        ca-certificates curl gnupg2 \
        software-properties-common
    RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
    RUN apt-key fingerprint 0EBFCD88
    RUN add-apt-repository \
        "deb [arch=amd64] https://download.docker.com/linux/debian \
        $(lsb_release -cs) stable"
    RUN apt-get update && apt-get install -y docker-ce-cli
    USER jenkins
    RUN jenkins-plugin-cli --plugins blueocean:1.24.4
    ````
    - Build the image:
    ````shell
    docker build -t myjenkins-blueocean:1.1 .
    ````
- Run your image as container:
````shell
docker run \
  --name jenkins-blueocean \
  --rm \
  --detach \
  --network jenkins \
  --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client \
  --env DOCKER_TLS_VERIFY=1 \
  --publish 8080:8080 \
  --publish 50000:50000 \
  --volume jenkins-data:/var/jenkins_home \
  --volume jenkins-docker-certs:/certs/client:ro \
  myjenkins-blueocean:1.1
````
- Once you have run the container, please note that you have your jenkins files available in a docker volume. So, run the following commands to realize the same:
````shell
docker volume list
````
- Now that you have the container active, run:
````shell
docker ps -a
````

- Get the initial password:
````shell
docker exec <container_name_or_id> cat /var/jenkins_home/secrets/initialAdminPassword
````

::: tip To run bash commands inside your container
docker exec -it <container_name_or_id> bash
:::

::: warning
Simply removing the container and images does not remove the volume
:::