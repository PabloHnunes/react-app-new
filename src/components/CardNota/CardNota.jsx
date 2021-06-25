import React, { Component } from 'react';
import {ReactComponent as DeleteSvg} from "../../assets/img/delete.svg";
import './style.css';

class CardNota extends Component {
    apagar(){
        const indice = this.props.indice;
        this.props.apagarNota(indice);
    }
  render() {
        return (
            <section className="card-nota">
                <h2>{this.props.categoria}</h2>
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSvg onClick={this.apagar.bind(this)}/>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        );
    }
}
 
export default CardNota;