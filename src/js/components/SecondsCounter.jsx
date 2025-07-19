import React from 'react';
import ReactDOM from 'react-dom/client'

const SecondsCounter = (props) => {

    let counter = props.counter;
    let idInterval;

    const initCounter = () => {
        const renderElement = document.getElementById("counterRender");

        idInterval = setInterval(() => {
            counter++;
            const digits = counter.toString().padStart(6, '0').split('');

            renderElement.innerHTML = digits.map((digit) => `<span class="border border-2 border-black rounded-2 p-3 mx-1 bg-light mw-100 w-75">${digit}</span>`)
                .join('');
        }, 1000);
    };

    setTimeout(initCounter, 0);

    return (
        <div className="container d-flex justify-content-center mt-5">
            <h1 id="counterRender">
                
            </h1>
        </div>
    );
};

export default SecondsCounter;