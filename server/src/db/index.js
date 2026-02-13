import mongoose from "mongoose";
import { Persona } from "../models/persona.model.js";
import { persona } from "../utils/persona.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}`
    );
    for (const p of persona) {
      await Persona.updateOne({ name: p.name }, { $set: p }, { upsert: true });
    }
    console.log(
      `MongoDB connected || DB Host : ${connectionInstance.connection.host}, persona seeded successfully!`
    );
  } catch (error) {
    console.log("Mongo DB connection failed!");
    process.exit(1);
  }
};

export default connectDB;
