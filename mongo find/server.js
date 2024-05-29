let mongoose = require("mongoose");
let nodemon = require("nodemon");
let express = require("express");
let cors = require("cors");

let app = express();

app.use(cors());

app.get("/employees", async (req, res) => {
  let employees = await Employee.find();
  //   .distinct("country") ** gives distinct outputs **
  //   .and([{country:"Japan",gender:"Male"}]).count()  ** if count is used only number is given back as output **
  // .select([
  //     "first_name",
  //     "last_name",
  //     "age",
  //   ])    ** names should match from database **
  //   .sort("-age salary country")
  //   .sort("salary")
  //   .and([{country:"Russia"},{gender:"Male"},{age:{$gte:22,$lte:35}}])
  //   .limit(100).skip(444);
  res.json(employees);
});
app.listen(4444, () => {
  console.log("Listening to port 4444");
});

let employeeSchema = new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  age: Number,
  profilepicture: String,
  country: String,
  salary: Number,
});

let Employee = new mongoose.model("employee", employeeSchema);

let connectToMongoDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://jeevanrdy:jeevanrdy@skynet.ycaxxus.mongodb.net/FakeOffice?retryWrites=true&w=majority&appName=SkyNet"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Unable to connect to MongoDB");
  }
};

connectToMongoDB();
