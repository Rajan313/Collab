const express = require('express');
const router = express.Router();
const {registerUser,authUser}=require('../controllers/entrepreneurController.js')
const {protectEntrepreneur}=require('../middleware/authMiddleware.js')
router.route('/register').post(registerUser);
router.route('/login').get(authUser);
module.exports = router;