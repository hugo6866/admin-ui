import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UsersIcon from "@mui/icons-material/AccountCircle";
import ProductIcon from "@mui/icons-material/Inventory";
import OrdersIcon from "@mui/icons-material/ShoppingCart";
import ProfilIcon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import CategoryIcon from "@mui/icons-material/Category";
import { DarkModeContext } from "./../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { dispatch: dispatchAuth } = useContext(AuthContext); 
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatchAuth({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="sidebar" data-test="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Store</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/">
            <li>
              <DashboardIcon className="icon"></DashboardIcon>
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LIST</p>
          <Link to="/users">
            <li>
              <UsersIcon className="icon"></UsersIcon>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <ProductIcon className="icon"></ProductIcon>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <OrdersIcon className="icon"></OrdersIcon>
            <span>Orders</span>
          </li>
          <Link to="/categories">
            <li>
              <CategoryIcon className="icon"></CategoryIcon>
              <span>Category</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <ProfilIcon className="icon"></ProfilIcon>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"></LogoutIcon>
            <span onClick={handleLogout}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
