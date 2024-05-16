import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UsersIcon from "@mui/icons-material/AccountCircle";
import ProductIcon from "@mui/icons-material/Inventory";
import OrdersIcon from "@mui/icons-material/ShoppingCart";
import ProfilIcon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import CategoryIcon from "@mui/icons-material/Category";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Store</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
          <Link to="/">
            <DashboardIcon className="icon"></DashboardIcon>
            <span>Dashboard</span>
            </Link>
          </li>
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
          <Link to="/category">
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
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
