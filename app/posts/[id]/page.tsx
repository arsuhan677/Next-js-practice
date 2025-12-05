import getAllPosts from '@/lib/getPost'
import React from 'react'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await getAllPosts(id)
  return (
    <div>

        <h1 className='text-red-500 font-bold'>{post.title}</h1>
        <p className='mt-6'>{post.body}</p>
      
    </div>
  )
}
