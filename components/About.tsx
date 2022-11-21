import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl '>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        src='/avatar/duck.jpg'
        viewport={{ once: true }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full  object-cover md:rounded-lg md:w-64 mh:h-95 xl:w-[500px] xl:h-[600px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{' '}
          <span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
          background
        </h4>
        <p className='text-base'>
          I'm Jennifer Cheng. I've been coding for more than 10 years. As a
          project manager, I worked as ERP consulatant. I have accumulated.. how
          to apply developer skills in a range of cool builds and challenges. I
          deliver true value by teaching REAL WORLD projects to help students
          enter the world of development.
        </p>
      </div>
    </motion.div>
  )
}

export default About
