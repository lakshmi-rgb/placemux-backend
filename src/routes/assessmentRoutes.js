const express = require("express");
const router = express.Router();

let assessments = [];
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Assessment Route Working"
  });
});

router.post("/start", (req, res) => {
  const assessment = {
    id: Date.now().toString(),
    userId: req.body.userId,
    status: "IN_PROGRESS",
    startedAt: new Date()
  };

  assessments.push(assessment);

  res.json({
    success: true,
    data: assessment
  });
});

router.get("/:id", (req, res) => {
  const assessment = assessments.find(
    a => a.id === req.params.id
  );

  if (!assessment) {
    return res.status(404).json({
      success: false,
      message: "Assessment not found"
    });
  }

  res.json(assessment);
});

router.post("/submit", (req, res) => {
  const { id, score } = req.body;

  const assessment = assessments.find(
    a => a.id === id
  );

  if (!assessment) {
    return res.status(404).json({
      success: false,
      message: "Assessment not found"
    });
  }

  assessment.status = "COMPLETED";
  assessment.score = score;

  res.json({
    success: true,
    data: assessment
  });
});

module.exports = router;