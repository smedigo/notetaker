var express = require("express");
// require the fs module to import

var app = express();   
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))
  //point to the public folder to become accessable to the public

  app.get("api/notes", function (req, res) {

     // use fs module to read the file

     //THEN parse the content with JSON.parse() to the real data

     //send the parsed data back to the client with res.JSON()

  });

  app.post("/api/notes", function (req, res) {

   // Access the posted data in 'req.body'

   // use fs module to read the file

     //THEN parse the content with JSON.parse() to the real data

     // PUSH the 'req.body' to the array list

     // JSON.stringify() the arrey list back into the JSON string

     // THEN save the contents back to the 'db.JSON' with the fs module 


  });

  app.delete("/api/notes/:id", function (req, res) {

    // Access :id from 'req.params.id

  // USE the fs module to read the file

  // THEN parse the file contents with JSON.parse() to the real data
  
  // Option A:
  //  find the matching index using Array.findIndex()
  
  // Remove the traget element using Array.splice()

  //Option B:
  myArray = myArray.filter(({id}) => id !==req.params.id);

  // Return any time of success message

  });


  
// HTML Routes set up
app.get("/", function(req, res) {     //define routs
    res.sendFile("");  //(/** path the notes.html file**/)
  });

  app.get("/notes", function(req, res) {     //define routs

    /

    res.sendFile("/** path the notes.html file**/");
  });



  app.get("*", function(req, res) {     //define routs
    res.sendFile("/** path the notes.html file**/");
  });

  app.listen(PORT, function() {     //listen to a port and be able to handle responses
    console.log("App listening on PORT " + PORT);
  });