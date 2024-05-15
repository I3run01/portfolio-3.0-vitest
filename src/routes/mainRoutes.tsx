import { useRoutes } from "react-router-dom";
import Home from 'src/pages/home'
import Dashboard from 'src/pages/dashboard'
import Tech from 'src/pages/tech'



export const MainRoutes = () => {

    return useRoutes([
        {path: '/', element: <Home/> },
        {path: '/tech', element: <Tech/> },
        {path: '/dashboard', element: <Dashboard/> },
    ])
}
