function receivesAFunction(callback){
    return callback();
}


function returnsANamedFunction(cb){
    return (function main() { return `I am about to randomize a bunch of words`});
}


function returnsAnAnonymousFunction(){
    return (function () { return "I am about to randomize a bunch of more words"});
}