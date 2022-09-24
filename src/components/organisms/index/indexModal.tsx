import { createContext } from 'react'
import {
  initialModalState,
  initialModalStateContext,
  ModalContextType,
  useModalsState,
} from '../../../lib/hooks/customs/common/modalsState'
import Modal from '../../molecules/common/modal'

type PropsModals = {
  children: React.ReactNode
}

const modalNames = ['info1', 'info2', 'info3'] as const
type ModalNames = typeof modalNames[number]

export const ModalsStateContext = createContext<ModalContextType<ModalNames>>(
  initialModalStateContext<ModalNames>(modalNames),
)

export default function Modals(props: PropsModals) {
  const { states, dispatches } = useModalsState<ModalNames>(
    initialModalState(modalNames),
  )
  return (
    <ModalsStateContext.Provider value={{ states, dispatches }}>
      <Modal
        isDisplay={states.info1.isDisplay}
        onClickBackGround={() => {
          dispatches.info1({ type: 'hidden' })
        }}
      >
        <div className="w-64 h-64 p-10">info1</div>
      </Modal>

      <Modal
        isDisplay={states.info2.isDisplay}
        onClickBackGround={() => {
          dispatches.info2({ type: 'hidden' })
        }}
      >
        <div className="w-64 h-64 p-10">info2</div>
      </Modal>

      <Modal
        isDisplay={states.info3.isDisplay}
        onClickBackGround={() => {
          dispatches.info3({ type: 'hidden' })
        }}
      >
        <div className="w-64 h-64 p-10">info3</div>
      </Modal>

      {props.children}
    </ModalsStateContext.Provider>
  )
}
