type PropsH = {
  children: React.ReactNode
}

export function H1(props: PropsH) {
  return (
    <h1 className="text-3xl font-semibold md:text-2xl md:font-bold">
      {props.children}
    </h1>
  )
}

export function H2(props: PropsH) {
  return (
    <h1 className="text-2xl font-medium md:text-1xl md:font-semibold">
      {props.children}
    </h1>
  )
}
