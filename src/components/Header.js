import logo from "../assets/acme-1.svg";
import "./Header.css";

const Header = () => (
  <div className="header">
    <i className="fas fa-bars" style={{ fontSize: 25, color: "#494b76" }}></i>
    <img src={logo} alt="logo" />
    <i
      className="fas fa-question-circle"
      style={{ fontSize: 25, color: "#35386b" }}
    ></i>
  </div>
);

export default Header;
