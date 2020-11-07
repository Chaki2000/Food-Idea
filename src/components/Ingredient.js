import React from 'react'

function Ingredient(props){
    return(
        <li> {props.value} {", " + props.amount} </li>
    )
}



export default Ingredient