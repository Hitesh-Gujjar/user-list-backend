const express = require("express");
const dotenv = require("dotenv").config();
const errorHandle = require("./middleWare/errorHandler");
const connectDb = require("./config/dbConnect");

connectDb();

const app = express();
const port = 5000;

//USE MIDDLEWARE;


// WHENEVER PASS DATA FROM CLIENT TO SERVER THAT TIME WE USED PARSER(BODY BARSER);
//IT'S HELP TO ACCESS DATA FROM BODY;
app.use(express.json());
app.use("/app", require("./routes/auth"));
app.use("/app/user", require("./routes/users"));
app.use(errorHandle);

app.listen(port, () => {
  console.log("server is running on", port);
});
