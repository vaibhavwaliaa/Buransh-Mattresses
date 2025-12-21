import React, { useEffect, useMemo, useState } from 'react'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Navbar from './Section1/Navbar'
import Section3 from './Section3/Section3'
import Footer from './Footer'

const Home = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1744534637336-6110864236fc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
      intro:"Whether you're running a hotel, resort, or homestay in Uttarakhand, Buransh Mattress is your trusted partner for all your bulk mattress needs. ",
      tag:'Get Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1675615649456-5c0a8b0ad0ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2016',
      intro:"For bulk mattress orders for homes or apartments in Uttarakhand, trust Buransh Mattress to deliver quality, affordability, and reliability. ",
      tag:'Get Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1683134381076-a66aa1c2f06e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471',
      intro:"Enhance the comfort and luxury of your hotel with premium hotel accessories from Buransh Mattress in Haldwani. ",
      tag:'Get Satisfied'
    }
  ]

  return (
    <>
      <Navbar />
      <main className="space-y-16">
        <Section1 users={users} />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
    </>
  )
}

export default Home
