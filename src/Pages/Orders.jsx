import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import OrdersRow from "../Components/OrdersRow/OrdersRow";

const Orders = () => {
    const { user,loading } = useContext(AuthContext)
    if (loading) {
        return <div className="text-4xl font-bold">Loading...</div>
    }
   
    console.log(user);
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/ordered?userEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    
console.log(orders);
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <tbody>
                   
                    {
                        orders?.map(order=> <OrdersRow key={order._id} order={order}></OrdersRow>)
                    }
                </tbody>
               

            </table>
        </div>
    );
};

export default Orders;