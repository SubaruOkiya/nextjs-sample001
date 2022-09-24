import { useContext } from 'react'
import { ModalsStateContext } from '../indexModal'

export default function Info3() {
  const { dispatches } = useContext(ModalsStateContext)

  return (
    <div className="w-64 h-64 p-10">
      <p>info3</p>
      <div className="flex justify-start">
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault()
            dispatches.info3({ type: 'hidden' })
            dispatches.info2({ type: 'show' })
          }}
        >
          戻る
        </button>
      </div>
    </div>
  )
}
