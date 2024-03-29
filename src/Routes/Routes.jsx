import { createBrowserRouter } from "react-router-dom";

import Homepage from "../Pages/Homepage/Homepage";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            }
        ]
    }
]);

export default router;