import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const ProjectReact = () => {
  return (
    <div
      className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 md:space-y-15 items-center pt-32
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
         <a
          className='absolute bottom-0 left-0'
            title='Deployed Url'
            href='https://react-english-notes.vercel.app/'
            target='_blank'
            rel='noreferrer'>
            <RocketLaunchIcon className='inline-block w-8 h-8 text-indigo-600 border-2 rounded-full border-yellow-600 shadow-lg shadow-yellow-600/50 animate-bounce' />
          </a>
          <a
            className='absolute bottom-0 right-0'
            title='Code hosted'
            href='https://github.com/cxxyao2/react-english-notes'
            target='_blank'
            rel='noreferrer'>
            <CodeBracketIcon className='inline-block w-8 h-8 text
            -indigo-600 border-2 rounded-full border-yellow-600 shadow-lg shadow-yellow-600/50 animate-bounce' />
          </a>
      </motion.div>

      <div className='space-y-2 px-0 md:px-10  max-w-6xl'>
        <ul className=' flex flex-row flex-wrap gap-x-2 text-xs font-bold justify-center items-center'>
          <li>React</li>
          <li>Firestore</li>
          <li>Bootstrap</li>
          <li>Markdown Editor</li>
        </ul>

        <h4 className='text-xl font-semibold  text-center'>
          (3/4)&nbsp;Vocabulary helper
        </h4>

        <ul className='text-base list-disc list-inside text-left'>
          <li>Log in and log out authentication with Firestore</li>
          <li>lazy loading module to improve performance </li>
          <li>Edit, sanitize and save markdown content</li>
          <li>Add accessiblity to third-party component </li>
          <li>Recommand english words automatically</li>
        </ul>


      </div>
    </div>
  )
}

export default ProjectReact
