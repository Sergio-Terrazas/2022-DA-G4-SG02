///////////////////////////////////ACTIVIDADES////////////////////////////////////////////////////////
///////////////////////////////////UseState ////////////////////////////////////////////////////////
//Primeras 2 aplicaciones
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

*/


/////////////////////////////////// UseEfect////////////////////////////////////////////////////////
//Primeras 2 aplicaciones
/*
import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2';

import './index.css';

ReactDOM.render(<App2 />, document.getElementById('root'));
*/
///////////////////////////////////React Router////////////////////////////////////////////////////////

import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ambiental from "./pages/Ambiental";
import Arquitectura from "./pages/Arquitectura";
import Civil from "./pages/Civil";

import Home from "./pages/Home";
import Ingenierias from "./pages/Ingenierias";
import Juridicas from "./pages/Juridicas";
import Minas from "./pages/Minas";

import NoPage from "./pages/NoPage";
import Pag from "./pages/Pag";
import Salud from "./pages/Salud";
import Sistemas from "./pages/Sistemas";
import Sociales from "./pages/Sociales";



export default function App2() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pag />}>
          <Route index element={<Home />} />
          <Route path="Sociales" element={<Sociales />} />
          <Route path="Juridicas" element={<Juridicas />} />
          <Route path="Ingenierias" element={<Ingenierias />}>
            <Route path="Arquitectura" element={<Arquitectura/>} />
            <Route path="Ambiental" element={<Ambiental/>} />
            <Route path="Civil" element={<Civil/>} />
            <Route path="Sistemas" element={<Sistemas/>} />
            <Route path="Minas" element={<Minas/>} />
          </Route>
          <Route path="Salud" element={<Salud />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App2 />);

///////////////////////////////////React Context////////////////////////////////////////////////////////

/*
import './index2.css'
import './index.css';
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
const UserContext = createContext();
function Component1() {
  const [codigo, setcodigo] = useState("");

  return (
    <UserContext.Provider value={codigo}>
      <div className='Contenido'>
        <h4>Mostrar codigos de los estudiantes</h4>
        <h4>Haga click en un estudiante para saber su codigo: </h4>
        <div className='Estudiante'>
          <button type="button" onClick={() => setcodigo("2020247521")}>Sergio Adrian Terrazas Garcia</button>
          <button type="button" onClick={() => setcodigo("2020227221")}>Jeanpierre Jose Chipana Ancasi</button>
          <button type="button" onClick={() => setcodigo("2020177721 ")}>Leonel Mauricio Torres Delgado</button>
          <button type="button" onClick={() => setcodigo("2020000000")}>XXXXX XXXXX XXXXX XXXXX</button>
        </div>
      </div>
      <Component2/>
    </UserContext.Provider>

  );
}
function Component2() {
  return (
    <>
      <h2> >>>Datos:</h2>
      <Component3 />
    </>
  );
}
function Component3() {
  const codigo = useContext(UserContext);
  return (
    <>
      <h3> >>>>>>>> Codigo: {codigo}</h3>

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
*/