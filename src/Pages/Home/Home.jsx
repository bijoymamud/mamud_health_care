import React from 'react'
import Banner from './Banner'
import BrandFeatures from './BrandFeatures'
import Categories from './Categories'
import LatestDeal from './LatestDeal'
import BestSelling from './BestSelling'
import DealOfWeek from './DealOfWeek'
import SuggestedProduct from './SuggestedProduct'
import AccordionUsage from './Accordian'



const Home = () => {
  return (
    <div>
      <Banner />
      <BrandFeatures />
      <Categories />
      <LatestDeal />
      <BestSelling />
      <DealOfWeek />
      <SuggestedProduct/>
      <AccordionUsage/>
      </div>
  )
}

export default Home
