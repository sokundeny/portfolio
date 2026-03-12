import Link from 'next/link'
import React from 'react'

interface NavItem{
  name:string,
  url:string
}

const navItems:NavItem[]=[
  {
    name:"About Me",
    url:"/"
  },
  {
    name:"My Tech Stack",
    url:"/"
  },
  {
    name:"My Work",
    url:"/"
  },
  // {
  //   name:"Contact Me",
  //   url:"/"
  // },
]

const NavBar = () => {
  return (
    <div className="absolute top-0 z-10 flex justify-center w-full">
      <div className='flex items-center justify-between py-8 px-8 w-full max-w-300'>
        <h1 className="text-primary text-2xl font-bold">
          SOKUN DENY
        </h1>
        <div className="flex items-center gap-12">
          {
            navItems.map((item,index)=>(
              <Link key={index} href={item.url}>
                <h2 className='text-text-primary text-lg font-semibold tracking-wide hover:text-text-secondary transition-all duration-300 ease-out'>
                  {item.name}
                </h2>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default NavBar;