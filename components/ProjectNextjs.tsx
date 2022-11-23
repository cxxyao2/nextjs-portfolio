import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const ProjectNextjs = () => {
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
          src='/programs/app-nextjs2.png'
          layout='fill'
          objectFit='cover'
          className='absolute rounded-sm'
          alt=''
        />
      </motion.div>

      <div className='space-y-2 px-0 md:px-10  max-w-6xl'>
        <ul className=' flex flex-row flex-wrap gap-x-2 text-xs font-bold  justify-center items-center'>
          <li>Next.js</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Recharts</li>
          <li>Tailwindcss</li>
          <li>Markdown Editor</li>
          <li>Node.js</li>
        </ul>

        <h4 className='text-xl font-semibold  text-center'>
          A CRM system Clone&nbsp;(&nbsp;Case 2/4)
        </h4>

        <ul className='text-base list-disc list-inside text-left'>
          <li>Log in and login out with Nextjs Auth</li>
          <li>Server side render static pages </li>
          <li>Server side generate and revaliate periodly</li>
          <li>Use image optimisation </li>
          <li>Place an order.&nbsp;Calculate profit and commission</li>
          <li>Markdown Display</li>
        </ul>

        <div className='flex flex-row my-4 space-x-4  items-start'>
          <a
            title='Deployed Url'
            href='https://nextjs-minierm-jennifer.vercel.app/'  target='_blank'
            rel='noreferrer'>
            <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
          </a>
          <a
            title='Code hosted'
            href='https://github.com/cxxyao2/nextjs-posts'  target='_blank'
            rel='noreferrer'>
            <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectNextjs
