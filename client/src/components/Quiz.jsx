import React, { useEffect } from 'react'
import Questions from './Questions';
import './Quiz.css'
import {useDispatch, useSelector} from 'react-redux'
import { moveNextQuestion, movePrevQuestion } from '../hooks/FecthQuestion';

const Quiz = () => {
    const {queue,trace}=useSelector(state=>state.questions)
    // const queue=useSelector(state=>state.questions.q)
    const dispatch=useDispatch()
    useEffect(()=>{
        console.log(state);
    })

    // next btn event hand
    function onNext(){
        console.log('On next Click');
        // update trace val by one
        if(trace<queue.length){
           dispatch(moveNextQuestion()) 
        }      
    }
    
    function onPrev(){
        console.log('On prev Click');
        if(trace>0){
          dispatch(movePrevQuestion())  
        }
        
    }
  return (
    <div className='contain'>
        <h1> Dev's Quiz</h1>

        {/*display questions */}
        <Questions/>

        <div className='grid'>
            <button className='prev' onClick={onPrev}>Prev</button>
            <button className='next' onClick={onNext}>Next</button>
            
        </div>
    </div>
  )
}

export default Quiz