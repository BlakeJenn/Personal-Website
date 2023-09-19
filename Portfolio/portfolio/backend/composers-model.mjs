// Models for the Composer Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Falied to connect to the database.' });
    } else  {
        console.log('Connection succesful.');
    }
});

// SCHEMA: Define the collection's schema.
const composerSchema = mongoose.Schema({
	composer:      { type: String, required: true },
	birthyear:     { type: Date, required: true },
	era:           { type: Number, required: true }
});

// Compile the model from the schema 
// by defining the collection name "composers".
const composers = mongoose.model('Composer', composerSchema);


// CREATE model *****************************************
const createComposer = async (composer, birthyear, era) => {
    const comp = new composers({ 
        composer: composer, 
        birthyear: birthyear, 
        era: era 
    });
    return comp.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveComposers = async () => {
    const query = composers.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveComposerById = async (_id) => {
    const query = composers.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteComposerById = async (_id) => {
    const result = await composers.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateComposer = async (_id, composer, birthyear, era) => {
    const result = await composers.replaceOne({_id: _id }, {
        composer: composer,
        birthyear: birthyear,
        era: era
    });
    return { 
        _id: _id, 
        composer: composer,
        birthyear: birthyear,
        era: era 
    }
}

// EXPORT the variables for use in the controller file.
export { createComposer, retrieveComposers, retrieveComposerById, updateComposer, deleteComposerById }