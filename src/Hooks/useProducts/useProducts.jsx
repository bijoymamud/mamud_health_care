import React, { useEffect, useState } from 'react'

const useProducts = () => {
 
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("../../../public/products.json")
            .then(res => res.json())
            .then((data) => {  
                setProducts(data)
                setIsLoading(false)
                console.log(data)
        })
    }, [])
    
    return [products, isLoading]

}

export default useProducts
