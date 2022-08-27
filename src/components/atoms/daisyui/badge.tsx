export type BadgeLevel = 'info' | 'success' | 'warning' | 'error'

type PropsBadge = {
  children: React.ReactNode
  type: BadgeLevel
}

export default function Badge(props: PropsBadge) {
  return (
    <div className={`badge badge-${props.type} badge-outline`}>
      {props.children}
    </div>
  )
}
