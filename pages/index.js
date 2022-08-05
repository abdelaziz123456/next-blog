import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import FeaturedPosts from "../Components/home-page/FeaturedPosts";
import Hero from "../Components/home-page/Hero";
import styles from "../styles/Home.module.css";
import {getFeaturedPosts} from "../libs/post-util";


export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
        <meta name='description' content="I post about frontend development "/>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}



export function getStaticProps(){
    const featuredPosts=getFeaturedPosts();

    return {
        props:{
            posts:featuredPosts
        },

    }
}