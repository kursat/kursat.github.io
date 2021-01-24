---
title: How to bulk insert and update in Strapi
date: 2020-12-31T20:24:00+00:00
categories:
  - Strapi
---

While working on strapi, can be a rare case, but you may need to insert multiple records to your database.
Unfortunately there is no method in strapi api to do this. To overcome this problem, what I do is to use 
internal mongodb connection.

My first plan was to create a mongodb connection but strapi already has one. It had to be a knex instance according to 
documentation but since I use mongodb for the backend it's a mongo connection instead and there is no documentation 
for this. If you are using a relational database you will have to use knex methods instead.

https://strapi.io/documentation/developer-docs/latest/concepts/queries.html#custom-queries
http://knexjs.org/#Builder

```js

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      const mongooseInstance = strapi.connections.default;
      
      // ...
    }
  },
};
```

After we acquire connection we can get models from strapi query api:

```js
      const MyCollectionModel = strapi.query('my-collection').model;
```

On mongo connection, under models property, you will find your model with a camel-cased name. You can call mongodb 
functions from this object. 

```js
      const records = data.map(datum => {
        return MyCollectionModel({
          ...datum,
          // Note that enum fields not set to default by model so you have to do it yourself
          status: 'pending'
        });
      });

      const insertedRecords = await mongooseInstance.models.MyCollection.insertMany(records);
```

And if your model has relations you have to update them too. Strapi is keeping ids of both record on each other even 
the relation is one-to-one. If your collection related to user you have to bulk update users too, and here is how:


```js
      let users = await strapi.plugins['users-permissions'].services.user.fetchAll({
              // condition
            });

      const userBulkUpdateOps = users.map(u => {
        return {
          "updateOne": {
            "filter": { "_id": u.id },
            "update": { $set: { "my-collection": (insertedRecords.find(r => r.user == u.id)).id } }
          }
        }
      })

      await mongooseInstance.models.UsersPermissionsUser.bulkWrite(userBulkUpdateOps);
```
