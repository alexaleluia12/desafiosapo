import React from 'react';

import './App.css';
import Table from './Table.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      fontColorProtein: "#ffffff",
      fontColorCarbohidrate: "#ffffff",
      fontColorFat: "#ffffff"
    };
  }

  fetchData(uri) {
    return fetch(uri)
      .then(resp => resp.json())
      .catch(error => {
        throw error;
      });
  }

  componentDidMount(){
    this.fetchData("http://127.0.0.1:3001/food")
    .then(data => {
      this.setState({data});
    })
    .catch(error => console.error(error));
  }

  handleProteins = (e) => {
    this.rezetColor();
    this.setState({fontColorProtein: "#000000"});
    this.fetchData("http://127.0.0.1:3001/food?filter=protein")
    .then(data => {
      this.setState({data});
    })
  }

  handleCarbohydrate = (e) => {
    this.rezetColor();
    this.setState({fontColorCarbohidrate: "#000000"});
    this.fetchData("http://127.0.0.1:3001/food?filter=carbohydrate")
    .then(data => {
      this.setState({data});
    })
  }

  handleFat = (e) => {
    this.rezetColor();
    this.setState({fontColorFat: "#000000"});
    this.fetchData("http://127.0.0.1:3001/food?filter=fat")
    .then(data => {
      this.setState({data});
    })
  }

  rezetColor = () => {
    this.setState({
      fontColorProtein: "#ffffff",
      fontColorCarbohidrate: "#ffffff",
      fontColorFat: "#ffffff"
    });
  }

  handleHome = (e) => {
    this.rezetColor();
    this.fetchData("http://127.0.0.1:3001/food")
    .then(data => {
      this.setState({data});
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2
            className="home"
            onClick={this.handleHome}
          >Home</h2>
          <div className="headerTitle">
            <h3
              className="proteinas"
              onClick={this.handleProteins}
              style={{color: this.state.fontColorProtein}}
            >Proteínas</h3>
            <h3
              className="carboidratos"
              onClick={this.handleCarbohydrate}
              style={{color: this.state.fontColorCarbohidrate}}
            >Carboitratos</h3>
            <h3
              className="gorduras"
              onClick={this.handleFat}
              style={{color: this.state.fontColorFat}}
            >Gorduras</h3>
          </div>
        </header>
        <section className="message">
          <h1>
            Bem-vindo ao <span>Sapo Alimentício</span>, aqui você irá encontrar informações
            nutricionais dos principais alimentos do mercado.
          </h1>
        </section>
        <section>
          <Table data={this.state.data}/>
        </section>
      </div>
    );
  }
}

export default App;
