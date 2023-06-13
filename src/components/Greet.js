import React from 'react'

/*
function Greet() {
    return <h1>Hello World</h1>
}
*/

const Greet = (props) => { // this export force us to use function name when we want to import this component. to import we have to use {}
    console.log(props);
    return ( 
    <div>   
        <h1>Hello {props.name} or {props.heroName} </h1>
        {props.children}
    </div> 
    );
} 
export default Greet // this export allows us to import this compononen with changed name

/*exportconst Greet = (props) => <h1>Hello World</h1> // this export force us to use function name when we want to import this component. to import we have to use {}*/
