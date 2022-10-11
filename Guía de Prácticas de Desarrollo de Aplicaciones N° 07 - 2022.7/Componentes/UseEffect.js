/************************** useState.js *********************************/
import { useState, useEffect } from "react";
import './UseState';
function ComponenteConEstadoEffect() {
    const [codigo, setcodigo] = useState("");
    const [alumno, setalumno] = useState("");
    const [escuela, setescuela] = useState("Ingenieria de Sistemas");
    useEffect(
        () => {
            if (codigo == "2020247521")
                setalumno("Sergio Adrian Terrazas Garcia");
            else if (codigo == "2020227221")
                setalumno("Jeanpierre Jose Chipana Ancasi");
            else if (codigo == "2020177721")
                setalumno("Leonel Mauricio Torres Delgado");
            else if (codigo == "2020000000")
                setalumno("XXXXX XXXXX XXXXX XXXXX");
        }
    )
    return (
        <div>
            <h4>Mostrar codigos de los estudiantes</h4>
            <h4>Haga click en un estudiante para saber su codigo: </h4>
            <h2>*************************************</h2>
            <div className='Estudiante'>
                <button cursor="pointer" type="button" onClick={() => setcodigo("2020247521")}>Sergio Adrian Terrazas Garcia</button>
                <button type="button" onClick={() => setcodigo("2020227221")}>Jeanpierre Jose Chipana Ancasi</button>
                <button type="button" onClick={() => setcodigo("2020177721")}>Leonel Mauricio Torres Delgado</button>
                <button type="button" onClick={() => setcodigo("2020000000")}>XXXXX XXXXX XXXXX XXXXX</button>
            </div>

            <h2>*************************************</h2>
            <h2> Datos:</h2>
            <h3> Alumno: {alumno}</h3>
            <h3> Codigo: {codigo}</h3>
            <h3> Escuela: {escuela}</h3>
        </div>
    );


}


export default ComponenteConEstadoEffect;