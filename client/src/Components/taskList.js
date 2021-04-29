import React from 'react';
import axios from 'axios';
class TaskList extends React.Component{

    state = {
        task:"",
        taskList: []
    }
    componentDidMount(){
        this.getTaskList();
    }

    getTaskList =()=>{
        axios.get('http://localhost:4000/tasks')
        .then((response) => response.data)
        .then(response => this.setState({taskList: response}));
    }

    

    onSubmitClick =()=>{
        axios.post('http://localhost:4000/addTask',{
            task: this.state.task
        });
        this.getTaskList();
        this.setState({
            task:''
        });
    }

    onDoneClick =()=>{
        console.log('done');
    }

    onDeleteClick =(id)=>{
        // console.log('inside delete')
        axios.delete(`http://localhost:4000/deleteTask/${id}`);
        this.getTaskList();
    }

    render(){
        console.log(this.state.taskList);
        return(
            <div className="row">
                <div className="col s12">
                    <div className="input-field col s12">
                        <input type="text" placeholder="Your Tasks.." value={this.state.task} onChange={e => this.setState({
                            task: e.target.value
                        })}/>
                    </div>
                    <div className="input-field col s12">
                       <button className="btn col s12 blue-grey" onClick={()=> this.onSubmitClick()}>Submit</button>
                    </div>
                </div>

                
                <div className="row">
                    {this.state.taskList.map((task) => (
                        <div className="col l4 m6 s12">
                        <div className="card">
                            <div className="card-content">
                                <p>{task.tasks}</p>
                        </div>
                            <div className="card-action">
                            <button className="btn-small blue" onClick={
                                ()=>this.onDoneClick()
                            }>Done</button>
                            <button className="btn-small red" onClick={
                                ()=> this.onDeleteClick(task.id)
                            }>Delete</button>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>

        );
    }
}

export default TaskList;