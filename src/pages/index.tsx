import { useEffect } from 'react'
import Navbar from '../components/organisms/common/navbar'
import SiteLogo from '../components/organisms/common/siteLogo'
import Swiper from '../components/organisms/common/swiper'
import ScrollSample from '../components/organisms/sample/scrollSample'
import Spinner from '../components/atoms/animations/spinner'
import { useBooleanState } from '../lib/hooks/common/contexts'

export default function Index() {
  const { value: loaded, changeValue: changeLoaded } = useBooleanState(false)

  useEffect(() => {
    changeLoaded(true)
  }, [])

  const arr = []
  for (let i = 0; i < 100; i++) arr.push(i)

  return (
    <>
      {loaded ? (
        <div className="min-h-screen bg-gray-800">
          <div className="w-full fixed top-0 z-50 text-white">
            <Navbar siteLog={<SiteLogo />} pathHome={'#'} />
          </div>
          <div className="w-screen">
            <Swiper
              imagePaths={[
                '/gatewood.jpg',
                '/moritz-kindler.jpg',
                '/ramon-salinero.jpg',
              ]}
            />
          </div>
          {arr.map((key) => (
            <ScrollSample key={key} />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}
