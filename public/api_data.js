define({ "api": [
  {
    "type": "get",
    "url": "/acl/access/:category_id",
    "title": "access",
    "name": "Access",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Let you know if you have access to an ACL category.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n   \"code\": 403,\n   \"status\": \"Forbidden\",\n   \"result\": \"You are not allowed to access this category.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "post",
    "url": "/acl",
    "title": "create ACL role",
    "name": "Create",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Create a new ACL role.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>ACL role's name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "post",
    "url": "/acl/association",
    "title": "create association",
    "name": "Create_Association",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Create an association between a user and an ACL role.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>ACL Role ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 201,\n    \"status\": \"Created\",\n    \"result\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "post",
    "url": "/acl/rules/create",
    "title": "create rule",
    "name": "Create_Rule",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Delete <u><b>the old link</b></u> and add the categories forbidden for a role_id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>Role ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "rights",
            "description": "<p>Array of ACL Category ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "acl",
            "description": "<p>Array of access for this role</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"num_total\": 0,\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": [{ list of accesses ... }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "delete",
    "url": "/acl/:id",
    "title": "delete role",
    "name": "Delete",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Clean delete of a role (User and ACL Access relation as well).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "get",
    "url": "/acl/association/:id",
    "title": "get association",
    "name": "Get_Association",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Fetch the association between a user and his ACL role.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": {\n        \"user_id\": \"1\",\n        \"email\": \"sample@acenda.com\",\n        \"role_id\": \"1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "get",
    "url": "/acl/role",
    "title": "get roles",
    "name": "Get_Roles",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Fetch all the roles or one specific if an ID is specified</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": [\n        {\n            \"categories\": {\n                    \"setting\": {\n                    \"access\": \"0,\n                    \"id\": \"1\",\n                    \"date_created\": \"2015-04-22 14:28:38\",\n                    \"date_modified\": \"2015-04-22 14:28:38\"\n                }, ...\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "get",
    "url": "/acl/rules/:role_id",
    "title": "get rules",
    "name": "Get_Rules",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Fetch the ACL categories that are inaccessible.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>of ACL catgeories forbidden.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"num_total\": 3,\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": [\n        {\n            \"id\": \"1\",\n            \"date_created\": \"2015-04-28 14:28:11\",\n            \"date_modified\": \"2015-04-28 14:28:11\",\n            \"category\": \"setting\",\n            \"role_id\": \"1\"\n        },\n        {\n            \"id\": \"2\",\n            \"date_created\": \"2015-04-28 14:28:11\",\n            \"date_modified\": \"2015-04-28 14:28:11\",\n            \"category\": \"content\",\n            \"role_id\": \"1\"\n        },\n        {\n            \"id\": \"3\",\n            \"date_created\": \"2015-04-28 14:28:11\",\n            \"date_modified\": \"2015-04-28 14:28:11\",\n            \"category\": \"merchandise\",\n            \"role_id\": \"1\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "get",
    "url": "/acl/[:id]",
    "title": "get ACL role",
    "name": "Read",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Fetch all the ACL role of a store or just one if the ID is specified.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "acl",
            "description": "<p>Array of record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"categories\": [],\n           \"name\": \"Administrator\",\n           \"id\": \"1\",\n           \"date_created\": \"2015-04-22 14:34:30\",\n           \"date_modified\": \"2015-04-22 14:34:30\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "put",
    "url": "/acl/:id",
    "title": "update ACL role",
    "name": "Update",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Update one or multiple ACL role.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>ACL role's name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "put",
    "url": "/acl/association/:id",
    "title": "update association",
    "name": "Update_Association",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Update an association between a user and an ACL role.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>ACL Role ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"code\": 200,\n    \"status\": \"Ok\",\n    \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "post",
    "url": "/acl/updateuser",
    "title": "set user role",
    "name": "Update_Users",
    "group": "ACL",
    "version": "2.0.1",
    "description": "<p>Update the users for a role.<br /><b>if role_id is equal to -1, the role of the ID will be deleted</b>.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role_id",
            "description": "<p>ACL role's ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>Admin user ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/AclApiController.php",
    "groupTitle": "ACL"
  },
  {
    "type": "post",
    "url": "/acendacontactus",
    "title": "create",
    "name": "Create",
    "group": "AcendaContactUs",
    "version": "2.0.1",
    "description": "<p>Creates a Contact Us message from a user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fname",
            "description": "<p>first name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lname",
            "description": "<p>last name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the contact us message.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>phone number of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>company of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>country of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sales",
            "description": "<p>purchases of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>purchases type of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isread",
            "description": "<p>whether the messafe has been read.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>ID of the contact message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"code\": 201,\n   \"status\": \"OK\",\n   \"result\": \"3\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/godmode/controllers/api/AcendaContactUsApiController.php",
    "groupTitle": "AcendaContactUs"
  },
  {
    "type": "get",
    "url": "/catalog/autocomplete?query=:string",
    "title": "get autocomplete terms",
    "name": "Autocomplete_Read",
    "group": "Catalog",
    "version": "2.0.1",
    "description": "<p>Fetch Autocomplete Term(s).</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Terms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": [\n        \"Term1\",\n        \"Term2\",\n        \"Term3\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CatalogApiController.php",
    "groupTitle": "Catalog"
  },
  {
    "type": "get",
    "url": "/catalog/[:id]",
    "title": "get items",
    "name": "Read",
    "group": "Catalog",
    "version": "2.0.1",
    "description": "<p>Fetch Catalog Item(s).</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Catalog",
            "description": "<p>Item(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": [\n        {\n            \"id\": 12345,\n            \"date_created\": \"2014-05-07 22:18:23\",\n            \"date_modified\": \"2014-05-07 22:18:23\",\n            \"group\": \"collection\",\n            \"status\": \"active\",\n            \"slug\": \"ipod-classic--accessories\",\n            \"name\": \"iPod Classic & Accessories\",\n            \"category_id\": [\"22\"],\n            \"images\": [{\"id\": \"4487\",\"tags\": \"\",\"name\": \"\"}],\n            \"product\": [\n                {\n                    \"id\": 1,\n                    \"group\": \"product\",\n                    \"status\": \"active\",\n                    \"slug\": \"ipod-classic\",\n                    \"name\": \"iPod Classic\",\n                    \"collection_id\": [\"12345\",\"67890\"],\n                    \"category_id\": [\"123\",\"456\",\"789\"],\n                    \"brand\": \"Apple\",\n                    \"type\": \"Media Player\",\n                    \"keywords\": [\"apple\",\"pod\",\"mp3\",\"aac\"],\n                    \"tags\": [\"music\",\"portable\",\"retro\"],\n                    \"page_title\": \"iPod Classic\",\n                    \"title\":\"iPod Classic\",\n                    \"category\": [\"test-products\",\"media-players\",\"retro/players\"],\n                    \"url\": \"/product/4+Moms/infant-tub\",\n                    \"thumbnail\": \"https://cdn.acenda.com/swift/v1/my-store/images/bucket/product/thumbnail/250x250/1/12345.jpg\",\n                    \"meta_description\": \"This is a fancy 128MB MP3 player from the early 2000's.\",\n                    \"description\": \"This is a fancy 128MB MP3 player from the early 2000's.\",\n                    \"cross_sellers\": [\"123\",\"456\",\"789\"],\n                    \"review_score\": \"1.234\",\n                    \"variant_options\": {\"size\":[\"2MB\",\"32MB\",\"64MB\",\"128MB\"]},\n                    \"images\": [{\"id\":\"12345\",\"name\":\"iPod Side\",\"tags\":\"\"}],\n                    \"videos\": [\"http://youtu.be/12345\",\"http://youtu.be/67890\"],\n                    \"date_modified\": \"2015-07-16 10:17:20\",\n                    \"date_created\": \"2015-07-16 10:17:20\",\n                    \"date_publish\": \"2015-07-20 03:15:59\",\n                    \"date_expire\" : \"2015-07-20 03:15:59\"\n                    \"variant\": [\n                        {\n                            \"position\": \"45\",\n                            \"inventory_shipping_estimate\": \"Ships in 2 to 4 weeks\",\n                            \"has_stock\": \"1\",\n                            \"weight\": \"0\",\n                            \"product_id\": \"1\",\n                            \"inventory_policy\": \"continue\",\n                            \"date_created\": \"2014-05-07 22:14:12\",\n                            \"inventory_tracking\": \"0\",\n                            \"require_shipping\": \"1\",\n                            \"save_percent\": \"20\",\n                            \"id\": \"12345\",\n                            \"title\": \"iPod Classic - 32 MB\",\n                            \"name\": \"32 MB\",\n                            \"save_price\": \"14\",\n                            \"popularity\": \"1354065300\",\n                            \"inventory_quantity\": \"0\",\n                            \"inventory_returnable\": \"1\",\n                            \"date_modified\": \"2014-12-19 11:25:04\",\n                            \"status\": \"active\",\n                            \"taxable\": \"1\",\n                            \"barcode\": \"692176705539\",\n                            \"sku\": \"WS1121\",\n                            \"compare_price\": \"69\",\n                            \"cost\": \"34.5\",\n                            \"url\": \"/product/ipod-classic-set\",\n                            \"thumbnail\": \"https://cdn.acenda.com/swift/v1/my-test-store/images/bucket/product/thumbnail/250x250/4/4487.jpg\",\n                            \"price\": \"55\",\n                            \"inventory_minimum_quantity\": \"0\",\n                            \"inventory\": \"-1\",\n                            \"images\": [{\"tags\": \"\", \"id\": \"4521\", \"name\": \"\"}]\n                        }\n                    ]\n                }\n            ],\n            \"url\": \"/product/ipod-classic-set\",\n            \"cross_sellers\": [\"1\",\"2\",\"3\"],\n            \"title\": \"iPod Classic Set\",\n            \"category\": [\"\"],\n            \"thumbnail\": \"https://cdn.acenda.com/swift/v1/my-test-store/images/bucket/product/thumbnail/250x250/4/4487.jpg\",\n            \"description\": \"\",\n            \"layout\": [\n                {\n                    \"items\": [1],\n                    \"name\": \"iPod Classic Accessories\"\n                }\n            ],\n            \"review_score\": \"1\",\n            \"brand\": \"Apple\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CatalogApiController.php",
    "groupTitle": "Catalog"
  },
  {
    "type": "get",
    "url": "/catalog/suggest?query=:string",
    "title": "get suggestive terms",
    "name": "Term_Spelling_Suggest",
    "group": "Catalog",
    "version": "2.0.1",
    "description": "<p>Fetch Suggestive Term(s).</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Terms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": [\"result string\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CatalogApiController.php",
    "groupTitle": "Catalog"
  },
  {
    "type": "get",
    "url": "/category/autocomplete?query=:string",
    "title": "get autocomplete terms",
    "name": "Autocomplete_Read",
    "group": "Category",
    "version": "2.0.1",
    "description": "<p>Fetch Autocomplete Term(s).</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Terms",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": [\n        \"Term1\",\n        \"Term2\",\n        \"Term3\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CategoryApiController.php",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/:id/children",
    "title": "children",
    "name": "Children",
    "group": "Category",
    "version": "2.0.1",
    "description": "<p>get the children of a specified category.</p>",
    "permission": [
      {
        "name": "admin, plugin, customer, guest"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>list of the categories.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n      \"result\": \n          [ { id: \"3\",\n              parent_id: \"11\",\n              status: \"active\",\n              track_status: \"\",\n              selection: \"\",\n              query: \"\",\n              slug: \"categoryname\",\n              name: \"categoryName\",\n              description: \"categoryDescription\",\n              url: \"\",\n              position: \"\",\n              facets: \"\",\n              \"meta_description\": ,\n              keywords: \"keywords\",\n              image_type: \"\",\n              image_id: \"\",\n              image_product_id: \"\",\n              image_query: \"\",\n              image_sort: \"\",\n              images: \"\",\n              date_created: \"2015-06-15 09:52:46\",\n              date_modified: \"2015-06-15 09:52:46\" } \n          ] }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CategoryApiController.php",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/category",
    "title": "create",
    "name": "Create",
    "group": "Category",
    "version": "2.0.1",
    "description": "<p>Create a new Category.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_id",
            "description": "<p>parent id of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "track_status",
            "description": "<p>track status of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "selection",
            "description": "<p>selection of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>query of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>slug of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>url of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>position of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "facets",
            "description": "<p>facets of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "meta_description",
            "description": "<p>meta description of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keywords",
            "description": "<p>keywords of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_type",
            "description": "<p>image type of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_id",
            "description": "<p>image id of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_product_id",
            "description": "<p>image product id of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_query",
            "description": "<p>image query of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_sort",
            "description": "<p>image sort of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "images",
            "description": "<p>images of the Category.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>ID of category created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"7\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CategoryApiController.php",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/category/:id",
    "title": "delete",
    "name": "Delete",
    "group": "Category",
    "version": "2.0.1",
    "description": "<p>delete a specific category</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CategoryApiController.php",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/export",
    "title": "export",
    "name": "Export",
    "group": "Category",
    "version": "2.0.1",
    "description": "<p>Export Categories Table.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "cvs",
            "optional": false,
            "field": "result",
            "description": "<p>List of categories.</p>"
          }
        ]
      }
    },
    "filename": "./app/protected/modules/store/controllers/api/CategoryApiController.php",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/[:id]",
    "title": "get categories",
    "name": "Read",
    "group": "Category",
    "version": "2.0.1",
    "description": "<p>List categories, or fetch a specific one if an id is specified.</p>",
    "permission": [
      {
        "name": "admin, plugin, customer, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,parent_id,status,track_status,selection,query,slug,name,description,url,position,facets,meta_description,keywords,image_type,image_id,image_product_id,image_query,image_sort,images,date_created,date_modified",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of categories or specific category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {   \"num_total\": 1,\n      \"code\": 200,\n      \"status\": \"OK\",\n      \"result\": \n          [ { id: \"3\",\n              parent_id: \"\",\n              status: \"active\",\n              track_status: \"\",\n              selection: \"\",\n              query: \"\",\n              slug: \"categoryname\",\n              name: \"categoryName\",\n              description: \"categoryDescription\",\n              url: \"\",\n              position: \"\",\n              facets: \"\",\n              \"meta_description\": ,\n              keywords: \"keywords\",\n              image_type: \"\",\n              image_id: \"\",\n              image_product_id: \"\",\n              image_query: \"\",\n              image_sort: \"\",\n              images: \"\",\n              date_created: \"2015-06-15 09:52:46\",\n              date_modified: \"2015-06-15 09:52:46\" } \n          ] }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CategoryApiController.php",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/category/tree",
    "title": "tree",
    "name": "Tree",
    "group": "Category",
    "version": "2.0.1",
    "description": "<p>get a tree of the categories.</p>",
    "permission": [
      {
        "name": "admin, plugin, customer, guest"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>tree of the categories.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": { categoryparent: \n                  { categorychild: [] \n                  }\n              }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CategoryApiController.php",
    "groupTitle": "Category"
  },
  {
    "type": "put",
    "url": "/category/:id",
    "title": "update",
    "name": "Update",
    "group": "Category",
    "version": "2.0.1",
    "description": "<p>Update a Category.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "parent_id",
            "description": "<p>parent id of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "track_status",
            "description": "<p>track status of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "selection",
            "description": "<p>selection of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>query of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>slug of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>description of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": "<p>url of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>position of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "facets",
            "description": "<p>facets of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "meta_description",
            "description": "<p>meta description of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keywords",
            "description": "<p>keywords of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_type",
            "description": "<p>image type of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_id",
            "description": "<p>image id of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_product_id",
            "description": "<p>image product id of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_query",
            "description": "<p>image query of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image_sort",
            "description": "<p>image sort of the Category.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "images",
            "description": "<p>images of the Category.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CategoryApiController.php",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/clientaccount/count",
    "title": "count",
    "name": "Count",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Return the number of client accounts for a site. (Scope: settings:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of element found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": {\n       \"count\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "post",
    "url": "/clientaccount/createsite",
    "title": "create site",
    "name": "Create_Site",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Create a site.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>New site's host name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "store_type",
            "description": "<p>New site's type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "site_name",
            "description": "<p>New site's name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": {\n      \"site name\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "post",
    "url": "/clientaccount/accountandsitecreation",
    "title": "signup and create",
    "name": "Create_Site_and_Sign_Up",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Launch the first step of site creation.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>New user's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New user's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sitename",
            "description": "<p>New site's name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"An email has been sent to confirm the creation.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "put",
    "url": "/clientaccount/createsitesignup",
    "title": "create site signup",
    "name": "Create_Site_and_Sign_Up",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Launch the first step of site creation.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>New user's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New user's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 No content\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "get",
    "url": "/api/clientaccount/export",
    "title": "export",
    "name": "Export",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Export in CSV the client account's list returned. (Scope: settings:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "CSV",
            "optional": false,
            "field": "CSV",
            "description": "<p>content of the found elements.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  <CSV CONTENT>",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "post",
    "url": "/clientaccount/forbid",
    "title": "forbid",
    "name": "Forbid",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Delete an oAuth token. [Can do better?] (Scope: settings:write)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>oAuth token to forbid.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 No Content\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "post",
    "url": "/clientaccount/forgotpassword",
    "title": "forgot password",
    "name": "Forgot_Password",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Request for a password changing email.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "get",
    "url": "/clientaccount/me",
    "title": "me",
    "name": "Me",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Request requester's own information</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Account ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Account Firstname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Account Lastname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Account Phone.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Account Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentsite",
            "description": "<p>Site currently connected to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": {\n       \"id\": \"42\",\n       \"firstsite\": \"John\",\n       \"lastname\": \"Doe\",\n       \"phone\": \"XXXXXXXXXX\",\n       \"email\": \"sample@email.com\",\n       \"currentsite\": \"mysite\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "post/file",
    "url": "/clientaccount/profile",
    "title": "upload profile picture",
    "name": "Profile",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Upload a new profile picture.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profile",
            "defaultValue": "FILE",
            "description": "<p>File to upload.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "get",
    "url": "/clientaccount/[:id]",
    "title": "get account",
    "name": "Read",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>List the client account attached to a site. (Scope: settings:read)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Account ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Account Firstname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Account Lastname.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Account Phone.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Account Email.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentsite",
            "description": "<p>Site currently connected to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [{\n       \"id\": \"42\",\n       \"firstsite\": \"John\",\n       \"lastname\": \"Doe\",\n       \"phone\": \"XXXXXXXXXX\",\n       \"email\": \"sample@email.com\",\n       \"currentsite\": \"mysite\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "post",
    "url": "/clientaccount/resetpassword",
    "title": "reset password",
    "name": "Reset_Password",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Validate and save new password after &quot;Forgot Password&quot; action.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's new password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>User's new password confirmation.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token provided by &quot;Forgot Password&quot; action.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "get",
    "url": "/clientaccount/signup",
    "title": "signup",
    "name": "SignUp",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Sign up action for account creation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Future account's email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Future account's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Account ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": {\n       \"id\": \"42\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "get",
    "url": "/clientaccount/tokens",
    "title": "tokens",
    "name": "Tokens",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Request all tokens associated to the logged user. (Scope: settings:read)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>OAuth ID associated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>Client ID associated.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "addr",
            "description": "<p>IP Address tight to a token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sub_addr",
            "description": "<p>Sub-IP address tight to a token if exists.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expires",
            "description": "<p>Expiration date of the token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>Token's scope of use.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [{\n       \"access_token\": \"1f58e0f7e11276bfdbef4dbb618cc58ad1c66257\",\n       \"client_id\": \"demo@acenda.com\",\n       \"user_id\": \"demo@acenda.com\",\n       \"addr\": \"192.168.42.42\",\n       \"sub_addr\": \"\",\n       \"expires\": \"2015-08-22 10:45:33\",\n       \"scope\": \"bones_administration\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "put",
    "url": "/clientaccount/:id",
    "title": "update",
    "name": "Update",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Update a client account.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>User's phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "firstname",
            "description": "<p>User's firstname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lastname",
            "description": "<p>User's lastname.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "old_password",
            "description": "<p>User's current password if password if provided (Mandatory when password is provided).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "retype_password",
            "description": "<p>User's password verification if password if provided (Mandatory when password is provided).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "post",
    "url": "/clientaccount/verify",
    "title": "verify",
    "name": "Verify",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Verify a user by token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>New site's type.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"User verified\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "get",
    "url": "/clientaccount/resendconfirmation",
    "title": "resend confirmation",
    "name": "resendconfirmation",
    "group": "ClientAccount",
    "version": "2.0.1",
    "description": "<p>Re-send a confirmation email</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": {\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/ClientaccountApiController.php",
    "groupTitle": "ClientAccount"
  },
  {
    "type": "post",
    "url": "/api/collection",
    "title": "create",
    "name": "Create",
    "group": "Collection",
    "version": "2.0.1",
    "description": "<p>Create Collection.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "defaultValue": "active",
            "description": "<p>Status (&quot;active&quot;,&quot;offline&quot; or &quot;disabled&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>Slug</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Collection Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brand",
            "description": "<p>Brand Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Collection Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page_title",
            "description": "<p>Optional HTML element</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "meta_description",
            "description": "<p>Optional HTML element</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "category_id",
            "description": "<p>Array of Category IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "keywords",
            "description": "<p>Array of Keywords</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "tags",
            "description": "<p>Array of Collection tags</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "cross_sellers",
            "description": "<p>Array of Collection or Collection IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>Array of image URLs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "videos",
            "description": "<p>Array of video URLs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_publish",
            "description": "<p>Publish date in readable date format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_expire",
            "description": "<p>Expire date in readable date format</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CollectionApiController.php",
    "groupTitle": "Collection"
  },
  {
    "type": "delete",
    "url": "/api/collection/:id",
    "title": "delete",
    "name": "Delete",
    "group": "Collection",
    "version": "2.0.1",
    "description": "<p>Delete Collection by ID</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CollectionApiController.php",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/api/collection/:id/products",
    "title": "get variants",
    "name": "Products",
    "group": "Collection",
    "version": "2.0.1",
    "description": "<p>Fetch Collection Variants.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Variant",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"group\": \"product\",\n           \"status\": \"active\",\n           \"slug\": \"ipod-classic\",\n           \"name\": \"iPod Classic\",\n           \"collection_id\": [\"12345\",\"67890\"],\n           \"category_id\": [\"123\",\"456\",\"789\"],\n           \"brand\": \"Apple\",\n           \"type\": \"Media Player\",\n           \"keywords\": [\"apple\",\"pod\",\"mp3\",\"aac\"],\n           \"tags\": [\"music\",\"portable\",\"retro\"],\n           \"page_title\": \"iPod Classic\",\n           \"title\":\"iPod Classic\",\n           \"category\": [\"test-products\",\"media-players\",\"retro/players\"],\n           \"url\": \"/product/4+Moms/infant-tub\",\n           \"thumbnail\": \"https://cdn.acenda.com/swift/v1/my-store/images/bucket/product/thumbnail/250x250/1/12345.jpg\",\n           \"meta_description\": \"This is a fancy 128MB MP3 player from the early 2000's.\",\n           \"description\": \"This is a fancy 128MB MP3 player from the early 2000's.\",\n           \"cross_sellers\": [\"123\",\"456\",\"789\"],\n           \"review_score\": \"1.234\",\n           \"variant_options\": {\"size\":[\"2MB\",\"32MB\",\"64MB\",\"128MB\"]},\n           \"images\": [{\"id\":\"12345\",\"name\":\"iPod Side\",\"tags\":\"\"}],\n           \"videos\": [\"http://youtu.be/12345\",\"http://youtu.be/67890\"],\n           \"date_modified\": \"2015-07-16 10:17:20\",\n           \"date_created\": \"2015-07-16 10:17:20\",\n           \"date_publish\": \"2015-07-20 03:15:59\",\n           \"date_expire\" : \"2015-07-20 03:15:59\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CollectionApiController.php",
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/api/collection/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Collection",
    "version": "2.0.1",
    "description": "<p>Fetch Collection(s).</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Collection",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n            \"id\": 12345,\n            \"date_created\": \"2014-05-07 22:18:23\",\n            \"date_modified\": \"2014-05-07 22:18:23\",\n            \"group\": \"collection\",\n            \"status\": \"active\",\n            \"slug\": \"ipod-classic-accessories\",\n            \"name\": \"iPod Classic & Accessories\",\n            \"category_id\": [\"22\"],\n            \"images\": [{\"id\": \"4487\",\"tags\": \"\",\"name\": \"\"}],\n            \"url\": \"/product/ipod-classic-set\",\n            \"cross_sellers\": [\"1\",\"2\",\"3\"],\n            \"title\": \"iPod Classic Set\",\n            \"category\": [\"\"],\n            \"thumbnail\": \"https://cdn.acenda.com/swift/v1/my-test-store/images/bucket/product/thumbnail/250x250/4/4487.jpg\",\n            \"description\": \"\",\n            \"layout\": [\n                {\n                    \"items\": [1],\n                    \"name\": \"iPod Classic Accessories\"\n                }\n            ],\n            \"review_score\": \"1\",\n            \"brand\": \"Apple\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CollectionApiController.php",
    "groupTitle": "Collection"
  },
  {
    "type": "put",
    "url": "/api/collection/:id",
    "title": "update",
    "name": "Update",
    "group": "Collection",
    "version": "2.0.1",
    "description": "<p>Update Collection.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "status",
            "defaultValue": "active",
            "description": "<p>Status (&quot;active&quot;,&quot;offline&quot; or &quot;disabled&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>Slug</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Collection Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brand",
            "description": "<p>Brand Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Collection Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Collection Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page_title",
            "description": "<p>Optional HTML element</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "meta_description",
            "description": "<p>Optional HTML element</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "category_id",
            "description": "<p>Array of Category IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "keywords",
            "description": "<p>Array of Keywords</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "tags",
            "description": "<p>Array of Collection tags</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "cross_sellers",
            "description": "<p>Array of Collection or Collection IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>Array of image URLs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "videos",
            "description": "<p>Array of video URLs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_publish",
            "description": "<p>Publish date in readable date format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_expire",
            "description": "<p>Expire date in readable date format</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CollectionApiController.php",
    "groupTitle": "Collection"
  },
  {
    "type": "post",
    "url": "/config",
    "title": "create",
    "name": "Create",
    "group": "Config",
    "version": "2.0.1",
    "description": "<p>Create Config. (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Config",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/ConfigApiController.php",
    "groupTitle": "Config"
  },
  {
    "type": "delete",
    "url": "/config/[:path]",
    "title": "delete",
    "name": "Delete",
    "group": "Config",
    "version": "2.0.1",
    "description": "<p>Delete attribute from config (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>Path within the config</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/ConfigApiController.php",
    "groupTitle": "Config"
  },
  {
    "type": "get",
    "url": "/config",
    "title": "read",
    "name": "Read",
    "group": "Config",
    "version": "2.0.1",
    "description": "<p>Returns Config. (Scope: settings:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Config",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": {\n       \"components\": {\n          ...     \n       },\n       \"params\": {\n          ...\n       }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/ConfigApiController.php",
    "groupTitle": "Config"
  },
  {
    "type": "put",
    "url": "/config/:id",
    "title": "update",
    "name": "Update",
    "group": "Config",
    "version": "2.0.1",
    "description": "<p>Update Config. (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "config",
            "description": "<p>Config</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/ConfigApiController.php",
    "groupTitle": "Config"
  },
  {
    "type": "post",
    "url": "/contact",
    "title": "create",
    "name": "Create",
    "group": "Contact",
    "version": "2.0.1",
    "description": "<p>Creates a Contact Us message from a user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>the contact us message.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>subject of the contact us message.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>ID of the contact message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"code\": 201,\n   \"status\": \"OK\",\n   \"result\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ContactApiController.php",
    "groupTitle": "Contact"
  },
  {
    "type": "post",
    "url": "/content",
    "title": "create",
    "name": "Create",
    "group": "Content",
    "version": "2.0.1",
    "description": "<p>Create Content entry for Site Content.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>Object</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"2\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/DefaultcontentApiController.php",
    "groupTitle": "Content"
  },
  {
    "type": "delete",
    "url": "/content/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "Content",
    "version": "2.0.1",
    "description": "<p>Delete a content using its ID.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/DefaultcontentApiController.php",
    "groupTitle": "Content"
  },
  {
    "type": "get",
    "url": "/content/export",
    "title": "export",
    "name": "Export",
    "group": "Content",
    "version": "2.0.1",
    "description": "<p>Export Content Table.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "cvs",
            "optional": false,
            "field": "result",
            "description": "<p>List of Content.</p>"
          }
        ]
      }
    },
    "filename": "./app/protected/modules/admin/controllers/api/DefaultcontentApiController.php",
    "groupTitle": "Content"
  },
  {
    "type": "get",
    "url": "/content/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Content",
    "version": "2.0.1",
    "description": "<p>Fetch Content Pages or fecth just one if an ID is specified.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "content",
            "description": "<p>Array of record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n      {\"id\":\"1\",\n      \"slug\":\"example-content-title\",\n      \"title\":\"example content title\",\n       \"content\":\"<p>some example content page</p>\",\n      \"type\":\"text\",\n      \"page_title\":\"example content\",\n      \"meta_description\":\"example meta description for SEO\",\n      \"publish\":\"1\",\n      \"publish_date\":\"0000-00-00 00:00:00\",\n      \"publish_date_end\":\"0000-00-00 00:00:00\",\n       \"template\":\"basic\",\n      \"date_created\":\"2015-06-12 16:07:26\",\n      \"date_modified\":\"2015-06-29 15:32:53\"}\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/DefaultcontentApiController.php",
    "groupTitle": "Content"
  },
  {
    "type": "put",
    "url": "/content/[:id]",
    "title": "update",
    "name": "Update",
    "group": "Content",
    "version": "2.0.1",
    "description": "<p>Update Content entry for Site Content.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "content",
            "description": "<p>Object.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/DefaultcontentApiController.php",
    "groupTitle": "Content"
  },
  {
    "type": "get",
    "url": "/coupon/:id/clone",
    "title": "clone",
    "name": "Clone",
    "group": "Coupon",
    "version": "2.0.1",
    "description": "<p>Clones an existing coupon.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "[Array]",
            "optional": false,
            "field": "Coupons",
            "description": "<p>to be evaluated, in an array. Each coupon must be an object array, with at least 'code' as a key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Items",
            "description": "<p>to be evaluated. Must be an object, with product ids as keys and quantities as values.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Id",
            "description": "<p>of the created coupon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n  { \n       code\": 201,\n       status: 'Created',\n       result: '9'\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponApiController.php",
    "groupTitle": "Coupon"
  },
  {
    "type": "post",
    "url": "/coupon",
    "title": "create",
    "name": "Create",
    "group": "Coupon",
    "version": "2.0.1",
    "description": "<p>Create a new Coupon.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Coupon code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_begins",
            "description": "<p>Coupon starting date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the coupons. Can be only be 'active' or 'disabled'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_expires",
            "description": "<p>Coupon expiring date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "global",
            "description": "<p>If the coupon is a global discount. Must equal '0' or '1'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "number_uses",
            "description": "<p>NUmber of time the coupon can be used.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "single",
            "description": "<p>If the coupon cannot be used with other coupon. Must equal '0' or '1'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>ID of coupon created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"7\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponApiController.php",
    "groupTitle": "Coupon"
  },
  {
    "type": "delete",
    "url": "/coupon/:id",
    "title": "delete",
    "name": "Delete",
    "group": "Coupon",
    "version": "2.0.1",
    "description": "<p>delete a specific coupon</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponApiController.php",
    "groupTitle": "Coupon"
  },
  {
    "type": "post",
    "url": "/coupon/evaluate",
    "title": "evaluate",
    "name": "Evaluate",
    "group": "Coupon",
    "version": "2.0.1",
    "description": "<p>Evaluates the discount obtained for the list of given coupons on the list of given items.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "[Array]",
            "optional": false,
            "field": "Coupons",
            "description": "<p>to be evaluated, in an array. Each coupon must be an object array, with at least 'code' as a key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "Items",
            "description": "<p>to be evaluated. Must be an object, with product ids as keys and quantities as values.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>of coupons. Each coupon is an object containing its code and its evaluated discount</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: [\n          {\n              \"code\":\"abcde\",\n              \"discount\":\"10.00\"\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponApiController.php",
    "groupTitle": "Coupon"
  },
  {
    "type": "get",
    "url": "/coupon/export",
    "title": "export",
    "name": "Export",
    "group": "Coupon",
    "version": "2.0.1",
    "description": "<p>Export Coupons Table.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "cvs",
            "optional": false,
            "field": "result",
            "description": "<p>List of coupons.</p>"
          }
        ]
      }
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponApiController.php",
    "groupTitle": "Coupon"
  },
  {
    "type": "get",
    "url": "/coupon/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Coupon",
    "version": "2.0.1",
    "description": "<p>List coupons, or fetch a specific one if an id is specified.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,code,date_created,date_modified,number_uses,date_begins,date_expires,status,single,global",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of coupons or specific customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       num_total: 1,\n       code\": 200,\n       status: \"OK\",\n       result: [\n          { \"id\": \"3\",\n            \"code\": [\"abcde\"],                        \n            \"date_begins\": \"2015-07-08T07:00:00.000Z\",\n            \"date_created\": \"2015-07-09 09:37:10\",\n            \"date_expires\": \"2015-08-08T07:00:00.000Z\",\n            \"date_modified\": \"2015-07-09 11:57:06\",\n            \"global\": \"1\",\n            \"number_uses\": \"100\",\n            \"single\": \"1\",\n            \"status\": \"active\",\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponApiController.php",
    "groupTitle": "Coupon"
  },
  {
    "type": "post",
    "url": "/couponrule",
    "title": "create",
    "name": "Create",
    "group": "CouponRule",
    "version": "2.0.1",
    "description": "<p>Create a new Coupon rule.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "values",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coupon_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logic",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rule_type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>ID of coupon rule created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"7\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponruleApiController.php",
    "groupTitle": "CouponRule"
  },
  {
    "type": "delete",
    "url": "/couponrule/:id",
    "title": "delete",
    "name": "Delete",
    "group": "CouponRule",
    "version": "2.0.1",
    "description": "<p>delete a specific coupon rule</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponruleApiController.php",
    "groupTitle": "CouponRule"
  },
  {
    "type": "get",
    "url": "/couponrule/export",
    "title": "export",
    "name": "Export",
    "group": "CouponRule",
    "version": "2.0.1",
    "description": "<p>Export Coupon rules Table.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "cvs",
            "optional": false,
            "field": "result",
            "description": "<p>List of coupon rules.</p>"
          }
        ]
      }
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponruleApiController.php",
    "groupTitle": "CouponRule"
  },
  {
    "type": "get",
    "url": "/couponrule/name",
    "title": "name",
    "name": "Name",
    "group": "CouponRule",
    "version": "2.0.1",
    "description": "<p>List all existing rules, with labels and names.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: [\n          {\"label\":\"Discount is a dollar amount\",\"value\":\"discount.dollar\"},\n          {\"label\":\"Discount is a percentage\",\"value\":\"discount.percentage\"},\n          {\"label\":\"Discount is applied to whole cart\",\"value\":\"discount.cart\"}, \n          ...\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponruleApiController.php",
    "groupTitle": "CouponRule"
  },
  {
    "type": "get",
    "url": "/couponrule/[:id]",
    "title": "read",
    "name": "Read",
    "group": "CouponRule",
    "version": "2.0.1",
    "description": "<p>List coupon rules, or fetch a specific one if an id is specified.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,type,values,coupon_id,logic,name,rule_type,value,date_created,date_modified,",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of coupons or specific customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       num_total: 1,\n       code\": 200,\n       status: \"OK\",\n       result: [\n          {   \"type\":\"money\",\n              \"values\":   {   \"money\":\"10\",\n                              \"percent\":\"\",\n                              \"query\":\"\",\n                              \"number-times\":\"\",\n                              \"number\":\"\",\n                              \"category\":\"\"\n                          },\n              \"id\":\"1\",\n              \"date_created\":\"2015-07-09 09:37:40\",\n              \"date_modified\":\"2015-07-09 11:57:07\",\n              \"coupon_id\":\"1\",\n              \"logic\":\"\",\n              \"name\":\"discount.dollar\",\n              \"rule_type\":\"action\",\n              \"value\":\"10\"}\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponruleApiController.php",
    "groupTitle": "CouponRule"
  },
  {
    "type": "get",
    "url": "/couponrule/rule",
    "title": "rule",
    "name": "Rule",
    "group": "CouponRule",
    "version": "2.0.1",
    "description": "<p>get coupon rule information.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "couponrule[name]",
            "description": "<p>name of the coupon rule (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: {\n              \"label\":\"is a dollar amount\",\n              \"operations\":false,\n              \"type\":\"money\",\n              \"rule_type\":\"action\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponruleApiController.php",
    "groupTitle": "CouponRule"
  },
  {
    "type": "put",
    "url": "/couponrule/:id",
    "title": "update",
    "name": "Update",
    "group": "CouponRule",
    "version": "2.0.1",
    "description": "<p>Update a Coupon rule.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "values",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coupon_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logic",
            "description": "<p>//TODO</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rule_type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponruleApiController.php",
    "groupTitle": "CouponRule"
  },
  {
    "type": "put",
    "url": "/coupon/:id",
    "title": "update",
    "name": "Update",
    "group": "Coupon",
    "version": "2.0.1",
    "description": "<p>Update a Coupon.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Coupon code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_begins",
            "description": "<p>Coupon starting date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the coupons. Can be only be 'active' or 'disabled'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_expires",
            "description": "<p>Coupon expiring date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "global",
            "description": "<p>If the coupon is a global discount. Must equal '0' or '1'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number_uses",
            "description": "<p>NUmber of time the coupon can be used.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "single",
            "description": "<p>If the coupon cannot be used with other coupon. Must equal '0' or '1'.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CouponApiController.php",
    "groupTitle": "Coupon"
  },
  {
    "type": "post",
    "url": "/customeraddress",
    "title": "create",
    "name": "Create",
    "group": "CustomerAddress",
    "version": "2.0.1",
    "description": "<p>Create a new Customer Address.</p>",
    "permission": [
      {
        "name": "admin, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer_id",
            "description": "<p>id of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street_line1",
            "description": "<p>Address street and number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street_line2",
            "description": "<p>Address Complement.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Address city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Address zip.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Address state.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Address country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verified",
            "description": "<p>If the address is verified. Must be equal to '0' or '1'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>ID of address created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"7\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomeraddressApiController.php",
    "groupTitle": "CustomerAddress"
  },
  {
    "type": "delete",
    "url": "/customeraddress/:id",
    "title": "delete",
    "name": "Delete",
    "group": "CustomerAddress",
    "version": "2.0.1",
    "description": "<p>delete a specific customer address</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomeraddressApiController.php",
    "groupTitle": "CustomerAddress"
  },
  {
    "type": "get",
    "url": "/customeraddress/:id/makedefault",
    "title": "make default",
    "name": "MakeDefault",
    "group": "CustomerAddress",
    "version": "2.0.1",
    "description": "<p>Set the customer address whose id is specified to default. Unset the previous default address if it exists.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomeraddressApiController.php",
    "groupTitle": "CustomerAddress"
  },
  {
    "type": "get",
    "url": "/customeraddress/[:id]",
    "title": "read",
    "name": "Read",
    "group": "CustomerAddress",
    "version": "2.0.1",
    "description": "<p>List of customer addresses, or fetch a specific one if an id is specified.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,date_created,date_modified,customer_id,first_name,last_name,street_line1,street_line2,city,zip,state,phone_number,country,company,default,verified",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of customers or specific customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       num_total: 1,\n       code\": 200,\n       status: \"OK\",\n       result: [\n          { \"id\":\"1\",\n            \"date_created\":\"2015-07-09 13:33:37\",\n            \"date_modified\":\"2015-07-09 13:33:51\",\n            \"customer_id\":\"1\",\n            \"first_name\":\"John\",\n            \"last_name\":\"Doe\",\n            \"street_line1\":\"5 FIRST AVE\",\n            \"city\":\"San Diego\",\n            \"zip\":\"92101\",\n            \"state\":\"CA\",\n            \"phone_number\":\"6192223333\",\n            \"country\":\"US\",\n            \"company\":\"\",\n            \"street_line2\":\"\",\n            \"default\":1,\n            \"verified\":1\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomeraddressApiController.php",
    "groupTitle": "CustomerAddress"
  },
  {
    "type": "put",
    "url": "/customeraddress/:id",
    "title": "update",
    "name": "Update",
    "group": "CustomerAddress",
    "version": "2.0.1",
    "description": "<p>Update a Customer address.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer_id",
            "description": "<p>id of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street_line1",
            "description": "<p>Address street and number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street_line2",
            "description": "<p>Address Complement.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>Address city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Address zip.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>Address state.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Address country.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verified",
            "description": "<p>If the address is verified. Must be equal to '0' or '1'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomeraddressApiController.php",
    "groupTitle": "CustomerAddress"
  },
  {
    "type": "post",
    "url": "/customer/changepassword",
    "title": "change password",
    "name": "Change_Password",
    "group": "Customer",
    "version": "2.0.1",
    "description": "<p>Change Password of a Customer.</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>change password token mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirm_email",
            "description": "<p>email of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>password of the customer.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomerApiController.php",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/checktoken",
    "title": "check token",
    "name": "Check_Token",
    "group": "Customer",
    "version": "2.0.1",
    "description": "<p>Check the token validity of a Customer.</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>email of the customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"johndoe@acenda.com\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomerApiController.php",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer",
    "title": "create",
    "name": "Create",
    "group": "Customer",
    "version": "2.0.1",
    "description": "<p>Create a new Customer.</p>",
    "permission": [
      {
        "name": "admin, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>first name of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>last name of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>phone number of the customer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>ID of customer created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"7\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomerApiController.php",
    "groupTitle": "Customer"
  },
  {
    "type": "delete",
    "url": "/customer/:id",
    "title": "delete",
    "name": "Delete",
    "group": "Customer",
    "version": "2.0.1",
    "description": "<p>delete a specific customer</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomerApiController.php",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customer/export",
    "title": "export",
    "name": "Export",
    "group": "Customer",
    "version": "2.0.1",
    "description": "<p>Export Customers Table.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "cvs",
            "optional": false,
            "field": "result",
            "description": "<p>List of customers.</p>"
          }
        ]
      }
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomerApiController.php",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/customernotification/:id/check",
    "title": "check",
    "name": "Check",
    "group": "CustomerNotification",
    "version": "2.0.1",
    "description": "<p>Update the viewed date of the notification to the current date and set 'underead' as false.</p>",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomernotificationApiController.php",
    "groupTitle": "CustomerNotification"
  },
  {
    "type": "post",
    "url": "/customernotification",
    "title": "create",
    "name": "Create",
    "group": "CustomerNotification",
    "version": "2.0.1",
    "description": "<p>Create a new customer notification.</p>",
    "permission": [
      {
        "name": "admin, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Id of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Subject of the notification.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_to",
            "description": "<p>Email the notification was sent to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of the notification.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>ID of the notification created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"7\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomernotificationApiController.php",
    "groupTitle": "CustomerNotification"
  },
  {
    "type": "delete",
    "url": "/customernotification/:id",
    "title": "delete",
    "name": "Delete",
    "group": "CustomerNotification",
    "version": "2.0.1",
    "description": "<p>delete a specific customer notification.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomernotificationApiController.php",
    "groupTitle": "CustomerNotification"
  },
  {
    "type": "get",
    "url": "/customernotification/[:id]",
    "title": "read",
    "name": "Read",
    "group": "CustomerNotification",
    "version": "2.0.1",
    "description": "<p>List of customer notification, or fetch a specific one if an id is specified.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,date_created,date_modified,customer_id,first_name,last_name,street_line1,street_line2,city,zip,state,phone_number,country,company,default,verified",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of customers or specific customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       num_total: 1,\n       code\": 200,\n       status: \"OK\",\n       result: [\n          {   \"id\":\"1\",\n              \"date_created\": \"2015-07-09 13:33:37\",\n              \"date_modified\": \"2015-07-09 13:33:51\",\n              \"customer_id\": \"3\",\n              \"subject\": \"notification subject\",\n              \"email_to\": \"customer@acenda.com\",\n              \"message\": \"notification_message\"\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomernotificationApiController.php",
    "groupTitle": "CustomerNotification"
  },
  {
    "type": "get",
    "url": "/customernotification/:id/uncheck",
    "title": "uncheck",
    "name": "Uncheck",
    "group": "CustomerNotification",
    "version": "2.0.1",
    "description": "<p>Update the viewed date of the notification to &quot;&quot; and set 'unread' as false.</p>",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomernotificationApiController.php",
    "groupTitle": "CustomerNotification"
  },
  {
    "type": "put",
    "url": "/customernotification/:id",
    "title": "update",
    "name": "Update",
    "group": "CustomerNotification",
    "version": "2.0.1",
    "description": "<p>Update a customer notification.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Id of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Subject of the notification.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_to",
            "description": "<p>Email the notification was sent to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of the notification.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomernotificationApiController.php",
    "groupTitle": "CustomerNotification"
  },
  {
    "type": "get",
    "url": "/customer/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Customer",
    "version": "2.0.1",
    "description": "<p>List customers, or fetch a specific one if an id is specified.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,first_name,last_name,full_name,email,phone_number,state,imported,loginAttempts,password,date_created,date_modified",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of customers or specific customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       num_total: 1,\n       code\": 200,\n       status: \"OK\",\n       result: [\n          { \"full_name\": \"John Doe\",\n            \"state\": [],\n            \"imported\": \"\",\n            \"loginAttempts\": \"0\",\n            \"id\": \"6\",\n            \"date_created\": \"2015-06-11 14:22:55\",\n            \"date_modified\": \"2015-06-11 14:22:55\",\n            \"first_name\": \"John\",\n            \"last_name\": \"Doe\",\n            \"email\": \"johndoe@acenda.com\",\n            \"phone_number\": \"1234567890\",\n            \"password\": \"\" \n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomerApiController.php",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/customer/resetpassword",
    "title": "reset password",
    "name": "Reset_Password",
    "group": "Customer",
    "version": "2.0.1",
    "description": "<p>Reset Password of a Customer.</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the customer.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>email of the customer.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"johndoe@acenda.com\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomerApiController.php",
    "groupTitle": "Customer"
  },
  {
    "type": "put",
    "url": "/customer/:id",
    "title": "update",
    "name": "Update",
    "group": "Customer",
    "version": "2.0.1",
    "description": "<p>Update a Customer.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>new first name of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>new last name of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>new email of the customer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>new phone number of the customer.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/CustomerApiController.php",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/email",
    "title": "create",
    "name": "Create",
    "group": "Email",
    "version": "2.0.1",
    "description": "<p>Create Email entry for newsletter.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/EmailApiController.php",
    "groupTitle": "Email"
  },
  {
    "type": "delete",
    "url": "/email/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "Email",
    "version": "2.0.1",
    "description": "<p>Delete one or multiple emails.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content\n{\n   \"code\": 204,\n   \"status\": \"No content\",\n   \"result\": \"No content\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/EmailApiController.php",
    "groupTitle": "Email"
  },
  {
    "type": "get",
    "url": "/email/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Email",
    "version": "2.0.1",
    "description": "<p>Fetch Emails for news letter or fecth just one if an ID is specified.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "emails",
            "description": "<p>Array of record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2015-04-28 13:42:35\",\n           \"date_modified\": \"2015-04-28 13:42:35\",\n           \"email\": \"sample@acenda.com\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/EmailApiController.php",
    "groupTitle": "Email"
  },
  {
    "type": "put",
    "url": "/email/[:id]",
    "title": "update",
    "name": "Update",
    "group": "Email",
    "version": "2.0.1",
    "description": "<p>Update one or multiple emails.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No content\n{\n   \"code\": 204,\n   \"status\": \"No content\",\n   \"result\": \"No content\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/acenda/controllers/api/EmailApiController.php",
    "groupTitle": "Email"
  },
  {
    "type": "get",
    "url": "/feed/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Feed",
    "version": "2.0.1",
    "description": "<p>List feeds, or fetch a specific one.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Return",
            "description": "<p>the list of feeds.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [{\n       \"id\": \"123\",\n       \"date_created\": \"2015-05-01 13:24:05\",\n       \"date_modified\": \"2015-05-01 13:24:05\",\n       \"name\": \"Test\",\n       \"short_description\": \"Short description\",\n       \"html_description\": \"<h1>HTML Description</h1>\",\n       \"json_credentials_description\": \"{\\\"test\\\": \\\"My Label for test\\\", \\\"test2\\\": \\\"My Label for test2\\\"}\",\n       \"status\": \"validated\",\n       \"client_id\": \"sample@aceda.com\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/FeedApiController.php",
    "groupTitle": "Feed"
  },
  {
    "type": "post",
    "url": "/feedsubscribers",
    "title": "create",
    "name": "Create",
    "group": "FeedSubscribers",
    "version": "2.0.1",
    "description": "<p>Create a new feed subscription for the current store.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feed_id",
            "description": "<p>Id of the feed subscribed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "credentials",
            "description": "<p>Feed credentials.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>of the feed subscription created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/FeedsubscribersApiController.php",
    "groupTitle": "FeedSubscribers"
  },
  {
    "type": "delete",
    "url": "/feedsubscribers/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "FeedSubscribers",
    "version": "2.0.1",
    "description": "<p>Delete a feed subscription.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 No content\n{\n   \"code\": 200,\n   \"status\": \"No content\",\n   \"result\": \"No content\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/FeedsubscribersApiController.php",
    "groupTitle": "FeedSubscribers"
  },
  {
    "type": "get",
    "url": "/feedsubscribers/export",
    "title": "export",
    "name": "Export",
    "group": "FeedSubscribers",
    "version": "2.0.1",
    "description": "<p>Export FeedSubscribers Table of the current store.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "cvs",
            "optional": false,
            "field": "result",
            "description": "<p>List of Feed Subscription.</p>"
          }
        ]
      }
    },
    "filename": "./app/protected/modules/admin/controllers/api/FeedsubscribersApiController.php",
    "groupTitle": "FeedSubscribers"
  },
  {
    "type": "get",
    "url": "/feedsubscribers/[:id]",
    "title": "read",
    "name": "Read",
    "group": "FeedSubscribers",
    "version": "2.0.1",
    "description": "<p>List feed subscriptions, or fetch a specific one.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,feed_id,store_name,credentials",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "feed",
            "description": "<p>subscriptions List of current store.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [{\n       \"id\": \"123\",\n       \"feed_id\": \"5\",\n       \"store_name\": \"mystore\",\n       \"credentials\": \"{\\\"test\\\": \\\"My Label for test\\\", \\\"test2\\\": \\\"My Label for test2\\\"}\",\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/FeedsubscribersApiController.php",
    "groupTitle": "FeedSubscribers"
  },
  {
    "type": "put",
    "url": "/feedsubscribers/:id",
    "title": "update",
    "name": "Update",
    "group": "FeedSubscribers",
    "version": "2.0.1",
    "description": "<p>Update a feed subscription.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "feed_id",
            "description": "<p>Id of the feed subscribed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "store_name",
            "description": "<p>Store that subscribed to the feed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "credentials",
            "description": "<p>Feed credentials.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 No content\n{\n   \"code\": 200,\n   \"status\": \"No content\",\n   \"result\": \"No content\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/FeedsubscribersApiController.php",
    "groupTitle": "FeedSubscribers"
  },
  {
    "type": "get",
    "url": "/feed/subscription",
    "title": "subscription",
    "name": "Subscription",
    "group": "Feed",
    "version": "2.0.1",
    "description": "<p>Get the feeds' subscriptions of the current store.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [{\n       \"id\": \"\",\n       \"date_created\": \"2015-05-01 13:24:05\",\n       \"date_modified\": \"2015-05-01 13:24:05\",\n       \"store_name\": \"sample\",\n       \"feed_id\": \"42\",\n       \"credentials\": \"{\\\"test\\\":\\\"84\\\",\\\"test2\\\":\\\"42\\\"}\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/FeedApiController.php",
    "groupTitle": "Feed"
  },
  {
    "type": "post",
    "url": "/feedback",
    "title": "create",
    "name": "Create",
    "group": "Feedback",
    "version": "2.0.1",
    "description": "<p>Creates a feedback from a user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "from",
            "description": "<p>email of the sender.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>feedback message.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"sent\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/FeedbackApiController.php",
    "groupTitle": "Feedback"
  },
  {
    "type": "get",
    "url": "/ipblacklist/count",
    "title": "count",
    "name": "Count",
    "group": "IPBlacklist",
    "version": "2.0.1",
    "description": "<p>Returns the count (total items in database) for a given read query.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query which result will be counted.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cache",
            "description": "<p>Cache the result of the request. Equals 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "elastic",
            "description": "<p>Use elastic for the request. Equals 1 or 0.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Count of black listed IP.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       num_total: 1,\n       code\": 200,\n       status: \"OK\",\n       result: { count: 2 }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/IpblacklistApiController.php",
    "groupTitle": "IPBlacklist"
  },
  {
    "type": "post",
    "url": "/ipblacklist",
    "title": "create",
    "name": "Create",
    "group": "IPBlacklist",
    "version": "2.0.1",
    "description": "<p>Create a new black listed IP.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP to black list.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>ID of IP created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"7\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/IpblacklistApiController.php",
    "groupTitle": "IPBlacklist"
  },
  {
    "type": "delete",
    "url": "/ipblacklist/:id",
    "title": "delete",
    "name": "Delete",
    "group": "IPBlacklist",
    "version": "2.0.1",
    "description": "<p>delete a specific black listed IP</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/IpblacklistApiController.php",
    "groupTitle": "IPBlacklist"
  },
  {
    "type": "get",
    "url": "/ipblacklist/export",
    "title": "export",
    "name": "Export",
    "group": "IPBlacklist",
    "version": "2.0.1",
    "description": "<p>Export IP black list Table.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "cvs",
            "optional": false,
            "field": "result",
            "description": "<p>List of balck listed IP.</p>"
          }
        ]
      }
    },
    "filename": "./app/protected/modules/store/controllers/api/IpblacklistApiController.php",
    "groupTitle": "IPBlacklist"
  },
  {
    "type": "get",
    "url": "/ipblacklist/[:id]",
    "title": "read",
    "name": "Read",
    "group": "IPBlacklist",
    "version": "2.0.1",
    "description": "<p>List black listed IP, or fetch a specific one if an id is specified.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,ip,date_created,date_modified",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of black listed IP or specific one.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       num_total: 1,\n       code\": 200,\n       status: \"OK\",\n       result: [\n          { \"ip\": \"10.10.10.10\",\n            \"id\": \"6\",\n            \"date_created\": \"2015-06-11 14:22:55\",\n            \"date_modified\": \"2015-06-11 14:22:55\",\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/IpblacklistApiController.php",
    "groupTitle": "IPBlacklist"
  },
  {
    "type": "put",
    "url": "/ipblacklist/:id",
    "title": "update",
    "name": "Update",
    "group": "IPBlacklist",
    "version": "2.0.1",
    "description": "<p>Update a black listed IP.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP to black list.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/IpblacklistApiController.php",
    "groupTitle": "IPBlacklist"
  },
  {
    "type": "get",
    "url": "/ipwhitelist/count",
    "title": "count",
    "name": "Count",
    "group": "IPWhitelist",
    "version": "2.0.1",
    "description": "<p>Returns the count (total items in database) for a given read query.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>Query which result will be counted.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cache",
            "description": "<p>Cache the result of the request. Equals 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "elastic",
            "description": "<p>Use elastic for the request. Equals 1 or 0.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Count of white listed IP.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       num_total: 1,\n       code\": 200,\n       status: \"OK\",\n       result: { count: 2 }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/IpwhitelistApiController.php",
    "groupTitle": "IPWhitelist"
  },
  {
    "type": "post",
    "url": "/ipwhitelist",
    "title": "create",
    "name": "Create",
    "group": "IPWhitelist",
    "version": "2.0.1",
    "description": "<p>Create a new white listed IP.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP to white list.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>ID of IP created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"7\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/IpwhitelistApiController.php",
    "groupTitle": "IPWhitelist"
  },
  {
    "type": "delete",
    "url": "/ipwhitelist/:id",
    "title": "delete",
    "name": "Delete",
    "group": "IPWhitelist",
    "version": "2.0.1",
    "description": "<p>delete a specific white listed IP</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/IpwhitelistApiController.php",
    "groupTitle": "IPWhitelist"
  },
  {
    "type": "get",
    "url": "/ipwhitelist/export",
    "title": "export",
    "name": "Export",
    "group": "IPWhitelist",
    "version": "2.0.1",
    "description": "<p>Export IP white list Table.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "cvs",
            "optional": false,
            "field": "result",
            "description": "<p>List of white listed IP.</p>"
          }
        ]
      }
    },
    "filename": "./app/protected/modules/store/controllers/api/IpwhitelistApiController.php",
    "groupTitle": "IPWhitelist"
  },
  {
    "type": "get",
    "url": "/ipwhitelist/[:id]",
    "title": "read",
    "name": "Read",
    "group": "IPWhitelist",
    "version": "2.0.1",
    "description": "<p>List white listed IP, or fetch a specific one if an id is specified.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,ip,date_created,date_modified",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of white listed IP or specific one.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       num_total: 1,\n       code\": 200,\n       status: \"OK\",\n       result: [\n          { \"ip\": \"10.10.10.10\",\n            \"id\": \"6\",\n            \"date_created\": \"2015-06-11 14:22:55\",\n            \"date_modified\": \"2015-06-11 14:22:55\",\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/IpwhitelistApiController.php",
    "groupTitle": "IPWhitelist"
  },
  {
    "type": "put",
    "url": "/ipwhitelist/:id",
    "title": "update",
    "name": "Update",
    "group": "IPWhitelist",
    "version": "2.0.1",
    "description": "<p>Update a white listed IP.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP to white list.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/IpwhitelistApiController.php",
    "groupTitle": "IPWhitelist"
  },
  {
    "type": "post",
    "url": "/imagebucket",
    "title": "upload image",
    "name": "Create_ImageBucket_entry",
    "group": "ImageBucket",
    "version": "2.0.1",
    "description": "<p>Upload an image to the specified ImageBucket</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "policy",
            "description": "<p>Policy key previously generated for requested image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "temp_image_id",
            "description": "<p>Image id genereated by upload policy</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Image bucket type.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": {\n      \"id\": \"12345\",\n      \"url\": \"https://cdn.acenda.com/swift/v1/my-test-store/images/product/original/1/12345.jpg\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ImagebucketApiController.php",
    "groupTitle": "ImageBucket"
  },
  {
    "type": "post",
    "url": "/imagebucket/policy",
    "title": "policy",
    "name": "Create_Policy",
    "group": "ImageBucket",
    "version": "2.0.1",
    "description": "<p>Generate a upload policy for uploading an image.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"upload\"",
              "\"move\""
            ],
            "optional": false,
            "field": "action",
            "description": "<p>Requested Action</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bucket",
            "description": "<p>Bucket Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>Image id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Image bucket type.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": {\n      \"action\": \"upload\",\n      \"bucket\": \"product\",\n      \"id\": \"temp_image_12345\",\n      \"policy\": \"123590581092521098512985012985201892381031280\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ImagebucketApiController.php",
    "groupTitle": "ImageBucket"
  },
  {
    "type": "get",
    "url": "/imagebucket/getimageurl?bucket=:bucket&type=:type&id=:id",
    "title": "get",
    "name": "Get_Image_URL",
    "group": "ImageBucket",
    "version": "2.0.1",
    "description": "<p>Get an image URL based on provided bucket name, bucket type, and image id.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bucket",
            "description": "<p>Bucket Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Image bucket type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Image id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": {\n      \"url\": \"https://cdn.acenda.com/swift/v1/my-test-store/images/product/original/1/12345.jpg\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ImagebucketApiController.php",
    "groupTitle": "ImageBucket"
  },
  {
    "type": "post",
    "url": "/import/cancel",
    "title": "cancel",
    "name": "Cancel",
    "group": "Import",
    "version": "2.0.1",
    "description": "<p>Cancel an import</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The token pointing to the meta data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "progress",
            "description": "<p>the progress token if it exists</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ImportApiController.php",
    "groupTitle": "Import"
  },
  {
    "type": "post",
    "url": "/order/import",
    "title": "import order",
    "name": "ImportOrder",
    "group": "Import",
    "version": "2.0.1",
    "description": "<p>Creates an order with marketplace credentials</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "marketplace_name",
            "description": "<p>Marketplace vendor name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "marketplace_id",
            "description": "<p>Marketplace vendor id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_number",
            "description": "<p>Credit card number. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_type",
            "description": "<p>Credit card type for processing a credit card. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "customer_id",
            "description": "<p>Optional Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "status",
            "defaultValue": "pending",
            "description": "<p>Order Status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_created",
            "description": "<p>Date the order was placed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email address</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "billing_address",
            "description": "<p>Billing address object containing properties 'first_name', 'last_name', 'phone_number', 'street_line1', 'street_line2' (optional), 'city', 'state', 'zip', and 'country' (Only required when not providing payment entry)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "shipping_address",
            "description": "<p>Shipping address object containing properties 'first_name', 'last_name', 'phone_number', 'street_line1', 'street_line2' (optional), 'city', 'state', 'zip', and 'country'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shipping_method",
            "description": "<p>Shipping method name or id. Name or ID must match one of the available Shipping Methods</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_exp_month",
            "description": "<p>Credit card experation month. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_exp_year",
            "description": "<p>Credit card experation year. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_cvv2",
            "description": "<p>Credit card CVV. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "payments",
            "description": "<p>Array of payment objects containing 'platform', 'status', 'amount', and 'charged'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>Array list of item objects containing a 'product_id' and 'quantity', or 'sku' and 'quantity', or 'sku' and 'price' for a item not in the catalog. Also supports optional 'name', 'vendor', and 'status'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "coupons",
            "description": "<p>Array list of coupon objects containing a 'code'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example:",
        "content": "endpoint: /order/import\n\nbody:\n{\n  \"marketplace_name\":\"Amazon\",\n  \"marketplace_id\":\"123-123-123456\",\n  \"email\":\"bob@acenda.com\",\n  \"customer_id\":2,\n  \"shipping_address\":\n    {\n      \"first_name\":\"bob\",\n      \"last_name\":\"smith\",\n      \"phone_number\":\"123-123-1234\",\n      \"street_line1\":\"123 Test ln. \",\n      \"street_line2\":\"\",\n      \"city\":\"Bobstown\",\n      \"state\":\"CA\",\n      \"zip\":\"92101\",\n      \"country\":\"Bobstralia\"\n    },\n  \"shipping_method\":\"standard\",\n  \"items\":\n    [\n      {\"quantity\":13213,\"sku\":\"my-product-sku\"}\n    ],\n  \"payments\":\n    [\n      {\n        \"amount\":10,\n        \"status\":\"complete\",\n        \"platform\":\"dummy\",\n        \"transactions\":\n          [\n            {\"transaction_id\":\"12345\",\"type\":\"complete\",\"amount\":44.00}\n          ]\n      }\n    ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>New Order ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"code\": 201,\n       \"status\": \"Created\",\n       \"result\": \"12345\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ImportApiController.php",
    "groupTitle": "Import"
  },
  {
    "type": "post",
    "url": "/import/upload",
    "title": "upload",
    "name": "Upload",
    "group": "Import",
    "version": "2.0.1",
    "description": "<p>Upload a CSV file for import pre-processing.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "import",
            "description": "<p>CSV file.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>Type of import.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Import token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"12345..\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ImportApiController.php",
    "groupTitle": "Import"
  },
  {
    "type": "get",
    "url": "/api/location/count",
    "title": "count",
    "name": "Count",
    "group": "Location",
    "version": "2.0.1",
    "description": "<p>Return the number of locations for a site.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of element found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": {\n       \"count\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LocationApiController.php",
    "groupTitle": "Location"
  },
  {
    "type": "post",
    "url": "/api/location",
    "title": "create",
    "name": "Create",
    "group": "Location",
    "version": "2.0.1",
    "description": "<p>Create a new location.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street_line1",
            "description": "<p>Address of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "street_line2",
            "description": "<p>Additional information concerning the address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "customer_id",
            "description": "<p>Use to link a customer to a location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lat",
            "description": "<p>Latitude of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lon",
            "description": "<p>Longitude of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the location (Designation).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the location (Must be Acenda Region standard).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Zip (Postal code) of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the location (Must be Acenda Region standard).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"code\": 201,\n    \"status\": \"Created\",\n    \"result\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LocationApiController.php",
    "groupTitle": "Location"
  },
  {
    "type": "delete",
    "url": "/api/location/:id",
    "title": "delete",
    "name": "Delete",
    "group": "Location",
    "version": "2.0.1",
    "description": "<p>Delete an existing location.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"code\": 200,\n    \"status\": \"Ok\",\n    \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LocationApiController.php",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/api/location/export",
    "title": "export",
    "name": "Export",
    "group": "Location",
    "version": "2.0.1",
    "description": "<p>Export in CSV the location's list returned.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "CSV",
            "optional": false,
            "field": "CSV",
            "description": "<p>content of the found elements.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  <CSV CONTENT>",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LocationApiController.php",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/api/location/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Location",
    "version": "2.0.1",
    "description": "<p>List the locations attached to a site.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>Last time the record has been modified.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "nexus",
            "description": "<p>Rather the location is a tax nexus or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "publish",
            "description": "<p>Rather the location is visible or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the location (Designation).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "street_line1",
            "description": "<p>Address of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "street_line2",
            "description": "<p>Additional information concerning the address.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the location (Must be Acenda Region standard).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>Zip (Postal code) of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the location (Must be Acenda Region standard).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>Latitude of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lon",
            "description": "<p>Longitude of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "thumbnail",
            "description": "<p>URL of the location thumbnail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": [\n        {\n            \"id\": 3,\n            \"date_created\": \"2015-08-13 12:54:14\",\n            \"date_modified\": \"2015-08-13 12:54:14\",\n            \"nexus\": \"\",\n            \"publish\": \"1\",\n            \"title\": \"My Store\",\n            \"description\": \"<p>An explicit description, with potentially opening hours.</p>\",\n            \"type\": \"store\",\n            \"street_line1\": \"8400 Miramar Rd\",\n            \"street_line2\": \"Ste 290\",\n            \"city\": \"San Diego\",\n            \"state\": \"CA\",\n            \"zip\": \"92126\",\n            \"country\": \"US\",\n            \"lat\": \"\",\n            \"lon\": \"\",\n            \"thumbnail\": false\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LocationApiController.php",
    "groupTitle": "Location"
  },
  {
    "type": "put",
    "url": "/api/location/:id",
    "title": "update",
    "name": "Update",
    "group": "Location",
    "version": "2.0.1",
    "description": "<p>Update an existing location.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "street_line1",
            "description": "<p>Address of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "street_line2",
            "description": "<p>Additional information concerning the address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "customer_id",
            "description": "<p>Use to link a customer to a location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lat",
            "description": "<p>Latitude of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lon",
            "description": "<p>Longitude of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>Title of the location (Designation).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>City of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>Country of the location (Must be Acenda Region standard).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "zip",
            "description": "<p>Zip (Postal code) of the location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>State of the location (Must be Acenda Region standard).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"code\": 200,\n    \"status\": \"Ok\",\n    \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LocationApiController.php",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/api/location/within",
    "title": "within",
    "name": "Within",
    "group": "Location",
    "version": "2.0.1",
    "description": "<p>list locations within a radius of miles</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "lat",
            "description": "<p>latitude point to search within radius</p>"
          },
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "lon",
            "description": "<p>longitude point to search within radius</p>"
          },
          {
            "group": "Parameter",
            "type": "Numeric",
            "optional": false,
            "field": "radius",
            "description": "<p>mile radius to search locations within</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>the type of location to search in. (defaults to store)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "CSV",
            "optional": false,
            "field": "CSV",
            "description": "<p>content of the found elements.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"code\":200,\n      \"status\":\"OK\",\n      \"result\":{\n         \"nexus\":\"\",\n         \"publish\":\"1\",\n         \"title\":\"Brighton Collectibles Caesar's Palace\",\n         \"description\":\"Inside, every Brighton Collectibles store feels like a home away from home, filled with warm wood floors, vaulted ceilings and chandeliers. Yet outshining the surrounds is the welcome you'll receive from the Partners, who will treat you like family.  \",\n         \"type\":\"store\",\n         \"street_line1\":\"3500 Las Vegas Blvd S.\",\n         \"street_line2\":\"\",\n         \"city\":\"Las Vegas\",\n         \"state\":\"NV\",\n         \"zip\":\"89109\",\n         \"country\":\"United States\",\n         \"lat\":\"36.116423\",\n         \"lon\":\"-115.17406\",\n         \"number\":\"BR3305002\",\n         \"hours\":\"<ul><li>Sun-Thu 10:00am-11:00pm<\\/li><li>Fri-Sat 10:00am-12:00am<\\/li><\\/ul>\",\n         \"contact_email\":\"caesars@bribor.com\",\n         \"contact_phone\":\"(702) 933-1331\",\n         \"image_id\":null,\n         \"id\":5728,\n         \"date_created\":\"2015-09-15 15:16:05\",\n         \"date_modified\":\"2015-09-15 15:16:05\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LocationApiController.php",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/api/log/count",
    "title": "count",
    "name": "Count",
    "group": "Log",
    "version": "2.0.1",
    "description": "<p>Return the number of logs for a site.</p>",
    "permission": [
      {
        "name": "admin, plugin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of element found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": {\n       \"count\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LogApiController.php",
    "groupTitle": "Log"
  },
  {
    "type": "post",
    "url": "/api/log",
    "title": "create",
    "name": "Create",
    "group": "Log",
    "version": "2.0.1",
    "description": "<p>Create a new log entry.</p>",
    "permission": [
      {
        "name": "admin, plugin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of log.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "type_id",
            "description": "<p>Type of service.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Log data.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"code\": 201,\n    \"status\": \"Created\",\n    \"result\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LogApiController.php",
    "groupTitle": "Log"
  },
  {
    "type": "delete",
    "url": "/api/log/:id",
    "title": "delete",
    "name": "Delete",
    "group": "Log",
    "version": "2.0.1",
    "description": "<p>Delete an existing log.</p>",
    "permission": [
      {
        "name": "admin, plugin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"code\": 200,\n    \"status\": \"Ok\",\n    \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LogApiController.php",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/api/log/export",
    "title": "export",
    "name": "Export",
    "group": "Log",
    "version": "2.0.1",
    "description": "<p>Export in CSV the log's list returned.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "CSV",
            "optional": false,
            "field": "CSV",
            "description": "<p>content of the found elements.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  id,date_created,date_modified,type,type_id,data\n  ,1,\"2015-08-13 12:54:14\",\"2015-08-13 12:54:14\",\"MyType\",1,\"{\\\"sample\\\":\\\"data\\\"}\",",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LogApiController.php",
    "groupTitle": "Log"
  },
  {
    "type": "get",
    "url": "/api/log",
    "title": "read",
    "name": "Read",
    "group": "Log",
    "version": "2.0.1",
    "description": "<p>Read the log of a store.</p>",
    "permission": [
      {
        "name": "admin, plugin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "display",
            "defaultValue": "raw",
            "description": "<p>Display raw data from database (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>Last time the record has been modified.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of log.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": true,
            "field": "type_id",
            "description": "<p>Type of service.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Log data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "beautified_output",
            "description": "<p>Result of the service parsor if exists or raw data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response RAW:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": [\n        {\n            \"id\": 42,\n            \"date_created\": \"2015-05-22 13:47:50\",\n            \"date_modified\": \"2015-05-22 13:47:50\",\n            \"type\": \"service\",\n            \"type_id\": \"1\",\n            \"data\": \"{\\\"sample\\\": \\\"data\\\"}\"\n        }\n    ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response normal (Parsed):",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": [\n        {\n            \"id\": 42,\n            \"date_created\": \"2015-05-22 13:47:50\",\n            \"date_modified\": \"2015-05-22 13:47:50\",\n            \"type\": \"service\",\n            \"type_id\": \"1\",\n            \"data\": \"{\\\"sample\\\": \\\"data\\\"}\",\n            \"beautified_output\": \"This is a sample data generated by the service parsor\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/LogApiController.php",
    "groupTitle": "Log"
  },
  {
    "type": "post",
    "url": "/order/:id/cancel",
    "title": "cancel",
    "name": "Cancel",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Cancel Order by ID</p>",
    "permission": [
      {
        "name": "admin,customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "email",
            "description": "<p>Email the customer a cancel notification</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "restock",
            "defaultValue": "true",
            "description": "<p>Restocks ordered items into inventory (if tracked)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "refund",
            "defaultValue": "true",
            "description": "<p>Refunds order to customer if payment has been delay captured</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reason",
            "description": "<p>Description as to why this order is cancelled</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/ordercoupon",
    "title": "create",
    "name": "Create",
    "group": "OrderCoupon",
    "version": "2.0.1",
    "description": "<p>Create Order Coupon.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order ID to apply Coupon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Coupon Code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount Price</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrdercouponApiController.php",
    "groupTitle": "OrderCoupon"
  },
  {
    "type": "delete",
    "url": "/ordercoupon/:id",
    "title": "delete",
    "name": "Delete",
    "group": "OrderCoupon",
    "version": "2.0.1",
    "description": "<p>Delete Order Coupon by ID</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrdercouponApiController.php",
    "groupTitle": "OrderCoupon"
  },
  {
    "type": "get",
    "url": "/ordercoupon/[:id]",
    "title": "read",
    "name": "Read",
    "group": "OrderCoupon",
    "version": "2.0.1",
    "description": "<p>Fetch Order Coupon(s).</p>",
    "permission": [
      {
        "name": "admin,customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token required if Customer is not logged in, else results will be filtered by Customer's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "OrderCoupon",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2015-07-16 10:17:20\",\n           \"date_modified\": \"2015-07-22 10:51:18\",\n           \"order_id\": \"12\",\n           \"code\": \"1177771111\",\n           \"discount\": \"5\",\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrdercouponApiController.php",
    "groupTitle": "OrderCoupon"
  },
  {
    "type": "put",
    "url": "/ordercoupon/:id",
    "title": "update",
    "name": "Update",
    "group": "OrderCoupon",
    "version": "2.0.1",
    "description": "<p>Update Order Coupon by ID.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order ID to apply Coupon</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Coupon Code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discount",
            "description": "<p>Discount Price</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrdercouponApiController.php",
    "groupTitle": "OrderCoupon"
  },
  {
    "type": "post",
    "url": "/order",
    "title": "create",
    "name": "CreateOrder",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Creates an order</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "marketplace_name",
            "description": "<p>Marketplace vendor name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "marketplace_id",
            "description": "<p>Marketplace vendor id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_number",
            "description": "<p>Credit card number. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_type",
            "description": "<p>Credit card type for processing a credit card. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "customer_id",
            "description": "<p>Optional Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "status",
            "defaultValue": "pending",
            "description": "<p>Order Status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_created",
            "description": "<p>Date the order was placed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email address</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "billing_address",
            "description": "<p>Billing address object containing properties 'first_name', 'last_name', 'phone_number', 'street_line1', 'street_line2' (optional), 'city', 'state', 'zip', and 'country' (Only required when not providing payment entry)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "shipping_address",
            "description": "<p>Shipping address object containing properties 'first_name', 'last_name', 'phone_number', 'street_line1', 'street_line2' (optional), 'city', 'state', 'zip', and 'country'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shipping_method",
            "description": "<p>Shipping method name or id. Name or ID must match one of the available Shipping Methods</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_exp_month",
            "description": "<p>Credit card experation month. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_exp_year",
            "description": "<p>Credit card experation year. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_cvv2",
            "description": "<p>Credit card CVV. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "payments",
            "description": "<p>Array of payment objects containing 'platform', 'status', 'amount', and 'charged'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>Array list of item objects containing a 'product_id' and 'quantity', or 'sku' and 'quantity', or 'sku' and 'price' for a item not in the catalog. Also supports optional 'name', 'vendor', and 'status'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "coupons",
            "description": "<p>Array list of coupon objects containing a 'code'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Order without payments Example:",
        "content": "endpoint: /order\n\nbody:\n{\n  \"email\":\"bob@acenda.com\",\n  \"customer_id\":2,\n  \"billing_address\":\n    {\n      \"first_name\":\"bob\",\n      \"last_name\":\"smith\",\n      \"phone_number\":\"123-123-1234\",\n      \"street_line1\":\"123 Test ln. \",\n      \"city\":\"Bobstown\",\n      \"state\":\"CA\",\n      \"zip\":\"92101\",\n      \"country\":\"Bobstralia\"\n    },\n  \"shipping_address\":\n    {\n      \"first_name\":\"bob\",\n      \"last_name\":\"smith\",\n      \"phone_number\":\"123-123-1234\",\n      \"street_line1\":\"123 Test ln. \",\n      \"city\":\"Bobstown\",\n      \"state\":\"CA\",\n      \"zip\":\"92101\",\n      \"country\":\"Bobstralia\"\n    },\n  \"card_exp_month\":1,\n  \"card_exp_year\":2020,\n  \"card_cvv2\":123,\n  \"card_number\":\"4242424242424242\",\n  \"card_type\":\"visa\"\n  \"items\":\n    [\n      {\"quantity\":13213,\"product_id\":2}\n    ]\n}",
        "type": "json"
      },
      {
        "title": "Full Example:",
        "content": "endpoint: /order\n\nbody:\n{\n  \"email\":\"bob@acenda.com\",\n  \"customer_id\":2,\n  \"billing_address\":\n    {\n      \"first_name\":\"bob\",\n      \"last_name\":\"smith\",\n      \"phone_number\":\"123-123-1234\",\n      \"street_line1\":\"123 Test ln. \",\n      \"street_line2\":\"\",\n      \"city\":\"Bobstown\",\n      \"state\":\"CA\",\n      \"zip\":\"92101\",\n      \"country\":\"Bobstralia\"\n    },\n  \"shipping_address\":\n    {\n      \"first_name\":\"bob\",\n      \"last_name\":\"smith\",\n      \"phone_number\":\"123-123-1234\",\n      \"street_line1\":\"123 Test ln. \",\n      \"street_line2\":\"\",\n      \"city\":\"Bobstown\",\n      \"state\":\"CA\",\n      \"zip\":\"92101\",\n      \"country\":\"Bobstralia\"\n    },\n  \"shipping_method\":\"standard\",\n  \"items\":\n    [\n      {\"quantity\":13213,\"sku\":\"my-product-sku\"}\n    ],\n  \"payments\":\n    [\n      {\n        \"amount\":10,\n        \"status\":\"complete\",\n        \"platform\":\"dummy\",\n        \"transactions\":\n          [\n            {\"transaction_id\":\"12345\",\"type\":\"complete\",\"amount\":44.00}\n          ]\n      }\n    ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>New Order ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"code\": 201,\n       \"status\": \"Created\",\n       \"result\": \"12345\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/order/:id/credit",
    "title": "credit",
    "name": "Credit",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Credit all payments of an order</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Payment amount to credit</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Credit Example:",
        "content": "endpoint: /order/12345/credit\n\nbody:\n{\n   \"amount\": \"19.95\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/order/:id/delaycapture",
    "title": "delay capture",
    "name": "DelayCapture",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Delay capture order payments. Captures full amount if no amount is specified.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "amount",
            "description": "<p>Optional amount to delay capture</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Capture Example:",
        "content": "endpoint: /order/12345/delaycapture\n\nbody:\n{\n   \"amount\": \"19.95\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/order/:id",
    "title": "delete",
    "name": "Delete",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Delete Order by ID</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/order/:id/fraudcheck",
    "title": "fraud check",
    "name": "FraudCheck",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Process Fraud Check rules against current order.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/order/:order_id/fulfillments/:id/cancel",
    "title": "cancel",
    "name": "CancelOrderFulfillment",
    "group": "OrderFulfillment",
    "version": "2.0.1",
    "description": "<p>Cancel an order fulfillment for a given order.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>OrderFulfillment ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Cancelled Order Fulfillment ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"code\": 200,\n       \"status\": \"OK\",\n       \"result\": \"67890\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderfulfillmentApiController.php",
    "groupTitle": "OrderFulfillment"
  },
  {
    "type": "post",
    "url": "/order/:order_id/fulfillments/:id/complete",
    "title": "complete",
    "name": "CompleteOrderFulfillment",
    "group": "OrderFulfillment",
    "version": "2.0.1",
    "description": "<p>Sets Order Fulfillment status to success for a given order.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>OrderFulfillment ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Order Fulfillment ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"code\": 200,\n       \"status\": \"OK\",\n       \"result\": \"67890\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderfulfillmentApiController.php",
    "groupTitle": "OrderFulfillment"
  },
  {
    "type": "post",
    "url": "/order/:order_id/fulfillments",
    "title": "create",
    "name": "CreateOrderFulfillment",
    "group": "OrderFulfillment",
    "version": "2.0.1",
    "description": "<p>Creates an order fulfillment entry for a given order.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"pending\"",
              "\"success\"",
              "\"cancelled\"",
              "\"error\"",
              "\"failure\""
            ],
            "optional": true,
            "field": "status",
            "defaultValue": "pending",
            "description": "<p>Fulfillment Status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tracking_company",
            "description": "<p>The shipping carrier or tracking company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tracking_number",
            "description": "<p>The tracking number (Optional, will be used as tracking_numbers)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tracking_numbers",
            "description": "<p>Array of tracking numbers</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tracking_url",
            "description": "<p>The URL for tracking the shipment</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tracking_urls",
            "description": "<p>Array of URLs for tracking the shipment</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>Array list of objects containing an 'id' and 'quantity'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "packages",
            "description": "<p>Array list of objects containing a 'height', 'width', 'depth', and 'weight'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Simple Example:",
        "content": "endpoint: /order/12345/fulfillments\n\nbody:\n{\n  \"tracking_number\": \"12345\"\n}",
        "type": "json"
      },
      {
        "title": "Full Example:",
        "content": "endpoint: /order/12345/fulfillments\n\nbody:\n{\n  \"status\": \"success\",\n  \"tracking_numbers\": [\n      \"12345\",\n      \"67890\"\n  ],\n  \"tracking_company\": \"USPS\",\n  \"tracking_urls\": [\n      \"https://example.com/track?code=12345\",\n      \"https://example.com/track?code=67890\"\n  ],\n  \"shipping_method\": \"Express 2-Day Shipping\",\n  \"items\": [\n      {\n          \"id\":\"1\"\n      },\n      {\n          \"id\":\"2\",\n          \"quantity\":12\n      }\n  ],\n  \"packages\": [\n      {\n          \"width\":\"10\",\n          \"height\":\"15\",\n          \"depth\":\"4.5\",\n          \"weight\":\"14\"\n      }\n  ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>New Order Fulfillment ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"code\": 201,\n       \"status\": \"Created\",\n       \"result\": \"12345\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderfulfillmentApiController.php",
    "groupTitle": "OrderFulfillment"
  },
  {
    "type": "get",
    "url": "/order/:order_id/fulfillments/[:id]",
    "title": "read",
    "name": "ReadOrderFulfillments",
    "group": "OrderFulfillment",
    "version": "2.0.1",
    "description": "<p>Lists order fulfillments.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Order Fulfillment ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "order_id",
            "description": "<p>Order ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"code\": 200,\n       \"status\": \"OK\",\n       \"num_total\": 1,\n       \"result\": [\n          {\n              \"id\": \"1010153\",\n              \"date_created\": \"2015-07-21 15:24:34\",\n              \"date_modified\": \"2015-07-21 15:24:34\",\n              \"order_id\": \"10033\",\n              \"status\": \"pending\",\n              \"tracking_company\": \"\",\n              \"tracking_urls\": [],\n              \"tracking_numbers\": [\n                  \"12349999x323131\"\n              ],\n              \"shipping_method\": \"success\",\n              \"items\": [\n                  {\n                      \"id\": \"1\",\n                      \"date_created\": \"2015-07-21 15:14:32\",\n                      \"date_modified\": \"2015-07-21 15:14:32\",\n                      \"product_id\": \"236\",\n                      \"status\": \"shipped\",\n                      \"vendor\": \"muon\",\n                      \"name\": \"My Wonderful Test Product\",\n                      \"quantity\": 1,\n                      \"fulfilled_quantity\": \"0\",\n                      \"fulfillment_status\": \"null\",\n                      \"order_id\": \"10033\",\n                      \"returnable\": \"true\",\n                      \"returnable_quantity\": \"1\",\n                      \"tracking_number\": \"245541860450730\"\n                  }\n              ],\n              \"packages\": [\n                  {\n                      \"width\":1,\n                      \"height\":2,\n                      \"depth\":13,\n                      \"weight\":3.4,\n                  }\n              ]\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderfulfillmentApiController.php",
    "groupTitle": "OrderFulfillment"
  },
  {
    "type": "put",
    "url": "/order/:order_id/fulfillments/:id",
    "title": "update",
    "name": "UpdateOrderFulfillment",
    "group": "OrderFulfillment",
    "version": "2.0.1",
    "description": "<p>Updates an order fulfillment for a given order.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>OrderFulfillment ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"pending\"",
              "\"success\"",
              "\"cancelled\"",
              "\"error\"",
              "\"failure\""
            ],
            "optional": true,
            "field": "status",
            "defaultValue": "pending",
            "description": "<p>Fulfillment Status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tracking_company",
            "description": "<p>The shipping carrier or tracking company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tracking_number",
            "description": "<p>The tracking number</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tracking_numbers",
            "description": "<p>Array of tracking numbers</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tracking_url",
            "description": "<p>The URL for tracking the shipment</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "tracking_urls",
            "description": "<p>Array of URLs for tracking the shipment</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>Array list of objects containing an 'id' and 'quantity'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "packages",
            "description": "<p>Array list of objects containing a 'height', 'width', 'depth', and 'weight'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Simple Example:",
        "content": "endpoint: /order/12345/fulfillments/67890\n\nbody:\n{\n  \"tracking_number\": \"12345\"\n}",
        "type": "json"
      },
      {
        "title": "Full Example:",
        "content": "endpoint: /order/12345/fulfillments/67890\n\nbody:\n{\n  \"status\": \"success\",\n  \"tracking_numbers\": [\n      \"12345\",\n      \"67890\"\n  ],\n  \"tracking_company\": \"USPS\",\n  \"tracking_urls\": [\n      \"https://example.com/track?code=12345\",\n      \"https://example.com/track?code=67890\"\n  ],\n  \"shipping_method\": \"Express 2-Day Shipping\",\n  \"items\": [\n      {\n          \"id\":\"1\"\n      },\n      {\n          \"id\":\"2\",\n          \"quantity\":12\n      }\n  ],\n  \"packages\": [\n      {\n          \"width\":\"10\",\n          \"height\":\"15\",\n          \"depth\":\"4.5\",\n          \"weight\":\"14\"\n      }\n  ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Updated Order Fulfillment ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"code\": 200,\n       \"status\": \"OK\",\n       \"result\": \"67890\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderfulfillmentApiController.php",
    "groupTitle": "OrderFulfillment"
  },
  {
    "type": "delete",
    "url": "/order/:order_id/fulfillments/:id",
    "title": "delete",
    "name": "UpdateOrderFulfillment",
    "group": "OrderFulfillment",
    "version": "2.0.1",
    "description": "<p>Delete an order fulfillment for a given order.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>OrderFulfillment ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Deleted Order Fulfillment ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"code\": 200,\n       \"status\": \"OK\",\n       \"result\": \"67890\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderfulfillmentApiController.php",
    "groupTitle": "OrderFulfillment"
  },
  {
    "type": "post",
    "url": "/order/import",
    "title": "import",
    "name": "ImportOrder",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Creates an order with marketplace credentials</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "marketplace_name",
            "description": "<p>Marketplace vendor name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "marketplace_id",
            "description": "<p>Marketplace vendor id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_number",
            "description": "<p>Credit card number. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_type",
            "description": "<p>Credit card type for processing a credit card. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "customer_id",
            "description": "<p>Optional Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "status",
            "defaultValue": "pending",
            "description": "<p>Order Status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_created",
            "description": "<p>Date the order was placed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email address</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "billing_address",
            "description": "<p>Billing address object containing properties 'first_name', 'last_name', 'phone_number', 'street_line1', 'street_line2' (optional), 'city', 'state', 'zip', and 'country' (Only required when not providing payment entry)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "shipping_address",
            "description": "<p>Shipping address object containing properties 'first_name', 'last_name', 'phone_number', 'street_line1', 'street_line2' (optional), 'city', 'state', 'zip', and 'country'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shipping_method",
            "description": "<p>Shipping method name or id. Name or ID must match one of the available Shipping Methods</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_exp_month",
            "description": "<p>Credit card experation month. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_exp_year",
            "description": "<p>Credit card experation year. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_cvv2",
            "description": "<p>Credit card CVV. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "payments",
            "description": "<p>Array of payment objects containing 'platform', 'status', 'amount', and 'charged'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>Array list of item objects containing a 'product_id' and 'quantity', or 'sku' and 'quantity', or 'sku' and 'price' for a item not in the catalog. Also supports optional 'name', 'vendor', and 'status'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "coupons",
            "description": "<p>Array list of coupon objects containing a 'code'</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example:",
        "content": "endpoint: /order/import\n\nbody:\n{\n  \"marketplace_name\":\"Amazon\",\n  \"marketplace_id\":\"123-123-123456\",\n  \"email\":\"bob@acenda.com\",\n  \"customer_id\":2,\n  \"shipping_address\":\n    {\n      \"first_name\":\"bob\",\n      \"last_name\":\"smith\",\n      \"phone_number\":\"123-123-1234\",\n      \"street_line1\":\"123 Test ln. \",\n      \"street_line2\":\"\",\n      \"city\":\"Bobstown\",\n      \"state\":\"CA\",\n      \"zip\":\"92101\",\n      \"country\":\"Bobstralia\"\n    },\n  \"shipping_method\":\"standard\",\n  \"items\":\n    [\n      {\"quantity\":13213,\"sku\":\"my-product-sku\"}\n    ],\n  \"payments\":\n    [\n      {\n        \"amount\":10,\n        \"status\":\"complete\",\n        \"platform\":\"dummy\",\n        \"transactions\":\n          [\n            {\"transaction_id\":\"12345\",\"type\":\"complete\",\"amount\":44.00}\n          ]\n      }\n    ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>New Order ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"code\": 201,\n       \"status\": \"Created\",\n       \"result\": \"12345\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/orderitem",
    "title": "create",
    "name": "Create",
    "group": "OrderItem",
    "version": "2.0.1",
    "description": "<p>Create Order Item.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Order item status</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "wishlist_id",
            "description": "<p>Wishlist ID this item was retrieved from</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "registry_id",
            "description": "<p>Registry ID this item was retrieved from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Variant Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sku",
            "description": "<p>Product Variant SKU</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of item</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Ordered Quantity</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderitemApiController.php",
    "groupTitle": "OrderItem"
  },
  {
    "type": "delete",
    "url": "/orderitem/:id",
    "title": "delete",
    "name": "Delete",
    "group": "OrderItem",
    "version": "2.0.1",
    "description": "<p>Delete Order Item by ID</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderitemApiController.php",
    "groupTitle": "OrderItem"
  },
  {
    "type": "get",
    "url": "/orderitem/[:id]",
    "title": "read",
    "name": "Read",
    "group": "OrderItem",
    "version": "2.0.1",
    "description": "<p>Fetch Order Item(s).</p>",
    "permission": [
      {
        "name": "admin,customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token required if Customer is not logged in, else results will be filtered by Customer's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "OrderItem",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2015-07-16 10:17:20\",\n           \"date_modified\": \"2015-07-22 10:51:18\",\n           \"status\": \"pending\",\n           \"order_id\": \"12\",\n           \"product_id\": \"12345\",\n           \"wishlist_id\": null,\n           \"registry_id\": null,\n           \"name\": \"My Test Product\",\n           \"sku\": \"ABC12345\",\n           \"price\": \"20.95\",\n           \"quantity\": \"2\",\n           \"fulfillment_status\": \"null\",\n           \"fulfilled_quantity\": \"0\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderitemApiController.php",
    "groupTitle": "OrderItem"
  },
  {
    "type": "put",
    "url": "/orderitem/:id",
    "title": "update",
    "name": "Update",
    "group": "OrderItem",
    "version": "2.0.1",
    "description": "<p>Update Order Item by ID.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Order item status</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "wishlist_id",
            "description": "<p>Wishlist ID this item was retrieved from</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "registry_id",
            "description": "<p>Registry ID this item was retrieved from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Variant Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sku",
            "description": "<p>Product Variant SKU</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>Price of item</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Ordered Quantity</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderitemApiController.php",
    "groupTitle": "OrderItem"
  },
  {
    "type": "get",
    "url": "/order/:order_id/payments/[:id]",
    "title": "read",
    "name": "ReadOrderPayments",
    "group": "OrderPayment",
    "version": "2.0.1",
    "description": "<p>Lists order payments.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Order Payment ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "order_id",
            "description": "<p>Order ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Request code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"id\":23250,\n      \"date_created\":\"2015-12-03 16:56:42\",\n      \"date_modified\":\"2015-12-04 10:53:02\",\n      \"order_id\":\"80580\",\n      \"platform\":\"PayPal\",\n      \"status\":\"delaycapture\",\n      \"amount\":\"307.94\",\n      \"charged\":\"307.94\",\n      \"transactions\":[  \n          {  \n              \"id\":23259,\n              \"date_created\":\"2015-12-03 16:56:42\",\n              \"date_modified\":\"2015-12-03 16:56:42\",\n              \"order_payment_id\":\"23250\",\n              \"transaction_id\":\"BT12345\",\n              \"type\":\"authorize\",\n              \"amount\":\"307.94\"\n          },\n          {  \n              \"id\":23271,\n              \"date_created\":\"2015-12-04 10:53:02\",\n              \"date_modified\":\"2015-12-04 10:53:02\",\n              \"order_payment_id\":\"23250\",\n              \"transaction_id\":\"BP12345\",\n              \"type\":\"delaycapture\",\n              \"amount\":\"307.94\"\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderpaymentApiController.php",
    "groupTitle": "OrderPayment"
  },
  {
    "type": "get",
    "url": "/order/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Fetch Order(s).</p>",
    "permission": [
      {
        "name": "admin,customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token required if Customer is not logged in, else results will be filtered by Customer's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Order",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n    \"code\":200,\n    \"status\":\"OK\",\n    \"num_total\":1,\n    \"result\":{\n        \"id\":32,\n        \"date_created\":\"2015-10-20 18:59:48\",\n        \"date_modified\":\"2015-12-12 20:09:41\",\n        \"order_number\":\"3397736\",\n        \"status\":\"pending\",\n        \"customer_id\":\"2\",\n        \"email\":\"bob@bob.com\",\n        \"ip\":\"192.168.33.1\",\n        \"shipping_first_name\":\"bob\",\n        \"shipping_last_name\":\"smith\",\n        \"shipping_phone_number\":\"123-123-1234\",\n        \"shipping_street_line1\":\"123 Test ln\",\n        \"shipping_street_line2\":\"\",\n        \"shipping_city\":\"Test City\",\n        \"shipping_state\":\"CA\",\n        \"shipping_zip\":\"92101\",\n        \"shipping_country\":\"US\",\n        \"shipping_method\":\"8624778\",\n        \"shipping_rate\":\"10.00\",\n        \"returns_pending\":\"0\",\n        \"returnable_items\":\"0\",\n        \"giftlist_present\":\"false\",\n        \"coupon_code\":\"\",\n        \"subtotal\":\"1242.00\",\n        \"tax\":\"0.00\",\n        \"total\":\"1242.00\",\n        \"total_verify\":\"0\",\n        \"charge_amount\":\"0.00\",\n        \"unsettled\":\"0.00\",\n        \"transaction_status\":\"complete\",\n        \"name\":\"bob bob\",\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/orderreturn/:id/cancel",
    "title": "cancel",
    "name": "Cancel_OrderReturn",
    "group": "OrderReturn",
    "version": "2.0.1",
    "description": "<p>Cancel's Order Return by ID</p>",
    "permission": [
      {
        "name": "admin,customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>OrderReturn ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token required if Customer is not logged in, else Customer's ID will be provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderreturnApiController.php",
    "groupTitle": "OrderReturn"
  },
  {
    "type": "post",
    "url": "/orderreturn",
    "title": "create",
    "name": "Create",
    "group": "OrderReturn",
    "version": "2.0.1",
    "description": "<p>Create Order Return.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token required if Customer is not logged in, else Customer's ID will be provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order ID for return</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>OrderItem ID to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity to return</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Order Return status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reason",
            "description": "<p>Reason for return</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderreturnApiController.php",
    "groupTitle": "OrderReturn"
  },
  {
    "type": "delete",
    "url": "/orderreturn/:id",
    "title": "delete",
    "name": "Delete",
    "group": "OrderReturn",
    "version": "2.0.1",
    "description": "<p>Delete Order Return by ID</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderreturnApiController.php",
    "groupTitle": "OrderReturn"
  },
  {
    "type": "get",
    "url": "/orderreturn/[:id]",
    "title": "read",
    "name": "Read",
    "group": "OrderReturn",
    "version": "2.0.1",
    "description": "<p>Fetch Order Return(s).</p>",
    "permission": [
      {
        "name": "admin,customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token required if Customer is not logged in, else results will be filtered by Customer's ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "OrderReturn",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2014-05-07 22:18:23\",\n           \"date_modified\": \"2014-05-07 22:18:23\",\n           \"customer_id\": \"132451\",\n           \"order_id\": \"2321\",\n           \"item_id\": \"31\",\n           \"quantity\": \"2\",\n           \"status\": \"pending\",\n           \"reason\": \"Wrong item ordered\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderreturnApiController.php",
    "groupTitle": "OrderReturn"
  },
  {
    "type": "put",
    "url": "/orderreturn/:id",
    "title": "update",
    "name": "Update",
    "group": "OrderReturn",
    "version": "2.0.1",
    "description": "<p>Update Order Return by ID.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Customer ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>Order ID for return</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "item_id",
            "description": "<p>OrderItem ID to return</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity to return</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Order Return status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "reason",
            "description": "<p>Reason for return</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderreturnApiController.php",
    "groupTitle": "OrderReturn"
  },
  {
    "type": "post",
    "url": "/order/:id/sendnotification",
    "title": "send notification",
    "name": "SendNotification",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Send the customer of an order an email notification based on type.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"partially shipped\"",
              "\"fulfillment\""
            ],
            "optional": true,
            "field": "type",
            "description": "<p>Notification type to send</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/order/:id/settle",
    "title": "settle",
    "name": "Settle",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Delay capture any remaining payment changes for an order</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/order/:id",
    "title": "update",
    "name": "Update",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Update Order by ID.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "marketplace_name",
            "description": "<p>Marketplace vendor name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "marketplace_id",
            "description": "<p>Marketplace vendor id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_number",
            "description": "<p>Credit card number. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_type",
            "description": "<p>Credit card type for processing a credit card. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "customer_id",
            "description": "<p>Optional Customer ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "status",
            "defaultValue": "pending",
            "description": "<p>Order Status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_created",
            "description": "<p>Date the order was placed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email address</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "billing_address",
            "description": "<p>Billing address object containing properties 'first_name', 'last_name', 'phone_number', 'street_line1', 'street_line2' (optional), 'city', 'state', 'zip', and 'country' (Only required when not providing payment entry)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "shipping_address",
            "description": "<p>Shipping address object containing properties 'first_name', 'last_name', 'phone_number', 'street_line1', 'street_line2' (optional), 'city', 'state', 'zip', and 'country'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shipping_method",
            "description": "<p>Shipping method name or id. Name or ID must match one of the available Shipping Methods</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_exp_month",
            "description": "<p>Credit card experation month. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_exp_year",
            "description": "<p>Credit card experation year. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "card_cvv2",
            "description": "<p>Credit card CVV. Not required if providing payment entry</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "payments",
            "description": "<p>Array of payment objects containing 'platform', 'status', 'amount', and 'charged'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>Array list of item objects containing a 'product_id' and 'quantity', or 'sku' and 'quantity', or 'sku' and 'price' for a item not in the catalog. Also supports optional 'name', 'vendor', and 'status'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "coupons",
            "description": "<p>Array list of coupon objects containing a 'code'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/order/:id/void",
    "title": "void",
    "name": "Void",
    "group": "Order",
    "version": "2.0.1",
    "description": "<p>Voids all payments of an order</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/OrderApiController.php",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/plugin",
    "title": "create",
    "name": "Create",
    "group": "Plugin",
    "version": "2.0.1",
    "description": "<p>Create Plugin. (Scope: plugins:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Plugin's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip_link",
            "description": "<p>Zip Link</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>Hash for versioning</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_description",
            "description": "<p>Short Description for quick preview</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "html_description",
            "description": "<p>HTML description for download page</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Values: validated - pending</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/PluginApiController.php",
    "groupTitle": "Plugin"
  },
  {
    "type": "delete",
    "url": "/api/plugin/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "Plugin",
    "version": "2.0.1",
    "description": "<p>Delete Plugin by ID (Scope: plugins:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/PluginApiController.php",
    "groupTitle": "Plugin"
  },
  {
    "type": "get",
    "url": "/api/plugin/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Plugin",
    "version": "2.0.1",
    "description": "<p>Fetches Plugin(s). (Scope: plugins:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Plugin",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2015-07-10 11:28:03\",\n           \"date_modified\": \"2015-07-11 13:18:58\",\n           \"name\": \"test\",\n           \"zip_link\": \"\",\n           \"repository\": \"\",\n           \"hash\": \"\",\n           \"short_description\": \"\",\n           \"html_description\": \"\",\n           \"status\": \"1\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/PluginApiController.php",
    "groupTitle": "Plugin"
  },
  {
    "type": "put",
    "url": "/api/plugin/:id",
    "title": "update",
    "name": "Update",
    "group": "Plugin",
    "version": "2.0.1",
    "description": "<p>Update Plugin by ID. (Scope: plugins:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Plugin's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip_link",
            "description": "<p>Zip Link</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "repository",
            "description": "<p>Repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>Hash for versioning</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "short_description",
            "description": "<p>Short Description for quick preview</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "html_description",
            "description": "<p>HTML description for down</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/PluginApiController.php",
    "groupTitle": "Plugin"
  },
  {
    "type": "post",
    "url": "/api/product",
    "title": "create",
    "name": "Create",
    "group": "Product",
    "version": "2.0.1",
    "description": "<p>Create Product.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "status",
            "defaultValue": "active",
            "description": "<p>Status (&quot;active&quot;,&quot;offline&quot; or &quot;disabled&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>Slug</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brand",
            "description": "<p>Brand Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Product Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Product Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page_title",
            "description": "<p>Optional HTML element</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "meta_description",
            "description": "<p>Optional HTML element</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "collection_id",
            "description": "<p>Array of Collection IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "category_id",
            "description": "<p>Array of Category IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "keywords",
            "description": "<p>Array of Keywords</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "tags",
            "description": "<p>Array of Product tags</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "cross_sellers",
            "description": "<p>Array of Product or Collection IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "variant_options",
            "description": "<p>Variant sort options for product page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>Array of image URLs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "videos",
            "description": "<p>Array of video URLs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_publish",
            "description": "<p>Publish date in readable date format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_expire",
            "description": "<p>Expire date in readable date format</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ProductApiController.php",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/api/product/:id",
    "title": "delete",
    "name": "Delete",
    "group": "Product",
    "version": "2.0.1",
    "description": "<p>Delete Product by ID</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ProductApiController.php",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/product/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Product",
    "version": "2.0.1",
    "description": "<p>Fetch Product(s).</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Product",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"group\": \"product\",\n           \"status\": \"active\",\n           \"slug\": \"ipod-classic\",\n           \"name\": \"iPod Classic\",\n           \"collection_id\": [\"12345\",\"67890\"],\n           \"category_id\": [\"123\",\"456\",\"789\"],\n           \"brand\": \"Apple\",\n           \"type\": \"Media Player\",\n           \"keywords\": [\"apple\",\"pod\",\"mp3\",\"aac\"],\n           \"tags\": [\"music\",\"portable\",\"retro\"],\n           \"page_title\": \"iPod Classic\",\n           \"title\":\"iPod Classic\",\n           \"category\": [\"test-products\",\"media-players\",\"retro/players\"],\n           \"url\": \"/product/4+Moms/infant-tub\",\n           \"thumbnail\": \"https://cdn.acenda.com/swift/v1/my-store/images/bucket/product/thumbnail/250x250/1/12345.jpg\",\n           \"meta_description\": \"This is a fancy 128MB MP3 player from the early 2000's.\",\n           \"description\": \"This is a fancy 128MB MP3 player from the early 2000's.\",\n           \"cross_sellers\": [\"123\",\"456\",\"789\"],\n           \"review_score\": \"1.234\",\n           \"variant_options\": {\"size\":[\"2MB\",\"32MB\",\"64MB\",\"128MB\"]},\n           \"images\": [{\"id\":\"12345\",\"name\":\"iPod Side\",\"tags\":\"\"}],\n           \"videos\": [\"http://youtu.be/12345\",\"http://youtu.be/67890\"],\n           \"date_modified\": \"2015-07-16 10:17:20\",\n           \"date_created\": \"2015-07-16 10:17:20\",\n           \"date_publish\": \"2015-07-20 03:15:59\",\n           \"date_expire\" : \"2015-07-20 03:15:59\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ProductApiController.php",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/product/:id/variants",
    "title": "get variants",
    "name": "Read_Variants",
    "group": "Product",
    "version": "2.0.1",
    "description": "<p>Fetch Product Variants.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Variant",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"12345\",\n           \"position\": \"45\",\n           \"inventory_shipping_estimate\": \"Ships in 2 to 4 weeks\",\n           \"has_stock\": \"1\",\n           \"weight\": \"0\",\n           \"product_id\": \"1\",\n           \"inventory_policy\": \"continue\",\n           \"date_created\": \"2014-05-07 22:14:12\",\n           \"inventory_tracking\": \"0\",\n           \"require_shipping\": \"1\",\n           \"save_percent\": \"20\",\n           \"title\": \"iPod Classic - 32 MB\",\n           \"name\": \"32 MB\",\n           \"save_price\": \"14\",\n           \"popularity\": \"1354065300\",\n           \"inventory_quantity\": \"0\",\n           \"inventory_returnable\": \"1\",\n           \"date_modified\": \"2014-12-19 11:25:04\",\n           \"status\": \"active\",\n           \"taxable\": \"1\",\n           \"barcode\": \"692176705539\",\n           \"sku\": \"WS1121\",\n           \"compare_price\": \"69\",\n           \"cost\": \"34.5\",\n           \"url\": \"/product/ipod-classic-set\",\n           \"thumbnail\": \"https://cdn.acenda.com/swift/v1/my-test-store/images/bucket/product/thumbnail/250x250/4/4487.jpg\",\n           \"price\": \"55\",\n           \"inventory_minimum_quantity\": \"0\",\n           \"inventory\": \"-1\",\n           \"images\": [{\"tags\": \"\", \"id\": \"4521\", \"name\": \"\"}]\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ProductApiController.php",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/product/:id",
    "title": "update",
    "name": "Update",
    "group": "Product",
    "version": "2.0.1",
    "description": "<p>Update Product.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "status",
            "defaultValue": "active",
            "description": "<p>Status (&quot;active&quot;,&quot;offline&quot; or &quot;disabled&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "slug",
            "description": "<p>Slug</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "brand",
            "description": "<p>Brand Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Product Type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Product Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page_title",
            "description": "<p>Optional HTML element</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "meta_description",
            "description": "<p>Optional HTML element</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "collection_id",
            "description": "<p>Array of Collection IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "category_id",
            "description": "<p>Array of Category IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "keywords",
            "description": "<p>Array of Keywords</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "tags",
            "description": "<p>Array of Product tags</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "cross_sellers",
            "description": "<p>Array of Product or Collection IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "variant_options",
            "description": "<p>Variant sort options for product page.</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>Array of image URLs</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "videos",
            "description": "<p>Array of video URLs</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_publish",
            "description": "<p>Publish date in readable date format</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_expire",
            "description": "<p>Expire date in readable date format</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ProductApiController.php",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/<selected_model>/[:id]",
    "title": "read",
    "name": "Read",
    "group": "ReadAttributes",
    "version": "2.0.1",
    "description": "<p>This part show you what are the parameters you can use for the read methods to filter and format your data.<br /></p>",
    "permission": [
      {
        "name": "guest, customer, admin, plugin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "description": "<p>Filters fields to be returned (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit the number of records returned (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>Set up the number of records to skip before returning them (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Return a batch of records according to the limit (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>Return records matching what is put on the search field (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search_in",
            "description": "<p><strong>NEED TO BE DESCRIBED</strong> (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>Sort record per field (1 is ascendant, -1 in descendant) (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "query",
            "description": "<p>Query to return the filtered result (GET).</p>"
          }
        ]
      }
    },
    "filename": "./app/protected/components/ApiControllerBase.php",
    "groupTitle": "ReadAttributes"
  },
  {
    "type": "get",
    "url": "/region",
    "title": "get countries",
    "name": "Read",
    "group": "Region",
    "version": "2.0.1",
    "description": "<p>List all countries handled by Acenda with their acronyme.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "region",
            "description": "<p>List of Hash with label and values.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"label\": \"United States of America\",\n           \"value\": \"US\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegionApiController.php",
    "groupTitle": "Region"
  },
  {
    "type": "get",
    "url": "/region/states/:country_value",
    "title": "get states",
    "name": "Read_States",
    "group": "Region",
    "version": "2.0.1",
    "description": "<p>List all states handled by Acenda with their acronyme for a country.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "states",
            "description": "<p>List of Hash with label and values.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"label\": \"California\",\n           \"value\": \"CA\"\n       }\n       {\n           ...\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegionApiController.php",
    "groupTitle": "Region"
  },
  {
    "type": "get",
    "url": "/api/registry/count",
    "title": "count",
    "name": "Count",
    "group": "Registry",
    "version": "2.0.1",
    "description": "<p>Return the number of registry for a site or a user.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of element found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": {\n       \"count\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryApiController.php",
    "groupTitle": "Registry"
  },
  {
    "type": "get",
    "url": "/registry",
    "title": "create",
    "name": "Create",
    "group": "Registry",
    "version": "2.0.1",
    "description": "<p>Create a registry.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token if querying as admin (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the registry.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "privacy",
            "description": "<p>Privacy of the registry (public, unlisted or private).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "event_date",
            "description": "<p>Date of the event attached to the registry.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Displayed first name of the registry owner.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Displayed last name of the registry owner.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "co_first_name",
            "description": "<p>Displayed first name of the registry co-owner.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "co_last_name",
            "description": "<p>Displayed last name of the registry co-owner.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "address_id",
            "description": "<p>ID of the address attached to the registry.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer_id",
            "description": "<p>ID of the customer that ownes the registry.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "default",
            "description": "<p>Rather the registry is the customer's default one (0 or 1).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryApiController.php",
    "groupTitle": "Registry"
  },
  {
    "type": "delete",
    "url": "/api/registry/:id",
    "title": "delete",
    "name": "Delete",
    "group": "Registry",
    "version": "2.0.1",
    "description": "<p>Delete an existing registry.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token if querying as admin (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"code\": 200,\n    \"status\": \"Ok\",\n    \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryApiController.php",
    "groupTitle": "Registry"
  },
  {
    "type": "get",
    "url": "/api/registry/export",
    "title": "export",
    "name": "Export",
    "group": "Registry",
    "version": "2.0.1",
    "description": "<p>Export in CSV the registry's list returned.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "CSV",
            "optional": false,
            "field": "CSV",
            "description": "<p>content of the found elements.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  id,date_created,date_modified,item_count,name,privacy,event_date,first_name,last_name,co_first_name,co_last_name,address_id,customer_id,state,city,default,\n  ,1,\"2015-08-14 14:04:43\",\"2015-08-14 14:04:43\",0,\"Test registry\",\"private\",\"2015-08-14 14:04:43\",\"John\",\"Doe\",\"Jane\",\"Doe\",\"1\",\"2\",\"CA\",\"San Diego\",\"1\"",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryApiController.php",
    "groupTitle": "Registry"
  },
  {
    "type": "get",
    "url": "/api/registryitem/count",
    "title": "count",
    "name": "Count",
    "group": "RegistryItem",
    "version": "2.0.1",
    "description": "<p>Return the number of item of registries for a site or a user.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of element found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": {\n       \"count\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryitemApiController.php",
    "groupTitle": "RegistryItem"
  },
  {
    "type": "post",
    "url": "/registryitem",
    "title": "create",
    "name": "Create",
    "group": "RegistryItem",
    "version": "2.0.1",
    "description": "<p>Create a registry item.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token if querying as admin (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "registry_id",
            "description": "<p>ID of the registry.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "product_id",
            "description": "<p>ID of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>The quantity required by the registry owner.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "quantity_purchased",
            "description": "<p>Quantity of product purchased for the registry.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryitemApiController.php",
    "groupTitle": "RegistryItem"
  },
  {
    "type": "delete",
    "url": "/api/registryitem/:id",
    "title": "delete",
    "name": "Delete",
    "group": "RegistryItem",
    "version": "2.0.1",
    "description": "<p>Delete an existing registry.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token if querying as admin (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"code\": 200,\n    \"status\": \"Ok\",\n    \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryitemApiController.php",
    "groupTitle": "RegistryItem"
  },
  {
    "type": "get",
    "url": "/api/registryitem/export",
    "title": "export",
    "name": "Export",
    "group": "RegistryItem",
    "version": "2.0.1",
    "description": "<p>Export in CSV the registry Item's list returned.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "CSV",
            "optional": false,
            "field": "CSV",
            "description": "<p>content of the found elements.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  id,date_created,date_modified,quantity_purchased,registry_id,product_id,quantity\n  ,1,\"2015-08-14 14:04:43\",\"2015-08-14 14:04:43\",0,123,123,1",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryitemApiController.php",
    "groupTitle": "RegistryItem"
  },
  {
    "type": "get",
    "url": "/registryitem/[:id]",
    "title": "read",
    "name": "Read",
    "group": "RegistryItem",
    "version": "2.0.1",
    "description": "<p>List items registry.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token if querying as admin (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>Last time the record has been modified.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "registry_id",
            "description": "<p>ID of the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product_id",
            "description": "<p>ID of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>The quantity required by the registry owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "quantity_purchased",
            "description": "<p>Quantity of product purchased for the registry.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [{\n      \"id\": 1,\n      \"date_created\": \"2015-08-14 10:51:10\",\n      \"date_modified\": \"2015-08-14 10:51:10\",\n      \"registry_id\": \"1\",\n      \"product_id\": \"1234\",\n      \"quantity\": \"10\",\n      \"quantity_purchased\": \"0\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryitemApiController.php",
    "groupTitle": "RegistryItem"
  },
  {
    "type": "put",
    "url": "/registryitem/:id",
    "title": "update",
    "name": "Update",
    "group": "RegistryItem",
    "version": "2.0.1",
    "description": "<p>Update a registry item.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token if querying as admin (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "registry_id",
            "description": "<p>ID of the registry.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "product_id",
            "description": "<p>ID of the product.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "quantity",
            "description": "<p>The quantity required by the registry owner.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "quantity_purchased",
            "description": "<p>Quantity of product purchased for the registry.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryitemApiController.php",
    "groupTitle": "RegistryItem"
  },
  {
    "type": "get",
    "url": "/registry/:id/items",
    "title": "items",
    "name": "Items",
    "group": "Registry",
    "version": "2.0.1",
    "description": "<p>List items registry.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token if querying as admin (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>Last time the record has been modified.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "registry_id",
            "description": "<p>ID of the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product_id",
            "description": "<p>ID of the product.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>The quantity required by the registry owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "quantity_purchased",
            "description": "<p>Quantity of product purchased for the registry.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [{\n      \"id\": 1,\n      \"date_created\": \"2015-08-14 10:51:10\",\n      \"date_modified\": \"2015-08-14 10:51:10\",\n      \"registry_id\": \"1\",\n      \"product_id\": \"1234\",\n      \"quantity\": \"10\",\n      \"quantity_purchased\": \"0\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryApiController.php",
    "groupTitle": "Registry"
  },
  {
    "type": "POST",
    "url": "/api/registry/:id/makedefault",
    "title": "make default",
    "name": "Make_Default",
    "group": "Registry",
    "version": "2.0.1",
    "description": "<p>Set a registry as default and unset the other one.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token if querying as admin (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n    \"code\": 200,\n    \"status\": \"Ok\",\n    \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryApiController.php",
    "groupTitle": "Registry"
  },
  {
    "type": "get",
    "url": "/registry/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Registry",
    "version": "2.0.1",
    "description": "<p>List registries, or fetch a specific one.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token if querying as admin (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>Last time the record has been modified.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "item_count",
            "description": "<p>Number of item in the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "privacy",
            "description": "<p>Privacy of the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event_date",
            "description": "<p>Date of the event attached to the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Displayed first name of the registry owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>Displayed last name of the registry owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "co_first_name",
            "description": "<p>Displayed first name of the registry co-owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "co_last_name",
            "description": "<p>Displayed last name of the registry co-owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "address_id",
            "description": "<p>ID of the address attached to the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "customer_id",
            "description": "<p>ID of the customer that ownes the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State related to the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City related to the registry.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "default",
            "description": "<p>Rather the registry is the customer's default one.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [{\n      \"id\": 1,\n      \"date_created\": \"2015-08-13 16:26:45\",\n      \"date_modified\": \"2015-08-13 16:26:45\",\n      \"item_count\": 0,\n      \"name\": \"My Registry\",\n      \"privacy\": \"public\",\n      \"event_date\": \"2015-08-13\",\n      \"first_name\": \"John\",\n      \"last_name\": \"Doe\",\n      \"co_first_name\": \"Jane\",\n      \"co_last_name\": \"Doe\",\n      \"address_id\": \"3\",\n      \"customer_id\": \"1\",\n      \"state\": \"CA\",\n      \"city\": \"SAN DIEGO\",\n      \"default\": \"1\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryApiController.php",
    "groupTitle": "Registry"
  },
  {
    "type": "put",
    "url": "/registry/:id",
    "title": "update",
    "name": "Update",
    "group": "Registry",
    "version": "2.0.1",
    "description": "<p>Update a registry.</p>",
    "permission": [
      {
        "name": "admin, customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token if querying as admin (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the registry.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "privacy",
            "description": "<p>Privacy of the registry (public, unlisted or private).</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "event_date",
            "description": "<p>Date of the event attached to the registry.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>Displayed first name of the registry owner.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "last_name",
            "description": "<p>Displayed last name of the registry owner.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "co_first_name",
            "description": "<p>Displayed first name of the registry co-owner.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "co_last_name",
            "description": "<p>Displayed last name of the registry co-owner.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "address_id",
            "description": "<p>ID of the address attached to the registry.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "customer_id",
            "description": "<p>ID of the customer that ownes the registry.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "default",
            "description": "<p>Rather the registry is the customer's default one (1 or 0).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/RegistryApiController.php",
    "groupTitle": "Registry"
  },
  {
    "type": "post",
    "url": "/repo/fileexists",
    "title": "file exists",
    "name": "FileExists",
    "group": "Repo",
    "version": "2.0.1",
    "description": "<p>find out if a file or directory exists in the repository (Scope: themes:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>full path of the file you wish to write to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "preview",
            "description": "<p>which git branch to read from</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": true,
            "field": "success",
            "description": "<p>whether or not we returned successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "...",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/RepoApiController.php",
    "groupTitle": "Repo"
  },
  {
    "type": "get",
    "url": "/repo/getfile",
    "title": "get file",
    "name": "GetFile",
    "group": "Repo",
    "version": "2.0.1",
    "description": "<p>Retrieve the contents of a file in the repository (Scope: themes:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "path",
            "description": "<p>full source path of the file you wish to retrieve the contents of.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "preview",
            "description": "<p>which git branch to read from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "hash",
            "description": "<p>git hash for a specific version of the file to download</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": true,
            "field": "encode",
            "defaultValue": "false",
            "description": "<p>Whether or not to base65 encode output</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": true,
            "field": "success",
            "description": "<p>whether or not we returned successfull</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "...",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/RepoApiController.php",
    "groupTitle": "Repo"
  },
  {
    "type": "get",
    "url": "/repo/movefile",
    "title": "move file",
    "name": "MoveFile",
    "group": "Repo",
    "version": "2.0.1",
    "description": "<p>Move (or rename) a file in the repository (Scope: themes:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>full source path of the file you wish to move relative to the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dest",
            "description": "<p>full destination path relative to the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "preview",
            "description": "<p>which git branch to read from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of files and directories</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "...",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/RepoApiController.php",
    "groupTitle": "Repo"
  },
  {
    "type": "post",
    "url": "/repo/putfile",
    "title": "put file",
    "name": "PutFile",
    "group": "Repo",
    "version": "2.0.1",
    "description": "<p>Create or overwrite a file in the repo (Scope: themes:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>full path of the file you wish to write to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>plaintext data to write if not sent as multipart-form-data in a file upload</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "preview",
            "description": "<p>which git branch to read from</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": true,
            "field": "success",
            "description": "<p>whether or not we returned successfully</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "...",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/RepoApiController.php",
    "groupTitle": "Repo"
  },
  {
    "type": "get",
    "url": "/repo/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Repo",
    "version": "2.0.1",
    "description": "<p>List files from a specific branch in a specific path (Scope: themes:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "path",
            "description": "<p>path that you want to list in the repository</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "preview",
            "description": "<p>which git branch to read from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of files and directories</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "...",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/RepoApiController.php",
    "groupTitle": "Repo"
  },
  {
    "type": "post",
    "url": "/repo/",
    "title": "create",
    "name": "create",
    "group": "Repo",
    "version": "2.0.1",
    "description": "<p>Currently does nothing. Will always return 400.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "./app/protected/modules/admin/controllers/api/RepoApiController.php",
    "groupTitle": "Repo"
  },
  {
    "type": "get",
    "url": "/repo/gethistory",
    "title": "get history",
    "name": "gethistory",
    "group": "Repo",
    "version": "2.0.1",
    "description": "<p>Retrieve revision history of a given file in the repository (Scope: themes:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "path",
            "description": "<p>full path of the file you wish to get the history of.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "branch",
            "defaultValue": "preview",
            "description": "<p>which git branch to read from</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": true,
            "field": "array",
            "description": "<p>an array of previous commits to the file in question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "...",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/RepoApiController.php",
    "groupTitle": "Repo"
  },
  {
    "type": "put",
    "url": "/repo/[:id]",
    "title": "update",
    "name": "update",
    "group": "Repo",
    "version": "2.0.1",
    "description": "<p>Currently does nothing. Will always return 400. (Scope: themes:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "./app/protected/modules/admin/controllers/api/RepoApiController.php",
    "groupTitle": "Repo"
  },
  {
    "type": "get",
    "url": "/service/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Service",
    "version": "2.0.1",
    "description": "<p>List services, or fetch a specific one.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Return",
            "description": "<p>the list of services.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [{\n       \"id\": \"123\",\n       \"date_created\": \"2015-05-01 13:24:05\",\n       \"date_modified\": \"2015-05-01 13:24:05\",\n       \"name\": \"Test\",\n       \"short_description\": \"Short description\",\n       \"html_description\": \"<h1>HTML Description</h1>\",\n       \"json_credentials_description\": \"{\\\"test\\\": \\\"My Label for test\\\", \\\"test2\\\": \\\"My Label for test2\\\"}\",\n       \"status\": \"validated\",\n       \"client_id\": \"sample@aceda.com\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/ServiceApiController.php",
    "groupTitle": "Service"
  },
  {
    "type": "post",
    "url": "/servicesubscribers",
    "title": "create",
    "name": "Create",
    "group": "ServiceSubscribers",
    "version": "2.0.1",
    "description": "<p>Create a new service subscription for the current store.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service_id",
            "description": "<p>Id of the service subscribed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "credentials",
            "description": "<p>Service credentials.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>of the service subscription created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/ServicesubscribersApiController.php",
    "groupTitle": "ServiceSubscribers"
  },
  {
    "type": "delete",
    "url": "/servicesubscribers/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "ServiceSubscribers",
    "version": "2.0.1",
    "description": "<p>Delete a service subscription.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 No content\n{\n   \"code\": 200,\n   \"status\": \"No content\",\n   \"result\": \"No content\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/ServicesubscribersApiController.php",
    "groupTitle": "ServiceSubscribers"
  },
  {
    "type": "get",
    "url": "/servicesubscribers/export",
    "title": "export",
    "name": "Export",
    "group": "ServiceSubscribers",
    "version": "2.0.1",
    "description": "<p>Export ServiceSubscribers Table of the current store.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "cvs",
            "optional": false,
            "field": "result",
            "description": "<p>List of Service Subscription.</p>"
          }
        ]
      }
    },
    "filename": "./app/protected/modules/admin/controllers/api/ServicesubscribersApiController.php",
    "groupTitle": "ServiceSubscribers"
  },
  {
    "type": "get",
    "url": "/servicesubscribers/[:id]",
    "title": "read",
    "name": "Read",
    "group": "ServiceSubscribers",
    "version": "2.0.1",
    "description": "<p>List service subscriptions, or fetch a specific one.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,service_id,store_name,credentials",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "service",
            "description": "<p>subscriptions List of current store.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [{\n       \"id\": \"123\",\n       \"service_id\": \"5\",\n       \"store_name\": \"mystore\",\n       \"credentials\": \"{\\\"test\\\": \\\"My Label for test\\\", \\\"test2\\\": \\\"My Label for test2\\\"}\",\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/ServicesubscribersApiController.php",
    "groupTitle": "ServiceSubscribers"
  },
  {
    "type": "put",
    "url": "/servicesubscribers/:id",
    "title": "update",
    "name": "Update",
    "group": "ServiceSubscribers",
    "version": "2.0.1",
    "description": "<p>Update a service subscription.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "service_id",
            "description": "<p>Id of the service subscribed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "store_name",
            "description": "<p>Store that subscribed to the service.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "credentials",
            "description": "<p>Service credentials.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 No content\n{\n   \"code\": 200,\n   \"status\": \"No content\",\n   \"result\": \"No content\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/ServicesubscribersApiController.php",
    "groupTitle": "ServiceSubscribers"
  },
  {
    "type": "get",
    "url": "/service/subscription",
    "title": "subscription",
    "name": "Subscription",
    "group": "Service",
    "version": "2.0.1",
    "description": "<p>Get the services' subscriptions of the current store.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [{\n       \"id\": \"\",\n       \"date_created\": \"2015-05-01 13:24:05\",\n       \"date_modified\": \"2015-05-01 13:24:05\",\n       \"store_name\": \"sample\",\n       \"service_id\": \"42\",\n       \"credentials\": \"{\\\"test\\\":\\\"84\\\",\\\"test2\\\":\\\"42\\\"}\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/ServiceApiController.php",
    "groupTitle": "Service"
  },
  {
    "type": "post",
    "url": "/SessionCart/Amazon",
    "title": "amazon",
    "name": "Amazon",
    "group": "SessionCart",
    "version": "2.0.1",
    "description": "<p>Amazon Action</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartApiController.php",
    "groupTitle": "SessionCart"
  },
  {
    "type": "get",
    "url": "/SessionCart/Checkout",
    "title": "checkout",
    "name": "Checkout",
    "group": "SessionCart",
    "version": "2.0.1",
    "description": "<p>Checkout Action</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newsletter",
            "description": "<p>Newsletter (0 / 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email (Optional if <code>newsletter</code> is missing)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartApiController.php",
    "groupTitle": "SessionCart"
  },
  {
    "type": "post",
    "url": "/SessionCartCoupon",
    "title": "create",
    "name": "Create",
    "group": "SessionCartCoupon",
    "version": "2.0.1",
    "description": "<p>Create SessionCartCoupon entry.</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartcouponApiController.php",
    "groupTitle": "SessionCartCoupon"
  },
  {
    "type": "delete",
    "url": "/SessionCartCoupon/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "SessionCartCoupon",
    "version": "2.0.1",
    "description": "<p>Delete SessionCartCoupon entry by ID</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartcouponApiController.php",
    "groupTitle": "SessionCartCoupon"
  },
  {
    "type": "get",
    "url": "/SessionCartCoupon/[:id]",
    "title": "read",
    "name": "Read",
    "group": "SessionCartCoupon",
    "version": "2.0.1",
    "description": "<p>Fetches SessionCartCoupon(s).</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "SessionCartCoupon",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"code\": 'PROMO1',\n       },\n       ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartcouponApiController.php",
    "groupTitle": "SessionCartCoupon"
  },
  {
    "type": "get",
    "url": "/SessionCartCoupon/RefreshCoupons",
    "title": "refresh",
    "name": "RefreshCoupons",
    "group": "SessionCartCoupon",
    "version": "2.0.1",
    "description": "<p>Refresh Coupons</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartcouponApiController.php",
    "groupTitle": "SessionCartCoupon"
  },
  {
    "type": "put",
    "url": "/SessionCartCoupon/:id",
    "title": "update",
    "name": "Update",
    "group": "SessionCartCoupon",
    "version": "2.0.1",
    "description": "<p>Update SessionCartCoupon entry by ID.</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartcouponApiController.php",
    "groupTitle": "SessionCartCoupon"
  },
  {
    "type": "post",
    "url": "/SessionCart",
    "title": "create",
    "name": "Create",
    "group": "SessionCart",
    "version": "2.0.1",
    "description": "<p>Creates SessionCart.</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "item_count",
            "description": "<p>Item count</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subtotal",
            "description": "<p>Subtotal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taxableSubtotal",
            "description": "<p>Taxable subtotal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartApiController.php",
    "groupTitle": "SessionCart"
  },
  {
    "type": "delete",
    "url": "/SessionCart",
    "title": "delete",
    "name": "Delete",
    "group": "SessionCart",
    "version": "2.0.1",
    "description": "<p>Delete SessionCart</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartApiController.php",
    "groupTitle": "SessionCart"
  },
  {
    "type": "post",
    "url": "/SessionCartItem",
    "title": "create",
    "name": "Create",
    "group": "SessionCartItem",
    "version": "2.0.1",
    "description": "<p>Create SessionCartItem entry.</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quanity</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartitemApiController.php",
    "groupTitle": "SessionCartItem"
  },
  {
    "type": "delete",
    "url": "/SessionCartItem/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "SessionCartItem",
    "version": "2.0.1",
    "description": "<p>Delete SessionCartItem entry by ID</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartitemApiController.php",
    "groupTitle": "SessionCartItem"
  },
  {
    "type": "get",
    "url": "/SessionCartItem/[:id]",
    "title": "read",
    "name": "Read",
    "group": "SessionCartItem",
    "version": "2.0.1",
    "description": "<p>Fetches SessionCartItem(s).</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "SessionCartItem",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"product_id\": 2,\n           \"quantity\": \"1\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartitemApiController.php",
    "groupTitle": "SessionCartItem"
  },
  {
    "type": "put",
    "url": "/SessionCartItem/:id",
    "title": "update",
    "name": "Update",
    "group": "SessionCartItem",
    "version": "2.0.1",
    "description": "<p>Update SessionCartItem entry by ID.</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quanity</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartitemApiController.php",
    "groupTitle": "SessionCartItem"
  },
  {
    "type": "get",
    "url": "/SessionCart",
    "title": "read",
    "name": "Read",
    "group": "SessionCart",
    "version": "2.0.1",
    "description": "<p>Returns SessionCart array.</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "SessionCart",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"item_count\": 0,\n           \"subtotal\": \"0.00\",\n           \"taxableSubtotal\": \"0.00\",\n           \"items\": [],\n           \"coupons\": [],\n           \"globals\": []\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartApiController.php",
    "groupTitle": "SessionCart"
  },
  {
    "type": "put",
    "url": "/SessionCart",
    "title": "update",
    "name": "Update",
    "group": "SessionCart",
    "version": "2.0.1",
    "description": "<p>Updates SessionCart.</p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "item_count",
            "description": "<p>Item count</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subtotal",
            "description": "<p>Subtotal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "taxableSubtotal",
            "description": "<p>Taxable subtotal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SessioncartApiController.php",
    "groupTitle": "SessionCart"
  },
  {
    "type": "get",
    "url": "/setupprogress/GetReadySteps",
    "title": "get ready steps",
    "name": "GetReadySteps",
    "group": "Setupprogress",
    "version": "2.0.1",
    "description": "<p>Returns array of steps and progress</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n          'business-info',\n           ...\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/SetupprogressApiController.php",
    "groupTitle": "Setupprogress"
  },
  {
    "type": "get",
    "url": "/setupprogress/GetSteps",
    "title": "get steps",
    "name": "GetSteps",
    "group": "Setupprogress",
    "version": "2.0.1",
    "description": "<p>Returns array of steps</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n          'business-info' : ...\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/admin/controllers/api/SetupprogressApiController.php",
    "groupTitle": "Setupprogress"
  },
  {
    "type": "get",
    "url": "/api/shippingexception/count",
    "title": "count",
    "name": "Count",
    "group": "ShippingException",
    "version": "2.0.1",
    "description": "<p>Return the number of shipping exceptions for a site.</p>",
    "permission": [
      {
        "name": "admin, customer, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of element found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": {\n       \"count\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingexceptionApiController.php",
    "groupTitle": "ShippingException"
  },
  {
    "type": "post",
    "url": "/api/shippingexception",
    "title": "create",
    "name": "Create",
    "group": "ShippingException",
    "version": "2.0.1",
    "description": "<p>Create a new shipping exception.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shipping_method_id",
            "description": "<p>ID of the shipping method this exception is attached to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the exception (Must be part of <code>Region</code>).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the exception (Must be part of <code>Region</code>).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"code\": 201,\n    \"status\": \"Created\",\n    \"result\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingexceptionApiController.php",
    "groupTitle": "ShippingException"
  },
  {
    "type": "delete",
    "url": "/api/shippingexception/:id",
    "title": "delete",
    "name": "Delete",
    "group": "ShippingException",
    "version": "2.0.1",
    "description": "<p>Delete a shipping exception and just a shipping exception.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingexceptionApiController.php",
    "groupTitle": "ShippingException"
  },
  {
    "type": "get",
    "url": "/api/shippingexception/export",
    "title": "export",
    "name": "Export",
    "group": "ShippingException",
    "version": "2.0.1",
    "description": "<p>Export in CSV the shipping exception's list returned.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "CSV",
            "optional": false,
            "field": "CSV",
            "description": "<p>content of the found elements.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  <CSV CONTENT>",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingexceptionApiController.php",
    "groupTitle": "ShippingException"
  },
  {
    "type": "get",
    "url": "/api/shippingexception/[:id]",
    "title": "read",
    "name": "Read",
    "group": "ShippingException",
    "version": "2.0.1",
    "description": "<p>List the shipping exceptions available for a site, where the shipping is not allowed.</p>",
    "permission": [
      {
        "name": "admin, customer, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the shipping method.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>Last time the record has been modified.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shipping_method_id",
            "description": "<p>ID of the shipping method this exception is attached to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country of the exception.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of the exception.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 200,\n      \"status\": \"OK\",\n      \"num_total\": 2,\n      \"result\": [\n          {\n              \"id\": 37,\n              \"date_created\": \"2015-06-26 11:27:49\",\n              \"date_modified\": \"2015-06-26 11:27:49\",\n              \"shipping_method_id\": \"13\",\n              \"country\": \"US\",\n              \"state\": \"AR\"\n          },\n          {\n              \"id\": 38,\n              \"date_created\": \"2015-06-26 11:27:49\",\n              \"date_modified\": \"2015-06-26 11:27:49\",\n              \"shipping_method_id\": \"13\",\n              \"country\": \"US\",\n              \"state\": \"AK\"\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingexceptionApiController.php",
    "groupTitle": "ShippingException"
  },
  {
    "type": "post",
    "url": "/api/shippingexception/:id",
    "title": "update",
    "name": "Update",
    "group": "ShippingException",
    "version": "2.0.1",
    "description": "<p>Update a shipping exception.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shipping_method_id",
            "description": "<p>ID of the shipping method this exception is attached to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>Country of the exception (Must be part of <code>Region</code>).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>State of the exception (Must be part of <code>Region</code>).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingexceptionApiController.php",
    "groupTitle": "ShippingException"
  },
  {
    "type": "post",
    "url": "/api/shippingmethod/:id/calculate",
    "title": "calculate",
    "name": "Calculate",
    "group": "ShippingMethod",
    "version": "2.0.1",
    "description": "<p>Same method as <code>Rate</code> but add taxes with the rate.</p>",
    "permission": [
      {
        "name": "admin, customer, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtotal",
            "description": "<p>Total price of the product to be evaluated.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quantity",
            "description": "<p>Number of product to be evaluated.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shipping_zip",
            "description": "<p>ZIP destination of the order (If not specified, a <code>shipping_address_id</code> must be).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "shipping_address_id",
            "description": "<p>Address ID (If not specified, a <code>shipping_zip</code> must be).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tax",
            "description": "<p>Tax total with shipping.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 200,\n      \"status\": \"OK\",\n      \"result\": {\n          \"tax\": \"42\"\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingmethodApiController.php",
    "groupTitle": "ShippingMethod"
  },
  {
    "type": "get",
    "url": "/api/shippingmethod/count",
    "title": "count",
    "name": "Count",
    "group": "ShippingMethod",
    "version": "2.0.1",
    "description": "<p>Return the number of shipping methods for a site.</p>",
    "permission": [
      {
        "name": "admin, customer, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of element found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": {\n       \"count\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingmethodApiController.php",
    "groupTitle": "ShippingMethod"
  },
  {
    "type": "post",
    "url": "/api/shippingmethod",
    "title": "create",
    "name": "Create",
    "group": "ShippingMethod",
    "version": "2.0.1",
    "description": "<p>Create a new shipping method.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the method.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "carrier_method",
            "description": "<p>Carrier method is a field attached to generate link to related APIs -- <em><strong>deprecated</strong></em>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rule_by",
            "description": "<p>Rather a method is ruled by price or quantity ranges (bottom_price, bottom_quantity).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "defaultValue": "disabled",
            "description": "<p>Status of the method (active, disabled).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bottom_days_range",
            "defaultValue": "0",
            "description": "<p>Define a default bottom day range in case no API is used to determine the rate or the return of this API failed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "top_days_range",
            "defaultValue": "0",
            "description": "<p>Define a default top day range in case no API is used to determine the rate or the return of this API failed.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"code\": 201,\n    \"status\": \"Created\",\n    \"result\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingmethodApiController.php",
    "groupTitle": "ShippingMethod"
  },
  {
    "type": "delete",
    "url": "/api/shippingmethod/:id",
    "title": "delete",
    "name": "Delete",
    "group": "ShippingMethod",
    "version": "2.0.1",
    "description": "<p>Delete a shipping method and just a shipping method.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingmethodApiController.php",
    "groupTitle": "ShippingMethod"
  },
  {
    "type": "get",
    "url": "/api/shippingmethod/export",
    "title": "export",
    "name": "Export",
    "group": "ShippingMethod",
    "version": "2.0.1",
    "description": "<p>Export in CSV the shipping method's list returned.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "CSV",
            "optional": false,
            "field": "CSV",
            "description": "<p>content of the found elements.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  <CSV CONTENT>",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingmethodApiController.php",
    "groupTitle": "ShippingMethod"
  },
  {
    "type": "post",
    "url": "/api/shippingmethod/:id/rate",
    "title": "rate",
    "name": "Rate",
    "group": "ShippingMethod",
    "version": "2.0.1",
    "description": "<p>Return the shipping price.</p>",
    "permission": [
      {
        "name": "admin, customer, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>Total price of the product to be evaluated.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "quantity",
            "description": "<p>Number of product to be evaluated.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rate",
            "description": "<p>Price estimation for shipping.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "date_range",
            "description": "<p>Range of date within what the order should arrive if ordered now.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n      \"code\": 200,\n      \"status\": \"OK\",\n      \"result\": {\n          \"rate\": \"3.69\",\n          \"date_range\": [\n              \"2015-08-18\",\n              \"2015-08-19\"\n          ]\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingmethodApiController.php",
    "groupTitle": "ShippingMethod"
  },
  {
    "type": "get",
    "url": "/api/shippingmethod/[:id]",
    "title": "read",
    "name": "Read",
    "group": "ShippingMethod",
    "version": "2.0.1",
    "description": "<p>List the shipping methods available for a site.</p>",
    "permission": [
      {
        "name": "admin, customer, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the shipping method.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>Last time the record has been modified.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "carrierMethods",
            "description": "<p>CarrierMethods List of the carrier methods available -- <em><strong>deprecated</strong></em>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the method.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "carrier_method",
            "description": "<p>Carrier method is a field attached to generate link to related APIs -- <em><strong>deprecated</strong></em>.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the method (active, disabled).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rule_by",
            "description": "<p>Rather a method is ruled by price or quantity ranges (bottom_price, bottom_quantity).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bottom_days_range",
            "description": "<p>Define a default bottom day range in case no API is used to determine the rate or the return of this API failed.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "top_days_range",
            "description": "<p>Define a default top day range in case no API is used to determine the rate or the return of this API failed.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": {\n        \"code\": 200,\n        \"status\": \"OK\",\n        \"num_total\": 1,\n        \"result\": [\n            {\n                \"id\": 13,\n                \"date_created\": \"2015-06-18 14:40:51\",\n                \"date_modified\": \"2015-07-09 15:48:41\",\n                \"carrierMethods\": {\n                    \"UPSGround\": \"UPSGround\",\n                    \"UPSNextDayAir\": \"UPSNextDayAir\"\n                },\n                \"name\": \"Default shipping\",\n                \"carrier_method\": \"UPSGround\",\n                \"status\": \"active\",\n                \"rule_by\": \"bottom_price\",\n                \"bottom_days_range\": \"1\",\n                \"top_days_range\": \"2\"\n            }\n        ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingmethodApiController.php",
    "groupTitle": "ShippingMethod"
  },
  {
    "type": "post",
    "url": "/api/shippingmethod/:id",
    "title": "update",
    "name": "Update",
    "group": "ShippingMethod",
    "version": "2.0.1",
    "description": "<p>Update a shipping method.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the method.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "carrier_method",
            "description": "<p>Carrier method is a field attached to generate link to related APIs -- <em><strong>deprecated</strong></em>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rule_by",
            "description": "<p>Rather a method is ruled by price or quantity ranges (bottom_price, bottom_quantity).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "defaultValue": "disabled",
            "description": "<p>Status of the method (active, disabled).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bottom_days_range",
            "defaultValue": "0",
            "description": "<p>Define a default bottom day range in case no API is used to determine the rate or the return of this API failed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "top_days_range",
            "defaultValue": "0",
            "description": "<p>Define a default top day range in case no API is used to determine the rate or the return of this API failed.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingmethodApiController.php",
    "groupTitle": "ShippingMethod"
  },
  {
    "type": "get",
    "url": "/api/shippingrule/count",
    "title": "count",
    "name": "Count",
    "group": "ShippingRule",
    "version": "2.0.1",
    "description": "<p>Return the number of shipping rules for a site. (Scope: settings:read)</p>",
    "permission": [
      {
        "name": "admin, customer, guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of element found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"num_total\": 1,\n    \"result\": {\n       \"count\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingruleApiController.php",
    "groupTitle": "ShippingRule"
  },
  {
    "type": "post",
    "url": "/api/shippingrule",
    "title": "create",
    "name": "Create",
    "group": "ShippingRule",
    "version": "2.0.1",
    "description": "<p>Create a new shipping rule.<br /><br /> Each gap between the range will return a shipping estimate of $0.<br /> An open range will be infinite (ie. $10 - , will result in: $10 and above range).<br /><br /> A rule can only apply to either quantity or price range, but not both on one rule. (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "method_id",
            "description": "<p>ID of the shipping method this rule is attached to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bottom_price",
            "description": "<p>Minimum price of the range. If not provided, <code>bottom_quantity</code> must be set.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "top_price",
            "description": "<p>Maximum price range. Can be left empty to open the range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bottom_quantity",
            "description": "<p>Minimum quantity range. If not provided, <code>bottom price</code> must be set.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "top_quantity",
            "description": "<p>Maximum quantity range. Can be left empty to open the range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "shipping",
            "description": "<p>Determine a flat rate for the range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "percentage",
            "description": "<p>Determine a percentage for the range</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"code\": 201,\n    \"status\": \"Created\",\n    \"result\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingruleApiController.php",
    "groupTitle": "ShippingRule"
  },
  {
    "type": "delete",
    "url": "/api/shippingrule/:id",
    "title": "delete",
    "name": "Delete",
    "group": "ShippingRule",
    "version": "2.0.1",
    "description": "<p>Delete a shipping rule and just a shipping rule. (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingruleApiController.php",
    "groupTitle": "ShippingRule"
  },
  {
    "type": "get",
    "url": "/api/shippingrule/export",
    "title": "export",
    "name": "Export",
    "group": "ShippingRule",
    "version": "2.0.1",
    "description": "<p>Export in CSV the shipping rule's list returned. (Scope: settings:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "CSV",
            "optional": false,
            "field": "CSV",
            "description": "<p>content of the found elements.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  <CSV CONTENT>",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingruleApiController.php",
    "groupTitle": "ShippingRule"
  },
  {
    "type": "get",
    "url": "/api/shippingrule/[:id]",
    "title": "read",
    "name": "Read",
    "group": "ShippingRule",
    "version": "2.0.1",
    "description": "<p>List the shipping rules available for a site. (Scope: settings:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the shipping method.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>Last time the record has been modified.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>Creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "method_id",
            "description": "<p>ID of the shipping method this rule is attached to.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "priceRange",
            "description": "<p>Price range beautified.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "quantityRange",
            "description": "<p>Quantity range beautified.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bottom_price",
            "description": "<p>Minimum to qualitfy for that range.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "top_price",
            "description": "<p>Maximum price to qualitfy for that range.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bottom_quantity",
            "description": "<p>Minimum quantity to qualitfy for that range.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "top_quantity",
            "description": "<p>Maximum quantity to qualitfy for that range.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "percentage",
            "description": "<p>Percentage to charge in that range.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "shipping",
            "description": "<p>Flate rate to charge in that range.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"code\": 200,\n       \"status\": \"OK\",\n       \"num_total\": 3,\n       \"result\": [\n           {\n               \"id\": 52,\n               \"date_created\": \"2015-06-25 16:11:10\",\n               \"date_modified\": \"2015-07-09 15:48:42\",\n               \"method_id\": \"13\",\n               \"priceRange\": \"$0.00 - $0.98\",\n               \"quantityRange\": \" - \",\n               \"bottom_price\": \"0.00\",\n               \"top_price\": \"0.98\",\n               \"percentage\": \"1\"\n           },\n           {\n               \"id\": 53,\n               \"date_created\": \"2015-06-26 11:27:48\",\n               \"date_modified\": \"2015-07-09 15:48:42\",\n               \"method_id\": \"13\",\n               \"priceRange\": \"$0.99 - $200\",\n               \"quantityRange\": \" - \",\n               \"bottom_price\": \"0.99\",\n               \"top_price\": \"200\",\n               \"percentage\": \"3\"\n           },\n           {\n               \"id\": 54,\n               \"date_created\": \"2015-06-26 11:27:48\",\n               \"date_modified\": \"2015-07-09 15:48:42\",\n               \"method_id\": \"13\",\n               \"priceRange\": \"$0.98 - $0.99\",\n               \"quantityRange\": \" - \",\n               \"shipping\": \"14\",\n               \"bottom_price\": \"0.98\",\n               \"top_price\": \"0.99\"\n           },\n           {\n               \"id\": 55,\n               \"date_created\": \"2015-08-17 09:57:51\",\n               \"date_modified\": \"2015-08-17 09:57:51\",\n               \"method_id\": \"14\",\n               \"priceRange\": \"$ - $\",\n               \"quantityRange\": \"0 - 10\",\n               \"shipping\": \"5\",\n               \"bottom_quantity\": \"0\",\n               \"top_quantity\": \"10\"\n           }\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingruleApiController.php",
    "groupTitle": "ShippingRule"
  },
  {
    "type": "post",
    "url": "/api/shippingrule/:id",
    "title": "update",
    "name": "Update",
    "group": "ShippingRule",
    "version": "2.0.1",
    "description": "<p>Update a shipping rule. (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "method_id",
            "description": "<p>ID of the shipping method this rule is attached to.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bottom_price",
            "description": "<p>Minimum price of the range. If not provided, <code>bottom_quantity</code> must be set.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "top_price",
            "description": "<p>Maximum price range. Can be left empty to open the range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "bottom_quantity",
            "description": "<p>Minimum quantity range. If not provided, <code>bottom price</code> must be set.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "top_quantity",
            "description": "<p>Maximum quantity range. Can be left empty to open the range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "shipping",
            "description": "<p>Determine a flat rate for the range.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "percentage",
            "description": "<p>Determine a percentage for the range</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ShippingruleApiController.php",
    "groupTitle": "ShippingRule"
  },
  {
    "type": "post",
    "url": "/site/amzvalidation",
    "title": "amazon validation",
    "name": "Amazon_Validation",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>Verify email to be used by Amazon SES.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>A valid email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "get",
    "url": "/site/authentication",
    "title": "authentication",
    "name": "Authentication",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>Password matching method for site protection</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>true if the store is protected or false if not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"Authenticated\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "get",
    "url": "/site/defrost",
    "title": "defrost",
    "name": "Defrost",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>Defrost created site and launch deep creation</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uid",
            "description": "<p>User ID of the owner in base 12.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sid",
            "description": "<p>Site ID in base 12.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "og:test",
            "description": "<p>Meta tags test.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"XXXXX\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "get",
    "url": "/site/headers",
    "title": "get headers",
    "name": "Get_Headers",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>Get the opengraph tags that are used across various social networks. (facebook, twitter... etc)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).  This is found in your admin profile.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,firstname,lastname,email,phone,profile_picture,currentsite",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "og-type",
            "description": "<p>Value of your og:type</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "og-title",
            "description": "<p>page title used on facebook</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "og-description",
            "description": "<p>description to be used when sharing this page in a social network</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "og-site_name",
            "description": "<p>Name of you site.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "og-url",
            "description": "<p>The URL being shared.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "og-image",
            "description": "<p>An image or set of images used to represent your site in association with url shared.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "twitter-card",
            "description": "<p>The twitter card</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "twitter-description",
            "description": "<p>Description used when tweeting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "twitter-title",
            "description": "<p>title of your tweet</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "twitter-image",
            "description": "<p>Image for your tweet</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "twitter-site",
            "description": "<p>Name of twitter handle</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": {\n        \"og:type\": \"website\",\n        \"og:title\": \"garrett20150508\",\n        \"og:description\": \"this is meta description\",\n        \"og:site_name\": \"garrett20150508\",\n        \"og:url\": \"http://admin.acendev/preview/eb5a96e39c5c5bdc99ced11fa2abeee6/api/site/headers?access_token=66180d3724164a71ca37f757f779daa8667d3d7e\",\n        \"og:image\": [\n          \"this is seo image\"\n        ],\n        \"twitter:card\": \"summary_large_image\",\n        \"twitter:description\": \"this is meta description\",\n        \"twitter:title\": \"garrett20150508\",\n        \"twitter:image\": [\n          \"this is seo image\"\n        ],\n        \"twitter:site\": \"@twitter\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "get",
    "url": "/site/invitations",
    "title": "invitations",
    "name": "Invitations",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>Get sites invitations. (Scope: settings:read)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Invitations",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"num_total\": 1,\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": [{\n        \"id\": \"24\",\n        \"email\": \"sample@acenda.com\",\n        \"date_created\": \"2015-05-28 16:34:30\",\n        \"date_modified\": \"2015-05-28 16:34:37\"\n    },\n    {\n        ...\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "get",
    "url": "/site/ispaypalprotected",
    "title": "isPaypalProtected",
    "name": "IsPaypalProtected",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>Check rather a site paypal account is in sandbox mode or not</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>true if the account is in sandbox or false if not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "get",
    "url": "/site/isprotected",
    "title": "isProtected",
    "name": "IsProtected",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>Check rather a site a password protected or nots</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "return",
            "description": "<p>true if the store is protected or false if not.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "post",
    "url": "/site/join",
    "title": "join",
    "name": "Join",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>Validation of invitation token to be an admin</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "store",
            "description": "<p>Store name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token sent by email as invitation.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "post",
    "url": "/site/pending",
    "title": "pending",
    "name": "Pending",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>I don't know what is this method made for</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's invitation email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's invitation token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "get",
    "url": "/site/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>Get a sites records.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "site",
            "description": "<p>Array of record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"num_total\": 1,\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": [{\n        \"hostname\": \"acendatest.acenda.com\",\n        \"id\": \"24\",\n        \"name\": \"acendatest\",\n        \"title\": \"acendatest\",\n        \"bones\": \"store_base\",\n        \"date_created\": \"2015-05-28 16:34:30\",\n        \"date_modified\": \"2015-05-28 16:34:37\"\n    },\n    {\n        ...\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "post",
    "url": "/site/revoke",
    "title": "revoke",
    "name": "Revoke",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>Revoke a user from being admin of a site. Must be another user than the one requesting.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"num_total\": 1,\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": \"User revoked\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "post",
    "url": "/site/uninvite",
    "title": "uninvite",
    "name": "Uninvite",
    "group": "Site",
    "version": "2.0.1",
    "description": "<p>Cancel the invitation sent to an email address.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Invite ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"num_total\": 1,\n    \"code\": 200,\n    \"status\": \"OK\",\n    \"result\": \"Uninvited\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "get",
    "url": "/site/plugins",
    "title": "plugins",
    "name": "plugins",
    "group": "Site",
    "version": "2.0.1",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Return the list of plugins having access to a site and their rights.  (Scope: settings:read)</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>of PluginAccount having access to the site.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n      {\n          \"id\":42,\n          \"date_created\":\"2015-10-23 11:06:24\",\n          \"date_modified\":\"2015-10-23 11:06:37\",\n          \"client_id\":\"test@acenda.com\",\n          \"scope\":\"reports:write|reports:read\"\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/SiteApiController.php",
    "groupTitle": "Site"
  },
  {
    "type": "post",
    "url": "/Taxcountry",
    "title": "create",
    "name": "Create",
    "group": "TaxCountry",
    "version": "2.0.1",
    "description": "<p>Create Taxcountry entry. (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Entry's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mode",
            "description": "<p>Mode (automatic or region)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "default_tax",
            "description": "<p>Default Tax</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tax_shipping",
            "description": "<p>Tax Shipping</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>Full Name</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxcountryApiController.php",
    "groupTitle": "TaxCountry"
  },
  {
    "type": "delete",
    "url": "/Taxcountry/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "TaxCountry",
    "version": "2.0.1",
    "description": "<p>Delete Taxcountry entry by ID (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxcountryApiController.php",
    "groupTitle": "TaxCountry"
  },
  {
    "type": "get",
    "url": "/Taxcountry/[:id]",
    "title": "read",
    "name": "Read",
    "group": "TaxCountry",
    "version": "2.0.1",
    "description": "<p>Fetches country tax(es). (Scope: settings:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Tax",
            "description": "<p>(es)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2015-07-10 11:28:03\",\n           \"date_modified\": \"2015-07-11 13:18:58\",\n           \"name\": \"US\",\n           \"mode\": \"automatic\",\n           \"default_tax\": 0.00\"\",\n           \"tax_shipping\": \"0.00\",\n           \"full_name\": \"United States\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxcountryApiController.php",
    "groupTitle": "TaxCountry"
  },
  {
    "type": "put",
    "url": "/Taxcountry/:id",
    "title": "update",
    "name": "Update",
    "group": "TaxCountry",
    "version": "2.0.1",
    "description": "<p>Update Taxcountry entry by ID. (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Entry's name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mode",
            "description": "<p>Mode (automatic or region)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "default_tax",
            "description": "<p>Default Tax</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tax_shipping",
            "description": "<p>Tax Shipping</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "full_name",
            "description": "<p>Full Name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxcountryApiController.php",
    "groupTitle": "TaxCountry"
  },
  {
    "type": "post",
    "url": "/Taxdata/Calculate/[:id]",
    "title": "calculate",
    "name": "Calculate",
    "group": "TaxData",
    "version": "2.0.1",
    "description": "<p>Computes a tax rate based on shipping zip or shipping address ID.</p>",
    "permission": [
      {
        "name": "guest, customer, admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "shipping_rate",
            "description": "<p>Shipping rate</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "subtotal",
            "description": "<p>Subtotal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shipping_zip",
            "description": "<p>Shipping Zip, if not provided, <code>shipping_address_id</code> must be set.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "shipping_address_id",
            "description": "<p>Shipping Address ID, if not provided, <code>shipping_zip</code> must be set.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n          { 'tax' : '4.99' }\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxdataApiController.php",
    "groupTitle": "TaxData"
  },
  {
    "type": "post",
    "url": "/Taxoverwrite",
    "title": "create",
    "name": "Create",
    "group": "TaxOverwrite",
    "version": "2.0.1",
    "description": "<p>Create Taxoverwrite entry. (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "country_id",
            "description": "<p>Country ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State (2-letter format)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tax_shipping",
            "description": "<p>Tax Shipping (0 or 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tax",
            "description": "<p>Tax</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Zip code</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxoverwriteApiController.php",
    "groupTitle": "TaxOverwrite"
  },
  {
    "type": "delete",
    "url": "/Taxoverwrite/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "TaxOverwrite",
    "version": "2.0.1",
    "description": "<p>Delete Taxoverwrite entry by ID (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxoverwriteApiController.php",
    "groupTitle": "TaxOverwrite"
  },
  {
    "type": "get",
    "url": "/Taxoverwrite/[:id]",
    "title": "read",
    "name": "Read",
    "group": "TaxOverwrite",
    "version": "2.0.1",
    "description": "<p>Fetches Taxoverwrite(s). (Scope: settings:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Taxoverwrite",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2015-07-10 11:28:03\",\n           \"date_modified\": \"2015-07-11 13:18:58\",\n           \"country_id\": \"1\",\n           \"state\": \"AK\",\n           \"tax_shipping\": \"0\",\n           \"tax\": \"1.12\",\n           \"zipcode\" : \"85123\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxoverwriteApiController.php",
    "groupTitle": "TaxOverwrite"
  },
  {
    "type": "put",
    "url": "/Taxoverwrite/:id",
    "title": "update",
    "name": "Update",
    "group": "TaxOverwrite",
    "version": "2.0.1",
    "description": "<p>Update Taxoverwrite entry by ID. (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "country_id",
            "description": "<p>Country ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State (2-letter format)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tax_shipping",
            "description": "<p>Tax Shipping (0 or 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tax",
            "description": "<p>Tax</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Zip code</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxoverwriteApiController.php",
    "groupTitle": "TaxOverwrite"
  },
  {
    "type": "post",
    "url": "/Taxregion",
    "title": "create",
    "name": "Create",
    "group": "TaxRegion",
    "version": "2.0.1",
    "description": "<p>Create Taxregion entry. (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "country_id",
            "description": "<p>Country ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State (2-letter format)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tax_shipping",
            "description": "<p>Tax Shipping (0 or 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tax",
            "description": "<p>Tax</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxregionApiController.php",
    "groupTitle": "TaxRegion"
  },
  {
    "type": "delete",
    "url": "/Taxregion/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "TaxRegion",
    "version": "2.0.1",
    "description": "<p>Delete Taxregion entry by ID (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxregionApiController.php",
    "groupTitle": "TaxRegion"
  },
  {
    "type": "get",
    "url": "/Taxregion/[:id]",
    "title": "read",
    "name": "Read",
    "group": "TaxRegion",
    "version": "2.0.1",
    "description": "<p>Fetches region tax(es). (Scope: settings:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Region",
            "description": "<p>Tax(es)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2015-07-10 11:28:03\",\n           \"date_modified\": \"2015-07-11 13:18:58\",\n           \"country_id\": \"1\",\n           \"state\": \"AK\",\n           \"tax_shipping\": \"0\",\n           \"tax\": \"1.12\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxregionApiController.php",
    "groupTitle": "TaxRegion"
  },
  {
    "type": "put",
    "url": "/Taxregion/:id",
    "title": "update",
    "name": "Update",
    "group": "TaxRegion",
    "version": "2.0.1",
    "description": "<p>Update Taxregion entry by ID. (Scope: settings:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "country_id",
            "description": "<p>Country ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State (2-letter format)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tax_shipping",
            "description": "<p>Tax Shipping (0 or 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tax",
            "description": "<p>Tax</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/TaxregionApiController.php",
    "groupTitle": "TaxRegion"
  },
  {
    "type": "post",
    "url": "/theme/:theme_id/clearchanges",
    "title": "clear changes",
    "name": "ClearChangesThemeConfig",
    "group": "ThemeConfig",
    "version": "2.0.1",
    "description": "<p>Removes the temporary changes made via /override (Scope: themes:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "style",
            "description": "<p>Style id (the default value is 'current') (GET)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeconfigApiController.php",
    "groupTitle": "ThemeConfig"
  },
  {
    "type": "post",
    "url": "/theme/:theme_id/config",
    "title": "create",
    "name": "CreateThemeConfig",
    "group": "ThemeConfig",
    "version": "2.0.1",
    "description": "<p>Creates a new style</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "style",
            "description": "<p>Style id (the default value is 'current') (GET)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>Array of modifications (POST)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeconfigApiController.php",
    "groupTitle": "ThemeConfig"
  },
  {
    "type": "post",
    "url": "/theme/:theme_id/override",
    "title": "override",
    "name": "Override",
    "group": "ThemeConfig",
    "version": "2.0.1",
    "description": "<p>Overrides style settings (Scope: themes:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "style",
            "description": "<p>Style id (the default value is 'current') (GET)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeconfigApiController.php",
    "groupTitle": "ThemeConfig"
  },
  {
    "type": "get",
    "url": "/theme/:theme_id",
    "title": "read",
    "name": "Read",
    "group": "ThemeConfig",
    "version": "2.0.1",
    "description": "<p>Returns themeconfig. (Scope: themes:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "style",
            "description": "<p>Style id (the default value is 'current') (GET)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Themeconfig",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": {\n      \"current\": {\n          \"colors\": {\n              \"brand\": {\n                  \"primary-brand-color\": {\n                      \"type\": \"color\",\n                      \"value\": \"E7214C\"\n                  }\n              },\n              ...\n          }\n      }\n    }\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeconfigApiController.php",
    "groupTitle": "ThemeConfig"
  },
  {
    "type": "pust",
    "url": "/theme/:theme_id/config",
    "title": "update",
    "name": "UpdateThemeConfig",
    "group": "ThemeConfig",
    "version": "2.0.1",
    "description": "<p>Updates an existing style</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "style",
            "description": "<p>Style id (the default value is 'current') (GET)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "array",
            "description": "<p>Array of modifications (POST)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeconfigApiController.php",
    "groupTitle": "ThemeConfig"
  },
  {
    "type": "post",
    "url": "/theme",
    "title": "create",
    "name": "Create",
    "group": "Theme",
    "version": "2.0.1",
    "description": "<p>Create Theme. (Scope: themes:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "theme_store_id",
            "description": "<p>Id From Theme Store</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Theme name</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "current",
            "description": "<p>1 for current, 0 for non-current</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeApiController.php",
    "groupTitle": "Theme"
  },
  {
    "type": "PUT",
    "url": "/theme/ID/current",
    "title": "current",
    "name": "Current",
    "group": "Theme",
    "version": "2.0.1",
    "description": "<p>Set a theme to current (Scope: themes:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "theme_store_id",
            "description": "<p>Theme store id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"Current Theme Switched\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeApiController.php",
    "groupTitle": "Theme"
  },
  {
    "type": "delete",
    "url": "/theme/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "Theme",
    "version": "2.0.1",
    "description": "<p>Delete Theme by ID (Scope: themes:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeApiController.php",
    "groupTitle": "Theme"
  },
  {
    "type": "post",
    "url": "/theme/download",
    "title": "download",
    "name": "Download",
    "group": "Theme",
    "version": "2.0.1",
    "description": "<p>Download theme to your site (+ create entry) (Scope: themes:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "theme_store_id",
            "description": "<p>Theme Store ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "force",
            "description": "<p>set it to true and it will download the theme regarless if it were already installed.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"Theme successfully downloaded\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeApiController.php",
    "groupTitle": "Theme"
  },
  {
    "type": "get",
    "url": "/theme/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Theme",
    "version": "2.0.1",
    "description": "<p>Fetches Theme(s). (Scope: themes:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Theme",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2015-07-10 11:28:03\",\n           \"date_modified\": \"2015-07-11 13:18:58\",\n           \"theme_store_id\": \"1\",\n           \"name\": \"acenda_store_default\",\n           \"current\": \"0\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeApiController.php",
    "groupTitle": "Theme"
  },
  {
    "type": "post",
    "url": "/theme/render",
    "title": "render",
    "name": "Render",
    "group": "Theme",
    "version": "2.0.1",
    "description": "<p>Renders a page view based on supplied templates</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>URL path to render, ie '/cart'</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "templates",
            "description": "<p>Object of templates in [twig file name]:[twig file contents] pairs to overwrite twig files in site repository.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "post",
            "description": "<p>Object of post data to be included with the rendering of the request.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Preview a the index twig template Example:",
        "content": "endpoint: /theme/render\n\nbody:\n{\n  \"path\":\"/\",\n  \"templates\":{\n    \"index.html.twig\":\"Hello World!\"\n  }\n}",
        "type": "json"
      },
      {
        "title": "Preview the shopping cart page twig template Example:",
        "content": "endpoint: /theme/render\n\nbody:\n{\n  \"path\":\"/cart\",\n  \"templates\":{\n    \"/cart/index.html.twig\":\"Hello World From cart!\"\n  }\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"[rendered html page]\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeApiController.php",
    "groupTitle": "Theme"
  },
  {
    "type": "post",
    "url": "/theme/ID/reset",
    "title": "reset",
    "name": "Reset",
    "group": "Theme",
    "version": "2.0.1",
    "description": "<p>Reset your theme to the last version (Scope: themes:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "theme_store_id",
            "description": "<p>Theme store id</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "latest",
            "description": "<p>is set to true will reset to latest theme store tag</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": ['Theme' => 'Reset was successfull']\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeApiController.php",
    "groupTitle": "Theme"
  },
  {
    "type": "get",
    "url": "/themestore/getall",
    "title": "get all entries",
    "name": "GetAll",
    "group": "ThemeStore",
    "version": "2.0.1",
    "description": "<p>Get all entries in Acenda Theme Store</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,date_created,date_modified,name,repository,tag,title,type,status,description",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Theme",
            "description": "<p>store entries</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2014-12-18 09:13:06\",\n           \"date_modified\": \"2015-01-28 10:32:03\",\n           \"name\": \"acenda_store_default\",\n           \"repository\": \"https://github.com/torreycommerce/acenda_default.git\",\n           \"tag\": \"0c3cc88d48f7d6481e35ad4e5afac0d24ee91f82\",\n           \"title\": \"Acenda Store Default Theme\",\n           \"type\": \"store\",\n           \"status\": \"validated\",\n           \"description\": \"Description of Acenda default theme\"\n        },\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "./app/protected/modules/admin/controllers/api/ThemestoreApiController.php",
    "groupTitle": "ThemeStore"
  },
  {
    "type": "get",
    "url": "/themestore/[:id]",
    "title": "get entry",
    "name": "Read",
    "group": "ThemeStore",
    "version": "2.0.1",
    "description": "<p>Get entry from Acenda Theme Store</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,date_created,date_modified,name,repository,tag,title,type,status,description",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Theme",
            "description": "<p>store entries</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2014-12-18 09:13:06\",\n           \"date_modified\": \"2015-01-28 10:32:03\",\n           \"name\": \"acenda_store_default\",\n           \"repository\": \"https://github.com/torreycommerce/acenda_default.git\",\n           \"tag\": \"0c3cc88d48f7d6481e35ad4e5afac0d24ee91f82\",\n           \"title\": \"Acenda Store Default Theme\",\n           \"type\": \"store\",\n           \"status\": \"validated\",\n           \"description\": \"Description of Acenda default theme\"\n        },\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "./app/protected/modules/admin/controllers/api/ThemestoreApiController.php",
    "groupTitle": "ThemeStore"
  },
  {
    "type": "put",
    "url": "/theme/:id",
    "title": "update",
    "name": "Update",
    "group": "Theme",
    "version": "2.0.1",
    "description": "<p>Update Theme by ID. (Scope: themes:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "theme_store_id",
            "description": "<p>Id From Theme Store</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Theme name</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "current",
            "description": "<p>1 for current, 0 for non-current</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/ThemeApiController.php",
    "groupTitle": "Theme"
  },
  {
    "type": "get",
    "url": "/api/collection/:id/products",
    "title": "get collection variants",
    "name": "Collection_Variants",
    "group": "Variant",
    "version": "2.0.1",
    "description": "<p>Fetch Collection Variants.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Variant",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"group\": \"product\",\n           \"status\": \"active\",\n           \"slug\": \"ipod-classic\",\n           \"name\": \"iPod Classic\",\n           \"collection_id\": [\"12345\",\"67890\"],\n           \"category_id\": [\"123\",\"456\",\"789\"],\n           \"brand\": \"Apple\",\n           \"type\": \"Media Player\",\n           \"keywords\": [\"apple\",\"pod\",\"mp3\",\"aac\"],\n           \"tags\": [\"music\",\"portable\",\"retro\"],\n           \"page_title\": \"iPod Classic\",\n           \"title\":\"iPod Classic\",\n           \"category\": [\"test-products\",\"media-players\",\"retro/players\"],\n           \"url\": \"/product/4+Moms/infant-tub\",\n           \"thumbnail\": \"https://cdn.acenda.com/swift/v1/my-store/images/bucket/product/thumbnail/250x250/1/12345.jpg\",\n           \"meta_description\": \"This is a fancy 128MB MP3 player from the early 2000's.\",\n           \"description\": \"This is a fancy 128MB MP3 player from the early 2000's.\",\n           \"cross_sellers\": [\"123\",\"456\",\"789\"],\n           \"review_score\": \"1.234\",\n           \"variant_options\": {\"size\":[\"2MB\",\"32MB\",\"64MB\",\"128MB\"]},\n           \"images\": [{\"id\":\"12345\",\"name\":\"iPod Side\",\"tags\":\"\"}],\n           \"videos\": [\"http://youtu.be/12345\",\"http://youtu.be/67890\"],\n           \"date_modified\": \"2015-07-16 10:17:20\",\n           \"date_created\": \"2015-07-16 10:17:20\",\n           \"date_publish\": \"2015-07-20 03:15:59\",\n           \"date_expire\" : \"2015-07-20 03:15:59\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/VariantApiController.php",
    "groupTitle": "Variant"
  },
  {
    "type": "get",
    "url": "/variant/count",
    "title": "count",
    "name": "Count",
    "group": "Variant",
    "version": "2.0.1",
    "description": "<p>Return the number of variants for a site.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "count",
            "description": "<p>Number of element found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       num_total: 1,\n       code\": 200,\n       status: \"OK\",\n       result: { count: 2 }\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/VariantApiController.php",
    "groupTitle": "Variant"
  },
  {
    "type": "post",
    "url": "/variant",
    "title": "create",
    "name": "Create",
    "group": "Variant",
    "version": "2.0.1",
    "description": "<p>Create a new variant. (Scope: products:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>, Id of the product the variant belong to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Status of the variant. Only takes value from 'active','offline','disabled'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Variant name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sku",
            "description": "<p>Variant sku</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "asin",
            "description": "<p>Variant asin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ean",
            "description": "<p>Variant ean</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "isbn",
            "description": "<p>Variant isbn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "has_stock",
            "description": "<p>If variant has stock. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cost",
            "description": "<p>Variant cost</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "barcode",
            "description": "<p>Variant barcode.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price",
            "description": "<p>Variant price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "compare_price",
            "description": "<p>Variant compared price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "popularity",
            "description": "<p>Variant popularity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Variant position</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>Variant images</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_quantity",
            "description": "<p>Variant inventory quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_minimum_quantity",
            "description": "<p>Variant minimum quantity. Variant goes out of stock if inventory quantity is below the minimum quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_tracking",
            "description": "<p>If the variant stock is tracked. Automatically adjusts stock when a order is placed, canceled, or returned. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_policy",
            "description": "<p>Variant Only takes value from 'deny' (Deny customers from ordering item), 'continue' (Allow orders when out of stock), 'disable' (Disable item when out of stock).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_shipping_estimate",
            "description": "<p>Message displayed on the variant page, indicating the shipping estimated time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_returnable",
            "description": "<p>Variant If variant is returnable. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "require_shipping",
            "description": "<p>Variant If the variant requires shipping. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "discountable",
            "description": "<p>Variant If discount can be applied to the variant. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "taxable",
            "description": "<p>Variant If taxes can be applied to teh variant. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "weight",
            "description": "<p>Variant variant weight.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_publish",
            "description": "<p>Variant Variant publication date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_expire",
            "description": "<p>Variant variant expiring date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>ID of variant created.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"code\": 201,\n   \"status\": \"Created\",\n   \"result\": \"7\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/VariantApiController.php",
    "groupTitle": "Variant"
  },
  {
    "type": "delete",
    "url": "/variant/:id",
    "title": "delete",
    "name": "Delete",
    "group": "Variant",
    "version": "2.0.1",
    "description": "<p>Archives an existing variant (Scope: products:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  { \n       code\": 200,\n       status: \"OK\",\n       result: \"OK\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/VariantApiController.php",
    "groupTitle": "Variant"
  },
  {
    "type": "get",
    "url": "/variant/export",
    "title": "export",
    "name": "Export",
    "group": "Variant",
    "version": "2.0.1",
    "description": "<p>Export in CSV the variants list returned. (Scope: products:read)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "Link",
            "optional": false,
            "field": "read_attributes",
            "description": "<p><a target=\"_blank\" href=\"#api-Read_Attributes\">Read Attributes</a>.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "CSV",
            "optional": false,
            "field": "CSV",
            "description": "<p>content of the found elements.</p>"
          }
        ]
      }
    },
    "filename": "./app/protected/modules/store/controllers/api/VariantApiController.php",
    "groupTitle": "Variant"
  },
  {
    "type": "get",
    "url": "/api/product/:id/variants",
    "title": "get product variants",
    "name": "Product_Variants",
    "group": "Variant",
    "version": "2.0.1",
    "description": "<p>Fetch Product Variants.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Variant",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"12345\",\n           \"position\": \"45\",\n           \"inventory_shipping_estimate\": \"Ships in 2 to 4 weeks\",\n           \"has_stock\": \"1\",\n           \"weight\": \"0\",\n           \"product_id\": \"1\",\n           \"inventory_policy\": \"continue\",\n           \"date_created\": \"2014-05-07 22:14:12\",\n           \"inventory_tracking\": \"0\",\n           \"require_shipping\": \"1\",\n           \"save_percent\": \"20\",\n           \"title\": \"iPod Classic - 32 MB\",\n           \"name\": \"32 MB\",\n           \"save_price\": \"14\",\n           \"popularity\": \"1354065300\",\n           \"inventory_quantity\": \"0\",\n           \"inventory_returnable\": \"1\",\n           \"date_modified\": \"2014-12-19 11:25:04\",\n           \"status\": \"active\",\n           \"taxable\": \"1\",\n           \"barcode\": \"692176705539\",\n           \"sku\": \"WS1121\",\n           \"compare_price\": \"69\",\n           \"cost\": \"34.5\",\n           \"url\": \"/product/ipod-classic-set\",\n           \"thumbnail\": \"https://cdn.acenda.com/swift/v1/my-test-store/images/bucket/product/thumbnail/250x250/4/4487.jpg\",\n           \"price\": \"55\",\n           \"inventory_minimum_quantity\": \"0\",\n           \"inventory\": \"-1\",\n           \"images\": [{\"tags\": \"\", \"id\": \"4521\", \"name\": \"\"}]\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/VariantApiController.php",
    "groupTitle": "Variant"
  },
  {
    "type": "get",
    "url": "/variant/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Variant",
    "version": "2.0.1",
    "description": "<p>List the variants attached to a site.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product_id",
            "description": "<p>, Id of the product the variant belong to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the variant. Only takes value from 'active','offline','disabled'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Variant name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sku",
            "description": "<p>Variant sku</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asin",
            "description": "<p>Variant asin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ean",
            "description": "<p>Variant ean</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isbn",
            "description": "<p>Variant isbn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "has_stock",
            "description": "<p>If variant has stock. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cost",
            "description": "<p>Variant cost</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "barcode",
            "description": "<p>Variant barcode.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Variant price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "compare_price",
            "description": "<p>Variant compared price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "popularity",
            "description": "<p>Variant popularity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>Variant position</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>Variant images</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "archived",
            "description": "<p>If variant is archived</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inventory_quantity",
            "description": "<p>Variant inventory quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inventory_minimum_quantity",
            "description": "<p>Variant minimum quantity. Variant goes out of stock if inventory quantity is below the minimum quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inventory_tracking",
            "description": "<p>If the variant stock is tracked. Automatically adjusts stock when a order is placed, canceled, or returned. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inventory_policy",
            "description": "<p>Variant Only takes value from 'deny' (Deny customers from ordering item), 'continue' (Allow orders when out of stock), 'disable' (Disable item when out of stock).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inventory_shipping_estimate",
            "description": "<p>Message displayed on the variant page, indicating the shipping estimated time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inventory_returnable",
            "description": "<p>Variant If variant is returnable. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "require_shipping",
            "description": "<p>Variant If the variant requires shipping. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discountable",
            "description": "<p>Variant If discount can be applied to the variant. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taxable",
            "description": "<p>Variant If taxes can be applied to teh variant. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>Variant variant weight.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_publish",
            "description": "<p>Variant Variant publication date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date_expire",
            "description": "<p>Variant variant expiring date.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "List",
            "description": "<p>of variants or specific one.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "HTTP/1.1 200 OK\n  { \n       num_total: 1,\n       code\": 200,\n       status: \"OK\",\n       result: [\n          { \n              id: 3,\n              date_created: \"2015-04-20 13:53:03\",\n              date_modified: \"2015-04-20 13:53:03\",\n              product_id: \"3\",\n              status: \"active\",\n              name: \"\",\n              sku: \"sample-product\",\n              has_stock: \"1\",\n              price: \"42\",\n              popularity: \"1240347183\",\n              inventory_quantity: \"1\",\n              inventory_tracking: \"1\",\n              inventory_policy: \"deny\",\n              inventory_shipping_estimate: \"\",\n              inventory_returnable: \"1\",\n              require_shipping: \"1\",\n              discountable: \"1\",\n              taxable: \"1\",\n              weight: \"0\",\n              title: \"Sample product\",\n              brand: \"\",\n              thumbnail: \"https://mystore.acenda.com/images/bucket/product/thumbnail/250x250/1/default.jpg\",\n              url: \"/product/sample-product\"\n          }\n      ]\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/VariantApiController.php",
    "groupTitle": "Variant"
  },
  {
    "type": "put",
    "url": "/variant/:id",
    "title": "update",
    "name": "Update",
    "group": "Variant",
    "version": "2.0.1",
    "description": "<p>Update an existing variant. (Scope: products:write)</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token (GET).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "product_id",
            "description": "<p>, Id of the product the variant belong to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>Status of the variant. Only takes value from 'active','offline','disabled'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Variant name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sku",
            "description": "<p>Variant sku</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "asin",
            "description": "<p>Variant asin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ean",
            "description": "<p>Variant ean</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "isbn",
            "description": "<p>Variant isbn</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "has_stock",
            "description": "<p>If variant has stock. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cost",
            "description": "<p>Variant cost</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "barcode",
            "description": "<p>Variant barcode.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price",
            "description": "<p>Variant price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "compare_price",
            "description": "<p>Variant compared price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "popularity",
            "description": "<p>Variant popularity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>Variant position</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "images",
            "description": "<p>Variant images</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_quantity",
            "description": "<p>Variant inventory quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_minimum_quantity",
            "description": "<p>Variant minimum quantity. Variant goes out of stock if inventory quantity is below the minimum quantity.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_tracking",
            "description": "<p>If the variant stock is tracked. Automatically adjusts stock when a order is placed, canceled, or returned. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_policy",
            "description": "<p>Variant Only takes value from 'deny' (Deny customers from ordering item), 'continue' (Allow orders when out of stock), 'disable' (Disable item when out of stock).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_shipping_estimate",
            "description": "<p>Message displayed on the variant page, indicating the shipping estimated time.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "inventory_returnable",
            "description": "<p>Variant If variant is returnable. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "require_shipping",
            "description": "<p>Variant If the variant requires shipping. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "discountable",
            "description": "<p>Variant If discount can be applied to the variant. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "taxable",
            "description": "<p>Variant If taxes can be applied to teh variant. Can equal to 1 or 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "weight",
            "description": "<p>Variant variant weight.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_publish",
            "description": "<p>Variant Variant publication date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date_expire",
            "description": "<p>Variant variant expiring date.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/VariantApiController.php",
    "groupTitle": "Variant"
  },
  {
    "type": "post",
    "url": "/widget",
    "title": "create",
    "name": "Create",
    "group": "Widget",
    "version": "2.0.1",
    "description": "<p>Create Widget.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Twig template</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data_query",
            "description": "<p>Query</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>Dynamically loaded attributes when rendering widgets</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>Array of images</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "publish",
            "description": "<p>1 for Action, 0 for inactive</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WidgetApiController.php",
    "groupTitle": "Widget"
  },
  {
    "type": "delete",
    "url": "/widget/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "Widget",
    "version": "2.0.1",
    "description": "<p>Delete Widget by ID</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WidgetApiController.php",
    "groupTitle": "Widget"
  },
  {
    "type": "get",
    "url": "/widget/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Widget",
    "version": "2.0.1",
    "description": "<p>Fetch Widget(s).</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>mandatory oAuth2.0 client token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Widget",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"slug\": \"default-carousel\",\n           \"title\": \"Default Carousel\",\n           \"attributes\": [],\n           \"content\": \"<h1>Widget</h1>\",\n           \"data_query\": \"\",\n           \"parameters\": \"\",\n           \"tags\": [],\n           \"images\": [],\n           \"publish\": \"1\",\n           \"publish_date\": \"\",\n           \"publish_date_end\": \"\",\n           \"date_created\": \"2015-07-16 10:17:20\",\n           \"date_modified\": \"2015-07-22 10:51:18\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WidgetApiController.php",
    "groupTitle": "Widget"
  },
  {
    "type": "get",
    "url": "/widget/render",
    "title": "render",
    "name": "Render",
    "group": "Widget",
    "version": "2.0.1",
    "description": "<p>Renders and returns an html version of a given widget</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "slug",
            "defaultValue": "...",
            "description": "<p>Widget Slug.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "html",
            "description": "<p>version of rendered widget</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"<h1>Widget</h1>\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WidgetApiController.php",
    "groupTitle": "Widget"
  },
  {
    "type": "get",
    "url": "/widgetstore/[:id]",
    "title": "read",
    "name": "Read",
    "group": "WidgetStore",
    "version": "2.0.1",
    "description": "<p>Manage entries in Acenda Widget Store</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "attributes",
            "defaultValue": "id,slug,title,image_url,attributes,content,data_query,tags,images,type,publish,publish_date,publish_date_end",
            "description": "<p>Filters fields to be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token (GET).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Widget",
            "description": "<p>store entries</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n       \"num_total\": 1,\n       \"code\": 200,\n       \"status\": \"OK\",\n       \"result\": [\n           {\n              id: '1',\n\t\t   \t\tslug: 'widget-slug',\n\t\t\t   \ttitle: 'widget-title',\n  \t\t\tattributes: [],\n  \t\t\ttags: [],\n  \t\t\timages: [],\n  \t\t\tpublish: '0',\n  \t\t\tpublish_date: '0000-00-00 00:00:00',\n  \t\t\tpublish_date_end: '0000-00-00 00:00:00',\n  \t\t\tdate_created: '2015-07-01 16:32:03',\n  \t\t\tdate_modified: '2015-07-01 16:32:03'\n            },\n       ]\n    }",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "filename": "./app/protected/modules/admin/controllers/api/WidgetstoreApiController.php",
    "groupTitle": "WidgetStore"
  },
  {
    "type": "put",
    "url": "/widget/:id",
    "title": "update",
    "name": "Update",
    "group": "Widget",
    "version": "2.0.1",
    "description": "<p>Update Widget by ID.</p>",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Slug</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Twig template</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "data_query",
            "description": "<p>Query</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parameters",
            "description": "<p>Dynamically loaded attributes when rendering widgets</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tags</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>Array of images</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WidgetApiController.php",
    "groupTitle": "Widget"
  },
  {
    "type": "post",
    "url": "/wishlist",
    "title": "create",
    "name": "Create",
    "group": "Wishlist",
    "version": "2.0.1",
    "description": "<p>Create Wishlist. (Scope: customers:write)</p>",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "item_count",
            "description": "<p>Number of items</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "privacy",
            "description": "<p>Privacy level</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "address_id",
            "description": "<p>External Address id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "customer_id",
            "description": "<p>External Customer id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "default",
            "description": "<p>1 = default, 0 = not default</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WishlistApiController.php",
    "groupTitle": "Wishlist"
  },
  {
    "type": "delete",
    "url": "/wishlist/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "Wishlist",
    "version": "2.0.1",
    "description": "<p>Delete Wishlist by ID (Scope: customers:write)</p>",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WishlistApiController.php",
    "groupTitle": "Wishlist"
  },
  {
    "type": "post",
    "url": "/wishlistitem",
    "title": "create",
    "name": "Create",
    "group": "WishlistItem",
    "version": "2.0.1",
    "description": "<p>Create Wishlistitem. (Scope: customers:write)</p>",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "wishlist_id",
            "description": "<p>Wishlist ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "quantity_purchased",
            "description": "<p>Quantity purchased</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "item_count",
            "description": "<p>Number of items</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WishlistitemApiController.php",
    "groupTitle": "WishlistItem"
  },
  {
    "type": "delete",
    "url": "/wishlistitem/[:id]",
    "title": "delete",
    "name": "Delete",
    "group": "WishlistItem",
    "version": "2.0.1",
    "description": "<p>Delete Wishlistitem by ID (Scope: customers:write)</p>",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WishlistitemApiController.php",
    "groupTitle": "WishlistItem"
  },
  {
    "type": "get",
    "url": "/WishlistItem/[:id]",
    "title": "read",
    "name": "Read",
    "group": "WishlistItem",
    "version": "2.0.1",
    "description": "<p>Returns WishlistItem(s). (Scope: customers:read)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Return format, can also be xml.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "WishlistItem",
            "description": "<p>(s) array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2015-07-17 13:40:36\",\n           \"date_modified\": \"2015-07-17 13:40:36\",\n           \"quantity_purchased\": 0,\n           \"wishlist_id\": 1,\n           \"quantity\": 3,\n           \"price\": \"10.00\"\n       },\n       ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WishlistitemApiController.php",
    "groupTitle": "WishlistItem"
  },
  {
    "type": "put",
    "url": "/wishlistitem/:id",
    "title": "update",
    "name": "Update",
    "group": "WishlistItem",
    "version": "2.0.1",
    "description": "<p>Update Wishlistitem by ID. (Scope: customers:write)</p>",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "wishlist_id",
            "description": "<p>Wishlist ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "quantity_purchased",
            "description": "<p>Quantity purchased</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "quantity",
            "description": "<p>Quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "item_count",
            "description": "<p>Number of items</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WishlistitemApiController.php",
    "groupTitle": "WishlistItem"
  },
  {
    "type": "get",
    "url": "/wishlist/items/[:id]",
    "title": "get items",
    "name": "Items",
    "group": "Wishlist",
    "version": "2.0.1",
    "description": "<p>Fetches Wishlist Item(s) (Scope: customers:read)</p>",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Wishlist store id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WishlistApiController.php",
    "groupTitle": "Wishlist"
  },
  {
    "type": "post",
    "url": "/wishlist/MakeDefault/[:id]",
    "title": "make default",
    "name": "MakeDefault",
    "group": "Wishlist",
    "version": "2.0.1",
    "description": "<p>Fetches Wishlist Item(s) (Scope: customers:write)</p>",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Wishlist id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WishlistApiController.php",
    "groupTitle": "Wishlist"
  },
  {
    "type": "get",
    "url": "/wishlist/[:id]",
    "title": "read",
    "name": "Read",
    "group": "Wishlist",
    "version": "2.0.1",
    "description": "<p>Fetch Wishlist(s). (Scope: customers:read)</p>",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Wishlists",
            "description": "<p>(s)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"num_total\": 1,\n   \"code\": 200,\n   \"status\": \"OK\",\n   \"result\": [\n       {\n           \"id\": \"1\",\n           \"date_created\": \"2015-07-17 13:40:36\",\n           \"date_modified\": \"2015-07-17 13:40:36\",\n           \"item_count\": 0,\n           \"name\": \"test\",\n           \"privacy\": \"private\",\n           \"address_id\": \"1\",\n           \"customer_id\": \"1\",\n           \"default\": \"1\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WishlistApiController.php",
    "groupTitle": "Wishlist"
  },
  {
    "type": "put",
    "url": "/wishlist/:id",
    "title": "update",
    "name": "Update",
    "group": "Wishlist",
    "version": "2.0.1",
    "description": "<p>Update Wishlist by ID. (Scope: customers:write)</p>",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Mandatory oAuth2.0 client token</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "item_count",
            "description": "<p>Number of items</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "privacy",
            "description": "<p>Privacy level</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "address_id",
            "description": "<p>External Address id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "customer_id",
            "description": "<p>External Customer id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "default",
            "description": "<p>1 = default, 0 = not default</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok\n{\n   \"code\": 200,\n   \"status\": \"Ok\",\n   \"result\": \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/modules/store/controllers/api/WishlistApiController.php",
    "groupTitle": "Wishlist"
  },
  {
    "type": "post",
    "url": "/oauth/token",
    "title": "token (client_credentials)",
    "name": "Token__Client_Credentials_",
    "group": "oAuth",
    "version": "2.0.1",
    "description": "<p>This method allows you to generate a token to request Acenda. (https://tools.ietf.org/html/rfc6750) <br /><br /> <strong>Your token is subject to 100 requests per minute, more request will result in a 429 http code from Acenda.</strong><br /> <strong>After reaching the threshold a minute will be needed to fully reload your stack of requests,</strong><br /> <strong>however, you are free to use your requests during that time (Leaky Bucket algorithm)</strong></p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "defaultValue": "client_credentials.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>Client ID determined by the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": "<p>Client secret generated by Acenda for the client.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Generated token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "expires_in",
            "description": "<p>Time in seconds before token expiration.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>Type of token provided.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>Action scope allowed by the token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"access_token\": \"__GENERATED_TOKEN__\",\n       \"expires_in\":3600,\n       \"token_type\":\"Bearer\",\n       \"scope\":\"scope\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/controllers/OauthController.php",
    "groupTitle": "oAuth"
  },
  {
    "type": "post",
    "url": "/oauth/token",
    "title": "token (password)",
    "name": "Token__Password_",
    "group": "oAuth",
    "version": "2.0.1",
    "description": "<p>This method allows you to generate a token to request Acenda. (https://tools.ietf.org/html/rfc6750) <br /><br /> <strong>Do not share your credentials to anyone.</strong></p>",
    "permission": [
      {
        "name": "guest"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "defaultValue": "password.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Your Acenda username (Email).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Your Acenda password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Generated token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "expires_in",
            "description": "<p>Time in seconds before token expiration.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>Type of token provided.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>Action scope allowed by the token.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>Refresh token to re-create a new token.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "refresh_expires",
            "description": "<p>Time in seconds before expiration of refresh token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n       \"access_token\":\"__GENERATED_TOKEN__\",\n       \"expires_in\":3600,\n       \"token_type\":\"Bearer\",\n       \"scope\":\"scope\",\n       \"refresh_token\":\"__GENERATED_REFRESH_TOKEN__\",\n       \"refresh_expires\":7200\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "./app/protected/controllers/OauthController.php",
    "groupTitle": "oAuth"
  }
] });
