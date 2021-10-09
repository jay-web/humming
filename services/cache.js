const mongoose = require("mongoose");

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec  = function (){
    console.log("I am hooking into this query");

    return exec.apply(this, arguments);
}