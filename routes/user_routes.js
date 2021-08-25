const router = require('express').Router();
const {requireAuth} = require('../middleware/authMiddleware')
const authController = require('../controllers/user_controller')


router.get('/list',authController.get_users); //admin
router.post('/signup',authController.signup_post)
router.post('/login',authController.login)

module.exports = router