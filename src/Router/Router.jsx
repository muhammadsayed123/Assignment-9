import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

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
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
]);

export default router