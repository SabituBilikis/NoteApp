import React from 'react';

//styles
import '../styles/Toggle.css';
const Toggle = ({handleToggleDarkMode}) => {
    return (

        <div className="Toggle">
            <h1>Note</h1>
            <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
            }
             className="save">Toggles</button>
        </div>
    )
}

export default Toggle;

