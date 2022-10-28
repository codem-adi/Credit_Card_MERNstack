const exp = require("express");
const cors = require("cors");
const mySchema = require("./Schema/Schema");
const app = exp();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(exp.json());
app.get("/", (req, resp) => {
  resp.send("hello there");
});

app.post("/reg", async (req, resp) => {
  // console.log(cardNumber, Name, expMonth, expYear, cvv);
  const cardDetails = new mySchema({
    cardNumber: req.body.cardNumber,
    cardHolderName: req.body.Name,
    expMonth: req.body.expMonth,
    expYear: req.body.expYear,
    cvv: req.body.cvv,
  });
  await cardDetails.save();
  resp.send(req.body);
  console.log(cardDetails);
});

app.listen(5000, "127.0.0.1", () => {
  console.log("Sunn reha hai server on port 5000");
});
