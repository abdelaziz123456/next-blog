import React from 'react'
import PostHeader from './PostHeader';
import classes from './PostContent.module.css'
import ReactMarkdown from 'react-markdown';
const DUMMY_POST={
    slug :'getting-started-with-nextjs',
    title:'Getting Started With Nextjs',
   
    image:'getting-started-nextjs.png',
    date:'2022-02-10',
    content:'# this is first post'
  }
export default function PostContent() {
    const imagePath=`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  return (
    <article className={classes.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath}/>
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}
