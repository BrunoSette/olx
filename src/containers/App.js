import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Loader from "react-loader-spinner";
import {min, max, median} from 'simple-statistics'
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl =
        "https://nb1wq4bbwb.execute-api.us-east-1.amazonaws.com/dev/notes/filter";

    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(description => {
        this.setState({ robots: description });
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  precoMaximoListaCarros(listaFiltradaCarros) {
    let precos = listaFiltradaCarros.map(carro => carro.price * 1000);
    return precos.length > 0 ? max(precos).toLocaleString("pt-br") : 0
  }

  precoMinimoListaCarros(listaFiltradaCarros) {
    let precos = listaFiltradaCarros.map(carro => carro.price * 1000);
    return precos.length > 0 ? min(precos).toLocaleString("pt-br") : 0
  }

  precoMedianoListaCarros(listaFiltradaCarros){ 
    let precos = listaFiltradaCarros.map(carro => carro.price * 1000);
    return precos.length > 0 ? median(precos).toLocaleString("pt-br") : 0
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.description
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <div className="tc">
        <h1>procurando...</h1>
        <Loader type="Puff" color="#00BFFF" height="300" width="300" />
      </div>
    ) : (
      <div className="tc">
        
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
        <div className="container">
          <p>Existem {filteredRobots.length} carros.
              Menor Valor = R$ {this.precoMinimoListaCarros(filteredRobots)} ->
               Maior Valor = R$ {this.precoMaximoListaCarros(filteredRobots)} ->
               Mediano = R$ {this.precoMedianoListaCarros(filteredRobots)} 
          </p>
        </div>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
