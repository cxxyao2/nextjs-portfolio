import { motion } from 'framer-motion'
import React from 'react'

type Props = { index: number }

function ExperienceCardYon({ index }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className='flex flex-col rounded-lg  items-center space-y-2 flex-shrink-0'>
      <div className='px-2 md:px-8 '>
        <p className='font-bold text-xl mt-1'>Technical Consultant</p>
        <div className='flex space-x-2 my-1'>
          <img
            alt=''
            className='h-8 w-8 rounded-full'
            src='skills/java.svg'
          />
          <img
            alt=''
            className='h-8 w-8 rounded-full'
            src='skills/oracle-small.svg'
          />
          <img
            alt=''
            className='h-8 w-8 rounded-full'
            src='skills/googlemaps-small.svg'
          />
          <img
            alt=''
            className='h-8 w-8 rounded-full filter-blue'
            src='skills/project.svg'
          />
        </div>
        <p className='uppercase py-3 text-gray-800'>Oct.2014 - July.2018</p>

        <ul
          role='list'
          className='marker:text-indigo-400 list-disc pl-5 space-y-3 text-slate-800'>
          <li>
            {' '}
            Participate in creating and executing ERP system implementation
            plans
          </li>
          <li>
            {' '}
            Train users and new employees in best practice to utilize ERP to its
            fullest capacity{' '}
          </li>
          <li>
            {' '}
            Help accountants well adapt to financial policy changes by
            configuring reports on BI platform
          </li>
          <li>
            Help salespersons increase lead, accelerate orders, manage accounts
            receivable and commission{' '}
          </li>
          <li>
            {' '}
            Responsible for ongoing support, including performance and new
            features{' '}
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default ExperienceCardYon
