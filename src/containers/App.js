import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: "p1", name: "Max", age: "28" },
      { id: "p2", name: "Manu", age: "29" },
      { id: "p3", name: "Stephanie", age: "26" }
    ],
    showPerson: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { return p.id === id; }); // find index (return number)
    const person = ({ ...this.state.persons[personIndex] }); // person -> object witch this index
    person.name = event.target.value; // change name
    const persons = [...this.state.persons]; // copy all array from state
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }

  deletePersonHandler = (indexName) => {
    //const newPersons = this.state.persons;
    const newPersons = [...this.state.persons]
    newPersons.splice(indexName, 1);
    this.setState({ persons: newPersons })
  }


  render() {

    let persons = null;

    if (this.state.showPerson) {
      persons = 
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
    }

    

    return (
      <div className="App">
          <Cockpit showPerson={this.state.showPerson} persons = {this.state.persons}/>
        {persons}
      </div>
    );
  }
}

export default App;
