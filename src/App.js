import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';

let inInitial = true;

function App() {
    const dispatch = useDispatch();

    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notifications = useSelector((state) => state.ui.notification);

    useEffect(() => {
        // const sendCartData = async () => {
        //     // dispatch(
        //     //     uiActions.showNotification({
        //     //         status: 'pending',
        //     //         title: 'Sending...',
        //     //         message: 'Sending cart data!',
        //     //     }),
        //     // );
        //     // const response = await fetch('https://react-http-8c8b9-default-rtdb.firebaseio.com//cart.json', {
        //     //     method: 'PUT',
        //     //     body: JSON.stringify(cart),
        //     // });

        //     // if (!response.ok) {
        //     //     throw new Error('Sending cart data failed.');
        //     //     //   dispatch(
        //     //     //     uiActions.showNotification({
        //     //     //         status: 'error',
        //     //     //         title: 'Error!',
        //     //     //         message: 'Sending cart data failed!',
        //     //     //     }),
        //     //     // );
        //     // }

        //     // const responseData = await response.json();

        //     // dispatch(
        //     //     uiActions.showNotification({
        //     //         status: 'success',
        //     //         title: 'Success!',
        //     //         message: 'Sending cart data successfully!',
        //     //     }),
        //     // );

        // };

        // if (inInitial) {
        //     inInitial = false;
        //     return;
        // }

        // sendCartData().catch((error) => {
        //     dispatch(
        //         uiActions.showNotification({
        //             status: 'error',
        //             title: 'Error!',
        //             message: 'Sending cart data failed!',
        //         }),
        //     );
        // });
        if (inInitial) {
            inInitial = false;
            return;
        }
        dispatch(sendCartData(cart));
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notifications && (
                <Notification
                    status={notifications.status}
                    title={notifications.title}
                    message={notifications.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
