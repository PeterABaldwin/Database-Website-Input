var express = require('express');
var app = express();
var port = 5709;

var url = require('url');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.listen(port, function() {
	var starttime = new Date();
	console.log("Listening on port: " + port);
	console.log("Start time: " + starttime);
});

app.get("/", function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><head></head><body>');
	res.write('<h1>456 API</h1>');
    res.write('<a href="/getAll">Get Collection</a>');
    res.write('<h1>---</h1>');
	res.write('<a href="/input">Insert</a>');
    res.write('<h1>---</h1>');
    res.write('<a href="/search">Search</a>');
	res.write('</body></html>');
	res.end();
});

app.get("/getAll", (req, res) => {
  res.sendFile(__dirname + "/getAll.html")
});
app.get("/input", (req, res) => {
  res.sendFile(__dirname + "/input.html")
});
app.get("/search", (req, res) => {
  res.sendFile(__dirname + "/search.html")
});

//booklists
//books
//book_tags
//ratings
//tags
//to_read


//adds new documents to each collection

//booklists
app.get("/addbooklist", function(req, resp) {
    var id = parseInt(req.query.id);	
    var title = req.query.title;
	var author = req.query.author;
    var format = req.query.format;
    var price = parseFloat(req.query.price);

    var newBooklist = { 'id':id, 'title':title, 'author':author, 'format':format, 'price':price }

	console.log((new Date()) + ", /addbooklist, New booklist:" + JSON.stringify(newBooklist));
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("booklist").insertOne(newBooklist, function(err, res) {
			if (err) throw err;
			resp.end(JSON.stringify(newBooklist) + " - 1 document inserted");
			db.close();
		});
	});
});


//books
app.get("/addbook", function(req, resp) {
    var book_id = parseInt(req.query.book_id);	
    var goodreads_book_id = parseInt(req.query.goodreads_book_id);
	var best_book_id = parseInt(req.query.best_book_id);
    var work_id = parseInt(req.query.work_id);
    var isbn = parseInt(req.query.isbn);
    var isbn13 = parseInt(req.query.isbn13);
    var original_publication_year = parseInt(req.query.original_publication_year);
    var original_title = req.query.original_title;

    var newBook = { 'book_id':book_id, 'goodreads_book_id':goodreads_book_id, 'best_book_id':best_book_id, 'work_id':work_id, 'isbn':isbn, 'isbn13':isbn13, 'original_publication_year':original_publication_year, 'original_title':original_title }

	console.log((new Date()) + ", /addbook, New book:" + JSON.stringify(newBook));
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("books").insertOne(newBook, function(err, res) {
			if (err) throw err;
			resp.end(JSON.stringify(newBook) + " - 1 document inserted");
			db.close();
		});
	});
});

//book_tags
app.get("/addbook_tag", function(req, resp) {
    var goodreads_book_id = parseInt(req.query.goodreads_book_id);	
    var tag_id = parseInt(req.query.tag_id);
	var count = parseInt(req.query.count);

    var newBook_tag = { 'goodreads_book_id':goodreads_book_id, 'tag_id':tag_id, 'count':count }

	console.log((new Date()) + ", /addbook_tag, New book_tags:" + JSON.stringify(newBook_tag));
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("book_tags").insertOne(newBook_tag, function(err, res) {
			if (err) throw err;
			resp.end(JSON.stringify(newBook_tag) + " - 1 document inserted");
			db.close();
		});
	});
});

//ratings
app.get("/addrating", function(req, resp) {
    var user_id = parseInt(req.query.user_id);	
    var book_id = parseInt(req.query.book_id);
	var rating = parseInt(req.query.rating);

    var newRating = { 'user_id':user_id, 'book_id':book_id, 'rating':rating }

	console.log((new Date()) + ", /addrating, New ratings:" + JSON.stringify(newRating));
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("ratings").insertOne(newRating, function(err, res) {
			if (err) throw err;
			resp.end(JSON.stringify(newRating) + " - 1 document inserted");
			db.close();
		});
	});
});


//tags
 app.get("/addtag", function(req, resp) {
    var tag_id = parseInt(req.query.tag_id);	
    var tag_name = req.query.tag_name;

    var newTag = { 'tag_id':tag_id, 'tag_name':tag_name }

	console.log((new Date()) + ", /addtag, New tags:" + JSON.stringify(newTag));
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("tags").insertOne(newTag, function(err, res) {
			if (err) throw err;
			resp.end(JSON.stringify(newTag) + " - 1 document inserted");
			db.close();
		});
	});
});

//to_read
app.get("/addto_read", function(req, resp) {
    var user_id = parseInt(req.query.user_id);	
    var book_id = parseInt(req.query.book_id);

    var newTo_read = { 'user_id':user_id, 'book_id':book_id }

	console.log((new Date()) + ", /addto_read, New to_read:" + JSON.stringify(newTo_read));
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("to_read").insertOne(newTo_read, function(err, res) {
			if (err) throw err;
			resp.end(JSON.stringify(newTo_read) + " - 1 document inserted");
			db.close();
		});
	});
});



//gets all documents from each collection

//booklist
app.get("/getbooklist", function(req, res) {
	console.log((new Date()) + ", /getbooklist");
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("booklist").find().toArray(function(err, result) {
			if (err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(JSON.stringify(result));
			db.close();
		});
	});
});

//books
//limited due to too many values causing system to crash
app.get("/getbooks", function(req, res) {
	console.log((new Date()) + ", /getbooks");
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("books").find().limit(500).toArray(function(err, result) {
			if (err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(JSON.stringify(result));
			db.close();
		});
	});
});

//book_tags
app.get("/getbook_tags", function(req, res) {
	console.log((new Date()) + ", /getbook_tags");
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("book_tags").find().limit(500).toArray(function(err, result) {
			if (err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(JSON.stringify(result));
			db.close();
		});
	});
});

//ratings
//limited due to too many values causing system to crash
app.get("/getratings", function(req, res) {
	console.log((new Date()) + ", /getratings");
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("ratings").find().limit(500).toArray(function(err, result) {
			if (err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(JSON.stringify(result));
			db.close();
		});
	});
});

//tags
app.get("/gettags", function(req, res) {
	console.log((new Date()) + ", /gettags");
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("tags").find().toArray(function(err, result) {
			if (err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(JSON.stringify(result));
			db.close();
		});
	});
});

//to_read
//limited due to too many values causing system to crash
app.get("/getto_read", function(req, res) {
	console.log((new Date()) + ", /getto_read");
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
		dbo.collection("to_read").find().limit(500).toArray(function(err, result) {
			if (err) throw err;
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(JSON.stringify(result));
			db.close();
		});
	});
});


//booklists
app.get("/searchBooks", function(req, res) {

    console.log(req.query.targetCollection);
	var book_id = req.query.targetBook_id;
    var tag_id = req.query.targetTag_id;
    var user_id = req.query.targetUser_id;
    var collections = req.query.targetCollection;

	console.log((new Date()) + ", /searchBooks, book_id="+book_id+", tag_id="+tag_id+", user_id="+user_id);
    MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");

        if (collections == "booklist"){
            var booklistQuery = {"id":parseInt(book_id)};
            dbo.collection("booklist").find(booklistQuery).toArray(function(err, result) {
			    if (err) throw err;
			    res.writeHead(200, {'Content-Type': 'text/html'});
			    res.end(JSON.stringify(result));
                db.close();
		    });
        }

        else if (collections == "books"){
            var booksQuery = {"goodreads_book_id":parseInt(book_id)};
            dbo.collection("books").find(booksQuery).toArray(function(err, result) {
			    if (err) throw err;
			    res.writeHead(200, {'Content-Type': 'text/html'});
			    res.end(JSON.stringify(result));
                db.close();
		    });
        }

        else if (collections == "book_tags"){
            var book_tagsQuery;
            if (book_id != "" && tag_id != ""){
                book_tagsQuery= {$and:[{"goodreads_book_id":parseInt(book_id)},{"tag_id":parseInt(tag_id)}]};
            }else if (tag_id == ""){
                book_tagsQuery= {"goodreads_book_id":parseInt(book_id)};
            }else if (book_id == ""){
                book_tagsQuery= {"tag_id":parseInt(tag_id)};
            }
             
            dbo.collection("book_tags").find(book_tagsQuery).toArray(function(err, result) {
			    if (err) throw err;
			    res.writeHead(200, {'Content-Type': 'text/html'});
			    res.end(JSON.stringify(result));
                db.close();
		    });
        }

        else if (collections == "rating"){
            var ratingsQuery;
            if (user_id != "" && book_id != ""){
                ratingsQuery = {$and:[{"user_id":parseInt(user_id)},{"book_id":parseInt(book_id)}]};;
            }else if (user_id == ""){
                ratingsQuery = {"book_id":parseInt(book_id)};
            }else if (book_id == ""){
                ratingsQuery = {"user_id":parseInt(user_id)};
            }
            
            dbo.collection("ratings").find(ratingsQuery).toArray(function(err, result) {
			    if (err) throw err;
			    res.writeHead(200, {'Content-Type': 'text/html'});
			    res.end(JSON.stringify(result));
                db.close();
		    });
        }

        else if (collections == "tags"){
            var tagsQuery = {'tag_id': parseInt(tag_id) };
            dbo.collection("tags").find(tagsQuery).toArray(function(err, result) {
			    if (err) throw err;
			    res.writeHead(200, {'Content-Type': 'text/html'});
			    res.end(JSON.stringify(result));
                db.close();
		    });
        }

        else if (collections == "to_read"){
            var to_readQuery;
            if (user_id != "" && book_id != ""){
                to_readQuery = {$and:[{"user_id":parseInt(user_id)},{"book_id":parseInt(book_id)}]};
            }else if (user_id == ""){
                to_readQuery= {"book_id":parseInt(book_id)};
            }else if (book_id == ""){
                to_readQuery= {"user_id":parseInt(user_id)};
            }

            dbo.collection("to_read").find(to_readQuery).toArray(function(err, result) {
			    if (err) throw err;
			    res.writeHead(200, {'Content-Type': 'text/html'});
			    res.end(JSON.stringify(result));
                db.close();
		    });
        }
	});
});

//booklistings
//books
//book_tags
//ratings
//tags
//to_read

//calculate average rating for book selection

app.get("/calculate", function(req, res) {

    var book = req.query.targetBook;

	console.log((new Date()) + ", /searchBooks, book="+book);
    MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("Group2");
        
        dbo.collection("ratings").find({"book_id":parseInt(book)}, {"rating":1, _id:0}).toArray(function(err, result) {
		    if (err) throw err;
		    res.writeHead(200, {'Content-Type': 'text/html'});
            var bigParse = JSON.parse(JSON.stringify(result));

            var q = 0;
            for (i in bigParse){
                q += bigParse[i].rating;
            };
		    res.end("Average rating for book "+book+": "+(q/bigParse.length));
            //console.log(JSON.stringify(result));
            db.close();
		});
    });
});
