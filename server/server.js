const express = require("express");
const db = require("./database");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
// === Models ===
const User = require("./models/User");
const Card = require("./models/Card");
const Account = require("./models/Account");
const Currency = require("./models/Currency");
const Transaction = require("./models/Transaction");
// === Test Data ===
const Users = require("./data/users.json");
const Accounts = require("./data/accounts.json");
const Cards = require("./data/cards.json");
const Transactions = require("./data/transactions.json");

db.connectDatabase();

app.use(cors());

app.set("json spaces", 2);

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//api routes
app.use(require("./api/user"));
app.use(require("./api/account"));
app.use(require("./api/transaction"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// loading data in DB

Currency.updateCurrencies();

saveAll = async () => {
  for (let i = 0; i < Accounts.length; i++) {
    /*try {
      await User.saveOrUpdate(Users.at(i));
    } catch (err) {
      console.log("err" + err);
    }*/

    try {
      await Account.saveOrUpdate(Accounts.at(i));
    } catch (err) {
      console.log("err" + err);
    }
    /*
    try {
      await Card.saveOrUpdate(Cards.at(i));
    } catch (err) {
      console.log("err" + err);
    }*/
  }
  /*
  for (let j = 0; j < Transactions.length; j++) {
    try {
      await Transaction.saveOrUpdate(Transactions.at(j));
    } catch (err) {
      console.log("err" + err);
    }
  }*/
};

//saveAll();

//const { executeTests } = require("./tests");

//executeTests();
