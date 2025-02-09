import React from 'react'
import { Hero } from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offer/Offer'
import NewCollection from '../components/newCollections/NewCollection'
import NewsLetter from '../components/newsLetter/NewsLetter'

const Shop = () => {
  return (
  <>
  <Hero />
  <Popular />
  <Offer />
  <NewCollection />
  <NewsLetter />
  </>
  )
}

export default Shop