import { Outlet, Link } from "react-router-dom";
//////////////////////Ingenierias.js//////////////////////
const Ingenierias = () => {
    return <div>
        <h1>Ingenieria</h1>
        <img src="https://www2.ucsm.edu.pe/wp-content/uploads/2022/07/Ciencias-e-Ingenierias-722x1024.png" width="200"></img>
        <h1> >>>Escuelas</h1>
        <div>
            <Link to='Arquitectura'>Arquitectura</Link><br></br>
            <Link to='Ambiental'> Ambiental</Link><br></br>
            <Link to='Civil'>Civil</Link><br></br>
            <Link to='Sistemas'>Sistemas</Link><br></br>
            <Link to='Minas'>Minas</Link>
        </div>
        <Outlet />
    </div>

};
export default Ingenierias;