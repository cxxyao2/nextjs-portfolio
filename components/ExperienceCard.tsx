import { motion } from 'framer-motion'
import React from 'react'

type Props = {index:number}

function ExperienceCard({index}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className='flex flex-col rounded-lg  items-center space-y-2 flex-shrink-0'>
      <div className='px-0 md:px-8 '>
        <p className='font-bold text-xl mt-1'>
         {index}&nbsp; Frontend Developer
        </p>
        <div className='flex space-x-2 my-1'>
          <img
            className='h-8 w-8 rounded-full'
            src='skills/angular-small.svg'
          />
          <img
            className='h-8 w-8 rounded-full'
            src='skills/getbootstrap-small.svg'
          />
          <img
            className='h-8 w-8 rounded-full'
            src='skills/typescriptlang-small.svg'
          />
          <img
            className='h-8 w-8 rounded-full border-2 border-teal-700'
            src='skills/swagger_logo.svg'
          />
          <img
            className='h-8 w-8 rounded-full border-2 border-gray-500'
            src='skills/ngxs.svg'
          />
          <img
            className='h-8 w-8 rounded-full border-2 border-gray-500'
            src='skills/cypress-small.svg'
          />
        </div>
        <p className='uppercase py-5 text-gray-800'>Nov.2021 - July.2022</p>
        <ul
          role='list'
          className='marker:text-indigo-400 list-disc pl-5 space-y-3 text-slate-500'>
          <li>1 Add state manage with ngXS, </li>
          <li>2 TroubleShoot </li>
          <li>3 Develop new features such as </li>
          <li>4 Develop new features such as </li>
          <li>5 Develop new features such as </li>
          <li>6 Develop new features such as </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default ExperienceCard
