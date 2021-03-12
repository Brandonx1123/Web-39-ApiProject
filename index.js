require("dotenv").config();

console.log("brandon rules");

const express = require("express");

const server = express();

server.use(express.json());

// server.use(cors());

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  // on heroku machine, an env variable is called "NODE_ENV" --> "production"
  const cors = require("cors");
  server.use(cors());
}

server.use("*", (req, res) => {
  res.send("<h1>Brandons API </h1>");
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
