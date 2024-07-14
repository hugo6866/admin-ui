import "./mylist.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Mydatatable from "../../components/mydatatable/Mydatatable";
import List from "../list/List";
const MyList = ({ columns }) => {
  return (
    <div className="category">
      <Sidebar />
      <div className="categoryContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="category" />
        </div>
        <Mydatatable title="All Data" columns={columns} />
      </div>
    </div>
  );
};

export default MyList;
