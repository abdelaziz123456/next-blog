import React from 'react'
import AllPosts from '../../Components/posts/AllPosts'
const DUMMY_POSTS = [
    {
      slug :'getting-started-with-nextjs',
      title:'Getting Started With Nextjs',
     
      image:'getting-started-nextjs.png',
      excerpt:'NextJS is a React framework for production- it makes building fullstack React apps and sites a breeze and ships with build-in SSR ',
      date:'2022-02-10',
    },  {
      slug :'getting-started-with-nextjs2',
      title:'Getting Started With Nextjs',
     
      image:'getting-started-nextjs.png',
      excerpt:'NextJS is a React framework for production- it makes building fullstack React apps and sites a breeze and ships with build-in SSR ',
      date:'2022-02-10',
    },  {
      slug :'getting-started-with-nextjs3',
      title:'Getting Started With Nextjs',
     
      image:'getting-started-nextjs.png',
      excerpt:'NextJS is a React framework for production- it makes building fullstack React apps and sites a breeze and ships with build-in SSR ',
      date:'2022-02-10',
    },  {
      slug :'getting-started-with-nextjs4',
      title:'Getting Started With Nextjs',
     
      image:'getting-started-nextjs.png',
      excerpt:'NextJS is a React framework for production- it makes building fullstack React apps and sites a breeze and ships with build-in SSR ',
      date:'2022-02-10',
    },
  ];
export default function AllPostsPage() {
  return (
   <AllPosts posts={DUMMY_POSTS} />
  )
}
