import React, {Component} from 'react'

import './styles.css'

export default class Todo extends Component{
    
    state = {
        id: 0,
        info: ""
    }

    addTodo = ()=>{
        const divTodo = document.getElementById('articleTodo')
        const valor = document.getElementById("campo").value
  
        const {id,info} = this.state
        var titulo = document.createElement('h1')
        var texto= document.createTextNode(valor)

        titulo.appendChild(texto)
        divTodo.appendChild(titulo)
        

        

        
    }

    
    render(){
        return(
            <div className="todo-list">
                
                <h1>Todo's</h1>
                <input type="text" id="campo" value="Inserir"></input>
                <button onClick={this.addTodo}>Inserir</button>
              <article id="articleTodo">
                  <h4>Todo</h4>
              </article>
              <article>
                  <h4>Doing</h4>
              </article>
              <article>
                  <h4>Done</h4>
              </article>
            </div>
        )
        
    }
}

