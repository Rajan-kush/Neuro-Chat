import mongoose, { Schema } from "mongoose";

const convoSchema = new Schema(
  {
    convoTitle: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    chats: [
      {
        type: Schema.Types.ObjectId,
        ref: "Chat",
      },
    ],
    personaId: {
      type: Schema.Types.ObjectId,
      ref: "Persona",
    },
  },
  {
    timestamps: true,
  }
);

export const Convo = mongoose.model("Convo", convoSchema);
