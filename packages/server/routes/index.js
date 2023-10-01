const { Router } = require('express');
const router = Router();

/**
 * @module
 * router import
 */

const authRouter = require('./auth/authRouter');
const searchRouter = require('./search/searchRouter');

router.use('/auth', authRouter);
router.use('/search', searchRouter);

module.exports = router;
