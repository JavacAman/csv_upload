const mongoose = require('mongoose');
require('dotenv').config()
const DB = 'mongodb+srv://pawarsubham438:6aO4JOECgoI7Xu71@cluster0.bemtdzm.mongodb.net/mernstack?retryWrites=true&w=majority';


// mongoose.connect('mongodb://127.0.0.1:27017/polling-system-api')
mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error Connecting Database"));
db.once('open',function(){
    console.log("Successfully Connected to Database!!");
});

module.exports = mongoose;