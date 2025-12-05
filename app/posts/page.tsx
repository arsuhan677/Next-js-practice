import React from 'react'
import getAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';


export default async function page() {
    const posts = await getAllPosts();
    console.log(posts);
  return (
    <div>

        <ul>
            {posts.map(post => <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
        </ul>
      
    </div>
  )
}
 


