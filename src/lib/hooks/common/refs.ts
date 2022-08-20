import { useRef } from 'react'

export function useElementRef<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  const scrollToRef = () => {
    ref?.current?.scrollIntoView()
  }

  return { ref, scrollToRef }
}
