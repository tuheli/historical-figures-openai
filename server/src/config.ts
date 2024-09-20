import "dotenv/config";

export const openAiApiKey = process.env.OPENAI_API_KEY;

if (!openAiApiKey) {
  throw new Error("Open ai api key is missing from .env file.");
}
