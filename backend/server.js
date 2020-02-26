const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const port = 3000;

const app = express();
app.use(bodyParser.json());

const store = {};
store.transactions = [];

app.get("/transactions", (req, res) => {
  console.log("get transactions: ", req.query);

  let filteredTransactions = _.isEmpty(req.query) ?
    store.transactions : store.transactions.filter(transaction =>
      transaction.title.includes(req.query.title) ||
      transaction.comment.includes(req.query.comment) ||
      transaction.category.includes(req.query.category)
    )
  res.status(200).send({ transactions: filteredTransactions });
});


app.post("/transactions", (req, res) => {
  console.log('add transaction: ', req.body);

  let transLen = store.transactions.length;
  let newAccountId = transLen ? store.transactions[transLen - 1].id + 1 : 1

  let newAccount = _.cloneDeep(req.body);
  newAccount.id = newAccountId;

  store.transactions.push(newAccount);
  res.status(200).send({ id: newAccountId });
});


app.put("/transactions/:id", (req, res) => {
  console.log('update transaction: ', req.body, req.params)

  transactionId = +req.params.id
  let indexToUpdate = store.transactions.findIndex((transaction) => transaction.id === transactionId)
  Object.assign(store.transactions[indexToUpdate], req.body);
  res.status(200).send({ value: store.transactions[indexToUpdate] });
});


app.delete("/transactions/:id", (req, res) => {
  console.log("transaction deleted: ", req.params)

  store.transactions = store.transactions.filter(transaction => transaction.id !== +req.params.id);
  res.status(200).send();
});


app.listen(port);
console.log(`server ready at port ${port}`);

//categories: payment service, gasoline, food, charity, transport