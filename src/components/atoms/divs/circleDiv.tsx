type PropsCircleDiv = {
  children: React.ReactNode
}

export default function CircleDiv(props: PropsCircleDiv) {
  return (
    <div className="rounded-full bg-gradient-to-br from-cyan-200 via-white to-cyan-200 shadow-cyan-700 shadow-md">
      {props.children}
    </div>
  )
}
