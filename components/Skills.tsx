import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import { GlobeAltIcon, UserIcon } from '@heroicons/react/24/solid'

const skillSource = [
  'skills/angular-big.svg',
  'skills/reactjs-big.svg',
  'skills/nextjs-big.svg',
  'skills/cypress-big.svg',
  'skills/getbootstrap-big.svg',
  'skills/graphql-big.svg',
  'skills/javascript-big.svg',
  'skills/typescriptlang-big.svg',
  'skills/webpack-big.svg',
  'skills/mongodb-big.svg',
  'skills/mysql-big.svg',
  'skills/oracle-big.svg'
]

const Skills = () => {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row  max-w-7xl xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {skillSource.map((source) => (
          <Skill source={source} />
        ))}
      </div>
</div>
  )
}

export default Skills
