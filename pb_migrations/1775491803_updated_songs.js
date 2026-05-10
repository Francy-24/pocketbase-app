/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1906970480")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file410859157",
    "maxSelect": 99,
    "maxSize": 20971520,
    "mimeTypes": [
      "audio/ape",
      "audio/flac",
      "audio/midi",
      "audio/amr",
      "audio/wav",
      "audio/aiff",
      "audio/basic",
      "audio/x-unknown",
      "audio/mpeg",
      "video/mpeg",
      "video/quicktime",
      "video/mp4",
      "audio/musepack",
      "video/3gpp",
      "video/3gpp2",
      "audio/mp4",
      "video/quicktime",
      "audio/x-m4a",
      "video/x-m4v",
      "video/mj2",
      "video/vnd.dvb.file",
      "video/webm",
      "video/x-msvideo",
      "video/x-flv",
      "video/x-matroska",
      "video/x-ms-asf",
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
}, (app) => {
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
      "audio/x-unknown",
      "audio/mpeg",
      "video/mpeg",
      "video/quicktime",
      "video/mp4",
      "audio/musepack",
      "video/3gpp",
      "video/3gpp2",
      "audio/mp4",
      "video/quicktime",
      "audio/x-m4a",
      "video/x-m4v",
      "video/mj2",
      "video/vnd.dvb.file",
      "video/webm",
      "video/x-msvideo",
      "video/x-flv",
      "video/x-matroska",
      "video/x-ms-asf",
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
