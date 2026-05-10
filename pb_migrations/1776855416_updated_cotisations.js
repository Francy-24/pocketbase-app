/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2241579146")

  // remove field
  collection.fields.removeById("bool3226175999")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3734160847",
    "max": 0,
    "min": 0,
    "name": "annee",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3329918369",
    "max": 0,
    "min": 0,
    "name": "voix",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2241579146")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "bool3226175999",
    "name": "a_paye",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // remove field
  collection.fields.removeById("text3734160847")

  // remove field
  collection.fields.removeById("text3329918369")

  return app.save(collection)
})
