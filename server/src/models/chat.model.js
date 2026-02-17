import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      lowercase: true,
    },
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: "Convo",
    },
    personaId: {
      type: Schema.Types.ObjectId,
      ref: "Persona",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Chat = mongoose.model("Chat", chatSchema);
