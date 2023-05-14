import React, { useEffect, useState } from 'react';
import ProductsCart from './ProductsCart';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-10 mx-6 my-24'>
                {
                     products.map(product => <ProductsCart
                     key={product._id}
                     product={product}
                     >
                     </ProductsCart>)
                }
            </div>
        </div>
    );
};

export default Products;