const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');


dotenv.config()

const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// databse name
const dbName = 'password-manager';
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyparser.json());


client.connect();




// get all the passwords
app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const finalResult = await collection.find({}).toArray();
  res.json(finalResult);
});

// save a password 
app.post('/',async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  await collection.insertOne(password);
  res.send("Password saved successfully");
})

// delete a password 
app.delete('/',async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  await collection.deleteOne(password);
  res.send(" Password deleted successfully");
})


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});