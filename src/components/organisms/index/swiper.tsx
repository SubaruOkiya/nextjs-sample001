import { SWIPER_IMAGE_PATHS } from '../../../lib/constant/paths'
import Swiper from '../../molecules/common/swiper'
import SlideContent from '../common/slideContent'
import SlideWelcome from '../swiperSlides/welcome'

type PropsIndexPageSwiper = {
  auto: boolean
}

export const SWIPER_CONTENTS = SWIPER_IMAGE_PATHS.map((path) => {
  return { image: path, content: <SlideContent /> }
})

export default function IndexPageSwiper(props: PropsIndexPageSwiper) {
  return (
    <Swiper
      auto={props.auto}
      slides={SWIPER_CONTENTS.map((value, index) => (
        <SlideWelcome key={index} image={value.image}>
          {value.content}
        </SlideWelcome>
      ))}
    />
  )
}
