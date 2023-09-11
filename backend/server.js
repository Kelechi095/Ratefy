require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const userRouter = require("./routes/userRoutes");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'))

app.use("/api/v1/users", userRouter)

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
