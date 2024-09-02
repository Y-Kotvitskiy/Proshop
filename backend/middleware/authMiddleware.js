import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler";
import User from "../models/userModel";

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
  // Read the JWT token from cookie
  let token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = User.findById(decoded.user).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

// Admin middleware

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized, not authorized as admin");
  }
};

export { protect, admin };
