const mongoose = require('mongoose')
// create cluster on atlas - add admin account - whitelist ip - get connection string
var connectionString = "string-from-atlas"; // can add to process.env.whatever in .env when on server 

//connect to mongo
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// Schema for docs to be sent
const shortSchema = new mongoose.Schema({
    whateverKey: {type: String, required: [true, 'message here']} //type is whatever type you want: shorthand just key: String
  });

// Introduce Model for doc's - collection name then schema for docs
var recordTypeWhatever = mongoose.model('whateverYouWantTheCollectionToBeNamed', shortSchema)

var newWhatever = new recordTypeWhatever({"whateverKey": "whatever value3"});

var saveNewWhatever = function() {
    newWhatever.save().then(() => console.log('saved'))
};

saveNewWhatever();
