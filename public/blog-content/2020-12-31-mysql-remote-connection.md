---
title: Mysql Remote Connection
date: 2020-12-31T06:58:25+00:00
categories:
  - Linux
---

Don't forget to run `mysql_secure_installation` first!

To enable mysql remote connection you must first change bind-address in `/etc/mysql/mysql.conf.d/mysqld.cnf` file.

```ini
bind-address            = 0.0.0.0
```

Restart the mysql server:

```bash
service mysql restart
```

Login mysql (by auth_socket):

```bash
mysql -u root
```

Create remote root user:

```mysql
CREATE USER root@'%' IDENTIFIED WITH mysql_native_password BY 'Ph6*#D3ouC22';

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
FLUSH PRIVILEGES;
```
_Note that `root@'localhost'` and `root@'%'` are different users._


Restart the mysql server again:

```bash
service mysql restart
```

Don't forget to enable mysql ports:

```bash
ufw allow mysql
```
