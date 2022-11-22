import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <div className='h-screen flex  flex-col relative text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl'>
        About
      </h3>
      <div className='flex flex-col md:flex-row justify-around items-center'>
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src='avatar/myself.jpg'
          className='rounded-full w-40 h-40 object-cover '></motion.img>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}>
          <p className='text-base align-middle w-full p-2 md:w-2/3 md:p-5 first-line:uppercase '>
            Hi,there! My name is{' '}
            <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block'>
              <span className='relative text-white'>Jennifer Cheng</span>
            </span>
            &nbsp;(Xiaoxia Cheng) and my prvious job is frontend developer. I am
            developing web apps with Angular and React. Hi,there! My name is
            Jennifer Cheng (Xiaoxia Cheng) and my prvious job is frontend
            developer. I am developing web apps with Angular and React.I am good
            at Typescript and Javascript. I respect WCAG2.0 and best practice. I
            performance and user expericen.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
