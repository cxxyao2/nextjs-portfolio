import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const ProjectPHP = () => {
  return (
    <div
      className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 md:space-y-15 items-center pt-36
     px-5 h-screen '>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        className='relative  w-4/5 max-w-sm h-[160px] shadow-lg rounded-md border border-gray-400'>
        <Image
          src='/programs/app-sosadfun.png'
          layout='fill'
          objectFit='cover'
          className='absolute rounded-sm'
          alt=''
        />
      </motion.div>

      <div className='space-y-2 px-0 md:px-10  max-w-6xl'>
        <ul className=' flex flex-row flex-wrap gap-x-2 text-xs font-bold'>
          <li>Lavarel&nbsp;(PHP)</li>
          <li>Mysql</li>
          <li>React</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>Storybook</li>
        </ul>

        <h4 className='text-xl font-semibold  text-center'>
          A article repository &nbsp;(&nbsp;Case 4/4)
        </h4>

        <ul className='text-base list-disc list-inside text-left'>
          <li>*** Code part of backend and frontend ***</li>
          <li>Backend using PHP.&nbsp;Front using React</li>
          <li>Log in and log out authentication with email</li>
          <li>User can create works and post comments </li>
        </ul>

        <div className='flex flex-row my-4 space-x-4  items-start'>
          <button aria-label='Deployed Url'>
            <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
          </button>
          <button aria-label='Code hosted'>
            <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectPHP
