import express from 'express'
import protectRoute from '../middlewares/protectRoute.js'
import { getUsersForSideBar } from '../controllers/userController.js'

const router=express.Router()

router.get("/",protectRoute ,getUsersForSideBar)

export default router