const CheckOut = () => {
    return (
        <form >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input type="text" placeholder="First Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input type="text" placeholder="Last Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Phone</span>
                    </label>
                    <input type="text" placeholder="Your Phone" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="text" placeholder="Your Email" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6">
            <textarea placeholder="Your message" className="textarea mb-3 textarea-bordered textarea-lg w-full h-52" ></textarea>
                <button className="btn btn-warning mb-3">Order Confirm</button>
            </div>
        </form>
    );
};

export default CheckOut;