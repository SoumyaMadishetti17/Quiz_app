import React from 'react'
import './Res.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable';
import { useDispatch } from 'react-redux';
import { resetAllAction } from './redux/question_reducer';
import { resultResultAction } from './redux/result_reducer';

const Result = () => {

    const dispatch=useDispatch()
    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resultResultAction())
        // console.log('on Restart');
    }
  return (
    <div className='res-cont'>
        <h1>Dev's Quiz</h1>
        <div className='res flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>Developer's Quiz</span>
            </div>
            <div className='flex'>
                <span>Total Quiz Points : </span>
                <span className='bold'>50</span>
            </div>
            <div className='flex'>
                <span>Total Quiz Questions :</span>
                <span className='bold'>05</span>
            </div>
            <div className='flex'>
                <span>Total  Attempts :</span>
                <span className='bold'>03</span>
            </div>
            <div className='flex'>
                <span>Total Earn Points :</span>
                <span className='bold'>30</span>
            </div>
            <div className='flex'>
                <span>Quiz Result</span>
                <span className='bold'>Passed</span>
            </div>
        </div>
        <div className='start'>
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>

        <div className="cont">
            <ResultTable/>
        </div>
    </div>
  )
}

export default Result