export type ModalState = {
  isDisplay: boolean
}

export type ModalAction =
  | {
      type: 'show'
    }
  | {
      type: 'hidden'
    }
  | {
      type: 'toggle'
    }

export const ModalStateReducer = (
  state: ModalState,
  action: ModalAction,
): ModalState => {
  switch (action.type) {
    case 'show':
      return { isDisplay: true }
    case 'hidden':
      return { isDisplay: false }
    case 'toggle':
      return { isDisplay: !state.isDisplay }
    default:
      throw new Error('Implements Error of DrawerStateReducer')
  }
}
