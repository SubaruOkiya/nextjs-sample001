import { useBooleanState } from '../../common/contexts'
import { useInView } from 'react-intersection-observer'
import useLoadImages from './loadImages'
import { useEffect } from 'react'

export default function useIndexLoading() {
  const { value: loaded, changeValue: changeLoaded } = useBooleanState(false)
  const { ref, inView } = useInView({ threshold: 0.1 })
  const { loadingRate, dispatch } = useLoadImages()

  useEffect(() => {
    if (loadingRate === 1) changeLoaded(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingRate])

  return { ref, inView, loaded, loadingRate, dispatch }
}
