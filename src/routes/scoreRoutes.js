const express = require("express");
const router = express.Router();

let scores = [];

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Score Route Working"
  });
});

router.post("/save", (req, res) => {
  const score = {
    userId: req.body.userId,
    score: req.body.score,
    verdict: req.body.score >= 70 ? "PASS" : "FAIL"
  };

  scores.push(score);

  res.json({
    success: true,
    data: score
  });
});

router.get("/:userId", (req, res) => {
  const userScores = scores.filter(
    s => s.userId === req.params.userId
  );

  res.json(userScores);
});

module.exports = router;