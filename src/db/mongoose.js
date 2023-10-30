const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/bookstore", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
