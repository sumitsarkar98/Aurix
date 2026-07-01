import Lead from "../models/lead.model.js";
import GoldPrice from "../models/price.model.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

// Create Lead
export const createLead = asyncHandler(async (req, res) => {
  const { leadType, goldPrice, weight, address, remarks } = req.body;

  if (!leadType || !goldPrice || !weight || !address) {
    throw new ApiError(400, "All required fields are mandatory.");
  }

  const price = await GoldPrice.findById(goldPrice);

  if (!price) {
    throw new ApiError(404, "Gold price not found.");
  }

  const estimatedAmount = weight * price.pricePerGram;

  const lead = await Lead.create({
    leadType,
    customer: req.user._id,
    goldPrice,
    weight,
    estimatedAmount,
    address,
    remarks,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, lead, "Lead created successfully."));
});

// Get All Leads
export const getAllLeads = asyncHandler(async (req, res) => {
  const leads = await Lead.find()
    .populate("customer", "fullname phone email")
    .populate("goldPrice")
    .populate("handledBy", "fullname email")
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, leads, "Leads retrieved successfully."));
});

// Get Lead By ID
export const getLeadById = asyncHandler(async (req, res) => {
  const lead = await Lead.findById(req.params.id)
    .populate("customer", "fullname phone email")
    .populate("goldPrice")
    .populate("handledBy", "fullname email");

  if (!lead) {
    throw new ApiError(404, "Lead not found.");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, lead, "Lead retrieved successfully."));
});

// Update Lead Status
export const updateLeadStatus = asyncHandler(async (req, res) => {
  const { status, remarks } = req.body;

  const lead = await Lead.findById(req.params.id);

  if (!lead) {
    throw new ApiError(404, "Lead not found.");
  }

  if (status) {
    lead.status = status;
  }

  if (remarks !== undefined) {
    lead.remarks = remarks;
  }

  lead.handledBy = req.user._id;

  await lead.save();

  return res
    .status(200)
    .json(new ApiResponse(200, lead, "Lead updated successfully."));
});

// Delete Lead
export const deleteLead = asyncHandler(async (req, res) => {
  const lead = await Lead.findById(req.params.id);

  if (!lead) {
    throw new ApiError(404, "Lead not found.");
  }

  await lead.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Lead deleted successfully."));
});
