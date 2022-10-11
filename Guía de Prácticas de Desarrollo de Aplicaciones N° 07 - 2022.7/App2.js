/************************** App.js *********************************/

import './App2.css';
import Effect from './Componentes/UseEffect';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://seeklogo.com/images/U/ucsm-universidad-catolica-arequipa-peru-logo-92146F8C4E-seeklogo.com.png" className="App-logo" alt="logo" />
        <p>
          Desarrollo de Aplicaciones.
        </p>
        <a className="App-link">
          <Effect />
        </a>
      </header>
    </div>
  );
}

export default App;
