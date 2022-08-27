import ImageFirstLoad from '../../molecules/common/imageFirstLoad'
import SlideContent from '../common/slideContent'

const IMAGE_PATH = '/laptop-1205256.jpg'

export default function SlideWelcome() {
  return (
    <div className="h-screen relative">
      <ImageFirstLoad
        src={IMAGE_PATH}
        className="w-full"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex items-center z-10 w-full h-full absolute">
        <SlideContent />
      </div>
    </div>
  )
}
