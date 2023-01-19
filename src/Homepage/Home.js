import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import Body from './Body'
export default function Home(props) {
    return (
        <div>
            <div className= "navbar">
                <h2>Welcome to the Color Factory</h2>
                <h1> <Link to= '/Color'>Add a Color</Link></h1>
            </div>

            <Body colorList={props.colorList}/>
           
        </div>
        
    )
}
