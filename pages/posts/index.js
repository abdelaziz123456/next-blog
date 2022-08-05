import React from "react";
import AllPosts from "../../Components/posts/AllPosts";
import { getAllPosts } from "../../libs/post-util";
import Head from "next/head";
export default function AllPostsPage(props) {
  return (
    <>
     
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
