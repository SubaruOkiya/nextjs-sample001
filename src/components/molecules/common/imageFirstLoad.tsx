import Image from 'next/image'
import { memo, useContext } from 'react'
import { loadImageContext } from '../../../lib/hooks/customs/index/loadImages'

type PropsImageFirstLoad = {
  src: string
  className: string
  layout?: 'fill'
  objectFit?: 'cover'
}

const ImageFirstLoad = memo(function ImageFirstLoad(
  props: PropsImageFirstLoad,
) {
  const { dispatch } = useContext(loadImageContext)
  //dispatch({ type: 'add', payload: { imagePath: props.src } })

  const onLoadingComplete = () => {
    dispatch({ type: 'finish', payload: { imagePath: props.src } })
  }

  return (
    <Image {...props} loading="eager" onLoadingComplete={onLoadingComplete} />
  )
})

export default ImageFirstLoad
