import React from 'react'
import './styles/Card.css'
function Welcome (props){

    return(
        <div className="container">
            <div className="Fitness-User-Info">
            <h1>Hello {props.userName}!</h1>
            <p>Let´s workuot to get some girls</p>
            </div>
        </div>
    
    )
}

export default Welcome