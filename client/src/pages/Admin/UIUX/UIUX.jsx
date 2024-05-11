import React from 'react'
import HomeUixux from './SUB_UIUX/Home'
import AboutUixux from './SUB_UIUX/About'
import LocationUixux from './SUB_UIUX/Location'
import LinksUixux from './SUB_UIUX/Link'

const UIUX = () => {
  return (
    <div className=' p-16 w-full text-2xl'>
        <HomeUixux />
        <AboutUixux />
        <LocationUixux />
        <LinksUixux />
    </div>
  )
}

export default UIUX
