import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import ExperienceCardAdnm from './ExperienceCardAdnm'
import ExperienceCardCanon from './ExperienceCardCanon'
import ExperienceCardYon from './ExperienceCardYon'

// TODO
type Props = {}

function WorkExperience({}: Props) {
  const [index, setIndex] = useState(1)
  useEffect(() => {
    buttonRef.current?.focus()
  }, [])

  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-5 md:top-20  uppercase tracking-[15px] text-gray-800 text-2xl text-center'>
        Work Experience
      </h3>
      <div className='absolute top-26 md:top-36  grid  grid-cols-1 md:grid-cols-[150px_1fr] gap-4 max-w-5xl'>
        <div className=' flex flex-row gap-x-1 pt-8  md:flex-col justify-evenly items-center'>
          <button
            ref={buttonRef}
            className={`pl-2 border-l-2 outline-none focus:border-indigo-600  ${
              index === 1
                ? '  outline-2 outline-indigo-600 rounded-lg'
                : 'border-gray-200'
            }`}
            onClick={() => setIndex(() => 1)}
            aria-label='adnm inc.'>
            <img
              alt=''
              src='works/ADNM.webp'
              className='w-20 h-12 rounded-lg'
            />
          </button>
          <button
            className={`pl-2 border-l-2 outline-none  focus:border-indigo-600 ${
              index === 2
                ? '  outline-2 outline-indigo-600 rounded-lg'
                : 'border-gray-200'
            }`}
            onClick={() => setIndex(() => 2)}
            aria-label='youyou inc.'>
            <img
              alt=''
              src='works/yy.jpg'
              className='w-20 h-12 rounded-lg px-2 py-3'
            />
          </button>
          <button
            className={`pl-2 border-l-2 outline-none focus:border-indigo-600 ${
              index === 3
                ? '  outline-2 outline-indigo-600 rounded-lg'
                : 'border-gray-200'
            }`}
            onClick={() => setIndex(() => 3)}
            aria-label='cits inc.'>
            <img
              alt=''
              src='works/CITS.jpg'
              className='w-20 h-12 rounded-lg'
            />
          </button>
        </div>
        {index === 1 && (
          <ExperienceCardAdnm
            key={1}
            index={1}
          />
        )}
        {index === 2 && (
          <ExperienceCardYon
            key={2}
            index={2}
          />
        )}
        {index === 3 && (
          <ExperienceCardCanon
            key={3}
            index={3}
          />
        )}
      </div>
    </motion.div>
  )
}

export default WorkExperience
