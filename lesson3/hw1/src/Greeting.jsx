import React from 'react';
import './styles.scss';

const getAge = birthDate => {
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
}

const Greeting = props => {
    console.log(props.birthDate);
    return (
        <span className="greeting_text">
            {`My name is ${props.firstName} ${props.lastName}. I'm ${getAge(props.birthDate)}`}
        </span>
    )
};

export default Greeting;