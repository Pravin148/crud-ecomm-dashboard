const express = require("express");
const cors = require("cors");
require("./db/config");
const Product = require("./db/ProdModel");
const Users = require("./db/user");

// JWT configuration
const Jwt = require("jsonwebtoken");
const jwtKey = "ecomm";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/list", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});

app.post("/signup", async (req, res) => {
  let data = new Users(req.body);
  const result = await data.save();
  Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      res.send({error : "Error found"});
    }
    res.send({result, auth: token });
  });
});

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let user = await Users.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          resp.send({error : "Error found"});
        }
        resp.send({user, auth: token });
      });
    } else{
        resp.send();
    }
  }else{
    resp.send();
  }
});

app.post("/add", async (req, resp) => {
  let product = await Product(req.body);
  let result = await product.save();
  resp.send(result);
});

app.delete("/delete/:id", async (req, resp) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

// Update API

app.get("/update/:id", async (req, res) => {
  let data = await Product.findOne({ _id: req.params.id });
  res.send(data);
});

app.put("/update/:id", async (req, res) => {
  let data = await Product.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(data);
});

// Search API

app.get("/search/:key", async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(result);
});



// jwt authorization middleware


app.listen(5000);
