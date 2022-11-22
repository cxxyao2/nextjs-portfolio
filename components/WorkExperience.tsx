import { motion } from 'framer-motion'
import React, { useState } from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({}: Props) {
  const [index, setIndex] = useState(1)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-800 text-2xl text-center'>
        Work Experience
      </h3>
      <div className='absolute top-36 grid  grid-cols-1 md:grid-cols-[150px_1fr] gap-5 '>
        <div className=' flex flex-row gap-x-1 pt-100 md:flex-col justify-evenly items-center md:h-100'>
          <button
            className='pl-2 border-l-2 border-gray-200 focus:border-[#F7AB0A]'
            onClick={() => setIndex(() => 1)}
            aria-label='adnm inc.'>
            <img
              src='works/ADNM.webp'
              className='w-24 h-12 rounded-lg'
            />
          </button>
          <button
            className='pl-2 border-l-2 border-gray-200 focus:border-[#F7AB0A]'
            onClick={() => setIndex(() => 2)}
            aria-label='youyou inc.'>
            <img
              src='works/yy.jpg'
              className='w-24 h-12 rounded-lg p-2'
            />
          </button>
          <button
            className='pl-2 border-l-2 border-gray-200 focus:border-[#F7AB0A]'
            onClick={() => setIndex(() => 3)}
            aria-label='cits inc.'>
            <img
              src='works/CITS.jpg'
              className='w-24 h-12 rounded-lg'
            />
          </button>
        </div>
        {index === 1 && (
          <ExperienceCard
            key={1}
            index={1}
          />
        )}
        {index === 2 && (
          <ExperienceCard
            key={2}
            index={3}
          />
        )}
        {index === 3 && (
          <ExperienceCard
            key={3}
            index={3}
          />
        )}
      </div>
    </motion.div>
  )
}

export default WorkExperience
