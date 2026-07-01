// import utils
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";

// import User model
import User from "../models/user.model.js";

// ===== Generate Access & Refresh Token =====
const generateAccessandRefreshToken = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found while generating tokens");
  }

  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return { accessToken, refreshToken };
};

// ================= Register User =================
const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, phone, password } = req.body;

  // Validate input
  if (
    [fullname, email, phone, password].some((field) => !field || !field.trim())
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if user already exists
  const existingUser = await User.findOne({
    $or: [{ email: email.toLowerCase() }, { phone: phone.trim() }],
  });

  if (existingUser) {
    throw new ApiError(409, "User with this email or phone already exists");
  }

  // Create user (role defaults to "user")
  await User.create({
    fullname,
    email,
    phone,
    password,
  });

  return res
    .status(201)
    .json(
      new ApiResponse(201, {}, "User registered successfully. Please login."),
    );
});

// ================= Login User/Admin =================
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if ([email, password].some((field) => !field || !field.trim())) {
    throw new ApiError(400, "Email and password are required");
  }

  // Find user
  const user = await User.findOne({
    email: email.toLowerCase(),
  }).select("+password +refreshToken");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Verify password
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  // Generate tokens
  const { accessToken, refreshToken } = await generateAccessandRefreshToken(
    user._id,
  );

  // Get user without sensitive fields
  const safeUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, {
      ...options,
      maxAge: 15 * 60 * 1000, // 15 min
    })
    .cookie("refreshToken", refreshToken, {
      ...options,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    })
    .json(
      new ApiResponse(
        200,
        {
          user: safeUser,
        },
        "Login successful",
      ),
    );
});

// ===============>> User Logout <<===============
const logoutUser = asyncHandler(async (req, res) => {
  // middleware attached user
  const userId = req.user?._id;
  if (!userId) {
    throw new ApiError(401, "invalid user!");
  }

  // find user and remove refresh token
  await User.findByIdAndUpdate(
    userId,
    { refreshToken: "" },
    { validateBeforeSave: false },
  );

  // Clear cookies using same options so the browser removes them correctly
  const clearOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  };

  // response
  return res
    .status(200)
    .clearCookie("accessToken", clearOptions)
    .clearCookie("refreshToken", clearOptions)
    .json(new ApiResponse(200, {}, "Logout successful"));
});

export { registerUser, loginUser, logoutUser };
