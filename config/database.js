const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MongoDb Connected Ka Host ${data.connection.host}`);
    })
    .catch((err) => console.log(`No Connection ${err}`));
};
module.exports = connectDatabase;
