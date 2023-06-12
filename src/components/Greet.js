import React from 'react'

/*
function Greet() {
    return <h1>Hello World</h1>
}
*/

/*export*/ const Greet = () => <h1>Hello World</h1> // this export force us to use function name when we want to import this component.
                                                    // to import we have to use {}

export default Greet // this export allows us to import this compononen with changed name