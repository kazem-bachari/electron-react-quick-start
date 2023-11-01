import React from "react";
import "@inovua/reactdatagrid-community/index.css";
import ReactDataGrid from "@inovua/reactdatagrid-community";

const gridStyle = { maxHeight: 207 };

const columns = [
  { name: "firstName", header: "First Name", defaultFlex: 1 },
  { name: "lastName", header: "Last Name", defaultFlex: 1 },

  {
    id: "fullName",
    header: "Full Name",
    minWidth: 100,
    defaultFlex: 1,
    render: ({ data }) => data.firstName + " " + data.lastName,
  },
  {
    name: "age",
    header: "Age",
    defaultWidth: 80,
    render: ({ value }) => (
      <span style={{ color: value < 30 ? "lightgreen" : "inherit" }}>
        {value}
      </span>
    ),
  },
];

const dataSource = [
  { firstName: "John", lastName: "Grayner", country: "usa", age: 35, id: 0 },
  { firstName: "Mary", lastName: "Stones", country: "ca", age: 25, id: 1 },
  { firstName: "Robert", lastName: "Fil", country: "uk", age: 27, id: 2 },
  { firstName: "Mark", lastName: "Twain", country: "usa", age: 74, id: 3 },
];
const Grids = () => {
  return (
    <ReactDataGrid
      idProperty="id"
      columns={columns}
      dataSource={dataSource}
      style={gridStyle}
    />
  );

};

export default Grids