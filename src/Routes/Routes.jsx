import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Pages/Error/Errorpage";
import Homepage from "../Pages/Homepage/Homepage";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            }
        ]
    }
]);

export default router;