import React, { Component } from "react";

const API = "https://swapi.co/api/";
const CATEGORY = "starships/";

class a extends Component {
  [x: string]: any;
  state: { starships: any };

  constructor(props) {
    super(props);

    this.state = {
      starships: []
    };
  }
  componentDidMount() {
    console.log(API + CATEGORY);

    fetch(API + CATEGORY)
      .then(response => response.json())
      .then(data => this.setState({ starships: data.results }));
  }

  render() {
    const { starships } = this.state;
    console.log(starships);
    return (
      <div>
        <h2>Vaisseaux Spaciaux</h2>
        <ul>
          {starships.map(starship => (
            <li key={starship.objectID}>{starship.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default a;
