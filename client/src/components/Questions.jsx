import React, { useEffect, useState } from 'react'
import Data from '../database/Data';
import './Question.css'
import { useFetchQuestion } from '../hooks/FecthQuestion.js';
import { useSelector } from 'react-redux';

const Questions = ({onChecked}) => {
    const [checked,setChecked]=useState(undefined);
    const [{isLoading,apiData,serverError},setGetData]=useFetchQuestion()
    // const question=Data[0]
    const questions=useSelector(state=>state.questions.queue[state.questions.trace])
    // const trace=useSelector(state=>state.questions.trace)
    
    useEffect(()=>{
        console.log(questions);
    })
    
    function onSelect(i){
        // setChecked(true)
        // console.log(i);
        onChecked(i)
    }

    if(isLoading) return <h3>isLoading</h3>
    if(serverError) return <h3>{serverError || "unknown error" } </h3>
  return (
    <div className='questions'>
        <h2 >{questions?.question} </h2>
        <ul key={questions?.id}>
            {questions?.options.map((q,i)=>(
                <li key={i}>
                    <input
                        type="radio"
                        name="options"
                        id={`q${i}-option`}
                        value={false}
                        onChange={()=>onSelect(i)} />
                    <label className='label' htmlFor={`q${i}-option`}>{q}</label>
                    <div className='check checked'></div>    
                </li>
            ))}                      
        </ul>

    </div>
  )
}

export default Questions