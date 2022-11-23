import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import ProjectAngular from './ProjectAngular'
import ProjectNextjs from './ProjectNextjs'
import ProjectReact from './ProjectReact'
import ProjectPHP from './ProjectPHP'

type Props = {}
// https://ng-report.vercel.app/home
// TODO

function Projects({}: Props) {
  const projects = [ProjectAngular, ProjectNextjs, ProjectReact, ProjectPHP]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='h-screen relative  flex flex-col overflow-hidden  max-w-full justify-evenly items-center mx-auto  z-0'>
      <h3 className='absolute top-5 md:top-20  uppercase tracking-[20px] text-gray-600 text-2xl  text-center'>
        Projects
      </h3>
      <div
        className='relative w-full flex overflow-x-scroll overflow-y-hidden
      snap-x snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((Project, index) => (
          <Project key={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Projects
