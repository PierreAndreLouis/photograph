import React from 'react'
import { Link } from 'react-router-dom';

export default function Product({ grid }) {


    return (
        <div className=' mx-4 pb-10'>
            <div className={`md:grid ${grid ? 'md:grid-cols-2 my-20' : ""} bg-sky-50 dark:bg-gray-800 py-16 px-4 max-w-5xl mx-auto rounded-md overflow-hidden `}>
                <div className="relative">
                    <img className="w-full max-h-[20rem] h-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />
                    <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-xl md:text-2xl text-gray-800 dark:text-sky-500 font-bold mb-4">Voici notre produit le plus vendue, commander maintenant.</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.</p>

                    <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">$19.99</span>
                        <Link
                            to="/product"
                            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
