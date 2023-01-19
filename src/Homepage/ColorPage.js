import React from 'react'
import {Link, useParams} from 'react-router-dom'
import './Color.css'
export default function ColorPage({colorList}) {

    const {colorName, colorHex} = useParams()
    
    return (
        <div>
             <div className="colorDisplay" style={{background: `#${colorHex}`}}>
            <h1>This is Color {colorName} with Hex {`#${colorHex}`}</h1>
            
            <Link to={"/"}><h1>Go Back</h1></Link>
            </div>
        </div>
    )
}