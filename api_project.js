define({  "name": "Acenda",  "version": "0.0.1",  "description": "Acenda REST API Documentation",  "title": "Acenda API",  "url": "https://demo.acenda.com/",  "generate": "apidoc -f \"(.+)Controller(.*).php\" -i ./ -o ./bones/doc/public --verbose",  "sampleUrl": false,  "apidoc": "0.2.0",  "generator": {    "name": "apidoc",    "time": "2015-09-03T23:48:54.905Z",    "url": "http://apidocjs.com",    "version": "0.13.1"  }});