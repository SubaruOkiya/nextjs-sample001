import { useInView } from 'react-intersection-observer'

export default function ScrollSample() {
  const { ref, inView } = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  })
  return (
    <div ref={ref}>
      <div className="w-full h-16 p-5">
        <div
          className={`${
            inView
              ? 'opacity-100 bg-gray-200 p-3 rounded-full shadow-md'
              : 'opacity-0 translate-y-[50%]'
          } duration-[1s]`}
        >
          <p>Content</p>
        </div>
      </div>
    </div>
  )
}
