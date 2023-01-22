import { FC } from 'react'
import { images } from '../../../utils/images'
import { motion } from 'framer-motion'

export const Projects: FC = () => {
  const projects = [1, 2, 3, 4, 5]
  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly items-center z-0">
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        Projects
      </h3>
      <div>
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
          {projects.map((project) => (
            <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={images.react}
                alt="project-img"
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F8AB0A]/50">
                    Case study {project} of {projects.length}:{' '}
                  </span>
                  Netflix Clone
                </h4>
                <p className="text-lg text-center md:text-left">
                  Project summary dummy text. This is dummy text Project summary
                  dummy text. This is dummy text Project summary dummy text.
                  This is dummy text Project summary dummy text. This is dummy
                  text Project summary dummy text. This is dummy text Project
                  summary dummy text. This is dummy text Project summary dummy
                  text. This is dummy text
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
      <div className="w-full absolute top-[35%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  )
}
