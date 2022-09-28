import React, { useState } from 'react'
import { signIn, SignInResponse } from 'next-auth/react'
import { useRouter } from 'next/router'
import { BACKEND_URL } from '../../data/constants'
import Link from 'next/link'
import { useNotificationContext } from '../../context/notification-context'
import Notification from '../../components/notification'
import { validateEmail, validateLengthRange } from '../../utils'

const SignInForm = () => {
  const [hidePassword, setHidePassword] = useState(true)
  const router = useRouter()
  const { showNotification, notification } = useNotificationContext()

  const validateForm = (data: FormData) => {
    const email = data.get('email')?.toString()
    const password = data.get('password')?.toString()
    const minlength = 8
    const maxlength = 200
    if (!email || !validateEmail(email)) {
      showNotification({
        id: 'Email',
        message: 'You have entered an invalid email address!',
        status: 'error'
      })
      return false
    }

    if (!password || !validateLengthRange(password, minlength, maxlength)) {
      showNotification({
        id: 'Email',
        message:
          'Please input between ' +
          minlength +
          ' and ' +
          maxlength +
          ' characters',
        status: 'error'
      })

      return false
    }
    return true
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData: FormData = new FormData(event.currentTarget)
    if (!validateForm(formData)) {
      return
    }
    let callbackUrl = '/'
    if (router.query && router.query.from) {
      callbackUrl = router.query.from as unknown as string
      console.log('call back is', callbackUrl)
    }

    signIn('credentials', {
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
      redirect: false
    }).then((result) => {
      if (result?.ok) {
        router.push(callbackUrl) //
      } else {
        console.log(result?.error)
        showNotification({
          id: '',
          message: `${result?.status.toString()} Error:  ${result?.error}`,
          status: 'error'
        })
      }
    })
  }

  return (
    <section className='relative m-auto  max-w-md rounded-md bg-white  shadow-gray-200 shadow-xl p-4'>
      {notification && <Notification {...notification} />}
      <h1 className='text-center text-2xl mb-6'>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col space-y-4 justify-center items-begin'>
          <label
            htmlFor='email'
            className='font-semibold'>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='abc@email.com'
            className='invalid:border-red-500  hover:outline hover:outline-offset-2 hover:outline-indigo-500 focus:outline focus:outline-offset-2 focus:outline-indigo-500 bg-gray-100 text-gray-800 rounded-md w-full p-1'
            required
          />

          <label className='font-semibold'>Password</label>
          <div className='relative bg-gray-100 hover:outline hover:outline-offset-2 hover:outline-indigo-500 focus:outline focus:outline-offset-2 focus:outline-indigo-500 rounded-md w-full'>
            <input
              id='password'
              name='password'
              type={hidePassword ? 'password' : 'text'}
              autoCapitalize='off'
              autoComplete='off'
              autoCorrect='off'
              minLength={8}
              maxLength={100}
              required
              className='invalid:border-red-500 p-1 min-w-[200px] bg-gray-100 outline-none rounded-tl-md rounded-bl-md'
            />
            <button
              className='absolute  right-1 top-1 p-1 pb-0 rounded-md text-sm text-right outline-none bg-white'
              onClick={() => setHidePassword((prevState) => !prevState)}>
              {hidePassword ? 'Show' : 'Hide'}{' '}
            </button>
          </div>

          <button
            type='submit'
            className='cursor-pointer px-2 py-1 rounded-md text-white bg-indigo-600 outline-none focus:outline  focus:outline-indigo-200 '>
            Sign In
          </button>
          <p className='text-sm'>
            Dont't have an account?
            <Link href='/auth/signup'>
              <a className='ml-2  text-indigo-400'>SIGN UP</a>
            </Link>
          </p>
          <p className='text-sm'>
            Forget your password?
            <Link href='/auth/forget-password'>
              <a className='ml-2  text-indigo-400'>RESET PASSWORD</a>
            </Link>
          </p>
        </div>
      </form>
    </section>
  )
}

export default SignInForm
