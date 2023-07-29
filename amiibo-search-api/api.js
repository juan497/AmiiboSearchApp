


/* eslint-disable no-undef */
/*
 AmiiboAPI
https://amiiboapi.com
 an Amiibo is a Nintendo figure

 */
 const superagent = require('superagent');



 const base = "https://www.amiiboapi.com/api/amiibo"
 // use superagent with async/await
 const searchAPI = async (searchBy,keyword) => {
     try {
         const url = base + "/?" + searchBy + "=" + keyword
         const res = await superagent.get(url);
         return res.body;
     } catch (error) {
         console.log(error);
     }
 };


 // use superagent with async/await
 const getAllNames = async (searchBy) => {
    try {
        const url = "https://amiiboapi.com/api/" + searchBy + "/"
        const res = await superagent.get(url);
        return res.body;
    } catch (error) {
        console.log(error);
    }
};


 module.exports = {
    searchAPI,
    getAllNames
};
