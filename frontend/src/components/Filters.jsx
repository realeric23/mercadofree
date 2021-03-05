import React from 'react'

import { filter } from '../redux/actions/searchActions';
import { useSelector, useDispatch } from 'react-redux'
import './Filters.css'

const Filters = () => {
    const search = useSelector((state) => state.search);
    const { products } = search
    const dispatch = useDispatch();

    return (
        <div className="wrapper flex">
            <div className="filtersBar border-primary flex ">
                <div className='filter-by'>Filter by ➤</div>

                <div className='wordswrapper'>
                    <div className='space' onClick={() => dispatch(filter(products, 'lowerPrice'))} >
                        <i class="fas fa-arrow-down"></i> <span>Price</span>
                    </div><span></span>

                    <div className='space' onClick={() => dispatch(filter(products, 'higherPrice'))} >
                        <i class="fas fa-arrow-up"></i><span>Price </span>
                    </div>

                    <div className='space' onClick={() => dispatch(filter(products, 'ascName'))} >
                        <i class="fas fa-arrow-up"></i><span>Name</span>
                    </div>

                    <div className='space' onClick={() => dispatch(filter(products, 'descName'))} >
                        <i class="fas fa-arrow-down"></i> <span>Name </span>
                    </div>

                    <div className='space' onClick={() => dispatch(filter(products, 'new'))} >
                        <i className="fa fa-exclamation-circle"> </i> <span> New </span>
                    </div>

                    <div className='space' onClick={() => dispatch(filter(products, 'used'))} >
                        <i className="fa fa-recycle"> </i> <span>Used </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters

