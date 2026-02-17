import { Router } from "express";
import {
  newConversation,
  getAllConvo,
} from "../controllers/convo.controller.js";
import {
  chatWithPersona,
  getAllChats,
} from "../controllers/chat.controller.js";
import { jwtVerify } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/convo").post(jwtVerify, newConversation);
router.route("/:convoId").post(jwtVerify, chatWithPersona);
router.route("/getchats/:convoId").get(jwtVerify, getAllChats);
router.route("/getconvos").get(jwtVerify, getAllConvo);

export default router;
