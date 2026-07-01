import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";

import GoldPrice from "../models/price.model.js";

// ===== Create Gold Price =====
const createGoldPrice = asyncHandler(async (req, res) => {
  const { purity, pricePerGram, currency, effectiveDate, source } = req.body;

  if (!purity || !pricePerGram || !effectiveDate) {
    throw new ApiError(400, "Purity, price and effective date are required.");
  }

  const goldPrice = await GoldPrice.create({
    purity,
    pricePerGram,
    currency,
    effectiveDate,
    source,
    createdBy: req.user._id,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, goldPrice, "Gold price created successfully."));
});

// ===== Get Gold Prices Today =====
const getTodayGoldPrices = asyncHandler(async (req, res) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const goldPrices = await GoldPrice.find({
    effectiveDate: {
      $gte: startOfDay,
      $lte: endOfDay,
    },
  }).sort({ purity: 1 });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        goldPrices,
        "Today's gold prices retrieved successfully.",
      ),
    );
});

export { createGoldPrice, getTodayGoldPrices };
