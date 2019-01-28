import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      {id: "p1", name: "Max", age: "28" },
      {id: "p2", name: "Manu", age: "29" },
      {id: "p3", name: "Stephanie", age: "26" }
    ],
    showPerson: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => { return p.id === id;}); // find index (return number)
    const person = ( {...this.state.persons[personIndex]} ); // person -> object witch this index
    person.name = event.target.value; // change name
    const persons = [...this.state.persons]; // copy all array from state
    persons[personIndex] = person;
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow })
  }

  deletePersonHandler = (indexName) => {
    //const newPersons = this.state.persons;
    const newPersons = [...this.state.persons]
    newPersons.splice(indexName, 1);
    this.setState({persons: newPersons})
  }


  render() {

    let person = null;
    
    const style = {
      backgroundColor: "green",
      color: "white",
      padding: "8px"
    }

    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map( (p, index) => {
            return <Person 
            //below 1 line: I need syntax arrow function -> I need the index which element is for delete
            click = {() => this.deletePersonHandler(index)}
            name={p.name} 
            age={p.age} 
            key={p.id}
            changed={(event) => this.nameChangeHandler(event, p.id)} />
          })}
        </div>
      )
      style.backgroundColor = "red";
    }

    let classes = [];
    if( this.state.persons.length <= 2){
      classes.push('red');
    }
    if( this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <p className={classes.join(' ')}>Change style elements</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Name</button>
        {person}
      </div>
    );
  }
}

export default App;
