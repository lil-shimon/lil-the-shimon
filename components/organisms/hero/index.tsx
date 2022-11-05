import { FC } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { BackgroundCircles } from '../../atoms/backgroundCircles'

export const Hero: FC = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Lil shimon",
      'Guy-who-loves-Monster.tsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/69175188?v=4"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer{' '}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
        </h1>
      </div>
    </div>
  )
}
