const { Router } = require('express');
const router = Router();

/**
 * @module
 * controller import
 */
const searchController = require('../../controller/search/searchController');

// 후에 winston 미들웨어, JWT 미들웨어
router.get('/:summoner', searchController.getSummoner);

module.exports = router;
