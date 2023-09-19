// Controllers for the Composercomposer Collection

import 'dotenv/config';
import express from 'express';
import * as composers from './composers-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/composers', (req,res) => { 
    composers.createComposer(
        req.body.composer, 
        req.body.birthyear, 
        req.body.era
        )
        .then(composer => {
            res.status(201).json(composer);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Invalid Request. Failed to create composer.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/composers', (req, res) => {
    composers.retrieveComposers()
        .then(composer => { 
            if (composer !== null) {
                res.json(composer);
            } else {
                res.status(404).json({ Error: 'No composers were found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Invalid Request. Failed to show composers.' });
        });
});


// RETRIEVE by ID controller
app.get('/composers/:_id', (req, res) => {
    composers.retrieveComposerById(req.params._id)
    .then(composer => { 
        if (composer !== null) {
            res.json(composer);
        } else {
            res.status(404).json({ Error: 'A composer was not found with a matching ID.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Invalid Request. Failed to find composer.' });
    });

});


// UPDATE controller ************************************
app.put('/composers/:_id', (req, res) => {
    composers.updateComposer(
        req.params._id, 
        req.body.composer, 
        req.body.birthyear, 
        req.body.era
    )
    .then(composer => {
        res.json(composer);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Invalid Request. Failed to update composer.' });
    });
});


// DELETE Controller ******************************
app.delete('/composers/:_id', (req, res) => {
    composers.deleteComposerById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'The composer was successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Composer ID not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Failed to delete composer.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});