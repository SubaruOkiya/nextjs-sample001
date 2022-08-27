import Swiper from '../../molecules/common/swiper'
import SlideWelcome from '../swiperSlides/welcome'
import SlideWelcome2 from '../swiperSlides/welcome2'
import SlideWelcome3 from '../swiperSlides/welcome3'

type PropsIndexPageSwiper = {
  auto: boolean
}

export default function IndexPageSwiper(props: PropsIndexPageSwiper) {
  return (
    <Swiper
      auto={props.auto}
      slides={[
        <SlideWelcome key={0} />,
        <SlideWelcome2 key={1} />,
        <SlideWelcome3 key={2} />,
      ]}
    />
  )
}
