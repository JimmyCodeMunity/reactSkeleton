import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DataExportPage from '../components/Downloadcsv'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-transparent bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] bg-cover bg-center">
      <div className="flex justify-center items-center">
        <div className="w-full">
          <Navbar />
        </div>
      </div>

      <div className="flex sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          {/* Your Login Content */}
          <Login/>
          
        </div>
      </div>
      
      <div className="flex sm:px-6 px-6 justify-center items-center">
        <div className="w-full xl:max-w-[1280px]">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
