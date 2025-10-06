import React, { useEffect } from 'react'
import Questions from './Questions';
import './Quiz.css'
import {useSelector} from 'react-redux'

const Quiz = () => {

    const {questions}=useSelector(state=>state)
    useEffect(()=>{
        console.log(questions.queue);
    })
    // next btn event hand
    function onNext(){
        console.log('On next Click');
    }
    function onPrev(){
        console.log('On prev Click');
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