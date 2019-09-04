//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText() {
    return "click me!";
}


//Create a react component
const App = () => {
    const buttonText = "Click Me!";

    return (
        <div>
            <label className="label" for="name">Enter Name:</label>
            <input />
            <button style={{ backgroundColor: 'black', color: 'white' }} id="name" type="text">
                {getButtonText()}
            </button>
        </div>
    );
};


//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)