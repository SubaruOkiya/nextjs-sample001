import Link from 'next/link'

interface Props {
  children: React.ReactNode
  href: string
}

export default function A(props: Props) {
  return (
    <Link href={props.href}>
      <a>{props.children}</a>
    </Link>
  )
}
