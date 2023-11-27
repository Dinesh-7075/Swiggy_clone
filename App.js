import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import index from "./index.css";
import { useEffect, useState } from "react";
import NavBar from "./src/components/NavBar";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Provider } from 'react-redux';
import Cart from "./src/components/Cart";
import appStore from "./src/utils/appStore";

const Profile = lazy(()=>import("./src/components/Profile"));

const App = () =>{
  return(
    <Provider store={appStore}>  
      <div>
        <NavBar />
        <Outlet />
      </div>
    </Provider>
)};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/restaurants/:resName/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: (<Suspense fallback={<center style={{marginTop:"30px"}}><h1>Loading...</h1></center>}><Profile /></Suspense>)
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />)
