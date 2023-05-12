import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner";

const ServiceDetails = () => {
    const service = useLoaderData()
    console.log(service);
    return (
        <div>
            <Banner></Banner>
            service details page
        </div>
    );
};

export default ServiceDetails;