/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1906970480")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file410859157",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [
      "audio/ape",
      "audio/flac",
      "audio/midi",
      "audio/amr",
      "audio/wav",
      "audio/aiff",
      "audio/basic",
      "audio/x-unknown"
    ],
    "name": "audio",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1906970480")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file410859157",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [
      "audio/mpeg",
      "audio/musepack",
      "audio/ape",
      "audio/flac",
      "audio/midi",
      "audio/amr",
      "audio/wav",
      "audio/aiff",
      "audio/basic",
      "audio/mp4",
      "audio/x-m4a",
      "audio/x-unknown",
      "audio/aac"
    ],
    "name": "audio",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
