require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});
