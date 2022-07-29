import React from 'react'
import Image from 'next/image'
import classes from './PostHeader.module.css'
export default function PostHeader(props) {
  const {title,image}=props
    return (
    <header>
        <h1 className={classes.header}> {title}</h1>
        <Image src={image} alt={title} width={200} height={150} />
    </header>
  )
}
