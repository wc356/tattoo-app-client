import "./Navbar.css";

const Navbar = ({ children }) => (
  <>
    <nav>
      <input placeholder="ARTIST" type="text" />
      <ul>
        <li>
          <a href="#">PROFILE</a>
        </li>
        |
        <li>
          <a href="#">LOGIN</a>
        </li>
        |
        <li>
          <a href="#">REGISTER</a>
        </li>
      </ul>
    </nav>
    <div className="children-container">{children}</div>
  </>
);

export default Navbar;
