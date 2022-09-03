import HomePageNavbar from '../components/organisms/common/homePageNavbar'
import { loadImageContext } from '../lib/hooks/customs/index/loadImages'
import Loading from '../components/molecules/common/loading'
import ContactForm from '../components/organisms/common/contactForm'
import IndexPageSwiper from '../components/organisms/index/swiper'
import IndexPageInformation from '../components/organisms/index/information'
import useIndexLoading from '../lib/hooks/customs/index/loading'
import BounceAnimation from '../components/atoms/animations/bounce'
import CircleDiv from '../components/atoms/divs/circleDiv'
import { H1 } from '../components/atoms/tags/h'
import AppearAnimation from '../components/atoms/animations/appear'
import DnD from '../components/organisms/sample/dnd'

export default function Index() {
  const { ref, inView, loaded, loadingRate, dispatch } = useIndexLoading()

  return (
    <loadImageContext.Provider value={{ dispatch }}>
      <Loading loading={!loaded} loadingRate={Math.floor(loadingRate * 100)} />
      <div className="min-h-screen bg-base-100">
        <div className="w-full fixed top-0 z-40 text-white">
          <HomePageNavbar isFloat={!inView} />
        </div>
        <div className="w-full" ref={ref}>
          <IndexPageSwiper auto={loaded} />
        </div>
        <div className="my-10">
          <div className="m-24">
            <IndexPageInformation />
          </div>
        </div>
        <div className="my-10 py-10 bg-gradient-to-b from-indigo-300 via-white to-indigo-300">
          <AppearAnimation>
            <div className="w-full mx-auto">
              <div className="my-10">
                <H1>
                  <div className="w-full text-center">
                    <span className="text-blue-500">実績</span>
                  </div>
                </H1>
              </div>
              <div className="flex justify-around">
                <BounceAnimation>
                  <CircleDiv>
                    <div className="h-24 w-24 flex flex-col justify-center">
                      <p className="text-center text-xl">見える化</p>
                    </div>
                  </CircleDiv>
                </BounceAnimation>
                <BounceAnimation>
                  <CircleDiv>
                    <div className="h-24 w-24 flex flex-col justify-center">
                      <p className="text-center text-xl">クラウド</p>
                    </div>
                  </CircleDiv>
                </BounceAnimation>
                <BounceAnimation>
                  <CircleDiv>
                    <div className="h-24 w-24 flex flex-col justify-center">
                      <p className="text-center text-xl">アプリ</p>
                    </div>
                  </CircleDiv>
                </BounceAnimation>
              </div>
              <div className="flex justify-evenly">
                <BounceAnimation>
                  <CircleDiv>
                    <div className="h-24 w-24 flex flex-col justify-center">
                      <p className="text-center text-xl">スケジューラ</p>
                    </div>
                  </CircleDiv>
                </BounceAnimation>
                <BounceAnimation>
                  <CircleDiv>
                    <div className="h-24 w-24 flex flex-col justify-center">
                      <p className="text-center text-xl">RTM</p>
                    </div>
                  </CircleDiv>
                </BounceAnimation>
              </div>
            </div>
          </AppearAnimation>
        </div>
        <div>
          <DnD />
        </div>
      </div>
      <ContactForm isDisplay={!inView} />
    </loadImageContext.Provider>
  )
}
