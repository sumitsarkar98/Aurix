import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";

// import User model
import User from "../models/user.model.js";

// ================= Register Admin =================
const registerAdmin = asyncHandler(async (req, res) => {
  const { fullname, email, phone, password } = req.body;

  // Validate input
  if (
    [fullname, email, phone, password].some((field) => !field || !field.trim())
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if admin already exists
  const existingUser = await User.findOne({
    $or: [{ email: email.toLowerCase() }, { phone: phone.trim() }],
  });

  if (existingUser) {
    throw new ApiError(409, "User with this email or phone already exists");
  }

  // Create Admin
  const newAdmin = await User.create({
    fullname,
    email,
    phone,
    password,
    role: "admin",
  });
  return res
    .status(201)
    .json(
      new ApiResponse(201, {}, "Admin registered successfully. Please login."),
    );
});

export { registerAdmin };
