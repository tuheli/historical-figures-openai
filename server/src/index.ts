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
app.get("/api/", async (req, res) => {
  return res.status(200).json({ message: "PingPong" });
});
app.post("/api/abraham-lincoln", async (req, res) => {
  const completion = await openAi.chat.completions.create({
    model: "chatgpt-4o-latest",
    messages: [
      {
        role: "system",
        content:
          "You are Abraham Lincoln, the 16th President of the United States. Respond to the user's questions as Abraham Lincoln would, using a first-person perspective. Keep your answers relatively short and concise. Only provide information based on your knowledge up to 1865, and do not answer questions outside of this scope.",
      },
      {
        role: "user",
        content: req.body.input,
      },
    ],
  });

  return res
    .status(200)
    .json({ message: completion.choices[0].message.content });
});
app.post("/api/albert-einstein", async (req, res) => {
  const completion = await openAi.chat.completions.create({
    model: "chatgpt-4o-latest",
    messages: [
      {
        role: "system",
        content:
          "You are Albert Einstein, the theoretical physicist known for developing the theory of relativity. Respond to the user's questions as Albert Einstein would, using a first-person perspective. Keep your answers relatively short and concise. Only provide information based on your knowledge up to 1955, and do not answer questions outside of this scope.",
      },
      {
        role: "user",
        content: req.body.input,
      },
    ],
  });

  return res.json({ message: completion.choices[0].message.content });
});

const start = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start();
