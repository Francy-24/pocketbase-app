/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2878493088")

  // update collection data
  unmarshal({
    "listRule": "id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2878493088")

  // update collection data
  unmarshal({
    "listRule": null
  }, collection)

  return app.save(collection)
})
