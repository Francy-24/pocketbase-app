/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3353942908")

  // update collection data
  unmarshal({
    "createRule": "",
    "listRule": "id != \"\"",
    "viewRule": "id != \"\""
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text724990059",
    "max": 0,
    "min": 0,
    "name": "title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1004170342",
    "max": 0,
    "min": 0,
    "name": "lyrics",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3353942908")

  // update collection data
  unmarshal({
    "createRule": null,
    "listRule": null,
    "viewRule": null
  }, collection)

  // remove field
  collection.fields.removeById("text724990059")

  // remove field
  collection.fields.removeById("text1004170342")

  return app.save(collection)
})
