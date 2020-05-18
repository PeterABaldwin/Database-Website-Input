
window.onload = function() {
    // Build a system
    var url = window.location.search.match(/url=([^&]+)/);
    if (url && url.length > 1) {
      url = decodeURIComponent(url[1]);
    } else {
      url = window.location.origin;
    }
    var options = {
    "swaggerDoc": {
      "swagger": "2.0",
      "info": {
        "title": "Books API docs for COSC 456",
        "description": "Group 2 Project to document books, get ratings and tags of books fromgood reads",
        "contact": {
          "name": "Michael Vandi and Peter Baldwin",
          "email": "dummyEmail@ubalt.edu"
        },
        "license": {
          "name": "Apache 2.0",
          "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
        },
        "servers": [
          "http://localhost:5709"
        ],
        "version": "1.0.1"
      },
      "paths": {
        "/": {
          "get": {
            "description": "Shows all available functions the app does",
            "responses": {
              "200": {
                "description": "Sends a html page with links to click on to insert, search and input books"
              }
            }
          }
        },
        "/getAll": {
          "get": {
            "description": "Get all books in the database",
            "responses": {
              "200": {
                "description": "Sends a html page with all the books in the database"
              }
            }
          }
        },
        "/input": {
          "get": {
            "description": "This page allows users to insert books into the database",
            "responses": {
              "200": {
                "description": "Sends a html page with a form to in put books"
              }
            }
          }
        },
        "/search": {
          "404": {
            "description": "Book was not found"
          },
          "get": {
            "description": "This page allows users to search for books in the database",
            "responses": {
              "200": {
                "description": "Sends a html page with an input field to search for available books"
              }
            }
          }
        },
        "/addbooklist": {
          "put": {
            "description": "Used to insert one book object into your list"
          },
          "parameters": [
            {
              "id": "Book",
              "in": "query",
              "description": "ID of the book",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "title": "Book",
              "in": "query",
              "description": "Tile of the book",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "author": "Book",
              "in": "query",
              "description": "Name of the author of the book",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "format": "Book",
              "in": "query",
              "description": "Book format options",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "price": "Book",
              "in": "query",
              "description": "How much does the book cost",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Successfully added book"
            }
          }
        },
        "/addbook": {
          "put": {
            "description": "Inserts a book into the database"
          },
          "parameters": [
            {
              "book_id": "Book",
              "in": "query",
              "description": "ID of the book",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "goodreads_book_id": "Book",
              "in": "query",
              "description": "book id on the goodreads platform",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "best_book_id": "Book",
              "in": "query",
              "description": "Best book id",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "work_id": "Book",
              "in": "query",
              "description": "Work ID",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "isbn": "Book",
              "in": "query",
              "description": "This is the international standard book number used to uniquely identify the book",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "isbn13": "Book",
              "in": "query",
              "description": "New ISBN standard version 13",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "original_publication_year": "Book",
              "in": "query",
              "description": "Original year the book was published",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "original_title": "Book",
              "in": "query",
              "description": "Original Title of the book",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Successfully added book"
            }
          }
        },
        "/addbook_tag": {
          "put": {
            "description": "Inserts an associated tag with a book with the good reads id number"
          },
          "parameters": [
            {
              "goodreads_book_id": "Book",
              "in": "query",
              "description": "book id on the goodreads platform",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "tag_id": "Book",
              "in": "query",
              "description": "tag identification number",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "count": "Book",
              "in": "query",
              "description": "tag count",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Successfully added book"
            }
          }
        },
        "/addrating": {
          "put": {
            "description": "Inserts rating for a book over a 5 point scale"
          },
          "parameters": [
            {
              "user_id": "Book",
              "in": "query",
              "description": "ID of the user leaving that particular rating",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "book_id": "Book",
              "in": "query",
              "description": "The id of the book being rated",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "rating": "Book",
              "in": "query",
              "description": "A string representation of the rating value given by the user",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Successfully added rating"
            }
          }
        },
        "/addtag": {
          "put": {
            "description": "Inserts an independent tag that is not associated with a book"
          },
          "parameters": [
            {
              "tag_id": "tags",
              "in": "query",
              "description": "id for the tag",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "tag_name": "tags",
              "in": "query",
              "description": "name of the tag",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Successfully added tag"
            }
          }
        },
        "/addto_read": {
          "put": {
            "description": "User inserts a book into a collection of books to read later"
          },
          "parameters": [
            {
              "user_id": "to_read",
              "in": "query",
              "description": "ID of the user adding the book to their to read collection",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "book_id": "to_read",
              "in": "query",
              "description": "The id of the book being added",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Successfully added book to the to read collection"
            }
          }
        },
        "/getbooklist": {
          "get": {
            "description": "This page allows displays a list of books",
            "responses": {
              "200": {
                "description": "Sends a html page with a list of books"
              }
            }
          }
        },
        "/getbooks": {
          "get": {
            "description": "Gets all the books in the database limited to 500 responses",
            "responses": {
              "200": {
                "description": "Sends a html page with the list of books"
              }
            }
          }
        },
        "/getbook_tags": {
          "get": {
            "description": "This page gets all the independent tags available",
            "responses": {
              "200": {
                "description": "Sends a json object with a list of tags"
              }
            }
          }
        },
        "/getratings": {
          "get": {
            "description": "This page gets all ratings",
            "responses": {
              "200": {
                "description": "Sends a json object with a list of ratings"
              }
            }
          }
        },
        "/gettags": {
          "get": {
            "description": "This page gets all tags limited to 500 responses",
            "responses": {
              "200": {
                "description": "Sends a json object with a list of tags"
              }
            }
          }
        },
        "/getto_read": {
          "get": {
            "description": "This page gets all the books in the to read collection",
            "responses": {
              "200": {
                "description": "Sends a json object with a list of books in the to read collection"
              }
            }
          }
        },
        "/searchBooks": {
          "get": {
            "description": "Search for a specific book in the database"
          },
          "parameters": [
            {
              "book_id": "booklist",
              "in": "query",
              "description": "The ID of the book to search for",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "tag_id": "book_tags",
              "in": "query",
              "description": "tag identification number",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "user_id": "Book",
              "in": "query",
              "description": "tag count",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            },
            {
              "collection": "Book",
              "in": "query",
              "description": "In what collection to search for the book",
              "required": true,
              "schema": {
                "type": "string",
                "format": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Returns details of the book being searched for"
            }
          }
        },
        "/calculate": {
          "get": {
            "description": "Calculates the average rating that a particular book has",
            "responses": {
              "200": {
                "description": "Returns the average rating for the target book on a 5 point scale"
              }
            }
          }
        }
      },
      "definitions": {},
      "responses": {},
      "parameters": {},
      "securityDefinitions": {},
      "tags": []
    },
    "customOptions": {}
  };
    url = options.swaggerUrl || url
    var urls = options.swaggerUrls
    var customOptions = options.customOptions
    var spec1 = options.swaggerDoc
    var swaggerOptions = {
      spec: spec1,
      url: url,
      urls: urls,
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout"
    }
    for (var attrname in customOptions) {
      swaggerOptions[attrname] = customOptions[attrname];
    }
    var ui = SwaggerUIBundle(swaggerOptions)
  
    if (customOptions.oauth) {
      ui.initOAuth(customOptions.oauth)
    }
  
    if (customOptions.authAction) {
      ui.authActions.authorize(customOptions.authAction)
    }
  
    window.ui = ui
  }