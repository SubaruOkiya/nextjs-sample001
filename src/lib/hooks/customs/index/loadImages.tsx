import { createContext, Dispatch, useReducer } from 'react'
import { SWIPER_IMAGE_PATHS } from '../../../constant/paths'

type LoadingStatus = 'loading' | 'complete'
type ActionType =
  | { type: 'add'; payload: { imagePath: string } }
  | { type: 'finish'; payload: { imagePath: string } }

type State = {
  images: { imagePath: string; status: LoadingStatus }[]
  loadRate: number
}

const reducer = (value: State, action: ActionType): State => {
  const index = value.images.findIndex(
    (image) => image.imagePath === action.payload.imagePath,
  )
  switch (action.type) {
    case 'add':
      return {
        images: [
          ...value.images,
          { imagePath: action.payload.imagePath, status: 'loading' },
        ],
        loadRate: value.loadRate,
      }
    case 'finish':
      value.images[index].status = 'complete'
      return {
        images: [...value.images],
        loadRate:
          value.images.filter((image) => image.status === 'complete').length /
          value.images.length,
      }
  }
}

const initialState: State = {
  images: SWIPER_IMAGE_PATHS.map((path) => {
    return { imagePath: path, status: 'loading' }
  }),
  loadRate: 0,
}

export const loadImageContext = createContext<{
  dispatch: Dispatch<ActionType>
}>({ dispatch: () => {} })

export default function useLoadImages() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return { loadingRate: state.loadRate, dispatch }
}
