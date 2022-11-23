import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDoubleUpIcon
} from '@heroicons/react/24/solid'
import React from 'react'

const Lighthouse = () => {
  return (
    <div className='h-screen flex relative flex-col text-lef  xl:flex-row  max-w-full xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-800 text-2xl'>
        Skills(2)
      </h3>
      <h4 className='absolute top-10 text-slate-400 text-center w-full'>
        Performance and Accessibility
      </h4>

      <div className='absolute top-36 grid grid-cols-2 gap-6 p-2'>
        <div className='relative -top-4 flex flex-col justify-start items-center'>
          <img
            src='lighthouses/light3.png'
            className='w-25 h-20 rounded-lg object-cover border-indigo-600 border-2'
            alt=''></img>
          <ChevronDoubleUpIcon className='w-6 h-6 text-indigo-600 my-2'></ChevronDoubleUpIcon>
          <img
            src='lighthouses/light2.png'
            className='w-25 h-20 rounded-lg object-cover border-indigo-400 border-2'
            alt=''></img>
          <ChevronDoubleUpIcon className='w-6 h-6 text-indigo-600 my-2'></ChevronDoubleUpIcon>
          <img
            src='lighthouses/light1.png'
            className='w-25 h-20 rounded-lg object-cover border-indigo-200 border-2'
            alt=''></img>
        </div>
        <div className='relative -top-4'>
          <ul className='h-full list-disc text-xs md:text-base flex flex-col justify-evenly'>
            <li>
              Tree Shaking(for Angular, ng build --optimization)
            </li>
            <li>Lazy loading module</li>
            <li>
              Solve the over and under-fetching probloms of RESTful api using
              GraphQL or refactoring existing API
            </li>

            <li> Preload big images. Specify the width and height of images</li>

            <li>Write semantically correct HTML</li>
            <li>Provide sufficient color contrast</li>
            <li>
              Manual testing: navigate website using
              keyboard
            </li>


          </ul>
        </div>
      </div>
      <div className='relative -bottom-6 text-slate-800 font-semibold text-2xl'>
        Keep learning, keep evolving!{' '}
      </div>
    </div>
  )
}

export default Lighthouse
