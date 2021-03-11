---
title: Login Moodle with Keycloak OAuth2
date: 2021-03-11T20:24:00+00:00
categories:
  - Moodle, keycloak
---

To start integration first you need to go to following config page and enable OAuth 2 authentication.

`Home /  Site administration /  Plugins /  Authentication /  Manage authentication`

On keycloak admin create a new client. Client protocol should be openid-connect, access type should be confidential. On credentials tab you will find your clients secret.

Now you need to configure OAuth 2 Service on moodle. Go to following config page and create a new custom service.

`Dashboard /  Site administration /  Server /  OAuth 2 services`

Your configuration should look like this:

```
Name: A Name for your identity provider. This will show on login page.
Client ID: Your keycloak client id
Client secret: Your client secret you can find this on credentials tab on keycloak.
Scopes included in a login request: openid profile email
Scopes included in a login request for offline access: openid profile email
Service base URL: https://{keycloak_host_and_port}/auth
Logo URL: A logo url for your identity provider. This will show on login page.
Show on login page: Checked
```

After that you need to configure OAuth 2 service endpoints.

```
discovery_endpoint              https://{keycloak_host_and_port}/auth/realms/master/.well-known/uma2-configuration
authorization_endpoint 	        https://{keycloak_host_and_port}/auth/realms/master/protocol/openid-connect/auth
token_endpoint 	                https://{keycloak_host_and_port}/auth/realms/master/protocol/openid-connect/token
introspection_endpoint 	        https://{keycloak_host_and_port}/auth/realms/master/protocol/openid-connect/token/introspect
end_session_endpoint 	        https://{keycloak_host_and_port}/auth/realms/master/protocol/openid-connect/logout
registration_endpoint 	        https://{keycloak_host_and_port}/auth/realms/master/clients-registrations/openid-connect
resource_registration_endpoint 	https://{keycloak_host_and_port}/auth/realms/master/authz/protection/resource_set
permission_endpoint             https://{keycloak_host_and_port}/auth/realms/master/authz/protection/permission
policy_endpoint                 https://{keycloak_host_and_port}/auth/realms/master/authz/protection/uma-policy
userinfo_endpoint               https://{keycloak_host_and_port}/auth/realms/master/protocol/openid-connect/userinfo

``` 

Note that userinfo_endpoint not getting discovered so you need to add it yourself.
