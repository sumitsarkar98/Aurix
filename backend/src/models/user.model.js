import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      sparse: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isPhoneVerified: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      default: "",
    },
    currentLocation: {},
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

export default User;
