import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import ProductDetails from "../Components/ProductDetails";
import Register from "../Pages/Register";
import PrivateRouter from "../Provider/PrivateRouter";

const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
              path:'/productDetails/:id',
              element: <PrivateRouter>
                <ProductDetails></ProductDetails>
              </PrivateRouter>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    },
    {
        
    },
    {
        path:'*',
        element:<h2>Error 404</h2>
    }
]);

export default router