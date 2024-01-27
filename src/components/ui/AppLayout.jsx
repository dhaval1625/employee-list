import React from 'react'
import AppHeader from '../layouts/AppHeader'

function AppLayout({children, className}) {
  return (
   <div className={`min-h-screen overflow-hidden relative pt-11 pb-8 md:py-[8rem] ${className}`}>
      <AppHeader />
      {children}
   </div>
  )
}

export default AppLayout