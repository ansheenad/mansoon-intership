const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
var empModel = require('./model.js')
//Write missing code here

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await empModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

app.get('/get', async (request, response) => {
  try {
      const result = await empModel.find();
      response.send(result)
  } catch (error) {
      console.log(error)
  }
})


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
