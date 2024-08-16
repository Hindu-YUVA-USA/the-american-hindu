import Nav from '@/components/Nav'
import '@/styles/globals.css'
import React from 'react'
import { AuthProvider } from './_providers/AuthProvider'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <AuthProvider>
          <Nav />
          {children}
          {/* <Footer/> */}
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
