import React from 'react';

import { getTeamdata } from '../../services/MenuItems'
import { useState } from "react";


let DataFetching = () => {

    let [posts, setUser] = useState([])
    let sampledata = getTeamdata(posts);
    sampledata
        .then(response => {
           
            setUser(response.data)
        }, []);

    

    const DisplayData = posts.map(
        (info) => {
            return (

                <tr>
                    <td>{info.id}</td>
                    <td>{info.menu}</td>
                    <td>{info.price}</td>
                    <td>{info.discount}</td>
                    <td>{info.description}</td>
                    <td>{String(info.stock)}</td>

                </tr>
            )
        }
    )
    return (

        <div>
            <div className="search-wrapper">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search for..."
                    
                    />
                    <span className="sr-only">Search Menu here</span>
                </label>
            </div>
            <table class="table table-striped" border="1">

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Menu</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Description</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>

        </div>
    )
}

export default DataFetching;

