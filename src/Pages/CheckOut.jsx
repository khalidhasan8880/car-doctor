import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
    // hooks
    const {user} = useContext(AuthContext)
    const {_id, title, price, img} = useLoaderData()
    const id = useLoaderData()
    console.log(id);
    // submit Handler
    const orderHandler=(e)=>{
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
        const userEmail = user?.email
        const email = form.email.email;
        const date = form.date.email;
        const message = form.message.value;
        // object for post database
        const order = {
            service_id : _id,
            service_bill: price,
            service_name: title,
            customer_first_name:firstName,
            customer_last_name:lastName,
            userEmail,
            date,
            img,
            phone,
            email,
            message,
        }
        // post method at orderedCollection
        fetch('http://localhost:5000/ordered',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if (data.acknowledged) {
                Swal.fire(
                    'Order successful',
                    '',
                    'success'
                  )
            }
        })
    }
    

    return (
        <form onSubmit={orderHandler}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Phone</span>
                    </label>
                    <input type="tel" required name="phone" placeholder="Your Phone" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="text" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" defaultValue={price} readOnly placeholder="Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date"  className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6">
            <textarea name="message" placeholder="Your message" className="textarea mb-3 textarea-bordered textarea-lg w-full h-52" ></textarea>
                <button type="submit" className="btn btn-warning mb-3">Order Confirm</button>
            </div>
        </form>
    );
};

export default CheckOut;