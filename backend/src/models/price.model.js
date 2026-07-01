import mongoose from "mongoose";

const goldPriceSchema = new mongoose.Schema(
  {
    purity: {
      type: String,
      enum: ["24K", "22K", "18K"],
      required: true,
    },
    pricePerGram: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: "INR",
    },
    effectiveDate: {
      type: Date,
      required: true,
    },
    source: {
      type: String,
      enum: ["Admin", "API"],
      default: "Admin",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

const GoldPrice = mongoose.model("GoldPrice", goldPriceSchema);

export default GoldPrice;
