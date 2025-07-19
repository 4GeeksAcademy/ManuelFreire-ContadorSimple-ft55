import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/Home';

const root = ReactDOM.createRoot(document.getElementById("root"));

let seconds = 0;

setInterval(() => {
  root.render(<SecondsCounter seconds={seconds} />);
  seconds++;
}, 1000);

root.render(
  <React.StrictMode>
    <SecondsCounter counter="1000"/>
  </React.StrictMode>,
)
