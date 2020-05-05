---
title: Installing Vagrant boxes from your corporate network
date: 2017-06-06T07:49:25+00:00
categories:
  - Uncategorized
---

I don't know which one have worked, but I'll replace https source with http and also I'll disable ssl verfication.

``` bash
gem sources --list
gem sources --add http://rubygems.org
gem sources --remove https://rubygems.org
gem sources --list

echo ":ssl_verify_mode: 0" >> ~/.gemrc
```

Then simply append your pem certificates to `/opt/vagrant/embedded/cacert.pem` file.

``` bash
cat corporate_cert_1.crt >> /opt/vagrant/embedded/cacert.pem
cat corporate_cert_2.crt >> /opt/vagrant/embedded/cacert.pem
```

**Errors:**

`SSL verification error at depth 1: unable to get local issuer certificate (20)`

`SSL_connect returned=1 errno=0 state=error: certificate verify failed (https://api.rubygems.org/specs.4.8.gz)`

`vagrant SSL_connect returned=1 errno=0 state=error`
