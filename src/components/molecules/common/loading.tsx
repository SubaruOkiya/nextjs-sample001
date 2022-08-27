import Spinner from '../../atoms/animations/spinner'

type PropsLoading = {
  loading: boolean
  loadingRate: number
}

export default function Loading(props: PropsLoading) {
  return (
    <div
      className={`${
        props.loading ? `z-50 bg-opacity-100` : 'bg-opacity-0 z-0'
      } absolute duration-[1s] w-full h-full bg-white`}
    >
      <div className="flex justify-center items-center h-screen">
        <Spinner />
        <p className="ml-3">{props.loadingRate}%</p>
      </div>
    </div>
  )
}
