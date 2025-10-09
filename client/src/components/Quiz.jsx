import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import './Quiz.css'
import {useDispatch, useSelector} from 'react-redux'
import { moveNextQuestion, movePrevQuestion } from '../hooks/FecthQuestion';
import { pushAnswer } from '../hooks/setResult';
import {Navigate } from 'react-router-dom'

const Quiz = () => {

  const [check,setCheck]=useState(undefined)
  const result=useSelector(state =>state.result.result)
    const {queue,trace}=useSelector(state=>state.questions)
    const dispatch=useDispatch()
    useEffect(()=>{
        console.log(result);
    })

    // next btn event hand
    function onNext(){
        console.log('On next Click');
        // update trace val by one
        if(trace<queue.length){
           dispatch(moveNextQuestion()) 
           dispatch(pushAnswer(check))
        }      
    }
    
    function onPrev(){
        console.log('On prev Click');
        if(trace>0){
          dispatch(movePrevQuestion())  
        }
        
    }


    function onChecked(check){
      console.log(check);
      setCheck(check)
    }

    // finish exam after last quque
    if(result.length && result.length>=queue.length){
      return <Navigate to={'/result'} replace="true" ></Navigate>
    }
  return (
    <div className='contain'>
        <h1> Dev's Quiz</h1>

        {/*display questions */}
        <Questions onChecked={onChecked}/>

        <div className='grid'>
            <button className='prev' onClick={onPrev}>Prev</button>
            <button className='next' onClick={onNext}>Next</button>
            
        </div>
    </div>
  )
}

export default Quiz