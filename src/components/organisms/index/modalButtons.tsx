import { useContext } from 'react'
import { ModalsStateContext } from './indexModal'

export default function ModalButtons() {
  const { dispatches } = useContext(ModalsStateContext)

  return (
    <div className="flex justify-around">
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatches.info1({ type: 'show' })
        }}
      >
        modal1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatches.info2({ type: 'show' })
        }}
      >
        modal2
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatches.info3({ type: 'show' })
        }}
      >
        modal3
      </button>
    </div>
  )
}
