import React, { useEffect, useState } from 'react'

const useBlogData = () => {
    const [blogs, setBlogs] = useState();

    useEffect(() => {
       fetch("../../../public/blogData.json") 
    }, [])
        .then(res => res.json())
        .then(data => {
        setBlogs(data)
        })
    
    return [blogs]
}

export default useBlogData
