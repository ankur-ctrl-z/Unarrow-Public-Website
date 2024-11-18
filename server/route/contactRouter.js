import express from "express";
const router = express.Router();

import contactController from "../controller/contactController.js";

router.post('/submit-form', contactController)


export default router;