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
        delay: 250000,
        disableOnInteraction: false,
      }}
    >
      {props.imagePaths.map((path, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="h-screen relative">
              <Image
                src={path}
                className="w-full"
                layout="fill"
                objectFit="cover"
              />
              <div className="flex justify-centr align-middle z-10 w-full h-full absolute">
                <p className="text-5xl text-white m-auto">
                  いろんなことを試す
                  <br />
                  サンプルホームページ
                </p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </ReactSwiper>
  )
}
