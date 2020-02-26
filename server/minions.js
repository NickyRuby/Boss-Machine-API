const minionsRouter = require('express').Router();

module.exports = minionsRouter;

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db');

minionsRouter.param('minionId',(req,res,next,id) => {
  let minion = getFromDatabaseById('minions',id);
  if (minion) {
    req.minion = minion;
    next();
  }
  else {
    res.status(404).send();
  }
});

minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

minionsRouter.get('/:minionId', (req,res,next) => {
  res.send(req.minion);
 });

minionsRouter.post('/',(req,res,next) => {
  const newMinion = addToDatabase('minions', req.body);
  res.status(201).send(newMinion);
});


minionsRouter.put('/:minionId', (req,res,next) => {
    const minion = updateInstanceInDatabase('minions', req.body);
    res.send(minion);

  });

  minionsRouter.delete('/:minionId', (req,res,next) => {
    const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
    if (deleted) {
      res.status(204);
    }
    else {
      res.status(500);
    }
    res.send();
  });