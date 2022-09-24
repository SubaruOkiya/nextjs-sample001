import { createContext } from 'react'
import {
  initialModalState,
  initialModalStateContext,
  ModalContextType,
  useModalsState,
} from '../../../lib/hooks/customs/common/modalsState'
import Modal from '../../molecules/common/modal'
import Info1 from './modals/info1'
import Info2 from './modals/info2'
import Info3 from './modals/info3'

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
        <Info1 />
      </Modal>

      <Modal
        isDisplay={states.info2.isDisplay}
        onClickBackGround={() => {
          dispatches.info2({ type: 'hidden' })
        }}
      >
        <Info2 />
      </Modal>

      <Modal
        isDisplay={states.info3.isDisplay}
        onClickBackGround={() => {
          dispatches.info3({ type: 'hidden' })
        }}
      >
        <Info3 />
      </Modal>

      {props.children}
    </ModalsStateContext.Provider>
  )
}
