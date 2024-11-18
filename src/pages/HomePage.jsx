import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Features from '../components/Features'
import Whatwedo from '../components/Whatwedo'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Logos from '../components/Logos'
import Mobile from '../components/Mobile'

const HomePage = () => {
  return (
    <div className="flex-1 w-full overflow-hidden bg-white">
      <div className="flex justify-center items-center bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] bg-cover bg-center">
        <div className="w-full" >
          <Navbar />
          <Hero/>
        </div>
      </div>

      
      <div className="flex justify-center items-center  bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] bg-center bg-cover">
        <div className="w-full bg-gradient-to-b via-[#EDE8FE] from-white to-white">
          {/* Your Homepage Content */}
          <Testimonials/>
        </div>
      </div>
      
      <div className="flex justify-center items-center bg-transparent">
        <div className="w-full">
          {/* Your Homepage Content */}
          <Features/>
        </div>
      </div>
      <div className="flex justify-center items-center bg-transparent">
        <div className="w-full">
          {/* Your Homepage Content */}
          <Logos/>
        </div>
      </div>
      <div className="flex justify-center items-center bg-transparent">
        <div className="w-full">
          {/* Your Homepage Content */}
          <Mobile/>
        </div>
      </div>
      
      <div className="flex  justify-center items-center bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] bg-center bg-cover">
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage
