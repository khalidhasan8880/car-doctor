import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Banner from "../Shared/Banner";
import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Service = () => {
    // hooks

    const [selectedServiceId, setSelectedServiceId] = useState(null)
    const [services, setServices] = useState([])
    const navigate = useNavigate()
    

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                // for showing initial or first service details  
                navigate(`/service/${data[0]?._id}`)
            })
    }, [])

    return (
        <div>
            <Banner>Service Details</Banner>
            <div className="flex gap-4 flex-col sm:flex-row">
                <Outlet context={setSelectedServiceId}></Outlet>
                <div className="sm:w-2/6 w-full ">
                    <div className="p-7">
                        <h3 className="text-3xl font-bold">Services</h3>
                        {
                            services.map(service => {
                                return (
                                    <NavLink key={service._id} className={({ isActive }) => (isActive ? 'flex items-center justify-between  py-2 px-4 my-2 font-semibold bg-warning text-black rounded-lg' : 'flex items-center justify-between text-warning  py-2 px-4 my-2 font-semibold hover:bg-warning hover:text-black rounded-lg')} to={`/service/${service._id}`}>{service.title}
                                        <AiOutlineArrowRight size={22}></AiOutlineArrowRight>
                                    </NavLink>

                                )
                            })
                        }
                    </div>

                    <div className="flex justify-center">
                        {
                            selectedServiceId ?
                                <Link  to={`/checkout/${selectedServiceId}`} className="btn btn-warning   ">Proceed Checkout</Link>
                                :
                                ''
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;