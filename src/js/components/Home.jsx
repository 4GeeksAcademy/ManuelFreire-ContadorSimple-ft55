import React from 'react';
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

function SecondsCounter(props) {
  return (
    <>

      <div className="container">
        <div className="d-flex gap-1 justify-content-center mt-5 bg-danger py-4 rounded-4">
          <span className='py-4 px-4 bg-black text-light rounded-3 align-text-bottom d-flex justify-content-center align-items-center'>
            <i class="fa-regular fa-clock fa-flip-both fa-2xl"></i>
          </span>
          {props.seconds.toString().padStart(6, '0').split("").map((digito, index) => (
            <span key={index} className=' py-4 px-4 bg-black text-light fs-5 rounded-3'>
              {digito}
            </span>
          ))}
        </div>
      </div>

    </>


  );
}

export default SecondsCounter;