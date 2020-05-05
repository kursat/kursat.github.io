---
title: Magic methods in PHP
date: 2017-01-13T11:42:59+00:00
categories:
  - Uncategorized
---
When you try to call an undefined method, __call() magic method gets called.



``` php
<php
class Foo
{
	public function __call($name, $arguments)
	{
		echo "Dude... What?";
	}
}
$obj = new Foo;
$obj->s3pnu_pu3s();

```
