import './ESTILOS2.css';
function sum(){
    console.log("Se esta sumando")
}

function res(){
    console.log("Se esta restando")
}


function mul(){
    console.log("Se esta multiplicando")
}


function div(){
    console.log("Se esta dividiendo")
}


function Calcular(){
    return (
        <div id="Cuerpo">
            <h1>Experiencia 03 Eventos - E</h1>
            <div class ="text">
               <button onClick={sum}>Sumar</button>
                <button onClick={res}>Restar</button>
                <button onClick={mul}>Multiplicar</button>
                <button onClick={div}>Dividir</button>
            </div>
             
            
        </div>
    )
}

export default Calcular;