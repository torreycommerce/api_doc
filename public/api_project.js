define({
  "name": "Acenda",
  "version": "2.0.1",
  "description": "Acenda REST API Documentation",
  "title": "Acenda API",
  "url": "https://demo.acenda.com",
  "generate": "apidoc -f \"(.+)Controller(.*).php\" -i ./ -o ./bones/doc/public --verbose",
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2016-01-21T22:13:35.457Z",
    "url": "http://apidocjs.com",
    "version": "0.14.0"
  }
});
