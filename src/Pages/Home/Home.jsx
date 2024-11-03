import React from 'react'
import Banner from './Banner'
import BrandFeatures from './BrandFeatures'
import Categories from './Categories'
import LatestDeal from './LatestDeal'
import BestSelling from './BestSelling'
import DealOfWeek from './DealOfWeek'
import SuggestedProduct from './SuggestedProduct'



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
      </div>
  )
}

export default Home
