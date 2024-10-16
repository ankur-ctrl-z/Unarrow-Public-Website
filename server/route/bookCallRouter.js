import express from "express";
const router = express.Router();

import BookACallController from '../controller/bookCallController.js'

router.post('/book-call', BookACallController)

export default router;