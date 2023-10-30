const  bodyParser = require('body-parser')
const express = require("express");
const app = express();
require('./db/mongoose')

const port = process.env.PORT || 3000;

const bookRouter = require("./routes/book.route.js");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//TODO:user authentication 
//user id is passed as input as of now

app.use(bookRouter);

app.listen(port, () => {
  console.log("server is hosted on :", port);
});
