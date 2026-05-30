import { createBrowserRouter } from "react-router-dom";
import  SignUpPage from "../screens/sign-up/SignUpPage";
import DashboardMainPage from "../screens/dashboard/DashbordMainPage";
import App from "../App";




export  const routes = createBrowserRouter([
     {
         path:"/",
         element:<App/>,

     },
     {
         path:"/sign-up",
         element:<SignUpPage/>,

     },
     {
        path:"/dashboard",
        element:<DashboardMainPage/>,
     }
])