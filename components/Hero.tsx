import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hi, I am Jennifer Cheng,',
      'Who-loves-Coffee.tsx',
      '<ButLovesToCodeMore />'
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='relative h-[200px] w-[200px]  overflow-hidden'>
        <Image
          className='relative rounded-full mx-auto h-32 w-32'
          src='/avatar/duck.jpg'
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button
              className='heroButton'
             >
              Skills
            </button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
