import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: "28" },
      { name: "Manu", age: "29" },
      { name: "Stephanie", age: "26" }
    ],
    showPerson: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: "28" },
        { name: event.target.value, age: "29" },
        { name: "Stephanie", age: "26" }
      ]

    })
  };

  switchNameHandler = (newName) => {
    //console.log('click');
    this.setState({
      persons: [
        { name: newName, age: "28" },
        { name: "Manu", age: "29" },
        { name: "Stephanie", age: "27" }

      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }


  render() {

    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}
            click={this.switchNameHandler.bind(this, 'Max!')}>My Hobbies: Dance</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Name</button>
        {person}
      </div>

    );
  }
}

export default App;
