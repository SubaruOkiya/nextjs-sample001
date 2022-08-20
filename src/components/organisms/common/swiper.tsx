import Image from 'next/image'
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper'
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type PropsSwiper = {
  imagePaths: string[]
}

export default function Swiper(props: PropsSwiper) {
  return (
    <ReactSwiper
      modules={[Navigation, Pagination, Mousewheel, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      mousewheel={{ forceToAxis: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {props.imagePaths.map((path, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="h-screen">
              <Image
                src={path}
                className="w-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        )
      })}
    </ReactSwiper>
  )
}
