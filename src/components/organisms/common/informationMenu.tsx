import { AiFillBell } from 'react-icons/ai'

export default function InformationMenu() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <AiFillBell size={30} />
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96 text-gray-700"
      >
        <li>
          <a className="justify-between">
            ご友人からメールが届いてます。
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>今日は午後から雨です。傘を持っていってください。</a>
        </li>
        <li>
          <a>アンケートが届いています。</a>
        </li>
      </ul>
    </div>
  )
}
