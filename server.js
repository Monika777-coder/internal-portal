const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const data = require("./data.json");

app.use(cors());
app.use(express.static(__dirname));
app.use(express.json());

app.get("/api/intern", (req, res) => {
  res.json(data.intern);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(data.leaderboard);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
