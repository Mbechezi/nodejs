
var fs = require("fs")
const erreur  = require("console")


fs.readFile('welcome.txt', function(err,data){
    if (err) {
        return err(erreur);
    }
    console.log(data.toString());})