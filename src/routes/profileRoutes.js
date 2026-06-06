const authMiddleware = require("../middleware/authMiddleware");

const express = require("express");
const router = express.Router();

let profile = {};

router.post("/", (req, res) => {
  profile = req.body;

  res.json({
    success: true,
    message: "Profile Created",
    data: profile
  });
});

router.get("/", authMiddleware, (req, res) => {
  res.json({
    user: req.user,
    profile
  });
});

router.put("/", (req, res) => {
  profile = {
    ...profile,
    ...req.body
  };

  res.json({
    success: true,
    message: "Profile Updated",
    data: profile
  });
});

router.delete("/", (req, res) => {
  profile = {};

  res.json({
    success: true,
    message: "Profile Deleted"
  });
});

module.exports = router;


router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Profile Route Working"
  });
});