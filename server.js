var express = require("express");
// require the fs module to import
const fs = require("fs");
const path = require('path')
const notes = require('./db/db.json')
const { v4: uuidv4 } = require('uuid');


var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))
//point to the public folder to become accessable to the public
//let id = 1;
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
})


app.get("/api/notes", function (req, res) {


  res.json(notes);


  // use fs module to read the file

  //THEN parse the content with JSON.parse() to the real data

  //send the parsed data back to the client with res.JSON()
});



app.post("/api/notes", function (req, res) {

  let newNote = req.body
  console.log(newNote)
  
  //let newId = uuidv4(); //added this, this id doesn't work?

  fs.readFile(path.join(__dirname + "./db/db.json"), "utf8", function(err, data) {
    if (err) throw err; //added this
  // });
  //id++
  //title, text, id
  let notes = JSON.parse(notes);
  if (newNote) {
    notes.push(newNote);

    res.json({
      newNote,
      notes
    });

    let newId = uuidv4();
    newNote["id"] = newId;
    console.log(newNote);
  


    fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
  }
  else {

    console.log('Didnt work in the post method for new note')
    res.json('Could not create note at this time.');
  }
})
return
}
);


// Access the posted data in 'req.body'

// use fs module to read the file

//THEN parse the content with JSON.parse() to the real data

// PUSH the 'req.body' to the array list

// JSON.stringify() the arrey list back into the JSON string

// THEN save the contents back to the 'db.JSON' with the fs module 

app.delete("/api/notes/:id", (req, res) => {

let newNote = req.params.id 

fs.readFile(path.join(__dirname + "/db/db.json"), "utf8", function(err, data) {
  if (err) throw err;

  let newNote = newNote.findIndex(newNote => newNote.id === req.params.id);  //?
  newNote.splice(newNote, 1);
  res.sendStatus(200);

  let notes = JSON.parse(notes); 

  fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
    if (err) throw (err)
    console.log("success")
    res.json(notes)
  });
});
})



app.get("*", function (req, res) {     //define routs
  res.sendFile(path.join(__dirname, 'index.html'))  ///** path the notes.html file**/
});

app.listen(PORT, function () {
  //listen to a port and be able to handle responses
  console.log("App listening on PORT " + PORT);
});


// Access :id from 'req.params.id

// USE the fs module to read the file

// THEN parse the file contents with JSON.parse() to the real data

// Option A:
//  find the matching index using Array.findIndex()

// Remove the traget element using Array.splice()

//Option B:
// myArray = myArray.filter(({id}) => id !==req.params.id);

// Return any time of success message

// });



// HTML Routes set up
//app.get("/", function(req, res) {     //define routs
//s(/** path the notes.html file**/)
// });

// app.get("/notes", function(req, res) {     //define routs



//  res.sendFile("/");  // path the notes.html file
//..== });



