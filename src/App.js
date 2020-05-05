import React, { Component } from "react";

import { CardList } from "./components/cardList/cardList.component";
import { SearchBar } from "./components/searchBox/searchBox.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { monsters, search } = this.state;
    const data = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBar
          handleChange={this.handleChange}
          placeholder="Search Monsters"
        />
        <CardList monsters={data} />
      </div>
    );
  }
}

export default App;
