import { FC } from 'react'
import { images } from '../../../utils/images'
import { motion } from 'framer-motion'

export const ExperienceCard: FC = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={images.questar}
        alt="company_img"
      />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ x: 100, opacity: 1 }}
        viewport={{ once: true }}
        className="px-0 md:px-10"
      >
        <h4 className="text-4xl font-light">Project Manager</h4>
        <p className="font-bold text-2xl mt-1">Questar INC</p>
        <div className="flex space-x-2 my-2">
          <img
            src={images.react}
            alt="tech-icon"
            className="rounded-full w-12 object-cover object-center"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Oct 1 2020 - PRESENT</p>
        <ul className="list-disc space-y-4 text-lg ml-5">
          <li>summary points test content here. this is looking great</li>
          <li>summary points test content here. this is looking great</li>
          <li>summary points test content here. this is looking great</li>
          <li>summary points test content here. this is looking great</li>
          <li>summary points test content here. this is looking great</li>
        </ul>
      </motion.div>
    </article>
  )
}
