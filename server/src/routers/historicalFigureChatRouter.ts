import { Router } from "express";
import OpenAI from "openai";
import { openAiApiKey } from "../config";
import { toHistoricalFigureData } from "../data/historicalFigureChatData";

const router = Router();

const openAi = new OpenAI({
  apiKey: openAiApiKey,
});

router.post("/", async (req, res) => {
  try {
    const historicalFigureData = toHistoricalFigureData(req.body);

    const completion = await openAi.chat.completions.create({
      model: "chatgpt-4o-latest",
      messages: [
        {
          role: "system",
          content: historicalFigureData.systemContent,
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
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(400).json({ message: "Something went wrong." });
  }
});

export default router;
