import { useInView } from 'react-intersection-observer'

type PropsAppearAnimation = {
  children: React.ReactNode
}

export default function AppearAnimation(props: PropsAppearAnimation) {
  const { ref, inView } = useInView({
    rootMargin: '0px 0px -300px 0px',
  })
  return (
    <div ref={ref}>
      <div
        className={`${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-28'
        } duration-[1s]`}
      >
        {props.children}
      </div>
    </div>
  )
}
