import React, { useState } from 'react'
import Data from '../database/Data';
import './Question.css'

const Questions = () => {

    const question=Data[0]
    const [checked,setChecked]=useState(undefined);
    function onSelect(){
        // setChecked(true)
        console.log('radio btn changed');
    }
  return (
    <div className='questions'>
        <h2 >{question.question} </h2>
        <ul key={question.id}>
            {question.options.map((q,i)=>(
                <li key={i}>
                    <input
                        type="radio"
                        name="options"
                        id={`q${i}-option`}
                        value={false}
                        onChange={onSelect} />
                    <label className='label' htmlFor={`q${i}-option`}>{q}</label>
                    <div className='check checked'></div>    
                </li>
            ))}
                       

        </ul>

    </div>
  )
}

export default Questions