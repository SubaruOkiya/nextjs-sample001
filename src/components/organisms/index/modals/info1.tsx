import { useContext } from 'react'
import { ModalsStateContext } from '../indexModal'

export default function Info1() {
  const { dispatches } = useContext(ModalsStateContext)

  return (
    <div className="w-64 h-64 p-10">
      <p>info1</p>
      <div className="flex justify-end">
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault()
            dispatches.info1({ type: 'hidden' })
            dispatches.info2({ type: 'show' })
          }}
        >
          次へ
        </button>
      </div>
    </div>
  )
}
