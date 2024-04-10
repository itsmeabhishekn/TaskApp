const mongoose = require("mongoose");

const process = require("process");
process.removeAllListeners("warning");

const connectDB = (url) =>{

   return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: false,
    })

}

module.exports = connectDB