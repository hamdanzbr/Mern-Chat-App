// messageRoutes.js
import express from 'express'
import { getMessages, sendMessage } from '../controllers/messageController.js';
import protectRoute from '../middlewares/protectRoute.js';

const router=express.Router();

router.get("/:id",protectRoute,getMessages)
router.post("/send/:id",protectRoute,sendMessage)



export default router 