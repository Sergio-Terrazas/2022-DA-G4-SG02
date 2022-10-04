import './ESTILOS.css';
import React, { Component } from 'react';

class ComponenteConEstado extends Component{
    constructor(props){
      super(props);
      //Aquí se puede inicializar cualquier valor
      this.state ={
        Multiplicando:0,
        Multiplicador:0
      }
    };
    Multi = () =>{
        this.setState({
            Resultado : this.state.Multiplicando*this.state.Multiplicador
        });
    }
    item1 = () =>{
        this.setState({
            Multiplicando : this.state.Multiplicando + 1
        });
    }
    item2 = () =>{
        this.setState({
            Multiplicador : this.state.Multiplicador + 1
        });
    }
    render(){
      return (
        <div id="Cuerpo" class="text">
            <h1>Experiencia 04 Estado con clase - A</h1>
            <h1>Calculadora</h1>
            <h1 onClick={this.item1}> - Click Encima para Multiplicando</h1>
            <h1 onClick={this.item2}> - Click Encima para Multiplicador</h1>
            <h1 onClick={this.Multi}> - Click Encima para Resultado</h1>
            <h1> {this.state.Multiplicando} X {this.state.Multiplicador} = {this.state.Resultado}</h1>
            <br></br>
            <br></br>
        </div>
      );
    }
    
  }
  export default ComponenteConEstado;