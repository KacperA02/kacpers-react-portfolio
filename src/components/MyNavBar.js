import { Link, useLocation } from 'react-router-dom';

const MyNavBar = ({ term, handleChange }) => {
  const location = useLocation();

  const handleInputChange = (e) => {
    handleChange(e);
  };

  return (
    <div className="navbar bg-black text-white sticky top-0 z-50 shadow-md px-4">
      {/* Left: Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle bg-black text-white hover:bg-base-200 hover:text-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-black rounded-box w-52"
          >
            {['About', 'Projects', 'Contact', 'Certificates'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase() === 'projects' ? 'projects/home' : item.toLowerCase()}`}
                  className="px-3 py-2 rounded bg-[#1a1a1a] hover:bg-base-200 hover:text-black transition-colors block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Center: Title */}
      <div className="navbar-center">
        <Link
          to="/"
          className="text-xl font-bold tracking-wide px-3 py-1 rounded hover:bg-base-200 hover:text-black transition-colors"
        >
          Kacper's Portfolio
        </Link>
      </div>

      {/* Right: Search (Only on /projects/home) */}
      <div className="navbar-end">
        {location.pathname === '/projects/home' && (
          <div className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-4">
            <input
              type="text"
              placeholder="Search a project..."
              onChange={handleInputChange}
              value={term}
              className="input input-bordered w-full max-w-xs text-black"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyNavBar;
