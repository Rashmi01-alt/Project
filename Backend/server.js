const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/cruds_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
