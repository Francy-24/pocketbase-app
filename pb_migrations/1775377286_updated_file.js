/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2878493088")

  // update collection data
  unmarshal({
    "name": "media"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2878493088")

  // update collection data
  unmarshal({
    "name": "file"
  }, collection)

  return app.save(collection)
})
