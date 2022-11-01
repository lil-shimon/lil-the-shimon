import { FC } from 'react'
import { useTypewriter } from 'react-simple-typewriter'

export const Hero = () => {
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
    <div>
      <h1>
        <span>{text}</span>
      </h1>
    </div>
  )
}
