import React, {Component} from 'react'

import './styles.css'

export default class Todo extends Component{
    
    state = {
        id: 0,
        info: ""
    }

    addDoing = (texto,titulo)=>{
        const divDoing = document.getElementById('doing')
        var titulo2 = document.createElement('h1')
        var botao2 = document.createElement('button')
       
        titulo2.appendChild(texto)
        titulo2.appendChild(botao2)
        divDoing.appendChild(titulo2)
        if(titulo.parentNode){
            titulo.parentNode.removeChild(titulo)
        }
       

        
    }


    addTodo = ()=>{
        const divTodo = document.getElementById('articleTodo')
        const valor = document.getElementById("campo").value
  
        var botao = document.createElement('button')
        botao.setAttribute('class','botao2')
        
        
        var titulo = document.createElement('h1')
        var texto= document.createTextNode(valor)
        
        titulo.appendChild(texto)
        titulo.appendChild(botao)
        divTodo.appendChild(titulo)

        botao.onclick = () => this.addDoing(texto,titulo)
    }

    

   
    
    render(){
        return(
            <div className="todo-list">
                
                <h1>Todo's</h1>
                <input type="text" id="campo" ></input>
                
                <button onClick={this.addTodo}>Inserir</button>
              <article id="articleTodo">
                  <h4>Todo</h4>
              </article>
              <article id="doing">
                  <h4>Doing</h4>
              </article>
              <article  id="done">
                  <h4>Done</h4>
              </article>
            </div>
        )
        
    }
}

