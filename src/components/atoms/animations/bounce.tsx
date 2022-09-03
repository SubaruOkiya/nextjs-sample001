type PropsBounceAnimation = {
  children: JSX.Element
}

export default function BounceAnimation(props: PropsBounceAnimation) {
  return <div className="animate-bounce">{props.children}</div>
}
