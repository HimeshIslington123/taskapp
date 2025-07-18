import mongoose from "mongoose";

const Register_schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, default: "User" }
});

export const Register_model = mongoose.model("Register_table", Register_schema);
