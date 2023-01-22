import { FC } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

export const Contact: FC = () => {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{' '}
          <span className="decoration[#F7AB0A]/50 underline">Let's Talk</span>
        </h4>

        <div className='space-y-10'>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>000 3812 0181</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>shimon101018@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>Address</p>
          </div>
        </div>

      </div>
    </div>
  )
}
