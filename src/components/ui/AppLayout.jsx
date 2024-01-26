import React from 'react'
import AppHeader from '../layouts/AppHeader'

function AppLayout({children, className}) {
  return (
   <div className={`min-h-screen overflow-hidden relative py-10 md:py-[128px] ${className}`}>
      <AppHeader />
      {children}
   </div>
  )
}

export default AppLayout