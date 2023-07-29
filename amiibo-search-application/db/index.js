const { MongoClient } = require('mongodb');

const config = require('../config.json');

/**
 * @description         es6 style module to support mongo connection adn crud operations
 * @return {Object}     object containing functions
 */
const mongo = () => {
    //const mongoURL = `mongodb+srv://${config.username}:${config.password}@cluster0.iyuzqre.mongodb.net/${config.database_name}?retryWrites=true&w=majority`;
    //need to make the actual database for amiibos instread of deckofcards  
    const mongoURL = "mongodb+srv://juan:12345@deckofcards.8lz6sf7.mongodb.net/?retryWrites=true&w=majority";

    let db = null;

    async function connect() {
        try {
            const client = new MongoClient(mongoURL);
            await client.connect();

            db = client.db();

            console.log('Connected to Mongo DB');
        } catch (error) {
            console.log(error);
        }
    }

    async function save(collectionName, data) {
        try {
            const collection = db.collection(collectionName);
            await collection.insertOne(data);
            console.log("saved success");
            //console.log(collection)
        } catch (error) {
            console.log(error);
        }
    }

    async function find(collectionName, keyword) {
        try {
            const collection = db.collection(collectionName);

            if (keyword) {
                return await collection.find({ searchTerm: keyword }).next();
            } else {
                return await collection.find({}).toArray();
            }
        } catch (error) {
            console.log(error);
        }
    }



    async function contains(collectionName, keyword) {
        try {
            const collection = db.collection(collectionName);

            const res = await collection.find({ searchTerm: keyword }).next();
            return res !== null;

        } catch (error) {
            console.log(error);
        }
    }


    async function update(collectionName, keyword, data) {
        try {
            const collection = db.collection(collectionName);

            await collection.updateOne(
                { searchTerm: keyword },
                { $set: data }
            );
        } catch (error) {
            console.log(error);
        }
    }





    return {
        connect,
        save,
        find,
        contains,
        update
    };
};

module.exports = mongo();


