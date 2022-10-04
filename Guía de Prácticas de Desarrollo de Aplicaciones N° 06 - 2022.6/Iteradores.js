import './ESTILOS.css';
function CAM(props) {
    const{mon,cam}=props
    return (
        <div>
             <p> - La moneda {mon} vale {cam} con respecto al SOL </p>
        </div>
    );
}

function cambio(){
    let moneda = [  {Moneda:"SOLES",Valor:1.00,},
                    {Moneda:"DOLARES",Valor:0.25011,},
                    {Moneda:"Euro",Valor:0.25512},
                    {Moneda:"Peso Argentino",Valor:36.8395},
    ]
    return (
        <div id='Cuerpo'>
            <h1 className='text'>Experiencia 03 Iteradores - D</h1>
            {moneda.map((moneda)=>(
                <CAM 
                    mon ={moneda.Moneda}
                    cam = {moneda.Valor}
                />
                    )
                )
            }
        </div>)
}


export default cambio;