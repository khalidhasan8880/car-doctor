import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import OrdersRow from "../Components/OrdersRow/OrdersRow";
import Swal from "sweetalert2";

const Orders = () => {
    // hooks
    const { user} = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    // 
    const url = `http://localhost:5000/ordered?userEmail=${user?.email}`;
    useEffect(() => {
        fetch(url).then(res => res.json())
        .then(data => setOrders(data))
}, [url])

const deleteHandler = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/ordered/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                        Swal.fire(
                            'Deleted!',
                            '',
                            'success'
                        )
                    }
                })

        }
    })
}

const orderConfirmHandler = (id) => {
    fetch(`http://localhost:5000/ordered/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ status: 'confirm' })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if (data.modifiedCount > 0) {
                const confirmed = orders.find(order=>order._id === id)
                const remaining = orders.filter(order=> order._id !== id)
              
                confirmed.status = 'confirm';
                const newOrders = [confirmed, ...remaining]
                setOrders(newOrders)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Order Confirmed',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        })
}
return (
    <div className="overflow-x-auto w-full">
        <table className="table w-full">
            <tbody>

                {
                    orders?.map(order => <OrdersRow
                        key={order._id}
                        orderConfirmHandler={orderConfirmHandler}
                        deleteHandler={deleteHandler}
                        order={order}>
                    </OrdersRow>)
                }
            </tbody>


        </table>
    </div>
);
};

export default Orders;