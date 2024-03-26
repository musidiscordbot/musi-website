import Link from "next/link";

const openPopup = (url) => {
  const width = 600;
  const height = 400;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;

  window.open(url, 'popupWindow', `width=${width},height=${height},left=${left},top=${top}`);
};

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
              <a className="p-color" onClick={() => openPopup('https://discord.com/oauth2/authorize?client_id=1137417865016918149&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fmusi.lol%2Fadded&scope=bot+identify')}>
                Add
              </a>
            </li>
            <li>
              <Link className="p-color" href="/status">
                Status
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/premium">
                Premium
              </Link>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
