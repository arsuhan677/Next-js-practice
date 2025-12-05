import Link from 'next/link';
import React from 'react';

const blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "this is title 1",
            description: "this is description 1",
        },
        {
            id: 2,
            title: "this is title 2",
            description: "this is description 2",
        },
        {
            id: 3,
            title: "this is title 3",
            description: "this is description 3",
        },
    ]
    return (
        <div>   
            <h1 className='underline text-4xl font-extrabold mb-6'>hello blogs</h1>
            <ul>
                {blogs.map((blog) => 
                <li className='mb-6 cursor-pointer' key={blog.id}>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                </li>
                )}
            </ul>
            
        </div>
    );
};

export default blogs;