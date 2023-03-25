import './App.css';
import Boton from './Componentes/Boton';
import Contador from './Componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClic, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClic + 1);

  }

  const reiniciarCont = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador numClic={numClic} />
        <Boton 
          texto='Clic'
          botonClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          botonClic={false}
          manejarClic={reiniciarCont}
          />
      </div>
    </div>
  );
}

export default App;
