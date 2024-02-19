import { config } from "dotenv";
import OpenAI from "openai";

config();

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export async function translate(text) {
  const language = process.env.LANGUAGE;
  if (language.length === 0) return text;

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: `Translate this part of book to ${language}` },
      { role: "user", content: text },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}

export async function createSpeech(text) {
  return openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: text,
  });
}
