/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2241579146")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3601894583",
    "max": 0,
    "min": 0,
    "name": "mois",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "bool3226175999",
    "name": "a_paye",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2241579146")

  // remove field
  collection.fields.removeById("text3601894583")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "bool3226175999",
    "name": "paye",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
