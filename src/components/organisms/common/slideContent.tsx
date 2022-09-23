import { useSprings, animated, config } from 'react-spring'

export default function SlideContent() {
  const msg = 'Welcome to Homepage!'
  const [springs, set] = useSprings(msg.length, (idx) => ({
    // idxによって異なる設定をしてもよい。
    config: config.wobbly,
    fontSize: '48pt',
  }))
  return (
    <div className="w-full text-center font-cabin text-white ">
      {springs.map((item, idx) => (
        <animated.span
          key={idx}
          onMouseEnter={(e) =>
            set((i) => (i === idx ? { fontSize: '60pt' } : {}))
          }
          onMouseLeave={(e) =>
            set((i) => (i === idx ? { fontSize: '48pt' } : {}))
          }
          style={{ verticalAlign: 'top', ...item }}
        >
          {msg[idx]}
        </animated.span>
      ))}
    </div>
  )
}
