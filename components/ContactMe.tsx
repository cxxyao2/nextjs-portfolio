import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from 'react-hook-form'
import SvgGithub from './SvgGithub'
import SvgTwitter from './SvgTwitter'
import SvgLinkedin from './SvgLinked'

type Props = {}
type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:jennifer@hotmail.com?subject=${formData.subject}&body=${formData.message}`
    console.log(formData)
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px]  text-gray-600 text-2xl'>
        Contact
      </h3>

      <div className='absolute top-36 flex flex-col space-y-10 '>
        <h4 className='text-2xl font-semibold text-center'>

          <span className='decoration-[#F7AB0A]/50 underline'>Get In Touch</span>
        </h4>

        <div>
          <div className='flex items-center space-x-5 justify-center '>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+13817762781</p>
          </div>

          <div className='flex items-center space-x-5 justify-center '>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <a
              href='mailto:jenniferyao1996@hotmail.com'
              className='focus:underline focus:underline-offset-4  focus:decoration-indigo-600'>
              {' '}
              <p className='text-2xl '>Jenniferyao1996@hotmail.com</p>
            </a>
          </div>
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
      </div>
    </div>
  )
}

export default ContactMe
