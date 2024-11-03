import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar bg-white/30 z-50 fixed backdrop-blur-md py-4 px-5 md:px-14 lg:px-28">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn border border-gray-400 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
            <NavLink className={({ isActive }) => `
            font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}
              to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => `
            font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='/coffees'>Coffees</NavLink>
            <NavLink className={({ isActive }) => `
            font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='/dashboard'>Dashboard</NavLink>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl lg:text-2xl">Coffee Book</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li><NavLink className={({ isActive }) => `
            font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`}
            to='/'>Home</NavLink></li>
          <li><NavLink className={({ isActive }) => `
            font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='/coffees'>Coffees</NavLink></li>
          <li><NavLink className={({ isActive }) => `
            font-bold ${isActive ? 'text-warning' : 'hover:text-warning'}`} to='/dashboard'>Dashboard</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn text-base text-white bg-sky-400 hover:bg-sky-500 hover:border-2">Explore More</Link>
      </div>
    </div>
  );
};

export default Navbar;