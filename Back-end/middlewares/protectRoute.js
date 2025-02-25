// protectRoute.js
import jwt from 'jsonwebtoken'
import User from '../models/userSchema.js';

const protectRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;

        if(!token){
            return res.status(401).json({error:"unauthorized - no token Provided"})
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({error:"unauthorized - invalid token Provided"})
        }

        const user=await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({error:"user not found"})
        }

        req.user=user

        next()

    } catch (error) {
        console.log("Error in protectRoute middleware:",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

export default protectRoute;