import { openai } from "../utils/geminiApi.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Convo } from "../models/convo.model.js";

const newConversation = asyncHandler(async (req, res) => {
  const { userMessage, personaId } = req.body;

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

  const newConvo = await Convo.create({
    convoTitle,
    personaId,
    userId: req.user._id,
  });

  if (!newConvo) {
    throw new ApiError(500, "Something went wrong while generating convo");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, newConvo, "convo created successfully"));
});

const getAllConvo = asyncHandler(async (req, res) => {
  const allConvo = await Convo.find({ userId: req.user._id })
    .select("_id convoTitle")
    .sort({ updatedAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, allConvo, "convo fetched sucessfully"));
});

export { newConversation, getAllConvo };
