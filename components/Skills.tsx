import React from 'react'

import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

const Skills = () => {
  return (
    <div className='h-screen flex relative flex-col text-lef  xl:flex-row  max-w-7xl xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-5 md:top-20  uppercase tracking-[20px] text-gray-800 text-2xl'>
        Skills(1)
      </h3>

      <div className='absolute top-22 md:top-36  grid grid-cols-2  gap-8'>
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


                <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://github.com/cxxyao2/ng-report'>
           Angular{' '}
                <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
              </li>
              <li>

                <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://github.com/cxxyao2/ngrx-store'>
           NGRX{' '}
                <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
              </li>
              <li>

                <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://github.com/cxxyao2/react-english-notes'>
           React{' '}
                <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
              </li>
              <li>

                <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://github.com/cxxyao2/redux-start'>
          Redux{' '}
                <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
              </li>

              <li>
                <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://github.com/cxxyao2/nextjs-posts'>
            Next.js{' '}
                <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
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
                <a
                  className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                  href='https://github.com/cxxyao2/sketch'>
                  Mysql
                  <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
                </a>
              </li>
              <li>
                <a
                  className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                  href='https://cxxyao2.github.io/mongoose.html'>
                  MongoDB
                  <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
                </a>
              </li>
              <li>
                <a
                  className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                  href='https://cxxyao2.github.io/angular_crud_and_authentication_firebase.html'>
                  Firestore
                  <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
                </a>
              </li>
              <li>Oracle</li>
              <li>
                <a
                  className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                  href='https://github.com/cxxyao2/graphql_mongo1'>
                  GraphQL
                  <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className=' text-xl font-semibold text-center pb-2'>Others</h4>
          <ul
            role='list'
            className='text-center list-none pl-5 space-y-2 text-slate-700 whitespace-pre'>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>
              <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://github.com/cxxyao2/ng-cypress-e2e'>
                Cypress-Angular
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
            </li>
            <li>
              <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://github.com/cxxyao2/react-test-in-typescript'>
                Jest-React
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
            </li>
            <li>
              <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://cxxyao2.github.io/github.html'>
                Github
                <RocketLaunchIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
            </li>
            <li>
              <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://github.com/cxxyao2/webpack4'>
                Webpack
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
            </li>
            <li>
              <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://github.com/cxxyao2/sketch'>
                PHP
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
            </li>
            <li>


              <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://github.com/cxxyao2/DesignPatternDemo'>
            Design Pattern
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>
            </li>
            <li>
            <a
                className='cursor-pointer hover:underline hover:decoration-solid underline-offset-8 decoration-indigo-600'
                href='https://github.com/cxxyao2/algorithm'>
           Algorithm
                <CodeBracketIcon className='inline-block w-6 h-6 text-indigo-600' />
              </a>

            </li>
          </ul>
        </div>
      </div>

      <div className='absolute w-full  bottom-0  bg-indigo-600/10 left-0 h-1/2 -skew-y-12'></div>
    </div>
  )
}

export default Skills
