import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <div className='h-screen flex relative flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <h3 className=' absolute top-5 md:top-20  uppercase tracking-[24px] text-gray-800 text-2xl'>
        About
      </h3>
      <div className='absolute top-22  md:top-36  p-2 mx-auto flex flex-col md:flex-row justify-around items-center gap-5 text-left'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='hidden md:block relative after:absolute after:content-[""] after:inset-0 after:border-2   after:border-indigo-200
          after:rounded-md after:translate-x-[15px] after:translate-y-[-15px] after:z-[-2]
          '>
          <img
            src='avatar/myself.jpg'
            alt=''
            className='rounded-full  md:border-2 md:border-indigo-600/40 w-40 h-40 object-cover md:rounded-md'></img>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='block md:hidden relative'>
          <img
            src='avatar/myself.jpg'
            alt=''
            className='rounded-full  md:border-2 md:border-indigo-600/40 w-40 h-40 object-cover md:rounded-md'></img>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}>
          <div className='text-base w-full max-w-md  pb-2 md:p-5'>
            <div className='font-bold'>
              Hi,there! My name is{' '}
              <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block'>
                <span className='relative text-white'>Jennifer Cheng</span>
              </span>
              &nbsp;(Xiaoxia Cheng). I am happy to bring value to my users by
              high performance and accessibility software products and
              contribute to my teams by my abilites and experiences.
            </div>
            <br />
            <div>
              Nowadays, I am developing web apps with Angular, React and
              Next.js. I always have passion for Typescript, Javascript and
              databases.
            </div>
            <br />
            In the past, I have also worked as ERP/CRP techinical consultant,
            software engineer and project manager.
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
