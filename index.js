const express = require("express");

const mongoose = require("mongoose");
const UserModel = require("./Model/UserModel");

const cors = require("cors");

const port = 5000;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://hemant:hemant@cluster0.zm42fgw.mongodb.net/?retryWrites=true&w=majority",
  (error) => console.log("connected", error)
);

app.post("/resgister", (request, response) => {
  console.log(request.body);

  const newUser = UserModel({
    name: request.body.name,
    password: request.body.password,
    email: request.body.email,
    phone: request.body.phone,
  });

  newUser.save();
  response.json(newUser);
});

app.post("/login",async(request, response) => {
  const data = await UserModel.findOne({
    name: request.body.name,
    password: request.body.password,
  });
  if (data.name === request.body.name) {
    response.send("logged in");
  } else {
    response.send("invaild user");
  }
});

app.listen(port, function () {
  console.log("connected", port);
});
