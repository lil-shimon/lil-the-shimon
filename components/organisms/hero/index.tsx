import { FC } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { BackgroundCircles } from '../../atoms/backgroundCircles'

export const Hero: FC = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Lil shimon",
      'Guy-who-loves-Monster.tsx',
      '<ButLovesToCodeMode />',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
      </h1>
    </div>
  )
}
