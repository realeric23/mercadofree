import React, { useState } from 'react'
import Product from './Product'
import Spinner from './Spinner'
import { useSelector } from 'react-redux'
import Filters from './Filters'
import NotFound from './NotFound'
import Pagination from './Pagination'
import { Row, Col } from 'react-bootstrap';

const Products = () => {

    const search = useSelector((state) => state.search);
    const { loading, error, filterItems } = search

    const [currentPage, setCurrentPage] = useState(1);
    const [prodsPerPage] = useState(8);

    const indexOfLastProd = currentPage * prodsPerPage;
    const indexOfFirstProd = indexOfLastProd - prodsPerPage;
    const currentProds = filterItems.slice(indexOfFirstProd, indexOfLastProd);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return loading ? (
        <Spinner />
    ) :
        error ? (
            <span>{error}</span>
        ) :
            !filterItems.length ? (
                <div><Filters />
                    <NotFound />
                </div>
            ) :
                (
                    <div className='main'>
                        <Filters />

                        <div className="current" >
                            <span>Page N°{currentPage}</span>
                        </div>

                        <Row>
                            {currentProds.map(product => (
                                <Col sm={12} md={6} lg={4} xl={3}>
                                    <Product key={product.id} product={product} />
                                </Col>
                            ))}

                        </Row>


                        <Pagination
                            prodsPerPage={prodsPerPage}
                            totalProds={filterItems.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>

                )
}

export default Products

