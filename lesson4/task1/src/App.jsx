import React from 'react';
import Counter from './Counter';

const App = () => {
    return (
        <>
        <Counter start={17} interval={1000}/>
        <Counter start={5} interval={500}/>
        <Counter start={-21} interval={250}/>
        </>
    )
}

export default App;
