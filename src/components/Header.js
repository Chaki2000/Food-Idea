import React from 'react'


function Header(props){
    return(
        <header id={"header"}>
        <h1>What To Eat Tonight</h1>
        <div id="links">
          <button id={"top-button"} onClick={props.handleClick}>Generate Another Meal</button>
          <div id={"social-media"}>
            <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
          </div>  
        </div>
      </header>
    )
}


export default Header