import React, { Component } from "react";

const API = "https://swapi.co/api/";
const CATEGORY = "people/";

class b extends Component {
  [x: string]: any;
  state: { people: any };

  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }
  componentDidMount() {
    console.log(API + CATEGORY);

    fetch(API + CATEGORY)
      .then(response => response.json())
      .then(data => this.setState({ people: data.results }));
  }

  render() {
    const { people } = this.state;
    console.log(people);
    return (
      <div>
        <h2>Personnages</h2>
        <ul>
          {people.map(person => (
            <li key={person.objectID}>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default b;
