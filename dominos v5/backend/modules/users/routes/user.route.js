import express from 'express';
// importing the functions
import { checkSession, userLogin, userLogout, userSignup } from '../controllers/user-controller.js';

// creating a router
const router = express.Router();

// all user routes
router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/logout',userLogout);
router.get('/check-session',checkSession);

// exporting the router
export default router;
