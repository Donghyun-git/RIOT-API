const { Router } = require('express');
const router = Router();

/**
 * @module
 * controller import
 */
const authController = require('../../controller/auth/authController');

// 후에 winston 미들웨어, JWT 미들웨어
router.get('/login', authController.login);

module.exports = router;
