import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 
{
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import App from './App';
import TiskovinyPage from './pages/TiskovinyPage';
import TiskarnaPage from './pages/TiskarnaPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/tiskoviny',
        element: <TiskovinyPage />
    },
    {
        path: '/tiskarna',
        element: <TiskarnaPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
