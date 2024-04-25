import React from "react";




//Destructuring the props
export const Greet = ({name, heroName}) => {
    console.log(name + heroName)
    //props are immutable
    return ( 
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}
// export const Greet = (props) => {
//     const {name, heroName} = props
//     console.log(name + heroName)
//     //props are immutable
//     return ( 
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
// }

// export default Greet
