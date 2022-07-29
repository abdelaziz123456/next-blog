import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import classes from './MainNavigation.module.css'
export default function MainNavigations() {
  return (
    <header className={classes.header}>
       <Link href='/'>
        <a ><Logo/></a></Link> 
        <nav>
            <ul>
                <li>
                    <Link href="/posts">posts</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>

            </ul>
        </nav>
    </header>
  )
}
