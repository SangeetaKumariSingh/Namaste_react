import { CART_IMAGE, LOGO_IMAGE } from "../../utils/constants.js";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_IMAGE} alt="logo" />
      <div>
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <img className="cartImage" src={CART_IMAGE} alt="Cart" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
