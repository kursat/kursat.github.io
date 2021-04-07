---
title: Create and Mount swap on Linux
date: 2021-04-08T20:24:00+00:00
categories:
  - Linux, swap
---

Hey, thanks to digitalocean we had to learn creating and mounting swap o linux, because they no longer create 5$ droplets with swap enabled.

Anyways here is what to do:

```bash
# Allocate space for swap file 
sudo fallocate -l 4G /swapfile

# Update file permissions
sudo chmod 600 /swapfile

# Set up swap space
sudo mkswap /swapfile

# And enable
sudo swapon /swapfile

# You can check it by
sudo swapon -s
free -m

```

Now if you want to make it permanent, you have edit `/etc/fstab` and append at the end below lines:

```ini
# sudo nano /etc/fstab

/swapfile   none    swap    sw    0   0
```
