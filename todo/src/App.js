import React, {Component} from 'react';

import './App.css'
import AddTodo from './addTodo'
import Todos from './Todo'
class App extends Component {
  state={
    todos:[
      {id:1,content:'ir no churras'},
      {id:2, content:'terminar exercicio react'}
    ]
   }
   deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });

    this.setState({
      todos
    })
  }

  insertDoing = (item, texto, botao)=>{
    var nodeTodo = document.querySelector('#todo1 li')
    var elementol2 = document.createElement('li')
    var nodeDoing = document.querySelector('#doing')
    elementol2.appendChild(texto)
    elementol2.appendChild(botao)
    nodeDoing.appendChild(elementol2)
    

    if(nodeTodo.parentNode){
        nodeTodo.parentNode.removeChild(item)
    }
  }

  addTodo = (todo)=>{
    todo.id = Math.random();
    let todos  = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }


   
  render(){

    
    return(
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo}/>
        <div className="flex-container">
            <div className="card">
                <h2 className="card-title">To do</h2>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
            <div className="card">
                <h2 className="card-title">Doing</h2>
                <h2 className="doing"></h2>
            </div>
            <div className="card">
                <h2 className="card-title">Done</h2>
            </div>
            
        </div>
        
     
      </div>
    );
  }
  
}

const styles = {
  todoText:{
    
  }
}



export default App;
