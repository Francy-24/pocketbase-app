/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1906970480")

  // update collection data
  unmarshal({
    "createRule": "id != \"\"",
    "deleteRule": "id != \"\"",
    "updateRule": "id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1906970480")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"publiser\"",
    "deleteRule": "@request.auth.role = \"publiser\"",
    "updateRule": "@request.auth.role = \"publiser\""
  }, collection)

  return app.save(collection)
})
