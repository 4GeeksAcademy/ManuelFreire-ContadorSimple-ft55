import React from 'react'

const SecondsCounter = () => {
    let counter = 500;
    let intervalId = false;

    if (intervalId === false) {
        intervalId = setInterval(() => {
            counter++;

            const renderElement = document.getElementById("counterRender");

            if (renderElement) {
                const renderMap = renderElement.innerHTML = counter.toString().padStart(6,'0').split('null');
                renderMap.map((mapeo, index) => (
                    <span key={index}>
                        {mapeo}
                    </span>
                )
            )
            }
        }, 1000);
    }

    
    return (
        <div className="container d-flex justify-content-center">
            <h1 className='d-flex ' id='counterRender'>

            </h1>
        </div>
    );
};

export default SecondsCounter;