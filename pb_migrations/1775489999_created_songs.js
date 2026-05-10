/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.role = \"publiser\"",
    "deleteRule": "@request.auth.role = \"publiser\"",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text724990059",
        "max": 0,
        "min": 0,
        "name": "title",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1004170342",
        "max": 0,
        "min": 0,
        "name": "lyrics",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
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
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_1906970480",
    "indexes": [],
    "listRule": "id != \"\"",
    "name": "songs",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.role = \"publiser\"",
    "viewRule": "id != \"\""
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1906970480");

  return app.delete(collection);
})
