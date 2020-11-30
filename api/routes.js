const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());

let tasks = [
    {
        TaskId: 1,
        TaskDefinition: "a task",
        DueDate: new Date("1/1/2020"),
        Priority: "High",
        isComplete: true
    },
    {
        TaskId: 2,
        TaskDefinition: "another task",
        DueDate: new Date("1/3/2020"),
        Priority: "High",
        isComplete: false
    },
    {
        TaskId: 3,
        TaskDefinition: "a further task",
        DueDate: new Date("1/3/2020"),
        Priority: "High",
        isComplete: false
    }
];

//GET
router.get('/', (req, res) => { //ok for now
    res.json(tasks);
});

//GET :id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const targetTask = tasks.find((task) => task.TaskId === id);
    res.json(targetTask);
});

//POST
router.post('/', (req, res) => {
    const newTask = {
        TaskId: parseInt(req.body.TaskId),
        TaskDefinition: req.body.TaskDefinition,
        DueDate: req.body.DueDate,
        Priority: req.body.Priority,
        isComplete: req.body.isComplete === "false" ? false : true
    };

    tasks.push(newTask);
    res.json(tasks)
});

//PUT :id
router.put('/:id', (req, res) => {
    const {
        TaskDefinition,
        DueDate,
        Priority,
        isComplete
    } = req.body; // This is called object destructuring

    const id = parseInt(req.params.id);
    let targetTask = tasks.find((task) => task.TaskId === id);

    // assign updated values
    targetTask.TaskDefinition = TaskDefinition;
    targetTask.DueDate = DueDate;
    targetTask.Priority = Priority;
    targetTask.isComplete = isComplete === "false" ? false : true;

    res.json(tasks);
});

//DELETE
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.TaskId !== id);
    res.json(tasks);
});

module.exports = router;