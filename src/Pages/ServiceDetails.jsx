import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner";

const ServiceDetails = () => {
    const service = useLoaderData()
    console.log(service);
    return (
        <div>
            <Banner>Service Details</Banner>
            
        </div>
    );
};

export default ServiceDetails;