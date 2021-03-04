import React from 'react'
import './Spinner.css';
import loading from '../img/spinner.gif'

const Spinner = () => {
    return (
        <div className="spinner-container">
            <img
                src={loading}
                className='spinnerCircle'
                alt='Loading...'
            />
        </div>
    )
}

export default Spinner