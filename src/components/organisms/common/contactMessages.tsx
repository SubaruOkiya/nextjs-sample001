import axios from 'axios'
import { createRef, MouseEvent, useEffect } from 'react'
import { useArrayState } from '../../../lib/hooks/common/contexts'
import { OperatorMessage, OptionMessage, UserMessage } from './contactMessage'

type PropsContactMessages = {
  active: boolean
}

type Message = {
  type: 'user' | 'operator' | 'option'
  id?: string
  text: string
}

type ApiMessages = {
  comment: string
  options: { id: string; text: string }[]
}

const apiUrl = '/api/contacts'

export default function ContactMessages(props: PropsContactMessages) {
  const { value: messages, changeValue: updateMessages } =
    useArrayState<Message>([])
  const ref = createRef<HTMLDivElement>()

  const requestContactApi = (contactId: string) => {
    axios.get(`${apiUrl}/${contactId}`).then((res) => {
      const message = res.data as ApiMessages
      const operator: Message = {
        type: 'operator',
        text: message.comment,
      }
      const options: Message[] = message.options.map((option) => ({
        type: 'option',
        id: option.id,
        text: option.text,
      }))

      updateMessages([...messages, operator, ...options])
    })
  }

  useEffect(() => {
    if (props.active) {
      if (messages.length === 0) {
        setTimeout(() => {
          requestContactApi('0')
        }, 2500)
      } else {
        const message = messages[messages.length - 1]
        if (message.type === 'user') {
          setTimeout(() => {
            if (message.id) requestContactApi(message.id)
          }, 1000)
        } else if (message.type === 'operator') {
          setTimeout(() => {
            requestContactApi('0')
          }, 1000)
        }
      }

      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    } else {
      setTimeout(() => {
        updateMessages([])
      }, 2500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.active, messages])

  return (
    <>
      {messages.map((message, index) => {
        switch (message.type) {
          case 'operator':
            return OperatorMessage(message.text, index)
          case 'option':
            const onClick = (e: MouseEvent<HTMLElement>): void => {
              e.preventDefault()
              updateMessages([
                ...messages,
                { type: 'user', id: message.id, text: message.text },
              ])
            }

            return OptionMessage(message.text, onClick, index)
          case 'user':
            return UserMessage(message.text, index)
        }
      })}
      <div className="m-2" ref={ref}></div>
    </>
  )
}
