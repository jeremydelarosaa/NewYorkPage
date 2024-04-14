import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
const port = process.env.NODE_ENV || 3000;
const app = express();
app.use(cors());
app.use(express.json());

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/NewYork");

const connect = async () => {
  await mongoClient.connect();
  console.log("connessione avvenuta");
  app.listen(port, () => console.log("Server in ascolto"));
};

connect().catch((err) => console.log(err));

app.post("/Register", (req, res) => {
  console.log(req.body.dati);
  res.json(true);
});
