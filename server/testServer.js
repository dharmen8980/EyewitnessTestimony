const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var mysql = require("mysql");

// const dbAWS = mysql.createConnection({
//   host: "dharmendb.cw1z8m6f2b9z.us-east-2.rds.amazonaws.com",
//   port: "3306",
//   user: "sharmadk",
//   password: "t0theskY.",
//   database: "Eyewitness",
// });

const dblocal = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "sharma55.",
  database: "Eyewitness",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// dbAWS.connect(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("connected");
//   }
// });

dblocal.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

// app.post("/api/insert", (req, res) => {
//   const movieName = req.body.movieName;
//   const movieReview = req.body.movieReview;
//   const sqlInsert =
//     "INSERT INTO AfricanAmerican (Name, Ethnicity) VALUES (?,?)";
//   dbAWS.query(sqlInsert, [movieName, movieReview, (err, result) => {}]);
//   console.log("this");
// });

app.post("/api/insert/AfricanAmerican", (req, res) => {
  const name = req.body.name;
  console.log(name);
  const age = req.body.age;
  const ethnicity = req.body.ethnicity;
  const gender = req.body.gender;
  const option1 = req.body.option1;
  const option1Confidence = req.body.option1Confidence;
  const option2 = req.body.option2;
  const option2Confidence = req.body.option2Confidence;
  const option3 = req.body.option3;
  const option3Confidence = req.body.option3Confidence;
  const option4 = req.body.option4;
  const option4Confidence = req.body.option4Confidence;
  const option5 = req.body.option5;
  const option5Confidence = req.body.option5Confidence;
  const option6 = req.body.option6;
  const option6Confidence = req.body.option6Confidence;

  const sqlInsert =
    "INSERT INTO AfricanAmerican (Name, Age, Ethnicity, Gender, option1, option1Confidence, option2, option2confidence, option3, option3Confidence, option4, option4Confidence, option5, option5Confidence, option6, option6Confidence) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  dblocal.query(sqlInsert, [name, age, ethnicity, gender, option1, option1Confidence, option2, option2Confidence, option3, option3Confidence, option4, option4Confidence, option5, option5Confidence, option6, option6Confidence, (err, result) => {}]);
  res.send("success");
  console.log("success");
});

app.post("/api/verify", (req, res) => {
  const user = req.body.user;
  console.log(user);
  const pwd = req.body.password;
  console.log(pwd);
  const sqlSelect = "SELECT password FROM admin where username = ?;";
  dblocal.query(sqlSelect,[user],(err, result) => {
    console.log(result);
    if(result.length > 0) {
      if(pwd == result[0].password){
        res.send("success")
        console.log("success");
        }
      else {
        res.send("failure");
        console.log("failure");
      }
    }
     else {
        res.send("failure");
        console.log("failure");
      }
  });
});

app.get("/api/get/AfricanAmerican", (req, res) => {
  const sqlSelect = "SELECT * FROM AfricanAmerican";
  dblocal.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.listen(8080, () => {
  console.log("running on port 8080");
});
