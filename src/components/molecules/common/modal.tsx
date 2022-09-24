import { MouseEvent } from 'react'

type PropsModal = {
  isDisplay: boolean
  children: React.ReactNode
  onClickBackGround?: (e: MouseEvent<HTMLElement>) => void
}

export default function Modal(props: PropsModal) {
  if (!props.isDisplay) return <></>
  return (
    <div className="fixed top-0 h-screen w-screen flex justify-center items-center z-50">
      <div className="z-50 bg-base-100 p-5 border-2 border-gray-600 rounded-lg shadow-2xl shadow-black  mx-2">
        <div>{props.children}</div>
      </div>

      <div
        className="absolute h-full w-full bg-gray-700 bg-opacity-50 z-40"
        onClick={props.onClickBackGround}
      ></div>
    </div>
  )
}
