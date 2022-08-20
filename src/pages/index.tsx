import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Swiper from '../components/organisms/common/swiper'
import ScrollSample from '../components/organisms/sample/scrollSample'
import Spinner from '../components/atoms/animations/spinner'
import { useBooleanState } from '../lib/hooks/common/contexts'
import HomePageNavbar from '../components/organisms/common/homePageNavbar'

export default function Index() {
  const { value: loaded, changeValue: changeLoaded } = useBooleanState(false)
  const { ref, inView } = useInView({ threshold: 0.1 })

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
            <HomePageNavbar isFloat={!inView} />
          </div>
          <div className="w-screen" ref={ref}>
            <Swiper
              imagePaths={[
                '/gatewood.jpg',
                '/moritz-kindler.jpg',
                '/ramon-salinero.jpg',
              ]}
            />
          </div>
          <div>
            {arr.map((key) => (
              <ScrollSample key={key} />
            ))}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}
