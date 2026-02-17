import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { openai } from "../utils/geminiApi.js";
import { Chat } from "../models/chat.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { Convo } from "../models/convo.model.js";

const chatWithPersona = asyncHandler(async (req, res) => {
  const { userMessage } = req.body;
  const { convoId } = req.params;

  const convo = await Convo.findById(convoId).populate("personaId");

  if (!convo) {
    throw new ApiError(404, "No conversation found");
  }

  const chatHistory = await Chat.find({ conversationId: convo._id })
    .select("role content -_id")
    .sort({ createdAt: 1 });

  const persona = convo.personaId;

  let messages = [
    {
      role: "system",
      content: persona.description,
    },
  ];

  if (chatHistory && chatHistory.length > 0) {
    messages.push(...chatHistory);
  }
  messages.push({
    role: "user",
    content: userMessage,
  });

  const response = await openai.chat.completions.create({
    model: "gemini-2.5-flash",
    messages,
  });

  const answer = response.choices[0].message.content;

  if (!answer) {
    throw new ApiError(500, "something went wrong while generating answer");
  }

  const userChat = await Chat.create({
    role: "user",
    content: userMessage,
    conversationId: convo._id,
    personaId: convo.personaId,
    userId: req.user._id,
  });

  const assistantChat = await Chat.create({
    role: "assistant",
    content: answer,
    conversationId: convo._id,
    personaId: convo.personaId,
    userId: req.user._id,
  });

  return res.status(200).json(
    new ApiResponse(200, {
      user: {
        role: userChat.role,
        content: userChat.content,
      },
      assistant: {
        role: assistantChat.role,
        content: assistantChat.content,
      },
    })
  );
});

const getAllChats = asyncHandler(async (req, res) => {
  const { convoId } = req.params;

  if (!convoId) {
    throw new ApiError(400, "Conversation Id required");
  }

  const currentConversation = await Chat.find({ conversationId: convoId })
    .select("_id role content")
    .sort({ createdAt: 1 });

  if (!currentConversation) {
    throw new ApiError(500, "Something went wrong while loading chats");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, currentConversation, "chat fetched successfully")
    );
});

export { chatWithPersona, getAllChats };
