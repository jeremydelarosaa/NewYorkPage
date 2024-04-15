import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import bcrypt from "bcrypt";
import db from "./utils/db.js";
import jwt from "jsonwebtoken";
import "dotenv/config";
const port = process.env.NODE_ENV || 3000;
const app = express();
app.use(cors());
app.use(express.json());

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");

const connect = async () => {
  await mongoClient.connect();
  db.blog = mongoClient.db("blog");
  db.users = db.blog.collection("users");
  console.log("connessione avvenuta");
  app.listen(port, () => console.log("Server in ascolto"));
};

connect().catch((err) => console.log(err));

app.post("/Register", async (req, res) => {
  const { Name, LastName, Email, Password, City, Agree } = req.body.dati;
  const Verify = await db.users.findOne({ Email });
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(Password, salt);
  const users = { Name, LastName, Email, Password: hash, City, Agree };

  if (Verify) {
    res.send(true);
  } else {
    res.send(false);
    await db.users.insertOne(users);
  }
});

app.post("/Login", async (req, res) => {
  const { Email, Password } = req.body.dati;
  const Verify = await db.users.findOne({ Email });
  const passwordCheck = bcrypt.compareSync(Password, Verify.Password); //Qq12345678!

  if (Verify && passwordCheck) {
    const payload = { sub: Verify._id.toString(), isLogged: true };
    const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: 60 });
    res.cookie("tokenJWT", token, {
      maxAge: 60 * 10000,
      httpOnly: true,
      secure: true,
    });
    res.send(false);
  } else {
    res.send(true);
  }
});
