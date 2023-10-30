const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes/api");

// Check for .env file in development
if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config.configPath = "./.env";
  const result = dotenv.config();
  if (result.error) {
    throw result.error;
  }
}

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", apiRouter);

if (process.env.NODE_ENV == "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("./public"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./", "public", "index.html"));
  });
}

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
