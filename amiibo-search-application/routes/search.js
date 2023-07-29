





const router = require('express').Router();

const database = require('../db');
const search_api = require('../../amiibo-search-api/api.js');




const _formatAmiibos = (amiibos) => {
    return amiibos.map((amiibo) => {
        return { display: `${amiibo.name} from ${amiibo.amiiboSeries}`, id: amiibo.head + amiibo.tail, pic: amiibo.image};

    });
};

//localhost:8888/search/character?keyword=luigi

//localhost:8888/search/character?keyword=mario
//or use                                  
//localhost:8888/search/character?keyword=yoshi
router.get('/character', async (req, res) => {
    try {
        const { query } = req;
        const { keyword } = query;

        //get list of amiibos by keyword
        const amiibos = await search_api.searchAPI("character", keyword);

        //format amiibos list as output
        const output = {searchTerm: keyword, results:_formatAmiibos(amiibos.amiibo)};
        res.json(output);

        
        //database logic
        if(await database.contains('Results',keyword)){
            await database.update('Results', keyword, {
                lastSearched: new Date()
            });
        }
        else{
            await database.save('Results', {searchTerm:keyword,seachCount:amiibos.amiibo.length,lastSearched:new Date()});
        }



    } catch (error) {
        res.status(500).json(error.toString());
    }
});



//localhost:8888/search/gameseries?keyword=The_Legend_of_Zelda


router.get('/gameseries', async (req, res) => {
    try {
        const { query } = req;
        const { keyword } = query;

        //get list of amiibos by keyword
        const amiibos = await search_api.searchAPI("gameseries", keyword.replaceAll("_"," "));

        //format amiibos list as output
        const output = {searchTerm: keyword, results:_formatAmiibos(amiibos.amiibo)};
        res.json(output);

        
        //database logic
        if(await database.contains('Results',keyword)){
            await database.update('Results', keyword, {
                lastSearched: new Date()
            });
        }
        else{
            await database.save('Results', {searchTerm:keyword,seachCount:amiibos.amiibo.length,lastSearched:new Date()});
        }



    } catch (error) {
        res.status(500).json(error.toString());
    }

});



//localhost:8888/search/0100000000040002/details?keyword=The_Legend_of_Zelda

//localhost:8888/search/00010000000c0002/details?keyword=luigi

//00010000000c0002

//localhost:8888/search/0000000000000002/details?keyword=mario


router.get('/:amiiboId/details', async (req, res) => {
    try {
        const { params,query } = req;

        const { amiiboId } = params;
        const { keyword } = query;


        //get details by id
        const details = await search_api.searchAPI("id", amiiboId);

        res.json(details.amiibo);


        //-------------- database logic ----------------------
        const to_update = await database.find('Results',keyword);
        

        // if no selections key is present, add selections key with empty array
        if (to_update.selections === undefined){
            await database.update('Results', keyword, {
                selections : []
            });
            to_update.selections = [];
        }

        //push new details
        to_update.selections.push(details.amiibo.image);

        //update database entry with new array
        await database.update('Results', keyword, {
            selections : to_update.selections
        });


    } catch (error) {
        res.status(500).json(error.toString());
    }
});

module.exports = router;






