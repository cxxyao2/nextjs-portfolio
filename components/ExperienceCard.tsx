import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg  items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full object-cover object-center  xl:w-[200px] xl:h-[200px]'
        src='/avatar/duck.jpg'
        alt=''></motion.img>

      <div className='px-0 md:px-10 '>
        <h4 className='text-4xl font-light'>Frontend Developer</h4>
        <p className='font-bold text-2xl mt-1'>Porject Name xxx</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='avatar/duck.jpg'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='avatar/duck.jpg'
          />
          <img
            className='h-10 w-10 rounded-full'
            src='avatar/duck.jpg'
          />
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          Started work.... - Ended...
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
