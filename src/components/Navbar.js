import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="/">
                Musi
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
            Home
              </Link>
              </li>
              <li>
              <Link className="p-color" href="https://discord.com/oauth2/authorize?client_id=1137417865016918149&permissions=0&response_type=code&redirect_uri=https%3A%2F%2Fmusi.lol%2Fadded&scope=bot+identify">
            Add
              </Link>
            </li>
            <li>
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
