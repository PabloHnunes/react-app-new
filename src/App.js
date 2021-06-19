import React, { Component } from 'react';
import  ListaDeNotas  from './components/ListaDeNotas/index'
import FormularioCadastro from './components/FormularioCadastro/index'
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  criarNota(titulo, texto){
    console.log(`Nota Sendo criarda ` + titulo +' '+ texto);
  }
  render(){
    return (
      <section className="conteudo" >
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas/>
      </section>
    ); 
  }
}

export default App;
