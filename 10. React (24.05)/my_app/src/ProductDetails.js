import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const filteredProducts = products.filter(product => product.id == id);

    if (filteredProducts.length === 0) {
        return null;
    }

    const product = filteredProducts[0];

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Category: {product.category}<br/>
                Brand: {product.brand}<br/>
                Description: {product.description}<br/>
                Price: {product.price}<br/></p>
            <img src={product.thumbnail} alt={product.name} />
            <Link to="/">Powrót do listy produktów</Link>
        </div>
    );
};

export default ProductDetail;
