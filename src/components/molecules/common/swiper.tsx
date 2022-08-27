import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Autoplay,
} from 'swiper'
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useEffect, useRef } from 'react'

type PropsSwiper = {
  slides: JSX.Element[]
  auto: boolean
}

export default function Swiper(props: PropsSwiper) {
  //const ref = useRef(null)
  const ref = useRef<SwiperCore | null>(null)

  useEffect(() => {
    if (ref.current) {
      if (props.auto) {
        ref.current.autoplay.start()
      } else {
        ref.current.autoplay.stop()
      }
    }
  }, [props.auto])

  return (
    <ReactSwiper
      onInit={(core: SwiperCore) => {
        ref.current = core
      }}
      modules={[Navigation, Pagination, Mousewheel, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      mousewheel={{ forceToAxis: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {props.slides.map((slide, index) => {
        return <SwiperSlide key={index}>{slide}</SwiperSlide>
      })}
    </ReactSwiper>
  )
}
