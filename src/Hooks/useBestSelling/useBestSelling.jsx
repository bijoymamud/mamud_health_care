import React, { useEffect, useState } from 'react'

const useBestSelling = () => {
 
    const [bestProducts, setBestProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('../../../public/bestSelling.json')
        .then(res =>res.json())
        .then(data => {
            setIsLoading(true);
            setBestProducts(data)
        })
    } ,[])

    return [bestProducts, isLoading]
}

export default useBestSelling;
