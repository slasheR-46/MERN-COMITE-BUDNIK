import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  deletepost,
  getposts,
  updatepost,
} from "../controllers/post.controller.js";
import { getPostComments } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getPostComments/:postId", getPostComments);

// router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);
// router.put("/updatepost/:postId/:userId", verifyToken, updatepost);

export default router;
