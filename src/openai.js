import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser : true,
});




export async function sendMsgToOpenAI(message) {
  try {
    const res = await openai.chat.completions.create({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stream: true,
    });

    return res.choices[0].text;
  } catch (error) {
    console.error("Error sending message to OpenAI:", error);
    throw error;
  }
}
