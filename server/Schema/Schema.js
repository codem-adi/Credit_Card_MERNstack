const url = "mongodb://localhost:27017/admin"; //for the offline use
//"mongodb+srv://<UserName>:<Password>@cluster0.isqzr06.mongodb.net/?retryWrites=true&w=majority";  //for mongoose atlus web

// const year = new Date().getFullYear;
const mongoose = require("mongoose");
mongoose.connect(url);
const mySchema = mongoose.Schema({
  cardNumber: { type: String, require: true, minLength: 16 },
  cardHolderName: { type: String, require: true },
  expMonth: { type: String, require: true, minLength: 2, max: 12 },
  expYear: { type: Number, require: true, min: 2022 },
  cvv: { type: String, require: true, minLength: 3, maxLength: 3 },
});

module.exports = mongoose.model("creditCard", mySchema);
