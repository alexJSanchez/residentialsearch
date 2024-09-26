const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "residential",
});


app.post('/add_user', (req, res) => {
  sql = "INSERT INTO locations ('name', 'super', 'office', 'cell', 'busuper','bucell') VALUES (?,?,?,?)";
  const values = [
    req.body.name,
    req.body.super,
    req.body.office,
    req.body.cell,
    req.body.busuper,
    req.body.bucell
  ]
  db.query(sql, values, (err, result) => {
    if (err) return res.json({ message: 'something unexpected has occured' + err })
    return res.json({ sucess: "student added successfully" })
  })
})


app.listen(port, () => {
  console.log("listening");
});
