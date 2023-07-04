import React, { Children } from 'react'
// import Navbar from '../utils/Navbar';

const Web = ({ className, children }) => {
    return (
      <div className="relative">
        {/* <Navbar /> */}
          <div className="">
              <div className={className}>{children}</div>
          </div>
      </div>
    )
  }
  
  export default Web;