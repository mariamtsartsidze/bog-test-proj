const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const store = require("./starterTransactions");
const cors = require('cors');
const { uuid } = require('uuidv4');
const dateFormat = require('dateformat');
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.get("/transactions", (req, res) => {
  console.log("get transactions: ", req.query);

  let filteredTransactions = _.isEmpty(req.query) ?
    store.transactions : store.transactions.filter(transaction =>
      transaction.title.includes(req.query.filter) ||
      transaction.comment.includes(req.query.filter) ||
      transaction.category.includes(req.query.filter)
    )
  res.status(200);
  res.send({ transactions: filteredTransactions });
});


app.post("/transactions", (req, res) => {
  console.log('add transaction: ', req.body);

  let newAccountId = uuid()

  let newAccount = _.cloneDeep(req.body);
  newAccount.id = newAccountId;
  newAccount.amount = +newAccount.amount;
  if (newAccount.execDate === '') {
    newAccount.execDate = dateFormat(new Date(), 'yyyy-mm-dd');
  }

  store.transactions = [newAccount, ...store.transactions];
  res.status(200);
  res.send({ id: newAccountId });
});


app.put("/transactions/:id", (req, res) => {
  console.log('update transaction: ', req.body, req.params)

  transactionId = +req.params.id
  let indexToUpdate = store.transactions.findIndex((transaction) => transaction.id === transactionId)
  Object.assign(store.transactions[indexToUpdate], req.body);
  res.status(200);
  res.send({ value: store.transactions[indexToUpdate] });
});


app.delete("/transactions/:id", (req, res) => {
  console.log("transaction deleted: ", req.params)

  store.transactions = store.transactions.filter(transaction => transaction.id !== +req.params.id);
  res.status(200);
  res.send();
});


app.listen(port);
console.log(`server ready at port ${port}`);

//categories: payment service, gasoline, food, charity, transport