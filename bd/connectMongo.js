var mongoose = require('mongoose');
mongoose.connect('mongodb://91.234.105.31:27017/ppd');
var db = mongoose.connection;
db.on('error', function () {
    console.log('dommache');

});