import React from 'react'
import { Link } from 'react-router-dom'

const CTAbutton = ({children , active, linkto}) => {
  return (
    <Link to={linkto}>
    <div className={` ${active ?"text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-yellow-50 text-black  hover:shadow-none hover:scale-95 transition-all duration-200" : "text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-richblack-800 hover:shadow-none hover:scale-95 transition-all duration-200 "} `}>
        {children}
    </div>
        
    </Link>
  )
}

export default CTAbutton