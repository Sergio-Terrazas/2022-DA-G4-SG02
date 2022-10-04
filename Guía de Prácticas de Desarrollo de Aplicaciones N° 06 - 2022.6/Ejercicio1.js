import './Ejercicio1.css';
import React, { Component } from 'react';

class Ventas extends Component {
    render() {
    return (
        <div id="Cuerpo"><br></br>
            <h1>Ejercicio 1</h1>
            <Cabecera/>
            <Contenido/><br></br>
            <br></br><br></br>
            <br></br><br></br>
            <br></br>
        </div>
    )
 }
}
const Cabecera = () => {
    return (
        <div class="Pagina">
            <div class="Cabecera">
                <p><img src="https://freeiconshop.com/wp-content/uploads/edd/eye-outline.png" width="20px" height="17px"></img></p>
                <p>CAMERAS</p>
                <p>ABOUT</p>
                <p>CONTACT</p>
            </div>
            <div class="titulo">
                <h1>CAMERAS</h1>
            </div>
        </div>
    )
}


const Pagos = () => {
    return (
        <div class="Pagina">
            <div id="opc1">
                    <p class="Costo">Price: 450$</p>
                    <p class="Costo">In Stock</p>  
            </div>
            <p class="Pago">ADD TO CARD</p>
        </div>
    )
}


const Contenido = () => {
    return (
        <div class="Contenido">
            <div>
                <img src="https://activosbolivia.com/wp-content/uploads/2021/03/Celulares-1-1024x576.jpg" width="310px" height="165px"></img>
                <h2>Smartphone</h2>
                <p>The best camera is the one that you carry 24/7</p><br></br><br></br>
                <Pagos/>
            </div>
            <div>
                <img src="https://cdn-4.nikon-cdn.com/e/Q7dM24x1OuH_NSD5vGvrLraZeJrdp5PmxN74EyTTAhDyl0e5lDNnu1bjbCv-Bnor/Views/353_1618_D780_left.png" width="290px" height="165px"></img>
                <h2>Some Old Polaroid Camera That Produces Hipstery Effects</h2>
                <p>Get Hipstery Effects</p><br></br>
                <Pagos/>
            </div>
            <div>
                <img src="https://www.gopro.pe/wp-content/uploads/2022/09/hero11-3-324x324.png" width="250px" height="165px"></img>
                <h2>GoPro Hero 4 Silver</h2>
                <p>GoPro is de facto choice for anyone interested un extreme sports.
                    The camera has video, photo and timelapse modes, and the low-light
                    capabilities are exceptional.
                </p>
                <Pagos/>
            </div>
            <div>
            
                <img src="https://m.decamaras.com/imagen/camaras18/250/gopro-hero7-silver.jpg" width="310px" height="165px"></img>
                <h2>GoPro Hero 8 Silver</h2>
                <p>GoPro is de facto choice for anyone interested un extreme sports.
                    The camera has video, photo and timelapse modes, and the low-light
                    capabilities are exceptional.
                </p>
                <Pagos/>
            </div>
        </div> 
    )
}
export default Ventas;