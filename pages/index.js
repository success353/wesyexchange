import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'

const index = () => {
  return (
    <div>
      <Head>
        <title>Landing Page Build</title>
        <meta name='Landing Page' content='Generated by create next app'/>
      </Head>
      {/* NavBar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />
    </div>
  )
}

export default index