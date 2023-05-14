import React, { useEffect, useState } from 'react';
import ProductsCart from './ProductsCart';
import { HiSearch } from "react-icons/hi";

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleChange = async (event) => {
        let key = event.target.value
        let result = await fetch(`http://localhost:5000/search/${key}`)
        result = await result.json()
        setProducts(result)
    }

    
    return (
        <div>
            <div className='text-center w-2/5 border rounded-full flex mt-9 items-center mx-auto bg-white'>
                <HiSearch className='text-xl ml-2'></HiSearch>
                <input onChange={handleChange} className='h-8 w-full focus:outline-none border-none rounded-r-full' placeholder='search your products' type="search" name="" id="" /> </div>

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