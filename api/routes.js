const express = require("express");
const router = express.Router();

let tasks = [
    {
        id: 1,
        description: "a task",
        isComplete: true
    },
    {
        id: 2,
        description: "another task",
        isComplete: true
    }
];

//GET
router.get('/', (req, res) => { //ok for now
    res.json(tasks);
});

//GET :id
router.get('/:id', (req, res) => {
    //TODO
});

//POST
router.post('/', (req, res) => { // ok for now
    const newTask = {
        id: req.body.id,
        description: req.body.description,
        isComplete: req.body.isComplete
    };

    tasks.push(newTask);
    res.json(tasks)
});

//PUT :id
router.put('/:id', (req, res) => {
    //TODO
});

//DELETE
router.delete('/:id', (req, res) => {
    //TODO
});

module.exports = router;