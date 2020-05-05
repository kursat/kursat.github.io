---
title: How to set $_SERVER parameters in Apache
date: 2017-02-02T17:58:20+00:00
categories:
  - PHP 7
---
In your virtual host configuration or .htaccess file you can define environment variables with `SetEnv ENV_VAR 'ENV_VAR'`. A sample virtual host file should be like this:



``` apache
<VirtualHost playground.dev:80>

	ServerName playground.dev
	ServerAlias www.playground.dev
	ServerAdmin webmaster@playground.dev
	DocumentRoot /var/www/html/playground/

	ErrorLog ${APACHE_LOG_DIR}/playground.dev-error.log
	CustomLog ${APACHE_LOG_DIR}/playground.dev-access.log combined

	SetEnv ENV_VAR 'ENV_VAR'

</VirtualHost>
```

Beside that, you can set conditional environment variables as you can see below:

``` apache
SetEnvIf Host ^staging\.playground\.dev$ APP_ENV=staging
SetEnvIf Host ^(www\.)?playground\.dev$ APP_ENV=production
```

&nbsp;
