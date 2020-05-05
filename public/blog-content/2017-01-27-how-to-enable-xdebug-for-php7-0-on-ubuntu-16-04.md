---
title: How to enable xdebug for PHP7.0 on Ubuntu 16.04
date: 2017-01-27T19:56:48+00:00
categories:
  - DevEnvironment
  - PHP 7
  - Ubuntu 16.04
tags:
  - PHP7 xdebug
  - Ubuntu 16.04 PHP7 xdebug
  - ubuntu php xdebug
  - Ubuntu16.04 xdebug
---
Follow instructions on: <https://xdebug.org/wizard.php>, till 7. step.

Don't edit `/etc/php/7.0/cli/php.ini` and append `zend_extension = /usr/lib/php/20151012/xdebug.so`



instead:

Create file at location;

``` console
/etc/php/7.0/mods-available/xdebug.ini
```

with content;

``` ini
zend_extension=xdebug.so

xdebug.remote_enable = 1
xdebug.remote_connect_back=1
xdebug.remote_port = 9000
xdebug.scream=1
xdebug.show_local_vars=1
xdebug.idekey=netbeans-xdebug

;To remove limits for xdebug_var_dump()

;xdebug.var_display_max_depth = 5
;xdebug.var_display_max_children = 256
;xdebug.var_display_max_data = 1024 

xdebug.var_display_max_depth = -1 
xdebug.var_display_max_children = -1
xdebug.var_display_max_data = -1
```


Now you can enable/disable xdebug if necessary.

``` console
sudo phpenmod xdebug
```

If you are using composer, you probably going to want to disable xdebug for CLI:

``` console
sudo phpdismod -s cli xdebug
```
