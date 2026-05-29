require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Campus Event Manager API Running");
});
app.use("/api/events", require("./routes/eventRoutes"));

const PORT = process.env.PORT || 5000;

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});