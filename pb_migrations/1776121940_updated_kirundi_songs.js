/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2531292958")

  // update collection data
  unmarshal({
    "createRule": "",
    "listRule": "id != \"\"",
    "viewRule": "id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2531292958")

  // update collection data
  unmarshal({
    "createRule": null,
    "listRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
