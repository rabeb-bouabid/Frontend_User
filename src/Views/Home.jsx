import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Home = () => {
  
  return (
    <motion.div
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    exit={{ x: 100 }} 
    >

  <div >
  <Header/>
  {/* ##################### Slider Starts Here #################### */}
  <Outlet/>
  <Footer/>
</div>

    </motion.div>
    
  )
}

export default Home
