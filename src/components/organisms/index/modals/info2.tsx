import { useContext } from 'react'
import { ModalsStateContext } from '../indexModal'

export default function Info2() {
  const { dispatches } = useContext(ModalsStateContext)

  return (
    <div className="w-64 h-64 p-10">
      <p>info2</p>
      <div className="flex justify-between">
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault()
            dispatches.info2({ type: 'hidden' })
            dispatches.info1({ type: 'show' })
          }}
        >
          戻る
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault()
            dispatches.info2({ type: 'hidden' })
            dispatches.info3({ type: 'show' })
          }}
        >
          次へ
        </button>
      </div>
    </div>
  )
}
