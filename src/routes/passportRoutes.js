const express = require("express");
const router = express.Router();

let passports = [];

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Passport Route Working"
  });
});

router.post("/", (req, res) => {
  const passport = {
    userId: req.body.userId,
    skills: req.body.skills,
    level: req.body.level,
    createdAt: new Date()
  };

  passports.push(passport);

  res.json({
    success: true,
    data: passport
  });
});

router.get("/:userId", (req, res) => {
  const passport = passports.find(
    p => p.userId === req.params.userId
  );

  if (!passport) {
    return res.status(404).json({
      success: false,
      message: "Passport not found"
    });
  }

  res.json(passport);
});

module.exports = router;