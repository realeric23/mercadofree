import React from 'react'
import './NotFound';

const NotFound = () => {
    return (
        <div className="container">
            <div className="row">
                <h1><strong>404</strong> Not found <span>:(</span></h1>
                <p>Sorry, but the product you were trying to view does not exist.</p>
                <p>It looks like this was the result of either:</p>
                <ul>
                    <li>a spelling mistake</li>
                    <li>a non-existent product</li>
                </ul>
            </div>
        </div>

    )
}

export default NotFound