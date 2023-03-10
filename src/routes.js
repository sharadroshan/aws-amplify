import { Navigate } from 'react-router-dom';
import { Layout } from './Components/layout'
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home'
import Detail from './Components/Detail/Detail';
import File from './Components/File/File'

export const routes = [
    {
        path: '/',
        element: <Navigate to="/home" />
    },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'dashboard',
                element: <DashBoard />
            },
            {
                path: 'detail',
                element: <Detail />
            },
            {
                path: 'file',
                element: <File />
            }
        ]
    }
];
