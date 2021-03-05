import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProduct } from "../redux/actions/searchActions";
import './Searchbox.css';



const Searchbox = () => {

    const dispatch = useDispatch();
    const [product_name, set_product_name] = useState('')


    return (
        <div class="wrap">
            <div class="search">
                <input
                    type="search"
                    name='query'
                    value={product_name}
                    className="searchTerm"
                    placeholder="What are you looking for?"
                    onChange={
                        (e) => {
                            set_product_name(e.target.value);
                        }
                    }
                />

                <Link className="searchButton" to='/search'>
                    <i className="fa fa-search"
                        type='submit'
                        value='Buscar'
                        onClick={() => { dispatch(fetchProduct(product_name)) }}
                    >
                    </i>
                </Link>
            </div>
        </div>
    )
}

export default Searchbox
