import { ArrowUpIcon } from '@heroicons/react/24/solid'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import Lighthouse from '../components/Lighthouse'

const Home: NextPage = () => {
  return (
    <div
      className=' text-gray-800 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title> Jennifer Cheng&apos;s Portfolio</title>
      </Head>

      <section
        id='hero'
        className='snap-start'>
        <Hero />
      </section>

      <section
        id='about'
        className='snap-center'>
        <About pageIndex={1} />
      </section>

      <section
        id='about'
        className='snap-center md:hidden'>
        <About pageIndex={2} />
      </section>

      <section
        id='experience'
        className='snap-center'>
        <WorkExperience />
      </section>

      <section
        id='skills'
        className='snap-center'>
        <Skills />
      </section>

      <section
        id='skillsAdded'
        className='snap-center'>
        <Lighthouse pageIndex={2} />
      </section>

      <section
        id='skillsAdded'
        className='block md:hidden snap-center'>
        <Lighthouse pageIndex={3} />
      </section>

      <section
        id='projects'
        className='snap-start'>
        <Projects />
      </section>

      <section
        id='contact'
        className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}

export default Home

export const getStaticProps = async ({ locale = 'en' }) => {
  const posts = ['1', '2']
  return {
    props: {
      posts
    }
  }
}
