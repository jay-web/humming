const mongoose = require("mongoose");
const redis = require('redis');
const util = require('util');

const redisURL = "redis://127.0.0.1:6379";
const client = redis.createClient(redisURL);
client.hget = util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = function(options = {}){
    this.useCache = true;
    this.hashKey = JSON.stringify(options.key || '');
    return this;
}

mongoose.Query.prototype.exec  = async function (){
    
    if(this.useCache === false || this.useCache === undefined){
        return exec.apply(this, arguments);
    }
   
   

    const key = JSON.stringify(Object.assign({}, this.getQuery(), {
        collection: this.mongooseCollection.name
    }));

    // Check key is available in cache or not
    let cachedData = await client.hget(this.hashKey, key);

    if(cachedData){
        let doc = JSON.parse(cachedData);
        console.log("doc", doc);
        return Array.isArray(doc) 
                ? doc.map((d) => new this.model(d))
                : new this.model(doc);
        
        
    }

    // if cached data not available, execute the query and save into redis

    const result = await exec.apply(this, arguments);

    client.hset(this.hashKey, key, JSON.stringify(result));

    return result;
}

module.exports = {
    clearCache : function(userId){
        client.del(JSON.stringify(userId));
    }
}