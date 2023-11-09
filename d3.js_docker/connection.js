const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/mortalityDB1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Database connected!');
});

module.exports = mongoose;
