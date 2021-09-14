const express = require("express");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const rootApi = require("./routes/api.routes");
app.use(cors());

// files-------
app.use(express.static("files"));
app.use("/image", express.static(path.join(__dirname, "uploads")));
//---json filed-----
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// api -----------------

app.use("/api", rootApi);
// error handling ------------------
app.use((err, req, res, next) => {
  res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || err,
  });
});

app.use(express.static(path.join(__dirname, "build")));
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server start on http://localhose:${PORT}`);
});
