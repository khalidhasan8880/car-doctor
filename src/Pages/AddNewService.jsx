import { useRef, useState } from "react";

const AddNewService = () => {

    // hook
    const [facilities, setFacilities] = useState([])
    const facilityName = useRef()
    const facilityDetails = useRef()
    // handler
    const addServiceHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;

        const service = {
            name,
            price,
            title,
            facilities,
            img,
            description,
        }

        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    const addFacilityHandler = () => {
        const name = facilityName.current.value
        const details = facilityDetails.current.value
        const facility = { name, details }
        setFacilities([...facilities, facility])

    }
    return (
        <div>
            {/* facility */}
            <div className="my-5 grid sm:grid-cols-2 gap-5">
                <ul className="border-2 p-2 rounded-xl">
                    {
                        facilities.map((facility, idx) => {
                            return (
                                <li className="bg-orange-50 px-2 py-1 rounded-md m-2" key={idx}>
                                    <span className="font-semibold">Name:</span> {facility?.name}

                                    <br />
                                    
                                    <span className="font-semibold">Details:</span> {facility?.details}
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <label className="label">
                        <span className="label-text">Facility Name</span>
                    </label>
                    <input ref={facilityName} required type="text" name="facilityName" placeholder="Facility Name" className="input input-bordered block w-full" />
                    <label className="label">
                        <span className="label-text">Facility Details</span>
                    </label>
                    <input ref={facilityDetails} required type="text" name="facilityDetails" placeholder="Facility Details" className="input input-bordered  block w-full" />
                    <button onClick={addFacilityHandler} className="btn btn-warning mt-4">
                        {
                            facilities.length > 0 ? <>Add More Facility</> : <>Add Facility</>
                        }
                    </button>
                </div>
            </div>




            <form onSubmit={addServiceHandler}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input required type="text" name="name" placeholder="Service Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service price</span>
                        </label>
                        <input required type="number" name="price" placeholder="Service price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input required type="text" name="title" placeholder="Title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input required type="text" name="img" placeholder="Photo Url" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <textarea placeholder="Product Description" name="description" className="textarea mb-3 textarea-bordered textarea-lg w-full h-52" ></textarea>
                    <button type="submit" className="btn btn-warning mb-3">Submit</button>
                </div>
            </form>


            
        </div>
    );
};

export default AddNewService;