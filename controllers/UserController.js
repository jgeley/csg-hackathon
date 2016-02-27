UserController = function() {};

UserController.prototype.uploadFile = function(req, res) {
    var fs = require('fs');
    // We are able to access req.files.file thanks to 
    // the multiparty middleware
    var file = req.files.file;
    console.log(file.name);
    console.log(file.type);
    console.log(file);
    fs.writeFile(__dirname+'/uploads/' + file.name, "", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
    fs.createReadStream(file.path).pipe(fs.createWriteStream(__dirname+'/../public/uploads/' + file.name ));
}

module.exports = new UserController();