import React from 'react'
import { Card } from './card'
// import globe from '../../assets/Frame3.png'

const ServiceCard = ({image,title,text}) => {
  return (
    <Card className="lg:w-[250px] h-[230px] 
    sm:w-full
     border-0
     bg-[#0a0a0a]
     !shawdow-md shawdow-white/20
     flex flex-col justify-between
     mx-auto
      text-white p-5
      transistion-transform duration-300
      hover:scale-105
      ">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="my-4">
          <h2 className='font-semibold text-[1rem]'>
            {title}</h2>
        </div>
        <div>
          <p className='text-muted-foreground text-[.8rem]'>
            {/* Access Stocks, forex, commodities, and 
            crypto accross 100 + international markets. */}
            {text}
          </p>
        </div> 
    </Card> 
  )
}

export default ServiceCard