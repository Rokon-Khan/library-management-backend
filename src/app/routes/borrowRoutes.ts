import express from "express";
import {
  borrowBook,
  borrowedBooksSummary,
} from "../controllers/borrows.controllers";

const router = express.Router();

router.post("/", borrowBook);
router.get("/", borrowedBooksSummary);

export default router;
