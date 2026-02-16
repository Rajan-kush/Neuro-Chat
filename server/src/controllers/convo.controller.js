import { openai } from "../utils/geminiApi.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const newConvo = asyncHandler(async (req, res) => {
  const { userMessage } = req.body;

  if (!userMessage) {
    throw new ApiError(400, "Empty chat message");
  }

  const response = await openai.chat.completions.create({
    model: "gemini-2.5-flash",
    messages: [
      {
        role: "system",
        content: `Generate a short, clear conversation title based on the user's first message.

        Rules:
        - Maximum 5 words
        - No punctuation at the end
        - No quotes
        - Use natural, human-friendly phrasing
        - Focus on the main intent or topic
        - Capitalize like a normal title`,
      },
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  const convoTitle = response.choices[0].message.content;

  if (!convoTitle) {
    throw new ApiError(500, "Something went wrong!");
  }

  return res.status(201).json(new ApiResponse(201, convoTitle));
});
