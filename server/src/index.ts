import "./config";
import express from "express";
import cors from "cors";

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", async (req, res) => {
  return res.status(200).json({ message: "PingPong" });
});

const start = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();
