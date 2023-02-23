
import { useState } from 'react';
import './App.css';
import Item from './Item';

function App() {
//  var noticias = [{ titulo: "Título 1", sub:"Subtítulo1"},
//   { titulo: "Título2 ", sub:"Subtítulo2"}
// ]
const [contador, setContador]= useState(0)


 function incrementar(){
  setContador(contador+1)
 }

  return (
    <div>
     <h1>({contador})</h1>
 <button onClick={incrementar}>add</button>
      {/* {noticias.map((noticia, key)=>( <Item key={key} titulo={noticia.titulo} sub={noticia.sub}  />))}
   */}
    </div>
  );
}

export default App;
