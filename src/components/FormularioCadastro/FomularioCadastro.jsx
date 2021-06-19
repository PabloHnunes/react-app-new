import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
    constructor(props){
        super(props);
        this.titulo ="";
        this.texto="";
    }
    _handleTitulo(event){
        event.stopPropagation();
        this.titulo = event.target.value;
    }
    _handleTexto(event){
        event.stopPropagation();
        this.texto = event.target.value;
    }
    _criarNota(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }
    render(){
        return(
            <form className="form-cadastro"
                  onSubmit={this._criarNota.bind(this)}
            >
                <input 
                    className="form-cadastro_input" 
                    type="texte" 
                    placeholder="Título"
                    onChange={this._handleTitulo.bind(this)}
                />
                <textarea
                    rows={15} 
                    className="form-cadastro_input" 
                    placeholder="Escreva sua nota..."
                    onChange={this._handleTexto.bind(this)}
                />
                <button 
                    className="from-cadastro_input form-cadastro_submit" 
                >
                    Cria Nota
                </button>
            </form>
        );
    }
}
export default FormularioCadastro;