import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './Main.css'

const Main = () => {
    const inpRef=useRef(null)

  return (
    <div className='container'>
        <h1 className='title '>Quiz App</h1>
        <h3> ✌️✌️you will be asked 10 questions one after other </h3>
        <h3> 🌟🌟 10 Points awarded for correct answer</h3>
        <h3> ♾️ Each question has three options. you can only choose one option.</h3>
        <h3>😌 Result will be declared last .</h3>
        <h3>👻 Be Smart</h3>

        <form id='form'>
            <input ref={inpRef} type="text" placeholder='Username' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'}>Start  Quiz</Link>
        </div>

    </div>
  )
}

export default Main