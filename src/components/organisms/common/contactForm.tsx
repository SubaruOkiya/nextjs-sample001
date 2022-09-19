import { MouseEvent } from 'react'
import { FaCompressArrowsAlt, FaExpandArrowsAlt } from 'react-icons/fa'
import { useBooleanState } from '../../../lib/hooks/common/contexts'
import { H2 } from '../../atoms/tags/h'
import ContactMessages from './contactMessages'

const str = '問い合わせフォーム'

type PropsContactForm = {
  isDisplay: boolean
}

export default function ContactForm(props: PropsContactForm) {
  const { value: isOpen, changeValue: changeStatus } = useBooleanState(false)

  const onClickToggle = (e: MouseEvent<HTMLOrSVGElement>) => {
    e.preventDefault()
    changeStatus(!isOpen)
  }

  return (
    <>
      <div
        className={`fixed bottom-10 right-10 z-40 ${
          props.isDisplay
            ? isOpen
              ? 'translate-x-0'
              : 'translate-x-[150%]'
            : 'translate-x-[150%]'
        } duration-[2s]`}
      >
        <div className="bg-white rounded-xl shadow-2xl shadow-black p-3">
          <div className="flex justify-end">
            <FaCompressArrowsAlt size={20} onClick={onClickToggle} />
          </div>
          <div className="p-2">
            <H2>問い合わせフォーム</H2>
            <div className="w-96 h-72 my-2 p-2 border border-gray-500 shadow-inner shadow-gray-400 overflow-scroll">
              <ContactMessages active={isOpen} />
            </div>
            {/* <input className="py-2 px-5 my-2 border border-blue-400 shadow-inner shadow-blue-300 w-full rounded-md" /> */}
          </div>
        </div>
      </div>
      <div
        className={`fixed bottom-0 right-0 z-40 my-5 ${
          props.isDisplay
            ? isOpen
              ? 'translate-x-20'
              : 'translate-x-0'
            : 'translate-x-20'
        } duration-[2s]`}
      >
        <div className="bg-white border border-yellow-300 w-10 rounded-l-xl ">
          <div className="flex justify-center my-3">
            <FaExpandArrowsAlt size={20} onClick={onClickToggle} />
          </div>
          {str.split('').map((s, index) => (
            <p key={index} className="text-center">
              {s}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}
