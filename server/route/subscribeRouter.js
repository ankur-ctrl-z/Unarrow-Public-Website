import express from "express";

const router = express.Router();
 
import subscribeController from "../controller/subscribeController.js";

router.post("/subscribe", subscribeController);

export default router;
