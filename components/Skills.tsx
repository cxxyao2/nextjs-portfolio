import { motion } from 'framer-motion'
import React from 'react'

import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

const Skills = () => {
  return (
    <div className='h-screen flex relative flex-col text-lef  xl:flex-row  max-w-7xl xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-800 text-2xl'>
        Skills
      </h3>

      <div className='absolute top-36 grid grid-cols-2  gap-8'>
        <div>
          <div>
            <h4 className=' text-xl font-semibold text-center pb-2'>
              {' '}
              Frameworks
            </h4>
            <ul
              role='list'
              className='text-center list-none pl-5 space-y-2 text-slate-700'>
              <li>
                Angular{' '}
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </li>
              <li>
                NGRX{' '}
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </li>
              <li>
                React{' '}
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </li>
              <li>
                Redux{' '}
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </li>

              <li>
                Next.js{' '}
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />{' '}
              </li>
            </ul>
          </div>
          <div>
            <h4 className=' text-xl font-semibold text-center p-4'>
              {' '}
              Database
            </h4>
            <ul
              role='list'
              className='text-center list-none pl-5 space-y-2 text-slate-700'>
              <li>
                Mysql{' '}
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </li>
              <li>
                MongoDB{' '}
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />{' '}
              </li>
              <li>
                Firestore{' '}
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />{' '}
              </li>
              <li>Oracle</li>
              <li>
                GraphQL{' '}
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className=' text-xl font-semibold text-center pb-2'>Others</h4>
          <ul
            role='list'
            className='text-center list-none pl-5 space-y-2 text-slate-700'>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>
              <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-4'
                href='https://www.google.com'>
                Cypress{' '}
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
            </li>
            <li>
              Github{' '}
              <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
            </li>
            <li>
              Webpack{' '}
              <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
            </li>
            <li>
              PHP{' '}
              <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
            </li>
            <li>
              Design Pattern{' '}
              <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
            </li>
            <li>
              Algorithm{' '}
              <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
            </li>
          </ul>
        </div>
      </div>

      <div className='absolute w-full  bottom-0  bg-indigo-600/10 left-0 h-1/2 -skew-y-12'></div>
    </div>
  )
}

export default Skills
