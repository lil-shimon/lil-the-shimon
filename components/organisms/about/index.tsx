import { FC } from 'react'
import { motion } from 'framer-motion'
import { LA_IMAGE } from '../../../utils/images'

export const About: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-wd-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200 }}
        transition={{ duration: 2.0, opacity: 0 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        src={LA_IMAGE}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <motion.div
        initial={{ x: 200 }}
        transition={{ duration: 2.0, opacity: 0 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F8AB0A]">little</span>{' '}
          background
        </h4>
        <p className="text-sm">
          I am Lil shimon. dummy contents here. I am Lil shimon. dummy contents
          here. I am Lil shimon. dummy contents here. I am Lil shimon. dummy
          contents here. I am Lil shimon. dummy contents here. I am Lil shimon.
          dummy contents here. I am Lil shimon. dummy contents here. I am Lil
          shimon. dummy contents here. I am Lil shimon. dummy contents here. I
          am Lil shimon. dummy contents here. I am Lil shimon. dummy contents
          here. I am Lil shimon. dummy contents here. I am Lil shimon. dummy
          contents here. I am Lil shimon. dummy contents here. I am Lil shimon.
          dummy contents here.
        </p>
      </motion.div>
    </motion.div>
  )
}
