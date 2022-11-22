import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import Image from 'next/image'
import Link from 'next/link'

import SvgLinkedin from './SvgLinked'
import SvgGithub from './SvgGithub'
import SvgTwitter from './SvgTwitter'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['Hi, I am Jennifer Cheng.', 'A Passionate Developer.'],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <div className='relative h-[200px] w-4/5  overflow-hidden'>
        <img
          src='heros/keyboard.svg'
          className=' absolute left-1/2 -translate-x-1/2 top-0   h-full filter-gray z-10 select-none'
        />
        <img
          src='heros/women.svg'
          className='absolute left-1/2 -translate-x-1/2 top-0    text-blue-500  h-full filter-gray z-20 select-none'
        />
        <div className='absolute top-1/2 -translate-y-1/2  w-full bg-indigo-500 text-white h-[90px] md:h-[48px] z-30'>
          <h1 className='text-3xl lg:text-4xl font-semibold scroll-px-10'>
            <span>{text}</span>
            <Cursor cursorColor='#f7ab0a' />
          </h1>
        </div>
      </div>

      <>
        <h2 className='text-sm uppercase  text-gray-600 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>

        <div className='flex justify-center items-center space-x-8'>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/
            cheng-jennifer-xiaoxia'
            title='linkedin account'>
            <SvgLinkedin
              className='w-8 h-8'
              fill='#6366F1'
            />
          </a>
          <a
            target='_blank'
            href='https://www.github.com/cxxyao2'
            title='github account'>
            <SvgGithub
              className='w-10 h-10 '
              fill='#6366F1'
            />
          </a>
          <a
            target='_blank'
            href='https://twitter.com/Jennife82590867'
            title='twitter account'>
            <SvgTwitter
              className='w-8 h-8 '
              fill='#6366F1'
            />
          </a>
        </div>
      </>
    </div>
  )
}

export default Hero
