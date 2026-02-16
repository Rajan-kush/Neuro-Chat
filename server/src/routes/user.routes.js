import { Router } from "express";
import {
  registerUser,
  logInUser,
  logoutUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { jwtVerify } from "../middlewares/auth.middleware.js";

const router = Router();

router
  .route("/register")
  .post(upload.fields([{ name: "avatar", maxCount: 1 }]), registerUser);

router.route("/login").post(logInUser);

// secure routes
router.route("/logout").post(jwtVerify, logoutUser);

export default router;
