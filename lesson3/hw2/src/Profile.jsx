import React from 'react';
import moment from "moment";

const getBirthDate = date => moment(date).format("DD MMM YY");


const Greeting = props => {
    return (
        <>
            <div className="greeting__name">
                {`${props.userData.firstName} ${props.userData.lastName}`}
            </div>
            <div className="greeting__birth">
                {`Was born ${getBirthDate(props.userData.birthDate)} in ${props.userData.birthPlace}`}
            </div>
        </>
    )
};

export default Greeting;