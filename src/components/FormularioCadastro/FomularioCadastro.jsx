import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
    this.categoria = 'Sem Categoria';
    this.state = {categorias:[]}
  }
  componentDidMount(){
    this.props.categorias.inscrever(this.novaCategorias.bind(this));
  }
  novaCategorias(categorias){
    this.setState({...this.state, categorias});
  }
  handleMudancaCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  handleTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  handleTexto(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
        <select
          className="form-cadastro_input"
          onChange={this.handleMudancaCategoria.bind(this)}
        >
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
          })}
        </select>
        <input
          className="form-cadastro_input"
          type="texte"
          placeholder="Título"
          onChange={this.handleTitulo.bind(this)}
        />
        <textarea
          rows={15}
          className="form-cadastro_input"
          placeholder="Escreva sua nota..."
          onChange={this.handleTexto.bind(this)}
        />
        <button type="submit" className="from-cadastro_input form-cadastro_submit">
          Cria Nota
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
