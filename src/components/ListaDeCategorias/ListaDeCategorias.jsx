import React, { Component } from "react";

class ListaDeCategorias extends Component {
    _handlesEventInput(event){
        if(event.key === "Enter"){
            let valorCategoria = event.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
            {this.props.categorias.map((categoria, index) => {
                return (
                <li key={index} className="lista-categorias_item">
                    {categoria}
                </li>
                );
            })}
          <li className="lista-categorias_item"></li>
        </ul>
        <input 
        type="text" 
        className="lista-categorias_input"
        placeholder="Adicionar Categoria"
        onKeyUp={this._handlesEventInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
