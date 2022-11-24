import { motion } from 'framer-motion'
import React from 'react'

type Props = {index:number}

function ExperienceCardAdnm({index}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className='flex flex-col rounded-lg  items-center space-y-2 flex-shrink-0'>
      <div className='px-2 md:px-8 '>
        <p className='font-bold text-xl mt-1'>
         Frontend Developer
        </p>
        <div className='flex space-x-2 my-1'>
          <img
            className='h-8 w-8 rounded-full'
            src='skills/angular-small.svg' alt=""
          />
          <img alt=""
            className='h-8 w-8 rounded-full'
            src='skills/getbootstrap-small.svg'
          />
          <img alt=""
            className='h-8 w-8 rounded-full'
            src='skills/typescriptlang-small.svg'
          />
          <img alt=""
            className='h-8 w-8 rounded-full border-2 border-teal-700'
            src='skills/swagger_logo.svg'
          />
          <img alt=""
            className='h-8 w-8 rounded-full border-2 border-gray-500'
            src='skills/ngxs.svg'
          />
          <img alt=""
            className='h-8 w-8 rounded-full border-2 border-gray-500'
            src='skills/cypress-small.svg'
          />
        </div>
        <p className='uppercase py-3 text-gray-800'>Nov.2021 - July.2022</p>
        <ul
          role='list'
          className='marker:text-indigo-400 list-disc pl-5 space-y-3 text-slate-800'>
          <li> Help release the new version on time. Add state management(NGXS) to 20% components(Total: 150+)</li>
          <li> Troubleshoot errors maily related to asynchronous processing and responsive UI </li>
          <li> Optimize performance cooperating with backend developers </li>
          <li> Contribute to system test and documentation  </li>
          <li> Develop new features designed by global teams </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default ExperienceCardAdnm
