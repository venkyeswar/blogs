const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient;
const mongodbUrl="mongodb+srv://venkyeswar:7112001746@cluster0.qpo13la.mongodb.net/?retryWrites=true&w=majority";
async function connect(){
    const client=await mongoClient.connect(mongodbUrl);
    database=client.db('blog');
}

function getDb(){
    if(!database){
        throw{message:'no database availabe'};
    }
    return database;

}
module.exports={
    connectToDatabase:connect,
    getDb:getDb
};

