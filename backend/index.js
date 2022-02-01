const express = require("express");
const cors = require("cors");
const app = express();
const port = 3030;

let transactions = [];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/transactions", (req, res) => {
  return res.json(transactions);
});

app.post("/transactions", (req, res) => {
  const { description, value, isRevenue } = req.body;
  const id = transactions.length
    ? transactions[transactions.length - 1].id + 1
    : 1;
  const transaction = { id, description, value, isRevenue };

  transactions.push(transaction);

  return res.json(transaction);
});

app.put("/transactions/:id", (req, res) => {
  const { description, value, isRevenue } = req.body;
  const id = Number(req.params.id);
  const transaction = { id, description, value, isRevenue };

  transactions = transactions.map((item) =>
    item.id !== id ? item : transaction
  );

  return res.json(transaction);
});

app.delete("/transactions/:id", (req, res) => {
  const id = Number(req.params.id);

  transactions = transactions.filter((item) => item.id !== id);

  return res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`🚀 Running on port ${port}`);
});
