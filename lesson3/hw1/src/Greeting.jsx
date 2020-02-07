import React from 'react';
import './styles.scss';

const getAge = birthDate => {
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
}

const Greeting = props => {
    return (
        <header className="greeting">
            {`My name is ${props.firstName} ${props.lastName}. I'm ${getAge(props.birthDate)} years old`}
        </header>
    )
};

export default Greeting;