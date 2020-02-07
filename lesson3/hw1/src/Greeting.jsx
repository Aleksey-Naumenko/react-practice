import React from 'react';
import './styles.scss';

const getAge = birthDate => {
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
}

const Greeting = props => {
    return (
        <h1 className="greeting_text">
            {`My name is ${props.name} ${props.lastName}. I'm ${getAge(props.birthDate)}`}
        </h1>
    )
};

export default Greeting;