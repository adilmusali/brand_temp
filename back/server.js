const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DB = process.env.DB_URL;
mongoose.connect(DB, { useNewUrlParser: true });

const { Schema } = mongoose;
const brandSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Brand = mongoose.model("brand", brandSchema);

app.get("/brand", async (req, res) => {
  const brand = await Brand.find({});
  res.send(brand);
});

app.get("/brand/:id", async(req,res) => {
  const findId = req.params.id;
  const brand = await Brand.findById(findId);
  res.send(brand)
})

app.post("/brand", async (req, res) => {
  const uploadData = req.body;
  const brand = new Brand(uploadData);
  brand.save();
  res.send(brand);
});

app.delete("/brand/:id", async(req,res) => {
    const findId = req.params.id;
    await Brand.findByIdAndDelete(findId);
    res.send({message: "Successfully Deleted!"})
})

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
