import React from 'react'
import { Link } from 'react-router-dom'
import './Body.css'
export default function Body({colorList}) {
   
    return (
        <div className="selection">
            <h2>Please Select a Color</h2>
            <div className= 'colorShow'>
            {colorList.map((color, index) => 
                <p key={index}><Link to={`/colorPage/${color.colorName}/${color.colorHex.substring(1).toUpperCase()}`}>{color.colorName}</Link></p>)} 
            </div>

        </div> 
        
    )
}