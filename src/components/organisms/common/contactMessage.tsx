import { MouseEvent, RefObject } from 'react'
import { BiUser } from 'react-icons/bi'
import { BsHandIndex } from 'react-icons/bs'
import { FaUserSecret } from 'react-icons/fa'

export const OperatorMessage = (message: string, key?: number) => {
  return (
    <div className="flex items-center mt-5" key={key}>
      <FaUserSecret size={32} />
      <div className="h-full mx-2">
        <p className="font-bold">{message}</p>
      </div>
    </div>
  )
}

export const OptionMessage = (
  message: string,
  onClick: (e: MouseEvent<HTMLElement>) => void,
  key?: number,
) => {
  return (
    <div
      className="flex justify-between items-center mx-10 my-2 w-[70%] p-2 border border-gray-300 rounded-md hover:bg-gray-100"
      onClick={onClick}
      key={key}
    >
      <p className="text-sm text-gray-700">{message}</p>
      <BsHandIndex />
    </div>
  )
}

export const UserMessage = (message: string, key?: number) => {
  return (
    <div className="flex justify-end items-center mt-5" key={key}>
      <div className="h-full mx-2">
        <p className="font-bold">{message}</p>
      </div>
      <BiUser size={32} />
    </div>
  )
}
