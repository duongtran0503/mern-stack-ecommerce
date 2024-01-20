import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import OrderPage from '../pages/OrderPage';
import NotFoundPage from '../pages/NotFoundPage';
const router = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: 'order',
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path: 'product',
        page: ProductPage,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFoundPage,
    },
];
export default router;
