import React from 'react'
import Header from '../../Components/Header/Header';
import { db } from '../../db';
import { useStateProvider } from '../../StateProvider/StateProvider';
import Order from '../../Components/Order/Order';
import './Orders.css';

export default function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [{ user }, dispatch] = useStateProvider();

    React.useEffect(() => {
        db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(docs => setOrders(docs.docs.map(doc => ({ ...doc.data(), id: doc.id }))));
    }, [user])
    return (
        <React.Fragment>
            <Header />
            <div className="orders">
                <h1>Your orders</h1>
                <div className="orders__order">
                    {orders.map(order =>
                        <Order order={order} />
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}
