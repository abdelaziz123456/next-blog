import React from 'react'
import PostsGrid from '../posts/PostsGrid'
import classes from './FeaturedPosts.module.css'
export default function FeaturedPosts(props) {
  return (
    <section className={classes.lates}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={props.posts}/>
    </section>
  )
}
