import React from 'react'
import AllIngredients from './AllIngredients'
import Header from './Header'


class Main extends React.Component{
    constructor(){
        super()
        this.state ={
            currentMeal: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => response.json())
            .then(response => {
                const {meals} =response
                this.setState( {currentMeal: meals[0]})
            })
    }

    handleClick(){
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => response.json())
            .then(response => {
                const {meals} =response
                this.setState( {currentMeal: meals[0]})
            })
    }



    render(){
        return(

            <div>
                <Header handleClick={this.handleClick} />
                <main>

                    <div id={"main-img"}>
                        <div id={"main-img-text"}>
                            <h2>{this.state.currentMeal.strMeal}</h2>
                            <div className="text-block">
                                <h3>Country Of Origin:</h3>
                                <p> {this.state.currentMeal.strArea} </p>
                            </div>

                            <div className="text-block">
                                <h3>Food Type:</h3>
                                <p>{this.state.currentMeal.strCategory}</p>
                            </div>
                        

                            <AllIngredients meal={this.state.currentMeal} />
                            
                        </div>

                        <div 
                            id={"img"}
                            style={ {backgroundImage:'url('+this.state.currentMeal.strMealThumb+')'} }>
                           
                        </div>
                    </div>

                    
                    <div className="instructions">
                        <h3>Instructions:</h3>
                        <p>{this.state.currentMeal.strInstructions}</p>
                    </div>

                    <button id={"bottom-button"} onClick={this.handleClick}><a href="#header">Generate Another Meal</a></button>
                </main>
            </div>
        )
    }
}



export default Main
