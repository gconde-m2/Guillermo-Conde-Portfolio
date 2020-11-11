import React from 'react';
import Svdots from './three-dots.svg'
import './loading.css' 

function Loading() {


  return (
   
    <div className='dotscharging'>

        <img src={Svdots} />
    
    </div>
    
  );
}

export default Loading;
