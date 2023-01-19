
import React from 'react'
import './Color.css'
import {Link} from 'react-router-dom'


export default function Color({colorType, colorInput, handleSubmission, colorList}) {
   
    return (
        <div className= 'form-container'>
        <form className= 'form'>
            <div >
                <label >Enter a Color</label>
                <input   onChange={colorInput}></input>
            </div>
            <div>
                <label >Select Color</label>
                <input type= 'color' className= "bottom-input" onChange={colorType}></input>
            </div>
            <div>
                <button  type = 'submit' onClick={handleSubmission}>Add Color</button>
            </div>
            <p><Link to= '/'>Go back to Home</Link></p>

        </form>
         </div>

    )
}