import { useLoaderData, useOutletContext, useParams} from "react-router-dom";

const ServiceDetails = () => {

    const setSelectedServiceId = useOutletContext()
    const {id} = useParams()
   
    if (id) {
        setSelectedServiceId(id)
    }else{
        setSelectedServiceId(null)
    }

    const { img, description, facility, title, } = useLoaderData()
    return (
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
    );
};

export default ServiceDetails;