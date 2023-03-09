# HIVE API

API_URL = https://synx-hive-api.herokuapp.com

ROOT_DOMAIN = cioty.com

AUTH_TOKEN = ...

Change "synxhive.com" to above URL

## [Create service](https://norniras.github.io/synx-hive-api-docs/#create-service)

We are not gonna use all the features, so below is bare minimum you need to create a service.

```json
{
  "domain":"{{domain}}",
  "rootDomain":"{{rootDomain}}",
  "service":"{{service}}",
  "token":"{{token}}",
  "dataSchema":"{{dataSchema}}",
  "timeout":"{{timeout}}",
}
```

## [Update service](https://norniras.github.io/synx-hive-api-docs/#update-service)

We are not gonna use all the features, so below is bare minimum you need to update service.

```json
{
  "domain":"{{domain}}",
  "rootDomain":"{{rootDomain}}",
  "service":"{{service}}",
  "token":"{{token}}",
  "dataSchema":"{{dataSchema}}",
  "timeout":"{{timeout}}",
}
```

## [Get links](https://norniras.github.io/synx-hive-api-docs/#get-links)

List of links to see where your service is linking to.

## [Update links](https://norniras.github.io/synx-hive-api-docs/#update-links)

**NB! This is very important feature**

## [Add ghost](https://norniras.github.io/synx-hive-api-docs/#add-ghosts)

Ghosts is an instance of service. If you have a service and you know that 10 people will use yours service then you can assign 10 ghosts to that service.

## [Transfer ownership of a ghost](https://norniras.github.io/synx-hive-api-docs/#transfer-ownership-of-a-ghost)

If you have 10 ghosts assign you need somehow to give them away to the users. This endpoint will help you to do so.

## [Get ghost](https://norniras.github.io/synx-hive-api-docs/#get-ghosts)

Here you will get list of all ghosts that you own.

## [Get pending ghosts](https://norniras.github.io/synx-hive-api-docs/#pending-ghosts)

If some service owner gave you a ghost you will see it in this list.

## [Accept ghost](https://norniras.github.io/synx-hive-api-docs/#accept-ghost)

User still need to accept the ghost. After that this ghost will be in you owned ghost list.

## [Add morphed ghost](https://norniras.github.io/synx-hive-api-docs/#add-morphed-ghost)

**NB! This is very important feature**

Linking done on service level but without ghosts there will be no data flow. You need to tell the system that what ghosts should be connected.

Example:

Service level.

We have two service A and B. B linking to A and in this case B service want to receive data from service A.

Ghost level.

Both service A and B have 10 ghosts. Here you will tell the system that ghost with ID=5 from service B want to receive data from ghost ID=1 from service A. You can add multiple ghosts this way.

## [Remove morphed ghost](https://norniras.github.io/synx-hive-api-docs/#remove-morphed-ghost)

**NB! This is very important feature**

This is opposite of the feature above.
