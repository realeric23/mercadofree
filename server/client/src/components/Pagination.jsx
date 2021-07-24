import React from 'react'
import './Pagination.css';

const Pagination = ({ prodsPerPage, totalProds, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProds / prodsPerPage); i++) {
        pageNumbers.push(i);
    }



    return (
        <div className="container text-center">
            <div className="pagination ">
                {pageNumbers.map(number => (
                    <li key={number} className="page-numbers " onClick={() => paginate(number)} >
                        <a className="page-numbers btn btn-outline-dark btn-m rounded-pill mt-4">
                            {number}
                        </a>
                    </li>
                )
                )}
            </div>
        </div>
    )
}

export default Pagination