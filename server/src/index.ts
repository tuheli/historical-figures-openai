import "./config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import { openAiApiKey } from "./config";

const port = 3000;
const app = express();
const openAi = new OpenAI({
  apiKey: openAiApiKey,
});

app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
  return res.status(200).json({ message: "PingPong" });
});
app.get("/openai", async (req, res) => {
  const completion = await openAi.chat.completions.create({
    model: "chatgpt-4o-latest",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: "Write a haiku about recursion in programming.",
      },
    ],
  });

  return res
    .status(200)
    .json({ message: completion.choices[0].message.content });
});

const start = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();
