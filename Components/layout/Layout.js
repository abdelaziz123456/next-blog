import React, { Fragment } from 'react'
import MainNavigations from './MainNavigations'

export default function Layout(props) {
  return (
    <Fragment>
<MainNavigations/>
{props.children}
    </Fragment>
  )
}
