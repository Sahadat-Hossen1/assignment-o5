import React, { useContext } from "react";
import ContactList from "./pages/ContactList";
import ContactDetails from "./pages/ContactDetails";
import AddContact from "./pages/AddContact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ContactList />,
      },
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      {
        path: "/add",
        element: <AddContact />,
      },
      {
        path: "*",
        element: (
          <div style={{
            display:"flex",justifyContent:"center",alignItems:'center',height:'100vh',backgroundColor:'#c9d8e7'
          }}>
            <h1 style={{color:'red'}}>
              404 Not Found
            </h1>
          </div>
        ),
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
