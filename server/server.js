const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/tasks',(req,res)=>{
    const TASK_QUERY = `SELECT *FROM task`;
    connection.query(TASK_QUERY, (err,response)=>{
        if(err) console.log(err)
        else res.send(response)
    })
    // res.send('list of all task');
});

app.post('/addTask',(req,res)=>{
    // console.log(req.body.date);
    const ADD_QUERY = `INSERT INTO task_db.task (tasks) VALUES ('${req.body.task}')`;
    connection.query(ADD_QUERY, (err)=>{
        if(err) console.log(err,response)
        else res.send('added')
    });
});

app.delete('/deleteTask/:id',(req,res)=>{
    // res.send('delete task')
    console.log(req.params.id);
    const DELETE_QUERY = `DELETE FROM task_db.task WHERE (id=${req.params.id})`;
    connection.query(DELETE_QUERY, (err)=>{
        if(err) console.log(err,response)
        else res.send('deleted')
    })
});


app.listen(4000,()=>{
    console.log('running on port 4000');
});