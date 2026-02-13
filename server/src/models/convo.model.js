import mongoose, { Schema } from "mongoose";

const convoSchema = new Schema(
  {
    chatTitle: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    chat: [
      {
        type: Schema.Types.ObjectId,
        ref: "Chat",
      },
    ],
    characterId: {
      type: Schema.Types.ObjectId,
      ref: Persona,
    },
  },
  {
    timestamps: true,
  }
);

export const Convo = mongoose.model("Convo", convoSchema);
