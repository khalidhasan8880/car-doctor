
const AddNewService = () => {
    
const addServiceHandler=(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const text = form.text.value;
    const type = form.type.value;
    const description = form.description.value;
    
    const service = {
        name,
        price,
        text,
        type,
        description,
    }
    
    fetch('http://localhost:5000/services',{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(service)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}

    return (
        <form onSubmit={addServiceHandler}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Service Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service price</span>
                    </label>
                    <input type="number" name="price"  placeholder="Service price" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Text Hare</span>
                    </label>
                    <input type="text" name="text" placeholder="Text Hare" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Type</span>
                    </label>
                    <input type="text" name="type" placeholder="Service Type" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6">
                <textarea placeholder="Product Description" name="description" className="textarea mb-3 textarea-bordered textarea-lg w-full h-52" ></textarea>
                <button type="submit" className="btn btn-warning mb-3">Submit</button>
            </div>
        </form>
    );
};

export default AddNewService;