import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Link, useLocation } from "react-router-dom";

const Mydatatable = ({ title, columns }) => {
  const type = location.pathname.split("/")[1];
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, type),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, [type]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, type, id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <span>
              <span
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </span>
            </span>
          </div>
        );
      },
    },
  ];
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        {/* {type.toUpperCase()} */}
        {title}
        <Link
          to={`/${type}/new`}
          data-testid="add-new"
          style={{ textDecoration: "none" }}
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Mydatatable;
