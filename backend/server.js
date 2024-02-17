const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();



const cors = require("cors");

const corsOptions = {
    origin : "https://crud-mernapp-my77.vercel.app/",
    method : "GET , POST , PUT , PATCH , DELETE , HEAD",
    Credential : true
}

app.use(cors(corsOptions));
app.use(express.json());
// import userRoute file means import APIS file
const userRoute= require("./routes/userRoute");



// connect to mongodb database
mongoose.connect(process.env.URI)
.then(() => {
    console.log("Connected Successfully");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log(`running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to connect", error)
  });

app.use(userRoute);


