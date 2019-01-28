import React from 'react';
import './Person.css';

const person = ({name, age, children, click, changed}) => {
    // const rnd = Math.random();
    // if (rnd > 0.7){
    //     throw new Error('Something went wrong');
    // }

    return(<div className="Person">
        <p onClick={click}>I'm a {name} and I am {age} years old!</p>
        <p>{children}</p>
        <input type="text" onChange={changed} value={name}/>
    </div>)
};

export default person;