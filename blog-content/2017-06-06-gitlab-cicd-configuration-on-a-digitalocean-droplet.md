---
title: Gitlab CI/CD Configuration on a Digitalocean Droplet
date: 2017-06-06T07:49:25+00:00
categories:
  - Uncategorized
---
## Setup Gitlab Runner

We will need a Docker server which we will run our Gitlab Runner on and a deployment server. Since I have a droplet hosted on digitalocean I&#8217;ll use it as both deployment and Docker servers. You can separate them for better security and manageability. If you will create a new droplet for Docker you can easily create it from One-Click Apps.



Now for others, we will install Docker:

```bash
apt install docker.io

docker info
```

Add Gitlab CI Runner repository and install:

```bash
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-ci-multi-runner/script.deb.sh | bash
apt-get install gitlab-ci-multi-runner

gitlab-runner --version
```

Register runner:

```bash
export CI_SERVER_URL=https://gitlab.com/ci
export RUNNER_NAME=my-runner
export REGISTRATION_TOKEN=my-registration-token # locate at Settings | CI/CD Pipelines at Gitlab project. (https://gitlab.com/you/your-project/settings/ci_cd)
export REGISTER_NON_INTERACTIVE=true
gitlab-runner register

#--- or register interactively which I prefer.
gitlab-runner register

gitlab-runner list
```

You can access your runner configurations from /etc/gitlab-runner/config.toml.

## Configure SSH Keys for Server

Create an SSH key at your deployment server to be accessible from Docker container.

```bash
ssh-keygen -t rsa -C "user@example.com" -b 4096
```

Now, on  CI/CD Pipelines section of your project settings create a variable named PRODUCTION\_PRIVATE\_KEY and set its value to content of ~/.ssh/id\_rsa file on deployment server. You should also add public key to authorized\_keys:

```bash
cat ~/.ssh/id_rsa.pub > ~/.ssh/authorized_keys
```

## Create gitlab-ci.yml

I&#8217;ll just add the file and explain later.

```yaml
stages:
  - deploy

deploy_production:
  stage: deploy
  image: tetraweb/php
  before_script:
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
    - eval $(ssh-agent -s)
    - ssh-add <(echo "$PRODUCTION_PRIVATE_KEY")
    - mkdir -p ~/.ssh
    - echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
    - apt-get install rsync
  script:
    - ssh $PRODUCTION_SERVER_USER@$PRODUCTION_SERVER 'hostname'
  only:
    - master

```
