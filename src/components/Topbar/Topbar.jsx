
function Topbar() {
  return (
    <div className="navbar bg-base-100 px-4 drop-shadow-sm">
      <div className="flex-1">
        <div className="form-control w-2/5">
          <label className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text" className="grow" placeholder="Global search" />
            <kbd className="kbd kbd-sm">Ctrl</kbd>
            <kbd className="kbd kbd-sm">Shift</kbd>
            <kbd className="kbd kbd-sm">F</kbd>
          </label>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                //src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                // src="https://www.gravatar.com/avatar/7993?d=retro"
                src="https://ui-avatars.com/api/?name=Firstname+Lastname&?background=random"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-52 p-2 shadow gap-2"
          >
            <li>
              <div className="block">
                <span className="font-bold text-md">Firstname Lastname</span>
                <span className="text-sm text-gray-500 block text-left">Admin</span>
              </div>
            </li>
            <hr />
            <li>
              <a>Account Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div >
  )
}
export default Topbar