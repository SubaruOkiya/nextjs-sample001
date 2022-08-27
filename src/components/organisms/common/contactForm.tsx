import { MouseEvent } from 'react'
import { FaCompressArrowsAlt, FaExpandArrowsAlt } from 'react-icons/fa'
import { useBooleanState } from '../../../lib/hooks/common/contexts'

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
              : 'translate-x-96'
            : 'translate-x-96'
        } duration-[2s]`}
      >
        <div className="bg-white rounded-xl shadow-2xl shadow-black p-3">
          <div className="flex justify-end">
            <FaCompressArrowsAlt size={20} onClick={onClickToggle} />
          </div>
          <div className="w-64 p-4">問い合わせフォーム</div>
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
