import React from 'react'
import classes from './Hero.module.css'
import Image from 'next/image'
export default function Hero() {
  return (
   <section className={classes.hero}>
    <div>
<Image src="/images/site/myImage.jpeg" alt='a personal image'  width={300} height={300} className={classes.image} />
    </div>
    <h1>Hi , I am Abdelaziz</h1>
    <p>I blog about web development - especially frontend frameworks like React, Next js</p>
   </section>
  )
}
