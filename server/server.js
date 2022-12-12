const express = require('express');//Set up the express module
const app = express();
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

app.use(cors());
// router.get('/', function (req, res) {
//   res.json({ "name": "shiv" });
// });

router.post('/', function (req, res) {
  const data = req.body;
  const csvData = [];
  const headers = [];
  Object.keys(data).forEach(key => {
    headers.push(key);
    csvData.push(data[key]);
  });

  if (!fs.existsSync("result.csv")) {
    fs.writeFileSync("result.csv", headers.join(","));
  }

  fs.appendFileSync("result.csv", "\n" + csvData.join(","));
  res.send("ok");
});

app.use(bodyParser());
app.use('/', router);

let server = app.listen(8080, function () {
  console.log("App server is running on port 8080");
  console.log("to end press Ctrl + C");
});