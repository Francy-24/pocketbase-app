/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2878493088")

  // update collection data
  unmarshal({
    "createRule": "id != \"\"",
    "deleteRule": "id != \"\"",
    "updateRule": "id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2878493088")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"publisher\"",
    "deleteRule": "@request.auth.role = \"publisher\"",
    "updateRule": "@request.auth.role = \"publisher\""
  }, collection)

  return app.save(collection)
})
