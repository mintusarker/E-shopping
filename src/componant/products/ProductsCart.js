import React from 'react';

const ProductsCart = ({ product }) => {

    return (
        <div>
            <div className="card mb-2 bg-base-100 shadow-xl">
                <figure><img className='h-44 w-full p-1' src={product?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product?.category}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm w-full btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCart;