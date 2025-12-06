import getPosts from '@/lib/getPost'
import getPostComments from '@/lib/getPostComments';
// import { title } from 'process';
import React, { Suspense } from 'react'
import Comments from '../../components/Comments'

export async function generateMetadata({ params }) {
    const { id } = await params;
    const post = await getPosts(id)
    return {
        title: post.title,
        description: post.body
    }
}

export default async function page({ params }) {
    const { id } = await params;
    const postPromise = getPosts(id)
    const commentsPromise = getPostComments(id)

    const post = await postPromise;

    // const [post, comments] = await Promise.all([postPromise, commentsPromise])

    // console.log(comments);

    return (
    <div>

        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <hr />

        <Suspense fallback="<h1>Comments Loading.......</h1>">
          <Comments promise={commentsPromise} />
        </Suspense>
      
    </div>
  )
}

