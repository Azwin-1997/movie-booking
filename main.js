const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(express.urlencoded({ extended: false }));
app.use(parser.json());

app.listen(4500, () => {
  console.log("server connected");
});

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/movie").then(() => {
  console.log("mongoose connected");
});

const landingroute = require("./router/landing_route");
app.use("/", landingroute);

const userloginroute = require("./router/user/userlogin");
app.use("/userlogin", userloginroute);

const userregisterroute = require("./router/user/user_register");
app.use("/userregister", userregisterroute);

const adminRoutes = require("./router/Admin/adminlogin");
app.use("/", adminRoutes);

const ownerroute = require("./router/owner/ownerlogin");
app.use("/ownerlogin", ownerroute);
