---
title: Generate keystore form ssl certificate for keycloak
date: 2020-12-30T01:00:25+00:00
categories:
  - Keycloak
---

When you purchased an SSL certificate you will have a crt and a key file. To use certificate for keycloak you have to convert them to pkcs12 first with a key password.

```bash
openssl pkcs12 -export -in mydomain.com.crt \
        -inkey mydomain.com.key \
        -out mydomain.com.p12 \
        -name mydomain.com \
        -passout pass:mykeypass
```

After that you can use the file to jks keystore. You have to provide a keystore password.

```bash
keytool -importkeystore -srckeystore mydomain.com.p12 \
        -srcstoretype PKCS12 \
        -destkeystore keystore.jks \
        -deststoretype JKS

```

Now update `/opt/keycloak/standalone/configuration/standalone.xml` file like below:

```xml
<security-realm name="ApplicationRealm">
    <server-identities>
        <ssl>
            <keystore path="keystore.jks" relative-to="jboss.server.config.dir" keystore-password="mykeystorepass" alias="mydomain.com" key-password="mykeypass" />
        </ssl>
    </server-identities>
    <!-- ... -->
</security-realm>
```
NOTE TO FUTURE SELF:

You don't use Nginx reverse proxy, you are simply forwarding port 443 to 8443 at `before.rules` of `ufw`.

```
*nat
:PREROUTING ACCEPT [0:0]
-A PREROUTING -p tcp --dport 443 -j REDIRECT --to-port 8443
COMMIT

```
