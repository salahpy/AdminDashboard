import { DataGrid } from "@mui/x-data-grid"
import * as React from "react"
import Box from "@mui/material/Box"
import product1 from '../data/product1.jpg';
import product2 from '../data/product2.jpg';
import product3 from '../data/product3.jpg';
import product4 from '../data/product4.jpg';
import product5 from '../data/product5.jpg';
import product6 from '../data/product6.jpg';
import product7 from '../data/product7.jpg';
import product8 from '../data/product8.jpg';

const columns = [
  {
    field: "OrderItems",
    headerName: "Item",
    width: 150,
    editable: true,
  },
  {
    field: "CustomerName",
    headerName: "Customer Name",
    width: 150,
    editable: true,
  },
  {
    field: "TotalAmount",
    headerName: "Total Amount",
    width: 110,
    editable: true,
  },
  {
    field: "Status",
    headerName: "Status",
    sortable: false,
    width: 160,
  },
  {
    field: "Location",
    headerName: "Location",
    width: 110,
    editable: true,
  },
]

const rows = [
    {
        id: 10248,
        CustomerName: 'Vinet',
    
        TotalAmount: 32.38,
        OrderItems: 'Fresh Tomato',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          product6,
      },
      {
        id: 345653,
        CustomerName: 'Carson Darrin',
        TotalAmount: 56.34,
        OrderItems: 'Butter Scotch',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product5,
      },
      {
        id: 390457,
        CustomerName: 'Fran Perez',
        TotalAmount: 93.31,
        OrderItems: 'Candy Gucci',
        Location: 'New York',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product7,
      },
      {
        id: 893486,
        CustomerName: 'Anika Viseer',
        TotalAmount: 93.31,
        OrderItems: 'Night Lamp',
        Location: 'Germany',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product4,
      },
      {
        id: 748975,
        CustomerName: 'Miron Vitold',
        TotalAmount: 23.99,
        OrderItems: 'Healthcare Erbology',
        Location: 'Spain',
        Status: 'rejected',
        StatusBg: 'red',
        ProductImage:
        product1,
      },
      {
        id: 94757,
        CustomerName: 'Omar Darobe',
        TotalAmount: 95.99,
        OrderItems: 'Makeup Lancome Rouge',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          product2,
      },
      {
        id: 944895,
        CustomerName: 'Lulia albu',
        TotalAmount: 17.99,
        OrderItems: 'Skincare',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          product3,
      },
      {
        id: 845954,
        CustomerName: 'Penjani',
        TotalAmount: 59.99,
        OrderItems: 'Headphone',
        Location: 'USA',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          product4,
      },
      {
        id: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        StatusBg: '#FB9678',
        ProductImage:
          'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
      },
      {
        id: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
      {
        id: 38489,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        ProductImage:
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
      },
      {
        id: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        ProductImage:
          'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
      },
      {
        id: 874534,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        ProductImage:
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      },
]

const Orders = () => {
  return (
    <div>
      <div className="mt-28 ml-20">
        <p className="text-xl text-gray-500">Page</p> <p className=" font-bold text-3xl">Orders</p></div>
        <div  className="w-full mt-5 rounded-xl ml-20 bg-white sidebar">
          <Box sx={{ }}>
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

export default Orders
