import ImageFirstLoad from '../../molecules/common/imageFirstLoad'
import SlideContent from '../common/slideContent'

const IMAGE_PATH = '/laptop-1205256.jpg'

type PropsSlideWelcome = {
  image: string
  children: JSX.Element
}

export default function SlideWelcome(props: PropsSlideWelcome) {
  return (
    <div className="h-screen relative">
      <ImageFirstLoad
        src={props.image}
        className="w-full"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex items-center z-10 w-full h-full absolute">
        {props.children}
      </div>
    </div>
  )
}
