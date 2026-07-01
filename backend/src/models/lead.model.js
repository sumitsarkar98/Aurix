import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    leadType: {
      type: String,
      enum: ["Buy", "Sell"],
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    goldPrice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GoldPrice",
      required: true,
    },
    weight: {
      type: Number,
      required: true,
      min: 0.1,
    },
    estimatedAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    address: {
      fullAddress: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      pincode: {
        type: String,
        required: true,
        trim: true,
      },
      landmark: {
        type: String,
        default: "",
        trim: true,
      },
      location: {
        latitude: Number,
        longitude: Number,
      },
    },
    status: {
      type: String,
      enum: ["Pending", "Contacted", "Follow-up", "Completed", "Rejected"],
      default: "Pending",
    },
    remarks: {
      type: String,
      default: "",
      trim: true,
    },
    handledBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Lead", leadSchema);
