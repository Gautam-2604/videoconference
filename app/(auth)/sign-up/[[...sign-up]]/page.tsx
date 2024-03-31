import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='flex justify-center items-center w-full h-screen bg-dark-1'>
        <SignUp />
    </main>
  )
}

export default SignUpPage