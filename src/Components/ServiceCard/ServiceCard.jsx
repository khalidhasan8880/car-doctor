import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded-lg flex flex-col gap-y-5 justify-between px-3 py-3">
            <figure className=" pt-3">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <h2 className="font-bold text-1xl">{service.title}</h2>
            <div className="flex justify-between text-warning font-bold ">
                <p>Price : ${service.price}</ p>
                <Link to={`/service_details/${service._id}`}><AiOutlineArrowRight size={22} ></AiOutlineArrowRight></Link>
            </div>
        </div>
    );
};

export default ServiceCard;