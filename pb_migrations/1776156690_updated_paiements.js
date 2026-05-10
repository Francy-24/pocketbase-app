/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2241579146")

  // update collection data
  unmarshal({
    "name": "cotisations"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2241579146")

  // update collection data
  unmarshal({
    "name": "paiements"
  }, collection)

  return app.save(collection)
})
