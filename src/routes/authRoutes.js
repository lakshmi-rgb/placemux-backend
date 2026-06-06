const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

router.post(
  "/send-otp",
  body("email").isEmail(),

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    res.json({
      success: true,
      otp: "123456",
      message: "OTP sent successfully"
    });
  }
);

router.post("/verify-otp", (req, res) => {
  const { otp } = req.body;

  if (otp === "123456") {

    const token = jwt.sign(
      {
        email: "test@gmail.com"
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h"
      }
    );

    return res.json({
      success: true,
      token
    });
  }

  res.status(400).json({
    success: false,
    message: "Invalid OTP"
  });
});

module.exports = router;

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth route working"
  });
});


router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth Route Working"
  });
});

