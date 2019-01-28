import React from 'react';
import './Cockpit';

const cockpit = (props) => {
    let classes = [];


    if (props.state.persons.length <= 2) {
      classes.push('red');
    }
    if (props.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="cockpit">
            <h1>Hello React</h1>
            <p className={classes.join(' ')}>Change style elements</p>
            <button onClick={this.togglePersonsHandler}>Toggle Name</button>
        </div>
    );
};

export default cockpit;