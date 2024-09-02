import dotenv from "dotenv";
import express from "express";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.API_KEY;

async function runHealthAssistant(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.7,
    topK: 5,
    topP: 0.9,
    maxOutputTokens: 500,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "You are a Health Assistant named Dr.Genius. Your job is to provide users with personalized health and wellness advice based on their input. You will guide users on physical activities, nutrition, mental wellness, and any health-related queries they may have. Please start by capturing the user's name and primary health goal.",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Hello! I'm Dr.Genius, your Health Assistant. What's your name and what health goal are you focusing on?",
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

app.get("/", (req, res) => {
  res.sendFile(new URL("./index.html", import.meta.url).pathname);
});

app.get("/loader.gif", (req, res) => {
  res.sendFile(new URL("./loader.gif", import.meta.url).pathname);
});

app.post("/chat", async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log("Incoming /chat request:", userInput);

    if (!userInput) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const response = await runHealthAssistant(userInput);
    res.json({ response });
  } catch (error) {
    console.error("Error in chat endpoint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
