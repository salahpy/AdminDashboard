import { DataGrid } from "@mui/x-data-grid"
import * as React from "react"
import Box from "@mui/material/Box"
import avatar from "../data/avatar.jpg"
import avatar2 from "../data/avatar2.jpg"
import avatar3 from "../data/avatar3.png"
import avatar4 from "../data/avatar4.jpg"

const columns = [

  {
    field: "Name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "Title",
    headerName: "Designation",
    width: 180,
    editable: true,
  },
  {
    field: "Country",
    headerName: "Country",
    sortable: false,
    width: 160,
  },
  {
    field: "HireDate",
    headerName: "Hire Date",
    width: 110,
    editable: true,
  },
]

const rows = [
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    id: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
]

const Employees = () => {
  return (
    <div>
      <div className="mt-28 ml-20">
        <p className="text-xl text-gray-500">Page</p>{" "}
        <p className=" font-bold text-3xl">Employees</p>
      </div>
      <div className=" mt-5 rounded-xl ml-20 bg-white sidebar">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  )
}

export default Employees
