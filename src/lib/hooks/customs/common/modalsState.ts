import { Dispatch, useReducer } from 'react'
import {
  ModalAction,
  ModalState,
  ModalStateReducer,
} from '../../reducers/modalState'

type ArgsInitialModalsState<T extends string> = {
  [modalName in T]: boolean
}

export type ModalContextType<T extends string> = {
  states: { [modalName in T]: ModalState }
  dispatches: { [modalName in T]: Dispatch<ModalAction> }
}

export function initialModalStateContext<T extends string>(
  keys: readonly T[],
): ModalContextType<T> {
  const initialState = {
    states: {},
    dispatches: {},
  } as ModalContextType<T>

  for (const key of keys) {
    initialState.states[key] = { isDisplay: false }
    initialState.dispatches[key] = () => {}
  }

  return initialState
}

export function initialModalState<T extends string>(keys: readonly T[]) {
  const initialState = {} as { [name in T]: boolean }

  for (const key of keys) initialState[key] = false

  return initialState
}

export function useModalsState<T extends string>(
  initialModalsState: ArgsInitialModalsState<T>,
): ModalContextType<T> {
  const states: { [modalName in T]?: ModalState } = {}
  const dispatches: { [modalName in T]?: Dispatch<ModalAction> } = {}

  for (const modalName in initialModalsState) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer(ModalStateReducer, {
      isDisplay: initialModalsState[modalName],
    })
    states[modalName] = state
    dispatches[modalName] = dispatch
  }

  return { states, dispatches } as ModalContextType<T>
}
