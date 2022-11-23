import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const ProjectReact = () => {
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
          src='/programs/app-react.png'
          layout='fill'
          objectFit='cover'
          className='absolute rounded-sm'
          alt=''
        />
      </motion.div>

      <div className='space-y-2 px-0 md:px-10  max-w-6xl'>
        <ul className=' flex flex-row flex-wrap gap-x-2 text-xs font-bold'>
          <li>React</li>
          <li>Firestore</li>
          <li>Bootstrap</li>
          <li>Markdown Editor</li>
        </ul>

        <h4 className='text-xl font-semibold  text-center'>
          Vocabulary helper&nbsp;(&nbsp;Case 3/4)
        </h4>

        <ul className='text-base list-disc list-inside text-left'>
          <li>Log in and log out authentication with Firestore</li>
          <li>lazy loading module to improve performance </li>
          <li>Edit, sanitize and save markdown content</li>
          <li>Add accessiblity to third-party component </li>
          <li>Recommand english words automatically</li>
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

export default ProjectReact
