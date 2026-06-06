const profileRoutes = require("./routes/profileRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/authRoutes");

// Register Routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "PlaceMux Backend Running Successfully"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use("/profile", profileRoutes);
const { swaggerUi, swaggerDocument } = require("./swagger");

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);