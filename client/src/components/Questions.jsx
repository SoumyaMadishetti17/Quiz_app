import React, { useEffect, useState } from 'react'
import Data from '../database/Data';
import './Question.css'
import { useFetchQuestion } from '../hooks/FecthQuestion.js';
import { useSelector } from 'react-redux';

const Questions = () => {
    const [checked,setChecked]=useState(undefined);
    const [{isLoading,apiData,serverError},setGetData]=useFetchQuestion()
    // const question=Data[0]
    const questions=useSelector(state=>state.questions.queue[state.questions.trace])
    // const trace=useSelector(state=>state.questions.trace)
    
    useEffect(()=>{
        console.log(questions);
    })
    
    function onSelect(){
        // setChecked(true)
        console.log('rad btn changed');
    }

    if(isLoading) return <h3>isLoading</h3>
    if(serverError) return <h3>{serverError || "unknown error" } </h3>
  return (
    <div className='questions'>
        <h2 >{question?.question} </h2>
        <ul key={question?.id}>
            {question?.options.map((q,i)=>(
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