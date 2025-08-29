import ServiceCard from '@/components/ui/serviceCard'
import React from 'react'
// import globe from '../../assets/Frame3.png'
import globe from '../assets/Frame3.png'
import img1 from "../assets/Frame2.png"
import img2 from "../assets/Frame4.png"
const ServicePage = () => {
  return (
    <div className='bg-red-0 


     lg:px-[6em] md:px-[3em] px-[1em]'>
      {/* TITLE */}
      <div className='mx-auto 
      lg:w-[50%] md:w-[70%] w-full
       bg-red-0 
       text-center
       p-4 my-[3rem]'>
        <h1 className='text-[2rem]'>
          Everything you need to trade like a pro
        </h1>
        <p className='text-muted-foreground mt-2'>
          Our platform combines cutting-edge technology
          with intuitive design to give you the 
          competitive edge in today's fast-moving 
          markets.
        </p>
      </div>
      {/* SERVICE CARD SECTION */}
      <div className='
      grid grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-4
      gap-6
      justify-center
      '>
      <ServiceCard
      image={globe}
      title="Trade on the go"
      text="Access Stocks, forex, commodities,
       and crypto accross 100 + international markets."
      />

      <ServiceCard
      image={img1}
      title="Bank-Level Security"
      text=" Your funds and data are protected
       with end-to-end encryption and
        multi-factor authentication."
      />


      <ServiceCard
      image={img2}
      title="Moblie-Trading"
      text="Trade on the go with our 
      award-winning mobile app, available on 
      iOS and Android."
      />

      <ServiceCard
      image={globe}
      title="Trade on the go"
      text="Ultra-low latency execution
       and advanced charting tools for 
       precise trading."
      />
      </div>
      {/* SECTION 2 */}
<div className='
      grid grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-4
      gap-6
      justify-center
      my-[2rem]
      '>
      <ServiceCard
      image={globe}
      title="Trade on the go"
      text="Access Stocks, forex, commodities,
       and crypto accross 100 + international markets."
      />

      <ServiceCard
      image={img1}
      title="Bank-Level Security"
      text=" Your funds and data are protected
       with end-to-end encryption and
        multi-factor authentication."
      />


      <ServiceCard
      image={img2}
      title="Moblie-Trading"
      text="Trade on the go with our 
      award-winning mobile app, available on 
      iOS and Android."
      />

      <ServiceCard
      image={globe}
      title="Trade on the go"
      text="Ultra-low latency execution
       and advanced charting tools for 
       precise trading."
      />
      </div>

    </div>
  )
}

export default ServicePage