import { Router } from "express";
import { newConversation } from "../controllers/convo.controller.js";
import { chatWithPersona } from "../controllers/chat.controller.js";
import { jwtVerify } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/convo").post(jwtVerify, newConversation);
router.route("/:convoId").post(jwtVerify, chatWithPersona);

export default router;
