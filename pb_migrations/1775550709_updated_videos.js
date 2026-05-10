/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_515447164")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file2093472300",
    "maxSelect": 1,
    "maxSize": 6250000,
    "mimeTypes": [
      "video/mp4",
      "video/quicktime",
      "video/mpeg",
      "video/3gpp",
      "video/3gpp2",
      "video/quicktime",
      "video/x-m4v",
      "video/mj2",
      "video/vnd.dvb.file",
      "video/x-msvideo",
      "video/webm",
      "video/x-flv",
      "video/x-matroska",
      "video/x-ms-asf",
      "video/ogg"
    ],
    "name": "video",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_515447164")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file2093472300",
    "maxSelect": 1,
    "maxSize": 50,
    "mimeTypes": [
      "video/mp4",
      "video/quicktime",
      "video/mpeg",
      "video/3gpp",
      "video/3gpp2",
      "video/quicktime",
      "video/x-m4v",
      "video/mj2",
      "video/vnd.dvb.file",
      "video/x-msvideo",
      "video/webm",
      "video/x-flv",
      "video/x-matroska",
      "video/x-ms-asf",
      "video/ogg"
    ],
    "name": "video",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
