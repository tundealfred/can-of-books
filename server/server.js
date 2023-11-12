const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Book = require("./models/book");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const axios = require("axios");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (_, response) => response.json("Root route for can-of-worms."));

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
