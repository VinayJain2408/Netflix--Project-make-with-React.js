import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Blog() {

    let [Blogs, setBlogs] = useState([])

    useEffect(() => {
        async function fetchdata() {
            let result = await axios.get('https://jsonplaceholder.typicode.com/posts/')
            console.log(result.data)
            setBlogs(result.data)
        }
        fetchdata()
    }, [])

    return (<>
        <h1>Blog</h1>
        {
            Blogs.map((blog) => {
                return (
                <div key={blog.id}>
                    <p>{blog.id}</p>
                    <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>
                    <p>{blog.body}</p>

                </div>

                )


            })
        }
    </>
    )
}

export default Blog