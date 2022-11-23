import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDoubleUpIcon
} from '@heroicons/react/24/solid'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'

type Props = {
  pageIndex: number
}

const Lighthouse = ({pageIndex}:Props) => {
  const [showText, setShowText]=useState('hidden')
  useEffect(()=>{
    if(pageIndex === 3) {
      setShowText('  ')
    }
  },[])

  return (
    <div className='h-screen flex relative flex-col text-lef  xl:flex-row  max-w-full xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-5 md:top-20  uppercase tracking-[20px] text-gray-800 text-2xl'>
        Skills({pageIndex})
      </h3>
      <h4 className='absolute top-16 md:top-10 text-slate-400 text-center w-full'>
        Performance and Accessibility
      </h4>

      <div className='absolute top-22 md:top-36  grid grid-cols-1 md:grid-cols-[230px,1fr] space-x-10 p-2'>
        {pageIndex === 2 && <div className='relative -top-4  flex flex-col justify-start items-center self-center overflow-hidden'>
          <div className="relative w-[220px] h-20">
          <Image
            src='/lighthouses/light3.png'
            layout='fill'
            objectFit='cover'
            className='rounded-lg object-cover shadow-lg shadow-indigo-500/50'
            alt=''></Image></div>
          <ChevronDoubleUpIcon className='w-6 h-6 text-indigo-600 my-2 shadow-lg shadow-indigo-500/50'></ChevronDoubleUpIcon>
          <div className="relative w-[220px] h-20">
          <Image
            src='/lighthouses/light2.png'
            layout='fill'
            objectFit='cover'
            className='rounded-lg  shadow-lg shadow-indigo-500/50'
            alt=''></Image></div>
          <ChevronDoubleUpIcon className='w-6 h-6 text-indigo-600 my-2 shadow-lg shadow-indigo-500/50'></ChevronDoubleUpIcon>
          <div className="relative w-[220px] h-20 ">
          <Image
            src='/lighthouses/light1.png'
            layout='fill'
            objectFit='cover'
            className='rounded-lg  shadow-lg shadow-indigo-500/50'
            alt=''></Image></div>
        </div>}
        <div className='relative -top-4 px-10 self-center'>
          <ul className={`${showText}  md:flex list-disc text-base md:text-base  md:flex-col space-y-2`}>
            <li>
              Tree Shaking(for Angular, ng build --optimization)
            </li>
            <li>Lazy loading module</li>
            <li>
              Solve the over and under-fetching probloms of RESTful api using
              GraphQL or refactoring existing API
            </li>

            <li>Preload big images. Specify the width and height of images</li>

            <li>Write semantically correct HTML</li>
            <li>Provide sufficient color contrast</li>
            <li>
              Manual testing: navigate website using
              keyboard
            </li>
            <li>Choose 3rd-party components carefully and add accessibility to it as needed </li>
            <li>...</li>

          </ul>
        </div>
      </div>
      <div className='absolute bottom-20 text-slate-800 font-semibold text-2xl'>
        Keep learning, keep evolving!{' '}
      </div>
    </div>
  )
}

export default Lighthouse
