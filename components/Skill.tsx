import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  source:string
  directionLeft?: boolean
}

function Skill({source,directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <img
       
        src={source}
        className='rounded-lg border border-gray-500 object-cover w-24 h-16 xl:w-32 xl:h-32
      filter group-hover:grayscale transition duration-300 easy-in-out
      '
      />
    </div>
  )
}

export default Skill
