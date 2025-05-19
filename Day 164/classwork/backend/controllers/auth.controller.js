import {User} from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});
        if(user) {
            return res.status(400).json({msg: 'User already exists'});
        }

        const hashed = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            password: hashed
        });

        res.status(201).json({msg: 'User registered successfully'});
    } catch(e) {
        console.error(e);
        res.status(500).json({msg: 'User not registered'});
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});
        if(!user) return res.status(400).json({msg: 'Username or password incorrect'});

        const isMatch = await bcrypt.compare(password, user?.password);
        if(!isMatch) return res.status(400).json({msg: 'User not login successfully'});

        const token  = jwt.sign({id: user._id}, process.env.KEY, {expiresIn: '1h'});

        res.cookie('token', token, {HttpOnly: true})
           .json({msg: 'Login successful'});
    } catch(e) {
        console.error(e, e.message);
        res.status(500).json({msg: 'User not loggined'});
    }
} 

export const logout = async (req, res) => {
    try {
        res.clearCookie('token').json({msg: 'Log out successfully'});
    } catch(e) {
        res.status(500).json({msg: 'Logout unsuccessful'});
    }
}

export const loadProfile = async (req, res) => {
    try {
        res.status(200).json({user: req.user});
    } catch(e) { console.error(e, e.message) }
};