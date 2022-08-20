import { MdManageAccounts } from 'react-icons/md'
import { AiFillBell } from 'react-icons/ai'
import A from '../../atoms/tags/a'

type PropsNavbar = {
  scrollRootId?: string
  siteLog: React.ReactNode
  pathHome: string
}

export default function Navbar(props: PropsNavbar) {
  return (
    <div className="navbar rounded-xl shadow-md bg-opacity-40 bg-white">
      <div className="flex-1">
        <A href={props.pathHome}>{props.siteLog}</A>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <AiFillBell size={30} />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <MdManageAccounts size={30} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
