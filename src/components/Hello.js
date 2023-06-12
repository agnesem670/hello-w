import React from "react";

const Hello = () => {
    /* return (
        <div className='dummyClass'>
            <h1>Hello World from JSX</h1>
        </div>
    ) */
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello World from create element'))
}

export default Hello