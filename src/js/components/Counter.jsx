const SecondsCounter = () => {
    let counter = 0;
    let intervalId = false;

    if (intervalId === false) {
        intervalId = setInterval(() => {
            counter++;

            const renderElement = document.getElementById("counterRender");

            if (renderElement) {
                const renderMap = renderElement.textContent = counter.toString().padStart(6,'0').split('null');
                renderMap.map((mapeo, index) => (
                    <span key={index} className="bg-secondary text-dark fw-bold fs-3 p-2 rounded">
                        {mapeo}
                    </span>
                )
            )
            }
        }, 1000);
    }


    return (
        <div className="container d-flex justify-content-center">
            <h1 id="counterRender"></h1>
        </div>

        
        
    );
};

export default SecondsCounter;