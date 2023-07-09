import React from 'react'
import loader from './Fading lines.gif';

export default function Spinner() {
  return (
    <div className='text-center my-3'>
        <img src={loader} alt="loader" style={{height: '20px'}}/>
    </div>
  )
}
