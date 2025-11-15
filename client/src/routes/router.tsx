import { createBrowserRouter } from 'react-router-dom';
import AppLayout from "../components/AppLayout/AppLayout";
import { ListPage } from './ListPage';
import { ItemPage } from './ItemPage';
import { StatsPage } from './StatsPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <ListPage />,
            },
            {
                path: 'list',
                element: <ListPage />,
            },
            {
                path: 'item/:id',
                element: <ItemPage />,
            },
            {
                path: 'stats',
                element: <StatsPage />,
            },
            {
                path: '*',
                element: <div>Страница не найдена</div>,
            },
        ],
    },
]);
