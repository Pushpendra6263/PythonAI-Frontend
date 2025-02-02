import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ response: "Method not allowed." });
  }

  const { message, apiKey } = req.body;
  if (!apiKey) {
    return res.status(400).json({ response: "API key is missing." });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text(); 
    res.status(200).json({ response: text });
  } catch (error) {
    res.status(500).json({ response: `An error occurred: ${error.message}` });
  }
}
