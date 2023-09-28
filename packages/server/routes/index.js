const { Router } = require('express');
const router = Router();

/**
 * @module
 * router import
 */

const searchRouter = require('./search/searchRouter');

router.use('/search', searchRouter);

module.exports = router;
