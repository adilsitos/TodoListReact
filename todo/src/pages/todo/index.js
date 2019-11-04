import React, {Component} from 'react'

import './styles.css'

export default class Todo extends Component{
    
    
    render(){
        return(
            <div className="todo-list">
                
                <h1>Todo's</h1>
                <input type="text"></input>
                <button>Inserir</button>
              <article>
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

