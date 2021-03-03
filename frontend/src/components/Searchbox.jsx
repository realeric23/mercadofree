import React, { useState } from "react";
import './Searchbox.css';



function Searchbox() {
    return (
        <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Searchbox
