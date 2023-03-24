import React from 'react'

function Post({ post }) {
  console.log(post)
  return (
    <>
      <h1>{ post.title }</h1>
      <p> { post.description } </p>
    </>
  )
}

export default Post
