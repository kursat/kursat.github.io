---
title: How to use CER certificates on Ubuntu 16.04 CLI and Vagrant
date: 2017-03-13T13:13:24+00:00
categories:
  - DevEnvironment
  - Ubuntu 16.04
  - Vagrant
tags:
  - CER
  - Composer
  - CRT Certificate
  - Root Certificate
  - Vagrant
---
I have to use a CER certificate at work and since i am a PHP developer, i should use composer, npm, bower, vagrant etc. tools through terminal. So I had to develop a solution for this situation.



## Converting CER to CRT

First step we need to convert our CER certificate to a CRT certificate. You can read more from below link to know more about certificate extensions and try to convert it from command line if you want, i didn&#8217;t.

https://support.ssl.com/Knowledgebase/Article/View/19/0/der-vs-crt-vs-cer-vs-pem-certificates-and-how-to-convert-them

I imported CER file to Fifefox and exported as CRT, simple as that.

## Adding CRT Certificate as Root Certificate

``` console
# Create a folder at /usr/share/ca-certificates
sudo mkdir /usr/share/ca-certificates/extra

# Place converted file to new directory
sudo mv fatihca.crt /usr/share/ca-certificates/extra

# Update certificates
# Say yes and select new certificate 
sudo dpkg-reconfigure ca-certificates
```

## Creating Project and Configuring Vagrant Certificates

On host machine:

``` console
# Create your project or install vagrant to your existing project.
composer create-project --prefer-dist yiisoft/yii2-app-advanced yii-application
cd yii-application/

# This step may not be necessary for your project.
vagrant plugin install vagrant-hostmanager

# Place your github token to /yii2-app-advanced/vagrant/config/vagrant-local.yml
# You'll get errors, don't mind them, we just need the machine.
vagrant up

# Copy certificate to vm through scp (user:pass / vagrant:vagrant)
# Ip can vary with your vagrant configuration.
scp /usr/share/ca-certificates/extra/fatihca.crt vagrant@192.168.83.137:~ 

# Connect to vm 
ssh vagrant@192.168.83.137
```

On VM:

``` console
# Create a folder at /usr/share/ca-certificates
sudo mkdir /usr/share/ca-certificates/extra

# Place converted file to new directory
sudo mv ~/fatihca.crt /usr/share/ca-certificates/extra

# Update certificates
# Say yes and select new certificate 
sudo dpkg-reconfigure ca-certificates

<CTRL^D>
```

On Host again:

``` console
vagrant up --provision
```

Now you can use your same tools (composer, npm, bower etc.) at vagrant VM.

## Instructions for Windows Users:
