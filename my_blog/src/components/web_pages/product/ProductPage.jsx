import React from 'react'
import Product from '../home/Product'
import PaypalConnection from './PaypalConnection'

export default function ProductPage() {
    return (
        <div>
            <div className=' lg:flex  pt-40 max-w-7xl mx-auto grid-cols-2'>

                <Product grid={false} />
                <div className='lg:min-w-[30rem]'>
                    <PaypalConnection />
                </div>
            </div>
        </div>
    )
}
