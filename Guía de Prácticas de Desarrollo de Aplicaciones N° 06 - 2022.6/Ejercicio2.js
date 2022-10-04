import './Ejercicio2.css';
import React, { Component } from 'react';
import { useState } from "react";

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
    item1 = () =>{ this.setState({ Multiplicador : 1});}
    item2 = () =>{ this.setState({ Multiplicador : 2});}
    item3 = () =>{ this.setState({ Multiplicador : 3});}
    item4 = () =>{ this.setState({ Multiplicador : 4});}
    item5 = () =>{ this.setState({ Multiplicador : 5});}
    item6 = () =>{ this.setState({ Multiplicador : 6});}
    item7 = () =>{ this.setState({ Multiplicador : 7});}
    item8 = () =>{ this.setState({ Multiplicador : 8});}
    item9 = () =>{ this.setState({ Multiplicador : 9});}

    Aitem1 = () =>{ this.setState({ Multiplicando : 1});}
    Aitem2 = () =>{ this.setState({ Multiplicando : 2});}
    Aitem3 = () =>{ this.setState({ Multiplicando : 3});}
    Aitem4 = () =>{ this.setState({ Multiplicando : 4});}
    Aitem5 = () =>{ this.setState({ Multiplicando : 5});}
    Aitem6 = () =>{ this.setState({ Multiplicando : 6});}
    Aitem7 = () =>{ this.setState({ Multiplicando : 7});}
    Aitem8 = () =>{ this.setState({ Multiplicando : 8});}
    Aitem9 = () =>{ this.setState({ Multiplicando : 9});}
    Reestablecer = () =>{ this.setState({ Multiplicador : 0 , Multiplicando : 0,Resultado :0 });}

    render(){
      return (
        <div id="Cuerpo" class="text">
            <h1>Ejercicio 2</h1>
            <h1>Calculadora</h1> 
            <h1>Escoge ==> </h1>  
            <div class = "Calcular">
                <div>
                    <button class = "tipo" onClick={this.Multiplicando}>Multiplicando</button>
                    <br></br><br></br>
                    <button onClick={this.Aitem7}>7</button>
                    <button onClick={this.Aitem8}>8</button>
                    <button onClick={this.Aitem9}>9</button><br></br>
                    <button onClick={this.Aitem4}>4</button>
                    <button onClick={this.Aitem5}>5</button>
                    <button onClick={this.Aitem6}>6</button><br></br>
                    <button onClick={this.Aitem1}>1</button>
                    <button onClick={this.Aitem2}>2</button>
                    <button onClick={this.Aitem3}>3</button><br></br>
                </div>
                <div>
                    <button class = "tipo" onClick={this.Multiplicador}>Multiplicador</button>
                    <br></br>   <br></br> 
                    <button onClick={this.item7}>7</button>
                    <button onClick={this.item8}>8</button>
                    <button onClick={this.item9}>9</button><br></br>
                    <button onClick={this.item4}>4</button>
                    <button onClick={this.item5}>5</button>
                    <button onClick={this.item6}>6</button><br></br>
                    <button onClick={this.item1}>1</button>
                    <button onClick={this.item2}>2</button>
                    <button onClick={this.item3}>3</button><br></br>
                </div>
            </div>
            
            <h1 onClick={this.Multi}> Multiplicar</h1>
            <h1 onClick={this.Reestablecer}> Reestablecer</h1>
            <h1> {this.state.Multiplicando} X {this.state.Multiplicador} = {this.state.Resultado}</h1>
            <br></br>
            <br></br>
        </div>
      );
    }
    
  }




//import ReactDOM from "react-dom/client";

  export default ComponenteConEstado;