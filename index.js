import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "user", content: "What is the biggest city in Poland?" },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(chatCompletion.choices[0].message);
}

main();
