import A from '../../atoms/tags/a'

type PropsNavbar = {
  isFloat?: boolean
  siteLog: React.ReactNode
  pathHome: string
  components?: React.ReactNode[]
}

export default function Navbar(props: PropsNavbar) {
  return (
    <div
      className={`navbar rounded-xl bg-white text-gray-600 ${
        props.isFloat ? 'shadow-md bg-opacity-70' : 'bg-opacity-0'
      } duration-1000`}
    >
      <div className="flex-1 ml-2">
        <A href={props.pathHome}>{props.siteLog}</A>
      </div>
      <div className="flex-none">
        {props.components?.map((component) => {
          return component
        })}
      </div>
    </div>
  )
}
