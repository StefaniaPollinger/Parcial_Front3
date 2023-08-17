
import { useState } from 'react';
import './App.css'
import Card from './components/Card'

function App() {
  
  //Declaracion de hooks
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [mostrarCard, setMostrarCard] = useState(false);

  //Declarar la funcion para handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

  //Validaciones de los campos

  if (nombre.length < 3) {
    setMensajeError ('Por favor chequea que la información sea correcta');
    setMostrarCard (false);

    return;
  }

  if (apellido.length < 6) {
    setMensajeError ('Por favor chequea que la información sea correcta');
    setMostrarCard (false);

    return;
  }

//Si los datos ingresados son correctos

setMostrarCard(true);
setMensajeError ('');


  }

  return (
    <div className='App'>
      
      <h1>Carga de socios</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>

        {mensajeError && <p>{mensajeError}</p>}
        
        <button type="submit">Registrarse</button>
      
      </form>
    
    
    {/*Si mostrarCard esta en true, renderizo el componente card*/}

    {mostrarCard && <Card nombreProp={nombre} apellidoProp={apellido} />} 
    
    </div>
  )
}

export default App
