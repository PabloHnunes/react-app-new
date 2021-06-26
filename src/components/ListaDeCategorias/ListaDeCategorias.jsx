import React, { Component } from 'react';
import './style.css';

class ListaDeCategorias extends Component {

  constructor(){
    super();
    this.state = {categorias:[]}
    this.novasCategorias = this.novasCategorias.bind(this);
  }

  componentDidMount(){
    this.props.categorias.inscrever(this.novasCategorias);
  }
  componentWillUnmount(){
    this.props.categorias.desinscrever(this.novasCategorias);
  }

  novasCategorias(categorias){
    this.setState({...this.state, categorias});
  }

  handlesEventInput(event) {
    if (event.key === 'Enter') {
      const valorCategoria = event.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => (
            <li key={index} className="lista-categorias_item">
              {categoria}
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this.handlesEventInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
