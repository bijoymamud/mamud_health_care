import React, { useEffect, useState } from 'react'

const useBlogs = () => {
 
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetch('../../../public/blogData.json')
        .then(res =>res.json())
        .then(data => {
            setIsLoading(true);
            setBlogs(data)
        })
    } ,[])

    return [blogs, isLoading]
}

export default useBlogs;
