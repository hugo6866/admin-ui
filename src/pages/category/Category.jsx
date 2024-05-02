import "./category.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Mydatatable from "../../components/mydatatable/Mydatatable";
const Category = () => {
  return (
    <div className="category">
      <Sidebar />
      <div className="categoryContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <Mydatatable title="All Data" />
      </div>
    </div>
  );
};

export default Category;
