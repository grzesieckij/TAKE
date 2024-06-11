import {useEffect, useState} from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

export function ProductList({products}){

    const [filter, setFilter] = useState('');

    return (
        <div>
            <h1>
                List of Products
                <label>Filter by product title: </label>
                <input type="text" value={filter} onChange={(event) =>{
                    setFilter(event.target.value);
                }}/>
            </h1>
            <ul>
                {products.filter(product =>
                    product.title.toLowerCase().includes(filter.toLowerCase())).map((product, index) =>
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        brand={product.brand}
                    />
                )}
            </ul>

        </div>
    )
}