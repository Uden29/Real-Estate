import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createApplications,
  listApplications,
  updateApplications,
} from "../controllers/applicationControllers";

const router = express.Router();

router.post("/", authMiddleware(["tenant"]), createApplications);
router.put("/:id/status", authMiddleware(["manager"]), updateApplications);
router.get("/", authMiddleware(["manager", "tenant"]), listApplications);

export default router;
