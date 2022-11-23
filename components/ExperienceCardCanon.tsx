import { motion } from 'framer-motion'
import React from 'react'

type Props = {index:number}

function ExperienceCardCanon({index}: Props) {
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
         Software engineer & Project Manager
        </p>
        <div className='flex space-x-2 my-1'>
          <img
            className='h-8 w-8 rounded-full'
            src='skills/java.svg'
          />
           <img
            className='h-8 w-8 rounded-full'
            src='skills/javascript-small.svg'
          />
          <img
            className='h-8 w-8 rounded-full'
            src='skills/oracle-small.svg'
          />
          <img
            className='h-8 w-8 rounded-full'
            src='skills/dotnet-small.svg'
          />
  <img
            className='h-8 w-8 rounded-full filter-blue'
            src='skills/project.svg'

          />
        </div>
        <p className='uppercase py-3 text-gray-800'>Oct.2001 - Sep.2014</p>

        <ul
          role='list'
          className='marker:text-indigo-400 list-disc pl-5 space-y-3 text-slate-800'>
          <li> Deliver high quality custom softwares with .net, Java, Oracle, SqlServer etc</li>
          <li> Design and write Unit tests, integrated tests and system tests</li>
          <li> Contribute document control and quality assurance </li>
          <li> Implement softwares in factories and offer on-going support </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default ExperienceCardCanon
