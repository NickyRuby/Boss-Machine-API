const express = require('express');
const apiRouter = express.Router();
const minionRouter = express.Router();
const ideasRouter = express.Router()


minionRouter.get('/',(req,res,next) => {
    res.send(getAllFromDatabase('minions'));
  })

  minionRouter.post('/',(req,res,next) => {
    const newElementID = getAllFromDatabase('minions').length - 1;
    const newMinion = addToDatabase('minions', {id: newElementID, name: 'Nikita', title: 'Product Designer' });
    res.status(201).send(newMinion);
  });

  minionRouter.get('/:minionId', (res,req,next) => {
    const minion = getFromDatabaseById('minions', req.params.minionId);
    res.send(minion);
  });

  minionRouter.put('/:minionId', (res,req,next) => {
    updateInstanceInDatabase('minions', req.params.minionId);
    const minion = getFromDatabaseById('minions', req.params.minionId);
    res.status(404).send(minion);
  });

  minionRouter.delete('/:minionId', (res,req,next) => {
    deleteFromDatabasebyId('minions', req.params.minionId);
    res.status(404).send();
  });



module.exports = {apiRouter, minionRouter,ideasRouter};
