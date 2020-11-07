import React from 'react'
import Ingredient from './Ingredient'

function AllIngredients(props){
    return(
        <div className="text-block">
            <h3>Ingredients:</h3>
            <ul>
                { props.meal.strIngredient1 !== "" && props.meal.strIngredient1 !== "null" && props.meal.strIngredient1 !== null ? <Ingredient value={props.meal.strIngredient1 } amount={props.meal.strMeasure1}/>: null}
                { props.meal.strIngredient2 !== "" && props.meal.strIngredient2 !== "null" && props.meal.strIngredient2 !== null ? <Ingredient value={props.meal.strIngredient2 } amount={props.meal.strMeasure2}/>: null}
                { props.meal.strIngredient3 !== "" && props.meal.strIngredient3 !== "null" && props.meal.strIngredient3 !== null ? <Ingredient value={props.meal.strIngredient3} amount={props.meal.strMeasure3}/>: null}
                { props.meal.strIngredient4 !== "" && props.meal.strIngredient4 !== "null" && props.meal.strIngredient4 !== null ? <Ingredient value={props.meal.strIngredient4} amount={props.meal.strMeasure4}/>: null}
                { props.meal.strIngredient5 !== "" && props.meal.strIngredient5 !== "null" && props.meal.strIngredient5 !== null ? <Ingredient value={props.meal.strIngredient5} amount={props.meal.strMeasure5}/>: null}
                { props.meal.strIngredient6 !== "" && props.meal.strIngredient6 !== "null" && props.meal.strIngredient6 !== null ? <Ingredient value={props.meal.strIngredient6} amount={props.meal.strMeasure6}/>: null}
                { props.meal.strIngredient7 !== "" && props.meal.strIngredient7 !== "null" && props.meal.strIngredient7 !== null ? <Ingredient value={props.meal.strIngredient7} amount={props.meal.strMeasure7}/>: null}
                { props.meal.strIngredient8 !== "" && props.meal.strIngredient8 !== "null" && props.meal.strIngredient8 !== null ? <Ingredient value={props.meal.strIngredient8} amount={props.meal.strMeasure8}/>: null}
                { props.meal.strIngredient9 !== "" && props.meal.strIngredient9 !== "null" && props.meal.strIngredient9 !== null ? <Ingredient value={props.meal.strIngredient9} amount={props.meal.strMeasure9}/>: null}
                { props.meal.strIngredient10 !== "" && props.meal.strIngredient10 !== "null" && props.meal.strIngredient10 != null ? <Ingredient value={props.meal.strIngredient10} amount={props.meal.strMeasure10}/>: null}
                { props.meal.strIngredient11 !== "" && props.meal.strIngredient11 !== "null" && props.meal.strIngredient11 != null ? <Ingredient value={props.meal.strIngredient11} amount={props.meal.strMeasure11}/>: null}
                { props.meal.strIngredient12 !== "" && props.meal.strIngredient12 !== "null" && props.meal.strIngredient12 != null ? <Ingredient value={props.meal.strIngredient12} amount={props.meal.strMeasure12}/>: null}
                { props.meal.strIngredient13 !== "" && props.meal.strIngredient13 !== "null" && props.meal.strIngredient13 != null ? <Ingredient value={props.meal.strIngredient13} amount={props.meal.strMeasure13}/>: null}
                { props.meal.strIngredient14 !== "" && props.meal.strIngredient14 !== "null" && props.meal.strIngredient14 != null ? <Ingredient value={props.meal.strIngredient14} amount={props.meal.strMeasure14}/>: null}
                { props.meal.strIngredient15 !== "" && props.meal.strIngredient15 !== "null" && props.meal.strIngredient15 != null ? <Ingredient value={props.meal.strIngredient15} amount={props.meal.strMeasure15}/>: null}
                { props.meal.strIngredient16 !=="" && props.meal.strIngredient16 !== "null" && props.meal.strIngredient16 != null ? <Ingredient value={props.meal.strIngredient16} amount={props.meal.strMeasure16}/>: null}
                { props.meal.strIngredient17 !== "" && props.meal.strIngredient17 !== "null" && props.meal.strIngredient17 != null ? <Ingredient value={props.meal.strIngredient17} amount={props.meal.strMeasure17}/>: null}
                { props.meal.strIngredient18 !== "" && props.meal.strIngredient18 !== "null" && props.meal.strIngredient18 != null ? <Ingredient value={props.meal.strIngredient18} amount={props.meal.strMeasure18}/>: null}
                { props.meal.strIngredient19 !== "" && props.meal.strIngredient19 !== "null" && props.meal.strIngredient19 != null ? <Ingredient value={props.meal.strIngredient19} amount={props.meal.strMeasure19}/>: null}
                { props.meal.strIngredient20 !== "" && props.meal.strIngredient20 !== "null" && props.meal.strIngredient20 != null ? <Ingredient value={props.meal.strIngredient20} amount={props.meal.strMeasure20}/>: null}
            </ul>
        </div>
    )
}


export default AllIngredients