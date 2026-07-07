import express from 'express';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import { protect } from '../middleware/auth.js';






const router = express.Router();


//register user

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        const userExists = await User.findOne({
            $or: [{ email }, { username }]
        })
        if (userExists) {
            return res.status(400).json({ message: "User already exists with this email or username" });
        }
        const user = await User.create({
            username,
            email,
            password
        })
        const token = generateToken(user._id);
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token
        });
    }
    catch (error) {
        console.error('Auth route error:', error);
        res.status(500).json({ message: "Server Error" });
    }




})

//Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = generateToken(user._id);
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token,
        });


    } catch (error) {
        console.error('Auth route error:', error);
        res.status(500).json({ message: error.message });

    }
})

//me
router.get('/me', protect, async (req, res) => {
    res.status(200).json(req.user)
})

//generate jwt

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}

export default router;
