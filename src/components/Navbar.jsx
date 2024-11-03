import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
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
        className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/coffees'>Coffees</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl lg:text-2xl">Coffee Book</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-base">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/coffees'>Coffees</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn text-base text-white bg-sky-400 hover:bg-sky-500 hover:border-2">Explore More</Link>
  </div>
</div>
    );
};

export default Navbar;