import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  pageIndex: number
}

function About({ pageIndex }: Props) {
  return (
    <div className='h-screen flex relative flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <h3 className=' absolute top-5 md:top-20  uppercase tracking-[24px] text-gray-800 text-2xl'>
        About
      </h3>
      <div className='absolute top-36  pb-2 px-5 mx-auto flex flex-col md:flex-row justify-around items-center gap-5 text-left'>
        {pageIndex < 2 && (
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
          </motion.div>)}

          {pageIndex < 2 && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='block md:hidden relative'>
          <img
            src='avatar/myself.jpg'
            alt=''
            className='rounded-full  md:border-2 md:border-indigo-600/40 w-40 h-40 object-cover md:rounded-md'></img>
        </motion.div>)}

        <div className='text-base w-full max-w-3xl  pb-2 md:p-5 overflow-hidden'>
          {pageIndex < 2 && (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}>
              <div className='font-bold text-lg'>
                Hi,there! My name is{' '}
                <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block'>
                  <span className='relative text-white'>Jennifer Cheng</span>
                </span>
                &nbsp;(Xiaoxia Cheng). I am happy to bring value to my users by
                high performance and accessible web apps.&nbsp;I am also
                enthusiastic to learn new thing and contribute to my teams by my
                knowledge and experiences.
              </div>
              <br />
              <div>
                Nowadays, I am developing applications with Angular, React and
                Next.js. I always have passion for Typescript, Javascript and
                databases.
              </div>
              <br />
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}>
            <div>
              In the past, I have as well worked as ERP/CRP techinical
              consultant, software engineer and project manager.&nbsp;After
              immigrating to Canada, I took a pause in my career to take care of
              my family.
            </div>
            <br />
            <div>
              {' '}
              During that period, I kept learning. I took quality online courses
              to advance frontend and backend knowledge and applied it to my
              volunteer and personal projects.{' '}
            </div>
            <br />
            <div>
              Last year I wend back to career and worked for a Montreal software
              company some time. Now I am open to new opportunities.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
