import React from 'react'

function Container({children}) {
  return (
    <div className='container md:px-7 px-4'>{children}</div>
  )
}

export default Container