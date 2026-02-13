import mongoose, { Schema } from "mongoose";

const personaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
});

export const Persona = mongoose.model("Persona", personaSchema);
