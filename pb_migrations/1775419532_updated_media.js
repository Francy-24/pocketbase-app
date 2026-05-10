/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2878493088")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file2359244304",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [
      "image/x-xpixmap",
      "image/png",
      "image/vnd.mozilla.apng",
      "image/jpeg",
      "image/jpx",
      "image/jp2",
      "image/jxl",
      "image/gif",
      "image/jxs",
      "image/jpm",
      "image/webp"
    ],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2878493088")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "file2359244304",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
