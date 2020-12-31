---
title: How to increase ssh timeout
date: 2020-12-31T01:47:25+00:00
categories:
  - Linux
---

If you are working on the server and get "Write Failed: broken pipe" error too often you can configure sshd not to close connection while you are connected.

To do this edit file `/etc/ssh/sshd_config`:

```ini
ClientAliveInterval 30
```

and restart the daemon:

```bash
service ssh restart
```
