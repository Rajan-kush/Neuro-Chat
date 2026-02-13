import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      lowercase: true,
    },
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: Convo,
    },
  },
  {
    timestamps: true,
  }
);

export const Chat = mongoose.model("Chat", chatSchema);
