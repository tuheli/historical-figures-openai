import "./config";
import express from "express";
import cors from "cors";
import path from "path";
import historicalFigureChatRouter from "./routers/historicalFigureChatRouter";

const port = 3000;
const relativeDistPath =
  process.env.NODE_ENV === "production" ? "../" : "../dist";
const absoluteDistPath = path.join(__dirname, relativeDistPath);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", express.static(absoluteDistPath));
app.use("/api/historical-figure-chat", historicalFigureChatRouter);
app.get("/*", (req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    return res.status(404).json({ message: "Unknown endpoint." });
  } else {
    const filepath = absoluteDistPath + "index.html";
    return res.sendFile(filepath);
  }
});

const start = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();
