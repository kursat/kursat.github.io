---
title: Doctrine Second Level Cache with Redis on Symfony 3.2
date: 2017-05-10T10:23:38+00:00
categories:
  - Symfony 3
tags:
  - doctrine
  - redis
  - second level cache
  - symfony 3
---
## Install Redis

``` terminal
sudo add-apt-repository ppa:chris-lea/redis-server
sudo apt-get update
sudo apt-get install redis-server
```



After that you can test redis-server with redis-cli.

``` linux
kursat@work-laptop:~$ redis-cli 
127.0.0.1:6379> SET key value
OK
127.0.0.1:6379> SET key2 value2
OK
127.0.0.1:6379> KEYS *
1) "key2"
2) "key"
127.0.0.1:6379> GET key2
"value2"
127.0.0.1:6379> FLUSHALL
OK
127.0.0.1:6379> KEYS *
(empty list or set)
127.0.0.1:6379> 
kursat@work-laptop:~$
```

## Setup Second Level Cache

Install packages.

``` bash
composer require snc/redis-bundle predis/predis
```

Configure snc/redis-bundle to use local redis-server.

app/config/config.yml
``` yaml
snc_redis:
    clients:
        default:
            type: predis
            alias: default
            dsn: redis://localhost:6379
```

Register a service to be used by Doctrine.

app/config/services.yml

``` yaml
services:
   snc_second_level_cache:
        class: '%snc_redis.doctrine_cache_predis.class%'
        arguments:
            - '@snc_redis.default'
```

Finally configure Doctrine to use registered service.

app/config/config.yml
``` yaml
doctrine:
    orm:
        second_level_cache:
            region_cache_driver:
                type: service
                id: snc_second_level_cache
            enabled: true
            regions:
                region_users:
                    lifetime: 86400
                    cache_driver:
                        type: service
                        id: snc_second_level_cache
                region_packages: 
                    lifetime: 86400
                    cache_driver:
                        type: service
                        id: snc_second_level_cache
```

Usage on entity:

``` php
/**
 * Package
 *
 * @ORM\Table(name="package")
 * @ORM\Entity(repositoryClass="Eba\ContentBundle\Repository\PackageRepository")
 * 
 * @ORM\Cache(usage="NONSTRICT_READ_WRITE", region="region_packages")
 * 
 * @Gedmo\TranslationEntity(class="Eba\ContentBundle\Entity\PackageTranslation")
 * @Gedmo\SoftDeleteable(fieldName="deletedAt", timeAware=false)
 */
class Package
{

    use \Gedmo\Timestampable\Traits\TimestampableEntity;
    use \Gedmo\SoftDeleteable\Traits\SoftDeleteableEntity;
    use \Gedmo\Blameable\Traits\BlameableEntity;

    ...
}
```

Usage on repository:

``` php
class PackageRepository extends EntityRepository
{

    public function getAllCachedQuery()
    {
        return $this->createQueryBuilder('package')
                        ->getQuery()
                        ->setCacheable(true)
                        ->setCacheMode(ClassMetadata::CACHE_USAGE_READ_ONLY)
                        ->setCacheRegion('packages_repository_get_all');
    }

}
```
