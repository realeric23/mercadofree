import React from 'react'
// import 'font-awesome/css/font-awesome.min.css';
import { filter } from '../redux/actions/searchActions';
import { useSelector, useDispatch } from 'react-redux'

const Filters = () => {

    const search = useSelector((state) => state.search);
    const { products } = search
    const dispatch = useDispatch();

    return (
        <div className="filtersBar">
            <div className='filter-by'>Filter by ➤</div>

            <div onClick={() => dispatch(filter(products, 'lowerPrice'))}>
                <i className="fa fa-sort-amount-asc"> </i> <span>Lower Price</span>
            </div>

            <div onClick={() => dispatch(filter(products, 'higherPrice'))}>
                <i className="fa fa-sort-amount-desc"> </i><span> Higher Price </span>
            </div>

            <div onClick={() => dispatch(filter(products, 'ascName'))}>
                <i className="fa fa-sort-alpha-asc"> </i><span> Ascending Name</span>
            </div>

            <div onClick={() => dispatch(filter(products, 'descName'))}>
                <i className="fa fa-sort-alpha-desc"> </i> <span>Descending Name </span>
            </div>

            <div onClick={() => dispatch(filter(products, 'new'))}>
                <i className="fa fa-exclamation-circle"> </i> <span> New </span>
            </div>

            <div onClick={() => dispatch(filter(products, 'used'))}>
                <i className="fa fa-recycle"> </i> <span>Used </span>
            </div>
        </div>
    )
}

export default Filters

