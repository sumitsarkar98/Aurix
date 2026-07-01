import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// JWT Verification Middleware
export const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "").trim();

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: No valid access token from authmiddleware!",
      });
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // Find the user and exclude sensitive fields
    const user = await User.findById(decoded._id).select(
      "-password -refreshToken",
    );
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }
    req.user = user; // attach user to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
