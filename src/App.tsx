import { Box, Grid, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SemanticClassificationFormat } from 'typescript';
import './App.css';
import DeleteIcon from'@mui/icons-material/Delete';



function App() {
let [lista, setLista ] = useState([""]);
let [novoItem, setNovoItem] = useState
 ("");

  return (
    <Grid className="container">
      <Box className='input-'>
    <input className='input'
     placeholder='Tarefa' value={novoItem} onChange={value => setNovoItem(value.target.value)}  type = "text"/> 
    <button className='button' onClick={() => adicionaNovoItem()}> Adicionar</button>
    </Box>   

    <Box className='mensagen'>
    <ul className='lista' > 
     {lista.map((item, index)  => (<li key={index} className="item">{item} 
     <Box className='de'>
     <DeleteIcon onClick={() => deletarItem(index)}/>
     </Box>
     </li>))}
     </ul>
     </Box>
     </Grid>
  );

function adicionaNovoItem() {
  if (lista.length <=0){
    alert("Por favor, adicione algo no campo de tarefa");
    return;
  }

 let itemIndex = lista.indexOf(novoItem);
 setLista([...lista, novoItem])


   setNovoItem("");
 }

function deletarItem(index: number){
  let tempArray = [...lista];
  tempArray.splice(index, 1);


 setLista(tempArray)

}

}

export default App;
