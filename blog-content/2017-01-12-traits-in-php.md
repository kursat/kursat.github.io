---
title: Traits in PHP
date: 2017-01-12T18:05:12+00:00
categories:
  - Zend Study Notes
---

I'll explain. Later.



```php

trait Hello {
    public function sayHello() {
        echo 'Hello ';
    }
}

trait World {
    public function sayWorld() {
        echo 'World!';
    }
}

trait HelloWorld {
    use Hello, World;
}

class MyHelloWorld {
    use HelloWorld;
}

$o = new MyHelloWorld();
$o->sayHello();
$o->sayWorld();

```
