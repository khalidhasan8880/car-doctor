import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Banner";

const ServiceDetails = ({services}) => {
    const data = useLoaderData()
    
    const { img, description, facility, title, price } = useLoaderData()
    console.log(data);
    return (
        <div>
            <Banner>Service Details</Banner>
            <div className="flex gap-4 flex-col sm:flex-row">
                <div className="sm:w-4/6 w-full flex flex-col gap-y-5 px-5">
                    <img className="w-full rounded-lg" src={img} alt="" />
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="flex flex-wrap justify-center  gap-4">
                        {
                            facility.map((f, idx) => {
                                return (
                                    <div key={idx} className="card w-96 bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <h2 className="card-title">{f?.name}</h2>
                                            <p>{f?.details}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p></p>
                </div>
                <div className="sm:w-2/6 w-full bg-red-300">
                    a
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;