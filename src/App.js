import React from 'react'
import { AuthProvider } from './components/context/AuthContext.js'
import Footer from './components/Footer.js'
import Routes from './components/Routes.js'

function App() {

  return (
       <div>
        <AuthProvider>
          <Routes/>
          <Footer/>
        </AuthProvider>
      </div>
  )
}

export default App
