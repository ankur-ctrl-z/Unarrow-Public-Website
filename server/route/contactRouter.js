import express from "express";
const router = express.Router();

import contactController from "../controller/contactController.js";
// import BookACallController from '../controller/bookCallController.js'

router.post('/submit-form', contactController)
// router.post('/book-call', BookACallController)

export default router;