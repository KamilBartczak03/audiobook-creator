import fs from "fs";
import path from "path";
import { translate, createSpeech } from "./OpenAi.js";

const book = fs.readFileSync("book.txt", "utf-8");
const book_splitted = book.split("\n\n");

async function initBookCreation(index) {
  if (index > book_splitted.length) return;

  const translation = await translate(book_splitted[index]);
  const speech = await createSpeech(translation);

  const bufferSpeech = Buffer.from(await speech.arrayBuffer());
  const bufferText = Buffer.from(translation);

  const speechFile = path.resolve(`audio/book_${index}.mp3`);
  const textFile = path.resolve(`txt/book_${index}.txt`);

  await fs.promises.writeFile(speechFile, bufferSpeech);
  await fs.promises.writeFile(textFile, bufferText);

  console.log(`completed: ${index} / ${book_splitted.length}`);

  initBookCreation(index + 1);
}

initBookCreation(0);
