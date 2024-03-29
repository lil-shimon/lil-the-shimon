import { FC } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../../utils/images'

interface Props {
  directionLeft?: boolean
}

export const Skill: FC<Props> = ({ directionLeft }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={images.react}
        className="rounded-full border border-gray-50- object-cover w-24 h-24 xl:w-32 x:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  )
}
