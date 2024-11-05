import React, { useEffect, useState } from 'react'

const useSuggestedProduct = () => {
    const [suggestedProducts, setSuggestedProducts] = useState([])

    useEffect(() => {
        fetch('../../../public/suggestedProducts.json')
            .then(res => res.json())
            .then(data => {
                setSuggestedProducts(data)
            })
    } ,[])
    
    return [suggestedProducts];
}

export default useSuggestedProduct
