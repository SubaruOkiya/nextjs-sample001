import BounceAnimation from '../../atoms/animations/bounce'
import CircleDiv from '../../atoms/divs/circleDiv'

type Props = {
  children: string
}

export default function BounceCircleDiv(props: Props) {
  return (
    <BounceAnimation>
      <CircleDiv>
        <div className="h-24 w-24 flex flex-col justify-center">
          <p className="text-center text-xl">{props.children}</p>
        </div>
      </CircleDiv>
    </BounceAnimation>
  )
}
