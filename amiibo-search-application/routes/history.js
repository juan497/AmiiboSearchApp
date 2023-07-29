const router = require('express').Router();

const database = require('../db');
//const search_api = require('amiibo-search-api');








//localhost:8888/history?keyword=mario
//or use                                  
//localhost:8888/history
router.get('/', async (req, res) => {
    const { query } = req;
    const { keyword } = query;

    const result = await database.find('Results', keyword);
    res.json(result);
});

module.exports = router;
