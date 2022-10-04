import './ESTILOS.css';
//import 'src/Aplicación.js';
import React, { Component } from 'react';

class ESTILOS extends Component {
    render() {
    return (
        <div id="Cuerpo"><br></br>
            <h1>Experiencia 03 Estilos - C</h1>
            <div class="text">
                <h1>Hola soy la primera Componente</h1> 
                <h1><b>Bienvenido!!!</b> </h1>
                <h2><b> Precione el siguiente enlace para refrescar la pagina --> </b><a href="" class="btn btn-primary btn-xl rounded-pill mt-5"> REFRESCAR</a></h2>
            </div>
            <br></br>
            <div class="text">
                <ESTILOS2/>
            </div>
        </div>
    )
 }
}
const ESTILOS2 = () => {
    return (
    <div>
        <h1>---------------------------------</h1> 
       <h1>Hola soy la segunda Componente</h1> 
       <img src="https://www.ucsm.edu.pe/wp-content/uploads/2021/10/ucsm-logo-retina-color-02.png" height="180"></img>
    </div>
    )
}
export default ESTILOS;