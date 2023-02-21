import { Box, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SemanticClassificationFormat } from 'typescript';
import './App.css';

function App() {
let [lista, setLista ] = useState([""]);
let [novoItem, setNovoItem] = useState("")

  return (
    <Grid className="container">
      <Box className='input'>
    <input placeholder='Tarefa' value={novoItem} onChange={value => setNovoItem(value.target.value)}  type = "text"/> 
    <button onClick={() => adicionaNovoItem()}> Adicionar</button>
    </Box>
    <ul className='lista' > 
     {lista.map((item, index)  => (<li key={index} className="item">{item} 
     <button  onClick={() => deletarItem(index)}> deletar</button> 
     </li>))}
     </ul>
     </Grid>
  );

function adicionaNovoItem() {
  if (novoItem.length <=0){
    alert("Por favor, adicione algo no campo de tarefa");
    return;
  }

  let itemIndex = lista.indexOf(novoItem);   
  setLista([...lista, novoItem]);


  setNovoItem("");
}

function deletarItem(index: number){
  let tempArray = [...lista];
  tempArray.splice(index, 1);

 setLista(tempArray)

}

}

export default App;
