import HomePageNavbar from '../components/organisms/common/homePageNavbar'
import { loadImageContext } from '../lib/hooks/customs/index/loadImages'
import Loading from '../components/molecules/common/loading'
import ContactForm from '../components/organisms/common/contactForm'
import IndexPageSwiper from '../components/organisms/index/swiper'
import IndexPageInformation from '../components/organisms/index/information'
import useIndexLoading from '../lib/hooks/customs/index/loading'

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
        <div className="min-h-screen">
          <div className="m-24">
            <IndexPageInformation />
          </div>
        </div>
      </div>
      <ContactForm isDisplay={!inView} />
    </loadImageContext.Provider>
  )
}
