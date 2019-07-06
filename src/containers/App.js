import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Loader from "react-loader-spinner";

// import CssBaseline from "@material-ui/core/CssBaseline";

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

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.description
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <div>
        <h1>Encontrando...</h1>
        <Loader type="Puff" color="#00BFFF" height="200" width="200" />
      </div>
    ) : (
      <div className="tc">
        {/* <h1 className="f1">Procure seu Carro novo</h1> */}
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
