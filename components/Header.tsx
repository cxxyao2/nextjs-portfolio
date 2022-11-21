import React from 'react'
import { GlobeAltIcon as SocialIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0  p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center'>
        {/* Social */}
        <SocialIcon />
        <SocialIcon />
        <SocialIcon />
      </motion.div>

      <Link href='#contact'>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{ duration: 1.5 }}
          className='flex flex-row items-center text-gray-300 cursor-pointer'>
          <SocialIcon className='cursor-pointer' />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  )
}
