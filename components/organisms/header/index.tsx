import { SocialIcon } from 'react-social-icons'

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <div className="flex flex-row items-center">
          <SocialIcon
            url="https://github.com/lil-shimon/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/lil-shimon/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/lil-shimon/"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>

        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon
            className="cursur-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in Touch
          </p>
        </div>
      </header>
    </>
  )
}
