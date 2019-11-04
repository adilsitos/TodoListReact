import React, {Component} from 'react'

import './styles.css'

export default class Todo extends Component{
    
    state = {
        id: 0,
        info: ""
    }

    removeDone = (item) => {
        var nodeDone2 = document.querySelector('#done li')
        if(nodeDone2.parentNode){
            nodeDone2.parentNode.removeChild(item)
        }
    }
      

    addDone = (item, texto, botao)=>{

        var nodeDone = document.querySelector("#done")
        var nodeDoing2 = document.querySelector('#doing li')
        var elementol3 = document.createElement('li')
        
    
        elementol3.appendChild(texto)
        elementol3.appendChild(botao)
        nodeDone.appendChild(elementol3)
    
        if(nodeDoing2.parentNode){
            nodeDoing2.parentNode.removeChild(item)
        }
    
        botao.onclick = () => this.removeDone(elementol3)
        
    }

     
    

    insertDoing = (item, texto, botao) =>{
    
        var nodeDoing = document.querySelector('#doing')
        var nodeTodo = document.querySelector('#todo li')
        var elementol2 = document.createElement('li')

        elementol2.appendChild(texto)
        elementol2.appendChild(botao)
        
        nodeDoing.appendChild(elementol2)
        
    
        if(nodeTodo.parentNode){
            nodeTodo.parentNode.removeChild(item)
        }
    
        botao.onclick = () => this.addDone(elementol2,texto,botao)
       
    }
    




    addTodo = ()=>{
        const divTodo = document.getElementById('todo')
        const valor = document.getElementById("campo").value
  
        var botao = document.createElement('button')
        botao.setAttribute('class','botao2')
        
        
        var titulo = document.createElement('li')
        var texto= document.createTextNode(valor)
        
        titulo.appendChild(texto)
        titulo.appendChild(botao)
        divTodo.appendChild(titulo)

        botao.onclick = () => this.insertDoing(titulo,texto,botao)
    }

    

   
    
    render(){
        return(
            <div className="todo-list">
                
                <h1>Todo's</h1>
                <input type="text" id="campo" ></input>
                
                <button onClick={this.addTodo}>Inserir</button>
              <article >
                  <h4>Todo</h4>
                  <ul id="todo">

                  </ul>
              </article>
              <article >
                  <h4>Doing</h4>
                  <ul id="doing">

                  </ul>
              </article>
              <article  >
                  <h4>Done</h4>
                  <ul id="done">

                  </ul>
              </article>
            </div>
        )
        
    }
}

