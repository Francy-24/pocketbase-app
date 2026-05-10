/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2531292958")

  // update collection data
  unmarshal({
    "name": "kirundi_songs"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2531292958")

  // update collection data
  unmarshal({
    "name": "lingala_songs"
  }, collection)

  return app.save(collection)
})
